# Linear Algebra visual audit — lane 04

## Scope and coverage

Reviewed all 75 assigned items against their frozen Markdown snapshots and local HTML previews. Opened all 98 assigned PNG tiles individually at original resolution. The per-item ledger records source and HTML hashes, each tile’s SHA-256 and dimensions, and the viewed status in [lane-04.json](lane-04.json).

The review checked complete item bodies and titles for literal ASCII math or raw TeX, KaTeX rendering, TikZ and diagram content, reference-title leaks, Scratch content, and clipping of standalone images. The assigned HTML contains no standalone image elements; image clipping was therefore not applicable. Block-style links and the uppercase technique banner are intended. No production route or live website was reviewed.

## Confirmed findings

- **Raw math in technique banner:** `cex-congruence-need-not-preserve-trace-or-determinant`, frozen source line 40, displays `$1\times1$` literally inside the intended technique banner. Render that expression or write “1×1”. Evidence: `screenshots/cex-congruence-need-not-preserve-trace-or-determinant--01.png`.
- **Raw title subscript:** `ex-a-floating-point-dot-product-error-bound`, frozen source line 4, displays `gamma_n` with a literal underscore. Evidence: `screenshots/ex-a-floating-point-dot-product-error-bound--01.png`.
- **Raw title adjoint product:** `def-singular-values-of-an-endomorphism`, frozen source line 4, displays `T^*T` with a literal caret and asterisk. Evidence: `screenshots/def-singular-values-of-an-endomorphism--01.png`.
- **Raw title adjoint product:** `prop-singular-values-are-well-defined`, frozen source line 4, displays `T^*T` with a literal caret and asterisk. Evidence: `screenshots/prop-singular-values-are-well-defined--01.png`.

The remaining 71 assigned items were clean in the reviewed previews. No Scratch leaks, bare reference-title leaks, existing item diagrams, or standalone images were identified. Math in the item bodies otherwise appeared typeset.

## Diagram candidate

`def-arnoldi-process`, frozen lines 34–50, could support an optional orthogonalization flow schematic. It could show `Av_j` splitting into projections `h_ij v_i` and residual `w_j`, then `h_{j+1,j}=||w_j||` and the normalization to `v_{j+1}` when nonzero, with `w_j=0` marked as breakdown. This is an editorial aid; the definition is already stated in text, and a diagram should not serve as proof. Evidence: `screenshots/def-arnoldi-process--01.png`.

No source, application, or production files were changed.
