# Lane 05 visual review

## Coverage and integrity

Reviewed all 26 frozen items in `assignment-05.json` against their full current source bodies and opened all 51 assigned screenshot tiles individually with original resolution. Also opened the three requested supplemental tiles for `def-monoidal-weak-two-category` and `def-frobenius-object-and-knowledgeable-sewing-data`. Per-item source, snapshot, HTML, capture metadata, and tile SHA256 values are recorded in `lane-05.json`.

Every source matches the assignment SHA256 and its frozen snapshot byte for byte. Every HTML file matches the assignment HTML SHA256. Each of the 51 tile file hashes matches its capture metadata. No assigned items or tiles remain unreviewed, and no source/snapshot/render hash drift was found.

## Confirmed visible rendering defects

- `def-quiver-representation-stacks-and-exact-sequence-correspondences`, source lines 87–91: the exact-sequence correspondence’s `tikzcd` appears as literal LaTeX in the tile. The map directions in the source are consistent: `q` sends an exact sequence to subobject and quotient, and `p` forgets the subrepresentation. This is a renderer/source-fence defect; no direction error was confirmed.
- `ex-zero-arrow-quiver-motivic-hall-product`, lines 34–40: the one-node TikZ picture appears as literal commands instead of a vertex labeled 1. The source’s node is consistent with its one-vertex, no-arrow claim.
- `thm-quiver-quotient-stack-borel-moore-operation-package`, lines 33, 54–62: multiple formulas and map strings appear in raw ASCII, including the quotient-stack correspondence and base-change equation. Arrows, indices, and superscripts are not typeset.
- `lem-parametric-index-grouping-preserves-a-relative-descending-path`, lines 51–61: identifiers such as `F_s`, `X_s`, `g_s`, and `h_p(s)` appear as raw ASCII in prose. This is distinct from the expected uppercase CSS technique banners.

The two supplied metadata flags were checked from their local originals. `def-monoidal-weak-two-category--01.png` visibly shows a red diagram-failure box containing the pentagon source. Its two route orientations match the stated pentagonator composites at source lines 37–48. The two `def-frobenius-object-and-knowledgeable-sewing-data` tiles visibly contain literal LaTeX, red KaTeX parse-error text, and diagram source in place of a rendered diagram. Thus both metadata reports are visually confirmed, not accepted on metadata alone.

## Existing diagram checks and candidate

The homotopy-cardinality base-change square in `lem-homotopy-cardinality-base-change` is legible and its four arrow labels/directions agree with the statement and equation (lines 29, 42–49). The exact-sequence and zero-arrow diagrams are semantically consistent with their prose, but their source does not render as a diagram. The supplemental weak monoidal pentagon’s directions are consistent with its definition. No separate index/sign/map-orientation error was confirmed in the diagrams reviewed.

One non-gratuitous candidate for author review is a labeled 2-Cartesian proper/smooth base-change square in `thm-quiver-quotient-stack-borel-moore-operation-package`. The item explicitly invokes two such squares for three-step quiver flags (line 33), and its proof states the exchange formula at lines 61–62. A drawing should show the actual pullback object and all four maps, identify the proper and smooth sides from the local constructions, and annotate the exchange identity. The exact map labels need to be matched to the source definitions before authoring; this review does not certify those labels.

## Other visual checks

No reference-title leak was confirmed. Wiki-links appearing as separate block lines are expected renderer behavior. No clipping was confirmed from the standalone original tiles; overlap and short terminal tiles are capture seams, and their visible content was checked independently. Ordinary KaTeX in the remaining reviewed tiles is legible. No proof or broader mathematical audit was performed.

## Limits

This was a read-only local review. No live website/HTTP inspection, item changes, publication-status changes, tests/builds, native UI actions, commits, or pushes were performed. `lane-05.json` is the exact coverage and SHA256 inventory, including per-tile opening status and detailed findings.
