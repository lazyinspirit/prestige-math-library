# Step 5 adjudication — group **d**, run `numerical-optimization-dynamics-2026-10-16`

You are the group Alpha for batches 31, 35, 36: 3 A/B pair(s), 6 page(s), 50 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **31**: `research/numerical-optimization-dynamics-2026-10-16-batch-31-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **35**: `research/numerical-optimization-dynamics-2026-10-16-batch-35-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **36**: `research/numerical-optimization-dynamics-2026-10-16-batch-36-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 31 | `tau-leaping-and-reaction-diffusion-model-error` | A | numerical-differential-equations-and-stochastic-dynamics | 2346 | `poisson-and-cox-point-process-models`, `stochastic-reaction-jump-simulation-and-coupling`, `multilevel-monte-carlo` |
| 31 | `tau-leaping-and-reaction-diffusion-model-error-examples` | B | numerical-differential-equations-and-stochastic-dynamics | 2347 | `tau-leaping-and-reaction-diffusion-model-error` |
| 35 | `runge-kutta-methods-and-order` | A | numerical-differential-equations-and-stochastic-dynamics | 2354 | `mixed-partials-taylor-and-extrema`, `picard-lindelof-and-first-order-odes`, `one-step-ode-consistency-and-local-error`, `global-ode-and-density-error`, `fundamental-trigonometric-identities`, `the-spectral-theorem-and-singular-value-decomposition`, `banach-space-differential-calculus-and-banach-manifolds` |
| 35 | `runge-kutta-methods-and-order-examples` | B | numerical-differential-equations-and-stochastic-dynamics | 2355 | `runge-kutta-methods-and-order` |
| 36 | `linear-multistep-methods-and-dahlquist-equivalence` | A | numerical-differential-equations-and-stochastic-dynamics | 2356 | `mixed-partials-taylor-and-extrema`, `picard-lindelof-and-first-order-odes`, `the-complex-exponential-and-eulers-formula`, `stationary-iterations-and-relaxation`, `linear-recurrences-and-rational-generating-functions`, `finite-probability-and-the-probabilistic-method` |
| 36 | `linear-multistep-methods-and-dahlquist-equivalence-examples` | B | numerical-differential-equations-and-stochastic-dynamics | 2357 | `linear-multistep-methods-and-dahlquist-equivalence` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `tau-leaping-and-reaction-diffusion-model-error` — Tau leaping and reaction diffusion model error (11 item(s))

- `lem-shared-minimum-poisson-count-coupling` · lemma — Shared-minimum coupling of two Poisson counts
- `alg-explicit-poisson-tau-leaping` · algorithm — Explicit Poisson tau-leaping with an invalid-state status
- `def-density-scaled-jump-and-chemical-langevin-generators` · definition — Density-scaled reaction jump and chemical Langevin generators
- `lem-poisson-tau-leap-moment-and-covariance-identities` · lemma — Conditional moments of one Poisson tau-leap increment
- `thm-minimum-intensity-tau-leap-level-variance` · theorem — Order-one correction variance for coupled Poisson tau-leap levels
- `alg-critical-reaction-binomial-guarded-tau-leaping` · algorithm — Critical-reaction binomial guarded tau-leaping
- `lem-bounded-rate-reaction-generator-dynkin-identity` · lemma — Dynkin identity for a bounded-rate finite stopped reaction chain
- `lem-poisson-tau-leap-one-step-weak-defect` · lemma — One-step weak defect of finite-state Poisson tau-leaping
- `thm-density-scaled-chemical-langevin-model-error` · theorem — Stopped density-scaled jump versus chemical Langevin weak model error
- `thm-poisson-tau-leap-weak-order-one-with-exit-bound` · theorem — Weak order one for finite-state Poisson tau-leaping with an exit bound
- `cor-mlmc-complexity-for-poisson-tau-leaping` · corollary — MLMC work bound for bounded finite-state Poisson tau-leaping

### `tau-leaping-and-reaction-diffusion-model-error-examples` — Tau leaping and reaction diffusion model error — Examples (5 item(s))

- `ex-minimum-intensity-coupling-reduces-one-step-variance` · example — A minimum-intensity coupling reduces a Poisson count correction
- `ex-chemical-langevin-near-empty-poisson-birth` · example — A CLE can assign negative density near an empty population
- `ex-poisson-tau-leap-negative-population-pure-death` · example — A Poisson leap can make a pure-death population negative
- `ex-binomial-guard-prevents-invalid-counts-but-changes-noise` · example — A binomial guard prevents overdraw but changes Poisson noise
- `ex-stiff-reversible-explicit-leap-mean-amplification` · example — A stiff reversible system exposes explicit tau-leap mean instability

### `runge-kutta-methods-and-order` — Runge–Kutta methods and order (13 item(s))

- `lem-chebyshev-rkc-bounds-and-endpoint-derivatives` · lemma — Chebyshev bounds and endpoint derivatives used by stabilized Runge–Kutta methods
- `def-explicit-runge-kutta-tableau-and-stage-map` · definition — Explicit Runge–Kutta tableaus, stage maps, and failure status
- `alg-rkc1-chebyshev` · algorithm — First-order stabilized explicit Runge–Kutta–Chebyshev step
- `alg-rkc2-linear-chebyshev` · algorithm — Second-order linear stabilized Runge–Kutta–Chebyshev step
- `alg-rkc2-nonlinear` · algorithm — Second-order nonlinear stabilized Runge–Kutta–Chebyshev step
- `def-euler-midpoint-rk4-tableaus` · definition — The explicit Euler, midpoint, and classical fourth-order Runge–Kutta tableaus
- `prop-explicit-rk-order-conditions-through-four` · proposition — Sufficient explicit Runge–Kutta order conditions through order four
- `alg-ssprk33` · algorithm — The three-stage third-order SSP Runge–Kutta step
- `prop-euler-midpoint-rk4-orders-and-stability-functions` · proposition — Orders and scalar stability functions of Euler, midpoint, and classical RK4
- `prop-rkc-stability-intervals-and-stage-degree` · proposition — RKC stability polynomials and certified negative-real intervals
- `lem-rkc-chebyshev-stage-perturbation-amplification` · lemma — Chebyshev stage perturbations have an explicit quadratic bound
- `prop-ssprk33-third-order-and-convex-preservation` · proposition — SSPRK(3,3) is third order and preserves conditional convex bounds
- `thm-nonlinear-rkc2-order-two-and-global-error` · theorem — Undamped nonlinear RKC2 has fixed-stage order two on an admitted tube

### `runge-kutta-methods-and-order-examples` — Runge–Kutta methods and order — Examples (5 item(s))

- `ex-midpoint-order-loss-at-continuous-time-kink` · example — Explicit midpoint loses its uniform second-order defect bound at a time kink
- `ex-euler-midpoint-rk4-fixed-time-error-slopes` · example — Fixed-time error slopes for Euler, midpoint, and classical RK4
- `ex-rkc-self-adjoint-heat-stability-work` · example — A self-adjoint heat spectrum gives a long RKC1 stability step
- `ex-rkc-eigenvalue-stability-does-not-control-nonnormal-growth` · example — Scalar eigenvalue stability does not control nonnormal matrix growth
- `ex-rkc-stage-roundoff-quadratic-amplification` · example — Equal additive stage perturbations attain quadratic RKC1 amplification

### `linear-multistep-methods-and-dahlquist-equivalence` — Linear multistep methods and Dahlquist equivalence (10 item(s))

- `def-linear-multistep-method-consistency-order-and-root-condition` · definition — Linear multistep methods, consistency, order, and the root condition
- `lem-variable-step-adams-lagrange-weights` · lemma — Variable-step Adams weights are integrals of the actual-node Lagrange bases
- `alg-adams-pece-one-correction` · algorithm — Variable-step Adams predictor-evaluate-correct-evaluate procedure
- `lem-companion-powers-bounded-under-root-condition` · lemma — The root condition is equivalent to bounded powers of the multistep companion matrix
- `lem-linear-multistep-order-conditions-from-taylor` · lemma — Taylor moment conditions characterize the order of a linear multistep method
- `lem-variable-step-bdf2-interpolation-and-local-defect` · lemma — Quadratic interpolation gives the variable-step BDF2 formula and cubic residual
- `alg-variable-step-bdf2-with-selected-implicit-branch` · algorithm — Variable-step BDF2 with an explicit local implicit-branch rule
- `thm-dahlquist-equivalence-for-linear-multistep-methods` · theorem — Dahlquist equivalence for a consistent linear multistep method
- `lem-variable-step-bdf2-increment-ratio-recurrence` · lemma — The variable-step BDF2 parasitic increment contracts below the sharp ratio threshold
- `thm-variable-step-bdf2-order-two-under-ratio-bound` · theorem — Variable-step BDF2 is second-order convergent under a uniform ratio bound

### `linear-multistep-methods-and-dahlquist-equivalence-examples` — Linear multistep methods and Dahlquist equivalence — Examples (6 item(s))

- `cex-repeated-unit-root-causes-linear-parasitic-growth` · counterexample — A repeated unit root causes a linearly growing parasitic mode
- `ex-one-pass-pece-differs-from-implicit-adams-stability` · example — One-pass PECE and fully implicit Adams have different stability
- `ex-repeated-interior-root-preserves-bounded-powers` · example — A repeated interior root preserves bounded companion powers
- `ex-simple-unit-circle-roots-give-bounded-oscillation` · example — Simple unit-circle roots give bounded oscillatory modes
- `ex-uniform-step-bdf2-satisfies-dahlquist-conditions` · example — Uniform-step BDF2 satisfies the Dahlquist conditions
- `cex-unrestricted-variable-step-ratios-amplify-bdf2-starter-error` · counterexample — Unrestricted variable-step ratios amplify a vanishing BDF2 starter error

## Your seams

Your pages depend on another group's:

- `tau-leaping-and-reaction-diffusion-model-error` requires `stochastic-reaction-jump-simulation-and-coupling` (group a, batch 10)
- `runge-kutta-methods-and-order` requires `one-step-ode-consistency-and-local-error` (group a, batch 7)
- `runge-kutta-methods-and-order` requires `global-ode-and-density-error` (group c, batch 28)
- `linear-multistep-methods-and-dahlquist-equivalence` requires `stationary-iterations-and-relaxation` (group o, batch 18)

Another group's pages depend on yours:

- `stability-regions-and-stiff-equations` (group f) requires your `runge-kutta-methods-and-order`
- `stability-regions-and-stiff-equations` (group f) requires your `linear-multistep-methods-and-dahlquist-equivalence`
- `adaptive-ode-solvers-and-error-estimation` (group g) requires your `runge-kutta-methods-and-order`
- `geometric-numerical-integration` (group g) requires your `runge-kutta-methods-and-order`
- `implicit-stiff-time-stepping-and-algebraic-error` (group h) requires your `linear-multistep-methods-and-dahlquist-equivalence`
- `parallel-in-time-parareal-and-mgrit` (group i) requires your `runge-kutta-methods-and-order`
- `positive-conservative-production-destruction-integrators` (group j) requires your `runge-kutta-methods-and-order`
- `coagulation-fragmentation-and-sectional-population-balance-numerics` (group k) requires your `runge-kutta-methods-and-order`
- `deferred-correction-and-collocation-iterations` (group k) requires your `runge-kutta-methods-and-order`
- `imex-and-operator-splitting-methods` (group l) requires your `runge-kutta-methods-and-order`
- `discrete-continuous-and-pde-adjoint-sensitivities` (group ad) requires your `runge-kutta-methods-and-order`
- `direct-transcription-and-numerical-ode-optimal-control` (group ae) requires your `runge-kutta-methods-and-order`
- `interacting-particle-mean-field-and-vortex-blob-error` (group ai) requires your `runge-kutta-methods-and-order`

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
