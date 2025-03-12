# Xiaohongshu Importer

A plugin to import Xiaohongshu (小红书) notes into your workspace with optional media downloads and categorization.

## Features
- Import Xiaohongshu notes with text, images, and videos.
- Categorize notes using customizable categories (e.g., "美食", "旅行", "其他").
- Option to download media locally (images and videos) to a `media` folder.
- Automatic tagging from note content.
- Full-width "Import" button and improved modal layout.

## Installation
1. Download the latest release: [Xiaohongshu-Importer-v1.0.1.zip](https://github.com/bnchiang96/xiaohongshu-importer/releases/download/1.0.1/Xiaohongshu-Importer-v1.0.1.zip)
2. In your workspace, go to **Settings > Community Plugins > Install from ZIP**.
3. Select the downloaded ZIP file and install it.
4. Enable the plugin in **Settings > Community Plugins**.

## Usage
1. Obtain the share text from a Xiaohongshu note (e.g., copy the text from a shared link).
2. Use the ribbon icon (book) or the command **"Import Xiaohongshu Note"** from the command palette.
3. Paste the share text into the modal.
4. Select a category and toggle the "Download media locally" option if desired.
5. Click "Import" to create the note in your workspace.

## Configuration
- **Default Folder**: Set a base folder (e.g., "XHS Notes") in the plugin settings.
- **Categories**: Add, edit, or reorder categories in the settings tab.
- **Download Media**: Enable/disable default media downloads in the settings.

## Changelog
### v1.0.1
- Added hardcoded '其他' category as the last option.
- Removed 'Others' from the default category list.
- Made the "Download media" label clickable.
- Increased margin-top and margin-bottom for the download row.
- Made the "Import" button full width.
- Fixed duplicate cover photo downloads.
- Updated plugin ID to 'xiaohongshu-importer'.
- Removed 'Obsidian' from the description.
- Ensured main.js and manifest.json are included in the release.

## Development
- **Repository**: [https://github.com/bnchiang96/xiaohongshu-importer](https://github.com/bnchiang96/xiaohongshu-importer)
- **License**: MIT
- **Build**: Run `yarn build` to compile TypeScript to JavaScript.
- **Release**: Create a ZIP with `main.js` and `manifest.json` and upload it to the releases page.

## Contributing
Feel free to open issues or pull requests on the GitHub repository. Contributions are welcome!

## Support
For questions or help, contact the author at [bnchiang96](https://github.com/bnchiang96).

---
