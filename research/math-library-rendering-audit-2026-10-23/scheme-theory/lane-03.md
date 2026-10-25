# Scheme Theory — lane 03 rendering audit

Reviewed all 110 assigned items and all 248 receipt-listed screenshot tiles. Every tile was opened individually at original resolution; image hashes and dimensions match the capture receipts. Frozen source, snapshot, and local HTML hashes were verified against assignment records.

## Confirmed title rendering findings

- **cex-alpha-p-mu-p-rational-points-do-not-detect-scheme**, [source line 4](/home/lazyinspirit/Projects/prestige-math-library/items/cex-alpha-p-mu-p-rational-points-do-not-detect-scheme.md:4). The title prints alpha_p and mu_p as ordinary baseline text, while the statement correctly uses the math symbols α_p and μ_p. Suggested repair: Use inline math or Unicode subscripts, for example $\alpha_p$ and $\mu_p$. Screenshot: `screenshots/cex-alpha-p-mu-p-rational-points-do-not-detect-scheme--01.png`.
- **cor-h1-line-bundle-dual-sections**, [source line 4](/home/lazyinspirit/Projects/prestige-math-library/items/cor-h1-line-bundle-dual-sections.md:4). The title prints h^1 with the caret and numeral as literal text; this is the cohomological dimension h^1 used in the body. Suggested repair: Format the notation as $h^1$ or use a Unicode superscript. Screenshot: `screenshots/cor-h1-line-bundle-dual-sections--01.png`.
- **ex-strict-transform-cusp-first-blowup**, [source line 4](/home/lazyinspirit/Projects/prestige-math-library/items/ex-strict-transform-cusp-first-blowup.md:4). The title prints the cusp equation with literal caret characters rather than as mathematical notation. Suggested repair: Format the equation as $y^2=x^3$. Screenshot: `screenshots/ex-strict-transform-cusp-first-blowup--01.png`.
- **lem-e-ideals-and-commutator-trace**, [source line 4](/home/lazyinspirit/Projects/prestige-math-library/items/lem-e-ideals-and-commutator-trace.md:4). The title prints E_i with a literal underscore; the subscripted family notation is used in the item body. Suggested repair: Format the notation as $E_i$ or use a Unicode subscript. Screenshot: `screenshots/lem-e-ideals-and-commutator-trace--01.png`.
- **thm-obstructions-lie-in-ext-two-cotangent-complex**, [source line 4](/home/lazyinspirit/Projects/prestige-math-library/items/thm-obstructions-lie-in-ext-two-cotangent-complex.md:4). The title prints Ext^2 with the caret and numeral as literal text, while the statement uses the Ext^2 group. Suggested repair: Format the notation as $\operatorname{Ext}^2$. Screenshot: `screenshots/thm-obstructions-lie-in-ext-two-cotangent-complex--01.png`.

## Diagram review

No high-likelihood missing diagram was identified. Displayed commutative maps, squares, and relations are legible in the rendered ItemBodies.

## Complete coverage and evidence

The companion [lane-03.json](/home/lazyinspirit/Projects/prestige-math-library/research/math-library-rendering-audit-2026-10-23/scheme-theory/lane-03.json) lists all 110 assigned items, every screenshot tile, its SHA-256 hash and dimensions, and the individual original-resolution view attestation.
