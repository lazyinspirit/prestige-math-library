# Step 5 adjudication — group **v**, run `numerical-optimization-dynamics-2026-10-16`

You are the group Alpha for batches 8, 12, 13: 3 A/B pair(s), 6 page(s), 66 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **8**: `research/numerical-optimization-dynamics-2026-10-16-batch-8-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **12**: `research/numerical-optimization-dynamics-2026-10-16-batch-12-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **13**: `research/numerical-optimization-dynamics-2026-10-16-batch-13-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 8 | `rare-event-importance-sampling-and-multilevel-splitting` | A | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2300 | `feynman-kac-particle-filters`, `iid-monte-carlo-integration-and-error`, `importance-sampling-and-weight-diagnostics`, `smc-clts-error-and-degeneracy` |
| 8 | `rare-event-importance-sampling-and-multilevel-splitting-examples` | B | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2301 | `rare-event-importance-sampling-and-multilevel-splitting` |
| 12 | `numerical-differentiation-and-derivative-error-control` | A | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2308 | `matrix-norms-condition-numbers-and-numerical-stability`, `nonlinear-equations-and-newton-methods`, `polynomial-interpolation-and-remainder`, `analyticity-liouville-and-morera` |
| 12 | `numerical-differentiation-and-derivative-error-control-examples` | B | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2309 | `numerical-differentiation-and-derivative-error-control` |
| 13 | `automatic-differentiation-and-computational-graphs` | A | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2310 | `the-total-derivative`, `finite-precision-direct-factorizations`, `banach-space-differential-calculus-and-banach-manifolds` |
| 13 | `automatic-differentiation-and-computational-graphs-examples` | B | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2311 | `automatic-differentiation-and-computational-graphs` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `rare-event-importance-sampling-and-multilevel-splitting` — Rare event importance sampling and multilevel splitting (20 item(s))

- `def-rare-event-efficiency-criteria` · definition — Rare-event efficiency and work criteria
- `lem-standard-normal-mills-ratio` · lemma — Standard-normal Mills bounds and logarithmic tail asymptotics
- `alg-cross-entropy-pilot-production` · algorithm — Independent-pilot cross-entropy proposal fitting and production
- `def-nested-rare-event-levels` · definition — Nested rare-event levels and conditional laws
- `def-finite-budget-stopped-event-kernel` · definition — Finite-budget stopped-event kernel with a cemetery outcome
- `lem-sir-bounded-potential-unnormalized-update-variance` · lemma — A bounded-potential SIR update has a uniform unnormalized variance bound
- `thm-zero-variance-importance-sampling-proposal` · theorem — The event-conditioned proposal is the zero-variance benchmark
- `thm-gaussian-tail-exponential-tilting` · theorem — Gaussian tail tilting is logarithmically efficient but not bounded-relative-error
- `thm-cross-entropy-production-unbiased-given-pilot` · theorem — Independent cross-entropy production is conditionally unbiased
- `lem-nested-level-probability-factorization` · lemma — Nested-event probabilities factor into conditional levels
- `alg-independent-fixed-level-splitting` · algorithm — Independent fixed-level splitting
- `alg-fixed-level-sir-splitting` · algorithm — Full-resampling fixed-level SIR splitting with invariant mutations
- `lem-finite-budget-stopped-normalizer` · lemma — Finite-budget stopped-kernel measurability and event normalizer
- `lem-stopped-kernel-discretization-bias` · lemma — Truncation and total-variation errors for stopped crossings
- `thm-independent-splitting-product-moments-and-work` · theorem — Independent splitting estimator moments and work
- `thm-fixed-level-sir-estimator-unbiased` · theorem — Fixed-level full-resampling SIR splitting is unbiased
- `thm-fixed-level-sir-absolute-mse-bound` · theorem — Fixed-level SIR has an absolute O(L/N) mean-square bound
- `cex-sir-l2-bound-from-conditional-means-is-false` · counterexample — Conditional future means alone do not bound finite-particle SIR error
- `rem-sir-finite-particle-error-bound-scope` · remark — Finite-particle SIR absolute and relative error scope
- `thm-fixed-level-sir-relative-mse-under-conditional-event-second-moment-bounds` · theorem — Conditional event second moments give a finite-particle SIR relative MSE bound

### `rare-event-importance-sampling-and-multilevel-splitting-examples` — Rare event importance sampling and multilevel splitting — Examples (7 item(s))

- `ex-gaussian-barrier-exponential-tilting` · example — Gaussian barrier under the prescribed exponential tilt
- `ex-queue-overflow-and-redundant-splitting-work` · example — Two-stage queue overflow and a redundant split at equal work
- `ex-cross-entropy-pilot-misses-event-support` · example — A pilot with no rare-event hit returns failure
- `cex-dependent-level-samples-bias-product-estimator` · counterexample — Correct level marginals do not justify a dependent product
- `ex-sir-zero-particle-prefix-positive-event` · example — A zero-particle prefix does not prove a zero event probability
- `ex-finite-budget-crossing-misses-between-grid-times` · example — A finite grid can miss a continuous-time crossing
- `ex-importance-sampling-finite-mean-infinite-second-moment` · example — An unbiased importance-sampling weight can have infinite second moment

### `numerical-differentiation-and-derivative-error-control` — Numerical differentiation and derivative error control (12 item(s))

- `def-complex-step-derivative-estimator` · definition — The complex-step derivative estimator and its component-error model
- `def-finite-difference-stencils-and-evaluation-error-model` · definition — Forward and central difference stencils with bounded evaluation errors
- `def-jacobian-and-hessian-vector-difference-products` · definition — Forward and central finite-difference Jacobian-vector and Hessian-vector products
- `def-structural-column-coloring-for-sparse-jacobian-recovery` · definition — The column-interference graph and collision-free coloring for a sparse Jacobian
- `lem-central-difference-has-fourth-order-remainder-under-bounded-fifth-derivative` · lemma — A bounded fifth derivative gives the central-difference expansion required by Richardson extrapolation
- `thm-complex-step-derivative-has-second-order-error-under-holomorphy` · theorem — Complex-step differentiation is second-order for holomorphic functions real on the real axis
- `thm-forward-and-central-difference-truncation-and-evaluation-error-bounds` · theorem — Forward and central differences have first- and second-order error bounds
- `thm-jacobian-and-hessian-vector-products-have-truncation-and-noise-bounds` · theorem — Directional Jacobian and Hessian differences retain Taylor and evaluation-noise errors
- `thm-sparse-jacobian-is-recovered-by-a-proper-column-coloring` · theorem — A collision-free column coloring recovers every structurally sparse Jacobian entry
- `def-richardson-extrapolation-under-a-fourth-order-remainder` · definition — Richardson extrapolation for a central difference with a fourth-order remainder
- `thm-optimal-step-for-forward-and-central-difference-error-bounds` · theorem — The forward and central error bounds have explicit balancing steps
- `thm-richardson-extrapolation-has-fourth-order-error-bound` · theorem — Richardson extrapolation cancels the second-order term with a fourth-order remainder

### `numerical-differentiation-and-derivative-error-control-examples` — Numerical differentiation and derivative error control — Examples (4 item(s))

- `cex-colliding-column-colors-do-not-identify-a-jacobian` · counterexample — A colliding color seed cannot distinguish two Jacobians with different entries
- `cex-complex-step-absolute-value-returns-the-wrong-derivative` · counterexample — The absolute-value extension gives a zero complex-step quotient despite its real derivative
- `ex-colored-jacobian-of-two-independent-reactions` · example — One color recovers two separated reaction columns of a sparse Jacobian
- `ex-forward-difference-noise-bound-has-a-balanced-step` · example — A quadratic attains the forward truncation bound and exhibits the balanced noisy step

### `automatic-differentiation-and-computational-graphs` — Automatic differentiation and computational graphs (19 item(s))

- `def-finite-straight-line-computational-program` · definition — Finite straight-line computational programs and real-arithmetic tapes
- `lem-implicit-sensitivity-error-controlled-by-residual` · lemma — An implicit sensitivity evaluated at an approximate state has a local residual bound
- `thm-implicit-differentiation-forward-and-adjoint-formulas` · theorem — Implicit differentiation and adjoint formulas under a nonsingular residual Jacobian
- `alg-forward-mode-automatic-differentiation` · algorithm — Forward-mode automatic differentiation on a finite computational graph
- `alg-reverse-mode-automatic-differentiation` · algorithm — Reverse-mode automatic differentiation for a scalar graph output
- `lem-finite-straight-line-program-defines-c1-map` · lemma — A finite straight-line C1 program defines a C1 map on its admissible domain
- `lem-finite-straight-line-program-defines-c2-map` · lemma — A finite straight-line C2 program defines a C2 map on each fixed branch
- `alg-checkpointed-reverse-schedules` · algorithm — Uniform-block and binomial checkpoint schedules for reverse sweeps
- `alg-differentiate-finite-fixed-point-iteration` · algorithm — Differentiate a finite fixed-point iteration as a finite composed map
- `alg-forward-over-reverse-hessian-vector-product` · algorithm — Forward-over-reverse Hessian-vector products
- `thm-forward-mode-computes-directional-derivative` · theorem — Forward mode computes the exact directional derivative of the real-arithmetic graph
- `thm-reverse-mode-computes-gradient` · theorem — Reverse mode computes the exact gradient of the real-arithmetic graph
- `thm-reverse-mode-work-and-tape-storage-bound` · theorem — Reverse-mode work is a fixed multiple of primal work under explicit primitive-cost bounds
- `thm-checkpointed-reverse-schedules-preserve-adjoints-and-cost-bounds` · theorem — Uniform-block and binomial checkpoint schedules preserve reverse adjoints with stated costs
- `thm-finite-iteration-sensitivity-bound-and-residual-limitation` · theorem — Finite fixed-point iteration sensitivities differ from the implicit sensitivity with an explicit bound
- `thm-forward-over-reverse-computes-hessian-vector-product` · theorem — Forward-over-reverse mode computes the Hessian-vector product
- `thm-graph-gradient-error-from-local-jacobian-perturbations` · theorem — Local Jacobian perturbations give a pathwise bound for graph-gradient error
- `rem-real-arithmetic-graph-versus-rounded-execution` · remark — Real-arithmetic graph derivatives and rounded execution are different objects
- `lem-certified-linear-solve-jacobian-and-pullback-error` · lemma — Certified inverse defects and primal residuals bound linear-solve Jacobian and pullback errors

### `automatic-differentiation-and-computational-graphs-examples` — Automatic differentiation and computational graphs — Examples (4 item(s))

- `ex-branchwise-ad-at-the-absolute-value-switch` · example — Branchwise AD for absolute value and the nondifferentiable switch
- `ex-implicit-linear-solve-adjoint` · example — An implicit linear solve and its adjoint gradient
- `ex-reverse-euler-trajectory-tape` · example — Reverse-mode differentiation of an Euler trajectory tape
- `ex-shared-expression-forward-and-reverse-graph` · example — Forward and reverse derivatives on a shared-expression graph

## Your seams

Your pages depend on another group's:

- `numerical-differentiation-and-derivative-error-control` requires `nonlinear-equations-and-newton-methods` (group u, batch 3)
- `numerical-differentiation-and-derivative-error-control` requires `polynomial-interpolation-and-remainder` (group n, batch 4)
- `automatic-differentiation-and-computational-graphs` requires `finite-precision-direct-factorizations` (group m, batch 1)

Another group's pages depend on yours:

- `numerical-optimization-globalization-and-inexact-certificates` (group x) requires your `numerical-differentiation-and-derivative-error-control`
- `discrete-continuous-and-pde-adjoint-sensitivities` (group ad) requires your `automatic-differentiation-and-computational-graphs`
- `simulation-gradient-estimation-and-simultaneous-perturbation` (group af) requires your `numerical-differentiation-and-derivative-error-control`

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
