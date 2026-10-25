# Coxeter Groups visual audit — lane 09

Reviewed all 35 assigned items and all 109 screenshot tiles individually at original resolution. For every item, the frozen title and complete rendered ItemBody were compared with the current source, frozen snapshot and stored HTML; hashes matched. No production HTTP(S) or live site was accessed.

## Confirmed rendering findings

- `ex-cg-cambrian-quotient-of-s3-and-two-orientations`, line 4: “S3” is raw text in the title. The display also exposes raw `u_c`/`pi_{c^{-1}}` notation from a linked reference title (the block-line placement itself is expected).
- `ex-cg-s4-rank-three-interval-mobius-from-recurrence`, line 4: “S4” is raw text in the title. Its technique banner also leaves `$s_1s_2s_3$` literal after CSS uppercase styling.
- `thm-cg-bruhat-parabolic-projection-and-quotients`, line 4: `W^I` uses a literal caret in the title.
- `ex-cg-dihedral-noncrossing-interval-and-kreweras-complement`, line 4: `I2(5)` is raw text in the title.
- `thm-cg-finite-type-positive-definite-criterion`, line 91: its uppercase technique banner leaves `$B$` literal.
- `ex-cg-dihedral-noncrossing-interval-and-kreweras-complement`, line 72, and `ex-hh-finite-dihedral-reduced-words`, line 62: math in uppercase technique banners remains literal `$...$` text. The uppercase banner treatment is expected; the unrendered math within it is the defect.
- Horizontal clipping is confirmed in standalone original tiles for `def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric`, `def-cg-finite-reflection-arrangement-and-spherical-chambers`, and `lem-cg-affine-alcove-separation-and-facet-types`: long rows are cut at the right edge of the preview, including mathematical expressions. Additional observed representative crops and source line details are in JSON.

The exact screenshots, hashes and dimensions are recorded per item. Clipping calls are based on standalone original-resolution PNGs, not multi-image viewing.

## Optional diagram candidates

- `ex-cg-a2-davis-complex-hexagon-and-boundary-circle`, lines 33, 35, 37, 39: an optional diagram could show the regular hexagonal 2-cell, alternating typed boundary edges, and the two-triangle chamber square with diagonal. The source already states the complete cell count and proof; this is explanatory only.
- `ex-cg-h3-and-h4-gram-determinants-and-principal-minors`, lines 37–49: an optional set of labeled Coxeter graphs could compare the H3/H4 positive-definite paths with the excluded overlong paths and 3,3,5 star. The diagrams should preserve the exact labels and path order. No diagram is required for the existing argument.

## Existing diagram and formula checks

No authored TikZ or diagram environment appears in the assigned item bodies. I checked the S3 element/sign table, the Cambrian projection/fiber and weak-order meet/join tables, the A2 typed-cell claims, the H3/H4 labels and principal-minor claims, and the displayed reflection matrices. No map, orientation, index or sign error was confirmed.

## Coverage

All 35 titles and complete ItemBodies, plus all 109 tiles, were reviewed. Per-item source, frozen assignment, snapshot, HTML and screenshot SHA256 values and tile offsets/dimensions are in `lane-09.json`. No source, HTML, snapshot or tile drift was found.
