# Daft Punk Millennium — Audit Report

**Date:** 2026-10-31  
**Auditor:** OpenCode mission run  
**Project root:** `<workspace>/DaftPunk-Millennium`  
**Installed copy used for runtime checks:** `C:\Program Files (x86)\Steam\millennium\themes\DaftPunk-Millennium`  
**Remote:** `https://github.com/shambrain/DaftPunk-Millennium`  
**Runtime environment:** Steam client changelist `11146165`, CEF `126.0.6478.183`, Millennium Core `2.30.0`

This audit distinguishes **static evidence**, **runtime evidence**, and **unverified claims**. It does not treat previous AI output, README claims, or comments as proof.

---

## 1. Starting state

### Repository

- The local working tree was on `main` with substantial **uncommitted user work**: the old modular tree (`theme.json`, `css/`, `js/`, `options/`) was deleted, and a newer v2.1 tree (`skin.json`, `themes/`, `fonts/`, `enhancements/`, `libraryroot.custom.*`) was untracked.
- The remote `main` still held the older modular tree.
- The local state was preserved before any rewrite:
  - Branch `rework/mission-v1.1` snapshot commit (see `git log`).
  - Full worktree copy in `_archive/2026-10-31/DaftPunk-worktree`.
  - Git bundle of all refs in `_archive/2026-10-31/DaftPunk-Millennium-all-refs.bundle`.
  - Installed copy backup in `_archive/2026-10-31/DaftPunk-installed`.
- Nothing was force-pushed, reset, or cleaned.

### Metadata

| Finding | Severity | Evidence | Action |
| --- | --- | --- | --- |
| `skin.json` GitHub owner was `DaftPunk-Millennium` instead of `shambrain` | Blocker for publication | File read | Corrected |
| `skin.json` combined `UseDefaultPatches: true` with `Steam-WebKit` | High | File read; Millennium docs warn against this combination | Replaced with a documented custom `Patches` list |
| `header_image`/`splash_image` pointed at a third-party imgur upload | Medium | File read | Replaced with repository-owned original preview artwork |
| Version `2.1.0` described features that were not implemented | High | Source/README comparison | Version raised to `3.0.0`; README rewritten to match verified behaviour |

### CSS

| Finding | Severity | Evidence | Action |
| --- | --- | --- | --- |
| Base styles copied from “Steam 2.0 Modular by Von-Amadeus”, including comments and hashed selectors | High (licensing/originality) | File headers and selector set | Removed; new original material system written |
| Hundreds of lines of opaque 2025 hashed selectors | High | Selectors did not exist / were stale in the installed client for several components | Replaced with selectors verified in the current client (`.TopBar`, `.LibraryHome`, `.LibraryItemBox`, `.GameListEntryContainer`, `.PlayBar`, `.AppDetailsSection`, `.friendsui-container`, `.chatWindow`, etc.) |
| Universal `* { transition: … }` rule | Medium (performance) | `libraryroot.custom.css` | Removed |
| Global `*:focus` outline and `*` text smoothing | Medium (accessibility/noise) | `webkit.css` | Replaced with `:focus-visible` on real interactive components |
| Seven era files differed mostly by gradient variables | High (creative brief) | All seven files | Rewritten with distinct material, geometry, typography, background motifs and radius per era |
| `@import "../libraryroot.custom.css"` inside every era file | High (duplicate loads/order) | Era files | Removed; one base file, era files only override tokens and add scoped rules |
| `--dp-*`/era tokens could be overridden by base `:root` depending on injection order | High | Runtime test with Millennium | Base defaults moved to `:where(:root)` so era/option files always win |
| Chat invite primary button stayed Steam-blue | Low | Runtime computed style | Explicit high-specificity chat primary rule with `!important` |
| Store CSS loaded before the store’s own stylesheets | High | Runtime computed style | `html body …` specificity and `!important` on critical surface properties |

### JavaScript

| Finding | Severity | Evidence | Action |
| --- | --- | --- | --- |
| `libraryroot.custom.js` injected a friends-panel toggle, fixed watermark and hidden overlay | High (unsafe/unnecessary) | File read | Removed entirely; no JS remains |
| `setInterval` polling for `window.opener.Millennium` without timeout | High | Prior code / mission baseline | Removed |
| DOM listeners reattached on re-initialisation | High | Prior code | Removed |
| Random styling choices and fixed-position UI | High | Prior code | Removed |

The rebuilt theme contains **zero `.js` files**. Purely visual requirements are met with CSS and documented `Conditions`.

### Assets

| Finding | Severity | Evidence | Action |
| --- | --- | --- | --- |
| No real visual assets in the local tree | High | `assets/` absent before rebuild | Added original SVGs and generated preview artwork |
| Fonts in the old configuration were remote Google Fonts imports, not local files | Medium | `fonts/*.css` | Bundled Chakra Petch TTF files with OFL licence and verified metadata |

---

## 2. Claims audit

| Previous claim | Verified? | Result |
| --- | --- | --- |
| “Seven distinct themes” | Partially | Seven files existed, but they were mostly gradient swaps. Rewritten to be structurally distinct. |
| “Millennium integration” | No | Metadata combined incompatible options. Rebuilt with documented `Patches` and `Conditions`. |
| “Friends panel toggle” | No | Unnecessary JS was removed. Steam already provides native friends-list controls. |
| “Font customization” | No | Old files imported Google Fonts and applied universal `!important`. Replaced with bundled TTFs and one real option. |
| “Animations / reduced motion” | Partially | Some rules existed; they were global and not mapped to an option. Rebuilt as four motion levels with reduced-motion support. |
| “UI enhancement levels” | No | Files duplicated broad styling and did not map to a coherent system. Removed and replaced by era/material system. |
| “Performance optimizations” | No evidence | No measurements existed. Current theme avoids loops, observers, large blurs and always-running animations by default. |

---

## 3. What was implemented

- New `skin.json`:
  - Correct owner/repository metadata.
  - Version `3.0.0`.
  - Documented custom `Patches` covering main UI, overlays, notifications, menus, dialogs, Friends, Big Picture, store and community.
  - Seven era values, four motion values, three density values, frame on/off, two typography values.
- New base material system with:
  - Chrome, visor light, in-client frame, sidebar rail, top-bar material, game tiles, play bar, app-details panels, dialogs, context menus, notifications, scrollbars, focus states.
  - Era-specific top-bar/sidebar/wordmark tokens.
- New Friends/Chat styling with native behaviour preserved.
- New Big Picture token remap.
- New store/community styling with conservative, specificity-safe rules.
- Original SVG assets: twin-helmet mark, compact visor mark, visor lines, grid, spectrum.
- Bundled Chakra Petch TTFs (Regular/SemiBold/Bold), verified with fontTools.
- Original preview artwork (generated, not screenshots of third-party content).
- README, research notes, validation report and this audit.

---

## 4. Runtime evidence

Runtime checks used `steam.exe -cef-enable-debugging`, CDP inspection of the live DOM, and Millennium’s own theme/condition loader. Screenshots were inspected locally. Published previews are **original artwork**, not client screenshots, to avoid exposing personal account/friend data and third-party cover art.

Verified in the live client:

1. Theme CSS injected from `https://millennium.host/v1/themes/DaftPunk-Millennium/...`.
2. Library home, game details, Friends List, detached chat, Settings window, and store page rendered with the theme.
3. Millennium loaded `discovery-era.css`, `motion-cinematic.css`, `density-standard.css`, `frame-yes.css`, `type-helmet.css`.
4. A real condition switch to **Tron Legacy + Overdrive + Spacious** loaded exactly `tron-legacy.css`, `motion-overdrive.css`, `density-spacious.css`.
5. A real condition switch to **Neon Glow + Subtle + Compact + frame no + System Clean** loaded exactly `neon-glow.css`, `motion-subtle.css`, `density-compact.css`, `frame-no.css`, `type-system.css`; computed accent was `#ff4fd8`, frame opacity `0`, font Motiva Sans.
6. Chat invite primary button, composer focus ring, titlebar frame and tabs were visually checked.
7. Store page background/font/accent rules applied despite store CSS loading after the theme.
8. The native menu bar, window controls, chat controls and game launch button were left functional in the inspected states.

### Not verified

- All seven eras loaded **by Millennium** via the settings UI. All seven were rendered in the live client via a controlled link swap and visually checked; two eras were loaded by Millennium itself.
- Big Picture / Quick Access / MainMenu surfaces.
- Typing, sending, attachments, emoji/reactions, unread states, context menus in every chat state.
- DPI scaling, multi-monitor, maximized/restored transitions.
- Keyboard-only navigation and screen-reader behaviour.
- Community pages and store checkout.
- Windows 10.

---

## 5. Remaining risks

1. **Steam DOM drift.** Hashed classes and some semantic classes can change. Semantic selectors are preferred, but a future client update may require small fixes.
2. **Millennium version drift.** Tested on Core 2.30.0. Newer 3.x versions use the same documented schema but may change the settings UI or injection timing.
3. **Store styling.** The store’s new front end loads CSS after themes; the current rules are specificity-safe but a major store redesign could override them.
4. **Big Picture.** Token remap only; no visual verification.
5. **Native chrome.** The Windows titlebar is not themed and cannot be themed by this mechanism.

---

## 6. Next exact task

Load the theme through the Millennium UI on the owner’s current Millennium/Steam versions, then capture the remaining runtime evidence in this order:

1. Big Picture / Quick Access.
2. Each era switched through the in-client dropdown (not link injection).
3. Chat typing/attachment/emoji states in a test conversation.
4. Community profile and store checkout smoke test.
5. 125%/150% DPI and a second monitor.
