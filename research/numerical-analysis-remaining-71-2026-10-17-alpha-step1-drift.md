# Prerequisite drift review — numerical-analysis-remaining-71-2026-10-17 (alpha)

Reviewed all 71 A pages in the scope ledger against their assigned batch manifest, prose contract, specialist design, general design where applicable, and `research/plan-spec.json`. The specialist linear or spatial contract controls a pair’s exact interface when its contract is more specific; the general track was cross-checked. Candidate and `mentionedNearby` lists were treated as a search index, not as evidence of consumption.

Closure check: the 225 explicit page-interface references named by the assigned contracts were checked against transitive `requires` closure. One actual omission surfaced in PC-EWALD: the Gaussian lattice-summation argument consumes the existing full-rank lattice Poisson theorem, absent from its prior page closure. I added that backward edge. After the edit, no further missing prerequisite page edge or order correction was found. All other direct suppliers are listed in each section below with their plan orders.

Scope limitation: all 142 run pages currently have empty `items` arrays. This review can establish page-level closure only; it cannot certify future item-level `deps`. In particular, when Ewald authors the Gaussian summation item it must consume the published Poisson theorem with its Countable Choice hypothesis. Local theorem obligations called out below are owner escalations for placement inside the existing A page; they do not authorize a new pair or rescope.

## Owner escalations and evidence

- **NA-08 randomized low-rank approximation:** add/prove a Gaussian pseudoinverse moment/tail supplier before the expected spectral-error claim. Its downstream page consumers are named in that section. HMT §10/Appendix A.3 and Chen–Dongarra Lemma 4.1 were read; the latter contains the relevant density-integration argument.
- **PC-EWALD:** add/prove the mesh Fourier normalization/index and derivative-window force-alias bounds before claiming a certified PME force error. Essmann et al. §§IV, VII do not supply that deterministic bound. The independent published lattice-Poisson edge has already been added.
- **APP-RBF:** if Matérn is selected, prove Fourier/Sobolev equivalence and the domain zeros lemma locally before the rate; preserve a fully specified alternative if Wendland is selected.
- **APP-RATIONAL:** retain Floater–Hormann’s published regularity and mesh hypotheses when writing the no-pole/rate items; the cited paper’s complete arguments support the no-real-pole theorem and a rate under its stated conditions, not a hypothesis-free interpolation estimate.
- **NA-46 star discrepancy:** the A contract is correctly a dated open-problem carrier. Two relevant 2026 preprints inspected do not resolve the fixed-d question; Owen’s cited PDF could not be freshly fetched in this review, so source-currentness remains uncertain.

## Per-page findings
### optimal-star-discrepancy-order-in-dimension-at-least-three

Declared direct suppliers: quasi-monte-carlo-discrepancy-and-rules (order 2158). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

Status caveat: the assigned contract is explicitly an open-problem carrier for fixed d≥3, not a theorem claiming a solved optimal order. The 2026 papers by [Smirnov–Vershynin](https://arxiv.org/html/2607.12263v1, §§1.1–1.3) and [Dick](https://arxiv.org/html/2607.23571v2, §1 and Remark 1.3) do not settle the fixed-d asymptotic question. The design’s Owen *Practical QMC* source could not be freshly opened in this review, so its current-status statement remains a source-verification caveat; this is not a missing prerequisite edge.

VERDICT: no-drift

### radial-basis-and-kernel-interpolation

Declared direct suppliers: finite-precision-direct-factorizations (order 2286); polynomial-interpolation-and-remainder (order 2292). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

Owner note: if the author selects the Matérn branch, the same-page supplier must include Fourier/Sobolev norm equivalence and the domain zeros lemma before the fill-distance/separation rate. These are local theorem prerequisites, not absent page suppliers; the direct consumer is `radial-basis-and-kernel-interpolation-examples` (order 2559). The design also permits a fixed Wendland branch, whose exact regularity and domain hypotheses still need to be stated and proved.

VERDICT: no-drift

### spline-evaluation-and-interpolation-algorithms

Declared direct suppliers: finite-precision-direct-factorizations (order 2286); polynomial-interpolation-and-remainder (order 2292); splines-series-and-approximation-rates (order 1896). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### minimax-approximation-and-remez-algorithms

Declared direct suppliers: polynomial-approximation-and-chebyshev-interpolation (order 2322). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### shape-preserving-piecewise-polynomial-interpolation

Declared direct suppliers: spline-evaluation-and-interpolation-algorithms (order 2560). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### wavelet-transforms-and-nonlinear-approximation

Declared direct suppliers: computed-fast-transforms-and-convolution (order 2314); polynomial-approximation-and-chebyshev-interpolation (order 2322). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### certified-geometric-predicates

Declared direct suppliers: outward-rounded-interval-and-ball-arithmetic (order 2312). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### nonuniform-fast-fourier-transforms

Declared direct suppliers: computed-fast-transforms-and-convolution (order 2314). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### toeplitz-circulant-and-displacement-structured-solvers

Declared direct suppliers: computed-fast-transforms-and-convolution (order 2314); sparse-direct-elimination-and-ordering (order 2316); linear-prediction-for-dependent-data (order 2002). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### tensor-train-compression-and-truncation-error

Declared direct suppliers: computed-singular-values-and-rank-revealing-factorizations (order 2318). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### randomized-low-rank-approximation

Declared direct suppliers: sparse-matrix-models-and-kernel-costs (order 2288); computed-singular-values-and-rank-revealing-factorizations (order 2318). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

Owner escalation — smallest missing local supplier: for an iid standard real Gaussian block \(\Omega_1\in\mathbb{R}^{k\times(k+p)}\), prove full row rank almost surely and the inverse-Wishart moment \(\mathbb{E}\|\Omega_1^\dagger\|_F^2=k/(p-1)\) for \(p>1\), together with the tail/integrability bound needed for \(\mathbb{E}\|\Omega_2\Omega_1^\dagger\|_2\), before the expected spectral-error theorem. State the matching normalized complex-Gaussian estimate separately. The consuming claim is the stated expected low-rank error bound; direct page consumers are `hierarchical-low-rank-matrices-and-error-propagation` (order 2586) and `sketched-least-squares-and-subspace-embeddings` (order 2588), as well as the B companion (order 2577). Halko–Martinsson–Tropp, §10 and Appendix A.3, use the estimate but cite Chen–Dongarra Lemma 4.1; Chen–Dongarra’s proof integrates the smallest Wishart-eigenvalue density bound (Lemma 3.2). See [HMT](https://users.oden.utexas.edu/~pgm/Pubs/2010_HMT_random_review.pdf) and [Chen–Dongarra](https://www.netlib.org/utk/people/JackDongarra-20130-07-11/PAPERS/168_2005_Condition-Numbers-of-Gaussian-Random-Matrices.pdf). The source argument exists, but the local item proof is not yet in this plan; place it inside this A page before the expectation theorem.

VERDICT: no-drift

### ewald-periodic-potentials-and-particle-mesh-error

Declared direct suppliers: computed-fast-transforms-and-convolution (order 2314); poisson-summation-sampling-and-lattice-duality (order 1214). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

Applied edge and mathematical fit: the published page `poisson-summation-sampling-and-lattice-duality` (order 1214), item `thm-poisson-summation-for-a-full-rank-lattice`, proves the absolute-convergence periodization identity for Schwartz functions under Countable Choice. The Ewald Gaussian is Schwartz; state the angular-frequency/2π reciprocal-lattice normalization consistently. Source item: [library/fourier-analysis/poisson-summation-sampling-and-lattice-duality.md](/home/lazyinspirit/Projects/prestige-math-library/library/fourier-analysis/poisson-summation-sampling-and-lattice-duality.md:39) and [items/thm-poisson-summation-for-a-full-rank-lattice.md](/home/lazyinspirit/Projects/prestige-math-library/items/thm-poisson-summation-for-a-full-rank-lattice.md:39). That theorem’s item dependencies include `def-countable-choice`; the Ewald item must consume the theorem with its stated hypotheses (and preserve the Choice dependency in its item closure).

Owner escalation — two smallest local suppliers remain before the PME force certificate: (1) a 3D mesh Fourier normalization/index lemma for the stated assignment and deconvolution convention; (2) a computable force-alias bound with derivative-window factors. The consuming claim is the PME force-error decomposition’s assignment/aliasing and mesh-differentiation terms. Proposed placement is within this A page before the PME error theorem; the only direct page consumer is `ewald-periodic-potentials-and-particle-mesh-error-examples` (order 2579). Essmann et al., *A Smooth Particle Mesh Ewald Method*, §§IV and VII, report no useful a priori PME-accuracy estimate and use a rough estimator, so it does not establish the requested deterministic force-alias bound: [article PDF](https://biomolmd.org/mw/images/e/e0/Spme.pdf), [DOI](https://doi.org/10.1063/1.470117).

VERDICT: drift-applied — added `poisson-summation-sampling-and-lattice-duality` (order 1214), the published full-rank lattice Poisson supplier.

### oscillatory-filon-and-levin-quadrature

Declared direct suppliers: composite-quadrature-rules (order 2324); finite-precision-direct-factorizations (order 2286). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### barycentric-rational-and-aaa-approximation

Declared direct suppliers: computed-singular-values-and-rank-revealing-factorizations (order 2318); minimax-approximation-and-remez-algorithms (order 2562). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

Source/hypothesis caveat for the Floater–Hormann branch: Floater–Hormann’s full paper proves no real poles in its admissible degree range (Theorem 1, pp. 2–3; this contract uses 0≤d<n), and proves the approximation result in Theorem 2, pp. 3–5, with its stated smoothness and parity-dependent constants. The rate argument assumes f∈C^{d+2}; for d=0 retain the local mesh-ratio condition. Do not silently claim the contract’s `C^{d+1}`-only estimate from that source. The assigned local item proof and constant still need to be written. [Full paper](https://www.inf.usi.ch/hormann/papers/Floater.2007.BRI.pdf).

VERDICT: no-drift

### delaunay-triangulations-and-voronoi-computation

Declared direct suppliers: certified-geometric-predicates (order 2568); polynomial-interpolation-and-remainder (order 2292). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### hierarchical-low-rank-matrices-and-error-propagation

Declared direct suppliers: randomized-low-rank-approximation (order 2576); sparse-direct-elimination-and-ordering (order 2316). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### sketched-least-squares-and-subspace-embeddings

Declared direct suppliers: randomized-low-rank-approximation (order 2576); computed-fast-transforms-and-convolution (order 2314). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### interpolative-cur-and-nystrom-decompositions

Declared direct suppliers: sketched-least-squares-and-subspace-embeddings (order 2588). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### fast-multipole-expansions-and-error

Declared direct suppliers: hierarchical-low-rank-matrices-and-error-propagation (order 2586); computed-fast-transforms-and-convolution (order 2314). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### multigrid-methods-and-complexity

Declared direct suppliers: preconditioner-algorithms-and-residual-metrics (order 2384); lax-milgram-and-weak-elliptic-solutions (order 1058). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### alternating-tensor-optimization-and-effective-eigenproblems

Declared direct suppliers: tensor-train-compression-and-truncation-error (order 2574); restarted-and-block-eigensolvers (order 2418). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### polynomial-eigenproblems-and-linearization

Declared direct suppliers: restarted-and-block-eigensolvers (order 2418). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### numerical-algebraic-riccati-equations-and-stabilizing-branches

Declared direct suppliers: generalized-eigenvalue-pencils-and-qz-methods (order 2380); matrix-functions-and-scaling-squaring (order 2420). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### square-root-covariance-update-error-and-stability

Declared direct suppliers: numerical-algebraic-riccati-equations-and-stabilizing-branches (order 2600); kalman-filtering (order 2124). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### stable-special-function-recurrences-and-certified-evaluation

Declared direct suppliers: composite-quadrature-rules (order 2324); gaussian-quadrature (order 2448); the-gamma-function (order 686). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### singular-and-infinite-interval-quadrature

Declared direct suppliers: gaussian-quadrature (order 2448); clenshaw-curtis-and-extrapolation-quadrature (order 2370). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### gaussian-basis-integral-recurrences-and-boys-error

Declared direct suppliers: stable-special-function-recurrences-and-certified-evaluation (order 2604). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### conservative-finite-volume-weak-limits

Declared direct suppliers: scalar-conservation-laws-and-entropy-solutions (order 1078). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### monotone-finite-volume-entropy-convergence

Declared direct suppliers: conservative-finite-volume-weak-limits (order 2610). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### riemann-solvers-for-hyperbolic-systems

Declared direct suppliers: nonlinear-equations-and-newton-methods (order 2290). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### mixed-finite-elements-and-stokes-stability

Declared direct suppliers: finite-element-meshes-and-interpolation (order 2332); lax-milgram-and-weak-elliptic-solutions (order 1058). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### high-resolution-tvd-eno-and-weno-methods

Declared direct suppliers: polynomial-interpolation-and-remainder (order 2292); monotone-finite-volume-entropy-convergence (order 2612); riemann-solvers-for-hyperbolic-systems (order 2614). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### invariant-domain-and-entropy-stable-conservative-schemes

Declared direct suppliers: high-resolution-tvd-eno-and-weno-methods (order 2618). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### mixed-hdiv-fluxes-and-darcy-discretization

Declared direct suppliers: mixed-finite-elements-and-stokes-stability (order 2616). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### elasticity-near-incompressibility-and-locking-free-discretization

Declared direct suppliers: ceas-lemma-and-aubin-nitsche-error-estimates (order 2360); mixed-finite-elements-and-stokes-stability (order 2616). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### hyperbolic-dg-and-summation-by-parts-discretizations

Declared direct suppliers: finite-element-meshes-and-interpolation (order 2332); invariant-domain-and-entropy-stable-conservative-schemes (order 2620); runge-kutta-methods-and-order (order 2354). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### well-balanced-balance-laws-and-wet-dry-fronts

Declared direct suppliers: invariant-domain-and-entropy-stable-conservative-schemes (order 2620). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### discrete-de-rham-complexes-and-edge-elements

Declared direct suppliers: mixed-hdiv-fluxes-and-darcy-discretization (order 2622). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### nonlinear-parabolic-compactness-and-monotone-evolution

Declared direct suppliers: parabolic-finite-element-methods (order 2396); homology-axioms-degree-and-classical-applications (order 838). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### graph-diffusion-and-metric-network-pde-numerics

Declared direct suppliers: finite-generator-master-equations-and-uniformization (order 2378); elliptic-finite-difference-methods (order 2330); parabolic-finite-element-methods (order 2396); algebraic-and-spectral-graph-theory (order 332). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### energy-stable-incompressible-navier-stokes-discretization

Declared direct suppliers: mixed-finite-elements-and-stokes-stability (order 2616); nonlinear-parabolic-compactness-and-monotone-evolution (order 2632). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### yee-fdtd-and-transient-maxwell-discretization

Declared direct suppliers: hyperbolic-finite-difference-methods (order 2394); parabolic-finite-element-methods (order 2396); discrete-de-rham-complexes-and-edge-elements (order 2630). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### maxwell-eigenproblems-and-compatible-vector-waves

Declared direct suppliers: finite-element-eigenvalue-approximation (order 2398); discrete-de-rham-complexes-and-edge-elements (order 2630). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### finite-volume-diffusion-and-mimetic-fluxes

Declared direct suppliers: elliptic-finite-difference-methods (order 2330); conservative-finite-volume-weak-limits (order 2610); nonlinear-parabolic-compactness-and-monotone-evolution (order 2632). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### overlapping-schwarz-and-stable-subspace-decompositions

Declared direct suppliers: multigrid-methods-and-complexity (order 2594); ceas-lemma-and-aubin-nitsche-error-estimates (order 2360). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### nonlinear-full-approximation-multigrid

Declared direct suppliers: multigrid-methods-and-complexity (order 2594); nonlinear-equations-and-newton-methods (order 2290); nonlinear-parabolic-compactness-and-monotone-evolution (order 2632). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### meshfree-kernel-approximation-and-conservative-sph

Declared direct suppliers: interacting-particle-mean-field-and-vortex-blob-error (order 2444). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### nystrom-product-integration-and-fredholm-error

Declared direct suppliers: composite-quadrature-rules (order 2324); gaussian-quadrature (order 2448); compact-operators-and-riesz-schauder-theory (order 514). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### projection-and-pressure-correction-for-incompressible-flow

Declared direct suppliers: preconditioner-algorithms-and-residual-metrics (order 2384); energy-stable-incompressible-navier-stokes-discretization (order 2636). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### substructuring-feti-dp-and-bddc-preconditioners

Declared direct suppliers: overlapping-schwarz-and-stable-subspace-decompositions (order 2644). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### crouzeix-raviart-finite-elements

Declared direct suppliers: variational-crimes-and-strang-lemmas (order 2462). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### nitsche-methods-for-weak-boundary-enforcement

Declared direct suppliers: variational-crimes-and-strang-lemmas (order 2462). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### discontinuous-galerkin-methods

Declared direct suppliers: variational-crimes-and-strang-lemmas (order 2462). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### adaptive-finite-element-methods

Declared direct suppliers: variational-crimes-and-strang-lemmas (order 2462). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### volume-integral-scattering-and-partial-wave-error

Declared direct suppliers: nystrom-product-integration-and-fredholm-error (order 2650); stable-special-function-recurrences-and-certified-evaluation (order 2604). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### supg-and-residual-based-stabilized-finite-elements

Declared direct suppliers: variational-crimes-and-strang-lemmas (order 2462); energy-stable-incompressible-navier-stokes-discretization (order 2636). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### boundary-integral-equations-and-galerkin-bem

Declared direct suppliers: variational-crimes-and-strang-lemmas (order 2462); singular-and-infinite-interval-quadrature (order 2606); fast-multipole-expansions-and-error (order 2592). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### variational-inequality-and-contact-finite-elements

Declared direct suppliers: variational-crimes-and-strang-lemmas (order 2462); elasticity-near-incompressibility-and-locking-free-discretization (order 2624); constrained-variational-problems-and-variational-inequalities (order 1070). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### compressible-viscous-flow-and-entropy-stable-fluxes

Declared direct suppliers: variational-crimes-and-strang-lemmas (order 2462); hyperbolic-dg-and-summation-by-parts-discretizations (order 2626); finite-volume-diffusion-and-mimetic-fluxes (order 2642). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### least-squares-fem-and-practical-dpg

Declared direct suppliers: variational-crimes-and-strang-lemmas (order 2462); discrete-de-rham-complexes-and-edge-elements (order 2630). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### particle-in-cell-and-particle-mesh-kinetic-methods

Declared direct suppliers: interacting-particle-mean-field-and-vortex-blob-error (order 2444); elliptic-finite-difference-methods (order 2330); spectral-collocation-and-galerkin-methods (order 2464). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### reaction-diffusion-invariants-and-pattern-discretization

Declared direct suppliers: parabolic-finite-difference-methods (order 2358); finite-volume-diffusion-and-mimetic-fluxes (order 2642); imex-and-operator-splitting-methods (order 2480). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### curved-mesh-geometry-and-conservative-mesh-transfer

Declared direct suppliers: adaptive-finite-element-methods (order 2662); delaunay-triangulations-and-voronoi-computation (order 2584). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### exterior-wave-problems-absorbing-boundaries-and-pml

Declared direct suppliers: spectral-collocation-and-galerkin-methods (order 2464); boundary-integral-equations-and-galerkin-bem (order 2668). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### homogenization-and-multiscale-finite-element-methods

Declared direct suppliers: adaptive-finite-element-methods (order 2662). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### phase-field-and-energy-dissipative-discretization

Declared direct suppliers: finite-volume-diffusion-and-mimetic-fluxes (order 2642); imex-and-operator-splitting-methods (order 2480). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### ale-interface-and-partitioned-multiphysics-discretization

Declared direct suppliers: energy-stable-incompressible-navier-stokes-discretization (order 2636); curved-mesh-geometry-and-conservative-mesh-transfer (order 2680); elasticity-near-incompressibility-and-locking-free-discretization (order 2624); imex-and-operator-splitting-methods (order 2480). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### hp-finite-elements-and-spectral-element-methods

Declared direct suppliers: spectral-collocation-and-galerkin-methods (order 2464); curved-mesh-geometry-and-conservative-mesh-transfer (order 2680). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### isogeometric-galerkin-methods

Declared direct suppliers: spline-evaluation-and-interpolation-algorithms (order 2560); curved-mesh-geometry-and-conservative-mesh-transfer (order 2680); elasticity-near-incompressibility-and-locking-free-discretization (order 2624). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### semi-lagrangian-characteristic-transport

Declared direct suppliers: curved-mesh-geometry-and-conservative-mesh-transfer (order 2680); event-location-and-hybrid-trajectory-error (order 2494). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift

### monotone-hjb-schemes-and-policy-iteration

Declared direct suppliers: hyperbolic-finite-difference-methods (order 2394); semi-lagrangian-characteristic-transport (order 2694); hamilton-jacobi-equations-and-viscosity-solutions (order 1076). Evidence: the assigned proof-facing interfaces for this A page were checked against the transitive plan closure; no additional prerequisite page is absent. The current plan has empty item arrays for the run pages, so future item-level dependency claims remain unreviewable at this stage.

VERDICT: no-drift
