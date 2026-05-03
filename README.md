# Shokunin Light

A rice-paper light theme for VS Code, tuned for Python-focused craft.

Final theme label: **Shokunin Sumi Ume**.

## Palette

| Role | Color |
|---|---:|
| Paper / editor background | `#FCFAF2` |
| Main ink | `#303841` |
| Keywords / class names | `#3A3E44` |
| Functions / methods | `#006FAE` |
| Type hints | `#8F4155` |
| Strings | `#157A5B` |
| Constants / numbers | `#9A6000` |
| Comments | `#777269` |

## Debug locally

1. Open this folder in VS Code.
2. Press `F5` or run **Debug: Start Debugging**.
3. A new Extension Development Host window opens with `examples/` and the theme selected.
4. Open `theme_engine.py`, `Dockerfile`, `settings.yaml`, and `theme.json`.

The included workspace sets:

```json
{
  "workbench.colorTheme": "Shokunin Sumi Ume",
  "editor.fontFamily": "Monaco, Menlo, Consolas, 'Courier New', monospace",
  "editor.fontSize": 13,
  "editor.lineHeight": 16,
  "editor.semanticHighlighting.enabled": true
}
```

Theme extensions cannot enforce editor font family or line height globally for users; these are included in the debug workspace to match the calibration preview as closely as possible.

## Package

```bash
npm install
npm run package
```

## Publish

```bash
npm run publish
```

## Notes

The theme uses both TextMate token colors and semantic token colors. The semantic layer is especially important for Python/Pylance so that functions, methods, classes, type hints, enum members, constants, and properties can keep their intended roles.
