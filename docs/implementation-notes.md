# Implementation notes

## Exact visual target

The light theme is based on calibration variant **23 Sumi / Ume Type**.

The dark theme is based on the **Yoru Sumi** concept.

The only acceptable final class/type pairing is:

```json
{
  "class": "#3A3E44",
  "type": "#8F4155"
}
```

## Typography caveat

VS Code color themes can define colors and token styles. They cannot force a user's global `editor.fontFamily`, `editor.fontSize`, or `editor.lineHeight`.

## Python / Pylance

The theme includes defensive semantic selectors for type hints:

```json
"typeHint:python"
"class.typeHint:python"
"variable.typeHint:python"
"parameter.typeHint:python"
```

These are included because Python semantic highlighting can distinguish type-hint contexts more precisely than TextMate scopes alone.

## Marketplace / picker naming

- Extension id stays `maksim-burtsev.shokunin-light` for update continuity.
- Marketplace display name is `Shokunin`.
- Theme picker labels are `Shokunin Light` and `Shokunin Dark`.
