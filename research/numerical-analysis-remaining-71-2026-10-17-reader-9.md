# Step 3a reader report — batch 9

Run: numerical-analysis-remaining-71-2026-10-17

Verdict: both assigned pages pass after two proof clarifications in assigned items. No blocker remains.

## Opened inventory

Assigned pages:

- library/numerical-linear-algebra-and-approximation/toeplitz-circulant-and-displacement-structured-solvers.md
- library/numerical-linear-algebra-and-approximation/toeplitz-circulant-and-displacement-structured-solvers-examples.md

Assigned items, reviewed in dependency order:

- A page: def-toeplitz-circulant-and-displacement-notation; thm-realified-dense-residual-certificate; prop-circulants-are-unitarily-diagonalized-by-the-canonical-dft; thm-zero-padded-fft-toeplitz-matvec-is-exact-and-costs-nlogn; lem-complex-hermitian-toeplitz-reflection-recursion; def-displacement-rank-generators-and-lower-shift; alg-hermitian-toeplitz-general-rhs-gohberg-semencul-solve; lem-toeplitz-matrix-has-displacement-rank-at-most-two; lem-displacement-generator-update-under-scalar-schur-elimination; thm-gohberg-semencul-inverse-identity-and-cost.
- B page: ex-circulant-periodic-poisson-zero-mode; ex-hermitian-toeplitz-nonpositive-pivot-failure; ex-ar-covariance-toeplitz-forecast-solve.

Published dependency statements opened:

def-abs-value; def-autocovariance-and-sample-autocovariance; def-block-lu-factorisation; def-complex-conjugate-real-imaginary-part-and-modulus; def-cyclic-convolution-on-z-mod-n; def-matrix-product-and-identity-matrix; def-moments-variance-and-covariance; def-standard-relative-floating-point-model-and-unit-roundoff; def-strict-and-weak-stationarity-for-time-series; def-unitary-discrete-fourier-transform-on-z-mod-n; cor-complex-exponential-cartesian-form-modulus-and-eulers-identity; lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product; lem-variance-and-covariance-identities-for-random-variables; thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique; thm-complex-exponential-addition-and-real-extension; thm-complex-numbers-form-a-field; thm-durbin-levinson-solves-the-prediction-equations; thm-finite-fourier-inversion; thm-floating-point-dot-product-componentwise-and-normwise-error-bounds; thm-kernel-and-fibres-of-complex-exponential; thm-na-arbitrary-length-fft-correctness-and-cost; thm-na-computed-fft-convolution-error-bound; thm-quarter-turn-values-and-shift-formulas.

The batch 9 proof-contract file was opened. Its derivation claims and cited fact labels match all 13 current item carriers. The Gohberg–Semencul source was also checked: George Labahn and Tamir Shalom, “Inversion of Toeplitz Matrices with Only Two Standard Equations,” Theorem 1.1, PDF p. 2 (printed p. 144), [source PDF](https://cs.uwaterloo.ca/~glabahn/Papers/tamir-george-1.pdf). The PDF text extraction did not expose the theorem's matrix display, so I did not rely on it for the exact normalization. The assigned Hermitian endpoint-column identity was verified directly by the displacement calculation in thm-gohberg-semencul-inverse-identity-and-cost, Proof steps 4.1–6.1.

## Edits

- items/lem-complex-hermitian-toeplitz-reflection-recursion.md: Proof step 2.1 now records the involutive reversal identities and their action on vectors. Step 3.1 derives that the inverse of a Hermitian leading block is Hermitian, so the scalar \(g_k^*T_k^{-1}g_k\) is real before identifying it with the Schur pivot. Updated the corresponding step 2.1 and 3.1 derivation claims in the batch proof contract. No verification.judge record was present.
- items/ex-circulant-periodic-poisson-zero-mode.md: Proof step 3.2 now derives \(\omega^2=-1\) from the exponential addition law and Euler’s identity before computing the N=4 eigenvalues. Updated the step 3.2 contract claim and its finite-smoke assertion excerpt. No verification.judge record was present.

Validation for both changed items:

- node tools/tsx-run.mjs tools/reflow.mts ...: unchanged.
- node tools/tsx-run.mjs tools/precheck.mts ...: pass for each item.
- node tools/proof-layout.mjs items/lem-complex-hermitian-toeplitz-reflection-recursion.md items/ex-circulant-periodic-poisson-zero-mode.md: 2 items, 13 steps, 0 defects.

## Page verdicts

- toeplitz-circulant-and-displacement-structured-solvers (A): pass. The page summary accurately describes the DFT diagonalization, zero-padded exact-arithmetic Toeplitz product and cost, complex Hermitian bordering and Gohberg–Semencul solve, exact displacement identities, and the conditional realified residual bounds. It preserves the HPD and finite-precision caveats.
- toeplitz-circulant-and-displacement-structured-solvers-examples (B): pass. Its summary matches the three examples: the cycle-Laplacian constant zero mode and zero-sum compatibility, the indefinite Toeplitz negative-pivot branch, and the separate real covariance forecast and general-RHS solve.

## Uneditable defects and blockers

None. No findings remain for batch 9.

## Coverage note

All assigned pages and items and the direct published supplier statements needed for their claims were reviewed. This review did not re-audit every transitive proof beneath those published suppliers; no unresolved issue in the assigned claims required that deeper audit. The Gohberg–Semencul PDF's displayed formula was not machine-readable in the browser text extraction; the assigned proof's direct derivation verified the normalization independently.
