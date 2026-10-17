# Step 3a reader report — batch 41

Run: `numerical-optimization-dynamics-2026-10-16`  
Batch: `41`  
Role: reader

## Opened inventory

Assigned pages:

- `coordinate-and-block-descent-methods`
- `coordinate-and-block-descent-methods-examples`

Required supporting pages and linked example opened for page-summary checks:

- `sparse-high-dimensional-estimation-and-covariance`
- `proximal-gradient-and-accelerated-composite-optimization`
- `ex-orthogonal-design-lasso-is-soft-thresholding` (published)

Assigned items, reviewed in dependency order:

- `alg-randomized-coordinate-gradient-descent`
- `lem-coordinate-block-smoothness-descent-model`
- `lem-na-coordinate-soft-threshold-minimizer`
- `alg-cyclic-exact-block-minimization`
- `thm-randomized-coordinate-gradient-descent-rates`
- `lem-cyclic-block-minimizer-value-continuity`
- `cex-cyclic-block-descent-may-cycle-outside-hypotheses`
- `lem-coordinate-lasso-soft-threshold-update`
- `lem-coordinate-separable-penalty-is-proper-closed-convex`
- `alg-randomized-coordinate-proximal-descent`
- `lem-coordinatewise-minimum-implies-composite-stationarity`
- `lem-randomized-coordinate-prox-subproblem-well-defined`
- `cex-composite-coordinate-proximal-rate-needs-penalty-error`
- `cex-composite-strong-convexity-alone-does-not-give-coordinate-factor`
- `thm-cyclic-block-descent-stationarity-and-convergence`
- `thm-randomized-coordinate-proximal-strongly-convex-contraction`
- `thm-randomized-coordinate-proximal-composite-strong-convexity-contraction`
- `ex-nonunique-lasso-coefficients-unique-fitted-value`
- `ex-randomized-versus-cyclic-rank-one-quadratic`
- `ex-two-block-simulation-calibration`
- `ex-correlated-design-lasso-coordinate-cycle`
- `ex-zero-feature-column-lasso-coordinate`

Dependency definitions and result statements used to check the assigned claims were opened, including `def-euclidean-inner-product`, `def-c-one-map-and-local-inverse`, `def-jacobian-matrix-and-gradient`, `def-total-derivative-in-euclidean-space`, `def-finite-sum`, `def-proper-closed-convex-function-on-rn`, `def-extended-reals`, `def-extended-real-epsilon-subdifferential`, `def-proximal-mapping`, `def-lasso-estimator`, `def-p-norms-on-rn`, `def-soft-thresholding-function`, `def-abs-value`, `def-metric-topology`, `def-metric-ball`, and `def-convex-and-strictly-convex-functionals-on-a-banach-space`; and `thm-total-derivative-computes-directional-and-partial-derivatives`, `cor-mean-value-theorem`, `thm-chain-rule-for-total-derivatives`, `thm-gradient-represents-directional-derivatives-and-steepest-ascent`, `thm-total-differentiability-gives-a-local-linear-bound-and-continuity`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-differentiable-convex-functions-and-gradient-inequality`, `thm-fermat-for-euclidean-local-extrema`, `thm-induction-principle`, `lem-finite-sum-laws`, `lem-finite-choice`, `cor-archimedean-reciprocal`, `lem-of-abs-value`, `lem-of-triangle-inequality`, `lem-finite-set-has-max`, `lem-lasso-objective-has-minimizer`, `thm-euclidean-semicontinuous-extreme-value-theorem`, `thm-euclidean-semicontinuity-level-set-characterisations`, `thm-compact-implies-the-other-compactness-forms`, `thm-compact-subset-is-closed-and-bounded`, `thm-infimum-property`, `lem-inf-epsilon`, `thm-heine-borel-rn`, `thm-recursion`, `thm-well-ordering-principle`, `thm-nearest-point-in-a-nonempty-closed-convex-set`, `lem-projection-onto-a-closed-convex-set-has-the-variational-inequality`, and `cor-bolzano-weierstrass-in-rn`.

I independently read the complete proofs of the assigned items and the current-run proximal suppliers `thm-proximal-operator-existence-resolvent-firm-nonexpansive`, `lem-smooth-composite-sum-preserves-proper-closed-convexity`, and `lem-proper-closed-convex-function-affine-minorant`; I also checked the finite-choice proof used by the smoothness argument. The remaining published suppliers were checked at the exact statements and facts used by the assigned proofs. The coverage file was used as an evidence entry point, not as a verdict. I did not browse external papers because no unresolved unfamiliar claim depended on one.

## Repairs

- `lem-coordinate-separable-penalty-is-proper-closed-convex`, Proof step 2.2: changed “take the least such index” to “choose such an index.” The branch assumes an infinite-valued block and needs only one witness; the least-index clause introduced a well-ordering prerequisite that was not otherwise used. Updated the matching step-2.2 derivation in `research/numerical-optimization-dynamics-2026-10-16-batch-41.proof-contracts.json`. No `verification.judge` record was present.
- `lem-coordinatewise-minimum-implies-composite-stationarity`, Proof step 2.1: made the extended-real boundary explicit. When `g(z)=+∞`, the subgradient inequality is automatic; otherwise the block values are finite and the finite block inequalities may be summed. Updated the matching step-2.1 derivation in the same proof-contract file. No `verification.judge` record was present.

Validation after the final edits:

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-coordinate-separable-penalty-is-proper-closed-convex.md` — pass, unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-coordinate-separable-penalty-is-proper-closed-convex.md` — pass.
- `node tools/tsx-run.mjs tools/reflow.mts items/lem-coordinatewise-minimum-implies-composite-stationarity.md` — pass, unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-coordinatewise-minimum-implies-composite-stationarity.md` — pass.
- `node tools/proof-layout.mjs items/lem-coordinate-separable-penalty-is-proper-closed-convex.md items/lem-coordinatewise-minimum-implies-composite-stationarity.md` — 2 items, 9 steps, 0 defects.

## Defects not edited

None found.

## Page verdicts

- `coordinate-and-block-descent-methods` (A): sound after the two item-proof repairs above. Its summary accurately describes the smooth coordinate rate, proximal error recurrences and their curvature hypotheses, the no-penalty-independent rate caveat, and the cyclic convergence assumptions. No page-prose edit was needed.
- `coordinate-and-block-descent-methods-examples` (B): sound. The Lasso, rank-one quadratic, and calibration computations match their statements, and the linked published orthogonal-design example is correctly identified as reused. No B-page prose was edited.

## Blocker

No batch-41 blocker. The live run status separately reported a `3a-split` blocker for batch 6; that is outside this assignment.
