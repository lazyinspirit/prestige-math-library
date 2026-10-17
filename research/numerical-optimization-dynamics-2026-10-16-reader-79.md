# Step 3a reader report — batch 79

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader  
Scope: batch `79`

## Opened inventory

Opened both assigned pages:

- A page: `renewal-age-and-size-structured-numerical-methods`.
- B page: `renewal-age-and-size-structured-numerical-methods-examples`.

Opened all 20 assigned items. A-page items: `def-age-structured-renewal-transport-problem`, `def-size-structured-transport-and-division-kernel`, `thm-age-structured-renewal-characteristic-solution`, `alg-size-structured-finite-volume-flux-and-kernel-quadrature`, `alg-age-cohort-characteristic-quadrature`, `def-age-structured-renewal-finite-cutoff-model`, `thm-age-structured-renewal-semigroup-growth-and-data-stability`, `thm-size-structured-positivity-number-and-weighted-moment-identities`, `thm-age-structured-renewal-finite-cutoff-characteristic-solution`, `alg-age-structured-positive-birth-quadrature`, `thm-age-cohort-quadrature-weak-consistency`, `alg-age-structured-renewal-upwind-finite-volume`, `thm-age-structured-renewal-upwind-positivity-mass-bound-and-stability`, `thm-age-structured-renewal-smooth-first-order-convergence`, `thm-age-structured-renewal-bv-l1-convergence`, and `thm-age-structured-renewal-cutoff-tail-and-outflow-bound`.

B-page items: `ex-narrow-maturation-kernel-delay-approximation`, `ex-half-size-division-numerical-moment-budget`, `ex-constant-mortality-and-age-localized-fertility`, and `ex-age-cutoff-versus-outflow-tail-error`.

Opened direct suppliers and supporting definitions needed for the checks: `def-first-order-ode-initial-value-problem-and-solution`, `thm-gronwall-integral-inequality`, `thm-picard-lindelof-local-existence-and-uniqueness`, `prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation`, `def-one-step-ode-method-local-defect-order-and-stability`, `thm-forward-euler-one-step-consistency-and-local-error`, `lem-time-along-ode-solution-derivative-bound`, `alg-composite-midpoint-rule`, `thm-composite-midpoint-error-bound`, `lem-composite-midpoint-panel-error-kernel`, `lem-discrete-one-step-error-recurrence-bound`, `alg-adaptive-simpson-with-finite-depth-and-panel-cap`, `def-adaptive-simpson-refinement-indicator`, `alg-composite-simpson-rule`, `thm-adaptive-simpson-cap-termination-and-indicator-budget`, `def-uniform-grid-and-difference-operators`, `def-finite-sum`, `thm-additivity-over-subintervals`, and `lem-triangle-inequality-finite`. The ODE, Gronwall, and Picard–Lindelöf suppliers are published; the remaining listed draft suppliers are outside batch 79.

Consulted source passages for the specialized context: Perthame, *Introduction to Structured Equations in Biology*, Ch. 1 §1.1.2 (characteristic and Volterra formulas), §§1.4–1.5 (division kernels and number/size moments), and Ch. 2, Definition 2.1 and Theorems 2.2–2.3 (weak renewal solutions and upwind estimates), [full lecture notes](https://www.math.cmu.edu/cna/LectureNotesFiles/Perthame.pdf); Brännström, Carlsson, and Simpson, §2 (cohort measures and weak measure-valued formulation), [paper](https://arxiv.org/pdf/1210.1444); and Rutgers MATH 373 Lecture 12 §8.2 (composite midpoint nodes, positive weights, and the error formula), [lecture notes](https://sites.math.rutgers.edu/~falk/math373/lecture12.pdf). I also opened FNC §5.6 at [fncbook.com/integration](https://fncbook.com/integration/): it contains general equally spaced quadrature material but no midpoint-rule passage. The batch-20 midpoint item describes that reference as comparison material and cites the Rutgers notes for the midpoint formula, so I found no citation defect to route.

## Repairs and evidence

1. **`def-size-structured-transport-and-division-kernel`:** Replaced the density-only equation and mistyped daughter-source integral with a weak measure-valued balance. The allowed daughter kernels include atoms, as used by the assigned half-size example, so their source need not have a density. The revised formulation specifies finite population measures, the parent-measure integral of the daughter kernel, zero incoming source, and an absorbing top boundary through tests vanishing at $X$. The characteristic well-definedness remains justified by `thm-size-structured-positivity-number-and-weighted-moment-identities`; its proof constructs the extension’s unique finite-horizon IVP solution by uniform Picard–Lindelöf continuation. The current proof contract’s endpoint and nonempty-choice evidence was updated.

2. **`thm-age-structured-renewal-characteristic-solution`:** Rewrote step 1.1 so it does not infer pointwise characteristic differentiability from a weak solution with only $L^1$ initial data. It now treats the branches as the defining mild form, then constructs the candidate after the Volterra birth rate is solved; later steps verify the weak identity. The proof-contract derivation for step 1.1 was updated.

3. **`alg-age-structured-positive-birth-quadrature`:** Made the per-cell configuration explicit: midpoint panel count or adaptive depth, panel-call budget, and positive tolerance. Defined a one-panel midpoint default, retained adaptive statuses/indicators, and stated evaluation-failure behavior. Its proof-contract choice evidence was updated.

4. **`alg-age-structured-renewal-upwind-finite-volume`:** Specified that the scheme uses the age model’s rates, passes fixed per-cell settings to the positive birth-quadrature procedure, and uses its one-panel midpoint default when settings are omitted. Its proof-contract choice evidence was updated. The positivity, smooth-convergence, BV-convergence, and example consumers were checked against the clarified call interface.

No stale `verification.judge` records were present on the changed items. Reflow and precheck were run for each changed item; each reflow reported unchanged formatting and each precheck passed (definitions/algorithms: 0 proofs checked, 0 failures; characteristic theorem: 1 proof checked, 0 failures). The required final batched layout check reported: `4 items, 10 steps, 0 defects`.

## Defects not edited

None. All confirmed defects found were in assigned items and repaired. I found no remaining defect in a page, published supplier, or other-batch dependency requiring a routed finding.

## Page verdicts

- **A page — pass after the size-model repair.** Its age and size summaries match the reviewed statements and proofs; the size-model summary remains compatible with the measure-valued daughter kernel and discrete moment result.
- **B page — pass.** The four examples’ hypotheses, arithmetic, cutoffs, quadrature values, and summaries agree with their assigned dependencies. In particular, the half-size kernel’s atomic daughters are now represented by the size model’s measure formulation.

## Blocker

None.

## Coverage note

All assigned pages and items and the direct supplier bodies used in the mathematical checks were opened. I did not re-audit every transitive proof dependency beneath the published calculus and ODE suppliers; I checked their exact interfaces and the assigned proofs’ applications. No routed finding depends on those unreviewed transitive proof trees.
