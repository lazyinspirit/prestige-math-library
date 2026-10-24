# Numerical Optimization, Inverse Problems and Uncertainty Quantification rendering audit — lane 10

Reviewed all 72 assigned frozen title/body previews and all 104 screenshot tiles individually at original resolution. Exact item, source/snapshot/HTML hashes, section coverage, tile paths and hashes, dimensions, and per-tile attestations are in `lane-10.json`. This is recovered body-preview coverage; it is not a claim of successful canonical YAML parsing or native-loader coverage.

One confirmed source-authored LaTeX-in-prose defect is recorded for `thm-fem-control-proximal-gradient-residual-distance-bound`: `\texttt{...}` appears literally around status names in the Statement and Proof. The finding is separately bound to source lines and screenshot tile hashes. No confirmed clipping defect was found. Suspected clipping was checked in standalone original tiles and with an exact pixel crop.

The two strict frontmatter blockers listed in `frontmatter-parse-blockers.json` are metadata parsing blockers, kept separate from visual findings. Their preview recovery strips only the exact malformed metadata line; snapshots retain source bytes. They are outside this lane's assigned item list.

## Optional diagram candidates

The JSON records two uncertain editorial candidates with exact source lines, mathematical content to draw, and individual screenshot evidence: a projector Grassmann chart/tangent schematic and the continuum of minimizers in the repeated-eigenspace example. Neither is a rendering defect or needed for proof validity.

No authored TikZ or non-math embedded image/object diagrams occur in the assigned body previews. The supplied dark background, item-id breadcrumb, and block-formatted reference links are part of the audit preview.

No live website/network access, production or item changes, builds, tests, gates, publication-status changes, or Git operations were performed.
