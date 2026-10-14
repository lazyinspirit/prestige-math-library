# Step 3a reader report — batch 25

Run: `mathematical-statistics-foundations-37`  
Batch: `25`  
Run status checked: active at `3a-read`; no blocker.

## Opened inventory

### Assigned pages

- `library/mathematical-statistics/nonparametric-density-estimation-and-kernels.md`
- `library/mathematical-statistics/nonparametric-density-estimation-and-kernels-examples.md`

### Assigned items

- `def-density-target-and-kernel-density-estimator`
- `lem-kde-evaluation-is-a-measurable-statistic`
- `lem-kde-jointly-measurable-in-sample-and-evaluation-point`
- `lem-nonnegative-kde-integrates-to-one`
- `lem-c2-density-with-bounded-hessian-is-bounded`
- `lem-second-order-kernel-convolution-l2-bias-bound`
- `thm-kde-pointwise-second-order-bias`
- `thm-kde-pointwise-variance`
- `thm-kde-global-mise-upper-rate`
- `ex-gaussian-kernel-pointwise-bias-variance`
- `ex-finite-bandwidth-kde-smoothing`
- `ex-kde-boundary-bias`

### Dependency claims inspected

The claim-bearing statements used by the assigned proofs were opened for:

- `def-statistical-experiment`, `def-parametric-statistical-model`, `def-estimand-on-a-statistical-model`, `def-statistic-and-estimator`, `def-identically-distributed-and-iid-random-variables`, `def-independent-random-elements`, `def-measure-with-density`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `def-countable-choice`, and `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`;
- `def-measurable-function-between-measurable-spaces`, `thm-composition-with-borel-functions-preserves-measurability`, `thm-arithmetic-and-lattice-operations-preserve-measurability`, and `thm-borel-products-of-euclidean-spaces-are-euclidean-borel`;
- `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`, `cor-c-one-change-of-variables-for-l-one-functions`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `thm-chain-rule-for-total-derivatives`, `thm-integration-by-parts`, `thm-ftc-second-part`, and `prop-order-and-scalar-rules-for-the-nonnegative-integral`;
- `def-sobolev-space-wkp-and-its-norm`, `cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn`, `thm-holder-inequality-for-integrals`, `def-product-measure-on-sigma-finite-spaces`, and `thm-tonelli-theorem-for-sigma-finite-product-spaces`;
- `thm-change-of-variables-for-expectation`, `thm-integration-against-a-density`, `thm-dominated-convergence`, `lem-measurable-functions-preserve-independence`, `thm-factorization-of-expectations-for-independent-variables`, `def-moments-variance-and-covariance`, `cor-finite-nonnegative-integral-implies-finite-almost-everywhere`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-chain-rule`, `thm-derivative-of-exponential`, `thm-exponential-beats-every-polynomial`, `thm-monotone-convergence-for-the-integral`, and `lem-plane-gaussian-integral-in-polar-coordinates`.

### External sources checked

- Newey, *Nonparametric and Semiparametric Estimation*, [MIT OCW PDF](https://ocw.mit.edu/courses/14-385-nonlinear-econometric-analysis-fall-2007/655fcef1b4192f40d80edea3c1dd85ce_notes_nonsemi.pdf): KDE expectation on PDF p. 2, pointwise bias Proposition 1 on p. 3, variance Proposition 2 on p. 4, and integrated MSE calculation on p. 6.
- Bowman and Evers, *Nonparametric Smoothing*, [APTS PDF](https://warwick.ac.uk/fac/sci/statistics/apts/students/resources-1314/ns_notes.pdf): §1.2.1 is on PDF p. 8; the normal-density smoothing formula in §1.2.4 is on PDF p. 11.
- Tibshirani, *Nonparametric Regression: Nearest Neighbors and Kernels*, [Berkeley PDF](https://www.stat.berkeley.edu/~ryantibs/statlearn-s24/lectures/nn_kernels.pdf): the Gaussian kernel example in §3 is on PDF p. 5; the boundary discussion is in §3.1–3.2, PDF pp. 6–7.

## Repairs and evidence

- In `lem-kde-evaluation-is-a-measurable-statistic`, Proof 2.1 incorrectly described the statistic's “target value” as `f(x)`. The definition of estimator says the statistic's codomain must match the estimand's target space; it does not say each observed estimate equals the target. The sentence now says `T_x` has target space `R`, as does `ψ_x`, so it is an estimator of `ψ_x`. The corresponding derivation in the batch proof-contract file was updated.
- In `ex-finite-bandwidth-kde-smoothing`, Proof 1.1 previously normalized `K_d` but did not verify that the asserted sampling density `f_τ` has unit mass. It now notes `f_τ(x)=τ^{-d}K_d(x/τ)` and applies the already cited affine substitution to obtain `∫f_τ=1`. The corresponding derivation in the batch proof-contract file was updated.
- In `ex-kde-boundary-bias`, the uniform function was called a density without verifying its mass. The item now cites `thm-lebesgue-measure-of-a-box-of-every-kind`, adds that dependency and Fact [F8], and verifies `λ₁([0,1])=1` in Proof 1.1. The corresponding proof-contract citation and derivation were updated.
- Corrected source page locators in the five assigned items `lem-c2-density-with-bounded-hessian-is-bounded`, `lem-second-order-kernel-convolution-l2-bias-bound`, `thm-kde-pointwise-second-order-bias`, `thm-kde-pointwise-variance`, and `thm-kde-global-mise-upper-rate`: APTS §1.2.1 is PDF p. 8, not p. 7.
- Corrected the Gaussian-kernel locator in `ex-gaussian-kernel-pointwise-bias-variance` from Berkeley PDF p. 4 to p. 5, where §3 gives the Gaussian kernel.
- Corrected the normal-smoothing locator in `ex-finite-bandwidth-kde-smoothing` from APTS PDF p. 9 to p. 11, where §1.2.4 gives the normal-density convolution formula.
- No stale `verification.judge` record was present for the changed items or their current batch proof-contract entries.

## Page verdicts

- `nonparametric-density-estimation-and-kernels` (A): the summary matches the reviewed item claims and their hypotheses. It accurately distinguishes the upper MISE rate from a lower bound and notes the selected density version and bandwidth regime. No page prose edit was needed.
- `nonparametric-density-estimation-and-kernels-examples` (B): the summary matches the Gaussian constants, finite-bandwidth convolution, and boundary-bias examples. No B-page prose edit was made.

## Validation and remaining issues

Reflow and precheck passed for each of the nine changed items. The final proof-layout command reported `9 items, 29 steps, 0 defects`.

No uneditable defects or blockers remain. One process limitation: I opened the assigned items before opening their supplier statements, rather than following the requested supplier-first opening order. I subsequently checked each relied-on dependency claim against its current supplier statement before concluding; the reading-order requirement itself was not met.
