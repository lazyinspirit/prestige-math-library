# Step 5 adjudication — group **g**, run `numerical-optimization-dynamics-2026-10-16`

You are the group Alpha for batches 53, 54, 63: 3 A/B pair(s), 6 page(s), 62 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **53**: `research/numerical-optimization-dynamics-2026-10-16-batch-53-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **54**: `research/numerical-optimization-dynamics-2026-10-16-batch-54-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **63**: `research/numerical-optimization-dynamics-2026-10-16-batch-63-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 53 | `adaptive-ode-solvers-and-error-estimation` | A | numerical-differential-equations-and-stochastic-dynamics | 2390 | `one-step-ode-consistency-and-local-error`, `outward-rounded-interval-and-ball-arithmetic`, `runge-kutta-methods-and-order` |
| 53 | `adaptive-ode-solvers-and-error-estimation-examples` | B | numerical-differential-equations-and-stochastic-dynamics | 2391 | `adaptive-ode-solvers-and-error-estimation` |
| 54 | `geometric-numerical-integration` | A | numerical-differential-equations-and-stochastic-dynamics | 2392 | `hamiltonian-mechanics-and-completely-integrable-systems`, `symplectic-manifolds-moser-stability-and-darboux-weinstein-theory`, `runge-kutta-methods-and-order`, `hamiltonian-monte-carlo-and-leapfrog` |
| 54 | `geometric-numerical-integration-examples` | B | numerical-differential-equations-and-stochastic-dynamics | 2393 | `geometric-numerical-integration` |
| 63 | `periodic-orbit-shooting-collocation-and-floquet-error` | A | numerical-differential-equations-and-stochastic-dynamics | 2410 | `matrix-differentiation-and-first-order-spectral-perturbation`, `nonlinear-equations-and-newton-methods`, `nonlinear-boundary-value-solvers`, `pseudo-arclength-continuation-and-fold-certificates`, `local-bifurcation-normal-forms-and-numerical-certificates`, `verified-linear-systems-and-spectral-enclosures`, `interval-newton-krawczyk-and-polynomial-root-isolation` |
| 63 | `periodic-orbit-shooting-collocation-and-floquet-error-examples` | B | numerical-differential-equations-and-stochastic-dynamics | 2411 | `periodic-orbit-shooting-collocation-and-floquet-error` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `adaptive-ode-solvers-and-error-estimation` — Adaptive ODE solvers and error estimation (17 item(s))

- `lem-maximal-ode-solution-extends-from-compact-tube` · lemma — A maximal ODE solution cannot remain in a compact tube to a finite endpoint
- `thm-ode-residual-a-posteriori-error-bound` · theorem — A posteriori ODE error bound from the continuous residual
- `thm-piecewise-c1-ode-residual-a-posteriori-error-bound` · theorem — Choice-free residual error bound for piecewise-C1 ODE reconstructions
- `def-embedded-runge-kutta-pair-and-error-estimator` · definition — Embedded Runge–Kutta pair and difference estimator
- `alg-bounded-adaptive-runge-kutta-controller` · algorithm — Finite-budget adaptive Runge–Kutta controller
- `def-heun-euler-embedded-runge-kutta-pair` · definition — Euler–Heun embedded Runge–Kutta pair
- `prop-embedded-pair-estimator-asymptotics` · proposition — A nonzero leading defect makes the embedded difference asymptotically match the low-order defect
- `def-heun-quadratic-dense-output` · definition — Quadratic continuous extension for Heun's method
- `def-validated-residual-tube-certificate` · definition — Finite rational residual-tube certificate for an ODE trajectory
- `rem-fixed-mesh-global-error-does-not-certify-adaptivity` · remark — A fixed-mesh global error theorem does not certify an adaptive controller
- `thm-bounded-adaptive-runge-kutta-controller-terminates` · theorem — The bounded adaptive Runge–Kutta controller terminates
- `thm-heun-euler-pair-local-orders-and-estimator` · theorem — Local orders and leading estimator term for the Euler–Heun pair
- `lem-rational-expression-derivative-recursion-correct` · lemma — Symbolic derivative recursion for a rational expression DAG is correct
- `thm-heun-dense-output-local-order-two` · theorem — Heun's quadratic dense output has local order two
- `alg-validated-residual-tube-certificate-checker` · algorithm — Finite checker for rational residual-tube certificates
- `thm-validated-residual-tube-certificate-sound` · theorem — A validated rational residual-tube certificate encloses an exact ODE solution
- `thm-validated-residual-tube-checker-terminates` · theorem — The rational residual-tube certificate checker terminates

### `adaptive-ode-solvers-and-error-estimation-examples` — Adaptive ODE solvers and error estimation — Examples (3 item(s))

- `ex-below-roundoff-tolerance-breaks-embedded-estimate` · example — A tolerance below roundoff can pass with a zero embedded difference
- `ex-fast-decay-problem-rejects-at-minimum-step` · example — A fast-decay test problem is rejected at the minimum step
- `ex-heun-euler-estimator-leading-term-vanishes` · example — The leading Euler–Heun estimator coefficient can vanish

### `geometric-numerical-integration` — Geometric numerical integration (13 item(s))

- `def-local-leapfrog-domain-on-an-open-configuration-set` · definition — Local domain restriction for kick, drift, and leapfrog maps
- `lem-local-hamiltonian-flow-preserves-symplectic-matrix` · lemma — A smooth local Hamiltonian flow preserves the canonical symplectic matrix
- `alg-local-symplectic-euler-step` · algorithm — Local kick-then-drift symplectic Euler step
- `alg-implicit-midpoint-hamiltonian-step` · algorithm — Local implicit midpoint step for a Hamiltonian vector field
- `lem-canonical-kick-and-drift-shears-have-symplectic-jacobians` · lemma — Canonical kick and drift shears satisfy the symplectic Jacobian identity
- `prop-local-leapfrog-and-symplectic-euler-are-symplectic` · proposition — Local leapfrog and kick-then-drift symplectic Euler are symplectic
- `thm-local-symplectic-euler-and-leapfrog-trajectory-errors` · theorem — Local and finite-time trajectory error for symplectic Euler and leapfrog
- `thm-implicit-midpoint-branch-symplectic-order-and-error` · theorem — The admitted implicit midpoint branch is symplectic and second order
- `lem-finite-modified-hamiltonian-exists` · lemma — A finite formal logarithm has Hamiltonian coefficients on a star-shaped domain
- `lem-truncated-modified-flow-matches-map` · lemma — A fixed finite modified flow matches its method map to the stated Taylor order
- `lem-finite-modified-hamiltonian-close-to-original` · lemma — A fixed finite modified Hamiltonian is close to the original energy
- `lem-one-step-modified-energy-defect` · lemma — The finite modified Hamiltonian has a bounded one-step defect
- `thm-finite-order-modified-energy-bound` · theorem — Finite-order modified energy control on a compact tube

### `geometric-numerical-integration-examples` — Geometric numerical integration — Examples (3 item(s))

- `ex-backward-euler-is-a-stable-but-not-symplectic` · example — Backward Euler is A-stable but not symplectic
- `ex-stoermer-verlet-bounded-harmonic-oscillator-energy` · example — Störmer–Verlet has bounded oscillatory energy error on the harmonic oscillator
- `ex-symplectic-euler-harmonic-oscillator` · example — Kick-then-drift symplectic Euler on the harmonic oscillator

### `periodic-orbit-shooting-collocation-and-floquet-error` — Periodic orbit shooting collocation and floquet error (22 item(s))

- `def-verified-flow-variational-range-oracle` · definition — Exact range-oracle contract for validated flow and monodromy enclosures
- `lem-positive-convex-polygon-winding-index` · lemma — A positively oriented convex polygon has winding index one inside and zero outside
- `alg-validated-euler-flow-and-monodromy-enclosure` · algorithm — Validated forward-Euler tube for the periodic flow and variational equation
- `def-phase-bordered-periodic-orbit-bvp` · definition — The phase-bordered periodic-orbit BVP residual
- `lem-autonomous-periodic-orbit-has-neutral-floquet-multiplier` · lemma — An autonomous periodic orbit has a neutral Floquet multiplier
- `thm-c2-ode-flow-on-common-tube` · theorem — A $C^2$ vector field has a $C^2$ flow on a common compact tube
- `lem-periodic-poincare-spectrum-matches-transverse-monodromy` · lemma — The Poincare derivative has precisely the non-phase monodromy multipliers
- `lem-phase-bordered-shooting-jacobian-invertibility` · lemma — A simple neutral multiplier and transverse phase make the shooting Jacobian invertible
- `prop-phase-bordered-bvp-root-equivalence` · proposition — Zeros of the phase-bordered BVP are phase-fixed periodic orbits
- `thm-validated-euler-flow-and-monodromy-enclosure-soundness` · theorem — The validated Euler tube encloses the exact periodic flow and monodromy matrix
- `lem-phase-border-implies-periodic-bvp-linearization-bounded-inverse` · lemma — A transverse phase border makes the periodic BVP linearization boundedly invertible
- `def-phase-bordered-multiple-shooting-and-midpoint-collocation` · definition — Multiple-shooting and midpoint-collocation residuals for a phase-fixed periodic orbit
- `def-validated-periodic-shooting-jet-enclosure` · definition — Certified residual, Jacobian, trajectory, and monodromy enclosures for periodic shooting
- `thm-periodic-midpoint-collocation-error-budget` · theorem — Periodic midpoint collocation has an explicit local second-order error budget
- `alg-validated-periodic-orbit-corrector` · algorithm — Finite-budget phase-fixed periodic-orbit correction and validation
- `lem-separated-simple-floquet-multiplier-perturbation-bound` · lemma — A separated simple Floquet multiplier has a left/right-conditioned finite enclosure
- `thm-periodic-shooting-residual-to-orbit-error-budget` · theorem — A certified shooting residual gives an explicit local periodic-orbit error bound
- `alg-floquet-multiplier-cluster-certifier` · algorithm — Finite complex-contour validation of Floquet multiplier clusters
- `alg-periodic-orbit-pseudoarclength-continuation` · algorithm — Finite pseudo-arclength continuation of phase-fixed periodic orbits
- `thm-floquet-multiplier-cluster-certificate-soundness` · theorem — A verified contour count encloses every Floquet multiplier in a cluster
- `thm-validated-periodic-orbit-certificate-soundness` · theorem — A Krawczyk inclusion certifies a unique phase-fixed nonconstant periodic orbit
- `thm-orbital-stability-from-certified-floquet-multipliers` · theorem — Strict Floquet cluster enclosures certify orbital asymptotic stability

### `periodic-orbit-shooting-collocation-and-floquet-error-examples` — Periodic orbit shooting collocation and floquet error — Examples (4 item(s))

- `ex-coarse-euler-variational-step-gives-spurious-instability` · example — A coarse Euler variational step gives a spurious unstable multiplier
- `ex-phase-singularity-in-stable-planar-oscillator` · example — A stable planar cycle can have a singular phase slice
- `ex-near-unit-floquet-multiplier-is-inconclusive` · example — A near-unit multiplier enclosure does not decide stability
- `ex-van-der-pol-stability-conditional-on-validated-enclosure` · example — Conditional van der Pol stability from a validated enclosure

## Your seams

Your pages depend on another group's:

- `adaptive-ode-solvers-and-error-estimation` requires `one-step-ode-consistency-and-local-error` (group a, batch 7)
- `adaptive-ode-solvers-and-error-estimation` requires `outward-rounded-interval-and-ball-arithmetic` (group n, batch 14)
- `adaptive-ode-solvers-and-error-estimation` requires `runge-kutta-methods-and-order` (group d, batch 35)
- `geometric-numerical-integration` requires `runge-kutta-methods-and-order` (group d, batch 35)
- `periodic-orbit-shooting-collocation-and-floquet-error` requires `nonlinear-equations-and-newton-methods` (group u, batch 3)
- `periodic-orbit-shooting-collocation-and-floquet-error` requires `nonlinear-boundary-value-solvers` (group b, batch 22)
- `periodic-orbit-shooting-collocation-and-floquet-error` requires `pseudo-arclength-continuation-and-fold-certificates` (group c, batch 29)
- `periodic-orbit-shooting-collocation-and-floquet-error` requires `local-bifurcation-normal-forms-and-numerical-certificates` (group e, batch 42)
- `periodic-orbit-shooting-collocation-and-floquet-error` requires `verified-linear-systems-and-spectral-enclosures` (group s, batch 61)
- `periodic-orbit-shooting-collocation-and-floquet-error` requires `interval-newton-krawczyk-and-polynomial-root-isolation` (group s, batch 62)

Another group's pages depend on yours:

- `constrained-dynamics-shake-and-rattle` (group j) requires your `geometric-numerical-integration`
- `event-location-and-hybrid-trajectory-error` (group l) requires your `adaptive-ode-solvers-and-error-estimation`
- `direct-transcription-and-numerical-ode-optimal-control` (group ae) requires your `adaptive-ode-solvers-and-error-estimation`
- `interacting-particle-mean-field-and-vortex-blob-error` (group ai) requires your `geometric-numerical-integration`

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
