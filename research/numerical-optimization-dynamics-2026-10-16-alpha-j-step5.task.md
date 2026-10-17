# Step 5 adjudication — group **j**, run `numerical-optimization-dynamics-2026-10-16`

You are the group Alpha for batches 78, 79, 86: 3 A/B pair(s), 6 page(s), 56 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **78**: `research/numerical-optimization-dynamics-2026-10-16-batch-78-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **79**: `research/numerical-optimization-dynamics-2026-10-16-batch-79-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **86**: `research/numerical-optimization-dynamics-2026-10-16-batch-86-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 78 | `positive-conservative-production-destruction-integrators` | A | numerical-differential-equations-and-stochastic-dynamics | 2440 | `matrix-norms-condition-numbers-and-numerical-stability`, `finite-precision-direct-factorizations`, `one-step-ode-consistency-and-local-error`, `global-ode-and-density-error`, `runge-kutta-methods-and-order`, `finite-generator-master-equations-and-uniformization`, `stability-regions-and-stiff-equations` |
| 78 | `positive-conservative-production-destruction-integrators-examples` | B | numerical-differential-equations-and-stochastic-dynamics | 2441 | `positive-conservative-production-destruction-integrators` |
| 79 | `renewal-age-and-size-structured-numerical-methods` | A | numerical-differential-equations-and-stochastic-dynamics | 2442 | `picard-lindelof-and-first-order-odes`, `one-step-ode-consistency-and-local-error`, `composite-quadrature-rules`, `global-ode-and-density-error`, `adaptive-quadrature-and-error-indicators`, `hyperbolic-finite-difference-methods` |
| 79 | `renewal-age-and-size-structured-numerical-methods-examples` | B | numerical-differential-equations-and-stochastic-dynamics | 2443 | `renewal-age-and-size-structured-numerical-methods` |
| 86 | `constrained-dynamics-shake-and-rattle` | A | numerical-differential-equations-and-stochastic-dynamics | 2456 | `hamiltonian-monte-carlo-and-leapfrog`, `implicit-stiff-time-stepping-and-algebraic-error`, `differential-algebraic-equations-and-consistent-initialization`, `geometric-numerical-integration` |
| 86 | `constrained-dynamics-shake-and-rattle-examples` | B | numerical-differential-equations-and-stochastic-dynamics | 2457 | `constrained-dynamics-shake-and-rattle` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `positive-conservative-production-destruction-integrators` — Positive conservative production destruction integrators (14 item(s))

- `def-finite-conservative-production-destruction-system` · definition — Finite conservative production destruction systems
- `lem-strict-column-dominance-implies-nonnegative-inverse` · lemma — Strict column dominance gives an entrywise nonnegative inverse
- `alg-modified-patankar-euler` · algorithm — Modified Patankar Euler for conservative transfer systems
- `def-source-factored-production-destruction-rates` · definition — Source-factored transfer rates for zero compartments
- `alg-zero-compatible-modified-patankar-euler` · algorithm — Zero-compatible modified Patankar Euler in rate-factor form
- `alg-mprk22-1` · algorithm — The positive-interior MPRK22(1) step
- `thm-modified-patankar-euler-positive-conservative` · theorem — Modified Patankar Euler preserves positivity and total mass
- `lem-modified-patankar-euler-positive-tube-local-error-and-stability` · lemma — Modified Patankar Euler has a uniform first-order defect and one-step bound on positive tubes
- `thm-zero-compatible-modified-patankar-euler-admissibility` · theorem — The factorized zero-state step is well-defined, nonnegative, conservative, and locally first order
- `thm-mprk22-1-positive-conservative` · theorem — MPRK22(1) preserves positivity and total mass on positive inputs
- `lem-mprk22-1-positive-tube-local-error-and-stability` · lemma — MPRK22(1) has a uniform second-order defect and one-step bound on positive tubes
- `thm-modified-patankar-euler-global-first-order-error` · theorem — Modified Patankar Euler converges globally with first-order error on a positive tube
- `thm-patankar-inexact-solve-residual-ledger` · theorem — Certified residuals bound mass drift and the exact-solve positivity margin
- `thm-mprk22-1-global-second-order-error` · theorem — MPRK22(1) has global second-order error on a compact positive tube

### `positive-conservative-production-destruction-integrators-examples` — Positive conservative production destruction integrators — Examples (5 item(s))

- `ex-two-compartment-stiff-reversible-transfer` · example — A stiff reversible two-compartment transfer
- `ex-three-species-weighted-stoichiometric-conservation` · example — Three species with weighted number-to-mass conservation
- `ex-zero-denominator-corner-and-factorized-extension` · example — A zero compartment makes the standard ratio undefined
- `cex-small-residual-does-not-certify-positivity` · counterexample — An arbitrarily small residual does not certify the candidate's nonnegativity
- `cex-forward-euler-negative-concentration-despite-stability` · counterexample — A stable forward Euler step can still make a concentration negative

### `renewal-age-and-size-structured-numerical-methods` — Renewal age and size structured numerical methods (16 item(s))

- `def-age-structured-renewal-transport-problem` · definition — Linear age-structured renewal transport problem
- `def-size-structured-transport-and-division-kernel` · definition — Size transport with a nonlocal division kernel
- `thm-age-structured-renewal-characteristic-solution` · theorem — Characteristic formula and Volterra solution for age renewal transport
- `alg-size-structured-finite-volume-flux-and-kernel-quadrature` · algorithm — Finite-volume size transport with positive division quadrature
- `alg-age-cohort-characteristic-quadrature` · algorithm — Age-cohort quadrature along exact characteristics
- `def-age-structured-renewal-finite-cutoff-model` · definition — Finite-age renewal model with absorbing outflow
- `thm-age-structured-renewal-semigroup-growth-and-data-stability` · theorem — Positive age-renewal evolution and L1 data stability
- `thm-size-structured-positivity-number-and-weighted-moment-identities` · theorem — Size characteristics, positivity, and discrete number and size-moment balances
- `thm-age-structured-renewal-finite-cutoff-characteristic-solution` · theorem — Characteristic solution and mass bound for the finite-age renewal model
- `alg-age-structured-positive-birth-quadrature` · algorithm — Positive composite or capped-adaptive quadrature for renewal births
- `thm-age-cohort-quadrature-weak-consistency` · theorem — Weak consistency of age-cohort characteristic quadrature
- `alg-age-structured-renewal-upwind-finite-volume` · algorithm — Finite-volume upwind scheme for age renewal transport
- `thm-age-structured-renewal-upwind-positivity-mass-bound-and-stability` · theorem — Positivity, L1 growth and data stability of the renewal finite-volume step
- `thm-age-structured-renewal-smooth-first-order-convergence` · theorem — First-order finite-volume convergence for compatible smooth renewal data
- `thm-age-structured-renewal-bv-l1-convergence` · theorem — L1 convergence for BV data without renewal-boundary compatibility
- `thm-age-structured-renewal-cutoff-tail-and-outflow-bound` · theorem — Age-cutoff survival, outflow and infinite-age tail bounds

### `renewal-age-and-size-structured-numerical-methods-examples` — Renewal age and size structured numerical methods — Examples (4 item(s))

- `ex-narrow-maturation-kernel-delay-approximation` · example — A narrow maturation kernel approaches a delayed birth term
- `ex-half-size-division-numerical-moment-budget` · example — Half-size division preserves the discrete biomass budget
- `ex-constant-mortality-and-age-localized-fertility` · example — Constant mortality with age-localized fertility
- `ex-age-cutoff-versus-outflow-tail-error` · example — A longer run exposes age-cutoff outflow error

### `constrained-dynamics-shake-and-rattle` — Constrained dynamics shake and rattle (13 item(s))

- `def-regular-holonomic-phase-space-and-dynamics` · definition — Regular holonomic phase space and constrained dynamics
- `lem-smooth-residual-quotient-extension` · lemma — A $C^{k+r}$ residual vanishing through order $r-1$ has a $C^k$ scaled extension
- `lem-regular-holonomic-phase-space-is-symplectic-cotangent` · lemma — The regular holonomic phase space is a symplectic cotangent bundle
- `lem-regular-holonomic-phase-residuals-control-distance-to-phase-manifold` · lemma — Holonomic phase residuals control distance to the consistent phase manifold
- `def-regular-classical-rattle-step-map` · definition — Scaled classical RATTLE step map
- `thm-local-holonomic-constrained-hamiltonian-flow` · theorem — The constrained Hamiltonian vector field has a unique local flow
- `lem-rattle-scaled-position-and-momentum-branches` · lemma — Scaled RATTLE equations have unique local multiplier branches
- `alg-finite-budget-rattle-step-with-scaled-residuals` · algorithm — Finite budget RATTLE solve with scaled constraint residuals
- `thm-rattle-exact-constraint-preservation-and-reversibility` · theorem — Exact RATTLE preserves both constraints and is symmetric
- `thm-rattle-symplecticity-on-regular-constraint-phase-space` · theorem — Exact RATTLE is symplectic on the constrained phase space
- `thm-finite-budget-rattle-solver-returns-status` · theorem — The finite budget RATTLE solver returns a status in finite work
- `thm-rattle-second-order-global-accuracy-on-compact-tubes` · theorem — Exact RATTLE has second order global accuracy on compact tubes
- `thm-rattle-scaled-solve-residual-error-budget` · theorem — Scaled RATTLE residuals bound the finite solve trajectory error

### `constrained-dynamics-shake-and-rattle-examples` — Constrained dynamics shake and rattle — Examples (4 item(s))

- `ex-constrained-pendulum-equations-and-multiplier` · example — The constrained pendulum multiplier follows from tangency
- `ex-rigid-bond-rattle-free-rotor` · example — RATTLE gives an exact step and a cubic phase defect for a free rigid bond
- `ex-nearly-dependent-constraints-amplify-rattle-residuals` · example — Nearly dependent constraints make the multiplier solve ill conditioned
- `ex-rattle-residual-budget-and-global-trajectory-drift` · example — A fixed RATTLE residual budget allows an O(epsilon) drift envelope

## Your seams

Your pages depend on another group's:

- `positive-conservative-production-destruction-integrators` requires `finite-precision-direct-factorizations` (group m, batch 1)
- `positive-conservative-production-destruction-integrators` requires `one-step-ode-consistency-and-local-error` (group a, batch 7)
- `positive-conservative-production-destruction-integrators` requires `global-ode-and-density-error` (group c, batch 28)
- `positive-conservative-production-destruction-integrators` requires `runge-kutta-methods-and-order` (group d, batch 35)
- `positive-conservative-production-destruction-integrators` requires `finite-generator-master-equations-and-uniformization` (group f, batch 47)
- `positive-conservative-production-destruction-integrators` requires `stability-regions-and-stiff-equations` (group f, batch 52)
- `renewal-age-and-size-structured-numerical-methods` requires `one-step-ode-consistency-and-local-error` (group a, batch 7)
- `renewal-age-and-size-structured-numerical-methods` requires `composite-quadrature-rules` (group p, batch 20)
- `renewal-age-and-size-structured-numerical-methods` requires `global-ode-and-density-error` (group c, batch 28)
- `renewal-age-and-size-structured-numerical-methods` requires `adaptive-quadrature-and-error-indicators` (group r, batch 51)
- `renewal-age-and-size-structured-numerical-methods` requires `hyperbolic-finite-difference-methods` (group ah, batch 55)
- `constrained-dynamics-shake-and-rattle` requires `implicit-stiff-time-stepping-and-algebraic-error` (group h, batch 65)
- `constrained-dynamics-shake-and-rattle` requires `differential-algebraic-equations-and-consistent-initialization` (group i, batch 75)
- `constrained-dynamics-shake-and-rattle` requires `geometric-numerical-integration` (group g, batch 54)

Another group's pages depend on yours:

- `coagulation-fragmentation-and-sectional-population-balance-numerics` (group k) requires your `positive-conservative-production-destruction-integrators`

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
