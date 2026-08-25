# 安装方式核验记录

核验日期：2026-08-25（GMT+8）

## 本仓库可提供的安装路径

### 1. Agent 直接加载 GitHub 项目

适用于支持“根据 GitHub 项目创建 / 安装 Skill”的 Agent 平台。用户可向 Agent 提供仓库地址并提出创建或加载请求。此方式不绑定某个平台，适合不希望使用命令行的学习者。

示例提示：

```text
请根据这个 GitHub 项目创建并加载一个 Skill：
https://github.com/Rui-Huang-dotcom/tcm-ai-skill-hub
```

### 2. `npx skills add` 命令行安装

`vercel-labs/skills` 的官方 README 显示，公开 GitHub 仓库可使用所有者/仓库短写法或完整 GitHub URL 作为来源；根目录含有效 `SKILL.md` 的仓库会被发现为 Skill。该 CLI 支持交互安装、指定 Agent、项目级或全局范围。

本仓库根目录含有符合条件的 `SKILL.md`，因此建议命令为：

```bash
npx skills add Rui-Huang-dotcom/tcm-ai-skill-hub
```

或：

```bash
npx skills add https://github.com/Rui-Huang-dotcom/tcm-ai-skill-hub
```

可选参数示例：

```bash
# 安装到当前项目中指定的 Agent
npx skills add Rui-Huang-dotcom/tcm-ai-skill-hub --agent claude-code

# 全局安装，适用于已支持的 Agent
npx skills add Rui-Huang-dotcom/tcm-ai-skill-hub --global
```

### 3. GitHub 克隆/下载

任何平台都可先克隆仓库，再将 `SKILL.md` 交给其支持的 Agent 或作为项目说明导入：

```bash
git clone https://github.com/Rui-Huang-dotcom/tcm-ai-skill-hub.git
```

不具备命令行条件的用户也可通过 GitHub 网页的 Code → Download ZIP 下载，再解压并上传 `SKILL.md`。

## 来源项目的安装方式核验

- `jangviktor-web/huxishu` README 列出 `openclaw skills install @jangviktor-web/huxishu`、腾讯 Skillhub/Agent 指令与 `git clone`。
- `jangviktor-web/huangyuanyu` README 列出 `openclaw skills install @jangviktor-web/huangyuanyu`、`npx skills add https://clawhub.ai/jangviktor-web/skills/huangyuanyu`、腾讯 Skillhub/Agent 指令与 `git clone`。
- `jangviktor-web/likeskill` README 列出 `clawhub install like`、`openclaw skills install like`、OpenClawMP 安装命令与 `git clone`。

本仓库不把这些来源项目的专用安装命令泛化为全部八个项目均可用。用户安装来源项目时，须以相应原作者 README 为准。

## 参考链接

- [Skills CLI 官方 README](https://github.com/vercel-labs/skills/blob/main/README.md)
- [胡希恕 Skill README](https://github.com/jangviktor-web/huxishu)
- [黄元御 Skill README](https://github.com/jangviktor-web/huangyuanyu)
- [李可 Skill README](https://github.com/jangviktor-web/likeskill)
