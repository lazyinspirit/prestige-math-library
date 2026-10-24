# Measure Theory rendering audit — lane 08

## Coverage

Reviewed all 102 assigned items from `assignment-08.json`. For every item, I read the frozen snapshot and local HTML, verified both SHA256 values against the assignment, and opened each assigned screenshot PNG individually with `view_image` at original resolution: 129 tiles total. Per-item and per-tile hashes are recorded in [lane-08.json](lane-08.json). This review used local artifacts only.

The visible H1s and full ItemBody content were checked for literal ASCII math, unrendered TeX/KaTeX, reference-title leakage, Scratch content, existing diagrams, and clipping. No authored diagrams or standalone image assets were present in this lane. The local renders show formulas as KaTeX; linked reference titles appear as ordinary link blocks. No clipping defect was observed.

## Confirmed rendering defects

| Item | Source line | Finding |
|---|---:|---|
| `cex-spikes-converge-almost-everywhere-and-in-measure-but-not-in-l-one` | 4 | The title renders `k chi_(0,1/k)` literally. It should typeset the spike formula. The statement and proof use rendered mathematics. |
| `ex-one-dimensional-gaussian-integral-from-tonelli-and-polar-coordinates` | 4 | The title renders `int_R e^{-x^2} dx = sqrt(pi)` literally. Its body formulas are correctly typeset. |
| `lem-l-p-functions-have-sigma-finite-essential-support-for-finite-p` | 46 | The uppercase technique banner exposes `$u$`, `\{|u|\ge1/n\}`, and dollar delimiters literally. |
| `lem-sigma-finite-ergodic-oscillation-sets-have-finite-measure` | 50 | The uppercase technique banner exposes `$\alpha$` literally. |
| `prop-the-p-functional-is-not-a-norm-for-zero-less-p-less-one` | 45 | The uppercase technique banner exposes `$2^{1/p}\le2$` literally. |
| `thm-generalized-holder-inequality-for-products` | 51 | The uppercase technique banner exposes expressions such as `$|fg|$`, `$p/r$`, and their delimiters literally. |

The uppercase technique banner is the intended style; the math inside these four banners is the defect.

## Source-supported diagram candidates

These are editorial candidates, not confirmed mathematical errors. No diagram is needed for the rigorous arguments.

- `ex-indicator-of-the-unit-interval-convolved-with-itself-is-the-tent-function`, lines 29 and 35: a piecewise-linear graph with x-axis, support endpoints 0 and 2, and vertex `(1,1)`; draw the rising segment from `(0,0)` to `(1,1)` and the falling segment to `(2,0)`, with zero outside. This would make the displayed overlap-length formula immediately visible.
- `ex-the-centered-maximal-function-of-the-unit-interval-indicator-on-r`, lines 29–31: a piecewise graph of the two reciprocal tails and the height-1 plateau on `(0,1)`. Mark the actual endpoint values `Mf(0)=Mf(1)=1/2`, distinguish the open plateau endpoints, and indicate reciprocal decay. The formula supports the drawing; this is an optional explanatory visual.

## Verification notes

All 102 snapshot hashes and all 102 local HTML hashes match the frozen assignment. The coverage JSON records the 129 individually viewed image hashes. This is a local preview review and makes no production-route or publication-state claim.
