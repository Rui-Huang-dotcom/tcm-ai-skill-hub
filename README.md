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

## 快速开始

### 第一步：加载总 Skill

下载本仓库，并在你所使用的 AI Agent / Skill 平台中加载根目录的 [`SKILL.md`](./SKILL.md)。本文件不依赖某一个特定平台；若平台有自己的导入规范，请将其作为总提示词或工作流说明使用。

### 第二步：按你的学习任务选择来源

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

### 第三步：直接提问

将总 Skill 加载后，可以直接说：

```text
我在学《伤寒论》。请使用胡希恕体系，比较桂枝汤与麻黄汤的方证差异。
要求：只使用已加载的胡希恕资料；标出来源；不要把医家观点写成教材统一结论。
```

如果要比较两个体系，可以说：

```text
请比较胡希恕与黄元御对这个问题的理论解释。
要求：先分别陈述两家的观点和依据；再写共同点、分歧点；不能合并的地方请明确说明，不要得出个人诊疗建议。
```

更多示例见 [`docs/USAGE.md`](./docs/USAGE.md)，完整路由逻辑见 [`SKILL.md`](./SKILL.md)。

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
