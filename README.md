# Xiaohongshu Importer for Obsidian

Import notes from Xiaohongshu (小红书) into your Obsidian vault with ease. This plugin extracts titles, content, images, videos, and tags from Xiaohongshu share links, organizing them into neatly formatted Markdown files.

## Highlighted Features

1. **Import Notes Without Media Downloads**: Save storage by importing Xiaohongshu notes with online links to pictures and videos, avoiding local downloads.
2. **Import Notes With Offline Media**: Download pictures and videos locally for full note access without an internet connection.
3. **Enhanced Organization**: Organize notes in Obsidian with a structured folder system and categories, surpassing Xiaohongshu's native saving capabilities.
4. **Preserve Source Links**: Retain the original Xiaohongshu URL in each note for easy access to the source and commenting anytime.
5. **Category-Based Organization**: Assign notes to customizable categories (e.g., 美食, 旅行, Others) for efficient note management.

## Installation

### Option 1: Download from GitHub Release
1. Visit the [latest release](https://github.com/bnchiang96/Xiaohongshu-Importer-for-Obsidian/releases/latest) on GitHub.
2. Download the `xhs-importer.zip` file, which contains `main.js` and `manifest.json`.
3. Extract the ZIP file to your Obsidian plugins folder:
   ```
   unzip Xiaohongshu-Importer-for-Obsidian-v1.0.0.zip -d /path/to/your-vault/.obsidian/plugins/Xiaohongshu-Importer-for-Obsidian/
   ```
	- Ensure the folder name matches the plugin ID: `Xiaohongshu-Importer-for-Obsidian`.
4. Enable the plugin in Obsidian:
	- Go to `Settings > Community Plugins`.
	- Turn off "Safe Mode" if enabled.
	- Find "Xiaohongshu Importer" and toggle it on.

### Option 2: Build from Source
1. **Clone the Repository**:
   ```
   git clone https://github.com/bnchiang96/Xiaohongshu-Importer-for-Obsidian.git
   cd Xiaohongshu-Importer-for-Obsidian
   ```
2. **Install Dependencies**:
	- Ensure Node.js and Yarn are installed.
	- Run:
	  ```
	  yarn install
	  ```
3. **Build the Plugin**:
	- Compile the TypeScript code:
	  ```
	  yarn build
	  ```
	- This generates `main.js` (not tracked in the repo due to `.gitignore`).
4. **Install in Obsidian**:
	- Copy the built files to your vault:
	  ```
	  mkdir -p /path/to/your-vault/.obsidian/plugins/Xiaohongshu-Importer-for-Obsidian/
	  cp main.js manifest.json /path/to/your-vault/.obsidian/plugins/Xiaohongshu-Importer-for-Obsidian/
	  ```
	- Enable the plugin as in Option 1.

### Development Setup (Optional)
- For live development with hot reload:
	- Install the [Obsidian Hot Reload plugin](https://github.com/pjeby/hot-reload).
	- Run:
	  ```
	  yarn dev
	  ```
	- Changes will auto-reload in Obsidian.

## Usage

1. **Trigger Import**:
	- Click the ribbon icon (book) or use the command `Import Xiaohongshu Note` (Ctrl/Cmd + P).
2. **Enter Share Text**:
	- Paste Xiaohongshu share text (e.g., "64 不叫小黄了发布了一篇小红书笔记... http://xhslink.com/a/...").
3. **Select Options**:
	- Choose a category (e.g., 搞笑, Others).
	- Check "Download media locally" for offline access (optional).
4. **Import**:
	- Click "Import" or press Enter to create and open the note.

## Configuration

- Open `Settings > Community Plugins > Xiaohongshu Importer`:
	- **Default Folder**: Set the base folder (e.g., `XHS Notes`).
	- **Download Media**: Toggle default media download behavior (overridable per import).
	- **Categories**: Manage categories (default: 美食, 旅行, 娱乐, 知识, 工作, 情感, 个人成长, 优惠, 搞笑, 育儿, Others).

## Example Output

For a note titled `柔佛人狂喜！新山终于有“地铁”了？`:

- **File**: `XHS Notes/搞笑/柔佛人狂喜！新山终于有“地铁”了？.md`
- **Content** (with media downloaded):
  ```
  ---
  title: 柔佛人狂喜！新山终于有“地铁”了？
  source: http://xhslink.com/a/...
  date: 2025-03-09
  Imported At: 3/9/2025, 2:35:22 PM
  category: 搞笑
  ---
  # 柔佛人狂喜！新山终于有“地铁”了？

  ![Cover Image](../media/柔佛人狂喜-新山终于有地铁了-cover-1741570701965.jpg)

  [Note content here]

  ```
  #tags here
  ```
- **Media**: `XHS Notes/media/柔佛人狂喜-新山终于有地铁了-cover-1741570701965.jpg`

## Contributing

Submit issues or pull requests on [GitHub](https://github.com/bnchiang96/Xiaohongshu-Importer-for-Obsidian). To build locally:
- Clone the repo.
- Run `yarn install` and `yarn build`.
- Test in your vault.

## License

MIT License - see [LICENSE](LICENSE) for details.

## Acknowledgements

Built with ❤️ for the Obsidian community, powered by [xAI's Grok](https://xai.com).
