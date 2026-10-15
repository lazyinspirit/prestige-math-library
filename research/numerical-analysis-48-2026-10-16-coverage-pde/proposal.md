# Numerical PDE and engineering coverage proposal

Date: 2026-10-16. Status: draft scope/proof design, not authored or accepted proofs. All additions and smallest missing suppliers below belong to the SAME Numerical Analysis frontier. Provisional PE identifiers are stable cross-agent references, not canonical pair IDs. Every proposed A slug has a companion B slug formed by appending `-examples`; only A pages supply logical dependencies. Existing richest approved NA claims and binding appendices remain unchanged.

## Evidence and boundaries

Read in this audit: full CLAUDE.md, README.md, SCHEMA.md; NA plan policy and NA23–38 scopes/proof routes/requires; current bodies of `thm-riemann-solver-for-strictly-convex-scalar-flux` and `thm-sharp-trace-theorem-for-w-one-p`; filename inventories of PDE/functional-analysis items. `.autopilot/numerical-analysis-48-2026-10-16/state.json` records paused=true, stage=1-drift-apply, no finishedAt. No engine action was taken. This is an interface/coverage audit, not a recursive mathematical acceptance of published suppliers.

Current NA26–27 prove scalar conservation-law contracts; they do not cover hyperbolic systems, high-resolution reconstruction, entropy-stable systems, or positivity. NA34 covers stationary Stokes, not evolutionary incompressible flow/projection. NA33 is elliptic SIPG, not hyperbolic DG. NA36 is linear coercive parabolic FEM, not nonlinear monotone diffusion or reaction systems. NA28 assumes affine geometry; NA35's refinement/contraction is not general mesh generation. Published sharp trace is bounded C1, so it does not supply Lipschitz polyhedral Maxwell/BEM traces. Filename search found no numerical Yee, Nedelec, SUPG or PML suppliers. That search is negative discovery evidence, not a claim that every root item body has been audited.

All model equations here are mathematical definitions conditional on specified coefficients and data. Physical interpretations (Euler gas dynamics, electromagnetism, porous flow, elasticity, tissue growth, chemical reactions) are examples, never physical root premises. No discrete estimate establishes global smooth 3D Navier–Stokes, global systems entropy uniqueness, or universal shock convergence. Established but missing local proofs remain mandatory same-frontier authoring obligations. No result cites an open problem as a supplier.

Every procedure follows the existing NA algorithm policy: finite data and arithmetic/oracle model, budgets, boundary/initial rows, and failure statuses for inadmissible mesh/state, vacuum/negative pressure, singular solve, failed nonlinear branch and nonfinite values. Nonlinear implicit steps invoke NA09 with a verified local branch or a stated monotonicity existence theorem, not an uncosted magic exact solve. Convergence sequences and finite executable algorithms are separate. Constants must be uniform in the asserted mesh/time/parameter family. Sources below are precise discovery/authoring locators; **this audit has not read those external full texts**. Locate/read the indicated proof in full and record actual ranges before proof-source acceptance. The explicit proof routes below are local obligations independent of source availability.

## Exact existing-pair amendments

These additions preserve every already approved result. They supply prerequisites locally, without introducing unnecessary pair splits.

- **NA28:** Keep affine mesh/interpolation claims. Add a typed finite oriented cell-complex incidence interface (`boundary boundary=0`), elementwise integration/trace definitions on affine simplices, and reference covariant/contravariant Piola transformations with exact gradient/curl/divergence transformation and normal/tangential moment identities. Prove by affine chain rule, determinant/cofactor identities and cell Green; boundary cancellation uses opposite orientations. Consumers PE08/PE09/PE10. Curved-map approximation remains PE17.
- **NA33:** Preserve SIPG elliptic claims. Its B page may compare with PE04 hyperbolic DG, but no logical claim that elliptic penalty analysis proves nonlinear hyperbolic stability.
- **NA34:** Retain the full existing divergence-lifting/Korn/mini-element binding design. Add an explicitly proved discrete Helmholtz orthogonal projection in the finite velocity mass inner product and pressure Schur-complement identity, including pressure nullspace/gauge. It follows from the already proved inf-sup and finite-dimensional orthogonal decomposition. Used by PE06/PE07; this does not establish bounded-domain Helmholtz regularity.
- **NA35:** Retain reliability/efficiency/contraction/optimality claims and source restrictions. Its conforming refinement algorithm must actually provide the closure, shape-regularity and counting properties it consumes; name newest-vertex bisection initial-label compatibility and dimension. Do not infer 3D mesh complexity from a 2D proof. PE17 is geometric mesh generation/curvature, not a replacement for these obligations.
- **NA36:** Retain full continuous evolution-triple construction. Add the Hilbert-valued discrete energy identity `2(a-b,a)=||a||²-||b||²+||a-b||²` and backward-Euler reconstruction/compactness interface when later used. Aubin–Lions is NOT implicitly supplied: PE12 owns its complete proof and PE06 may consume that supplier.
- **NA38:** Keep the explicit exclusion of an unread second-order pressure-splitting proof. PE07 separately authors an actual first-order projection theorem and separately conditioned higher-order pressure correction.

## Proposed A/B pairs

### PE01 — Riemann solvers for hyperbolic systems

**A:** `riemann-solvers-for-hyperbolic-systems`.

**Scope/results:** For f in C3 on an open admissible set G in Rm, define strictly hyperbolic conservation systems and admissible-state set, characteristic families, Rankine–Hugoniot and Lax admissibility as definitions. Prove the local small-data Riemann solver near a state where each field is genuinely nonlinear or linearly degenerate, with clearly bounded neighborhood; do not promise arbitrary large-data solutions. Define Godunov, Roe and HLL fluxes. Prove consistency and conservation; Roe property is an algebraic identity, not entropy admissibility. For ideal-gas Euler define pressure mathematically on rho>0, E>|m|²/(2rho), derive eigenstructure and give admissibility/failure conditions; HLL wave-speed bounds are explicit hypotheses or separately proved bounds.

**Proof route:** Prove eigenpair smoothness under simple spectrum, local rarefaction integral curves, shock curves using an augmented Rankine–Hugoniot implicit-function argument, tangent matching and wave-composition invertibility; verify weak jumps. Prove HLL flux by integrating the two-wave approximate conservation balance. Derive Euler sound speed and contact eigenvector locally. An exact Riemann procedure uses a bracketed pressure root with finite iteration budget and vacuum detection; existence/uniqueness of that root is a separate lemma.

**Dependencies/smallest suppliers:** NA09 local inverse/implicit tools plus root ODE existence, existing scalar Riemann theorem for comparison only; locally author the system wave-curve lemmas. **B:** acoustic system, Sod tube, contact, Roe expansion shock/vacuum failure. **Sources:** LeVeque, *Finite Volume Methods for Hyperbolic Problems* (2002), Chapters 11, 13–15; https://www.clawpack.org/riemann_book/ Euler and approximate-solvers chapters. Source reading outstanding.

### PE02 — High-resolution TVD, ENO and WENO reconstruction

**A:** `high-resolution-tvd-eno-and-weno-methods`.

**Scope/results:** Define MUSCL finite-volume reconstruction, a concrete minmod limiter, ENO stencil selection, WENO5-JS weights and a documented improved critical-point variant; distinguish finite-volume cell-average reconstruction from nodal finite differences. Prove second-order smooth-region reconstruction where the limiter is inactive; prove scalar TVD for a stated flux/limiter/CFL update by Harten's incremental form. Prove WENO polynomial reproduction/consistency and optimal smooth-region order under explicit smoothness and weight asymptotics; near critical points state the actual JS order, not automatic fifth order. Include the scalar linear monotonicity/order barrier. Systems characteristic reconstruction is defined but receives no automatic scalar TVD theorem.

**Proof route:** Solve reconstruction moment equations; Taylor-expand candidate polynomials and smoothness indicators with uniform remainders; derive nonlinear weight asymptotics including epsilon scaling. Derive nonnegative incremental coefficients and sum their variation estimate. Give a concrete critical-point counterexample when hypotheses fail.

**Dependencies/smallest suppliers:** NA10 interpolation, NA26–27, PE01 for systems examples; local limiter/TVD and weight-asymptotic lemmas. **B:** smooth advection, extrema clipping, Burgers shock, WENO critical point, oscillatory unlimited reconstruction. **Sources:** Harten 1983, JCP 49, 357–393; Shu, *Essentially Non-Oscillatory and Weighted Essentially Non-Oscillatory Schemes for Hyperbolic Conservation Laws*, NASA/CR-97-206253, https://ntrs.nasa.gov/citations/19980007543, reconstruction/accuracy/TVD sections; Jiang–Shu 1996 JCP 126, 202–228, doi:10.1006/jcph.1996.0130.

### PE03 — Positivity, invariant domains and entropy-stable systems fluxes

**A:** `invariant-domain-and-entropy-stable-conservative-schemes`.

**Scope/results:** Define convex invariant sets and convex entropy pairs for systems. Prove a first-order local Lax–Friedrichs/HLL invariant-domain update under a stated invariant Riemann-average hypothesis and CFL convex-combination coefficients; prove ideal-gas density/internal-energy positivity on the explicitly admitted wave-speed branch. Define entropy variables, two-point entropy-conservative flux and dissipative entropy-stable flux. Prove the semidiscrete cell entropy inequality from the exact Tadmor jump condition and positive semidefinite dissipation. Fully discrete entropy needs its own time-step theorem. Define a convex scaling positivity limiter and prove cell-average conservation plus positive quadrature-node states; do not claim cellwise pointwise positivity from finitely many nodes without a separate argument.

**Proof route:** Convexity of admissible Euler set; decompose updates into invariant Riemann averages. Multiply flux balances by entropy variables, telescope entropy potentials and bound dissipation. Limiter takes the maximal admissible scaling toward a positive mean; prove preservation and smooth-data accuracy only with a strict positive margin.

**Dependencies:** PE01/02, NA26; local convexity, entropy-variable invertibility and quadrature convexity lemmas. **B:** near-vacuum Euler, entropy residual, conservative positivity rescaling, entropy-stable but insufficiently resolved shock. **Sources:** Tadmor, *Entropy stability theory for difference approximations of nonlinear conservation laws and related time-dependent problems*, Acta Numerica 12 (2003), 451–512, doi:10.1017/S0962492902000156; Zhang–Shu, JCP 229 (2010), 3091–3120, doi:10.1016/j.jcp.2009.12.030; Guermond–Popov, SIAM JNA 54 (2016), 2466–2489, doi:10.1137/16M1074291.

### PE04 — Hyperbolic DG and summation-by-parts methods

**A:** `hyperbolic-dg-and-summation-by-parts-discretizations`.

**Scope/results:** Define upwind DG for scalar linear transport on oriented meshes and SBP derivative/norm matrices with SAT boundary penalties. Prove semidiscrete L2 energy stability with inflow boundary data and matching numerical flux. Derive a smooth-solution error bound from projection approximation, upwind dissipation and consistency. Define conservative flux-differencing DG/SBP for nonlinear systems and prove semidiscrete entropy stability under a supplied entropy-conservative flux, matching quadrature/SBP identities and boundary entropy conditions. SSP time stepping consumes the separately proved forward-Euler admissibility bound; semidiscrete stability alone gives no fully discrete guarantee.

**Proof route:** Local Green plus face cancellation, upwind jump-square identity; SBP matrix identity supplies the same boundary accounting. Bound error residual in the exact discrete norm. Nonlinear entropy proof uses the PE03 two-point shuffle identity, paired nodes and exact discrete metric identities on the stated mesh; curved meshes deferred PE17.

**Dependencies:** NA28, PE03, time-agent SSP/IMEX; local SBP polynomial exactness and norm-equivalence proof. **B:** transport inflow, central/upwind flux comparison, aliasing instability, SBP boundary penalty. **Sources:** Hesthaven–Warburton, *Nodal Discontinuous Galerkin Methods* (2008), scalar advection/energy chapters, doi:10.1007/978-0-387-72067-8; Fisher–Carpenter 2013, JCP 252, 518–557, doi:10.1016/j.jcp.2013.06.014.

### PE05 — Well-balanced balance laws and wet/dry fronts

**A:** `well-balanced-balance-laws-and-wet-dry-fronts`.

**Scope/results:** Define a shallow-water balance-law model with specified topography and hydrostatic reconstruction, including h=0 admissibility and dry momentum convention. Prove exact preservation of discrete lake-at-rest states, conservation of water and positivity of depth under the flux-specific CFL. State source-discretization consistency and conditional weak-limit theorem for this balance law. Separate well-balancedness from entropy stability and convergence; add a discrete energy inequality only for the exact chosen source/flux combination with its actual proof. Include asymptotic-preserving stiff relaxation as a separate procedure/result if used, with fixed-mesh limiting consistency and a separately uniform error claim.

**Proof route:** Insert hydrostatic states into every face and source term to show cancellation, then express depth update as positive flux combinations. Sum mass balances including boundary discharge. For weak limits control topography source quadrature and reconstruct the equilibrium path; discontinuous topography requires an explicit nonconservative/path formulation, not an undefined product.

**Dependencies:** PE01–03, NA26; local balance-law weak definition and source quadrature. **B:** lake at rest over a bump, dam break onto dry bed, spurious-current counterexample. **Sources:** Audusse et al., SIAM JSC 25 (2004), 2050–2065, hydrostatic-reconstruction theorem/proof, doi:10.1137/S1064827503431090; LeVeque 2002 Chapter 17.

### PE06 — Evolutionary incompressible flow discretization

**A:** `energy-stable-incompressible-navier-stokes-discretization`.

**Scope/results:** Define weak incompressible Navier–Stokes on bounded Lipschitz domains in d=2,3 with viscosity nu>0, homogeneous Dirichlet data and pressure gauge. Use NA34's actual stable mini-element pair and a skew-symmetric convective form. Reuse existing finite-dimensional Brouwer; prove existence of a backward-Euler finite-dimensional discrete solution, discrete energy inequality and subsequential convergence to a weak solution for a specified mesh/time family; uniqueness is conditional in 3D. Prove a velocity/pressure error bound only on a supplied sufficiently smooth exact solution interval, with explicit norms and nu-dependent constants. Do not assert Reynolds-uniform robustness from an ordinary Gronwall estimate.

**Proof route:** Brouwer fixed-point existence using the discrete energy outward-pointing bound and existing `thm-brouwer-fixed-point-theorem` (prove only the outward-pointing-zero corollary); derive skew cancellation, pressure cancellation and energy. Prove discrete Sobolev and trilinear bounds by NA28 scaling/root Sobolev. Use PE12 time-translate compactness for strong L2 velocity and pass convection; derive divergence/initial trace and weak energy lower semicontinuity. Smooth errors use approximation, discrete inf-sup and Gronwall.

**Dependencies:** NA34/36, PE12; local nonlinear finite-dimensional existence and discrete compactness lemmas. **B:** 2D Taylor–Green manufactured flow, energy budget, pressure gauge, unresolved 3D turbulence as a conditional computation. **Sources:** Girault–Raviart, *Finite Element Methods for Navier–Stokes Equations* (1986), time-dependent approximation chapters, doi:10.1007/978-3-642-61623-5; Temam, *Navier–Stokes Equations* (1977), Galerkin/compactness proof. Existing 3D regularity open problem is Remarks context only.

### PE07 — Projection, pressure correction and saddle-point solvers

**A:** `projection-and-pressure-correction-for-incompressible-flow`.

**Scope/results:** Define a concrete first-order incremental pressure-correction algorithm with explicit predictor, discrete projection, pressure update and boundary conditions; prove mass-inner-product projection and a matching energy estimate. Prove first-order velocity accuracy on the precise periodic smooth-data branch first; bounded-domain pressure and boundary-layer rates require separate hypotheses and proofs. Define rotational/second-order variants without claiming their rates until individually proved. Include block factorization and pressure Schur-complement preconditioners, proving spectral equivalence only from NA34 inf-sup/coercivity plus specified mass/stiffness scalings; this result supplies actual solver estimates, not generic improvement.

**Proof route:** Orthogonal decomposition and pressure increment square identity; derive splitting error equation, retain artificial pressure boundary term, estimate in appropriate dual norms, then time Gronwall. Periodicity removes the boundary defect only in that theorem. Reuse `def-block-lu-factorisation` and `thm-block-lu-factorisation-via-an-invertible-leading-block`; derive only the PDE Schur energy identity and uniform spectral bounds; bound supremum quotient with inf-sup. No pressure Poisson solve silently imposes physical pressure data.

**Dependencies:** NA06/34/36, PE06 for nonlinear conditional errors, time-agent order results. **B:** periodic projection, wall pressure boundary artifact, block preconditioner eigenvalues, checkerboard mode. **Sources:** Guermond–Minev–Shen, *An overview of projection methods for incompressible flows*, CMAME 195 (2006), 6011–6045, scheme-specific stability/error sections, doi:10.1016/j.cma.2005.10.010; Elman–Silvester–Wathen, *Finite Elements and Fast Iterative Solvers* (2014), saddle-point preconditioning chapters, doi:10.1093/acprof:oso/9780199678792.001.0001.

### PE08 — Mixed H(div) fluxes, Darcy flow and local conservation

**A:** `mixed-hdiv-fluxes-and-darcy-discretization`.

**Scope/results:** Define H(div), weak normal trace by Green duality, RT0/BDM spaces, contravariant Piola map, divergence-commuting interpolation on its proper regularity domain, and a stable RT0/P0 mixed Darcy method. Prove mixed well-posedness and flux/pressure error, exact element mass balance and normal-flux continuity. Define hybridization/static condensation and prove equivalence modulo pressure gauge. Coefficient-robust claims explicitly track permeability contrast and weighted norms.

**Proof route:** Prove Lipschitz-cell normal trace boundedness using an H1 lifting and Green independence; construct RT unisolvence and divergence commuting from face moments. Construct a bounded commuting projection using smoothing when canonical moments are not defined on all H(div); prove discrete inf-sup from divergence lifting plus interpolation. Apply NA34 abstract mixed theorem; hybridization follows local elimination and face multiplier equations.

**Dependencies:** NA28/34; same-page H(div) trace/density, commuting projection and mixed flux approximation. **B:** constant-flux triangle, checkerboard permeability, mixed versus primal nonconservative postprocessing, hybrid local elimination. **Sources:** Boffi–Brezzi–Fortin, *Mixed Finite Element Methods and Applications* (2013), H(div), Raviart–Thomas and mixed elliptic chapters, doi:10.1007/978-3-642-36519-5; Guermond M661 Fall2025, H(div) finite element/interpolation and mixed diffusion chapters, https://people.tamu.edu/~guermond/M661_FALL_2025/ (chapter numbers must be verified).

### PE09 — Discrete de Rham complexes and edge-element foundations

**A:** `discrete-de-rham-complexes-and-edge-elements`.

**Scope/results:** Define weak H(curl), tangential trace on polyhedra and lowest-order Nedelec edge elements with covariant Piola transport, unisolvence and commuting gradient/curl/div sequence. Prove discrete exactness on the stated contractible mesh/domain topology; on nontrivial topology state harmonic/cohomology components explicitly. Prove a uniformly bounded commuting cochain projection and discrete Poincare/compactness for the selected family; canonical interpolation is not automatically bounded at energy regularity. Supply a stable mixed curl-curl formulation with kernel quotient/gauge.

**Proof route:** Integration-by-parts defines tangential trace and trace norm; edge circulation/Stokes gives unisolvence and commuting moments. Construct smoothed commuting projection and boundary correction; use a proved regular decomposition on bounded Lipschitz contractible domains plus compact H1 embedding to obtain discrete compactness. The regular decomposition, weak trace extension and topological kernel identification are smallest missing analytic suppliers authored here, not hidden physical assumptions. Do not infer continuum exactness merely from incidence matrices.

**Dependencies:** NA28, PE08, root smooth de Rham/Stokes only under matching smoothness; full weak regular-decomposition proof local. **B:** spurious nodal curl-curl mode, edge circulation, handle-domain harmonic field. **Sources:** Arnold–Falk–Winther, *Finite element exterior calculus: from Hodge theory to numerical stability*, Bull. AMS 47 (2010), 281–354, Hilbert-complex/cochain projection/finite-element subcomplex sections, https://arxiv.org/abs/0906.4325; Monk, *Finite Element Methods for Maxwell's Equations* (2003), trace, edge-element, compactness chapters, doi:10.1093/acprof:oso/9780198508885.001.0001.

### PE10 — Yee FDTD and transient Maxwell finite elements

**A:** `yee-fdtd-and-transient-maxwell-discretization`.

**Scope/results:** Define a linear Maxwell mathematical system with uniformly positive definite bounded epsilon/mu and explicit PEC or periodic boundaries, sources satisfying the chosen charge-continuity relation. Define staggered Yee leapfrog and edge/face mixed semidiscretization. Prove discrete div curl=0, constraint propagation and a positive discrete energy under the actual strict CFL spectral-radius condition; prove smooth-solution error with boundary closures and compatible initial projections. Lossy media energy dissipates only with a specified conductivity/time treatment. Material jumps receive interface weak formulation and matching weighted norms; no smooth Taylor theorem across discontinuities.

**Proof route:** Oriented incidence identity supplies constraint propagation; adjoint curl and staggered polarization give modified energy; positivity follows dt² lambda_max(M_e^-1 C^T M_h^-1 C)<4 with strictness, retaining endpoint caveat. Derive grid CFL from a separately computed Cartesian symbol. Edge FE energy uses matrix transpose/curl duality; prove approximation/error by PE09 commuting projection and consistency.

**Dependencies:** PE09, NA19/25/36; local source compatibility and staggered-start error. **B:** plane-wave dispersion and CFL, divergence pollution from incompatible sources, PEC cavity, dielectric jump. **Sources:** Yee 1966, IEEE TAP 14, 302–307, doi:10.1109/TAP.1966.1138693 (procedure, not sufficient by itself for all proofs); Taflove–Hagness, *Computational Electrodynamics*, 3e, Yee stability/dispersion chapters; Monk 2003 transient Maxwell chapters.

### PE11 — Maxwell eigenproblems and compatible vector wave approximation

**A:** `maxwell-eigenproblems-and-compatible-vector-waves`.

**Scope/results:** For a stated PEC contractible cavity and positive coefficients, formulate divergence-free Maxwell eigenproblem with gradient kernel removed. Prove spectral approximation/no spurious nonzero eigenvalues for the concrete edge family using PE09 discrete compactness, eigenspace convergence and multiplicity-aware gaps. For mixed Hodge Laplacian state cohomology/gauge separately. NA37 symmetric compact coercive scalar theory can be consumed only after the constrained compact solution operator is actually constructed.

**Proof route:** Continuous Maxwell compact embedding on the gauge subspace (prove regular decomposition/compactness or cite the local PE09 supplier); compact self-adjoint solution operator; discrete compactness plus commuting consistency yields collectively compact convergence, then prove the required spectral perturbation theorem locally if NA37 only supplies a narrower scalar result. Track zero eigenvalues and domain topology.

**Dependencies:** PE09, NA37; local collective compactness/spectral pollution exclusion proof. **B:** cavity modes, nodal spurious modes, repeated eigenvalue cluster, topological zero mode. **Sources:** Monk 2003 eigenvalue chapters; Boffi, *Finite element approximation of eigenvalue problems*, Acta Numerica 19 (2010), 1–120, Maxwell/discrete compactness sections, doi:10.1017/S0962492910000012.

### PE12 — Nonlinear parabolic compactness and monotone evolution

**A:** `nonlinear-parabolic-compactness-and-monotone-evolution`.

**Scope/results:** Prove the Aubin–Lions compactness contract for V compactly embedded H continuously embedded V*, with Lp-in-time V bounds (1<p<infinity) and a positive-exponent V* time-derivative/translate bound; state exactly the strong intermediate-space/time exponent obtained, and its precise piecewise-constant discrete time-translate analogue. Define coercive monotone diffusion with growth matched to p-Laplacian energy (for the H=L2 branch require p>max(1,2d/(d+2)) so W1p embeds compactly in L2) and backward Euler/FEM approximation; prove discrete existence, energy bounds and subsequential convergence/identification by Minty's argument under stated reflexivity and monotonicity. Strong monotonicity/Lipschitz or smooth-solution assumptions give separate quantitative errors; no unconditional smooth rate for degenerate porous-medium fronts.

**Proof route:** Finite-rank compact approximation of V unit ball in H, time translates from the V* derivative, finite-dimensional time compactness and interpolation yield strong L2 compactness; provide endpoint exponents and reconstruction defects. Browder–Minty construction is local if absent: finite Galerkin/Brouwer, weak compactness, monotone graph identification and uniqueness. Apply discrete integration by parts, weak lower semicontinuity and Minty limsup criterion to nonlinear flux.

**Dependencies:** NA36, root reflexivity/Sobolev compactness and choice assumptions, NA34 finite-dimensional BNB only when applicable. **B:** p-Laplacian, porous-medium finite propagation, failure of linear Ritz commutation, time oscillations without derivative control. **Sources:** Simon, *Compact sets in the space Lp(0,T;B)*, Annali Mat. Pura Appl. 146 (1987), 65–96, time-translation compactness theorems, doi:10.1007/BF01762360; Roubicek, *Nonlinear Partial Differential Equations with Applications* (2013), monotone evolution/Galerkin chapters, doi:10.1007/978-3-0348-0513-1.

### PE13 — Finite-volume diffusion on admissible meshes

**A:** `finite-volume-diffusion-and-mimetic-fluxes`.

**Scope/results:** Define admissible orthogonal meshes/transmissibilities for two-point isotropic diffusion, including boundary faces and discontinuous positive coefficients with harmonic face treatment. Prove local conservation, symmetric coercive matrix, discrete Poincare, maximum principle and convergence in a stated reconstructed energy norm. For anisotropic/nonorthogonal meshes define an explicit MPFA/mimetic method and prove its own coercivity/consistency under actual local geometric conditions; TPFA consistency is not claimed universally. Nonlinear monotone diffusion consumes PE12 compactness and identifies the graph under its exact assumptions.

**Proof route:** Flux cancellation gives discrete Green and energy; paths/translation bounds give meshuniform Poincare and compactness (prove geometric mesh conditions actually used); piecewise affine test recovery identifies weak gradients. Consistency errors vanish by orthogonality and regularity; nonlinear limit via Minty. Monotone matrix inverse gives positivity only when off-diagonal signs/irreducibility and boundary anchor are verified.

**Dependencies:** NA23/26/28, PE12; local discrete translation compactness and admissible-mesh interpolation. **B:** orthogonal Voronoi diffusion, nonorthogonal TPFA inconsistency, anisotropic MPFA, heterogeneous interface flux. **Sources:** Eymard–Gallouet–Herbin, *Finite Volume Methods*, Handbook of Numerical Analysis VII (2000), diffusion admissible-mesh, discrete functional inequalities and convergence parts, https://hal.science/hal-02100732; Droniou, *Finite volume schemes for diffusion equations: introduction to and review of modern methods*, M3AS 24 (2014), 1575–1619, https://arxiv.org/abs/1407.1567.

### PE14 — Reaction-diffusion systems, invariants and pattern computation

**A:** `reaction-diffusion-invariants-and-pattern-discretization`.

**Scope/results:** Define semilinear vector reaction-diffusion on bounded/periodic domains, quasi-positive reaction, mass conservation/dissipation and invariant rectangles. Prove positivity/invariant-set preservation for a stated mass-lumped FEM or monotone FV diffusion plus a positive reaction step and actual dt bound; prove mass balance. For smooth bounded solutions prove a finite-time error estimate with reaction Lipschitz constants on a common invariant tube. Linearize about a homogeneous equilibrium and derive continuous versus discrete dispersion relations/Turing criterion using the actual discrete Laplacian spectrum. This is linear instability, not existence of nonlinear stable patterns. Crossdiffusion convergence needs a separately stated entropy/coercivity structure, not componentwise maximum principle.

**Proof route:** M-matrix inverse or convex explicit update, quasi-positive reaction boundary signs, discrete comparison; sum stoichiometric conservation vectors. Error recurrence uses NA36 spatial estimate and time-agent splitting/IMEX with meshuniform operator stability proved for this branch. Fourier/eigenmode diagonalization gives dispersion matrix J-lambda D and its trace/determinant criterion in two species.

**Dependencies:** NA24/36, PE12/13, time-agent IMEX/splitting; local positive mass lumping/nonobtuse mesh theorem if used. **B:** Fisher–KPP, activator/inhibitor two-species, finite-grid Turing shift, positivity failure of consistent mass FEM. **Sources:** Thomee, *Galerkin Finite Element Methods for Parabolic Problems*, 2e (2006), semilinear/mass-lumping chapters, doi:10.1007/3-540-33122-0; Hundsdorfer–Verwer, *Numerical Solution of Time-Dependent Advection-Diffusion-Reaction Equations* (2003), positivity/splitting chapters, doi:10.1007/978-3-662-09017-6.

### PE15 — SUPG, residual stabilization and variational multiscale methods

**A:** `supg-and-residual-based-stabilized-finite-elements`.

**Scope/results:** Define SUPG for stationary convection-diffusion-reaction with explicit inflow/boundary conditions, tau_K scaling, diffusion epsilon>0, and c-div(b)/2 bounded below. Prove consistency, coercivity in the stated streamline-diffusion norm and mesh-dependent error bound retaining epsilon/tau/regularity. Define PSPG/grad-div for equal-order flow and prove a concrete stable bilinear norm estimate under a proved pressure stabilization condition. Define VMS as an exact resolved/unresolved algebraic decomposition and one residual closure; a closure/model assertion is not a proven universal turbulence model.

**Proof route:** Integrate transport by parts with inflow boundary sign; absorb element Laplacian cross terms by NA28 inverse estimate and tau restriction. Bound consistency using the actual residual and interpolate in the stabilized norm. For equal-order pressure control prove the pressure-gradient/local projection lemma and mixed stability; grad-div supplies an additional divergence penalty but does not by itself repair pressure inf-sup. VMS Schur complement follows block elimination; approximation of unresolved inverse has its own defect bound.

**Dependencies:** NA28–30/34, PE06 where nonlinear; local stabilized BNB and inverse-residual estimates. **B:** convection boundary layer, overlarge stabilization, equal-order pressure oscillation, grad-div pressure sensitivity. **Sources:** Roos–Stynes–Tobiska, *Robust Numerical Methods for Singularly Perturbed Differential Equations* (2008), streamline diffusion analysis, doi:10.1007/978-3-540-34467-4; Hughes 1995, CMAME 127, 387–401, VMS decomposition, doi:10.1016/0045-7825(95)00844-9.

### PE16 — Boundary-integral equations and Galerkin BEM

**A:** `boundary-integral-equations-and-galerkin-bem`.

**Scope/results:** Define single/double-layer potentials, boundary traces/jumps, Calderon operators and Galerkin BEM for 3D Laplace on a closed orientable Lipschitz polyhedral boundary. Prove bounded mappings in H±1/2 trace spaces, correct signed jump identities and ellipticity modulo stated constants/kernel; prove unique stabilized formulation and quasi-optimal error under a shape-regular surface family. Treat 2D logarithmic capacity/scaling separately. Helmholtz combined-field extension consumes PE18 uniqueness and carries frequency-dependent inverse bounds. Quadrature and FMM acceleration have separately controlled matrix perturbation error; they are not free exact BEM.

**Proof route:** Build Lipschitz trace/lift and dual normal trace, weak layer potentials by variational transmission, then prove singular-kernel representation agrees and derive jumps by transmission/Green. Positivity of single layer from whole-space energy; quotient/gauge removal, Lax–Milgram and NA29 Galerkin. Surface interpolation in fractional norms via a proved local norm/scaling estimate. For Helmholtz use compact perturbation and a locally proved Fredholm alternative plus uniqueness. Kernel principal-value and jump signs are computed, not memorized.

**Dependencies:** NA28–30, root fundamental solution/Green/compact operator theory under their actual conditions; own Lipschitz fractional trace/duality/transmission suppliers (published C1 trace is insufficient). Consume linear agent QUAD-SING and LIN-FMM for numerical assembly/acceleration. **B:** sphere constant density, jump sign orientation, polyhedral singularity, inexact assembly ledger. **Sources:** Sauter–Schwab, *Boundary Element Methods* (2011), Sobolev traces/layers/coercivity/Galerkin/quadrature chapters, doi:10.1007/978-3-540-68093-2; McLean, *Strongly Elliptic Systems and Boundary Integral Equations* (2000), Chapters 3,6–8.

### PE17 — Curved geometry, mesh generation and conservative transfer

**A:** `curved-mesh-geometry-and-conservative-mesh-transfer`.

**Scope/results:** Define isoparametric cell maps, positive Jacobian/admissibility certificate, shape regularity with bounded map/inverse derivatives, surface metric and geometry approximation. Prove interpolation/scaling and Strang geometry-defect bounds on a stated curved-domain family. Define a concrete 2D mesh-generation/refinement procedure consuming robust predicates and Delaunay primitives; prove only stated angle/termination guarantees with boundary-angle and feature-size hypotheses. Define L2 projection and conservative intersection-volume remapping; prove cell mass conservation, positivity for nonnegative overlap weights, and error from a stated approximation/geometry bound. 3D slivers require independent quality conditions; 2D Delaunay angle facts do not remove them.

**Proof route:** Pull back gradients/forms, estimate Jacobian/cofactor/normal differences and boundary lifting residual. For refinement use packing/feature-size argument with explicit termination preconditions; preserve NA35's distinct refinement complexity contract. Transfer uses exact partition-of-unity intersection measures; numerical clipping consumes certified predicates and returns unresolved if degeneracy cannot be certified. Curved DG metric identities need a proved discrete geometric conservation identity before PE04 extension.

**Dependencies:** NA28/30/35; linear agent GEO-PRED/GEO-DEL, local curved-map inverse/metric bounds and conservative overlap integration. **B:** curved disk, inverted map detection, 3D sliver, moving-grid mass transfer. **Sources:** Ciarlet, *The Finite Element Method for Elliptic Problems* (1978), isoparametric elements/geometry error; Shewchuk, *Delaunay Refinement Algorithms for Triangular Mesh Generation*, Computational Geometry 22 (2002), 21–74, doi:10.1016/S0925-7721(01)00047-5; Farrell–Maddison 2011, CMAME 200, 89–100, doi:10.1016/j.cma.2010.07.015, conservative transfer construction.

### PE18 — Exterior waves, absorbing boundaries and PML

**A:** `exterior-wave-problems-absorbing-boundaries-and-pml`.

**Scope/results:** Define exterior Helmholtz radiation condition and obstacle boundary data for a specified smooth/Lipschitz obstacle subclass. Prove uniqueness via Rellich identity/outgoing expansion and existence for the chosen combined-field or truncated variational formulation. Define local impedance absorbing boundaries and an exact modal Dirichlet-to-Neumann map for a sphere/circle; prove the actual truncation/reflection error. Define complex-stretch PML first on a Cartesian constant-coefficient mode branch; prove perfect matching and exponential decay there. A finite PML FEM convergence theorem requires the stated obstacle/stretch/parameter stability result and a separate exponential truncation bound; do not universalize the plane-wave calculation to every material or grazing/evanescent mode.

**Proof route:** Green imaginary part and outgoing expansion prove Rellich uniqueness; combined-field jump relations + Fredholm give existence. Modal separation computes DtN and artificial-boundary reflection. Complex-coordinate substitution computes matching, including branch of longitudinal wave number; bound damping away from the declared excluded angles, then coercive/inf-sup perturbation for truncation and discretization. State Helmholtz pollution restrictions on kh and degree explicitly for any error theorem.

**Dependencies:** NA29/30/38, PE16 layer mappings for the BIE branch; local radiation/Rellich/unique-continuation and PML inf-sup proofs. To avoid cycle, PE16 supplies Laplace/Helmholtz layer mapping without claiming exterior uniqueness; PE18 supplies exterior uniqueness, then a later result homed PE18 proves combined-field solvability consuming PE16. **B:** outgoing sphere, impedance reflection, PML normal/grazing incidence, resonance at insufficient damping. **Sources:** Colton–Kress, *Inverse Acoustic and Electromagnetic Scattering Theory*, 3e (2013), direct acoustic scattering/Rellich chapters, doi:10.1007/978-1-4614-4942-3; Berenger 1994, JCP 114, 185–200, doi:10.1006/jcph.1994.1159 (definition); Collino–Monk 1998, SIAM JSC 19, 2061–2090, doi:10.1137/S1064827596301406 (Cartesian PML analysis, verify precise hypotheses in reading).

### PE19 — Linear elasticity, nearly incompressible limits and locking

**A:** `elasticity-near-incompressibility-and-locking-free-discretization`.

**Scope/results:** Define small-strain elasticity with bounded positive shear modulus and nonnegative Lamé parameter, boundary conditions removing rigid motions. Prove conforming displacement energy estimate using NA34 Korn; identify lambda-dependent constants. Define displacement-pressure mixed elasticity and prove a uniform-in-lambda stability/error theorem for a concrete stable pair, carrying the pressure mean constraint and compressibility term. Define algebraic rigid-body nullspace handling. Do not claim nonlinear finite-strain existence or injectivity from this linear model.

**Proof route:** Coercive shear energy + Korn/Lax–Milgram; decompose volumetric strain and apply NA34 inf-sup, including the lambda=infinity constraint limit; derive a uniform mixed norm estimate and approximation. Construct a standard low-order displacement locking example quantitatively or as a bounded best-approximation obstruction with exact mesh assumptions. Heterogeneous coefficient robustness requires weighted estimates separately.

**Dependencies:** NA28/29/34; local tensor symmetry/rigid-motion quotient and mixed compressibility lemma. **B:** cantilever manufactured displacement, rigid translation nullspace, nearly incompressible locking versus mixed pair. **Sources:** Brenner–Scott, *The Mathematical Theory of Finite Element Methods*, 3e (2008), elasticity/locking chapters, doi:10.1007/978-0-387-75934-0; Boffi–Brezzi–Fortin 2013 elasticity applications.

### PE20 — Variational inequalities and spatial contact discretization

**A:** `variational-inequality-and-contact-finite-elements`.

**Scope/results:** Reuse `def-closed-convex-obstacle-set-and-variational-inequality`, `thm-stampacchia-variational-inequality` and `thm-lipschitz-stability-of-strongly-monotone-variational-inequalities` with Countable Choice for continuous VI existence/uniqueness/stability. Prove the missing Falk-type Galerkin error with explicit feasible-set approximation/consistency defect. Define a conforming nodal obstacle scheme only under regularity ensuring nodal constraints approximate the continuum feasible set. For frictionless linear-elastic unilateral contact define trace gap/multiplier cone, a stable mortar/contact discretization and complementarity residual; prove its actual discrete stability and consistency. Friction/Coulomb quasi-variational claims require additional assumptions and proofs, not convex VI reuse.

**Proof route:** Consume the existing projection/Stampacchia suppliers rather than reprove them. Test continuous/discrete inequalities against admissible comparisons, add and bound obstacle mismatch. Contact trace continuity, cone duality and discrete inf-sup for the selected multiplier pair must be local. Active-set/semismooth Newton consumes optimization-agent procedure and proves local convergence only with nondegeneracy/generalized-Jacobian conditions.

**Dependencies:** NA28–30/34, root direct method/convex VI under actual conditions, PE19; time agent owns impact/contact trajectory methods. **B:** 1D obstacle/free boundary, nonfeasible interpolation, contact patch test, changing active set. **Sources:** Falk, *Error Estimates for the Approximation of a Class of Variational Inequalities*, Math. Comp. 28 (1974), 963–971, doi:10.1090/S0025-5718-1974-0391502-8; Kikuchi–Oden, *Contact Problems in Elasticity* (1988), contact mixed approximation chapters, doi:10.1137/1.9781611970845.

### PE21 — Homogenization, multiscale FEM and heterogeneous media

**A:** `homogenization-and-multiscale-finite-element-methods`.

**Scope/results:** For uniformly elliptic periodic scalar coefficients define cell correctors, effective tensor and two-scale expansion; prove symmetry/ellipticity and homogenization for the specified bounded-domain/data branch. Prove a quantitative corrector estimate with its boundary-layer/regularity hypotheses. Define a concrete MsFEM or FE-HMM local cell procedure with micro/macro meshes and sampling domains; prove consistency/error separating macro approximation, micro solve and resonance/sampling terms. Do not assert uniform accuracy at arbitrary scale ratios or nonperiodic coefficients. Include localized orthogonal decomposition as a distinct construction with explicit quasi-interpolant and patch decay assumptions if selected.

**Proof route:** Cell Lax–Milgram and energy minimization; weak/two-scale compactness proved locally, oscillating-test identification and boundary-cutoff corrector. MsFEM Strang estimate compares local computed effective forms with exact homogenized form; prove cell approximation and resonance bound before using it. LOD requires cutoff/Caccioppoli and stable decomposition for exponential corrector localization; no heuristic decay premise disguised as theorem.

**Dependencies:** NA28–30/35, PE13 for conservative heterogeneous discretization examples; local periodic Poincare, two-scale compactness and corrector cutoffs. **B:** layered effective tensor, micro/macro error separation, resonance error, high-contrast failure of ordinary uniform constants. **Sources:** Cioranescu–Donato, *An Introduction to Homogenization* (1999), periodic elliptic cell/corrector chapters; Hou–Wu, JCP 134 (1997), 169–189, doi:10.1006/jcph.1997.5682; Abdulle 2005, SIAM MMS 4, 722–738, doi:10.1137/040607137, FE-HMM error hypotheses to verify.

### PE22 — ALE, interfaces and partitioned multiphysics coupling

**A:** `ale-interface-and-partitioned-multiphysics-discretization`.

**Scope/results:** Define ALE domain maps with uniformly positive Jacobian, Reynolds transport identity and discrete geometric conservation law; prove free-stream preservation and a conservative scalar transport estimate on a stated moving mesh. Define a linear fluid-structure or diffusion-transmission model with interface continuity and balanced normal flux/traction. Prove monolithic energy balance and a concrete Robin/partitioned time algorithm energy bound under explicit coupling parameters; demonstrate added-mass instability of a specified naive Dirichlet–Neumann recurrence. This is a conditional linear coupling theorem, not general nonlinear FSI well-posedness.

**Proof route:** Change variables in weak form, differentiate Jacobian using Jacobi's identity and match mesh flux quadrature. Interface terms cancel only for paired trace spaces and signs. Derive coupled block energy, then interface Schur-complement iteration; show contractivity or failure by spectral calculation. Curved interpolation/transfer defects consume PE17, and time-agent splitting contributes a separately bounded splitting residual. Full nonlinear moving-domain convergence needs branch/no-self-intersection and uniform ALE regularity, stated explicitly.

**Dependencies:** NA30/34/36, PE06/19, PE17, time-agent splitting; local Reynolds transport/Sobolev pullback and interface trace lifting. **B:** expanding mesh constant state, two-domain heat flux balance, elastic piston added-mass recurrence. **Sources:** Donea–Huerta–Ponthot–Rodriguez-Ferran, *Arbitrary Lagrangian–Eulerian Methods*, Encyclopedia of Computational Mechanics (2004), ALE/GCL sections, doi:10.1002/0470091355.ecm009; Causin–Gerbeau–Nobile 2005, CMAME 194, 4506–4527, doi:10.1016/j.cma.2004.12.005, added-mass model analysis; interface energy-stable Robin scheme source must be located/read for the exact selected method before acceptance.

### PE23 — Phase-field and dissipative gradient-flow computation

**A:** `phase-field-and-energy-dissipative-discretization`.

**Scope/results:** Define Allen–Cahn and Cahn–Hilliard as mathematical gradient-flow systems with chosen polynomial potential, boundary data and finite-energy initial class. Prove a specific convex-splitting backward scheme has a unique finite-dimensional minimizer/solution, discrete energy decay and CH mass conservation. Prove mesh/time convergence under explicit compactness/growth/dimension assumptions using PE12; quantitative errors are conditional on smooth exact solutions and epsilon-dependent constants. Define stabilized/SAV variants separately; decay of an auxiliary modified energy is not automatically decay of original physical energy or maximum-principle preservation.

**Proof route:** Convex/concave potential inequalities plus discrete gradient/negative-norm identity; coercive strictly convex minimization for step existence. Uniform energy bounds, discrete chemical-potential estimates, compactness and polynomial nonlinearity integrability identify the limit. In CH use mass-zero inverse Laplacian with proved Poincare/gauge. State dimension restrictions for quartic growth and provide required Sobolev embeddings. Sharp-interface epsilon→0 is a different theorem not inferred from fixed-epsilon convergence.

**Dependencies:** NA29/36, PE12/13, time-agent gradient/splitting procedures; local polynomial Nemytskii continuity and zero-mean inverse Laplacian. **B:** CH mass/energy ledger, AC front, modified-energy/original-energy distinction, unresolved interface thickness. **Sources:** Elliott–French–Milner, *A second order splitting method for the Cahn–Hilliard equation*, Numer. Math. 54 (1989), 575–590, doi:10.1007/BF01396363; Shen–Yang, *Numerical approximations of Allen–Cahn and Cahn–Hilliard equations*, Discrete Contin. Dyn. Syst. 28 (2010), 1669–1691, doi:10.3934/dcds.2010.28.1669. Exact scheme/source theorem matching is mandatory.

## Supplier ownership and order

All PE pages are numerical-analysis A/B pairs in this frontier; no new separate intake is requested. Small missing analytic lemmas are homed on the consuming A page named above before their first consumer, or in the exact amended existing pair. A pair can contain multiple supplier/result items and internal dependency order. Root may split a particularly large analytic foundation into an additional same-frontier A/B pair if its actual item inventory needs it; never drop the proof obligations to meet a pair cap.

A valid partial order (cross-agent prerequisites inserted earlier): NA28 amendment → PE08 → PE09 → PE10/11; NA34/36 → PE12 → PE06 → PE07; PE12 → PE13 → PE14/23; NA26/27 → PE01 → PE02 → PE03 → PE04/05; NA28/30 → PE17 → PE22; NA34 → PE19 → PE20/22; NA28/30 → PE16 → PE18; NA28/30 + new homogenization lemmas → PE21. PE15 consumes NA34 for its flow branch and PE06 only for explicitly nonlinear error results. Linear PE07 projection/Schur results precede optional PE06-dependent nonlinear result, so no opposite page-level edge should be introduced. PE09 consumes PE08 only for shared H(div)/Piola foundations; PE08 does not consume PE09.

PE16 Helmholtz mapping can be authored without PE18 exterior uniqueness; homing combined-field solvability in PE18 avoids a PE16↔PE18 cycle. Generic direct/scattering integral equations belong to the physics/chemistry agent; singular quadrature/FMM to linear/approximation agent. Mesh predicates/Delaunay belong to that agent; curved metrics/ALE and FEM mesh-transfer here. Time methods, DAE, event/contact trajectories belong to the time agent; spatial contact/VI here. Particle/SPH/PIC/vortex and network/metric-graph PDE belong to biology/crossdomain agent. Root should deduplicate titles/claims across these interfaces, not remove their proof contracts.

## Explicit noncoverage that must not be mistaken for omissions

This engineering packet does not replace other agents' important methods: optimization/PDE-constrained inverse/UQ, FFT/FMM fast solvers, model reduction/POD, stochastic PDE, particle/kinetic methods, integral Nyström, DAE/IMEX/stiff integration, and certified quadrature. Those must be integrated from their assigned owners in this same frontier. Compressible viscous flow is supplied by PE24 below; it consumes the conservative inviscid and diffusive interfaces but has its own entropy/boundary hypotheses.

### PE24 — Compressible viscous flow and entropy-stable viscous fluxes

**A:** `compressible-viscous-flow-and-entropy-stable-fluxes`.

**Scope/results:** Define compressible Navier–Stokes–Fourier as a mathematical balance law with positive density/temperature, ideal-gas constitutive functions, nonnegative shear/bulk viscosity and heat conductivity, and specified periodic or entropy-compatible wall boundaries. Derive the continuous entropy identity for smooth positive states. Define a concrete mixed gradient/viscous DG or SBP flux discretization with entropy variables. Prove consistency, global conservation under periodic data and semidiscrete entropy dissipation under the stated positive-semidefinite viscous matrix and boundary flux. Define one finite fully discrete algorithm using the time agent's method; positivity and fully discrete entropy are separate theorems, and may require PE03 limiting plus a proved compatible time discretization. Prove a smooth-solution consistency/error estimate on a compact positive-state tube only when the exact discrete coercivity/linearized stability bound is proved. Do not claim arbitrary-shock or global 3D continuum convergence.

**Proof route:** Differentiate the mathematical entropy and express viscous flux as K(U) grad(v), deriving symmetry/positive semidefiniteness with its density/temperature factors. Sum local integration by parts, pair the gradient equation with viscous variables, and complete dissipative volume/face squares; compute wall entropy flux explicitly. Interpolate a smooth solution and derive the discrete error identity, controlling nonlinear coefficients by tube bounds, scheme coercivity and Gronwall. Positivity cannot be inferred from entropy dissipation alone; prove the selected limiter/time-step compatibility or retain it as a mandatory unresolved authoring obligation before claiming a fully discrete theorem.

**Dependencies:** PE01/03/04, NA28/30, PE13 where viscous reconstruction matches; local thermodynamic convexity and viscous entropy-matrix factorization lemmas. **B:** periodic viscous manufactured solution, Couette/thermal wall balance, inviscid-versus-viscous entropy budget, near-vacuum failure. **Sources:** Carpenter–Fisher–Nielsen–Frankel, *Entropy Stable Spectral Collocation Schemes for the Navier–Stokes Equations: Discontinuous Interfaces*, SIAM JSC 36 (2014), B835–B867, doi:10.1137/130932193, viscous flux/interface entropy proof (full reading outstanding); Gassner–Winters–Kopriva, *Split form nodal discontinuous Galerkin schemes with summation-by-parts property for the compressible Euler equations*, JCP 327 (2016), 39–66, doi:10.1016/j.jcp.2016.09.013, inviscid comparison only.
