# Open Font Library — license reverification

Re-audit date: 2026-08-19
Scope: every currently approved family through Batch 12, using the library decision records plus current upstream source/license evidence. This is an operational license audit for an open/commercial-use personal library, not legal advice.

## Result

The large majority of approved families remain straightforward open-font keeps: SIL Open Font License 1.1, CC0/public-domain releases, or similarly permissive licenses with clean upstream provenance.

The items below are the only ones that currently deserve a human keep/cut decision or a special handling rule. Everything not listed below remains green under the existing admission gate.

## REVIEW — material obligations / mixed-license details

### OCR-A — REVIEW / easiest cut candidate
- Selected source: `bcssupp0rt/ocrafont`.
- Current repository license: GNU GPL v3.
- Commercial use is allowed, but redistribution/embedding of the font is materially more cumbersome than OFL because GPL source/copyleft obligations can travel with conveyed copies. The repository does not supply the usual font-embedding exception.
- Recommendation: **quarantine or cut this implementation** unless we specifically want to maintain GPL compliance for it. Prefer replacing it later with a clean OFL/permissive OCR-A implementation if we find one.

### Px437 IBM VGA 8×16 — REVIEW / usable with obligations
- Oldschool PC Font Pack licensing: CC BY-SA 4.0.
- Commercial use is allowed.
- Attribution is required; adaptations must remain under the same license.
- Recommendation: keep if attribution/share-alike is acceptable. Treat it as a conditional-use font, not an OFL-clean drop-in.

### Px437 OlivettiThin 8×16 — REVIEW / usable with obligations
- Same Oldschool PC Font Pack license family: CC BY-SA 4.0.
- Commercial use is allowed with attribution/share-alike obligations.
- Recommendation: same handling as IBM VGA 8×16.

### IBM 3270 — REVIEW / keep with subsetting rule
- Core font/source lineage is under a BSD-style permissive license and allows source/binary redistribution with notices.
- The upstream license separately calls out a Debian logo glyph under CC BY-SA 3.0/LGPL terms and Ubuntu logo/trademark material.
- Recommendation: keep the font, but archive and deploy a **logo-free subset** for ordinary Spatial Press/product work. Do not treat the special logo glyphs as part of the clean commercial-use subset.

## REVIEW — unusual but very permissive dedications

### AVHershey — REVIEW / metadata correction, not a practical blocker
- Our earlier shorthand said CC0/public-domain-compatible.
- Exact upstream `COPYING` file is actually **WTFPL v2**.
- WTFPL is extremely permissive, including commercial copying/modification/distribution, but it is an unusual/nonstandard license.
- Recommendation: keep unless the library policy is narrowed to standard licenses only. Correct the archive metadata to WTFPL v2.

### GlassTTY VT220 — REVIEW / permissive public-domain dedication
- Exact upstream license is the Unlicense/public-domain dedication and explicitly allows copying, modification, publishing, sale and distribution for commercial or non-commercial purposes.
- Recommendation: keep. Flag only because the license is not OFL/CC0.

### Robotron Dot Matrix — REVIEW / author-declared public domain
- Upstream README explicitly says both font and source code are PUBLIC DOMAIN and links the Creative Commons Public Domain Mark.
- This is clear authorial intent, but the Public Domain Mark is a status label rather than the more formal CC0 waiver/fallback license.
- Recommendation: keep for normal use; mark `public-domain-declared` rather than pretending it is OFL/CC0.

### APL2741 — REVIEW / public-domain distribution
- Distributed as public domain in the source lineage used by the lab.
- Recommendation: keep, but preserve the exact source/readme statement with the archived font.

## GREEN WITH A FILE-SELECTION RULE

### UNSCII
- Upstream explicitly says the project can be considered Public Domain / CC0 **except** files derived from Roman Czyborra's Unifont project, specifically including `unscii-16-full.*`, which are GPL.
- Our selected 8-pixel build is outside that GPL exception.
- Rule: archive/use `unscii-8.*` and other explicitly non-Unifont-derived builds; never silently substitute the `16-full` family.

## GREEN WITH AN ACQUISITION RULE

Some review pages used mirrors only to get a live browser specimen. This does **not** become provenance authority. For retained archives, reacquire from the canonical project/source package and preserve its license there. This applies especially to mirror-served specimens such as Le Murmure, Amiamie, Ancial and Kobata. Their review transport should not be mistaken for their license source.

## GREEN / RECONFIRMED EXAMPLES WITH DIRECT SOURCE EVIDENCE

- Cerne: upstream repository includes `OFL.txt` alongside the Glyphs source and compiled font.
- Mistral SingleLine: upstream isdaT repository includes `OFL.txt`, authors/contributors, sources and compiled fonts.
- GlassTTY VT220: upstream repository includes the explicit Unlicense/public-domain dedication.
- Robotron Dot Matrix: upstream author explicitly declares font and source PUBLIC DOMAIN.
- UNSCII: upstream README precisely separates PD/CC0 builds from GPL-containing `16-full` artifacts.
- IBM 3270: exact upstream license text was re-read; BSD-style core plus separate logo-glyph notices.
- AVHershey: exact `COPYING` file was re-read and corrected to WTFPL v2.
- Px437 IBM VGA / OlivettiThin: archive metadata points to Oldschool PC Font Pack CC BY-SA 4.0 terms.
- OCR-A: exact repository `LICENSE` is GPL v3.

## Batch 12

All twenty YES choices in the textile batch passed the same open/commercial-use admission rule before review:
- Soft Type knit/chart families: OFL 1.1.
- ACSF historical cross-stitch families: OFL 1.1; source project documents commercial use of charts generated from the fonts.
- Hovden Stitch: OFL 1.1.
- Amakan: OFL 1.1.
- Kobata: OFL 1.1 at canonical project level; do not archive the review mirror as the authoritative binary/source.

The ten stitch-native Ink/Stitch NOs are not license failures. They remain quietly deferred for a later embroidery-specific lane.

## Current cut board

If the goal is a zero-friction commercial font library, the practical cut/quarantine board is:
1. **OCR-A implementation from `bcssupp0rt/ocrafont`** — GPL v3 without a font exception.
2. **Px437 IBM VGA 8×16** — optional cut only if CC BY-SA obligations are unwanted.
3. **Px437 OlivettiThin 8×16** — same.
4. **IBM 3270 special logo glyphs** — cut/subset the glyphs, not necessarily the family.
5. **AVHershey** — keep unless unusual-license policy alone bothers us; metadata must say WTFPL v2.
6. **Robotron / APL2741 / GlassTTY** — keep unless we decide the library must use only standardized modern font licenses.

No other approved family currently needs a cut decision from the license audit.