# Quantum Algebra and Representation Theory rendering audit — lane 09

## Coverage

- Reviewed all 25 assigned frozen titles and complete ItemBodies against the frozen snapshots, current item sources, and local rendered HTML. Opened all 39 receipt-listed PNG tiles individually with `tools.view_image` at original resolution.
- Current source, snapshot, and HTML hashes match every assignment record. Every tile hash matches its receipt; all items and tiles are bound individually in [lane-09.json](lane-09.json).
- Capture receipts report zero KaTeX errors and zero diagram failures. They report zero rendered TikZ diagrams, including one source TikZ figure that is visibly printed as raw commands.
- No standalone screenshot clipping was confirmed. Long-item overlap tiles were inspected individually; their 100 px overlaps continue the same content. No second clipped copy of a formula or diagram was found.

## Confirmed rendering finding

- **Raw TikZ source in ItemBody:** [ex-temperley-lieb-order-three-noncritical-gram-radical, lines 44–64](../../../items/ex-temperley-lieb-order-three-noncritical-gram-radical.md:44). Its `~~~tikz` block is rendered literally as text in the screenshot, so the two perfect-matching drawings described at line 42 are absent. The source geometry describes the correct noncrossing matchings `x=(12)(34)` and `y=(14)(23)`, but the missing rendering prevents checking the picture visually. The capture receipt says `tikz_count: 0` and no diagram failure; it does not catch the raw block.

No other literal TeX/KaTeX, ASCII math, caret, or underscore rendering defect was confirmed in the assigned ItemBodies. Linked references wrapping onto separate lines and uppercase proof-technique labels are expected local-preview behavior.

## Diagram review and candidates

- The order-three example's raw TikZ code encodes two valid noncrossing perfect matchings on four ordered sites, but it is not rendered; see the finding above.
- **Optional theta-net diagram:** [lem-temperley-lieb-general-theta-net-evaluation, lines 40–48](../../../items/lem-temperley-lieb-general-theta-net-evaluation.md:40) defines the nested cup/cap maps and labels the three pairwise bundles. An uncertain editorial diagram could show the three arms of sizes `r=m+p`, `s=m+n`, `t=n+p`; the `m`, `n`, `p` internal bundles; `A`, `B`, `alpha`, `beta`; and closure of `beta alpha` as `Theta(m,n,p)`. Preserve the stated projector normalization and unit-denominator root domain. The proof is complete without a picture.
- **Optional Brauer/partition composition diagram:** [lem-brauer-and-partition-composition-is-associative, lines 36–44](../../../items/lem-brauer-and-partition-composition-is-associative.md:36) glues both middle interfaces at once and compares outer classes and removed classes. An uncertain editorial schematic could display three composable layers, both interfaces, a component retained at the outer boundary, and a component removed with one factor of `delta`. It should illustrate the finite-graph/equivalence-relation proof, not imply isotopy is the argument.

This review covers local item rendering only, not live routes, site navigation, or mathematical correctness of the full category. No source items, application files, or publication statuses were changed.
