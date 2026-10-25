# Numerical Optimization, Inverse Problems and Uncertainty Quantification rendering audit — lane 03

Reviewed all 73 assigned frozen titles and complete ItemBodies, and all 104 receipt-listed screenshot tiles individually at original resolution. No collage or downscale was used. Assignment, snapshot, local HTML, screenshot receipt and PNG hashes were checked; full item and per-tile evidence is in [lane-03.json](lane-03.json).

## Findings

1. **R-01 — low: unwrapped TeX commands appear literally in prose.** In [alg-amsgrad-update](snapshots/alg-amsgrad-update.md:48), the prose uses `\odot` outside math delimiters; line 54 likewise leaves `\widehat v^{\max}_t` outside math delimiters. The original tile `screenshots/alg-amsgrad-update--01.png` (SHA-256 `03522aabc7ac6caea8030da7394818de194036c85c53b1d9dd21920bac61ef5b`) visibly prints these command strings literally. Wrap the symbols in inline math or describe them in words. Other formulas on the tile render correctly.

## Diagram review

No TikZ diagrams were present in the lane, and no diagram failure was reported. Three uncertain, source-supported optional diagram candidates are recorded in the JSON: trust-region step geometry for the indefinite model, the two-cycle projector map, and the bilinear graph with its McCormick convex envelope. They are editorial suggestions, not confirmed omissions or mathematical defects.

## Coverage note

This is **recovered body-preview coverage** from frozen snapshots and local rendered previews. The category manifest records two strict YAML parsing blockers in `frontmatter-parse-blockers.json`; neither item is assigned to lane 03. This lane review does not establish successful canonical parsing or native-loader coverage. No production source, application, library content, or publication status was changed; no build, test, or gate was run.
