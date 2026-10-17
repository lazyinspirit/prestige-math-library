# Step 3a reader report — batch 40

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader  
Scope: batch `40`

## Instructions and run state

Read `CLAUDE.md`, `README.md`, `briefs/reader.md`, and the assigned batch manifest; consulted the relevant content and workflow instructions in `SCHEMA.md` and `WORKFLOW.md`. The live autopilot status showed the run as active, with batch 40 in the Step 3a frontier. It also showed an existing `3a-split` blocker for batch 6 (`split-6 failed 3x`); that blocker is outside this assignment.

## Opened inventory

### Assigned pages

- `subgradient-bundle-and-derivative-free-optimization` — A page.
- `subgradient-bundle-and-derivative-free-optimization-examples` — B page.

### Assigned items

Read all 23 assigned items in the manifest's dependency-level order:

- `alg-nelder-mead-finite-budget`
- `alg-projected-subgradient-method`
- `alg-proximal-bundle-serious-null-method`
- `def-positive-spanning-poll-set-and-angle`
- `lem-compact-set-in-open-neighborhood-has-uniform-radius`
- `lem-direct-search-local-descent-inequality`
- `alg-deterministic-direct-search`
- `lem-nelder-mead-finite-budget-returns-status`
- `lem-positive-spanning-poll-set-has-uniform-angle`
- `lem-projected-subgradient-finite-budget-returns-status`
- `lem-projected-subgradient-one-step-estimate`
- `lem-proximal-bundle-subproblem-has-unique-minimizer`
- `lem-proximal-objective-has-quadratic-growth-from-minimizer`
- `lem-direct-search-finite-budget-returns-status`
- `lem-proximal-bundle-finite-budget-returns-status`
- `thm-direct-search-unsuccessful-poll-accumulations-are-stationary`
- `thm-projected-subgradient-best-and-average-bound`
- `cor-projected-subgradient-fixed-step-square-root-rate`
- `lem-aggregate-model-error-controls-proximal-candidate`
- `thm-proximal-bundle-accumulation-under-accurate-aggregate-model`
- `ex-nelder-mead-flat-plateau-stagnation`
- `ex-black-box-simulator-direct-search-fit`
- `ex-max-affine-bundle-null-and-serious-steps`

### Page prerequisite context

Opened the three page-level prerequisites named by the A-page manifest: `matrix-norms-condition-numbers-and-numerical-stability`, `inequality-kkt-duality-and-optimality-certificates`, and `proximal-gradient-and-accelerated-composite-optimization`.

### Item suppliers consulted

Opened the relevant definitions, statements, or proof clauses for the cited suppliers below:

- Euclidean and finite-list foundations: `def-euclidean-inner-product`, `def-finite-sum`, `def-linear-combination-and-span`, `lem-finite-sum-laws`, `lem-finite-set-has-max`, `def-max-min`, `lem-standard-basis-of-f-n`, `thm-reals-ordered-field`, and `lem-of-zero-mult`.
- Convexity, subgradients, and projection: `def-subgradient-and-subdifferential`, `def-convex-and-strictly-convex-functions-on-euclidean-sets`, `def-convex-subset-of-euclidean-space`, `def-metric-interior-closure-boundary`, `thm-nearest-point-in-a-nonempty-closed-convex-set`, `lem-projection-onto-a-closed-convex-set-has-the-variational-inequality`, and `thm-finite-jensen-inequality-in-euclidean-space`.
- Metric, compactness, and extrema: `def-metric-space`, `def-metric-ball`, `def-metric-topology`, `def-metric-compactness`, `def-metric-continuity`, `def-metric-bounded-diameter`, `lem-metrics-on-rn`, `lem-compactness-is-intrinsic`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-heine-borel-rn`, `thm-extreme-value-metric`, `def-sequence`, `def-metric-convergence`, `lem-metric-limits-unique`, and `thm-compact-implies-the-other-compactness-forms`.
- Differentiability and direct-search estimates: `def-total-derivative-in-euclidean-space`, `def-jacobian-matrix-and-gradient`, `def-directional-and-partial-derivatives`, `def-derivative`, `def-lipschitz-holder-contraction`, `thm-gradient-represents-directional-derivatives-and-steepest-ascent`, `thm-total-differentiability-gives-a-local-linear-bound-and-continuity`, `thm-total-derivative-computes-directional-and-partial-derivatives`, `lem-euclidean-linear-maps-have-matrices-and-are-bounded`, `cor-mean-value-theorem`, `thm-algebra-of-derivatives`, and `thm-algebra-of-continuous-functions`.
- Proximal definitions and suppliers: `def-proper-closed-convex-function-on-rn`, `def-proximal-mapping`, `def-extended-real-epsilon-subdifferential`, `thm-proximal-operator-existence-resolvent-firm-nonexpansive`, `lem-proper-closed-convex-function-affine-minorant`, `lem-smooth-composite-sum-preserves-proper-closed-convexity`, `thm-euclidean-semicontinuous-extreme-value-theorem`, and `thm-euclidean-semicontinuity-level-set-characterisations`.

## Review and verdicts

### A page: `subgradient-bundle-and-derivative-free-optimization`

**Verdict: no defect found in the page summary or its assigned mathematical items.** The summary distinguishes finite-budget statuses from convergence results and gives the hypotheses used by the projected-subgradient bound, direct-search stationarity theorem, and conditional proximal-bundle accumulation theorem. The audited calculations and proofs preserve their stated domains and assumptions. The Nelder–Mead item makes no convergence claim, consistent with its finite-budget status lemma and plateau example.

### B page: `subgradient-bundle-and-derivative-free-optimization-examples`

**Verdict: no defect found in the page summary or its assigned examples.** The summary matches the three examples' exact calculations and does not turn a finite return into a stationarity or global-optimality guarantee.

## Edits and unresolved defects

- No edits were made. No confirmed defect requiring repair or withdrawal was found in the assigned items or page prose.
- No uneditable defect was found in the relevant supplier statements and proof clauses inspected.
- No reader-side blocker prevented review of the assigned carriers.

## Coverage limitation

The 23 assigned items were read in manifest dependency-level order, and the cited supplier claims used to check their arguments were inspected. Some transitive prerequisites of `thm-proximal-operator-existence-resolvent-firm-nonexpansive` were opened after its assigned consumers; their relevant statements and proofs were then checked. This report does not claim an independent audit of every transitive foundational proof behind all cited published suppliers.
