# Scheme Theory rendering audit — lane 04

Reviewed all 110 assigned items and all 236 receipt-listed revision-2 screenshot tiles. Every PNG tile was opened individually with tools.view_image at original resolution. SHA-256 hashes matched for all 110 source snapshots, 110 local HTML files, and 236 PNG tiles.

Confirmed findings: 4 title-formatting issues across 4 items.

## cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two

- Section: Title
- Source lines: 4
- Symptom: The HTML heading prints the caret and exponent inline as literal text; it is not typeset as H superscript 1.
- Screenshot: screenshots/cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two--01.png
- Suggested repair: Use a prose title such as “First cohomology of a line bundle vanishes above degree 2g − 2”, or otherwise use title markup supported by the heading renderer.

## def-commensurable-subspaces-and-ideals-of-endomorphisms

- Section: Title
- Source lines: 4
- Symptom: The HTML heading prints literal underscore subscripts E_0, E_1 and E_2.
- Screenshot: screenshots/def-commensurable-subspaces-and-ideals-of-endomorphisms--01.png
- Suggested repair: Use a prose title or title markup supported by the heading renderer.

## ex-strict-transform-node-separates-branches

- Section: Title
- Source lines: 4
- Symptom: The HTML heading prints the equation with literal carets and no superscript formatting.
- Screenshot: screenshots/ex-strict-transform-node-separates-branches--01.png
- Suggested repair: Move the equation into the formatted body and use a prose title, or use title markup supported by the heading renderer.

## thm-stalk-structure-sheaf-prime-localization

- Section: Title
- Source lines: 4
- Symptom: The HTML heading prints the literal underscore in A_p instead of a subscript.
- Screenshot: screenshots/thm-stalk-structure-sheaf-prime-localization--01.png
- Suggested repair: Use a prose title or title markup supported by the heading renderer.

## Diagram coverage

The lane receipts report no KaTeX errors, rendered TikZ diagrams, or diagram failures. No existing diagram defects were observed. One high-value missing diagram candidate is recorded below; the other reviewed items either do not need a diagram or already express their maps and relations clearly enough without one.

### lem-differentials-commute-base-change-schemes

- Kind: commutative-diagram
- Source lines: 24, 25, 26
- Rationale: The Statement is explicitly about a fibre-product square and a canonical map induced by its projections; a displayed cartesian square would expose the base-change geometry at a glance.
- Concrete maps/relations: Cartesian square with X′ on the upper left, X on the upper right, S′ on the lower left and S on the lower right: top map g: X′→X, right map f: X→S, left projection X′→S′, and bottom map S′→S. The two composites X′→S agree; the statement then gives g*Ω_{X/S}→Ω_{X′/S′}.
- Screenshot: screenshots/lem-differentials-commute-base-change-schemes--01.png

## Verification record

The JSON companion records every assigned item, source/snapshot and HTML hash, receipt-listed tile path and hash, and an individual original-resolution view attestation for each tile. No item or library source was changed.
