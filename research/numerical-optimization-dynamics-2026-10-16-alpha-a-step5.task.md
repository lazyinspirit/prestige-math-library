# Step 5 adjudication — group **a**, run `numerical-optimization-dynamics-2026-10-16`

You are the group Alpha for batches 7, 9, 10: 3 A/B pair(s), 6 page(s), 35 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **7**: `research/numerical-optimization-dynamics-2026-10-16-batch-7-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **9**: `research/numerical-optimization-dynamics-2026-10-16-batch-9-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **10**: `research/numerical-optimization-dynamics-2026-10-16-batch-10-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 7 | `one-step-ode-consistency-and-local-error` | A | numerical-differential-equations-and-stochastic-dynamics | 2298 | `mixed-partials-taylor-and-extrema`, `picard-lindelof-and-first-order-odes`, `the-total-derivative` |
| 7 | `one-step-ode-consistency-and-local-error-examples` | B | numerical-differential-equations-and-stochastic-dynamics | 2299 | `one-step-ode-consistency-and-local-error` |
| 9 | `milstein-stochastic-taylor-and-iterated-integrals` | A | numerical-differential-equations-and-stochastic-dynamics | 2302 | `euler-maruyama-convergence`, `itos-formula-and-brownian-martingales`, `multilevel-monte-carlo` |
| 9 | `milstein-stochastic-taylor-and-iterated-integrals-examples` | B | numerical-differential-equations-and-stochastic-dynamics | 2303 | `milstein-stochastic-taylor-and-iterated-integrals` |
| 10 | `stochastic-reaction-jump-simulation-and-coupling` | A | numerical-differential-equations-and-stochastic-dynamics | 2304 | `counting-process-compensators-and-integrals`, `parametric-survival-and-reliability`, `poisson-and-cox-point-process-models`, `probability-spaces-random-variables-and-expectation`, `temporal-point-process-intensity-and-likelihood` |
| 10 | `stochastic-reaction-jump-simulation-and-coupling-examples` | B | numerical-differential-equations-and-stochastic-dynamics | 2305 | `stochastic-reaction-jump-simulation-and-coupling` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `one-step-ode-consistency-and-local-error` — One-step ODE Consistency and Local Error (3 item(s))

- `def-one-step-ode-method-local-defect-order-and-stability` · definition — One-step ODE methods, local defect, uniform order, and step stability
- `lem-time-along-ode-solution-derivative-bound` · lemma — A vector field along an ODE solution has an explicit derivative bound
- `thm-forward-euler-one-step-consistency-and-local-error` · theorem — Forward Euler has uniform local order one and a one-step Lipschitz bound

### `one-step-ode-consistency-and-local-error-examples` — One-step ODE Consistency and Local Error — Examples (2 item(s))

- `ex-explicit-midpoint-local-order-drop-at-nonsmooth-time-kink` · example — A time kink reduces the explicit midpoint local order
- `ex-forward-euler-local-error-for-scalar-linear-ode` · example — Forward Euler on the scalar linear equation $y'=y$

### `milstein-stochastic-taylor-and-iterated-integrals` — Milstein stochastic taylor and iterated integrals (11 item(s))

- `def-milstein-scheme-and-iterated-integrals` · definition — Milstein updates, iterated Brownian integrals, and commutative noise
- `lem-iterated-brownian-integral-identities` · lemma — Product identity and conditional moments for iterated Brownian integrals
- `lem-event-weighted-ito-isometry` · lemma — Event-weighted Ito isometry after a conditioning time
- `lem-bounded-sde-increment-moments` · lemma — Second and fourth moments of bounded-coefficient SDE increments
- `lem-milstein-local-defect-bounds` · lemma — Conditional local defect bounds for the Milstein Taylor increment
- `lem-stochastic-local-to-global-rms-bound` · lemma — Discrete stochastic local-to-global RMS stability bound
- `thm-commutative-milstein-strong-order-one` · theorem — Strong order one for scalar and commutative-noise Milstein schemes
- `def-additive-noise-stochastic-heun-scheme` · definition — Explicit stochastic Heun update for additive noise
- `lem-additive-heun-one-step-weak-expansion` · lemma — One-step moment matching for additive-noise stochastic Heun
- `thm-additive-noise-stochastic-heun-weak-order-two` · theorem — Weak order two for additive-noise stochastic Heun
- `thm-milstein-mlmc-level-variance-and-cost` · theorem — Milstein MLMC correction variance and epsilon-squared cost

### `milstein-stochastic-taylor-and-iterated-integrals-examples` — Milstein stochastic taylor and iterated integrals — Examples (3 item(s))

- `ex-geometric-brownian-milstein-update` · example — Geometric Brownian motion and the Milstein update
- `ex-scalar-multiplicative-noise-milstein` · example — A bounded scalar multiplicative-noise Milstein step
- `ex-noncommuting-two-noise-milstein-area` · example — A noncommuting two-noise equation requires an area term

### `stochastic-reaction-jump-simulation-and-coupling` — Stochastic reaction jump simulation and coupling (11 item(s))

- `def-reaction-network-propensity-system-and-generator` · definition — Finite-channel reaction propensity systems and their generator
- `lem-competing-exponential-race-for-reaction-channels` · lemma — Competing exponential clocks give the reaction event law
- `alg-gillespie-direct-method-for-reaction-networks` · algorithm — Gillespie direct method with horizon and budget statuses
- `alg-next-reaction-random-time-change-method` · algorithm — Next-reaction method by internal Poisson clocks
- `alg-dominating-thinning-for-time-varying-reaction-rates` · algorithm — Dominating thinning for bounded time-varying propensities
- `thm-countable-state-reaction-networks-lyapunov-nonexplosion` · theorem — A proper Lyapunov bound prevents reaction-network explosion
- `thm-dominating-thinning-exactly-simulates-reaction-rates` · theorem — Dominating thinning has the prescribed reaction law
- `alg-minimum-intensity-coupling-for-reaction-networks` · algorithm — Minimum-intensity coupling of reaction networks
- `thm-finite-state-gillespie-and-next-reaction-exactness` · theorem — Finite-state Gillespie and next-reaction methods have the specified CTMC law
- `thm-minimum-intensity-coupling-preserves-exact-marginals` · theorem — The minimum-intensity reaction coupling preserves both marginals
- `thm-reaction-counts-have-compensators-brackets-and-isometry` · theorem — Compensators, brackets, and jump-integral isometry for reaction counts

### `stochastic-reaction-jump-simulation-and-coupling-examples` — Stochastic reaction jump simulation and coupling — Examples (5 item(s))

- `cex-quadratic-pure-birth-reaction-network-explodes` · counterexample — Quadratic pure-birth rates can explode
- `cex-understated-thinning-envelope-is-invalid` · counterexample — Clipping an understated thinning envelope changes the waiting-time law
- `ex-zero-total-hazard-state-is-absorbing` · example — A zero-total-hazard state is absorbing
- `ex-finite-state-birth-death-reaction-simulation` · example — Gillespie simulation of a finite birth-death reaction network
- `ex-two-chain-minimum-intensity-birth-death-coupling` · example — Minimum-intensity coupling of two birth-death chains

## Your seams

Another group's pages depend on yours:

- `global-ode-and-density-error` (group c) requires your `one-step-ode-consistency-and-local-error`
- `adaptive-stochastic-paths-and-brownian-bridge-coupling` (group c) requires your `milstein-stochastic-taylor-and-iterated-integrals`
- `tau-leaping-and-reaction-diffusion-model-error` (group d) requires your `stochastic-reaction-jump-simulation-and-coupling`
- `runge-kutta-methods-and-order` (group d) requires your `one-step-ode-consistency-and-local-error`
- `finite-generator-master-equations-and-uniformization` (group f) requires your `one-step-ode-consistency-and-local-error`
- `finite-generator-master-equations-and-uniformization` (group f) requires your `stochastic-reaction-jump-simulation-and-coupling`
- `adaptive-ode-solvers-and-error-estimation` (group g) requires your `one-step-ode-consistency-and-local-error`
- `stable-sde-schemes-for-superlinear-drift` (group i) requires your `milstein-stochastic-taylor-and-iterated-integrals`
- `positive-conservative-production-destruction-integrators` (group j) requires your `one-step-ode-consistency-and-local-error`
- `renewal-age-and-size-structured-numerical-methods` (group j) requires your `one-step-ode-consistency-and-local-error`
- `coagulation-fragmentation-and-sectional-population-balance-numerics` (group k) requires your `one-step-ode-consistency-and-local-error`
- `langevin-splittings-and-invariant-measure-error` (group m) requires your `milstein-stochastic-taylor-and-iterated-integrals`
- `interacting-particle-mean-field-and-vortex-blob-error` (group ai) requires your `one-step-ode-consistency-and-local-error`

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
