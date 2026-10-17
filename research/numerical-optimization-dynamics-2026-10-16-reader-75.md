# Reader report — batch 75

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader  
Scope: batch `75`

## Opened inventory

Read `research/numerical-optimization-dynamics-2026-10-16-batch-75.pages.json`, `briefs/reader.md`, and `research/numerical-optimization-dynamics-2026-10-16-batch-75.proof-contracts.json`, then both assigned pages:

- `library/numerical-differential-equations-and-stochastic-dynamics/differential-algebraic-equations-and-consistent-initialization.md`
- `library/numerical-differential-equations-and-stochastic-dynamics/differential-algebraic-equations-and-consistent-initialization-examples.md`

Read all 15 assigned items from the manifest:

- `def-semi-explicit-index-one-dae-and-consistent-initial-data`
- `def-regular-differentiation-index`
- `thm-index-one-dae-implicit-function-reduction`
- `lem-index-one-dae-algebraic-residual-to-state-error`
- `alg-index-one-dae-consistent-initialization`
- `alg-index-one-dae-backward-euler-stepper`
- `alg-index-one-dae-bdf2-stepper`
- `lem-index-one-dae-backward-euler-local-branch`
- `lem-index-one-dae-bdf2-local-branch`
- `thm-index-one-dae-finite-budget-solvers-terminate`
- `thm-index-one-dae-backward-euler-first-order-with-residuals`
- `thm-index-one-dae-bdf2-second-order-with-residuals`
- `ex-index-one-circuit-consistent-initialization-and-be-step`
- `ex-index-two-dae-algebraic-residual-does-not-control-state`
- `ex-index-three-pendulum-by-differentiation`

Opened the directly used supplier items: `def-first-order-ode-initial-value-problem-and-solution`, `def-vector-valued-derivative-and-integral`, `def-interval`, `thm-parametrized-implicit-function-theorem-with-higher-regularity`, `thm-chain-rule-for-total-derivatives`, `thm-multivariable-taylor-formula-with-lagrange-remainder`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `alg-newton-correction-for-vector-residuals`, `alg-finite-budget-newton-for-vector-residuals`, `lem-finite-budget-newton-work-and-status`, `def-c-one-map-and-local-inverse`, `def-jacobian-matrix-and-gradient`, `thm-total-derivative-computes-directional-and-partial-derivatives`, `def-backward-euler-step-equation`, `def-implicit-residual-and-algebraic-error-units`, `alg-variable-step-bdf2-with-selected-implicit-branch`, `lem-variable-step-bdf2-interpolation-and-local-defect`, `def-linear-multistep-method-consistency-order-and-root-condition`, `lem-discrete-one-step-error-recurrence-bound`, and `def-invertible-euclidean-linear-map`.

## Review and repairs

1. In `ex-index-three-pendulum-by-differentiation`, Verification step 2.1 differentiated the already simplified constraint `||v||² - g₀q₂ - λℓ² = 0` but included an additional `-2λ qᵀv` term. The displayed coefficient of `qᵀv` was consequently doubled. Rewrote the derivative from the stated simplified constraint; it gives `-3g₀v₂ - 2λqᵀv - λ'ℓ²`, and tangency gives the claimed multiplier derivative. Updated the matching step derivation in `research/numerical-optimization-dynamics-2026-10-16-batch-75.proof-contracts.json`.

2. In `thm-index-one-dae-bdf2-second-order-with-residuals`, Facts & Assumptions F3 claimed the reduced-ODE BDF2 recurrence for numerical states even though the theorem allows nonzero algebraic residuals, so `f(t_n,X_n,Z_n)` need not equal `F(t_n,X_n)`. The proof accounted for this difference as `δ_n` but the cited fact did not justify the coupled recurrence. Replaced F3 with the DAE stepper's coupled differential residual, retained the constant-step coefficient source, and made proof step 2.1 explicitly derive the error recurrence using `δ_n + r^d_n - τ_n`. Updated both F3 citations and the step derivation in the proof contract. Neither edited item contained a `verification.judge` record.

The index-one reduction, local algebraic residual estimate, finite-budget procedures and work bounds, local implicit branches, conditional backward-Euler and BDF2 error estimates, and all three examples otherwise checked against their stated hypotheses and suppliers. The cited DAE sources support the local reduction and consistent-data conventions: Hairer–Wanner, *Solving Ordinary Differential Equations II*, Ch. VI §VI.1, printed pp. 374–375, https://isy.gitlab-pages.liu.se/fs/phd-courses/simulation/Papers/HairerWanner_VI_1_clean.pdf; Atkinson–Han–Stewart, *Numerical Solution of Ordinary Differential Equations*, Ch. 10 §10.1, pp. 165–166, §10.3, pp. 169–171, and §10.4.1, pp. 173–174, https://homepage.math.uiowa.edu/~atkinson/papers/NAODE_Book.pdf. The pendulum differentiation is proved locally in the example; Atkinson Ch. 10, pp. 163–165, also discusses the differentiated pendulum constraints. The variable-step BDF2 source checked was Söderlind–Fekete–Faragó, §4, https://real.mtak.hu/85237/1/B111_BIT.pdf.

## Unedited findings and page verdicts

- Unedited defects: none found. No published or out-of-batch dependency defect remained to report.
- A page `differential-algebraic-equations-and-consistent-initialization`: sound after the two item repairs; the summary reflects the selected-branch, residual, and conditional-accuracy scope.
- B page `differential-algebraic-equations-and-consistent-initialization-examples`: sound; the circuit calculation and higher-index examples match their items. B-page prose was not edited.
- Blocker: none.

## Validation

- `node tools/tsx-run.mjs tools/reflow.mts items/ex-index-three-pendulum-by-differentiation.md` — reflowed.
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-index-three-pendulum-by-differentiation.md` — PASS, 1 checked, 0 failing.
- `node tools/tsx-run.mjs tools/reflow.mts items/thm-index-one-dae-bdf2-second-order-with-residuals.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-index-one-dae-bdf2-second-order-with-residuals.md` — PASS, 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/ex-index-three-pendulum-by-differentiation.md items/thm-index-one-dae-bdf2-second-order-with-residuals.md` — 2 items, 11 steps, 0 defects.

## Coverage note

All assigned pages and items and the directly used prerequisites listed above were opened. I did not independently audit every transitive proof below those prerequisite items. During navigation, I opened the variable-step BDF2 algorithm before its interpolation-lemma supplier, and opened `def-linear-multistep-method-consistency-order-and-root-condition` after the interpolation lemma. I later read those suppliers and checked the BDF2 argument in context; no unresolved mathematical claim remains, but the initial dependency ordering was imperfect.
