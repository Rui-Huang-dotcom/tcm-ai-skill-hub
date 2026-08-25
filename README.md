# TCM AI Skill Hub｜中医 AI 学习总入口

> **按学习任务选资料，按学派边界作回答，按来源给结论。**

这是一个面向中医学习者的 **TCM AI Skill Hub（总 Skill 入口）**。它不把教材、经典、课程讲义或任何医家项目的资料混为一谈；而是先识别你的学习目标，再把问题路由到合适的公开来源项目，帮助你以单一体系学习，或在明确标注来源的前提下进行跨学派比较。

它适合做四件事：查教材与经典、系统学习经典、追溯倪海厦课程原话、学习或比较不同医家的理论框架。它**不提供个人诊断、处方、剂量、针刺操作或急症处置建议**。

## 为什么需要一个“总 Skill”

普通 AI 在回答中医问题时，常会把教材结论、古籍原文、课程讲义和不同医家的观点混在一起。即使每个单独的 Skill 都有价值，学习者也仍需记住“这次该用哪一套资料”“两位医家的观点能不能放在一起谈”。

本项目的作用不是替代原作者的 Skill，而是提供一个稳定的学习入口：

1. **按任务选择资料范围**，而不是按仓库大小或宣传语选择。
2. **单一学派单独回答**，避免把一家之言误写成中医统一结论。
3. **跨学派并列对照**，明确列出相同点、差异与不可直接合并之处。
4. **关键结论要求溯源**，优先给出原项目、文件名、章节或原文位置。

## 重要说明：这是“路由器”，不是八套资料的镜像包

本仓库仅提供独立编写的选择规则、提问协议、来源目录和使用说明；**不复制、不镜像、不打包**下表原项目的完整内容、代码、提示词、课程材料或知识库。安装本 Skill 并不等于已经在你的 AI 平台中安装了全部八个原项目。

当你的平台允许加载多个本地 Skill 或 GitHub 项目时，请按原作者说明安装你要用的来源项目，再加载本仓库的 `SKILL.md` 作为总入口。若平台不支持多 Skill，你仍可把本仓库作为选题与提问规范，点击原项目链接分别安装或查阅。

> 公开仓库不必然允许复制或再发布。没有明确许可证时，默认版权规则可能限制复制、分发与衍生使用；因此本项目第一版只做导航、路由与使用协议。[1]

## 安装与快速开始

先安装 **TCM AI Skill Hub**，再按你当前的学习任务加载一个或两个来源项目。Hub 是“选择器和回答协议”，不是八个来源项目的镜像包；因此，**Hub 安装成功不代表八个项目的资料都已进入你的 AI**。

### 第一步：选择一种安装方式

#### 方式 A：让 Agent 直接从 GitHub 创建 / 加载（最适合非技术用户）

如果你使用的 Agent 或办公型 AI 支持读取 GitHub 项目，直接复制下面这段话发送给它：

```text
请根据这个 GitHub 项目创建并加载一个 Skill：
https://github.com/Rui-Huang-dotcom/tcm-ai-skill-hub
```

加载 Hub 后，再根据下方“选哪个项目”的说明，让 Agent 继续读取你需要的**原始项目**。例如，要学习倪海厦体系，可以继续发送：

```text
请再根据这个 GitHub 项目创建并加载来源 Skill：
https://github.com/jangviktor-web/nihaixia

之后回答中医学习问题时，请按 TCM AI Skill Hub 的规则：
标明资料范围与出处，并把课程体系观点和教材结论分开。
```

这也是最接近普通用户操作习惯的路径：**给地址 → 加载成功 → 用一个真实学习问题测试**。如果平台只支持上传文件，可下载本仓库的 `SKILL.md` 后上传，再按原作者 README 分别导入所需来源。

#### 方式 B：使用 `npx skills add` 安装（适合已使用 Claude Code、Cursor、Codex、OpenClaw 等 Agent 的用户）

本仓库根目录包含有效的 `SKILL.md`，可用通用 Skills CLI 从公开 GitHub 仓库安装：[2]

```bash
npx skills add Rui-Huang-dotcom/tcm-ai-skill-hub
```

也可以使用完整地址：

```bash
npx skills add https://github.com/Rui-Huang-dotcom/tcm-ai-skill-hub
```

常用选项如下；具体哪些 Agent 可被自动识别，以命令行的交互提示为准：

```bash
# 安装到当前项目中的 Claude Code
npx skills add Rui-Huang-dotcom/tcm-ai-skill-hub --agent claude-code

# 全局安装，让已支持的 Agent 在不同项目中都可使用
npx skills add Rui-Huang-dotcom/tcm-ai-skill-hub --global
```

> `npx skills add` 安装的是本 Hub 的选择规则。要让 Agent 实际读取某个来源项目，仍需按该项目自己的 README 继续安装或导入；不要因为安装了 Hub，就假定所有来源资料都已加载。

#### 方式 C：传统 GitHub 下载 / 克隆（适合任何平台）

有命令行时可克隆：

```bash
git clone https://github.com/Rui-Huang-dotcom/tcm-ai-skill-hub.git
```

没有命令行时，可在 GitHub 页面点击 **Code → Download ZIP**，解压后将 `SKILL.md` 上传或复制到你正在使用的 Agent 项目中。然后根据下表点击并安装相应来源项目。

### 第二步：先按学习任务选来源

| 你现在要完成的任务 | 建议选择 | 适合问什么 |
|---|---|---|
| 查教材概念、方剂、中药或经典出处 | [TCM.Skill](https://github.com/YuanZHAO321/TCM.Skill) | “请只按教材层资料解释某概念，并给出章节依据。” |
| 连续学习《伤寒论》《金匮要略》《温病条辨》等经典 | [TCM AI Tutor](https://github.com/William84132/tcm-ai-tutor) | “为我制定三周《伤寒论》学习计划，并安排每周复盘题。” |
| 找倪海厦课程的原话、截图或 PDF 页码 | [nihaisha-nishi-tcm](https://github.com/JuneYaooo/nihaisha-nishi-tcm) | “这句话在哪一课、哪一页？请给出截图或 PDF 位置。” |
| 梳理倪海厦课程体系中的六经、方证与辨证框架 | [倪海厦 Skill](https://github.com/jangviktor-web/nihaixia) | “按该体系梳理桂枝汤与麻黄汤的方证差异。” |
| 学胡希恕的六经八纲、方证对应 | [胡希恕 Skill](https://github.com/jangviktor-web/huxishu) | “以胡希恕体系比较两个相近方证。” |
| 学黄元御的一气周流、气机升降 | [黄元御 Skill](https://github.com/jangviktor-web/huangyuanyu) | “只在黄元御框架内说明气机升降的理论位置。” |
| 学吴鞠通的温病、三焦辨证、卫气营血 | [吴鞠通 Skill](https://github.com/jangviktor-web/wujutong) | “按三焦辨证梳理某一温病章节的病位与治法。” |
| 进阶研究李可医案与学术思路 | [李可 Skill](https://github.com/jangviktor-web/likeskill) | “仅做医案文献复盘，梳理该案的辨证链条与原文依据。” |

## 最容易选错的两组项目

### 先分清：TCM.Skill 与 TCM AI Tutor 不是同一种工具

它们都能帮助学习中医，但一个更像“带出处的资料检索台”，另一个更像“带练习与节奏的学习教练”。不必比较谁更大或谁更新；先看你当下想完成的是一次查询，还是一段连续学习。

| 如果你现在想…… | 优先选 | 为什么 | 可以这样问 |
|---|---|---|---|
| 查一个教材概念、方剂、中药或经典出处 | [TCM.Skill](https://github.com/YuanZHAO321/TCM.Skill) | 重点在教材查询、经典溯源和知识整理 | “本次只用教材层资料解释【概念】，并说明教材、章节和文件位置。” |
| 把《伤寒论》《金匮要略》或温病课程按章节学下去 | [TCM AI Tutor](https://github.com/William84132/tcm-ai-tutor) | 重点在学习路径、连续复习、医案训练与多学派视角 | “请按三周安排我的【书名】学习路径；每周给阅读任务、复盘题和错题回顾。” |
| 先有整体学习计划，再回头逐点核对教材和经典 | **两个都可用，但分工使用** | 先用 Tutor 安排路径，再用 TCM.Skill 查具体概念和出处 | 不要要求其中一个项目替代另一个的核心任务 |

一句话选择：**“我现在要查什么、出处在哪？”选 TCM.Skill；“我接下来几周怎么系统学？”选 TCM AI Tutor。**

### 两个倪海厦相关项目：一个查“原话在哪里”，一个学“体系怎么想”

这两个项目来自不同作者，解决的是不同问题；**不是谁更新、谁替代谁**。最简单的判断方法是：你要找证据，还是要学框架？

| 对比项 | [nihaisha-nishi-tcm](https://github.com/JuneYaooo/nihaisha-nishi-tcm) | [倪海厦 Skill / nihaixia](https://github.com/jangviktor-web/nihaixia) |
|---|---|---|
| 主要任务 | 找课程原话和证据 | 学习课程体系和辨证框架 |
| 资料入口 | 课程、课次、截图、PDF 页码 | 经典、本草、医案和讲义 |
| 最适合的问题 | “这句话在哪一课？”“这个说法的截图或 PDF 在哪？” | “这套体系如何比较两个方证？”“六经与方证框架怎样理解？” |
| 不适合替代 | 不以完整体系讲解为主要目标 | 不以定位某页截图或课程原话为主要目标 |

如果你想确认“老师到底有没有说过这句话、出自哪里”，先选 **nihaisha-nishi-tcm**；如果你已经接触课程，想理解“这一套体系怎么分析、怎么比较方证”，选 **nihaixia**。需要两者时，正确顺序是：**先用 nihaisha-nishi-tcm 找到课程证据，再用 nihaixia 做体系化学习；回答时标明两种来源各自承担的作用。**

> 无论选择哪一个，它们都只应用于课程学习和资料研究；不要把课程观点直接转化为个人诊断、处方或剂量判断。

### 第三步：用一个真实学习问题测试

不要一次装完八套。先选一套最贴合当前课程的来源，提出一个资料中应该有明确答案的问题；如果它能返回文件名、章节、原文位置或课程出处，才说明资料确实被调用。

```text
我在学《伤寒论》。请使用胡希恕体系，比较桂枝汤与麻黄汤的方证差异。
要求：只使用已加载的胡希恕资料；标出来源；不要把医家观点写成教材统一结论。
```

如果要比较两个体系，可以说：

```text
请比较胡希恕与黄元御对这个理论问题的解释。
要求：先分别陈述两家的观点和依据；再写共同点、分歧点；不能合并的地方请明确说明，不要得出个人诊疗建议。
```

更多示例见 [`docs/USAGE.md`](./docs/USAGE.md)，八个来源的逐项说明见 [`docs/PROJECT_CATALOG.md`](./docs/PROJECT_CATALOG.md)，完整路由逻辑见 [`SKILL.md`](./SKILL.md)。

## 八个公开来源项目

| 编号 | 项目 | 学习定位 | 原始链接 | 许可证/收录策略 |
|---:|---|---|---|---|
| 01 | TCM.Skill | 教材、方剂、中药与经典检索 | [GitHub](https://github.com/YuanZHAO321/TCM.Skill) | CC BY-NC 4.0；本仓库仅导航，不复制内容 |
| 02 | TCM AI Tutor | 经典学习路径、医案训练与多视角学习 | [GitHub](https://github.com/William84132/tcm-ai-tutor) | 未检测到明确许可证；仅导航 |
| 03 | nihaisha-nishi-tcm | 倪海厦课程原话、截图与 PDF 出处检索 | [GitHub](https://github.com/JuneYaooo/nihaisha-nishi-tcm) | 未检测到明确许可证；仅导航 |
| 04 | 倪海厦 Skill | 六经、方证与课程体系学习 | [GitHub](https://github.com/jangviktor-web/nihaixia) | 未检测到明确许可证；仅导航 |
| 05 | 胡希恕 Skill | 六经八纲与方证比较 | [GitHub](https://github.com/jangviktor-web/huxishu) | 未检测到明确许可证；仅导航 |
| 06 | 黄元御 Skill | 一气周流与气机升降 | [GitHub](https://github.com/jangviktor-web/huangyuanyu) | 未检测到明确许可证；仅导航 |
| 07 | 吴鞠通 Skill | 温病、三焦辨证与卫气营血 | [GitHub](https://github.com/jangviktor-web/wujutong) | MIT；本仓库仍只导航，不复制内容 |
| 08 | 李可 Skill | 进阶医案研究与理论复盘 | [GitHub](https://github.com/jangviktor-web/likeskill) | 未检测到明确许可证；仅导航 |

项目状态会变化。请以各原项目的 README、许可证文件和最新提交为准；收录审计记录见 [`audit/SOURCE_AUDIT.md`](./audit/SOURCE_AUDIT.md)。

## 回答质量协议

本总 Skill 要求回答遵循以下顺序：

1. **先定范围**：教材、经典、某位医家，还是跨学派比较。
2. **再定来源**：只使用用户已加载且明确选择的资料；未加载时提示安装或链接，不假装已读取。
3. **再给答案**：单一体系的回答必须标明体系；跨学派必须并列呈现。
4. **最后溯源**：关键结论尽量回到文件名、章节、条文、页码或原项目。

## 安全与使用边界

本仓库只服务于中医学习、资料检索、文献阅读、课程复习与医案研究。它不代替合格专业人员的面对面评估，也不用于个人诊断、开方、药物剂量判断、自行用药、急症处理或针刺操作。

## 贡献与纠错

欢迎通过 Issue 或 Pull Request 提交：失效链接、来源许可更新、项目新增、说明纠错，或更清晰的学习任务分类。请勿提交未经许可转载的课程、书籍全文、付费材料、项目文件或个人病例资料。详见 [`CONTRIBUTING.md`](./CONTRIBUTING.md)。

## 许可证

本仓库中由维护者独立撰写的导航、路由规则和文档以 [MIT License](./LICENSE) 发布。**这不改变任何原项目及其资料的版权和许可证。**

## References

[1]: https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository "GitHub Docs: Licensing a repository"
[2]: https://github.com/vercel-labs/skills/blob/main/README.md "Skills CLI: Install a Skill from GitHub"
