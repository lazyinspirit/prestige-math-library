# Step 3a reader report — batch 48

Run: `numerical-optimization-dynamics-2026-10-16`  
Assigned pages: `generalized-eigenvalue-pencils-and-qz-methods` (A) and
`generalized-eigenvalue-pencils-and-qz-methods-examples` (B)

## Opened inventory

I read both assigned pages, all 21 assigned items, their 30 direct item
dependencies, and four additional suppliers needed to check the current-run
floating-point and residual-bound items. I read the A page's six required page
summaries and the companion B page's required A page.

Assigned A-page items, read in dependency order:

- Level 0: `def-regular-generalized-eigenvalue-pencil`,
  `lem-block-upper-triangular-pencil-determinant-factorizes`,
  `lem-zero-determinant-matrix-has-nonzero-kernel-vector`,
  `def-b-inner-product-and-dual-norm-for-definite-pencil`,
  `alg-generalized-hessenberg-triangular-reduction`.
- Level 1: `def-generalized-schur-form`,
  `lem-projective-determinant-is-homogeneous-and-scale-invariant`,
  `lem-regular-pencil-has-no-common-kernel-vector`,
  `lem-two-sided-unitary-equivalence-errors-accumulate-for-pencil`,
  `thm-hermitian-definite-pencil-has-real-spectrum-and-b-orthogonal-eigenbasis`,
  `prop-generalized-hessenberg-triangular-reduction-preserves-form-and-equivalence`.
- Level 2: `lem-regular-pencil-has-projective-eigenvalue`,
  `thm-b-metric-residual-encloses-definite-pencil-eigenvalue`.
- Level 3: `lem-qz-two-sided-local-computed-update-bound`,
  `thm-generalized-schur-form-exists-for-regular-pencil`.
- Level 4: `alg-finite-budget-qz-iteration-with-deflation-and-residual`.
- Level 5: `prop-finite-budget-qz-iteration-terminates-and-preserves-pencil-equivalence`.
- Level 6: `thm-computed-qz-pair-has-certified-backward-error`.

Assigned B-page items: `ex-singular-b-yields-an-infinite-generalized-eigenvalue`,
`ex-regular-and-singular-pencil-determinant-witnesses`, and
`ex-mass-stiffness-pencil-has-two-b-orthogonal-modes`.

The six required page summaries opened were `direct-matrix-factorisations-lu-cholesky-and-qr`,
`the-spectral-theorem-and-singular-value-decomposition`,
`finite-precision-direct-factorizations`,
`computed-schur-decompositions-and-nonnormal-spectra`,
`computed-singular-values-and-rank-revealing-factorizations`, and
`the-complex-exponential-and-eulers-formula`.

Direct external item dependencies opened:

`alg-scaled-complex-householder-and-givens-updates`,
`cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`,
`cor-matrix-rank-equals-the-rank-of-its-linear-map`, `cor-matrix-rank-nullity`,
`cor-real-spectral-theorem-for-self-adjoint-endomorphisms`,
`def-cholesky-factorisation-with-positive-diagonal`,
`def-determinant-of-a-square-matrix`, `def-frobenius-matrix-norm`,
`def-inner-product-norm`, `def-inner-product-space`,
`def-linear-isometry-and-orthogonal-or-unitary-operator`,
`def-matrix-product-and-identity-matrix`,
`def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma`,
`def-real-and-complex-givens-transformations`,
`def-triangular-and-diagonal-matrices-over-a-commutative-ring`,
`def-upper-hessenberg-and-real-symmetric-tridiagonal-matrices`,
`lem-rounded-linear-and-normal-residual-certificates`,
`lem-scaled-complex-householder-and-givens-local-backward-error`,
`lem-unitary-similarity-error-accumulation`,
`thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique`,
`thm-complex-spectral-theorem-for-normal-endomorphisms`,
`thm-determinant-multiplicative`, `thm-determinant-of-a-triangular-matrix`,
`thm-fundamental-theorem-of-algebra-minimum-modulus-proof`,
`thm-gram-schmidt-orthonormalisation`,
`thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries`,
`thm-leibniz-determinant-is-alternating-multilinear-and-normalized`,
`thm-operator-invertible-iff-determinant-nonzero`,
`thm-root-bound-for-polynomials-over-a-domain`, and
`thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison`.

The four additional suppliers opened were `def-householder-reflector`,
`def-standard-relative-floating-point-model-and-unit-roundoff`,
`lem-product-of-one-plus-deltas-gives-theta-n`, and
`thm-cauchy-schwarz-in-an-inner-product-space`. The current-run external items
were `alg-scaled-complex-householder-and-givens-updates` (batch 17),
`def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma` (batch 1),
`lem-rounded-linear-and-normal-residual-certificates` (batch 1),
`lem-scaled-complex-householder-and-givens-local-backward-error` (batch 17), and
`lem-unitary-similarity-error-accumulation` (batch 33).

## Repairs and evidence

- In `alg-generalized-hessenberg-triangular-reduction`, the rotation loops used
  indices `1,...,n` although the Givens definition uses positions
  `0,...,n-1`. The old schedule skipped column 0 and reached invalid index `n`.
  I stated the zero-based convention and changed the triangularization loops to
  `j=0,...,n-1`, `i=n-1,...,j+1`, and the Hessenberg loops to
  `j=0,...,n-3`, `i=n-1,...,j+2`. I updated
  `prop-generalized-hessenberg-triangular-reduction-preserves-form-and-equivalence`
  and its contract derivations to use these bounds. The local Givens definition
  explicitly sets `0<=i<j<=n-1`; the triangular-matrix definitions use the same
  zero-based entry convention.
- In `alg-finite-budget-qz-iteration-with-deflation-and-residual`, the sweep
  used `e_1`, columns `1,2`, and an unnamed “current Hessenberg bulge” without
  declaring an index convention or naming its target. I declared zero-based
  global and relative block indices, made block endpoints inclusive, and
  specified the actual shift and bulge targets, including
  `T_{1,0}`, `H_{j+1,j-1}`, and `T_{j+1,j}` in relative coordinates. I also
  specified the right-factor row pairs and treated T-neighbor terms outside an
  active block as missing. I updated
  `prop-finite-budget-qz-iteration-terminates-and-preserves-pencil-equivalence`
  and its contract derivations. The target sequence matches its support proof;
  the local Kressner extract gives the implicit QZ rotation sequence in
  Chapter 2, §3.2, Algorithm 2.13 (printed p. 74), and the infinite-deflation
  context in §3.4 (printed pp. 80–81).
- In `lem-regular-pencil-has-projective-eigenvalue`, step 1.1 attributed the
  Leibniz formula to `def-regular-generalized-eigenvalue-pencil`, whose
  definition does not state that formula. I rewrote the degree argument using
  the cited column-multilinearity theorem, which also supports the leading
  coefficient calculation in step 2.2. I updated its proof-contract
  derivations and the F4 usage record.
- In `lem-regular-pencil-has-no-common-kernel-vector`, I made the finite-root
  contradiction explicit by exhibiting the `n+1` distinct roots
  `0,1,...,n`.
- I updated `research/numerical-optimization-dynamics-2026-10-16-batch-48.proof-contracts.json`
  for the changed source quotations, derivations, and loop-bound evidence.
  No changed item had a `verification.judge` record to remove.

## Validation

Reflow and precheck were run for all six changed items. The two algorithms were
reported `0 checked, 0 failing`; the four proof-bearing items passed with
`1 checked, 0 failing` each. The final combined proof-layout run covered all six
changed paths and reported `6 items, 15 steps, 0 defects`.

## Page verdicts

- `generalized-eigenvalue-pencils-and-qz-methods` (A): reviewed and acceptable
  after the two algorithm and consumer-proof repairs above. No page-prose edit
  was needed.
- `generalized-eigenvalue-pencils-and-qz-methods-examples` (B): reviewed and
  acceptable. The determinant, mass-matrix, mode, and residual calculations
  check out. B-page prose was not edited.

## Uneditable findings and blocker

No defect remains unedited, and there is no blocker. The QZ source cross-check
used the repository's extracted Kressner Chapter 2 text for the locators listed
above; no new web fetch was needed.
