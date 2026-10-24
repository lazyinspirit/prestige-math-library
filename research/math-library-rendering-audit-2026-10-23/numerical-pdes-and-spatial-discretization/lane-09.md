# Numerical PDEs and Spatial Discretization rendering audit — lane 09

Reviewed all 113 assigned frozen titles and complete ItemBodies, and all 166 receipt-listed PNGs individually with `tools.view_image` at original resolution. No collage or downscaled view was used. Source, snapshot, HTML, screenshot-metadata, and tile hashes are recorded in `lane-09.json`; source/snapshot/HTML/tile hash mismatches and source/snapshot byte drift are all zero. Capture metadata reports no KaTeX errors and no TikZ diagrams.

## Confirmed rendering finding

- **lem-cellwise-particle-quadrature-oscillation-bound**, Statement line 30 and Proof line 46: the definition `osc_C(g)=sup_{y,z∈C}|g(y)−g(z)|` and proof’s cellwise integral estimate are shown as literal ASCII notation. The surrounding displayed inequality is typeset, so the expressions stand out as raw math. The standalone original tile is `screenshots/lem-cellwise-particle-quadrature-oscillation-bound--01.png` (SHA-256 `cde6b9467bf072045f0d31416c2873b66b642e36ac3c9c00411c992c3ec30476`). Add inline math delimiters around the prose expressions while preserving the formula.

## Diagram review

No TikZ or tikzcd source diagram occurs among the 113 assigned items or captured HTML. No diagram mathematics or direction mismatch was found. One optional diagram candidate is recorded for **thm-na-lowest-order-discrete-de-rham-cohomology-and-harmonic-modes**, lines 49–53: a commuting diagram of the discrete de Rham and cochain complexes with a callout for the harmonic kernel decompositions. Its current equations are explicit, so this remains an editorial candidate rather than a confirmed omission.

## Clipping and parse coverage

No clipping was confirmed. Long items continue in subsequent receipt-listed captures, and apparent tile boundaries were checked against continuation tiles. There is one lane-specific metadata parser blocker: **thm-composite-simpson-error-for-chebyshev-weighted-mass-matrix** has invalid indented stale `judge:` metadata after `axiom_use`; its screenshot coverage is labeled `recovered-body-preview`. The preview removed only that stale subtree. Frozen source/snapshot bytes remain unchanged, and this does not certify canonical parsing or native-loader coverage. The parser blocker is separate from the visual finding above.

The full per-item and per-tile hash ledger is in `lane-09.json`. This is a rendering and focused diagram-map review, not a proof audit. Local frozen files and receipts only; no live-site inspection.
