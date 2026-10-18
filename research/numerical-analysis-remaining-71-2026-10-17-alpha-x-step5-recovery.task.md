# Step 5 adjudication — group **x**, run `numerical-analysis-remaining-71-2026-10-17`

You are the group Alpha for batches 70, 71: 2 A/B pair(s), 4 page(s), 55 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **70**: `research/numerical-analysis-remaining-71-2026-10-17-batch-70-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **71**: `research/numerical-analysis-remaining-71-2026-10-17-batch-71-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 70 | `semi-lagrangian-characteristic-transport` | A | numerical-pdes-and-spatial-discretization | 2694 | `curved-mesh-geometry-and-conservative-mesh-transfer`, `event-location-and-hybrid-trajectory-error` |
| 70 | `semi-lagrangian-characteristic-transport-examples` | B | numerical-pdes-and-spatial-discretization | 2695 | `semi-lagrangian-characteristic-transport` |
| 71 | `monotone-hjb-schemes-and-policy-iteration` | A | numerical-pdes-and-spatial-discretization | 2696 | `hyperbolic-finite-difference-methods`, `semi-lagrangian-characteristic-transport`, `hamilton-jacobi-equations-and-viscosity-solutions`, `sparse-high-dimensional-estimation-and-covariance`, `power-and-sample-size-planning`, `measures-and-their-basic-properties`, `lebesgue-measure-on-euclidean-space`, `countability-and-uncountability` |
| 71 | `monotone-hjb-schemes-and-policy-iteration-examples` | B | numerical-pdes-and-spatial-discretization | 2697 | `monotone-hjb-schemes-and-policy-iteration` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `semi-lagrangian-characteristic-transport` — Semi-Lagrangian characteristic transport (12 item(s))

- `def-semilagrangian-periodic-grid-and-interpolant` · definition — Periodic tensor grids and multilinear interpolation
- `thm-periodic-c1-velocity-has-global-characteristic-flow` · theorem — A periodic C1 velocity has a global characteristic flow on a finite horizon
- `lem-semilagrangian-transverse-first-hit-error` · lemma — A transverse backward boundary hit has a certified time and trace error bound
- `alg-semilagrangian-backtracking-on-periodic-grid` · algorithm — Explicit Euler characteristic backtracking with multilinear interpolation
- `lem-periodic-tensor-interpolant-is-convex-and-linf-contracting` · lemma — Periodic multilinear interpolation is convex and L-infinity contractive
- `lem-periodic-characteristic-map-is-orientation-preserving` · lemma — A periodic C1 characteristic map is an orientation-preserving diffeomorphism
- `lem-periodic-tensor-interpolation-hessian-error` · lemma — Tensor multilinear interpolation has a second-derivative error bound
- `lem-euler-backward-characteristic-foot-error` · lemma — Explicit Euler gives a second-order local backward-foot defect
- `lem-periodic-flow-departure-cells-have-positive-finite-volume` · lemma — Characteristic departure cells are measurable and have positive finite volume
- `def-characteristic-cell-overlap-remapping` · definition — Characteristic-cell overlap remapping for a conservative density
- `thm-periodic-semilagrangian-global-error-from-local-defects` · theorem — Periodic semi-Lagrangian error is controlled by local foot and interpolation defects
- `thm-characteristic-cell-overlap-remapping-conserves-mass-and-positivity` · theorem — Characteristic-cell overlap remapping preserves mass and positivity

### `semi-lagrangian-characteristic-transport-examples` — Semi-Lagrangian characteristic transport — Examples (4 item(s))

- `ex-semilagrangian-constant-speed-crosses-many-cells` · example — A constant-speed foot can cross many cells in one stable update
- `ex-semilagrangian-fixed-grid-time-refinement-keeps-interpolation-error` · example — Refining time alone leaves interpolation diffusion on a fixed grid
- `ex-semilagrangian-pointwise-interpolation-can-change-grid-mass` · example — Variable-foot pointwise interpolation can change the grid sum
- `ex-conservative-overlap-transfer-under-smooth-deforming-flow` · example — A smooth deforming flow remaps two cell averages conservatively

### `monotone-hjb-schemes-and-policy-iteration` — Monotone Hamilton–Jacobi–Bellman schemes and policy iteration (34 item(s))

- `def-na-finite-state-discounted-bellman-system` · definition — Finite-state discounted generator Bellman system
- `def-na-second-order-elliptic-semijets-and-closure` · definition — Second-order elliptic semijets and their value-sensitive closures
- `lem-na-convex-support-localization-and-lipschitz-dual-gradient` · lemma — Convex supports, localization, and the Lipschitz dual gradient
- `lem-na-jensen-maximum-principle-semiconvex` · lemma — Jensen maximum principle for locally semiconvex functions
- `lem-na-lipschitz-critical-image-null` · lemma — Critical images of Euclidean Lipschitz maps are null
- `thm-na-rademacher-euclidean` · theorem — Rademacher differentiability in Euclidean space
- `def-na-periodic-grid-and-tensor-multilinear-interpolation` · definition — Periodic Cartesian grids and tensor-product multilinear interpolation
- `lem-na-discounted-bellman-policy-matrix-inverse-positive` · lemma — Inverse positivity of discounted finite-state policy matrices
- `lem-na-sup-convolution-semiconvexity-and-jet-transfer` · lemma — Quadratic sup convolution and transfer of upper jets
- `thm-na-semiconvex-alexandrov-second-order-differentiability` · theorem — Alexandrov second differentiability of locally semiconvex functions
- `alg-na-finite-control-howard-policy-iteration` · algorithm — Finite-budget Howard policy iteration for a discounted generator Bellman system
- `def-na-first-order-hjb-cauchy-problem` · definition — Periodic first-order controlled Hamilton–Jacobi Cauchy problem
- `def-na-periodic-diagonal-controlled-diffusion-hjb-problem` · definition — Periodic diagonal controlled-diffusion HJB Cauchy problem
- `lem-na-multilinear-interpolation-positive-and-second-order-accurate` · lemma — Positive partition of unity and interpolation error for periodic multilinear interpolation
- `thm-na-elliptic-theorem-of-sums` · theorem — Elliptic theorem of sums with the full block matrix bound
- `alg-na-explicit-diagonal-diffusion-hjb-grid-step` · algorithm — Explicit monotone diagonal-diffusion Bellman grid update
- `alg-na-positive-interpolation-semilagrangian-hjb-step` · algorithm — Positive-interpolation semi-Lagrangian update for first-order HJB equations
- `alg-na-upwind-hjb-grid-step` · algorithm — CFL-monotone upwind update for first-order HJB equations
- `def-na-second-order-parabolic-viscosity-solution` · definition — Second-order parabolic viscosity subsolutions and supersolutions
- `lem-na-grid-contact-localization-for-half-relaxed-limits` · lemma — Localization of strict half-relaxed contacts to periodic mesh nodes
- `thm-na-howard-policy-iteration-monotone-improvement-termination` · theorem — Monotone improvement and finite termination of exact Howard iteration
- `lem-na-diagonal-diffusion-discrete-initial-trace` · lemma — Initial trace for the explicit diagonal-diffusion HJB scheme
- `lem-na-diagonal-diffusion-stencil-is-monotone` · lemma — Nonnegative row weights for the diagonal-diffusion HJB stencil
- `lem-na-elliptic-spacetime-jets-imply-parabolic-hjb-inequalities` · lemma — Closed elliptic space-time jets test the parabolic diagonal HJB inequality
- `lem-na-first-order-hjb-discrete-initial-trace` · lemma — Initial trace for the positive-interpolation and upwind HJB schemes
- `lem-na-smooth-tests-suffice-for-first-and-second-order-hjb-viscosity` · lemma — Smooth test functions suffice for the first- and second-order HJB viscosity notions
- `thm-na-diagonal-diffusion-stencil-consistency` · theorem — Smooth consistency of the diagonal-diffusion Bellman stencil
- `thm-na-positive-interpolation-hjb-step-monotone-stable-consistent` · theorem — Monotonicity, L-infinity stability, and consistency of the semi-Lagrangian HJB step
- `thm-na-upwind-hjb-grid-step-monotone-stable-consistent` · theorem — Monotonicity, L-infinity stability, and consistency of the upwind HJB step
- `thm-na-diagonal-diffusion-scheme-half-relaxed-limits` · theorem — Half-relaxed limits of the monotone diagonal-diffusion HJB scheme
- `thm-na-first-order-hjb-scheme-convergence` · theorem — Convergence of the positive-interpolation and upwind first-order HJB schemes
- `thm-na-periodic-diagonal-hjb-second-order-comparison` · theorem — Comparison for periodic diagonal controlled-diffusion HJB equations
- `cor-na-diagonal-diffusion-scheme-converges-under-comparison` · corollary — Conditional convergence of the diagonal-diffusion scheme under comparison
- `thm-na-diagonal-diffusion-hjb-scheme-convergence` · theorem — Unconditional convergence and existence for the periodic diagonal-diffusion HJB scheme

### `monotone-hjb-schemes-and-policy-iteration-examples` — Monotone Hamilton–Jacobi–Bellman schemes and policy iteration — Examples (5 item(s))

- `cex-na-centered-hjb-update-is-not-monotone` · counterexample — A centered HJB update can fail monotonicity
- `ex-na-discounted-control-switching-policy-iteration` · example — A two-state switching example for discounted Howard iteration
- `ex-na-diagonal-diffusion-manufactured-solution` · example — A periodic manufactured solution for the diagonal-diffusion HJB stencil
- `ex-na-compact-control-quantization-hamiltonian-error` · example — Uniform Hamiltonian error for an evenly spaced compact-control grid
- `ex-na-eikonal-kink-monotone-hjb-updates` · example — An eikonal kink and its monotone HJB grid updates

## Your seams

Your pages depend on another group's:

- `semi-lagrangian-characteristic-transport` requires `curved-mesh-geometry-and-conservative-mesh-transfer` (group u, batch 63)

Another group's pages depend on yours:

- `boundary-integral-equations-and-galerkin-bem` (group s) requires your `monotone-hjb-schemes-and-policy-iteration`

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
