# 一键安装全部中医 AI 学习模块

## 这项功能解决什么问题

以前，用户先装总 Hub，再分别安装 TCM、倪海厦、胡希恕、黄元御等来源项目，容易漏装也容易分不清。现在的“一键安装器”会在**一次执行**中完成三件事：安装总 Hub、从 8 个原作者 GitHub 地址克隆来源项目、把可发现的 Skill 安装到你指定的 Agent。

安装完成后，用户不需要记住“两个倪海厦”或“两个 TCM”项目名，只需直接提问：

```text
请用倪海厦的资料解释桂枝汤与麻黄汤的方证差异。
```

或者：

```text
请用 TCM 帮我安排《伤寒论》三周学习计划。
```

Hub 会按“默认简单模式”自动路由；需要严谨限定时，用户仍可写“只查课程原话”“只按教材层”等高级条件。

## 安装前准备

你的电脑需要具备以下条件：

| 条件 | 用途 |
|---|---|
| Git | 从各原作者公开仓库克隆来源项目 |
| Node.js 18 或更高版本（含 `npx`） | 运行安装器并将 Skill 安装到目标 Agent |
| 一个支持 Skill 的 Agent | 例如 Claude Code、Cursor、Codex、OpenCode 或 OpenClaw |
| 网络访问 | 下载公开 GitHub 来源项目 |

> 一键安装器不会将第三方项目的内容保存到 TCM AI Skill Hub 仓库。它会从每位原作者自己的公开地址直接把资料克隆到你的电脑；请在使用前分别阅读原项目 README、许可证和使用边界。

## 第一步：先预演

先运行不下载任何文件的预演，确认目标 Agent、保存路径和将要安装的来源：

```bash
npx github:Rui-Huang-dotcom/tcm-ai-skill-hub install-all --agent claude-code
```

将 `claude-code` 改为你实际使用的 Agent 名称。例如：

```bash
npx github:Rui-Huang-dotcom/tcm-ai-skill-hub install-all --agent cursor
npx github:Rui-Huang-dotcom/tcm-ai-skill-hub install-all --agent codex
npx github:Rui-Huang-dotcom/tcm-ai-skill-hub install-all --agent opencode
```

预演会列出 Hub、8 个来源项目与 TCM AI Tutor 的默认学习子模块；不会克隆、下载或修改你的 Agent。

## 第二步：确认后执行一次安装

确认预演无误后，在同一命令末尾加上 `--execute`：

```bash
npx github:Rui-Huang-dotcom/tcm-ai-skill-hub install-all --agent claude-code --execute
```

默认情况下，来源项目会被保存到：

```text
~/.tcm-ai-skill-hub/sources/
```

目录中会保留 8 个独立来源项目，便于核对作者、README 和资料文件。安装器还会生成：

```text
~/.tcm-ai-skill-hub/install-status.json
```

该状态文件记录每个模块的克隆和安装是否成功、使用的来源地址、失败原因及安装时间。若某一个来源失败，安装器会继续处理其余来源，并在最终摘要中报出失败步骤。

## 自定义保存目录

如果你希望把来源项目保存到指定位置，可使用 `--target`：

```bash
npx github:Rui-Huang-dotcom/tcm-ai-skill-hub install-all \
  --agent claude-code \
  --target ~/Documents/tcm-ai-sources \
  --execute
```

## 更新已安装来源

原作者更新项目后，可运行同一命令并加上 `--update`。安装器会对已有来源执行安全的快进更新，然后重新安装对应 Skill：

```bash
npx github:Rui-Huang-dotcom/tcm-ai-skill-hub install-all \
  --agent claude-code \
  --update \
  --execute
```

如果某个本地来源有你自己的未提交修改，`git pull --ff-only` 会拒绝覆盖它；安装器会记录失败原因，而不是强行删除你的文件。

## 默认安装清单

| 来源 | 安装定位 |
|---|---|
| TCM AI Skill Hub | 总入口、默认自动路由与高级精确模式 |
| TCM.Skill | 教材、方剂、中药与经典检索 |
| TCM AI Tutor | 默认安装“经典临床、黄帝内经、经典基础、诊疗基础、文档内化工具”五个中医学习模块 |
| nihaisha-nishi-tcm | 倪海厦课程原话、课次、截图与 PDF 证据检索 |
| nihaixia | 倪海厦六经、方证与体系学习 |
| 胡希恕 Skill | 六经八纲与方证比较 |
| 黄元御 Skill | 一气周流与气机升降 |
| 吴鞠通 Skill | 温病、三焦辨证与卫气营血 |
| 李可 Skill | 进阶医案与理论研究 |

## 安装后的使用方式

安装器只解决“所有模块一次装好”的问题；你还需要在目标 Agent 中确认 Skill 已启用。之后使用时，不必再逐一指定 8 个项目。

| 你的自然语言提问 | Hub 的默认处理 |
|---|---|
| “请用倪海厦解释……” | 优先调用体系学习资料；需要证据时再查课程出处，并分开标注 |
| “倪海厦这句话在哪一课？” | 优先调用课程出处检索资料 |
| “请用 TCM 解释……” | 优先调用教材与经典检索资料 |
| “请用 TCM 安排三周学习计划” | 优先调用系统学习资料；需要时再核验具体出处 |
| “请比较胡希恕与黄元御……” | 由 Hub 并列调用两套医家资料，并列出依据、差异与不可合并之处 |

## 常见问题

### 它是否等于把 8 套资料打包进 Hub 仓库？

不是。Hub 仓库只包含安装器、来源清单和路由规则。执行安装后，8 个项目从各原作者的地址分别克隆到你的电脑。因此用户端可以一次装齐，来源归属和更新路径仍保持独立。

### 只运行预演，为什么什么都没有安装？

这是刻意的安全设计。安装器默认只显示计划；只有显式加上 `--execute` 后，才会下载来源项目和修改 Agent 的 Skill 目录。

### 能否只安装 8 个来源而不安装 Hub？

可以加上 `--skip-hub`，但不推荐。没有 Hub，你仍可单独使用来源项目，却没有“倪海厦 / TCM”自动聚合、默认简单模式、来源标注和跨学派比较规则。

### 安装失败怎么办？

打开 `install-status.json` 查看失败项目和错误信息。常见原因包括网络、Git/Node 未安装、目标 Agent 名称不正确，或某个来源项目的结构发生变化。请在对应原项目的 README 中核对最新安装说明，再将失败信息提交到本仓库 Issue。

## References

[1]: https://github.com/vercel-labs/skills/blob/main/README.md "Skills CLI：从 GitHub 与本地路径安装 Agent Skills"
