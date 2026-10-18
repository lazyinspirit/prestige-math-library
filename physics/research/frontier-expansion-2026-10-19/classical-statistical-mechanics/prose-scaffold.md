# Classical statistical mechanics — successor frontier prose scaffold

Research design dated 2026-10-19. Nothing here is an accepted proof, a production carrier, an empirical observation or an engine transition. All old ten A/B pairs, every reservation and strengthened audited clause are retained by exact baseline mapping. This successor appends fourteen new pairs; original full-source obligations remain required. Read the original track, original worker proof modules and 2026-10-16 audit plus 2026-10-17 repaired source contracts before authoring old or new consumers.

All mathematical theorems concern precisely defined probability models and use mathematics-domain suppliers only. Physical interpretations are conditional on the retained preparation postulates. Beta means 1/(k_B T) in J^-1 for dimensional energy, whereas dimensionless lattice couplings mean beta times the stated energy. Entropy D is dimensionless and physical entropy is k_B times dimensionless entropy only under the chosen reference/counting model. Length and time rescaling is explicit at kinetic and hydrodynamic uses. B pages are leaves. No diagram carries a proof.

Links and source identities are collected after uninterrupted contracts in inventory.json and suppliers.json; all definitions and statements below are continuous unlinked prose. The inventory is the precise item-level DAG, and the narrative adds derivations, boundaries and local proof obligations.

## Retained authority and current authored coverage

The original phase/reference/counting, static EM canonical gauge invariance, coarea shells, ensemble response/equipartition, finite lattice/DLR pressure, continuum superstability and local-tame limits, full marked phase equivalence, Hamiltonian mixing/ergodic qualifications, smooth mean-field hierarchy, cutoff kinetic entropy, finite/OU thermal response, exact gas/harmonic/Ising/Tonks models and Bernoulli/nonadditive countermodels remain complete obligations. Published carriers supersede historical source hash claims only for actual current content; the original plans remain approved scope evidence. New finite compact mean-field equivalence does not replace continuum full-phase equivalence. Detailed old claims and identities are retained row-by-row in baseline.json.

[Original full track](../../plan-classical-statistical-mechanics-track.md)

[Original scaffold](../../extended-frameworks-2026-10-03/classical-statistical-mechanics/prose-scaffold.md)

[Audit successor](../../scaffold-audit-2026-10-16/classical-statistical-mechanics/report.md)

[Repaired supplier contract](../../physics-remaining-80-2026-10-17-csm-supplier-resolution.md)

## csm-frontier-probability-interfaces — Local topology, entropy compactness and path-space estimates

Work on finite-spin product spaces with the cylinder sigma algebra and a fixed enumeration of sites. Local weak convergence means convergence of all cylinder probabilities; on compact finite-spin products it agrees with ordinary weak convergence. Continuum configurations instead use locally finite counting measures, vague topology and explicit count uniform integrability for unbounded tests. Do not identify those topologies. Prokhorov carries AC from its actual root theorem. All later martingale estimates have their own finite-state proof, so no unprovided path-space tightness theorem is hidden in hydrodynamics.

For a finite-state continuous-time chain of generator L and bounded f, first prove from the matrix exponential and conditional Markov property that M_t=f(X_t)-f(X_0)-integral_0^t Lf(X_s)ds is a square-integrable martingale. Expanding conditional increments gives predictable quadratic variation integral [L(f²)-2fLf](X_s)ds. Prove E sup |M|² <=4 E|M_T|² by the stopping-time tail integration/Cauchy–Schwarz proof of Doob's inequality, separately from the definition. For finite probability vectors derive D(p||q)>=0 using log u<=u-1 and binary data processing by grouping atoms. These exact interfaces support subsequent new results while recording stable root draft probability interfaces honestly where consumed.

### def-csm-frontier-local-topologies (definition, mathematics)

For a finite nonempty alphabet S, equip S^(Z^d) with the product topology and cylinder sigma algebra; local convergence is convergence of every finite-coordinate marginal.

Proof/definition route: Explicit weighted cylinder metric and diagonal subsequence construction.

### lem-csm-frontier-finite-chain-martingale (lemma, mathematics)

For a finite matrix L with nonnegative off-diagonal entries and zero row sums, bounded real f and every initial law, M_t=f(X_t)-f(X_0)-integral_0^t Lf(X_s)ds is square integrable with bracket integral_0^t (L(f²)-2fLf)(X_s)ds.

Proof/definition route: Derive conditional expectation by e^(tL), then apply the product increment identity; reversibility is unnecessary.

### lem-csm-frontier-finite-doob-bound (lemma, mathematics)

Every square-integrable cadlag martingale M with M_0=0 obeys E sup_(t<=T)|M_t|²<=4 E|M_T|².

Proof/definition route: Stopping on first crossing, tail integration with truncation and Cauchy–Schwarz; take monotone limits.

### lem-csm-frontier-finite-entropy-chain (lemma, mathematics)

For finite joint laws P,Q with Q positive, D(P||Q)=D(P_X||Q_X)+sum_x P_X(x)D(P_(Y|x)||Q_(Y|x)); grouping events decreases relative entropy.

Proof/definition route: Expand logarithmic ratio, omit zero P atoms, and use log-sum inequality.

B leaf obligations: ex-csm-frontier-singular-local-limit: A sequence of fixed-label particles can converge trivially locally while a spatially selected particle has a nontrivial mark law. Verification: Use uniform particles on expanding boxes; fixed label enters a fixed box with probability tending to zero.

Sources: retained, ldp.

## csm-frontier-quantitative-dlr — Quantitative DLR uniqueness, concentration and spatial response

For finite alphabet S and finite-range specification gamma define c_ij as the supremum total-variation distance of one-site kernels at i when only boundary spin j differs. Assume c_ii=0 and c=sup_i sum_j c_ij<1, uniformly in volume and admissible boundary. The comparison resolvent D=sum_(n>=0) C^n is entrywise convergent with row sums <=1/(1-c). Coupled heat-bath updates give disagreement vector u<=Cu+b; iteration yields u<=Db. This simultaneously specifies uniqueness and a quantitative boundary influence estimate. The matrix argument is a new complete lemma, not an invocation of an unnamed coupling theorem.

For bounded cylinder f with oscillations delta_i f, telescope maximal-coupling disagreements to bound |mu f-nu f| by sum_i delta_i f (Db)_i. Finite-range C yields exponential spatial decay by noting (C^n)_ij=0 below graph distance/range. Analyticity is not inferred from uniqueness alone; the cluster module supplies it. Susceptibility sum_j Cov(sigma_0,sigma_j) converges absolutely under this estimate; finite-volume derivative limits require uniform covariance tails and dominated summation. At coexistence these assumptions fail.

### def-csm-frontier-dobrushin-matrix (definition, mathematics)

For a finite-spin specification, c_ij is the maximal total variation change of the i conditional law after changing only spin j; C has zero diagonal.

Proof/definition route: Finite kernels and finite supremum; define infinite boundary supremum explicitly.

### thm-csm-frontier-dobrushin-comparison (theorem, mathematics)

If C has nonnegative entries and row sums <=c<1, two Gibbs measures with conditional discrepancies bounded by b satisfy |mu f-nu f|<=sum_i delta_i(f)[(I-C)^(-1)b]_i for every bounded cylinder f.

Proof/definition route: Finite-volume coupled update stationary law; solve disagreement inequality by nonnegative Neumann series; pass cylinder limits.

### thm-csm-frontier-high-temperature-susceptibility (theorem, mathematics)

For translation-invariant finite-range Ising kernels with the uniform Dobrushin row bound c<1 on an open parameter interval, bounded-spin correlations are absolutely summable and the limiting magnetization derivative is the covariance sum.

Proof/definition route: Distance support of powers C^n yields geometric tail; differentiate finite volume then uniformly control tails.

B leaf obligations: ex-csm-frontier-ising-explicit-contraction: Nearest-neighbor Ising on Z^d has c_ij<=tanh(beta |J_ij|); 2d tanh(beta |J|)<1 is sufficient for the comparison theorem. Verification: Compute the two Bernoulli conditional laws and maximize their difference; the bound is sufficient, not the exact critical temperature.

Sources: retained, lpw.

## csm-frontier-polymer-continuum — Polymer analyticity and dilute continuum correlations

Define a countable abstract polymer set with reflexive symmetric incompatibility and complex activities z_gamma. In each finite set, Z=sum over pairwise compatible subsets product z_gamma. Require a nonnegative size a and an explicit strict margin in sum_(eta incompatible gamma)|z_eta| exp(a_eta)<=a_gamma. The connected-graph Ursell formula log Z=sum_(n>=1)1/n! sum phi^T(gamma_1,...,gamma_n) product z_gamma_i is proved first as a formal power series by partitioning a graph into connected components. Analytic convergence then requires a separately proved tree-graph bound and rooted-tree majorant, homing both as new lemmas. The strict margin gives locally uniform absolute convergence and justified parameter derivatives; zero-free normalization is a conclusion.

For a stable pair potential v in R^d, beta>0, stability sum_(i<j)v>=-BN, and C_beta=integral |exp(-beta v(x))-1|dx<infinity, a connected Mayer expansion has a tree bound involving exp(2 beta B). Adopt only the explicit sufficient region |z| exp(2 beta B+1) C_beta<1. The tree-graph inequality for stable potentials is its own substantial local authoring obligation; until it is proved the continuum corollary remains blocked. Hard cores use exp(-infinity)=0, not differentiability of v. No liquid-vapor coexistence follows from dilute analyticity; arbitrary-shape limits retain the old superstability hypotheses.

### def-csm-frontier-abstract-polymer (definition, mathematics)

An abstract polymer model is a countable set with reflexive symmetric incompatibility, activities z, and finite-volume partition function given by compatible subsets.

Proof/definition route: Finite polynomial definition; no convergence assertion in definition.

### lem-csm-frontier-polymer-tree-majorant (lemma, mathematics)

Under sum_(eta incompatible gamma)|z_eta|exp(a_eta)<=a_gamma, the absolute rooted connected-cluster sum with root gamma is bounded by exp(a_gamma).

Proof/definition route: Prove connected-graph cancellation/tree partition and iterate rooted-tree generating series monotonically; display multiplicity factorials.

### thm-csm-frontier-polymer-analyticity (theorem, mathematics)

A strict locally uniform polymer majorant implies a zero-free finite partition function and normally convergent connected expansion for log Z in that activity domain.

Proof/definition route: Start near zero with the formal exponential formula, apply normal convergence and analytic continuation within the star-shaped majorant domain.

### lem-csm-frontier-stable-mayer-tree-bound (lemma, mathematics)

For a measurable stable translation-invariant pair potential v on R^d with stability constant B, beta>0 and finite C_beta=integral_R^d |exp(-beta v)-1|, pin x_1=0. For n>=2 the integral over x_2,...,x_n of the absolute connected-graph Mayer sum is at most exp(2 beta B n)n^(n-2) C_beta^(n-1).

Proof/definition route: Prove a stability-preserving graph-to-tree partition and integrate tree leaves; full local proof required before corollary dispatch.

### thm-csm-frontier-dilute-mayer-domain (theorem, mathematics)

The stable regular continuum pressure Mayer series converges absolutely when |z|exp(2 beta B+1) C_beta<1, with termwise activity derivatives on compact subdomains.

Proof/definition route: Apply coefficient bound, n! growth and uniform ratio majorant; identify finite-volume coefficients by dominated boundary-to-volume limit.

B leaf obligations: ex-csm-frontier-hard-core-dilute-bound: For hard spheres of diameter a, B=0 and C_beta is the ball volume of radius a, so e |z| C_beta<1 is an explicit sufficient analytic domain. Verification: Mayer function is minus the exclusion-ball indicator; this is a sufficient bound rather than a freezing prediction.

Sources: cluster, stablecluster, retained.

## csm-frontier-large-deviation-ensembles — Large-deviation variational mechanics and ensemble inequivalence

Build a self-contained compact-space Laplace principle: if X_n satisfies an LDP with good rate I on compact K and F is continuous, finite coverings give upper bound and an open ball about a near maximizer gives lower bound, so n^(-1)log E exp(nF(X_n)) tends to sup(F-I). Under exponential tilting the new rate is I-F+sup(F-I). A finite alphabet method-of-types lemma proves multinomial probability bounds between (n+1)^(-k)exp(-nD) and exp(-nD), by the maximal type under its own product law; rounding rational frequencies gives the LDP. The exact stable root finite-alphabet Sanov draft supplies these support-simplex bounds; its draft status and hypotheses are recorded and no final acceptance is implied.

For a continuous energy h on the compact probability simplex and product reference p with full support, the mean-field Gibbs law exp(-n beta h(L_n)) has rate D(q||p)+beta h(q)-inf_r[D(r||p)+beta h(r)]. Microcanonical shells use the iterated limit n to infinity then delta down to zero; condition on |h(L_n)-u|<delta only where the constrained infima have matching open/closed limits. Entropy s(u)=-inf_(h(q)=u) D(q||p); canonical equilibrium energies maximize s(u)-beta u. Supporting lines, not formal Legendre inversion, characterize equivalence; nonconcave s may give energies with no canonical realization. This is macrostate equivalence on a compact mean-field model, separate from the retained spatial local marked continuum theorem.

For Curie–Weiss h(m)=-Jm²/2-Hm, stationarity gives m=tanh(beta(Jm+H)). At H=0, Taylor expansion of binary entropy gives bifurcation at beta J=1; prove global minimizer classification by monotonicity of atanh(m)/m, treating endpoints. Do not assume a generic stationary solution minimizes the rate.

### thm-csm-frontier-compact-laplace-tilt (theorem, mathematics)

If X_n has an LDP with rate I on compact K and F is continuous, the log-Laplace limit is sup_K(F-I), and normalized exp(nF) tilting gives rate I-F+sup_K(F-I).

Proof/definition route: Finite cover upper estimate and open neighborhood lower estimate; establish both LDP bounds of tilted laws.

### thm-csm-frontier-mean-field-supporting-lines (theorem, mathematics)

For finite alphabet p>0 and continuous h, canonical macrostates minimize D(q||p)+beta h(q); a constrained macrostate at energy u is canonical at beta precisely when it minimizes the constrained entropy cost and u maximizes s(v)-beta v.

Proof/definition route: Contraction on compact simplex and the two minimizations; microcanonical claim uses explicitly matched shrinking-window infima.

### thm-csm-frontier-curie-weiss-bifurcation (theorem, mathematics)

For J>0 and H=0 the Curie–Weiss canonical magnetization minimizer is uniquely zero when beta J<=1 and consists of +/-m_beta when beta J>1, where m_beta is the unique positive solution m=tanh(beta Jm).

Proof/definition route: Differentiate binary entropy, prove atanh(m)/m strictly increasing from 1 to infinity; inspect derivative signs and boundary continuity.

B leaf obligations: ex-csm-frontier-nonexposed-energy: For a binary uniform reference and mean-field energy h(q)=q_1^(1/4), the constrained entropy s(u)=H_binary(u^4)-log 2 is strictly convex for 0<u<=1/10. These interior energies are not canonical equilibrium energies for any inverse temperature. Verification: The constraint uniquely fixes q_1=u^4. Compute s second derivative =u²[12 log((1-u^4)/u^4)-16/(1-u^4)], strictly positive on (0,1/10]. A locally strictly convex function cannot lie below a supporting affine line at an interior point; apply supporting-line criterion.

Sources: ldp, retained.

## csm-frontier-critical-gaussian-rg — Criticality, Gaussian fields and exact block renormalization

Define criticality through a specified infinite-volume nonanalyticity or divergent correlation length; finite-volume analyticity and finite-size pseudocritical maxima are separate. For a periodic lattice Gaussian field, K=m²I+kappa(-Delta) with m²>0 and kappa>0 has normalized Lebesgue density proportional to exp(-phi^T K phi/2), covariance K^(-1) and Fourier eigenvalues m²+4kappa sum sin²(k_j/2). All eigenvalues are dimensionless after dividing energy by k_B T and field by a declared field reference. The massless torus has a constant zero mode and divergent unconstrained normalization; constrain sum phi=0 before using its inverse. In d>2 the infinite-lattice massless covariance at fixed separation is finite because integral near k=0 |k|^(-2)dk converges; this is a free Gaussian statement, not an interacting universality theorem.

For an invertible linear split into block variables x and discarded variables y with positive precision with blocks A, B, B^T, C, completing the square gives exact effective precision A-BC^(-1)B^T and determinant factor (2pi)^(dim y/2)det(C)^(-1/2). An explicitly defined block-RG algorithm repeats that Schur complement on a finite positive covariance; correctness and termination are separate theorem. Long-range couplings are generally generated, so a truncated nearest-neighbor parameter map is an approximation with an error bound requirement, not an exact RG.

Power counting at the Gaussian continuum scaling assigns [phi]=(d-2)/2 and quartic coupling exponent 4-d. This is an engineering scaling identity on smooth compactly supported test fields; it does not construct phi^4 measure or prove Wilson–Fisher exponents in d=3. A future critical Ising conformal/scaling branch must supply a full theorem and source review, and is not a current logical dependency.

### def-csm-frontier-gaussian-lattice (definition, mathematics)

For finite periodic lattice and m²,kappa>0 define K=m²I+kappa(-Delta) and the Gaussian probability with precision K.

Proof/definition route: Positive Fourier symbol and Gaussian integral.

### thm-csm-frontier-gaussian-massless-dimension (theorem, mathematics)

The infinite-lattice Fourier integral for massless covariance at fixed separation is finite in d>2 and its diagonal diverges in d<=2.

Proof/definition route: Bound sum sin²(k_i/2) above/below by constants times |k|² near zero and use radial integrability.

### alg-csm-frontier-gaussian-block-rg (algorithm, mathematics)

Input a finite positive definite precision matrix and an ordered finite list of retained-coordinate subsets. At each step permute retained coordinates first, partition into A,B,C, solve C X=B^T and output A-BX plus the exact log-determinant normalization increment; terminate after the list.

Proof/definition route: Procedure only; exact arithmetic contract and nonsingular eliminated principal blocks.

### thm-csm-frontier-gaussian-block-rg-correct (theorem, mathematics)

The block-RG procedure terminates after its finite list and returns the exact retained Gaussian marginals and normalization factors.

Proof/definition route: Complete square, prove Schur complement positive using the minimizing quadratic form, then induct on list length.

### lem-csm-frontier-quartic-engineering-scaling (lemma, mathematics)

For smooth compactly supported fields under x=b xprime and phi(x)=b^(-(d-2)/2) phi_prime(xprime), the gradient action is invariant and the quartic coefficient transforms by b^(4-d).

Proof/definition route: Direct change of variables and chain rule, no interacting measure asserted.

B leaf obligations: ex-csm-frontier-rg-generates-couplings: Eliminating the center of a Gaussian star creates couplings between all remaining leaves. Verification: For nonzero central-to-leaf entries, off-diagonal Schur correction is -b_i b_j/C.

Sources: tong, retained.

## csm-frontier-fk-loop-algebra — Classical Potts random clusters and planar loop transfer

On finite graph G and integer Q>=2 define Z=sum_sigma product_e(1+v_e 1_(sigma_u=sigma_v)); expand the product and sum spins to obtain Z=sum_(A subset E) Q^(k(A)) product_(e in A)v_e. For v_e>=0 this is a random-cluster probability, while negative weights are not a probability law. Conditional on A, assign one independent uniform color to each connected component; joint-law summation gives the spin Gibbs marginal and P(sigma_x=sigma_y)=1/Q+(1-1/Q)P(x connected y). This exact Edwards–Sokal coupling yields an actual physical correlation interpretation, without using a quantum spin chain.

For a planar strip with stated free/wired boundaries define noncrossing connectivity states and a join operator J_i merging adjacent blocks, J_i²=J_i; detach erases a boundary vertex and multiplies by Q precisely if a cluster closes. Partition-algebra join/detach transfer evaluates the FK polynomial exactly. Reuse the actual stable root draft diagram-category definition and category-laws theorem, with left factor stacked above the right and every removed loop valued delta. The new model-specific medial-loop lemma derives the classical normalization; generic TL foundations are not duplicated. For the medial-loop reformulation take delta=sqrt(Q), explicitly derive Euler boundary prefactors from k(A) and dual clusters before claiming partition-function equality. The loop representation may be nonfaithful at special delta, so no semisimplicity or categorification conclusion is used. QSM owns quantum integrability, Yang–Baxter and Hopf/Hecke representation foundations; these finite classical identities do not require duplicated algebra modules. Hecke baxterization is reserved nonlogical context until that exact QSM interface is supplied.

### def-csm-frontier-finite-potts-fk (definition, mathematics)

For finite graph, integer Q>=2 and nonnegative v_e, define spin weights and random-cluster weights Q^k(A) product_e v_e with their finite positive normalizers.

Proof/definition route: Finite sums; zero activities allowed.

### thm-csm-frontier-edwards-sokal (theorem, mathematics)

The component-coloring joint law has the Potts and FK marginals and satisfies P(sigma_x=sigma_y)=1/Q+(1-1/Q)P(x connected y).

Proof/definition route: Expand edge factors and count Q choices per connected component; condition on connection event.

### alg-csm-frontier-fk-connectivity-transfer (algorithm, mathematics)

Input a finite ordered strip graph, Q>=2 and v_e>=0; start from empty connectivity, process each edge by identity plus v_e times join, detach vertices after their final edge multiplying by Q on closed components, then sum terminal weights.

Proof/definition route: Specify deterministic edge ordering and component closure rule.

### thm-csm-frontier-fk-transfer-correct (theorem, mathematics)

The connectivity transfer terminates after finitely many edges and returns Z_FK exactly in exact arithmetic.

Proof/definition route: Induct on processed-edge subsets, track live partition and already closed cluster factor; final detach accounts for every component exactly once.

### lem-csm-frontier-medial-loop-normalization (lemma, mathematics)

For a finite connected planar graph with specified free exterior boundary, the FK partition polynomial can be rewritten as a medial noncrossing-loop sum with loop value sqrt(Q), with the graph-dependent Euler prefactor and edge weights explicitly retained.

Proof/definition route: For each edge subset use planar Euler k(A)-k(Astar)=|V|-|A|-1 and number of medial loops k(A)+k(Astar)-1. Hence Q^k(A) v^|A|=Q^(|V|/2) (sqrt(Q))^loops product_(e in A)(v_e/sqrt(Q)), under the convention that boundary loops count the exterior component once. Verify the single-edge and empty connected graph cases; derive before transfer use.

B leaf obligations: ex-csm-frontier-potts-two-vertices: For a single edge the FK normalizer is Q²+Qv and the same-color probability is (1+v)/(Q+v). Verification: Enumerate empty and occupied edge subsets and verify direct spin count.

Sources: retained.

## csm-frontier-hydrodynamic-ssep — Diffusive hydrodynamics from the symmetric exclusion process

On the discrete d-torus of mesh 1/N, eta_x in {0,1}; each unordered nearest-neighbor bond swaps its endpoint occupations at rate N². Define pi_t^N=N^(-d)sum_x eta_x(t)delta_(x/N). Assume initial empirical measures converge in probability against smooth tests to rho_0 dx with 0<=rho_0<=1. For G smooth periodic, generator summation by parts gives L <pi,G>=<pi,Delta_N G>. The bracket is bounded by C_G T N^(-d), because each jump is N^(-d)(eta_y-eta_x)(G_x-G_y), the bond count is O(N^d), and |G_x-G_y|<=C/N. Doob therefore removes the martingale in probability.

Use backward heat tests G_s=P_(t-s)G to cancel drift directly; uniform discrete/continuous Laplacian error tends to zero. This proves at each fixed t convergence of <pi_t,G> to integral rho_t G where rho solves partial_t rho=Delta rho on the continuum torus. A finite time mesh plus bounded drift gives uniform-in-time convergence for smooth tests. No replacement lemma is needed for this gradient model. This theorem does not claim Navier–Stokes from Newtonian mechanics. Conservation and maximum principle are inherited from the explicit heat semigroup; physical time/length conversion fixes diffusion constant ell_0²/t_0, and exclusion is a chosen stochastic lattice model.

### def-csm-frontier-ssep-diffusive-model (definition, mathematics)

Define SSEP on (Z/NZ)^d by nearest-neighbor unordered-bond swaps at rate N², with empirical measure N^(-d)sum eta_x delta_(x/N).

Proof/definition route: Finite generator; rate scaling and occupation-conserving state sectors explicit.

### lem-csm-frontier-ssep-bracket (lemma, mathematics)

For smooth periodic G, the empirical-field martingale drift is <pi,Delta_N G> and its bracket on [0,T] is bounded by C_G T N^(-d).

Proof/definition route: Compute each bond jump, square, sum rates and use gradient bound.

### thm-csm-frontier-ssep-heat-limit (theorem, mathematics)

If initial empirical measures converge in probability to rho_0 dx with 0<=rho_0<=1, then for every smooth periodic G and T finite, sup_(t<=T)|<pi_t^N,G>-integral rho_t G| tends to zero in probability, where rho_t is the heat solution with datum rho_0.

Proof/definition route: Backward heat test, bracket estimate, Fourier heat construction, uniform Laplacian consistency and time mesh; author heat construction locally in proof.

B leaf obligations: ex-csm-frontier-ssep-density-mode: An initial density rho_0(x)=a+b cos(2pi k.x), with |b|<=min(a,1-a), evolves as a+b exp(-4pi²|k|²t) cos(2pi k.x). Verification: Fourier diagonalization; these are density predictions conditional on SSEP, not measured diffusion.

Sources: mft.

## csm-frontier-macroscopic-fluctuations — Hydrodynamic fluctuation action and nonequilibrium quasipotential

Fix the normalization before comparing formulas. For SSEP bond rate N², use D=1 and mobility chi(rho)=rho(1-rho); current fluctuations have covariance 2chi and action (1/4) integral |j+grad rho|²/chi subject to partial_t rho+div j=0. Define it first on smooth profiles bounded in [epsilon,1-epsilon] and smooth periodic currents. The action is a definition, not proof of a dynamical LDP. A complete SSEP dynamical-LDP branch needs separately authored exponential martingale, superexponential replacement and density/extension lemmas; reserve exact theorem with these explicit interfaces and do not use it as supplier before they are proved.

A tractable exact consequence is the equilibrium time-reversal identity: for f(r)=r log r+(1-r)log(1-r), f''=1/chi, integrate continuity by parts to get d/dt integral f(rho)=integral grad rho.j/chi. Since |j+grad rho|²-|-j+grad rho|²=4 j.grad rho, the action of a path minus the time-reversed path is the endpoint free-energy difference. On a fixed mean-density torus, the variational quasipotential equals relative Bernoulli free energy for smooth strictly interior profiles: completion of squares gives lower bound, and reverse heat flow approached from t=-infinity gives matching infimum. The infinite-time infimum need not be attained in finite time. Boundary driven quasipotentials may be nonlocal; no local ansatz is assumed.

### def-csm-frontier-ssep-current-action (definition, mathematics)

For smooth periodic rho in [epsilon,1-epsilon] and j satisfying continuity, define I(rho,j;0,T)=one quarter integral |j+grad rho|²/[rho(1-rho)].

Proof/definition route: Admissible smooth paths and fixed positive epsilon ensure finite integrand.

### thm-csm-frontier-mft-reversal-identity (theorem, mathematics)

For the smooth admissible paths, I(rho,j)-I(theta rho,-theta j)=integral f(rho_T)-integral f(rho_0), where theta reverses time and f(r)=r log r+(1-r)log(1-r).

Proof/definition route: Expand squares, substitute f second derivative, use periodic integration by parts and continuity.

### thm-csm-frontier-equilibrium-quasipotential (theorem, mathematics)

For smooth strictly interior target rho on a torus with mean rbar in (0,1), the infinite-horizon action infimum from homogeneous rbar is integral [rho log(rho/rbar)+(1-rho)log((1-rho)/(1-rbar))].

Proof/definition route: Reversal identity gives lower bound; reverse heat relaxation, smooth positive bounds and limiting small initial correction give upper bound; state limiting horizon precisely.

B leaf obligations: ex-csm-frontier-mft-nonlocal-warning: For two-site SSEP with bond swap rate 1, left insertion/removal rates alpha,1-alpha and right rates beta,1-beta, where alpha,beta are in (0,1), the stationary occupation covariance is -(alpha-beta)^2/18. The stationary law is not a product when alpha differs from beta. Verification: Stationarity gives m_1=(2alpha+beta)/3 and m_2=(alpha+2beta)/3, and L(eta_1 eta_2)=alpha eta_2+beta eta_1-2eta_1 eta_2. Thus E product=(alpha m_2+beta m_1)/2; subtract m_1m_2. This is a finite correlation example, not a derivation of the continuum quasipotential.

Sources: mft.

## csm-frontier-kinetic-scaling — Kinetic relaxation, diffusive scaling and entropy dissipation

Retain the smooth mean-field Dobrushin/Wasserstein limit and cutoff Boltzmann entropy theorem with their original assumptions. Add a fully rigorous kinetic-to-diffusion model: two velocities +/-c on a one-dimensional periodic domain, turning rate lambda/epsilon² and transport speed c/epsilon. For nonnegative f_plus,f_minus solving partial_t f_plus+(c/epsilon)partial_x f_plus=(lambda/epsilon²)(f_minus-f_plus), and the opposite sign equation, let rho=f_plus+f_minus and j=(c/epsilon)(f_plus-f_minus). Then partial_t rho+partial_x j=0 and epsilon² partial_t j+2lambda j=-c² partial_x rho. For each fixed Fourier mode, eigenvalues solve epsilon²r²+2lambda r+c²k²=0: a slow eigenvalue tends to -c²k²/(2lambda), the fast mode decays on epsilon². Uniform L² contraction and smooth initial Fourier tails yield rho^epsilon convergence to heat with diffusivity c²/(2lambda), for well-prepared smooth data. Prove the uniform energy estimate before interchanging the infinite mode sum.

This exact telegraph limit is not a derivation of the nonlinear Boltzmann equation from hard spheres. Boltzmann–Grad, mean-field and hydrodynamic scalings keep different parameters fixed. Lanford short-time convergence, noncutoff coercivity and nonlinear Boltzmann-to-fluid limits are established literature programs with large unmet local proof obligations; long-time general hard-sphere derivation is not supplied by molecular chaos. Add no blanket global existence assertion or open-problem dependency.

### def-csm-frontier-two-velocity-scaling (definition, mathematics)

On the periodic line define two-velocity transport with speeds +/-c/epsilon, turning rate lambda/epsilon², c,lambda>0, and nonnegative smooth initial densities.

Proof/definition route: Explicit linear periodic PDE and scaling parameters.

### lem-csm-frontier-two-velocity-contraction (lemma, mathematics)

The two-velocity evolution preserves nonnegativity and mass and contracts the L² norm of the pair.

Proof/definition route: Positive transport/turning semigroup by finite alternating-step limit; multiply PDEs by f and integrate, dissipation -(2lambda/epsilon²)norm(f_plus-f_minus)².

### thm-csm-frontier-two-velocity-heat-limit (theorem, mathematics)

For smooth well-prepared periodic initial data f_plus=f_minus=rho_0/2, rho^epsilon converges in L² uniformly on bounded time intervals to heat evolution with D=c²/(2lambda).

Proof/definition route: Solve each Fourier 2x2 mode, show fixed-mode uniform convergence including initial layer amplitude, then control tails by contraction.

B leaf obligations: ex-csm-frontier-distinct-scaling-limits: Mean-field N^(-1) interaction, hard-sphere Boltzmann–Grad N a^(d-1) fixed and two-velocity diffusive scaling are distinct model limits. Verification: Write dimensions and conserved quantities for each; this is a comparison, not mutual implication.

Sources: retained, mft.

## csm-frontier-fluctuation-theorems — Path entropy production, fluctuation symmetry and work identities

For a finite irreducible continuous-time chain q with q_xy>0 iff q_yx>0 and strictly positive stationary pi, define stationary time-reversal entropy S_T=sum_jumps log[pi_x q_xy/(pi_y q_yx)]. The path-density ratio forward/reversed equals exp(S_T): holding-time factors cancel under reversal and the initial/final pi ratio telescopes into jumps. Integrating the Radon–Nikodym identity gives E exp(-S_T)=1 and E S_T>=0. In stationarity S_T has the exact detailed fluctuation relation P(S_T in ds)=exp(s)P(S_T in -ds) as a measure identity, with no density assumption.

For driven finite-state protocols with energies E_x(t), a differentiable protocol and rates satisfying instantaneous detailed balance against pi_t proportional to exp(-beta E_x(t)), define work W=integral partial_t E_(X_t)(t)dt and delta F=-beta^(-1)log(Z_T/Z_0). Starting at pi_0, a tilted forward equation or Feynman–Kac finite-matrix proof yields E exp(-beta W)=exp(-beta delta F). Work is in joules, beta in J^-1, entropy S dimensionless, and k_B S has J/K units. Time-dependent energy shifts change W and delta F equally. The identity does not give a low-variance free-energy estimator: exponential averages can be dominated by rare paths. Nonequilibrium reservoirs require local detailed balance as physical input, not deduction from an arbitrary rate matrix.

### def-csm-frontier-stationary-path-entropy (definition, mathematics)

For finite irreducible q with symmetric support and invariant pi>0, define S_T as the sum over jumps of log[pi_x q_xy/(pi_y q_yx)] for a stationary path.

Proof/definition route: Permit nonreversible q explicitly; finite rates and finite T imply nonexplosion.

### thm-csm-frontier-finite-path-fluctuation (theorem, mathematics)

The stationary path and its time reversal have likelihood ratio exp(S_T); E exp(-S_T)=1 and P(S_T in ds)=exp(s)P(S_T in -ds).

Proof/definition route: Write ordered jump-time densities for every number of jumps, cancel holding factors, telescope pi, then push forward by S.

### thm-csm-frontier-finite-jarzynski (theorem, mathematics)

For finite energies E_x(t) of class C^1 on [0,T], beta>0, finite bounded continuous jump rates with instantaneous Gibbs detailed balance and initial law pi_0, define W=integral_0^T partial_t E_(X_t)(t)dt and Z_t=sum_x exp(-beta E_x(t)). Then E exp(-beta W)=Z_T/Z_0.

Proof/definition route: Prove finite Feynman–Kac ODE; weighted law g_x(t)=exp(-beta E_x(t))/Z_0 solves it exactly.

B leaf obligations: ex-csm-frontier-biased-ring-entropy: For a homogeneous ring with clockwise rate a>0 and counterclockwise rate b>0, stationary pi is uniform and S_T=(N_clock-N_counter)log(a/b). Verification: Compute jump product and mean entropy production (a-b)log(a/b)>=0; reversibility iff a=b.

Sources: ldp.

## csm-frontier-sampling-certificates — Gibbs sampling, exact coupling and finite-error certificates

Use actual published MH algorithm and correctness suppliers; neither reversibility nor stationarity alone gives mixing. New finite-spin heat-bath procedure inputs positive finite Gibbs weights, a site schedule of iid uniform choices and iid uniform [0,1] numbers, and a fixed number t of updates; output configuration and sample observables. At one update select site uniformly and resample from its exact conditional using cumulative intervals. All random seeds and endpoint conventions are defined. Under Dobrushin contraction c<1 for n sites, a coupled Hamming distance contracts by 1-(1-c)/n per update, so TV error <=n exp(-(1-c)t/n). For bounded f in [a,b], bias <=(b-a)TV. A finite chain CLT is not an independent sample confidence bound.

For ferromagnetic Ising use monotone grand coupling: all-minus and all-plus updates driven by identical site/uniform seeds; define coupling from the past by doubling negative horizon, replaying a consistent stored iid seed stream and stopping when extremes coalesce at time zero. Prove conditional exactness by monotonic sandwich, stationarity and almost-sure coalescence; finite positive heat-bath probabilities yield a positive-probability all-sites forcing block so termination is geometric in blocks, although runtime can be prohibitive. For Q>=2 FK weights, define Swendsen–Wang bond activation v/(1+v) on equal-spin edges and independent component recoloring; use Edwards–Sokal conditional-law composition for invariance. No uniform critical mixing bound is asserted.

Finite error budgets combine truncation, arithmetic and statistical errors separately. An interval partition-function algorithm can enumerate all finite states with directed-rounded positive weights to enclose Z; exponential state cost is acknowledged. A convergence diagnostic is evidence, not a proof of equilibrium.

### alg-csm-frontier-heat-bath-update (algorithm, mathematics)

Input finite positive Gibbs weights, initial configuration and integer t>=0. Repeat t times: choose a site uniformly, draw independent U uniform on [0,1], and replace that spin by the first cumulative conditional interval containing U. Output final configuration.

Proof/definition route: Operational definition; half-open intervals and last-interval U=1 convention.

### thm-csm-frontier-heat-bath-tv-bound (theorem, mathematics)

For n sites and Dobrushin row and column sums bounded by c<1, the random-scan heat-bath chain has worst-start TV distance <=n exp(-(1-c)t/n).

Proof/definition route: Maximal site couplings and Hamming expected contraction; column bound is explicit to justify unweighted Hamming norm.

### alg-csm-frontier-monotone-cftp (algorithm, mathematics)

Input ferromagnetic finite Ising model and a stored iid site/uniform stream indexed by negative integers; replay common updates from all-minus and all-plus from horizons -1,-2,-4,...; stop when outputs agree and return that common state.

Proof/definition route: Store and reuse seeds on overlaps; no resampling old randomness.

### thm-csm-frontier-monotone-cftp-exact (theorem, mathematics)

With finite positive Ising heat-bath conditionals and finite sites, monotone CFTP terminates almost surely and its output has exactly the Gibbs law.

Proof/definition route: Monotonicity, positive finite forcing block, probability-one coalescence, then sandwich a stationary chain coupled from the same past.

### alg-csm-frontier-swendsen-wang (algorithm, mathematics)

For integer Q>=2 ferromagnetic finite Potts weights, activate each equal-spin edge independently with probability v_e/(1+v_e), then recolor each bond component independently uniformly in Q colors.

Proof/definition route: Two explicit conditional draws.

### thm-csm-frontier-swendsen-wang-invariance (theorem, mathematics)

The Swendsen–Wang procedure preserves the finite Potts Gibbs law; it terminates after finite bond and component operations.

Proof/definition route: Composition of Edwards–Sokal conditional kernels preserves the joint law and hence spin marginal; no efficiency claim.

B leaf obligations: ex-csm-frontier-metastable-diagnostic: A finite low-temperature chain can appear stationary within one phase while its worst-start mixing time is large. Verification: Use a two-well finite energy model; compute bottleneck exit probability and show diagnostic failure is compatible with exact invariance.

Sources: lpw, retained.

## csm-frontier-inverse-gibbs — Inverse Gibbs models, identifiability and correlated uncertainty

For finite sample space and sufficient statistic T in R^k, pi_theta(x)=exp(theta.T(x)-A(theta)) with A=log sum exp(theta.T) relative to a fixed positive base measure. Derive gradient A=E T and Hessian A=Cov(T). The affine span of T determines identifiability: Hessian positive definite exactly when no nonzero a has a.T constant. For iid configurations log likelihood is n(theta.Tbar-A(theta)); unique finite MLE exists when Tbar lies in relative interior of the convex hull in a minimal parameterization. Boundary data can yield diverging estimates; strict concavity by itself does not prove existence. Bayesian inference uses a proper prior on a specified standard-Borel parameter space; exact finite likelihood produces a proper posterior when its predictive normalizer is positive. Posterior existence is distinct from concentration and computation.

Define pseudo-likelihood as product of one-site Gibbs conditionals, with exact boundary and neighborhood specified. It is generally not the joint likelihood and does not yield an exact Bayesian posterior for that joint model. Under identifiability and an explicit spatial mixing/ergodic theorem a consistency route is possible, but no unproved asymptotic statement is used here. Sensor noise and coarse-graining require a likelihood kernel y|sigma; sum hidden spins before likelihood evaluation. For an MCMC series, use a proved finite-state Markov-chain CLT and its long-run variance including autocovariances; do not substitute iid Fisher information. If using a root CLT supplier, carry its actual irreducibility, integrability, stationarity/initialization and AC clauses. New exact iid inference claims remain finite and elementary.

### def-csm-frontier-inverse-finite-exponential (definition, mathematics)

For finite X, positive reference weights and statistic T:X->R^k, define A(theta)=log sum_x w(x)exp(theta.T(x)) and the normalized Gibbs family.

Proof/definition route: Finite normalization positive everywhere.

### thm-csm-frontier-inverse-identifiability (theorem, mathematics)

The Hessian of A is Cov_theta(T), and it is positive definite for every theta iff no nonzero linear combination of T is constant on X.

Proof/definition route: Differentiate finite sums; a variance vanishes iff the variable is constant on the full positive support.

### thm-csm-frontier-finite-mle-existence (theorem, mathematics)

In a minimal finite exponential family the iid MLE is finite and unique precisely when the sample sufficient-statistic mean lies in the relative interior of conv(T(X)).

Proof/definition route: Interior supplies coercivity of A(theta)-theta.Tbar by a compact unit-sphere separation bound; boundary exposes a direction with positive derivative preventing finite maximum.

### def-csm-frontier-latent-gibbs-observation (definition, mathematics)

A latent Gibbs observation model consists of a proper prior on theta, finite Gibbs state pi_theta and a probability kernel K(y|sigma,theta); its likelihood is sum_sigma pi_theta(sigma)K(y|sigma,theta).

Proof/definition route: Specify measured datum and latent configuration separately.

### thm-csm-frontier-inverse-posterior (theorem, mathematics)

For the latent Gibbs model on standard-Borel parameter/data spaces with proper prior, a posterior kernel exists under AC and is unique only prior-predictive almost everywhere.

Proof/definition route: Apply exact posterior supplier hypotheses; dominated positive likelihood gives Bayes formula only where normalizer is finite positive.

B leaf obligations: ex-csm-frontier-boundary-mle: All-plus iid observations in a Bernoulli spin family have no finite field MLE; the likelihood increases toward field +infinity. Verification: Sufficient mean is an exposed endpoint; differentiate logistic log likelihood.

Sources: retained, ldp.

## csm-frontier-planar-critical-point — Planar random clusters, sharpness and the exact square-lattice critical point

Extend finite FK to every real q>=1 with edge parameter p in (0,1), weights p^o(1-p)^c q^k, and boundary partitions xi. A boundary partition wires vertices before counting components. Prove FKG from k(A union B)+k(A intersection B)>=k(A)+k(B) and the finite lattice-condition induction, not by assuming independence. Spatial Markov conditioning identifies external connections as a boundary partition. Boundary monotonicity and exhaustion give free and wired infinite-volume measures. Define p_c by positivity of wired percolation probability; prove coincidence of free/wired thresholds as part of the theorem route, without claiming equality of measures at p_c.

For planar dual boundary conditions the dual parameter satisfies p pstar/[(1-p)(1-pstar)]=q. Derive this by Euler component counting including the outer-face boundary factor. Self-duality alone does not prove criticality. The exact square-lattice theorem requires the substantial new RSW and sharp-threshold interfaces below. RSW here is the source's periodic-torus assertion: for fixed aspect alpha>1, uniform positive probability of crossing [0,alpha n) by [0,n), for every ambient torus side m>alpha n at the self-dual point. It is not an unjustified free-boundary RSW statement for all q. Influence bounds and differential inequalities amplify crossing probabilities; the source's boundary-sensitive concatenation then constructs an infinite cluster above p_sd. Duality and a separate finite-size criterion establish exponential connectivity decay below p_sd. The planned proof follows actual source Sections 1–4, with no shortcut from torus crossings to free-boundary critical crossings.

Consequently for real q>=1 on Z², p_c=sqrt(q)/(1+sqrt(q)); for p<p_c there are finite positive C,c with connection probability <=C exp(-c|x-y|). For integer Q>=2 Potts interaction energy -J sum delta_spin, beta_c J=log(1+sqrt(Q)); for Ising interaction -J_Ising sum sigma_x sigma_y, the coupling conversion is J_Potts=2 J_Ising and beta_c J_Ising=one half log(1+sqrt(2)). No critical exponent, critical measure uniqueness or order of transition follows just from this theorem. The historical source's 2013 open-status paragraphs are not used as current 2026 status evidence.

### def-csm-frontier-fk-real-boundaries (definition, mathematics)

For real q>=1, p in (0,1), finite graph and boundary partition xi, define FK mass proportional to p^o(1-p)^c q^(k after wiring xi).

Proof/definition route: Finite positive normalization; real q extension independent of spin coloring.

### lem-csm-frontier-fk-fkg-spatial-markov (lemma, mathematics)

Finite FK with q>=1 is positively associated, satisfies the spatial Markov property, and is stochastically increasing in p and boundary wiring.

Proof/definition route: Prove supermodular component count, finite lattice-condition induction, exact conditioned edge weights and monotone single-edge coupling.

### lem-csm-frontier-fk-planar-duality (lemma, mathematics)

On a finite planar graph with dual boundary convention, complementing edges sends FK(p,q) to dual FK(pstar,q), where pstar/(1-pstar)=q(1-p)/p.

Proof/definition route: Euler formula with exterior face and wired/free swap; retain explicit partition normalization prefactor.

### thm-csm-frontier-fk-torus-rsw (theorem, mathematics)

For q>=1 and fixed alpha>1, at p_sd=sqrt(q)/(1+sqrt(q)) there is c(alpha,q)>0 such that every admissible rectangle of side alpha n by n in a periodic square torus of side m>alpha n has horizontal crossing probability at least c(alpha,q).

Proof/definition route: Source Theorem 5: square bound from self-duality, exploration/reflection gluing Lemma 7, aspect enlargement Proposition 8, iterate; retain periodic boundary throughout.

### lem-csm-frontier-fk-influence-threshold (lemma, mathematics)

For fixed q>=1 and epsilon>0, a finite FK model with p in [epsilon,1-epsilon] and any increasing event A has an edge e with I_A(e)=P(A|omega_e=1)-P(A|omega_e=0) at least c(q,epsilon)P(A)(1-P(A))log(|E|)/|E| for |E|>=2.

Proof/definition route: Full missing local proof follows the source Theorem 12 and its cited monotone-measure influence argument; source Sections 3–4 alone state the deepest input, so author the finite revealment/entropy estimate rather than treating the citation as proof.

### lem-csm-frontier-fk-crossing-amplification (lemma, mathematics)

For q>=1, periodic crossing estimates at p_sd, the FK differential influence inequality and boundary monotonicity imply percolation for p>p_sd and exponential two-point decay for p<p_sd on Z².

Proof/definition route: Source Section 4: symmetric torus sharp threshold, wired rectangle amplification, boundary-aware path concatenation, then subcritical moment and finite-size decay bounds. Explicitly author the concatenation and decay subarguments before use.

### thm-csm-frontier-fk-square-critical-point (theorem, mathematics)

For every real q>=1 the square-lattice FK threshold is p_c=sqrt(q)/(1+sqrt(q)); below p_c every infinite-volume FK state has two-point connectivity bounded by C(p,q)exp(-c(p,q)|x-y|).

Proof/definition route: Combine both sides of threshold and free/wired comparison; do not infer behavior at p_c.

### thm-csm-frontier-potts-square-critical-temperature (theorem, mathematics)

For integer Q>=2 and square-lattice Potts energy -J sum_edge delta_spin with J>0, the critical inverse temperature obeys beta_c J=log(1+sqrt(Q)).

Proof/definition route: Set p=1-exp(-beta J), use wired order/connectivity identity and monotonic thermodynamic limits.

B leaf obligations: ex-csm-frontier-ising-coupling-conversion: Square-lattice zero-field Ising with energy -J sum sigma_x sigma_y has beta_c J=log(1+sqrt(2))/2. Verification: Use delta_(sigma_x=sigma_y)=(1+sigma_x sigma_y)/2, retaining the constant energy shift.

Sources: planarfk.

## csm-frontier-rare-event-numerics — Rare-event reweighting, overlap and certified partition ratios

Reuse the published importance-sampling procedure with its exact support and integrability conditions; an unknown partition constant is not an admissible input to an algorithm that assumes it known. For finite Gibbs reference pi_0 and target unnormalized weight w_1, estimate Z_1/Z_0 by iid exact pi_0 draws and R=w_1/w_0. The estimator is unbiased, Var(mean R)=Var(R)/n, and relative variance is chi²(pi_1||pi_0)/n. This derives a concrete overlap barrier: in n-volume iid product models chi² grows multiplicatively, so a small parameter change can already require exponential sample cost. Self-normalized observable estimates are generally biased at finite sample size even if their ratio CLT holds under the actual supplier's second moments. No effective sample size heuristic replaces that proof.

Define a bridge-ratio procedure inputs a finite ordered list of positive finite weights w_0,...,w_K and independent exact samples from each normalized pi_k. Return product of sample means of w_(k+1)/w_k. Because independent stages have unbiased ratios, its mean telescopes to Z_K/Z_0; relative second moment is the product over stages of [1+chi²(pi_(k+1)||pi_k)/n_k]. If the same trajectories are reused or the bridge is chosen adaptively from the samples, that product formula no longer follows. This is an exact finite result; annealed importance sampling with correlated kernels has a distinct path-space correctness proof and is not conflated with it.

A certified finite partition procedure takes rational interval enclosures of each positive configuration weight (not raw transcendental energies), enumerates all configurations or uses the FK transfer algorithm with interval operations, sums by outward rounding, and returns Z enclosure and normalized expectation enclosure when the denominator's lower bound is positive. The interval supplier proves finite arithmetic enclosure, not exp/log enclosure; requiring externally certified input weight intervals avoids silently assuming those absent primitives. Termination is finite and cost may be exponential. Sampling bounds and arithmetic bounds are separate outputs.

### thm-csm-frontier-partition-ratio-overlap (theorem, mathematics)

For positive weights on a finite space and iid pi_0 samples, the sample mean of w_1/w_0 is unbiased for Z_1/Z_0 and its relative variance is chi²(pi_1||pi_0)/n.

Proof/definition route: Finite change of measure, normalize R by Z_1/Z_0, compute its second moment exactly.

### alg-csm-frontier-independent-bridge-ratios (algorithm, mathematics)

Input positive finite weights w_0,...,w_K and independent stages of n_k>=1 iid exact pi_k draws; compute each mean w_(k+1)/w_k and return their product.

Proof/definition route: K finite; no approximate Gibbs samples accepted by this exact contract.

### thm-csm-frontier-bridge-ratio-variance (theorem, mathematics)

The independent bridge-ratio output is unbiased for Z_K/Z_0 and its relative second moment equals product_k[1+chi²(pi_(k+1)||pi_k)/n_k].

Proof/definition route: Stage independence factors expectations and second moments; use overlap theorem for each.

### alg-csm-frontier-interval-finite-partition (algorithm, mathematics)

Input a finite enumerated configuration space, finite rational intervals enclosing every strictly positive weight, and finite observable intervals. Add and multiply by outward-rounded interval operations, then divide observable-weight sum by partition interval only if its lower bound is positive; otherwise return unresolved denominator.

Proof/definition route: Exact finite enumeration and defined failure branch; no unprovided exponential primitive.

### thm-csm-frontier-interval-partition-certificate (theorem, mathematics)

The interval finite-partition procedure terminates and encloses the exact Z and, on successful division, the exact normalized expectation for every admissible input weight and observable choice.

Proof/definition route: Induct on finite expression DAG using actual enclosure theorem; failure branch asserts no ratio enclosure.

B leaf obligations: ex-csm-frontier-product-overlap-explosion: If pi_0 and pi_1 are distinct positive iid product laws on n coordinates, then 1+chi²(pi_1||pi_0)=(1+chi²(one-site target||one-site reference))^n. Verification: Factor finite second-moment sum coordinate by coordinate; prove exponential overlap cost for fixed distinct one-site laws.

Sources: ldp, lpw.


## Exact small-cost initial bridge for the equilibrium action infimum

Let u_T=P_T rho tend smoothly to the constant mean rbar. On a unit interval interpolate r_s=rbar+s(u_T-rbar), solve -Delta psi_T=u_T-rbar with zero mean, and choose j_s=grad psi_T. Then partial_s r_s+div j_s=0. Positivity remains uniform, and both j_s and grad r_s tend uniformly to zero, so the action of this bridge tends to zero. Append the reverse heat path from u_T to rho. The reversal identity gives its action as F(rho)-F(u_T), proving the upper bound in the infinite-horizon infimum without requiring a finite-time minimizing path.
