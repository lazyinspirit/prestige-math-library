# Statistical Models and Experiments rendering audit — lane 09

## Coverage

- Reviewed all 51 assigned frozen titles and complete ItemBodies against their snapshots, current source, and matching local HTML. Opened all 78 receipt-listed PNG tiles individually with `tools.view_image` at original resolution.
- All 51 current source hashes, frozen snapshot hashes, and local HTML hashes match the assignment; all 78 PNG hashes match their capture receipts. Exact per-item and per-tile hashes and tile positions are in [lane-09.json](lane-09.json).
- Receipts report zero KaTeX errors, zero diagram failures, and zero rendered TikZ diagrams. No standalone clipping or missing glyph was confirmed.

## Rendering findings

No confirmed rendering defects. Titles, mathematical notation, and body text visible in the local captures correspond to the frozen ItemBodies. No literal TeX/TikZ or ASCII-math leakage was observed.

## Diagram review and candidate

No existing diagrams occur in the assigned lane. One optional candidate is [ex-confounding-and-collider-conditioning, lines 36–42](../../../items/ex-confounding-and-collider-conditioning.md:36): a paired DAG figure could show the confounding fork `U→A`, `U→Y` (with `E→A`) and the collider `B→D←C`. Annotate `A=U xor E`, `Y=U`, and `D=B∨C`; indicate that conditioning on `U` blocks the backdoor path and conditioning on `D=1` activates dependence. The source computations are already clear, so this is an editorial option and not a rendering defect. No proof depends on a diagram.

This review covers local frozen rendering and diagram opportunities, not full mathematical correctness. No source items, application files, or publication statuses were changed.
