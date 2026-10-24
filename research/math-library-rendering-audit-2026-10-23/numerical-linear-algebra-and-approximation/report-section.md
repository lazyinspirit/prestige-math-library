## Numerical Linear Algebra and Approximation

Completed visual review of **1001 items across 102 pages**, with **1400 image tiles**. Findings: 22 confirmed, 2 uncertain, 10 source-parse-blocker. Evidence: [manifest](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/category-review-receipt.json).

Coverage uses recovered body previews for 10 items. Their exact source bytes and parse failures are recorded in [frontmatter parse blockers](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/frontmatter-parse-blockers.json); this is not successful canonical source parsing or native loader coverage.

### Confirmed rendering defects

#### numerical-linear-algebra-and-approximation / confirmed 001: `lem-complex-hermitian-eigenvalue-perturbation`

- Location: **Facts & Assumptions**; source lines 41.
- Pages: `verified-linear-systems-and-spectral-enclosures`.
- Visible defect: The auto-expanded wikilink title for the operator-norm definition is visibly underlined with literal TeX source (for example, `max_{||v||=1}||Tv||`) instead of typeset mathematics. The adjacent formula in the frozen ItemBody renders normally. This is a local preview title-rendering issue; the raw ItemBody line and target title text remain intact.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/screenshots/lem-complex-hermitian-eigenvalue-perturbation--01.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/snapshots/lem-complex-hermitian-eigenvalue-perturbation.md).

Exact frozen source lines:

```text
41: [F3] The operator norm is induced by the Euclidean vector norm ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).
```

#### numerical-linear-algebra-and-approximation / confirmed 002: `lem-hermitian-sphere-net-controls-operator-norm`

- Location: **Facts & Assumptions**; source lines 50.
- Pages: `sketched-least-squares-and-subspace-embeddings`.
- Visible defect: The auto-expanded wikilink title for the operator-norm definition is visibly underlined with literal TeX source (for example, `max_{||v||=1}||Tv||`) instead of typeset mathematics. The adjacent formula in the frozen ItemBody renders normally. This is a local preview title-rendering issue; the raw ItemBody line and target title text remain intact.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/screenshots/lem-hermitian-sphere-net-controls-operator-norm--01.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/snapshots/lem-hermitian-sphere-net-controls-operator-norm.md).

Exact frozen source lines:

```text
50: [F1] A complex Hermitian matrix has an orthonormal eigenbasis ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]), and the operator norm is the maximum of $\|Hv\|_2$ over unit vectors ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).
```

#### numerical-linear-algebra-and-approximation / confirmed 003: `lem-logarithmic-norm-bounds-the-matrix-exponential`

- Location: **Facts & Assumptions**; source lines 56.
- Pages: `matrix-exponential-and-phi-function-actions`.
- Visible defect: The auto-expanded wikilink title for the operator-norm definition is visibly underlined with literal TeX source (for example, `max_{||v||=1}||Tv||`) instead of typeset mathematics. The adjacent formula in the frozen ItemBody renders normally. This is a local preview title-rendering issue; the raw ItemBody line and target title text remain intact.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/screenshots/lem-logarithmic-norm-bounds-the-matrix-exponential--01.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/snapshots/lem-logarithmic-norm-bounds-the-matrix-exponential.md).

Exact frozen source lines:

```text
56: [F4] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: $\|T\|_2=\max_{\|x\|_2=1}\|Tx\|_2$ for a finite-dimensional endomorphism.
```

#### numerical-linear-algebra-and-approximation / confirmed 004: `lem-na-normalized-rayleigh-energy-perturbation`

- Location: **Facts & Assumptions**; source lines 44.
- Pages: `alternating-tensor-optimization-and-effective-eigenproblems`.
- Visible defect: The auto-expanded wikilink title for the operator-norm definition is visibly underlined with literal TeX source (for example, `max_{||v||=1}||Tv||`) instead of typeset mathematics. The adjacent formula in the frozen ItemBody renders normally. This is a local preview title-rendering issue; the raw ItemBody line and target title text remain intact.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/screenshots/lem-na-normalized-rayleigh-energy-perturbation--01.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/snapshots/lem-na-normalized-rayleigh-energy-perturbation.md).

Exact frozen source lines:

```text
44: [F2] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: on a nonzero finite-dimensional domain, $\|H\|_{\mathrm{op}}=\max_{\|x\|=1}\|Hx\|$.
```

#### numerical-linear-algebra-and-approximation / confirmed 005: `lem-normalized-complex-rangefinder-direct-spectral-expectation`

- Location: **Facts & Assumptions**; source lines 81.
- Pages: `randomized-low-rank-approximation`.
- Visible defect: The auto-expanded wikilink title for the operator-norm definition is visibly underlined with literal TeX source (for example, `max_{||v||=1}||Tv||`) instead of typeset mathematics. The adjacent formula in the frozen ItemBody renders normally. This is a local preview title-rendering issue; the raw ItemBody line and target title text remain intact.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/screenshots/lem-normalized-complex-rangefinder-direct-spectral-expectation--01.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/snapshots/lem-normalized-complex-rangefinder-direct-spectral-expectation.md).

Exact frozen source lines:

```text
81: [F5] SVD coordinates preserve the operator norm; the operator norm is the largest singular value and is bounded above by the Frobenius norm ([[thm-singular-value-decomposition]], [[def-operator-norm-on-a-finite-dimensional-inner-product-space]], [[thm-operator-norm-is-the-largest-singular-value]], [[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]).
```

#### numerical-linear-algebra-and-approximation / confirmed 006: `lem-orthogonal-projector-power-error-inequality`

- Location: **Facts & Assumptions**; source lines 42.
- Pages: `randomized-low-rank-approximation`.
- Visible defect: The auto-expanded wikilink title for the operator-norm definition is visibly underlined with literal TeX source (for example, `max_{||v||=1}||Tv||`) instead of typeset mathematics. The adjacent formula in the frozen ItemBody renders normally. This is a local preview title-rendering issue; the raw ItemBody line and target title text remain intact.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/screenshots/lem-orthogonal-projector-power-error-inequality--01.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/snapshots/lem-orthogonal-projector-power-error-inequality.md).

Exact frozen source lines:

```text
42: [F3] The spectral norm of a positive semidefinite operator is its largest eigenvalue ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]], [[thm-operator-norm-is-the-largest-singular-value]]).
```

#### numerical-linear-algebra-and-approximation / confirmed 007: `lem-powers-of-a-schur-stable-matrix-decay`

- Location: **Facts & Assumptions**; source lines 60.
- Pages: `numerical-algebraic-riccati-equations-and-stabilizing-branches`.
- Visible defect: The auto-expanded wikilink title for the operator-norm definition is visibly underlined with literal TeX source (for example, `max_{||v||=1}||Tv||`) instead of typeset mathematics. The adjacent formula in the frozen ItemBody renders normally. This is a local preview title-rendering issue; the raw ItemBody line and target title text remain intact.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/screenshots/lem-powers-of-a-schur-stable-matrix-decay--01.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/snapshots/lem-powers-of-a-schur-stable-matrix-decay.md).

Exact frozen source lines:

```text
60: [F4] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: $\|T\|_2=\max_{\|v\|_2=1}\|Tv\|_2$.
```

#### numerical-linear-algebra-and-approximation / confirmed 008: `lem-square-root-kalman-triangular-solve-forward-bound`

- Location: **Facts & Assumptions**; source lines 58.
- Pages: `square-root-covariance-update-error-and-stability`.
- Visible defect: The auto-expanded wikilink title for the operator-norm definition is visibly underlined with literal TeX source (for example, `max_{||v||=1}||Tv||`) instead of typeset mathematics. The adjacent formula in the frozen ItemBody renders normally. This is a local preview title-rendering issue; the raw ItemBody line and target title text remain intact.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/screenshots/lem-square-root-kalman-triangular-solve-forward-bound--01.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/snapshots/lem-square-root-kalman-triangular-solve-forward-bound.md).

Exact frozen source lines:

```text
58: [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]
```

#### numerical-linear-algebra-and-approximation / confirmed 009: `thm-arnoldi-exponential-action-error-bound`

- Location: **Facts & Assumptions**; source lines 73.
- Pages: `matrix-exponential-and-phi-function-actions`.
- Visible defect: The auto-expanded wikilink title for the operator-norm definition is visibly underlined with literal TeX source (for example, `max_{||v||=1}||Tv||`) instead of typeset mathematics. The adjacent formula in the frozen ItemBody renders normally. This is a local preview title-rendering issue; the raw ItemBody line and target title text remain intact.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/screenshots/thm-arnoldi-exponential-action-error-bound--01.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/snapshots/thm-arnoldi-exponential-action-error-bound.md).

Exact frozen source lines:

```text
73: [F4] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: for a finite-dimensional linear map $T$, $\|T\|_2=\max_{\|x\|_2=1}\|Tx\|_2$; rescaling gives $\|Tx\|_2\le\|T\|_2\|x\|_2$ for all $x$.
```

#### numerical-linear-algebra-and-approximation / confirmed 010: `thm-hlr-approximate-factorization-residual-and-inverse-error`

- Location: **Facts & Assumptions**; source lines 62.
- Pages: `hierarchical-low-rank-matrices-and-error-propagation`.
- Visible defect: The auto-expanded wikilink title for the operator-norm definition is visibly underlined with literal TeX source (for example, `max_{||v||=1}||Tv||`) instead of typeset mathematics. The adjacent formula in the frozen ItemBody renders normally. This is a local preview title-rendering issue; the raw ItemBody line and target title text remain intact.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/screenshots/thm-hlr-approximate-factorization-residual-and-inverse-error--01.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/snapshots/thm-hlr-approximate-factorization-residual-and-inverse-error.md).

Exact frozen source lines:

```text
62: [F6] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: $\|T\|_2$ is the maximum of $\|Tx\|_2$ over unit vectors.
```

#### numerical-linear-algebra-and-approximation / confirmed 011: `lem-sobolev-zeros-bound-on-a-cone-domain`

- Location: **title**; source lines 4.
- Pages: `radial-basis-and-kernel-interpolation`.
- Visible defect: The title renders the exponent as literal caret notation `h^ν` while nearby ItemBody mathematics is typeset. The math source is visible, not a clipped exponent.
- Future repair: Typeset the exponent in the title, e.g. `h$^\nu$` or an equivalent title-safe TeX form.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/screenshots/lem-sobolev-zeros-bound-on-a-cone-domain--01.png), [tile 02](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/screenshots/lem-sobolev-zeros-bound-on-a-cone-domain--02.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/snapshots/lem-sobolev-zeros-bound-on-a-cone-domain.md).

Exact frozen source lines:

```text
4: title: "A Sobolev function vanishing on scattered sites has an h^ν bound"
```

#### numerical-linear-algebra-and-approximation / confirmed 012: `lem-simplicial-four-polytope-facet-count`

- Location: **title**; source lines 4.
- Pages: `delaunay-triangulations-and-voronoi-computation`.
- Visible defect: The title shows `m(m−3)/2` as ordinary text instead of typeset mathematics; the bound in the statement body is typeset.
- Future repair: Typeset the bound in the title, for example `$m(m-3)/2$`.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/screenshots/lem-simplicial-four-polytope-facet-count--01.png), [tile 02](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/screenshots/lem-simplicial-four-polytope-facet-count--02.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/snapshots/lem-simplicial-four-polytope-facet-count.md).

Exact frozen source lines:

```text
4: title: "A convex 4-polytope has at most m(m−3)/2 facets"
```

#### numerical-linear-algebra-and-approximation / confirmed 013: `thm-mixed-precision-refinement-error-recurrence-and-floor`

- Location: **Statement**; source lines 36, 37, 38, 39.
- Pages: `finite-precision-direct-factorizations`.
- Visible defect: The screenshot displays the entire statement and proof formulas as raw ASCII notation rather than typeset math, making hats, subscripts, norms, and inverse powers ambiguous. This is present in the frozen body text and is not a KaTeX failure.
- Future repair: Convert the mathematical expressions in the statement and proof to TeX delimiters while preserving the stated symbols and operations.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/screenshots/thm-mixed-precision-refinement-error-recurrence-and-floor--01.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/snapshots/thm-mixed-precision-refinement-error-recurrence-and-floor.md).

Exact frozen source lines:

```text
36: Let A be nonsingular, Ax_*=b, A-hat nonsingular, and e_k=x_*-x_k. Suppose the successful refinement algorithm has r-hat_k=Ae_k+delta_r,k with ||delta_r,k||_2<=eta_r(||A||_2||x_k||_2+||b||_2)+xi_r and combined solve/update residual-equivalent error ||delta_w,k||_2<=eta_w||r-hat_k||_2+xi_w. Set rho_0=xi_r+eta_r(||A||_2||x_*||_2+||b||_2),
37: q=||I-A-hat^{-1}A||_2+||A-hat^{-1}||_2((1+eta_w)eta_r+eta_w)||A||_2,
38: eta=||A-hat^{-1}||_2((1+eta_w)rho_0+xi_w).
39: Then e_{k+1}=(I-A-hat^{-1}A)e_k-A-hat^{-1}(delta_r,k+delta_w,k). If q<1 then ||e_k||_2<=q^k||e_0||_2+eta(1-q^k)/(1-q) for every executed k<=N. The precision floor is eta/(1-q); this is conditional and does not promise exact termination.
```

#### numerical-linear-algebra-and-approximation / confirmed 014: `thm-nested-dissection-grid-work-and-storage-bounds`

- Location: **Statement**; source lines 34.
- Pages: `sparse-direct-elimination-and-ordering`.
- Visible defect: The one-line $$...$$ array is rendered inside the surrounding Statement paragraph: the table sits alongside the continuation “The storage is the number of…” and following prose instead of occupying a separate display block, making the statement difficult to read.
- Future repair: Put the display math on its own paragraph with blank lines before and after it, or use a supported display-math block form.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/screenshots/thm-nested-dissection-grid-work-and-storage-bounds--01.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/snapshots/thm-nested-dissection-grid-work-and-storage-bounds.md).

Exact frozen source lines:

```text
34: $$\begin{array}{c|c|c} d&\text{arithmetic work}&\text{symbolic factor storage}\\ 2&O(n^{3/2})&O(n\log n)\\ 3&O(n^2)&O(n^{4/3}). \end{array}$$
```

#### numerical-linear-algebra-and-approximation / confirmed 015: `cor-matern-mesh-ratio-conditioning-bound`

- Location: **title**; source lines 4.
- Pages: `radial-basis-and-kernel-interpolation`.
- Visible defect: The title renders h^{-2s} as literal raw notation instead of a typeset exponent; the exponent appears in braces with a literal caret in the original title tile.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/screenshots/cor-matern-mesh-ratio-conditioning-bound--01.png), [tile 02](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/screenshots/cor-matern-mesh-ratio-conditioning-bound--02.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/snapshots/cor-matern-mesh-ratio-conditioning-bound.md).

Exact frozen source lines:

```text
4: title: "Bounded mesh ratio gives an h^{-2s} exact condition-number bound"
```

#### numerical-linear-algebra-and-approximation / confirmed 016: `cor-matern-mesh-ratio-conditioning-bound`

- Location: **title**; source lines 4.
- Pages: `radial-basis-and-kernel-interpolation`.
- Visible defect: The title renders h^{-2s} as literal raw notation instead of a typeset exponent; the exponent appears in braces with a literal caret in the original title tile.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/screenshots/cor-matern-mesh-ratio-conditioning-bound--01.png), [tile 02](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/screenshots/cor-matern-mesh-ratio-conditioning-bound--02.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/snapshots/cor-matern-mesh-ratio-conditioning-bound.md).

Exact frozen source lines:

```text
4: title: "Bounded mesh ratio gives an h^{-2s} exact condition-number bound"
```

#### numerical-linear-algebra-and-approximation / confirmed 017: `ex-subnormal-and-overflow-range-failure`

- Location: **Example**; source lines 31.
- Pages: `finite-precision-direct-factorizations-examples`.
- Visible defect: The powers, subscripts, and arithmetic are written as plain ASCII without math delimiters, so the frozen body preview shows programmer-style notation rather than typeset numerical formulas. The body is legible and the underlying claim is separate from this minor presentation defect.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/screenshots/ex-subnormal-and-overflow-range-failure--01.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/snapshots/ex-subnormal-and-overflow-range-failure.md).

Exact frozen source lines:

```text
31: Use binary64 and the no-subnormal success policy. Put N_min=2^-1022 and the least positive subnormal 2^-1074. Inputs N_min and -(N_min+2^-1074) are normal, but their exact sum is -2^-1074, so the only tree sum in pairwise summation returns range-failure. Also N_max+N_max overflows at the root and returns range-failure. These are policy branches, not claims that IEEE hardware lacks gradual underflow.
```

#### numerical-linear-algebra-and-approximation / confirmed 018: `def-na-finite-mps-state-and-hermitian-hamiltonian`

- Location: **Diagram**; source lines 55.
- Pages: `alternating-tensor-optimization-and-effective-eigenproblems`.
- Visible defect: The center node has a light gray fill, while its SVG text inherits the light page foreground color. The box is visible but the $X_{k,k+1}$ label is effectively white on a pale fill and disappears in the original-resolution tile. The diagram’s bonds and physical-index labels remain visible and mathematically consistent.
- Future repair: Set the center node text color explicitly to a dark color (or use a sufficiently dark fill) so $X_{k,k+1}$ contrasts with the box.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/screenshots/def-na-finite-mps-state-and-hermitian-hamiltonian--01.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/snapshots/def-na-finite-mps-state-and-hermitian-hamiltonian.md).

Exact frozen source lines:

```text
55: \node[core,minimum width=1.35cm,fill=gray!12] (x) at (4.35,0) {$X_{k,k+1}$};
```

#### numerical-linear-algebra-and-approximation / confirmed 019: `cex-floater-hormann-cd1-seminorm-rate-fails`

- Location: **Item body**; source lines 4.
- Pages: `barycentric-rational-and-aaa-approximation`.
- Visible defect: The title prints C^(d+1) literally; the exponent notation is source-authored plain text, while formulas in the body are typeset.
- Future repair: Typeset the space as $C^{d+1}$ in the title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/screenshots/cex-floater-hormann-cd1-seminorm-rate-fails--01.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/snapshots/cex-floater-hormann-cd1-seminorm-rate-fails.md).

Exact frozen source lines:

```text
4: title: Uniform meshes refute the C^(d+1)-seminorm-only Floater–Hormann rate
```

#### numerical-linear-algebra-and-approximation / confirmed 020: `ex-full-rank-least-squares-normal-equations-versus-qr`

- Location: **Example**; source lines 34, 47.
- Pages: `finite-precision-direct-factorizations-examples`.
- Visible defect: The example’s central matrix and exponent notation are rendered as plain ASCII (A^T A, 2^-27, and tuple-like matrices), matching the source bytes.
- Future repair: Typeset the matrix, transpose and powers in MathMarkdown while preserving the stated binary64 rounding values.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/screenshots/ex-full-rank-least-squares-normal-equations-versus-qr--01.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/snapshots/ex-full-rank-least-squares-normal-equations-versus-qr.md).

Exact frozen source lines:

```text
34: In binary64 RNE take A=((1,1),(0,2^-27)). Its determinant 2^-27 is nonzero. The exact Gram matrix is A^T A=((1,1),(1,1+2^-54)). The spacing above 1 is 2^-52, so the midpoint is 1+2^-53; 1+2^-54 lies strictly below it and rounds to 1. Thus the formed Gram matrix has equal rows and is singular. Reduced QR works directly on A and avoids forming this rounded Gram matrix; the computed stability statement remains conditional on its own hypotheses.
47: 1.1 The determinant is 2^-27, while direct multiplication gives (A^T A)_22=1+2^-54. [given, algebra]
```

#### numerical-linear-algebra-and-approximation / confirmed 021: `ex-ill-conditioned-design-stability-versus-forward-error`

- Location: **Example**; source lines 35.
- Pages: `finite-precision-direct-factorizations-examples`.
- Visible defect: The example’s displayed matrices, transpose and powers remain ordinary ASCII text because the source does not mark them as math.
- Future repair: Typeset the diagonal matrix, vectors, transpose and powers in MathMarkdown.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/screenshots/ex-ill-conditioned-design-stability-versus-forward-error--01.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/snapshots/ex-ill-conditioned-design-stability-versus-forward-error.md).

Exact frozen source lines:

```text
35: Let A=diag(1,2^-40), with condition number 2^40. For b=(1,0)^T the unique solution is x=(1,0)^T; for b-tilde=(1,2^-40)^T it is x-tilde=(1,1)^T. The relative data change is 2^-40 while the relative solution change is 1. Thus backward stability does not imply small forward error for an ill-conditioned design.
```

#### numerical-linear-algebra-and-approximation / confirmed 022: `thm-matern-interpolation-fill-distance-error`

- Location: **Item body**; source lines 4.
- Pages: `radial-basis-and-kernel-interpolation`.
- Visible defect: The title prints the source-authored caret exponent h^ν literally; the body uses typeset fill-distance notation.
- Future repair: Use a title such as rate $h^\nu$ (or state the fill-distance symbol explicitly).
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/screenshots/thm-matern-interpolation-fill-distance-error--01.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/snapshots/thm-matern-interpolation-fill-distance-error.md).

Exact frozen source lines:

```text
4: title: "Matérn interpolation and its power function converge at rate h^ν"
```

### Uncertain observations

#### numerical-linear-algebra-and-approximation / uncertain 001: `prop-circulants-are-unitarily-diagonalized-by-the-canonical-dft`

- Location: **Statement**; source lines 42, 43, 44, 45, 46, 47.
- Pages: `toeplitz-circulant-and-displacement-structured-solvers`.
- Visible defect: The original-resolution screenshot shows a red “diagram failed to render” block and the raw TikZ source instead of a commutative square. The source wraps a complete tikzcd environment inside a tikzcd code fence, which is the concrete likely trigger.
- Future repair: Remove the duplicated inner tikzcd environment or use the renderer-supported wrapper, retaining the same four C^N objects and maps.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/screenshots/prop-circulants-are-unitarily-diagonalized-by-the-canonical-dft--01.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/snapshots/prop-circulants-are-unitarily-diagonalized-by-the-canonical-dft.md).

Exact frozen source lines:

```text
42: ```tikzcd
43: \begin{tikzcd}
44: \mathbb C^N \arrow[r,"C(c)"] \arrow[d,"\mathcal F_N"'] & \mathbb C^N \arrow[d,"\mathcal F_N"] \\
45: \mathbb C^N \arrow[r,"\operatorname{diag}(\lambda)"] & \mathbb C^N
46: \end{tikzcd}
47: ```
```

#### numerical-linear-algebra-and-approximation / uncertain 002: `ex-single-new-knot-insertion-preserves-linear-curve`

- Location: **Example**; source lines 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57.
- Pages: `spline-evaluation-and-interpolation-algorithms-examples`.
- Visible defect: At original resolution, the three lower control circles nearly merge and the labels Q0=0, Q1=1/2, and Q2=1 visibly collide, making the lower row difficult to read. The diagram is fully inside tile context; this is not a tile-edge clipping inference.
- Future repair: Increase horizontal node spacing and/or reduce node minimum size/label footprint while preserving the four stated arrows.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/screenshots/ex-single-new-knot-insertion-preserves-linear-curve--01.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/snapshots/ex-single-new-knot-insertion-preserves-linear-curve.md).

Exact frozen source lines:

```text
42: ```tikz
43: \begin{tikzpicture}[
44:   control/.style={draw,circle,fill=white,minimum size=8mm,inner sep=1pt},
45:   copy/.style={->,gray!75,line width=.8pt},
46:   blend/.style={->,blue!70!black,line width=1pt}
47: ]
48: \node[control] (p0) at (0,1.7) {$P_0=0$};
49: \node[control] (p1) at (2,1.7) {$P_1=1$};
50: \node[control] (q0) at (0,0) {$Q_0=0$};
51: \node[control] (q1) at (1,0) {$Q_1=1/2$};
52: \node[control] (q2) at (2,0) {$Q_2=1$};
53: \draw[copy] (p0) -- (q0);
54: \draw[blend] (p0) -- (q1);
55: \draw[blend] (p1) -- (q1);
56: \draw[copy] (p1) -- (q2);
57: \end{tikzpicture}
```

### Source metadata parse blockers

#### numerical-linear-algebra-and-approximation / source-parse-blocker 001: `ex-jordan-block-epsilon-pseudospectrum`

- Location: frontmatter lines 17, 18, 19, 20, 21.
- Strict parse failure: Strict YAML parsing of the frozen source frontmatter fails: Nested mappings are not allowed in compact mappings: proof_strategy: direct followed by an indented judge mapping.. This blocks canonical metadata parsing and is separate from the recovered title/body preview.
- Recovered preview metadata transform: Recorded in blocker file.
- Evidence: [parse-blocker record](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/frontmatter-parse-blockers.json); [frozen source](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/snapshots/ex-jordan-block-epsilon-pseudospectrum.md).

Exact frozen source lines:

```text
17: proof_strategy: direct
18:   judge:
19:     model: "gpt-6-luna"
20:     verdict: pass
21:     date: 2026-10-17
```

#### numerical-linear-algebra-and-approximation / source-parse-blocker 002: `ex-jordan-eigenvalue-residual-square-root-instability`

- Location: frontmatter lines 18, 19, 20, 21, 22.
- Strict parse failure: Strict YAML parsing of the frozen source frontmatter fails: Nested mappings are not allowed in compact mappings: proof_strategy: direct followed by an indented judge mapping.. This blocks canonical metadata parsing and is separate from the recovered title/body preview.
- Recovered preview metadata transform: Recorded in blocker file.
- Evidence: [parse-blocker record](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/frontmatter-parse-blockers.json); [frozen source](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/snapshots/ex-jordan-eigenvalue-residual-square-root-instability.md).

Exact frozen source lines:

```text
18: proof_strategy: direct
19:   judge:
20:     model: "gpt-6-luna"
21:     verdict: pass
22:     date: 2026-10-17
```

#### numerical-linear-algebra-and-approximation / source-parse-blocker 003: `lem-francis-double-shift-bulge-chase-matches-explicit-qr`

- Location: frontmatter lines 19, 20, 21, 22, 23.
- Strict parse failure: Strict YAML parsing of the frozen source frontmatter fails: Nested mappings are not allowed in compact mappings: proof_strategy: direct followed by an indented judge mapping.. This blocks canonical metadata parsing and is separate from the recovered title/body preview.
- Recovered preview metadata transform: Recorded in blocker file.
- Evidence: [parse-blocker record](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/frontmatter-parse-blockers.json); [frozen source](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/snapshots/lem-francis-double-shift-bulge-chase-matches-explicit-qr.md).

Exact frozen source lines:

```text
19: proof_strategy: direct
20:   judge:
21:     model: "gpt-6-luna"
22:     verdict: pass
23:     date: 2026-10-17
```

#### numerical-linear-algebra-and-approximation / source-parse-blocker 004: `lem-scaled-chebyshev-filter-bound-on-a-separated-interval`

- Location: frontmatter lines 17, 18, 19, 20, 21.
- Strict parse failure: Strict YAML parsing of the frozen source frontmatter fails: Nested mappings are not allowed in compact mappings: proof_strategy: direct followed by an indented judge mapping.. This blocks canonical metadata parsing and is separate from the recovered title/body preview.
- Recovered preview metadata transform: Recorded in blocker file.
- Evidence: [parse-blocker record](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/frontmatter-parse-blockers.json); [frozen source](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/snapshots/lem-scaled-chebyshev-filter-bound-on-a-separated-interval.md).

Exact frozen source lines:

```text
17: proof_strategy: direct
18:   judge:
19:     model: "gpt-6-luna"
20:     verdict: pass
21:     date: 2026-10-17
```

#### numerical-linear-algebra-and-approximation / source-parse-blocker 005: `thm-two-pass-mgs-arnoldi-local-relation-and-orthogonality-bound`

- Location: frontmatter lines 19, 20, 21, 22, 23.
- Strict parse failure: Strict YAML parsing of the frozen source frontmatter fails: Nested mappings are not allowed in compact mappings: proof_strategy: direct followed by an indented judge mapping.. This blocks canonical metadata parsing and is separate from the recovered title/body preview.
- Recovered preview metadata transform: Recorded in blocker file.
- Evidence: [parse-blocker record](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/frontmatter-parse-blockers.json); [frozen source](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/snapshots/thm-two-pass-mgs-arnoldi-local-relation-and-orthogonality-bound.md).

Exact frozen source lines:

```text
19: proof_strategy: direct
20:   judge:
21:     model: "gpt-6-luna"
22:     verdict: pass
23:     date: 2026-10-17
```

#### numerical-linear-algebra-and-approximation / source-parse-blocker 006: `thm-cg-recursive-residual-gap-and-attainable-accuracy`

- Location: frontmatter lines 21, 22, 23, 24, 25.
- Strict parse failure: Strict YAML parsing of the frozen source frontmatter fails: Nested mappings are not allowed in compact mappings: proof_strategy: direct followed by an indented judge mapping.. This blocks canonical metadata parsing and is separate from the recovered title/body preview.
- Recovered preview metadata transform: Recorded in blocker file.
- Evidence: [parse-blocker record](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/frontmatter-parse-blockers.json); [frozen source](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/snapshots/thm-cg-recursive-residual-gap-and-attainable-accuracy.md).

Exact frozen source lines:

```text
21: proof_strategy: direct
22:   judge:
23:     model: "gpt-6-luna"
24:     verdict: pass
25:     date: 2026-10-17
```

#### numerical-linear-algebra-and-approximation / source-parse-blocker 007: `thm-gmres-true-residual-gap-from-computed-arnoldi-relation`

- Location: frontmatter lines 20, 21, 22, 23, 24.
- Strict parse failure: Strict YAML parsing of the frozen source frontmatter fails: Nested mappings are not allowed in compact mappings: proof_strategy: direct followed by an indented judge mapping.. This blocks canonical metadata parsing and is separate from the recovered title/body preview.
- Recovered preview metadata transform: Recorded in blocker file.
- Evidence: [parse-blocker record](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/frontmatter-parse-blockers.json); [frozen source](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/snapshots/thm-gmres-true-residual-gap-from-computed-arnoldi-relation.md).

Exact frozen source lines:

```text
20: proof_strategy: direct
21:   judge:
22:     model: "gpt-6-luna"
23:     verdict: pass
24:     date: 2026-10-17
```

#### numerical-linear-algebra-and-approximation / source-parse-blocker 008: `ex-left-preconditioned-residual-can-understate-physical-residual`

- Location: frontmatter lines 20, 21, 22, 23, 24.
- Strict parse failure: Strict YAML parsing of the frozen source frontmatter fails: Nested mappings are not allowed in compact mappings: proof_strategy: direct followed by an indented judge mapping.. This blocks canonical metadata parsing and is separate from the recovered title/body preview.
- Recovered preview metadata transform: Recorded in blocker file.
- Evidence: [parse-blocker record](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/frontmatter-parse-blockers.json); [frozen source](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/snapshots/ex-left-preconditioned-residual-can-understate-physical-residual.md).

Exact frozen source lines:

```text
20: proof_strategy: direct
21:   judge:
22:     model: "gpt-6-luna"
23:     verdict: pass
24:     date: 2026-10-17
```

#### numerical-linear-algebra-and-approximation / source-parse-blocker 009: `cex-ilu0-product-can-create-fill-outside-input-pattern`

- Location: frontmatter lines 20, 21, 22, 23, 24.
- Strict parse failure: Strict YAML parsing of the frozen source frontmatter fails: Nested mappings are not allowed in compact mappings: proof_strategy: direct followed by an indented judge mapping.. This blocks canonical metadata parsing and is separate from the recovered title/body preview.
- Recovered preview metadata transform: Recorded in blocker file.
- Evidence: [parse-blocker record](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/frontmatter-parse-blockers.json); [frozen source](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/snapshots/cex-ilu0-product-can-create-fill-outside-input-pattern.md).

Exact frozen source lines:

```text
20: proof_strategy: direct
21:   judge:
22:     model: "gpt-6-luna"
23:     verdict: pass
24:     date: 2026-10-17
```

#### numerical-linear-algebra-and-approximation / source-parse-blocker 010: `thm-ilu0-factor-pattern-and-work-counts`

- Location: frontmatter lines 19, 20, 21, 22, 23.
- Strict parse failure: Strict YAML parsing of the frozen source frontmatter fails: Nested mappings are not allowed in compact mappings: proof_strategy: direct followed by an indented judge mapping.. This blocks canonical metadata parsing and is separate from the recovered title/body preview.
- Recovered preview metadata transform: Recorded in blocker file.
- Evidence: [parse-blocker record](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/frontmatter-parse-blockers.json); [frozen source](math-library-rendering-audit-2026-10-23/numerical-linear-algebra-and-approximation/snapshots/thm-ilu0-factor-pattern-and-work-counts.md).

Exact frozen source lines:

```text
19: proof_strategy: direct
20:   judge:
21:     model: "gpt-6-luna"
22:     verdict: pass
23:     date: 2026-10-17
```

