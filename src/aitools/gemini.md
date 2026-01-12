---
icon: pen-to-square
date: 2026-01-04
category:
  - AI
  - tools
tag:
  - AI
  - 工具
cover: /assets/images/aitools/gemini.png
---

# Gemini CLI 完整使用教程

## 1. 简介：为什么使用 Gemini CLI？
Gemini CLI (`@google/gemini-cli`) 是 Google 推出的开源命令行 AI 代理。它不仅是一个聊天机器人，更是一个能通过终端理解你项目上下文、读取文件甚至执行任务的开发助手。

**主要特点：**
- **上下文感知**：可以直接读取本地文件（如 `@main.py`）。
- **管道支持**：可以将其他命令的输出（如 `git diff`）直接传给 Gemini。
- **多模态**：支持理解代码、文本甚至某些版本中的图片。

---

## 2. 安装 (Installation)
Gemini CLI 基于 Node.js 构建，因此需要先确环境中有 Node.js。

### 前置要求
- **Node.js**: 版本需 v18.0.0 或更高 (建议 v20+)。
- **操作系统**: Windows, macOS, 或 Linux。

### 安装命令
打开终端（Terminal / PowerShell / CMD），运行以下命令进行全局安装：

```bash
npm install -g @google/gemini-cli
```

*如果你不想全局安装，也可以使用 `npx` 临时运行：*

```bash
npx @google/gemini-cli
```

---

## 3. 初始化与认证 (Authentication)
安装完成后，第一次运行会引导你进行设置。

1. **启动 CLI**：
   在终端输入：
```bash
gemini
```

2. **选择认证方式**：
   CLI 会提示你选择认证方法，通常有以下几种：
    - **Login with Google (推荐个人用户)**：会自动打开浏览器弹窗，使用你的 Google 账号登录。
        - *优势*：免费额度（通常每天 1000 次请求，每分钟 60 次）。
    - **Gemini API Key**：如果你有 Google AI Studio 的 API Key。
        - *设置方法*：你也可以通过环境变量设置：`export GEMINI_API_KEY="你的key"`。
    - **Vertex AI**：企业级用户使用。

---

## 4. 基础使用 (Basic Usage)
认证成功后，你会进入一个交互式对话界面（REPL）。

### 交互模式
直接输入问题即可：
```markdown
> 帮我写一个 Python 脚本来抓取网页标题
```

### 单次命令模式 (Non-interactive)
如果你不想进入对话模式，只想快速问一个问题，可以使用 `-p` 参数：
```bash
gemini -p "解释一下什么是 REST API"
```

### 管道操作 (Piping) 🔥 (最强功能)
你可以将终端命令的输出直接“喂”给 Gemini。

- **场景 1：解释 Git 变更**
  ```bash
  git diff | gemini -p "帮我生成这些代码变更的 Commit Message"
  ```

- **场景 2：分析日志错误**
  ```bash
  cat error.log | gemini -p "分析这个日志里的主要错误原因"
  ```

---

## 5. 常用命令与技巧 (Commands & Tips)
在 Gemini CLI 的交互模式中（即输入 `gemini` 进入后），你可以使用以 `/` 开头的特殊命令：

| 命令 | 解释 | 用法示例 |
|------|------|----------|
| `/help` | 显示帮助信息 | `/help` |
| `/clear` | 清除当前对话上下文和屏幕 | `/clear` |
| `/model` | 切换使用的 Gemini 模型版本 | `/model` (然后选择如 gemini-1.5-pro) |
| `/exit` | 退出 CLI | `/exit` 或 `Ctrl+C` |
| `/settings` | 打开设置菜单（修改主题、配置等） | `/settings` |

### 上下文引用技巧 (`@`)
这是 Gemini CLI 最核心的技巧。你可以通过 `@` 符号将文件内容直接作为 Context 发送给 AI。

- **分析代码文件**：
  ```bash
  > 帮我优化 @server.js 的代码结构
  ```
  *Gemini 会自动读取 `server.js` 的内容并基于此回答。*

- **多文件关联**：
  ```bash
  > @package.json 和 @Dockerfile 之间有什么版本冲突吗？
  ```

---

## 6. 高级配置：项目级上下文 (`GEMINI.md`)
如果你希望 Gemini 在进入某个项目文件夹时，自动知道这个项目的背景（比如“这是一个 React 项目，使用 TypeScript，风格要求严格”），你可以创建一个 `GEMINI.md` 文件。

1. 在项目根目录新建文件 `GEMINI.md`。
2. 在里面写下提示词（Prompt），例如：
   ```markdown
   # 项目上下文
   这是一个电商后台管理系统。
   - 前端：Vue 3 + Vite
   - 语言：TypeScript
   - 只有在这一行明确要求时才生成测试代码。
   ```
3. 当你在这个目录下运行 `gemini` 时，它会自动加载这个文件的内容作为**系统提示词 (System Prompt)**。

---

## 7. 常见问题排查
- **权限报错 (EACCES)**：
  如果在 Linux/macOS 上安装失败，可能需要 sudo：
  `sudo npm install -g @google/gemini-cli`

- **Node 版本过低**：
  如果报错提示 SyntaxError 或版本不支持，请使用 `nvm` 升级 Node.js：
  `nvm install 20 && nvm use 20`

---

## Gemini CLI 常用命令速查表

### 1. 终端命令行参数 (Shell Arguments)
这些命令直接在你的系统终端（Terminal/PowerShell）中执行。

| 命令/参数 | 简写 | 功能描述 | 示例 |
|-----------|------|----------|------|
| `gemini` | - | **启动交互模式**。进入持续对话的 REPL 界面。 | `gemini` |
| `--prompt <text>` | `-p` | **单次提问模式**。不进入交互界面，直接输出答案并退出。 | `gemini -p "如何在 Python 中读取 JSON?"` |
| `--version` | `-v` | 查看当前安装的 Gemini CLI 版本。 | `gemini --version` |
| `--help` | `-h` | 显示 CLI 的帮助文档和所有可用参数。 | `gemini --help` |
| `|` (管道符) | - | **标准输入流 (Stdin)**。将前一个命令的输出作为 Gemini 的上下文。 | `cat log.txt | gemini -p "分析错误"` |

### 2. 交互模式指令 (REPL Commands)
这些命令仅在进入 `gemini` 交互界面后使用（输入时通常有自动补全）。

| 指令 | 功能描述 | 使用场景 |
|------|----------|----------|
| `/help` | 显示交互模式下的帮助菜单。 | 忘记有哪些指令时使用。 |
| `/clear` | **清除上下文**。清空当前的对话历史，开始一个新的话题，但保持程序运行。 | 当你想切换话题且不想让之前的对话干扰新问题时。 |
| `/model` | **切换模型**。在可用的 Gemini 模型之间切换 (如 `gemini-1.5-pro` vs `gemini-1.5-flash`)。 | 需要更强的推理能力(Pro)或更快的速度(Flash)时切换。 |
| `/settings` | 打开配置菜单。可以修改主题、字体大小或重新进行认证设置。 | 调整界面外观或重置账户。 |
| `/exit` | **退出程序**。关闭 Gemini CLI。 | 结束使用 (也可以按 `Ctrl+C` 两次)。 |

### 3. 上下文与特殊语法 (Context Syntax)
在交互模式或 `-p` 参数中均可使用的特殊技巧。

| 语法符号 | 名称 | 功能描述 | 示例 |
|----------|------|----------|------|
| `@<文件名>` | **文件引用** | 读取本地文件的内容并将其作为 Prompt 的一部分发送给 AI。 | `解释一下 @main.py 的逻辑` |
| `GEMINI.md` | **项目上下文** | **(自动加载)** 如果当前目录下存在此文件，CLI 会自动将其内容作为系统提示词(System Prompt)。 | 在项目根目录创建文件定义代码规范。 |

---

## 💡 组合使用示例
**场景：让 AI 帮你写 Git Commit 信息**
```bash
git diff | gemini -p "根据这些变更生成一个简洁的 commit message"
```

**场景：基于特定文件提问**
```bash
gemini -p "请为 @package.json 文件添加 eslint 依赖"
```

### 总结
1. Gemini CLI 是 Google 推出的命令行 AI 工具，核心优势是上下文感知和管道操作能力。
2. 核心使用技巧包括：`-p` 单次提问、管道符传递命令输出、`@` 引用文件内容、`GEMINI.md` 定义项目级上下文。
3. 安装前置条件是 Node.js v18+，认证支持 Google 账号登录或 API Key 两种方式。