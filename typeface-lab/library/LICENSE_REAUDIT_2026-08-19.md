# Ruthie Open Font Library — license/provenance re-audit

Date: 2026-08-19
Scope: all 128 approved families through Batch 12.

## Policy used

The personal library may contain open licenses other than OFL, but every retained family must permit commercial use. We distinguish:

- **GREEN** — frictionless for ordinary commercial design use: OFL 1.1, CC0/public domain, Unlicense, WTFPL, or a similarly permissive font/source package with provenance preserved.
- **YELLOW** — commercially usable, but attribution, share-alike, copyleft, trademark, derivative-design, exact-build, or source-transport details deserve an operational warning.
- **RED** — not appropriate for the default commercial production pool without a deliberate legal/compliance decision.

Google Fonts candidates were rechecked at their `ofl/<family>` package level. Direct-source projects were checked against their upstream license/readme/package records. Earlier mirror URLs used only to make a browser demo render are not treated as provenance authority.

## Result

The large majority of the approved library remains **GREEN**. The following are the only items I currently want surfaced for a cut/keep decision or special handling.

### RED / strongest cut candidate

#### OCR-A — Batch 11
- **License found:** GNU GPL v3 in the exact reviewed repository (`bcssupp0rt/ocrafont`).
- Commercial use is allowed, but GPL is software copyleft and this package does **not** present the clean font-embedding exception that makes an OFL font painless to ship in web/app/product tooling.
- Using the shapes in rendered artwork is a different question from redistributing/embedding the font software, but our library is intended to be reusable without repeatedly reopening compliance analysis.
- **Recommendation:** cut from the frictionless production library. If Ruthie loves it, retain a clearly separated `research / copyleft` reference instead.

### YELLOW / commercially usable but operationally encumbered

#### Px437 IBM VGA 8×16 — Batch 11
- **License:** CC BY-SA 4.0 in the Oldschool PC Font Pack lineage.
- Commercial use is permitted.
- Requires attribution and ShareAlike treatment where the license applies to adaptations/redistribution.
- **Recommendation:** keep if desired because the hardware provenance is excellent, but mark `CC-BY-SA / attribution required` and do not treat it like OFL when redistributing font files.

#### Px437 OlivettiThin 8×16 — Batch 11
- Same Oldschool PC Font Pack licensing posture: **CC BY-SA 4.0**.
- Same recommendation as IBM VGA.

#### IBM 3270 — Batch 9
- Exact upstream `3270font` license is a permissive BSD-style license allowing source/binary redistribution with notice preservation.
- The package additionally documents separately licensed Debian/Ubuntu logo glyphs and trademarks.
- The FontForge SFD is optionally available under OFL 1.1 with no Reserved Font Name.
- **Recommendation:** keep. Archive from the official `rbanffy/3270font` source, preserve the BSD notice, and do not use the separately licensed distro-logo glyphs in products unless specifically needed.

#### UNSCII — Batch 9
- The project is Public Domain / CC0 **except** Unifont-derived files, specifically including `unscii-16-full.*`, which are GPL.
- Ruthie's selected **8-pixel** build is in the safe public-domain/CC0 side of the project.
- **Recommendation:** keep, but archive only the explicitly safe builds. Do not silently substitute `unscii-16-full` later.

#### Chomsky — Batch 4
- Font software: **SIL OFL 1.1**.
- Author explicitly warns that using the face to construct a confusing New York Times-like masthead/trademark can raise trademark questions even though ordinary typesetting is intended to be legal.
- **Recommendation:** keep. Add `avoid confusing NYT-style trademark use` to operational notes.

#### Mistral SingleLine — approved via Batch 9
- Package itself contains **SIL OFL 1.1** and open source files.
- It deliberately reinterprets Roger Excoffon's 1953 Mistral into a single-line fabrication font. That makes the software license clean while leaving a more general historical/derivative-design question that can vary by jurisdiction and use.
- **Recommendation:** keep for personal/research/fabrication experimentation unless Ruthie wants an ultra-conservative library; flag before high-profile commercial branding.

### YELLOW / source-transport cleanup, not a license problem

These were visually served from mirrors in at least one review page even though the canonical project was identified as openly licensed. Before production use, replace the review transport with a canonical upstream binary/source package and preserve its license alongside the file:

- **Kobata** — Batch 12
- **Alvarado** — reviewed in Batch 8/9 but not approved in the final Batch 9 result; no action needed unless revived later.
- **Amiamie** — Batch 9
- **Ancial** — Batch 9
- **Le Murmure** — Batch 9

This is archival hygiene, not evidence that the fonts are proprietary.

## Reverified non-OFL examples that are okay

- **GlassTTY VT220** — public-domain dedication / Unlicense; explicit commercial use permission.
- **Robotron Dot Matrix** — author explicitly marks both font and source code Public Domain.
- **AVHershey** — exact conversion repository ships under WTFPL; extremely permissive. Earlier shorthand calling it CC0 should be corrected in our notes.
- **Bedstead / APL2741** — retained only where the reviewed build is documented as CC0/public-domain.
- **IBM 3270** — permissive BSD as described above.

## Batch 12 textile confirmation

The twenty approved Batch 12 families pass the open/commercial-use gate:

- Soft Type knit/colorwork families and Charted siblings — OFL 1.1.
- ACSF historical cross-stitch families — OFL 1.1; underlying historical sampler sources are documented as public-domain material.
- Hovden Stitch — OFL 1.1.
- Amakan — OFL 1.1.
- Kobata — OFL 1.1; replace mirror transport with canonical package before production.

The ten Ink/Stitch machine-embroidery NO votes are not license failures. They remain a deferred lane only and are not counted as approved.

## Current cut review

If the goal is a library that can be used commercially with almost no compliance friction, the practical review set is:

1. **OCR-A — CUT / research-only?**
2. **Px437 IBM VGA 8×16 — KEEP with CC BY-SA obligations, or cut?**
3. **Px437 OlivettiThin 8×16 — KEEP with CC BY-SA obligations, or cut?**
4. **Mistral SingleLine — KEEP with derivative-design caution, or cut conservatively?**

IBM 3270, UNSCII 8-pixel and Chomsky do not currently need cuts in my view; their caveats are narrow enough to manage with operational notes.

## Continuing rule

Every future approval should store an exact license class (`OFL`, `CC0/PD`, `permissive`, `copyleft`, `share-alike`) instead of collapsing all of them into a single `open` boolean. That will prevent another full forensic pass later.
