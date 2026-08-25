# 原始项目审计摘要

审计日期：2026-08-25（GMT+8）  
审计方式：读取项目公开仓库的元数据、README 与许可证端点。  
目的：决定总 Skill 是否仅提供导航与路由，或可直接收录原项目内容。

| 编号 | 原项目 | 主要用途（独立概述） | 项目许可证状态 | 本仓库处理方式 |
|---|---|---|---|---|
| 01 | [TCM.Skill](https://github.com/YuanZHAO321/TCM.Skill) | 教材、方剂、中药、经典资料的检索与学习 | CC BY-NC 4.0 | 仅列出原链接与独立概述；不复制项目资料或提示词 |
| 02 | [TCM AI Tutor](https://github.com/William84132/tcm-ai-tutor) | 经典学习路径、医案训练与多视角学习 | 未检测到明确许可证 | 仅列出原链接与独立概述；不复制项目资料或提示词 |
| 03 | [nihaisha-nishi-tcm](https://github.com/JuneYaooo/nihaisha-nishi-tcm) | 倪海厦课程原话、截图与 PDF 出处检索 | 未检测到明确许可证 | 仅列出原链接与独立概述；不复制项目资料或提示词 |
| 04 | [nihaixia](https://github.com/jangviktor-web/nihaixia) | 倪海厦课程体系、六经、方证与辨证框架 | 未检测到明确许可证 | 仅列出原链接与独立概述；不复制项目资料或提示词 |
| 05 | [huxishu](https://github.com/jangviktor-web/huxishu) | 胡希恕六经八纲与方证比较 | 未检测到明确许可证 | 仅列出原链接与独立概述；不复制项目资料或提示词 |
| 06 | [huangyuanyu](https://github.com/jangviktor-web/huangyuanyu) | 黄元御一气周流与气机升降体系 | 未检测到明确许可证 | 仅列出原链接与独立概述；不复制项目资料或提示词 |
| 07 | [wujutong](https://github.com/jangviktor-web/wujutong) | 吴鞠通温病、三焦辨证与卫气营血学习 | MIT | 仅列出原链接与独立概述；不复制项目内容。若未来打包，须保留 MIT 版权与许可文本 |
| 08 | [likeskill](https://github.com/jangviktor-web/likeskill) | 李可医案与理论的进阶研究 | 未检测到明确许可证 | 仅列出原链接与独立概述；不复制项目资料或提示词 |

## 结论

本仓库第一版采用 **链接目录 + 学习任务路由 + 统一问答协议**，不镜像、不打包、不再发布任何原项目的完整资料、提示词、代码、引用文本或安装包。这样既可让用户通过一个入口快速选择与对比来源，也避免把公开可见误认为可自由再分发。

若后续要做“单次安装后自动下载来源项目”的本地引导脚本，脚本应只包含源仓库 URL，并由用户在自己的环境中显式执行。该模式仍不等同于本仓库获得了再分发权；正式打包前应逐项复核许可或取得作者书面授权。

## 来源

- GitHub Docs: [Licensing a repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)
- 上表每项均链接至对应原作者公开仓库。
