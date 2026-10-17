# Step 5 adjudication — group **f**, run `numerical-optimization-dynamics-2026-10-16`

You are the group Alpha for batches 46, 47, 52: 3 A/B pair(s), 6 page(s), 49 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **46**: `research/numerical-optimization-dynamics-2026-10-16-batch-46-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **47**: `research/numerical-optimization-dynamics-2026-10-16-batch-47-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **52**: `research/numerical-optimization-dynamics-2026-10-16-batch-52-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 46 | `nonsmooth-contact-time-stepping-and-projections` | A | numerical-differential-equations-and-stochastic-dynamics | 2495.25 | `convex-and-semicontinuous-functions-on-rn`, `inequality-kkt-duality-and-optimality-certificates`, `proximal-gradient-and-accelerated-composite-optimization`, `event-location-and-hybrid-trajectory-error` |
| 46 | `nonsmooth-contact-time-stepping-and-projections-examples` | B | numerical-differential-equations-and-stochastic-dynamics | 2495.5 | `nonsmooth-contact-time-stepping-and-projections` |
| 47 | `finite-generator-master-equations-and-uniformization` | A | numerical-differential-equations-and-stochastic-dynamics | 2378 | `markov-kernels-and-markov-chains`, `matrix-norms-condition-numbers-and-numerical-stability`, `poisson-and-cox-point-process-models`, `sparse-matrix-models-and-kernel-costs`, `one-step-ode-consistency-and-local-error`, `stochastic-reaction-jump-simulation-and-coupling`, `global-ode-and-density-error` |
| 47 | `finite-generator-master-equations-and-uniformization-examples` | B | numerical-differential-equations-and-stochastic-dynamics | 2379 | `finite-generator-master-equations-and-uniformization` |
| 52 | `stability-regions-and-stiff-equations` | A | numerical-differential-equations-and-stochastic-dynamics | 2388 | `runge-kutta-methods-and-order`, `linear-multistep-methods-and-dahlquist-equivalence` |
| 52 | `stability-regions-and-stiff-equations-examples` | B | numerical-differential-equations-and-stochastic-dynamics | 2389 | `stability-regions-and-stiff-equations` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `nonsmooth-contact-time-stepping-and-projections` — Nonsmooth contact time stepping and projections (15 item(s))

- `lem-equi-lipschitz-curves-in-compact-euclidean-set-have-uniformly-convergent-subsequence` · lemma — Compactness of equi-Lipschitz curves with values in a compact Euclidean set
- `lem-projection-onto-closed-convex-set-is-nonexpansive` · lemma — Projection onto a closed convex set is nonexpansive
- `alg-one-dimensional-first-impact-with-restitution` · algorithm — First-impact step for a one-dimensional unilateral contact
- `thm-frictionless-sphere-binary-impact-impulse-laws` · theorem — Impulse, momentum, and kinetic-energy laws for an isolated frictionless sphere impact
- `lem-projected-euler-projection-residual-certificate` · lemma — A certified projection variational residual bounds the projection error
- `thm-first-impact-step-complementarity-momentum-and-energy` · theorem — Complementarity, momentum balance, and energy loss at a scalar impact
- `lem-sphere-contact-guard-normal-and-reset-lipschitz-bounds` · lemma — Sphere-contact guards, normals and binary resets have explicit tube bounds
- `alg-event-driven-frictionless-sphere-contact-with-certified-events` · algorithm — Event-driven integration for isolated frictionless spherical impacts
- `def-projected-contact-dynamics-and-euler-step` · definition — Projected contact dynamics and explicit projection Euler step
- `lem-naive-all-pairs-collision-search-has-quadratic-work` · lemma — Naive all-pairs sphere-contact search has quadratic work
- `lem-normal-cone-maximal-monotone-and-projection-resolvent` · lemma — The convex normal-cone operator is maximal monotone and its resolvent is projection
- `alg-certified-projected-euler-method` · algorithm — Projected Euler with certified inexact projection solves
- `lem-projected-contact-solutions-are-unique` · lemma — Solutions of projected contact dynamics are unique under the inherited choice assumptions
- `thm-projected-euler-existence-uniqueness-and-convergence` · theorem — Existence and uniqueness for projected dynamics and convergence of projection Euler under countable and dependent choice
- `thm-projected-euler-square-root-global-error` · theorem — A square-root global error bound for projected Euler with certified projection tolerances

### `nonsmooth-contact-time-stepping-and-projections-examples` — Nonsmooth contact time stepping and projections — Examples (5 item(s))

- `cex-nonconvex-set-can-have-nonunique-nearest-points` · counterexample — A closed nonconvex set can have two nearest points
- `ex-frictionless-sphere-binary-impact-calculation` · example — A two-sphere impact with unequal masses
- `ex-one-dimensional-impact-restitution-boundaries` · example — Inelastic and elastic endpoints of a scalar impact step
- `ex-penalty-stiffness-requires-time-step-control` · example — A stiff penalty equation defeats a fixed explicit step
- `ex-projected-overdamped-particle-euler-trajectory` · example — Projected Euler for a constrained overdamped particle

### `finite-generator-master-equations-and-uniformization` — Finite generator master equations and uniformization (13 item(s))

- `def-xd-finite-column-generator` · definition — Finite column generator
- `lem-xd-finite-matrix-exponential-series` · lemma — Finite matrix exponential series and its identities
- `lem-xd-geometric-poisson-tail-bound` · lemma — A geometric upper bound for a Poisson right tail
- `def-xd-countable-nonexplosive-ctmc` · definition — Given countable nonexplosive pure-jump chain with finite rates
- `def-xd-countable-l1-distance` · definition — Countable-state l1 distance for mass functions
- `lem-xd-uniformized-matrix-is-stochastic` · lemma — The finite uniformized matrix is column stochastic
- `def-xd-finite-state-projection-and-cemetery-lift` · definition — Killed finite-state projection and cemetery lift
- `thm-xd-finite-generator-master-equation-uniformization` · theorem — Finite master equation and uniformization formula
- `alg-xd-budgeted-uniformization-accumulation` · algorithm — Budgeted uniformization accumulation with time splitting
- `thm-xd-uniformization-truncation-and-error` · theorem — Uniformization truncation, mass loss, and arithmetic-error ledger
- `thm-xd-finite-state-projection-loss-and-observable-bound` · theorem — Finite-state killed projection has an exact lost-mass certificate
- `alg-xd-finite-budget-adaptive-projection` · algorithm — Finite-budget adaptive finite-state projection
- `thm-xd-finite-budget-adaptive-projection-soundness` · theorem — Adaptive projection certificates are sound and finite-budgeted

### `finite-generator-master-equations-and-uniformization-examples` — Finite generator master equations and uniformization — Examples (4 item(s))

- `ex-xd-two-state-gating-uniformization` · example — Two-state gating through uniformization
- `ex-xd-birth-death-poisson-tail` · example — Three-state birth-death chain with a certified Poisson tail
- `ex-xd-immigration-death-finite-state-projection` · example — Immigration-death chain projected onto two states
- `ex-xd-equal-mean-distinct-probability-vectors` · example — Equal mean trajectories do not determine a master-equation state

### `stability-regions-and-stiff-equations` — Stability regions and stiff equations (8 item(s))

- `def-matrix-contractivity-and-logarithmic-norm` · definition — Matrix-step contractivity and the logarithmic norm in a specified inner product
- `def-absolute-stability-regions-for-one-step-and-multistep-methods` · definition — Scalar absolute stability, A-stability, L-stability, and multistep root regions
- `thm-backward-euler-a-and-l-stability` · theorem — Backward Euler is A-stable and L-stable
- `thm-trapezoidal-a-stable-not-l-stable` · theorem — The trapezoidal rule is A-stable but not L-stable
- `lem-bdf2-root-locus-location` · lemma — BDF2 roots on or outside the unit disk map to the closed right half-plane
- `thm-explicit-euler-absolute-stability-disk` · theorem — Forward Euler has the closed unit disk centered at −1 as its absolute-stability region
- `thm-bdf2-is-a-stable` · theorem — Constant-step BDF2 is A-stable under the multistep root condition
- `prop-bdf2-roots-vanish-in-stiff-limit` · proposition — Both constant-step BDF2 test roots vanish in the stiff limit

### `stability-regions-and-stiff-equations-examples` — Stability regions and stiff equations — Examples (4 item(s))

- `cex-backward-euler-scalar-stability-not-matrix-contractivity` · counterexample — Backward Euler scalar A-stability does not imply matrix contractivity
- `ex-forward-euler-frequency-step-restriction` · example — Forward Euler's stability region restricts both decay rate and frequency
- `ex-diagonal-fast-slow-system-restricts-explicit-step` · example — A fast component restricts the forward-Euler step in a diagonal fast-slow system
- `ex-stiff-decay-mode-damping-comparison` · example — Backward Euler and BDF2 damp a fast scalar mode while trapezoidal does not

## Your seams

Your pages depend on another group's:

- `nonsmooth-contact-time-stepping-and-projections` requires `inequality-kkt-duality-and-optimality-certificates` (group u, batch 6)
- `nonsmooth-contact-time-stepping-and-projections` requires `proximal-gradient-and-accelerated-composite-optimization` (group w, batch 27)
- `nonsmooth-contact-time-stepping-and-projections` requires `event-location-and-hybrid-trajectory-error` (group l, batch 105)
- `finite-generator-master-equations-and-uniformization` requires `sparse-matrix-models-and-kernel-costs` (group m, batch 2)
- `finite-generator-master-equations-and-uniformization` requires `one-step-ode-consistency-and-local-error` (group a, batch 7)
- `finite-generator-master-equations-and-uniformization` requires `stochastic-reaction-jump-simulation-and-coupling` (group a, batch 10)
- `finite-generator-master-equations-and-uniformization` requires `global-ode-and-density-error` (group c, batch 28)
- `stability-regions-and-stiff-equations` requires `runge-kutta-methods-and-order` (group d, batch 35)
- `stability-regions-and-stiff-equations` requires `linear-multistep-methods-and-dahlquist-equivalence` (group d, batch 36)

Another group's pages depend on yours:

- `certified-stationary-distribution-and-hitting-statistic-numerics` (group h) requires your `finite-generator-master-equations-and-uniformization`
- `positive-conservative-production-destruction-integrators` (group j) requires your `finite-generator-master-equations-and-uniformization`
- `positive-conservative-production-destruction-integrators` (group j) requires your `stability-regions-and-stiff-equations`

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
