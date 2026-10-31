# Daft Punk Millennium — Validation Report

**Date:** 2026-10-31  
**Theme version:** 3.0.0  
**Validator:** `_tools/validate_theme.py` (tinycss2, fontTools, ElementTree)  
**Result:** **Static checks passed** — 0 errors.

This report separates static validation from Steam runtime testing. Static checks do not prove visual correctness in the client.

---

## 1. Static checks (passed)

```
=== DaftPunk-Millennium
strategy: Patches
css_files: 22
important_count: 60
unreferenced_css: []
svg_count: 5
fonts: Chakra Petch Regular/SemiBold/Bold, 773 glyphs each
js_files: []
file_count: 47
STATIC RESULT: PASS (no errors)
```

Checks performed:

- `skin.json` parses as JSON and contains required metadata.
- GitHub metadata owner is `shambrain`.
- Exactly one injection strategy: custom `Patches`; no `UseDefaultPatches` + `Patches`/`Steam-WebKit` combination.
- Every `Patches[].TargetCss` and `Conditions[].TargetCss.src` file exists.
- Every `affects` regex compiles.
- Every `Conditions` default exists in its values.
- All 22 CSS files parse without syntax errors.
- All relative `url()` references resolve to real files.
- All 5 SVGs parse as XML.
- All 3 TTF files have a valid sfnt header and readable fontTools metadata; no file is a 0-byte placeholder.
- No JS files exist.
- No `.steamui_*` guesses.
- No unreferenced CSS files.

### Warnings and assessment

- The validator reports a universal selector in `bigpicture`, `friends`, `libraryroot` and `webkit`. Each is inside a `prefers-reduced-motion` reset (`*`, `*::before`, `*::after`, or `html body *`). This is intentional and limited to motion suppression. No global colour/background/transform universal rules exist.
- `!important` count is 60. The majority are deliberate:
  - store CSS is loaded *after* theme CSS by the new storefront, so critical surface properties need `!important` + `html body` specificity;
  - Steam sets some component backgrounds inline/high-specificity (primary dialog buttons, top bar);
  - reduced-motion resets.
  No universal `!important` colour override exists.

---

## 2. Asset validation

| Asset | Check | Result |
| --- | --- | --- |
| `assets/fonts/ChakraPetch-Regular.ttf` | sfnt header, size 78,488 B, family “Chakra Petch Regular”, 773 glyphs | Valid |
| `ChakraPetch-SemiBold.ttf` | 78,604 B, family “Chakra Petch SemiBold” | Valid |
| `ChakraPetch-Bold.ttf` | 78,384 B, family “Chakra Petch Bold” | Valid |
| `assets/fonts/OFL.txt` | licence file present | Valid |
| `assets/daft-punk-mark.svg` | XML parse | Valid |
| `assets/mark-visor.svg` | XML parse | Valid |
| `assets/visor-lines.svg` | XML parse | Valid |
| `assets/grid.svg` | XML parse | Valid |
| `assets/spectrum.svg` | XML parse | Valid |
| `assets/previews/*.png` | generated original artwork, no personal data | Present |

No third-party images, album art, portraits, or third-party theme code are bundled.

---

## 3. Steam runtime testing (actually performed)

**Environment:** Steam changelist `11146165`, CEF `126.0.6478.183`, Millennium Core `2.30.0`, Windows. CEF remote debugging enabled with `-cef-enable-debugging`.

Evidence collected through live DOM inspection and screenshots (screenshots retained locally only; published previews are original artwork):

| Surface | Evidence | Status |
| --- | --- | --- |
| Theme discovery/load | CSS links served from `https://millennium.host/v1/themes/DaftPunk-Millennium/...` | Runtime tested |
| Default conditions | `discovery-era`, `motion-cinematic`, `density-standard`, `frame-yes`, `type-helmet` loaded | Runtime tested |
| Condition switch A | Millennium loaded Tron Legacy + Overdrive + Spacious; correct files only | Runtime tested |
| Condition switch B | Millennium loaded Neon Glow + Subtle + Compact + frame no + System Clean; computed accent `#ff4fd8`, frame `0`, font Motiva Sans | Runtime tested |
| Library home | Sidebar, top bar, shelves, tiles, wordmark, spectrum inspected | Runtime tested |
| Game details | Hero, play bar, gold Play button, panels, tabs inspected | Runtime tested |
| Friends/Chat | Detached chat window, tabs, composer, invite button, titlebar inspected | Runtime tested |
| Settings window | Frame, buttons, cards, typography inspected; screenshot withheld because it contained private account data | Runtime tested |
| Store shell | Background, font, heading, cards inspected | Runtime tested |
| Context menu | Game Manage menu inspected | Runtime tested |
| All seven eras visual rendering | Rendered in live client via controlled stylesheet swap | Visually inspected (not all via Millennium UI) |
| Big Picture / Quick Access | Not opened | Not verified |
| Full chat interaction matrix | Not executed | Not verified |
| Community pages / checkout | Not executed | Not verified |
| DPI/multi-monitor/keyboard-only | Not executed | Not verified |

---

## 4. Package checks

| Check | Result |
| --- | --- |
| Release ZIP | `dist/DaftPunk-Millennium-3.0.0.zip` |
| Extracted root | `DaftPunk-Millennium/skin.json` directly inside the ZIP root folder |
| Extracted file count | 48 |
| `_references`, `.git`, `.cursor`, local backups | Absent |
| Personal data strings | No account names, emails or local user paths |
| Preview images | Original generated artwork, small PNGs |

ZIP size and SHA-256 are recorded in the workspace release notes (`OPENCODE_PROGRESS.md`) after the final build, because a ZIP cannot contain its own hash.

The ZIP was extracted to a temporary folder and inspected before publication.

---

## 5. Honest conclusion

- **Implemented:** yes.
- **Static checks passed:** yes.
- **Runtime tested:** yes, for the surfaces listed above.
- **Fully verified across all Steam surfaces/options:** no.
- **Known blockers:** none for the core theme; remaining items are unverified test coverage, not known failures.
