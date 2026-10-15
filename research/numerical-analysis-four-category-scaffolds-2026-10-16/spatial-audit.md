# Spatial-category prose audit

**Status:** research-plan repair only. This document records scope/interface review and proof designs, not executable work, source reading, mathematical acceptance of planned items, or build authorization.

## Scope and evidence

The repaired [spatial plan](../plan-numerical-spatial-track.md) covers all 55 preserved records in `spatial-inventory.json`. I read `CLAUDE.md`, `README.md`, and `SCHEMA.md` fully; compared the complete 55-record spatial inventory, the 178-pair comprehensive inventory, `partition.json`, `cross-category-interfaces.json`, the unified supplier-closure report, its interface-obligations and local-obligations records, and the selected combined 107-pair provisional closure. Pair keys in `requires` are same-frontier A-page suppliers; published dependencies are canonical page/item interfaces. The partition is the authority for that distinction; categories are thematic and the unified pair DAG controls future build closure.

I inspected the actual native bodies for all 39 supplier item records whose `consumers` include a spatial pair. Their native-file SHA-256 values matched the supplier-closure navigation snapshot at this audit (39/39). This verifies which literal statements were reviewed; it does **not** recertify those proofs. I also inspected the direct scalar-conservation, transport/Picard–Lindelöf, ODE-extension, characteristic-dependence, heat-equation, HJ, obstacle, Fredholm, Riesz, and exact linear-algebra interfaces used by spatial pages. No external literature source was read; retained URLs remain acquisition locators only.

Two focused repair/review passes were used. Pass one replaced generated ownership placeholders with pair-specific definitions, hypotheses, well-definedness arguments and proof routes, while reconstructing dependency blocks from the authoritative pair graph. Pass two checked actual supplier bodies and cross-category contracts, selected concrete representatives where defensible, and retained explicit branch-specific holds where the method or theorem is still unresolved.

## Full pair coverage

Each row below received a scope/procedure and proof-closure review in the plan. Its original sound scope, approved amendments and examples remain present; the repaired local-closure paragraph is not an accepted future item proof.

| Pair key | A page | B page |
| --- | --- | --- |
| `NA-19` | `linear-scheme-stability-and-lax-equivalence` | `linear-scheme-stability-and-lax-equivalence-examples` |
| `NA-26` | `conservative-finite-volume-weak-limits` | `conservative-finite-volume-weak-limits-examples` |
| `NA-23` | `elliptic-finite-difference-methods` | `elliptic-finite-difference-methods-examples` |
| `NA-27` | `monotone-finite-volume-entropy-convergence` | `monotone-finite-volume-entropy-convergence-examples` |
| `NA-28` | `finite-element-meshes-and-interpolation` | `finite-element-meshes-and-interpolation-examples` |
| `PE01` | `riemann-solvers-for-hyperbolic-systems` | `riemann-solvers-for-hyperbolic-systems-examples` |
| `NA-24` | `parabolic-finite-difference-methods` | `parabolic-finite-difference-methods-examples` |
| `NA-29` | `ceas-lemma-and-aubin-nitsche-error-estimates` | `ceas-lemma-and-aubin-nitsche-error-estimates-examples` |
| `NA-34` | `mixed-finite-elements-and-stokes-stability` | `mixed-finite-elements-and-stokes-stability-examples` |
| `PE02` | `high-resolution-tvd-eno-and-weno-methods` | `high-resolution-tvd-eno-and-weno-methods-examples` |
| `NA-25` | `hyperbolic-finite-difference-methods` | `hyperbolic-finite-difference-methods-examples` |
| `NA-36` | `parabolic-finite-element-methods` | `parabolic-finite-element-methods-examples` |
| `NA-37` | `finite-element-eigenvalue-approximation` | `finite-element-eigenvalue-approximation-examples` |
| `PE03` | `invariant-domain-and-entropy-stable-conservative-schemes` | `invariant-domain-and-entropy-stable-conservative-schemes-examples` |
| `PE08` | `mixed-hdiv-fluxes-and-darcy-discretization` | `mixed-hdiv-fluxes-and-darcy-discretization-examples` |
| `PE19` | `elasticity-near-incompressibility-and-locking-free-discretization` | `elasticity-near-incompressibility-and-locking-free-discretization-examples` |
| `PE04` | `hyperbolic-dg-and-summation-by-parts-discretizations` | `hyperbolic-dg-and-summation-by-parts-discretizations-examples` |
| `PE05` | `well-balanced-balance-laws-and-wet-dry-fronts` | `well-balanced-balance-laws-and-wet-dry-fronts-examples` |
| `PE09` | `discrete-de-rham-complexes-and-edge-elements` | `discrete-de-rham-complexes-and-edge-elements-examples` |
| `PE12` | `nonlinear-parabolic-compactness-and-monotone-evolution` | `nonlinear-parabolic-compactness-and-monotone-evolution-examples` |
| `XD-08` | `interacting-particle-mean-field-and-vortex-blob-error` | `interacting-particle-mean-field-and-vortex-blob-error-examples` |
| `XD-09` | `graph-diffusion-and-metric-network-pde-numerics` | `graph-diffusion-and-metric-network-pde-numerics-examples` |
| `PE06` | `energy-stable-incompressible-navier-stokes-discretization` | `energy-stable-incompressible-navier-stokes-discretization-examples` |
| `PE10` | `yee-fdtd-and-transient-maxwell-discretization` | `yee-fdtd-and-transient-maxwell-discretization-examples` |
| `PE11` | `maxwell-eigenproblems-and-compatible-vector-waves` | `maxwell-eigenproblems-and-compatible-vector-waves-examples` |
| `PE13` | `finite-volume-diffusion-and-mimetic-fluxes` | `finite-volume-diffusion-and-mimetic-fluxes-examples` |
| `PE25` | `overlapping-schwarz-and-stable-subspace-decompositions` | `overlapping-schwarz-and-stable-subspace-decompositions-examples` |
| `PE27` | `nonlinear-full-approximation-multigrid` | `nonlinear-full-approximation-multigrid-examples` |
| `XD-06` | `meshfree-kernel-approximation-and-conservative-sph` | `meshfree-kernel-approximation-and-conservative-sph-examples` |
| `NA-30` | `variational-crimes-and-strang-lemmas` | `variational-crimes-and-strang-lemmas-examples` |
| `NA-38` | `spectral-collocation-and-galerkin-methods` | `spectral-collocation-and-galerkin-methods-examples` |
| `PC-NYST` | `nystrom-product-integration-and-fredholm-error` | `nystrom-product-integration-and-fredholm-error-examples` |
| `PE07` | `projection-and-pressure-correction-for-incompressible-flow` | `projection-and-pressure-correction-for-incompressible-flow-examples` |
| `PE26` | `substructuring-feti-dp-and-bddc-preconditioners` | `substructuring-feti-dp-and-bddc-preconditioners-examples` |
| `NA-31` | `crouzeix-raviart-finite-elements` | `crouzeix-raviart-finite-elements-examples` |
| `NA-32` | `nitsche-methods-for-weak-boundary-enforcement` | `nitsche-methods-for-weak-boundary-enforcement-examples` |
| `NA-33` | `discontinuous-galerkin-methods` | `discontinuous-galerkin-methods-examples` |
| `NA-35` | `adaptive-finite-element-methods` | `adaptive-finite-element-methods-examples` |
| `PC-SCAT` | `volume-integral-scattering-and-partial-wave-error` | `volume-integral-scattering-and-partial-wave-error-examples` |
| `PE15` | `supg-and-residual-based-stabilized-finite-elements` | `supg-and-residual-based-stabilized-finite-elements-examples` |
| `PE16` | `boundary-integral-equations-and-galerkin-bem` | `boundary-integral-equations-and-galerkin-bem-examples` |
| `PE20` | `variational-inequality-and-contact-finite-elements` | `variational-inequality-and-contact-finite-elements-examples` |
| `PE24` | `compressible-viscous-flow-and-entropy-stable-fluxes` | `compressible-viscous-flow-and-entropy-stable-fluxes-examples` |
| `PE30` | `least-squares-fem-and-practical-dpg` | `least-squares-fem-and-practical-dpg-examples` |
| `XD-07` | `particle-in-cell-and-particle-mesh-kinetic-methods` | `particle-in-cell-and-particle-mesh-kinetic-methods-examples` |
| `PE14` | `reaction-diffusion-invariants-and-pattern-discretization` | `reaction-diffusion-invariants-and-pattern-discretization-examples` |
| `PE17` | `curved-mesh-geometry-and-conservative-mesh-transfer` | `curved-mesh-geometry-and-conservative-mesh-transfer-examples` |
| `PE18` | `exterior-wave-problems-absorbing-boundaries-and-pml` | `exterior-wave-problems-absorbing-boundaries-and-pml-examples` |
| `PE21` | `homogenization-and-multiscale-finite-element-methods` | `homogenization-and-multiscale-finite-element-methods-examples` |
| `PE23` | `phase-field-and-energy-dissipative-discretization` | `phase-field-and-energy-dissipative-discretization-examples` |
| `PE22` | `ale-interface-and-partitioned-multiphysics-discretization` | `ale-interface-and-partitioned-multiphysics-discretization-examples` |
| `PE28` | `hp-finite-elements-and-spectral-element-methods` | `hp-finite-elements-and-spectral-element-methods-examples` |
| `PE29` | `isogeometric-galerkin-methods` | `isogeometric-galerkin-methods-examples` |
| `PE31` | `semi-lagrangian-characteristic-transport` | `semi-lagrangian-characteristic-transport-examples` |
| `PE32` | `monotone-hjb-schemes-and-policy-iteration` | `monotone-hjb-schemes-and-policy-iteration-examples` |

Coverage check: 55 inventory records, 55 pair sections, 55 scopes, 55 proof-construction sections, 55 example sections, 55 prerequisite blocks and 55 local well-definedness/proof-closure paragraphs. The plan’s same-frontier key lists match each record’s authoritative `requires` keys exactly (0 key mismatches).

## Actual published supplier bodies inspected

The following table lists every actual-seed supplier record with a spatial consumer. “Hash match” is a snapshot integrity check only; all mathematical use is limited to the item body, not the containing page title or a citation.

| Published item | Spatial consumers | Native source hash |
| --- | --- | --- |
| `def-b-spline-space-and-basis` | `PE29` | match |
| `def-block-lu-factorisation` | `PE07` | match |
| `def-chebyshev-polynomials-first-and-second-kind` | `NA-38` | match |
| `def-closed-convex-obstacle-set-and-variational-inequality` | `PE20` | match |
| `def-dependent-choice` | `NA-19` | match |
| `def-half-relaxed-limits` | `PE32` | match |
| `def-laplacian-matrix-of-a-finite-simple-graph` | `XD-09` | match |
| `def-linear-transport-equation-and-its-characteristic-flow` | `PE31` | match |
| `def-local-spline-quasi-interpolant` | `NA-28` | match |
| `def-oriented-incidence-matrix-of-a-graph` | `XD-09` | match |
| `def-sobolev-space-wkp-and-its-norm` | `NA-28` | match |
| `def-viscosity-subsolution-and-supersolution` | `PE32` | match |
| `def-wkp-zero-as-a-sobolev-closure` | `NA-28` | match |
| `lem-square-integrable-kernels-define-bounded-compact-integral-operators` | `PC-SCAT` | match |
| `thm-block-lu-factorisation-via-an-invertible-leading-block` | `PE07`, `PE26` | match |
| `thm-brouwer-fixed-point-theorem` | `PE06`, `PE12` | match |
| `thm-comparison-for-first-order-hamilton-jacobi-equations` | `PE32` | match |
| `thm-courant-fischer-minimax-for-elliptic-eigenvalues` | `NA-37` | match |
| `thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator` | `NA-37` | match |
| `thm-euclidean-implicit-function-theorem` | `PE01`, `PE27` | match |
| `thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem` | `NA-29` | match |
| `thm-existence-of-bounded-kruzhkov-entropy-solutions` | `NA-27` | match |
| `thm-fredholm-alternative-for-identity-minus-compact` | `PC-NYST`, `PC-SCAT` | match |
| `thm-global-h-two-dirichlet-regularity` | `NA-29` | match |
| `thm-gronwall-integral-inequality` | `XD-08` | match |
| `thm-kruzhkov-local-l1-contraction` | `NA-27` | match |
| `thm-laplacian-is-the-oriented-incidence-product` | `XD-09` | match |
| `thm-lax-milgram` | `NA-29`, `NA-34`, `PE16`, `PE19`, `PE21` | match |
| `thm-lipschitz-stability-of-strongly-monotone-variational-inequalities` | `PE20` | match |
| `thm-normal-equations-square-the-spectral-condition-number` | `PE30` | match |
| `thm-poincare-inequality-for-w-one-p-zero` | `NA-28` | match |
| `thm-riesz-representation-for-hilbert-space` | `PE30` | match |
| `thm-sharp-trace-theorem-for-w-one-p` | `NA-28` | match |
| `thm-sobolev-spline-quasi-interpolant-rate` | `NA-28` | match |
| `thm-spectral-theorem-for-compact-self-adjoint-operators` | `NA-37`, `PE11` | match |
| `thm-spline-polynomial-reproduction` | `PE29` | match |
| `thm-stampacchia-variational-inequality` | `PE20` | match |
| `thm-symmetric-elliptic-form-operator-is-self-adjoint-with-compact-resolvent` | `NA-37` | match |
| `thm-uniform-boundedness-principle` | `NA-19` | match |

### Literal interface limits carried into the plan

- **ODE and event interfaces:** `def-linear-transport-equation-and-its-characteristic-flow` names a characteristic flow but does not prove it exists. PE31 adds Picard–Lindelöf on a locally Lipschitz field, the compact-interior extension lemma, and the C1-velocity Jacobian/dependence condition locally. The extension theorem requires a compact tube inside the ODE domain. P-NUM-ODE-02 supplies finite-time global error only after local defect, one-step stability and invariant-tube bounds are proved. T10 is restricted to isolated transverse guards with `|g_t+g_y f| >= nu > 0`, finitely many separated events, Lipschitz resets and certified brackets; grazing, simultaneous events and Zeno accumulation are excluded.
- **Scalar conservation laws:** the published bounded Kruzhkov existence theorem is for `u0 in L1 intersect L-infinity` and carries DC+CC; the local contraction item carries CC. NA27 uses global existence only on that data branch. Its bounded, nonintegrable BV branch must establish its own local-limit existence and initial trace before invoking local contraction. The weak-solution definition gives weak PDE passage, not compactness or entropy admissibility.
- **Sobolev/FE suppliers:** the actual W^{1,p} and W^{1,p}_0 definitions and Poincare theorem carry CC; the published sharp trace/Green theorem is for bounded C1 domains and carries AC. It supplies no simplex/polyhedral, H(div), or H(curl) trace theorem. NA28 proves reference-simplex traces, Piola identities and commuting maps locally. The global H2 Dirichlet theorem requires a bounded C2 domain, W^{1,infinity} coefficients and CC, and its estimate retains the L2(u) term; NA29 carries those exact limits.
- **Existence, VI and spectral interfaces:** Lax–Milgram/weak Poisson imports carry CC; the obstacle-set definition carries AC, while Stampacchia and strongly-monotone VI stability carry CC. PE20 states both. The symmetric elliptic compact-resolvent/min-max and compact self-adjoint spectral branches used by NA37 carry AC+CC; multiplicities are handled by invariant-subspace gaps, not selected eigenvectors. The real-space theorem is not extended to nonsymmetric or complex problems.
- **Kernel/Fredholm interfaces:** the square-integrable-kernel theorem is AC and applies on probability spaces. The Fredholm alternative is AC. PC-NYST stays on `C([a,b])`. PC-SCAT locally transports the Hilbert–Schmidt bound: for `M=mu(X)` with `0<M<infinity`, `nu=mu/M` and `k_tilde=M k` give the same integral operator; L2 norms scale by `sqrt(M)`, and the normalized kernel L2 norm equals the original finite-measure product norm. For distinct source/target measures use the `sqrt(M_source M_target)` factor; zero-measure quotient spaces are trivial and require no division.
- **HJ interfaces:** the published first-order comparison theorem requires bounded USC subsolutions/LSC supersolutions and initial order on R^d with its global Lipschitz Hamiltonian bounds, or the separate compact-cylinder modulus/boundary hypotheses. The periodic finite-control branch extends its coefficients/data periodically to R^d and verifies the former. The half-relaxed-limit definition is set-based, but its sequential recovery characterization imports CC; PE32 carries CC for that proof.
- **Other exact bodies:** Brouwer is used only on its finite-dimensional compact convex hypotheses. The graph incidence/Laplacian items give unweighted graph identities; XD09 proves weighted zero-conductance and metric-graph extensions locally. Riesz representation in PE30 carries CC. The normal-equations theorem states condition-number squaring; it gives no stable implementation claim. The oriented graph Laplacian theorem does not alone imply a weighted network or metric-graph PDE theorem.

## Cross-category supplier contracts

These exact pair-key edges are taken from `cross-category-interfaces.json` and checked against the spatial records' `requires` arrays. Each key is a planned A-page in the named owner category, not a published library item.

| Supplier key | Spatial consumer(s) | Exact imported contract and limit |
| --- | --- | --- |
| `NA-02` | PE30 | Named finite-precision arithmetic/backward bounds only under the no-overflow/underflow or separately bounded range premises; successful-factorization conditions only. |
| `NA-03` | XD07, XD09 | CSR stored-entry operation/storage counts and canonical matrix-free access; no runtime/bandwidth claim. |
| `NA-04` | NA25 | Named stationary splitting criteria under their spectral-radius hypotheses; norm contraction is sufficient only and nonnormal transient growth remains. |
| `NA-06` | PE07, PE25, PE26 | Fixed ordering/pattern ILU(0), zero-pivot failure, and exact residual-map distinctions; no generic flexible-GMRES rate. |
| `NA-07` | PE25, PE27 | Galerkin multigrid contraction conditional on levelwise smoothing/approximation constants; mesh-independent rate only if those constants are uniform. |
| `NA-10` | NA28, NA38, PE02, PE28, PE31, XD06 | Distinct-node polynomial/barycentric interpolation and its exact remainder/conditioning hypotheses; no spline transfer or unsupported node-reuse claim. |
| `NA-11` | NA38 | Chebyshev root/Lobatto node and Lebesgue/best-approximation bounds with the stated node/norm conventions. |
| `NA-12` | NA30, NA38, PC-NYST, PE28, XD06, XD08 | Midpoint/trapezoid/Simpson and composite-rule errors under their grid/parity/derivative-norm hypotheses; summation rounding belongs to NA02. |
| `NA-13` | NA30, NA38, PC-NYST | Gaussian rule guarantees only for the named weight/rule/hypothesis; no arbitrary weighted-rule accuracy. |
| `PC-SFUN` | PC-SCAT | Stable scaled spherical-Bessel evaluation only under its argument/order/recurrence contract; it does not certify scattering quadrature or physical uniqueness. |
| `QUAD-SING` | PE16 | Named singular/infinite-interval quadrature with its specific transformed-integrand remainder conditions; no universal kernel quadrature claim. |
| `LIN-FMM` | PE16 | Multipole expansion/truncation error for the stated geometry/separation/order; acceleration is separately perturbed from exact BEM. |
| `GEO-PRED`, `GEO-DEL` | PE17 | Robust predicates/Delaunay primitives only under their finite-precision and geometric-degeneracy statuses; they do not by themselves prove mesh-quality or sliver bounds. |
| `APP-SPLINE` | PE29 | Exact spline approximation/reproduction bounds for the named knot/multiplicity and norm regime; mapped NURBS estimates remain PE29-local. |
| `NA-15` | PE04, XD06, XD07, XD08 | RK tableau/order supplier. SSPRK(3,3) transfers an invariant/functional bound only if the forward-Euler map has it at the stated FE step; SSP coefficient one. RKC applies to self-adjoint nonpositive linear operators; nonlinear fixed-s/fixed-T RKC2 order two needs a compact admitted-stage tube. No generic nonlinear SSP/positivity. |
| `NA-22` | XD06, XD07, XD08 | Canonical leapfrog/Verlet reversibility, symplecticity and volume preservation on a verified separable Hamiltonian branch; not a PDE convergence or exact-energy theorem. Modified energy needs analytic near-identity/compact hypotheses. |
| `P-NUM-ODE-01` | XD08 | One-step local defect only for the named method and its smoothness/tube assumptions; the spatial consumer proves its own field regularity. |
| `P-NUM-ODE-02` | PE31, XD08 | Finite-time global error only after local defect, one-step stability and compact invariant tube are proved in the consumer. |
| `XD-01` | XD09 | Finite-generator master-equation interface only; XD09 locally proves weighted graph and metric-edge extensions. |
| `T04` | PE14, PE22, PE23 | ARS(2,2,2) tableau with `gamma=1-1/sqrt(2)`, `delta=1-1/(2 gamma)` and solvable selected implicit stages. Stiff stability is test-equation/sector specific; Lie/Strang order needs exact common-domain subflows and commutator regularity. No generic PDE, positivity or energy result. |
| `T10` | PE31 | Isolated transverse guards with `|g_t+g_y f| >= nu > 0`, positive event separation, Lipschitz resets and certified brackets; no grazing, simultaneous events or Zeno. |
| `NA-09` | PE01, PE27 | Local Newton only on an invariant neighborhood with invertible Jacobian, Lipschitz derivative and bounded inverse; finite-budget solver reports singular/domain/budget statuses, with no arbitrary-start/global rate. PE01 owns pressure-root brackets; PE27 owns coarse-branch derivative bounds. |

The selected combined provisional closure contains 107 pairs, 11 spatial keys: NA-19, NA-23, NA-28, NA-24, NA-29, NA-25, NA-36, XD-08, NA-30, NA-37, NA-38. A check of those 11 records found no missing `requires` edge to a same-frontier key outside the 107 selected keys. This is pair-dependency closure evidence only; it is not independent category execution readiness or proof acceptance.

## Substantive prose repairs

- Rebuilt all 55 prerequisite blocks from `requires` plus `partition.json`; key references now say “same-frontier pair” and identify the A-page and owner category. Exact published item IDs are separate. This fixes generated labels that had called internal keys existing-library suppliers.
- Replaced all 55 vague ownership placeholders with local definitions, procedure/status paths, mathematical hypotheses, well-definedness steps and proof constructions. Every pair retains examples and preserved source amendments; source URLs are not upgraded into reading claims.
- Added explicit AC/CC carries for NA28/NA29/NA37, PE20, PE32, PC-NYST and PC-SCAT, and local extensions where a cited trace/kernel/transport result does not meet the consuming geometry or measure assumptions.
- Selected concrete methods in PE02 (cell-average WENO5-JS and WENO-Z formulas; scalar minmod/upwind TVD branch), PE05 (hydrostatic reconstruction plus HLL flux and one-sided pressure corrections), PE07 (periodic incremental Stokes projection with gauge and modified-energy identity), PE15 (uniform 1D P1 SUPG with explicit tau), PE20 (nodal straight-segment Signorini VI), PE22 (1D ALE upwind/GCL plus SPD backward-Euler Robin iteration), PE24 (ideal-gas EC pair flux and periodic SBP viscous form), PE30 (RT0/P1 least squares plus ideal DPG and a degree-selected practical candidate), and PE32 (periodic finite-control semi-Lagrangian HJB, finite-state Howard loop, and explicit diagonal second-order stencil).

## Precise holds and future native authoring

These are scoped holds, not silently satisfied prerequisites. The definitions/procedures are stated where selected; planned theorem proofs remain future native item authoring, not accepted claims.

- **Expected native proof authoring:** the 55 A/B pairs are still planned items; the local proof constructions are design prose, not mathematical acceptance. The PE22 SPD contraction, PE24 semidiscrete SBP entropy law, PE32 first-order half-relaxed limit and finite Howard termination, and the other named proofs must be written and reviewed in their eventual items.
- **Actual method/proof gaps:** PE30’s practical DPG candidate is `d=2`, `p=1`, skeleton degrees `p+1/p`, test degrees vector `p+2`, scalar `r>=p+d`; the practical quasi-optimality claim remains held until its uniform Fortin/moment construction is actually proved. The LS and ideal-DPG branches are defined independently.
- PE20’s nodal Signorini VI is selected and defined; no mortar multiplier pair has been verified, so multiplier inf-sup/complementarity and friction branches remain held.
- PE32’s second-order controlled-diffusion stencil is defined only for diagonal nonnegative diffusion, `|b_j| h_j <= a_j`, and its explicit CFL. Its second-order viscosity comparison/convergence theorem remains local work; no generic anisotropic-stencil theorem is imported.
- PE24’s semidiscrete entropy/conservation theorem is defined. Its forward-Euler positivity and fully discrete entropy need their own invariant-domain/entropy CFL proof; its fixed-grid ODE error constant may depend on mesh size. No mesh-uniform smooth-flow rate is claimed.
- The optional PE05 discontinuous-bed path product and AP relaxation branch; PE15 multidimensional PSPG/grad-div/VMS stability; PE16 2D logarithmic-capacity branch; PE20 mortar/friction/semismooth branches; and general multidimensional curved ALE rates remain held until their exact method and hypotheses are selected. These holds do not block the selected, separately scoped representatives.

## Execution boundary

Only `research/plan-numerical-spatial-track.md` and this audit file were edited by this spatial auditor. No runtime/controller/plan-spec/library/item/quantum-control files were edited. No tests, gates, commits, publishing, or engine starts were performed; no external literature source was read. The 55 planned proof bodies remain unauthored and unaccepted.
