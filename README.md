# OmSpace - New Tab Dashboard

OmSpace is a Manifest V3 new tab extension for Chromium browsers that turns the default new tab into a customizable dashboard for focus, search, shortcuts, notes, widgets, and browser-native tools.

It is built with plain HTML, CSS, and JavaScript. There is no framework, no build step, and no dependency install required.

## Highlights

- Material You inspired interface with glass surfaces, gradients, and accent-driven theming
- Personal, Work, and Minimal profiles with per-profile dashboard state
- Settings panel organized into Look, Layout, Tools, and Data tabs
- Light and dark themes, custom accents, multiple font options, and background presets
- Custom background URL support plus local wallpaper upload
- Performance mode and Zen mode for a cleaner, lighter experience
- Optional sync for core preferences via `chrome.storage.sync`

## Built-in widgets

- Clock with 12-hour and 24-hour support
- Weather card with Celsius/Fahrenheit switch and manual refresh
- Daily quote with custom quote override
- Search bar with editable search engines
- Shortcuts grid
- Pomodoro timer and 7-day pomodoro stats
- Daily focus card
- Quick note with preview mode for markdown-style formatting and checklists
- To-do list with priority, due date, pinning, and drag reorder
- Habit tracker with streak history
- World clocks
- Reading list
- Agenda / upcoming items
- Bookmarks with recent and folder views
- Top Sites
- Tab Groups
- Custom widgets
- AI quick actions
- AI tools section
- Google Apps section
- Social dock

## Browser integrations

OmSpace uses native Chromium APIs where they add value:

- `chrome_url_overrides` to replace the browser new tab page
- `bookmarks` for bookmark views
- `topSites` for the Top Sites widget
- `tabs` and `tabGroups` for the Tab Groups widget
- `storage` for persistent state and optional sync

## Installation

### Load unpacked

1. Clone or download this repository.
2. Open `chrome://extensions` in Chrome, Brave, Edge, Arc, or another Chromium browser.
3. Enable Developer mode.
4. Click Load unpacked.
5. Select the project folder that contains `manifest.json`.
6. Open a new tab.

### Upload a packaged build

If you are publishing or testing a packaged build, the ZIP must contain the extension files at the root level:

- `manifest.json`
- `index.html`
- `i18n-data.js`
- `script.js`
- `style.css`
- `icon-16.png`
- `icon-48.png`
- `icon-128.png`

Do not ZIP the parent folder itself, otherwise the store/uploader will not find `manifest.json` at the top level.

## How to use

### Customize the dashboard

- Open the settings panel from the bottom-right gear button.
- Use the settings tabs:
  - `Look`: accents, fonts, background, greeting, quote
  - `Layout`: visibility, layout lock, performance, Zen mode, sync toggle
  - `Tools`: weather, search, AI provider, shortcuts, name
  - `Data`: export, import, reset

### Rearrange cards

- Disable `Lock Layout` in settings.
- Drag cards freely.
- Re-enable `Lock Layout` when you are done.

### Switch profiles

- Use the profile chips in the center column to move between `Personal`, `Work`, and `Minimal`.
- Each profile keeps its own dashboard state while core preferences can still be synced.

### Edit content

- Add habits, world clocks, and custom widgets through the create modal.
- Use edit/manage controls for search engines, shortcuts, and AI tools.
- Export or import your setup from the Data tab.

## Data and privacy

OmSpace does not use an OmSpace-owned backend or telemetry service. By default, your dashboard state is stored locally in the browser.

Some features make optional network requests when you use them:

- Weather uses browser geolocation plus Open-Meteo and Nominatim reverse geocoding
- Quote of the day can fetch a remote quote and falls back to an offline quote list
- Custom backgrounds, presets, favicons, shortcuts, bookmarks, and external links can load third-party resources
- AI quick actions open the selected AI provider in a new tab and can read/write clipboard content when the browser allows it

If you enable `Sync Core Settings`, a subset of preferences is stored through `chrome.storage.sync` so it can follow your browser profile.

A standalone privacy policy page is also included in this repository:

- `privacy.html` for the publishable privacy policy content and structure
- `privacy.css` for the dedicated futuristic glass-styled presentation

## Permissions

| Permission | Why OmSpace uses it |
| --- | --- |
| `storage` | Save local state, settings, layout, and optional sync data |
| `bookmarks` | Render bookmark lists and folder view |
| `topSites` | Show frequently visited sites |
| `tabs` | Read current window tabs for tab group helpers |
| `tabGroups` | Show and focus browser tab groups |

## Project structure

```text
manifest.json   Extension manifest (Manifest V3)
index.html      New tab UI
i18n-data.js    Generated translation bundle
privacy.html    Standalone privacy policy page
privacy.css     Dedicated privacy policy styling
style.css       Design system, layout, and widget styling
script.js       State, rendering, widget logic, browser integrations
scripts/        Utility scripts (including i18n generation)
icon-16.png     Extension icon (16x16)
icon-48.png     Extension icon (48x48)
icon-128.png    Extension icon (128x128)
icon.png        Source artwork retained for reference
README.md       Project documentation
LICENSE         MIT license
```

## Development

There is no build pipeline. Edit the source files directly and reload the extension from `chrome://extensions`.

Recommended workflow:

1. Make a change in `index.html`, `style.css`, or `script.js`.
2. Reload the extension from the extensions page.
3. Open a fresh new tab and verify the behavior.

For quick syntax validation:

```bash
node --check script.js
```

## Compatibility

OmSpace is designed for Chromium-based browsers that support Manifest V3 new tab overrides, including:

- Google Chrome
- Microsoft Edge
- Brave
- Arc
- Other Chromium variants with extension support

## Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a branch for your change.
3. Make and verify your updates.
4. Open a pull request with a short explanation of the change.

If you are proposing a feature, bug fix, or UI improvement, an issue or discussion first is helpful.

## License

This project is released under the MIT License. See [LICENSE](LICENSE) for details.
