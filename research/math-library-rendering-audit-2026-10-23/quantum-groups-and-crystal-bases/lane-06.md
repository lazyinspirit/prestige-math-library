# Quantum Groups and Crystal Bases rendering audit — lane 06

Reviewed all 20 assigned frozen titles and complete ItemBodies against their byte-identical current sources, the assigned local rendered HTML, capture receipts and all 43 assigned PNG tiles. Every PNG was opened individually with `tools.view_image` at original resolution; no collage or downscaling was used. Source, snapshot, HTML and screenshot SHA256 values match the assignment/receipt, and screenshot dimensions match metadata. The captures report 0 KaTeX errors and 0 diagram failures. No confirmed rendering defect or existing diagram mismatch was found. No item, application, or publication status was changed; review was local only.

## Diagram candidate

- **ex-level-one-charge-zero-crystal-through-rank-four-at-e-three** — source lines 29–51. The example gives a compact, explicit coloured graph of the charge-zero level-one crystal through rank four, including all in-window `\tilde f_i` arrows, reverse `\tilde e_i` arrows, and one transpose/conjugation comparison. A diagram should use the ten vertices `∅`, `(1)`, `(2)`, `(1,1)`, `(2,1)`, `(1,1,1)`, `(3,1)`, `(2,2)`, `(2,1,1)`, `(1,1,1,1)` and the listed coloured edges; preserve the stated residue convention `i=c-r (mod 3)`. Mark additions from rank 4 as omitted boundary edges rather than zero arrows. Check that `(2,1)` has no residue-1 edge and that its `\tilde f_2` edge to `(3,1)` corresponds under transposition to the quantum-group `\tilde f_1` edge to `(2,1,1)`. This is an optional clarity aid; the source's vertex list and full verification already specify the graph.

## Coverage

Exact per-item source, snapshot, local HTML and tile hashes, dimensions, and individual view attestations are recorded in `lane-06.json`. All 20 assigned items and all 43 receipt-listed tiles are covered.
