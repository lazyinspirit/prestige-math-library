# Step 5 adjudication — group **c**, run `numerical-optimization-dynamics-2026-10-16`

You are the group Alpha for batches 28, 29, 30: 3 A/B pair(s), 6 page(s), 37 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **28**: `research/numerical-optimization-dynamics-2026-10-16-batch-28-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **29**: `research/numerical-optimization-dynamics-2026-10-16-batch-29-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **30**: `research/numerical-optimization-dynamics-2026-10-16-batch-30-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 28 | `global-ode-and-density-error` | A | numerical-differential-equations-and-stochastic-dynamics | 2340 | `picard-lindelof-and-first-order-odes`, `one-step-ode-consistency-and-local-error`, `product-measures-and-the-fubini-tonelli-theorems`, `euclidean-ordinary-differential-equations-with-smooth-dependence` |
| 28 | `global-ode-and-density-error-examples` | B | numerical-differential-equations-and-stochastic-dynamics | 2341 | `global-ode-and-density-error` |
| 29 | `pseudo-arclength-continuation-and-fold-certificates` | A | numerical-differential-equations-and-stochastic-dynamics | 2342 | `the-inverse-function-theorem-completed`, `nonlinear-equations-and-newton-methods` |
| 29 | `pseudo-arclength-continuation-and-fold-certificates-examples` | B | numerical-differential-equations-and-stochastic-dynamics | 2343 | `pseudo-arclength-continuation-and-fold-certificates` |
| 30 | `adaptive-stochastic-paths-and-brownian-bridge-coupling` | A | numerical-differential-equations-and-stochastic-dynamics | 2344 | `euler-maruyama-scheme-and-conditions`, `milstein-stochastic-taylor-and-iterated-integrals` |
| 30 | `adaptive-stochastic-paths-and-brownian-bridge-coupling-examples` | B | numerical-differential-equations-and-stochastic-dynamics | 2345 | `adaptive-stochastic-paths-and-brownian-bridge-coupling` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `global-ode-and-density-error` — Global ODE and Log-density Integration Error (6 item(s))

- `lem-discrete-one-step-error-recurrence-bound` · lemma — Finite geometric error bound from a one-step recurrence
- `thm-continuous-flow-log-density-equation` · theorem — A continuous flow changes log density by minus its divergence
- `thm-global-error-from-one-step-defect-and-stability` · theorem — Global error from uniform one-step defect and stability
- `thm-divergence-integral-error-with-separate-quadrature` · theorem — Global divergence-integral error separates state and quadrature error
- `cor-global-log-density-error-from-state-and-quadrature` · corollary — Global continuous-flow log-density error from state and quadrature bounds
- `thm-euler-global-state-and-log-density-error` · theorem — Euler global state and log-density error on a bounded C² tube

### `global-ode-and-density-error-examples` — Global ODE and Log-density Integration Error — Examples (2 item(s))

- `ex-euler-linear-flow-exact-log-density-update` · example — Euler has state error but exact log-density quadrature for a linear flow
- `ex-exact-state-with-inexact-log-density-quadrature` · example — Zero state error can coexist with nonzero log-density quadrature error

### `pseudo-arclength-continuation-and-fold-certificates` — Pseudo arclength continuation and fold certificates (10 item(s))

- `def-simple-fold-complement-splitting-and-projection` · definition — Complement splitting and range projection for a simple fold
- `lem-pseudo-arclength-border-matrix-invertibility-and-inverse-bound` · lemma — Invertibility and a norm bound for the pseudo-arclength bordered matrix
- `thm-augmented-residual-contraction-certificate` · theorem — A bounded residual and derivative error give a local root certificate
- `lem-regular-curve-chart-and-pseudo-arclength-predictor-defect` · lemma — A regular solution curve has a unique local arclength chart and a quadratic predictor defect
- `lem-simple-fold-complement-restriction-is-an-isomorphism` · lemma — The simple-fold complement restriction is an isomorphism
- `lem-transverse-hyperplane-selects-unique-local-branch-point` · lemma — A transverse predictor hyperplane selects one nearby point of a regular branch
- `thm-simple-fold-lyapunov-schmidt-parameterization` · theorem — A simple fold has a unique local Lyapunov–Schmidt chart and nonzero parameter curvature
- `thm-pseudo-arclength-local-newton-correction` · theorem — A transverse pseudo-arclength section has a locally quadratic Newton corrector
- `alg-pseudo-arclength-continuation-with-certified-local-corrector` · algorithm — Finite-budget pseudo-arclength continuation with a certified local corrector
- `thm-pseudo-arclength-finite-trace-partial-correctness-and-termination` · theorem — Certified pseudo-arclength traces are locally sound and conditionally terminate

### `pseudo-arclength-continuation-and-fold-certificates-examples` — Pseudo arclength continuation and fold certificates — Examples (4 item(s))

- `ex-zero-tangent-angle-makes-bordered-corrector-singular` · example — A zero tangent angle makes the bordered corrector singular
- `ex-natural-parameterization-fails-at-x-squared-fold` · example — The natural parameter fails at the fold $x^2-\lambda=0$
- `ex-local-trace-misses-disconnected-branch` · example — A finite local trace misses a disconnected solution branch
- `ex-pseudo-arclength-crosses-x-squared-fold` · example — Pseudo arclength crosses the fold $x^2-\lambda=0$

### `adaptive-stochastic-paths-and-brownian-bridge-coupling` — Adaptive stochastic paths and brownian bridge coupling (12 item(s))

- `alg-dyadic-brownian-bridge-increment-tree` · algorithm — Dyadic Brownian bridge increment tree
- `thm-dyadic-brownian-bridge-tree-increment-laws` · theorem — Exact increment laws in the dyadic Brownian bridge tree
- `def-predictable-stopping-time-grid` · definition — Predictable stopping-time grid
- `lem-continuous-adapted-process-at-bounded-stopping-time` · lemma — Continuous adapted processes are measurable at bounded stopping times
- `lem-stopping-time-ito-step-interval-sum` · lemma — Itô integral of a step on a stopping-time interval
- `alg-adaptive-euler-maruyama-on-predictable-grid` · algorithm — Euler–Maruyama on a predictable grid with bridge-refinement status
- `lem-finite-budget-adaptive-em-status` · lemma — A finite adaptive Euler–Maruyama budget returns a status
- `lem-adaptive-em-predictable-grid-second-moment` · lemma — Uniform second moment for Euler–Maruyama on predictable grids
- `thm-adaptive-em-predictable-grid-strong-error` · theorem — Strong error bound for Euler–Maruyama on a predictable grid
- `def-scalar-brownian-bridge-from-x-to-y` · definition — Scalar Brownian bridge from x to y
- `lem-scalar-brownian-bridge-restriction-density` · lemma — Endpoint law and restriction density of a scalar Brownian bridge
- `thm-scalar-brownian-bridge-barrier-crossing-probability` · theorem — Scalar Brownian bridge barrier-crossing probability

### `adaptive-stochastic-paths-and-brownian-bridge-coupling-examples` — Adaptive stochastic paths and brownian bridge coupling — Examples (3 item(s))

- `ex-redrawing-rejected-increment-biases-path` · example — Redrawing a rejected Brownian increment biases the path
- `ex-coarse-fine-em-bridge-coupling` · example — Coarse and fine Euler paths coupled by a bridge split
- `ex-brownian-bridge-barrier-missed-by-endpoints` · example — A Brownian bridge can cross a barrier missed by its endpoints

## Your seams

Your pages depend on another group's:

- `global-ode-and-density-error` requires `one-step-ode-consistency-and-local-error` (group a, batch 7)
- `pseudo-arclength-continuation-and-fold-certificates` requires `nonlinear-equations-and-newton-methods` (group u, batch 3)
- `adaptive-stochastic-paths-and-brownian-bridge-coupling` requires `milstein-stochastic-taylor-and-iterated-integrals` (group a, batch 9)

Another group's pages depend on yours:

- `runge-kutta-methods-and-order` (group d) requires your `global-ode-and-density-error`
- `local-bifurcation-normal-forms-and-numerical-certificates` (group e) requires your `pseudo-arclength-continuation-and-fold-certificates`
- `delay-differential-equations-and-history-discretization` (group e) requires your `global-ode-and-density-error`
- `finite-generator-master-equations-and-uniformization` (group f) requires your `global-ode-and-density-error`
- `periodic-orbit-shooting-collocation-and-floquet-error` (group g) requires your `pseudo-arclength-continuation-and-fold-certificates`
- `implicit-stiff-time-stepping-and-algebraic-error` (group h) requires your `global-ode-and-density-error`
- `positive-conservative-production-destruction-integrators` (group j) requires your `global-ode-and-density-error`
- `renewal-age-and-size-structured-numerical-methods` (group j) requires your `global-ode-and-density-error`
- `coagulation-fragmentation-and-sectional-population-balance-numerics` (group k) requires your `global-ode-and-density-error`
- `exponential-and-integrating-factor-integrators` (group k) requires your `global-ode-and-density-error`
- `deferred-correction-and-collocation-iterations` (group k) requires your `global-ode-and-density-error`
- `imex-and-operator-splitting-methods` (group l) requires your `global-ode-and-density-error`
- `multirate-and-partitioned-time-integration` (group l) requires your `global-ode-and-density-error`
- `discrete-continuous-and-pde-adjoint-sensitivities` (group ad) requires your `global-ode-and-density-error`
- `interacting-particle-mean-field-and-vortex-blob-error` (group ai) requires your `global-ode-and-density-error`

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
