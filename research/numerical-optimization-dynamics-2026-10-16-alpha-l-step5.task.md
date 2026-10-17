# Step 5 adjudication — group **l**, run `numerical-optimization-dynamics-2026-10-16`

You are the group Alpha for batches 98, 104, 105: 3 A/B pair(s), 6 page(s), 48 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **98**: `research/numerical-optimization-dynamics-2026-10-16-batch-98-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **104**: `research/numerical-optimization-dynamics-2026-10-16-batch-104-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **105**: `research/numerical-optimization-dynamics-2026-10-16-batch-105-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 98 | `imex-and-operator-splitting-methods` | A | numerical-differential-equations-and-stochastic-dynamics | 2480 | `global-ode-and-density-error`, `runge-kutta-methods-and-order`, `implicit-stiff-time-stepping-and-algebraic-error`, `exponential-and-integrating-factor-integrators` |
| 98 | `imex-and-operator-splitting-methods-examples` | B | numerical-differential-equations-and-stochastic-dynamics | 2481 | `imex-and-operator-splitting-methods` |
| 104 | `multirate-and-partitioned-time-integration` | A | numerical-differential-equations-and-stochastic-dynamics | 2492 | `global-ode-and-density-error`, `imex-and-operator-splitting-methods` |
| 104 | `multirate-and-partitioned-time-integration-examples` | B | numerical-differential-equations-and-stochastic-dynamics | 2493 | `multirate-and-partitioned-time-integration` |
| 105 | `event-location-and-hybrid-trajectory-error` | A | numerical-differential-equations-and-stochastic-dynamics | 2494 | `adaptive-ode-solvers-and-error-estimation`, `interval-newton-krawczyk-and-polynomial-root-isolation`, `discrete-continuous-and-pde-adjoint-sensitivities` |
| 105 | `event-location-and-hybrid-trajectory-error-examples` | B | numerical-differential-equations-and-stochastic-dynamics | 2495 | `event-location-and-hybrid-trajectory-error` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `imex-and-operator-splitting-methods` — Imex and operator splitting methods (17 item(s))

- `def-additive-ode-and-partition` · definition — Additive autonomous ODE partitions
- `def-dirichlet-sine-mode-heat-splitting-model` · definition — Diagonal Dirichlet sine-mode heat model with constant forcing
- `alg-imex-euler-step` · algorithm — One-step IMEX Euler with an implicit branch and residual status
- `def-exact-split-flows-lie-strang-and-bracket` · definition — Lie and Strang compositions of exact split flows
- `lem-diagonal-heat-semigroup-generator-domain` · lemma — The diagonal heat semigroup has the stated generator domain
- `lem-imex-euler-local-branch` · lemma — A local IMEX Euler branch from contraction
- `def-ars222-additive-tableau-and-stages` · definition — The ARS(2,2,2) additive tableau and its three stages
- `lem-lie-strang-local-error-expansions` · lemma — Lie and Strang splitting errors have commutator expansions
- `lem-dirichlet-forcing-coefficients-exceed-the-generator-domain` · lemma — Constant Dirichlet forcing is square summable but outside the heat-generator domain
- `thm-imex-euler-local-order-and-stability` · theorem — IMEX Euler has a first-order local defect and a one-step stability bound
- `lem-ars222-coefficient-identities` · lemma — The ARS(2,2,2) coefficients satisfy the coupled second-order identities
- `lem-ars222-stage-branch-and-residual-control` · lemma — The two implicit ARS stages have selected branches and residual bounds
- `thm-lie-strang-global-orders-and-subflow-error` · theorem — Lie and Strang splitting have global orders one and two, with separate subflow errors
- `thm-imex-euler-global-order-one` · theorem — IMEX Euler is first-order convergent on a common compact tube
- `thm-imex-euler-algebraic-residual-budget` · theorem — IMEX Euler preserves first-order convergence under per-step residuals of order h squared
- `thm-ars222-additive-order-two-and-tolerance` · theorem — The ARS(2,2,2) pair is second order under distinct stage residual tolerances
- `prop-ars222-bivariate-stability-region` · proposition — The ARS(2,2,2) bivariate scalar stability function

### `imex-and-operator-splitting-methods-examples` — Imex and operator splitting methods — Examples (5 item(s))

- `ex-stiff-explicit-partition-is-unstable` · example — An explicitly treated stiff decay mode is unstable for a large step
- `ex-noncommuting-matrices-show-lie-and-strang-orders` · example — Noncommuting two-by-two matrices distinguish Lie and Strang local errors
- `ex-finite-matrix-schrodinger-potential-kinetic-split` · example — A finite-matrix Schrödinger split preserves norm
- `ex-dirichlet-boundary-forcing-strang-order-reduction` · example — Boundary-incompatible forcing reduces Strang order to five quarters in a Dirichlet modal model
- `ex-reaction-diffusion-ars222-mode-amplification` · example — ARS(2,2,2) amplification on a two-cell reaction-diffusion grid

### `multirate-and-partitioned-time-integration` — Multirate and partitioned time integration (8 item(s))

- `alg-frozen-slow-explicit-fast-euler` · algorithm — Frozen-slow explicit Euler with fast microsteps
- `alg-synchronous-waveform-relaxation-finite-window` · algorithm — Synchronous Picard waveform relaxation on a finite window
- `lem-frozen-slow-euler-variation-bounds` · lemma — Block variation bounds for a frozen-slow Euler step
- `lem-frozen-slow-euler-one-step-stability` · lemma — One-step stability of frozen-slow Euler with fast microsteps
- `cor-cubic-defect-gives-second-order-for-symmetric-multirate-composition` · corollary — Second-order global bound under symmetric coupling and a cubic defect
- `thm-waveform-relaxation-contraction-and-error-bound` · theorem — Contraction and finite-sweep error bound for synchronous waveform relaxation
- `lem-frozen-slow-euler-local-defect-bound` · lemma — Local defect bound for frozen-slow Euler with fast microsteps
- `thm-frozen-slow-euler-global-first-order-error` · theorem — Fixed-time first-order error bound for frozen-slow Euler

### `multirate-and-partitioned-time-integration-examples` — Multirate and partitioned time integration — Examples (3 item(s))

- `ex-linear-electromechanical-multirate-block-cost` · example — A dissipative electromechanical toy model under slow-fast blocking
- `ex-coupled-fast-mode-destabilizes-frozen-slow-euler` · example — A stable coupled model has an unstable explicit fast microstep
- `ex-frozen-slow-interpolation-limits-order` · example — Freezing a varying slow waveform leaves a first-order coupling error

### `event-location-and-hybrid-trajectory-error` — Event location and hybrid trajectory error (10 item(s))

- `def-hybrid-mode-guard-reset-system` · definition — Smooth hybrid ODE modes, guards, resets, and deterministic event priority
- `lem-hybrid-guard-derivative-along-mode` · lemma — The derivative of a guard along an ODE mode is its Lie derivative
- `lem-ode-flow-lipschitz-on-a-tube` · lemma — A Lipschitz ODE mode flow is stable to its initial state on a tube
- `lem-reset-error-after-a-mistimed-hybrid-event` · lemma — Reset and smooth-mode flow propagate a transverse event-time error
- `thm-saltation-matrix-for-a-transverse-hybrid-reset` · theorem — The saltation matrix gives the first-order variation across a transverse hybrid reset
- `def-certified-hybrid-event-enclosure` · definition — Certified dense-output and reference-guard enclosure data for hybrid events
- `lem-transverse-hybrid-event-time-error` · lemma — A transverse hybrid event time is stable under dense-output and root error
- `alg-safeguarded-hybrid-event-location-and-restart` · algorithm — Safeguarded certified event location and mode restart
- `thm-finite-hybrid-trajectory-error-under-separated-events` · theorem — Finite separated transverse events give an event-aligned hybrid trajectory error bound
- `thm-safeguarded-hybrid-event-locator-is-sound-and-budgeted` · theorem — The hybrid event locator certifies events or returns inconclusive within its budget

### `event-location-and-hybrid-trajectory-error-examples` — Event location and hybrid trajectory error — Examples (5 item(s))

- `cex-inelastic-bouncing-ball-has-zeno-accumulation` · counterexample — Inelastic bouncing-ball impacts can accumulate in finite time
- `ex-simultaneous-guards-require-deterministic-priority` · example — Simultaneous guards need a deterministic priority rule
- `cex-grazing-event-time-error-is-not-linearly-bounded` · counterexample — A grazing guard contact has square-root rather than linear root-location sensitivity
- `ex-bouncing-ball-transverse-event-error-and-reset` · example — A bouncing-ball impact has a transverse event-time and reset-error bound
- `ex-two-events-between-endpoints-defeat-sign-screening` · example — Two guard crossings between endpoints defeat sign-only screening

## Your seams

Your pages depend on another group's:

- `imex-and-operator-splitting-methods` requires `global-ode-and-density-error` (group c, batch 28)
- `imex-and-operator-splitting-methods` requires `runge-kutta-methods-and-order` (group d, batch 35)
- `imex-and-operator-splitting-methods` requires `implicit-stiff-time-stepping-and-algebraic-error` (group h, batch 65)
- `imex-and-operator-splitting-methods` requires `exponential-and-integrating-factor-integrators` (group k, batch 94)
- `multirate-and-partitioned-time-integration` requires `global-ode-and-density-error` (group c, batch 28)
- `event-location-and-hybrid-trajectory-error` requires `adaptive-ode-solvers-and-error-estimation` (group g, batch 53)
- `event-location-and-hybrid-trajectory-error` requires `interval-newton-krawczyk-and-polynomial-root-isolation` (group s, batch 62)
- `event-location-and-hybrid-trajectory-error` requires `discrete-continuous-and-pde-adjoint-sensitivities` (group ad, batch 96)

Another group's pages depend on yours:

- `nonsmooth-contact-time-stepping-and-projections` (group f) requires your `event-location-and-hybrid-trajectory-error`
- `langevin-splittings-and-invariant-measure-error` (group m) requires your `imex-and-operator-splitting-methods`

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
