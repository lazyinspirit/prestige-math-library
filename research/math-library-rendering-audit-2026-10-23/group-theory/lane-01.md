# Group Theory visual audit — lane 01

## Scope and coverage

Reviewed all 98 assigned items, including each frozen title and complete ItemBody, and opened all 119 listed screenshot tiles individually at original resolution. The current item sources and frozen snapshots, generated HTML, screenshot receipts, and each tile were SHA256-compared with the assignment and capture records; all hashes match. No items or tiles remain unreviewed. See [lane-01.json](lane-01.json) for per-item sections, exact hashes, tile paths, and capture positions.

All 98 capture receipts report zero TikZ diagrams; there were no existing diagram maps, orientations, indices, or signs to validate. No clipping was confirmed from standalone originals. The block-line treatment of wikilinks, including reference-title text in prose, is expected. Uppercase technique banners are also expected.

## Confirmed plain-text formula findings

- **`ex-a-stem-extension-that-is-not-universal`**, line 31, prints `C2→D8→C2×C2` as plain text. Typeset the extension sequence with math delimiters. See [tile](screenshots/ex-a-stem-extension-that-is-not-universal--01.png).
- **`lem-exterior-square-has-the-alternating-universal-property`**, line 28, prints `A×A→B` and `∧²A` as plain text. Typeset the formula. See [tile](screenshots/lem-exterior-square-has-the-alternating-universal-property--01.png).
- **`lem-free-presentation-construction-is-a-central-extension`**, line 28, prints `G`, `[F,F]/[F,R]→G` as plain text. Typeset the group expression and map. See [tile](screenshots/lem-free-presentation-construction-is-a-central-extension--01.png).

## Potential diagram additions

These candidates are source-supported; none is required for mathematical validity.

- **`def-singular-planar-labelled-relator-diagram`**, lines 23–35: a definition diagram could show a face boundary, labeled oriented edges, an outer boundary walk with the unbounded region on its left, and a thin bridge traversed twice. Present it as one example, since the definition admits many shapes.
- **`thm-bass-serre-structure-theorem`**, lines 30–37 and 43–65: a quotient/action diagram could link a tree action, quotient graph of groups with stabilizers and boundary maps, a chosen maximal subtree, and the induced coset Bass–Serre tree map. Use an explicitly illustrative example and show the equivariant map.
- **`lem-polygonal-boundary-crossing-for-affine-disk-maps`**, lines 28 and 44–52: a planar map diagram could show the three marked boundary arcs, coordinate axes and outer L path, a generic ray with signed crossings, and cancellation along internal edges. It must allow noninjective and orientation-reversing affine maps.

The exact source lines, proposed diagram content, confidence, and local screenshot evidence are in the JSON ledger. This review made no source, application, or publication-status changes.
