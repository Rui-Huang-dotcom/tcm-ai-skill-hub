#!/usr/bin/env node

'use strict';

const { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } = require('node:fs');
const { homedir } = require('node:os');
const { basename, dirname, join, resolve } = require('node:path');
const { spawnSync } = require('node:child_process');

const PACKAGE_ROOT = resolve(__dirname, '..');
const MANIFEST_PATH = join(PACKAGE_ROOT, 'installer', 'sources.json');
const manifest = JSON.parse(readFileSync(MANIFEST_PATH, 'utf8'));

function usage() {
  console.log(`
TCM AI Skill Hub 一键安装器

用途：一次执行，将总 Hub 与八个公开来源项目分别克隆到本地，并安装到指定 Agent。
默认只预演，不会下载或修改任何文件。

用法：
  npx github:Rui-Huang-dotcom/tcm-ai-skill-hub install-all --agent <agent> --execute

常用示例：
  # 先预演，查看会安装哪些项目
  npx github:Rui-Huang-dotcom/tcm-ai-skill-hub install-all --agent claude-code

  # 确认后执行，安装到默认目录 ~/.tcm-ai-skill-hub
  npx github:Rui-Huang-dotcom/tcm-ai-skill-hub install-all --agent claude-code --execute

  # 指定本地保存目录
  npx github:Rui-Huang-dotcom/tcm-ai-skill-hub install-all --agent cursor --target ~/tcm-skills --execute

选项：
  --agent <name>      目标 Agent，例如 claude-code、cursor、codex、opencode、openclaw。
  --target <path>     来源项目的本地保存目录；默认 ~/.tcm-ai-skill-hub。
  --execute           执行克隆与安装；未提供时仅预演。
  --update            本地已有来源时执行 git pull --ff-only，再重新安装。
  --skip-hub          不安装总 Hub，只安装八个来源项目。
  --help              显示帮助。

重要说明：
  - 本工具不会把第三方项目内容打包进 TCM AI Skill Hub 仓库。
  - 资料会从各原作者公开 GitHub 地址直接克隆到你的电脑。
  - 你应先阅读各原项目的 README、许可证与使用边界；本工具不绕过原作者设置。
  - 安装完成后，请在 Agent 中先加载/启用已安装的 Skill，再使用“倪海厦”“TCM”等总入口提问。
`);
}

function parseArgs(argv) {
  const options = {
    command: argv[0] || 'help',
    agent: null,
    target: join(homedir(), '.tcm-ai-skill-hub'),
    execute: false,
    update: false,
    skipHub: false,
  };

  for (let index = 1; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === '--agent') options.agent = argv[++index] || null;
    else if (arg === '--target') options.target = argv[++index] || null;
    else if (arg === '--execute') options.execute = true;
    else if (arg === '--update') options.update = true;
    else if (arg === '--skip-hub') options.skipHub = true;
    else if (arg === '--help' || arg === '-h') options.command = 'help';
    else throw new Error(`未知参数：${arg}`);
  }

  options.target = resolve(options.target || join(homedir(), '.tcm-ai-skill-hub'));
  return options;
}

function commandExists(command) {
  const result = spawnSync(command, ['--version'], { stdio: 'ignore' });
  return result.status === 0;
}

function run(command, args, { cwd, dryRun = false } = {}) {
  const display = [command, ...args].map((value) => (String(value).includes(' ') ? JSON.stringify(value) : value)).join(' ');
  console.log(`  $ ${display}`);
  if (dryRun) return { ok: true, skipped: true };

  const result = spawnSync(command, args, {
    cwd,
    encoding: 'utf8',
    stdio: ['inherit', 'inherit', 'pipe'],
  });

  if (result.status !== 0) {
    const detail = (result.stderr || '').trim();
    return { ok: false, error: detail || `${command} 返回状态 ${result.status}` };
  }
  return { ok: true };
}

function writeStatus(target, status) {
  mkdirSync(target, { recursive: true });
  writeFileSync(join(target, 'install-status.json'), `${JSON.stringify(status, null, 2)}\n`, 'utf8');
}

function sourceDirectory(target, source) {
  return join(target, 'sources', source.id);
}

function cloneOrUpdateSource(source, target, options) {
  const destination = sourceDirectory(target, source);
  if (existsSync(destination)) {
    if (!options.update) {
      console.log(`  ↷ 已存在，跳过克隆：${source.name}`);
      return { ok: true, path: destination, action: 'existing' };
    }
    console.log(`  ↻ 更新已有来源：${source.name}`);
    const pull = run('git', ['-C', destination, 'pull', '--ff-only'], { dryRun: false });
    return { ...pull, path: destination, action: 'updated' };
  }

  mkdirSync(dirname(destination), { recursive: true });
  const clone = run('git', ['clone', '--depth', '1', '--branch', source.defaultBranch, source.repository, destination], {
    dryRun: options.dryRun,
  });
  return { ...clone, path: destination, action: 'cloned' };
}

function installWithSkillsCli(source, localPath, options) {
  const args = ['--yes', 'skills', 'add', localPath, '--agent', options.agent];
  if (source.installMode === 'selected-skills') {
    for (const skill of source.skills) args.push('--skill', skill);
  }
  return run('npx', args, { dryRun: options.dryRun });
}

function installHub(options) {
  const source = { id: manifest.hub.id, name: manifest.hub.name, installMode: 'root-skill' };
  return installWithSkillsCli(source, PACKAGE_ROOT, options);
}

function printPlan(options) {
  console.log('\n将执行以下安装计划：');
  console.log(`- 总 Hub：${manifest.hub.name}`);
  console.log(`- 目标 Agent：${options.agent || '未选择'}`);
  console.log(`- 来源本地目录：${options.target}`);
  console.log(`- 来源项目数量：${manifest.sources.length}`);
  for (const source of manifest.sources) {
    const extra = source.installMode === 'selected-skills' ? `；选择 ${source.skills.join('、')}` : '';
    console.log(`  - ${source.name}：${source.purpose}${extra}`);
  }
}

function main() {
  let options;
  try {
    options = parseArgs(process.argv.slice(2));
  } catch (error) {
    console.error(`参数错误：${error.message}`);
    usage();
    process.exitCode = 1;
    return;
  }

  if (options.command === 'help' || options.command !== 'install-all') {
    usage();
    process.exitCode = options.command === 'help' ? 0 : 1;
    return;
  }

  if (!options.agent) {
    console.error('\n缺少 --agent。请指定目标 Agent，例如 --agent claude-code。');
    usage();
    process.exitCode = 1;
    return;
  }

  options.dryRun = !options.execute;
  printPlan(options);

  if (options.dryRun) {
    console.log('\n这是预演，没有下载或安装任何内容。确认后，在同一命令末尾加上 --execute。');
    return;
  }

  if (!commandExists('git')) {
    console.error('\n未检测到 git。请先安装 Git，再重试。');
    process.exitCode = 1;
    return;
  }
  if (!commandExists('npx')) {
    console.error('\n未检测到 npx。请先安装 Node.js（含 npm/npx），再重试。');
    process.exitCode = 1;
    return;
  }

  console.log('\n开始安装。第三方来源将直接从各原作者 GitHub 地址克隆到你的电脑。\n');
  const status = {
    schemaVersion: 1,
    hub: manifest.hub,
    target: options.target,
    agent: options.agent,
    installedAt: new Date().toISOString(),
    mode: options.update ? 'update' : 'install',
    results: [],
  };

  if (!options.skipHub) {
    console.log(`安装总 Hub：${manifest.hub.name}`);
    const result = installHub(options);
    status.results.push({ id: manifest.hub.id, name: manifest.hub.name, stage: 'skill-install', ...result });
  }

  for (const source of manifest.sources) {
    console.log(`\n处理来源：${source.name}`);
    const clone = cloneOrUpdateSource(source, options.target, options);
    status.results.push({ id: source.id, name: source.name, stage: 'source-clone', repository: source.repository, ...clone });

    if (!clone.ok) {
      console.error(`  ! 克隆或更新失败：${clone.error}`);
      continue;
    }

    const install = installWithSkillsCli(source, clone.path, options);
    status.results.push({ id: source.id, name: source.name, stage: 'skill-install', ...install });
    if (!install.ok) console.error(`  ! Skill 安装失败：${install.error}`);
  }

  writeStatus(options.target, status);
  const failed = status.results.filter((item) => !item.ok);
  const sourceInstalls = status.results.filter((item) => item.stage === 'skill-install' && item.id !== manifest.hub.id);
  const successful = sourceInstalls.filter((item) => item.ok).length;

  console.log('\n安装结束。');
  console.log(`- 成功安装来源模块：${successful}/${manifest.sources.length}`);
  console.log(`- 失败步骤：${failed.length}`);
  console.log(`- 状态文件：${join(options.target, 'install-status.json')}`);
  console.log('\n下一步：在目标 Agent 中启用已安装的 Skill，然后直接用“倪海厦”“TCM”或医家名称开始学习。');

  if (failed.length > 0) process.exitCode = 2;
}

main();
