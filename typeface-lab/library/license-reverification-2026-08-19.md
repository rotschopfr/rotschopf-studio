# Open Font Library — license reverification

Re-audit date: 2026-08-19
Scope: every currently approved family through Batch 12, using the library decision records plus current upstream source/license evidence. This is an operational license audit for an open/commercial-use personal library, not legal advice.

## Result

The large majority of approved families remain straightforward open-font keeps: SIL Open Font License 1.1, CC0/public-domain releases, or similarly permissive licenses with clean upstream provenance.

The items below are the only ones that currently deserve a human keep/cut decision or a special handling rule. Everything not listed below remains green under the existing admission gate.

## REVIEW — material obligations / mixed-license details

### OCR-A — REVIEW / implementation-specific license issue
- Selected source: `bcssupp0rt/ocrafont`.
- Current repository license: GNU GPL v3.
- Commercial use is allowed, but redistribution/embedding of the font is materially more cumbersome than OFL because GPL source/copyleft obligations can travel with conveyed copies. The repository does not supply the usual font-embedding exception.
- User decision: **do not cut yet**. Keep the OCR-A design concept in the library while we explain/review this specific digital implementation and search for a cleaner OFL/permissive implementation if useful.

### Px437 IBM VGA 8×16 — KEEP / usable with obligations
- Oldschool PC Font Pack licensing: CC BY-SA 4.0.
- Commercial use is allowed.
- Attribution is required; adaptations must remain under the same license.
- User decision: **KEEP**. Treat it as a conditional-use font with attribution/share-alike obligations, not an OFL-clean drop-in.

### Px437 OlivettiThin 8×16 — KEEP / usable with obligations
- Same Oldschool PC Font Pack license family: CC BY-SA 4.0.
- Commercial use is allowed with attribution/share-alike obligations.
- User decision: **KEEP** with the same handling rule as IBM VGA 8×16.

### IBM 3270 — KEEP / with subsetting rule
- Core font/source lineage is under a BSD-style permissive license and allows source/binary redistribution with notices.
- The upstream license separately calls out a Debian logo glyph under CC BY-SA 3.0/LGPL terms and Ubuntu logo/trademark material.
- User decision: **KEEP** the family. Archive and deploy a logo-free subset for ordinary Spatial Press/product work; do not treat the special logo glyphs as part of the clean commercial-use subset.

## KEEP — unusual but very permissive dedications

### AVHershey — KEEP / metadata correction
- Earlier shorthand said CC0/public-domain-compatible.
- Exact upstream `COPYING` file is actually **WTFPL v2**.
- WTFPL is extremely permissive, including commercial copying/modification/distribution, but it is an unusual/nonstandard license.
- User decision: **KEEP**. Correct archive metadata to WTFPL v2.

### GlassTTY VT220 — KEEP / permissive public-domain dedication
- Exact upstream license is the Unlicense/public-domain dedication and explicitly allows copying, modification, publishing, sale and distribution for commercial or non-commercial purposes.
- User decision: **KEEP**.

### Robotron Dot Matrix — KEEP / author-declared public domain
- Upstream README explicitly says both font and source code are PUBLIC DOMAIN and links the Creative Commons Public Domain Mark.
- This is clear authorial intent, but the Public Domain Mark is a status label rather than the more formal CC0 waiver/fallback license.
- User decision: **KEEP**; mark `public-domain-declared` rather than pretending it is OFL/CC0.

### APL2741 — KEEP / public-domain distribution
- Distributed as public domain in the source lineage used by the lab.
- User decision: **KEEP**, preserving the exact source/readme statement with the archived font.

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

## User decision after audit

- **Do not cut any of the non-OCR-A review items.** All remain approved with the handling rules above.
- **OCR-A remains pending, not cut.** The concern belongs to the particular GPLv3 implementation currently in the lab, not to the historical OCR-A design/standard itself.
- There is no requirement that the personal library contain only OFL fonts; unusual but permissive licenses are acceptable when their exact obligations are documented.
