# Step 5 adjudication — group **w**, run `numerical-analysis-remaining-71-2026-10-17`

You are the group Alpha for batches 67, 68, 69: 3 A/B pair(s), 6 page(s), 69 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **67**: `research/numerical-analysis-remaining-71-2026-10-17-batch-67-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **68**: `research/numerical-analysis-remaining-71-2026-10-17-batch-68-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **69**: `research/numerical-analysis-remaining-71-2026-10-17-batch-69-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 67 | `ale-interface-and-partitioned-multiphysics-discretization` | A | numerical-pdes-and-spatial-discretization | 2688 | `energy-stable-incompressible-navier-stokes-discretization`, `curved-mesh-geometry-and-conservative-mesh-transfer`, `elasticity-near-incompressibility-and-locking-free-discretization`, `imex-and-operator-splitting-methods` |
| 67 | `ale-interface-and-partitioned-multiphysics-discretization-examples` | B | numerical-pdes-and-spatial-discretization | 2689 | `ale-interface-and-partitioned-multiphysics-discretization` |
| 68 | `hp-finite-elements-and-spectral-element-methods` | A | numerical-pdes-and-spatial-discretization | 2690 | `spectral-collocation-and-galerkin-methods`, `curved-mesh-geometry-and-conservative-mesh-transfer` |
| 68 | `hp-finite-elements-and-spectral-element-methods-examples` | B | numerical-pdes-and-spatial-discretization | 2691 | `hp-finite-elements-and-spectral-element-methods` |
| 69 | `isogeometric-galerkin-methods` | A | numerical-pdes-and-spatial-discretization | 2692 | `spline-evaluation-and-interpolation-algorithms`, `curved-mesh-geometry-and-conservative-mesh-transfer`, `elasticity-near-incompressibility-and-locking-free-discretization`, `sard-theorem-and-transversality`, `finite-element-meshes-and-interpolation`, `ceas-lemma-and-aubin-nitsche-error-estimates`, `variational-crimes-and-strang-lemmas` |
| 69 | `isogeometric-galerkin-methods-examples` | B | numerical-pdes-and-spatial-discretization | 2693 | `isogeometric-galerkin-methods` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `ale-interface-and-partitioned-multiphysics-discretization` — ALE, interfaces and partitioned multiphysics coupling (17 item(s))

- `cor-ale-exact-splitting-residual-orders` · corollary — Conditional finite-dimensional Lie and Strang splitting residual orders
- `def-ale-linear-diffusion-transmission-model` · definition — Finite-dimensional backward-Euler diffusion transmission model
- `def-ale-moving-domain-map` · definition — ALE moving-domain map and mesh velocity
- `def-ale-periodic-moving-grid` · definition — Periodic one-dimensional moving grid
- `def-ale-toy-added-mass-recurrence` · definition — Scalar added-mass staggered recurrence
- `alg-ale-upwind-finite-volume-step` · algorithm — Conservative upwind ALE finite-volume step
- `lem-ale-jacobi-geometric-conservation-identity` · lemma — Jacobi identity for the ALE mesh Jacobian
- `lem-ale-periodic-face-motion-satisfies-discrete-gcl` · lemma — Moving faces satisfy the one-dimensional discrete GCL
- `lem-ale-schur-complement-positive-and-minimizes-energy` · lemma — The diffusion Schur complement is positive and minimizes energy
- `thm-ale-monolithic-backward-euler-energy-identity` · theorem — Monolithic backward Euler transmission energy identity
- `alg-ale-robin-robin-partitioned-iteration` · algorithm — Finite-budget Robin-Robin transmission iteration
- `lem-ale-schur-residual-controls-interface-energy-error` · lemma — Schur residual controls trace and reconstruction energy error
- `thm-ale-one-dimensional-reynolds-transport-identity` · theorem — Choice-free one-dimensional ALE Reynolds transport identity
- `thm-ale-reynolds-transport-identity` · theorem — Reynolds transport identity on an ALE moving domain
- `thm-ale-upwind-step-conserves-mass-and-preserves-free-stream` · theorem — The upwind ALE step conserves mass and preserves constants
- `thm-ale-robin-robin-iteration-contracts-and-certifies-stop` · theorem — Robin-Robin iteration contracts to the monolithic trace
- `thm-ale-upwind-step-monotone-and-l1-contracting-under-cfl` · theorem — CFL monotonicity and weighted L1 contraction for the ALE step

### `ale-interface-and-partitioned-multiphysics-discretization-examples` — ALE, interfaces and partitioned multiphysics coupling — Examples (3 item(s))

- `ex-ale-added-mass-toy-recurrence-instability` · example — A toy sequential coupling can amplify velocity error
- `ex-ale-expanding-mesh-free-stream` · example — An expanding cell preserves a constant state
- `ex-ale-two-domain-heat-interface-flux-balance` · example — A two-domain heat trace balances outward fluxes

### `hp-finite-elements-and-spectral-element-methods` — hp finite elements and spectral elements (22 item(s))

- `def-hp-integrated-legendre-projector` · definition — Endpoint-preserving integrated Legendre projector
- `def-hp-variable-degree-spaces-on-matching-meshes` · definition — Variable-degree conforming hp spaces on matching affine meshes
- `lem-legendre-gauss-lobatto-nodes-are-distinct` · lemma — Legendre-Gauss-Lobatto nodes are distinct and interior critical points are simple
- `lem-reference-jacobi-weighted-endpoint-kernel` · lemma — Weighted Jacobi endpoint kernel on the reference interval
- `thm-hp-simplex-weighted-spectral-projection` · theorem — Weighted simplex polynomial projection has explicit p-rates
- `lem-hp-triangle-degree-uniform-strong-edge-lift` · lemma — A degree-uniform polynomial edge lift with the strong edge norm
- `lem-hp-unweighted-legendre-derivative-tail` · lemma — An ordinary derivative controls the Legendre tail with a factorial ratio
- `lem-hp-analytic-polynomial-approximation-on-a-triangle` · lemma — Analytic derivative bounds give exponential polynomial approximation on a triangle
- `lem-hp-weighted-analytic-corner-pointwise-control` · lemma — Weighted analytic polygon functions have corner decay and scaled analytic bounds
- `def-legendre-gauss-lobatto-rule-on-affine-boxes` · definition — Legendre-Gauss-Lobatto nodes, weights, and tensor quadrature
- `lem-hp-corner-uniform-degree-dof-count` · lemma — Uniform-degree polygon corner spaces have cubic degree-of-freedom growth
- `lem-variable-degree-polynomial-spaces-are-h1-conforming` · lemma — Matching variable-degree polynomial traces give an H1 function
- `thm-hp-reference-interval-integrated-legendre-projection` · theorem — Integrated Legendre projection gives an explicit p-rate in H1
- `thm-hp-simplex-p-dependent-face-trace-inverse` · theorem — Degree-explicit polynomial trace inverse inequality on simplices
- `thm-hp-triangle-unweighted-smooth-approximation` · theorem — Constructive ordinary Sobolev polynomial approximation on triangles
- `thm-hp-analytic-p-convergence-on-fixed-tensor-mesh` · theorem — Analytic data converge exponentially under fixed-mesh p refinement
- `lem-hp-simplex-p-explicit-conforming-interpolant` · lemma — Constructive varying-degree triangle interpolation in unweighted H1
- `thm-hp-gll-top-mode-and-puniform-energy-equivalence` · theorem — GLL quadrature changes only the top Legendre modes and is p-uniformly equivalent
- `thm-hp-corner-exponential-energy-convergence` · theorem — Exponential hp energy convergence for weighted-analytic polygon corners
- `thm-hp-galerkin-energy-error-on-fixed-mesh` · theorem — Cea transfers the fixed-mesh analytic p rate to the energy error
- `thm-hp-galerkin-h-p-regularity-energy-bound` · theorem — Galerkin energy error with local h, trace degree and Sobolev regularity
- `thm-hp-gll-strang-error-with-aliasing-defect` · theorem — GLL spectral-element energy error retains the quadrature defect

### `hp-finite-elements-and-spectral-element-methods-examples` — hp finite elements and spectral elements — Examples (4 item(s))

- `cex-hp-degree-independent-sipdg-penalty-loses-coercivity` · counterexample — A degree-independent SIPDG penalty loses coercivity
- `ex-hp-gll-mass-top-mode-correction` · example — The degree-two GLL mass matrix changes only its highest Legendre mode
- `ex-hp-reentrant-corner-h-versus-hp` · example — A reentrant-corner mode separates fixed-degree h error from hp error
- `ex-hp-analytic-p-refinement-on-a-fixed-box` · example — An analytic box solution has exponential Galerkin p convergence

### `isogeometric-galerkin-methods` — Isogeometric Galerkin discretization (19 item(s))

- `def-nurbs-patch-map-and-rational-spline-space` · definition — Tensor-product NURBS patch maps and rational spline spaces
- `lem-compactly-supported-h1-belongs-to-h-zero` · lemma — Compactly supported H1 functions lie in H1_0
- `lem-tensor-q1-interpolation-h1-estimate` · lemma — Tensor Q1 nodal interpolation has a first-order H1 error bound
- `lem-isogeometric-pullback-energy-norm-equivalence` · lemma — Bi-Lipschitz NURBS maps preserve H1 and energy norms
- `lem-matching-nurbs-patch-traces-give-h1-conformity` · lemma — Matching NURBS patch traces give global H1 conformity
- `lem-positive-nurbs-basis-and-quotient-derivative` · lemma — Positive weights give a bounded partition-of-unity NURBS basis
- `lem-nurbs-laplace-tensor-gap-under-map-error` · lemma — Unit-Laplace pullback tensors are Lipschitz in the Jacobian matrix
- `thm-nurbs-quotient-best-approximation-transfer` · theorem — NURBS quotient spaces transfer numerator H1 approximation
- `lem-nurbs-knot-cell-simplicial-geometry-adapter` · lemma — Matching simplex subdivisions give a NURBS knot-cell geometry interface
- `lem-boundary-preserving-tensor-schoenberg-h1-approximation` · lemma — Greville comparison splines preserve faces and give an explicit H1 estimate
- `thm-homogeneous-nurbs-knot-insertion-preserves-patch-geometry` · theorem — Homogeneous knot insertion preserves an admissible NURBS patch
- `lem-nurbs-homogeneous-data-perturbation-geometry-bounds` · lemma — Homogeneous NURBS data errors generate geometry and metric error bounds
- `def-isogeometric-galerkin-patch-space-and-refinement` · definition — Conforming isogeometric Galerkin spaces and h/p/k refinement
- `thm-isogeometric-elasticity-galerkin-quasioptimality` · theorem — Finite-Lamé isogeometric elasticity is conforming and quasi-optimal
- `thm-isogeometric-perturbed-geometry-quadrature-strang-bound` · theorem — Isogeometric geometry and quadrature defects enter through Strang's bound
- `thm-isogeometric-poisson-galerkin-quasioptimality` · theorem — Exact-geometry isogeometric Poisson Galerkin estimate
- `thm-nurbs-tensor-product-l2-approximation` · theorem — Tensorized spline quasi-interpolation gives a NURBS L2 rate
- `thm-nurbs-p1-tensor-spline-h1-error-rate` · theorem — Smooth compactly supported data have a degree-one NURBS energy rate
- `thm-boundary-preserving-nurbs-projector-and-h1-rate` · theorem — Boundary-preserving NURBS projection and matching-patch energy approximation

### `isogeometric-galerkin-methods-examples` — Isogeometric Galerkin discretization — Examples (4 item(s))

- `cex-positive-nurbs-weights-do-not-imply-admissible-patch` · counterexample — Positive NURBS weights do not imply an admissible patch
- `ex-isogeometric-quarter-annulus-nurbs-patch` · example — A tensor NURBS patch exactly covers a quarter annulus
- `cex-multipatch-trace-mismatch-not-h1` · counterexample — Matching patch geometry does not repair a field trace jump
- `ex-isogeometric-k-refinement-of-the-identity-patch` · example — Degree elevation and simple-knot insertion preserve the identity patch

## Your seams

Your pages depend on another group's:

- `ale-interface-and-partitioned-multiphysics-discretization` requires `energy-stable-incompressible-navier-stokes-discretization` (group n, batch 41)
- `ale-interface-and-partitioned-multiphysics-discretization` requires `curved-mesh-geometry-and-conservative-mesh-transfer` (group u, batch 63)
- `ale-interface-and-partitioned-multiphysics-discretization` requires `elasticity-near-incompressibility-and-locking-free-discretization` (group l, batch 35)
- `hp-finite-elements-and-spectral-element-methods` requires `curved-mesh-geometry-and-conservative-mesh-transfer` (group u, batch 63)
- `isogeometric-galerkin-methods` requires `spline-evaluation-and-interpolation-algorithms` (group a, batch 3)
- `isogeometric-galerkin-methods` requires `curved-mesh-geometry-and-conservative-mesh-transfer` (group u, batch 63)
- `isogeometric-galerkin-methods` requires `elasticity-near-incompressibility-and-locking-free-discretization` (group l, batch 35)

Another group's pages depend on yours:

- `homogenization-and-multiscale-finite-element-methods` (group v) requires your `isogeometric-galerkin-methods`

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

# Step 5 batch adjudication, `numerical-analysis-remaining-71-2026-10-17`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
