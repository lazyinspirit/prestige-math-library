# Set Theory rendering audit — lane 05

## Scope and evidence

Reviewed all **128 assigned items** from the frozen Markdown snapshots against their matching local HTML. All assigned items remain published; no item, library, or app files were changed.

Opened all **194 receipt-listed PNG tiles individually** with tools.view_image at original resolution, with no collage or downscaling. Snapshot, HTML, and tile SHA-256 values all match their assignment/receipt records. The receipts total **6,188 KaTeX expressions**, **0 KaTeX errors**, **0 TikZ diagrams**, and **0 diagram failures**.

Titles identify their mathematical subjects and wrap legibly in the local captures. No existing diagram was found to audit in this lane.

## Rendering observation

- **Moderate, source markup:** [thm-lc-supercompact-preparation-interface](/home/lazyinspirit/Projects/prestige-math-library/research/math-library-rendering-audit-2026-10-23/set-theory/snapshots/thm-lc-supercompact-preparation-interface.md:110), with further examples at lines 112, 118, 120, 124, 126, 130, 134–162. In the later proof, several equations and symbolic expressions are plain un-delimited text, so local HTML prints forms such as qdot, P_alpha, j*, and <= instead of typeset mathematics. Earlier portions of the same item do render as math. This is not a KaTeX parser error; delimiting the affected expressions as inline or display math would improve readability.

## High-likelihood missing diagram candidates

- [lem-equivalence-classes-partition](/home/lazyinspirit/Projects/prestige-math-library/research/math-library-rendering-audit-2026-10-23/set-theory/snapshots/lem-equivalence-classes-partition.md:37), lines 37–50. **Kind:** tikzcd. The theorem gives inverse maps between equivalence relations and partitions: E ↦ A/E, and P ↦ E_P where a E_P b iff one block contains both. For each a in A, the round trip identifies [a]_{E_P} with the unique block B_a containing a. A small correspondence diagram would clarify the inverse constructions and uniqueness.
- [thm-special-aronszajn-tree-construction](/home/lazyinspirit/Projects/prestige-math-library/research/math-library-rendering-audit-2026-10-23/set-theory/snapshots/thm-special-aronszajn-tree-construction.md:29), especially lines 55–59 and 63–65. **Kind:** tikz. A finite level schematic could show a parent x in T_alpha extending to (x,q) in T_(alpha+1) with q>ell(x), and distinct limit-level tops with distinct predecessor branches. The strict rational labeling ell:T→Q then makes each fiber ell^(-1)({q}) an antichain. Keep the drawing schematic so it does not imply a cofinal branch or prove the theorem by picture.

No other candidate met the high-likelihood threshold.

## Exact coverage

The companion [lane-05.json](/home/lazyinspirit/Projects/prestige-math-library/research/math-library-rendering-audit-2026-10-23/set-theory/lane-05.json) records all 128 item IDs and statuses, snapshot/HTML hashes, receipt metrics, all 194 tile paths and SHA-256 values, and the individual original-resolution view attestation.
