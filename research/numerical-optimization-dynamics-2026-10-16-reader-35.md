# Step 3a reader report — batch 35

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader  
Scope: batch `35`

## Opened inventory

Assigned pages:

- `library/numerical-differential-equations-and-stochastic-dynamics/runge-kutta-methods-and-order.md`
- `library/numerical-differential-equations-and-stochastic-dynamics/runge-kutta-methods-and-order-examples.md`

Assigned items, read in manifest dependency order:

- `lem-chebyshev-rkc-bounds-and-endpoint-derivatives`
- `def-explicit-runge-kutta-tableau-and-stage-map`
- `alg-rkc1-chebyshev`
- `alg-rkc2-linear-chebyshev`
- `alg-rkc2-nonlinear`
- `def-euler-midpoint-rk4-tableaus`
- `prop-explicit-rk-order-conditions-through-four`
- `alg-ssprk33`
- `prop-euler-midpoint-rk4-orders-and-stability-functions`
- `prop-rkc-stability-intervals-and-stage-degree`
- `lem-rkc-chebyshev-stage-perturbation-amplification`
- `prop-ssprk33-third-order-and-convex-preservation`
- `thm-nonlinear-rkc2-order-two-and-global-error`
- `ex-midpoint-order-loss-at-continuous-time-kink`
- `ex-euler-midpoint-rk4-fixed-time-error-slopes`
- `ex-rkc-self-adjoint-heat-stability-work`
- `ex-rkc-eigenvalue-stability-does-not-control-nonnormal-growth`
- `ex-rkc-stage-roundoff-quadratic-amplification`

Direct suppliers opened for the assigned claims:

- Chebyshev and trigonometric: `cor-trigonometric-parity-and-pythagorean-identity`, `def-canonical-natural`, `def-chebyshev-polynomials-first-and-second-kind`, `def-higher-derivatives-and-smoothness`, `def-integer-power`, `def-polynomial-evaluation-and-root`, `lem-chebyshev-degree-leading-coefficients-and-extreme-values`, `lem-derivative-of-a-power`, `lem-of-triangle-inequality`, `thm-algebra-of-derivatives`, `thm-chebyshev-multiple-angle-identities`, `thm-induction-principle`, `thm-quarter-turn-values-and-shift-formulas`, `thm-sine-and-cosine-addition-formulas`, `thm-sine-cosine-signs-monotonicity-and-ranges`, and `thm-sine-cosine-zero-sets-and-fundamental-period`.
- ODE, tableaux, and expansions: `def-euclidean-inner-product`, `def-first-order-ode-initial-value-problem-and-solution`, `def-one-step-ode-method-local-defect-order-and-stability`, `def-linear-map`, `def-vector-space-of-linear-maps`, `cor-finite-dimensional-normed-spaces-are-banach`, `def-ck-and-multi-index-notation-in-several-variables`, `lem-standard-basis-of-f-n`, `thm-chain-sum-product-and-composition-rules-for-banach-derivatives`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-continuous-partial-derivatives-imply-total-differentiability`, `thm-multivariable-taylor-formula-with-lagrange-remainder`, `thm-symmetry-of-higher-mixed-partials`, `thm-chain-rule`, and `def-convex-subset-of-euclidean-space`.
- Spectral arguments: `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, `def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis`, `def-polynomial-evaluation-at-an-endomorphism`, `def-real-and-complex-inner-product-space`, and `def-self-adjoint-and-normal-endomorphism`.
- Exponential and global error: `def-real-exponential-function-and-e`, `lem-exponential-dominates-one-plus-x`, `thm-derivative-of-exponential`, `thm-exponential-addition-formula`, `thm-global-error-from-one-step-defect-and-stability`, and its recurrence supplier `lem-discrete-one-step-error-recurrence-bound`.

The current-run draft suppliers `def-one-step-ode-method-local-defect-order-and-stability`, `thm-global-error-from-one-step-defect-and-stability`, and `lem-discrete-one-step-error-recurrence-bound` were checked where used; no defect was found in their relevant statements or arguments.

## Repairs and evidence

- `prop-explicit-rk-order-conditions-through-four`, Proof step 1.1: added the missing bridge from coordinate $C^4$ regularity to continuous Fréchet derivatives. The proof now applies the continuous-partials theorem successively to finite arrays of ordered partials before invoking Banach chain and product rules, and explains why the bounded derivatives of $f$ through order four give a uniform bound on $y^{(5)}$ and the exact-solution Taylor remainder. The local sources are `def-ck-and-multi-index-notation-in-several-variables` and `thm-continuous-partial-derivatives-imply-total-differentiability`; their hypotheses supply the stated induction. Updated this item's derivation entry in `research/numerical-optimization-dynamics-2026-10-16-batch-35.proof-contracts.json`.
- `alg-rkc1-chebyshev`, Definition: replaced the augmented-time recurrence assertion with explicit nonautonomous query times, domain checks, evaluator-failure handling, and output. The autonomous recurrence and all downstream autonomous uses are unchanged. This follows the undamped first-order recurrence in [Almuslimani and Vilmart, §2.2.1, equation (11)](https://www.unige.ch/~vilmart/paper_optimal_control_alm_vil.pdf); the recurrence form and stage-time coefficients are also given in [Sommeijer, Shampine, and Verwer, §2, equation (2.1)](https://ir.cwi.nl/pub/109/0109D.pdf).
- `alg-rkc2-nonlinear`, Definition: removed the unproved statement that the time abscissae arise from the augmented recurrence and that $c_s=1$. The procedure continues to specify the abscissae and output exactly; `thm-nonlinear-rkc2-order-two-and-global-error`, step 1.1, proves the time-coordinate identity used later. The nonlinear recurrence and coefficients agree with [Almuslimani and Vilmart, §2.2.2, equations (16)–(20)](https://www.unige.ch/~vilmart/paper_optimal_control_alm_vil.pdf).
- `alg-ssprk33`, Definition: removed the unproved equivalent-tableau assertion. `prop-ssprk33-third-order-and-convex-preservation`, step 1.1, derives those coefficients directly from the retained execution instructions.

Because the three algorithm Definitions changed, their in-batch direct consumers were rechecked: `prop-rkc-stability-intervals-and-stage-degree`, `lem-rkc-chebyshev-stage-perturbation-amplification`, `prop-ssprk33-third-order-and-convex-preservation`, `thm-nonlinear-rkc2-order-two-and-global-error`, and the three RKC examples. Their arguments continue to use unchanged recurrences or explicitly derive the stated properties; no further repair was needed. The affected source quotations in the proof-contract file were refreshed. No stale `verification.judge` record was present on the changed items.

## Verification

- Reflow: all four changed item paths reported `unchanged`.
- Precheck: all four commands passed; the three definitions had zero proof rows, and the order-conditions proposition passed its direct proof check.
- Final combined layout check: `node tools/proof-layout.mjs items/alg-rkc1-chebyshev.md items/alg-rkc2-nonlinear.md items/alg-ssprk33.md items/prop-explicit-rk-order-conditions-through-four.md` reported 4 items, 5 steps, 0 defects.

## Page verdicts

- `runge-kutta-methods-and-order` (A): the summary matches the repaired items. No remaining page-summary defect found.
- `runge-kutta-methods-and-order-examples` (B): the summary matches the five examples. No remaining page-summary defect found.

## Uneditable findings

None. No assigned item, page, or consulted dependency has a remaining confirmed defect.

## Blocker and coverage limit

There is no batch-35 blocker. The last recomputed autopilot status, updated `2026-10-16T13:18:00.231Z`, still showed a run-level `3a-split` blocker: `split-6 failed 3x (covers 6)`. That blocker is outside this assignment and was not changed.

The review checked all assigned items and pages and the direct supplier claims needed to verify them. It did not independently re-audit every transitive dependency below those supplier statements. The finite-stage and fixed-tube qualifications were retained throughout; no unresolved mathematical uncertainty remains in batch 35.
