# Step 5 adjudication — group **y**, run `numerical-optimization-dynamics-2026-10-16`

You are the group Alpha for batches 41, 58, 59: 3 A/B pair(s), 6 page(s), 58 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **41**: `research/numerical-optimization-dynamics-2026-10-16-batch-41-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **58**: `research/numerical-optimization-dynamics-2026-10-16-batch-58-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **59**: `research/numerical-optimization-dynamics-2026-10-16-batch-59-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/numerical-optimization-dynamics-2026-10-16-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 41 | `coordinate-and-block-descent-methods` | A | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2366 | `sparse-high-dimensional-estimation-and-covariance`, `proximal-gradient-and-accelerated-composite-optimization` |
| 41 | `coordinate-and-block-descent-methods-examples` | B | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2367 | `coordinate-and-block-descent-methods` |
| 58 | `nonconvex-line-search-and-inexact-newton-methods` | A | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2400 | `nonlinear-equations-and-newton-methods`, `krylov-methods-and-lanczos-convergence`, `numerical-optimization-globalization-and-inexact-certificates` |
| 58 | `nonconvex-line-search-and-inexact-newton-methods-examples` | B | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2401 | `nonconvex-line-search-and-inexact-newton-methods` |
| 59 | `barrier-and-primal-dual-interior-point-methods` | A | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2402 | `finite-precision-direct-factorizations`, `inequality-kkt-duality-and-optimality-certificates`, `numerical-optimization-globalization-and-inexact-certificates`, `response-surfaces-and-optimal-design` |
| 59 | `barrier-and-primal-dual-interior-point-methods-examples` | B | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2403 | `barrier-and-primal-dual-interior-point-methods` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `coordinate-and-block-descent-methods` — Coordinate and block descent methods (17 item(s))

- `alg-randomized-coordinate-gradient-descent` · algorithm — Randomized coordinate gradient descent
- `lem-coordinate-block-smoothness-descent-model` · lemma — Coordinate-block smoothness descent model
- `lem-na-coordinate-soft-threshold-minimizer` · lemma — The one-coordinate absolute-value quadratic minimizer
- `alg-cyclic-exact-block-minimization` · algorithm — Cyclic exact block minimization
- `thm-randomized-coordinate-gradient-descent-rates` · theorem — Rates for randomized coordinate gradient descent and importance sampling
- `lem-cyclic-block-minimizer-value-continuity` · lemma — Continuity of the cyclic block-minimum value
- `cex-cyclic-block-descent-may-cycle-outside-hypotheses` · counterexample — Cyclic exact block minimization can cycle outside the convex separable hypotheses
- `lem-coordinate-lasso-soft-threshold-update` · lemma — Exact Lasso coordinate update, including a zero column
- `lem-coordinate-separable-penalty-is-proper-closed-convex` · lemma — Finite separable block penalties are proper, closed, and convex
- `alg-randomized-coordinate-proximal-descent` · algorithm — Randomized proximal coordinate descent with certified inner solves
- `lem-coordinatewise-minimum-implies-composite-stationarity` · lemma — Coordinatewise minima of a separable convex composite are global minima
- `lem-randomized-coordinate-prox-subproblem-well-defined` · lemma — Coordinate proximal subproblems are attained uniquely and descend
- `cex-composite-coordinate-proximal-rate-needs-penalty-error` · counterexample — An R-only proximal coordinate rate fails for nonsmooth penalties
- `cex-composite-strong-convexity-alone-does-not-give-coordinate-factor` · counterexample — Strong convexity of the composite alone does not give the stated coordinate factor
- `thm-cyclic-block-descent-stationarity-and-convergence` · theorem — Cyclic exact block descent has globally optimal accumulation points
- `thm-randomized-coordinate-proximal-strongly-convex-contraction` · theorem — Strongly convex smooth-part proximal coordinate contraction
- `thm-randomized-coordinate-proximal-composite-strong-convexity-contraction` · theorem — Proximal coordinate contraction from strong convexity of the composite

### `coordinate-and-block-descent-methods-examples` — Coordinate and block descent methods — Examples (5 item(s))

- `ex-nonunique-lasso-coefficients-unique-fitted-value` · example — Nonunique Lasso coefficients with a unique fitted value
- `ex-randomized-versus-cyclic-rank-one-quadratic` · example — Randomized and cyclic updates on a rank-one quadratic
- `ex-two-block-simulation-calibration` · example — A two-block least-squares calibration sweep
- `ex-correlated-design-lasso-coordinate-cycle` · example — One cyclic coordinate-descent cycle for correlated-design Lasso
- `ex-zero-feature-column-lasso-coordinate` · example — The zero-feature-column Lasso update

### `nonconvex-line-search-and-inexact-newton-methods` — Nonconvex line search and inexact newton methods (11 item(s))

- `def-wolfe-and-strong-wolfe-conditions` · definition — Wolfe and strong Wolfe line-search conditions
- `lem-strong-wolfe-step-exists-on-a-bounded-below-ray` · lemma — A strong Wolfe step exists on a bounded-below descent ray
- `alg-bracketing-zoom-strong-wolfe-search` · algorithm — Finite-budget bracketing and zoom for a strong Wolfe step
- `lem-bracketing-zoom-finite-budget-checked-return` · lemma — Bracketing and zoom terminate with a checked step or a failure
- `lem-wolfe-step-lower-bound-from-the-descent-angle` · lemma — A Wolfe step has a lower bound from its descent angle
- `thm-zoutendijk-summability-for-wolfe-steps` · theorem — Wolfe steps imply the Zoutendijk summability condition
- `cor-uniform-descent-angle-implies-gradient-vanishing` · corollary — A uniform descent angle makes the Wolfe gradient norms vanish
- `alg-inexact-newton-krylov-with-descent-safeguard` · algorithm — Finite-budget inexact Newton–Krylov with a descent safeguard
- `lem-inexact-newton-krylov-finite-budget-checked-return` · lemma — Safeguarded inexact Newton has a finite checked-return bound
- `lem-inexact-newton-error-recurrence-under-lipschitz-jacobian` · lemma — An inexact Newton residual gives a local error recurrence
- `thm-inexact-newton-local-forcing-rates` · theorem — Forcing residuals determine local inexact-Newton rates

### `nonconvex-line-search-and-inexact-newton-methods-examples` — Nonconvex line search and inexact newton methods — Examples (3 item(s))

- `ex-rosenbrock-newton-step-satisfies-strong-wolfe` · example — The standard Rosenbrock start accepts a full Newton step
- `ex-rosenbrock-indefinite-hessian-requires-descent-safeguard` · example — An indefinite Rosenbrock Hessian makes the raw Newton direction ascend
- `ex-inexact-newton-forcing-tolerance-cost-and-rate` · example — A scalar inexact Newton solve trades inner work for outer error

### `barrier-and-primal-dual-interior-point-methods` — Barrier and primal dual interior point methods (16 item(s))

- `def-self-concordant-log-homogeneous-barrier` · definition — Self-concordant log-homogeneous barriers and their local geometry
- `def-conic-optimization-primal-dual-models` · definition — Conic, LP, and convex QP primal-dual models
- `lem-self-concordant-local-newton-calculus` · lemma — Local Hessian comparison, damped Newton decrement, and center distance
- `lem-nonnegative-orthant-log-barrier` · lemma — The orthant logarithmic barrier has parameter equal to its dimension
- `lem-lorentz-cone-log-barrier` · lemma — The Lorentz logarithmic barrier has parameter two
- `lem-psd-cone-self-dual-logdet-barrier` · lemma — The positive semidefinite cone is self-dual and its log determinant barrier has parameter n
- `lem-loghom-barrier-gradient-is-dual` · lemma — The negative gradient of a log-homogeneous cone barrier is dual feasible
- `def-barrier-central-path-and-newton-residuals` · definition — Log-barrier central paths and primal-dual Newton residuals
- `thm-phase-i-margin-status-and-weak-infeasibility` · theorem — The conic phase-I margin separates strict feasibility but may leave weak infeasibility undecided
- `thm-central-path-barrier-gap-and-dual-certificate` · theorem — Exact central points have barrier gap m/t or nu/t
- `alg-short-step-self-concordant-path-following` · algorithm — Short-step self-concordant path following with finite failure statuses
- `thm-inexact-central-path-distance-and-gap-certificate` · theorem — A verified inexact gradient residual bounds central-path distance and objective error
- `thm-short-step-complexity-and-primal-gap-bound` · theorem — Short-step path following takes $O(\sqrt{\nu}\log(\nu/(\varepsilon t_0)))$ Newton steps
- `lem-primal-dual-lp-qp-newton-matrix-nonsingular` · lemma — The LP/QP primal-dual Newton matrix is nonsingular from a strict positive start
- `alg-primal-dual-newton-residual-method-for-lp-qps-and-symmetric-cones` · algorithm — Finite-budget primal-dual Newton methods for LP, convex QP, and symmetric cones
- `thm-fraction-to-boundary-and-primal-dual-gap-certificates` · theorem — Fraction-to-boundary steps preserve positivity and exact primal-dual feasibility certifies a gap

### `barrier-and-primal-dual-interior-point-methods-examples` — Barrier and primal dual interior point methods — Examples (6 item(s))

- `ex-robust-least-squares-as-a-second-order-cone-program` · example — Norm-bounded robust least squares as an SOCP
- `ex-boundary-barrier-conditioning` · example — A central path approaches the boundary and the Hessian conditioning diverges
- `ex-strict-versus-weak-semidefinite-feasibility` · example — Strict feasibility, boundary feasibility, and a weakly infeasible SDP
- `ex-resource-allocation-barrier-central-path` · example — A two-resource allocation LP and its central path
- `ex-lp-primal-dual-residual-and-gap` · example — An LP primal-dual residual and exact gap certificate
- `ex-small-semidefinite-relaxation-primal-dual-certificate` · example — A two-variable semidefinite relaxation with a matching dual certificate

## Your seams

Your pages depend on another group's:

- `coordinate-and-block-descent-methods` requires `proximal-gradient-and-accelerated-composite-optimization` (group w, batch 27)
- `nonconvex-line-search-and-inexact-newton-methods` requires `nonlinear-equations-and-newton-methods` (group u, batch 3)
- `nonconvex-line-search-and-inexact-newton-methods` requires `krylov-methods-and-lanczos-convergence` (group q, batch 34)
- `nonconvex-line-search-and-inexact-newton-methods` requires `numerical-optimization-globalization-and-inexact-certificates` (group x, batch 39)
- `barrier-and-primal-dual-interior-point-methods` requires `finite-precision-direct-factorizations` (group m, batch 1)
- `barrier-and-primal-dual-interior-point-methods` requires `inequality-kkt-duality-and-optimality-certificates` (group u, batch 6)
- `barrier-and-primal-dual-interior-point-methods` requires `numerical-optimization-globalization-and-inexact-certificates` (group x, batch 39)

Another group's pages depend on yours:

- `global-optimization-and-certified-branch-and-bound` (group z) requires your `barrier-and-primal-dual-interior-point-methods`
- `nonlinear-conjugate-gradient-methods` (group aa) requires your `nonconvex-line-search-and-inexact-newton-methods`
- `bfgs-and-limited-memory-quasi-newton-methods` (group aa) requires your `nonconvex-line-search-and-inexact-newton-methods`
- `trust-region-and-cubic-regularization-methods` (group aa) requires your `nonconvex-line-search-and-inexact-newton-methods`
- `riemannian-optimization-on-stiefel-and-grassmann-manifolds` (group ab) requires your `nonconvex-line-search-and-inexact-newton-methods`
- `sqp-active-set-and-augmented-lagrangian-methods` (group ac) requires your `nonconvex-line-search-and-inexact-newton-methods`
- `direct-transcription-and-numerical-ode-optimal-control` (group ae) requires your `barrier-and-primal-dual-interior-point-methods`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/numerical-optimization-dynamics-2026-10-16-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-5 closure recovery, `numerical-optimization-dynamics-2026-10-16`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/step5-workflow.mjs`, `briefs/step5-adjudicator.md`
and `briefs/step5-owner-repair.md`. Follow those briefs
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
