# Step 3a reader report — batch 84

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader `reader-84`  
Scope: batch `84`

## Opened inventory

Assigned pages:

- A page: `gauss-newton-and-levenberg-marquardt-methods`.
- B page: `gauss-newton-and-levenberg-marquardt-methods-examples`.

Required prerequisite pages:

- `finite-precision-direct-factorizations`.
- `nonlinear-equations-and-newton-methods`.
- `trust-region-and-cubic-regularization-methods`.

Assigned A-page items, reviewed in their in-batch dependency levels:

- `thm-nonlinear-least-squares-gradient-and-hessian`.
- `lem-nonlinear-residual-linearization-error-under-lipschitz-jacobian`.
- `lem-levenberg-marquardt-step-is-scaled-trust-region-minimizer`.
- `alg-gauss-newton-qr-svd-step-with-rank-safeguard`.
- `alg-safeguarded-levenberg-marquardt`.
- `thm-gauss-newton-local-linear-contraction`.
- `thm-gauss-newton-zero-residual-quadratic-convergence`.
- `lem-levenberg-marquardt-large-damping-forces-sufficient-decrease`.
- `thm-safeguarded-levenberg-marquardt-global-stationarity`.

Assigned B-page examples:

- `ex-exponential-kinetics-gauss-newton-fit`.
- `ex-rank-deficient-identifiability-and-lm-step`.
- `ex-nonzero-residual-gauss-newton-is-only-linear`.

Supporting dependency items opened:

- Calculus, differentiation, and integration: `def-ck-and-multi-index-notation-in-several-variables`; `def-c-one-map-and-local-inverse`; `def-euclidean-inner-product`; `def-hessian-and-euclidean-critical-point`; `def-jacobian-matrix-and-gradient`; `thm-continuous-partial-derivatives-imply-total-differentiability`; `thm-algebra-of-derivatives`; `thm-algebra-of-continuous-functions`; `thm-chain-rule-for-total-derivatives`; `thm-total-differentiability-gives-a-local-linear-bound-and-continuity`; `def-vector-valued-derivative-and-integral`; `cor-vector-valued-ftc-and-lipschitz-bound`; `thm-continuous-implies-integrable`; `thm-monotonicity-of-the-integral`; `thm-newton-leibniz-with-interior-derivative`; `thm-norm-inequality-for-the-vector-valued-integral`.
- Matrix and numerical linear algebra: `def-matrix-product-and-identity-matrix`; `def-induced-matrix-p-norm`; `thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized`; `def-forward-and-back-substitution-for-triangular-systems`; `def-full-reduced-and-column-pivoted-computational-qr-factorisations`; `def-truncated-singular-value-pseudoinverse-at-a-declared-threshold`; `thm-reduced-qr-solves-full-column-rank-least-squares-without-squaring-the-condition-number`; `thm-singular-value-decomposition`; `thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison`; `thm-cauchy-schwarz-and-the-euclidean-norm`; `thm-of-square-roots`.
- Cross-batch numerical and trust-region suppliers: `alg-scaled-householder-reflector-formation-and-application`; `def-householder-reflector`; `def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma`; `lem-scaled-real-householder-step-termination-and-status`; `lem-scaled-householder-step-meets-local-backward-error-premise`; `thm-scaled-householder-qr-backward-stability`; `thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts`; `thm-computed-full-rank-least-squares-backward-stability`; `lem-rounded-triangular-substitution-componentwise-backward-error`; `lem-product-of-one-plus-deltas-gives-theta-n`; `lem-vector-newton-correction-error-under-lipschitz-jacobian`; `def-trust-region-quadratic-model-and-ratio`; `lem-positive-definite-model-has-unique-newton-step`.
- Example suppliers: `cor-exponential-reciprocal-and-positivity`; `thm-derivative-of-exponential`.

Run evidence consulted as context, not as a verdict: `research/numerical-optimization-dynamics-2026-10-16-batch-84.notes.md`, `research/numerical-optimization-dynamics-2026-10-16-batch-84.cross-batch-dependencies.json`, and the assigned proof-contract file.

## Source evidence

I opened the cited numerical-optimization sources at the relevant passages:

- [Nocedal and Wright, *Numerical Optimization*, second edition](https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf): Chapter 10, equations (10.4)–(10.5) for the least-squares gradient and Hessian; §10.3, Theorem 10.1 and equation (10.30) for Gauss–Newton convergence assumptions and the residual-curvature term; Lemma 10.2, equations (10.34)–(10.35), for the trust-region and augmented least-squares formulations of LM; and Theorem 10.3 for a global stationarity result under its stated level-set and decrease hypotheses.
- [Cornell CS 4220, “Gauss-Newton and nonlinear least squares,” 10 April 2026](https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-04-10.html): “An actual bound for Gauss-Newton” gives the residual-dependent linear error estimate and zero-residual special case; “Levenberg-Marquardt” gives the regularized least-squares equation and scaling discussion.

The assigned items prove their stronger local constants and finite-attempt statements directly. The external statements were used to check the cited mathematical context and were not treated as substitutes for those proofs.

## Repairs and evidence

- `alg-gauss-newton-qr-svd-step-with-rank-safeguard`, Definition and proof steps 1.1 and 3.1: specified the computed SVD dot-product and matrix-vector schedule, failure return, factor dimensions, interval branch order, and the distinction between a wholly below-threshold interval and a threshold-straddling interval. The unsupported-shape return now occurs before a factorization report is requested. The computed QR report is bound to the input pair and retains its ordered reflector records for the conditional exact-orthogonal-product stability interface. Evidence: the opened SVD, pseudoinverse, floating-point, Householder, QR, and computed least-squares supplier statements and proofs.
- `alg-safeguarded-levenberg-marquardt`, Definition and proof step 1.2: added the needed `C^1` and `J=Dr` input condition for a “stationary” return. The objective gradient is derived under that condition by expanding the squared norm and applying the total-derivative chain rule. The computed mode now defines its dot-product schedule and rounding/failure semantics. Evidence: the opened `C^1`, Jacobian, Euclidean inner-product, chain-rule, and operationwise floating-point definitions and theorems.
- `lem-levenberg-marquardt-large-damping-forces-sufficient-decrease`, Statement and proof step 1.1: removed the `C^2`-only identity `\nabla\phi=J^Tr` from a `C^1` lemma. The lemma now uses `g=J^Tr` directly; its damping and decrease argument is algebraic and no longer cites the stronger theorem. The exact trial interface states that its augmented QR is supplied.
- `thm-safeguarded-levenberg-marquardt-global-stationarity`, Facts & Assumptions and proof steps 1.1 and 4.1: replaced the inapplicable `C^2` citation with a `C^1` chain-rule derivation and justified continuity of `J^Tr` from the `C^1` and continuity-algebra suppliers. The exact run hypothesis now includes the supplied QR factorization for every augmented matrix.
- `thm-gauss-newton-local-linear-contraction`, Statement: made the exact reduced QR input to each exact algorithm invocation explicit under the full-column-rank hypothesis.
- `thm-gauss-newton-zero-residual-quadratic-convergence`, Statement and proof step 4.1: restricted the `C=0` one-step conclusion to `x_0\in B`, where the proved error estimate applies, and made the exact QR input explicit.
- `ex-exponential-kinetics-gauss-newton-fit`, Verification step 2.1: supplied an exact reduced QR factorization of the full-rank Jacobian used by the exact algorithm branch.
- `ex-rank-deficient-identifiability-and-lm-step`, Verification steps 1.1 and 2.1: supplied exact QR factors for the rank-deficient Jacobian and for the augmented LM matrix, respectively, so both exact algorithm calls meet their factorization input requirements.
- `ex-nonzero-residual-gauss-newton-is-only-linear`, Verification step 2.1: supplied an exact reduced QR factorization for the scalar Jacobian at every iterate considered.

The nine changed items had no `verification.judge` records to remove. Their proof-contract citations and derivations were regenerated; the five direct consumers of the QR procedure were regenerated again after that procedure's final interface edit. Strict proof-contract validation passed for all nine changed items with 0 errors and 0 warnings.

Validation after the final edits:

- Reflow: all nine changed items checked; no additional changes were required.
- Precheck: 9/9 passed.
- Final proof-layout command: 9 items, 32 proof steps, 0 defects.

## Uneditable defects

None found. The cross-batch Householder, computed least-squares, Newton-remainder, and trust-region suppliers were checked at the interfaces used here; I found no defect requiring a routed finding.

## Page verdicts

- `gauss-newton-and-levenberg-marquardt-methods` (A): sound after the listed repairs. Its summaries of the derivative formulas, rectangular remainder, QR/SVD rank branches, local convergence conclusions, and conditional LM stationarity result match the reviewed items.
- `gauss-newton-and-levenberg-marquardt-methods-examples` (B): sound after the exact QR inputs were supplied. The three examples’ exact fits, rank distinction, accepted LM trial, and nonzero-residual linear rate are supported by their calculations.

## Blocker and coverage note

No batch-84 blocker remains. The run is still active and currently has no blocker or in-flight dispatch; batch 84 remains listed as awaiting downstream read/split routing. The earlier run-status blocker for batch 70 was no longer present at the final status check.

Chronology limitation: I opened the two dependency-level-0 assigned calculus items before their published direct suppliers. I then read those supplier items before proceeding to the higher-level in-run consumers. All assigned pages and items and the direct supplier claims needed for the reviewed arguments were subsequently inspected, but this was not strictly source-first at the initial opening step.
