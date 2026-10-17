# Step 5 adjudication — group **aa**, run `numerical-optimization-dynamics-2026-10-16`

You are the group Alpha for batches 70, 71, 72: 3 A/B pair(s), 6 page(s), 49 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **70**: `research/numerical-optimization-dynamics-2026-10-16-batch-70-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **71**: `research/numerical-optimization-dynamics-2026-10-16-batch-71-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **72**: `research/numerical-optimization-dynamics-2026-10-16-batch-72-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 70 | `nonlinear-conjugate-gradient-methods` | A | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2424 | `krylov-methods-and-lanczos-convergence`, `nonconvex-line-search-and-inexact-newton-methods` |
| 70 | `nonlinear-conjugate-gradient-methods-examples` | B | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2425 | `nonlinear-conjugate-gradient-methods` |
| 71 | `bfgs-and-limited-memory-quasi-newton-methods` | A | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2426 | `finite-precision-direct-factorizations`, `nonconvex-line-search-and-inexact-newton-methods` |
| 71 | `bfgs-and-limited-memory-quasi-newton-methods-examples` | B | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2427 | `bfgs-and-limited-memory-quasi-newton-methods` |
| 72 | `trust-region-and-cubic-regularization-methods` | A | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2428 | `krylov-methods-and-lanczos-convergence`, `nonconvex-line-search-and-inexact-newton-methods` |
| 72 | `trust-region-and-cubic-regularization-methods-examples` | B | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2429 | `trust-region-and-cubic-regularization-methods` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `nonlinear-conjugate-gradient-methods` — Nonlinear conjugate gradient methods (7 item(s))

- `alg-nonlinear-conjugate-gradient-methods` · algorithm — Fletcher–Reeves and safeguarded Polak–Ribière nonlinear conjugate gradients
- `lem-fr-descent-and-direction-growth-bound` · lemma — Fletcher–Reeves descent and direction-growth bound
- `lem-safeguarded-pr-plus-uniform-angle` · lemma — The safeguarded PR+ direction has a uniform angle bound
- `thm-nonlinear-cg-finite-budget-terminates` · theorem — Finite-budget nonlinear conjugate gradient returns a status
- `thm-fr-and-raw-prplus-exact-line-search-match-linear-cg` · theorem — FR and unrestarted PR+ match linear CG on SPD quadratics
- `thm-fletcher-reeves-liminf-gradient-under-strong-wolfe` · theorem — Fletcher–Reeves has vanishing gradient liminf under strong Wolfe
- `thm-safeguarded-pr-plus-gradient-norms-converge` · theorem — Safeguarded PR+ converges in gradient norm under strong Wolfe

### `nonlinear-conjugate-gradient-methods-examples` — Nonlinear conjugate gradient methods — Examples (3 item(s))

- `ex-rosenbrock-fr-prplus-trace` · example — One accepted Rosenbrock step gives different FR and PR+ coefficients
- `cex-raw-prplus-loses-descent-and-safeguard-restarts` · counterexample — A strong Wolfe step can leave PR+ ascending; the safeguard restarts
- `ex-spd-quadratic-nonlinear-cg-matches-linear-cg` · example — A two-dimensional SPD quadratic gives the same FR and linear-CG trace

### `bfgs-and-limited-memory-quasi-newton-methods` — Bfgs and limited memory quasi newton methods (15 item(s))

- `def-bfgs-curvature-pair-and-update-formulas` · definition — Bfgs curvature pairs and Hessian/inverse updates
- `lem-bfgs-hessian-bounds-control-gradient-and-taylor-remainder` · lemma — Uniform Hessian bounds control gradient changes and Taylor remainders
- `lem-bfgs-updates-preserve-secant-symmetry-and-spd` · lemma — Bfgs updates preserve the secant equations, symmetry, and positive definiteness
- `lem-wolfe-steps-give-positive-bfgs-curvature` · lemma — A Wolfe step gives positive Bfgs curvature on a descent direction
- `lem-powell-damping-gives-positive-curvature` · lemma — Powell damping gives a strictly positive curvature pair
- `alg-bfgs-hessian-direction-with-rounded-cholesky` · algorithm — Bfgs Hessian direction by failure-aware Cholesky solve
- `alg-lbfgs-two-loop-with-curvature-filter` · algorithm — Limited-memory Bfgs two-loop recursion with curvature filtering
- `lem-bfgs-trace-determinant-potential-identities` · lemma — Bfgs trace and determinant identities give a matrix potential inequality
- `alg-full-memory-bfgs-with-curvature-safeguards` · algorithm — Full-memory Bfgs with Wolfe search, descent reset, and Powell damping
- `lem-lbfgs-two-loop-equals-stored-updates-and-cost` · lemma — The L-Bfgs two-loop recursion equals the stored inverse updates and costs linear memory work
- `thm-full-memory-bfgs-global-linear-convergence` · theorem — Full-memory Bfgs converges globally and linearly on a uniformly strongly convex level set
- `lem-lbfgs-curvature-bounds-imply-uniform-spectrum` · lemma — Fixed-memory L-Bfgs curvature and scale bounds imply uniform spectral bounds
- `lem-full-memory-bfgs-dennis-more-condition` · lemma — Locally Lipschitz Hessians give the BFGS Dennis–Moré condition
- `thm-lbfgs-fixed-memory-linear-convergence` · theorem — Fixed-memory L-Bfgs converges linearly under uniform curvature and scale bounds
- `thm-full-memory-bfgs-local-superlinear-convergence` · theorem — Full-memory Bfgs is locally superlinear when the Hessian is Lipschitz

### `bfgs-and-limited-memory-quasi-newton-methods-examples` — Bfgs and limited memory quasi newton methods — Examples (3 item(s))

- `ex-bfgs-secant-on-a-strongly-convex-quadratic` · example — An exact Bfgs secant update on a two-variable quadratic
- `ex-bfgs-powell-damping-after-negative-curvature` · example — Powell damping repairs a negative-curvature trial pair
- `ex-lbfgs-memory-dependent-cost` · example — Full-memory and limited-memory storage costs

### `trust-region-and-cubic-regularization-methods` — Trust region and cubic regularization methods (18 item(s))

- `def-trust-region-quadratic-model-and-ratio` · definition — Quadratic trust-region models and the actual-to-predicted reduction ratio
- `def-adaptive-cubic-regularization-model` · definition — The cubic-regularized quadratic model
- `lem-natural-logarithm-bounded-by-argument` · lemma — The natural logarithm is bounded above by its positive argument minus one
- `lem-trust-region-subproblem-optimality-and-hard-case` · lemma — Global trust-region minimizers satisfy the shifted-Hessian conditions, including the hard case
- `alg-trust-region-cauchy-step` · algorithm — The Cauchy step for a quadratic trust-region model
- `lem-positive-definite-model-has-unique-newton-step` · lemma — Positive-definite Newton and dogleg steps are well-defined
- `lem-global-cubic-model-minimizer-decrease` · lemma — Global cubic minimizers, admissible inexact steps, and cubic Cauchy decrease
- `lem-trust-region-cauchy-decrease` · lemma — The Cauchy step gives a quantitative model decrease
- `alg-dogleg-trust-region-step` · algorithm — Dogleg steps for positive-definite trust-region models
- `alg-truncated-cg-trust-region-step` · algorithm — Truncated conjugate gradients with boundary and negative-curvature exits
- `alg-adaptive-cubic-regularization` · algorithm — Finite-budget adaptive regularization using cubic models
- `lem-truncated-cg-iterates-are-krylov-vectors` · lemma — Truncated-CG iterates are feasible and lie in generated Krylov subspaces
- `alg-trust-region-method` · algorithm — A finite-budget trust-region method with ratio-based radius updates
- `lem-trust-region-ratio-accuracy-for-small-radii` · lemma — The actual-to-predicted ratio approaches one at small radii away from stationarity
- `lem-adaptive-cubic-unsuccessful-iteration-count` · lemma — Cubic regularization bounds consecutive unsuccessful trials
- `thm-trust-region-global-liminf-gradient` · theorem — Cauchy-decrease trust-region iterations have liminf gradient norm zero
- `thm-trust-region-epsilon-iteration-complexity` · theorem — Trust-region first-order complexity counts both successful and unsuccessful trials
- `thm-adaptive-cubic-regularization-epsilon-complexity` · theorem — Adaptive cubic regularization reaches first-order accuracy in O(ε⁻³ᐟ²) evaluations

### `trust-region-and-cubic-regularization-methods-examples` — Trust region and cubic regularization methods — Examples (3 item(s))

- `ex-indefinite-trust-region-boundary-minimizer` · example — An indefinite quadratic has a unique boundary trust-region minimizer
- `ex-trust-region-singular-hard-case` · example — A singular shifted Hessian produces two hard-case minimizers
- `ex-trust-region-newton-cauchy-truncated-cg` · example — Newton, Cauchy, and truncated-CG steps on one indefinite model

## Your seams

Your pages depend on another group's:

- `nonlinear-conjugate-gradient-methods` requires `krylov-methods-and-lanczos-convergence` (group q, batch 34)
- `nonlinear-conjugate-gradient-methods` requires `nonconvex-line-search-and-inexact-newton-methods` (group y, batch 58)
- `bfgs-and-limited-memory-quasi-newton-methods` requires `finite-precision-direct-factorizations` (group m, batch 1)
- `bfgs-and-limited-memory-quasi-newton-methods` requires `nonconvex-line-search-and-inexact-newton-methods` (group y, batch 58)
- `trust-region-and-cubic-regularization-methods` requires `krylov-methods-and-lanczos-convergence` (group q, batch 34)
- `trust-region-and-cubic-regularization-methods` requires `nonconvex-line-search-and-inexact-newton-methods` (group y, batch 58)

Another group's pages depend on yours:

- `riemannian-optimization-on-stiefel-and-grassmann-manifolds` (group ab) requires your `trust-region-and-cubic-regularization-methods`
- `gauss-newton-and-levenberg-marquardt-methods` (group ab) requires your `trust-region-and-cubic-regularization-methods`
- `sqp-active-set-and-augmented-lagrangian-methods` (group ac) requires your `bfgs-and-limited-memory-quasi-newton-methods`
- `minimum-energy-paths-string-neb-and-saddle-certificates` (group ac) requires your `trust-region-and-cubic-regularization-methods`
- `finite-basis-projector-energies-and-variational-electronic-structure` (group ad) requires your `trust-region-and-cubic-regularization-methods`

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
