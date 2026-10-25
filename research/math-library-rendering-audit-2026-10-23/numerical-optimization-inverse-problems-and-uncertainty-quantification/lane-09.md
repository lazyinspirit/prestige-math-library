# Numerical Optimization, Inverse Problems and Uncertainty Quantification rendering audit — lane 09

Reviewed all 72 assigned items and all 100 receipt-listed screenshot tiles individually with `tools.view_image(detail="original")`. Each frozen title and complete ItemBody was reviewed across its individual original-resolution capture tile(s), with no collage or downscaled view. The JSON records item/page placement, source/snapshot/HTML/receipt/tile hashes, capture offsets, pixel dimensions, and per-tile original-resolution attestation. All assigned source, snapshot, HTML, and tile hashes match the frozen assignment and capture receipts. No source/snapshot drift was found.

## Confirmed rendering findings

None. No KaTeX errors, malformed or missing math, missing glyphs, or TikZ rendering defects were observed. The capture receipts report zero TikZ diagrams and zero diagram failures across this lane.

## Diagram review

No existing TikZ/tikzcd diagrams were present to audit. The optional diagram candidates below are source-supported editorial opportunities, not confirmed omissions; the current statements and proofs remain complete without figures.

- **alg-factorable-mccormick-box-relaxation**, lines 30–32: an optional 3D bilinear graph and its four McCormick planes could illustrate the lifted convex outer relaxation. Draw a concrete bounded rectangle, graph (w=xy), the four affine planes, and the interval of allowed lifted values; distinguish the convex hull from the exact graph away from corners.
- **ex-indefinite-trust-region-boundary-minimizer**, lines 28–31 and 53–55: an optional unit-disk figure could mark the exact minimizer (p_*=(1,1)/\sqrt2) and Cauchy point (p_C=(1,3)/\sqrt{10}), labeling predicted reductions (2) and \(\sqrt5-2/5\). Any contour lines should match the stated indefinite quadratic.
- **ex-two-pixel-total-variation-proximal-map**, lines 36–38 and 56–58: an optional soft-threshold graph could show (d\mapsto S_{t\lambda}(d)), its zero plateau on ([-t\lambda,t\lambda]), and that the mean coordinate is preserved while the half-difference is thresholded.
- **lem-centered-chord-and-unequal-step-tangent-error**, lines 29–41: an optional local curve sketch could mark (R(s-h),R(s),R(s+h)), the centered chord and tangent (R'(s)), then show the unequal offsets (h_-,h_+) and weighted stencil. Keep the stated one-sided caveat visible.

## Clipping and metadata scope

No clipping was confirmed. Every tile was inspected individually; sequential captures resume across the receipt's overlap boundaries. Two apparent leading-character concerns were checked in standalone original tiles and exact pixel crops; the source text is complete in both.

The category's `frontmatter-parse-blockers.json` records two strict YAML errors, on `cex-finite-support-makes-high-degree-moment-gram-singular` (line 18) and `ex-total-degree-versus-tensor-product-work` (line 20), neither of which is assigned to lane 09. The research preview removed only each exact malformed metadata line for metadata parsing; source snapshots and body bytes are unchanged. This work is **recovered body-preview coverage** and does not claim successful canonical YAML parsing or native-loader coverage. These metadata blockers are separate from the visual review and are not rendering findings.

## Limits

This review used frozen local sources, snapshots, preview HTML, receipt metadata, and screenshots only. It did not inspect HTTP(S) pages, production routes, or native-loader behavior. This is a rendering and diagram-opportunity review, not a complete proof audit. Optional diagram candidates are editorial and uncertain; no existing figure was found to contain a mathematical mismatch.
