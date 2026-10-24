# Numerical Optimization, Inverse Problems and Uncertainty Quantification visual audit — lane 05

## Scope and coverage

Audited all 73 assigned items from frozen title and complete ItemBody snapshots. Opened all 107 receipt-listed screenshot tiles individually at original resolution (`tools.view_image(detail="original")`); no collage or downscale substituted. The pass checked rendered mathematics, diagram content, clipping, and the source-supported case for missing diagrams.

This is recovered local body-preview coverage. It does not establish canonical metadata parsing, native-loader behavior, production routes, or publication status. No source, application, library, or publication files were changed. The two category frontmatter blockers are separate and outside lane 05: `ex-total-degree-versus-tensor-product-work` (lane 01) and `cex-finite-support-makes-high-degree-moment-gram-singular` (lane 07).

The item and tile ledger, including frozen source hashes and individual original-resolution tile attestations, is in [lane-05.json](lane-05.json).

## Findings

1. **`lem-finite-sum-gradient-is-average` — math appears as plaintext in the preview.** Source lines 36 and 66–70 contain expressions such as `R^d`, `n>=1`, `S_m:U->R`, and `partial_j` without math delimiters. The preview prints them as source-like text instead of typesetting them. Evidence: tiles `lem-finite-sum-gradient-is-average--01.png` and `--02.png`; hashes and source binding are in the JSON ledger. Suggested repair: add inline/display math delimiters while preserving the formulas.
2. **`def-product-hoeffding-anova-components` — the opening word is clipped in the preview.** Source line 26 begins “Let f…”, but the original tile starts the paragraph at “t f∈…”. An exact pixel crop of the same tile confirmed the missing “Le”; both frozen source and generated HTML retain “Let”. Evidence: `def-product-hoeffding-anova-components--01.png`; the tile hash is in the JSON ledger. This is reported as a preview rendering observation, not a source-text error.

## Optional diagram candidates

These candidates are uncertain editorial suggestions, not confirmed defects:

- **Dogleg trust-region step** ([source lines 37–48](../../../items/alg-dogleg-trust-region-step.md)): show the Cauchy point, Newton point, trust-region boundary intersection, branch returns, and model-value comparison. Check the drawing against the branch order and do not imply the boundary intersection is always selected.
- **McCormick envelope** ([source lines 30–33](../../../items/def-mccormick-bilinear-box-envelope.md)): show the bilinear surface over a box with its two lower and two upper affine planes; check every plane orientation and distinguish the envelope from the graph.
- **Nonunique Lasso coefficients** ([source lines 35–37](../../../items/ex-nonunique-lasso-coefficients-unique-fitted-value.md)): show the minimizer segment in the nonnegative coefficient plane and its single fitted value; keep coefficient nonuniqueness distinct from fit uniqueness.

No TikZ diagrams were present among assigned items (all lane receipts report `tikz_count: 0`).
