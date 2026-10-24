# Mathematical Statistics rendering audit — lane 04

Reviewed all 49 assigned items and 77 screenshot tiles. Each title and full ItemBody was checked against the frozen source snapshot and local HTML; every assigned PNG was opened individually at original resolution. Item, HTML, and tile hashes are recorded in `lane-04.json` and match their assignment or capture metadata.

## Findings

No confirmed rendering defects or diagram mismatches. No existing diagrams were present in the assigned items. I found no literal unrendered ASCII math, TeX/KaTeX failure, TikZ failure, Scratch leak, reference-title leak, or clipped standalone content. The few screenshot boundaries that cut through a long item continue in the next assigned tile.

## Editorial diagram candidates

- **def-soft-thresholding-function** — snapshot lines 29–30. Optional piecewise-linear graph of (S_\tau(z)): mark thresholds (-\tau,\tau), the zero segment on ([-\tau,\tau]), and the two outer rays (z+\tau) and (z-\tau). The definition is complete; this is only a visual aid.
- **ex-natural-cubic-interpolants-on-two-and-three-knots** — snapshot lines 29–30. Optional two-panel interpolation plot: the line through the two-knot values and the displayed three-knot spline through ((0,0),(1,1),(2,0)). On the latter, check the horizontal tangent and second derivative (-3) at (x=1), and zero second derivatives at the extreme knots. The formulas and checks are already supplied.

Plain item typography, source-authored IDs, block-style links, and the uppercase technique banner follow the audit conventions. No item body or publication status was changed.
