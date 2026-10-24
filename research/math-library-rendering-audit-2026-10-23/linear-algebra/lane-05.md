# Linear Algebra rendering audit — lane 05

## Scope and coverage

Reviewed all 75 assigned items. Opened all 97 assigned PNG tiles individually with original resolution; checked each rendered title and complete local ItemBody. Per-item source/HTML hashes and per-tile hashes/dimensions are recorded in [lane-05.json](lane-05.json).

| Item | Tiles | Result |
|---|---:|---|
| cex-a-preconditioner-can-worsen-the-preconditioned-condition-number | 1 | clean |
| cex-conjugate-gradients-can-break-on-a-symmetric-indefinite-system | 1 | clean |
| cex-naive-quaternion-determinant-is-not-row-alternating | 1 | clean |
| cex-subset-closed-under-scaling-but-not-addition | 3 | clean |
| cor-characteristic-polynomial-evaluation-has-only-zero-eigenvalues | 1 | clean |
| cor-dimension-of-the-kth-exterior-power | 1 | clean |
| cor-every-vector-space-has-a-basis | 2 | clean |
| cor-independent-set-is-no-larger-than-a-finite-spanning-set | 2 | clean |
| cor-moore-penrose-image-and-kernel-identities | 1 | clean |
| cor-rank-and-nondegeneracy-are-congruence-invariants | 1 | clean |
| cor-square-matrix-invertible-iff-determinant-is-a-unit | 1 | clean |
| def-adjoint-of-a-linear-map-between-inner-product-spaces | 1 | clean |
| def-bilinear-symmetric-skew-and-alternating-forms | 1 | clean |
| def-condition-number-of-a-nonsingular-linear-system | 1 | finding |
| def-determinant-of-a-square-matrix | 1 | clean |
| def-exterior-algebra-of-a-vector-space | 1 | clean |
| def-grade-and-relative-minimal-polynomial-of-a-start-vector | 1 | clean |
| def-invariant-subspace-and-induced-quotient-operator | 1 | clean |
| def-kth-exterior-power-of-a-linear-map | 1 | clean |
| def-linear-subspace | 2 | clean |
| def-moore-penrose-pseudoinverse | 1 | clean |
| def-orthogonal-complement | 1 | clean |
| def-rank-and-nullity | 1 | clean |
| def-row-echelon-reduced-row-echelon-and-pivots | 1 | clean |
| def-standard-relative-floating-point-model-and-unit-roundoff | 1 | clean |
| def-triangularisable-endomorphism | 1 | clean |
| ex-a-full-column-rank-pseudoinverse-from-reduced-qr | 1 | clean |
| ex-adjoint-of-a-three-by-two-complex-matrix | 1 | clean |
| ex-building-a-jordan-string-basis-for-a-nilpotent-operator | 1 | clean |
| ex-complexification-of-a-real-polynomial-space | 1 | clean |
| ex-diagonal-pseudoinverse-and-the-two-orthogonal-projections | 1 | clean |
| ex-four-by-four-determinant-by-cofactors-and-row-reduction | 2 | clean |
| ex-hodge-star-in-dimensions-two-three-and-four | 1 | clean |
| ex-ldu-factorisation-and-its-unique-diagonal-pivots | 1 | clean |
| ex-normal-equations-versus-qr-conditioning | 1 | clean |
| ex-power-iteration-on-a-diagonal-matrix-displays-the-eigenvalue-ratio-rate | 1 | clean |
| ex-rank-one-svd-truncation | 1 | clean |
| ex-repeated-eigenvalue-with-one-dimensional-eigenspace | 1 | clean |
| ex-shifted-inverse-iteration-targets-a-nondominant-eigenvalue | 1 | clean |
| ex-the-directional-derivative-of-a-simple-singular-value | 1 | clean |
| ex-two-gauge-choices-give-different-eigenvector-derivatives | 1 | clean |
| fs-an-orientation-determines-an-inner-product | 1 | clean |
| fs-every-endomorphism-has-jordan-form-over-its-base-field | 1 | clean |
| fs-operator-norm-is-the-largest-eigenvalue-modulus | 1 | clean |
| lem-a-vector-realises-the-minimal-polynomial | 1 | clean |
| lem-dependent-iff-a-vector-lies-in-the-span-of-the-others | 4 | clean |
| lem-kernel-and-rank-sequences-of-powers | 1 | clean |
| lem-polynomial-kernels-and-images-are-invariant | 1 | clean |
| lem-span-of-a-single-vector | 2 | clean |
| prop-coordinate-cauchy-schwarz-agrees-with-the-finite-sum-theorem | 1 | clean |
| prop-galerkin-orthogonality-for-a-krylov-galerkin-iterate | 1 | clean |
| prop-matrix-differentials-obey-sum-product-and-adjoint-rules | 1 | clean |
| prop-reduced-qr-formulas-for-full-rank-pseudoinverses | 1 | clean |
| prop-spectral-numerical-rank-counts-singular-values-above-the-declared-threshold | 2 | clean |
| rem-floating-point-conjugate-gradients-can-lose-orthogonality-conjugacy-and-finite-termination | 1 | clean |
| thm-adjugate-is-equivariant-under-similarity | 1 | clean |
| thm-cauchy-interlacing-for-self-adjoint-compressions | 1 | clean |
| thm-complex-spectral-theorem-for-normal-endomorphisms | 1 | clean |
| thm-cyclic-vector-criterion-by-minimal-and-characteristic-polynomials | 2 | clean |
| thm-determinant-sign-detects-orientation-change | 1 | clean |
| thm-dual-family-is-a-basis-in-finite-dimension | 1 | clean |
| thm-finite-dimensional-isometry-characterisations | 2 | clean |
| thm-gaussian-elimination-with-partial-pivoting-computes-a-nearby-factorisation-with-pivot-growth-bound | 2 | finding |
| thm-hodge-star-exists-uniquely-and-has-the-orthonormal-basis-formula | 2 | clean |
| thm-invertible-matrices-factor-into-elementary-matrices | 1 | clean |
| thm-local-conditioning-times-backward-error-controls-forward-error-to-first-order | 2 | clean |
| thm-minres-minimizes-the-euclidean-residual-over-the-hermitian-krylov-space | 1 | clean |
| thm-operator-determinant-is-basis-independent | 1 | clean |
| thm-polarization-bijection-in-characteristic-not-two | 1 | clean |
| thm-real-normal-endomorphism-classification | 2 | clean |
| thm-row-equivalence-characterisations | 1 | clean |
| thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms | 2 | clean |
| thm-steinitz-exchange | 4 | clean |
| thm-tikhonov-regularised-least-squares-has-a-unique-minimiser | 1 | clean |
| thm-unpivoted-unit-lower-lu-exists-iff-leading-principal-minors-are-nonzero | 2 | clean |

## Confirmed findings

1. **Raw ASCII math in the condition-number title** — frozen source line 4 renders as literal `kappa_p(A) = ||A||_p ||A^{-1}||_p` in the H1. Suggested repair: use a prose title or supported title math delimiters. Evidence: `screenshots/def-condition-number-of-a-nonsingular-linear-system--01.png`.

2. **Raw ASCII math in a linked reference title** — the L3 wikilink on frozen source line 48 displays “If |delta_i| <= u and nu < 1, then prod (1+delta_i) = 1+theta_n with |theta_n| <= gamma_n” as literal notation in Facts & Assumptions. The visible label is supplied by the local reference-title resolver. Suggested repair: typeset that linked title or use a prose link label. Evidence: `screenshots/thm-gaussian-elimination-with-partial-pivoting-computes-a-nearby-factorisation-with-pivot-growth-bound--01.png`.

## Diagram candidate

**def-invariant-subspace-and-induced-quotient-operator**, frozen source lines 35–37: editorial candidate for a commutative square `V --T--> V`, quotient projections `pi` down to `V/W`, and `V/W --bar(T)--> V/W`. Label `T(W) subseteq W` and check `pi T = bar(T) pi`. This records the source-defined compatibility; it does not replace the well-definedness argument.

The remaining 73 assigned items were visually clean for the requested rendering checks. No existing diagrams appeared in this lane. Review is limited to the frozen local previews; it makes no production-route claim.
