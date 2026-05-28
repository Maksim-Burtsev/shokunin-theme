import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const packageJson = JSON.parse(readFileSync("package.json", "utf8"));

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

test("contributes Shokunin Light and Shokunin Dark themes", () => {
  assert.equal(packageJson.displayName, "Shokunin");

  const themes = packageJson.contributes.themes;
  assert.equal(themes.length, 2);
  assert.deepEqual(
    themes.map(({ label, uiTheme, path }) => ({ label, uiTheme, path })),
    [
      {
        label: "Shokunin Light",
        uiTheme: "vs",
        path: "./themes/shokunin-sumi-ume-color-theme.json",
      },
      {
        label: "Shokunin Dark",
        uiTheme: "vs-dark",
        path: "./themes/shokunin-yoru-sumi-color-theme.json",
      },
    ],
  );
});

test("dark theme uses the Yoru Sumi / Warm Ink token contract", () => {
  const darkThemePath = "themes/shokunin-yoru-sumi-color-theme.json";

  assert.equal(existsSync(darkThemePath), true);

  const darkTheme = readJson(darkThemePath);
  assert.equal(darkTheme.name, "Shokunin Dark");
  assert.equal(darkTheme.type, "dark");
  assert.equal(darkTheme.semanticHighlighting, true);
  assert.equal(darkTheme.colors["editor.background"], "#151819");
  assert.equal(darkTheme.colors["sideBar.background"], "#1B1F1F");
  assert.equal(darkTheme.colors["editor.selectionBackground"], "#33424A");
  assert.equal(darkTheme.colors["editor.findMatchBackground"], "#CFC2B02E");
  assert.equal(darkTheme.colors["editor.findMatchBorder"], "#CFC2B08A");
  assert.equal(darkTheme.colors["editor.findMatchHighlightBackground"], "#CFC2B018");
  assert.equal(darkTheme.semanticTokenColors.keyword.foreground, "#D7C4AA");
  assert.equal(darkTheme.semanticTokenColors.function.foreground, "#6FB7D7");
  assert.equal(darkTheme.semanticTokenColors.method.foreground, "#6FB7D7");
  assert.equal(darkTheme.semanticTokenColors.class.foreground, "#E0CEB4");
  assert.equal(darkTheme.semanticTokenColors.parameter, "#CFC2B0");
  assert.equal(darkTheme.semanticTokenColors.type.foreground, "#D28AA0");
  assert.equal(darkTheme.semanticTokenColors.string, "#83BE8D");
  assert.equal(darkTheme.semanticTokenColors.number.foreground, "#D3A34D");
  assert.equal(darkTheme.semanticTokenColors.comment.foreground, "#88877E");
});
