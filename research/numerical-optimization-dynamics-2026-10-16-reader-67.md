# Step 3a reader report — batch 67

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader  
Scope: batch `67`

## Opened inventory

### Assigned pages

- `restarted-and-block-eigensolvers` — [library/numerical-linear-algebra-and-approximation/restarted-and-block-eigensolvers.md](../library/numerical-linear-algebra-and-approximation/restarted-and-block-eigensolvers.md)
- `restarted-and-block-eigensolvers-examples` — [library/numerical-linear-algebra-and-approximation/restarted-and-block-eigensolvers-examples.md](../library/numerical-linear-algebra-and-approximation/restarted-and-block-eigensolvers-examples.md)

### Assigned items, read in dependency order

- Level 0: `alg-thick-and-implicitly-restarted-arnoldi-with-locking`.
- Level 1: `thm-implicit-restart-polynomial-subspace-and-residual-identity`; `alg-block-lobpcg-with-rank-loss-status`.
- Level 2: `thm-finite-budget-restarted-and-block-procedures-return-a-status`; `lem-generalized-ritz-values-monotone-under-nested-subspaces`; `ex-implicit-restart-shift-can-suppress-wanted-component`.
- Level 3: `lem-block-principal-angle-squared-ritz-enclosure`; `thm-lobpcg-selected-ritz-values-do-not-increase`.
- Level 4: `ex-clustered-vibration-modes-with-block-lobpcg`.
- Level 6: `alg-shift-invert-and-harmonic-ritz-extraction`.
- Level 7: `thm-finite-budget-shift-invert-and-harmonic-procedures-return-a-status`; `thm-shift-invert-map-and-inexact-solve-residual-transfer`.
- Level 8: `ex-interior-vibration-mode-shift-invert`.

### Dependency sources opened

- Arnoldi and QR: `def-krylov-subspace-of-a-matrix-and-start-vector`, `def-inner-product-space`, `def-inner-product-norm`, `def-arnoldi-process`, `thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization`, `def-ritz-values-and-ritz-vectors-from-arnoldi`, `prop-ritz-residual-formula-for-an-arnoldi-ritz-pair`, `def-complex-conjugate-real-imaginary-part-and-modulus`, `def-real-and-complex-givens-transformations`, `def-full-reduced-and-column-pivoted-computational-qr-factorisations`, `def-unshifted-and-shifted-qr-iteration-with-deflation-and-wilkinson-shift`, `prop-shifted-qr-preserves-upper-hessenberg-form`, and `def-upper-hessenberg-and-real-symmetric-tridiagonal-matrices`.
- Hermitian-definite pencil and LOBPCG: `def-b-inner-product-and-dual-norm-for-definite-pencil`, `def-cholesky-factorisation-with-positive-diagonal`, `thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique`, `thm-hermitian-definite-pencil-has-real-spectrum-and-b-orthogonal-eigenbasis`, `def-eigenvalue-eigenvector-eigenspace-and-spectrum`, `thm-complex-spectral-theorem-for-normal-endomorphisms`, `def-determinant-of-a-square-matrix`, `thm-determinant-multiplicative`, `thm-determinant-of-a-triangular-matrix`, `thm-operator-invertible-iff-determinant-nonzero`, and `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`.
- Shift-invert and QZ: `prop-eigenvalue-iff-shift-is-not-invertible`, `def-regular-generalized-eigenvalue-pencil`, `def-generalized-schur-form`, `def-triangular-and-diagonal-matrices-over-a-commutative-ring`, `def-linear-isometry-and-orthogonal-or-unitary-operator`, `alg-finite-budget-qz-iteration-with-deflation-and-residual`, `prop-finite-budget-qz-iteration-terminates-and-preserves-pencil-equivalence`, `lem-qz-two-sided-local-computed-update-bound`, `lem-scaled-complex-householder-and-givens-local-backward-error`, `lem-rounded-linear-and-normal-residual-certificates`, `alg-scaled-complex-householder-and-givens-updates`, `def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma`, `lem-product-of-one-plus-deltas-gives-theta-n`, `alg-generalized-hessenberg-triangular-reduction`, `prop-generalized-hessenberg-triangular-reduction-preserves-form-and-equivalence`, `lem-two-sided-unitary-equivalence-errors-accumulate-for-pencil`, `lem-unitary-similarity-error-accumulation`, `thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries`, `thm-cauchy-schwarz-in-an-inner-product-space`, `def-matrix-product-and-identity-matrix`, `def-frobenius-matrix-norm`, and `thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison`.
- Cross-batch consumer check after the Arnoldi Definition repair: `alg-golub-welsch-certified-node-and-weight-enclosures` from batch `82`.

The run was active in Step 3a when checked; the controller reported no in-flight writer. Draft suppliers were read from their current carriers. Their earlier author notes and readiness records were not treated as mathematical verdicts.

## Repairs and evidence

1. `alg-thick-and-implicitly-restarted-arnoldi-with-locking`, Definition, Steps 1, 3, and 4: the previous procedure did not construct a projected matrix after its multi-direction thick restart and did not specify the residual direction that seeds the continuation after an implicit restart. It also described an `m`-dimensional cycle without explicitly retaining the residual from the `m`th Arnoldi step, although the implicit QR restart needs that relation. The Definition now states the `m`-step residual data, constructs `H_d=V_d^*AV_d` after a thick restart, processes Ritz pairs before reporting an invariant-subspace exit, gives exact shifted-Givens QR instructions, checks the filtered Krylov rank, and computes the retained residual vector directly before continuing Arnoldi. The local theorem `thm-implicit-restart-polynomial-subspace-and-residual-identity` supplies the corresponding exact residual identity. Saad, *Numerical Methods for Large Eigenvalue Problems*, 2nd ed., §7.3, especially Algorithm 7.3 (printed p. 169), gives the shifted-QR restart and explicitly forms the new residual direction before continuing the Arnoldi factorization: [source PDF](https://www-users.cse.umn.edu/~saad/eig_book_2ndEd.pdf). The in-text reference was already present. No `verification.judge` record existed to remove. The affected proof-contract boundary note was updated.

2. `alg-block-lobpcg-with-rank-loss-status`, Definition, Step 1: the previous procedure computed the Ritz values of `range(X_0)` but retained the original basis columns while Step 2 paired those columns with the diagonal Ritz-value matrix. For an arbitrary valid B-orthonormal starting block, those columns need not be Ritz vectors, so the first residual block could be inconsistent with its values. The input is now declared as a general `n`-by-`q` matrix, Step 1 validates it, diagonalizes `X_0^*AX_0`, and replaces `X_0` by `X_0Z_0` before forming residuals. This follows directly from the Rayleigh–Ritz compression and the cited finite-dimensional spectral theorem. No `verification.judge` record existed to remove. The affected proof-contract boundary note was updated.

No other item or page was edited. The direct batch-82 consumer of the Arnoldi algorithm retains its input, output, and status interface; its full-dimension call obtains its Ritz data in the initial cycle, so the clarified restart instructions do not change its route.

## Defects not edited

None found in assigned carriers or in the dependency claims needed for this review.

## Page verdicts

- `restarted-and-block-eigensolvers` (A page): summary is consistent with the assigned definitions and results. It limits implicit-restart claims to the exact polynomial/residual identities, accurately states the LOBPCG variational and principal-angle results, and does not claim arbitrary-shift convergence or forward accuracy from residual size alone. The two item repairs close the procedural gaps recorded above.
- `restarted-and-block-eigensolvers-examples` (B page): summary and all three examples are consistent with their dependencies. The attenuation factors and Rayleigh quotient in the implicit-restart example, the block residual/rank calculation and Ritz values in the LOBPCG example, and the shift-invert/QZ scalar pairs and inexact-solve residual identity in the interior-mode example check directly. No page prose or example item was edited.

## Checks and blockers

- `reflow` on both changed items: unchanged, exit 0.
- `precheck` on both changed items: exit 0; 0 proof sections checked, 0 failing (both are algorithms without phase proofs).
- Final `proof-layout` on both changed item paths in one command: exit 0; 2 items, 0 proof steps, 0 defects.
- The updated batch proof-contract JSON parses. No separate full rendercheck or whole-run dependency-closure audit was run.
- Blocker: none.
