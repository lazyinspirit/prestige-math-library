# Step 3a reader report — batch 71

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader  
Scope: batch `71`

## Opened inventory

Assigned pages:

- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/bfgs-and-limited-memory-quasi-newton-methods.md` — A page; all 15 listed items opened.
- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/bfgs-and-limited-memory-quasi-newton-methods-examples.md` — B page; all 3 listed examples opened.

Assigned items, read in dependency order:

1. `def-bfgs-curvature-pair-and-update-formulas`
2. `lem-bfgs-hessian-bounds-control-gradient-and-taylor-remainder`
3. `lem-bfgs-updates-preserve-secant-symmetry-and-spd`
4. `lem-wolfe-steps-give-positive-bfgs-curvature`
5. `lem-powell-damping-gives-positive-curvature`
6. `alg-bfgs-hessian-direction-with-rounded-cholesky`
7. `alg-lbfgs-two-loop-with-curvature-filter`
8. `lem-bfgs-trace-determinant-potential-identities`
9. `alg-full-memory-bfgs-with-curvature-safeguards`
10. `lem-lbfgs-two-loop-equals-stored-updates-and-cost`
11. `thm-full-memory-bfgs-global-linear-convergence`
12. `lem-lbfgs-curvature-bounds-imply-uniform-spectrum`
13. `lem-full-memory-bfgs-dennis-more-condition`
14. `thm-lbfgs-fixed-memory-linear-convergence`
15. `thm-full-memory-bfgs-local-superlinear-convergence`
16. `ex-bfgs-secant-on-a-strongly-convex-quadratic`
17. `ex-bfgs-powell-damping-after-negative-curvature`
18. `ex-lbfgs-memory-dependent-cost`

Direct suppliers and supporting results opened to verify the definitions, proofs, procedures, and computations:

- `def-euclidean-inner-product`, `def-matrix-product-and-identity-matrix`, `def-jacobian-matrix-and-gradient`, `def-hessian-and-euclidean-critical-point`, `def-c-one-map-and-local-inverse`, `def-wolfe-and-strong-wolfe-conditions`, `def-natural-logarithm`, `def-determinant-of-a-square-matrix`, `def-characteristic-polynomial-of-an-operator`, `def-characteristic-polynomial-of-a-matrix`, `def-trace-of-an-endomorphism`, `def-determinant-of-a-linear-operator`, `def-forward-and-back-substitution-for-triangular-systems`, `def-cholesky-factorisation-with-positive-diagonal`, `def-triangular-and-diagonal-matrices-over-a-commutative-ring`, `def-sesquilinear-and-hermitian-forms-over-a-field-with-involution`, `def-standard-relative-floating-point-model-and-unit-roundoff`, and `def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma`.
- `thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-continuous-partial-derivatives-imply-total-differentiability`, `thm-chain-rule-for-total-derivatives`, `thm-clairaut-schwarz-mixed-partials`, `thm-of-square-roots`, `thm-determinant-multiplicative`, `thm-determinant-of-a-triangular-matrix`, `thm-logarithm-derivative-and-integral`, `thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique`, `thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost`, `thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost`, and `thm-operator-invertible-iff-determinant-nonzero`.
- `cor-vector-valued-ftc-and-lipschitz-bound`, `cor-mean-value-theorem`, `cor-second-order-taylor-expansion-with-the-hessian`, `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, `cor-uniform-descent-angle-implies-gradient-vanishing`, `prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases`, `thm-determinant-is-product-of-eigenvalues`, and `thm-trace-is-sum-of-eigenvalues`.
- Current-run batch 1 suppliers: `alg-rounded-cholesky-with-failure-status` and `def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma`.
- Current-run batch 58 suppliers: `def-wolfe-and-strong-wolfe-conditions`, `alg-bracketing-zoom-strong-wolfe-search`, `lem-wolfe-step-lower-bound-from-the-descent-angle`, `thm-zoutendijk-summability-for-wolfe-steps`, and `cor-uniform-descent-angle-implies-gradient-vanishing`.

I read the batch 71 proof contracts and checked their quoted sources, proof-step mappings, and boundary records against the current items and supplier sections. The owner decisions and contract risk classifications were not treated as verdicts.

## Review and edits

The BFGS update, secant, symmetry, positive-definiteness, Wolfe-curvature, and Powell-damping arguments check out under their stated positive-curvature hypotheses. The trace and determinant identities and the matrix-potential estimate also check out. I checked the global BFGS rate argument, the fixed-memory spectral bounds and L-BFGS rate, and the Dennis–Moré and unit-step argument for the local superlinear result. The three examples’ arithmetic and their stated Wolfe/damping interpretations are consistent.

I repaired `alg-lbfgs-two-loop-with-curvature-filter`. Its definition had finite-arithmetic failure branches without a specified arithmetic model and did not give integer domains for its trial and iteration budgets. It now specifies exact real arithmetic and nonnegative integer budgets `E`, `Z`, and `K`; it states why the newest-pair scale denominator is positive and removes the undefined arithmetic-failure branches. The recursion, positive-curvature filter, and downstream mathematical claims are unchanged. I updated the four batch 71 proof-contract excerpts that quote this algorithm’s Definition.

For the convergence arguments, I compared the full proof structure with Nocedal and Wright, *Numerical Optimization*, second edition, Chapter 6 §6.4: Theorem 6.5 and proof on printed pages 154–156, and Theorem 6.6 and proof on printed pages 157–160. I also checked the local item’s extra Taylor estimates and the strong-Wolfe unit-trial acceptance argument directly. [Source PDF](https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf).

Required checks after the repair:

- `node tools/tsx-run.mjs tools/reflow.mts items/alg-lbfgs-two-loop-with-curvature-filter.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/alg-lbfgs-two-loop-with-curvature-filter.md` — 0 checked, 0 failing.
- `node tools/proof-layout.mjs items/alg-lbfgs-two-loop-with-curvature-filter.md` — 1 item, 0 steps, 0 defects.

No stale `verification.judge` record existed on the changed algorithm. Its proof status remains `n/a` because it has no phase proof.

## Page verdicts

- **A page `bfgs-and-limited-memory-quasi-newton-methods`: pass after the algorithm repair.** Its summary accurately distinguishes exact-arithmetic convergence claims from the rounded Cholesky direction procedure and its failure status.
- **B page `bfgs-and-limited-memory-quasi-newton-methods-examples`: pass.** Its summary matches the three examples and correctly identifies the negative-curvature trial as a Wolfe-rejected trial.

## Uneditable defects and blockers

No confirmed defect remains in an uneditable subject. I found no defect in the reviewed batch 1 or batch 58 suppliers. No proposed withdrawal is present. There is no batch 71 blocker.

The run remained active at the final status check with no worker in flight. Batch 71 was still listed as missing from `3a-read`; the unrelated run-level blocker was `3a-split` failing three times on batch 70.

## Coverage note

All assigned pages and items, their direct manifest dependencies, and the additional supporting results listed above were opened. I did not conduct a whole-corpus audit of unrelated transitive prerequisites of those suppliers.
