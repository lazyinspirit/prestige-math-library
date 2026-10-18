# Classical electromagnetism — complete successor research scaffold

Dated 2026-10-19. This is future design and conditional research argument, not production content, accepted proof, engine state or publication. The 28 existing A/B pair identities in baseline.json retain every original scope promise, source obligation and later repaired authoritative carrier. New modules extend that foundation; they do not replace it. The exact original per-item mapping and current authored identities are pinned in baseline.json. All 14 new pairs and their exact interfaces are in inventory.json.

## Framework and typing contract

The existing physical framework remains Maxwell–Lorentz fields on the SR oriented affine Minkowski model. Coordinates satisfy x0=ct, eta=diag(-1,1,1,1), covariant epsilon0123=+1, F0i=-Ei/c, Fij=epsilonijk Bk, j=(c rho,J), partial_mu F^(mu nu)=-mu0 j^nu. E,B are real vector fields in the Euclidean rest space of a named inertial chart; F is a covariant alternating two-tensor and j a contravariant vector. An observer is a unit future timelike vector, not a coordinate chart. A massive worldline remains a future-timelike C2 curve with proper-time parameter; mass is an external parameter. These existing definitions and postulates, and the existing Lorentz-force and stress-energy identities, are unchanged.

SI remains exact as specified by the current carrier: c and elementary e have their exact defining values; mu0 is experimentally determined; epsilon0 is defined as (mu0 c2)^-1. E has V/m, B T, potentials phi V and A T m, current density A/m2, polarization C/m2, energy density J/m3, energy flux W/m2 and integrated angular momentum J s. No exact obsolete numerical mu0 or charge quantization is adopted. Each mathematical module is independent of these physical assumptions. Its coordinates, orientation and indefinite inner product are specified as mathematical data.

[[def-em-si-conventions]]

[[def-em-electromagnetic-tensor]]

[[pthm-em-tensor-maxwell-equivalence]]

## Retained authority and proof-route policy

Read the original full scaffold, inventory, definition contracts, core arguments, completed expansion arguments, mathematical prerequisites, exterior-scattering derivation and both example-verification sources identified in baseline.json. Every existing pair is indexed again in the successor track. Current authored statements take precedence over research reservations where later audits repaired a sign, regularity class, scope or proof. In particular retain causal kernel/subtracted dispersion hypotheses, stationary sheet extension hypotheses, retarded point-root existence assumptions, cavity zero-mode qualifications, prescribed-source radiation versus self-force, and source-qualified empirical reports. Historical audit reports are source context, not a claim of a live run or present source defects.

Each result below has an exact formulation and a concrete argument. Tractable algebraic and analytic deductions are derived here. Deeper results use named exact current suppliers with their full pinned statement and actual hypotheses in suppliers.json. This scaffold does not claim those routes have passed an independent proof audit. No unnamed standard theorem closes an argument. Choice assumptions are inherited explicitly: Countable Choice for Fourier/L2/weak graph interfaces; full AC, including CC and DC, only in the discrete compactness supplier and its topological quotient consumer. The finite matrix constructions add no arbitrary-index choice.

Only A items supply other pages. Companion B items are verification/counterexample leaves and do not feed any cross-page item. All links follow complete uninterrupted statements. Mathematical page prerequisites remain entirely mathematical. New physical postulates are separately adopted oscillator/Drude or effective Abraham–Lorentz model restrictions; none is derived from vacuum Maxwell.


## Lorentzian forms and relative topology

A page `emx-lorentz-form-algebra`; B companion `emx-lorentz-form-algebra-examples`. Category `classical-electromagnetism-mathematics`; library `mathematics`.

Prerequisite A/P pages: `tensor-fields-exterior-algebra-and-differential-forms`, `the-de-rham-complex-homotopy-and-mayer-vietoris`, `the-de-rham-theorem-and-degree`.


### A interfaces


#### `def-emx-lorentz-star` — Lorentzian Hodge star and periods

Kind `definition`; domain `mathematics`.

**Definition.** On oriented affine Minkowski space with eta=diag(-1,1,1,1) and vol=dx0 wedge dx1 wedge dx2 wedge dx3, define star by alpha wedge star beta=<alpha,beta>_eta vol using determinant-normalized exterior pairing. For a smooth closed k-form omega, its period on a smooth compact oriented k-cycle z is integral_z omega. Exactness means omega=d a globally. No physical constants or physical premises enter this definition.

**Definition references.**

[[def-de-rham-cohomology]]

[[def-wedge-product-of-differential-forms]]

**Conditional derivation / well-definedness / verification.** Use the six wedge basis elements to construct star; distinguish the indefinite pairing from the existing positive Riemannian-star supplier.

Source-use keys: LOCAL-MATH.


#### `lem-emx-lorentz-star-square` — Lorentzian duality sign

Kind `lemma`; domain `mathematics`.

**Statement.** For this signature in dimension four, star squared on k-forms is (-1)^(k(4-k)+1); in particular star squared=-I on two-forms, star(dx0 wedge dx1)=-dx2 wedge dx3, and star(dx2 wedge dx3)=dx0 wedge dx1.

**Statement references.**

[[def-emx-lorentz-star]]

**Conditional derivation / well-definedness / verification.** For each increasing multi-index I, complementary wedge pairing gives star eI=epsilon(I,Ic) product_{i in I} eta_ii eIc. Applying twice multiplies by (-1)^(k(4-k)) product_all eta_ii, yielding the claim. This is an explicit finite proof, not an application of Riemannian star squared.

Source-use keys: LOCAL-MATH.


#### `thm-emx-local-potential-homotopy` — Local two-form potentials and global obstruction

Kind `theorem`; domain `mathematics`.

**Statement.** On a star-shaped open U in R4 with centre a every smooth closed two-form F has potential A_mu(x)=integral_0^1 t (x-a)^nu F_{nu mu}(a+t(x-a)) dt. On any smooth manifold a closed F admits a global smooth real one-form potential exactly when [F]=0 in H2_dR; a nonzero period precludes exactness.

**Statement references.**

[[def-emx-lorentz-star]]

[[def-de-rham-cohomology]]

[[thm-stokes-theorem-for-smooth-singular-chains]]

**Conditional derivation / well-definedness / verification.** Differentiate the displayed compact integral. Use closure to replace derivative combinations by radial derivatives; the integrand becomes d/dt[t^2 F_mu nu(a+t(x-a))]. Its boundary value is F_mu nu(x). Global iff follows from the quotient definition, and nonzero periods obstruct by Stokes. Do not use the vector-field Poincare lemma as an arbitrary-degree theorem.

Source-use keys: LOCAL-MATH.


### B interfaces


#### `ex-emx-punctured-flux` — Closed flux form without global vector potential

Kind `example`; domain `mathematics`.

**Statement.** On R3 minus the origin, beta=(x dy wedge dz+y dz wedge dx+z dx wedge dy)/(x2+y2+z2)^(3/2) is closed and has period 4 pi on the oriented unit sphere, hence is not globally exact.

**Statement references.**

[[thm-emx-local-potential-homotopy]]

**Conditional derivation / well-definedness / verification.** Compute divergence of x/r3 as 3/r3-3r2/r5=0, evaluate radial unit flux on S2, and apply Stokes. This is a mathematical exterior-domain example, not a new magnetic-monopole postulate.

Source-use keys: LOCAL-MATH.


#### `ex-emx-flat-nonexact-connection` — Flat potentials with nonzero circulation

Kind `example`; domain `mathematics`.

**Statement.** On the punctured plane A=(-y dx+x dy)/(x2+y2) is closed, has circle period 2 pi and is not d chi for a globally single-valued real chi; local potentials differ by constants.

**Statement references.**

[[thm-emx-local-potential-homotopy]]

**Conditional derivation / well-definedness / verification.** Differentiate directly and parameterize (cos t,sin t); exact forms have zero loop integral.

Source-use keys: LOCAL-MATH.


## Metric dependence, flux sectors and constitutive geometry

A page `emx-premetric-maxwell`; B companion `emx-premetric-maxwell-examples`. Category `classical-electromagnetism`; library `physics`.

Prerequisite A/P pages: `em-lorentz-covariant-formulation`, `em-material-response`, `em-primitives-and-postulates`, `emx-lorentz-form-algebra`.


### A interfaces


#### `def-emx-excitation-form` — Excitation and conserved current forms

Kind `definition`; domain `physics`.

**Definition.** In a fixed oriented SI lab chart define E1=E_i dx_i, B2=B1 dy wedge dz+B2 dz wedge dx+B3 dx wedge dy, D2 analogously, H1=H_i dx_i, and J3=rho dx wedge dy wedge dz-dt wedge (J1 dy wedge dz+J2 dz wedge dx+J3 dx wedge dy). Define F=B2-dt wedge E1 and G=D2+dt wedge H1. Here F components in x0=ct are the existing F_0i=-E_i/c. F integrals have Wb, G integrals C, and J3 integrals C; component dimensions depend on dt versus dx0.

**Definition references.**

[[def-em-electromagnetic-tensor]]

[[def-em-si-conventions]]

[[def-emx-lorentz-star]]

**Conditional derivation / well-definedness / verification.** These are definitions of forms from existing fields; use no inconsistent identification G=star F/mu0: in these conventions vacuum G=(mu0 c)^-1 star F.

Source-use keys: ETH.


#### `pthm-emx-exterior-maxwell` — Metric-free Maxwell equations and vacuum closure

Kind `physics-theorem`; domain `physics`.

**Statement.** For C1 macroscopic fields with conserved sources, dF=0 and dG=J3 are equivalent to the four SI macroscopic Maxwell equations. In vacuum D=epsilon0 E,H=B/mu0 gives G=(mu0 c)^-1 star F. Exterior differentiation implies dJ3=0. On a fixed spatial cycle the magnetic flux period is constant in time when the cycle is transported only by lab time.

**Statement references.**

[[def-emx-excitation-form]]

[[lem-emx-lorentz-star-square]]

[[post-em-vacuum-maxwell]]

**Conditional derivation / well-definedness / verification.** Expand spatial and dt coefficients: dF=div B vol3+dt wedge (B_t2+d_space E1), dG=div D vol3+dt wedge (D_t2-d_space H1). Apply the basis-star formulas; for periods use F closed, Cartan cylinder Stokes or integrate Faraday over the closed cycle. Maxwell without constitutive closure is not a propagation theorem.

Source-use keys: ETH.


#### `pthm-emx-duality-vacuum` — Vacuum duality and its domain

Kind `physics-theorem`; domain `physics`.

**Statement.** On a source-free vacuum region, for constant theta, F_theta=cos(theta)F+sin(theta)star F again solves dF_theta=d star F_theta=0. Generic electric sources, PEC boundaries and material laws break this symmetry; no claim of a magnetic charge sector is adopted.

**Statement references.**

[[pthm-emx-exterior-maxwell]]

[[lem-emx-lorentz-star-square]]

**Conditional derivation / well-definedness / verification.** Linearity and star squared=-I give the two differential equations. Nonzero d star F produces dF_theta not zero for generic theta. A PEC E-tangent condition is not generally preserved because rotation mixes tangential electric and magnetic data.

Source-use keys: ETH.


### B interfaces


#### `ex-emx-topological-flux-sector` — Excluded interior flux is not a global source law

Kind `example`; domain `physics`.

**Statement.** A source-free exterior region may carry nonzero magnetic two-form periods that prevent a single global potential. Such data require interior/boundary flux specification and are not an inference of magnetic charge in the full-space Maxwell model.

**Statement references.**

[[pthm-emx-exterior-maxwell]]

[[thm-emx-local-potential-homotopy]]

**Conditional derivation / well-definedness / verification.** Restrict the mathematical punctured-space form to the exterior and state that any full-space smooth divergence-free extension would have zero sphere flux. This B item has no downstream consumer.

Source-use keys: ETH.


#### `ex-emx-duality-pec-failure` — Electric conductor boundary breaks continuous duality

Kind `example`; domain `physics`.

**Statement.** A nonzero tangential magnetic field adjacent to a PEC plane can be mapped by vacuum duality to a nonzero tangential electric field, violating the same PEC boundary condition.

**Statement references.**

[[pthm-emx-duality-vacuum]]

**Conditional derivation / well-definedness / verification.** Take uniform E=0,B parallel to the boundary; rotated E is nonzero parallel to it.

Source-use keys: ETH.


## Weak fields, boundary power and dissipative uniqueness

A page `emx-weak-boundary-energy`; B companion `emx-weak-boundary-energy-examples`. Category `classical-electromagnetism`; library `physics`.

Prerequisite A/P pages: `discrete-de-rham-complexes-and-edge-elements`, `em-energy-momentum-and-angular-balance`, `em-material-response`, `em-maxwell-integral-and-constraints`.


### A interfaces


#### `def-emx-finite-energy-boundary-model` — Finite-energy PEC and impedance formulation

Kind `definition`; domain `physics`.

**Definition.** Let Omega be a bounded Lipschitz polyhedron. H(curl) is the L2 distributional-curl graph space; H0(curl) is the closure of compactly supported smooth vectors in this norm. Fields E,H are C1 in time with values in L2 and continuous into H(curl) where Green pairings are used. Real time-independent symmetric epsilon,mu in L-infinity have uniform eigenvalue bounds 0<a<=lambda<=b; D=epsilon E,B=mu H. PEC means E in H0(curl). Smooth impedance data use H_tan=Y(n cross E), Y>=0, with surface power n dot(E cross H)=Y |E_tan|2. Rough impedance is only asserted when these traces and products lie in L2 of the boundary.

**Definition references.**

[[def-na-hcurl-space]]

[[def-na-zero-tangential-hcurl]]

[[lem-na-weak-hcurl-tangential-trace]]

[[post-em-material-closure]]

**Conditional derivation / well-definedness / verification.** State the boundary product assumption separately; the existing trace lemma only constructs a quotient-dual trace and gives one-way vanishing for H0(curl). Carry Countable Choice from the analytic suppliers.

Source-use keys: ETH, CHEN.


#### `pthm-emx-weak-poynting-uniqueness` — Energy and uniqueness for admissible weak solutions

Kind `physics-theorem`; domain `physics`.

**Statement.** Under the preceding boundary model and epsilon E_t=curl H-J, mu H_t=-curl E, energy W=1/2 integral(E dot epsilon E+H dot mu H) obeys Wdot=-integral E dot J for PEC; with admissible impedance add -integral_boundary Y |E_tan|2. Thus zero-data homogeneous solutions are unique. This is an a-priori result for solutions in the specified class, not an existence theorem.

**Statement references.**

[[def-emx-finite-energy-boundary-model]]

**Conditional derivation / well-definedness / verification.** Differentiate using bounded symmetric time-independent coefficients. The sum of curl pairings is the negative Green boundary power; PEC removes it by closure approximation. Positivity gives uniqueness after integrating the difference identity. For impedance use exactly the stated L2 trace/product hypothesis.

Source-use keys: ETH, CHEN.


#### `pthm-emx-sheet-charge-continuity` — Stationary sheets and charge conservation

Kind `physics-theorem`; domain `physics`.

**Statement.** For a fixed oriented C2 interface with n from minus to plus, piecewise C1 fields with joint one-sided spacetime C1 extensions and C1 surface free charge sigma and tangential surface current K, the distributional Maxwell equations imply n dot[D]=sigma,n cross[H]=K,n dot[B]=0,n cross[E]=0 and sigma_t+div_surface K+n dot[J]=0, with no edge of the interface in the test support.

**Statement references.**

[[pthm-emx-weak-poynting-uniqueness]]

[[post-em-distributional-vacuum-maxwell]]

[[pthm-em-material-stationary-jumps]]

**Conditional derivation / well-definedness / verification.** Differentiate the two characteristic functions in tests to obtain delta-interface coefficients; compare Maxwell coefficients. Pair the distributional continuity equation with a tubular test and integrate tangentially to get the surface law. Moving interfaces need additional transport terms and are excluded.

Source-use keys: ETH, CHEN.


### B interfaces


#### `cex-emx-rough-field-energy-limit` — Weak Maxwell does not authorize quadratic self-energy

Kind `counterexample`; domain `physics`.

**Statement.** The Coulomb field of a point charge is locally integrable but not locally L2 near its support: integral_{delta<r<R} epsilon0 |E|2/2 diverges proportionally to 1/delta. A distributional Maxwell solution alone therefore does not define a finite stress tensor.

**Statement references.**

[[def-emx-finite-energy-boundary-model]]

[[pthm-em-point-self-energy-divergence]]

**Conditional derivation / well-definedness / verification.** Integrate r^-4 against 4 pi r2 dr; distinguish distributional field existence from its square.

Source-use keys: ETH, CHEN.


#### `ex-emx-impedance-sign-check` — Positive admittance removes energy

Kind `example`; domain `physics`.

**Statement.** For n=e_z and tangential E=E0 e_x, H=Y(n cross E)=Y E0 e_y gives outward power Y E0 squared, while the reversed sign injects energy.

**Statement references.**

[[def-emx-finite-energy-boundary-model]]

**Conditional derivation / well-definedness / verification.** Compute n dot(E cross H)=Y E0 squared and compare with the boundary loss term. No outgoing-wave assumption is needed.

Source-use keys: ETH, CHEN.


## Causal oscillator media and passivity

A page `emx-passive-dispersive-materials`; B companion `emx-passive-dispersive-materials-examples`. Category `classical-electromagnetism`; library `physics`.

Prerequisite A/P pages: `em-material-response`, `em-primitives-and-postulates`, `em-vacuum-waves-and-polarization`, `emx-weak-boundary-energy`.


### A interfaces


#### `post-emx-lorentz-medium` — Finite Lorentz oscillator closure

Kind `postulate`; domain `physics`.

**Postulate.** In the rest frame of a homogeneous nonmagnetic material adopt D=epsilon_infinity E+sum P_l, B=mu H, and P_l,tt+gamma_l P_l,t+omega_l squared P_l=a_l E, for finitely many oscillators with epsilon_infinity,mu,a_l,omega_l>0 and gamma_l>=0. Quantities are real spatial vectors; epsilon_infinity has F/m and mu has H/m; P is C/m2, a_l has units F/(m s2), omega,gamma s^-1. Histories specify P and P_t, with a zero-past branch for the causal convolution. This is a linear local-response model, not a derivation of microscopic matter.

**Postulate references.**

[[post-em-material-closure]]

[[def-em-si-conventions]]

**Conditional derivation / well-definedness / verification.** Adopt as a restricted postulate; list excluded spatial dispersion, saturation, moving media and quantum material transitions. Oscillator initial energy is part of the state.

Source-use keys: ETH.


#### `pthm-emx-oscillator-energy` — Augmented energy and passive absorption

Kind `physics-theorem`; domain `physics`.

**Statement.** For smooth oscillator-medium solutions the sum of electromagnetic energy with epsilon_infinity and mu and W_l=(|P_l,t|2+omega_l squared |P_l|2)/(2 a_l) obeys partial_t W+div(E cross H)=-Jfree dot E-sum gamma_l |P_l,t|2/a_l. In particular undriven closed PEC systems have nonincreasing positive energy.

**Statement references.**

[[post-emx-lorentz-medium]]

[[pthm-emx-weak-poynting-uniqueness]]

**Conditional derivation / well-definedness / verification.** Dot each oscillator equation with P_t/a_l. Its input E dot P_t cancels the polarization-current term in field Poynting. Every remaining loss coefficient is nonnegative. This proof makes no false instantaneous u=1/2 E dot D claim in dispersive matter.

Source-use keys: ETH.


#### `pthm-emx-lorentz-susceptibility` — Analytic susceptibility and dispersion restrictions

Kind `physics-theorem`; domain `physics`.

**Statement.** With phasors exp(-i omega t) the zero-history electric susceptibility is sum a_l/(omega_l squared-z squared-i gamma_l z), analytic for Im z>0; for real omega>0 away from undamped poles Im epsilon(omega)>=0. For gamma_l>0 every kernel is exponentially decaying, is causal, and supports the usual unsubtracted Hilbert-transform relation for epsilon-epsilon_infinity. Undamped poles require distributional boundary limits; a pointwise dispersion formula there is not asserted.

**Statement references.**

[[post-emx-lorentz-medium]]

[[pthm-em-causal-dispersive-response]]

**Conditional derivation / well-definedness / verification.** Solve each constant-coefficient ODE or factor its roots, all in the closed lower half-plane for z; positive damping excludes real roots. Algebra gives Im term=a_l gamma_l omega/[(omega_l squared-omega squared)^2+gamma_l squared omega squared]. Decay O(z^-2), upper-half-plane contour and the existing causal-response supplier give the dispersion relation in its stated integrability class. Do not infer a universal group-velocity bound from causality.

Source-use keys: ETH.


#### `post-emx-drude-current-closure` — Drude current closure and collisionless limit

Kind `postulate`; domain `physics`.

**Postulate.** In the same fixed homogeneous material rest frame adopt a free carrier current V with V_t+gamma V=a E, P_t=V, D=epsilon_infinity E+P, B=mu H, with a,epsilon_infinity,mu>0 and gamma>=0. V is A/m2 and a is F/(m s2). The zero-past current branch is causal; a constant polarization offset is separately specified by Gauss data. This is a phenomenological closure and makes no microscopic carrier-statistics assertion.

**Postulate references.**

[[post-em-material-closure]]

[[def-em-si-conventions]]

**Conditional derivation / well-definedness / verification.** Define all state variables; the collisionless gamma=0 case has no decaying stationary impulse kernel and requires separate treatment at zero frequency.

Source-use keys: ETH.


#### `pthm-emx-drude-plasma-response` — Drude conductivity, passive energy and plasma cutoff

Kind `physics-theorem`; domain `physics`.

**Statement.** For exp(-i omega t), omega>0, the closure has conductivity a/(gamma-i omega), nonnegative Re conductivity, epsilon(omega)=epsilon_infinity-a/[omega(omega+i gamma)], and stored carrier energy |V|2/(2a). Field plus carrier energy loses gamma |V|2/a. In the collisionless branch epsilon=epsilon_infinity-a/omega2 and transverse plane waves have k2=mu epsilon_infinity(omega2-omega_p2), omega_p2=a/epsilon_infinity. Below omega_p they are evanescent rather than real-k propagating bulk modes.

**Statement references.**

[[post-emx-drude-current-closure]]

[[pthm-emx-oscillator-energy]]

[[def-em-plane-wave-definition]]

**Conditional derivation / well-definedness / verification.** Solve (-i omega+gamma)V=aE. Since -i omega P=V, eliminate P and simplify epsilon. Dot the ODE with V/a and cancel E dot V in field Poynting. For gamma=0 substitute scalar epsilon into the Maxwell plane symbol. The zero-frequency pole, interface modes and longitudinal plasma waves are outside this transverse calculation.

Source-use keys: ETH.


### B interfaces


#### `ex-emx-anomalous-group-delay` — Phase and group speeds are not causal fronts

Kind `example`; domain `physics`.

**Statement.** Take epsilon_infinity=epsilon0, mu=mu0, a=epsilon0 omega0 squared and gamma=omega0/2, and put nu=omega/omega0. On the passive square-root branch n=sqrt(1+1/(1-nu squared-i nu/2)), k=(omega/c)n. At nu=1, d Re k/d omega is negative, so a narrow-band group delay can be negative in this lossy causal model; it does not define the support front of a signal.

**Statement references.**

[[pthm-emx-lorentz-susceptibility]]

**Conditional derivation / well-definedness / verification.** At nu=1 write n=p+i q with p,q>0 and p squared+q squared=sqrt(5). Differentiate n squared to get 2 n n_prime=-8-2i, hence Re(n+n_prime)=[(sqrt(5)-4)p-q]/sqrt(5)<0. Then Re k_prime=Re(n+nu n_prime)/c<0. The medium is strongly absorbing at this frequency; this stationary-phase delay is not an energy-transport or causal-front speed.

Source-use keys: ETH.


#### `ex-emx-lossless-dispersive-energy` — Matter energy survives zero instantaneous polarization

Kind `example`; domain `physics`.

**Statement.** An undamped oscillator at a time with P=0,P_t nonzero carries strictly positive energy |P_t|2/(2a), so the instantaneous pair E,D cannot determine total stored energy.

**Statement references.**

[[pthm-emx-oscillator-energy]]

**Conditional derivation / well-definedness / verification.** Evaluate the augmented energy at the specified oscillator state.

Source-use keys: ETH.


## Anisotropic waves and reciprocity

A page `emx-anisotropic-reciprocal-optics`; B companion `emx-anisotropic-reciprocal-optics-examples`. Category `classical-electromagnetism`; library `physics`.

Prerequisite A/P pages: `em-material-response`, `em-vacuum-waves-and-polarization`, `em-wave-interfaces-and-conductors`, `emx-passive-dispersive-materials`.


### A interfaces


#### `def-emx-anisotropic-plane-symbol` — Anisotropic Maxwell symbol

Kind `definition`; domain `physics`.

**Definition.** For homogeneous lossless epsilon=epsilon transpose>0 and mu scalar>0 in a fixed material frame, monochromatic E=Re(e exp(i k dot x-i omega t)), omega>0, has b=k cross e/omega and equation k cross(mu^-1 k cross e)+omega squared epsilon e=0, with k dot epsilon e=0. E need not be orthogonal to k; D is. The symbols k,omega have units m^-1,s^-1.

**Definition references.**

[[post-em-material-closure]]

[[def-em-plane-wave-definition]]

**Conditional derivation / well-definedness / verification.** Substitution in the two curls and divergences defines the polarization eigenproblem; coefficients are dimensional SI tensors, not dimensionless epsilon_r unless divided by epsilon0.

Source-use keys: ETH.


#### `pthm-emx-uniaxial-dispersion` — Ordinary and extraordinary sheets

Kind `physics-theorem`; domain `physics`.

**Statement.** For epsilon=diag(epsilon_perp,epsilon_perp,epsilon_parallel)>0, k=(kx,0,kz), the ordinary branch has kx squared+kz squared=mu epsilon_perp omega squared; the extraordinary branch has kx squared/epsilon_parallel+kz squared/epsilon_perp=mu omega squared. Degenerate directions have repeated polarization eigenspaces.

**Statement references.**

[[def-emx-anisotropic-plane-symbol]]

**Conditional derivation / well-definedness / verification.** The y equation gives the ordinary branch. The x,z block determinant is exactly (omega squared epsilon_perp epsilon_parallel/mu)[mu omega squared-kx squared/epsilon_parallel-kz squared/epsilon_perp]; compute directly rather than assume E transverse. At kx=0 the sheets coincide.

Source-use keys: ETH.


#### `pthm-emx-lorentz-reciprocity` — Reciprocity in reciprocal linear media

Kind `physics-theorem`; domain `physics`.

**Statement.** At fixed real omega in a bounded smooth domain, two C1 phasor solutions curl E_j=i omega mu H_j,curl H_j=J_j-i omega epsilon E_j with transpose-symmetric possibly complex epsilon,mu obey integral_boundary n dot(E1 cross H2-E2 cross H1)=integral(E2 dot J1-E1 dot J2). No complex conjugation occurs in this bilinear reciprocity identity.

**Statement references.**

[[def-emx-anisotropic-plane-symbol]]

**Conditional derivation / well-definedness / verification.** Use div(E1 cross H2-E2 cross H1), substitute curls, and cancel tensor bilinears by transpose symmetry. This differs from an energy identity involving conjugates; lossy reciprocal media are allowed, magneto-optic antisymmetric tensors need not be reciprocal.

Source-use keys: ETH.


### B interfaces


#### `ex-emx-extraordinary-longitudinal-e` — Electric amplitude has a longitudinal component

Kind `example`; domain `physics`.

**Statement.** For kx kz nonzero and epsilon_perp not equal epsilon_parallel, an extraordinary polarization may satisfy k dot D=0 while k dot E is nonzero.

**Statement references.**

[[pthm-emx-uniaxial-dispersion]]

**Conditional derivation / well-definedness / verification.** Set D proportional to (kz,0,-kx), E=epsilon^-1 D; k dot E=kx kz(1/epsilon_perp-1/epsilon_parallel).

Source-use keys: ETH.


#### `ex-emx-reciprocity-not-time-reversal` — Loss and reciprocity coexist

Kind `example`; domain `physics`.

**Statement.** A scalar complex epsilon with positive imaginary part and real positive mu satisfies the reciprocity hypothesis yet absorbs cycle-averaged electric power omega Im(epsilon)|E|2/2.

**Statement references.**

[[pthm-emx-lorentz-reciprocity]]

[[pthm-emx-lorentz-susceptibility]]

**Conditional derivation / well-definedness / verification.** Insert scalar epsilon in the bilinear cancellation and independently compute the real average Jpolar dot E; time reversal is not inferred.

Source-use keys: ETH.


## Radiation asymptotics and controlled multipole expansion

A page `emx-radiation-multipoles`; B companion `emx-radiation-multipoles-examples`. Category `classical-electromagnetism`; library `physics`.

Prerequisite A/P pages: `em-electrostatic-multipoles`, `em-primitives-and-postulates`, `em-retarded-fields-and-radiation`.


### A interfaces


#### `def-emx-radiation-data` — Radiation data at fixed retarded time

Kind `definition`; domain `physics`.

**Definition.** Let smooth conserved rho,J have support in one ball B_a for all relevant times and all derivatives needed on a bounded retarded-time interval be bounded. Put t=u+r/c, x=r n. Radiation data E_rad(n,u)=lim_{r to infinity} r E(r n,u+r/c) and B_rad similarly, when uniform limits exist. The limit holds u fixed, not t fixed. Units are V for E_rad and T m for B_rad.

**Definition references.**

[[pthm-em-retarded-potentials]]

[[def-em-si-conventions]]

**Conditional derivation / well-definedness / verification.** Use the existing retarded potential branch only where its history integrals converge. The time-compact source subclass is an immediate safe branch; conserved compact-time sources have zero total charge.

Source-use keys: ETH.


#### `pthm-emx-transverse-radiation-data` — Transverse far field with remainder

Kind `physics-theorem`; domain `physics`.

**Statement.** For those sources and r>=2a, define Q(n,u)=integral J(y,u+n dot y/c)dy. Then E=-(mu0/(4 pi r))(I-n n transpose) partial_u Q+O(r^-2), B=n cross E/c+O(r^-2), uniformly in n and u on compact intervals, with constants controlled by support radius and finite uniform source derivative bounds. Hence radiated power at u is (mu0/(16 pi squared c)) integral_S2 |n cross partial_u Q|2 dOmega.

**Statement references.**

[[def-emx-radiation-data]]

[[pthm-em-dipole-radiation]]

[[pthm-em-retarded-potentials]]

**Conditional derivation / well-definedness / verification.** Taylor-expand |r n-y|=r-n dot y+O(a2/r), the inverse distance and differentiated retarded times uniformly. A_rad=mu0 Q/(4pi), phi_rad=(4pi epsilon0)^-1 integral rho(y,u+n dot y/c)dy. Integrate div_y J evaluated at retarded time and use continuity to show partial_u integral rho=(n/c) dot partial_u Q. This cancels longitudinal E. Differentiate the remainders before taking curl, using two bounded derivatives, then apply Poynting and uniform convergence.

Source-use keys: ETH.


#### `pthm-emx-controlled-dipole-power` — Dipole approximation with a source-scale error

Kind `physics-theorem`; domain `physics`.

**Statement.** Assume additionally a bound on partial_t squared J. Then |partial_u Q(n,u)-integral partial_t J(y,u)dy| <= (a/c) integral sup_{|s-u|<=a/c}|partial_t squared J(y,s)|dy. Conservation gives integral J=p_t for p=integral y rho dy. The leading electric dipole power is |p_tt|2/(6 pi epsilon0 c3); the displayed amplitude bound yields an absolute power error by |v2-w2|<=|v-w|(2|w|+|v-w|), not a relative error at a dipole zero.

**Statement references.**

[[pthm-emx-transverse-radiation-data]]

**Conditional derivation / well-definedness / verification.** Mean value theorem inside the compact integral gives the bound. Integration of div(y_i J) and continuity gives p_t=integral J. Integrate |n cross p_tt|2 using integral n_i n_j=4 pi delta_ij/3. Higher multipoles remain controlled Taylor coefficients, with remainder from the next derivative; no unqualified ka small assertion replaces a bound.

Source-use keys: ETH.


### B interfaces


#### `ex-emx-dipole-dark-direction` — Angular nodes defeat uniform relative errors

Kind `example`; domain `physics`.

**Statement.** For dipole acceleration p_tt parallel to n, the leading radiation amplitude vanishes although higher multipoles need not; a uniform absolute error does not imply a uniform relative error.

**Statement references.**

[[pthm-emx-controlled-dipole-power]]

**Conditional derivation / well-definedness / verification.** Evaluate (I-nn transpose)p_tt=0 and retain the explicit absolute remainder.

Source-use keys: ETH.


#### `ex-emx-retarded-versus-fixed-time` — Radiation limit depends on the limit path

Kind `example`; domain `physics`.

**Statement.** For a compact pulse, taking r to infinity with t fixed samples the pre-pulse field and may give zero, while t=u+r/c keeps its radiative pulse visible.

**Statement references.**

[[def-emx-radiation-data]]

**Conditional derivation / well-definedness / verification.** Use the retarded argument t-r/c and compare its two limits.

Source-use keys: ETH.


## Radiation reaction as a singular model reduction

A page `emx-radiation-reaction-models`; B companion `emx-radiation-reaction-models-examples`. Category `classical-electromagnetism`; library `physics`.

Prerequisite A/P pages: `em-primitives-and-postulates`, `em-retarded-fields-and-radiation`, `emx-radiation-multipoles`.


### A interfaces


#### `post-emx-abraham-lorentz-model` — Nonrelativistic Abraham–Lorentz equation

Kind `postulate`; domain `physics`.

**Postulate.** For a prescribed smooth external force f(t), mass m>0, and tau=q2/(6 pi epsilon0 m c3)>0, adopt m(a-tau a_t)=f as an effective nonrelativistic point-particle equation. This is an additional restricted model and not a well-defined substitution of the singular Maxwell self-field in the Lorentz force. a has units m/s2 and tau seconds.

**Postulate references.**

[[def-em-si-conventions]]

[[rem-em-radiation-reaction-limits]]

**Conditional derivation / well-definedness / verification.** Record nonproof status and low-speed/slow-force regime; no global Maxwell-Lorentz point-charge existence follows.

Source-use keys: ROHRLICH, LOCAL-DERIVATION.


#### `pthm-emx-runaway-preacceleration` — Runaway and nonrunaway branches

Kind `physics-theorem`; domain `physics`.

**Statement.** For the Abraham–Lorentz equation all solutions differ by C exp(t/tau). If f is bounded continuous and the exponentially weighted future integral converges, the unique bounded-future acceleration is a(t)=(m tau)^-1 integral_t^infinity exp(-(s-t)/tau) f(s)ds. It can be nonzero before a nonzero future force starts.

**Statement references.**

[[post-emx-abraham-lorentz-model]]

**Conditional derivation / well-definedness / verification.** Solve the scalar integrating-factor equation componentwise. Differentiate the integral by dominated convergence, establish the equation, and eliminate C using boundedness. If f is nonnegative in a fixed spatial direction on (0,1) and zero for t<0, the future integral is strictly positive for t<0. This is a model pathology, not experimental evidence.

Source-use keys: ROHRLICH, LOCAL-DERIVATION.


#### `pthm-emx-reduction-order-error` — First-order reduction with explicit residual

Kind `physics-theorem`; domain `physics`.

**Statement.** For f in C2, a_RO=(f+tau f_t)/m has residual m(a_RO-tau a_RO,t)-f=-tau2 f_tt. If f_tt is uniformly bounded and the bounded-future branch is chosen, its difference from a_RO is at most tau2 sup|f_tt|/m. These estimates concern prescribed-force acceleration, not an uncontrolled nonlinear self-consistent trajectory.

**Statement references.**

[[pthm-emx-runaway-preacceleration]]

**Conditional derivation / well-definedness / verification.** Integrate the exact future kernel twice by parts, with bounded f,f_t or vanishing exponential endpoint terms; the remaining integral is tau/m times integral_0^infinity e^-v/tau f_tt(t+v)dv. Its norm is bounded by tau2 sup|f_tt|/m. Direct differentiation gives the residual.

Source-use keys: ROHRLICH, LOCAL-DERIVATION.


### B interfaces


#### `ex-emx-free-runaway` — Zero force admits growing acceleration

Kind `example`; domain `physics`.

**Statement.** f=0 admits a=C exp(t/tau), so the equation plus position and velocity at one instant alone fails to select a physical branch.

**Statement references.**

[[pthm-emx-runaway-preacceleration]]

**Conditional derivation / well-definedness / verification.** Integrate a twice and note the independent acceleration constant.

Source-use keys: ROHRLICH, LOCAL-DERIVATION.


#### `ex-emx-force-frequency-regime` — Slow forcing is a quantitative condition

Kind `example`; domain `physics`.

**Statement.** For f=Re(f0 exp(-i omega t)) the exact nonrunaway acceleration amplitude is f0/[m(1+i omega tau)] and reduction of order is accurate only when |omega tau| is small in the absolute error bound.

**Statement references.**

[[pthm-emx-reduction-order-error]]

**Conditional derivation / well-definedness / verification.** Substitute the phasor and expand (1+i omega tau)^-1=1-i omega tau+O((omega tau)^2).

Source-use keys: ROHRLICH, LOCAL-DERIVATION.


## Transverse fields, helicity and angular momentum

A page `emx-classical-helicity-angular-momentum`; B companion `emx-classical-helicity-angular-momentum-examples`. Category `classical-electromagnetism`; library `physics`.

Prerequisite A/P pages: `em-energy-momentum-and-angular-balance`, `em-potentials-and-gauge`, `em-vacuum-waves-and-polarization`, `schwartz-space-and-the-plancherel-theorem`.


### A interfaces


#### `def-emx-transverse-fourier-field` — Classical transverse Fourier amplitudes

Kind `definition`; domain `physics`.

**Definition.** Let a:R3 minus {0} to C3 be smooth with compact support away from k=0 and k dot a=0. Define A_plus(x,t)=(2 pi)^(-3/2) integral a(k) exp(i k dot x-i c|k|t)dk, real A=2 Re A_plus, E=-A_t,B=curl A. These are real smooth finite-energy Schwartz fields on each bounded time interval in Coulomb gauge div A=0 and phi=0. They are classical fields; no one-photon Hilbert-space interpretation is included.

**Definition references.**

[[def-em-gauge-transformation]]

[[pthm-em-plane-wave-maxwell]]

[[thm-fourier-inversion-on-schwartz-space]]

**Conditional derivation / well-definedness / verification.** Compact annular Fourier support makes every spatial derivative and integration by parts legitimate; transverse Maxwell follows modewise. The zero-frequency exclusion is explicit.

Source-use keys: BLIOKH, ETH, LOCAL-DERIVATION.


#### `pthm-emx-helicity-projection` — Exact helicity projectors in vacuum

Kind `physics-theorem`; domain `physics`.

**Statement.** On the transverse fibre at k nonzero let C(k)v=i khat cross v. Then C is Hermitian, C squared=P_T=I-khat khat transpose, and P_plus/minus=(P_T plus/minus C)/2 are orthogonal rank-one projectors whose sum is P_T. Their Fourier multipliers commute with vacuum time evolution and proper spatial rotations. A global smooth nonvanishing polarization basis is not assumed.

**Statement references.**

[[def-emx-transverse-fourier-field]]

**Conditional derivation / well-definedness / verification.** The real cross matrix is antisymmetric, hence multiplication by i is Hermitian; khat cross(khat cross v)=khat(khat dot v)-v. This yields all projector identities by multiplication. Rotations preserve cross products. Commutation with the scalar exp(-ic|k|t) proves invariance; no spin-position tensor factor is constructed.

Source-use keys: BLIOKH, ETH, LOCAL-DERIVATION.


#### `def-emx-angular-momentum-split` — Coulomb-gauge canonical and kinetic integrals

Kind `definition`; domain `physics`.

**Definition.** For these real Schwartz vacuum fields define Jkin=epsilon0 integral x cross(E cross B)dx, Lcan=epsilon0 sum_i integral E_i (x cross grad)A_i dx, and Scan=epsilon0 integral E cross A dx. All carry J s. These are functionals on the specified gauge-fixed fields, not separately universal local gauge-invariant densities.

**Definition references.**

[[def-emx-transverse-fourier-field]]

[[def-em-vacuum-stress-momentum]]

**Conditional derivation / well-definedness / verification.** Weighted Schwartz integrability makes each integral finite. The transverse A is fixed by decay, div A=0, curl A=B; harmonic decaying residual gradients vanish, but generic gauges are outside the defining class.

Source-use keys: BLIOKH, ETH, LOCAL-DERIVATION.


#### `pthm-emx-canonical-kinetic-integral` — Equality of total angular momentum integrals

Kind `physics-theorem`; domain `physics`.

**Statement.** For the stated Schwartz Coulomb-gauge vacuum fields Jkin=Lcan+Scan. The identity relies on div E=0 and vanishing surface terms; with charge density the integral decomposition includes epsilon0 integral (div E)(x cross A)dx, and finite boundaries also contribute a surface term.

**Statement references.**

[[def-emx-angular-momentum-split]]

**Conditional derivation / well-definedness / verification.** Use (E cross curl A)_i=E_j partial_i A_j-E_j partial_j A_i. Multiply by epsilon_{lmi}x_m and integrate the second term by parts. Derivative of x_m produces (E cross A)_l, derivative of E produces (div E)(x cross A)_l, and the boundary is -integral n_j E_j(x cross A)_l dS. In vacuum Schwartz data only L+S remain. Thus no density-wise canonical=kinetic assertion is made.

Source-use keys: BLIOKH, ETH, LOCAL-DERIVATION.


### B interfaces


#### `cex-emx-plane-wave-spin-integral-failure` — Infinite plane waves have no total angular-momentum integral

Kind `counterexample`; domain `physics`.

**Statement.** A nonzero monochromatic plane wave fills infinite space with positive mean energy density and is outside the finite-energy functionals; the finite-energy total-angular-momentum functional is therefore outside its defined domain; formal component cancellations do not change that fact.

**Statement references.**

[[def-emx-angular-momentum-split]]

**Conditional derivation / well-definedness / verification.** Integrate positive mean density over increasing cubes and note the nondecaying field; flux or density statements require a separate normalization.

Source-use keys: BLIOKH, ETH, LOCAL-DERIVATION.


#### `ex-emx-gauge-boundary-term` — Charged configurations retain an additional term

Kind `example`; domain `physics`.

**Statement.** For a smooth charge-supported configuration and decaying potentials the algebraic split includes integral rho x cross A, so dropping div E is valid only in the source-free region with the specified boundaries.

**Statement references.**

[[pthm-emx-canonical-kinetic-integral]]

**Conditional derivation / well-definedness / verification.** Use epsilon0 div E=rho in the established formula; this is an illustrative extension, not a supplier of the source-free theorem.

Source-use keys: BLIOKH, ETH, LOCAL-DERIVATION.


## Angular-spectrum optics and controlled paraxial limits

A page `emx-paraxial-optics`; B companion `emx-paraxial-optics-examples`. Category `classical-electromagnetism`; library `physics`.

Prerequisite A/P pages: `em-scattering-and-scalar-diffraction`, `emx-classical-helicity-angular-momentum`, `schwartz-space-and-the-plancherel-theorem`.


### A interfaces


#### `def-emx-angular-spectrum` — Forward angular-spectrum beam

Kind `definition`; domain `physics`.

**Definition.** Fix vacuum k0=omega/c>0 and 0<delta<1. Let uhat in L2(R2) be supported in |q|<=delta k0. Define u_exact(z)=Fourier_inverse[exp(i z sqrt(k0 squared-|q|2)) uhat(q)] and u_par(z)=exp(i k0 z) Fourier_inverse[exp(-i z |q|2/(2k0)) uhat(q)]. These are scalar envelopes, with Fourier inverse normalized unitarily. An exact vector spectrum e(q) must satisfy (q,kz) dot e=0.

**Definition references.**

[[def-emx-transverse-fourier-field]]

[[post-em-scalar-aperture-model]]

[[thm-plancherel]]

**Conditional derivation / well-definedness / verification.** Define the L2 inverse through the existing Fourier interface when resolved; the purely scalar approximation is an adopted optical reduction, not automatically a Maxwell solution.

Source-use keys: ETH.


#### `pthm-emx-paraxial-error` — Paraxial phase and longitudinal-field bounds

Kind `physics-theorem`; domain `physics`.

**Statement.** For real z the L2 envelope error is at most |z| k0 delta4/[8(1-delta2)^(3/2)] times ||u0||2. For an exact vector wave its longitudinal spectrum satisfies |e_z|<=delta/sqrt(1-delta2)|e_perp|. Thus a small angular cone alone does not give a uniformly small long-distance phase error.

**Statement references.**

[[def-emx-angular-spectrum]]

**Conditional derivation / well-definedness / verification.** Taylor theorem for sqrt(1-s) at zero bounds the phase remainder by s2/[8(1-delta2)^(3/2)]. Use |exp(i a)-exp(i b)|<=|a-b| and Plancherel. Transversality gives e_z=-(q dot e_perp)/kz. Require both delta small and |z|k0 delta4 controlled; longitudinal errors are O(delta).

Source-use keys: ETH.


#### `pthm-emx-scalar-vortex-eigenvalue` — Paraxial orbital winding in its exact scalar domain

Kind `physics-theorem`; domain `physics`.

**Statement.** For a smooth paraxial scalar envelope u(r,phi,z)=f(r,z) exp(i ell phi), integer ell, with finite transverse norm and vanishing radial boundary terms, -i partial_phi u=ell u. The normalized scalar angular-generator expectation is ell; identifying a torque or a photon angular momentum requires additional vector flux or QFT assumptions.

**Statement references.**

[[def-emx-angular-spectrum]]

**Conditional derivation / well-definedness / verification.** Differentiate the periodic azimuthal factor and divide integral conjugate(u)(-i partial_phi)u by integral |u|2. At r=0 require f(r)=O(r^|ell|) for smoothness. This is not a claim that generic exact vector beams have an independent fixed spin and orbital tensor factor.

Source-use keys: ETH.


### B interfaces


#### `cex-emx-paraxial-distance-failure` — A small angular cone can accumulate order-one phase error

Kind `counterexample`; domain `physics`.

**Statement.** For spectra concentrated near |q|=delta k0 and propagation z proportional to (k0 delta4)^-1, the difference between exact and paraxial phase need not tend to zero as delta tends to zero.

**Statement references.**

[[pthm-emx-paraxial-error]]

**Conditional derivation / well-definedness / verification.** Use sqrt(1-delta2)=1-delta2/2-delta4/8+O(delta6) and choose a narrowing annular spectrum; the phase difference tends to a nonzero constant.

Source-use keys: ETH.


#### `ex-emx-longitudinal-focused-field` — Tight focusing changes polarization bookkeeping

Kind `example`; domain `physics`.

**Statement.** For q nonzero, prescribing e_perp parallel to q gives nonzero e_z, so a scalar transverse polarization prescription alone is not an exact Maxwell beam.

**Statement references.**

[[pthm-emx-paraxial-error]]

**Conditional derivation / well-definedness / verification.** Insert e_perp parallel q into e_z=-(q dot e_perp)/kz.

Source-use keys: ETH.


## Compatible matrix evolution and time stepping

A page `emx-compatible-matrix-evolution`; B companion `emx-compatible-matrix-evolution-examples`. Category `classical-electromagnetism-mathematics`; library `mathematics`.

Prerequisite A/P pages: `discrete-de-rham-complexes-and-edge-elements`, `finite-generator-master-equations-and-uniformization`, `inner-product-spaces-and-orthogonality`, `the-spectral-theorem-and-singular-value-decomposition`.


### A interfaces


#### `def-emx-matrix-maxwell-system` — Finite compatible matrix system

Kind `definition`; domain `mathematics`.

**Definition.** Let Me in R^(ne x ne), Mb in R^(nb x nb) be symmetric positive definite, C in R^(nb x ne), S positive semidefinite, and D in R^(nc x nb) satisfy D C=0. The finite system is Me e_t=C transpose Mb b-S e-j, b_t=-C e. Define W=1/2(e transpose Me e+b transpose Mb b), algebraic weak-divergence constraint q=-G transpose Me e for any G with C G=0, and magnetic constraint D b. All objects in this item are real finite-dimensional mathematical data.

**Definition references.**

[[thm-finite-dimensional-orthogonal-decomposition]]

**Conditional derivation / well-definedness / verification.** Specify supplied matrices, vectors and time functions; neither mesh geometry nor physical constitutive assumptions are used in the pure matrix theorem.

Source-use keys: LOCAL-MATH, CHEN.


#### `thm-emx-matrix-energy-constraints` — Energy, existence and algebraic constraints

Kind `theorem`; domain `mathematics`.

**Statement.** For continuous j and initial e,b the finite system has a unique C1 solution on every finite interval, W_t=-e transpose S e-e transpose j, D b(t)=D b(0), and q_t=G transpose(S e+j).

**Statement references.**

[[def-emx-matrix-maxwell-system]]

[[lem-xd-finite-matrix-exponential-series]]

**Conditional derivation / well-definedness / verification.** Eliminate Me by its SPD inverse to get a constant linear ODE, construct exp(tA) by its absolutely uniformly convergent power series, and use variation of constants. Differentiate W and cancel cross terms. Apply D and G transpose. Uniqueness follows from the same energy estimate for the difference; Picard theorem need not be silently assumed.

Source-use keys: LOCAL-MATH, CHEN.


#### `alg-emx-staggered-leapfrog` — Staggered compatible leapfrog

Kind `algorithm`; domain `mathematics`.

**Definition.** Inputs are the preceding matrices with S=0,j=0, time step h>0, integer N>=0, e0 and b_minus_half. For n=0,...,N-1 set b_{n+1/2}=b_{n-1/2}-h C e_n and e_{n+1}=e_n+h Me^-1 C transpose Mb b_{n+1/2}. Output all N+1 electric iterates and corresponding magnetic half iterates. Solve each SPD mass equation exactly or specify a separate inexact-solve error model.

**Definition references.**

[[def-emx-matrix-maxwell-system]]

**Conditional derivation / well-definedness / verification.** The finite loop and unique SPD solves define the procedure. Correctness and termination are distinct following results.

Source-use keys: LOCAL-MATH, CHEN.


#### `thm-emx-leapfrog-cfl` — CFL energy stability and finite termination

Kind `theorem`; domain `mathematics`.

**Statement.** Let K=Mb^(1/2) C Me^(-1/2) and h ||K||2<2. The algorithm terminates after N iterations and preserves E_h=1/2[||x_n||2+||y_{n-1/2}||2-h y_{n-1/2} transpose K x_n], where x=Me^(1/2)e,y=Mb^(1/2)b. E_h is positive definite with bounds (1-h||K||/2)(||x||2+||y||2)/2 <= E_h <= (1+h||K||/2)(||x||2+||y||2)/2. D b is preserved. For h||K||>2 an expanding singular mode exists; equality at 2 may be defective and is excluded.

**Statement references.**

[[alg-emx-staggered-leapfrog]]

[[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]

[[thm-singular-value-decomposition]]

**Conditional derivation / well-definedness / verification.** In normalized variables y_new=y-hKx,x_new=x+hK transpose y_new. Expand squares and the cross term to verify invariance. Cauchy-Schwarz gives the bounds. Singular-vector reduction gives trace 2-h2 sigma2, determinant one; h sigma>2 yields real reciprocal eigenvalues with one modulus>1. Finite N and invertible mass matrix prove termination. DC=0 gives constraint invariance.

Source-use keys: LOCAL-MATH, CHEN.


### B interfaces


#### `cex-emx-explicit-euler-growth` — Explicit Euler grows a free oscillator

Kind `counterexample`; domain `mathematics`.

**Statement.** For Me=Mb=C=[1],S=j=0, forward Euler multiplies W by 1+h2 at every nonzero step.

**Statement references.**

[[def-emx-matrix-maxwell-system]]

**Conditional derivation / well-definedness / verification.** The update is (e,b)->(e+h b,b-h e); expand its norm square.

Source-use keys: LOCAL-MATH, CHEN.


#### `cex-emx-cfl-endpoint` — CFL endpoint can have linear growth

Kind `counterexample`; domain `mathematics`.

**Statement.** For the one-mode leapfrog system with K=1,h=2 the update has repeated eigenvalue -1 and a nonzero Jordan nilpotent part, hence generic iterates grow linearly.

**Statement references.**

[[thm-emx-leapfrog-cfl]]

**Conditional derivation / well-definedness / verification.** The matrix on (x,y_old) is [[-3,2],[-2,1]], whose (A+I) is nonzero but squares to zero.

Source-use keys: LOCAL-MATH, CHEN.


## Compatible finite elements, constraints and coercive error control

A page `emx-compatible-finite-elements`; B companion `emx-compatible-finite-elements-examples`. Category `classical-electromagnetism`; library `physics`.

Prerequisite A/P pages: `discrete-de-rham-complexes-and-edge-elements`, `emx-compatible-matrix-evolution`, `emx-weak-boundary-energy`, `lax-milgram-and-weak-elliptic-solutions`.


### A interfaces


#### `def-emx-whitney-semidescretization` — PEC edge-face Maxwell assembly

Kind `definition`; domain `physics`.

**Definition.** On a finite matching tetrahedral mesh choose relative edge space Vh=N_h1 intersect H0(curl), and magnetic face space Wh containing curl Vh. Use edge circulations and oriented face fluxes, incidence curl C and divergence D. For bounded uniformly positive symmetric epsilon,mu assemble Me_ij=integral epsilon phi_i dot phi_j, Mb_ij=integral mu^-1 psi_i dot psi_j; e describes E_h and b describes B_h. Current load is j_i=integral J dot phi_i; conductivity S is an SPD or semidefinite Galerkin matrix. These matrices yield the stated compatible matrix system.

**Definition references.**

[[def-na-lowest-order-whitney-de-rham-spaces]]

[[thm-na-lowest-order-discrete-de-rham-cohomology-and-harmonic-modes]]

[[def-emx-matrix-maxwell-system]]

[[def-emx-finite-energy-boundary-model]]

**Conditional derivation / well-definedness / verification.** Match curl basis coefficient identity and weak Ampere; boundary closure removes surface work. Magnetic Mb uses mu^-1 because b stores B, not H. Carry Countable Choice. PEC relative versus full complex must be stated in assembly, not conflated.

Source-use keys: ETH, CHEN.


#### `pthm-emx-discrete-maxwell-balance` — Discrete energy and exact magnetic constraints

Kind `physics-theorem`; domain `physics`.

**Statement.** The semidiscrete system has unique global finite-dimensional solutions, correct energy W_h=1/2 integral(E_h dot epsilon E_h+B_h dot mu^-1 B_h), balance W_h,t=-e transpose S e-e transpose j, and exact D b conservation. Charge consistency is q_t=G transpose(S e+j) for relative gradient incidence G; no nodal deposition scheme is inferred automatically.

**Statement references.**

[[def-emx-whitney-semidescretization]]

[[thm-emx-matrix-energy-constraints]]

**Conditional derivation / well-definedness / verification.** Apply the pure matrix theorem after verifying SPD mass matrices using positive coefficient bounds and basis independence, DC=0 from boundary squared zero and CG=0. This exact algebra does not imply a continuum convergence rate.

Source-use keys: ETH, CHEN.


#### `pthm-emx-coercive-maxwell-galerkin` — Coercive shifted curl-curl approximation

Kind `physics-theorem`; domain `physics`.

**Statement.** For Omega bounded Lipschitz polyhedral, epsilon,mu uniformly positive symmetric bounded and s>0 real, the weak problem a(u,v)=integral(mu^-1 curl u dot curl v+s2 epsilon u dot v)=F(v) on H0(curl) has a unique solution for each bounded F, and its conforming edge approximation obeys ||u-u_h||Hcurl <= M/alpha inf_{v_h in Vh}||u-v_h||Hcurl. Here alpha=min(lambda_min(mu^-1),s2 lambda_min(epsilon)) and M=max(lambda_max(mu^-1),s2 lambda_max(epsilon)).

**Statement references.**

[[def-emx-whitney-semidescretization]]

[[thm-lax-milgram]]

[[thm-na-uniformly-bounded-commuting-cochain-projection]]

**Conditional derivation / well-definedness / verification.** H(curl) completeness follows from L2 completeness and distributional graph closure; the closure subspace is Hilbert. Apply Lax-Milgram with explicit bounds, subtract Galerkin equations, test e against e-(u-vh), and divide the alpha/M inequality. Strong graph convergence of the actual bounded commuting projections makes the best approximation vanish. Real positive s is a Laplace-frequency shift; real-frequency lossless resonance is excluded.

Source-use keys: ETH, CHEN.


#### `pthm-emx-topological-zero-modes` — Cohomology survives numerical discretization

Kind `physics-theorem`; domain `physics`.

**Statement.** For the full lowest-order mesh complex discrete harmonic one- and two-mode dimensions equal the corresponding real Betti numbers. For a PEC relative complex, impose its actual relative cohomology or quotient the complete curl kernel; removing only scalar gradients need not remove every zero mode.

**Statement references.**

[[def-emx-whitney-semidescretization]]

[[thm-na-lowest-order-discrete-de-rham-cohomology-and-harmonic-modes]]

[[thm-na-discrete-compactness-and-poincare-lowest-order-nedelec]]

**Conditional derivation / well-definedness / verification.** Use the full-complex supplier only for its full-complex conclusion. Use the separate compactness supplier for its relative kernel quotient and explicit topology hypotheses. No equality between full and relative Betti numbers is claimed.

Source-use keys: ETH, CHEN.


### B interfaces


#### `cex-emx-edge-moment-domain-failure` — Raw edge interpolation is not a rough-field algorithm

Kind `counterexample`; domain `physics`.

**Statement.** An arbitrary H(curl) equivalence class need not have well-defined line restrictions on mesh edges; changing values on an edge changes no L2 class. Therefore raw edge sampling is not a well-defined map on all H(curl).

**Statement references.**

[[def-emx-whitney-semidescretization]]

[[thm-na-uniformly-bounded-commuting-cochain-projection]]

**Conditional derivation / well-definedness / verification.** Choose two representatives differing only on an edge; use bounded smoothed commuting projection for rough fields, or explicitly require the regularity needed by canonical moments.

Source-use keys: ETH, CHEN.


#### `ex-emx-resonance-outside-coercivity` — Real-frequency cavity resonance is excluded

Kind `example`; domain `physics`.

**Statement.** Replacing positive s2 by -omega2 destroys the displayed coercivity; at a PEC cavity eigenfrequency a nonzero homogeneous eigenfield makes uniqueness fail.

**Statement references.**

[[pthm-emx-coercive-maxwell-galerkin]]

[[pthm-em-guide-completeness]]

**Conditional derivation / well-definedness / verification.** Use an already authored rectangular PEC mode with its resonant frequency and zero forcing. This does not contradict the positive-shift theorem.

Source-use keys: ETH, CHEN.


## Classical coherence matrices and measurement scope

A page `emx-polarization-coherence`; B companion `emx-polarization-coherence-examples`. Category `classical-electromagnetism`; library `physics`.

Prerequisite A/P pages: `em-vacuum-waves-and-polarization`, `emx-paraxial-optics`.


### A interfaces


#### `def-emx-coherency-matrix` — Classical two-component coherency matrix

Kind `definition`; domain `physics`.

**Definition.** For a specified transverse paraxial detector plane let Z=(Zx,Zy) be a complex random vector with finite second moment on a specified probability space; Gamma=E[Z Z dagger] is its Hermitian coherency matrix. The averaging is an explicitly adopted ensemble or stationary measurement model, not a quantum density operator identification. Define S0=Gamma11+Gamma22,S1=Gamma11-Gamma22,S2=2 Re Gamma12,S3=-2 Im Gamma12 in the exp(-i omega t) convention. Units follow |Z|2, e.g. (V/m)2.

**Definition references.**

[[def-em-polarization-definition]]

[[pthm-emx-paraxial-error]]

**Conditional derivation / well-definedness / verification.** State ensemble versus time-average assumptions: ergodicity is an additional supplier obligation if one equates them. Finite second moment gives all entries by Cauchy-Schwarz.

Source-use keys: ETH.


#### `pthm-emx-stokes-positivity` — Stokes cone and Jones transformations

Kind `physics-theorem`; domain `physics`.

**Statement.** Gamma is positive semidefinite and S0 squared>=S1 squared+S2 squared+S3 squared, with equality for nonzero rank-one Gamma. A deterministic Jones matrix M sends Gamma to M Gamma M dagger. Degree of polarization is sqrt(S1 squared+S2 squared+S3 squared)/S0 when S0>0 and is undefined at zero intensity.

**Statement references.**

[[def-emx-coherency-matrix]]

**Conditional derivation / well-definedness / verification.** For v, v dagger Gamma v=E|v dagger Z|2>=0. The determinant is (S0 squared-|S|2)/4. Eigenvalue positivity proves the inequality and rank criterion. Linearity of the deterministic map through expectation proves the transformation.

Source-use keys: ETH.


#### `pthm-emx-classical-visibility` — Visibility bound in a specified two-beam model

Kind `physics-theorem`; domain `physics`.

**Statement.** For scalar coherent detection I(theta)=I1+I2+2 Re(exp(i theta)Gamma12), I1,I2>=0, visibility V=2|Gamma12|/(I1+I2)<=1 when total intensity is positive. Finite sampled intensities need not attain this model visibility exactly.

**Statement references.**

[[def-emx-coherency-matrix]]

[[pthm-emx-stokes-positivity]]

**Conditional derivation / well-definedness / verification.** Positivity gives |Gamma12|2<=I1 I2 and arithmetic-geometric mean gives the bound. Optimize the scalar phase to get maximum/minimum. Detector response, sampling and noise must be supplied for statistical inference; this theorem is conditional model algebra.

Source-use keys: ETH.


### B interfaces


#### `ex-emx-unpolarized-nonzero-field` — Mixed classical polarization ensembles

Kind `example`; domain `physics`.

**Statement.** Equal-probability Jones amplitudes (a,0) and (0,a) have Gamma=|a|2 I/2, zero S1,S2,S3 and positive S0 for a nonzero. Every realization is a definite classical amplitude.

**Statement references.**

[[pthm-emx-stokes-positivity]]

**Conditional derivation / well-definedness / verification.** Compute the finite expectation; no quantization is implied.

Source-use keys: ETH.


#### `cex-emx-zero-intensity-degree` — Normalized polarization is undefined at darkness

Kind `counterexample`; domain `physics`.

**Statement.** For Z=0 almost surely, Gamma=0 and S0=0, so dividing by S0 does not define a polarization degree.

**Statement references.**

[[def-emx-coherency-matrix]]

**Conditional derivation / well-definedness / verification.** The unnormalized cone relation holds but its normalized quotient is 0/0.

Source-use keys: ETH.


## Helicity bundles, rotations and Berry curvature

A page `emx-polarization-bundle`; B companion `emx-polarization-bundle-examples`. Category `classical-electromagnetism`; library `physics`.

Prerequisite A/P pages: `emx-classical-helicity-angular-momentum`, `emx-lorentz-form-algebra`, `the-de-rham-theorem-and-degree`.


### A interfaces


#### `def-emx-helicity-line-bundle` — Helicity eigenlines over the direction sphere

Kind `definition`; domain `physics`.

**Definition.** Over the oriented unit sphere S2 define L_sigma(n)=range(P_sigma(n)) subset C3, sigma=+1 or -1, using C(n)=i n cross. The local unit frame is v_sigma=(e_theta+i sigma e_phi)/sqrt(2) away from the poles. Its Berry one-form is A_sigma=i v_sigma dagger d v_sigma; a phase change v to exp(i chi)v sends A to A-d chi. Curvature is the globally defined two-form dA. This is a classical polarization line bundle, with no photon position operator.

**Definition references.**

[[pthm-emx-helicity-projection]]

[[def-emx-lorentz-star]]

**Conditional derivation / well-definedness / verification.** Use the smooth projector to define a rank-one complex subbundle; local smooth frames exist because a fixed vector projected by P remains nonzero in a neighborhood where its projection is nonzero.

Source-use keys: BLIOKH.


#### `pthm-emx-helicity-berry-curvature` — Curvature and the obstruction to a global polarization basis

Kind `physics-theorem`; domain `physics`.

**Statement.** In the stated spherical frame A_sigma=sigma cos(theta)d phi and curvature=-sigma sin(theta)d theta wedge d phi. Its sphere integral is -4 pi sigma. Consequently no globally smooth unit frame can exist: otherwise its global A would have exact curvature with zero sphere integral. The curvature flux divided by 2 pi is -2 sigma in this convention.

**Statement references.**

[[def-emx-helicity-line-bundle]]

[[thm-stokes-theorem-for-smooth-singular-chains]]

**Conditional derivation / well-definedness / verification.** Differentiate e_theta,e_phi: e_theta dot partial_phi e_phi=-cos theta and e_phi dot partial_phi e_theta=cos theta. Therefore v dagger partial_phi v=-i sigma cos theta. Theta component vanishes; dA is the displayed curvature. Integrate the smooth global area form and apply Stokes on the closed sphere. This directly proves the obstruction without relying on an unprovided classification theorem for Chern classes.

Source-use keys: BLIOKH.


#### `pthm-emx-helicity-rotation-weight` — SO(2) helicity character and geometric phase

Kind `physics-theorem`; domain `physics`.

**Statement.** A proper active rotation by alpha about n sends v_sigma to exp(-i sigma alpha)v_sigma. Parallel transport defined by P_sigma d v=0 along a smooth direction path yields local amplitude phase exp(i integral A_sigma); on a closed loop in one gauge patch its holonomy is exp(i integral_surface curvature), with surfaces and patch transitions explicitly accounted for.

**Statement references.**

[[def-emx-helicity-line-bundle]]

[[pthm-emx-helicity-berry-curvature]]

**Conditional derivation / well-definedness / verification.** Rotate the two real transverse basis vectors and collect coefficients. For v=a v_sigma, projected transport gives da=-a v_sigma dagger dv_sigma=i A_sigma a. Integrate this scalar ODE; phase transformations cancel at transitions. Stokes gives the loop formula where a spanning patch exists, and subdividing patches supplies the general finite chart computation. This is the weight-one character of the rotation subgroup, not an independent spin-three-dimensional-position tensor decomposition.

Source-use keys: BLIOKH.


### B interfaces


#### `ex-emx-polarization-latitude-phase` — Latitude-loop Berry holonomy

Kind `example`; domain `physics`.

**Statement.** For a loop theta=theta0,phi from 0 to 2 pi away from the poles, Berry holonomy is exp(i 2 pi sigma cos theta0), equivalently exp(-i sigma Omega) where Omega=2 pi(1-cos theta0) is the north-cap solid angle.

**Statement references.**

[[pthm-emx-helicity-rotation-weight]]

**Conditional derivation / well-definedness / verification.** Integrate A and compare phases modulo 2 pi; use a north-pole regular gauge for a surface computation.

Source-use keys: BLIOKH.


#### `cex-emx-polarization-gauge-singularity` — A singular helicity frame is not a singular field

Kind `counterexample`; domain `physics`.

**Statement.** The spherical helicity frame has a polar coordinate singularity while the projector P_sigma(n) is smooth everywhere. The obstruction concerns a choice of global phase frame and does not make a smooth physical transverse field singular.

**Statement references.**

[[pthm-emx-helicity-berry-curvature]]

**Conditional derivation / well-definedness / verification.** Compare the polynomial-in-n projector with e_theta,e_phi at a pole; use local projected-vector frames.

Source-use keys: BLIOKH.


## Power-normalized scattering and passivity

A page `emx-waveguide-scattering-channels`; B companion `emx-waveguide-scattering-channels-examples`. Category `classical-electromagnetism`; library `physics`.

Prerequisite A/P pages: `em-waveguides-and-cavities`, `emx-anisotropic-reciprocal-optics`, `emx-passive-dispersive-materials`, `emx-weak-boundary-energy`.


### A interfaces


#### `def-emx-port-scattering-model` — Finite propagating-port scattering map

Kind `definition`; domain `physics`.

**Definition.** Fix a real frequency away from every channel cutoff. Assume a unique time-harmonic Maxwell solution for each incoming amplitude a in C^N in a device with N chosen propagating ports and no omitted outgoing radiation channels. Port modes are normalized so incoming and outgoing time-averaged powers are ||a||2 and ||b||2; outgoing amplitudes b=S a define the finite scattering matrix. Evanescent modes are retained in matching but carry zero net asymptotic outward power individually. Existence, completeness and absence of bound-state nonuniqueness are explicit assumptions of this finite-channel interface.

**Definition references.**

[[pthm-em-guide-completeness]]

[[pthm-emx-lorentz-reciprocity]]

[[pthm-emx-weak-poynting-uniqueness]]

**Conditional derivation / well-definedness / verification.** Define amplitudes by the flux-orthogonal asymptotic port expansion with direction conventions. For an open radiating device either include its continuum outgoing power as a nonnegative remainder or do not claim finite-channel unitarity.

Source-use keys: ETH.


#### `pthm-emx-scattering-contraction` — Passivity gives a contractive scattering matrix

Kind `physics-theorem`; domain `physics`.

**Statement.** In the preceding model, cycle-averaged Poynting balance with nonnegative material/boundary loss gives ||S a||2<=||a||2. If all loss and all unlisted outward power vanish then S dagger S=I; finite square S is unitary. These conclusions are conditional on the well-posed port formulation, not an existence proof for arbitrary scatterers.

**Statement references.**

[[def-emx-port-scattering-model]]

[[pthm-emx-oscillator-energy]]

**Conditional derivation / well-definedness / verification.** Integrate cycle-averaged balance over the device truncated at ports and send truncations down the uniform leads. Modal flux orthogonality gives ||a||2-||Sa||2=P_loss+P_other>=0. Equality for every a gives a dagger(I-S dagger S)a=0; use polarization to identify the zero Hermitian matrix. For finite square S an isometry is surjective.

Source-use keys: ETH.


#### `pthm-emx-scattering-reciprocity` — Reciprocal port normalization gives symmetric scattering

Kind `physics-theorem`; domain `physics`.

**Statement.** If coefficients are transpose symmetric and the reciprocal incoming/outgoing port bases are chosen so the Lorentz boundary bilinear form for two solutions is a1 transpose b2-b1 transpose a2, then S transpose=S. Combining reciprocity and losslessness gives a symmetric unitary S. A rephasing of ports changes the matrix representation and must preserve the stated reciprocal pairing.

**Statement references.**

[[def-emx-port-scattering-model]]

[[pthm-emx-lorentz-reciprocity]]

**Conditional derivation / well-definedness / verification.** Apply the source-free reciprocity identity to two driven port solutions, evaluate the stipulated boundary pairing and obtain a1 transpose(S-S transpose)a2=0 for all pairs. Test coordinate vectors. This is bilinear, not the Hermitian power pairing.

Source-use keys: ETH.


### B interfaces


#### `ex-emx-single-port-lossless-reflection` — A closed lossless one-port has unit reflection modulus

Kind `example`; domain `physics`.

**Statement.** For N=1 with no absorption or unlisted radiation, the reflected amplitude r obeys |r|=1, although its phase can vary with frequency.

**Statement references.**

[[pthm-emx-scattering-contraction]]

**Conditional derivation / well-definedness / verification.** The scalar condition S dagger S=1 is |r|2=1.

Source-use keys: ETH.


#### `ex-emx-omitted-channel-subunitarity` — A visible subblock need not be unitary

Kind `example`; domain `physics`.

**Statement.** The upper-left entry of a unitary two-channel swap matrix is zero; an observer retaining only that channel sees zero output without material absorption.

**Statement references.**

[[pthm-emx-scattering-contraction]]

**Conditional derivation / well-definedness / verification.** Use S=[[0,1],[1,0]], inject (1,0), and trace power to the omitted second output. This illustrates why every outgoing channel matters.

Source-use keys: ETH.


## Exact mathematical supplier use and boundaries

The Lorentzian star is constructed directly; the existing Riemannian-star theorem is not used with an invalid signature. The degree-two radial homotopy is explicitly derived; a vector-field Poincare lemma is not misapplied to arbitrary forms. Radiation expansion differentiates controlled integral remainders before taking limits. The H(curl) trace supplier gives only its quotient-dual trace and one-way closure vanishing: no unstated L2 boundary product or converse kernel theorem is imported. The coercive Maxwell solver uses a real positive Laplace shift; time-harmonic real-frequency resonance requires a different Fredholm argument and is not discharged by Lax–Milgram. Full and relative finite-element complexes remain distinct. Fourier normalization is converted from the root exp(-2 pi i x dot xi) convention to the unitary angular-wavevector convention by xi=k/(2 pi), with the (2 pi)^(-n/2) factors, before Plancherel is applied.

## Physical interfaces and research proximity

The SO(2) rotation weight, rank-one helicity projectors and Berry line-bundle curvature are actual Lie-representation/geometric uses: the computed nonzero curvature flux proves why a single global polarization phase basis is impossible. This gives QFT an exact classical transverse-field interface without an unjustified photon spin-position tensor product. The edge/face complex uses cochains, incidence, cohomology and harmonic representatives substantively to preserve Gauss constraints and isolate numerical zero modes. No Hopf, Hecke, Hall or Temperley–Lieb object is introduced merely by analogy; quantum integrable/algebraic statistical and TQFT structures remain with their owners.

Classical momentum in matter is treated through the adopted material state and its total energy accounting; a universal Abraham/Minkowski momentum choice is not inferred from matching units or the vacuum stress tensor. The response and radiation-reaction estimates are model deductions. Their measured validity and microscopic derivation are separate questions. Photon spin/orbital operators, quantization, shot-noise and position observables belong to QFT. Curved-space Maxwell and coupled Einstein dynamics use the existing Einstein–Maxwell category rather than a duplicated gravitational module.
