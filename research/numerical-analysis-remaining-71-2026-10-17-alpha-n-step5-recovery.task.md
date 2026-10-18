# Step 5 adjudication — group **n**, run `numerical-analysis-remaining-71-2026-10-17`

You are the group Alpha for batches 40, 41, 42: 3 A/B pair(s), 6 page(s), 73 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **40**: `research/numerical-analysis-remaining-71-2026-10-17-batch-40-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **41**: `research/numerical-analysis-remaining-71-2026-10-17-batch-41-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **42**: `research/numerical-analysis-remaining-71-2026-10-17-batch-42-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/numerical-analysis-remaining-71-2026-10-17-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 40 | `graph-diffusion-and-metric-network-pde-numerics` | A | numerical-pdes-and-spatial-discretization | 2634 | `finite-generator-master-equations-and-uniformization`, `elliptic-finite-difference-methods`, `parabolic-finite-element-methods`, `algebraic-and-spectral-graph-theory`, `conjugate-gradients-minres-and-preconditioning` |
| 40 | `graph-diffusion-and-metric-network-pde-numerics-examples` | B | numerical-pdes-and-spatial-discretization | 2635 | `graph-diffusion-and-metric-network-pde-numerics` |
| 41 | `energy-stable-incompressible-navier-stokes-discretization` | A | numerical-pdes-and-spatial-discretization | 2636 | `mixed-finite-elements-and-stokes-stability`, `nonlinear-parabolic-compactness-and-monotone-evolution`, `the-heat-kernel-and-the-cauchy-problem`, `finite-element-pde-constrained-optimization`, `parabolic-finite-element-methods` |
| 41 | `energy-stable-incompressible-navier-stokes-discretization-examples` | B | numerical-pdes-and-spatial-discretization | 2637 | `energy-stable-incompressible-navier-stokes-discretization` |
| 42 | `yee-fdtd-and-transient-maxwell-discretization` | A | numerical-pdes-and-spatial-discretization | 2638 | `hyperbolic-finite-difference-methods`, `parabolic-finite-element-methods`, `discrete-de-rham-complexes-and-edge-elements` |
| 42 | `yee-fdtd-and-transient-maxwell-discretization-examples` | B | numerical-pdes-and-spatial-discretization | 2639 | `yee-fdtd-and-transient-maxwell-discretization` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `graph-diffusion-and-metric-network-pde-numerics` — Graph diffusion and metric network pde numerics (15 item(s))

- `def-anchored-finite-metric-graph-h1-space` · definition — Anchored finite metric graph and its H1 energy space
- `def-conservative-network-advection-routing` · definition — Conservative nonnegative network advection routing
- `def-finite-weighted-network-diffusion-data` · definition — Finite weighted network diffusion data
- `def-metric-graph-p1-edge-mesh` · definition — Conforming P1 edge mesh on an anchored metric graph
- `lem-anchored-metric-graph-h1-space-is-hilbert` · lemma — The anchored metric graph H1 space is a closed Hilbert subspace
- `lem-anchored-metric-graph-poincare` · lemma — Path Poincare inequality on an anchored finite metric graph
- `lem-metric-graph-kirchhoff-green-identity` · lemma — Green identity and Kirchhoff flux cancellation on a metric graph
- `lem-weighted-network-energy-kernel-and-mass-balance` · lemma — Energy, kernel, and weighted mass balance for a finite network
- `thm-conservative-network-routing-conserves-flux` · theorem — A conservative routing matrix preserves total flux
- `cor-weighted-network-gauged-cg-applicability` · corollary — Exact-arithmetic CG after grounding or a Neumann gauge
- `lem-metric-graph-p1-interpolation-estimate` · lemma — P1 edge interpolation estimate with junction compatibility
- `thm-metric-graph-p1-parabolic-semidiscrete-stability` · theorem — Energy-stable semidiscrete P1 evolution on an anchored metric graph
- `thm-metric-graph-weak-elliptic-problem` · theorem — Well-posed weak elliptic diffusion on an anchored metric graph
- `thm-weighted-network-semigroup-and-euler-positivity` · theorem — Positive graph-diffusion semigroup and Euler maps
- `thm-metric-graph-p1-fem-cea-and-energy-rate` · theorem — Cea and O(h) energy error for conforming metric graph P1 FEM

### `graph-diffusion-and-metric-network-pde-numerics-examples` — Graph diffusion and metric network pde numerics — Examples (4 item(s))

- `cex-density-continuity-fails-unequal-speed-routing` · counterexample — Density continuity can violate conservative advection balance
- `ex-disconnected-unanchored-network-solve` · example — A disconnected unanchored network gives a singular steady solve
- `ex-y-junction-metric-graph-kirchhoff-flux` · example — A Y-junction satisfies Kirchhoff flux balance
- `ex-three-compartment-weighted-migration` · example — Three-compartment migration conserves weighted mass

### `energy-stable-incompressible-navier-stokes-discretization` — Evolutionary incompressible flow discretization (23 item(s))

- `lem-na-halfline-heat-logarithmic-mass-loss` · lemma — Logarithmic halfline heat mass loss at the pressure endpoint
- `lem-na-shrinking-boundary-stream-corrector` · lemma — A shrinking clamped-stream correction on the square
- `lem-na-solenoidal-scalar-equations-give-weak-continuity` · lemma — Scalar weak equations give a weakly continuous Hilbert-space representative
- `def-na-evolutionary-skew-convective-form` · definition — The skew convective form for incompressible flow
- `lem-na-evolutionary-skew-convective-form-bound` · lemma — Continuity, energy cancellation, and Sobolev bounds for skew convection
- `def-na-evolutionary-incompressible-ns-weak-solution` · definition — Energy weak solutions of incompressible Navier–Stokes
- `lem-na-evolutionary-ns-weak-form-is-well-defined` · lemma — Integrability of the energy weak Navier–Stokes formulation
- `def-na-solenoidal-energy-weak-ns-velocity` · definition — Solenoidal energy weak velocity for incompressible Navier–Stokes
- `def-na-mini-navier-stokes-backward-euler-scheme` · definition — The mixed mini-element backward Euler Navier–Stokes scheme
- `lem-na-two-dimensional-solenoidal-energy-velocity-uniqueness` · lemma — Uniqueness and strong trace for two-dimensional solenoidal energy velocities
- `lem-na-mini-be-scheme-is-well-defined` · lemma — Well-definedness of the finite-dimensional mini backward Euler equations
- `thm-na-ns-weak-solution-uniqueness-2d-and-weak-strong-3d` · theorem — Two-dimensional uniqueness and conditional three-dimensional weak–strong uniqueness
- `lem-na-continuous-pressure-recovery-from-solenoidal-residual` · lemma — Mean-zero pressure recovery from a solenoidal residual
- `lem-na-mini-fortin-l2-approximation` · lemma — The mini-element Fortin map approximates in L2
- `thm-na-mini-be-step-existence-energy` · theorem — Backward Euler MINI step existence and discrete energy bound
- `lem-na-mini-fortin-h2-approximation` · lemma — Second-order L2 approximation by the MINI Fortin map
- `lem-na-mini-weak-solenoidal-compactness` · lemma — Strong L2 compactness for weakly solenoidal MINI trajectories
- `thm-na-mini-solenoidal-stokes-projection-error` · theorem — Approximation by the MINI solenoidal energy projection
- `thm-na-mini-navier-stokes-be-subsequential-limit` · theorem — MINI backward Euler converges subsequentially to a solenoidal energy weak velocity
- `thm-na-mini-be-smooth-velocity-error` · theorem — Smooth-branch velocity error for backward Euler MINI
- `lem-na-solenoidal-evolution-integrated-pressure-recovery` · lemma — Integrated pressure recovery and MINI pressure-primitive convergence
- `thm-na-mini-be-smooth-integrated-pressure-error` · theorem — First-order smooth pressure-primitive error for backward Euler MINI
- `rem-na-pe06-pressure-recovery-escalation` · remark — PE06 instantaneous pressure refutations and retained primitive estimates

### `energy-stable-incompressible-navier-stokes-discretization-examples` — Evolutionary incompressible flow discretization — Examples (7 item(s))

- `ex-na-periodic-taylor-green-vortex` · example — The two-dimensional Taylor–Green vortex on the flat torus
- `ex-na-zero-mean-pressure-gauge` · example — Fixing the spatially constant pressure mode
- `ex-na-unit-square-mini-mesh-family` · example — A matching shape-regular MINI mesh family on the unit square
- `ex-na-mini-backward-euler-energy-budget` · example — Zero-forcing discrete energy budget
- `cex-na-graded-mini-mass-initialization-pressure-rate` · counterexample — Graded MINI mass initialization can destroy the smooth instantaneous pressure rate
- `ex-na-conditional-three-dimensional-flow-computation` · example — A conditional three-dimensional computation with no uniqueness claim
- `cex-na-polyhedral-energy-ns-pressure-endpoint` · counterexample — An energy Navier–Stokes velocity on the square without endpoint-integrable pressure

### `yee-fdtd-and-transient-maxwell-discretization` — Yee FDTD and transient Maxwell finite elements (20 item(s))

- `lem-maxwell-rectangular-stokes-identity` · lemma — Stokes identity on a rectangular Yee face
- `def-transient-maxwell-system-with-material-interfaces` · definition — Transient Maxwell system with piecewise materials and boundary conditions
- `def-maxwell-discrete-cochain-and-yee-grid` · definition — Oriented Maxwell cochains, masses, and the Yee grid
- `lem-maxwell-discrete-incidence-identities` · lemma — Incidence curl has zero discrete divergence and gradient curl
- `lem-maxwell-yee-step-matrix-is-positive-definite` · lemma — The midpoint-conductivity Yee electric solve is well defined
- `def-maxwell-edge-fem-semidiscretization` · definition — Edge-face Maxwell finite element semidiscretization
- `alg-maxwell-yee-leapfrog-update` · algorithm — Lossless or midpoint-conductive Yee leapfrog update
- `lem-maxwell-finite-dimensional-ode-existence-uniqueness` · lemma — Existence and uniqueness for the finite-dimensional Maxwell ODE
- `def-maxwell-edge-ritz-projection` · definition — Maxwell curl-energy Ritz projection
- `lem-maxwell-nedelec-smooth-interpolation-estimate` · lemma — Smooth lowest-order Nedelec and RT0 interpolation estimate
- `thm-maxwell-yee-gauss-constraints-propagate` · theorem — Compatible discrete charge and magnetic divergence propagate
- `thm-maxwell-yee-strict-cfl-modified-energy` · theorem — Strict spectral CFL positivity and Yee modified energy
- `lem-maxwell-periodic-yee-consistency` · lemma — Second-order consistency of the homogeneous periodic Yee scheme
- `thm-maxwell-edge-fem-energy-conservation` · theorem — Semidiscrete edge-face Maxwell energy conservation
- `lem-maxwell-edge-ritz-projection-well-defined` · lemma — Well-definedness and best approximation of the Maxwell Ritz map
- `thm-maxwell-yee-cartesian-dispersion-and-cfl` · theorem — Cartesian Yee symbol, numerical dispersion, and grid CFL bound
- `thm-maxwell-periodic-yee-smooth-solution-error` · theorem — Finite-time Yee error for smooth homogeneous periodic Maxwell fields
- `thm-maxwell-yee-midpoint-conductivity-energy-balance` · theorem — Midpoint conductivity dissipates the Yee discrete energy
- `lem-maxwell-magnetic-compatible-initial-projection` · lemma — Compatible magnetic initial projection for the Maxwell edge method
- `thm-maxwell-edge-fem-smooth-solution-error` · theorem — Smooth PEC edge finite element Maxwell error from compatible projections

### `yee-fdtd-and-transient-maxwell-discretization-examples` — Yee FDTD and transient Maxwell finite elements — Examples (4 item(s))

- `ex-maxwell-pec-rectangular-cavity-mode` · example — A smooth Maxwell eigenmode in a rectangular PEC cavity
- `ex-maxwell-dielectric-jump-reflection` · example — Normal-incidence reflection at a planar dielectric interface
- `ex-maxwell-incompatible-current-gauss-drift` · example — A current violating discrete continuity creates Gauss-law drift
- `ex-maxwell-yee-periodic-plane-wave-dispersion` · example — Periodic Yee plane-wave dispersion and the cubic CFL limit

## Your seams

Your pages depend on another group's:

- `energy-stable-incompressible-navier-stokes-discretization` requires `mixed-finite-elements-and-stokes-stability` (group k, batch 31)
- `energy-stable-incompressible-navier-stokes-discretization` requires `nonlinear-parabolic-compactness-and-monotone-evolution` (group m, batch 39)
- `yee-fdtd-and-transient-maxwell-discretization` requires `discrete-de-rham-complexes-and-edge-elements` (group m, batch 38)

Another group's pages depend on yours:

- `projection-and-pressure-correction-for-incompressible-flow` (group q) requires your `energy-stable-incompressible-navier-stokes-discretization`
- `supg-and-residual-based-stabilized-finite-elements` (group s) requires your `energy-stable-incompressible-navier-stokes-discretization`
- `ale-interface-and-partitioned-multiphysics-discretization` (group w) requires your `energy-stable-incompressible-navier-stokes-discretization`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/numerical-analysis-remaining-71-2026-10-17-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-5 closure recovery, `numerical-analysis-remaining-71-2026-10-17`

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
