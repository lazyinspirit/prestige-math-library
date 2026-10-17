# Step 3a reader report — batch 28

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader (`reader-28`)

## Opened inventory

Assigned pages:

- `library/numerical-differential-equations-and-stochastic-dynamics/global-ode-and-density-error.md`
- `library/numerical-differential-equations-and-stochastic-dynamics/global-ode-and-density-error-examples.md`

Assigned items, in the manifest's supplier-to-consumer order:

- `lem-discrete-one-step-error-recurrence-bound`
- `thm-continuous-flow-log-density-equation`
- `thm-global-error-from-one-step-defect-and-stability`
- `thm-divergence-integral-error-with-separate-quadrature`
- `cor-global-log-density-error-from-state-and-quadrature`
- `thm-euler-global-state-and-log-density-error`
- `ex-euler-linear-flow-exact-log-density-update`
- `ex-exact-state-with-inexact-log-density-quadrature`

Dependency statements used by these claims were opened in the current library:

- Recurrences, sums, powers, and exponential: `def-finite-sum`, `def-integer-power`, `def-natural-logarithm`, `def-real-power`, `def-real-exponential-function-and-e`, `lem-exponential-dominates-one-plus-x`, `lem-finite-sum-laws`, `lem-power-monotone`, `thm-real-power-laws`, `thm-exponential-addition-formula`, `thm-exponential-is-strictly-increasing`, `cor-exponential-reciprocal-and-positivity`, `thm-derivative-of-exponential`, `thm-natural-logarithm-laws`, `lem-derivative-of-a-power`, and `cor-mean-value-theorem`.
- ODE and state-error bounds: `def-first-order-ode-initial-value-problem-and-solution`, `def-one-step-ode-method-local-defect-order-and-stability`, `def-euclidean-inner-product`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation`, `cor-vector-valued-ftc-and-lipschitz-bound`, `thm-mean-value-inequality-for-total-derivatives`, and `thm-norm-inequality-for-the-vector-valued-integral`.
- Flow density and Jacobian: `def-countable-choice`, `def-measure-with-density`, `def-determinant-of-a-square-matrix`, `cor-determinant-is-a-polynomial-in-the-matrix-entries`, `thm-algebra-of-continuous-functions`, `thm-algebra-of-derivatives`, `thm-leibniz-determinant-is-alternating-multilinear-and-normalized`, `thm-real-square-matrix-invertible-iff-determinant-nonzero`, `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`, `thm-c1-dependence-of-solutions-on-initial-data`, `thm-chain-rule-for-total-derivatives`, `thm-intermediate-value`, and `thm-logarithm-derivative-and-integral`.

The source locators were checked against [Chen et al., *Neural Ordinary Differential Equations*](https://arxiv.org/pdf/1806.07366), Theorem 1 (PDF p. 3) and Appendix A (PDF pp. 13–14); [Papamakarios et al., *Normalizing Flows for Probabilistic Modeling and Inference*](https://jmlr.org/papers/volume22/19-1028/19-1028.pdf), §4.1, equations (78)–(81) (PDF pp. 30–31) and §4.2.1 (PDF p. 32); and [Embree, *Lecture Notes on Numerical Analysis*](https://personal.math.vt.edu/embree/math5466/nanotes.pdf), Lecture 34, §5.3 (PDF pp. 190–192). These passages support the continuous log-density equation, its separate integration, and the one-step error recurrence. The Hairer–Wanner PDF URL in the item sources did not render in the browser; the local proofs and Embree passage were checked instead.

## Review and edits

1. In `lem-discrete-one-step-error-recurrence-bound`, Statement and Proof step 2.1, the original `$p\ge1$` left the power domain unspecified although the statement uses `$h^p$`. I made the stated range explicit as real `p\ge1`, required `h>0`, and added `def-real-power`, `thm-real-power-laws`, and `def-natural-logarithm` to `deps`. Facts [F8] and step 2.1 now state and cite the identity `$h^{p+1}=h^ph$` used to factor the forcing term. This keeps the full real-order claim. The proof contract now cites those sources, and the global-error contract's quoted recurrence statement was refreshed. `reflow` reported unchanged; `precheck` passed.

2. In `thm-divergence-integral-error-with-separate-quadrature`, Statement, Facts [F3], and Proof step 2.1, the initial scalar-error term `$h^r$` had an undeclared exponent domain and no real-power definition. I stated `r\in\mathbb R`, required `h>0`, made the imported state-method order explicit as a positive integer, and added `def-real-power` to `deps`. The proof contract now records [F3], and the corollary contract's quoted source statement was refreshed. `reflow` reported unchanged; `precheck` passed.

No `verification.judge` record was present on either repaired item. No A-page prose was changed. All reviewed proofs and examples support their stated bounds and computations; the Countable Choice assumption is used through the cited change-of-variables theorem as stated.

## Unedited defects

None found in the assigned items, pages, or dependency statements consulted.

## Page verdicts

- `global-ode-and-density-error` (A): **pass**. Its summary accurately states the compact-tube condition, separate state and divergence-quadrature contributions, Countable Choice use for density identification, and the Euler result's scope.
- `global-ode-and-density-error-examples` (B): **pass**. Its summary matches both examples: a nonzero Euler state error with exact constant-divergence update, and exact zero states with left-rule error `h/2` removed by midpoint quadrature.

## Blocker and coverage limitation

The assignment manifest `research/numerical-optimization-dynamics-2026-10-16-batch-28.pages.json` still has the pre-edit dependency arrays. The repaired lemma now adds `def-natural-logarithm`, `def-real-power`, and `thm-real-power-laws`; the divergence theorem adds `def-real-power`. Editing the manifest was outside this reader's item/A-page repair scope, so the owner must reconcile those arrays before a manifest-dependency gate.

The assigned carriers were opened in their manifest order, then their supporting dependency statements were checked. This did not meet the strict supplier-before-consumer file-reading order for external dependencies. I checked the relevant supplier statements and exact proof uses, but did not independently re-audit every external supplier's full proof. The Hairer–Wanner PDF parser limitation is noted above; the assigned local proofs remain complete and were reviewed directly.
