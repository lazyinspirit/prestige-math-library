# Numerical PDEs and Spatial Discretization

Status: prose scaffold under audit. Not an executable frontier or a proof-acceptance record.

This category contains 55 proposed A/B pairs. Reuse canonical published statistics and linear algebra suppliers; do not duplicate their methods. Every unmet prerequisite belongs to this four-category design. Sources remain acquisition targets unless actual reading is documented.

This is one thematic slice of the unified 178-pair dependency graph. A prerequisite named by a pair key below is a same-frontier A-page supplier (including cross-category suppliers); it is not an existing published item and does not create a category execution order. The full key-to-page map is in `research/numerical-analysis-four-category-scaffolds-2026-10-16/partition.json`; cross-category edges are in `cross-category-interfaces.json`. Existing library inputs are named by exact item ID and imported only under their literal statements. Source URLs retained in the inventory are locators/acquisition targets unless the original record says otherwise; this audit adds no source-reading claim.

## Pair index

| Key | A page |
| --- | --- |
| NA-19 | `linear-scheme-stability-and-lax-equivalence` |
| NA-26 | `conservative-finite-volume-weak-limits` |
| NA-23 | `elliptic-finite-difference-methods` |
| NA-27 | `monotone-finite-volume-entropy-convergence` |
| NA-28 | `finite-element-meshes-and-interpolation` |
| PE01 | `riemann-solvers-for-hyperbolic-systems` |
| NA-24 | `parabolic-finite-difference-methods` |
| NA-29 | `ceas-lemma-and-aubin-nitsche-error-estimates` |
| NA-34 | `mixed-finite-elements-and-stokes-stability` |
| PE02 | `high-resolution-tvd-eno-and-weno-methods` |
| NA-25 | `hyperbolic-finite-difference-methods` |
| NA-36 | `parabolic-finite-element-methods` |
| NA-37 | `finite-element-eigenvalue-approximation` |
| PE03 | `invariant-domain-and-entropy-stable-conservative-schemes` |
| PE08 | `mixed-hdiv-fluxes-and-darcy-discretization` |
| PE19 | `elasticity-near-incompressibility-and-locking-free-discretization` |
| PE04 | `hyperbolic-dg-and-summation-by-parts-discretizations` |
| PE05 | `well-balanced-balance-laws-and-wet-dry-fronts` |
| PE09 | `discrete-de-rham-complexes-and-edge-elements` |
| PE12 | `nonlinear-parabolic-compactness-and-monotone-evolution` |
| XD-08 | `interacting-particle-mean-field-and-vortex-blob-error` |
| XD-09 | `graph-diffusion-and-metric-network-pde-numerics` |
| PE06 | `energy-stable-incompressible-navier-stokes-discretization` |
| PE10 | `yee-fdtd-and-transient-maxwell-discretization` |
| PE11 | `maxwell-eigenproblems-and-compatible-vector-waves` |
| PE13 | `finite-volume-diffusion-and-mimetic-fluxes` |
| PE25 | `overlapping-schwarz-and-stable-subspace-decompositions` |
| PE27 | `nonlinear-full-approximation-multigrid` |
| XD-06 | `meshfree-kernel-approximation-and-conservative-sph` |
| NA-30 | `variational-crimes-and-strang-lemmas` |
| NA-38 | `spectral-collocation-and-galerkin-methods` |
| PC-NYST | `nystrom-product-integration-and-fredholm-error` |
| PE07 | `projection-and-pressure-correction-for-incompressible-flow` |
| PE26 | `substructuring-feti-dp-and-bddc-preconditioners` |
| NA-31 | `crouzeix-raviart-finite-elements` |
| NA-32 | `nitsche-methods-for-weak-boundary-enforcement` |
| NA-33 | `discontinuous-galerkin-methods` |
| NA-35 | `adaptive-finite-element-methods` |
| PC-SCAT | `volume-integral-scattering-and-partial-wave-error` |
| PE15 | `supg-and-residual-based-stabilized-finite-elements` |
| PE16 | `boundary-integral-equations-and-galerkin-bem` |
| PE20 | `variational-inequality-and-contact-finite-elements` |
| PE24 | `compressible-viscous-flow-and-entropy-stable-fluxes` |
| PE30 | `least-squares-fem-and-practical-dpg` |
| XD-07 | `particle-in-cell-and-particle-mesh-kinetic-methods` |
| PE14 | `reaction-diffusion-invariants-and-pattern-discretization` |
| PE17 | `curved-mesh-geometry-and-conservative-mesh-transfer` |
| PE18 | `exterior-wave-problems-absorbing-boundaries-and-pml` |
| PE21 | `homogenization-and-multiscale-finite-element-methods` |
| PE23 | `phase-field-and-energy-dissipative-discretization` |
| PE22 | `ale-interface-and-partitioned-multiphysics-discretization` |
| PE28 | `hp-finite-elements-and-spectral-element-methods` |
| PE29 | `isogeometric-galerkin-methods` |
| PE31 | `semi-lagrangian-characteristic-transport` |
| PE32 | `monotone-hjb-schemes-and-policy-iteration` |

## NA-19 — Linear scheme stability and Lax equivalence

A: `linear-scheme-stability-and-lax-equivalence`. B: `linear-scheme-stability-and-lax-equivalence-examples`.

### Scope

New finite-dimensional grid/time scheme family interface, consistency/stability/convergence and Lax equivalence under exact norm/restriction/well-posedness assumptions; no reauthoring Banach-Steinhaus.

### Proof construction

For stability→convergence, write the Duhamel error sum on a smooth dense class, bound propagators uniformly, and then extend by density and continuous dependence. For convergence→stability, show pointwise boundedness of the operator family on each compact time interval and apply the published Banach–Steinhaus theorem. For mesh-dependent spaces, define reconstruction/projection and prove norm comparisons; do not silently apply the common-space theorem. A spectral-radius or CFL check alone is not the stability premise.

### Examples

stable consistent heat step; a consistent but unstable explicit step; a mesh-dependent norm comparison failure.

### Prerequisite interfaces

- **Published item interface** in `the-baire-principles-of-functional-analysis`: `thm-uniform-boundedness-principle`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.
- **Published item interface** in `countability-and-uncountability`: `def-dependent-choice`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.

### Same-frontier proof closure and well-definedness

Define the common-space scheme, strongly continuous solution semigroup, dense invariant core and uniform finite-time bounds. Prove the Duhamel error sum on the core, extend by density, and derive pointwise boundedness from the stipulated uniform-in-time convergence before applying UBP with its exact DC hypothesis. Projection/reconstruction variants prove their own density and norm bounds.


## NA-26 — Conservative finite-volume weak limits

A: `conservative-finite-volume-weak-limits`. B: `conservative-finite-volume-weak-limits-examples`.

### Scope

New conservative finite-volume flux/update, consistency and compact weak-limit theorem with actual convergence/hypotheses; continuous weak PDE definitions imported.

### Proof construction

Multiply each cell update by cell averages of a smooth compactly supported test function, sum over cells and time levels, telescope shared interface fluxes, and pass to the limit using strong L¹_loc convergence and continuity of f/F. Boundary/tail terms require their own control. Compactness is a premise here, not a consequence of conservation alone.

### Examples

conservative Godunov flux passing a shock speed; a bounded sequence without convergence; a weak limit that violates entropy admissibility.

### Prerequisite interfaces

- **Published item interface** in `scalar-conservation-laws-and-entropy-solutions`: `def-scalar-conservation-law-and-flux`, `def-distributional-weak-solution-of-a-scalar-conservation-law`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.

### Same-frontier proof closure and well-definedness

Define the fixed-stencil flux update, cell-average initialization, space-time reconstruction and initial trace. The summation-by-parts proof uses strong $L^1_{loc}$ convergence and bounded-range flux continuity; compactness is an explicit premise, and the result is weak only.

### Approved scope amendments

[
  {
    "origin": "research/numerical-analysis-48-2026-10-16-coverage-crossdomain/proposed-pairs.json",
    "binding_subset": "NA-26",
    "design": "\n## Required amendments to the original 46 designs\n\nThese are preservation/completion clauses, not permission to erase approved claims.\n\n* **NA-15/17/18:** distinguish absolute stability, positive invariance, conservation and certified adaptive global error. Crosslink XD-03 rather than imply stiff solvers protect nonnegative biological states. Event/history/stiffness extensions remain sibling ownership.\n* **NA-22:** particle/symplectic examples must state domain/collision restrictions and actual time-integrator invariants. A Hamiltonian interpretation is a mathematical stipulated model. Neither discrete energy drift plots nor conserved semidiscrete momentum prove a continuum particle limit.\n* **NA-23/24/25:** graph/renewal boundary rows are not ordinary rectangular Dirichlet rows. Diffusive L2 stability does not imply positivity; add actual maximum-principle conditions only when proved. Inflow renewal and junction routing go to XD-04/09.\n* **NA-26/27:** retain scalar BV entropy scope; it cannot supply multi-species positivity or aggregation/fragmentation moment conservation. The new methods receive independent proofs.\n* **NA-28–36:** interval-edge graph trace, renewal inflow trace and particle boundary correction are distinct from simplex H1 trace. Reuse exact established interfaces, supply missing geometry locally. No arbitrary SPH/RBF convergence via Céa unless a real coercive Galerkin structure is proved.\n* **NA-39/42:** identify randomness and coupling: particle loading, jump paths, resampling and empirical initial measures differ. Do not transfer independent-level variance proofs to correlated levels or claim N^−1/2 uniform transport error from a scalar MC CLT.\n* **NA-43/44/45:** require forward model/sensitivity discretization terms in parameter estimation/design. Identifiability of an exact statistical model does not certify a numerically thresholded Jacobian rank. Preserve approximation, sampling, solver, regularization and model error separately; finite projection/cutoff bias is explicit.\n"
  }
]


## NA-23 — Elliptic finite-difference methods

A: `elliptic-finite-difference-methods`. B: `elliptic-finite-difference-methods-examples`.

### Scope

New elliptic finite-difference stencils, boundary closure and consistency/discrete comparison/stability/error theorem under exact mesh/domain assumptions.

### Proof construction

State the grid inner product and boundary closure; prove the discrete summation-by-parts identity including boundary terms. Establish coercivity/Poincaré or the sign pattern needed for the maximum principle, then bound A_h^-1 uniformly and apply e_h=A_h^-1τ_h. For nonsmooth weak solutions, replace pointwise Taylor estimates with a separately justified weak approximation theorem.

### Examples

5-point Laplacian for a smooth Dirichlet solution; divergence-form variable coefficient versus independently expanded stencil; Neumann closure with first-order boundary residual.

### Prerequisite interfaces

- **Same-frontier pair `NA-19`** — A page `linear-scheme-stability-and-lax-equivalence` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Published item interface** in `sobolev-poincare-and-morrey-inequalities`: `thm-poincare-inequality-for-w-one-p-zero`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.
- **Published item interface** in `lax-milgram-and-weak-elliptic-solutions`: `thm-lax-milgram`, `thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.

### Same-frontier proof closure and well-definedness

Prove the grid inner product, boundary closure, discrete summation-by-parts formula, discrete Poincare/coercivity and mesh-uniform inverse bound. For the variable flux stencil, prove the face Taylor remainder and complete boundary residual before using $e_h=A_h^{-1}\tau_h$.

### Approved scope amendments

[
  {
    "origin": "research/numerical-analysis-48-2026-10-16-coverage-crossdomain/proposed-pairs.json",
    "binding_subset": "NA-23",
    "design": "\n## Required amendments to the original 46 designs\n\nThese are preservation/completion clauses, not permission to erase approved claims.\n\n* **NA-15/17/18:** distinguish absolute stability, positive invariance, conservation and certified adaptive global error. Crosslink XD-03 rather than imply stiff solvers protect nonnegative biological states. Event/history/stiffness extensions remain sibling ownership.\n* **NA-22:** particle/symplectic examples must state domain/collision restrictions and actual time-integrator invariants. A Hamiltonian interpretation is a mathematical stipulated model. Neither discrete energy drift plots nor conserved semidiscrete momentum prove a continuum particle limit.\n* **NA-23/24/25:** graph/renewal boundary rows are not ordinary rectangular Dirichlet rows. Diffusive L2 stability does not imply positivity; add actual maximum-principle conditions only when proved. Inflow renewal and junction routing go to XD-04/09.\n* **NA-26/27:** retain scalar BV entropy scope; it cannot supply multi-species positivity or aggregation/fragmentation moment conservation. The new methods receive independent proofs.\n* **NA-28–36:** interval-edge graph trace, renewal inflow trace and particle boundary correction are distinct from simplex H1 trace. Reuse exact established interfaces, supply missing geometry locally. No arbitrary SPH/RBF convergence via Céa unless a real coercive Galerkin structure is proved.\n* **NA-39/42:** identify randomness and coupling: particle loading, jump paths, resampling and empirical initial measures differ. Do not transfer independent-level variance proofs to correlated levels or claim N^−1/2 uniform transport error from a scalar MC CLT.\n* **NA-43/44/45:** require forward model/sensitivity discretization terms in parameter estimation/design. Identifiability of an exact statistical model does not certify a numerically thresholded Jacobian rank. Preserve approximation, sampling, solver, regularization and model error separately; finite projection/cutoff bias is explicit.\n"
  }
]


## NA-27 — Monotone finite-volume entropy convergence

A: `monotone-finite-volume-entropy-convergence`. B: `monotone-finite-volume-entropy-convergence-examples`.

### Scope

New monotone finite-volume L1/BV/entropy stability and convergence incl Helly+temporal compactness/initial trace; continuous entropy uniqueness imported literally.

### Proof construction

Prove order preservation/range bounds and TVD; establish temporal translation estimates; supply the missing local Helly/BV compactness lemma by a rational-point diagonal argument (uniform local variation and bounds give L¹_loc subsequences). Pass the conservative update and discrete entropy inequality to the limit; use the published Kruzhkov uniqueness/contraction theorem to identify all subsequential limits. Carry the source theorem’s mesh-to-time ratio premise and the chosen piecewise-linear time interpolant. The published entropy-existence theorem requires u₀∈L¹∩L∞ and DC+CC; use it on that global-data branch only. For nonintegrable globally bounded BV data, supply the local-limit existence/initial-trace proof in this pair before using the published local contraction theorem to identify the limit.

### Examples

Godunov and Lax–Friedrichs monotone flux under CFL; shock captured with correct Rankine–Hugoniot speed; a conservative but nonmonotone weak limit that is not entropy admissible.

### Prerequisite interfaces

- **Same-frontier pair `NA-26`** — A page `conservative-finite-volume-weak-limits` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Published item interface** in `scalar-conservation-laws-and-entropy-solutions`: `def-kruzhkov-entropy-solution`, `thm-existence-of-bounded-kruzhkov-entropy-solutions`, `thm-kruzhkov-local-l1-contraction`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.

### Same-frontier proof closure and well-definedness

Define the monotone cell-average update, full invariant-interval CFL, numerical entropy flux and piecewise-linear time interpolation. Prove order/range preservation, TVD, temporal and spatial translations, local Helly compactness, initial trace, and entropy passage; use global existence only for $L^1\cap L^\infty$ data (CC+DC) and local contraction only with CC.

### Approved scope amendments

[
  {
    "origin": "research/numerical-analysis-48-2026-10-16-coverage-crossdomain/proposed-pairs.json",
    "binding_subset": "NA-27",
    "design": "\n## Required amendments to the original 46 designs\n\nThese are preservation/completion clauses, not permission to erase approved claims.\n\n* **NA-15/17/18:** distinguish absolute stability, positive invariance, conservation and certified adaptive global error. Crosslink XD-03 rather than imply stiff solvers protect nonnegative biological states. Event/history/stiffness extensions remain sibling ownership.\n* **NA-22:** particle/symplectic examples must state domain/collision restrictions and actual time-integrator invariants. A Hamiltonian interpretation is a mathematical stipulated model. Neither discrete energy drift plots nor conserved semidiscrete momentum prove a continuum particle limit.\n* **NA-23/24/25:** graph/renewal boundary rows are not ordinary rectangular Dirichlet rows. Diffusive L2 stability does not imply positivity; add actual maximum-principle conditions only when proved. Inflow renewal and junction routing go to XD-04/09.\n* **NA-26/27:** retain scalar BV entropy scope; it cannot supply multi-species positivity or aggregation/fragmentation moment conservation. The new methods receive independent proofs.\n* **NA-28–36:** interval-edge graph trace, renewal inflow trace and particle boundary correction are distinct from simplex H1 trace. Reuse exact established interfaces, supply missing geometry locally. No arbitrary SPH/RBF convergence via Céa unless a real coercive Galerkin structure is proved.\n* **NA-39/42:** identify randomness and coupling: particle loading, jump paths, resampling and empirical initial measures differ. Do not transfer independent-level variance proofs to correlated levels or claim N^−1/2 uniform transport error from a scalar MC CLT.\n* **NA-43/44/45:** require forward model/sensitivity discretization terms in parameter estimation/design. Identifiability of an exact statistical model does not certify a numerically thresholded Jacobian rank. Preserve approximation, sampling, solver, regularization and model error separately; finite projection/cutoff bias is explicit.\n"
  }
]


## NA-28 — Finite-element meshes and interpolation

A: `finite-element-meshes-and-interpolation`. B: `finite-element-meshes-and-interpolation-examples`.

### Scope

New reference elements/DOFs/affine mesh/conformity; local trace/Green/scaling/inverse and Bramble-Hilbert interpolation/point-evaluation thresholds. Existing statistics 1D splines and C1-domain sharp trace are not substitutes.

### Proof construction

Map each cell to a reference element; prove reference approximation by polynomial reproduction and Deny–Lions/Bramble–Hilbert; track Jacobian and shape-regularity constants under scaling. Derive inverse and trace estimates from finite-dimensional norm equivalence on the reference cell. State conformity and boundary trace assumptions before using V_h⊂V.

### Examples

affine triangle and quadrilateral maps; a shape-regular versus sliver family; Lagrange point evaluation outside its Sobolev embedding range.

### Prerequisite interfaces

- **Same-frontier pair `NA-10`** — A page `polynomial-interpolation-and-remainder` in the `linear` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Published item interface** in `weak-derivatives-and-sobolev-spaces`: `def-sobolev-space-wkp-and-its-norm`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.
- **Published item interface** in `smooth-approximation-and-sobolev-extension`: `def-wkp-zero-as-a-sobolev-closure`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.
- **Published item interface** in `sobolev-poincare-and-morrey-inequalities`: `thm-poincare-inequality-for-w-one-p-zero`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.
- **Published item interface** in `sobolev-traces-and-zero-boundary-values`: `thm-lp-trace-operator-on-a-bounded-c-one-domain`, `thm-sobolev-gauss-green-formula-on-c-one-domains`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.

### Same-frontier proof closure and well-definedness

Import the published Sobolev-space and Poincare statements with their actual Countable Choice hypothesis; the bounded-C1 sharp trace/Green items additionally require AC and do not apply to simplices. Fix reference cell, affine maps, shape-regular family, polynomial space and DOFs; prove unisolvence/reproduction, simplex trace/Green and inverse bounds, then affine scaling. Point evaluation requires the precise Sobolev embedding threshold. Prove H(div)/H(curl) Piola traces and commuting maps locally on their own stated regularity classes; the C1 item does not supply them.

### Approved scope amendments

[
  {
    "origin": "research/numerical-analysis-48-2026-10-16-coverage-pde/proposal.md",
    "design": "\n\nThese additions preserve every already approved result. They supply prerequisites locally, without introducing unnecessary pair splits.\n\n- **NA28:** Keep affine mesh/interpolation claims. Add a typed finite oriented cell-complex incidence interface (`boundary boundary=0`), elementwise integration/trace definitions on affine simplices, and reference covariant/contravariant Piola transformations with exact gradient/curl/divergence transformation and normal/tangential moment identities. Prove by affine chain rule, determinant/cofactor identities and cell Green; boundary cancellation uses opposite orientations. Consumers PE08/PE09/PE10. Curved-map approximation remains PE17.\n- **NA33:** Preserve SIPG elliptic claims. Its B page may compare with PE04 hyperbolic DG, but no logical claim that elliptic penalty analysis proves nonlinear hyperbolic stability.\n- **NA34:** Retain the full existing divergence-lifting/Korn/mini-element binding design. Add an explicitly proved discrete Helmholtz orthogonal projection in the finite velocity mass inner product and pressure Schur-complement identity, including pressure nullspace/gauge. It follows from the already proved inf-sup and finite-dimensional orthogonal decomposition. Used by PE06/PE07; this does not establish bounded-domain Helmholtz regularity.\n- **NA35:** Retain reliability/efficiency/contraction/optimality claims and source restrictions. Its conforming refinement algorithm must actually provide the closure, shape-regularity and counting properties it consumes; name newest-vertex bisection initial-label compatibility and dimension. Do not infer 3D mesh complexity from a 2D proof. PE17 is geometric mesh generation/curvature, not a replacement for these obligations.\n- **NA36:** Retain full continuous evolution-triple construction. Add the Hilbert-valued discrete energy identity `2(a-b,a)=||a||²-||b||²+||a-b||²` and backward-Euler reconstruction/compactness interface when later used. Aubin–Lions is NOT implicitly supplied: PE12 owns its complete proof and PE06 may consume that supplier.\n- **NA38:** Keep the explicit exclusion of an unread second-order pressure-splitting proof. PE07 separately authors an actual first-order projection theorem and separately conditioned higher-order pressure correction.\n\n",
    "binding_subset": "NA-28"
  },
  {
    "origin": "research/numerical-analysis-48-2026-10-16-coverage-crossdomain/proposed-pairs.json",
    "binding_subset": "NA-28",
    "design": "\n## Required amendments to the original 46 designs\n\nThese are preservation/completion clauses, not permission to erase approved claims.\n\n* **NA-15/17/18:** distinguish absolute stability, positive invariance, conservation and certified adaptive global error. Crosslink XD-03 rather than imply stiff solvers protect nonnegative biological states. Event/history/stiffness extensions remain sibling ownership.\n* **NA-22:** particle/symplectic examples must state domain/collision restrictions and actual time-integrator invariants. A Hamiltonian interpretation is a mathematical stipulated model. Neither discrete energy drift plots nor conserved semidiscrete momentum prove a continuum particle limit.\n* **NA-23/24/25:** graph/renewal boundary rows are not ordinary rectangular Dirichlet rows. Diffusive L2 stability does not imply positivity; add actual maximum-principle conditions only when proved. Inflow renewal and junction routing go to XD-04/09.\n* **NA-26/27:** retain scalar BV entropy scope; it cannot supply multi-species positivity or aggregation/fragmentation moment conservation. The new methods receive independent proofs.\n* **NA-28–36:** interval-edge graph trace, renewal inflow trace and particle boundary correction are distinct from simplex H1 trace. Reuse exact established interfaces, supply missing geometry locally. No arbitrary SPH/RBF convergence via Céa unless a real coercive Galerkin structure is proved.\n* **NA-39/42:** identify randomness and coupling: particle loading, jump paths, resampling and empirical initial measures differ. Do not transfer independent-level variance proofs to correlated levels or claim N^−1/2 uniform transport error from a scalar MC CLT.\n* **NA-43/44/45:** require forward model/sensitivity discretization terms in parameter estimation/design. Identifiability of an exact statistical model does not certify a numerically thresholded Jacobian rank. Preserve approximation, sampling, solver, regularization and model error separately; finite projection/cutoff bias is explicit.\n"
  }
]


## PE01 — Riemann solvers for hyperbolic systems

A: `riemann-solvers-for-hyperbolic-systems`. B: `riemann-solvers-for-hyperbolic-systems-examples`.

### Scope

For f in C3 on an open admissible set G in Rm, define strictly hyperbolic conservation systems and admissible-state set, characteristic families, Rankine–Hugoniot and Lax admissibility as definitions. Prove the local small-data Riemann solver near a state where each field is genuinely nonlinear or linearly degenerate, with clearly bounded neighborhood; do not promise arbitrary large-data solutions. Define Godunov, Roe and HLL fluxes. Prove consistency and conservation; Roe property is an algebraic identity, not entropy admissibility. For ideal-gas Euler define pressure mathematically on rho>0, E>|m|²/(2rho), derive eigenstructure and give admissibility/failure conditions; HLL wave-speed bounds are explicit hypotheses or separately proved bounds.

### Proof construction

Prove eigenpair smoothness under simple spectrum, local rarefaction integral curves, shock curves using an augmented Rankine–Hugoniot implicit-function argument, tangent matching and wave-composition invertibility; verify weak jumps. Prove HLL flux by integrating the two-wave approximate conservation balance. Derive Euler sound speed and contact eigenvector locally. An exact Riemann procedure uses a bracketed pressure root with finite iteration budget and vacuum detection; existence/uniqueness of that root is a separate lemma.

### Examples

acoustic system, Sod tube, contact, Roe expansion shock/vacuum failure.

### Prerequisite interfaces

- **Same-frontier pair `NA-09`** — A page `nonlinear-equations-and-newton-methods` in the `optimization` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Published item interface** in `inverse-and-implicit-function-theorems`: `thm-euclidean-implicit-function-theorem`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.

### Same-frontier proof closure and well-definedness

Prove smooth eigenpairs, local rarefaction ODEs, augmented Rankine–Hugoniot shock curves and invertible wave-composition Jacobian under the small-data hypotheses. Define a pressure bisection with bracket, tolerance, budget and explicit vacuum/unbracketed statuses; PE01 proves the bracket/root facts that NA-09's local Newton interface does not.


## NA-24 — Parabolic finite-difference methods

A: `parabolic-finite-difference-methods`. B: `parabolic-finite-difference-methods-examples`.

### Scope

New parabolic finite-difference fully discrete scheme/error/stability/CFL with initial-boundary conditions; reuse ODE timesteppers rather than redefine backward Euler/Crank-Nicolson.

### Proof construction

Derive the amplification symbol for periodic/infinite uniform grids or perform a discrete energy estimate for the declared boundary setup. Show that the norm and boundary rows match the consistency estimate. Use the common error identity to propagate the truncation residual; never infer finite-boundary or variable-coefficient stability from a modewise calculation alone.

### Examples

forward Euler at and above μ=1/2; backward Euler damping high modes; Crank–Nicolson stability without comparable high-frequency damping.

### Prerequisite interfaces

- **Same-frontier pair `NA-19`** — A page `linear-scheme-stability-and-lax-equivalence` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-23`** — A page `elliptic-finite-difference-methods` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Published item interface** in `heat-equation-maximum-principles-duhamel-and-smoothing`: `thm-weak-parabolic-maximum-principle`, `thm-linfinity-stability-for-the-inhomogeneous-heat-equation`, `thm-duhamel-principle-for-the-whole-space-heat-equation`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.

### Same-frontier proof closure and well-definedness

Define the theta update $u^{n+1}-u^n+\Delta t A_h((1-\theta)u^n+\theta u^{n+1})=\Delta t f^{n+\theta}$ with exact rows and data; prove implicit solvability, periodic symbol bounds or the actual boundary energy identity. Separate L2 stability, positivity and high-frequency damping.

### Approved scope amendments

[
  {
    "origin": "research/numerical-analysis-48-2026-10-16-coverage-crossdomain/proposed-pairs.json",
    "binding_subset": "NA-24",
    "design": "\n## Required amendments to the original 46 designs\n\nThese are preservation/completion clauses, not permission to erase approved claims.\n\n* **NA-15/17/18:** distinguish absolute stability, positive invariance, conservation and certified adaptive global error. Crosslink XD-03 rather than imply stiff solvers protect nonnegative biological states. Event/history/stiffness extensions remain sibling ownership.\n* **NA-22:** particle/symplectic examples must state domain/collision restrictions and actual time-integrator invariants. A Hamiltonian interpretation is a mathematical stipulated model. Neither discrete energy drift plots nor conserved semidiscrete momentum prove a continuum particle limit.\n* **NA-23/24/25:** graph/renewal boundary rows are not ordinary rectangular Dirichlet rows. Diffusive L2 stability does not imply positivity; add actual maximum-principle conditions only when proved. Inflow renewal and junction routing go to XD-04/09.\n* **NA-26/27:** retain scalar BV entropy scope; it cannot supply multi-species positivity or aggregation/fragmentation moment conservation. The new methods receive independent proofs.\n* **NA-28–36:** interval-edge graph trace, renewal inflow trace and particle boundary correction are distinct from simplex H1 trace. Reuse exact established interfaces, supply missing geometry locally. No arbitrary SPH/RBF convergence via Céa unless a real coercive Galerkin structure is proved.\n* **NA-39/42:** identify randomness and coupling: particle loading, jump paths, resampling and empirical initial measures differ. Do not transfer independent-level variance proofs to correlated levels or claim N^−1/2 uniform transport error from a scalar MC CLT.\n* **NA-43/44/45:** require forward model/sensitivity discretization terms in parameter estimation/design. Identifiability of an exact statistical model does not certify a numerically thresholded Jacobian rank. Preserve approximation, sampling, solver, regularization and model error separately; finite projection/cutoff bias is explicit.\n"
  }
]


## NA-29 — Céa and Aubin–Nitsche error estimates

A: `ceas-lemma-and-aubin-nitsche-error-estimates`. B: `ceas-lemma-and-aubin-nitsche-error-estimates-examples`.

### Scope

New discrete Galerkin orthogonality/Cea best approximation and adjoint-regularity Aubin-Nitsche rates. Continuous coercive existence/regularity remain imports.

### Proof construction

Subtract continuous/discrete equations for orthogonality; test error against u_h−v_h and use boundedness/coercivity. For L², solve the adjoint equation, use orthogonality and interpolation of the adjoint, and carry both primal and adjoint smoothness. Cite the local H² supplier only with its C²-domain and coefficient conditions.

### Examples

symmetric Poisson best approximation; nonsymmetric coercive form with M/α factor; reentrant corner lowering the dual rate.

### Prerequisite interfaces

- **Same-frontier pair `NA-28`** — A page `finite-element-meshes-and-interpolation` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Published item interface** in `lax-milgram-and-weak-elliptic-solutions`: `thm-lax-milgram`, `thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.
- **Published item interface** in `interior-and-boundary-sobolev-elliptic-regularity`: `thm-global-h-two-dirichlet-regularity`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.

### Same-frontier proof closure and well-definedness

Define continuous/discrete Galerkin equations with a common bounded coercive form and data; carry CC for imported Lax–Milgram/Poincare existence. Prove orthogonality and Céa. Define the adjoint and retain its exact regularity/interpolation premise; the global H2 item applies only to a bounded C2 domain with W^{1,infinity} coefficients, assumes CC, and yields a bound retaining the L2(u) term. Any sharper fractional rate or different domain/coefficient class is local.

### Approved scope amendments

[
  {
    "origin": "research/numerical-analysis-48-2026-10-16-coverage-crossdomain/proposed-pairs.json",
    "binding_subset": "NA-29",
    "design": "\n## Required amendments to the original 46 designs\n\nThese are preservation/completion clauses, not permission to erase approved claims.\n\n* **NA-15/17/18:** distinguish absolute stability, positive invariance, conservation and certified adaptive global error. Crosslink XD-03 rather than imply stiff solvers protect nonnegative biological states. Event/history/stiffness extensions remain sibling ownership.\n* **NA-22:** particle/symplectic examples must state domain/collision restrictions and actual time-integrator invariants. A Hamiltonian interpretation is a mathematical stipulated model. Neither discrete energy drift plots nor conserved semidiscrete momentum prove a continuum particle limit.\n* **NA-23/24/25:** graph/renewal boundary rows are not ordinary rectangular Dirichlet rows. Diffusive L2 stability does not imply positivity; add actual maximum-principle conditions only when proved. Inflow renewal and junction routing go to XD-04/09.\n* **NA-26/27:** retain scalar BV entropy scope; it cannot supply multi-species positivity or aggregation/fragmentation moment conservation. The new methods receive independent proofs.\n* **NA-28–36:** interval-edge graph trace, renewal inflow trace and particle boundary correction are distinct from simplex H1 trace. Reuse exact established interfaces, supply missing geometry locally. No arbitrary SPH/RBF convergence via Céa unless a real coercive Galerkin structure is proved.\n* **NA-39/42:** identify randomness and coupling: particle loading, jump paths, resampling and empirical initial measures differ. Do not transfer independent-level variance proofs to correlated levels or claim N^−1/2 uniform transport error from a scalar MC CLT.\n* **NA-43/44/45:** require forward model/sensitivity discretization terms in parameter estimation/design. Identifiability of an exact statistical model does not certify a numerically thresholded Jacobian rank. Preserve approximation, sampling, solver, regularization and model error separately; finite projection/cutoff bias is explicit.\n"
  }
]


## NA-34 — Mixed finite elements and Stokes stability

A: `mixed-finite-elements-and-stokes-stability`. B: `mixed-finite-elements-and-stokes-stability-examples`.

### Scope

New mixed discrete saddle-point/inf-sup/Fortin method and exact mini-element stable pair; complete continuous Korn/divergence/Stokes suppliers in binding mixed foundation. No existing statistical mixed-effects method is a Stokes discretization.

### Proof construction

Prove the abstract mixed theorem, Fortin transfer of inf-sup, then the chosen element-specific Fortin/macroelement construction. Apply the mixed estimate with explicit approximation rates. Stokes solvability, partial regularity, simulation, and CMI alternatives A–D remain logically separate.

### Examples

mini-element bubble moment; Taylor–Hood pressure mode; checkerboard pressure mode in an unstable pair; discrete divergence-free versus weakly divergence-free velocity.

### Prerequisite interfaces

- **Same-frontier pair `NA-28`** — A page `finite-element-meshes-and-interpolation` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Published item interface** in `lax-milgram-and-weak-elliptic-solutions`: `thm-lax-milgram`, `thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.
- **Published item interface** in `sobolev-traces-and-zero-boundary-values`: `thm-lp-trace-operator-on-a-bounded-c-one-domain`, `thm-sobolev-gauss-green-formula-on-c-one-domains`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.
- **Published item interface** in `sobolev-poincare-and-morrey-inequalities`: `thm-poincare-inequality-for-w-one-p-zero`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.

### Same-frontier proof closure and well-definedness

Define V=H1_0(Omega)^d, Q=L2_0, b(v,q), kernel coercivity and the mini P1+bubble/P1 pair on shape-regular simplices in d=2,3. Prove Korn, divergence right inverse, Fortin/discrete inf-sup, then mixed error. Prove the mass-orthogonal discrete Helmholtz projection and pressure Schur identity with gauge.

### Approved scope amendments

[
  {
    "origin": "research/numerical-analysis-48-2026-10-16-coverage-pde/proposal.md",
    "design": "\n\nThese additions preserve every already approved result. They supply prerequisites locally, without introducing unnecessary pair splits.\n\n- **NA28:** Keep affine mesh/interpolation claims. Add a typed finite oriented cell-complex incidence interface (`boundary boundary=0`), elementwise integration/trace definitions on affine simplices, and reference covariant/contravariant Piola transformations with exact gradient/curl/divergence transformation and normal/tangential moment identities. Prove by affine chain rule, determinant/cofactor identities and cell Green; boundary cancellation uses opposite orientations. Consumers PE08/PE09/PE10. Curved-map approximation remains PE17.\n- **NA33:** Preserve SIPG elliptic claims. Its B page may compare with PE04 hyperbolic DG, but no logical claim that elliptic penalty analysis proves nonlinear hyperbolic stability.\n- **NA34:** Retain the full existing divergence-lifting/Korn/mini-element binding design. Add an explicitly proved discrete Helmholtz orthogonal projection in the finite velocity mass inner product and pressure Schur-complement identity, including pressure nullspace/gauge. It follows from the already proved inf-sup and finite-dimensional orthogonal decomposition. Used by PE06/PE07; this does not establish bounded-domain Helmholtz regularity.\n- **NA35:** Retain reliability/efficiency/contraction/optimality claims and source restrictions. Its conforming refinement algorithm must actually provide the closure, shape-regularity and counting properties it consumes; name newest-vertex bisection initial-label compatibility and dimension. Do not infer 3D mesh complexity from a 2D proof. PE17 is geometric mesh generation/curvature, not a replacement for these obligations.\n- **NA36:** Retain full continuous evolution-triple construction. Add the Hilbert-valued discrete energy identity `2(a-b,a)=||a||²-||b||²+||a-b||²` and backward-Euler reconstruction/compactness interface when later used. Aubin–Lions is NOT implicitly supplied: PE12 owns its complete proof and PE06 may consume that supplier.\n- **NA38:** Keep the explicit exclusion of an unread second-order pressure-splitting proof. PE07 separately authors an actual first-order projection theorem and separately conditioned higher-order pressure correction.\n\n",
    "binding_subset": "NA-34"
  },
  {
    "origin": "research/numerical-analysis-48-2026-10-16-coverage-crossdomain/proposed-pairs.json",
    "binding_subset": "NA-34",
    "design": "\n## Required amendments to the original 46 designs\n\nThese are preservation/completion clauses, not permission to erase approved claims.\n\n* **NA-15/17/18:** distinguish absolute stability, positive invariance, conservation and certified adaptive global error. Crosslink XD-03 rather than imply stiff solvers protect nonnegative biological states. Event/history/stiffness extensions remain sibling ownership.\n* **NA-22:** particle/symplectic examples must state domain/collision restrictions and actual time-integrator invariants. A Hamiltonian interpretation is a mathematical stipulated model. Neither discrete energy drift plots nor conserved semidiscrete momentum prove a continuum particle limit.\n* **NA-23/24/25:** graph/renewal boundary rows are not ordinary rectangular Dirichlet rows. Diffusive L2 stability does not imply positivity; add actual maximum-principle conditions only when proved. Inflow renewal and junction routing go to XD-04/09.\n* **NA-26/27:** retain scalar BV entropy scope; it cannot supply multi-species positivity or aggregation/fragmentation moment conservation. The new methods receive independent proofs.\n* **NA-28–36:** interval-edge graph trace, renewal inflow trace and particle boundary correction are distinct from simplex H1 trace. Reuse exact established interfaces, supply missing geometry locally. No arbitrary SPH/RBF convergence via Céa unless a real coercive Galerkin structure is proved.\n* **NA-39/42:** identify randomness and coupling: particle loading, jump paths, resampling and empirical initial measures differ. Do not transfer independent-level variance proofs to correlated levels or claim N^−1/2 uniform transport error from a scalar MC CLT.\n* **NA-43/44/45:** require forward model/sensitivity discretization terms in parameter estimation/design. Identifiability of an exact statistical model does not certify a numerically thresholded Jacobian rank. Preserve approximation, sampling, solver, regularization and model error separately; finite projection/cutoff bias is explicit.\n"
  }
]


## PE02 — High-resolution TVD, ENO and WENO reconstruction

A: `high-resolution-tvd-eno-and-weno-methods`. B: `high-resolution-tvd-eno-and-weno-methods-examples`.

### Scope

Define finite-volume MUSCL cell averages, minmod \(\operatorname{minmod}(a,b)=\operatorname{sgn}(a)\min(|a|,|b|)\) for equal signs and zero otherwise, and a separate nodal ENO2 branch: for nodal data \(u_j\) at uniform nodes \(x_j\), define \([x_a,x_b,x_c]u=((u_c-u_b)/(x_c-x_b)-(u_b-u_a)/(x_b-x_a))/(x_c-x_a)\). Compare \(d_L=|[x_{i-1},x_i,x_{i+1}]u|\) with \(d_R=|[x_i,x_{i+1},x_{i+2}]u|\), choose the smaller (tie to the left), interpolate the selected three nodal values by their unique quadratic, and evaluate at \(x_{i+1/2}\). The following left-biased WENO5 reconstruction uses scalar cell averages \(u_{i-2},\ldots,u_{i+2}\). Candidate polynomials evaluated at the right face are
\[
p_0=(2u_{i-2}-7u_{i-1}+11u_i)/6,\quad p_1=(-u_{i-1}+5u_i+2u_{i+1})/6,\quad p_2=(2u_i+5u_{i+1}-u_{i+2})/6,
\]
with linear weights \((d_0,d_1,d_2)=(1/10,6/10,3/10)\). Set
\[
\beta_0=\tfrac{13}{12}(u_{i-2}-2u_{i-1}+u_i)^2+\tfrac14(u_{i-2}-4u_{i-1}+3u_i)^2,
\]
\[
\beta_1=\tfrac{13}{12}(u_{i-1}-2u_i+u_{i+1})^2+\tfrac14(u_{i-1}-u_{i+1})^2,\quad
\beta_2=\tfrac{13}{12}(u_i-2u_{i+1}+u_{i+2})^2+\tfrac14(3u_i-4u_{i+1}+u_{i+2})^2.
\]
Set the left WENO face state \(u_{i+1/2}^{-,W}=\sum_{k=0}^2\omega_kp_k\). The selected WENO-JS weights are \(\alpha_k=d_k/(\epsilon_0+\beta_k)^2\), \(\omega_k=\alpha_k/\sum_l\alpha_l\), for fixed dimensionally scaled \(\epsilon_0>0\); define the improved comparison branch WENO-Z by \(\tau_5=|\beta_0-\beta_2|\), \(\alpha_k=d_k[1+(\tau_5/(\epsilon_0+\beta_k))^2]\). Reconstruct \(u_{i+1/2}^{+,W}\) by reflecting the stencil about the face, i.e. apply the displayed left formula to \(\tilde u_k=u_{2i+1-k}\). Define MUSCL slopes \(s_i=\operatorname{minmod}((u_i-u_{i-1})/h,(u_{i+1}-u_i)/h)\), left face state \(u_{i-1/2}^{+,M}=u_i-hs_i/2\), and right face state \(u_{i+1/2}^{-,M}=u_i+hs_i/2\). For scalar linear advection \(u_t+a u_x=0\), update cell averages by \(u_i^{n+1}=u_i^n-(\Delta t/h)(F_{i+1/2}-F_{i-1/2})\), where \(F_{i+1/2}=a u_{i+1/2}^{-,M}\) for \(a\ge0\) and \(F_{i+1/2}=a u_{i+1/2}^{+,M}\) for \(a<0\); prove MUSCL/minmod TVD under \(|a|\Delta t/h\le1\). WENO is a reconstruction consistency result here, not a TVD result. Prove weight limits/order only under the stated smoothness and fixed-\(\epsilon_0\) asymptotic regime; do not transfer optimal fifth order to arbitrary critical-point or scale-dependent epsilon choices. Characteristic system reconstruction has no inherited scalar TVD claim. Include the scalar linear monotonicity/order barrier.

### Proof construction

Solve reconstruction moment equations; Taylor-expand candidate polynomials and smoothness indicators with uniform remainders; derive nonlinear weight asymptotics including epsilon scaling. Derive nonnegative incremental coefficients and sum their variation estimate. Give a concrete critical-point counterexample when hypotheses fail.

### Examples

smooth advection, extrema clipping, Burgers shock, WENO critical point, oscillatory unlimited reconstruction.

### Prerequisite interfaces

- **Same-frontier pair `NA-10`** — A page `polynomial-interpolation-and-remainder` in the `linear` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-26`** — A page `conservative-finite-volume-weak-limits` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-27`** — A page `monotone-finite-volume-entropy-convergence` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `PE01`** — A page `riemann-solvers-for-hyperbolic-systems` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.

### Same-frontier proof closure and well-definedness

Use the displayed cell-average candidates, smoothness indicators, fixed positive \(\epsilon_0\), normalization, and the ENO2 divided-difference/tie rule. Prove fifth-order smooth consistency for the stated asymptotic regime by Taylor expansion and the resulting \(\omega_k-d_k\) bound; verify critical-point order separately. Prove MUSCL/minmod second-order accuracy where inactive and scalar TVD only for the specified monotone flux/CFL branch by Harten's incremental coefficients. A different epsilon scaling or systems characteristic limiter needs its own order/stability estimate.


## NA-25 — Hyperbolic finite-difference methods

A: `hyperbolic-finite-difference-methods`. B: `hyperbolic-finite-difference-methods-examples`.

### Scope

New hyperbolic finite-difference Fourier/amplification/CFL/energy analysis for declared scheme families; generic Lax/root conditions imported.

### Proof construction

Prove discrete summation by parts with boundary terms, positivity of the discrete wave energy under the CFL restriction, and the scheme’s actual amplification-factor bound in the periodic case. For finite boundaries or nonnormal amplification matrices, require a separate power/energy estimate. Keep smooth-solution truncation from implying convergence at discontinuities.

### Examples

upwind versus downwind advection; centered advection instability despite consistency; wave energy becoming indefinite beyond its CFL threshold.

### Prerequisite interfaces

- **Same-frontier pair `NA-19`** — A page `linear-scheme-stability-and-lax-equivalence` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-24`** — A page `parabolic-finite-difference-methods` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Published item interface** in `wave-energy-finite-propagation-and-huygens`: `thm-energy-continuous-dependence-for-the-forced-wave-equation`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.
- **Same-frontier pair `NA-04`** — A page `stationary-iterations-and-relaxation` in the `linear` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.

### Same-frontier proof closure and well-definedness

Define the advection rows and two-level wave recurrence with start data and boundary rows. Prove periodic amplification power bounds and the discrete wave energy for 0<c*dt/h<1; at equality handle the repeated Nyquist generalized mode separately. A root/CFL check alone does not control nonnormal powers.

### Approved scope amendments

[
  {
    "origin": "research/numerical-analysis-48-2026-10-16-coverage-crossdomain/proposed-pairs.json",
    "binding_subset": "NA-25",
    "design": "\n## Required amendments to the original 46 designs\n\nThese are preservation/completion clauses, not permission to erase approved claims.\n\n* **NA-15/17/18:** distinguish absolute stability, positive invariance, conservation and certified adaptive global error. Crosslink XD-03 rather than imply stiff solvers protect nonnegative biological states. Event/history/stiffness extensions remain sibling ownership.\n* **NA-22:** particle/symplectic examples must state domain/collision restrictions and actual time-integrator invariants. A Hamiltonian interpretation is a mathematical stipulated model. Neither discrete energy drift plots nor conserved semidiscrete momentum prove a continuum particle limit.\n* **NA-23/24/25:** graph/renewal boundary rows are not ordinary rectangular Dirichlet rows. Diffusive L2 stability does not imply positivity; add actual maximum-principle conditions only when proved. Inflow renewal and junction routing go to XD-04/09.\n* **NA-26/27:** retain scalar BV entropy scope; it cannot supply multi-species positivity or aggregation/fragmentation moment conservation. The new methods receive independent proofs.\n* **NA-28–36:** interval-edge graph trace, renewal inflow trace and particle boundary correction are distinct from simplex H1 trace. Reuse exact established interfaces, supply missing geometry locally. No arbitrary SPH/RBF convergence via Céa unless a real coercive Galerkin structure is proved.\n* **NA-39/42:** identify randomness and coupling: particle loading, jump paths, resampling and empirical initial measures differ. Do not transfer independent-level variance proofs to correlated levels or claim N^−1/2 uniform transport error from a scalar MC CLT.\n* **NA-43/44/45:** require forward model/sensitivity discretization terms in parameter estimation/design. Identifiability of an exact statistical model does not certify a numerically thresholded Jacobian rank. Preserve approximation, sampling, solver, regularization and model error separately; finite projection/cutoff bias is explicit.\n"
  }
]


## NA-36 — Parabolic finite-element methods

A: `parabolic-finite-element-methods`. B: `parabolic-finite-element-methods-examples`.

### Scope

New evolution-triple trace/IBP/measurable-coercive variational existence, spatial Galerkin error including noncommuting Ritz residual, separate time-discrete rates; import time-stepper methods and avoid optional semigroup dependence.

### Proof construction

Prove the time integration-by-parts/trace lemma and apply BNB to the space-time form; test by u for energy stability. For a time-independent form use spatial Galerkin orthogonality and the exact residual equation (∂tθ,v_h)+a(θ,v_h)=−(∂tρ,v_h), where ρ=R_hu−u and θ=u_h−R_hu, with θ(0)=u_h(0)−R_hu(0). The full evolution operator does not commute with R_h. For measurable time-dependent forms, use a fixed comparison operator and retain its full residual; a differentiable R_h(t) route additionally requires coefficient time regularity and retains the term (∂tR_h(t))u. Then apply energy estimates; use a backward adjoint only for L² smoothing estimates. Do not use analytic-semigroup existence as a finite-element error theorem.

### Examples

heat equation with initial projection error; semidiscrete Ritz error identity; time regularity loss that lowers Crank–Nicolson order.

### Prerequisite interfaces

- **Same-frontier pair `NA-28`** — A page `finite-element-meshes-and-interpolation` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-29`** — A page `ceas-lemma-and-aubin-nitsche-error-estimates` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.

### Same-frontier proof closure and well-definedness

Prove the evolution-space trace/energy identity for W={u in L2(V):u' in L2(V*)}; state measurability, coercivity, data and initial trace before Galerkin existence. Define coefficient time averages in fully discrete schemes; Aubin–Lions is separately owned by PE12.

### Approved scope amendments

[
  {
    "origin": "research/numerical-analysis-48-2026-10-16-coverage-pde/proposal.md",
    "design": "\n\nThese additions preserve every already approved result. They supply prerequisites locally, without introducing unnecessary pair splits.\n\n- **NA28:** Keep affine mesh/interpolation claims. Add a typed finite oriented cell-complex incidence interface (`boundary boundary=0`), elementwise integration/trace definitions on affine simplices, and reference covariant/contravariant Piola transformations with exact gradient/curl/divergence transformation and normal/tangential moment identities. Prove by affine chain rule, determinant/cofactor identities and cell Green; boundary cancellation uses opposite orientations. Consumers PE08/PE09/PE10. Curved-map approximation remains PE17.\n- **NA33:** Preserve SIPG elliptic claims. Its B page may compare with PE04 hyperbolic DG, but no logical claim that elliptic penalty analysis proves nonlinear hyperbolic stability.\n- **NA34:** Retain the full existing divergence-lifting/Korn/mini-element binding design. Add an explicitly proved discrete Helmholtz orthogonal projection in the finite velocity mass inner product and pressure Schur-complement identity, including pressure nullspace/gauge. It follows from the already proved inf-sup and finite-dimensional orthogonal decomposition. Used by PE06/PE07; this does not establish bounded-domain Helmholtz regularity.\n- **NA35:** Retain reliability/efficiency/contraction/optimality claims and source restrictions. Its conforming refinement algorithm must actually provide the closure, shape-regularity and counting properties it consumes; name newest-vertex bisection initial-label compatibility and dimension. Do not infer 3D mesh complexity from a 2D proof. PE17 is geometric mesh generation/curvature, not a replacement for these obligations.\n- **NA36:** Retain full continuous evolution-triple construction. Add the Hilbert-valued discrete energy identity `2(a-b,a)=||a||²-||b||²+||a-b||²` and backward-Euler reconstruction/compactness interface when later used. Aubin–Lions is NOT implicitly supplied: PE12 owns its complete proof and PE06 may consume that supplier.\n- **NA38:** Keep the explicit exclusion of an unread second-order pressure-splitting proof. PE07 separately authors an actual first-order projection theorem and separately conditioned higher-order pressure correction.\n\n",
    "binding_subset": "NA-36"
  },
  {
    "origin": "research/numerical-analysis-48-2026-10-16-coverage-crossdomain/proposed-pairs.json",
    "binding_subset": "NA-36",
    "design": "\n## Required amendments to the original 46 designs\n\nThese are preservation/completion clauses, not permission to erase approved claims.\n\n* **NA-15/17/18:** distinguish absolute stability, positive invariance, conservation and certified adaptive global error. Crosslink XD-03 rather than imply stiff solvers protect nonnegative biological states. Event/history/stiffness extensions remain sibling ownership.\n* **NA-22:** particle/symplectic examples must state domain/collision restrictions and actual time-integrator invariants. A Hamiltonian interpretation is a mathematical stipulated model. Neither discrete energy drift plots nor conserved semidiscrete momentum prove a continuum particle limit.\n* **NA-23/24/25:** graph/renewal boundary rows are not ordinary rectangular Dirichlet rows. Diffusive L2 stability does not imply positivity; add actual maximum-principle conditions only when proved. Inflow renewal and junction routing go to XD-04/09.\n* **NA-26/27:** retain scalar BV entropy scope; it cannot supply multi-species positivity or aggregation/fragmentation moment conservation. The new methods receive independent proofs.\n* **NA-28–36:** interval-edge graph trace, renewal inflow trace and particle boundary correction are distinct from simplex H1 trace. Reuse exact established interfaces, supply missing geometry locally. No arbitrary SPH/RBF convergence via Céa unless a real coercive Galerkin structure is proved.\n* **NA-39/42:** identify randomness and coupling: particle loading, jump paths, resampling and empirical initial measures differ. Do not transfer independent-level variance proofs to correlated levels or claim N^−1/2 uniform transport error from a scalar MC CLT.\n* **NA-43/44/45:** require forward model/sensitivity discretization terms in parameter estimation/design. Identifiability of an exact statistical model does not certify a numerically thresholded Jacobian rank. Preserve approximation, sampling, solver, regularization and model error separately; finite projection/cutoff bias is explicit.\n"
  }
]


## NA-37 — Finite-element eigenvalue approximation

A: `finite-element-eigenvalue-approximation`. B: `finite-element-eigenvalue-approximation-examples`.

### Scope

New discrete minmax conforming eigenvalue upper bound and quadratic best-approximation error/eigenspace-gap estimates; continuous spectral/minmax and matrix eigensolvers imported.

### Proof construction

Use the published continuous compact-resolvent spectral theorem and min–max. Apply the Galerkin min–max principle to the discrete form, then bound Rayleigh quotients by best approximation; derive eigenspace rates separately. For the nonsymmetric extension prove the compact-operator perturbation result before citing it.

### Examples

conforming eigenvalue upper bound for Dirichlet Laplacian; repeated eigenvalue with converging eigenspace but unstable eigenvector choice; a nonconforming eigenvalue below the exact one.

### Prerequisite interfaces

- **Same-frontier pair `NA-28`** — A page `finite-element-meshes-and-interpolation` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-29`** — A page `ceas-lemma-and-aubin-nitsche-error-estimates` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Published item interface** in `fredholm-elliptic-problems-and-the-elliptic-spectrum`: `thm-symmetric-elliptic-form-operator-is-self-adjoint-with-compact-resolvent`, `thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator`, `thm-courant-fischer-minimax-for-elliptic-eigenvalues`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.
- **Published item interface** in `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators`: `thm-spectral-theorem-for-compact-self-adjoint-operators`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.

### Same-frontier proof closure and well-definedness

Use the exact symmetric elliptic compact-resolvent/minmax interfaces with AC+CC. Prove the fixed-index conforming minmax upper bound, define the eigenspace gap delta_h, rule out trial-space collapse and derive the quadratic eigenvalue estimate; multiplicities use invariant-subspace gaps. Nonsymmetric extension remains conditional on separate operator/primal/adjoint proofs.

### Approved scope amendments

[
  {
    "origin": "research/numerical-analysis-48-2026-10-16-coverage-physics-chemistry/pairs.json",
    "design": {
      "key": "NA-37",
      "classification": "extend-existing",
      "delta": "Residual-to-spectrum and gap-conditioned eigendirection estimates; finitebasis overlap-matrix applications. Reuse canonical RayleighRitz and eigensolvers; no new algorithm definition. Exact hypotheses and proof route in PC-VAR scope."
    }
  }
]


## PE03 — Positivity, invariant domains and entropy-stable systems fluxes

A: `invariant-domain-and-entropy-stable-conservative-schemes`. B: `invariant-domain-and-entropy-stable-conservative-schemes-examples`.

### Scope

Define convex invariant sets and convex entropy pairs for systems. Prove a first-order local Lax–Friedrichs/HLL invariant-domain update under a stated invariant Riemann-average hypothesis and CFL convex-combination coefficients; prove ideal-gas density/internal-energy positivity on the explicitly admitted wave-speed branch. Define entropy variables, two-point entropy-conservative flux and dissipative entropy-stable flux. Prove the semidiscrete cell entropy inequality from the exact Tadmor jump condition and positive semidefinite dissipation. Fully discrete entropy needs its own time-step theorem. Define a convex scaling positivity limiter and prove cell-average conservation plus positive quadrature-node states; do not claim cellwise pointwise positivity from finitely many nodes without a separate argument.

### Proof construction

Convexity of admissible Euler set; decompose updates into invariant Riemann averages. Multiply flux balances by entropy variables, telescope entropy potentials and bound dissipation. Limiter takes the maximal admissible scaling toward a positive mean; prove preservation and smooth-data accuracy only with a strict positive margin.

### Examples

near-vacuum Euler, entropy residual, conservative positivity rescaling, entropy-stable but insufficiently resolved shock.

### Prerequisite interfaces

- **Same-frontier pair `NA-26`** — A page `conservative-finite-volume-weak-limits` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `PE01`** — A page `riemann-solvers-for-hyperbolic-systems` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `PE02`** — A page `high-resolution-tvd-eno-and-weno-methods` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.

### Same-frontier proof closure and well-definedness

Define the Euler admissible convex set, invariant Riemann-average and actual HLL speeds/CFL weights. Define entropy variables and the Tadmor jump identity, prove the semidiscrete entropy balance, and define maximal convex scaling with nodewise admissibility. Fully discrete entropy/pointwise positivity are separate.


## PE08 — Mixed H(div) fluxes, Darcy flow and local conservation

A: `mixed-hdiv-fluxes-and-darcy-discretization`. B: `mixed-hdiv-fluxes-and-darcy-discretization-examples`.

### Scope

Define H(div), weak normal trace by Green duality, RT0/BDM spaces, contravariant Piola map, divergence-commuting interpolation on its proper regularity domain, and a stable RT0/P0 mixed Darcy method. Prove mixed well-posedness and flux/pressure error, exact element mass balance and normal-flux continuity. Define hybridization/static condensation and prove equivalence modulo pressure gauge. Coefficient-robust claims explicitly track permeability contrast and weighted norms.

### Proof construction

Prove Lipschitz-cell normal trace boundedness using an H1 lifting and Green independence; construct RT unisolvence and divergence commuting from face moments. Construct a bounded commuting projection using smoothing when canonical moments are not defined on all H(div); prove discrete inf-sup from divergence lifting plus interpolation. Apply NA34 abstract mixed theorem; hybridization follows local elimination and face multiplier equations.

### Examples

constant-flux triangle, checkerboard permeability, mixed versus primal nonconservative postprocessing, hybrid local elimination.

### Prerequisite interfaces

- **Same-frontier pair `NA-28`** — A page `finite-element-meshes-and-interpolation` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-34`** — A page `mixed-finite-elements-and-stokes-stability` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.

### Same-frontier proof closure and well-definedness

Prove local H(div) normal trace/Green on the chosen Lipschitz simplex, RT0 DOF unisolvence and contravariant Piola identities. Build a bounded commuting projection on its stated regularity class, derive RT0/P0 inf-sup from a divergence lift, then prove exact mass balance and hybrid equivalence.


## PE19 — Linear elasticity, nearly incompressible limits and locking

A: `elasticity-near-incompressibility-and-locking-free-discretization`. B: `elasticity-near-incompressibility-and-locking-free-discretization-examples`.

### Scope

Define small-strain elasticity with bounded positive shear modulus and nonnegative Lamé parameter, boundary conditions removing rigid motions. Prove conforming displacement energy estimate using NA34 Korn; identify lambda-dependent constants. Define displacement-pressure mixed elasticity and prove a uniform-in-lambda stability/error theorem for a concrete stable pair, carrying the pressure mean constraint and compressibility term. Define algebraic rigid-body nullspace handling. Do not claim nonlinear finite-strain existence or injectivity from this linear model.

### Proof construction

Coercive shear energy + Korn/Lax–Milgram; decompose volumetric strain and apply NA34 inf-sup, including the lambda=infinity constraint limit; derive a uniform mixed norm estimate and approximation. Construct a standard low-order displacement locking example quantitatively or as a bounded best-approximation obstruction with exact mesh assumptions. Heterogeneous coefficient robustness requires weighted estimates separately.

### Examples

cantilever manufactured displacement, rigid translation nullspace, nearly incompressible locking versus mixed pair.

### Prerequisite interfaces

- **Same-frontier pair `NA-28`** — A page `finite-element-meshes-and-interpolation` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-29`** — A page `ceas-lemma-and-aubin-nitsche-error-estimates` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-34`** — A page `mixed-finite-elements-and-stokes-stability` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Published item interface** in `lax-milgram-and-weak-elliptic-solutions`: `thm-lax-milgram`, `thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.

### Same-frontier proof closure and well-definedness

Define strain/stress, boundary constraints and rigid-motion quotient; prove Korn on that exact space. Define pressure/compressibility mixed form and use NA34's uniform inf-sup to obtain lambda-uniform stability; state and prove the particular locking obstruction.


## PE04 — Hyperbolic DG and summation-by-parts methods

A: `hyperbolic-dg-and-summation-by-parts-discretizations`. B: `hyperbolic-dg-and-summation-by-parts-discretizations-examples`.

### Scope

Define upwind DG for scalar linear transport on oriented meshes and SBP derivative/norm matrices with SAT boundary penalties. Prove semidiscrete L2 energy stability with inflow boundary data and matching numerical flux. Derive a smooth-solution error bound from projection approximation, upwind dissipation and consistency. Define conservative flux-differencing DG/SBP for nonlinear systems and prove semidiscrete entropy stability under a supplied entropy-conservative flux, matching quadrature/SBP identities and boundary entropy conditions. SSP time stepping consumes the separately proved forward-Euler admissibility bound; semidiscrete stability alone gives no fully discrete guarantee.

### Proof construction

Local Green plus face cancellation, upwind jump-square identity; SBP matrix identity supplies the same boundary accounting. Bound error residual in the exact discrete norm. Nonlinear entropy proof uses the PE03 two-point shuffle identity, paired nodes and exact discrete metric identities on the stated mesh; curved meshes deferred PE17.

### Examples

transport inflow, central/upwind flux comparison, aliasing instability, SBP boundary penalty.

### Prerequisite interfaces

- **Same-frontier pair `NA-28`** — A page `finite-element-meshes-and-interpolation` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `PE03`** — A page `invariant-domain-and-entropy-stable-conservative-schemes` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-15`** — A page `runge-kutta-methods-and-order` in the `dynamics` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.

### Same-frontier proof closure and well-definedness

Define DG/SBP trial spaces, fluxes, jumps, quadrature and SAT rows. Prove the face-cancellation/upwind jump-square identity; nonlinear entropy requires paired quadrature and discrete metric identities. For the selected SSPRK(3,3) time loop, write its exact three-stage convex-combination recursion and prove the forward-Euler invariant/entropy bound for the selected spatial operator under its explicit \(\Delta t\le\Delta t_{FE}\). Import only NA-15's convex-combination transfer at that FE limit (SSPRK(3,3) has SSP coefficient one); no general TVD, positivity, or nonlinear stability claim follows outside that premise. Curved meshes require PE17 metric identities.


## PE05 — Well-balanced balance laws and wet/dry fronts

A: `well-balanced-balance-laws-and-wet-dry-fronts`. B: `well-balanced-balance-laws-and-wet-dry-fronts-examples`.

### Scope

For one-dimensional shallow water with gravity \(g>0\), let \(U=(h,m)\), bed height \(b(x)\), free surface \(\eta=h+b\), \(u=m/h\) for \(h>0\) and \(u=0,m=0\) at dry cells, and physical flux \(F(U)=(m,m^2/h+gh^2/2)\) with the dry limit set to zero. On each face set \(b^*=\max(b_L,b_R)\), \(h_s^*=\max(0,\eta_s-b^*)\), \(u_s^*=u_s\) if \(h_s^*>0\) and zero otherwise, and \(U_s^*=(h_s^*,h_s^*u_s^*)\), for \(s=L,R\). Choose HLL speeds \(a_L=\min(0,u_L^*-\sqrt{gh_L^*},u_R^*-\sqrt{gh_R^*})\), \(a_R=\max(0,u_L^*+\sqrt{gh_L^*},u_R^*+\sqrt{gh_R^*})\), and the standard three-branch HLL flux: \(F(U_L^*)\) if \(a_L\ge0\), \(F(U_R^*)\) if \(a_R\le0\), otherwise \((a_RF(U_L^*)-a_LF(U_R^*)+a_La_R(U_R^*-U_L^*))/(a_R-a_L)\). For cell \(i\), use left/right momentum corrections \((0,g(h_s^2-(h_s^*)^2)/2)\), respectively, and the conservative update \(U_i^{n+1}=U_i^n-(\Delta t/\Delta x)(F_{i+1/2,L}^{wb}-F_{i-1/2,R}^{wb})\). Prove exact lake-at-rest preservation \(u=0,\eta=\text{constant}\), water conservation, and nonnegative depth under \((\Delta t/\Delta x)(a^+_{i+1/2}+a^-_{i-1/2})\le1\) for all cells, where \(a^+=a_R\), \(a^-=-a_L\). Source consistency and weak limits consume NA26 only with its strong \(L^1_{loc}\) compactness premise and an explicitly controlled topography source quadrature. Discontinuous bed steps require a separately defined path product. No entropy theorem is inferred from well-balancedness. The optional stiff-relaxation/AP extension is held unless its relaxation system, stage solve and uniform-in-stiffness error claim are each explicitly selected and proved.

### Proof construction

Insert hydrostatic states into every face and source term to show cancellation, then express depth update as positive flux combinations. Sum mass balances including boundary discharge. For weak limits control topography source quadrature and reconstruct the equilibrium path; discontinuous topography requires an explicit nonconservative/path formulation, not an undefined product.

### Examples

lake at rest over a bump, dam break onto dry bed, spurious-current counterexample.

### Prerequisite interfaces

- **Same-frontier pair `NA-26`** — A page `conservative-finite-volume-weak-limits` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `PE01`** — A page `riemann-solvers-for-hyperbolic-systems` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `PE02`** — A page `high-resolution-tvd-eno-and-weno-methods` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `PE03`** — A page `invariant-domain-and-entropy-stable-conservative-schemes` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.

### Same-frontier proof closure and well-definedness

Use the displayed dry convention, hydrostatic states, HLL wave speeds/branches, one-sided pressure corrections and finite-volume update. In a lake-at-rest state both reconstructed depths agree at each face; the HLL momentum flux plus each cell-side correction equals that cell's hydrostatic pressure, so adjacent faces cancel exactly. Show the HLL depth update is a convex combination of nonnegative reconstructed depths under the stated face CFL, while first components telescope for water conservation. For a smooth bed prove the source quadrature residual; a discontinuous bed or stiff relaxation remains held under the scope limits above.


## PE09 — Discrete de Rham complexes and edge-element foundations

A: `discrete-de-rham-complexes-and-edge-elements`. B: `discrete-de-rham-complexes-and-edge-elements-examples`.

### Scope

Define weak H(curl), tangential trace on polyhedra and lowest-order Nedelec edge elements with covariant Piola transport, unisolvence and commuting gradient/curl/div sequence. Prove discrete exactness on the stated contractible mesh/domain topology; on nontrivial topology state harmonic/cohomology components explicitly. Prove a uniformly bounded commuting cochain projection and discrete Poincare/compactness for the selected family; canonical interpolation is not automatically bounded at energy regularity. Supply a stable mixed curl-curl formulation with kernel quotient/gauge.

### Proof construction

Integration-by-parts defines tangential trace and trace norm; edge circulation/Stokes gives unisolvence and commuting moments. Construct smoothed commuting projection and boundary correction; use a proved regular decomposition on bounded Lipschitz contractible domains plus compact H1 embedding to obtain discrete compactness. The regular decomposition, weak trace extension and topological kernel identification are smallest missing analytic suppliers authored here, not hidden physical assumptions. Do not infer continuum exactness merely from incidence matrices.

### Examples

spurious nodal curl-curl mode, edge circulation, handle-domain harmonic field.

### Prerequisite interfaces

- **Same-frontier pair `NA-28`** — A page `finite-element-meshes-and-interpolation` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `PE08`** — A page `mixed-hdiv-fluxes-and-darcy-discretization` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.

### Same-frontier proof closure and well-definedness

Define the oriented cell complex, weak H(curl) trace, covariant Piola and lowest Nedelec edge basis; prove unisolvence and commuting exact sequence locally. On a contractible Lipschitz domain prove regular decomposition, smoothed cochain projection and discrete compactness; state harmonic/cohomology modes otherwise.


## PE12 — Nonlinear parabolic compactness and monotone evolution

A: `nonlinear-parabolic-compactness-and-monotone-evolution`. B: `nonlinear-parabolic-compactness-and-monotone-evolution-examples`.

### Scope

Prove the Aubin–Lions compactness contract for V compactly embedded H continuously embedded V*, with Lp-in-time V bounds (1<p<infinity) and a positive-exponent V* time-derivative/translate bound; state exactly the strong intermediate-space/time exponent obtained, and its precise piecewise-constant discrete time-translate analogue. Define coercive monotone diffusion with growth matched to p-Laplacian energy (for the H=L2 branch require p>max(1,2d/(d+2)) so W1p embeds compactly in L2) and backward Euler/FEM approximation; prove discrete existence, energy bounds and subsequential convergence/identification by Minty's argument under stated reflexivity and monotonicity. Strong monotonicity/Lipschitz or smooth-solution assumptions give separate quantitative errors; no unconditional smooth rate for degenerate porous-medium fronts.

### Proof construction

Finite-rank compact approximation of V unit ball in H, time translates from the V* derivative, finite-dimensional time compactness and interpolation yield strong L2 compactness; provide endpoint exponents and reconstruction defects. Browder–Minty construction is local if absent: finite Galerkin/Brouwer, weak compactness, monotone graph identification and uniqueness. Apply discrete integration by parts, weak lower semicontinuity and Minty limsup criterion to nonlinear flux.

### Examples

p-Laplacian, porous-medium finite propagation, failure of linear Ritz commutation, time oscillations without derivative control.

### Prerequisite interfaces

- **Same-frontier pair `NA-36`** — A page `parabolic-finite-element-methods` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Published item interface** in `homology-axioms-degree-and-classical-applications`: `thm-brouwer-fixed-point-theorem`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.

### Same-frontier proof closure and well-definedness

Prove the exact Aubin–Lions theorem from finite-rank compact approximation and time translations for V compact in H continuously in V*, with stated p,q exponents and discrete reconstruction defect. Prove W1p compactly embeds in L2 for p>max(1,2d/(d+2)); then prove monotone Galerkin existence and Minty identification with the exact p-growth.


## XD-08 — Interacting particle mean field and vortex blob error

A: `interacting-particle-mean-field-and-vortex-blob-error`. B: `interacting-particle-mean-field-and-vortex-blob-error-examples`.

### Scope

**Exact scope.** Globally Lipschitz K_ε (or controlled compact tube with proved invariance), dynamics `x_i′=N^−1Σ_j K_ε(x_i,x_j)`. Define probability-measure transport/weak solution by characteristics, and coupling-based W1 only on finite-first-moment measures. For any initial coupling, characteristic differences satisfy an integral inequality with constant ≤2Lip(K_ε); derive `W1(μ_t,ν_t)≤exp(2Lip(K_ε)t)W1(μ_0,ν_0)` by taking infima, without assuming an attained optimal coupling. Empirical measures solve the same weak equation exactly. Add temporal and force-approximation perturbations by discrete Gronwall. For finite-support empirical measures and a prescribed initial coupling, avoid a completeness theorem if not needed; if general measure existence is promised, prove the pushforward fixed-point construction and required completeness locally.

Regularized vortex blobs: define a smooth regularized Biot–Savart kernel and weighted particle vorticity for a **finite signed measure**. Positive probability W1 cannot be applied to signed vorticity without proof; use a signed bounded-Lipschitz dual norm with bounded total variation, or restrict to same-sign normalized vorticity for the probability theorem and prove the signed extension separately. Establish vortex-kernel consistency against a smooth finite-time Euler solution and derive blob, particle quadrature and time error with ε constants. The singular ε→0 limit needs smoothness and a complete estimate; bounded Lipschitz regularization alone supplies no singular-limit rate. This also supports bounded-force agent/swarm approximations without asserting empirical sociology/ecology.

### Proof construction

**Local suppliers.** W1 coupling definition/triangle/gluing only as needed; finite first-moment bound; characteristic flow and measurable pushforward; weak transport identity; coupled characteristic stability and perturbation estimate; empirical measure identity; regularization consistency; signed dual-norm variant and total-variation propagation; empirical initial-error route. Independent IID sample means may have N^−1/2 error for a fixed test function, but not uniformly over all Lipschitz functions in arbitrary dimension; retain dimension-aware estimates or a directly supplied deterministic coupling bound.

### Examples

**B examples.** Globally Lipschitz alignment model; empirical sample dimension effect; same-sign smooth vortex patch blob approximation; mixed-sign vorticity showing why a probability-distance argument cannot be copied literally; Newtonian N-body smoothing separated from the physical collision model.

### Prerequisite interfaces

- **Same-frontier pair `NA-12`** — A page `composite-quadrature-rules` in the `linear` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-15`** — A page `runge-kutta-methods-and-order` in the `dynamics` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-22`** — A page `geometric-numerical-integration` in the `dynamics` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `P-NUM-ODE-01`** — A page `one-step-ode-consistency-and-local-error` in the `dynamics` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `P-NUM-ODE-02`** — A page `global-ode-and-density-error` in the `dynamics` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Published item interface** in `picard-lindelof-and-first-order-odes`: `thm-picard-lindelof-local-existence-and-uniqueness`, `thm-gronwall-integral-inequality`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.

### Same-frontier proof closure and well-definedness

Define \(W_1\) only for probability measures with finite first moment; prove every coupling estimate first and take infima, without claiming an optimal plan exists. For globally Lipschitz \(K_\varepsilon\), Picard–Lindelöf gives the particle/characteristic flow and the empirical weak identity, then the coupling differences plus Gronwall yield the stated \(2\operatorname{Lip}(K_\varepsilon)\) estimate. Select classical RK4 from NA-15 for the general finite regularized ODE branch: state the smooth compact tube and bounded derivatives needed for its order-four local defect, prove one-step stability there, and use the P-NUM-ODE-02 finite-time global-error interface only after those two premises are established. NA-22 applies only to a separately declared Hamiltonian regularized vortex-particle system with the required separable split and compact collision-free tube; import reversibility/symplecticity/volume preservation and order two there, and modified-energy information only under its analytic near-identity hypotheses. Neither time supplier proves a mean-field or singular \(\varepsilon\to0\) limit. Signed vorticity uses its own dual norm/TV proof; no dimension-free uniform sampling rate.


## XD-09 — Graph diffusion and metric network pde numerics

A: `graph-diffusion-and-metric-network-pde-numerics`. B: `graph-diffusion-and-metric-network-pde-numerics-examples`.

### Scope

**Exact scope.** Reuse graph incidence/Laplacian definitions. Add finite weighted network generator `M u′+B C Bᵀu=f` with positive lumped masses, nonnegative conductances, explicitly chosen orientation and boundary vertices. Prove constant kernel/connected-component structure, weighted mean conservation, nonnegative exact semigroup and forward/backward Euler positivity conditions. The conservation measure is 1ᵀM u, not necessarily unweighted sum. Exact-arithmetic CG applicability after fixing nullspace/gauge is reused from LA.

Metric graph: finitely many interval edges, continuous vertex traces and Kirchhoff sum of outward diffusive fluxes, with Dirichlet at a nonempty anchored vertex set per component or explicit zero-mean quotient. Define product edge H1 energy space with trace matching. Prove finite-graph Poincaré using edge FTC/Cauchy–Schwarz plus paths to anchors; construct coercive variational solution; conforming linear edge FEM yields Céa and O(h) energy error under edgewise H2 regularity. Vertex singularities/higher-dimensional network junctions do not satisfy that hypothesis automatically. Parabolic extension consumes NA-36 evolution interface after exact graph-space identification. Advection network coupling requires an explicitly conservative nonnegative routing matrix with inflow/outflow balance; continuity of densities is not a universal junction condition.

### Proof construction

**Local suppliers.** Weighted incidence identities and M-matrix positivity; finite graph connectivity/anchoring lemma; interval endpoint trace bound; graph Sobolev Hilbert/closed trace subspace proof; graph Poincaré; Kirchhoff Green identity; local edge interpolation and global junction compatibility; parabolic trace if consumed. No abstract graph spectral theorem or metric-graph heat theorem is assumed merely because a simple finite graph Laplacian theorem exists.

### Examples

**B examples.** Three-compartment weighted migration; Y-junction river/cable flux; disconnected unanchored component producing singular solve; density continuity failing for unequal-speed conservative advection routing. Mathematical diffusion/routing models are stipulated, not empirical claims about actual vessels or rivers.

### Prerequisite interfaces

- **Same-frontier pair `XD-01`** — A page `finite-generator-master-equations-and-uniformization` in the `dynamics` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Published item interface** in `matrix-norms-condition-numbers-and-numerical-stability`: `def-induced-matrix-p-norm`, `thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized`, `thm-normal-equations-square-the-spectral-condition-number`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.
- **Same-frontier pair `NA-03`** — A page `sparse-matrix-models-and-kernel-costs` in the `linear` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-23`** — A page `elliptic-finite-difference-methods` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-28`** — A page `finite-element-meshes-and-interpolation` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-29`** — A page `ceas-lemma-and-aubin-nitsche-error-estimates` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-36`** — A page `parabolic-finite-element-methods` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Published item interface** in `algebraic-and-spectral-graph-theory`: `def-oriented-incidence-matrix-of-a-graph`, `def-laplacian-matrix-of-a-finite-simple-graph`, `thm-laplacian-is-the-oriented-incidence-product`, `thm-laplacian-is-positive-semidefinite-and-annihilates-ones`, `thm-laplacian-kernel-dimension-counts-components`. Use the unweighted graph results literally; prove the weighted zero-conductance extension locally.

### Same-frontier proof closure and well-definedness

Define B,C,M and prove L=BCB^T, component kernel, weighted conservation, Metzler semigroup and exact forward/backward Euler positivity thresholds. Define the closed trace-matching edge H1 space, Kirchhoff Green identity, path Poincare and junction-compatible interpolation before metric-graph Céa.


## PE06 — Evolutionary incompressible flow discretization

A: `energy-stable-incompressible-navier-stokes-discretization`. B: `energy-stable-incompressible-navier-stokes-discretization-examples`.

### Scope

Define weak incompressible Navier–Stokes on bounded Lipschitz domains in d=2,3 with viscosity nu>0, homogeneous Dirichlet data and pressure gauge. Use NA34's actual stable mini-element pair and a skew-symmetric convective form. Reuse existing finite-dimensional Brouwer; prove existence of a backward-Euler finite-dimensional discrete solution, discrete energy inequality and subsequential convergence to a weak solution for a specified mesh/time family; uniqueness is conditional in 3D. Prove a velocity/pressure error bound only on a supplied sufficiently smooth exact solution interval, with explicit norms and nu-dependent constants. Do not assert Reynolds-uniform robustness from an ordinary Gronwall estimate.

### Proof construction

Brouwer fixed-point existence using the discrete energy outward-pointing bound and existing `thm-brouwer-fixed-point-theorem` (prove only the outward-pointing-zero corollary); derive skew cancellation, pressure cancellation and energy. Prove discrete Sobolev and trilinear bounds by NA28 scaling/root Sobolev. Use PE12 time-translate compactness for strong L2 velocity and pass convection; derive divergence/initial trace and weak energy lower semicontinuity. Smooth errors use approximation, discrete inf-sup and Gronwall.

### Examples

2D Taylor–Green manufactured flow, energy budget, pressure gauge, unresolved 3D turbulence as a conditional computation.

### Prerequisite interfaces

- **Same-frontier pair `NA-34`** — A page `mixed-finite-elements-and-stokes-stability` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-36`** — A page `parabolic-finite-element-methods` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `PE12`** — A page `nonlinear-parabolic-compactness-and-monotone-evolution` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Published item interface** in `homology-axioms-degree-and-classical-applications`: `thm-brouwer-fixed-point-theorem`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.

### Same-frontier proof closure and well-definedness

Define the mini-element backward-Euler map and skew convection; prove the outward-pointing residual bound on a finite-dimensional ball and invoke Brouwer. Establish uniform energy/time-derivative bounds, use PE12 compactness to pass convection, and verify initial/divergence traces; smooth rates are a separate regular branch.


## PE10 — Yee FDTD and transient Maxwell finite elements

A: `yee-fdtd-and-transient-maxwell-discretization`. B: `yee-fdtd-and-transient-maxwell-discretization-examples`.

### Scope

Define a linear Maxwell mathematical system with uniformly positive definite bounded epsilon/mu and explicit PEC or periodic boundaries, sources satisfying the chosen charge-continuity relation. Define staggered Yee leapfrog and edge/face mixed semidiscretization. Prove discrete div curl=0, constraint propagation and a positive discrete energy under the actual strict CFL spectral-radius condition; prove smooth-solution error with boundary closures and compatible initial projections. Lossy media energy dissipates only with a specified conductivity/time treatment. Material jumps receive interface weak formulation and matching weighted norms; no smooth Taylor theorem across discontinuities.

### Proof construction

Oriented incidence identity supplies constraint propagation; adjoint curl and staggered polarization give modified energy; positivity follows dt² lambda_max(M_e^-1 C^T M_h^-1 C)<4 with strictness, retaining endpoint caveat. Derive grid CFL from a separately computed Cartesian symbol. Edge FE energy uses matrix transpose/curl duality; prove approximation/error by PE09 commuting projection and consistency.

### Examples

plane-wave dispersion and CFL, divergence pollution from incompatible sources, PEC cavity, dielectric jump.

### Prerequisite interfaces

- **Same-frontier pair `NA-19`** — A page `linear-scheme-stability-and-lax-equivalence` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-25`** — A page `hyperbolic-finite-difference-methods` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-36`** — A page `parabolic-finite-element-methods` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `PE09`** — A page `discrete-de-rham-complexes-and-edge-elements` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.

### Same-frontier proof closure and well-definedness

Define Yee incidence curl, positive mass matrices, leapfrog rows, PEC/periodic closure and source continuity. Prove discrete div-curl propagation and modified energy; positivity requires dt^2 lambda_max(M_e^-1 C^T M_h^-1 C)<4. Prove compatible staggered start before a rate.


## PE11 — Maxwell eigenproblems and compatible vector wave approximation

A: `maxwell-eigenproblems-and-compatible-vector-waves`. B: `maxwell-eigenproblems-and-compatible-vector-waves-examples`.

### Scope

For a stated PEC contractible cavity and positive coefficients, formulate divergence-free Maxwell eigenproblem with gradient kernel removed. Prove spectral approximation/no spurious nonzero eigenvalues for the concrete edge family using PE09 discrete compactness, eigenspace convergence and multiplicity-aware gaps. For mixed Hodge Laplacian state cohomology/gauge separately. NA37 symmetric compact coercive scalar theory can be consumed only after the constrained compact solution operator is actually constructed.

### Proof construction

Continuous Maxwell compact embedding on the gauge subspace (prove regular decomposition/compactness or cite the local PE09 supplier); compact self-adjoint solution operator; discrete compactness plus commuting consistency yields collectively compact convergence, then prove the required spectral perturbation theorem locally if NA37 only supplies a narrower scalar result. Track zero eigenvalues and domain topology.

### Examples

cavity modes, nodal spurious modes, repeated eigenvalue cluster, topological zero mode.

### Prerequisite interfaces

- **Same-frontier pair `NA-37`** — A page `finite-element-eigenvalue-approximation` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `PE09`** — A page `discrete-de-rham-complexes-and-edge-elements` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Published item interface** in `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators`: `thm-spectral-theorem-for-compact-self-adjoint-operators`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.

### Same-frontier proof closure and well-definedness

Construct the compact self-adjoint solution operator on the divergence-free gauge space; prove continuous compactness, PE09 discrete compactness and commuting consistency, then the collectively compact spectral perturbation/pollution-exclusion lemma. Track zero and repeated modes.


## PE13 — Finite-volume diffusion on admissible meshes

A: `finite-volume-diffusion-and-mimetic-fluxes`. B: `finite-volume-diffusion-and-mimetic-fluxes-examples`.

### Scope

Define admissible orthogonal meshes/transmissibilities for two-point isotropic diffusion, including boundary faces and discontinuous positive coefficients with harmonic face treatment. Prove local conservation, symmetric coercive matrix, discrete Poincare, maximum principle and convergence in a stated reconstructed energy norm. For anisotropic/nonorthogonal meshes define an explicit MPFA/mimetic method and prove its own coercivity/consistency under actual local geometric conditions; TPFA consistency is not claimed universally. Nonlinear monotone diffusion consumes PE12 compactness and identifies the graph under its exact assumptions.

### Proof construction

Flux cancellation gives discrete Green and energy; paths/translation bounds give meshuniform Poincare and compactness (prove geometric mesh conditions actually used); piecewise affine test recovery identifies weak gradients. Consistency errors vanish by orthogonality and regularity; nonlinear limit via Minty. Monotone matrix inverse gives positivity only when off-diagonal signs/irreducibility and boundary anchor are verified.

### Examples

orthogonal Voronoi diffusion, nonorthogonal TPFA inconsistency, anisotropic MPFA, heterogeneous interface flux.

### Prerequisite interfaces

- **Same-frontier pair `NA-23`** — A page `elliptic-finite-difference-methods` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-26`** — A page `conservative-finite-volume-weak-limits` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-28`** — A page `finite-element-meshes-and-interpolation` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `PE12`** — A page `nonlinear-parabolic-compactness-and-monotone-evolution` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.

### Same-frontier proof closure and well-definedness

Define orthogonal mesh points/transmissibilities and harmonic face coefficients for TPFA. Prove discrete Green/coercivity/Poincare, M-matrix positivity only with the sign/anchor condition, compactness and weak-gradient identification. Anisotropic MPFA has a separate local coercivity/consistency contract.


## PE25 — Overlapping Schwarz and stable subspace decompositions

A: `overlapping-schwarz-and-stable-subspace-decompositions`. B: `overlapping-schwarz-and-stable-subspace-decompositions-examples`.

### Scope

Define local restriction/prolongation, additive and multiplicative Schwarz, exact/inexact local solves and a coarse space for SPD conforming diffusion. Prove the abstract additive Schwarz condition bound from a stable decomposition constant C0 and a strengthened Cauchy–Schwarz/overlap constant C1; give the precise norm and normalization so the bound is C0*C1. Prove multiplicative contraction from the associated subspace correction estimate with its actual constants. Then prove a two-level overlapping P1 Poisson specialization on quasiuniform shape-regular meshes, shape-regular subdomains, coarse diameter H and overlap delta, with explicit H/delta dependence and bounded overlap. A one-level method does not receive a uniform-in-subdomain-count bound. High coefficient contrast and anisotropy require separately constructed robust coarse spaces; the ordinary partition proof does not imply robustness.

### Proof construction

Local energy minimization expresses B inverse as the minimum summed local energy over decompositions. Lower/upper Rayleigh bounds follow from stable decomposition and bounded synthesis, using existing SPD/CG suppliers. Construct a boundary-preserving coarse quasi-interpolant (NA28 lower-regularity interface) and partition-of-unity theta_i with ||grad theta_i||≤C/delta; decompose u into coarse part plus interpolated theta_i(u-u0), then prove local interpolation/overlap bounds and stable energy estimates. Multiplicative correction uses exact projection error products, telescoped energy decreases and a proved stable-decomposition estimate; noncommuting projections cannot simply multiply scalar contraction factors. Inexact local solvers require uniform spectral equivalence and resulting modified constants.

### Examples

one- versus two-level 1D Poisson, overlap shrinking, coefficient-channel failure of a naive coarse space, exact/inexact local solves.

### Prerequisite interfaces

- **Same-frontier pair `NA-06`** — A page `preconditioner-algorithms-and-residual-metrics` in the `linear` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-07`** — A page `multigrid-methods-and-complexity` in the `linear` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-28`** — A page `finite-element-meshes-and-interpolation` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-29`** — A page `ceas-lemma-and-aubin-nitsche-error-estimates` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.

### Same-frontier proof closure and well-definedness

Define local/coarse restrictions and the SPD additive Schwarz operator; prove the stable-decomposition and synthesis constants give kappa(BA)<=C0*C1. Construct the coarse quasi-interpolant/partition, prove overlap and stable decomposition; multiplicative contraction uses its projection-product identity, not scalar factors.

### Approved scope amendments

[
  {
    "origin": "research/numerical-analysis-48-2026-10-16-coverage-linear/proposal.json",
    "design": [
      {
        "origin": "research/numerical-analysis-48-2026-10-16-coverage-linear/proposal.json",
        "original_owner": "NA-07",
        "resolved_owner": "NA-07",
        "design": {
          "owner": "NA-07",
          "change": "Promote actual AMG and domain decomposition beyond conditional names: define strength graph, aggregation/prolongation, fixed Galerkin hierarchy and status; prove one concrete 1D Poisson level-uniform approximation+smoothing constants. General AMG stays conditional on the declared constants. Add overlapping additive Schwarz SPD preconditioner and condition bound C_stable C_overlap from fully proved stable decomposition/local energy estimates (or PDE-owned concrete domain-decomposition pair). Coordinate single ownership with PDE agent.",
          "sources": [
            "davis"
          ],
          "requires": [
            "NA-06",
            "NA-28"
          ],
          "reuse_disposition": "extend-existing",
          "source_references": [
            {
              "key": "davis",
              "title_and_locator": "Timothy Davis, Direct Methods for Sparse Linear Systems, SIAM, https://doi.org/10.1137/1.9780898718881 ; elimination trees, Cholesky, ordering, multifrontal and unsymmetric factorizations.",
              "urls": [
                "https://doi.org/10.1137/1.9780898718881"
              ]
            }
          ]
        },
        "reason": "approved scope extension",
        "scope_reassignment": {
          "moved_to": "PE25",
          "clauses": "Overlapping additive Schwarz and its stable-decomposition/local-energy condition theorem. Not authored a second time in NA07.",
          "retained_here": "Algebraic multigrid hierarchy, actual concrete uniform smoothing/approximation and cycle costs."
        }
      }
    ],
    "reason": "All overlapping additive-Schwarz stable decomposition, local-energy and condition-bound promises belong PE25 once; NA07 owns multigrid/AMG only."
  }
]


## PE27 — Nonlinear full-approximation multigrid

A: `nonlinear-full-approximation-multigrid`. B: `nonlinear-full-approximation-multigrid-examples`.

### Scope

Define FAS for F_h(u_h)=f_h with iterate restriction I_h^H, residual restriction R_h^H, prolongation P_H^h, coarse operator F_H and tau correction; specify nonlinear pre/post smoothing and finite budgets/branch failure. Prove fine-root fixed-point consistency for arbitrary consistent transfers when the coarse right side is F_H(Iu)+R(f-F_h(u)); require the coarse solver return the selected root Iu at zero defect. Prove exact reduction to linear correction multigrid when operators/smoothers/coarse solves are linear. Prove local convergence near a root from a bound q<1 on the derivative of the actual FAS cycle plus a proved Lipschitz derivative bound and invariant radius. Give a semilinear monotone diffusion example with actually verified smooth branch/smoother/coarse assumptions. Mesh-independent basin/rate requires those constants uniformly in h; no arbitrary nonlinear FAS convergence claim.

### Proof construction

Substitute the exact root and telescope the coarse correction. Differentiate every smoother, restriction, implicit coarse branch and prolongation at the root; use the local implicit theorem for the coarse Jacobian inverse and derive the linearized two-grid error operator exactly. NA07 contraction applies only when this derivative equals a linear cycle satisfying its actual smoothing/approximation hypotheses. Mean-value integral yields ||E(u)-u*||≤(q+Lr/2)||u-u*|| on the stated ball; choose r with q+Lr/2<1, prove invariance and iteration contraction. Coarse inexact solves add a quantified residual-to-correction defect with its own inverse bound. Cost recurrence includes nonlinear smoothing/coarse work, not a blanket O(N).

### Examples

nonlinear reaction Poisson tau cancellation, zero-tau inconsistent fixed point, linear FAS equivalence, loss of local basin near a bifurcation.

### Prerequisite interfaces

- **Same-frontier pair `NA-07`** — A page `multigrid-methods-and-complexity` in the `linear` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-09`** — A page `nonlinear-equations-and-newton-methods` in the `optimization` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `PE12`** — A page `nonlinear-parabolic-compactness-and-monotone-evolution` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Published item interface** in `inverse-and-implicit-function-theorems`: `thm-euclidean-implicit-function-theorem`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.

### Same-frontier proof closure and well-definedness

Define the finite FAS cycle, tau-corrected coarse right side, transfers, smoothers, budget and failure statuses. Prove root consistency and linear reduction. For nonlinear convergence prove coarse Jacobian invertibility, branch admissibility and the actual cycle derivative/Lipschitz bound q+Lr/2<1; NA-09 alone supplies none of those branch facts.


## XD-06 — Meshfree kernel approximation and conservative sph

A: `meshfree-kernel-approximation-and-conservative-sph`. B: `meshfree-kernel-approximation-and-conservative-sph-examples`.

### Scope

**Exact scope.** Symmetric normalized compactly supported kernel W_ε and cell/particle quadrature with fill distance and bounded cell volumes. Prove convolution bias O(ε²) for C² functions from first-moment cancellation, and derivative bias under corresponding higher regularity; bound particle quadrature error explicitly by a cellwise oscillation sum or Lipschitz norm. State the joint refinement relation between particle fill distance and ε required for convergence; fixed neighbors/irregular particles do not automatically give consistent derivatives. Boundary truncation destroys unity/linear reproduction: give a specified corrected moment fit with uniformly invertible moment matrix, or restrict theorem to interior/periodic points and identify the boundary solver as a separate obligation. Do not claim arbitrary boundary consistency.

The specified SPH system has `ρ_i=Σ_j m_j W_ε(x_i−x_j)`, `x_i′=v_i`, and `v_i′=−Σ_j m_j(p_i/ρ_i²+p_j/ρ_j²)∇W_ε(x_i−x_j)`, positive masses, a C² radial kernel and a proved lower bound on ρ_i on the controlled tube. If internal energies are included, use exactly `e_i′=(p_i/ρ_i²)Σ_j m_j(v_i−v_j)·∇W_ε(x_i−x_j)` with a specified smooth pressure map. Antisymmetry proves total linear-momentum conservation; radial central forces prove angular-momentum conservation. An energy-conserving semidiscrete variant must include exactly matched internal-energy equation; dissipative artificial viscosity must have the stated sign and a separate energy inequality. Then prove local well-posedness and numerical time error for the **regularized finite particle system** on a collision-free/invariant controlled tube. Full compressible Euler shock convergence is not implied and is not silently asserted.

### Proof construction

**Local suppliers.** Kernel moment/Taylor bounds; particle-cell quadrature estimate; derivative kernel scaling; boundary moment-matrix conditioning; pair antisymmetry/central-force identities; smooth regularized-force Lipschitz bounds and time-integrator invariant/error ledger. Derivation from a stipulated discrete Lagrangian is mathematics, not an empirical validity claim. Explain which invariants are exact for the chosen time integrator: generic explicit RK does not conserve energy exactly.

### Examples

**B examples.** Interior polynomial reproduction; missing-neighbor boundary bias; disordered particle derivative inconsistency; two-particle equal/opposite force; pressure instability counterexample with invariant conservation still true.

### Prerequisite interfaces

- **Same-frontier pair `XD-08`** — A page `interacting-particle-mean-field-and-vortex-blob-error` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Published item interface** in `matrix-norms-condition-numbers-and-numerical-stability`: `def-induced-matrix-p-norm`, `thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized`, `thm-normal-equations-square-the-spectral-condition-number`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.
- **Same-frontier pair `NA-10`** — A page `polynomial-interpolation-and-remainder` in the `linear` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-12`** — A page `composite-quadrature-rules` in the `linear` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-15`** — A page `runge-kutta-methods-and-order` in the `dynamics` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-22`** — A page `geometric-numerical-integration` in the `dynamics` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.

### Same-frontier proof closure and well-definedness

Prove the selected kernel's moments/Taylor bias and particle-cell oscillation estimate with the stated \(h_p/\varepsilon\) relation; boundary moment correction needs a uniform singular-value lower bound. Define the finite regularized SPH ODE and invariant tube, then prove pair antisymmetry, any matched internal-energy identity, and density lower bound locally. Use NA-15 only for the named RK tableau/order and prove one-step stability plus tube preservation in XD-06 before a global RK error claim. Use NA-22 only on a verified separable Hamiltonian sub-branch: leapfrog/Verlet reversibility, symplecticity and volume preservation are not exact energy conservation, and modified-energy claims require the supplier's analytic near-identity hypotheses. The regularized finite-particle theorem does not imply Euler shock convergence.


## NA-30 — Variational crimes and Strang lemmas

A: `variational-crimes-and-strang-lemmas`. B: `variational-crimes-and-strang-lemmas-examples`.

### Scope

New perturbed/nonconforming form/discrete consistency Strang estimates under actual stability/consistency/geometry assumptions.

### Proof construction

Add/subtract a comparison function and the discrete bilinear form; apply stability, boundedness and approximation. Bound quadrature and geometry defects term-by-term using the specified cell scaling. Include data oscillation where unresolved coefficients/source terms enter.

### Examples

exact integration versus underintegrated stiffness; quadrature error for a polynomial exactness degree; a nonconforming consistency term that prevents direct use of Céa.

### Prerequisite interfaces

- **Same-frontier pair `NA-28`** — A page `finite-element-meshes-and-interpolation` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-29`** — A page `ceas-lemma-and-aubin-nitsche-error-estimates` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Published item interface** in `lax-milgram-and-weak-elliptic-solutions`: `thm-lax-milgram`, `thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.
- **Same-frontier pair `NA-12`** — A page `composite-quadrature-rules` in the `linear` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-13`** — A page `gaussian-quadrature` in the `linear` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.

### Same-frontier proof closure and well-definedness

Define exact and perturbed Galerkin forms, data, norms, and each geometry/quadrature/source defect. Carry CC for imported Lax–Milgram/Poincare. Prove discrete boundedness and coercivity from the stated perturbation bound, then subtract equations and control consistency plus approximation terms to obtain Strang. For quadrature use only NA-12/13's named grid, smoothness and derivative-norm error; integration/summation rounding is separate NA-02. A quadrature rule's polynomial exactness alone does not imply a mesh-uniform coercivity bound.

### Approved scope amendments

[
  {
    "origin": "research/numerical-analysis-48-2026-10-16-coverage-crossdomain/proposed-pairs.json",
    "binding_subset": "NA-30",
    "design": "\n## Required amendments to the original 46 designs\n\nThese are preservation/completion clauses, not permission to erase approved claims.\n\n* **NA-15/17/18:** distinguish absolute stability, positive invariance, conservation and certified adaptive global error. Crosslink XD-03 rather than imply stiff solvers protect nonnegative biological states. Event/history/stiffness extensions remain sibling ownership.\n* **NA-22:** particle/symplectic examples must state domain/collision restrictions and actual time-integrator invariants. A Hamiltonian interpretation is a mathematical stipulated model. Neither discrete energy drift plots nor conserved semidiscrete momentum prove a continuum particle limit.\n* **NA-23/24/25:** graph/renewal boundary rows are not ordinary rectangular Dirichlet rows. Diffusive L2 stability does not imply positivity; add actual maximum-principle conditions only when proved. Inflow renewal and junction routing go to XD-04/09.\n* **NA-26/27:** retain scalar BV entropy scope; it cannot supply multi-species positivity or aggregation/fragmentation moment conservation. The new methods receive independent proofs.\n* **NA-28–36:** interval-edge graph trace, renewal inflow trace and particle boundary correction are distinct from simplex H1 trace. Reuse exact established interfaces, supply missing geometry locally. No arbitrary SPH/RBF convergence via Céa unless a real coercive Galerkin structure is proved.\n* **NA-39/42:** identify randomness and coupling: particle loading, jump paths, resampling and empirical initial measures differ. Do not transfer independent-level variance proofs to correlated levels or claim N^−1/2 uniform transport error from a scalar MC CLT.\n* **NA-43/44/45:** require forward model/sensitivity discretization terms in parameter estimation/design. Identifiability of an exact statistical model does not certify a numerically thresholded Jacobian rank. Preserve approximation, sampling, solver, regularization and model error separately; finite projection/cutoff bias is explicit.\n"
  }
]


## NA-38 — Spectral collocation and Galerkin methods

A: `spectral-collocation-and-galerkin-methods`. B: `spectral-collocation-and-galerkin-methods-examples`.

### Scope

New Fourier/Chebyshev differentiation/collocation/Galerkin discretizations and weighted approximation/aliasing/stability-specific error; do not duplicate published Fourier transforms or polynomial/spline bases.

### Proof construction

Derive differentiation matrices from basis differentiation and interpolation; prove weighted approximation bounds from the named polynomial projection theorem; use a scheme-specific stability estimate for any BVP/PDE convergence claim. Separate aliasing/dealiasing and nonlinear products. No rigorous argument may infer 3D Navier–Stokes regularity from numerical behavior.

### Examples

periodic Fourier derivative of a trigonometric polynomial; Chebyshev endpoint clustering; analytic versus nonsmooth coefficient decay; aliasing of a quadratic product.

### Prerequisite interfaces

- **Same-frontier pair `NA-10`** — A page `polynomial-interpolation-and-remainder` in the `linear` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-11`** — A page `polynomial-approximation-and-chebyshev-interpolation` in the `linear` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-12`** — A page `composite-quadrature-rules` in the `linear` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-13`** — A page `gaussian-quadrature` in the `linear` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Published item interface** in `fundamental-trigonometric-identities`: `def-chebyshev-polynomials-first-and-second-kind`, `thm-sine-and-cosine-subtraction-formulas`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.

### Same-frontier proof closure and well-definedness

Define Fourier/Nyquist and Chebyshev node conventions, differentiation matrices, boundary row elimination and finite solve failure. Prove weighted projection estimates and method-specific nonsingularity/stability; aliasing/dealiasing is a separate exact quadrature calculation.

### Approved scope amendments

[
  {
    "origin": "research/numerical-analysis-48-2026-10-16-coverage-pde/proposal.md",
    "design": "\n\nThese additions preserve every already approved result. They supply prerequisites locally, without introducing unnecessary pair splits.\n\n- **NA28:** Keep affine mesh/interpolation claims. Add a typed finite oriented cell-complex incidence interface (`boundary boundary=0`), elementwise integration/trace definitions on affine simplices, and reference covariant/contravariant Piola transformations with exact gradient/curl/divergence transformation and normal/tangential moment identities. Prove by affine chain rule, determinant/cofactor identities and cell Green; boundary cancellation uses opposite orientations. Consumers PE08/PE09/PE10. Curved-map approximation remains PE17.\n- **NA33:** Preserve SIPG elliptic claims. Its B page may compare with PE04 hyperbolic DG, but no logical claim that elliptic penalty analysis proves nonlinear hyperbolic stability.\n- **NA34:** Retain the full existing divergence-lifting/Korn/mini-element binding design. Add an explicitly proved discrete Helmholtz orthogonal projection in the finite velocity mass inner product and pressure Schur-complement identity, including pressure nullspace/gauge. It follows from the already proved inf-sup and finite-dimensional orthogonal decomposition. Used by PE06/PE07; this does not establish bounded-domain Helmholtz regularity.\n- **NA35:** Retain reliability/efficiency/contraction/optimality claims and source restrictions. Its conforming refinement algorithm must actually provide the closure, shape-regularity and counting properties it consumes; name newest-vertex bisection initial-label compatibility and dimension. Do not infer 3D mesh complexity from a 2D proof. PE17 is geometric mesh generation/curvature, not a replacement for these obligations.\n- **NA36:** Retain full continuous evolution-triple construction. Add the Hilbert-valued discrete energy identity `2(a-b,a)=||a||²-||b||²+||a-b||²` and backward-Euler reconstruction/compactness interface when later used. Aubin–Lions is NOT implicitly supplied: PE12 owns its complete proof and PE06 may consume that supplier.\n- **NA38:** Keep the explicit exclusion of an unread second-order pressure-splitting proof. PE07 separately authors an actual first-order projection theorem and separately conditioned higher-order pressure correction.\n\n",
    "binding_subset": "NA-38"
  }
]


## PC-NYST — Nystrom product integration and fredholm error

A: `nystrom-product-integration-and-fredholm-error`. B: `nystrom-product-integration-and-fredholm-error-examples`.

### Scope

genuinely-new integral-equation discretization guarantees

A: `nystrom-product-integration-and-fredholm-error`.

On X=C([a,b]), define K u(x)=integral k(x,y)u(y)dy, smooth continuous-kernel Nyström with specified quadrature and reconstructed K_n, and product integration k(x,y)=s(x,y)a(x,y) with a specified weak singularity s and exact/computably enclosed product weights. The equations are (I-K)u=f and (I-K_n)u_n=f_n. In the operator-norm route prove ||K-K_n||<=epsilon_n in the stated X/operator spaces; if ||(I-K)^-1|| epsilon_n<1, derive discrete inverse bound and ||u-u_n|| <= ||(I-K_n)^-1|| (||f-f_n||+||(K-K_n)u||). **Do not assert norm convergence on C for arbitrary point-sampling quadrature**: standard Nyström commonly needs the collectively compact route. Prove pointwise consistency and collective compactness (uniform boundedness/equicontinuity), then uniform discrete invertibility from contradiction/compact subsequences and continuous injectivity. Error rate uses quadrature of k(x,.)u(.), with its actual regularity, not all continuous unit-ball functions. Include a singular-kernel product-integration instance with weight stability and consistency proved, not assumed.

Same-frontier PC-NYST suppliers: collectively compact approximation theorem, reconstruction/grid equivalence, weight stability, singular-kernel truncation/compactness for the selected exponents. Canonical Fredholm alternative explicitly assumes AC; carry it if using that proof route. Canonical integral-operator compactness/Arzelà–Ascoli are candidate suppliers to inspect; any mismatching interface gets a local proof here. Eigenvalue/resonance approximation additionally needs isolated spectral-cluster multiplicity proof, assigned PC-NYST before PC-SCAT consumers. B: smooth separable kernel exact finite-rank solve; nearly singular resolvent amplifies quadrature error; weak singularity lowering order; standard Nyström not norm-convergent on all C unit-ball inputs. Source: Atkinson The Numerical Solution of Integral Equations of the Second Kind https://doi.org/10.1017/CBO9780511626340 ; Anselone Collectively Compact Operator Approximation Theory https://doi.org/10.1007/978-1-4613-9116-3 . Reading pending.

### Proof construction

[
  "On X=C([a,b]), define K u(x)=integral k(x,y)u(y)dy, smooth continuous-kernel Nyström with specified quadrature and reconstructed K_n, and product integration k(x,y)=s(x,y)a(x,y) with a specified weak singularity s and exact/computably enclosed product weights. The equations are (I-K)u=f and (I-K_n)u_n=f_n. In the operator-norm route prove ||K-K_n||<=epsilon_n in the stated X/operator spaces; if ||(I-K)^-1|| epsilon_n<1, derive discrete inverse bound and ||u-u_n|| <= ||(I-K_n)^-1|| (||f-f_n||+||(K-K_n)u||). **Do not assert norm convergence on C for arbitrary point-sampling quadrature**: standard Nyström commonly needs the collectively compact route. Prove pointwise consistency and collective compactness (uniform boundedness/equicontinuity), then uniform discrete invertibility from contradiction/compact subsequences and continuous injectivity. Error rate uses quadrature of k(x,.)u(.), with its actual regularity, not all continuous unit-ball functions. Include a singular-kernel product-integration instance with weight stability and consistency proved, not assumed.",
  "Same-frontier PC-NYST suppliers: collectively compact approximation theorem, reconstruction/grid equivalence, weight stability, singular-kernel truncation/compactness for the selected exponents. Canonical Fredholm alternative explicitly assumes AC; carry it if using that proof route. Canonical integral-operator compactness/Arzelà–Ascoli are candidate suppliers to inspect; any mismatching interface gets a local proof here. Eigenvalue/resonance approximation additionally needs isolated spectral-cluster multiplicity proof, assigned PC-NYST before PC-SCAT consumers. B: smooth separable kernel exact finite-rank solve; nearly singular resolvent amplifies quadrature error; weak singularity lowering order; standard Nyström not norm-convergent on all C unit-ball inputs. Source: Atkinson The Numerical Solution of Integral Equations of the Second Kind https://doi.org/10.1017/CBO9780511626340 ; Anselone Collectively Compact Operator Approximation Theory https://doi.org/10.1007/978-1-4613-9116-3 . Reading pending."
]

### Examples

smooth separable kernel exact finite-rank solve; nearly singular resolvent amplifies quadrature error; weak singularity lowering order; standard Nyström not norm-convergent on all C unit-ball inputs.

### Prerequisite interfaces

- **Same-frontier pair `NA-12`** — A page `composite-quadrature-rules` in the `linear` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-13`** — A page `gaussian-quadrature` in the `linear` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Published item interface** in `compact-operators-and-riesz-schauder-theory`: `thm-fredholm-alternative-for-identity-minus-compact`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.

### Same-frontier proof closure and well-definedness

Define K, quadrature nodes/weights, finite matrix I-K_N, reconstruction and singular solve status. Prove either operator-norm perturbation or consistency+collective compactness; use Fredholm only with AC. PC-NYST is formulated on C([a,b]); the finite-measure square-kernel rescaling is owned only by the downstream PC-SCAT branch, so no dependency cycle is introduced.


## PE07 — Projection, pressure correction and saddle-point solvers

A: `projection-and-pressure-correction-for-incompressible-flow`. B: `projection-and-pressure-correction-for-incompressible-flow-examples`.

### Scope

Select periodic incompressible Stokes on \(\mathbb T^d\): \(u_t-\nu\Delta u+\nabla p=f\), \(\nabla\cdot u=0\), with zero-mean pressure and compatible mean-zero forcing. Use the periodic discrete Laplacian and gradient/divergence adjoints with the velocity mass inner product. Given divergence-free \(u^n\) and mean-zero \(p^n\), define
\[
(\widetilde u^{n+1}-u^n)/\Delta t-\nu\Delta_h\widetilde u^{n+1}+\nabla_hp^n=f^{n+1},\quad
\Delta_h\phi^{n+1}=\operatorname{div}_h\widetilde u^{n+1}/\Delta t,
\]
\[
u^{n+1}=\widetilde u^{n+1}-\Delta t\nabla_h\phi^{n+1},\qquad p^{n+1}=p^n+\phi^{n+1}.
\]
Fix the pressure zero mode at every solve. Prove the mass-orthogonal Helmholtz projection, exact discrete incompressibility and the modified energy identity on this branch. Prove first-order velocity accuracy only for periodic smooth data and its stated mesh/time consistency. Bounded walls, rotational/second-order corrections and pressure boundary layers are separate held variants. Define block/Schur preconditioners only after NA34's inf-sup and declared mass/stiffness scalings; no generic solver-speed claim.

### Proof construction

On the periodic grid, \(\operatorname{div}_h\nabla_h=\Delta_h\), so the Poisson solve makes \(\operatorname{div}_h u^{n+1}=0\). Orthogonality of \(\nabla_h\phi\) to the discrete divergence-free subspace proves \(\|\widetilde u^{n+1}\|_M^2=\|u^{n+1}\|_M^2+\Delta t^2\|\nabla_h\phi^{n+1}\|_M^2\). Test the predictor by \(2\Delta t\widetilde u^{n+1}\), use \((\nabla_hp^n,u^n)_M=0\) and \(\operatorname{div}_h\widetilde u^{n+1}=\Delta t\Delta_h\phi^{n+1}\), and combine with \(p^{n+1}=p^n+\phi^{n+1}\) to obtain
\[
\|u^{n+1}\|_M^2-\|u^n\|_M^2+\|\widetilde u^{n+1}-u^n\|_M^2+2\nu\Delta t\|\nabla_h\widetilde u^{n+1}\|_M^2+\Delta t^2(\|\nabla_hp^{n+1}\|_M^2-\|\nabla_hp^n\|_M^2)=2\Delta t(f^{n+1},\widetilde u^{n+1})_M.
\]
This is a modified pressure/velocity energy identity, not a bounded-wall estimate. Derive the smooth periodic truncation residual and first-order velocity estimate by the projection identity and discrete Gronwall. For block preconditioning use only NA34's exact inf-sup/kernels plus specified mass/stiffness equivalence; retain separate algebraic solver errors.

### Examples

periodic projection, wall pressure boundary artifact, block preconditioner eigenvalues, checkerboard mode.

### Prerequisite interfaces

- **Same-frontier pair `NA-06`** — A page `preconditioner-algorithms-and-residual-metrics` in the `linear` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-34`** — A page `mixed-finite-elements-and-stokes-stability` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-36`** — A page `parabolic-finite-element-methods` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `PE06`** — A page `energy-stable-incompressible-navier-stokes-discretization` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Published item interface** in `direct-matrix-factorisations-lu-cholesky-and-qr`: `def-block-lu-factorisation`, `thm-block-lu-factorisation-via-an-invertible-leading-block`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.

### Same-frontier proof closure and well-definedness

Inputs are periodic grid, \(u^n\) with zero discrete divergence, mean-zero \(p^n\), \(f^{n+1}\), \(\nu>0\), \(\Delta t>0\). The predictor is a positive-definite zero-mean Helmholtz solve; the correction is a zero-mean Poisson solve; output \((u^{n+1},p^{n+1})\) or a singular-solve status. Prove the displayed projection/modified-energy identity and carry its exact pressure increment. Do not reuse it for physical wall boundary conditions: those add a pressure boundary defect. Block Schur bounds require NA34 inf-sup and the declared scalings.


## PE26 — Substructuring, FETI-DP and BDDC

A: `substructuring-feti-dp-and-bddc-preconditioners`. B: `substructuring-feti-dp-and-bddc-preconditioners-examples`.

### Scope

Define discrete harmonic extension, interface Schur complement, primal assembled versus partially assembled interface spaces, primal constraints (corners/edge averages as appropriate), scaled averaging and a concrete BDDC method. Define corresponding FETI-DP dual multipliers/jump operator with explicit redundant-constraint convention. Prove well-definedness after removing local floating-subdomain nullspaces and establishing primal constraints; prove exact interface equivalence and the appropriate common nontrivial-spectrum comparison. Prove the classical bound C(1+log(H/h))² only for a stated scalar second-order diffusion family on shape-regular polygonal subdomains in 2D with matching quasiuniform triangulations and the selected corner/edge constraints/scaling; coefficient jumps need precisely stated subdomain-constant aligned coefficient/scaling assumptions. A 3D claim must add its edge/face constraint and trace proof. Do not claim arbitrary graph/mesh/high-contrast scalability.

### Proof construction

Reuse block elimination for Schur algebra. Prove harmonic extension minimizes energy, then characterize the BDDC preconditioner by constrained local minimization and averaging. Prove averaging energy bound using the exact discrete trace/H1/2 norm and vertex-cutoff logarithmic estimate; this logarithmic estimate, local trace lifting and stable coarse constraint construction are same-page analytic prerequisites with full proofs, not assumed universal inequalities. Show dual jump/averaging decomposition identities and map eigenvectors between primal and dual operators, explicitly excluding null/unit modes where required. Work/storage counts are separate from conditioning and depend on local/coarse solver costs.

### Examples

two floating Poisson subdomains, missing corner singularity, matching primal/dual spectrum, coarse-solve work bottleneck.

### Prerequisite interfaces

- **Same-frontier pair `NA-06`** — A page `preconditioner-algorithms-and-residual-metrics` in the `linear` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-28`** — A page `finite-element-meshes-and-interpolation` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-29`** — A page `ceas-lemma-and-aubin-nitsche-error-estimates` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `PE25`** — A page `overlapping-schwarz-and-stable-subspace-decompositions` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Published item interface** in `direct-matrix-factorisations-lu-cholesky-and-qr`: `def-block-lu-factorisation`, `thm-block-lu-factorisation-via-an-invertible-leading-block`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.

### Same-frontier proof closure and well-definedness

Define local nullspaces, harmonic extensions, Schur complements, primal constraints, averaging and redundant multiplier convention. Prove local fractional trace/lifting and 2D vertex-log bounds, then averaging stability and primal/dual spectrum correspondence with null/unit modes separated.


## NA-31 — Crouzeix–Raviart finite elements

A: `crouzeix-raviart-finite-elements`. B: `crouzeix-raviart-finite-elements-examples`.

### Scope

New Crouzeix-Raviart element/unisolvence/broken method/discrete Poincare/consistency/error; reuse reference-cell framework and continuous weak problem.

### Proof construction

Construct the face-average interpolant, bound jumps by local Neumann liftings and trace estimates, then prove consistency and use NA-30. Apply adjoint duality only with the declared smoothing exponent.

### Examples

one nonconforming face-average degree of freedom; broken-gradient norm; a solution below the trace regularity threshold.

### Prerequisite interfaces

- **Same-frontier pair `NA-28`** — A page `finite-element-meshes-and-interpolation` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-29`** — A page `ceas-lemma-and-aubin-nitsche-error-estimates` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-30`** — A page `variational-crimes-and-strang-lemmas` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Published item interface** in `sobolev-traces-and-zero-boundary-values`: `thm-lp-trace-operator-on-a-bounded-c-one-domain`, `thm-sobolev-gauss-green-formula-on-c-one-domains`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.
- **Published item interface** in `sobolev-poincare-and-morrey-inequalities`: `thm-poincare-inequality-for-w-one-p-zero`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.

### Same-frontier proof closure and well-definedness

Define face-average continuity and boundary means; prove interpolation unisolvence and broken discrete Poincare by jump control. Establish normal-gradient traces only for u in H^{1+r}, r>1/2, and use NA-30 consistency; dual L2 rates require s>1/2.

### Approved scope amendments

[
  {
    "origin": "research/numerical-analysis-48-2026-10-16-coverage-crossdomain/proposed-pairs.json",
    "binding_subset": "NA-31",
    "design": "\n## Required amendments to the original 46 designs\n\nThese are preservation/completion clauses, not permission to erase approved claims.\n\n* **NA-15/17/18:** distinguish absolute stability, positive invariance, conservation and certified adaptive global error. Crosslink XD-03 rather than imply stiff solvers protect nonnegative biological states. Event/history/stiffness extensions remain sibling ownership.\n* **NA-22:** particle/symplectic examples must state domain/collision restrictions and actual time-integrator invariants. A Hamiltonian interpretation is a mathematical stipulated model. Neither discrete energy drift plots nor conserved semidiscrete momentum prove a continuum particle limit.\n* **NA-23/24/25:** graph/renewal boundary rows are not ordinary rectangular Dirichlet rows. Diffusive L2 stability does not imply positivity; add actual maximum-principle conditions only when proved. Inflow renewal and junction routing go to XD-04/09.\n* **NA-26/27:** retain scalar BV entropy scope; it cannot supply multi-species positivity or aggregation/fragmentation moment conservation. The new methods receive independent proofs.\n* **NA-28–36:** interval-edge graph trace, renewal inflow trace and particle boundary correction are distinct from simplex H1 trace. Reuse exact established interfaces, supply missing geometry locally. No arbitrary SPH/RBF convergence via Céa unless a real coercive Galerkin structure is proved.\n* **NA-39/42:** identify randomness and coupling: particle loading, jump paths, resampling and empirical initial measures differ. Do not transfer independent-level variance proofs to correlated levels or claim N^−1/2 uniform transport error from a scalar MC CLT.\n* **NA-43/44/45:** require forward model/sensitivity discretization terms in parameter estimation/design. Identifiability of an exact statistical model does not certify a numerically thresholded Jacobian rank. Preserve approximation, sampling, solver, regularization and model error separately; finite projection/cutoff bias is explicit.\n"
  }
]


## NA-32 — Nitsche methods for weak boundary enforcement

A: `nitsche-methods-for-weak-boundary-enforcement`. B: `nitsche-methods-for-weak-boundary-enforcement-examples`.

### Scope

New symmetric Nitsche procedure/form, penalty scaling/coercivity/consistency/error with exact local inverse trace and boundary data assumptions.

### Proof construction

Establish element inverse/discrete-trace bounds, absorb boundary consistency terms with the selected penalty, and verify consistency by integration by parts. Use NA-30’s perturbation estimate, then duality for L² and track the half-order boundary term.

### Examples

penalty below/above coercivity threshold; exact boundary data versus weak imposition; symmetric versus nonsymmetric L² behavior.

### Prerequisite interfaces

- **Same-frontier pair `NA-28`** — A page `finite-element-meshes-and-interpolation` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-29`** — A page `ceas-lemma-and-aubin-nitsche-error-estimates` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-30`** — A page `variational-crimes-and-strang-lemmas` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Published item interface** in `sobolev-traces-and-zero-boundary-values`: `thm-lp-trace-operator-on-a-bounded-c-one-domain`, `thm-sobolev-gauss-green-formula-on-c-one-domains`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.
- **Published item interface** in `sobolev-poincare-and-morrey-inequalities`: `thm-poincare-inequality-for-w-one-p-zero`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.

### Same-frontier proof closure and well-definedness

Define sign, coefficient flux, lift, mesh-dependent norm and gamma0/h penalty. Prove the reference-cell inverse trace threshold, uniform coercivity above it, and adjoint consistency separately for the symmetric L2 result.

### Approved scope amendments

[
  {
    "origin": "research/numerical-analysis-48-2026-10-16-coverage-crossdomain/proposed-pairs.json",
    "binding_subset": "NA-32",
    "design": "\n## Required amendments to the original 46 designs\n\nThese are preservation/completion clauses, not permission to erase approved claims.\n\n* **NA-15/17/18:** distinguish absolute stability, positive invariance, conservation and certified adaptive global error. Crosslink XD-03 rather than imply stiff solvers protect nonnegative biological states. Event/history/stiffness extensions remain sibling ownership.\n* **NA-22:** particle/symplectic examples must state domain/collision restrictions and actual time-integrator invariants. A Hamiltonian interpretation is a mathematical stipulated model. Neither discrete energy drift plots nor conserved semidiscrete momentum prove a continuum particle limit.\n* **NA-23/24/25:** graph/renewal boundary rows are not ordinary rectangular Dirichlet rows. Diffusive L2 stability does not imply positivity; add actual maximum-principle conditions only when proved. Inflow renewal and junction routing go to XD-04/09.\n* **NA-26/27:** retain scalar BV entropy scope; it cannot supply multi-species positivity or aggregation/fragmentation moment conservation. The new methods receive independent proofs.\n* **NA-28–36:** interval-edge graph trace, renewal inflow trace and particle boundary correction are distinct from simplex H1 trace. Reuse exact established interfaces, supply missing geometry locally. No arbitrary SPH/RBF convergence via Céa unless a real coercive Galerkin structure is proved.\n* **NA-39/42:** identify randomness and coupling: particle loading, jump paths, resampling and empirical initial measures differ. Do not transfer independent-level variance proofs to correlated levels or claim N^−1/2 uniform transport error from a scalar MC CLT.\n* **NA-43/44/45:** require forward model/sensitivity discretization terms in parameter estimation/design. Identifiability of an exact statistical model does not certify a numerically thresholded Jacobian rank. Preserve approximation, sampling, solver, regularization and model error separately; finite projection/cutoff bias is explicit.\n"
  }
]


## NA-33 — Symmetric interior-penalty discontinuous Galerkin

A: `discontinuous-galerkin-methods`. B: `discontinuous-galerkin-methods-examples`.

### Scope

New SIPDG broken form/jump-average/penalty algorithm, coercivity/consistency/error with exact mesh/trace hypotheses; no duplicate Nitsche lemma under new ID.

### Proof construction

Sum local Green identities; control face terms by discrete trace/inverse inequalities; choose γ₀ above the mesh-degree-dependent threshold; establish a bounded consistency residual and apply NA-30. For L², solve the adjoint problem and carry its regularity exponent.

### Examples

one-dimensional interior jump penalty; coercivity loss for a too-small penalty; broken polynomial with no global continuity.

### Prerequisite interfaces

- **Same-frontier pair `NA-28`** — A page `finite-element-meshes-and-interpolation` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-29`** — A page `ceas-lemma-and-aubin-nitsche-error-estimates` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-30`** — A page `variational-crimes-and-strang-lemmas` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Published item interface** in `weak-derivatives-and-sobolev-spaces`: `def-sobolev-space-wkp-and-its-norm`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.
- **Published item interface** in `sobolev-traces-and-zero-boundary-values`: `thm-lp-trace-operator-on-a-bounded-c-one-domain`, `thm-sobolev-gauss-green-formula-on-c-one-domains`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.

### Same-frontier proof closure and well-definedness

Define jumps/averages, broken polynomial space, SIP form and boundary/mean convention. Prove broken-norm control, local inverse trace, large-penalty coercivity, consistency and Strang error. H(div) flux reconstruction is separate.

### Approved scope amendments

[
  {
    "origin": "research/numerical-analysis-48-2026-10-16-coverage-pde/proposal.md",
    "design": "\n\nThese additions preserve every already approved result. They supply prerequisites locally, without introducing unnecessary pair splits.\n\n- **NA28:** Keep affine mesh/interpolation claims. Add a typed finite oriented cell-complex incidence interface (`boundary boundary=0`), elementwise integration/trace definitions on affine simplices, and reference covariant/contravariant Piola transformations with exact gradient/curl/divergence transformation and normal/tangential moment identities. Prove by affine chain rule, determinant/cofactor identities and cell Green; boundary cancellation uses opposite orientations. Consumers PE08/PE09/PE10. Curved-map approximation remains PE17.\n- **NA33:** Preserve SIPG elliptic claims. Its B page may compare with PE04 hyperbolic DG, but no logical claim that elliptic penalty analysis proves nonlinear hyperbolic stability.\n- **NA34:** Retain the full existing divergence-lifting/Korn/mini-element binding design. Add an explicitly proved discrete Helmholtz orthogonal projection in the finite velocity mass inner product and pressure Schur-complement identity, including pressure nullspace/gauge. It follows from the already proved inf-sup and finite-dimensional orthogonal decomposition. Used by PE06/PE07; this does not establish bounded-domain Helmholtz regularity.\n- **NA35:** Retain reliability/efficiency/contraction/optimality claims and source restrictions. Its conforming refinement algorithm must actually provide the closure, shape-regularity and counting properties it consumes; name newest-vertex bisection initial-label compatibility and dimension. Do not infer 3D mesh complexity from a 2D proof. PE17 is geometric mesh generation/curvature, not a replacement for these obligations.\n- **NA36:** Retain full continuous evolution-triple construction. Add the Hilbert-valued discrete energy identity `2(a-b,a)=||a||²-||b||²+||a-b||²` and backward-Euler reconstruction/compactness interface when later used. Aubin–Lions is NOT implicitly supplied: PE12 owns its complete proof and PE06 may consume that supplier.\n- **NA38:** Keep the explicit exclusion of an unread second-order pressure-splitting proof. PE07 separately authors an actual first-order projection theorem and separately conditioned higher-order pressure correction.\n\n",
    "binding_subset": "NA-33"
  },
  {
    "origin": "research/numerical-analysis-48-2026-10-16-coverage-crossdomain/proposed-pairs.json",
    "binding_subset": "NA-33",
    "design": "\n## Required amendments to the original 46 designs\n\nThese are preservation/completion clauses, not permission to erase approved claims.\n\n* **NA-15/17/18:** distinguish absolute stability, positive invariance, conservation and certified adaptive global error. Crosslink XD-03 rather than imply stiff solvers protect nonnegative biological states. Event/history/stiffness extensions remain sibling ownership.\n* **NA-22:** particle/symplectic examples must state domain/collision restrictions and actual time-integrator invariants. A Hamiltonian interpretation is a mathematical stipulated model. Neither discrete energy drift plots nor conserved semidiscrete momentum prove a continuum particle limit.\n* **NA-23/24/25:** graph/renewal boundary rows are not ordinary rectangular Dirichlet rows. Diffusive L2 stability does not imply positivity; add actual maximum-principle conditions only when proved. Inflow renewal and junction routing go to XD-04/09.\n* **NA-26/27:** retain scalar BV entropy scope; it cannot supply multi-species positivity or aggregation/fragmentation moment conservation. The new methods receive independent proofs.\n* **NA-28–36:** interval-edge graph trace, renewal inflow trace and particle boundary correction are distinct from simplex H1 trace. Reuse exact established interfaces, supply missing geometry locally. No arbitrary SPH/RBF convergence via Céa unless a real coercive Galerkin structure is proved.\n* **NA-39/42:** identify randomness and coupling: particle loading, jump paths, resampling and empirical initial measures differ. Do not transfer independent-level variance proofs to correlated levels or claim N^−1/2 uniform transport error from a scalar MC CLT.\n* **NA-43/44/45:** require forward model/sensitivity discretization terms in parameter estimation/design. Identifiability of an exact statistical model does not certify a numerically thresholded Jacobian rank. Preserve approximation, sampling, solver, regularization and model error separately; finite projection/cutoff bias is explicit.\n"
  }
]


## NA-35 — Adaptive finite-element methods

A: `adaptive-finite-element-methods`. B: `adaptive-finite-element-methods-examples`.

### Scope

New residual estimator/oscillation, Dorfler marking/conforming refinement, reliability/efficiency/contraction/mesh closure and restricted optimal complexity.

### Proof construction

Use Galerkin orthogonality, local interpolation and trace bounds for reliability; bubble functions for local efficiency; prove estimator reduction, quasi-orthogonality and mesh closure before contraction. For nonsymmetric convection carry the source’s sufficiently fine initial-mesh requirement. Separate convergence from optimal work complexity.

### Examples

Dörfler marking and marked-element refinement; coefficient jump adding oscillation; coarse mesh where nonsymmetric quasi-orthogonality is unavailable.

### Prerequisite interfaces

- **Same-frontier pair `NA-28`** — A page `finite-element-meshes-and-interpolation` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-29`** — A page `ceas-lemma-and-aubin-nitsche-error-estimates` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-30`** — A page `variational-crimes-and-strang-lemmas` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Published item interface** in `lax-milgram-and-weak-elliptic-solutions`: `thm-lax-milgram`, `thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.

### Same-frontier proof closure and well-definedness

Define estimator/oscillation, deterministic Dörfler tie rule, finite refinement budget and status. Prove newest-vertex-bisection closure/shape/counting, reliability, efficiency, estimator reduction, quasi-orthogonality and contraction before restricted optimal complexity.

### Approved scope amendments

[
  {
    "origin": "research/numerical-analysis-48-2026-10-16-coverage-pde/proposal.md",
    "design": "\n\nThese additions preserve every already approved result. They supply prerequisites locally, without introducing unnecessary pair splits.\n\n- **NA28:** Keep affine mesh/interpolation claims. Add a typed finite oriented cell-complex incidence interface (`boundary boundary=0`), elementwise integration/trace definitions on affine simplices, and reference covariant/contravariant Piola transformations with exact gradient/curl/divergence transformation and normal/tangential moment identities. Prove by affine chain rule, determinant/cofactor identities and cell Green; boundary cancellation uses opposite orientations. Consumers PE08/PE09/PE10. Curved-map approximation remains PE17.\n- **NA33:** Preserve SIPG elliptic claims. Its B page may compare with PE04 hyperbolic DG, but no logical claim that elliptic penalty analysis proves nonlinear hyperbolic stability.\n- **NA34:** Retain the full existing divergence-lifting/Korn/mini-element binding design. Add an explicitly proved discrete Helmholtz orthogonal projection in the finite velocity mass inner product and pressure Schur-complement identity, including pressure nullspace/gauge. It follows from the already proved inf-sup and finite-dimensional orthogonal decomposition. Used by PE06/PE07; this does not establish bounded-domain Helmholtz regularity.\n- **NA35:** Retain reliability/efficiency/contraction/optimality claims and source restrictions. Its conforming refinement algorithm must actually provide the closure, shape-regularity and counting properties it consumes; name newest-vertex bisection initial-label compatibility and dimension. Do not infer 3D mesh complexity from a 2D proof. PE17 is geometric mesh generation/curvature, not a replacement for these obligations.\n- **NA36:** Retain full continuous evolution-triple construction. Add the Hilbert-valued discrete energy identity `2(a-b,a)=||a||²-||b||²+||a-b||²` and backward-Euler reconstruction/compactness interface when later used. Aubin–Lions is NOT implicitly supplied: PE12 owns its complete proof and PE06 may consume that supplier.\n- **NA38:** Keep the explicit exclusion of an unread second-order pressure-splitting proof. PE07 separately authors an actual first-order projection theorem and separately conditioned higher-order pressure correction.\n\n",
    "binding_subset": "NA-35"
  },
  {
    "origin": "research/numerical-analysis-48-2026-10-16-coverage-crossdomain/proposed-pairs.json",
    "binding_subset": "NA-35",
    "design": "\n## Required amendments to the original 46 designs\n\nThese are preservation/completion clauses, not permission to erase approved claims.\n\n* **NA-15/17/18:** distinguish absolute stability, positive invariance, conservation and certified adaptive global error. Crosslink XD-03 rather than imply stiff solvers protect nonnegative biological states. Event/history/stiffness extensions remain sibling ownership.\n* **NA-22:** particle/symplectic examples must state domain/collision restrictions and actual time-integrator invariants. A Hamiltonian interpretation is a mathematical stipulated model. Neither discrete energy drift plots nor conserved semidiscrete momentum prove a continuum particle limit.\n* **NA-23/24/25:** graph/renewal boundary rows are not ordinary rectangular Dirichlet rows. Diffusive L2 stability does not imply positivity; add actual maximum-principle conditions only when proved. Inflow renewal and junction routing go to XD-04/09.\n* **NA-26/27:** retain scalar BV entropy scope; it cannot supply multi-species positivity or aggregation/fragmentation moment conservation. The new methods receive independent proofs.\n* **NA-28–36:** interval-edge graph trace, renewal inflow trace and particle boundary correction are distinct from simplex H1 trace. Reuse exact established interfaces, supply missing geometry locally. No arbitrary SPH/RBF convergence via Céa unless a real coercive Galerkin structure is proved.\n* **NA-39/42:** identify randomness and coupling: particle loading, jump paths, resampling and empirical initial measures differ. Do not transfer independent-level variance proofs to correlated levels or claim N^−1/2 uniform transport error from a scalar MC CLT.\n* **NA-43/44/45:** require forward model/sensitivity discretization terms in parameter estimation/design. Identifiability of an exact statistical model does not certify a numerically thresholded Jacobian rank. Preserve approximation, sampling, solver, regularization and model error separately; finite projection/cutoff bias is explicit.\n"
  }
]


## PC-SCAT — Volume integral scattering and partial wave error

A: `volume-integral-scattering-and-partial-wave-error`. B: `volume-integral-scattering-and-partial-wave-error-examples`.

### Scope

genuinely-new volume scattering computation

A: `volume-integral-scattering-and-partial-wave-error`.

For bounded D in R³ and supplied bounded compactly supported q, define K_k u(x)=integral_D exp(ik|x-y|)/(4pi|x-y|) q(y)u(y)dy on a declared L² or continuous space, k real fixed. Prove boundedness and compactness by truncating the singularity, estimating the discarded small-ball kernel by Schur bounds, and compact approximation of the remaining continuous kernel. For ||K_k||<1 prove Born/Neumann truncation error <=||K_k||^(m+1)||f||/(1-||K_k||). Otherwise existence/stability requires injectivity plus Fredholm (or PDE-owner actual scattering uniqueness under stated q/sign/radiation assumptions). Discretize using PC-NYST-compatible singular product/volume quadrature and prove far-field functional error from the solution estimate and quadrature error. For radial inputs derive the partial-wave radial BVP by explicit spherical harmonic expansion, regular-origin boundary conditions, outer matching and angular-mode truncation bound under a stated coefficient/analyticity regime. Resonance detection uses isolated complex-pole/operator analytic-Fredholm proofs only if fully supplied; a determinant nearly zero is diagnostic, not a theorem.

PC-SCAT owns kernel compactness, volume/far-field maps, radial transform/error; PC-NYST owns discretization spectral clusters; PDE owner owns outgoing uniqueness when actually consumed; linear owner singular quadrature/special transforms; PC-SFUN supplies scaled spherical Bessel evaluations. B: small-norm scatterer Born error; near-resonant amplification; radial square-well comparison with exact matching; forward angular truncation failure at high k unless resolution grows. Sources: Colton–Kress Inverse Acoustic and Electromagnetic Scattering Theory https://doi.org/10.1007/978-3-030-30351-8 ; Kress Linear Integral Equations https://doi.org/10.1007/978-1-4614-9593-2 . Reading pending. No unconditional physical scattering model claim.

### Proof construction

[
  "For bounded D in R³ and supplied bounded compactly supported q, define K_k u(x)=integral_D exp(ik|x-y|)/(4pi|x-y|) q(y)u(y)dy on a declared L² or continuous space, k real fixed. Prove boundedness and compactness by truncating the singularity, estimating the discarded small-ball kernel by Schur bounds, and compact approximation of the remaining continuous kernel. For ||K_k||<1 prove Born/Neumann truncation error <=||K_k||^(m+1)||f||/(1-||K_k||). Otherwise existence/stability requires injectivity plus Fredholm (or PDE-owner actual scattering uniqueness under stated q/sign/radiation assumptions). Discretize using PC-NYST-compatible singular product/volume quadrature and prove far-field functional error from the solution estimate and quadrature error. For radial inputs derive the partial-wave radial BVP by explicit spherical harmonic expansion, regular-origin boundary conditions, outer matching and angular-mode truncation bound under a stated coefficient/analyticity regime. Resonance detection uses isolated complex-pole/operator analytic-Fredholm proofs only if fully supplied; a determinant nearly zero is diagnostic, not a theorem."
]

### Examples

small-norm scatterer Born error; near-resonant amplification; radial square-well comparison with exact matching; forward angular truncation failure at high k unless resolution grows.

### Prerequisite interfaces

- **Same-frontier pair `PC-NYST`** — A page `nystrom-product-integration-and-fredholm-error` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `PC-SFUN`** — A page `stable-special-function-recurrences-and-certified-evaluation` in the `linear` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Published item interface** in `weak-mixing-and-the-chacon-transformation`: `lem-square-integrable-kernels-define-bounded-compact-integral-operators`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.
- **Published item interface** in `compact-operators-and-riesz-schauder-theory`: `thm-fredholm-alternative-for-identity-minus-compact`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.

### Same-frontier proof closure and well-definedness

Prove finite-measure rescaling of the probability-space Hilbert–Schmidt item: for 0<M=|D|<infinity, dnu=dx/M and ktilde=M G_k q give the same operator; L2 norms scale by sqrt(M), restoring the arbitrary-finite-measure HS bound. M=0 is trivial; distinct finite source/target measures use both scale factors. Prove 1/r in L2(DxD) in 3D. Carry AC from the kernel/Fredholm items.


## PE15 — SUPG, residual stabilization and variational multiscale methods

A: `supg-and-residual-based-stabilized-finite-elements`. B: `supg-and-residual-based-stabilized-finite-elements-examples`.

### Scope

Select the stationary one-dimensional problem \(-\epsilon u''+b u'=f\) on \((0,1)\), homogeneous Dirichlet data, constants \(\epsilon>0\), \(b\ne0\), and uniform P1 mesh spacing \(h\). For continuous piecewise-linear trial and test functions define
\[
a_h(w,v)=\epsilon(w',v')+(bw',v)+\sum_K\tau_K(bw',bv')_K,\quad L_h(v)=(f,v)+\sum_K\tau_K(f,bv')_K,
\quad Pe=|b|h/(2\epsilon),\quad \tau_K={h\over2|b|}(\coth Pe-1/Pe).
\]
This is the standard residual SUPG form: its element strong residual is \(-\epsilon w''+bw'\), and \(w''=0\) inside each P1 cell. Prove consistency, \(\tau_K>0\), coercivity in \(\epsilon\|v'\|_2^2+\sum_K\tau_Kb^2\|v'\|_{L^2(K)}^2\), and the mesh-dependent error bound. General multidimensional \(\tau_K\), equal-order PSPG, grad-div and VMS remain separate branches; define their algebraic terms, but claim stability only after their own pressure projection/inf-sup or unresolved-inverse bounds.

### Proof construction

Integrate transport by parts with inflow boundary sign; absorb element Laplacian cross terms by NA28 inverse estimate and tau restriction. Bound consistency using the actual residual and interpolate in the stabilized norm. For equal-order pressure control prove the pressure-gradient/local projection lemma and mixed stability; grad-div supplies an additional divergence penalty but does not by itself repair pressure inf-sup. VMS Schur complement follows block elimination; approximation of unresolved inverse has its own defect bound.

### Examples

convection boundary layer, overlarge stabilization, equal-order pressure oscillation, grad-div pressure sensitivity.

### Prerequisite interfaces

- **Same-frontier pair `NA-28`** — A page `finite-element-meshes-and-interpolation` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-29`** — A page `ceas-lemma-and-aubin-nitsche-error-estimates` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-30`** — A page `variational-crimes-and-strang-lemmas` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-34`** — A page `mixed-finite-elements-and-stokes-stability` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `PE06`** — A page `energy-stable-incompressible-navier-stokes-discretization` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.

### Same-frontier proof closure and well-definedness

Use the displayed uniform 1D P1 problem, residual, SUPG perturbation and \(\tau_K\) formula; prove \(\coth(Pe)-1/Pe>0\) for \(Pe>0\), consistency, and \((bw',w)=0\) under the two homogeneous endpoint conditions, which gives the stated coercivity. Derive the error bound with the exact NA28 P1 interpolation estimate. Equal-order PSPG/grad-div and VMS are not bundled into that proof: each remains held until its pressure-gradient projection and discrete inf-sup or Schur-closure defect is explicitly bounded.


## PE16 — Boundary-integral equations and Galerkin BEM

A: `boundary-integral-equations-and-galerkin-bem`. B: `boundary-integral-equations-and-galerkin-bem-examples`.

### Scope

Define single/double-layer potentials, boundary traces/jumps, Calderon operators and Galerkin BEM for 3D Laplace on a closed orientable Lipschitz polyhedral boundary. Prove bounded mappings in H±1/2 trace spaces, correct signed jump identities and ellipticity modulo stated constants/kernel; prove unique stabilized formulation and quasi-optimal error under a shape-regular surface family. Treat 2D logarithmic capacity/scaling separately. Helmholtz combined-field extension consumes PE18 uniqueness and carries frequency-dependent inverse bounds. Quadrature and FMM acceleration have separately controlled matrix perturbation error; they are not free exact BEM.

### Proof construction

Build Lipschitz trace/lift and dual normal trace, weak layer potentials by variational transmission, then prove singular-kernel representation agrees and derive jumps by transmission/Green. Positivity of single layer from whole-space energy; quotient/gauge removal, Lax–Milgram and NA29 Galerkin. Surface interpolation in fractional norms via a proved local norm/scaling estimate. For Helmholtz use compact perturbation and a locally proved Fredholm alternative plus uniqueness. Kernel principal-value and jump signs are computed, not memorized.

### Examples

sphere constant density, jump sign orientation, polyhedral singularity, inexact assembly ledger.

### Prerequisite interfaces

- **Same-frontier pair `NA-28`** — A page `finite-element-meshes-and-interpolation` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-29`** — A page `ceas-lemma-and-aubin-nitsche-error-estimates` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-30`** — A page `variational-crimes-and-strang-lemmas` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `QUAD-SING`** — A page `singular-and-infinite-interval-quadrature` in the `linear` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `LIN-FMM`** — A page `fast-multipole-expansions-and-error` in the `linear` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Published item interface** in `lax-milgram-and-weak-elliptic-solutions`: `thm-lax-milgram`, `thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.

### Same-frontier proof closure and well-definedness

Define layer kernels, orientation, trace spaces and jump signs on a closed Lipschitz polyhedron. Prove local fractional trace/lifting, transmission Green identity, layer jumps/ellipticity and Galerkin stability; the published C1 trace item cannot be widened. Helmholtz solvability waits for PE18 uniqueness.


## PE20 — Variational inequalities and spatial contact discretization

A: `variational-inequality-and-contact-finite-elements`. B: `variational-inequality-and-contact-finite-elements-examples`.

### Scope

For the selected obstacle/contact branch take a bounded polygon \(\Omega\subset\mathbb R^2\) with a straight contact segment \(\Gamma_C\) of fixed unit normal \(n\), and a disjoint Dirichlet segment \(\Gamma_D\) of positive length. Use \(V=\{v\in H^1(\Omega)^2:v=0\text{ on }\Gamma_D\}\), coercive elasticity form \(a(u,v)=\int_\Omega 2\mu\,\varepsilon(u):\varepsilon(v)+\lambda\,\operatorname{div}u\operatorname{div}v\) with \(\mu>0,\lambda\ge0\), and continuous obstacle \(\psi\le0\). The Signorini set is \(K=\{v\in V:v\cdot n\ge\psi\text{ a.e. on }\Gamma_C\}\). Carry AC for its imported obstacle definition and CC for Stampacchia/stability. On a boundary-conforming shape-regular triangular mesh use continuous P1 vector fields and impose the discrete gap at every contact vertex: \(K_h=\{v_h:v_h(a)\cdot n\ge I_h\psi(a),\ a\in\Gamma_C\}\). Prove nonempty closed convexity, Korn coercivity, the finite variational inequality's unique solution and a Falk-type bound with explicit feasible-set approximation defect; state the obstacle regularity needed for nodal convergence. A separate mortar multiplier pair is not selected: retain multiplier-space inf-sup/complementarity and active-set solver claims on hold until a concrete pair and its discrete inf-sup are proved. Coulomb/friction and semismooth Newton claims are not consequences of this convex VI branch.

### Proof construction

Consume the existing projection/Stampacchia suppliers rather than reprove them. Test continuous/discrete inequalities against admissible comparisons, add and bound obstacle mismatch. The selected nodal obstacle VI needs no multiplier pair. For the separate mortar extension, prove trace continuity, cone duality and the actual multiplier inf-sup after selecting its spaces; active-set/semismooth Newton is not part of the selected branch and would need nondegeneracy/generalized-Jacobian conditions.

### Examples

1D obstacle/free boundary, nonfeasible interpolation, contact patch test, changing active set.

### Prerequisite interfaces

- **Same-frontier pair `NA-28`** — A page `finite-element-meshes-and-interpolation` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-29`** — A page `ceas-lemma-and-aubin-nitsche-error-estimates` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-30`** — A page `variational-crimes-and-strang-lemmas` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-34`** — A page `mixed-finite-elements-and-stokes-stability` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `PE19`** — A page `elasticity-near-incompressibility-and-locking-free-discretization` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Published item interface** in `constrained-variational-problems-and-variational-inequalities`: `def-closed-convex-obstacle-set-and-variational-inequality`, `thm-stampacchia-variational-inequality`, `thm-lipschitz-stability-of-strongly-monotone-variational-inequalities`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.

### Same-frontier proof closure and well-definedness

Carry AC for the imported closed-convex obstacle definition and CC for Stampacchia/stability. For the 2D straight-segment Signorini problem, zero is feasible by \(\psi\le0\); prove the nodal set \(K_h\) closed/convex/nonempty, Korn/coercivity on the space with trace zero on \(\Gamma_D\), and unique VI solvability. Construct an admissible interpolant or comparison map and prove the Falk defect estimate with its obstacle-approximation term. The mortar-contact pair is a precise hold, not an assumed supplier: the plan contains no verified multiplier space/inf-sup. No frictional branch follows automatically.


## PE24 — Compressible viscous flow and entropy-stable viscous fluxes

A: `compressible-viscous-flow-and-entropy-stable-fluxes`. B: `compressible-viscous-flow-and-entropy-stable-fluxes-examples`.

### Scope

For dimension \(d\ge1\), gas constant \(R>0\), and \(\gamma>1\), set \(c_v=R/(\gamma-1)\), \(U=(\rho,m,E)\), \(u=m/\rho\), \(p=(\gamma-1)(E-|m|^2/(2\rho))\), \(T=p/(R\rho)\), and the open convex admissible set \(\mathcal G=\{\rho>0,\ E>|m|^2/(2\rho)\}\). Use ideal-gas specific entropy \(s=c_v\log(p/\rho^\gamma)+s_0\), mathematical entropy \(\eta(U)=-\rho s\), entropy variables \(v=\nabla_U\eta\), Euler flux \(F_j(U)=(\rho u_j,\,m u_j+p e_j,\,(E+p)u_j)\), entropy flux \(q_j=\eta u_j\), and directional potential \(\psi_j=v^TF_j-q_j\). Prove strict convexity of \(\eta\), entropy-pair compatibility, and local invertibility of \(U\mapsto v\) on compact subsets of \(\mathcal G\).

Select periodic diagonal-norm SBP grids with \(H\succ0\) diagonal, \(D_j\mathbf1=0\), and \(HD_j+D_j^TH=0\). For admissible nodal states define \(\Delta v=v(U_b)-v(U_a)\), \(\bar U=(U_a+U_b)/2\in\mathcal G\), and the symmetric two-point flux
\[
F^{ec}_j(U_a,U_b)=\begin{cases}F_j(\bar U)+\dfrac{\psi_j(U_b)-\psi_j(U_a)-\Delta v^TF_j(\bar U)}{\|\Delta v\|^2}\,\Delta v,&\Delta v\ne0,\\F_j(U_a),&\Delta v=0.\end{cases}
\]
Prove consistency and \(\Delta v^TF^{ec}_j=\psi_j(U_b)-\psi_j(U_a)\). Write Newtonian/Fourier viscous fluxes with shear viscosity \(\mu>0\), bulk viscosity \(\zeta\ge0\), and heat conductivity \(\kappa>0\) as \(F^{visc}_j=\sum_kK_{jk}(U)\partial_kv\); derive the symmetric positive-semidefinite block factorization of \(K\) from \(\tau:\nabla u/T+\kappa|\nabla T|^2/T^2\ge0\). The selected semidiscrete SBP scheme is
\[
\dot U_i+2\sum_jD_jF^{ec}_j(U_i,U_{\cdot})=\sum_{j,k}D_j\bigl(K_{jk}(U)D_kv\bigr)_i.
\]
Prove conservation and the periodic semidiscrete entropy balance. This branch uses PE04's paired SBP identities; the ideal-gas flux/eigenvalue bound may use PE01 only on the optional comparison branch below.

For a PE13 orthogonal uniform finite-volume viscous alternative, define \(G_{i+1/2}=K_{i+1/2}(v_{i+1}-v_i)/h\) with symmetric positive-semidefinite \(K_{i+1/2}\), and cell diffusion \((G_{i+1/2}-G_{i-1/2})/h\); prove entropy production \(-\sum_i(v_{i+1}-v_i)^TK_{i+1/2}(v_{i+1}-v_i)/h\le0\). For comparison only, PE01's Euler eigenvalue bound gives the local Rusanov flux
\[
F^{Rus}_j(U_L,U_R)=\tfrac12(F_j(U_L)+F_j(U_R))-\tfrac12\alpha_{LR}(U_R-U_L),\quad \alpha_{LR}=\max_{s=L,R}(|u_{s,j}|+\sqrt{\gamma p_s/\rho_s});
\]
no entropy theorem is claimed for that branch without its own entropy inequality. If a fully discrete limiter branch is selected, use PE03's maximal convex scaling: for fixed \(\delta>0\), define the closed convex set \(\mathcal G_\delta=\{\rho\ge\delta,\ E-|m|^2/(2\rho)\ge\delta\}\), compute each positive-quadrature cell mean \(\bar U_K\), abort if \(\bar U_K\notin\mathcal G_\delta\), and choose the largest \(\theta_K\in[0,1]\) such that every \(\bar U_K+\theta_K(U_{K,q}^*-\bar U_K)\in\mathcal G_\delta\). Prove the forward-Euler step preserves these means before claiming positivity.

The finite forward-Euler loop inputs the SBP matrices, coefficient data, \(U^0\in\mathcal K\Subset\mathcal G\), \(\Delta t>0\), and step budget \(N\); it computes \(U^{n+1,*}=U^n+\Delta t L_h(U^n)\), accepts only if all nodal states remain in \(\mathcal K\), and otherwise returns the last admissible state with `left_positive_tube` and stage index. On a fixed mesh its error against the semidiscrete ODE is first order under the compact-tube Lipschitz assumptions, with a mesh-dependent constant. Fully discrete entropy, positivity, and mesh-uniform smooth-flow error are separate theorems; semidiscrete entropy implies none of them. No arbitrary-shock or global 3D continuum convergence claim.

### Proof construction

Differentiate the displayed ideal-gas \(\eta\), compute its positive-definite Hessian on \(\mathcal G\), and verify the entropy-pair compatibility identity \(\nabla_v\psi_j=F_j(U(v))\) on the image of the entropy map. Convexity of \(\mathcal G\) makes \(\bar U\) admissible. The pair formula is symmetric under exchanging its states; dotting with \(\Delta v\) gives the potential jump exactly, while Taylor expansion about equal states makes its correction tend to zero and proves consistency. For each spatial direction sum the SBP flux-differencing expression against \(v^TH\); skew-symmetry of \(HD_j\), pair-flux symmetry, \(D_j\mathbf1=0\), and the Tadmor identity cancel the periodic inviscid contribution. For viscosity, derive the entropy-variable factorization of \(K\) from the constitutive stress/heat flux; summation by parts gives \(-\sum_{j,k}(D_jv)^THK_{jk}D_kv\le0\). The same row-sum identity gives zero net viscous mass, momentum, and energy flux.

On a compact tube \(\mathcal K\Subset\mathcal G\), the semidiscrete right-hand side is locally Lipschitz and bounded. The finite loop takes \((U^0,\Delta t,N)\), computes \(U^{n+1,*}=U^n+\Delta t L_h(U^n)\), accepts only if every component state remains in \(\mathcal K\), and otherwise returns the last admissible vector with `left_positive_tube` and the stage index. On an interval where the exact semidiscrete ODE solution remains in the interior of \(\mathcal K\), a standard local-truncation plus discrete-Gronwall estimate gives \(\max_{n\Delta t\le T}\|U^n-U_h(n\Delta t)\|\le C_{h,T}\Delta t\); the constant may depend on \(h\). A fully discrete entropy/positivity result needs the forward-Euler entropy inequality and invariant-domain timestep proved for the selected flux; do not import a time-integrator guarantee because PE24 has no T04 edge in its pair requirements. A continuum error estimate also needs mesh-uniform coercivity/linearized stability and the corresponding approximation theorem.

### Examples

periodic viscous manufactured solution, Couette/thermal wall balance, inviscid-versus-viscous entropy budget, near-vacuum failure.

### Prerequisite interfaces

- **Same-frontier pair `NA-28`** — A page `finite-element-meshes-and-interpolation` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-30`** — A page `variational-crimes-and-strang-lemmas` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `PE01`** — A page `riemann-solvers-for-hyperbolic-systems` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `PE03`** — A page `invariant-domain-and-entropy-stable-conservative-schemes` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `PE04`** — A page `hyperbolic-dg-and-summation-by-parts-discretizations` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `PE13`** — A page `finite-volume-diffusion-and-mimetic-fluxes` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.

### Same-frontier proof closure and well-definedness

Use the exact ideal-gas state/entropy and periodic SBP scheme stated above. PE01 supplies only its literal Euler flux/eigenvalue or Riemann-wave bounds when the optional boundary/upwind branch is used; the base pair flux is defined locally. PE03 supplies the convex invariant set and its convex-scaling limiter only if the separately proved fully discrete positivity branch is selected; no semidiscrete-to-fully-discrete positivity transfer is imported. PE04 supplies the paired SBP/flux-differencing identity under its exact periodic quadrature/metric hypotheses. PE13 is the alternative orthogonal finite-volume viscous-flux branch only when its transmissibility/mesh assumptions hold; the selected SBP proof instead derives its own entropy-variable \(K\) factorization. NA28/NA30 govern approximation/geometry or quadrature perturbations only after their conformity, coercivity and defect bounds are checked. Prove the entropy-variable map and viscous \(K\) factorization locally on each compact positive-state tube; no C1-domain trace theorem is needed for this periodic grid. Preserve the holds precisely: forward-Euler positivity/entropy require a proved timestep inequality, and a continuum rate needs mesh-uniform stability plus approximation/consistency. These are theorem obligations, not undefined scheme inputs.


## PE30 — First-order least-squares FEM and practical DPG

A: `least-squares-fem-and-practical-dpg`. B: `least-squares-fem-and-practical-dpg-examples`.

### Scope

Let \(\Omega\) be a bounded connected Lipschitz domain and solve \(-\Delta u=f\), \(u|_{\partial\Omega}=0\), for \(f\in L^2(\Omega)\). Define \(\sigma=\nabla u\), so \(\sigma-\nabla u=0\) and \(\operatorname{div}\sigma=-f\). On a shape-regular, boundary-conforming triangular mesh define \(RT_0(K)=P_0(K)^2+xP_0(K)\) with single-valued normal traces, and choose the conforming trial family \(X_h=RT_0(\mathcal T_h)\times(P_1(\mathcal T_h)\cap H^1_0(\Omega))\) and minimize
\[
J_h(\sigma_h,u_h)=\|\sigma_h-\nabla u_h\|_{L^2}^2+\|\operatorname{div}\sigma_h+f\|_{L^2}^2.
\]
Prove residual/error norm equivalence, unique minimizer and best approximation in this residual norm. Boundary data are imposed by \(H^1_0\), not dropped.

Also define the ideal ultraweak Poisson DPG problem on a shape-regular simplicial mesh. Let \(\hat u\) be a single-valued compatible trace on interior facets and zero on boundary facets, with quotient norm equal to the infimum of the summed element \(H^1\)-norms of its broken extensions. Let \(\hat\sigma_n\) be an oriented, conservative normal trace on facets, with quotient norm equal to the infimum of the summed element \(H(\operatorname{div})\)-norms of its broken extensions. The trial space is \(L^2(\Omega)^d\times L^2(\Omega)\times\hat U(\mathcal S)\times\hat Q_n(\mathcal S)\), and broken tests are \(H(\operatorname{div},\mathcal T_h)\times H^1(\mathcal T_h)\); the bilinear form is
\[
b((\sigma,u,\hat u,\hat\sigma_n);(\tau,v))=(\sigma,\tau)+(u,\operatorname{div}_h\tau)-\langle\hat u,\tau\cdot n\rangle_{\mathcal S}+(\sigma,\nabla_hv)-\langle\hat\sigma_n,v\rangle_{\mathcal S};
\]
right side \((f,v)\), and the test graph norm \(\|\tau\|^2+\|\operatorname{div}_h\tau\|^2+\|v\|^2+\|\nabla_hv\|^2\). Define the ideal trial-to-test map by its Riesz equation and prove ideal energy best approximation. For a concrete *candidate* practical branch, in dimension two take \(\sigma_h|_K,u_h|_K\in P_1(K)^2\times P_1(K)\), single-valued \(\hat u_h|_F\in P_2(F)\) with zero boundary trace, conservative \(\hat\sigma_{n,h}|_F\in P_1(F)\), and broken test space \(\prod_{K\in\mathcal T_h}(P^3(K)^2\times P^3(K))\); define each discrete optimal test by a finite Riesz solve. Practical quasi-optimality is claimed only if the item proves an element-uniform Fortin map for this exact family. If that Fortin construction fails, the practical-DPG theorem remains held while the LS and ideal-DPG branches stay defined. Numerical residuals, quadrature and algebraic solve errors are separate perturbations.

### Proof construction

For LS, let \((\delta\sigma,\delta u)\in H(\operatorname{div})\times H^1_0\), \(r_1=\delta\sigma-\nabla\delta u\), and \(r_2=\operatorname{div}\delta\sigma\). Integration by parts gives
\[
\|\nabla\delta u\|_2^2=-(r_2,\delta u)-(r_1,\nabla\delta u),
\]
so Poincaré bounds \(\|\delta u\|_{H^1}+\|\delta\sigma\|_{H(div)}\) by \(C(\|r_1\|_2+\|r_2\|_2)\); the reverse bound is immediate from the triangle inequality. Thus the residual is a norm on the error space and the finite-dimensional least-squares objective is strictly convex, coercive and has a unique minimizer. Orthogonal projection in that residual inner product gives its best-approximation property.

For ideal DPG, the two skeleton quotient norms are defined by the displayed minimum-extension infima; prove they are finite Hilbert quotient norms, the integration-by-parts form is bounded, and its nullspace is trivial by weak Poisson uniqueness. Establish the actual primal and adjoint graph inf-sup bounds before invoking the planned NA34 BNB theorem; a trivial kernel alone is not an inf-sup proof. On triangles use PE08's exact RT0 normal-moment/Piola contract, and use PE09's oriented cochain/tangential-trace interface only through the 2D rotation \(R(a,b)=(-b,a)\), for which \(\operatorname{curl}(R\sigma)=\operatorname{div}\sigma\) and \((R\sigma)\cdot t=\sigma\cdot n\) under the chosen orientation. Do not import any wider H(curl) trace or topology claim. The induced energy norm is \(\|w\|_E=\sup_{v\ne0}|b(w,v)|/\|v\|_V\); Riesz representation (carry CC for the imported Riesz item) gives the unique optimal test \(Tw\), and Galerkin orthogonality in this norm yields ideal best approximation. The p=1,r=3 candidate is the d=2 instance of the degree pattern \(u_h,\sigma_h\in P_p(K)\), \(\hat u_h|_F\in P_{p+1}(F)\), \(\hat\sigma_{n,h}|_F\in P_p(F)\), broken vector tests \(P_{p+2}(K)^d\), and scalar tests \(P_r(K)\) with \(r\ge p+d\). For the practical candidate, specify the local moment equations required of a Fortin projection \(\Pi_h\): \(b(w_h,v-\Pi_hv)=0\) for every trial basis function and \(\|\Pi_hv\|_V\le C_F\|v\|_V\) with \(C_F\) independent of element size. Prove solvability, face trace compatibility and scaled norm bounds for the stated \(p=1,r=3\) family before transferring inf-sup; until then assert no practical quasi-optimality or estimator equivalence. The exact finite DPG routine returns a singular-test-matrix status if its computed Gram system is not positive definite. Normal equations square the spectral condition number under the exact imported matrix theorem, so a stable solver claim needs its own perturbation bound.

### Examples

residual certificate for Poisson, omitted boundary residual nonuniqueness, too-small test space, ideal/practical test comparison.

### Prerequisite interfaces

- **Same-frontier pair `NA-02`** — A page `finite-precision-direct-factorizations` in the `linear` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-28`** — A page `finite-element-meshes-and-interpolation` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-29`** — A page `ceas-lemma-and-aubin-nitsche-error-estimates` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-30`** — A page `variational-crimes-and-strang-lemmas` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-34`** — A page `mixed-finite-elements-and-stokes-stability` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `PE08`** — A page `mixed-hdiv-fluxes-and-darcy-discretization` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `PE09`** — A page `discrete-de-rham-complexes-and-edge-elements` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Published item interface** in `hilbert-space-geometry-and-riesz-representation`: `thm-riesz-representation-for-hilbert-space`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.
- **Published item interface** in `matrix-norms-condition-numbers-and-numerical-stability`: `def-induced-matrix-p-norm`, `thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized`, `thm-normal-equations-square-the-spectral-condition-number`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.

### Same-frontier proof closure and well-definedness

The selected LS inputs are \((\mathcal T_h,f)\); output is the unique residual minimizer in \(RT_0\times P_1\cap H^1_0\), proved well-defined by the displayed residual norm equivalence. Define the DPG skeleton quotient norms by broken extensions and verify the stated integration-by-parts signs; ideal tests are unique Riesz solves. The practical \(p=1,r=3\) matrix algorithm is fully specified, but its Fortin inequality is a necessary theorem rather than an assumed supplier: keep only practical quasi-optimality and estimator claims held until the local moment/bubble construction and uniform bound are proved. For simplicial traces prove normal/Dirichlet trace facts locally; the canonical sharp trace item only covers bounded C1 domains.


## XD-07 — Particle in cell and particle mesh kinetic methods

A: `particle-in-cell-and-particle-mesh-kinetic-methods`. B: `particle-in-cell-and-particle-mesh-kinetic-methods-examples`.

### Scope

**Exact scope.** Periodic finite electrostatic particle/mesh system with specified nonnegative deposition shape, neutralizing background, discrete Poisson solve, gather operator and leapfrog/Verlet time staggering. Reuse the actual Poisson solver; static Ewald/particle-mesh Coulomb expansion belongs to physics/chemistry audit. Prove charge deposition sums to total particle charge, zero-mode compatibility and gauge normalization. Prove the chosen deposition/gather adjoint identity under declared grid inner product; momentum or energy conservation is **scheme specific** and must be established separately. A plain staggered PIC scheme must not inherit exact energy conservation merely from adjoint gathering. Give residual-to-force error with the actual inverse/derivative norm, including mesh-dependence.

Convergence theorem is staged: (a) time stepping error for the finite smooth particle-grid ODE, (b) force interpolation/deposition/grid-Poisson error for a fixed regularization ε and smooth compatible density, (c) particle-measure/mean-field error through XD-08, and (d) regularization-to-unregularized Vlasov–Poisson error only if separately proved on a smooth finite-time solution class. List ε-, mesh-, particle- and time-dependent constants explicitly; an ε-fixed convergence theorem is not convergence to singular Coulomb dynamics. State grid crossing/aliasing and stochastic loading effects independently.

### Proof construction

**Local suppliers.** Shape partition-of-unity and grid duality; periodic discrete Poincaré/Poisson zero-mode invertibility; residual-to-field estimate; regularized grid-force Lipschitz constant; consistency of deposition plus gather; characteristic weak formulation for regularized Vlasov; empirical measure initial error (deterministic bound or sampling theorem with dimension/rate). XD-08 supplies the stability argument, not an assumption that every empirical approximation has N^−1/2 Wasserstein error.

### Examples

**B examples.** One-dimensional periodic neutralized charge deposition; manufactured smooth density with grid error; cold two-stream model as stipulated experiment with no claimed physical validation; failure of neutrality; leapfrog energy drift versus exact semidiscrete invariant.

### Prerequisite interfaces

- **Same-frontier pair `XD-08`** — A page `interacting-particle-mean-field-and-vortex-blob-error` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-03`** — A page `sparse-matrix-models-and-kernel-costs` in the `linear` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-15`** — A page `runge-kutta-methods-and-order` in the `dynamics` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-22`** — A page `geometric-numerical-integration` in the `dynamics` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-23`** — A page `elliptic-finite-difference-methods` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-38`** — A page `spectral-collocation-and-galerkin-methods` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.

### Same-frontier proof closure and well-definedness

Define periodic shape/deposition, neutralizing background, zero-mean Poisson gauge, gather and leapfrog rows; prove partition of unity, deposition/gather adjointness, residual-to-force norm and regularized-force Lipschitz bound. For the fixed-grid particle ODE select NA-15 classical RK4 only for the finite-time order-four error branch and prove its one-step stability/tube hypotheses; the leapfrog branch instead uses NA-22's precise reversibility/symplecticity/volume interface on the verified separable Hamiltonian grid-force split. Do not infer exact energy conservation from staggered leapfrog, symplecticity, or adjoint gathering; modified energy has only the analytic near-identity scope in NA-22. Separate fixed-\(\varepsilon\) grid/time/particle errors from any singular Vlasov limit.


## PE14 — Reaction-diffusion systems, invariants and pattern computation

A: `reaction-diffusion-invariants-and-pattern-discretization`. B: `reaction-diffusion-invariants-and-pattern-discretization-examples`.

### Scope

Define semilinear vector reaction-diffusion on bounded/periodic domains, quasi-positive reaction, mass conservation/dissipation and invariant rectangles. Prove positivity/invariant-set preservation for a stated mass-lumped FEM or monotone FV diffusion plus a positive reaction step and actual dt bound; prove mass balance. For smooth bounded solutions prove a finite-time error estimate with reaction Lipschitz constants on a common invariant tube. Linearize about a homogeneous equilibrium and derive continuous versus discrete dispersion relations/Turing criterion using the actual discrete Laplacian spectrum. This is linear instability, not existence of nonlinear stable patterns. Crossdiffusion convergence needs a separately stated entropy/coercivity structure, not componentwise maximum principle.

### Proof construction

M-matrix inverse or convex explicit update, quasi-positive reaction boundary signs, discrete comparison; sum stoichiometric conservation vectors. Error recurrence uses NA36 spatial estimate and time-agent splitting/IMEX with meshuniform operator stability proved for this branch. Fourier/eigenmode diagonalization gives dispersion matrix J-lambda D and its trace/determinant criterion in two species.

### Examples

Fisher–KPP, activator/inhibitor two-species, finite-grid Turing shift, positivity failure of consistent mass FEM.

### Prerequisite interfaces

- **Same-frontier pair `NA-24`** — A page `parabolic-finite-difference-methods` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-36`** — A page `parabolic-finite-element-methods` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `PE12`** — A page `nonlinear-parabolic-compactness-and-monotone-evolution` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `PE13`** — A page `finite-volume-diffusion-and-mimetic-fluxes` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `T04`** — A page `imex-and-operator-splitting-methods` in the `dynamics` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.

### Same-frontier proof closure and well-definedness

Define the invariant rectangle, mass-lumped/FV diffusion generator, reaction vector field, stoichiometric balance and exact finite-grid reaction/diffusion flows. Prove nonnegative diffusion weights (or M-matrix inverse positivity) and quasi-positive reaction-flow invariance on the rectangle. Use Lie composition of these two maps as the selected first-order time algorithm; prove mass balance and the componentwise invariant bound locally. T04 supplies Lie order one only when both subflows are well defined on a common invariant domain and the required commutator regularity is proved; it supplies neither positivity nor a PDE mesh-uniform error bound. For smooth data derive the finite-grid splitting error from the stated commutator, then add the NA36 spatial error under its own hypotheses. The dispersion calculation proves linear instability only.


## PE17 — Curved geometry, mesh generation and conservative transfer

A: `curved-mesh-geometry-and-conservative-mesh-transfer`. B: `curved-mesh-geometry-and-conservative-mesh-transfer-examples`.

### Scope

Define isoparametric cell maps, positive Jacobian/admissibility certificate, shape regularity with bounded map/inverse derivatives, surface metric and geometry approximation. Prove interpolation/scaling and Strang geometry-defect bounds on a stated curved-domain family. Define a concrete 2D mesh-generation/refinement procedure consuming robust predicates and Delaunay primitives; prove only stated angle/termination guarantees with boundary-angle and feature-size hypotheses. Define L2 projection and conservative intersection-volume remapping; prove cell mass conservation, positivity for nonnegative overlap weights, and error from a stated approximation/geometry bound. 3D slivers require independent quality conditions; 2D Delaunay angle facts do not remove them.

### Proof construction

Pull back gradients/forms, estimate Jacobian/cofactor/normal differences and boundary lifting residual. For refinement use packing/feature-size argument with explicit termination preconditions; preserve NA35's distinct refinement complexity contract. Transfer uses exact partition-of-unity intersection measures; numerical clipping consumes certified predicates and returns unresolved if degeneracy cannot be certified. Curved DG metric identities need a proved discrete geometric conservation identity before PE04 extension.

### Examples

curved disk, inverted map detection, 3D sliver, moving-grid mass transfer.

### Prerequisite interfaces

- **Same-frontier pair `NA-28`** — A page `finite-element-meshes-and-interpolation` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-30`** — A page `variational-crimes-and-strang-lemmas` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-35`** — A page `adaptive-finite-element-methods` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `GEO-PRED`** — A page `certified-geometric-predicates` in the `linear` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `GEO-DEL`** — A page `delaunay-triangulations-and-voronoi-computation` in the `linear` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.

### Same-frontier proof closure and well-definedness

Define cell maps, Jacobian/derivative bounds and conservative overlap weights. Prove pullback/Strang defects and transfer row/column mass sums. Give finite refinement input/loop/output/failure and prove termination only under feature-size/boundary-angle assumptions; Delaunay alone gives no 3D sliver bound.


## PE18 — Exterior waves, absorbing boundaries and PML

A: `exterior-wave-problems-absorbing-boundaries-and-pml`. B: `exterior-wave-problems-absorbing-boundaries-and-pml-examples`.

### Scope

Define exterior Helmholtz radiation condition and obstacle boundary data for a specified smooth/Lipschitz obstacle subclass. Prove uniqueness via Rellich identity/outgoing expansion and existence for the chosen combined-field or truncated variational formulation. Define local impedance absorbing boundaries and an exact modal Dirichlet-to-Neumann map for a sphere/circle; prove the actual truncation/reflection error. Define complex-stretch PML first on a Cartesian constant-coefficient mode branch; prove perfect matching and exponential decay there. A finite PML FEM convergence theorem requires the stated obstacle/stretch/parameter stability result and a separate exponential truncation bound; do not universalize the plane-wave calculation to every material or grazing/evanescent mode.

### Proof construction

Green imaginary part and outgoing expansion prove Rellich uniqueness; combined-field jump relations + Fredholm give existence. Modal separation computes DtN and artificial-boundary reflection. Complex-coordinate substitution computes matching, including branch of longitudinal wave number; bound damping away from the declared excluded angles, then coercive/inf-sup perturbation for truncation and discretization. State Helmholtz pollution restrictions on kh and degree explicitly for any error theorem.

### Examples

outgoing sphere, impedance reflection, PML normal/grazing incidence, resonance at insufficient damping.

### Prerequisite interfaces

- **Same-frontier pair `NA-29`** — A page `ceas-lemma-and-aubin-nitsche-error-estimates` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-30`** — A page `variational-crimes-and-strang-lemmas` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-38`** — A page `spectral-collocation-and-galerkin-methods` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `PE16`** — A page `boundary-integral-equations-and-galerkin-bem` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.

### Same-frontier proof closure and well-definedness

Define obstacle, radiation condition, sign and boundary data. Prove Rellich uniqueness, layer/Fredholm existence in dependency order, modal/impedance truncation error and non-grazing PML damping/inf-sup. State kh/degree conditions for every finite-element error claim.


## PE21 — Homogenization, multiscale FEM and heterogeneous media

A: `homogenization-and-multiscale-finite-element-methods`. B: `homogenization-and-multiscale-finite-element-methods-examples`.

### Scope

For uniformly elliptic periodic scalar coefficients define cell correctors, effective tensor and two-scale expansion; prove symmetry/ellipticity and homogenization for the specified bounded-domain/data branch. Prove a quantitative corrector estimate with its boundary-layer/regularity hypotheses. Define a concrete MsFEM or FE-HMM local cell procedure with micro/macro meshes and sampling domains; prove consistency/error separating macro approximation, micro solve and resonance/sampling terms. Do not assert uniform accuracy at arbitrary scale ratios or nonperiodic coefficients. Include localized orthogonal decomposition as a distinct construction with explicit quasi-interpolant and patch decay assumptions if selected.

### Proof construction

Cell Lax–Milgram and energy minimization; weak/two-scale compactness proved locally, oscillating-test identification and boundary-cutoff corrector. MsFEM Strang estimate compares local computed effective forms with exact homogenized form; prove cell approximation and resonance bound before using it. LOD requires cutoff/Caccioppoli and stable decomposition for exponential corrector localization; no heuristic decay premise disguised as theorem.

### Examples

layered effective tensor, micro/macro error separation, resonance error, high-contrast failure of ordinary uniform constants.

### Prerequisite interfaces

- **Same-frontier pair `NA-28`** — A page `finite-element-meshes-and-interpolation` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-29`** — A page `ceas-lemma-and-aubin-nitsche-error-estimates` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-30`** — A page `variational-crimes-and-strang-lemmas` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-35`** — A page `adaptive-finite-element-methods` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Published item interface** in `lax-milgram-and-weak-elliptic-solutions`: `thm-lax-milgram`, `thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.

### Same-frontier proof closure and well-definedness

Define periodic symmetric uniformly elliptic coefficient, cell corrector/effective tensor, domain and data. Prove cell coercivity, two-scale compactness/test identification and boundary cutoff; quantitative rate requires the stated regularity. Define micro boundary/sampling rules and separate macro/micro/resonance errors.


## PE23 — Phase-field and dissipative gradient-flow computation

A: `phase-field-and-energy-dissipative-discretization`. B: `phase-field-and-energy-dissipative-discretization-examples`.

### Scope

Define Allen–Cahn and Cahn–Hilliard as mathematical gradient-flow systems with chosen polynomial potential, boundary data and finite-energy initial class. Prove a specific convex-splitting backward scheme has a unique finite-dimensional minimizer/solution, discrete energy decay and CH mass conservation. Prove mesh/time convergence under explicit compactness/growth/dimension assumptions using PE12; quantitative errors are conditional on smooth exact solutions and epsilon-dependent constants. Define stabilized/SAV variants separately; decay of an auxiliary modified energy is not automatically decay of original physical energy or maximum-principle preservation.

### Proof construction

Convex/concave potential inequalities plus discrete gradient/negative-norm identity; coercive strictly convex minimization for step existence. Uniform energy bounds, discrete chemical-potential estimates, compactness and polynomial nonlinearity integrability identify the limit. In CH use mass-zero inverse Laplacian with proved Poincare/gauge. State dimension restrictions for quartic growth and provide required Sobolev embeddings. Sharp-interface epsilon→0 is a different theorem not inferred from fixed-epsilon convergence.

### Examples

CH mass/energy ledger, AC front, modified-energy/original-energy distinction, unresolved interface thickness.

### Prerequisite interfaces

- **Same-frontier pair `NA-29`** — A page `ceas-lemma-and-aubin-nitsche-error-estimates` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-36`** — A page `parabolic-finite-element-methods` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `PE12`** — A page `nonlinear-parabolic-compactness-and-monotone-evolution` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `PE13`** — A page `finite-volume-diffusion-and-mimetic-fluxes` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `T04`** — A page `imex-and-operator-splitting-methods` in the `dynamics` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.

### Same-frontier proof closure and well-definedness

Define the convex-splitting AC/CH recurrence, boundary conditions, mean-zero inverse Laplacian and finite-dimensional solve; prove strict convexity/coercivity, mass conservation and discrete energy decay, then derive compactness, nonlinear integrability and the limit. The selected backward-Euler convex-splitting theorem is local to this pair. If the alternative IMEX branch is used, specify T04's exact ARS(2,2,2) tableau \(\gamma=1-1/\sqrt2\), \(\delta=1-1/(2\gamma)\), and prove each implicit stage is uniquely solvable on the chosen branch; do not import stiff stability, energy decay or positivity without separate coefficient/stage inequalities. Any Lie/Strang alternative needs exact subflows and its stated commutator bounds. SAV modified energy is not physical energy.


## PE22 — ALE, interfaces and partitioned multiphysics coupling

A: `ale-interface-and-partitioned-multiphysics-discretization`. B: `ale-interface-and-partitioned-multiphysics-discretization-examples`.

### Scope

Use two fully separated branches. **Selected moving-mesh branch.** On a periodic one-dimensional reference grid with cell width \(\Delta\xi\), define the moving faces \(x_{i+1/2}^n\), cell Jacobians \(J_i^n=(x_{i+1/2}^n-x_{i-1/2}^n)/\Delta\xi>0\), prescribed face mesh velocities \(w_{i+1/2}^n\), and constant physical advection speed \(a\). Move faces by \(x_{i+1/2}^{n+1}=x_{i+1/2}^n+\Delta t\,w_{i+1/2}^n\), which gives the exact discrete GCL \(J_i^{n+1}=J_i^n+(\Delta t/\Delta\xi)(w_{i+1/2}^n-w_{i-1/2}^n)\). Define \(c_{i+1/2}=a-w_{i+1/2}^n\), upwind ALE flux \(\widehat F_{i+1/2}=c_{i+1/2}^+\bar u_i^n+c_{i+1/2}^-\bar u_{i+1}^n\), and conservative update
\[
J_i^{n+1}\bar u_i^{n+1}=J_i^n\bar u_i^n-\frac{\Delta t}{\Delta\xi}(\widehat F_{i+1/2}-\widehat F_{i-1/2}).
\]
Inputs are the finite periodic grid, \(a\), face-velocity table, initial cell averages, and \(\Delta t,N\); if any \(J_i^{n+1}\le0\), return `mesh_crossing` before the state update. Prove periodic mass conservation and exact constant-state/free-stream preservation. Under \((\Delta t/\Delta\xi)(c_{i+1/2}^+-c_{i-1/2}^-)\le J_i^n\), the update is monotone and preserves nonnegative states; derive its weighted \(L^1\) estimate. For the general continuous ALE identity, let \(A_t:\widehat\Omega\to\Omega(t)\) be an orientation-preserving \(C^2\) diffeomorphism on a compact reference domain, set \(J=\det DA_t>0\) and \(w_m=\partial_tA_t\), and prove Jacobi’s identity \(\partial_tJ=J\,\operatorname{div}_xw_m\) plus Reynolds transport. This is a concrete 1D ALE/GCL scheme; arbitrary multidimensional curved maps retain only these continuous identities, with no unproved discrete rate.

**Partitioned branch.** On a fixed matching interface mesh, choose two finite-dimensional backward-Euler diffusion subdomain problems with positive mass matrices, coercive diffusion forms, homogeneous exterior Dirichlet data, and a common trace space \(\Lambda_h\). With outward flux convention, write the condensed local relations as \(q_i=S_i\lambda_i-f_i\), where each \(S_i:\Lambda_h\to\Lambda_h\) is self-adjoint positive definite, and the coupled trace solves \((S_1+S_2)\lambda=f_1+f_2\). For a declared \(\alpha>0\), input an incoming Robin datum \(r_1^m\) and do these two finite solves:
\[
(S_1+\alpha I)\lambda_1^{m+1}=r_1^m+f_1,\quad r_2^{m+1}=(\alpha I-S_1)\lambda_1^{m+1}+f_1;
\]
\[
(S_2+\alpha I)\lambda_2^{m+1}=r_2^{m+1}+f_2,\quad r_1^{m+1}=(\alpha I-S_2)\lambda_2^{m+1}+f_2.
\]
Prove the fixed point is the monolithic trace solution and the homogeneous error map is \(e^{m+1}=R_2R_1e^m\), \(R_i=(\alpha I-S_i)(\alpha I+S_i)^{-1}\). Supply a finite-iteration residual-stop and monolithic backward-Euler energy identity. This is a linear diffusion transmission theorem; it does not claim general nonlinear FSI well-posedness. For the separate added-mass warning, define the toy partitioned recurrence \(m_s\delta v_{n+1}=-m_f\delta v_n\) and prove growth when \(m_f>m_s>0\). The base interface solve uses backward Euler; the T04 interface is consumed only by an optional splitting-error branch, and then only for the exact-flow/commutator hypotheses of its Lie/Strang contract.

### Proof construction

For the selected ALE finite-volume branch, the face move gives the displayed GCL exactly. For constant \(\bar u\), the upwind flux difference is \(-\Delta t\bar u(w_{i+1/2}-w_{i-1/2})/\Delta\xi\), which cancels the Jacobian update and proves free-stream preservation; periodic flux telescoping proves mass conservation. Expanding the update gives nonnegative coefficients of \(\bar u_{i-1},\bar u_i,\bar u_{i+1}\) under the displayed CFL, and division by positive \(J_i^{n+1}\) proves positivity/monotonicity. Summing absolute values with the Jacobian weights gives the discrete \(L^1\) contraction for the homogeneous periodic scalar equation. In the continuous map branch, change variables and Jacobi's identity \(\partial_tJ=J\,\operatorname{div}_x w_m\) prove Reynolds transport; this identity alone does not imply arbitrary high-dimensional discrete GCL or a convergence rate. For the interface branch, backward Euler gives local matrices \(M_i/\Delta t+A_i\succ0\); their Schur complements are SPD on the common trace space. In each reflection, \((\alpha I+S_i)\lambda=r+f_i\) is uniquely solvable, and the exchanged Robin datum is \((\alpha I-S_i)\lambda+f_i\). By the finite-dimensional spectral theorem,
\[
q_i=\max_{\lambda\in\sigma(S_i)}\left|\frac{\alpha-\lambda}{\alpha+\lambda}\right|<1,\qquad \|R_i\|\le q_i,
\]
so \(\|e^m\|\le(q_1q_2)^m\|e^0\|\). If \(q=q_1q_2<1\), then \(\|r_1^{m+1}-r_1^m\|\le(1-q)\varepsilon/\|(\alpha I+S_1)^{-1}\|\) certifies \(\|\lambda_1^{m+1}-\lambda_*\|\le\varepsilon\); otherwise the finite budget returns `budget_exhausted`. Adding the two monolithic backward-Euler subdomain equations cancels the paired interface fluxes and gives the mass-energy difference plus \(\Delta t\) times diffusion dissipation bounded by the data term. The Schur residual bounds trace error by \(\|(S_1+S_2)^{-1}\|\) times its norm, which feeds the stopped-solve energy estimate. The added-mass example has amplification factor \(-m_f/m_s\), so its magnitude exceeds one exactly in the stated regime. Curved geometry/transfer defects use PE17. If the optional splitting-error branch is used, import T04 only for exact subflows with its stated common-domain/commutator regularity; the base backward-Euler Robin contraction does not imply a splitting estimate.

### Examples

expanding mesh constant state, two-domain heat flux balance, elastic piston added-mass recurrence.

### Prerequisite interfaces

- **Same-frontier pair `NA-30`** — A page `variational-crimes-and-strang-lemmas` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-34`** — A page `mixed-finite-elements-and-stokes-stability` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-36`** — A page `parabolic-finite-element-methods` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `PE06`** — A page `energy-stable-incompressible-navier-stokes-discretization` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `PE17`** — A page `curved-mesh-geometry-and-conservative-mesh-transfer` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `PE19`** — A page `elasticity-near-incompressibility-and-locking-free-discretization` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `T04`** — A page `imex-and-operator-splitting-methods` in the `dynamics` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.

### Same-frontier proof closure and well-definedness

Fix the ALE map, quadrature, stage values, and exact discrete GCL before stating the free-stream result. The partitioned algorithm inputs are \((S_1,S_2,f_1,f_2,\alpha,r_1^0,\varepsilon,M)\); each pass applies the displayed Robin solves/exchanges, then returns a trace satisfying the certified tolerance or the last trace with `budget_exhausted`. Prove the fixed point equivalence, the update-to-trace bound, and the Schur-residual-to-energy constant. Any optional T04 split uses only exact-flow Lie/Strang order under the imported common-domain and commutator hypotheses. The toy added-mass recurrence is a counterexample only for its displayed masses and partitioning.


## PE28 — hp finite elements and spectral elements

A: `hp-finite-elements-and-spectral-element-methods`. B: `hp-finite-elements-and-spectral-element-methods-examples`.

### Scope

Define conforming variable-degree element spaces on an explicitly admissible matching mesh and polynomial-degree assignment, hierarchical basis, p/h/hp refinement, and a tensor-product Gauss–Lobatto spectral element on affine quadrilaterals/hexahedra. Prove p-explicit local approximation and inverse/trace inequalities, including degree factors in penalties/preconditioners. Derive energy error via NA29 with actual h,p,regularity dependence. Prove exponential p convergence for analytic solutions on a fixed regular mesh using a stated analytic derivative bound. For polygonal corner singularities prove exponential-in-a-power-of-DOF hp convergence only on the explicitly geometrically graded mesh and weighted-analytic regularity class, with the actual grading/degree law. Spectral-element GLL quadrature error is a Strang crime: mass/stiffness norms must be proved equivalent with p-uniform constants in the stated branch; do not equate collocation with exact Galerkin without checking quadrature.

### Proof construction

Construct reference interval polynomial projection using integrated orthogonal bases and derivative coefficient estimates; tensorize and transport with p-explicit constants. Prove face lifting/conforming assembly for varying degrees. Combine analytic derivative growth and factorial estimates to optimize truncation; for corners sum weighted layer approximation errors and count all DOFs to derive the claimed exponent. GLL norm equivalence and quadrature defects follow exactness plus explicit top-mode correction; variable coefficients require bounded smoothness and aliasing control. Root may select a 2D theorem first, but cannot infer its dimension exponent in 3D.

### Examples

analytic p refinement, corner singularity h versus hp, GLL mass top mode, p-dependent DG penalty failure.

### Prerequisite interfaces

- **Same-frontier pair `NA-10`** — A page `polynomial-interpolation-and-remainder` in the `linear` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-12`** — A page `composite-quadrature-rules` in the `linear` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-28`** — A page `finite-element-meshes-and-interpolation` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-29`** — A page `ceas-lemma-and-aubin-nitsche-error-estimates` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-30`** — A page `variational-crimes-and-strang-lemmas` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-35`** — A page `adaptive-finite-element-methods` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-38`** — A page `spectral-collocation-and-galerkin-methods` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `PE17`** — A page `curved-mesh-geometry-and-conservative-mesh-transfer` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.

### Same-frontier proof closure and well-definedness

Define degree map, matching continuity, h/p/hp choices and GLL nodes/exactness. Prove p-explicit reference projection/trace/lifting, analytic/corner layer estimates and DOF counting. GLL mass/stiffness equivalence must be uniform in p before collocation/Galerkin identification.


## PE29 — Isogeometric Galerkin discretization

A: `isogeometric-galerkin-methods`. B: `isogeometric-galerkin-methods-examples`.

### Scope

Reuse canonical B-splines and APP-SPLINE approximation. Define tensor-product rational spline/NURBS geometry with positive weights bounded above/below, globally injective patch map, positive Jacobian and declared derivative/inverse bounds. Define the mapped conforming Galerkin Poisson/linear-elasticity space, h/p/k refinement conventions and compatible multipatch interfaces. Prove weighted rational basis partition/nonnegativity using existing polynomial basis, mapped approximation/stability and a Céa/Strang energy error retaining degree, weight, map and continuity constants. Positive weights do not prove map injectivity. Exact CAD representation does not alone prove exact quadrature or eliminate geometric error for an approximated target. Nonmatching multipatches require a separately stable mortar/Nitsche interface result and are not silently conforming.

### Proof construction

Quotient derivative formula plus positive denominator gives rational-space norm control; pull back coefficients/energy by PE17 and apply the actual spline quasi-interpolation result to the numerator/comparison space. Prove boundary-preserving projector and interface compatibility; bound rational denominator derivatives and mapping constants explicitly. Apply NA29 for exact geometry/form and NA30 for quadrature/geometry error. h,p,k rates must use the precise spline approximation theorem; no degree-independent condition number from smooth basis alone.

### Examples

exact quarter-circle geometry with verified map, invalid folded patch despite positive weights, k refinement, multipatch continuity mismatch.

### Prerequisite interfaces

- **Published item interface** in `splines-series-and-approximation-rates`: `def-b-spline-space-and-basis`, `thm-spline-polynomial-reproduction`, `def-local-spline-quasi-interpolant`, `thm-sobolev-spline-quasi-interpolant-rate`. The approximation theorem assumes AC; retain its clamped one-dimensional knot hypotheses.
- **Same-frontier pair `APP-SPLINE`** — A page `spline-evaluation-and-interpolation-algorithms` in the `linear` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-28`** — A page `finite-element-meshes-and-interpolation` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-29`** — A page `ceas-lemma-and-aubin-nitsche-error-estimates` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-30`** — A page `variational-crimes-and-strang-lemmas` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `PE17`** — A page `curved-mesh-geometry-and-conservative-mesh-transfer` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `PE19`** — A page `elasticity-near-incompressibility-and-locking-free-discretization` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.

### Same-frontier proof closure and well-definedness

Define rational basis/positive weights/map injectivity/Jacobian and patch constraints. Prove denominator, mapped conformity, boundary approximation and rational quotient estimates using the exact spline supplier; nonmatching patches need separate interface stability.


## PE31 — Semi-Lagrangian characteristic transport

A: `semi-lagrangian-characteristic-transport`. B: `semi-lagrangian-characteristic-transport-examples`.

### Scope

Define characteristic backtracking plus multilinear/barycentric interpolation for linear nonconservative transport on a periodic box or an explicitly resolved inflow/exit branch. Prove maximum/sup-norm stability for nonnegative partition-of-unity interpolation regardless of displacement-to-cell-size ratio. Prove a smooth-solution global error bound distinguishing characteristic foot error, interpolation defect per step and initial/boundary error: for fixed T, a typical bound is C(dt^q+h^(r+1)/dt) when each backtracking step has O(dt^(q+1)) foot error and interpolation has O(h^(r+1)) defect. State the actual joint mesh/time condition; absence of a classical advective CFL does not eliminate consistency constraints. Define a conservative characteristic-cell overlap method and prove mass conservation/positivity separately; pointwise interpolation is not inherently conservative. High-order interpolation receives its actual operator norm/limiter bound, not automatic L∞ contractivity.

### Proof construction

Characteristic chain rule plus bounded velocity/state derivatives; prove backtracking map stays admissible and handle periodic wrapping/inflow first-hit. Existing ODE local error controls foot error via solution Lipschitz norm. Interpolation convexity proves sup stability; telescope one-step consistency defects with discrete Gronwall. For conservative remapping use Reynolds/Jacobian mass factors for divergence-form transport, orientation/invertibility and partitioned departure-cell measures, then PE17 overlap conservation. Boundary hitting error requires transversal events or exact exit oracle with declared error; no hidden root solve.

### Examples

rotation across many cells per step, fixed h/dt consistency loss, nonconservative mass drift, conservative deforming-cell remap.

### Prerequisite interfaces

- **Published item interface** in `partial-differential-equations-and-characteristics`: `def-linear-transport-equation-and-its-characteristic-flow`. It defines characteristics but does not prove flow existence.
- **Same-frontier pair `NA-10`** — A page `polynomial-interpolation-and-remainder` in the `linear` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `P-NUM-ODE-02`** — A page `global-ode-and-density-error` in the `dynamics` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `PE17`** — A page `curved-mesh-geometry-and-conservative-mesh-transfer` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `T10`** — A page `event-location-and-hybrid-trajectory-error` in the `dynamics` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.

- **Published item interface** in `picard-lindelof-and-first-order-odes`: `thm-picard-lindelof-local-existence-and-uniqueness`, `lem-ode-extension-from-a-compact-interior-region`, `lem-transport-characteristics-depend-c-one-on-initial-position`, `thm-gronwall-integral-inequality`. The flow extension lemma needs a compact interior tube; the Jacobian lemma requires a C1 velocity.

### Same-frontier proof closure and well-definedness

Add Picard–Lindelöf for a locally Lipschitz velocity and prove a compact invariant tube containing every backward characteristic step; the transport definition only names a flow and its dependence item applies only to a C1 velocity. Define the backward-foot/interpolation algorithm with periodic wrap or a first-hit boundary oracle, finite step budget, and explicit exit/event status. Use P-NUM-ODE-02 only after the chosen local method's defect, one-step stability and tube bounds are proved. For the T10 branch require isolated transverse guards with \(|g_t+g_yf|\ge\nu>0\), finitely many events separated by a positive time gap, Lipschitz resets, and certified brackets; then event-time error scales by \(1/\nu\) times dense-output/root error and is propagated only across that finite event list. Grazing, simultaneous events and Zeno accumulation are excluded. For conservative transport prove the Jacobian law independently.


## PE32 — Monotone Hamilton–Jacobi–Bellman schemes and policy iteration

A: `monotone-hjb-schemes-and-policy-iteration`. B: `monotone-hjb-schemes-and-policy-iteration-examples`.

### Scope

**Selected first-order Cauchy branch.** Let \(\mathbb T^d\) be the periodic unit torus, finite controls \(A=\{1,\ldots,m\}\), and bounded periodic coefficients \(b_a(x,t)\), \(\ell_a(x,t)\) that are uniformly Lipschitz in \((x,t)\). Define
\[
u_t+H(x,t,Du)=0,\qquad H(x,t,p)=\max_{a\in A}\{-b_a(x,t)\cdot p-\ell_a(x,t)\},
\]
with continuous periodic initial data. On the periodic grid of spacing \(h=1/N\), initialize \(U_i^0=u_0(x_i)\), and define the nonnegative tensor-product multilinear interpolant \(I_h\) and finite update
\[
U_i^{n+1}=\min_{a\in A}\{I_hU^n(x_i+\Delta t\,b_a(x_i,t_n))+\Delta t\,\ell_a(x_i,t_n)\},
\]
with periodic wrapping. The procedure inputs \((N,\Delta t,T,A,b,\ell,U^0)\), performs \(\lceil T/\Delta t\rceil\) finite updates, and returns the grid values. Prove order preservation, \(\|U^{n+1}\|_\infty\le\|U^n\|_\infty+\Delta t\max|\ell|\), consistency error \(O(\Delta t+h^2/\Delta t)\) on smooth tests, and half-relaxed-limit convergence when \(h,\Delta t\to0\), \(h^2/\Delta t\to0\), initial data converge uniformly, and the exact imported first-order comparison hypotheses hold for the periodic extensions to \(\mathbb R^d\). The comparison input is the published bounded USC/LSC comparison with pointwise initial order and its global Lipschitz Hamiltonian conditions, checked from these coefficients.

**Selected stationary finite-control branch.** On a finite state grid let \(q^a_{ij}\ge0\) for \(j\ne i\), \(\sum_jq^a_{ij}=0\), discount \(c>0\), and rewards \(r_i^a\). Solve \(cV_i-\max_{a\in A}\{\sum_jq^a_{ij}V_j+r_i^a\}=0\) by finite-control Howard iteration initialized with the least-index policy: solve the current policy system, compute the strict-improvement state set, stop if it is empty, and otherwise replace only those policies by the least-index maximizing controls. Give a deterministic finite budget and return `converged` or `budget_exhausted`; prove each policy matrix is a nonsingular M-matrix and finite termination. Infinite-control discretization has a separate uniform Hamiltonian error.

**Optional second-order branch.** On the periodic grid, for finite controls and diagonal coefficients \(a^a_j(x,t)\ge a_0>0\), define \(D_{jj}^hU_i=(U_{i+e_j}-2U_i+U_{i-e_j})/h_j^2\), define \(D_{j,a}^{up}U_i=(U_i-U_{i-e_j})/h_j\) if \(b^a_j\ge0\) and \(D_{j,a}^{up}U_i=(U_{i+e_j}-U_i)/h_j\) if \(b^a_j<0\), and update explicitly by \(U_i^{n+1}=U_i^n+\Delta t\max_a\{\sum_j[a^a_jD_{jj}^hU_i+b^a_jD_{j,a}^{up}U_i]+f_i^a\}\). Restrict to \(|b^a_j|h_j\le a^a_j\) and \(\Delta t\max_{i,a}\sum_j(2a^a_j/h_j^2+|b^a_j|/h_j)\le1\); then every state coefficient is nonnegative and the update is monotone. This concrete branch is consistent on smooth tests, but its viscosity comparison/convergence theorem is held until the second-order theorem-of-sums, doubling-variable comparison, boundary barriers and consistency passage are supplied locally. No arbitrary anisotropic central stencil is covered.

### Proof construction

For the first-order update, multilinear interpolation has nonnegative weights summing to one, so increasing nodal data increases every control candidate and the min update; the displayed sup bound follows from convexity of those weights. Taylor expand a smooth periodic test function along each controlled characteristic step and bound interpolation error by \(C h^2\|D^2\phi\|\), yielding the stated normalized consistency error. At approximate maximum/minimum points of the half-relaxed limits, apply this monotonicity to the test-function grid values, pass to the limit, and obtain viscosity sub/supersolution inequalities. Initial barriers give the exact initial trace. The published comparison theorem applies to bounded envelopes: the finite maximum of bounded periodic Lipschitz Hamiltonians satisfies its \(x,t,p\) bounds on all of \(\mathbb R^d\); extend periodic data and coefficients, then uniqueness squeezes the two envelopes. This proves convergence without importing a generic monotone-scheme theorem.

For the stationary branch, each policy matrix \(A^\pi=cI-Q^\pi\) has positive diagonal, nonpositive off-diagonal, and strict row diagonal dominance by \(c>0\); prove inverse positivity by the maximum principle and nonsingularity by the same strict row bound. The greedy update makes \(A^{\pi_{k+1}}(V^{k+1}-V^k)\ge0\); inverse positivity gives componentwise monotone values, with a strict increase at a switched row. A repeated policy would have the same unique linear-system solution, contradicting that strict increase. There are finitely many policies, so termination occurs in at most their finite number plus the initial solve. Verify the actual loop tests strict improvement with deterministic ties and honors the finite iteration budget.

For the optional second-order branch, prove coefficient-weighted stencil monotonicity under its declared CFL before claiming anything about convergence. The missing second-order viscosity comparison is a local PE32 proof task and is not supplied by the imported first-order item.

### Examples

eikonal/HJ kink, discounted control switching, monotone versus nonmonotone stencil, diagonal diffusion Bellman manufactured value, infinite-control quantization.

### Prerequisite interfaces

- **Same-frontier pair `NA-23`** — A page `elliptic-finite-difference-methods` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-25`** — A page `hyperbolic-finite-difference-methods` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `PE31`** — A page `semi-lagrangian-characteristic-transport` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Published item interface** in `hamilton-jacobi-equations-and-viscosity-solutions`: `def-viscosity-subsolution-and-supersolution`, `def-half-relaxed-limits`, `thm-comparison-for-first-order-hamilton-jacobi-equations`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.

### Same-frontier proof closure and well-definedness

For the selected Cauchy algorithm, explicitly define periodic interpolation, time indexing, initial sampling, coefficient bounds and the joint refinement condition \(h^2/\Delta t\to0\); all updates are finite minima of defined real numbers. Carry CC when using the sequential recovery/maximizing-point characterization of the published half-relaxed-limit definition; its displayed inf/sup definition itself is set-based. Check the exact published first-order comparison statement on the periodic extension rather than importing only the term “comparison.” For the stationary solver prove the M-matrix inverse property, deterministic tie rule, strict value improvement and finite policy count before stating termination. The optional second-order diagonal stencil is defined under the displayed diffusion-dominance/CFL inequalities; verify each coefficient in the update is nonnegative. Retain its continuous comparison/convergence theorem on hold until its semijets, theorem-of-sums, comparison and barriers are locally proved under the exact coefficient class.

