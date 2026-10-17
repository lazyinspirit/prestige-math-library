# Step 5 adjudication — group **x**, run `numerical-optimization-dynamics-2026-10-16`

You are the group Alpha for batches 32, 39, 40: 3 A/B pair(s), 6 page(s), 54 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **32**: `research/numerical-optimization-dynamics-2026-10-16-batch-32-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **39**: `research/numerical-optimization-dynamics-2026-10-16-batch-39-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **40**: `research/numerical-optimization-dynamics-2026-10-16-batch-40-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 32 | `spectral-regularization-and-parameter-choice` | A | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2348 | `the-moore-penrose-pseudoinverse-and-regularised-least-squares`, `numerical-inverse-problems-and-regularization-error`, `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` |
| 32 | `spectral-regularization-and-parameter-choice-examples` | B | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2349 | `spectral-regularization-and-parameter-choice` |
| 39 | `numerical-optimization-globalization-and-inexact-certificates` | A | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2362 | `convex-and-semicontinuous-functions-on-rn`, `nonlinear-equations-and-newton-methods`, `numerical-differentiation-and-derivative-error-control`, `numerical-optimization-for-statistical-computation` |
| 39 | `numerical-optimization-globalization-and-inexact-certificates-examples` | B | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2363 | `numerical-optimization-globalization-and-inexact-certificates` |
| 40 | `subgradient-bundle-and-derivative-free-optimization` | A | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2364 | `matrix-norms-condition-numbers-and-numerical-stability`, `inequality-kkt-duality-and-optimality-certificates`, `proximal-gradient-and-accelerated-composite-optimization` |
| 40 | `subgradient-bundle-and-derivative-free-optimization-examples` | B | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2365 | `subgradient-bundle-and-derivative-free-optimization` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `spectral-regularization-and-parameter-choice` — Spectral regularization and parameter choice (17 item(s))

- `alg-discrete-l-curve-parameter-choice` · algorithm — Discrete maximum-curvature L-curve parameter selection
- `lem-compact-gram-operator-is-positive-and-has-kernel` · lemma — A compact Hilbert-space Gram operator is positive and has the forward kernel
- `lem-compact-spectral-multiplier-is-well-defined` · lemma — Bounded multipliers on compact self-adjoint eigenspaces define bounded operators
- `lem-linear-smoother-gcv-expression` · lemma — The ridge leave-one-out identity yields the generalized cross-validation score
- `lem-square-summable-sequences-form-a-hilbert-space` · lemma — The real square-summable sequence space is complete
- `alg-gcv-finite-grid-parameter-choice` · algorithm — Finite-grid generalized cross-validation for Tikhonov regularization
- `def-compact-spectral-filter-and-qualification` · definition — Compact spectral filters, source conditions, and qualification
- `thm-discrete-l-curve-grid-search-is-well-defined` · theorem — The discrete L-curve rule terminates with failure or a maximum-curvature grid point
- `lem-tikhonov-bias-converges-for-minimum-norm-solution` · lemma — Compact-operator Tikhonov bias vanishes on the minimum-norm solution
- `lem-tikhonov-data-residual-continuity-monotonicity-and-limits` · lemma — Compact-operator Tikhonov residuals are continuous and increase from range distance to data norm
- `lem-tikhonov-source-condition-bias-bound` · lemma — Tikhonov has qualification one for source powers of the Gram operator
- `thm-gcv-grid-search-returns-score-minimizer` · theorem — Finite-grid GCV is well-defined and minimizes its supplied score
- `alg-morozov-discrepancy-bracketing-and-bisection` · algorithm — Exact-residual Morozov discrepancy bracketing and bisection
- `thm-tikhonov-convergence-under-noise-parameter-coupling` · theorem — Vanishing Tikhonov bias and controlled noise amplification imply convergence
- `thm-tikhonov-source-condition-rate-and-qualification-saturation` · theorem — Tikhonov source-condition rates balance noise at qualification one
- `thm-morozov-discrepancy-choice-converges` · theorem — Morozov discrepancy roots exist and converge for nonzero exact data
- `thm-tikhonov-forward-discretization-and-stopping-coupling` · theorem — Forward discretization enters before inversion and controls the Tikhonov parameter coupling

### `spectral-regularization-and-parameter-choice-examples` — Spectral regularization and parameter choice — Examples (3 item(s))

- `ex-gcv-under-smoothing-tie-on-one-observation` · example — A one-observation GCV tie can select severe undersmoothing
- `ex-compact-diagonal-tikhonov-bias-noise-and-source-saturation` · example — A compact diagonal model displays the Tikhonov bias-noise balance
- `ex-morozov-noise-level-underestimate-prevents-crossing` · example — Underestimated noise can put the Morozov target below every residual

### `numerical-optimization-globalization-and-inexact-certificates` — Numerical optimization globalization and inexact certificates (6 item(s))

- `alg-exact-gradient-line-search-step` · algorithm — Ideal exact gradient line-search step
- `lem-hessian-lower-bound-strong-convexity-gradient-gap` · lemma — A Hessian lower bound gives strong convexity and gradient-gap bounds
- `thm-exact-line-search-gradient-descent-global-contraction` · theorem — Exact gradient line search has a global objective-gap contraction
- `thm-armijo-gradient-descent-global-linear-rate` · theorem — Armijo gradient descent has an explicit global linear rate
- `thm-damped-newton-global-phase-and-local-quadratic-rate` · theorem — Damped Newton reaches its local quadratic phase in finitely many continued updates
- `thm-inexact-gradient-residual-distance-certificate` · theorem — An inexact gradient residual certifies distance under strong convexity

### `numerical-optimization-globalization-and-inexact-certificates-examples` — Numerical optimization globalization and inexact certificates — Examples (5 item(s))

- `ex-global-exact-line-search-on-an-anisotropic-quadratic` · example — Exact and Armijo rates on an anisotropic quadratic
- `ex-damped-newton-halves-step-before-local-phase` · example — A damped Newton step precedes the local quadratic phase
- `ex-small-gradient-can-hide-error-at-ill-conditioned-minimizer` · example — A small gradient can hide error when the minimizer is ill conditioned
- `ex-approximate-gradient-residual-distance-certificate` · example — A computed-gradient residual needs its discrepancy bound
- `ex-inner-quadrature-error-in-gradient-certificate` · example — Inner quadrature error enters an outer gradient certificate

### `subgradient-bundle-and-derivative-free-optimization` — Subgradient bundle and derivative free optimization (20 item(s))

- `alg-nelder-mead-finite-budget` · algorithm — Finite-budget Nelder–Mead simplex procedure
- `alg-projected-subgradient-method` · algorithm — Projected subgradient method with finite budget
- `alg-proximal-bundle-serious-null-method` · algorithm — Finite-memory-free proximal bundle method with serious and null steps
- `def-positive-spanning-poll-set-and-angle` · definition — Positive-spanning poll sets
- `lem-compact-set-in-open-neighborhood-has-uniform-radius` · lemma — A compact set inside an open set has a uniform neighborhood radius
- `lem-direct-search-local-descent-inequality` · lemma — Local descent inequality for a Lipschitz gradient on an open segment
- `alg-deterministic-direct-search` · algorithm — Finite-budget deterministic direct search with positive-spanning polling
- `lem-nelder-mead-finite-budget-returns-status` · lemma — Finite-budget Nelder–Mead always returns a status
- `lem-positive-spanning-poll-set-has-uniform-angle` · lemma — A finite positive-spanning poll set has a positive uniform angle
- `lem-projected-subgradient-finite-budget-returns-status` · lemma — The projected subgradient method returns within its finite budget
- `lem-projected-subgradient-one-step-estimate` · lemma — One-step estimate for projected subgradient descent
- `lem-proximal-bundle-subproblem-has-unique-minimizer` · lemma — The proximal bundle model subproblem has a unique minimizer
- `lem-proximal-objective-has-quadratic-growth-from-minimizer` · lemma — A quadratic regularization has quadratic growth from its minimizer
- `lem-direct-search-finite-budget-returns-status` · lemma — Deterministic direct search returns within its finite poll budget
- `lem-proximal-bundle-finite-budget-returns-status` · lemma — The proximal bundle method returns within its finite trial budget
- `thm-direct-search-unsuccessful-poll-accumulations-are-stationary` · theorem — Unsuccessful-poll accumulation points are stationary under shrinking mesh
- `thm-projected-subgradient-best-and-average-bound` · theorem — Projected subgradient best-iterate and weighted-average bound
- `cor-projected-subgradient-fixed-step-square-root-rate` · corollary — The fixed-step projected subgradient rate is O(1/√N)
- `lem-aggregate-model-error-controls-proximal-candidate` · lemma — Vanishing aggregate-model error controls the proximal candidate
- `thm-proximal-bundle-accumulation-under-accurate-aggregate-model` · theorem — Proximal bundle accumulation under vanishing aggregate-model error

### `subgradient-bundle-and-derivative-free-optimization-examples` — Subgradient bundle and derivative free optimization — Examples (3 item(s))

- `ex-nelder-mead-flat-plateau-stagnation` · example — Nelder–Mead can stop on a nonminimizing flat plateau
- `ex-black-box-simulator-direct-search-fit` · example — A black-box quadratic simulator fit using direct search
- `ex-max-affine-bundle-null-and-serious-steps` · example — A max-affine kink produces one null and one serious bundle step

## Your seams

Your pages depend on another group's:

- `spectral-regularization-and-parameter-choice` requires `numerical-inverse-problems-and-regularization-error` (group w, batch 25)
- `numerical-optimization-globalization-and-inexact-certificates` requires `nonlinear-equations-and-newton-methods` (group u, batch 3)
- `numerical-optimization-globalization-and-inexact-certificates` requires `numerical-differentiation-and-derivative-error-control` (group v, batch 12)
- `subgradient-bundle-and-derivative-free-optimization` requires `inequality-kkt-duality-and-optimality-certificates` (group u, batch 6)
- `subgradient-bundle-and-derivative-free-optimization` requires `proximal-gradient-and-accelerated-composite-optimization` (group w, batch 27)

Another group's pages depend on yours:

- `nonconvex-line-search-and-inexact-newton-methods` (group y) requires your `numerical-optimization-globalization-and-inexact-certificates`
- `barrier-and-primal-dual-interior-point-methods` (group y) requires your `numerical-optimization-globalization-and-inexact-certificates`
- `stochastic-approximation-and-stochastic-gradient-methods` (group z) requires your `numerical-optimization-globalization-and-inexact-certificates`
- `iterative-regularization-and-early-stopping` (group ac) requires your `spectral-regularization-and-parameter-choice`
- `minimum-energy-paths-string-neb-and-saddle-certificates` (group ac) requires your `numerical-optimization-globalization-and-inexact-certificates`

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

# Step 5 batch adjudication, `numerical-optimization-dynamics-2026-10-16`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
