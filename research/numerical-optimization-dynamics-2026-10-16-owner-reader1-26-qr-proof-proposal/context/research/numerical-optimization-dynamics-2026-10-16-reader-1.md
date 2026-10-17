# Step 3a reader report — batch 1

Run: `numerical-optimization-dynamics-2026-10-16`  
Reader: `reader-1`  
Review date: 2026-10-17

## Opened inventory

Read the batch-1 manifest, reader brief, batch notes, coverage metadata, cross-batch dependency file (empty), and proof contracts as evidence only. The current manifest assigns 21 A-page items and six B-page examples.

Assigned pages:

- `library/numerical-linear-algebra-and-approximation/finite-precision-direct-factorizations.md`
- `library/numerical-linear-algebra-and-approximation/finite-precision-direct-factorizations-examples.md`

Assigned A items:

- `def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma`
- `alg-balanced-pairwise-summation`
- `alg-two-sum-error-free-transform`
- `alg-two-product-fma-error-free-transform`
- `alg-kahan-compensated-summation`
- `alg-neumaier-compensated-summation`
- `alg-rounded-cholesky-with-failure-status`
- `alg-scaled-householder-reflector-formation-and-application`
- `alg-bounded-mixed-precision-iterative-refinement`
- `thm-balanced-pairwise-summation-error-bound`
- `lem-binary-rounding-grid-and-ordered-two-sum`
- `thm-two-sum-error-free-transform`
- `thm-two-product-fma-error-free-transform`
- `thm-kahan-and-neumaier-finite-error-identities`
- `thm-rounded-cholesky-componentwise-and-normwise-backward-error`
- `lem-scaled-householder-step-meets-local-backward-error-premise`
- `thm-mixed-precision-refinement-error-recurrence-and-floor`
- `thm-scaled-householder-qr-backward-stability`
- `thm-computed-full-rank-least-squares-backward-stability`
- `lem-rounded-triangular-substitution-componentwise-backward-error`
- `lem-rounded-linear-and-normal-residual-certificates`

Assigned B examples:

- `ex-subnormal-and-overflow-range-failure`
- `ex-neumaier-recovers-low-order-term-after-cancellation`
- `ex-rounded-cholesky-two-by-two-residual`
- `ex-two-sum-recovers-a-rounded-away-low-part`
- `ex-full-rank-least-squares-normal-equations-versus-qr`
- `ex-ill-conditioned-design-stability-versus-forward-error`

Opened all five manifest-required prerequisite pages: `direct-matrix-factorisations-lu-cholesky-and-qr`, `matrix-norms-condition-numbers-and-numerical-stability`, `the-moore-penrose-pseudoinverse-and-regularised-least-squares`, `the-spectral-theorem-and-singular-value-decomposition`, and `hilbert-space-geometry-and-riesz-representation`.

Opened the 20 direct external item suppliers: `def-cholesky-factorisation-with-positive-diagonal`, `def-condition-number-of-a-nonsingular-linear-system`, `def-forward-and-back-substitution-for-triangular-systems`, `def-frobenius-matrix-norm`, `def-full-reduced-and-column-pivoted-computational-qr-factorisations`, `def-householder-reflector`, `def-induced-matrix-p-norm`, `def-operator-norm-on-a-finite-dimensional-inner-product-space`, `def-standard-relative-floating-point-model-and-unit-roundoff`, `lem-product-of-one-plus-deltas-gives-theta-n`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-cauchy-schwarz-in-an-inner-product-space`, `thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique`, `thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost`, `thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries`, `thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized`, `thm-of-archimedean`, `thm-reduced-qr-solves-full-column-rank-least-squares-without-squaring-the-condition-number`, `thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison`, and `thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts`. Also opened `thm-operator-norm-is-the-largest-singular-value`, `thm-finite-dimensional-orthogonal-decomposition`, and `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases` for the exact support steps noted below.

For the binary arithmetic and TwoSum scope, I opened [Shewchuk, *Adaptive Precision Floating-Point Arithmetic and Fast Robust Geometric Predicates*](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf), §§2.1–2.3, especially Theorem 7. Section 2.1 specifies normalized p-bit binary significands; §§2.2–2.3 state and prove the radix-two TwoSum result under exact rounding. The local proof supplies its own finite-range and p=2 boundary cases. I did not claim to have read the other literature texts listed in the batch coverage metadata.

## Edits and evidence

- `items/def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma.md`: specified the finite p-bit binary normal grid, exponent interval, normal endpoints, ties-to-even parity rule, and separate format parameters at each mixed precision. The old text imposed ties-to-even without defining a significand parity for the generic finite representable set inherited from its dependency. Shewchuk §§2.1–2.2 gives the exact binary-format convention. Added that source to the item references.
- `items/alg-scaled-householder-reflector-formation-and-application.md`: bound `\mathbb F` explicitly to `\mathbb R` or `\mathbb C`, made the active column real and the trailing block field-valued, specified the separate block shape, and stated that the real reflector acts unitarily on complex trailing blocks. The procedure uses `sign(x_1)` and a transpose, while its local backward-error result is stated for real matrices.
- `items/alg-kahan-compensated-summation.md` and `items/alg-neumaier-compensated-summation.md`: stated the finite input length as `n\ge0`, matching the theorems' explicit empty-input branch and initialized-sum behavior.
- `items/alg-two-product-fma-error-free-transform.md`: changed the title to describe product/residual computation without implying that every successful FMA residual is exact. The algorithm and theorem only guarantee exact recovery when the exact residual is zero or representable as a normal number.
- `items/lem-scaled-householder-step-meets-local-backward-error-premise.md`: specified that the separately applied block in the bound is real, matching the real-matrix statement and proof.
- `library/numerical-linear-algebra-and-approximation/finite-precision-direct-factorizations.md`: replaced the broad “error-free product transforms” phrase and stated the TwoProduct residual representability condition.
- Updated the batch-1 proof-contract quotations for all 24 citations to the changed Definition/Statement sections and refreshed the relevant boundary descriptions. No changed item contained a `verification.judge` record to remove.

All six changed item paths were reflowed (each reported unchanged) and prechecked: the operation-model definition reported 0 checked and 0 failing; the other five each reported 1 checked and 0 failing. One final batched proof-layout run covered the six changed paths: 6 items, 13 proof steps, 0 defects.

## Unedited findings

1. Published dependency `thm-reduced-qr-solves-full-column-rank-least-squares-without-squaring-the-condition-number`, Proof 1.1: the proof says to extend `\widehat Q`'s orthonormal columns to an orthogonal basis but gives no construction or citation in its listed facts. The transitive dependency closure contains `thm-finite-dimensional-orthogonal-decomposition`, but this proof step does not invoke it. Cite the finite-dimensional orthogonal-complement/Gram–Schmidt result and state the completion. This is a short, nonfatal proof omission. Assigned consumer: `thm-computed-full-rank-least-squares-backward-stability`.

2. Published dependency `thm-reduced-qr-solves-full-column-rank-least-squares-without-squaring-the-condition-number`, Proof 2.1: the proof asserts that full column rank makes the upper-triangular `\widehat R` have nonzero diagonal without showing the implication. From `A=\widehat Q\widehat R` and `\widehat Q^{\mathsf T}\widehat Q=I`, one gets `\ker\widehat R=\ker A=\{0\}`, then triangularity gives nonzero diagonal entries. Add this short argument. This omission is nonfatal. Assigned consumer: `thm-computed-full-rank-least-squares-backward-stability`.

3. Published dependency `thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts`, Proof 1.1: the proof applies the nonzero-vector annihilation result to every active column subvector but gives no zero-subvector branch. When that subvector is zero, the step should be skipped because the targeted entries are already zero. Add this branch. This omission is nonfatal. Assigned consumer: `thm-scaled-householder-qr-backward-stability`.

These are the only findings in the JSON artifact. They are published dependencies and were outside the reader's edit authority.

## Page verdicts

- `finite-precision-direct-factorizations`: the current 21-item roster and summary match the reviewed claims after the TwoProduct caveat was made explicit. Verdict: pass with the three nonfatal published dependency proof omissions above (two in the exact least-squares supplier and one in the general QR construction supplier).
- `finite-precision-direct-factorizations-examples`: the six examples' arithmetic and stated caveats check out, including the binary64 midpoint, Cholesky residual, normal-equations pivot loss, and forward-sensitivity computations. Verdict: pass.

## Blockers and coverage limits

No blocker prevented review of batch 1. The autopilot status snapshot read during this review separately reported `3a-split` blocked after `split-6 failed 3x` for batch 6; that batch is outside this assignment and was not inspected or changed.

I reviewed all assigned items and pages, the five page prerequisites, all 20 direct external item suppliers, and the three additional support results listed above. I did not independently audit the full transitive published dependency closure or the other literature texts in the batch coverage metadata. The report and JSON do not claim that broader coverage.
