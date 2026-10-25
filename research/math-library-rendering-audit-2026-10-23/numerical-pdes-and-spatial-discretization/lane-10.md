# Numerical PDEs and Spatial Discretization rendering audit — lane 10

Reviewed all 113 assigned frozen item bodies and all 168 receipt-listed screenshot tiles individually at original resolution. Exact per-item source, snapshot, and HTML SHA256 bindings, body line ranges and section coverage, and every tile hash/dimension/receipt position are recorded in `lane-10.json`. No source/snapshot or assigned HTML hash drift was found.

## Confirmed renderer finding

- **def-monotone-finite-volume-entropy-scheme** — source lines 61–74: the authored TikZ finite-volume stencil appears as a red “diagram failed to render” block in the standalone original-resolution screenshot and the frozen HTML. The screenshot is `screenshots/def-monotone-finite-volume-entropy-scheme--01.png` (SHA256 `740b7d3b2f30e16d159d56c38f6fdf4e3a7c4942c6bad57b5ccbd40f164f52b4`). Source lines 52–59 give the shared-face recurrence. The intended diagram places three cells \(j-1,j,j+1\), labels each face with the matching two-state flux, points both arrows right, and writes the center update with right flux minus left flux; these positions, orientations, indices, and signs agree with the recurrence. This is a rendering failure; no mathematical defect was found in the intended drawing. HTML uses a horizontally scrollable error block that retains the failed TikZ source. The capture receipt provides no lower-level parser diagnostic.

## Other diagram review

`cex-nonmonotone-fv-scheme-selects-expansion-shock` has the other TikZ figure in the lane. Its stationary discontinuity at \(x=0\), states \(-1\) and \(1\), and space/time axes match the source description. No diagram-map, arrow, index, or sign error was found. The remaining items do not have a sufficiently concrete source-supported missing diagram to report as an omission defect.

No confirmed clipping defect was recorded. Long expressions near the right edge were checked against standalone tiles and frozen HTML; edge proximity alone did not establish that source content was inaccessible. Frontmatter blockers listed in `frontmatter-parse-blockers.json` are separate metadata/parser issues and do not apply to these assigned lane-10 items.

Read-only local snapshot review only: no HTTP(S)/live site/network, source or application changes, native publication changes, tests, builds, gates, or Git operations were performed.
