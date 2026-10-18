# Step 5 adjudication — group **u**, run `numerical-analysis-remaining-71-2026-10-17`

You are the group Alpha for batches 61, 62, 63: 3 A/B pair(s), 6 page(s), 76 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **61**: `research/numerical-analysis-remaining-71-2026-10-17-batch-61-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **62**: `research/numerical-analysis-remaining-71-2026-10-17-batch-62-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **63**: `research/numerical-analysis-remaining-71-2026-10-17-batch-63-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 61 | `particle-in-cell-and-particle-mesh-kinetic-methods` | A | numerical-pdes-and-spatial-discretization | 2676 | `interacting-particle-mean-field-and-vortex-blob-error`, `elliptic-finite-difference-methods`, `spectral-collocation-and-galerkin-methods` |
| 61 | `particle-in-cell-and-particle-mesh-kinetic-methods-examples` | B | numerical-pdes-and-spatial-discretization | 2677 | `particle-in-cell-and-particle-mesh-kinetic-methods` |
| 62 | `reaction-diffusion-invariants-and-pattern-discretization` | A | numerical-pdes-and-spatial-discretization | 2678 | `parabolic-finite-difference-methods`, `finite-volume-diffusion-and-mimetic-fluxes`, `imex-and-operator-splitting-methods`, `finite-generator-master-equations-and-uniformization` |
| 62 | `reaction-diffusion-invariants-and-pattern-discretization-examples` | B | numerical-pdes-and-spatial-discretization | 2679 | `reaction-diffusion-invariants-and-pattern-discretization` |
| 63 | `curved-mesh-geometry-and-conservative-mesh-transfer` | A | numerical-pdes-and-spatial-discretization | 2680 | `adaptive-finite-element-methods`, `delaunay-triangulations-and-voronoi-computation` |
| 63 | `curved-mesh-geometry-and-conservative-mesh-transfer-examples` | B | numerical-pdes-and-spatial-discretization | 2681 | `curved-mesh-geometry-and-conservative-mesh-transfer` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `particle-in-cell-and-particle-mesh-kinetic-methods` — Particle in cell and particle mesh kinetic methods (23 item(s))

- `def-periodic-pic-grid-and-inner-product` · definition — Periodic uniform PIC grid and inner product
- `lem-periodic-composite-trapezoid-error` · lemma — Composite periodic trapezoidal error in a uniform tensor grid
- `def-periodic-pic-shape-assignment-and-gather` · definition — Periodic PIC deposition shape and gather operators
- `thm-periodic-centered-difference-poisson-zero-mode-and-gauge` · theorem — Periodic centered-difference Poisson solvability and zero-mean gauge
- `thm-periodic-pic-zero-mean-pseudoinverse-is-self-adjoint` · theorem — The periodic Poisson mean-zero pseudoinverse is linear and self-adjoint
- `alg-periodic-pic-zero-mean-poisson-solver` · algorithm — Fourier diagonal solver for the periodic centered-difference Poisson equation
- `thm-periodic-pic-charge-conservation-and-neutralized-source` · theorem — Periodic PIC deposition conserves charge and satisfies Poisson compatibility
- `thm-periodic-pic-continuum-regularized-poisson-kernel-is-smooth` · theorem — Periodic PIC regularization gives a smooth compatible Poisson solution
- `thm-periodic-pic-deposition-potential-gather-adjointness` · theorem — Periodic PIC deposition and potential gather are adjoint
- `lem-periodic-pic-smooth-assignment-weights` · lemma — Smooth periodic PIC assignment weights have bounded derivatives
- `thm-periodic-pic-poisson-residual-to-gathered-force-bound` · theorem — Periodic Poisson residual controls the gathered particle force
- `def-periodic-pic-regularized-grid-interaction-kernel` · definition — Fixed-regularization periodic PIC pair kernel
- `lem-periodic-pic-shape-partition-and-quadrature-bound` · lemma — Partition and quadrature bounds for a periodic PIC shape
- `thm-periodic-pic-poisson-solver-returns-the-zero-mean-solution` · theorem — The periodic PIC Poisson algorithm returns the unique gauged solution
- `alg-periodic-pic-classical-rk4-step` · algorithm — Classical RK4 step for the fixed-grid regularized PIC particle ODE
- `def-periodic-pic-separable-hamiltonian-grid-model` · definition — Matched variational Hamiltonian branch for periodic PIC
- `thm-periodic-pic-grid-interaction-kernel-is-globally-lipschitz` · theorem — Fixed-regularization periodic PIC kernels are globally Lipschitz
- `thm-periodic-pic-smooth-density-grid-force-consistency` · theorem — Fixed-regularization periodic PIC force consistency on a smooth density
- `thm-periodic-pic-hamiltonian-force-is-a-gradient-and-conserves-energy` · theorem — The matched periodic PIC grid force is a gradient and its ODE conserves energy
- `thm-periodic-pic-mean-field-error-with-force-defect` · theorem — Periodic PIC particle and force errors under a prescribed initial coupling
- `thm-periodic-pic-rk4-finite-time-error-on-a-controlled-tube` · theorem — Fourth-order RK4 trajectory error for the fixed-grid periodic PIC ODE
- `thm-periodic-pic-leapfrog-geometric-properties-and-order-two-error` · theorem — Leapfrog geometry and finite-time order for the matched periodic PIC Hamiltonian
- `thm-periodic-pic-staged-fixed-regularization-error-budget` · theorem — Staged fixed-regularization PIC error budget

### `particle-in-cell-and-particle-mesh-kinetic-methods-examples` — Particle in cell and particle mesh kinetic methods — Examples (6 item(s))

- `ex-periodic-high-frequency-pic-sampling-alias` · example — A high Fourier mode aliases to a different periodic PIC grid force
- `cex-periodic-nonneutral-source-has-no-poisson-solution` · counterexample — A periodic Poisson source without neutralization is incompatible
- `ex-periodic-one-dimensional-pic-cic-charge-deposition` · example — One-dimensional periodic CIC deposition and adjoint potential gather
- `ex-cold-two-stream-stipulated-pic-experiment` · example — A stipulated cold two-stream periodic PIC experiment
- `ex-periodic-smooth-density-poisson-grid-force-error` · example — A manufactured smooth periodic density for the PIC grid-force estimate
- `ex-periodic-pic-leapfrog-energy-drift-for-a-harmonic-mode` · example — Leapfrog changes the energy of an exact harmonic test mode

### `reaction-diffusion-invariants-and-pattern-discretization` — Reaction-diffusion systems, invariants and pattern computation (20 item(s))

- `def-reaction-vector-field-and-quasipositivity` · definition — Reaction vector fields and quasi-positivity
- `def-periodic-reaction-diffusion-grid` · definition — Periodic rectangular reaction-diffusion grid
- `def-reaction-invariant-rectangle` · definition — Inward reaction rectangles
- `def-stoichiometric-mass-invariant` · definition — Stoichiometric conservation and dissipation functionals
- `def-semilinear-reaction-diffusion-system` · definition — Semilinear vector reaction-diffusion systems
- `def-fv-tpfa-no-flux-diffusion-specialization` · definition — No-flux TPFA diffusion generator
- `thm-quasipositive-reaction-flow-preserves-invariant-rectangle-and-mass` · theorem — Inward reaction fields preserve rectangles and stoichiometric mass
- `lem-forward-euler-reaction-step-preserves-invariant-rectangle-and-mass` · lemma — A bounded forward-Euler reaction step preserves an inward rectangle
- `def-cell-centered-rectangular-no-flux-tpfa-grid` · definition — Cell-centered rectangular TPFA grid with homogeneous no-flux boundaries
- `thm-reaction-diffusion-continuous-mass-balance` · theorem — Continuous reaction-diffusion mass balance on boxes, tori, and piecewise C1 domains
- `lem-periodic-fv-grid-spatial-consistency` · lemma — Second-order spatial consistency of the periodic FV heat stencil
- `lem-periodic-fv-grid-reaction-diffusion-commutator-bound` · lemma — Mesh-uniform reaction-diffusion commutator bound on a periodic grid
- `prop-two-species-continuous-and-discrete-turing-criterion` · proposition — Two-species continuous and discrete dispersion criteria
- `thm-fv-and-periodic-diffusion-flow-preserves-rectangles-and-mass` · theorem — Finite-volume and periodic diffusion preserve intervals and weighted mass
- `alg-exact-lie-reaction-diffusion-step` · algorithm — Exact reaction-then-diffusion Lie step on FV or periodic grids
- `alg-euler-reaction-lie-diffusion-step` · algorithm — Forward-Euler reaction followed by exact FV or periodic diffusion
- `thm-exact-lie-step-preserves-invariant-rectangle-and-mass` · theorem — Exact reaction-diffusion Lie steps preserve rectangles and mass balance
- `thm-euler-lie-step-preserves-invariant-rectangle-and-mass` · theorem — A bounded Euler-reaction Lie step preserves rectangles and mass balance
- `thm-periodic-reaction-diffusion-lie-error-estimate` · theorem — Mesh-uniform first-order Lie error for a smooth periodic reaction-diffusion solution
- `thm-cell-centered-no-flux-reaction-diffusion-lie-error` · theorem — No-flux rectangular TPFA Lie error by even reflection

### `reaction-diffusion-invariants-and-pattern-discretization-examples` — Reaction-diffusion systems, invariants and pattern computation — Examples (4 item(s))

- `cex-consistent-mass-p1-fem-diffusion-fails-positivity` · counterexample — Consistent-mass P1 diffusion can leave the nonnegative cone
- `ex-brusselator-continuous-turing-instability` · example — A Brusselator with a continuous Turing-unstable torus mode
- `ex-three-cell-grid-suppresses-continuous-turing-mode` · example — A three-cell periodic grid suppresses the Brusselator's unstable continuous mode
- `ex-fisher-kpp-forward-reaction-euler-bound` · example — A forward-Euler Fisher–KPP reaction step preserves its interval under a sharp simple bound

### `curved-mesh-geometry-and-conservative-mesh-transfer` — Curved geometry, mesh generation and conservative transfer (18 item(s))

- `def-intersection-volume-conservative-remapping` · definition — Intersection-volume conservative remapping
- `def-isoparametric-curved-cell-map` · definition — Admissible isoparametric curved cells
- `lem-h2-zero-boundary-p1-interpolant-conforming` · lemma — The nodal P1 interpolant preserves homogeneous boundary values
- `def-curved-domain-geometry-approximation` · definition — Curved-domain geometry approximation errors
- `lem-curved-p1-interpolation-scaling` · lemma — P1 interpolation scaling on uniformly curved cells
- `lem-isoparametric-pullback-and-surface-metric` · lemma — Pullback gradients and induced surface metrics
- `thm-overlap-remap-l2-projection-conservation-positivity` · theorem — Overlap remapping is an L2 projection, conservative and positive
- `lem-curved-boundary-lift-residual` · lemma — Geometry error bounds a pulled-back boundary-lift residual
- `lem-isoparametric-cofactor-normal-perturbation` · lemma — Cofactor, surface-Jacobian, and normal perturbation bounds
- `lem-isoparametric-laplace-tensor-defect` · lemma — Derivative geometry error controls the Laplace tensor defect
- `lem-parabolic-domain-map-approximation` · lemma — P1 approximation of a parabolic shear map
- `thm-overlap-remap-error-from-approximation-and-geometry` · theorem — Remap error separates source, target and geometry approximation
- `lem-curved-nvb-closure-preserves-matching-traces` · lemma — Conforming NVB closure preserves curved shared traces
- `thm-curved-isoparametric-strang-error-bound` · theorem — Strang error bound for a parabolic isoparametric P1 family
- `alg-certified-convex-polygon-overlap` · algorithm — Exact certified clipping of convex rational polygons
- `thm-certified-polygon-overlap-correctness` · theorem — Certified clipping returns the exact convex polygon overlap
- `alg-delaunay-seeded-curved-uniform-nvb-refinement` · algorithm — Delaunay-seeded curved uniform NVB refinement
- `thm-curved-uniform-nvb-quality-and-termination` · theorem — Quality and finite termination for the curved square NVB family

### `curved-mesh-geometry-and-conservative-mesh-transfer-examples` — Curved geometry, mesh generation and conservative transfer — Examples (5 item(s))

- `ex-inverted-isoparametric-map-detection` · example — An orientation-reversing cell fails the Jacobian certificate
- `ex-isoparametric-unit-disk-mesh` · example — A ten-cell isoparametric mesh exactly covers the unit disk
- `ex-conservative-transfer-between-moving-curved-meshes` · example — Opposite diagonals conserve mass under a curved shear
- `ex-parabolic-curved-domain-linear-geometry-approximation` · example — A parabolic shear has certified linear geometry approximations
- `cex-delaunay-tetrahedral-sliver` · counterexample — An empty-sphere tetrahedron can be arbitrarily flat

## Your seams

Your pages depend on another group's:

- `reaction-diffusion-invariants-and-pattern-discretization` requires `finite-volume-diffusion-and-mimetic-fluxes` (group o, batch 44)
- `curved-mesh-geometry-and-conservative-mesh-transfer` requires `adaptive-finite-element-methods` (group r, batch 54)
- `curved-mesh-geometry-and-conservative-mesh-transfer` requires `delaunay-triangulations-and-voronoi-computation` (group e, batch 15)

Another group's pages depend on yours:

- `ale-interface-and-partitioned-multiphysics-discretization` (group w) requires your `curved-mesh-geometry-and-conservative-mesh-transfer`
- `hp-finite-elements-and-spectral-element-methods` (group w) requires your `curved-mesh-geometry-and-conservative-mesh-transfer`
- `isogeometric-galerkin-methods` (group w) requires your `curved-mesh-geometry-and-conservative-mesh-transfer`
- `semi-lagrangian-characteristic-transport` (group x) requires your `curved-mesh-geometry-and-conservative-mesh-transfer`

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
