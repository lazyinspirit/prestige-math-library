# Numerical Optimization, Inverse Problems and Uncertainty Quantification visual audit — lane 06

Reviewed all 73 assigned frozen titles and complete ItemBodies, and opened all 101 listed screenshot tiles individually with `tools.view_image(detail="original")`. Item sources, frozen snapshots, rendered HTML, screenshot receipts, and tile hashes match their assignment and capture records; no items or tiles remain unreviewed. Per-item hashes, capture offsets, tile dimensions, and individual original-resolution attestations are in [lane-06.json](lane-06.json).

This is **recovered body-preview coverage**. The category manifest records two malformed strict-YAML frontmatter blockers and metadata-only preview fallbacks; neither blocker item is assigned to lane 06. Those metadata blockers are tracked separately from visual findings. This audit does not claim successful canonical source parsing or native-loader coverage.

## Confirmed rendering finding

- **`lem-saga-estimator-and-table-recurrence`**, source lines 38, 56, 58, 70, 72, and 74: notation-heavy text such as `f_i:R^d->R`, `F=n^{-1}sum_i f_i`, `grad F(x*)=0`, and `||u,v||` appears as plain ASCII rather than typeset mathematics. Adjacent display formulas render correctly. The source expressions are legible and mathematically consistent; this is a source formatting defect. See [original tile](screenshots/lem-saga-estimator-and-table-recurrence--01.png).

## Optional diagram candidate

- **`ex-corner-and-cusp-break-the-string-tangent-hypotheses`**, lines 25, 39, and 41: a two-panel path sketch could show the corner’s distinct one-sided tangents and centered chord, alongside the cusp’s coincident samples at \(\pm h\), zero centered chord, and zero derivative. The formulas and consequences are explicit in the source, and a drawing could make the geometric failure modes easier to see. This is an uncertain editorial candidate; the proof is sound without a diagram. See [original tile](screenshots/ex-corner-and-cusp-break-the-string-tangent-hypotheses--01.png).

All lane-06 screenshot receipts report zero TikZ diagrams and no diagram failures, so there were no existing diagram maps, orientations, indices, or signs to check. No unexpected clipping was confirmed; multi-tile bodies continue at their listed capture offsets. The audit made no source, application, or publication-status changes and ran no builds, tests, or gates.
