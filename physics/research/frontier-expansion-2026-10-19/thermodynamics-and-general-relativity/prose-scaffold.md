# Thermodynamics and general relativity — successor prose scaffold

Draft planning, 2026-10-19. Existing combined subject, distinct from standalone GR. Preserve all 31 canonical authored pairs, all their interfaces, and all original full-source obligations. Register the two previously unregistered finite-entropy audit proposals, then fifteen research-proximate additions. No production content, registry or engine state is changed. Future A/B pages have compact frontmatter only; no page summary is authored here.

baseline.json binds the exact 62 canonical rows, their identity hashes, every retained research claim and the original source hashes. Current production statements supersede provisional old research wording when authored. The old track's five complete source designs and linked worker proofs remain required reading before any future dispatch. Historical closure receipts do not review this expansion. The audit's corrected Jüttner measure, action reference, normalizer, moments and both entropy limitation pairs remain intact. No old promise is narrowed to fit an addition.

[Retained complete track](../../plan-thermodynamics-and-general-relativity-track.md)

[Original full prose](../../extended-frameworks-2026-10-03/thermodynamics-and-general-relativity/prose-scaffold.md)

[Original complete inventory](../../extended-frameworks-2026-10-03/thermodynamics-and-general-relativity/proposed-inventory.json)

[Audit successor](../../scaffold-audit-2026-10-16/thermodynamics-and-general-relativity/report.md)

## Global contracts

Use smooth oriented and time-oriented Lorentz manifolds of signature $(-,+,+,+)$; every integration domain, field algebra and horizon cut is specified locally. Retain Countable Choice wherever exact suppliers require it. Finite spectral entropy is in nats unless multiplied by $k_B$. Energy inverse temperature has physical-time KMS width $\hbar\beta$, while rapidity is dimensionless. Geometric surface gravity has inverse-length units, frequency surface gravity is $c\kappa_{geom}$ and acceleration surface gravity is $c^2\kappa_{geom}$. Natural-unit modules declare their constants. In SI, $S_{EH}=k_Bc^3A/(4G\hbar)$ and $T_H=\hbar c\kappa_{geom}/(2\pi k_B)$. Charges use a fixed Killing normalization at infinity or a reference wall. Dimensional agreement does not identify distinct entropies or construct equilibrium.

Mathematical A pages contain only mathematical claims and have no physical premises. Postulates adopt explicit models; physical theorems prove conditional consequences. A defined interface stipulates data and does not assert that they exist beyond the model. In particular free-field wedge geometry and collapse scattering remain explicit supplied model inputs pending their separate local construction. No deep cited theorem is silently used as an unproved supplier. B companions are terminal leaves; the terminal open-problem item is not a logical premise.


## tgr-mhs05 — Finite-regulator entropy mathematics

A page tgr-mhs05; B companion tgr-mhs05-examples. Category thermodynamics-and-general-relativity-mathematics; library mathematics. Earlier A/P pages: none.


### A interfaces


#### def-tgr-finite-cutoff-outside-entropy — Finite-regulator outside density and entropy

Kind: definition. Domain: mathematics. Domain: mathematics. Domain: mathematics.

For nonzero finite complex Hilbert spaces H_in,H_out and a density matrix rho on their tensor product define rho_out by (rho_out)_ab=sum_i rho_(i,a),(i,b). Define S_out=-k_B sum_j lambda_j log lambda_j with 0 log 0=0. The basis-independent trace-pairing identity defines the same partial trace. Positive trace-one output and entropy well-definedness are proved by the explicit finite matrix argument in the retained source.


Proof or definition route: For y, sum_i inner(e_i tensor y,rho(e_i tensor y))>=0; trace sums to one. Trace pairing gives uniqueness and basis independence. Finite spectral decomposition defines entropy. Retain complete C6 argument.

Source records: retained-c6.


#### lem-tgr-finite-cutoff-mode-entropy-growth — Finite mode cutoffs can have unbounded entropy

Kind: lemma. Domain: mathematics. Domain: mathematics. Domain: mathematics.

For N outside qubits in the maximally mixed state I/2^N, S_out=k_B N log 2, which tends to infinity as N tends to infinity.


Statement references:

def-tgr-finite-cutoff-outside-entropy


Proof or definition route: There are 2^N eigenvalues 2^-N. Sum the finite entropy and take the scalar limit.

Source records: retained-c6.


#### lem-tgr-renormalization-finite-part-ambiguity — Finite subtraction ambiguity

Kind: lemma. Domain: mathematics. Domain: mathematics. Domain: mathematics.

If real sequences x_N,r_N satisfy x_N-r_N tending to finite L, then for any real a the prescription r_prime_N=r_N-a gives limit L+a. Existence alone does not select the finite subtraction.


Proof or definition route: Subtract and take limits; retain complete C6 source argument.

Source records: retained-c6.


### B interfaces


#### ex-tgr-generalized-entropy-not-monotone-from-definition — Additive entropy definition does not imply monotonicity

Kind: example. Domain: mathematics. Domain: mathematics. Domain: mathematics.

For fixed geometric entropy and a one-qubit outside factor, changing specified data from I/2 to diag(1,0) decreases their summed entropy by k_B log 2. No physical evolution is asserted.


Statement references:

def-tgr-finite-cutoff-outside-entropy


Proof or definition route: Compute both spectral entropies; this tests only a definition-based inference.

Source records: retained-c6.

## tgr-phs05 — Regulated generalized-entropy model

A page tgr-phs05; B companion tgr-phs05-examples. Category thermodynamics-and-general-relativity; library physics. Earlier A/P pages: tgr-i01, tgr-mhs05, tgr-phs03, tgr-phs01.


### A interfaces


#### def-tgr-regulated-generalized-entropy — Specified regulated generalized entropy

Kind: definition. Domain: physics. Domain: physics. Domain: physics.

On a fixed smooth classical background, fix a compact horizon section Sigma, a named sequence of finite tensor factorizations and density matrices rho_Lambda, a specified geometric functional S_grav,Lambda and all local counterterms, units and finite renormalization conditions. Define S_gen,Lambda=S_grav,Lambda+S_out,Lambda. In the area-calibrated branch S_grav,Lambda may contain k_B c^3 A/(4 G_Lambda hbar); the renormalized value is defined only if the specified sequence converges finitely in the declared scheme.


Statement references:

def-tgr-finite-cutoff-outside-entropy

lem-tgr-renormalization-finite-part-ambiguity

pthm-tgr-area-entropy-calibration


Proof or definition route: Model definition; no claim of regulator independence, continuum factorization, Hawking radiation, backreaction or monotonicity. Preserve retained PHS10 scope.

Source records: retained-c6.


### B interfaces


#### rem-tgr-generalized-entropy-no-automatic-second-law — Generalized entropy requires a separate physical inequality

Kind: remark. Domain: physics. Domain: physics. Domain: physics.

The finite-regulator sum and any finite convergent renormalized value have no monotonicity conclusion without a specified state evolution and an independent inequality proof. Classical area increase and area calibration alone do not control outside quantum entropy.


Statement references:

def-tgr-regulated-generalized-entropy

pthm-tgr-restricted-classical-area


Proof or definition route: Retain original audit qualification and compare the logically distinct inputs.

Source records: retained-c6.

## tgrx-thermal-geometry — Thermal vorticity and global equilibrium obstructions

A page tgrx-thermal-geometry; B companion tgrx-thermal-geometry-examples. Category thermodynamics-and-general-relativity-mathematics; library mathematics. Earlier A/P pages: tgr-et01, tgr-et02.


### A interfaces


#### def-tgrx-thermal-vorticity — Thermal vorticity and equilibrium domain

Kind: definition. Domain: mathematics. Domain: mathematics. Domain: mathematics.

On a connected smooth time-oriented Lorentz manifold of signature -+++, let beta be a future timelike Killing vector and alpha a dimensionless scalar. Define T=(-beta squared)^(-1/2)/k_B, u=k_B T beta and varpi_ab=-(nabla_a beta_b-nabla_b beta_a)/2. These are defined only where beta squared is negative.


Statement references:

def-tgr-stationary-thermal-carriers


Proof or definition route: Define tensor fields; check normalization and units in the local carrier.

Source records: wald.


#### prop-tgrx-equilibrium-obstructions — Rotation and charged equilibrium obstruction

Kind: proposition. Domain: mathematics. Domain: mathematics. Domain: mathematics.

For beta=b(partial_t+Omega partial_phi) in Minkowski cylindrical coordinates with c=1 and b>0, T=1/(k_B b sqrt(1-Omega squared r squared)), so the equilibrium domain is r<1/abs(Omega). A globally defined charged chemical scalar requires the closed one-form i_beta F to be exact when its transport equation is d alpha=q i_beta F; a nonzero period obstructs it.


Statement references:

def-tgrx-thermal-vorticity

lem-tgr-gauge-killing-energy

lem-tgr-thermal-killing-kinematic-equivalence


Proof or definition route: Compute norm; integrate a putative exact differential on a loop and use the fundamental theorem. No de Rham existence theorem is needed for the obstruction.

Source records: wald.


### B interfaces


#### ex-tgrx-rotating-annulus — Rigid bath and nonexact electric period

Kind: example. Domain: mathematics. Domain: mathematics. Domain: mathematics.

At Omega=1, r=1/2, b=1, the temperature is 2/(sqrt(3)k_B). A closed electric one-form C dtheta on an annulus with C nonzero has period 2 pi C and cannot equal d alpha/q globally.


Statement references:

prop-tgrx-equilibrium-obstructions


Proof or definition route: Direct substitution and loop integral.

Source records: wald.

## tgrx-hydrostatic-functional — Hydrostatic generating functionals and derivative-expansion boundaries

A page tgrx-hydrostatic-functional; B companion tgrx-hydrostatic-functional-examples. Category thermodynamics-and-general-relativity; library physics. Earlier A/P pages: tgrx-thermal-geometry, tgr-c02.


### A interfaces


#### post-tgrx-hydrostatic-effective-model — Restricted hydrostatic effective functional

Kind: postulate. Domain: physics. Domain: physics. Domain: physics.

On a compact static spatial manifold without boundary with smooth lapse N bounded away from zero, metric h, background scalar electrostatic potential Phi, fix T0>0, mu0 and a C2 pressure p(T,mu). Adopt log Z=integral sqrt(h) N p(T0/N,(mu0-q Phi)/N)/(k_B T0), with finite integral. This is a zeroth-derivative effective equilibrium model; no trace construction or microscopic convergence is asserted.


Statement references:

def-tgrx-thermal-vorticity

post-tgr-local-material-thermodynamics


Proof or definition route: Model adoption; name omitted gradients and long-wavelength regime relative to microscopic correlation length.

Source records: hydro.


#### pthm-tgrx-hydrostatic-variation — Hydrostatic susceptibility and Tolman variables

Kind: physics-theorem. Domain: physics. Domain: physics. Domain: physics.

In the adopted compact functional, variation with respect to mu0 gives partial_mu0 log Z=integral sqrt(h) p_mu/(k_B T0); its second derivative is integral sqrt(h) p_mumu/(N k_B T0). If p_mumu>=0 the charge susceptibility is nonnegative.


Statement references:

post-tgrx-hydrostatic-effective-model


Proof or definition route: Differentiate under the compact integral using bounded C2 derivatives; the factor N cancels once and leaves 1/N on the second derivative.

Source records: hydro.


### B interfaces


#### ex-tgrx-entropy-does-not-close-hydrodynamics — Equilibrium functional supplies no transport coefficient

Kind: example. Domain: physics. Domain: physics. Domain: physics.

Two adopted dynamical closures with the same p(T,mu) but different positive bulk viscosity agree on the static functional while giving different dissipative response. Thus hydrostatic data do not identify bulk viscosity.


Statement references:

post-tgrx-hydrostatic-effective-model

post-tgr-first-order-dissipation


Proof or definition route: Choose coefficients zeta=1 and zeta=2 in common units; each vanishes on equilibrium expansion theta=0, and differs for theta nonzero.

Source records: hydro.

## tgrx-noether-entropy — Covariant stationary Noether charge and Wald entropy

A page tgrx-noether-entropy; B companion tgrx-noether-entropy-examples. Category thermodynamics-and-general-relativity; library physics. Earlier A/P pages: gr-fx12-covariant-phase-space, tgr-phs01, tgr-phs03.


### A interfaces


#### def-tgrx-noether-horizon-data — Stationary covariant Noether boundary data

Kind: definition. Domain: physics. Domain: physics. Domain: physics.

Fix an oriented smooth n-dimensional spacetime, smooth finite-jet diffeomorphism-covariant Lagrangian n-form L, a chosen potential theta with delta L=E delta phi+d theta, a stationary solution and commuting linearized solution delta phi. Fix the horizon generator xi in the variation, a compact bifurcation surface B with xi=0 and nonzero surface gravity kappa, integrable asymptotic Hamiltonian charges and boundary falloff. Set J_xi=theta(phi,L_xi phi)-i_xi L and choose a locally defined Q_xi with J_xi=dQ_xi on shell; global compatibility is required on the integration region.


Statement references:

def-gr-fx-covariant-presymplectic-current

prop-gr-fx-on-shell-current-closure


Proof or definition route: Explicitly specified boundary data and primitive, not global exactness inferred from closure.

Source records: iyer.


#### pthm-tgrx-noether-first-law — Stationary first law from the covariant boundary identity

Kind: physics-theorem. Domain: physics. Domain: physics. Domain: physics.

For the specified Noether data and vanishing constraint variation, d(delta Q_xi-i_xi theta)=0. Equal oriented boundary integrals give delta H_xi=infinity integral=integral_B delta Q_xi. For a curvature-dependent Lagrangian without curvature derivatives, the horizon functional is S_W/k_B=-(2 pi/hbar) integral_B (partial L/partial R_abcd) epsilon_ab epsilon_cd with epsilon_ab epsilon^ab=-2, in c=1 action normalization; delta H_xi=(hbar kappa/(2 pi k_B)) delta S_W. Einstein-Hilbert L gives S_W=k_B A/(4 G hbar) in these units.


Statement references:

def-tgrx-noether-horizon-data


Proof or definition route: Vary J, use Cartan identity, stationary xi and linearized field equations; Stokes on compact exhaustion with supplied falloff; at B eliminate xi terms, insert nabla xi=kappa epsilon, retain fixed generator. Evaluate EH curvature derivative. Higher curvature-derivative theories require the full Euler derivative and separate extension.

Source records: iyer.


### B interfaces


#### ex-tgrx-fR-stationary-entropy — f(R) stationary entropy coefficient

Kind: example. Domain: physics. Domain: physics. Domain: physics.

For L=f(R) epsilon/(16 pi G), with a smooth compact bifurcation section and the same stationary assumptions, S_W=k_B integral_B f_prime(R) dA/(4 G hbar). It is not a dynamical monotonicity theorem.


Statement references:

pthm-tgrx-noether-first-law


Proof or definition route: Differentiate R with respect to R_abcd using antisymmetries and contract binormals.

Source records: iyer.

## tgrx-gaussian-wedge — Free scalar wedge modular geometry

A page tgrx-gaussian-wedge; B companion tgrx-gaussian-wedge-examples. Category thermodynamics-and-general-relativity; library physics. Earlier A/P pages: qsmx-modular-equilibrium, tgr-phs02, qft-f01.


### A interfaces


#### post-tgrx-wedge-modular-model — Free scalar wedge data and modular-geometric bridge

Kind: postulate. Domain: physics. Domain: physics. Domain: physics.

Take the massive real free scalar vacuum representation in 3+1 Minkowski spacetime, right wedge W={x1>|x0|}, its von Neumann algebra generated by bounded Weyl operators with real compactly supported wedge tests, and vacuum Omega. Supply cyclicity and separation, plus the geometric modular identity Delta_W^(it)=U(Lambda_W(-2 pi t)) for boosts with x0=ct and rapidity. The identity is a named additional model interface until separately proved; it is not a consequence of abstract Tomita theory.


Statement references:

def-qsmx-standard-modular-data

thm-qsmx-tomita-takesaki


Proof or definition route: Use the explicit free-field construction already owned by QFT; geometric bridge is an honest postulated model interface in this page, not an unproved theorem supplier.

Source records: hollands, wald.


#### pthm-tgrx-wedge-unruh-clock — Wedge modular bridge implies the Unruh clock temperature

Kind: physics-theorem. Domain: physics. Domain: physics. Domain: physics.

Under the wedge modular-geometric bridge the vacuum restricted to W is KMS for future boost rapidity at dimensionless strip width 2 pi. Along x0=(c squared/a)sinh(a tau/c), x1=(c squared/a)cosh(a tau/c), proper time tau has strip width 2 pi c/a and T=hbar a/(2 pi c k_B).


Statement references:

post-tgrx-wedge-modular-model

thm-qsmx-tomita-takesaki

thm-tgr-kms-orbit-time-rescaling


Proof or definition route: Match sigma_-t to future boost by the explicit minus sign, rescale rapidity=a tau/c, and equate beta hbar to the proper-time strip width. Does not deduce a Gibbs density matrix for a type III algebra.

Source records: hollands, wald.


### B interfaces


#### ex-tgrx-wedge-typeiii-warning — Finite two-mode squeeze illustrates but does not construct wedge factorization

Kind: example. Domain: physics. Domain: physics. Domain: physics.

For 0<z<1 the normalized vector sqrt(1-z) sum_n z^(n/2)|n,n> has reduced weights (1-z)z^n and entropy -log(1-z)-z log z/(1-z). It is an oscillator model and supplies no continuum inside/outside tensor factorization.


Statement references:

post-tgrx-wedge-modular-model


Proof or definition route: Geometric series, normalization and derivative of the series with absolute convergence; entropy in nats.

Source records: harlow.

## tgrx-collapse-scattering — Collapse ray tracing and greybody separation

A page tgrx-collapse-scattering; B companion tgrx-collapse-scattering-examples. Category thermodynamics-and-general-relativity-mathematics; library mathematics. Earlier A/P pages: tgr-mhs02, tgr-mhs03.


### A interfaces


#### def-tgrx-exponential-ray-channel — Specified chiral collapse channel

Kind: definition. Domain: mathematics. Domain: mathematics. Domain: mathematics.

Let u in R be outgoing retarded time in seconds and U(u)=U_H-A exp(-k u) with A,k>0, k in inverse seconds. Take a positive chiral Gaussian derivative field with vacuum two-point distribution -(4 pi)^(-1)(U-U_prime-i0)^(-2), pulled back with U_prime(u)U_prime(v). Use compact smooth test functions and distributional limits; this is an exact 1+1 channel, not a 4D scattering existence assertion.


Statement references:

lem-tgr-exponential-current


Proof or definition route: Specify pullback through the smooth diffeomorphism onto (-infinity,U_H); positivity follows by transported tests.

Source records: hollands.


#### prop-tgrx-collapse-channel-spectrum — Exponential channel thermality and greybody filtered occupations

Kind: proposition. Domain: mathematics. Domain: mathematics. Domain: mathematics.

The specified channel two-point distribution is -k squared/(16 pi) times sinh^(-2)(k(u-v-i0)/2) and has detailed balance at strip width 2 pi/k. A separately specified passive bosonic loss channel of transmissivity Gamma(omega) in [0,1], with independent vacuum environment, maps occupation n_omega to Gamma(omega)n_omega.


Statement references:

def-tgrx-exponential-ray-channel

lem-tgr-thermal-contour-spectrum


Proof or definition route: Cancel exponentials in U derivatives; reuse the exact thermal contour lemma. For b=sqrt(Gamma)a+sqrt(1-Gamma)e, expand b* b and use independent centered vacuum. A varying Gamma does not preserve a common-temperature Planck law.

Source records: hollands.


### B interfaces


#### ex-tgrx-greybody-nonplanck — Frequency filtering changes a thermal spectrum

Kind: example. Domain: mathematics. Domain: mathematics. Domain: mathematics.

If Gamma(omega1)=1 and Gamma(omega2)=0 for positive distinct frequencies then outgoing occupation is thermal at omega1 and zero at omega2; no single strictly positive temperature Planck distribution fits both.


Statement references:

prop-tgrx-collapse-channel-spectrum


Proof or definition route: At every positive temperature the Bose occupation at omega2 is strictly positive.

Source records: hollands.

## tgrx-hawking-approximation — Free collapse Hawking approximation and its proof obligations

A page tgrx-hawking-approximation; B companion tgrx-hawking-approximation-examples. Category thermodynamics-and-general-relativity; library physics. Earlier A/P pages: tgrx-collapse-scattering, tgr-phs02.


### A interfaces


#### post-tgrx-free-collapse-scattering — Specified late-time free-field collapse scattering model

Kind: postulate. Domain: physics. Domain: physics. Domain: physics.

Adopt a globally hyperbolic smooth collapse background whose exterior future domain is exactly Schwarzschild of fixed mass M>0, a real massless linear scalar field, a Hadamard state approaching the incoming ground state at spatial infinity, normalized outgoing compact-data wave packets, and the scattering/local decay estimates ensuring their late-time horizon/infinity split. The stationary-frequency narrow-band limit is taken only after specifying the packet family and its norm convergence. These are model premises, not a solution of coupled gravity.


Statement references:

def-tgrx-exponential-ray-channel

post-tgr-exponential-current-and-spectral-thermometer


Proof or definition route: State each scattering assumption explicitly; exact local decay supplier required before upgrading this postulate to a constructed model.

Source records: hollands.


#### pthm-tgrx-conditional-hawking-occupation — Conditional asymptotic occupation in a supplied collapse channel

Kind: physics-theorem. Domain: physics. Domain: physics. Domain: physics.

If the adopted normalized wave packets converge in their two-point pairings to the exponential near-horizon channel plus an independent incoming vacuum channel, their number expectations converge to the greybody-filtered Bose value Gamma_l(omega)/(exp(2 pi omega/k)-1), with k=c cubed/(4 G M) and T_infinity=hbar k/(2 pi k_B). For finite-width packets the value is the spectral integral against the packet weight, not its central-frequency substitution.


Statement references:

post-tgrx-free-collapse-scattering

prop-tgrx-collapse-channel-spectrum


Proof or definition route: Apply continuity of the supplied two-point pairings, discard the controlled vanishing remainder, use the channel thermal transform and scattering transmissivity. No new uniform error or backreaction bound is inferred.

Source records: hollands, wald.


### B interfaces


#### rem-tgrx-three-black-hole-states — Boulware, Unruh and Hartle-Hawking are distinct

Kind: remark. Domain: physics. Domain: physics. Domain: physics.

The exterior ground state, an outgoing thermal/incoming vacuum collapse state, and a two-sided regular equilibrium state have different boundary conditions and horizon regularity. Existence of a regular equilibrium state in Schwarzschild does not establish an asymptotically flat Kerr equilibrium state.


Statement references:

post-tgrx-free-collapse-scattering


Proof or definition route: Source-backed distinction only; no existence theorem asserted here.

Source records: hollands, wald.

## tgrx-renormalized-stress — Hadamard subtraction and semiclassical model contracts

A page tgrx-renormalized-stress; B companion tgrx-renormalized-stress-examples. Category thermodynamics-and-general-relativity; library physics. Earlier A/P pages: tgrx-hawking-approximation, gr-fx12-covariant-phase-space.


### A interfaces


#### def-tgrx-hadamard-stress-contract — Hadamard and renormalized stress contract

Kind: definition. Domain: physics. Domain: physics. Domain: physics.

On a four-dimensional globally hyperbolic smooth background, supply a free Klein-Gordon algebra and positive Hadamard bisolution W. In each convex normal neighborhood supply the local parametrix H with W-H smooth, a bidifferential stress operator D_ab, a fixed scale and local curvature correction C_ab; define T_ab^ren as the coincident limit D_ab(W-H)+C_ab, with local covariance and conservation imposed on the selected prescription. This defines an input contract, not a proof of parametrix construction.


Statement references:

post-tgrx-free-collapse-scattering


Proof or definition route: Require smooth remainder for coincident derivatives, compatible overlaps and the explicitly selected conserving correction. No pointwise product of singular distributions.

Source records: hollands.


#### post-tgrx-semiclassical-equation — Semiclassical equation with fixed counterterms and state

Kind: postulate. Domain: physics. Domain: physics. Domain: physics.

Adopt G_ab+Lambda g_ab+alpha H_ab^(R squared)+beta H_ab^(Ricci squared)=(8 pi G/c fourth) T_ab^ren[g,omega], with specified finite couplings, curvature-variation sign convention, quantum state and causal prescription on a stated globally hyperbolic domain. The equation is an effective model below its cutoff; existence, uniqueness and stability are not asserted.


Statement references:

def-tgrx-hadamard-stress-contract


Proof or definition route: Model formulation; curvature squared terms and state dependence preclude replacing it by an ordinary Einstein local source without argument.

Source records: hollands.


#### pthm-tgrx-state-difference-stress — State differences remove common local subtraction

Kind: physics-theorem. Domain: physics. Domain: physics. Domain: physics.

For two Hadamard states on the same fixed background and identical renormalization prescription, T_ab^ren[omega1]-T_ab^ren[omega2] equals the coincidence limit D_ab(W1-W2), which is smooth and independent of common state-independent local counterterms.


Statement references:

def-tgrx-hadamard-stress-contract


Proof or definition route: Subtract the two definitions; H and C cancel before taking the limit; smoothness of the difference is an explicit contract premise.

Source records: hollands.


### B interfaces


#### ex-tgrx-quasistatic-is-not-backreaction — Emitter diagnostic does not bound a coupled equation

Kind: example. Domain: physics. Domain: physics. Domain: physics.

A small dimensionless mass-loss time ratio in the older ideal emitter ODE places no bound on residuals of the new semiclassical field equation without specifying a metric/state pair and estimating its curvature and renormalized stress.


Statement references:

post-tgrx-semiclassical-equation

lem-tgr-emitter-quasistatic-bounds


Proof or definition route: The ODE supplies only a mass function; the new equation requires tensor fields and a state. There is no map or residual estimate among the premises.

Source records: wald.

## tgrx-relative-entropy-balance — Finite modular energy and entropy balance

A page tgrx-relative-entropy-balance; B companion tgrx-relative-entropy-balance-examples. Category thermodynamics-and-general-relativity-mathematics; library mathematics. Earlier A/P pages: tgr-mhs05, quantum-information-measures.


### A interfaces


#### prop-tgrx-finite-modular-balance — Finite relative entropy equals modular energy minus entropy

Kind: proposition. Domain: mathematics. Domain: mathematics. Domain: mathematics.

For finite-dimensional density matrices rho and strictly positive sigma with trace one, set K=-log sigma and s(rho)=-tr rho log rho in nats. Then D(rho||sigma)=tr((rho-sigma)K)-(s(rho)-s(sigma)). For any nested tensor factors, partial tracing both states cannot increase D.


Statement references:

def-it-finite-dimensional-quantum-relative-entropy

thm-it-quantum-relative-entropy-partial-trace-data-processing


Proof or definition route: Insert K into the spectral definition, subtract D(sigma||sigma)=0, then apply exact finite partial-trace DPI. Faithfulness avoids infinite logarithmic terms.

Source records: wall.


#### prop-tgrx-entropy-first-variation — Entanglement first variation at faithful finite reference

Kind: proposition. Domain: mathematics. Domain: mathematics. Domain: mathematics.

For a C1 density path rho(epsilon) with rho(0)=sigma>0, derivative of s at zero is tr(rho_prime(0) K). If rho is C2, the first derivative of D(rho(epsilon)||sigma) vanishes.


Statement references:

prop-tgrx-finite-modular-balance


Proof or definition route: Diagonalize sigma; derivative of trace f(rho) equals trace f_prime(sigma) rho_prime, proved by divided differences and cyclic trace; trace rho_prime=0 eliminates the identity term. Include that finite spectral differentiation argument locally.

Source records: wall.


### B interfaces


#### ex-tgrx-qubit-first-variation — Biased qubit entanglement variation

Kind: example. Domain: mathematics. Domain: mathematics. Domain: mathematics.

For sigma=diag(p,1-p), 0<p<1, and rho(epsilon)=diag(p+epsilon,1-p-epsilon), s_prime(0)=log((1-p)/p).


Statement references:

prop-tgrx-entropy-first-variation


Proof or definition route: Differentiate binary entropy; epsilon is restricted to keep both entries positive.

Source records: wall.

## tgrx-regulated-second-law — A conditional regulated generalized second law

A page tgrx-regulated-second-law; B companion tgrx-regulated-second-law-examples. Category thermodynamics-and-general-relativity; library physics. Earlier A/P pages: tgrx-relative-entropy-balance, tgr-phs05.


### A interfaces


#### post-tgrx-regulated-horizon-balance — Nested finite regulator and gravitational balance premises

Kind: postulate. Domain: physics. Domain: physics. Domain: physics.

For ordered horizon cuts t1<t2 choose finite outside tensor factors A1=A2 tensor E and faithful consistent reference states sigma2=Tr_E sigma1, rho2=Tr_E rho1. Adopt a geometric entropy a_i in nats with a2-a1=tr((rho1-sigma1)K1)-tr((rho2-sigma2)K2), K_i=-log sigma_i. Set S_gen,i=k_B[a_i+s(rho_i)-s(sigma_i)]. These balance and nesting identities are explicit physical model premises, not consequences of area calibration.


Statement references:

def-tgr-regulated-generalized-entropy

prop-tgrx-finite-modular-balance


Proof or definition route: Specify the tensor factors and reference subtraction. Balance would need a separate linearized focusing/modular-energy identification in a continuum horizon.

Source records: wall.


#### pthm-tgrx-regulated-gsl — Regulated generalized entropy monotonicity under explicit balance

Kind: physics-theorem. Domain: physics. Domain: physics. Domain: physics.

Under the specified finite-regulator premises, S_gen,2-S_gen,1=k_B[D(rho1||sigma1)-D(rho2||sigma2)]>=0. If a sequence of such inequalities has individually finite limits for the two S_gen values under a fixed scheme, the inequality survives that limit.


Statement references:

post-tgrx-regulated-horizon-balance

prop-tgrx-finite-modular-balance


Proof or definition route: Subtract the two modular balance identities, insert the geometric balance, and apply partial trace DPI. For finite convergent real sequences pass the nonnegative difference to its limit. No existence, regulator independence or continuum GSL is deduced.

Source records: wall.


### B interfaces


#### ex-tgrx-product-environment-gsl — Finite product environment verifies conditional balance

Kind: example. Domain: physics. Domain: physics. Domain: physics.

For sigma1=sigma2 tensor sigmaE and rho1=rho2 tensor rhoE, D1-D2=D(rhoE||sigmaE). Choosing geometric difference as the assumed modular-energy loss makes generalized entropy growth exactly k_B D(rhoE||sigmaE).


Statement references:

pthm-tgrx-regulated-gsl


Proof or definition route: Expand tensor logarithms in product eigenbases and trace; this is a finite algebra model, not a black-hole solution.

Source records: wall.

## tgrx-focusing-boundary — Linearized focusing and quantum entropy inequalities

A page tgrx-focusing-boundary; B companion tgrx-focusing-boundary-examples. Category thermodynamics-and-general-relativity; library physics. Earlier A/P pages: tgrx-regulated-second-law, tgr-phs01, tgrx-renormalized-stress.


### A interfaces


#### post-tgrx-linearized-horizon-model — Linearized future horizon focusing model

Kind: postulate. Domain: physics. Domain: physics. Domain: physics.

In c=hbar=k_B=1 units adopt a background stationary null horizon, affine generator lambda, compact transverse section, linear perturbations with integrable stress moment integral_lambda^infinity (v-lambda) delta T_kk(v) dv and vanishing final expansion. Neglect theta squared and shear squared only at first perturbative order and adopt linearized Einstein focusing theta_prime=-8 pi G delta T_kk.


Statement references:

post-tgrx-semiclassical-equation

pthm-tgr-restricted-classical-area


Proof or definition route: State perturbative order and future boundary condition; noncompact transverse regions require separate integrability.

Source records: wall.


#### pthm-tgrx-linearized-area-modular-moment — Linearized horizon area deficit is a weighted null moment

Kind: physics-theorem. Domain: physics. Domain: physics. Domain: physics.

In the adopted model, delta A(infinity)-delta A(lambda)=8 pi G integral dA0 integral_lambda^infinity (v-lambda) delta T_kk(v) dv. Hence the area deficit divided by 4G equals 2 pi times the weighted null energy moment, with the fixed future boundary normalization.


Statement references:

post-tgrx-linearized-horizon-model


Proof or definition route: Integrate theta_prime backward using theta(infinity)=0, then integrate A_prime=A0 theta to first order; interchange absolutely integrable stress moments. This does not identify the moment with a modular Hamiltonian unless a separate algebraic bridge is supplied.

Source records: wall.


### B interfaces


#### rem-tgrx-qnec-qfc-status — QNEC and QFC have different status and hypotheses

Kind: remark. Domain: physics. Domain: physics. Domain: physics.

Quantum null energy inequalities concern defined state-dependent entropy derivatives under specific null deformations and renormalization. A universal quantum focusing conjecture across arbitrary higher-curvature effective theories is not a supplied theorem. No entropy variation is defined by an informal surface derivative.


Statement references:

post-tgrx-linearized-horizon-model


Proof or definition route: Nonlogical status discussion using source scope; precise future formulation needs selected dimension, region algebra, entropy prescription and deformation class.

Source records: wall, islands.

## tgrx-finite-code-holography — Exact finite algebra entropy identities and holography boundaries

A page tgrx-finite-code-holography; B companion tgrx-finite-code-holography-examples. Category thermodynamics-and-general-relativity-mathematics; library mathematics. Earlier A/P pages: tgrx-relative-entropy-balance.


### A interfaces


#### def-tgrx-sector-code — Direct-sum sector code entropy model

Kind: definition. Domain: mathematics. Domain: mathematics. Domain: mathematics.

Let p_alpha>0 sum to one on a finite index set, and let rho_alpha and fixed faithful chi_alpha be finite density matrices. Define encoded reduced state rho_A=direct_sum_alpha p_alpha rho_alpha tensor chi_alpha. The logical data are p_alpha and rho_alpha; the ancillary chi_alpha are fixed by the model.


Statement references:

prop-tgrx-finite-modular-balance


Proof or definition route: Finite direct sums and tensor products; normalization by trace. No gravitational interpretation required.

Source records: harlow.


#### prop-tgrx-code-area-entropy — Sector entropy and relative entropy identities

Kind: proposition. Domain: mathematics. Domain: mathematics. Domain: mathematics.

For the sector code, s(rho_A)=H(p)+sum p_alpha[s(rho_alpha)+s(chi_alpha)]. Against sigma_A=direct_sum q_alpha sigma_alpha tensor chi_alpha with q_alpha>0 and sigma_alpha faithful, D(rho_A||sigma_A)=D(p||q)+sum p_alpha D(rho_alpha||sigma_alpha). The ancillary entropy cancels from relative entropy.


Statement references:

def-tgrx-sector-code


Proof or definition route: In each block eigenvalues are p_alpha r_i c_j. Expand logarithms of products, sum eigenvalues and use trace-one in each factor. The direct-sum central term is H(p), so omitting it changes the claim.

Source records: harlow.


### B interfaces


#### ex-tgrx-two-sector-area — Sector-dependent ancillary entropy

Kind: example. Domain: mathematics. Domain: mathematics. Domain: mathematics.

With two sectors, chi1 a pure one-dimensional state and chi2=I_d/d, the ancillary contribution is p2 log d while the central contribution is H(p1,p2). This is an exact finite model.


Statement references:

prop-tgrx-code-area-entropy


Proof or definition route: Substitute eigenvalues. No literal black-hole area or universal RT identity follows.

Source records: harlow.

## tgrx-ads-effective-boundaries — AdS gravity entropy dictionary and quantum extremal surfaces

A page tgrx-ads-effective-boundaries; B companion tgrx-ads-effective-boundaries-examples. Category thermodynamics-and-general-relativity; library physics. Earlier A/P pages: tgrx-finite-code-holography, tgrx-noether-entropy, tgr-phs05.


### A interfaces


#### post-tgrx-semiclassical-ads-dictionary — Restricted semiclassical entropy dictionary

Kind: postulate. Domain: physics. Domain: physics. Domain: physics.

Fix an asymptotically AdS effective bulk model, boundary state family and finite-dimensional regulated code subspace, boundary region A and a specified homology class of smooth bulk candidate surfaces. Adopt a regulator and renormalization scheme for the functional S_grav[X]+S_bulk[region_X] and adopt its minimization over prescribed quantum stationary candidates as the model entropy dictionary. Existence of a candidate, finite value and selected saddle dominance are separate premises.


Statement references:

prop-tgrx-code-area-entropy

def-tgr-regulated-generalized-entropy

pthm-tgrx-noether-first-law


Proof or definition route: Dictionary is a physical postulate; finite code identity motivates only its structural form, and does not derive AdS/CFT.

Source records: islands, harlow.


#### pthm-tgrx-two-saddle-transition — Entropy transition in a specified two-candidate model

Kind: physics-theorem. Domain: physics. Domain: physics. Domain: physics.

If two admissible candidate generalized entropies are real functions s1(t),s2(t), and the adopted dictionary selects their minimum, the predicted entropy is min(s1,s2); at an isolated crossing with unequal slopes it is continuous but not differentiable. A finite-cutoff smooth exact microscopic entropy need not have this cusp.


Statement references:

post-tgrx-semiclassical-ads-dictionary


Proof or definition route: Use min=(s1+s2-abs(s1-s2))/2 and one-sided derivatives. This is a statement about the adopted saddle selection, not proof that an island saddle contributes.

Source records: islands.


### B interfaces


#### rem-tgrx-island-assumptions — Replica saddles and islands retain their model assumptions

Kind: remark. Domain: physics. Domain: physics. Domain: physics.

Island formulas in selected semiclassical gravity-plus-bath models use replica analytic continuation, gravitational path-integral saddle assumptions, specified factorization and renormalization. A Page-like entropy curve within such a calculation does not establish microscopic unitarity of an unspecified four-dimensional evaporating black hole.


Statement references:

post-tgrx-semiclassical-ads-dictionary


Proof or definition route: Status and assumptions only; no open issue becomes a logical premise.

Source records: islands, jt.

## tgrx-topological-entropy-models — Topological boundary state counts without universal gravity claims

A page tgrx-topological-entropy-models; B companion tgrx-topological-entropy-models-examples. Category thermodynamics-and-general-relativity-mathematics; library mathematics. Earlier A/P pages: tgrx-finite-code-holography, temperley-lieb-diagram-algebra-and-catalan-basis, temperley-lieb-jones-wenzl-traces-and-quotients.


### A interfaces


#### def-tgrx-finite-fusion-count-model — Finite fusion transfer count model

Kind: definition. Domain: mathematics. Domain: mathematics. Domain: mathematics.

Let I be a finite label set, a distinguished vacuum label 0, and N an explicitly supplied nonnegative integer fusion adjacency matrix. Define D_n=(N^n)_00 as the multiplicity of vacuum fusion channels for n identical labels. A normalized uniform density matrix on this multiplicity space is defined only when D_n>0. This is a finite representation-theoretic count.


Proof or definition route: Define the count directly by paths in a finite fusion graph; no quantum-group or category existence is silently required. Temperley-Lieb is motivational only until a chosen representation is supplied.

Source records: harlow.


#### prop-tgrx-fusion-count-entropy — Fusion path recursion and entropy

Kind: proposition. Domain: mathematics. Domain: mathematics. Domain: mathematics.

The channel counts obey vector recursion v_(n+1)=N v_n from v0=e0; the uniform-state entropy is log D_n when D_n>0. In the two-label graph N with rows (0,1) and (1,1), D0=1,D1=0,D2=1 and D_(n+2)=D_(n+1)+D_n.


Statement references:

def-tgrx-finite-fusion-count-model


Proof or definition route: Induct on path length; eigenvalues of the uniform state are 1/D_n. For the displayed matrix verify N squared=N+I. No Perron-Frobenius or asymptotic theorem is needed.

Source records: harlow.


#### def-tgrx-tl-boundary-representation — Finite Hilbert boundary representation of Temperley-Lieb

Kind: definition. Domain: mathematics. Domain: mathematics. Domain: mathematics.

Fix real delta, a real quantum-integer specialization with all Jones-Wenzl denominator units through n nonzero, and a unital representation pi of TL_n(delta) on a nonzero finite complex Hilbert space such that pi(U_i) are self-adjoint. Let P=pi(p_n), and assume rank P>0. The physical use of this representation as a boundary state space is an additional model identification.


Statement references:

def-temperley-lieb-generator-presentation

lem-temperley-lieb-jones-wenzl-partial-trace-and-uniqueness


Proof or definition route: Define finite representation and inherit p_n from its exact recursion; self-adjoint real recursion yields self-adjoint P.

Source records: harlow.


#### prop-tgrx-tl-projector-entropy — Jones-Wenzl image gives a finite maximally mixed sector

Kind: proposition. Domain: mathematics. Domain: mathematics. Domain: mathematics.

Under the finite Hilbert representation data, P is an orthogonal projection and rho=P/rank(P) is a density matrix with s(rho)=log rank(P). The diagram closure value [n+1] is not identified with rank(P) without an explicit trace-preserving realization.


Statement references:

def-tgrx-tl-boundary-representation

lem-temperley-lieb-jones-wenzl-partial-trace-and-uniqueness


Proof or definition route: Apply the supplier idempotence, self-adjoint real recursion, then finite spectral decomposition. Distinguish closure trace from ordinary Hilbert trace.

Source records: harlow.


### B interfaces


#### ex-tgrx-count-is-not-area-law — Fusion counts do not fix a gravitational area coefficient

Kind: example. Domain: mathematics. Domain: mathematics. Domain: mathematics.

The same finite fusion count model can be paired with arbitrary assigned area a>0 per label, so log D_n alone does not fix the coefficient relating entropy to physical area.


Statement references:

prop-tgrx-fusion-count-entropy


Proof or definition route: Choose two positive area assignments a and 2a without changing N or D_n. Identifying puncture area is an extra physical model input.

Source records: harlow, wald.

## tgrx-jt-disk-model — JT disk spectral preparation and ensemble boundaries

A page tgrx-jt-disk-model; B companion tgrx-jt-disk-model-examples. Category thermodynamics-and-general-relativity; library physics. Earlier A/P pages: tgrx-ads-effective-boundaries.


### A interfaces


#### post-tgrx-jt-disk-spectral-model — Adopted JT disk spectral model

Kind: postulate. Domain: physics. Domain: physics. Domain: physics.

In dimensionless units fix C>0 and S0 real; adopt the genus-zero spectral density rho0(E)=exp(S0) C sinh(2 pi sqrt(2 C E))/(2 pi squared) on E>0 and beta>0. It is a continuous density model, not a trace-class discrete Hamiltonian spectrum or a nonperturbative sum over topologies.


Statement references:

post-tgrx-semiclassical-ads-dictionary


Proof or definition route: Adopt precisely the source disk expression and its restricted role; the formal path integral and higher genus completion are not used as mathematical suppliers.

Source records: jt.


#### pthm-tgrx-jt-disk-laplace — Exact disk-model Laplace integral and heat capacity

Kind: physics-theorem. Domain: physics. Domain: physics. Domain: physics.

For the adopted density, Z(beta)=exp(S0) C sqrt(2 C)/(2 sqrt(pi)) beta^(-3/2) exp(2 pi squared C/beta). Therefore E_mean=3/(2 beta)+2 pi squared C/beta squared and C_V/k_B=3/2+4 pi squared C/beta>0.


Statement references:

post-tgrx-jt-disk-spectral-model

thm-gaussian-integral


Proof or definition route: Set x=sqrt(E), evaluate the derivative in a of the Gaussian cosh integral at a=2 pi sqrt(2C), and justify differentiation by Gaussian domination. Differentiate log Z. Supply the one-variable Gaussian integral locally using its squared polar-coordinate proof.

Source records: jt.


### B interfaces


#### rem-tgrx-jt-completion-notunique — A disk spectral density does not determine a unique quantum gravity

Kind: remark. Domain: physics. Domain: physics. Domain: physics.

The selected disk density and genus expansion do not determine a unique nonperturbative completion. Ensemble-averaged partition functions are not automatically the partition function of one fixed boundary Hamiltonian.


Statement references:

post-tgrx-jt-disk-spectral-model


Proof or definition route: Source-backed caveat; no universal factorization or existence assertion.

Source records: jt.

## tgrx-research-boundaries — Precisely isolated horizon research questions

A page tgrx-research-boundaries; B companion tgrx-research-boundaries-examples. Category thermodynamics-and-general-relativity; library physics. Earlier A/P pages: tgrx-regulated-second-law, tgrx-ads-effective-boundaries, tgrx-jt-disk-model.


### A interfaces


#### op-tgrx-continuum-generalized-entropy — Continuum generalized entropy beyond the regulated model

Kind: open-problem. Domain: physics. Domain: physics. Domain: physics.

For a specified four-dimensional semiclassical Einstein-scalar collapse model with a Hadamard state, smooth horizon cuts and a fixed covariant renormalization prescription, determine sufficient nonperturbative-in-the-field conditions for finite regulator-independent generalized entropy differences and their future monotonicity without assuming a modular-energy/area balance identity. The question is restricted to solutions existing on the stated domain; it does not assume existence of every collapse solution.


Statement references:

post-tgrx-semiclassical-equation

def-tgr-regulated-generalized-entropy


Proof or definition route: Open-problem formulation and dated source/status review only. The regulated finite theorem is a partial conditional result; this item is never a premise.

Source records: wall, islands.


### B interfaces


#### rem-tgrx-research-logical-firewall — Research labels confer no theorem premises

Kind: remark. Domain: physics. Domain: physics. Domain: physics.

Universal interacting four-dimensional QFT construction, microscopic quantum gravity, generic evaporation unitarity and unrestricted generalized-second-law claims remain outside the proved suppliers in this scaffold. This page records questions and model boundaries only.


Statement references:

post-tgrx-semiclassical-equation


Proof or definition route: No proof or empirical inference; identify each unresolved task and its model-specific assumptions.

Source records: islands, jt.


## Derivations and closure contracts

These are research arguments and exact authoring routes, not accepted production proofs. Every old pair retains its complete source obligations and current authored scope. The new definitions supply their named mathematical objects; explicit physical model premises are not silently promoted to constructions.

### Thermal geometry and hydrodynamics

With signature $(-,+,+,+)$ and $c=1$, the vector $\xi=\partial_t+\Omega\partial_\phi$ has $-g(\xi,\xi)=1-\Omega^2r^2$. Thus $\beta=b\xi$ yields $T=[k_B b\sqrt{1-\Omega^2r^2}]^{-1}$ only inside the light cylinder. At its boundary the normalization fails. In SI the boundary is $r=c/|\Omega|$. If $d\alpha=q\iota_\beta F$, every closed curve has zero integral of its left side. A nonzero period of the right side therefore obstructs global electrochemical equilibrium. Existing Klein suppliers retain full rest energy and gauge-reference conventions; exactness is stronger than closedness.

For the compact hydrostatic functional hold $h,N,\Phi,T_0$ fixed when varying $\mu_0$. Since $\partial_{\mu_0}\mu=1/N$, the first derivative cancels the prefactor $N$ and the second leaves $1/N$. Compactness, a positive lower lapse bound and $C^2$ pressure on a neighborhood of the compact field range bound both derivatives and justify differentiation under the integral. Thus $p_{\mu\mu}\ge0$ gives a nonnegative susceptibility. This is an explicitly adopted zeroth-gradient model, not proof that an interacting Gibbs trace exists.

The gradient expansion is meaningful only relative to a supplied microscopic length and relaxation time; it supplies equilibrium response data but not all transport coefficients. Different positive bulk viscosities have the same pressure functional and differ when expansion is nonzero. The retained C02/C03/C04 source obligations include the complete derivative-corrected entropy laws, actual constant-background evolution construction, energy bounds and finite-speed restrictions. Nonnegative entropy production, linear stability and nonlinear well-posedness remain different statements. No nonlinear BDNK/Israel-Stewart theorem is inferred here; such an extension would require its own state domain, coefficient bounds, symmetrizer and PDE suppliers.

### Noether identity and stationary entropy

Fix field-space signs consistently with GR. For $J_\xi=\theta(\phi,\mathcal L_\xi\phi)-\iota_\xi L$, covariance gives closure on shell, but a global primitive does not follow merely from closure; compatible $Q_\xi$ on the integration region is part of the defined data. A fixed vector field and a linearized solution give

$$\delta J_\xi=\omega(\phi;\delta\phi,\mathcal L_\xi\phi)+d(\iota_\xi\theta).$$

A reversed slot convention for $\omega$ changes that term's sign consistently. Stationarity kills it, and $\delta J=d\delta Q$ yields $d(\delta Q-\iota_\xi\theta)=0$. Stokes on a compact hypersurface with boundary $S_R-B$, followed by the explicitly assumed convergent asymptotic limit, identifies horizon and asymptotic variations. Hamiltonian integrability is a separate premise; a charge variation need not integrate to a charge. On the bifurcation surface $\xi=0$ eliminates $\iota_\xi\theta$. The fixed-generator/binormal variation argument must be carried out before making this substitution; varying an informal product $\kappa S$ would introduce an incorrect extra $S\delta\kappa$.

For $L=\mathcal L\epsilon_g$ with no curvature derivatives use $E^{abcd}=\partial\mathcal L/\partial R_{abcd}$ and $S_W/k_B=-(2\pi/\hbar)\int_B E^{abcd}\epsilon_{ab}\epsilon_{cd}dA$ in $c=1$ action units. Einstein-Hilbert gives $E^{abcd}=(g^{ac}g^{bd}-g^{ad}g^{bc})/(32\pi G)$; contraction is $-4/(32\pi G)$, giving $A/(4G\hbar)$. For $f(R)$ multiply inside the integral by $f'(R)$. Curvature-derivative theories require the Euler curvature derivative and its integration-by-parts construction; this narrower partial-derivative formula does not claim to cover them. The general stationary first-law route and the older full Kerr-Newman work terms are preserved. No stationary entropy formula supplies a dynamical second law.

### Modular geometry and proper clocks

QSM's abstract modular theorem does not identify modular flow with geometry. The new wedge model separately supplies the geometric bridge and cyclicity/separation. With the upper-strip convention the vacuum is KMS for $\sigma_{-t}$. Combining $\Delta^{it}=U(\Lambda(-2\pi t))$ with it gives future rapidity width $2\pi$. For acceleration $a>0$, the given orbit has $g(\dot\gamma,\dot\gamma)=-c^2$ and rapidity $a\tau/c$; its proper-time strip is $2\pi c/a$, hence $T=\hbar a/(2\pi c k_B)$.

The Bisognano-Wichmann identity in this free scalar model is an established mathematical theorem awaiting local authoring if the bridge is to be constructed. It is not an open problem. The present definition treats it as an explicit model premise. A constructed route would need standard real one-particle wedge subspaces, their closed Tomita operators and boost analyticity, then second quantization and cyclicity/separation. None is inferred merely from abstract Tomita theory or a citation. This conditional choice closes the present premise honestly without claiming a full local proof. QFT owns free-field construction, and QSM owns generic modular theory. The von Neumann KMS topology is ultraweak; norm continuity of all Weyl automorphisms is not assumed. The old time-rescaling supplier is reused for its scalar strip substitution only, not to transfer an inappropriate topology.

For the oscillator illustration, $\sum z^n=(1-z)^{-1}$ and $\sum nz^n=z/(1-z)^2$ give entropy $-\log(1-z)-z\log z/(1-z)$ for $0<z<1$. This is a tensor model by definition, not a continuum wedge factorization or trace-class reduced vacuum. The retained finite-switch detector results keep their exact smearing and normalization; they do not make every finite experiment exactly thermal.

### Collapse channels and Hawking approximation

For $U(u)=U_H-Ae^{-ku}$ one has $U'=Ak e^{-ku}$ and $U(u)-U(v)=2A e^{-k(u+v)/2}\sinh(k(u-v)/2)$. Cancelling the derivative factors gives $-k^2/[16\pi\sinh^2(k(u-v-i0)/2)]$. This identity concerns tested boundary-value distributions, not substitution into an ordinary singular function. The retained contour lemma proves its thermal ratio. Merely asymptotic exponential behavior would require derivative and remainder bounds; the exact model makes no such error claim.

For a passive loss channel $b=\sqrt\Gamma a+\sqrt{1-\Gamma}e$ with independent centered vacuum $e$, expand $b^*b$. Cross expectations and environmental occupation vanish, leaving $\Gamma\langle a^*a\rangle$. This separates near-horizon thermality from infinity's greybody-filtered spectrum. A 4D collapse construction would separately need normalized radial scattering, local decay, transmission coefficients and a two-point pairing limit. The new postulate declares these model premises explicitly. The theorem assumes convergence to the channel; it does not prove those PDE estimates. A finite packet has spectral integral $\int |f(\omega)|^2\Gamma_l(\omega)[e^{2\pi\omega/k}-1]^{-1}d\omega$, not its central-frequency value without another limit.

Boulware, collapse/Unruh and Hartle-Hawking states impose different incoming conditions and regularity. The equilibrium bifurcate-horizon theorem is distinct from the collapse theorem; Schwarzschild equilibrium does not construct an asymptotically flat Kerr bath. Fixed-background calculations provide neither a changing geometry nor an evaporation S-matrix. The old photon emitter remains a distinct coarse-reservoir model stopped at positive mass.

### Stress subtraction and semiclassical gravity

The Hadamard contract supplies a positive Klein-Gordon state, a bisolution/commutator, microlocal regularity, local parametrix, smooth remainder, overlap compatibility, scale and conserving curvature correction. These are explicit model inputs, not an instruction to subtract an infinity. Subtract the two stress definitions on the same background before taking coincidence. The common parametrix and local correction cancel; smoothness of the difference permits applying the differential operator and taking coincidence. This proves the state-difference result and its independence of common state-independent finite counterterms, not independence of the absolute stress tensor.

In four dimensions admissible shifts involve lower-order cosmological/Einstein terms and conserved variations of curvature-squared actions. The semiclassical equation therefore names renormalized couplings, state and causal prescription together. In SI its Einstein tensor has inverse-length-squared dimension, curvature-squared variation has inverse-length-fourth dimension, its coefficient has length squared, and the source uses $8\pi G/c^4$ for energy-density stress. Higher derivative solutions and instabilities need a separately specified treatment; order reduction is an additional EFT solution prescription. No nonlinear state-dependent existence or stability theorem is claimed. An ODE mass-loss time ratio supplies no metric, state or tensor residual estimate.

### Entropy first variation and conditional second law

All $s$ and $D$ here are dimensionless natural-log entropies. With faithful $\sigma$ and $K=-\log\sigma$, insertion in the spectral definition gives $D(\rho\Vert\sigma)=\operatorname{tr}\rho K-s(\rho)$. Since $\operatorname{tr}\sigma K=s(\sigma)$, this is $\Delta\langle K\rangle-\Delta s$. The exact root draft DPI gives the partial-trace inequality; its status stays draft and authenticated import plus ordinary proof review remain owed.

The local finite-matrix derivative route requires no differentiable choice of eigenvectors. Spectrally,
$\log A=\int_0^\infty[(1+t)^{-1}I-(A+tI)^{-1}]dt$ for $A>0$. Resolvent identities give $D\log(A)[X]=\int_0^\infty(A+tI)^{-1}X(A+tI)^{-1}dt$. On a neighborhood with $A\ge mI>0$, derivative and remainder are bounded by $\|X\|(m+t)^{-2}$ and a constant times $\|X\|^2(m+t)^{-3}$. These integrable bounds justify norm differentiation. Cyclic trace and an eigenbasis give $\operatorname{tr}[A D\log(A)[X]]=\operatorname{tr}X$, because $\int_0^\infty a(a+t)^{-2}dt=1$. Thus $Ds_A[X]=-\operatorname{tr}[X(\log A+I)]$. Trace-one paths have trace-zero derivative, giving the stated first variation and vanishing first derivative of $D$ at its reference. This whole argument is part of the named proposition's local proof obligation, not a continuum Araki differentiation claim.

Put $E_i=\operatorname{tr}(\rho_i-\sigma_i)K_i$, $\delta s_i=s(\rho_i)-s(\sigma_i)$ and $D_i=E_i-\delta s_i$. The physical balance premise says $a_2-a_1=E_1-E_2$. Subtraction gives $[a_2+\delta s_2]-[a_1+\delta s_1]=D_1-D_2\ge0$. This completes the finite conditional GSL proof. Both reference-state consistency and area/modular-energy balance are indispensable. Finite convergence of both real entropy values in one fixed prescription preserves their inequality; cutoff inequalities do not prove those limits.

Wall's full-text renormalization discussion explicitly assumes a renormalized relative-entropy decomposition. The present route keeps that premise visible. A continuum theorem still needs a nested region-algebra net, normal states and algebraic relative-entropy monotonicity, a proved modular-energy identification, stress integrability, state subtraction and common renormalization. Finite matrix DPI supplies none of these by itself.

### Focusing order and null energy

In $c=\hbar=k_B=1$ units the first-order horizon equation is $\theta'=-8\pi G\delta T_{kk}$ with future condition $\theta(\infty)=0$. Thus $\theta(\lambda)=8\pi G\int_\lambda^\infty\delta T_{kk}(v)dv$. Integrate $\delta A'=\int dA_0\theta$ and interchange absolutely integrable stress moments to get $\delta A(\infty)-\delta A(\lambda)=8\pi G\int dA_0\int_\lambda^\infty(v-\lambda)\delta T_{kk}(v)dv$. The $1/(4G)$ area conversion gives a $2\pi$ weighted null-energy moment. Identification with a modular generator is an additional bridge.

Quadratic expansion and shear terms were discarded only to first order. The classical NEC area theorem is not used as a quantum monotonicity theorem. QNEC and QFC appear only as source-scoped context; an actual entropy derivative requires a state, region, renormalization scheme, deformation class and dimension. No universal QFC or undefined entropy shape derivative is asserted.

### Codes, representation theory and entropy

Sector eigenvalues are $p_\alpha r_{\alpha i}c_{\alpha j}$. Expanding their negative logarithm proves $H(p)+\sum p_\alpha[s(\rho_\alpha)+s(\chi_\alpha)]$. In relative entropy against reference blocks sharing $\chi_\alpha$, ancillary logarithms cancel and the classical central term plus averaged block relative entropy remain. The central Shannon term must not be dropped. This is finite algebra, not a holography existence theorem.

For the fusion graph, matrix multiplication counts paths. The displayed two-label matrix satisfies $N^2=N+I$, hence its entries obey the Fibonacci recurrence. At $D_n=0$ no positive-dimensional uniform state exists; otherwise its entropy is $\log D_n$. A graph is not presumed to construct a fusion category.

The separate Temperley-Lieb model uses an actual finite Hilbert representation with real specialization and nonzero Jones-Wenzl denominator quantum integers. The root draft supplier proves the algebra projector identity. Self-adjoint real recursion makes its image $P$ self-adjoint and idempotent; finite spectral decomposition makes it orthogonal, and $P/\operatorname{rank}P$ has entropy $\log\operatorname{rank}P$. The algebra projector can have zero image, so positive rank is required. Diagram closure trace $[n+1]$ is not the Hilbert trace unless a trace-compatible realization is supplied. This is the precise representation-theoretic consequence. Hopf, Hecke, Hall and categorification structures do not yield additional gravitational entropy merely by name. QFT retains TQFT/modular-functor ownership; QSM retains topological phases. Assigning physical area to a boundary representation is a new model input, so these counts do not fix a universal area coefficient.

### Holography, islands and JT

The dictionary fixes the homology class and renormalization and selects the minimum among quantum stationary candidate values. It does not minimize over arbitrary spacetime surfaces without an extremality condition. Existence, saddle dominance, replica continuation and path-integral contour are independent model premises. The two-saddle theorem only analyzes $\min(s_1,s_2)=(s_1+s_2-|s_1-s_2|)/2$. A crossing with unequal slopes has a cusp in that adopted approximation; exact finite-system entropy need not.

For the JT disk density set $a=2\pi\sqrt{2C}$, $x=\sqrt E$. Completing the square and the exact Gaussian integral give $\int_0^\infty e^{-\beta x^2}\cosh(ax)dx=\sqrt\pi e^{a^2/(4\beta)}/(2\sqrt\beta)$. Gaussian domination justifies differentiation in $a$, yielding $\int_0^\infty2x e^{-\beta x^2}\sinh(ax)dx=\sqrt\pi a e^{a^2/(4\beta)}/(2\beta^{3/2})$. Multiply by the density prefactor to get $Z$; differentiate $\log Z$ to get mean energy and heat capacity. The model has an infinite unweighted spectral mass but finite Boltzmann integral for every $\beta>0$. It is not a discrete trace-class Hamiltonian construction. The genus expansion does not select a unique nonperturbative completion, and ensemble averages are not automatically one fixed Hamiltonian.

The terminal open problem has no consumers or proof acceptance fields. Established but locally unauthored results stay authoring obligations. Sources accessed here are historical full texts, not an exhaustive literature search through 2026-10-19; that date records this bounded planning assessment. No universal GSL, islands formula, AdS/CFT correspondence or quantum gravity existence is asserted as an established theorem.
