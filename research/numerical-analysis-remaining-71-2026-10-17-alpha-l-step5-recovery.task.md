# Step 5 adjudication — group **l**, run `numerical-analysis-remaining-71-2026-10-17`

You are the group Alpha for batches 34, 35, 36: 3 A/B pair(s), 6 page(s), 59 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **34**: `research/numerical-analysis-remaining-71-2026-10-17-batch-34-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **35**: `research/numerical-analysis-remaining-71-2026-10-17-batch-35-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **36**: `research/numerical-analysis-remaining-71-2026-10-17-batch-36-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 34 | `mixed-hdiv-fluxes-and-darcy-discretization` | A | numerical-pdes-and-spatial-discretization | 2622 | `mixed-finite-elements-and-stokes-stability` |
| 34 | `mixed-hdiv-fluxes-and-darcy-discretization-examples` | B | numerical-pdes-and-spatial-discretization | 2623 | `mixed-hdiv-fluxes-and-darcy-discretization` |
| 35 | `elasticity-near-incompressibility-and-locking-free-discretization` | A | numerical-pdes-and-spatial-discretization | 2624 | `ceas-lemma-and-aubin-nitsche-error-estimates`, `mixed-finite-elements-and-stokes-stability` |
| 35 | `elasticity-near-incompressibility-and-locking-free-discretization-examples` | B | numerical-pdes-and-spatial-discretization | 2625 | `elasticity-near-incompressibility-and-locking-free-discretization` |
| 36 | `hyperbolic-dg-and-summation-by-parts-discretizations` | A | numerical-pdes-and-spatial-discretization | 2626 | `finite-element-meshes-and-interpolation`, `invariant-domain-and-entropy-stable-conservative-schemes`, `runge-kutta-methods-and-order` |
| 36 | `hyperbolic-dg-and-summation-by-parts-discretizations-examples` | B | numerical-pdes-and-spatial-discretization | 2627 | `hyperbolic-dg-and-summation-by-parts-discretizations` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `mixed-hdiv-fluxes-and-darcy-discretization` — Mixed H(div) fluxes, Darcy flow and local conservation (27 item(s))

- `def-na-contravariant-piola-map` · definition — Contravariant Piola map
- `def-na-hdiv-space` · definition — The real H(div) space
- `lem-na-l2-zero-mean-hilbert` · lemma — The real zero-mean $L^2$ space is Hilbert
- `lem-na-smooth-neighborhood-dense-in-h1-simplex` · lemma — Smooth-neighborhood density in H1 of a simplex
- `lem-na-hdiv-weak-normal-trace` · lemma — Weak normal trace by Green duality
- `lem-na-piola-divergence-and-flux-identities` · lemma — Piola divergence and facet-flux identities
- `def-na-h0div-space` · definition — Zero-normal-trace H(div) space
- `def-na-simplicial-mesh-rt-bdm-spaces` · definition — Affine simplicial meshes and RT/BDM spaces
- `lem-na-h0div-div-zero-mean` · lemma — Zero mean of the divergence under zero normal trace
- `lem-na-h1-zero-boundary-is-zero-normal-hdiv` · lemma — H1-zero fields have zero weak H(div) normal trace
- `lem-na-hdiv-is-hilbert-and-h0div-closed` · lemma — H(div) is Hilbert and H0(div) is closed
- `def-na-neumann-darcy-mixed-problem` · definition — No-flow mixed Darcy problem and coefficient norms
- `lem-na-cell-average-l2-projection` · lemma — Cell averaging is the $L^2$ projection onto P0
- `lem-na-piola-preserves-rt-bdm-spaces` · lemma — Piola maps RT and BDM polynomial families onto the physical cell
- `lem-na-rt0-p0-kernel-is-divergencefree` · lemma — The RT0/P0 discrete kernel is exactly divergence-free
- `lem-na-simplex-h1-facet-trace-bound` · lemma — H1 facet trace inequality on shape-regular simplices
- `def-na-hybridized-rt0-darcy-system` · definition — Hybridized no-flow RT0/P0 Darcy system
- `lem-na-h1-interior-facet-traces-agree` · lemma — H1 traces agree across interior mesh facets
- `lem-na-rt0-unisolvence-and-global-conformity` · lemma — RT0 facet-flux unisolvence and global H(div) conformity
- `thm-na-darcy-mixed-wellposedness` · theorem — Continuous mixed Darcy well-posedness with pressure gauge
- `def-na-rt0-h1-interpolation` · definition — Canonical RT0 interpolation on H1 fields
- `thm-na-rt0-p0-local-mass-conservation` · theorem — Exact RT0/P0 element mass balance and normal continuity
- `lem-na-rt0-h1-interpolation-bounded-and-commuting` · lemma — Boundedness and divergence commutation of RT0 interpolation
- `thm-na-rt0-p0-bounded-divergence-lift-and-infsup` · theorem — Uniform RT0/P0 divergence lift and inf-sup bound
- `thm-na-rt0-bounded-commuting-projection` · theorem — Bounded commuting projection onto the zero-normal RT0 space
- `thm-na-rt0-p0-darcy-error-estimate` · theorem — RT0/P0 Darcy stability and flux/pressure error bound
- `thm-na-rt0-hybridization-equivalence-static-condensation` · theorem — Hybridization, static condensation, and pressure gauge

### `mixed-hdiv-fluxes-and-darcy-discretization-examples` — Mixed H(div) fluxes, Darcy flow and local conservation — Examples (4 item(s))

- `ex-na-primal-p1-flux-is-not-locally-conservative` · example — A continuous P1 pressure gives a nonconservative primal flux
- `ex-na-constant-flux-reference-triangle` · example — A constant Darcy flux on the reference triangle
- `ex-na-checkerboard-permeability-contrast` · example — Checkerboard permeability and the explicit contrast factor
- `ex-na-two-triangle-hybrid-static-condensation` · example — Two-triangle hybrid RT0 local elimination

### `elasticity-near-incompressibility-and-locking-free-discretization` — Linear elasticity, nearly incompressible limits and locking (7 item(s))

- `alg-linear-elasticity-rigid-body-nullspace-gauge` · algorithm — Algebraic gauge for a rigid-body stiffness nullspace
- `lem-linear-elasticity-rigid-body-gauge-system-is-nonsingular` · lemma — The rigid-body gauge system is nonsingular
- `def-linear-elasticity-displacement-formulation-and-data` · definition — Linear isotropic elasticity: displacement form and data
- `lem-linear-elasticity-mixed-pressure-gauge-is-well-defined` · lemma — The mixed pressure has the mean-zero gauge
- `thm-linear-elasticity-displacement-wellposedness-and-galerkin-bound` · theorem — Dirichlet elasticity energy bound and Galerkin estimate
- `def-linear-elasticity-near-incompressible-mixed-mini-pair` · definition — Displacement-pressure formulation and mini-element pair
- `thm-nearly-incompressible-elasticity-mini-uniform-stability-and-error` · theorem — Uniform mini-element stability through the incompressible limit

### `elasticity-near-incompressibility-and-locking-free-discretization-examples` — Linear elasticity, nearly incompressible limits and locking — Examples (3 item(s))

- `ex-linear-elasticity-rigid-body-stiffness-nullspace` · example — Rigid motions in a free-body stiffness nullspace
- `ex-linear-elasticity-cantilever-manufactured-shear` · example — A manufactured shear field on a clamped rectangle
- `ex-linear-elasticity-p1-volumetric-locking-fixed-mesh` · example — A fixed-mesh P1 volumetric-locking obstruction

### `hyperbolic-dg-and-summation-by-parts-discretizations` — Hyperbolic DG and summation-by-parts methods (14 item(s))

- `def-pe04-one-dimensional-interval-mesh-and-broken-polynomials` · definition — Oriented interval meshes and broken polynomial spaces
- `def-pe04-diagonal-norm-sbp-element-data` · definition — Diagonal-norm summation-by-parts element data
- `def-pe04-upwind-dg-transport-discretization` · definition — Upwind discontinuous Galerkin discretization of constant transport
- `alg-pe04-first-order-upwind-forward-euler` · algorithm — Forward-Euler step for degree-zero upwind DG transport
- `def-pe04-cellwise-l2-projection` · definition — Cellwise L2 projection relation onto broken polynomials
- `def-pe04-upwind-sbp-sat-transport-discretization` · definition — Upwind SBP-SAT discretization of constant transport
- `thm-pe04-upwind-dg-l2-energy-stability` · theorem — Upwind DG transport satisfies the semidiscrete L2 energy identity
- `def-pe04-flux-differencing-sbp-systems` · definition — Conservative flux-differencing SBP method for nonlinear systems
- `lem-pe04-cellwise-l2-projection-exists-best-approximation` · lemma — The cellwise L2 projection exists uniquely and is best approximation
- `thm-pe04-first-order-upwind-forward-euler-conservation-and-entropy` · theorem — The degree-zero upwind forward-Euler step preserves mass and convex entropy
- `thm-pe04-upwind-sbp-sat-l2-energy-stability` · theorem — Upwind SBP-SAT transport satisfies the semidiscrete L2 energy identity
- `thm-pe04-dg-smooth-solution-l2-error-bound` · theorem — Smooth-solution L2 error bound for upwind DG transport
- `thm-pe04-flux-differencing-sbp-conservation-and-entropy-stability` · theorem — Flux-differencing SBP is conservative and semidiscretely entropy stable
- `thm-pe04-ssprk33-first-order-upwind-entropy-preservation` · theorem — SSPRK(3,3) preserves the degree-zero upwind entropy bound

### `hyperbolic-dg-and-summation-by-parts-discretizations-examples` — Hyperbolic DG and summation-by-parts methods — Examples (4 item(s))

- `cex-pe04-underintegrated-burgers-collocation-entropy-growth` · counterexample — Underintegrated Burgers collocation can increase quadratic entropy
- `ex-pe04-central-versus-upwind-periodic-transport` · example — Central and upwind fluxes have different periodic dissipation
- `ex-pe04-upwind-transport-with-inflow` · example — A constant upwind DG state with inflow data on one interval
- `ex-pe04-sbp-inflow-sat-energy-identity` · example — The SBP inflow SAT produces the boundary energy term

## Your seams

Your pages depend on another group's:

- `mixed-hdiv-fluxes-and-darcy-discretization` requires `mixed-finite-elements-and-stokes-stability` (group k, batch 31)
- `elasticity-near-incompressibility-and-locking-free-discretization` requires `mixed-finite-elements-and-stokes-stability` (group k, batch 31)
- `hyperbolic-dg-and-summation-by-parts-discretizations` requires `invariant-domain-and-entropy-stable-conservative-schemes` (group k, batch 33)

Another group's pages depend on yours:

- `discrete-de-rham-complexes-and-edge-elements` (group m) requires your `mixed-hdiv-fluxes-and-darcy-discretization`
- `variational-inequality-and-contact-finite-elements` (group t) requires your `elasticity-near-incompressibility-and-locking-free-discretization`
- `compressible-viscous-flow-and-entropy-stable-fluxes` (group t) requires your `hyperbolic-dg-and-summation-by-parts-discretizations`
- `ale-interface-and-partitioned-multiphysics-discretization` (group w) requires your `elasticity-near-incompressibility-and-locking-free-discretization`
- `isogeometric-galerkin-methods` (group w) requires your `elasticity-near-incompressibility-and-locking-free-discretization`

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
