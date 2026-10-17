# Step 3a reader report — batch 17

Run: `numerical-optimization-dynamics-2026-10-16`  
Batch: `17`  
Role: `reader-17`

## Opened inventory

Opened the assigned A page [computed-singular-values-and-rank-revealing-factorizations](../library/numerical-linear-algebra-and-approximation/computed-singular-values-and-rank-revealing-factorizations.md) and B page [computed-singular-values-and-rank-revealing-factorizations-examples](../library/numerical-linear-algebra-and-approximation/computed-singular-values-and-rank-revealing-factorizations-examples.md), plus all 21 items in the current batch manifest.

The A-page items opened were: `alg-householder-bidiagonalization`, `alg-strong-rank-revealing-qr-with-finite-swaps`, `lem-singular-value-product-bound`, `lem-singular-values-lipschitz-in-spectral-norm`, `prop-spectral-numerical-rank-counts-singular-values-over-real-or-complex`, `alg-implicit-shifted-bidiagonal-qr-with-deflation`, `lem-exact-householder-bidiagonal-reduction`, `lem-strong-rrqr-column-swap-volume-ratio`, `thm-bidiagonal-singular-values-relative-under-componentwise-perturbations`, `thm-strong-rrqr-singular-value-comparisons`, `alg-rank-thresholded-least-squares-by-svd`, `lem-implicit-bidiagonal-qr-bulge-chase-unitary-equivalence`, `thm-strong-rrqr-swap-rule-terminates`, `thm-bidiagonal-svd-backward-error-under-local-stability`, `thm-svd-thresholded-least-squares-minimum-norm-model`, `cor-computed-singular-values-absolute-error-from-backward-stability`, `alg-scaled-complex-householder-and-givens-updates`, and `lem-scaled-complex-householder-and-givens-local-backward-error`.

The B-page items opened were: `ex-nearly-rank-deficient-design-matrix`, `cex-classical-column-pivoted-qr-is-not-strong-with-factor-one`, and `ex-absolute-versus-relative-singular-value-error`.

Reviewed the batch coverage, cross-batch record, notes and all 21 proof-contract entries as evidence. Opened every direct item supplier in the manifest: `def-householder-reflector`, `thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries`, `def-frobenius-matrix-norm`, `def-full-reduced-and-column-pivoted-computational-qr-factorisations`, `thm-exact-column-pivoted-qr-of-a-rank-r-matrix-has-an-invertible-leading-block-and-zero-trailing-block`, `thm-eckart-young-best-rank-k-approximation`, `def-operator-norm-on-a-finite-dimensional-inner-product-space`, `def-numerical-rank-relative-to-a-norm-scale-and-tolerance`, `cor-rank-equals-number-of-nonzero-singular-values`, `def-real-and-complex-givens-transformations`, `thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison`, `def-truncated-singular-value-pseudoinverse-at-a-declared-threshold`, `def-inner-product-norm`, `def-moore-penrose-pseudoinverse`, `thm-moore-penrose-pseudoinverse-exists-and-is-unique`, `thm-singular-value-decomposition`, `thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution`, `cor-triangle-inequality-for-inner-product-norm`, `def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma` (current run batch 1), and `lem-product-of-one-plus-deltas-gives-theta-n`. Also opened the operationwise model's base definition, `def-standard-relative-floating-point-model-and-unit-roundoff`, and the unitary definition used by the published transformation theorem, `def-linear-isometry-and-orthogonal-or-unitary-operator`.

Opened the page-level prerequisites `direct-matrix-factorisations-lu-cholesky-and-qr`, `the-spectral-theorem-and-singular-value-decomposition`, and `finite-precision-direct-factorizations`, plus the real-only published proposition cited from the numerical-rank definition. The run is at Step 3a reader; batch artifacts were treated as evidence, not verdicts.

## Mathematical review and source evidence

- The singular-value product, Lipschitz and spectral numerical-rank proofs preserve their index ranges and the strict `> tau` threshold. The assigned real/complex numerical-rank proposition proves the complex case directly.
- The strong-RRQR score is the combined coefficient/residual score. Gu and Eisenstat, *Efficient Algorithms for Computing a Strong Rank-Revealing QR Factorization*, §3 Lemma 3.1 and Theorem 3.2 (PDF pp. 5–6), give the selected-volume ratio and the block singular-value comparisons from that combined score. The volume-ratio and comparison proofs in this batch match those identities; the termination proof uses the strict volume increase and finite number of selected subsets.
- Lin, *Lecture Notes of Matrix Computations*, Algorithm 3.2.6 (PDF p. 65), gives tall Householder bidiagonal reduction by alternating left and right transformations. Its §6.3 (PDF pp. 239–241) describes direct implicit shifted QR on the bidiagonal matrix, alternating Givens rotations for the bulge chase, and the zero-diagonal split. The assigned exact reduction and bulge-chase lemmas supply the exact identities used by the algorithms.
- Demmel and Kahan, *Accurate Singular Values of Bidiagonal Matrices*, §2 (PDF pp. 2–4), treats componentwise relative perturbations of bidiagonal entries and the corresponding relative singular-value guarantee; its §2 Theorem 3 (PDF p. 4) states the absolute singular-value perturbation bound. The assigned relative theorem proves its more conservative `q^(2n)` bound by explicit invertible diagonal row/column scaling. The absolute-error corollary keeps the componentwise-relative hypothesis separate from the normwise backward-error theorem.
- The pseudoinverse and least-squares claims are checked against the opened SVD, truncated-pseudoinverse, Moore–Penrose and minimum-norm least-squares statements. The examples' finite matrix calculations and thresholds are consistent with their hypotheses.

One published citation issue remains outside edit scope; it is recorded in the findings JSON below. Specifically, the published numerical-rank definition admits real and complex matrices, while its spectral-specialisation remark links a proposition whose statement is restricted to real matrices. The assigned batch proposition independently proves the real/complex version.

The exact location is the “The choice of norm is part of the data” remark in `items/def-numerical-rank-relative-to-a-norm-scale-and-tolerance.md:58`, which links `prop-spectral-numerical-rank-counts-singular-values-above-the-declared-threshold`. That published proposition's Statement specifies $A\in M_{m\times n}(\mathbb R)$, so the citation does not support the complex case permitted by the definition.

The batch author notes describe an earlier inventory (16 A items, four algorithms, maximum level 4). The current page manifest and files contain 18 A items, five algorithms, and an item at level 6. I followed the current manifest and current carriers.

## Edits

1. `alg-householder-bidiagonalization`: changed the definition to return the leading work block and stored factors without embedding the exact bidiagonal relation and equivalence as algorithmic properties; its exact result remains in `lem-exact-householder-bidiagonal-reduction`. Explicitly propagated helper range failures, invalid operations and out-of-normal-range intermediates. Reviewed its consumers: the exact reduction lemma, implicit QR procedure, thresholded least-squares procedure, and aggregate backward-error theorem.
2. `alg-strong-rank-revealing-qr-with-finite-swaps`: removed the termination-cap, exact comparison and verified-certificate comparison guarantees from `## Definition`, where they duplicated results proved by `thm-strong-rrqr-swap-rule-terminates` and `thm-strong-rrqr-singular-value-comparisons`. Added a deterministic initial CPQR tie rule by original column index, matching the assigned counterexample. Reviewed the volume-ratio lemma, comparison theorem, termination theorem and counterexample.
3. `alg-implicit-shifted-bidiagonal-qr-with-deflation`: specified diagonal-modulus candidates from the current work matrix on `budget-exhausted`, retained the estimate-only caveat, and removed the exact SVD phase-correctness claim from the procedure definition. Added `justified_by` links for the exact reduction and bulge-chase results needed to establish the composed work-matrix shape. Reviewed its bulge-chase lemma, thresholded least-squares procedure, aggregate backward-error theorem and absolute-error corollary.
4. `alg-rank-thresholded-least-squares-by-svd`: separated the rank threshold from deflation by calling bidiagonal QR with deflation tolerance zero and no extra sparsity cleanup; this prevents a nonzero exact deflation perturbation from being treated as an exact SVD of the original matrix. Specified that the exact-mode factor record comes from the returned transformation products and diagonal candidates, and added `justified_by` links to the exact reduction and bulge-chase results. Reviewed `thm-svd-thresholded-least-squares-minimum-norm-model`.

Updated the corresponding batch proof-contract entries for the four edited algorithms. None of the four had a `verification.judge` record to remove.

## Validation

- Reflow: all four changed item files reported unchanged.
- Precheck: all four reported `0 checked, 0 failing — all clean` (algorithms have no phase proof).
- Final proof-layout command on all four changed item paths: `proof-layout: 4 items, 0 steps, 0 defects`.
- No broader test suite or gate was run.

## Page verdicts and blocker

- A page `computed-singular-values-and-rank-revealing-factorizations`: reviewed; assigned item mathematics is supported, and the four algorithm-definition repairs are recorded above. One published dependency citation mismatch remains uneditable and is routed in the findings JSON.
- B page `computed-singular-values-and-rank-revealing-factorizations-examples`: reviewed; all three examples/counterexamples check out, with no remaining defect.
- Blocker: none for this reader task. The published citation issue remains for owner routing.
