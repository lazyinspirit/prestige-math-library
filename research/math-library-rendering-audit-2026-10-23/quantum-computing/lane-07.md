# Quantum Computing visual audit — lane 07

## Coverage

Reviewed all 56 assigned frozen item titles and complete ItemBody renderings, plus all 83 receipt-listed screenshot tiles individually at original resolution. Assignment source and HTML hashes match the frozen digests. Snapshot and per-tile hashes, dimensions, and view attestations are recorded in `lane-07.json`.

## Rendering finding

- `thm-qc-tqc-pentagon-coordinates`: the frozen HTML and original-resolution tiles show a red “diagram failed to render” panel in place of the `tikzcd` pentagon (snapshot lines 64–83). The adjacent prose states the five associator maps and the two route products, but the diagram itself is unavailable. The receipt reports one diagram failure and no KaTeX errors. See the JSON finding for tile hashes and a repair check tied to the stated maps.

No other confirmed LaTeX/KaTeX rendering defect, overlap, or diagram-mathematics defect was found. No numeric DOM overflow measurement is asserted.

## Optional source-supported diagram

- `def-qc-square-planar-surface-code`: a labeled square-lattice figure could show the left/right rough boundary edge set, physical data edges, vertex X checks, face Z checks with rough edges deleted, and the chain relation `∂₁∂₂ = 0` (snapshot lines 36–56). The JSON record specifies the exact supports and boundary conventions to check. This is an uncertain editorial candidate, not a confirmed defect.

## Limits

This review covers only assignment 07 local snapshots, HTML previews, receipts, and screenshot tiles. It is not a proof audit and does not cover HTTP(S), live pages, or other lanes. The one source-authored `tikzcd` failed, so its arrow geometry could not be visually inspected. No item, status, publication state, application/tool file, or library content was modified.
