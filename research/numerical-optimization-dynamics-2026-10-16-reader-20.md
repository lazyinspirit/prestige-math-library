# Step 3a reader report — batch 20

Run: `numerical-optimization-dynamics-2026-10-16`  
Review date: 2026-10-17

## Opened inventory

Assigned pages:

- `library/numerical-linear-algebra-and-approximation/composite-quadrature-rules.md` (A)
- `library/numerical-linear-algebra-and-approximation/composite-quadrature-rules-examples.md` (B)

Assigned items, read in supplier-before-consumer order:

- Procedures: `alg-composite-midpoint-rule`, `alg-composite-simpson-rule`.
- Midpoint: `lem-composite-midpoint-panel-error-kernel`, `thm-composite-midpoint-error-bound`.
- Simpson: `lem-simpson-panel-peano-kernel`, `thm-composite-simpson-exact-through-degree-three`, `thm-composite-simpson-error-bound`.
- Examples: `ex-convex-composite-midpoint-and-trapezoid-bracketing`, `ex-quadratic-exact-for-composite-simpson`, `ex-cubic-exact-for-composite-simpson`.

The 22 immediate published suppliers opened for their relevant definition or statement sections were: `def-finite-sum`, `def-higher-derivatives-and-smoothness`, `thm-integration-by-parts`, `thm-additivity-over-subintervals`, `thm-linearity-of-the-integral`, `thm-monotonicity-of-the-integral`, `thm-continuous-on-a-rectangle-is-riemann-integrable`, `thm-heine-borel-r`, `thm-extreme-value-r`, `thm-ftc-second-part`, `thm-algebra-of-continuous-functions`, `thm-chain-rule`, `lem-derivative-of-a-power`, `thm-algebra-of-derivatives`, `lem-triangle-inequality-finite`, `def-composite-trapezoidal-rule`, `def-convex-concave-and-midpoint-convex-functions`, `def-darboux-integral`, `thm-darboux-equals-riemann`, `def-darboux-sums`, `def-partition-and-refinement`, and `lem-finite-sum-permutation-invariance`.

The batch-20 proof contract was checked against the item proofs. After the midpoint procedure edit, the direct and indirect current-run consumer closure was also checked. This covered the A/B pages `renewal-age-and-size-structured-numerical-methods`, `renewal-age-and-size-structured-numerical-methods-examples`, `variational-crimes-and-strang-lemmas`, and `variational-crimes-and-strang-lemmas-examples`; the relevant supplier sections `def-age-structured-renewal-transport-problem`, `def-size-structured-transport-and-division-kernel`, `def-one-step-ode-method-local-defect-order-and-stability`, `def-uniform-grid-and-difference-operators`, `alg-adaptive-simpson-with-finite-depth-and-panel-cap`, `def-variational-crime-error-framework`, `thm-first-strang-lemma-for-conforming-perturbed-galerkin`, `lem-one-dimensional-p1-interpolation-error`, and `lem-one-dimensional-zero-boundary-poincare`; and the affected items `alg-size-structured-finite-volume-flux-and-kernel-quadrature`, `alg-age-cohort-characteristic-quadrature`, `alg-age-structured-positive-birth-quadrature`, `alg-age-structured-renewal-upwind-finite-volume`, `thm-age-cohort-quadrature-weak-consistency`, `thm-age-structured-renewal-bv-l1-convergence`, `thm-age-structured-renewal-cutoff-tail-and-outflow-bound`, `ex-half-size-division-numerical-moment-budget`, `thm-age-structured-renewal-smooth-first-order-convergence`, `thm-age-structured-renewal-upwind-positivity-mass-bound-and-stability`, `thm-size-structured-positivity-number-and-weighted-moment-identities`, `lem-midpoint-quadrature-defect-for-p1-stiffness`, `ex-midpoint-underintegrated-p2-stiffness-loses-coercivity`, `cor-midpoint-quadrature-strang-error-for-p1`, `ex-age-cutoff-versus-outflow-tail-error`, and `ex-constant-mortality-and-age-localized-fertility`. The `justified_by` connection through `def-size-structured-transport-and-division-kernel` was included.

## Repairs and evidence

- In `alg-composite-midpoint-rule`, the original input signature required $a<b$ and $n\ge1$ before an `invalid-grid` branch tested those same conditions. I changed the inputs to raw real endpoints and an integer panel count, made the invalid-grid return occur before any function evaluation, and kept $f:[a,b]\to\mathbb R$ as an admissibility condition for valid grids. For admissible inputs the midpoint formula and nodes are unchanged. The batch-20 proof-contract quotes for `thm-composite-midpoint-error-bound` and `ex-convex-composite-midpoint-and-trapezoid-bracketing` now match the current Definition.
- In both assigned algorithms, `verification.precheck` was `pending` although algorithms have no phase proof. I changed it to `n/a`, as required by `SCHEMA.md` for algorithms.
- Six assigned items cited Art Owen’s Chapter 7 under the FNC book URL. I corrected the Owen URL to `https://artowen.su.domains/mc/Ch-quadrature.pdf` in `lem-simpson-panel-peano-kernel`, `thm-composite-simpson-exact-through-degree-three`, `thm-composite-simpson-error-bound`, `ex-convex-composite-midpoint-and-trapezoid-bracketing`, `ex-quadratic-exact-for-composite-simpson`, and `ex-cubic-exact-for-composite-simpson`. The official Owen PDF contents identify §7.1 as the midpoint rule and §7.2 as Simpson’s rule; the linked FNC page is a separate source, titled *Numerical integration*, and gives the composite Simpson formula in §5.6.4, equation (5.6.21). [Owen quadrature chapter](https://artowen.su.domains/mc/Ch-quadrature.pdf), [FNC §5.6](https://fncbook.com/integration/).
- I corrected the batch-20 convex-example contract’s `zero` boundary evidence. It had described the example as convex $C^2$ data, while the statement assumes only convexity and Darboux integrability. The corrected evidence records that the zero function belongs to the stated class and gives zero for all three values.
- Reflow normalized the proof layout in the six proof-bearing items with corrected Owen references. No `verification.judge` record was present in the edited items.

The midpoint panel kernel identity and bound, Simpson Peano identity and kernel integral, composite midpoint and Simpson bounds, cubic exactness, convex midpoint/trapezoid inequalities, and both worked Simpson computations were checked against their hypotheses and immediate suppliers. The kernel boundary terms and constants are correct. The explicit downstream calls use strict intervals and positive panel counts, so the revised invalid-grid branch does not change their admissible results. One optional midpoint initialization in another batch leaves the uniform-grid condition unstated; it is recorded below.

## Findings not edited

Two batch-89 proof-contract records still quote the superseded midpoint Definition. Their item proofs use valid one-panel grids, so this is a nonfatal contract-citation defect rather than a mathematical error in those proofs. They are outside batch 20 and remain for the batch-89 owner:

- `lem-midpoint-quadrature-defect-for-p1-stiffness`: `research/numerical-optimization-dynamics-2026-10-16-batch-89.proof-contracts.json`, `contracts.lem-midpoint-quadrature-defect-for-p1-stiffness.citations[F1].quote` (around line 937) still quotes the old constrained input signature and invalid-grid wording.
- `ex-midpoint-underintegrated-p2-stiffness-loses-coercivity`: the same contract file, `contracts.ex-midpoint-underintegrated-p2-stiffness-loses-coercivity.citations[F1].quote` (around line 1560) has the same stale quote.

One additional batch-79 algorithm has a missing admissibility detail:

- `alg-age-cohort-characteristic-quadrature`: in `## Definition`, the optional midpoint initialization says to use the rule “on a partition of [0,A]” and then assigns every cohort the single weight $\Delta a$. The linked `alg-composite-midpoint-rule` accepts a uniform grid. The consumer does not say that the partition is uniform, so arbitrary nonuniform partitions do not match the called procedure or the one-width formula. Add a uniform-grid condition (or specify per-cell widths and a nonuniform supplier). This item is outside batch 20.

## Page verdicts

- `composite-quadrature-rules` (A): sound. Its summary accurately describes the procedures, exact-arithmetic bounds, and Simpson kernel/exactness results.
- `composite-quadrature-rules-examples` (B): sound. Its summary accurately describes convex bracketing and the quadratic/cubic Simpson calculations.
- `renewal-age-and-size-structured-numerical-methods` (batch 79 A): the page summary remains accurate; its `alg-age-cohort-characteristic-quadrature` midpoint option needs the uniform-grid condition described above. The B companion summary is unaffected.
- `variational-crimes-and-strang-lemmas` (batch 89 A) and its B companion: no mathematical impact from the clarification; the reviewed midpoint calls are one-panel calls on strict cells. The two stale batch-89 contract quotations above remain unresolved.

## Validation and blocker

- `reflow.mts`: passed for all changed items; the six proof-bearing items were reflowed.
- `precheck.mts`: passed for the six proof-bearing items; both algorithms returned `0 checked, 0 failing` and are marked `n/a`.
- Final `node tools/proof-layout.mjs` over all eight changed item paths: `8 items, 19 steps, 0 defects`.
- No blocker. The only unresolved defects are the two out-of-batch batch-89 contract quotations listed above.

## Coverage note

All assigned pages and items, all 22 immediate published suppliers, and all 17 additional items in the current-run dependency/justification closure affected by the midpoint Definition change were inspected. For the additional batch-79 and batch-89 material, review was limited to the relevant algorithm uses, dependent claims, page summaries, and midpoint source-quote contract records; unrelated content in those batches was not audited. Transitive proofs of the published suppliers were not re-audited.
