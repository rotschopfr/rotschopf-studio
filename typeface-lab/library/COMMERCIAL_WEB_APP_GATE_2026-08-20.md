# Ruthie Open Font Library — commercial web/app gate

Date: 2026-08-20
Scope: 261 approved families through Batch 15.

## Decision

**260 families remain in the commercial web/app production pool. One implementation is removed from that pool: OCR-A from `bcssupp0rt/ocrafont`.**

The gate is specifically for commercial web/app rendering and shipping/serving the font software. It is stricter than merely asking whether commercial artwork may be produced.

## RED — remove from default production workspace

### OCR-A (Batch 11)
Exact reviewed implementation: `bcssupp0rt/ocrafont`.
License: GPL v3, with no font embedding exception found in the package.
Commercial use is permitted by GPL, but serving or bundling the font software creates source/copyleft distribution obligations that are unnecessary for this library. Keep the OCR-A design lane as a research reference and replace it later with an OFL/permissive implementation of the standard.

**Production action: excluded from the consolidated workspace.**

## YELLOW — allowed in commercial web/app production with notices/guardrails

- **Px437 IBM VGA 8×16** — CC BY-SA 4.0. Commercial use allowed. Preserve attribution and ShareAlike obligations when redistributing/adapting the font software.
- **Px437 OlivettiThin 8×16** — CC BY-SA 4.0. Same handling.
- **IBM 3270** — permissive BSD-style license. Preserve notice; avoid separately licensed Debian/Ubuntu logo glyphs unless deliberately needed.
- **UNSCII** — use only the selected safe 8-pixel public-domain/CC0 build. Never silently substitute `unscii-16-full.*`, which contains GPL-derived material.
- **Chomsky** — OFL 1.1. Avoid confusing New York Times-style masthead/trademark simulation.
- **Mistral SingleLine** — OFL 1.1 package; retain a derivative-design caution for high-profile branding because the project deliberately reinterprets Excoffon's Mistral.
- **AVHershey** — WTFPL v2; commercially permissive. Preserve exact upstream license rather than incorrectly calling it CC0.
- **Robotron Dot Matrix** — upstream author declares public domain; preserve that declaration with the archived source.
- **GlassTTY / APL2741 / Bedstead** — public-domain/CC0-style upstream releases; preserve exact upstream statements.

These warnings do **not** remove the fonts from the commercial workspace.

## GREEN

All other approved families through Batch 15 remain cleared for the commercial production pool under the already verified OFL 1.1, CC0/public-domain, BSD/permissive, WTFPL, or equivalent open/commercial-use package evidence recorded in the project. Batch 14 and Batch 15 were admitted from open-font packages and are retained. Batch 13's family-expansion candidates were admitted from source-verified open/commercial-use projects.

## Transport hygiene

For Amiamie, Ancial, Le Murmure, Kobata, and any other review card that temporarily used a mirror, production acquisition must use the canonical upstream package. Review mirrors are not provenance authority.

## Counts

- User-approved families through Batch 15: **261**
- Removed from default commercial web/app production pool: **1** (`OCR-A` implementation)
- Commercial workspace families after gate: **260**

This gate concerns font software distribution/embedding. It is not a substitute for trademark review of a particular logo/masthead or for preserving license notices when redistributing font binaries.
