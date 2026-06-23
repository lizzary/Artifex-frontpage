// Centralised UI strings for Artifex landing page.
// Default language: English. Chinese is opt-in.
// Components consume via the `useLang()` hook → `s.<section>.<key>`.

export const STRINGS = {
    en: {
        nav: {
            features: "Features",
            showcase: "Preview",
            stack: "Tech",
            quickstart: "Get started",
            download: "Download",
            github: "GitHub",
        },
        hero: {
            badge: "Crafted for ComfyUI creators · Fully local · Zero telemetry",
            line1: "Elegantly",
            line2Accent: "curate your",
            line3: "AI-generated gallery",
            subtitle:
                "Artifex parses the ComfyUI workflow metadata embedded in every PNG (model, prompt, LoRA, seed, …), auto-tags with a local vision model, and gives you colour-grouped views, FTS5 search, and a keyboard-driven lightbox — for thousands of images, kept effortlessly light.",
            ctaDownload: "Download for Windows",
            ctaDownloadSub: "Artifex_Win64.zip",
            ctaGithub: "View on GitHub",
            trust: {
                mit: "MIT licensed",
                gpu: "CUDA / CPU auto",
                portable: "Single-binary portable",
            },
            metadataChip: "DPM++ 2M Karras · 28 steps · CFG 7",
            marquee: [
                "ComfyUI Metadata",
                "WD EVA02 Tagger",
                "SQLite FTS5",
                "Colour Grouping",
                "Lightbox + Multi-select",
                "CUDA / CPU Fallback",
                "PNG tEXt / iTXt Parser",
                "Local · No Cloud · No Telemetry",
            ],
        },
        features: {
            eyebrow: "Capabilities",
            titlePrefix: "Tools built for ",
            titleAccent: "vast generation libraries",
            titleSuffix: "",
            subtitle:
                "Artifex isn't just a viewer — it's the workbench that ties metadata, tagging, search and visual grouping into a single cohesive workflow.",
            items: [
                {
                    title: "Mutually-exclusive colour grouping",
                    desc:
                        "Define ordered keyword-pair rules; each image lands in the first matching group, rendered as a coloured, collapsible container — thousands of images sorted by theme at a glance.",
                    tag: "Signature",
                },
                {
                    title: "Local AI auto-tagging",
                    desc:
                        "Built-in WD EVA02-Large Tagger v3 via ONNX Runtime. CUDA acceleration when available; automatic CPU fallback on machines without a supported GPU.",
                    tag: "AI",
                },
                {
                    title: "Full-text FTS5 search",
                    desc:
                        "SQLite FTS5 with prefix matching — type \"suns\" to instantly hit sunset / sunshine / sunlight. Millisecond response across the entire library.",
                    tag: "Fast",
                },
                {
                    title: "ComfyUI metadata extraction",
                    desc:
                        "From-scratch PNG tEXt/iTXt parser recovers model, positive/negative prompts, seed, sampler, scheduler, full LoRA chain — without ComfyUI being installed.",
                    tag: "Native",
                },
                {
                    title: "Custom tag editing",
                    desc:
                        "Open the lightbox details panel, click the pencil to edit. Autocomplete suggestions are drawn from every existing tag in your library; saves are instantly searchable.",
                },
                {
                    title: "Groups & covers",
                    desc:
                        "Organise images into albums (Groups) with live counts and cover images. Deleting a group cascades to remove its files — clean and decisive.",
                },
                {
                    title: "Keyboard multi-select & batch ops",
                    desc:
                        "Click to view, Ctrl+Click to toggle, Shift+Click for range selection. Batch download (with custom naming) or batch delete in one action.",
                },
                {
                    title: "Configurable download naming",
                    desc:
                        "Compose filenames from placeholders like <Model>, <Seed>, <Steps>, <Sampler>, <Resolution>, <Group>… resolved per-image at download time.",
                },
                {
                    title: "Polished details",
                    desc:
                        "Dark / light themes · English / 中文 toggle without reload · three-tier thumbnails generated on demand · 50 / 100 / … / All page sizes.",
                },
            ],
        },
        showcase: {
            eyebrow: "Preview",
            titlePrefix: "Every detail, ",
            titleAccent: "carefully polished",
            titleSuffix: "",
            subtitle:
                "Switch tabs to explore the interface. All screenshots are from a real running build.",
            tabs: [
                {
                    key: "groups",
                    label: "Colour grouping",
                    caption:
                        "Mutually-exclusive keyword rules — each image lands in the first matching group, rendered as a coloured container.",
                },
                {
                    key: "lightbox",
                    label: "Lightbox + metadata",
                    caption:
                        "Press Ctrl+D to expand the details panel — every ComfyUI workflow field is recovered.",
                },
                {
                    key: "search",
                    label: "Global search",
                    caption:
                        "FTS5 prefix matching across tags and prompts — millisecond response, full-library scope.",
                },
                {
                    key: "tagedit",
                    label: "Tag editing",
                    caption:
                        "Edit tags inline from the lightbox; autocomplete draws from every tag in your library.",
                },
                {
                    key: "tags",
                    label: "Tag browser",
                    caption:
                        "/tags lists every unique tag with its occurrence count — a vocabulary map of your gallery.",
                },
                {
                    key: "batch",
                    label: "Batch selection",
                    caption:
                        "Ctrl+Click to single-select, Shift+Click for ranges. Batch download or delete in one go.",
                },
            ],
        },
        stack: {
            eyebrow: "Under the hood",
            titlePrefix: "Pure, restrained, ",
            titleAccent: "portable",
            titleSuffix: "",
            subtitle:
                "One .exe + one DLL + an embedded frontend. No installer, no Electron, no cloud dependency.",
            rows: [
                { layer: "Frontend",    what: "React + custom colour-grouping renderer; keyboard-driven multi-select lightbox" },
                { layer: "Backend",     what: "Go · chi router · single static binary serving the embedded frontend" },
                { layer: "Storage",     what: "SQLite + FTS5 virtual tables — prefix full-text search" },
                { layer: "Auto-tagger", what: "ONNX Runtime + WD EVA02-Large Tagger v3 · CUDA / CPU automatic fallback" },
                { layer: "Metadata",    what: "Custom PNG tEXt / iTXt parser — works without ComfyUI installed" },
                { layer: "Thumbnails",  what: "400 / 1200 / original three-tier quality, lazily generated on first access" },
                { layer: "Packaging",   what: "Portable ZIP — binary + DLL + frontend in one directory, no installer" },
                { layer: "i18n",        what: "Built-in English / 中文 — switchable at runtime without page reload" },
            ],
            kv: [
                { label: "Build artifacts", value: "Artifex.exe + onnxruntime.dll" },
                { label: "Binary size",     value: "~ 30 MB" },
                { label: "Optional model",  value: "~ 800 MB (HuggingFace)" },
                { label: "Default port",    value: "127.0.0.1:8000" },
            ],
        },
        quickstart: {
            eyebrow: "Get started",
            titlePrefix: "Three steps to your ",
            titleAccent: "local gallery",
            titleSuffix: "",
            subtitle:
                "Want it instant? Download the Release. Prefer to build? Follow the source-build path with Go / Node.",
            tabRelease: "Release (recommended)",
            tabSource: "Build from source",
            release: {
                steps: [
                    { n: "01", title: "Download",      desc: "Grab the latest Artifex_Win64.zip from GitHub Releases." },
                    { n: "02", title: "Extract & run", desc: "Unzip anywhere and double-click Artifex.exe." },
                    { n: "03", title: "Open in browser", descNode: ["Visit ", "127.0.0.1:8000", " to start uploading and browsing."] },
                    { n: "04", title: "(Optional) Get the model", desc: "Settings → Model Management → Download Model — a one-time ~800 MB fetch." },
                ],
                stepLabel: "STEP",
            },
            source: {
                reqsLabel: "Requirements",
                reqs: [
                    { k: "Go",                  v: "1.26+" },
                    { k: "Node.js",             v: "20 LTS" },
                    { k: "GCC / MinGW-w64",     v: "Optional · needed for ONNX tagger" },
                    { k: "OS",                  v: "Windows / Linux" },
                ],
                terminalLabel: "shell — build from source",
                copy: "Copy",
                copied: "Copied",
            },
            ctaRelease: "Open Releases page",
            ctaGithub: "Star on GitHub",
        },
        cta: {
            eyebrow: "Ready when you are",
            titlePrefix: "Trust your work to ",
            titleAccent: "Artifex",
            titleSuffix: "",
            subtitle:
                "Fully local · single-binary deployment · MIT licensed — five minutes to spin up your own ComfyUI gallery.",
            download: "Download now",
            github: "Open the repository",
        },
        footer: {
            tagline:
                "A local gallery for ComfyUI creators. Workflow metadata extraction, local auto-tagging, colour grouping, FTS5 search — thousands of images, kept in order.",
            sectionProject: "Project",
            sectionResources: "Resources",
            links: {
                repo: "GitHub repository",
                releases: "Releases",
                license: "License (MIT)",
                issues: "Issues",
                readme: "README",
                readmeZh: "中文说明",
                tagger: "WD EVA02 Tagger",
                comfyui: "ComfyUI",
            },
            copyright: "© {year} Artifex. MIT Licensed. Built with care for the ComfyUI community.",
            madeBy: "Made with",
            madeBySuffix: "by Lizzary",
        },
        common: {
            languageLabel: "Language",
        },
    },

    zh: {
        nav: {
            features: "特性",
            showcase: "预览",
            stack: "技术栈",
            quickstart: "快速开始",
            download: "下载",
            github: "GitHub",
        },
        hero: {
            badge: "专为 ComfyUI 创作者打造 · 完全本地 · 零遥测",
            line1: "优雅地",
            line2Accent: "管理你的",
            line3: "AI 生成画廊",
            subtitle:
                "Artifex 自动解析 ComfyUI 嵌入在 PNG 中的工作流元数据（模型、Prompt、LoRA、Seed…），用本地视觉模型自动打标，并提供颜色分组、FTS5 全文搜索和键盘驱动的灯箱浏览 —— 数千张作品，依旧轻盈如初。",
            ctaDownload: "下载 Windows 版",
            ctaDownloadSub: "Artifex_Win64.zip",
            ctaGithub: "查看 GitHub",
            trust: {
                mit: "MIT 开源",
                gpu: "CUDA / CPU 自适应",
                portable: "单文件便携部署",
            },
            metadataChip: "DPM++ 2M Karras · 28 steps · CFG 7",
            marquee: [
                "ComfyUI 元数据",
                "WD EVA02 Tagger",
                "SQLite FTS5",
                "颜色分组",
                "灯箱 + 多选",
                "CUDA / CPU 回退",
                "PNG tEXt / iTXt 解析",
                "本地 · 无云 · 零遥测",
            ],
        },
        features: {
            eyebrow: "Capabilities",
            titlePrefix: "为",
            titleAccent: "海量生成图",
            titleSuffix: "而生的工具",
            subtitle:
                "Artifex 不只是一个查看器 —— 它是把元数据、标签、搜索与可视化分组串起来的完整工作台。",
            items: [
                {
                    title: "互斥颜色分组",
                    desc:
                        "定义有序的关键词对规则，每张图片自动落入第一个命中的组，可折叠、可配色 —— 数千张作品一眼分清主题。",
                    tag: "Signature",
                },
                {
                    title: "本地 AI 自动打标",
                    desc:
                        "内置 WD EVA02-Large Tagger v3 通过 ONNX Runtime 运行，自动识别可用 CUDA 加速；无 GPU 时自动回退 CPU。",
                    tag: "AI",
                },
                {
                    title: "FTS5 全局搜索",
                    desc:
                        "基于 SQLite FTS5 的前缀匹配 —— 输入 \"suns\" 同时命中 sunset / sunshine / sunlight，毫秒级响应。",
                    tag: "Fast",
                },
                {
                    title: "ComfyUI 元数据解析",
                    desc:
                        "从零实现的 PNG tEXt/iTXt 解析器，无需安装 ComfyUI 即可还原 模型 / 正负向 Prompt / Seed / Sampler / LoRA 链。",
                    tag: "Native",
                },
                {
                    title: "自定义标签编辑",
                    desc:
                        "灯箱里铅笔图标进入编辑模式，自动补全建议来自全库标签字典；保存即可被搜索、筛选与分组复用。",
                },
                {
                    title: "组与封面",
                    desc:
                        "把图片组织成专辑（Group），每个组有实时计数和封面；删除组会级联清理底层文件，干净利落。",
                },
                {
                    title: "键鼠多选 · 批处理",
                    desc:
                        "Click 看图，Ctrl+Click 单选，Shift+Click 范围选；选中后可批量下载（含命名模板）或批量删除。",
                },
                {
                    title: "可配置下载命名",
                    desc:
                        "用 <Model> / <Seed> / <Steps> / <Sampler> / <Resolution> 等占位符自定义模板，下载时按图实例化。",
                },
                {
                    title: "细节体验",
                    desc:
                        "深色 / 浅色主题 · 简中 / English 切换无需刷新 · 三档缩略图按需懒生成 · 50/100/.../All 分页。",
                },
            ],
        },
        showcase: {
            eyebrow: "Preview",
            titlePrefix: "每一处细节，都被",
            titleAccent: "认真打磨",
            titleSuffix: "",
            subtitle: "切换标签预览不同功能；图片皆来自真实运行截图。",
            tabs: [
                { key: "groups",   label: "颜色分组",     caption: "互斥关键词规则，每张图落入第一个命中的组并以颜色容器区隔。" },
                { key: "lightbox", label: "灯箱 + 元数据", caption: "Ctrl+D 展开详情面板，完整还原 ComfyUI 工作流字段。" },
                { key: "search",   label: "全局搜索",     caption: "FTS5 前缀匹配，跨标签 / Prompt 全文检索 —— 毫秒响应。" },
                { key: "tagedit",  label: "标签编辑",     caption: "在灯箱里直接编辑标签，自动补全来自全库字典。" },
                { key: "tags",     label: "标签浏览器",   caption: "/tags 页列出全库唯一标签与出现次数，是一份关于你画廊的「词云」。" },
                { key: "batch",    label: "批量选择",     caption: "Ctrl+Click 单选 / Shift+Click 范围选，批量下载或删除一气呵成。" },
            ],
        },
        stack: {
            eyebrow: "Under the hood",
            titlePrefix: "纯粹、克制、",
            titleAccent: "可移植",
            titleSuffix: "",
            subtitle: "一个 .exe + 一个 DLL + 嵌入式前端。没有安装器，没有 Electron，没有云端依赖。",
            rows: [
                { layer: "Frontend",    what: "React + 自定义颜色分组渲染器；键盘驱动多选灯箱" },
                { layer: "Backend",     what: "Go · chi router · 单文件二进制内嵌前端" },
                { layer: "Storage",     what: "SQLite + FTS5 虚拟表，提供前缀全文搜索" },
                { layer: "Auto-tagger", what: "ONNX Runtime + WD EVA02-Large Tagger v3，CUDA / CPU 自动回退" },
                { layer: "Metadata",    what: "自研 PNG tEXt / iTXt 解析器，无需安装 ComfyUI" },
                { layer: "Thumbnails",  what: "400 / 1200 / 原图三档质量，首次访问按需懒生成" },
                { layer: "Packaging",   what: "便携 ZIP — 二进制 + DLL + 前端，目录化部署，无安装器" },
                { layer: "i18n",        what: "内置 English / 中文，运行时切换无需刷新" },
            ],
            kv: [
                { label: "构建产物",      value: "Artifex.exe + onnxruntime.dll" },
                { label: "二进制大小",    value: "~ 30 MB" },
                { label: "模型可选下载",  value: "~ 800 MB (HuggingFace)" },
                { label: "默认端口",      value: "127.0.0.1:8000" },
            ],
        },
        quickstart: {
            eyebrow: "Get started",
            titlePrefix: "三步开启你的",
            titleAccent: "本地画廊",
            titleSuffix: "",
            subtitle: "想要开箱即用，下载 Release；想要从源码构建，按指引设置 Go / Node 工具链。",
            tabRelease: "Release（推荐）",
            tabSource: "从源码构建",
            release: {
                steps: [
                    { n: "01", title: "下载",         desc: "从 GitHub Releases 抓取最新的 Artifex_Win64.zip。" },
                    { n: "02", title: "解压并运行",   desc: "解压到任意目录，双击 Artifex.exe。" },
                    { n: "03", title: "打开浏览器",   descNode: ["访问 ", "127.0.0.1:8000", "，即可开始上传与浏览。"] },
                    { n: "04", title: "（可选）下载模型", desc: "进入 Settings → Model Management → Download Model 一次性 ~800 MB。" },
                ],
                stepLabel: "STEP",
            },
            source: {
                reqsLabel: "Requirements",
                reqs: [
                    { k: "Go",              v: "1.26+" },
                    { k: "Node.js",         v: "20 LTS" },
                    { k: "GCC / MinGW-w64", v: "可选 · ONNX 自动打标需要" },
                    { k: "OS",              v: "Windows / Linux" },
                ],
                terminalLabel: "shell — 从源码构建",
                copy: "复制",
                copied: "已复制",
            },
            ctaRelease: "前往 Releases 页",
            ctaGithub: "Star on GitHub",
        },
        cta: {
            eyebrow: "Ready when you are",
            titlePrefix: "把作品交给 ",
            titleAccent: "Artifex",
            titleSuffix: " 守护",
            subtitle:
                "完全本地、单文件部署、MIT 开源 —— 现在下载，5 分钟搭起属于自己的 ComfyUI 画廊。",
            download: "立即下载",
            github: "打开仓库",
        },
        footer: {
            tagline:
                "为 ComfyUI 创作者打造的本地画廊。解析工作流元数据、本地自动打标、颜色分组、FTS5 搜索 —— 让数千张生成图依旧井井有条。",
            sectionProject: "Project",
            sectionResources: "Resources",
            links: {
                repo: "GitHub 仓库",
                releases: "Releases",
                license: "License (MIT)",
                issues: "Issues",
                readme: "README",
                readmeZh: "中文说明",
                tagger: "WD EVA02 Tagger",
                comfyui: "ComfyUI",
            },
            copyright: "© {year} Artifex · MIT 许可 · 为 ComfyUI 社区精心打造",
            madeBy: "Made with",
            madeBySuffix: "by Lizzary",
        },
        common: {
            languageLabel: "语言",
        },
    },
};

export const LANGS = [
    { code: "en", short: "EN", name: "English" },
    { code: "zh", short: "中",  name: "中文" },
];
