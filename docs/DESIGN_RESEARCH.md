# Daft Punk Millennium — Design Research

**Date checked:** 2026-10-31  
**Purpose:** record the design vocabulary used for the rebuild and state what is original. No third-party artwork is bundled.

---

## 1. Technical sources (verified)

| Source | Key fact used | Implementation consequence |
| --- | --- | --- |
| [Millennium theme file structure](https://docs.steambrew.app/themes/basics/structure) | `skin.json` required; `UseDefaultPatches` maps `libraryroot`, `friends`, `bigpicture` | Chose custom `Patches` for more control |
| [Configuring a theme](https://docs.steambrew.app/themes/basics/config) | `Patches` match body class, window title, browser URL; warning against combining `UseDefaultPatches` with `Patches`/`Steam-WebKit` | One documented strategy only |
| [User configuration](https://docs.steambrew.app/themes/intermediate/user) | `Conditions` values with `TargetCss.affects`; `.*` for all windows | Five real option groups |
| [Root colors](https://docs.steambrew.app/themes/intermediate/colors) | A `:root`-only file can expose editable colours | Not used; era switching needs more than colour, so `Conditions` is the honest mechanism |
| [User scripts](https://docs.steambrew.app/themes/advanced/scripting) | JS is injected like CSS; `window.opener.Millennium.findElement` exists | JS avoided entirely; no polling or overlays |
| [Optimizing performance](https://docs.steambrew.app/themes/advanced/performance) | Prefer CSS, avoid heavy effects | Transform/opacity only, no infinite loops by default |
| [Millennium releases](https://github.com/SteamClientHomebrew/Millennium/releases) | Current releases in the 3.x line; local install is 2.30.0 | Theme uses only long-standing documented schema |

---

## 2. Visual references and extracted principles

| Reference | What was taken | What was **not** taken |
| --- | --- | --- |
| Daft Punk’s public visual language: mirrored helmets, visor slits, chrome, black, gold, cyan, stage lighting, grid/scanline retro-futurism | Material contrast (mirror vs matte), a single visor line as a structural motif, gold/cyan dual accents, black stage-like backgrounds | No helmet portraits, no album covers, no logo reproduction, no “official” styling |
| [Dribbble — futuristic dashboard](https://dribbble.com/search/futuristic-dashboard) | Layered dark surfaces, thin luminous rules, sparse data accents | No copied layouts or assets |
| [Dribbble — music player](https://dribbble.com/search/music-player) | Strong now-playing hierarchy, artwork-led cards, equalizer motif | No specific player UI copied |
| [Dribbble — glassmorphism](https://dribbble.com/search/glassmorphism) | Translucency used sparingly for the play bar and menus | No giant blurs; performance kept in check |
| [Pinterest — Daft Punk futuristic UI](https://www.pinterest.com/search/pins/?q=daft%20punk%20futuristic%20ui) | General retro-futurist vocabulary (chrome, grids, visor bands) | Pinterest results were not consistently openable/verifiable; no specific pin is claimed as a source |
| Official Daft Punk era aesthetics (Discovery gold, RAM chrome/silver, Tron blue, neon stage) | Seven era directions anchored in distinct materials, not seven hues of the same gradient | No commercial artwork or trademarks used as assets |

Community/Reddit evidence was treated as anecdotal: users value visual previews and customization, and report theme-loading issues after client updates. That informed the decision to keep the architecture documented and CSS-only, not to copy any specific user setup.

---

## 3. Design system

### Core material

- **Void black** stage (`#050506`–`#0b0b0e`) with a subtle era-tinted header and sidebar.
- **Chrome** hairline frame drawn inside the Steam web surface (1px + inset highlight), never a fake OS titlebar.
- **Visor light**: a 2px gradient line under the header and a 2px underline on the active navigation item.
- **Brushed panels**: low-contrast gradients, 1px borders, inset top highlight, deep but controlled shadows.
- **Spectrum plinth**: an original equalizer SVG at the bottom of the library rail.
- **Twin-helmet mark**: two original geometric helmet silhouettes with gold/cyan visor slits; not a reproduction of the real helmets.

### Era matrix

| Era | Accent | Geometry | Material / motif | Type treatment |
| --- | --- | --- | --- | --- |
| Discovery Era | Gold `#E8B341` | 6px | Warm black, diagonal hatch, amber glow | Wide uppercase, 700 |
| Get Lucky Disco | Pink `#FF5FA2` | 16px | Plum, mirror-ball dot matrix, champagne secondary | Italic display |
| Cyan Visor | Cyan `#4FE3EE` | 4px | Cold black, horizontal scanlines, visor band | Wide 600, 0.17em |
| Tron Legacy | Blue `#5FB6FF` | 2px | Black, perspective grid floor, angular edges | Wide 600, 0.22em |
| Neon Glow | Magenta `#FF4FD8` | 12px | Violet black, neon tube edges, pill controls | 700, 0.08em |
| Cosmic Voyager | Violet `#A78BFA` | 14px | Indigo, static starfield, nebula wash | 600, 0.14em |
| Classic Discovery | Antique gold `#D8B26A` | 6px | Brushed aluminium, matte, no glow | Heavy editorial, 0.16em |

### Motion

- `Still`: 0 ms, no lift.
- `Subtle`: 90/150/240 ms, 1px lift.
- `Cinematic` (default): 120/200/380 ms, 2px lift, no endless animation.
- `Overdrive`: 80/160/300 ms, 4px lift, slow visor breathe; no full-screen loops.
- OS `prefers-reduced-motion` always disables animation.

### Window treatment

- In-client frame + top visor line; pointer-events none.
- Native window buttons, drag regions, resize grips and snapping untouched.
- Friends/chat windows receive a thinner gold/era frame and a custom titlebar material.

---

## 4. Originality statement

All shipped SVG marks, textures, gradients, layouts and preview artwork were created for this project. No album art, portraits, logos, commercial artwork, third-party theme code or copied compositions are included. The theme is unofficial and not affiliated with Daft Punk or Valve.
