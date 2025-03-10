# Xiaohongshu Importer for Obsidian

Import notes from Xiaohongshu (小红书) into your Obsidian vault with ease. This plugin extracts titles, content, images, videos, and tags from Xiaohongshu share links, organizing them into neatly formatted Markdown files.

## Features

- **Import Notes**: Paste a Xiaohongshu share link (e.g., `http://xhslink.com/a/...`) to import its content.
- **Media Handling**:
	- Option to download images and videos locally to a `media` subfolder (e.g., `XHS Notes/media/`).
	- Uses relative paths (`../media/`) for local media or online URLs if downloading is disabled.
- **Video Support**: Embeds videos with `<video>` tags for video notes, falling back to a cover image if the video URL is unavailable.
- **Content Extraction**: Pulls titles, descriptions, and tags from notes, cleaning up hashtags and formatting them in a code block.
- **Categorization**: Assign notes to user-defined categories via a chip-based selection UI in the import modal.
- **Flexible Storage**:
	- Configurable base folder (default: `XHS Notes`).
	- Notes are saved in category subfolders (e.g., `XHS Notes/搞笑/[V]Note-Title.md` for video notes).
- **Settings**:
	- Set a default folder for imports.
	- Toggle default media download behavior (overridable per import).
	- Manage a list of categories with add/edit/remove and reorder functionality.
- **Frontmatter**: Adds metadata (title, source URL, date, imported timestamp, category) to each note.

## Installation

### Manual Installation

1. **Clone or Download**:
	- Clone this repository or download the ZIP file:
	  ```
	  git clone https://github.com/yourusername/xhs-importer.git
	  ```
	- Or download from the releases page (once published).
2. **Copy Files**:
	- Copy `main.js`, `manifest.json`, and (optionally) `styles.css` to your vault’s plugin folder:
	  ```
	  cp main.js manifest.json /path/to/your-vault/.obsidian/plugins/xhs-importer/
	  ```
	- If the `xhs-importer` folder doesn’t exist, create it first:
	  ```
	  mkdir /path/to/your-vault/.obsidian/plugins/xhs-importer
	  ```
3. **Enable Plugin**:
	- Open Obsidian, go to `Settings > Community Plugins`.
	- Ensure "Safe Mode" is off.
	- Find "Xiaohongshu Importer" in the list and toggle it on.

### Development Setup (Optional)

For those who want to modify or build the plugin:

1. **Install Dependencies**:
	- Ensure Node.js and Yarn are installed.
	- Run:
	  ```
	  yarn install
	  ```
2. **Build**:
	- Compile the TypeScript code:
	  ```
	  yarn dev
	  ```
	- Copy the output (`main.js`) and `manifest.json` to your plugin folder as above.
3. **Hot Reload** (Optional):
	- Install the [Obsidian Hot Reload plugin](https://github.com/pjeby/hot-reload).
	- Use `yarn dev` to watch for changes and auto-reload in Obsidian.

## Usage

1. **Trigger Import**:
	- Click the ribbon icon (book) on the left sidebar, or use the command `Import Xiaohongshu Note` via the Command Palette (Ctrl/Cmd + P).
2. **Enter Share Text**:
	- Paste the Xiaohongshu share text containing the URL (e.g., "64 不叫小黄了发布了一篇小红书笔记，快来看看吧！http://xhslink.com/a/...").
3. **Select Options**:
	- Choose a category from the list.
	- Check "Download media locally for this import" to override the default setting.
4. **Import**:
	- Click "Import" or press Enter to process the note.
	- The note will be created and opened in a new tab.

## Configuration

- Open `Settings > Community Plugins > Xiaohongshu Importer`:
	- **Default Folder**: Set where notes and media are saved (e.g., `XHS Notes`).
	- **Download Media**: Toggle default behavior for downloading media (overridable per import).
	- **Categories**: Add, edit, remove, or reorder categories for organizing notes.

## Example Output

For a note with title `柔佛人狂喜！新山终于有“地铁”了？`:

- **File**: `XHS Notes/搞笑/柔佛人狂喜！新山终于有“地铁”了？.md`
- **Content**:
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

Feel free to submit issues or pull requests on GitHub. To build locally:
- Clone the repo.
- Run `yarn install` and `yarn dev`.
- Test in your Obsidian vault.

## License

MIT License - see [LICENSE](LICENSE) for details.

## Acknowledgements

Built with ❤️ for the Obsidian community, powered by [xAI's Grok](https://xai.com).
