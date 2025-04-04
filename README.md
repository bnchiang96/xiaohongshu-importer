# Xiaohongshu Importer for Obsidian

**Version**: 1.1.1  
**Author**: bnchiang96  
**Repository**: [https://github.com/bnchiang96/xiaohongshu-importer](https://github.com/bnchiang96/xiaohongshu-importer)  
**License**: MIT

**[中文版本](#chinese-readme)** (Scroll to the Chinese version)

## Overview

The Xiaohongshu Importer plugin allows you to seamlessly import notes from Xiaohongshu (小红书), a popular Chinese social media and e-commerce platform, into your Obsidian vault. With this plugin, you can extract note content, images, videos, and tags, and organize them into categorized Markdown files in your vault. Whether you’re saving travel tips, recipes, or lifestyle inspiration, this plugin makes it easy to bring your Xiaohongshu notes into Obsidian for better organization and note-taking.

## Features

- **Import Xiaohongshu Notes**: Import notes by pasting a share link or share text, including title, content, images, videos, and tags.
- **Category Management**: Organize notes into user-defined categories (e.g., "Travel", "Food") or a default "Others" category.
- **Media Download**: Optionally download images and videos locally to your vault, or embed them using their original URLs.
- **Custom Folder Structure**: Save notes in a structured folder hierarchy (e.g., `XHS Notes/Travel/NoteTitle.md`).
- **User-Friendly Interface**: Use a modal to input share text, select categories, and choose media download options.
- **Settings Customization**: Configure the default folder, media download preference, and manage categories in the settings tab.

## Installation

### Option 1: Install via Obsidian Community Plugins Marketplace (Recommended)

The Xiaohongshu Importer plugin is now available in the Obsidian Community Plugins marketplace, making installation quick and easy.

1. Open Obsidian.
2. Go to **Settings > Community Plugins**.
3. If you haven’t already, turn on community plugins by clicking **Turn on community plugins** and confirming.
4. Click **Browse** to open the community plugins marketplace.
5. In the search bar, type **Xiaohongshu Importer**.
6. Find the plugin in the search results and click **Install**.
7. Once installed, click **Enable** to activate the plugin.
8. You’re ready to start importing Xiaohongshu notes!

### Option 2: Manual Installation

If you prefer to install the plugin manually or need a specific version, you can download the release files and install them directly.

1. Download the latest release ZIP file from the GitHub releases page: [Xiaohongshu-Importer-v1.1.1.zip](https://github.com/bnchiang96/xiaohongshu-importer/releases/download/1.1.1/Xiaohongshu-Importer-v1.1.1.zip).
2. Extract the ZIP file to obtain `main.js`, `manifest.json`, and `styles.css`.
3. Copy these files to your Obsidian vault’s plugins directory:
	- On desktop: `<vault>/.obsidian/plugins/xiaohongshu-importer/`
	- On mobile: You may need to use a file manager to copy the files to the same directory.
4. Open Obsidian and go to **Settings > Community Plugins**.
5. Ensure community plugins are enabled.
6. Under **Installed Plugins**, find **Xiaohongshu Importer** and click the toggle to enable it.
7. The plugin is now ready to use.

## Usage

### Importing a Xiaohongshu Note

1. **Trigger the Import**:
	- Click the Xiaohongshu Importer ribbon icon (a book icon) on the left sidebar, or
	- Use the command palette: Press `Ctrl/Cmd + P`, type "Import Xiaohongshu note", and select the command.
2. **Enter Share Text**:
	- A modal will appear. Paste the Xiaohongshu share text or URL (e.g., "64 不叫小黄了发布了一篇小红书笔记... http://xhslink.com/a/...").
3. **Select a Category**:
	- Choose a category for the note (e.g., "Travel", "Food") or select "Others" (其他).
4. **Choose Media Download Option**:
	- Check the "Download media locally for this import" box if you want to download images and videos to your vault. Leave it unchecked to embed media using their original URLs.
5. **Import the Note**:
	- Click **Import** or press `Enter` (without Shift) to start the import process.
6. **View the Note**:
	- The plugin will create a Markdown file in your vault (e.g., `XHS Notes/Travel/NoteTitle.md`) and open it automatically.
	- A notice will confirm the import: "Imported Xiaohongshu note as XHS Notes/Travel/NoteTitle.md".

### Configuring the Plugin

1. Go to **Settings > Community Plugins > Xiaohongshu Importer**.
2. **Default Folder**:
	- Set the base folder where notes will be saved (e.g., `XHS Notes`). Leave empty to save notes at the vault root.
3. **Download Media**:
	- Toggle this option to enable or disable media download by default. You can override this per import in the modal.
4. **Categories**:
	- Add, edit, remove, or reorder categories for organizing your notes. Default categories include "美食" (Food), "旅行" (Travel), etc.
	- Use the "Add category" button to create new categories, and the up/down arrows to reorder them.

## File Structure

- Notes are saved in the format: `<defaultFolder>/<category>/<noteTitle>.md`.
	- Example: `XHS Notes/Travel/My Trip to Bali.md`
- Media files (if downloaded) are saved in: `<defaultFolder>/media/`.
	- Example: `XHS Notes/media/My-Trip-to-Бали-123456789.jpg`
- Each note includes frontmatter with metadata:
  ```yaml
  ---
  title: My Trip to Bali
  source: http://xhslink.com/a/...
  date: 2025-04-02
  Imported At: 2025-04-02 10:30:45
  category: Travel
  ---
  ```

## Troubleshooting

- **"No valid Xiaohongshu URL found in the text"**:
	- Ensure you’ve pasted a valid Xiaohongshu share link or text containing a URL (e.g., `http://xhslink.com/a/...`).
- **"Failed to import note"**:
	- Check your internet connection and ensure the URL is accessible.
	- Verify that the note is public and not restricted.
- **Media not downloading**:
	- Ensure the "Download media" option is enabled in the modal or settings.
	- Check for network issues or restrictions on the media URLs.
- **Layout issues in the modal**:
	- Ensure your Obsidian theme is compatible. The plugin uses standard Obsidian styling, but custom themes may require adjustments.

## Contributing

Contributions are welcome! If you’d like to contribute to the Xiaohongshu Importer plugin, please follow these steps:

1. Fork the repository: [https://github.com/bnchiang96/xiaohongshu-importer](https://github.com/bnchiang96/xiaohongshu-importer).
2. Clone your fork and create a new branch:
   ```bash
   git clone https://github.com/your-username/xiaohongshu-importer.git
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and test them in Obsidian.
4. Commit your changes and push to your fork:
   ```bash
   git add .
   git commit -m "Add your feature or fix"
   git push origin feature/your-feature-name
   ```
5. Open a pull request on the main repository.

## Development Setup

To develop or modify the plugin, you’ll need the following:

- **Node.js**: Version 18.x or later.
- **Yarn**: Used for dependency management.
- **Dependencies**:
	- Install dependencies with:
	  ```bash
	  yarn install
	  ```
- **Build the Plugin**:
	- Development mode (with watch):
	  ```bash
	  yarn dev
	  ```
	- Production mode (minified):
	  ```bash
	  yarn build
	  ```
- **Test the Plugin**:
	- Copy the built files (`main.js`, `manifest.json`, `styles.css`) to your Obsidian vault’s plugins directory: `<vault>/.obsidian/plugins/xiaohongshu-importer/`.
	- Enable the plugin in Obsidian and test your changes.

## License

This plugin is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the Obsidian community for their support and feedback during the plugin’s development.
- Built with the Obsidian API and inspired by the community’s plugin guidelines.

---

# 小红书导入器 for Obsidian <a id="chinese-readme"></a>

**版本**：1.1.1  
**作者**：bnchiang96  
**代码仓库**：[https://github.com/bnchiang96/xiaohongshu-importer](https://github.com/bnchiang96/xiaohongshu-importer)  
**许可证**：MIT

## 概述

小红书导入器插件让您可以轻松地将小红书（一个广受欢迎的中国社交媒体和电商平台）上的笔记导入到您的 Obsidian 知识库中。通过此插件，您可以提取笔记的标题、内容、图片、视频和标签，并将它们整理成分类的 Markdown 文件存储在您的知识库中。无论是保存旅行攻略、食谱还是生活灵感，这个插件都能帮助您将小红书笔记导入 Obsidian，以便更好地组织和管理。

## 功能

- **导入小红书笔记**：通过粘贴分享链接或分享文本，导入笔记，包括标题、内容、图片、视频和标签。
- **分类管理**：将笔记组织到用户自定义的分类中（例如“旅行”、“美食”），或使用默认的“其他”分类。
- **媒体下载**：可选择将图片和视频下载到本地知识库，或使用原始 URL 嵌入媒体。
- **自定义文件夹结构**：将笔记保存到结构化的文件夹层次中（例如 `XHS Notes/Travel/NoteTitle.md`）。
- **用户友好的界面**：通过弹窗输入分享文本、选择分类和媒体下载选项。
- **设置自定义**：在设置页面中配置默认文件夹、媒体下载偏好和分类管理。

## 安装

### 选项 1：通过 Obsidian 社区插件市场安装（推荐）

小红书导入器插件现已在 Obsidian 社区插件市场中提供，安装过程简单快捷。

1. 打开 Obsidian。
2. 前往 **设置 > 社区插件**。
3. 如果尚未启用社区插件，点击 **启用社区插件** 并确认。
4. 点击 **浏览** 打开社区插件市场。
5. 在搜索栏中输入 **Xiaohongshu Importer**。
6. 在搜索结果中找到插件并点击 **安装**。
7. 安装完成后，点击 **启用** 以激活插件。
8. 您现在可以开始导入小红书笔记了！

### 选项 2：手动安装

如果您更喜欢手动安装插件或需要特定版本，可以直接下载发布文件并安装。

1. 从 GitHub 发布页面下载最新的发布 ZIP 文件：[Xiaohongshu-Importer-v1.1.1.zip](https://github.com/bnchiang96/xiaohongshu-importer/releases/download/1.1.1/Xiaohongshu-Importer-v1.1.1.zip)。
2. 解压 ZIP 文件，获取 `main.js`、`manifest.json` 和 `styles.css`。
3. 将这些文件复制到您的 Obsidian 知识库的插件目录：
	- 桌面端：`<vault>/.obsidian/plugins/xiaohongshu-importer/`
	- 移动端：您可能需要使用文件管理器将文件复制到相同目录。
4. 打开 Obsidian，前往 **设置 > 社区插件**。
5. 确保社区插件已启用。
6. 在 **已安装的插件** 下，找到 **Xiaohongshu Importer** 并点击开关启用。
7. 插件现已准备好使用。

## 使用方法

### 导入小红书笔记

1. **触发导入**：
	- 点击左侧边栏上的小红书导入器图标（书本图标），或
	- 使用命令面板：按 `Ctrl/Cmd + P`，输入“导入小红书笔记”，然后选择该命令。
2. **输入分享文本**：
	- 将弹出一个窗口。粘贴小红书分享文本或 URL（例如，“64 不叫小黄了发布了一篇小红书笔记... http://xhslink.com/a/...”）。
3. **选择分类**：
	- 为笔记选择一个分类（例如“旅行”、“美食”），或选择“其他”。
4. **选择媒体下载选项**：
	- 如果您希望将图片和视频下载到知识库中，请勾选“为此导入本地下载媒体”。如果不勾选，媒体将使用原始 URL 嵌入。
5. **导入笔记**：
	- 点击 **导入** 或按 `Enter` 键（不按 Shift）以开始导入过程。
6. **查看笔记**：
	- 插件将在您的知识库中创建一个 Markdown 文件（例如 `XHS Notes/Travel/NoteTitle.md`）并自动打开。
	- 通知将确认导入：“已将小红书笔记导入为 XHS Notes/Travel/NoteTitle.md”。

### 配置插件

1. 前往 **设置 > 社区插件 > Xiaohongshu Importer**。
2. **默认文件夹**：
	- 设置笔记保存的默认基础文件夹（例如 `XHS Notes`）。留空则保存到知识库根目录。
3. **下载媒体**：
	- 切换此选项以默认启用或禁用媒体下载。您可以在弹窗中为每次导入覆盖此设置。
4. **分类**：
	- 添加、编辑、删除或重新排序用于组织笔记的分类。默认分类包括“美食”、“旅行”等。
	- 使用“添加分类”按钮创建新分类，使用上下箭头重新排序。

## 文件结构

- 笔记保存格式为：`<defaultFolder>/<category>/<noteTitle>.md`。
	- 示例：`XHS Notes/Travel/My Trip to Bali.md`
- 如果下载了媒体文件，将保存到：`<defaultFolder>/media/`。
	- 示例：`XHS Notes/media/My-Trip-to-Бали-123456789.jpg`
- 每个笔记包含带有元数据的 frontmatter：
  ```yaml
  ---
  title: My Trip to Bali
  source: http://xhslink.com/a/...
  date: 2025-04-02
  Imported At: 2025-04-02 10:30:45
  category: Travel
  ---
  ```

## 故障排除

- **“文本中未找到有效的小红书 URL”**：
	- 确保您粘贴了一个有效的小红书分享链接或包含 URL 的文本（例如 `http://xhslink.com/a/...`）。
- **“无法导入笔记”**：
	- 检查您的网络连接并确保 URL 可访问。
	- 确认笔记是公开的且未受限制。
- **媒体未下载**：
	- 确保在弹窗或设置中启用了“下载媒体”选项。
	- 检查网络问题或媒体 URL 的限制。
- **弹窗中的布局问题**：
	- 确保您的 Obsidian 主题兼容。插件使用标准的 Obsidian 样式，但自定义主题可能需要调整。

## 贡献

欢迎贡献！如果您想为小红书导入器插件做出贡献，请按照以下步骤操作：

1. Fork 代码仓库：[https://github.com/bnchiang96/xiaohongshu-importer](https://github.com/bnchiang96/xiaohongshu-importer)。
2. 克隆您的 fork 并创建一个新分支：
   ```bash
   git clone https://github.com/your-username/xiaohongshu-importer.git
   git checkout -b feature/your-feature-name
   ```
3. 进行更改并在 Obsidian 中测试。
4. 提交更改并推送到您的 fork：
   ```bash
   git add .
   git commit -m "添加您的功能或修复"
   git push origin feature/your-feature-name
   ```
5. 在主仓库上打开一个拉取请求。

## 开发设置

要开发或修改插件，您需要以下内容：

- **Node.js**：版本 18.x 或更高。
- **Yarn**：用于依赖管理。
- **依赖**：
	- 使用以下命令安装依赖：
	  ```bash
	  yarn install
	  ```
- **构建插件**：
	- 开发模式（带监听）：
	  ```bash
	  yarn dev
	  ```
	- 生产模式（压缩）：
	  ```bash
	  yarn build
	  ```
- **测试插件**：
	- 将构建的文件（`main.js`、`manifest.json`、`styles.css`）复制到您的 Obsidian 知识库的插件目录：`<vault>/.obsidian/plugins/xiaohongshu-importer/`。
	- 在 Obsidian 中启用插件并测试您的更改。

## 许可证

此插件采用 MIT 许可证。详情请见 [LICENSE](LICENSE) 文件。

## 致谢

- 感谢 Obsidian 社区在插件开发过程中提供的支持和反馈。
- 使用 Obsidian API 构建，并受到社区插件指南的启发。
