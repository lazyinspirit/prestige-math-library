# Einstein–Maxwell frontier expansion: successor prose scaffold

Research design dated 2026-10-19. This is a supplier-first successor to all 27 original A/B pairs and 209 current reservations, not production content or a proof acceptance receipt. Existing page identities, complete original claims, exact-solution domains, gauge/sign qualifications and repaired audit obligations are retained in baseline.json. All B pages are leaves. The inventory contains new pairs only.

The old track, its full worker modules, audit-contracts.md, foundational-replacements.md and claim-coverage.json remain normative for retained claims. In particular, necessary constraints do not give arbitrary-data existence; the actual local periodic theorem has s>=5 and AC_omega, a compact admissible state range and stability in H^{s-1}. The smooth MGHD branch carries its exact choice/restart/geometric-uniqueness assumptions, not completeness. Published carriers with pending verification and the inherited nine outside remark-dependency chains are not recertified here.

## Conventions and domain contracts

All manifolds are smooth, Hausdorff, second countable and oriented where integration is used; Lorentz metrics have signature (-+++), with an independent time orientation. Unless explicitly overridden, fields and coordinate domains are smooth and all integration-by-parts boundaries, compact supports and falloffs are stated. Time coordinates have length units x0=ct. Use inherited SI conventions F_0i=-E_i/c, F_ij=epsilon_ijk B_k, nabla_a F^{ab}=-mu0 j^b, kappa=8pi G/c^4 and T_EM=Q(F)/mu0. The geometric field is sqrt(4pi G/(mu0 c^4))F; geometric masses, charges and rotation parameters have units of length, and Lambda inverse-length squared. Symbols E,B in the new conformal formulas mean geometric-normalized spatial fields. Covectors and raised vectors have different conformal weights.

The electrovacuum model has j=T_m=0 but can have nonzero F. A prescribed test field has a fixed background; it need not solve the coupled Einstein equation. Potentials exist only on declared trivializations or fixed bundle sectors. Every mathematical claim below is conditional on its explicit equations; physical adoption occurs only on the final physics pair. Citations establish provenance, never replace local proofs. Named new analytic lemmas are planned proof obligations and cannot be used in a build until authored and checked.

## emg-fx01: Conformal constraint weights and charged time-symmetric data

A page `emg-fx01`; B companion `emg-fx01-examples`. Category `einstein-maxwell-models-mathematics`; library `mathematics`.

Use the inherited SI-to-geometric dictionary first: scaled electric and magnetic vectors are sqrt(4pi G/(mu0 c^4)) times the inherited e,b; the Einstein equation is Ric=2Q. Their orthonormal components carry inverse length. All hbar derivatives use the seed metric. The conformal exponents apply to contravariant vectors; covectors have exponent -2. This distinction is essential in matching elliptic and numerical formulations.

The divergence calculation is explicit: div_h(psi^-6 Ebar)=(psi^6 sqrt(det hbar))^-1 partial_i(sqrt(det hbar)Ebar^i). Since |E|_h^2=psi^-8|Ebar|_hbar^2 and |K|_h^2=psi^-12|Abar|_hbar^2+tau^2/3, multiplying the original Hamiltonian equation by psi^5 gives the inventory formula. E cross_h B as a covector scales as psi^-6(Ebar cross_hbar Bbar); the momentum constraint is not discarded for general seeds. This pair supplies weights and a directly verified family, rather than a generic conformal-method existence theorem.

The RN puncture example lives on the actual positivity domain. A puncture is an omitted end; it is not a delta-function material source in the smooth equations. For nonextreme positive m the inner end is asymptotically flat, whereas the extremal positive-m end is cylindrical. The two cases must not be passed through a single smooth compact-domain elliptic theorem.

### def-emg-fx-conformal-seed — Conformal electrovacuum seeds

Type: `definition`; domain: `mathematics`; planned status.

On an oriented smooth Riemannian three-manifold fix a smooth seed metric hbar, divergence-free vector fields Ebar,Bbar, a positive smooth function psi and constants Lambda and tau. Set h=psi^4 hbar, E=psi^-6 Ebar, B=psi^-6 Bbar, and K=(tau/3)h+psi^-2 Abar with Abar trace free. E,B are geometric-normalized fields, not SI fields.

Statement references:

[[def-emg-constrained-electrovacuum-data]]

[[thm-emg-field-normalization-equivalence]]

https://arxiv.org/pdf/0907.1151

Proof/definition route: Definition fixes exactly the data, equivalence and admissibility conditions stated; existence is a separate obligation.

### lem-emg-fx-conformal-constraints — Exact conformal electrovacuum constraint transformation

Type: `lemma`; domain: `mathematics`; planned status.

With the stated seed, div_h E=psi^-6 div_hbar Ebar and similarly for B. The Hamiltonian constraint is -8 Delta_bar psi+Rbar psi-|Abar|^2 psi^-7+(2 tau^2/3-2 Lambda)psi^5-2(|Ebar|^2+|Bbar|^2)psi^-3=0. The momentum equation remains a separate constraint; when K=0 and Ebar cross Bbar=0 it holds identically.

Statement references:

[[def-emg-fx-conformal-seed]]

https://arxiv.org/pdf/0907.1151

Proof/definition route: Differentiate sqrt(det h)=psi^6 sqrt(det hbar); contract the connection difference C^k_ij=2psi^-1(delta^k_i psi_j+delta^k_j psi_i-hbar_ij psi^k) to obtain R(h)=psi^-5(-8 Delta_bar psi+Rbar psi). Substitute trace and norm weights; no elliptic existence is inferred.

### prop-emg-fx-rn-isotropic-seed — RN conformal data on a punctured exterior

Type: `proposition`; domain: `mathematics`; planned status.

For r>0, psi^2=(1+m/(2r))^2-q^2/(4r^2)>0, Ebar=q r^-2 partial_r, Bbar=0 and K=0 satisfy the Lambda=0 constraints. For m>|q|, r=(sqrt(m^2-q^2))/2 is a minimal sphere and R_areal=r psi^2=m+sqrt(m^2-q^2); no global event-horizon claim is included.

Statement references:

[[lem-emg-fx-conformal-constraints]]

[[def-emg-xs-rn-data]]

https://arxiv.org/pdf/0907.1151

Proof/definition route: Differentiate the displayed radial function in Delta psi=psi_rr+2psi_r/r and verify the Hamiltonian equation; divergence of q r^-2 partial_r vanishes on r>0. Differentiate r psi^2, and use area=4pi R_areal^2 and the conformal normal to check minimality.

### ex-emg-fx-extremal-puncture-end — Extremal cylindrical end

Type: `example`; domain: `mathematics`; planned status.

For m=|q|>0 the above psi^2=1+m/r has areal radius r+m, no positive-r minimal sphere, and an infinite proper-distance end as r tends to zero.

Statement references:

[[prop-emg-fx-rn-isotropic-seed]]

https://arxiv.org/pdf/0907.1151

Proof/definition route: Integrate psi^2 dr=(1+m/r)dr and differentiate r+m.

### cex-emg-fx-wrong-electric-weight — Unscaled vector fields fail the transformed Gauss law

Type: `counterexample`; domain: `mathematics`; planned status.

On a Euclidean patch with nonconstant positive psi and constant Ebar, setting E=Ebar rather than psi^-6 Ebar generally gives div_h E=6 Ebar(log psi), which need not vanish.

Statement references:

[[lem-emg-fx-conformal-constraints]]



Proof/definition route: Choose psi=exp(x), Ebar=partial_x and compute the volume divergence.

## emg-fx02: Local nonlinear constraint construction with explicit analytic obligations

A page `emg-fx02`; B companion `emg-fx02-examples`. Category `einstein-maxwell-models-mathematics`; library `mathematics`.

This pair explicitly supplies the missing nonlinear elliptic step rather than treating necessary constraints as sufficient data construction. C^{k,alpha}(closure Omega) uses the norm consisting of all derivatives through k and the alpha-Hölder seminorm of the kth derivatives. Zero boundary values form a closed Banach subspace. The derivative inverse is a new, substantial proof obligation, with each analytic ingredient named in its inventory route; production cannot bypass it by using the existing Lax–Milgram item alone.

A constructive alternative for the small branch uses u=epsilon^2(-8Delta_D)^-1[2S(1+u)^-3] on a small positive C^{2,alpha} ball. The inverse estimate and a Hölder product inequality provide a contraction when epsilon^2 is small. Iteration then also yields an algorithm, but no new algorithm is registered until a computable inverse and stopping/error criterion are specified. The pair's theorem promises only local uniqueness and fixed bounded-domain boundary data. It does not settle asymptotically Euclidean puncture problems, non-CMC branches, apparent-horizon boundary conditions or global uniqueness.

### def-emg-fx-dirichlet-constraint-problem — Bounded-domain charged conformal problem

Type: `definition`; domain: `mathematics`; planned status.

Let Omega be a bounded connected smooth domain in R^3, 0<alpha<1, S a nonnegative C^{0,alpha} function and epsilon real. Seek psi=1+u, u in C^{2,alpha}(closure Omega), u=0 on boundary, satisfying -8 Delta psi=2 epsilon^2 S psi^-3 and psi>0. This is the time-symmetric flat-seed Lambda=0 Hamiltonian problem; divergence-free parallel Ebar,Bbar giving S must be supplied independently.

Statement references:

[[lem-emg-fx-conformal-constraints]]

https://arxiv.org/pdf/0907.1151

Proof/definition route: Definition fixes exactly the data, equivalence and admissibility conditions stated; existence is a separate obligation.

### lem-emg-fx-dirichlet-holder-inverse — Dirichlet Hölder inverse required by the constraint branch

Type: `lemma`; domain: `mathematics`; planned status.

For a bounded smooth Omega and 0<alpha<1, -Delta:C^{2,alpha}(closure Omega) intersect C_0(closure Omega) to C^{0,alpha}(closure Omega) is a bounded linear isomorphism. The zero subscript here means zero boundary trace, not compact support.

Statement references:

[[thm-lax-milgram]]



Proof/definition route: New local authoring obligation: construct a weak H_0^1 solution by Poincare plus Lax–Milgram; prove the boundary Schauder estimate by flattening finitely many boundary charts, the constant-coefficient Newtonian-potential Hölder estimate and reflection/localization, then a continuation argument. Poincare, trace/density, boundary flattening and the Hölder kernel estimate must be fully proved in this lemma or split into same-page suppliers before dispatch. No blanket use of a citation or a mere H^2 regularity supplier suffices.

### lem-emg-fx-banach-implicit-constraint — Local Banach implicit-function supplier

Type: `lemma`; domain: `mathematics`; planned status.

For Banach X,Y, a C^1 map F on a neighborhood of (0,0) in X times R with F(0,0)=0 and D_xF(0,0) boundedly invertible has a unique nearby C^1 solution branch x(epsilon). The derivative formula is x_prime=-D_xF^-1 D_epsilonF.

Statement references:

[[thm-banach-fixed-point]]



Proof/definition route: Prove by a uniform contraction x -> x-L^-1 F(x,epsilon) on a small closed ball, using continuity of D_xF and the fundamental theorem along line segments; differentiability follows from the difference quotient and the inverse Neumann series. Apply the exact published contraction theorem to the nonempty complete closed ball; the operator inverse and differentiability steps are proved locally.

### thm-emg-fx-small-dirichlet-data — Small charged Dirichlet conformal branch

Type: `theorem`; domain: `mathematics`; planned status.

The bounded-domain problem has a unique branch in a fixed C^{2,alpha} neighborhood of psi=1 for sufficiently small absolute epsilon, with psi>=1 and psi-1=epsilon^2 v+O(epsilon^4), where -8 Delta v=2S and v has zero boundary value. Uniqueness is local, not a global conformal-method theorem.

Statement references:

[[def-emg-fx-dirichlet-constraint-problem]]

[[lem-emg-fx-dirichlet-holder-inverse]]

[[lem-emg-fx-banach-implicit-constraint]]



Proof/definition route: Use F(u,e)=-8Delta u-2e^2 S(1+u)^-3; its derivative at zero is -8Delta. Restrict ||u||_infinity<1/2. Smoothness of scalar inverse powers gives a smooth Banach map. The maximum principle is proved at an interior negative minimum and by the weak comparison argument; Taylor expand in e^2 and use the inverse bound to obtain the remainder.

### ex-emg-fx-small-constant-field-ball — Small constant electric seed in a ball

Type: `example`; domain: `mathematics`; planned status.

A constant Ebar and Bbar=0 on a smooth ball give S=|Ebar|^2 and the local theorem constructs smooth positive constrained time-symmetric data there. Boundary data are prescribed mathematical data, not an isolated asymptotically flat black hole.

Statement references:

[[thm-emg-fx-small-dirichlet-data]]



Proof/definition route: Constant fields have zero divergence and cross product; elliptic bootstrapping for smooth S is a further same-lemma estimate.

## emg-fx03: Spherical electrovacuum mass and local rigidity

A page `emg-fx03`; B companion `emg-fx03-examples`. Category `einstein-maxwell-models-mathematics`; library `mathematics`.

This is a local classification statement whose proof begins with the warped-product curvature, not with a guess at Schwarzschild coordinates. The fluxes may be supported by topology; a nonzero q does not insert charged matter on the smooth patch. In arbitrary dimension the coefficients change, so the statement is restricted to four dimensions. The quotient Hodge rotation is defined using g2 and its orientation, with sign chosen so X is future stationary in the designated exterior.

The charged mass varpi subtracts the cosmological contribution and adds Q^2/(2r) to the Hawking/Misner–Sharp mass. For exact electrovacuum it is locally constant. In matter models q can vary and additional work/flux terms appear; the conservation proof is not recycled after replacing constants by functions. Constant-radius product solutions retain their inherited EMG-MS03 home. This prevents the common false assertion that spherical electrovacuum has no exceptional product branch.

### def-emg-fx-spherical-quotient — Spherical orbit geometry and charged mass

Type: `definition`; domain: `mathematics`; planned status.

On U times S^2 let g=g2+r^2 gamma with g2 Lorentzian, r>0 smooth, and F=(q_e/r^2)vol_g2+q_m omega_S2 with fixed product orientation. Define Q^2=q_e^2+q_m^2 and varpi=(r/2)(1-g2^-1(dr,dr))+Q^2/(2r)-Lambda r^3/6. Constants q_e,q_m are signed fluxes in the chosen orientation.

Statement references:

[[def-emg-xs-geometric-electrovac]]

[[def-emg-xs-rn-data]]

https://arxiv.org/pdf/1205.6112

Proof/definition route: Definition fixes exactly the data, equivalence and admissibility conditions stated; existence is a separate obligation.

### lem-emg-fx-warped-curvature — Warped two-sphere curvature equations

Type: `lemma`; domain: `mathematics`; planned status.

For the spherical ansatz, Ric_AB=Ric(g2)_AB-2r^-1 Hess_AB r and Ric_ij=[1-|dr|^2-r Box_g2 r] gamma_ij; mixed entries vanish. In electrovacuum Hess r is pure trace and d varpi=0.

Statement references:

[[def-emg-fx-spherical-quotient]]



Proof/definition route: Compute Gamma^i_Aj=r^-1 partial_A r delta^i_j and Gamma^A_ij=-r partial^A r gamma_ij, insert into all Ricci slots and use Ric(g2)=(R2/2)g2. Maxwell implies constant sphere fluxes; substitute Ric=Lambda g+2Q(F) and differentiate the displayed varpi, cancelling dr coefficients.

### thm-emg-fx-local-charged-birkhoff — Local RN-(A)dS rigidity away from critical areal gradients

Type: `theorem`; domain: `mathematics`; planned status.

On a simply connected electrovacuum quotient patch where dr is nonzero and g2^-1(dr,dr) is nowhere zero, varpi=m is constant and the metric is locally RN-(A)dS with f(r)=1-2m/r+Q^2/r^2-Lambda r^2/3. The causal character of the Killing coordinate follows the sign of f. Constant-radius solutions and null-gradient patches are outside this statement.

Statement references:

[[lem-emg-fx-warped-curvature]]

https://arxiv.org/pdf/1205.6112

Proof/definition route: The rotated gradient X=*2 dr is Killing because Hess r is pure trace. It preserves r and commutes with dr/f; integrate their two commuting nonzero fields to quotient coordinates. Normalize their constant scale and use |dr|^2=f from varpi=m to obtain -f dt^2+f^-1 dr^2. No analytic extension or global uniqueness is inferred.

### cex-emg-fx-constant-radius-rigidity — Bertotti–Robinson excluded by dr nonzero

Type: `counterexample`; domain: `mathematics`; planned status.

The constant-radius electrovacuum product has dr=0 and cannot be represented by the theorem using r as a coordinate, despite solving the same electrovacuum equations.

Statement references:

[[thm-emg-fx-local-charged-birkhoff]]

[[thm-emg-xs-br-verification]]



Proof/definition route: Its area radius is constant; a coordinate function has nonzero differential.

## emg-fx04: Charged photon trapping and extremal scaling

A page `emg-fx04`; B companion `emg-fx04-examples`. Category `einstein-maxwell-models-mathematics`; library `mathematics`.

The radial effective potential supplies the geometric location where Morawetz estimates must account for trapping. It does not itself establish wave decay. The outer circular orbit calculation is performed with L nonzero; radial null geodesics are a separate class. The inner root can lie outside the chosen exterior and receives no universal observational interpretation.

The throat limit keeps m fixed and changes the coordinate scale with lambda. Maxwell curvature must be pulled back along the same coordinate map, rather than set to a constant by verbal analogy. The inherited near-horizon supplier supplies its exact field limit; this pair adds compact-set derivative control and the nonuniformity warning needed for the later extremal energy discussion. A TikZ plan will show r_minus, r_plus and the exterior trapping sphere on a labelled radial line for subextremal parameters, with the extremal coalescence drawn separately; no inference relies on that picture.

### prop-emg-fx-rn-photon-trapping — RN circular null radii and exterior instability

Type: `proposition`; domain: `mathematics`; planned status.

For asymptotically flat RN with m>0 and 0<=Q^2<m^2, the outer circular null radius is (3m+sqrt(9m^2-8Q^2))/2 and lies strictly above r_plus=m+sqrt(m^2-Q^2). It is a strict local maximum of f/r^2.

Statement references:

[[def-emg-xs-rn-data]]

[[prop-emg-xs-rn-horizon-data]]



Proof/definition route: Conserve E=f t_dot and L=r^2 phi_dot in an equatorial geodesic; r_dot^2+L^2 f/r^2=E^2. Differentiate f/r^2=-2(r^2-3mr+2Q^2)/r^5 after one derivative; solve the quadratic and use its positive discriminant to determine the second derivative sign. Compare outer radius to r_plus algebraically.

### prop-emg-fx-throat-scaling — Extremal RN throat as a local scaled limit

Type: `proposition`; domain: `mathematics`; planned status.

In extremal RN m=|Q|>0 set r=m+lambda R and t=T/lambda. On compact subsets R>0, as positive lambda tends to zero the pulled-back metric converges with all derivatives to -(R^2/m^2)dT^2+(m^2/R^2)dR^2+m^2 gamma. This chart limit neither identifies the entire original exterior with a product nor proves a decoupled quantum theory.

Statement references:

[[def-emg-xs-rn-data]]

[[thm-emg-xs-rn-near-horizon]]



Proof/definition route: Substitute f=lambda^2 R^2/(m+lambda R)^2 and differentiate the rational coefficients on compact R-intervals bounded away from zero; use denominator lower bounds.

### cex-emg-fx-nonuniform-extremal-limit — Limits near the horizon need a scale

Type: `counterexample`; domain: `mathematics`; planned status.

The unscaled subextremal exterior surface gravity tends to zero as Q^2 tends to m^2; a positive lower bound uniform in the full subextremal family is false.

Statement references:

[[prop-emg-xs-rn-horizon-data]]



Proof/definition route: Use kappa=(r_plus-r_minus)/(2r_plus^2) and take Q^2 upward to m^2.

## emg-fx05: Linearized coupled equations and gauge identities

A page `emg-fx05`; B companion `emg-fx05-examples`. Category `einstein-maxwell-models-mathematics`; library `mathematics`.

Linearization is taken in an actual one-parameter smooth family at parameter zero or in the Fréchet derivative of the differential operator; it is not a claim that every linearized solution integrates to an exact nearby nonlinear solution. On backgrounds with Killing symmetries and compact slices, linearization stability may impose additional second-order constraints. This is recorded as an integrability obligation, not silently discharged by a local energy estimate.

The linearized stress contains terms linear in f contracted with background F as well as terms linear in h contracted with F squared. Hence a nonzero charged background couples electromagnetic and gravitational radiation already at first order. It is invalid to solve vacuum metric perturbations and independent Maxwell perturbations and add their answers. On F=0 the first-order metric source from electromagnetic stress vanishes, an exact useful special case.

Giorgi's selected Bondi-gauge formulas show why coordinate and null-frame gauge transformations are linked. This scaffold does not use the rough Theorem 1.1 as a proof supplier: its detailed weighted spaces, residual-gauge normalization, low harmonics, master-system decay, reconstruction and peeling would all have to be authored before registering the full linear-stability theorem. The present pair gives the algebraic identities and finite-slab analytic estimate that can be proved without such an unsupported jump.

### def-emg-fx-linearized-electrovac — Linearized electrovacuum operator and gauge equivalence

Type: `definition`; domain: `mathematics`; planned status.

Fix a smooth exact oriented electrovacuum (g,F). A perturbation is a smooth symmetric tensor h and closed two-form f satisfying the first variation of Ric-Lambda g-2Q=0 and d star_g F=0. Gauge perturbations are (L_X g,L_X F); in a fixed potential sector f=d a, a also has a -> a+d chi. The symbol f here denotes a two-form, not the RN lapse.

Statement references:

[[def-emg-electrovacuum-cauchy-system]]

[[lem-emg-maxwell-stress-divergence]]

https://arxiv.org/pdf/1904.04926

Proof/definition route: Definition fixes exactly the data, equivalence and admissibility conditions stated; existence is a separate obligation.

### lem-emg-fx-linearized-hodge — Variation of the Hodge map and linearized Maxwell

Type: `lemma`; domain: `mathematics`; planned status.

For a k-form omega, delta(star omega)=star(delta omega+(tr_g h/2)omega-h_sharp dot omega), where h_sharp acts in each covariant slot. Thus the Maxwell perturbation equation is d star[f+(tr h/2)F-h_sharp dot F]=0 and df=0.

Statement references:

[[def-emg-fx-linearized-electrovac]]

[[lem-emg-lorentz-hodge-calculus]]



Proof/definition route: Differentiate inverse-metric components delta g^ab=-h^ab and volume delta vol=(tr h/2)vol in the alternating coordinate formula for star. Each raised covariant slot contributes one negative h_sharp term.

### prop-emg-fx-gauge-linearized-solutions — Pure gauge and parameter modes solve the linearized system

Type: `proposition`; domain: `mathematics`; planned status.

For any smooth X the pair (L_Xg,L_XF) solves the linearized electrovacuum equations. A differentiable exact RN/KN parameter family yields additional parameter derivatives solving them. Gauge and parameter solutions are to be removed or retained according to boundary normalization before a decay claim is made.

Statement references:

[[def-emg-fx-linearized-electrovac]]

[[lem-emg-fx-linearized-hodge]]

[[thm-emg-xs-kn-verification]]

https://arxiv.org/pdf/1904.04926

Proof/definition route: Differentiate naturality E(Phi_s^*g,Phi_s^*F)=Phi_s^*E(g,F)=0 along the local flow; differentiate E(g(p),F(p))=0 with fixed admitted chart and parameter domain.

### lem-emg-fx-local-linear-wave-control — Finite-slab linear perturbation estimate

Type: `lemma`; domain: `mathematics`; planned status.

For the harmonic/field-strength linearization on a compact time slab whose slices are a three-torus, with smooth bounded coefficients and uniformly positive time matrix, the H^k perturbation energy is at most exp(C times absolute t) times its initial energy plus the Duhamel source norm, for integer k>=0. Zero initial subsidiary constraints remain zero.

Statement references:

[[def-emg-fx-linearized-electrovac]]

[[thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability]]

[[thm-emg-einstein-gauge-propagation]]

[[thm-emg-maxwell-gauss-propagation]]



Proof/definition route: Differentiate the already checked symmetric first-order system, integrate by parts periodically and bound coefficient-derivative commutators. Complete the square for sources and integrate the scalar differential inequality. Differentiate the homogeneous subsidiary identities. This supplies a finite-time estimate only.

### ex-emg-fx-stationary-charge-mode — A stationary charge derivative does not decay away

Type: `example`; domain: `mathematics`; planned status.

Differentiating RN with respect to its electric charge on a fixed exterior chart gives a nonradiating linearized solution with nonzero electric-flux variation. A theorem asserting decay of every component to zero without subtracting a parameter mode is false.

Statement references:

[[prop-emg-fx-gauge-linearized-solutions]]



Proof/definition route: Differentiate the flux q_e and the metric coefficients directly.

## emg-fx06: Energy currents and conditional stability estimates

A page `emg-fx06`; B companion `emg-fx06-examples`. Category `einstein-maxwell-models-mathematics`; library `mathematics`.

For RN scalar waves set u=r psi and dr_star/dr=f^-1. Separation in a normalized spherical harmonic of degree ell gives U_tt-U_rstar rstar+f[ell(ell+1)/r^2+f_prime/r]U=0. Direct differentiation derives this potential. In a strictly subextremal exterior f>=0 and f_prime>0, so the scalar potential is nonnegative. This gives a degenerate Killing energy through the horizon; nondegenerate redshift estimates require kappa>0 and their constants need not be uniform at extremality.

For coupled gravitational/electromagnetic master variables one must derive the exact symmetric system, its angular low-mode exceptions and reconstruction before applying a positive-potential estimate. A candidate nonsymmetric normalization is not made symmetric by assertion. Morawetz spacetime control, horizon redshift, weighted r^p estimates, commutators and reconstruction are separate substantial prerequisites for a full decay theorem. Those deeper claims remain a source-backed research route in the closure document, not phantom dependencies of the registered finite-slab results.

The ODE bootstrap item gives a checkable bridge from quantitative estimates to a continuation argument. Its coefficient is time integrable. Replacing it by (1+t)^-1 changes the conclusion and generally loses the uniform bound; this distinction is part of the planned comparison example. No global stability theorem is deduced from a schematic bootstrap unless the exact coupled equations deliver its hypotheses.

### def-emg-fx-wave-currents — Wave stress and multiplier currents

Type: `definition`; domain: `mathematics`; planned status.

For a real smooth scalar u on a smooth Lorentz domain solving Box_g u=V u+s with real smooth V, define T_ab=partial_a u partial_b u-(g_ab/2)(|du|^2+V u^2), J^X_a=T_ab X^b and K^X=T_ab nabla^(a X^b). Fluxes are integrals against oriented hypersurface volume or their null flux forms, with no unit null normal assumed.

Statement references:

[[def-gr-metric-volume-form-and-current-flux]]



Proof/definition route: Definition fixes exactly the data, equivalence and admissibility conditions stated; existence is a separate obligation.

### lem-emg-fx-multiplier-divergence — Exact potential-wave multiplier identity

Type: `lemma`; domain: `mathematics`; planned status.

The wave current satisfies div J^X=K^X+s X(u)-(X(V)/2)u^2. For a Killing X preserving V and s=0 it is divergence free. If X and the slice normal are future timelike and V>=0 then the corresponding future energy density is nonnegative.

Statement references:

[[def-emg-fx-wave-currents]]



Proof/definition route: Expand nabla^a T_ab, commute scalar second derivatives and cancel the kinetic cross terms. The remainder is s partial_bu-(u^2/2)partial_b V. For positivity use an orthonormal rest frame and Cauchy–Schwarz.

### thm-emg-fx-coupled-potential-energy — Positive matrix-potential wave system energy

Type: `theorem`; domain: `mathematics`; planned status.

Let U:R_t times R_x to R^N be smooth and sufficiently decaying to justify boundary limits, solving U_tt-U_xx+V(x)U=S with V smooth symmetric positive semidefinite. E(t)=one-half integral(|U_t|^2+|U_x|^2+U^T VU) obeys E_prime=integral U_t dot S and sqrt(E(t))<=sqrt(E(0))+2^-1/2 integral_0^t ||S||_2 for t>=0. Conservation by itself proves neither pointwise decay nor full coupled Einstein–Maxwell reconstruction.

Statement references:

[[lem-emg-fx-multiplier-divergence]]



Proof/definition route: Multiply by U_t, integrate by parts, use symmetry and time independence of V. Cauchy–Schwarz gives E_prime<=sqrt(2E)||S||; regularize sqrt(E+delta) before integration and let delta decrease to zero.

### prop-emg-fx-conditional-bootstrap — An explicit conditional nonlinear energy closure

Type: `proposition`; domain: `mathematics`; planned status.

If a nonnegative absolutely continuous energy satisfies E_prime<=C(1+t)^-1-delta E^(3/2) for delta>0 and E(0)>0 with C sqrt(E(0))<2delta, then E(t)<=E(0)[1-C sqrt(E(0))/(2delta)]^-2 on its existence interval. A separate continuation theorem is required for global existence.

Statement references:

[[thm-emg-fx-coupled-potential-energy]]



Proof/definition route: Differentiate E^-1/2 on positive intervals, integrate (1+t)^-1-delta, and pass through any zeros using E+eta or component intervals. This is an ODE implication, not a claim that RN/KN perturbations satisfy the premise.

### cex-emg-fx-negative-bound-state — A negative mode invalidates positive-energy stability

Type: `counterexample`; domain: `mathematics`; planned status.

If the self-adjoint spatial operator -partial_x^2+V has an L2 eigenfunction w with eigenvalue -sigma^2<0, U=exp(sigma t)w solves the homogeneous wave system and grows. Merely making V real symmetric does not exclude this.

Statement references:

[[thm-emg-fx-coupled-potential-energy]]



Proof/definition route: Substitute the eigenvalue equation. The example is conditional on the explicit eigenpair and requires no general spectral theorem.

## emg-fx07: Extremal horizon conservation and conditional derivative growth

A page `emg-fx07`; B companion `emg-fx07-examples`. Category `einstein-maxwell-models-mathematics`; library `mathematics`.

Horizon regularity is imposed in the ingoing chart, whose metric is nondegenerate at r=m. Schwarzschild-type coordinate derivatives cannot be substituted without transforming the vector field. For higher angular harmonics there are other conserved combinations, with different transverse orders, but this pair registers only the fully derived ell=0 charge.

Aretakis' full theorem supplies much more: boundedness and integrated decay under specified energy norms, and nondecay of higher translation-invariant quantities. Only the selected formulation pages were read; the entire analytic proof is not claimed locally. The conditional derivative theorem above is independently tractable and avoids importing that proof by citation. It separates conservation, decay of the undifferentiated field, and blow-up. This is an exact instability of particular derivative norms for a linear scalar on a fixed extremal background, with no inference of generic nonlinear Kerr–Newman instability.

### def-emg-fx-extremal-test-scalar — Spherical scalar waves in regular extremal coordinates

Type: `definition`; domain: `mathematics`; planned status.

On the extremal RN ingoing domain v in R, r near or above m>0, take g=-D dv^2+2 dv dr+r^2 gamma with D=(1-m/r)^2. Let psi(v,r) be a real spherical C^3 solution of Box_g psi=0 and set phi=r psi. The scalar is a test field and does not source the metric.

Statement references:

[[def-emg-xs-ingoing-rn]]

https://arxiv.org/pdf/1110.2007

Proof/definition route: Definition fixes exactly the data, equivalence and admissibility conditions stated; existence is a separate obligation.

### thm-emg-fx-aretakis-spherical-charge — Exact spherical horizon charge

Type: `theorem`; domain: `mathematics`; planned status.

For such a scalar, H=partial_r phi(v,m) is independent of v. If H is nonzero, partial_r phi cannot tend to zero along the horizon.

Statement references:

[[def-emg-fx-extremal-test-scalar]]

https://arxiv.org/pdf/1110.2007

Proof/definition route: The reduced equation is 2phi_vr+partial_r(D phi_r)-(D_prime/r)phi=0. At r=m, D=D_prime=0, hence partial_v phi_r=0.

### prop-emg-fx-conditional-horizon-growth — Second derivative growth under an explicit horizon decay hypothesis

Type: `proposition`; domain: `mathematics`; planned status.

If the same solution is C^3 at the horizon, H is nonzero and phi(v,m) tends to zero as v tends to infinity, then partial_r^2 phi(v,m)/v tends to -H/m^2. Thus one transverse derivative grows linearly under these stated assumptions.

Statement references:

[[thm-emg-fx-aretakis-spherical-charge]]

https://arxiv.org/pdf/1110.2007

Proof/definition route: Differentiate the reduced equation once in r and set r=m, using D_second(m)=2/m^2: partial_v phi_rr=-H/m^2+phi(v,m)/m^3. Integrate from a finite v0 and use the Cesaro implication from phi(v,m)->0. No decay theorem is used without being supplied.

### ex-emg-fx-constant-scalar-exception — Nonzero horizon charge alone does not force this growth

Type: `example`; domain: `mathematics`; planned status.

A constant psi=c has phi=cr and H=c, while phi_rr=0; its horizon value phi(v,m)=cm does not decay and the derivative-growth hypothesis fails.

Statement references:

[[prop-emg-fx-conditional-horizon-growth]]



Proof/definition route: Substitute phi=cr into the exact equation and evaluate horizon data.

## emg-fx08: Charged test-scalar scattering and superradiant flux

A page `emg-fx08`; B companion `emg-fx08-examples`. Category `einstein-maxwell-models-mathematics`; library `mathematics`.

The Coulomb phase Theta=omega r_star-eQ log(r/L) is required at infinity because the radial coefficient has a long-range term -2omega eQ/r. An unmodified plane-wave asymptotic would generally be incorrect. Changing L changes phase constants but not flux ratios. The coupling e is normalized so eA has inverse-length components when time is a length coordinate; in SI it is the appropriate q/hbar coupling after restoring the geometric field normalization. This is a separately adopted classical charged scalar wave equation. A mode calculation does not prove quantum pair production, and energy-flux amplification does not imply a nonlinear instability.

Adding a scalar mass changes the infinity wave number to sqrt(omega^2-mu^2) in the propagating regime and requires a different normalization. Mirrors, AdS boundaries, bound states and massive tails are excluded here. Gauge shifting A_t by a constant shifts the frequency label; the physical comparison uses the potential difference between horizon and infinity, not an absolute gauge-dependent scalar potential. Quasinormal boundary conditions with complex frequency require a distinct nonselfadjoint spectral problem and cannot use this real Wronskian positivity proof.

### def-emg-fx-charged-radial-scattering — Massless charged scalar radial scattering problem

Type: `definition`; domain: `mathematics`; planned status.

On a fixed subextremal electric RN exterior choose A=-(Q/r)dt with A_t tending to zero at infinity and D_a=nabla_a-i e A_a. A real frequency omega>0 and spherical harmonic ell give psi=exp(-i omega t)Y_ell u(r)/r. Define r_star by dr_star/dr=f^-1 and fix a reference length L>0, put Theta=omega r_star-eQ log(r/L), and require u asymptotic to exp(-i Theta)+R exp(i Theta) at infinity and T exp(-i(omega-e Q/r_plus)r_star) at the future horizon, with errors o(1) in u and in its r_star derivative relative to these leading terms, and no other incoming horizon mode.

Statement references:

[[def-emg-xs-rn-data]]

[[prop-emg-xs-rn-horizon-data]]



Proof/definition route: Definition fixes exactly the data, equivalence and admissibility conditions stated; existence is a separate obligation.

### lem-emg-fx-charged-radial-equation — Charged radial equation and conserved Wronskian

Type: `lemma`; domain: `mathematics`; planned status.

The massless charged wave equation D^aD_a psi=0 reduces to u_second+[(omega-eQ/r)^2-f(ell(ell+1)/r^2+f_prime/r)]u=0 in r_star. For real omega,e,Q the quantity Im(conjugate(u)u_prime) is constant.

Statement references:

[[def-emg-fx-charged-radial-scattering]]



Proof/definition route: Expand the covariant derivative in the static chart, separate the sphere Laplacian, set phi=r psi and use partial_rstar=f partial_r. Multiply the real-coefficient ODE by conjugate(u) and take imaginary parts.

### prop-emg-fx-superradiant-wronskian — Exact scattering flux amplification criterion

Type: `proposition`; domain: `mathematics`; planned status.

For a solution with the specified scattering asymptotics, |R|^2=1-[(omega-eQ/r_plus)/omega]|T|^2. If 0<omega<eQ/r_plus and T is nonzero, reflected flux exceeds incident flux. This is a conditional scattering identity, not an existence theorem for those asymptotics or an exponentially growing mode theorem.

Statement references:

[[lem-emg-fx-charged-radial-equation]]



Proof/definition route: Evaluate the constant Wronskian at both ends; the oscillatory cross terms have zero imaginary contribution. The horizon coefficient is omega-e Phi_H in the gauge with zero potential at infinity.

### cex-emg-fx-neutral-no-amplification — Neutral spherical background scattering lacks charged amplification

Type: `counterexample`; domain: `mathematics`; planned status.

For e=0 and omega>0 the same identity gives |R|^2=1-|T|^2<=1. A nonzero black-hole charge alone does not give amplification for a neutral test scalar.

Statement references:

[[prop-emg-fx-superradiant-wronskian]]



Proof/definition route: Set e=0 in the identity.

## emg-fx09: Connection sectors, holonomy and presymplectic boundaries

A page `emg-fx09`; B companion `emg-fx09-examples`. Category `einstein-maxwell-models-mathematics`; library `mathematics`.

This is the meaningful Lie/gauge structure for this model: U(1) has an abelian one-dimensional Lie algebra, so its adjoint bracket vanishes, curvature is locally dA and the Bianchi identity is dF=0. The imported general gauge-action proposition retains its actual draft status; it gives no blanket production acceptance. Its action convention is pushforward of the horizontal distribution. Local potential formulas use pullback/trivialization conventions, and the author must translate the sign rather than identifying the two actions by name.

No Hopf, Hecke, Hall or Temperley–Lieb algebra is introduced as an artificial prerequisite of classical Einstein–Maxwell evolution. Nonabelian gauge extensions alter the field equations and stress; they are outside this model. Representation theory enters naturally when charged matter is a section of a line bundle associated to the character z -> z^n; its integer character weight and curvature normalization are distinct from an arbitrary classical real source-charge parameter. Such sections require their own local transition law and are not automatically included in the inherited trivial-potential scalar theorem.

The presymplectic current pair states exactly what boundary gauge transformations do. On a compact slice without boundary, Stokes kills exact contributions. At an asymptotic end or inner boundary they can produce charges. Finite-dimensional coisotropic reduction is used only for finite constrained mode models; weak functional symplectic forms require new topology and closed-range arguments.

### prop-emg-fx-affine-connection-sector — Differences of circle connections and fixed topology

Type: `proposition`; domain: `mathematics`; planned status.

For two smooth normalized U(1) connections on the same principal circle bundle, local connection representatives differ by a global real one-form a on the base, their curvatures differ by da, and their curvature integrals on any closed oriented surface agree. Flat differences need not be gauge trivial.

Statement references:

[[def-emg-local-potentials-and-circle-data]]

[[lem-emg-circle-connection-gluing]]

[[prop-gauge-transformations-act-on-principal-connections]]

https://arxiv.org/pdf/1205.6112

Proof/definition route: In overlapping trivializations the identical transition differential cancels between the representatives. Apply d and integrate da by Stokes on the closed surface. A gauge transformation has periods fixed by the chosen 2pi normalization; a closed a with different holonomy cannot be removed.

### def-emg-fx-maxwell-presymplectic-current — Fixed-background Maxwell presymplectic current

Type: `definition`; domain: `mathematics`; planned status.

For a fixed oriented background metric and two potential variations a1,a2 solving d star d a_i=0 on a fixed bundle sector, define the three-form omega(a1,a2)=a1 wedge star d a2-a2 wedge star d a1. Its integral over a specified spacelike hypersurface is the presymplectic pairing, when convergent. Overall action constants may be restored.

Statement references:

[[prop-emg-fx-affine-connection-sector]]

[[lem-emg-fx-linearized-hodge]]



Proof/definition route: Definition fixes exactly the data, equivalence and admissibility conditions stated; existence is a separate obligation.

### lem-emg-fx-symplectic-current-boundary — Closed current and gauge boundary term

Type: `lemma`; domain: `mathematics`; planned status.

d omega=0 for the stated fixed-background variations. Replacing a1 by a1+d chi changes omega by d(chi star d a2), so gauge directions are degeneracies only with appropriate boundary/decay conditions. Metric variations of the full coupled theory require additional gravitational and mixed terms.

Statement references:

[[def-emg-fx-maxwell-presymplectic-current]]



Proof/definition route: Expand d omega by the graded Leibniz rule; da1 wedge star da2 equals da2 wedge star da1 by symmetry of the form pairing. The field equations remove the remaining terms. The gauge formula is one more Leibniz expansion.

### prop-emg-fx-finite-coisotropic-pairing — Finite constrained mode quotient

Type: `proposition`; domain: `mathematics`; planned status.

If a finite-dimensional truncation has symplectic space V and linear constraint space W with W^omega contained in W, then W/W^omega carries the descended nondegenerate form. This algebraic fact does not establish a smooth infinite-dimensional quotient of the Einstein–Maxwell solution space.

Statement references:

[[prop-symplectic-reduction-of-a-coisotropic-vector-subspace]]



Proof/definition route: Apply the exact published linear-algebra theorem after identifying V,W and checking coisotropy; retain all its finite-dimensional hypotheses.

### ex-emg-fx-flat-holonomy-circle — Flat connection with nontrivial Wilson loop

Type: `example`; domain: `mathematics`; planned status.

On S^1 times a contractible patch the connection a=theta dphi in a trivial circle bundle has zero curvature but holonomy exp(2pi i theta). It is gauge equivalent to zero precisely when theta is an integer in this normalization.

Statement references:

[[prop-emg-fx-affine-connection-sector]]



Proof/definition route: Integrate around the circle; the periodic map exp(-i theta phi) exists exactly for integral theta.

## emg-fx10: Compatible discrete Maxwell constraints and finite algorithms

A page `emg-fx10`; B companion `emg-fx10-examples`. Category `einstein-maxwell-models-mathematics`; library `mathematics`.

The complex matrices can be signed incidence maps of an explicitly oriented finite cell complex; the boundary-of-boundary cancellation proves D_{k+1}D_k=0. Metric information belongs in the positive mass matrices and is not supplied by topology. A formal incidence complex does not prove consistency with continuum Maxwell or the coupled Einstein evolution.

The invariant formula uses the state order b_n,d_{n+1/2} with the displayed b-first update; changing staggering changes the sign of its cross term. Exact rational arithmetic is the mathematical algorithm model. Floating point roundoff, linear-solve residuals and constraint cleaning are separate perturbations; a residual R creates the corresponding discrete divergence source and must enter an a posteriori estimate.

A continuum convergence theorem needs a family of meshes, commuting projections, approximation bounds, shape regularity, admissible metric coefficients and a uniform energy/CFL estimate. Those hypotheses are explicitly unresolved authoring inputs for any later numerical-relativity claim; the present finite model has a complete internal correctness/termination route and claims no simulated astrophysical result. It provides a concrete mathematical link between gauge complexes, structure-preserving computation and physics without importing unsupported large-scale numerical stability.

### def-emg-fx-cochain-maxwell — Finite cochain Maxwell phase space

Type: `definition`; domain: `mathematics`; planned status.

Fix finite real cochain spaces C0,C1,C2,C3 with matrices D0,D1,D2 satisfying D1D0=0 and D2D1=0, and symmetric positive definite matrices M1,M2. Let magnetic b lie in C2 and electric displacement d in the dual of C1, with evolution b_dot=-D1 M1^-1 d and d_dot=D1^T M2 b. Discrete constraints are D2 b and D0^T d.

Statement references:

[[lem-emg-fx-symplectic-current-boundary]]



Proof/definition route: Definition fixes exactly the data, equivalence and admissibility conditions stated; existence is a separate obligation.

### alg-emg-fx-leapfrog-cochains — Finite compatible leapfrog evolution

Type: `algorithm`; domain: `mathematics`; planned status.

Inputs are these finite matrices, initial b_0,d_half and a positive step h and nonnegative integer N. For n=0,...,N-1 set b_next=b-h D1 M1^-1 d; then d_next=d+h D1^T M2 b_next; record the new pair. Output is the N+1 states. Inverses are computed once by exact Gaussian elimination for rational positive definite input or by a separately specified numerical linear solve.

Statement references:

[[def-emg-fx-cochain-maxwell]]



Proof/definition route: Definition fixes exactly the data, equivalence and admissibility conditions stated; existence is a separate obligation.

### prop-emg-fx-discrete-gauss-preservation — Exact discrete constraints and semidiscrete energy

Type: `proposition`; domain: `mathematics`; planned status.

Every exact-arithmetic update preserves D2 b and D0^T d. The continuous semidiscrete energy (b^T M2 b+d^T M1^-1 d)/2 is conserved. The staggered update conserves (b^T M2 b+d^T M1^-1 d-h b^T M2 D1 M1^-1 d)/2, which is positive definite if h times the largest singular value of M2^(1/2) D1 M1^-1/2 is less than 2.

Statement references:

[[alg-emg-fx-leapfrog-cochains]]



Proof/definition route: Apply D2 and D0^T to the updates and use the two complex identities. Differentiate the continuous energy and cancel transposes. For the staggered invariant expand the quadratic in the two updates; positivity follows by bounding the cross term by h sigma ||M2^1/2 b|| ||M1^-1/2 d|| and completing squares.

### lem-emg-fx-finite-step-termination — Finite arithmetic termination and cost

Type: `lemma`; domain: `mathematics`; planned status.

For rational admissible matrices and finite N, the update terminates after finitely many rational operations. Dense elimination uses O(n1^3) arithmetic operations and each dense step O(n1 n2+n1^2+n2^2), with storage bounded by the matrices and recorded finite states. These are arithmetic counts, not bounded bit complexity or floating point accuracy guarantees.

Statement references:

[[alg-emg-fx-leapfrog-cochains]]



Proof/definition route: Each elimination pivot is nonzero for the positive definite solve under a fixed no-pivot Cholesky-free elimination schedule; enumerate finite row operations, matrix-vector products and N loops. Rational coefficient bit growth is separately unbounded by this arithmetic count.

### cex-emg-fx-cfl-discrete-growth — Constraint preservation does not imply stable evolution

Type: `counterexample`; domain: `mathematics`; planned status.

For a single oscillatory mode with step h sigma>2, the two-by-two leapfrog map has trace 2-h^2 sigma^2<-2 and determinant one, hence an eigenvalue of magnitude greater than one. Gauss constraints can still be exactly preserved.

Statement references:

[[prop-emg-fx-discrete-gauss-preservation]]



Proof/definition route: Write the update matrix [[1,-h sigma],[h sigma,1-h^2 sigma^2]] and solve its characteristic polynomial.

## emg-fx11: Effective nonlinear electromagnetism and semiclassical consistency

A page `emg-fx11`; B companion `emg-fx11-examples`. Category `einstein-maxwell-models-mathematics`; library `mathematics`.

The Maxwell normalization in L=X is a mathematical convention; SI action factors are restored using the inherited scaling item before physical adoption. The coefficients alpha,beta have inverse-invariant units so alpha X and beta Y are dimensionless. A source-free nonlinear constitutive equation is a different model from linear Maxwell, and positivity/causality of its characteristic cone require a separate principal-symbol analysis.

If an Euler–Heisenberg interpretation is desired, QFT must supply the actual low-frequency, weak-field, loop-order and derivative-expansion coefficients and thresholds. This pair does not assign those coefficients from memory or claim that solving its classical equations constructs QED. Likewise, the semiclassical source contract is conditional on renormalization choices, state class and regularity. Nonlocal state dependence and higher-curvature counterterms can change differential order and the initial-value problem. Order reduction is an additional approximation, never an algebraic equivalence.

Hawking spectra, KMS/Unruh states, generalized entropy and black-hole thermodynamic laws retain their combined thermo-GR home; they are contextual applications rather than logical inputs of this pair. Charged pair production, quantum discharge and evaporation endpoints need QFT/semiclassical source construction and timescale control. The exact divergence calculation here is only a necessary consistency test on a proposed source.

### def-emg-fx-nonlinear-lagrangian — A smooth nonlinear electromagnetic constitutive model

Type: `definition`; domain: `mathematics`; planned status.

On an oriented Lorentz four-manifold and fixed bundle sector put X=-F_ab F^ab/4, Y=-F_ab(star F)^ab/4 and L=L(X,Y), a C^2 real function. Define H^{ab}=L_X F^{ab}+L_Y(star F)^{ab}. Adopt stationarity of integral L vol under compactly supported connection variations, with source coupling supplied independently. No quantum origin is included in this definition.

Statement references:

[[lem-emg-maxwell-action-variation]]

[[lem-emg-lorentz-hodge-calculus]]



Proof/definition route: Definition fixes exactly the data, equivalence and admissibility conditions stated; existence is a separate obligation.

### prop-emg-fx-nonlinear-maxwell-variation — Constitutive field equation from compact variations

Type: `proposition`; domain: `mathematics`; planned status.

For source-free compact variations on the fixed metric, stationarity implies nabla_a H^{ab}=0 together with dF=0. In particular L=X+alpha X^2+beta Y^2 gives H=(1+2alpha X)F+2beta Y star F. Hyperbolicity of this nonlinear model is not a consequence of this variation.

Statement references:

[[def-emg-fx-nonlinear-lagrangian]]



Proof/definition route: Use delta X=-F^ab delta F_ab/2 and delta Y=-(star F)^ab delta F_ab/2 at fixed metric, substitute delta F=2nabla_[a delta A_b], and integrate by parts with compact support.

### def-emg-fx-semiclassical-source-contract — Conditional semiclassical Einstein–Maxwell source contract

Type: `definition`; domain: `mathematics`; planned status.

A semiclassical candidate consists of a smooth classical g,F and specified renormalized source assignments T_ren[g,F,state], j_ren[g,F,state] on a chosen state class. Require nabla_a j_ren^a=0 and nabla^a T_ren,ab=F_bc j_ren^c in the inherited sign convention. These Ward/exchange identities and state dependence are part of an admitted interface, not a construction of the assignments or proof of the semiclassical equations.

Statement references:

[[lem-emg-maxwell-stress-divergence]]



Proof/definition route: Definition fixes exactly the data, equivalence and admissibility conditions stated; existence is a separate obligation.

### prop-emg-fx-semiclassical-consistency — Necessary Ward consistency of coupled sources

Type: `proposition`; domain: `mathematics`; planned status.

If the coupled equations with classical Maxwell stress and sources T_ren,j_ren hold at sufficient differentiability and Lambda is constant, then charge conservation and the exchange identity are necessary. Neither identity is sufficient for a quantum state, a renormalized stress construction or a well-posed semiclassical evolution.

Statement references:

[[def-emg-fx-semiclassical-source-contract]]

[[lem-emg-maxwell-stress-divergence]]



Proof/definition route: Take a divergence of Maxwell and use the antisymmetric curvature contraction to obtain current conservation. Take the divergence of Einstein, use contracted Bianchi and the inherited Maxwell stress divergence, and rearrange.

### cex-emg-fx-eft-order-does-not-control-derivatives — Small invariants do not alone control derivative corrections

Type: `counterexample`; domain: `mathematics`; planned status.

A small-amplitude rapidly oscillating smooth field can have small X,Y while its derivatives are arbitrarily large. Therefore inequalities on alpha X and beta Y alone do not validate a derivative-truncated electromagnetic effective action.

Statement references:

[[prop-emg-fx-nonlinear-maxwell-variation]]



Proof/definition route: On a fixed chart take a smooth field profile scaled in amplitude by epsilon and in wavelength by epsilon^2; first derivatives scale as epsilon^-1 while quadratic field invariants scale as epsilon^2.

## emg-fx12: Reduced stationary uniqueness and explicit research boundaries

A page `emg-fx12`; B companion `emg-fx12-examples`. Category `einstein-maxwell-models-mathematics`; library `mathematics`.

The useful algebraic structure is a symmetric-space/harmonic-map reduction, rather than an arbitrary analogy with integrable models. Positive definiteness is load bearing in the comparison identity. A timelike reduction may produce a different isotropy signature; one must not assume a globally positive target across ergoregions. The bounded-domain theorem avoids making that transfer without its missing orbit-space and boundary analysis.

For the asymptotically flat stationary axisymmetric electrovacuum problem the orbit space has axis rods, horizon intervals and an unbounded end. A bounded smooth-domain maximum-principle proof does not cover these degeneracies. The registered remark lists exactly the additional modules owed before a global Kerr–Newman uniqueness result can be authored. Existing exact KN verification remains authoritative; uniqueness is an additional theorem with stronger hypotheses. Neither exact verification nor conditional uniqueness implies dynamical stability, a no-hair theorem for other matter models, or cosmic censorship.

As of 2026-10-19 this scaffold does not make a blanket current-status assertion that nonlinear asymptotically flat Kerr–Newman stability or a general cosmic-censorship conjecture is solved or open in every parameter/regime. A future open-problem item must formulate its dimension, asymptotics, matter, genericity, topology, regularity and extension class, then obtain current authoritative status evidence. Such an item may never supply a proof.

### def-emg-fx-matrix-harmonic-problem — Positive matrix harmonic-map boundary problem

Type: `definition`; domain: `mathematics`; planned status.

Let Omega be a bounded connected smooth Euclidean domain and let Phi_i be smooth maps on its closure into positive definite Hermitian n-by-n matrices with determinant one. Put J_i=Phi_i^-1 d Phi_i and assume div J_i=0. Require the two maps to agree on the entire boundary. This is an abstract Riemannian target comparison problem, not a spacetime uniqueness theorem.

Statement references:

[[def-emg-local-potentials-and-circle-data]]

https://arxiv.org/pdf/1205.6112

Proof/definition route: Definition fixes exactly the data, equivalence and admissibility conditions stated; existence is a separate obligation.

### lem-emg-fx-mazur-comparison — Positive-matrix comparison identity

Type: `lemma`; domain: `mathematics`; planned status.

With Psi=Phi_1 Phi_0^-1-I and Delta J=J_1-J_0, the comparison identity is Delta tr(Psi)=sum_a tr((Delta J_a)^dagger Phi_1 Delta J_a Phi_0^-1)>=0. Consequently identical Dirichlet data force Phi_1=Phi_0 on Omega.

Statement references:

[[def-emg-fx-matrix-harmonic-problem]]

https://arxiv.org/pdf/1205.6112

Proof/definition route: Differentiate d Phi=Phi J, d Phi^-1=-J Phi^-1 and div J=0 to obtain the displayed trace identity; use J_i^dagger=Phi_i J_i Phi_i^-1 to rewrite it as a Hilbert–Schmidt square. Since det(Phi_1 Phi_0^-1)=1 and its eigenvalues are positive, trace>=n by finite AM–GM. The maximum principle with zero boundary trace then gives trace=n, and all eigenvalues equal one imply equality of the Hermitian positive matrices.

### rem-emg-fx-stationary-spacetime-obligations — What remains before a Kerr–Newman uniqueness theorem

Type: `remark`; domain: `mathematics`; planned status.

Transferring matrix comparison to stationary electrovacuum requires symmetry inheritance, commuting stationary/axial Killing fields, circularity, a global orbit-space theorem, well-defined Ernst/twist potentials, the correct target and positive representation, and controlled axis/horizon/asymptotic boundary terms. Analyticity, horizon regularity, connectedness and nondegeneracy assumptions must match the selected theorem. None is silently inferred from stationarity.

Statement references:

[[lem-emg-fx-mazur-comparison]]

https://arxiv.org/pdf/1205.6112

Proof/definition route: Nonlogical roadmap only. Read CCH Sections 2–3,6–8 in full and the primary theorem proof before adding any spacetime uniqueness theorem as a supplier. The present bounded-domain matrix theorem has an independent proof route.

### ex-emg-fx-diagonal-harmonic-maps — A scalar diagonal sector

Type: `example`; domain: `mathematics`; planned status.

For n=2, Phi=diag(exp(u),exp(-u)) satisfies div(Phi^-1 dPhi)=0 exactly when Delta u=0. Two such maps with identical full Dirichlet data agree.

Statement references:

[[lem-emg-fx-mazur-comparison]]



Proof/definition route: Compute J=diag(du,-du) and apply the scalar harmonic uniqueness proof.

## emg-fx13: Adopted charged-background and effective-model regimes

A page `emg-fx13`; B companion `emg-fx13-examples`. Category `einstein-maxwell-models`; library `physics`.

These are physical adoptions and conditional consequences, kept on a physics page after the mathematical suppliers. Exact PDE identities cannot prove a model's empirical validity. No experiment description is created because no new measured data have been accessed. Cosmological constant is zero in the RN scattering examples; a de Sitter or AdS variant has different infinity, boundary conditions and energy balance.

At finite wavelength, geometric optics needs the inherited WKB residual and polarization quotient; it is not replaced by a scalar mode analogy. Backreaction at amplitude epsilon is typically quadratic in the field stress, but the inherited residual theorem supplies only a fixed-background residual. The thought experiment explicitly exposes the missing solution-error estimate and observation-time dependence. It therefore cannot be consumed as a global nonlinear Einstein–Maxwell existence or stability result.

### post-emg-fx-test-field-regime — Independently adopted charged test-scalar regime

Type: `postulate`; domain: `physics`; planned status.

For this model a classical complex scalar of specified charge coupling propagates by D^aD_a psi=0 on a specified fixed subextremal or extremal RN background, with its stress and current omitted from the background equations. This is a test-field model; field amplitude, wavelength, boundary preparation and observation interval must be specified before comparing with physical data.

Statement references:

[[post-emg-background-maxwell-test]]

[[def-emg-fx-charged-radial-scattering]]

https://arxiv.org/pdf/1110.2007

Proof/definition route: Physical formulation and source/scope review are required; no proof of applicability is asserted. The inherited test-model item supplies the distinction between prescribed background and coupled field.

### pthm-emg-fx-conditional-model-flux — Conditional charged-wave flux consequence

Type: `physics-theorem`; domain: `physics`; planned status.

Within the adopted test-scalar model, a real-frequency scattering solution with the precise two-end asymptotics and nonzero transmission has reflected energy flux greater than incident flux in the band 0<omega<e Phi_H. This conditional consequence concerns that model and specified gauge-normalized flux, not a measured astrophysical extraction efficiency.

Statement references:

[[post-emg-fx-test-field-regime]]

[[prop-emg-fx-superradiant-wronskian]]



Proof/definition route: Apply the mathematical Wronskian identity and the physical model assignment; identify flux ratios from the normalized mode amplitudes.

### post-emg-fx-classical-constitutive-adoption — Selected effective classical constitutive adoption

Type: `postulate`; domain: `physics`; planned status.

An effective-model use specifies a particular C^2 L(X,Y), its dimensionful coefficients and a domain where it is adopted as the constitutive law. Claims of low-energy quantum derivation, coefficient matching, errors, or semiclassical backreaction require separate QFT suppliers and cannot be inferred from formal variation.

Statement references:

[[def-emg-fx-nonlinear-lagrangian]]



Proof/definition route: Source/scope review is owed before authoring the physical postulate. It adopts an explicit classical model, not a quantum existence theorem.

### texp-emg-fx-test-to-coupled-error — Why a small test amplitude needs an interval-dependent bound

Type: `thought-experiment`; domain: `physics`; planned status.

If a background approximation has forcing residual bounded by C epsilon^2 and a separately established perturbation estimate bounds solution difference by K(T) times the integrated residual on [0,T], then the error is at most K(T) C T epsilon^2 in the specified norm. This conditional implication does not provide the required nonlinear perturbation estimate or justify T tending to infinity.

Statement references:

[[post-emg-fx-test-field-regime]]

[[prop-emg-test-field-residual-order]]



Proof/definition route: Integrate the residual bound and apply the explicitly assumed error estimate; its norm and K(T) are part of the hypothesis, not an invented theorem.

## Further research-facing interfaces, without logical overclaim

Charged spherical collapse can use the geometric mass in emg-fx03, but scalar current, variable charge, double-null constraints and Hawking-mass flux formulas must be derived for the selected real/complex charged matter model before any interior theorem. Mass inflation needs quantitative exterior tails, nonzero outgoing flux, interior transport estimates, extension regularity and a precisely defined characteristic problem. None is inferred from the exact RN Cauchy horizon. These are future authoring branches, not suppliers of the present inventory.

Asymptotic electromagnetic charges require a declared completion/falloff, convergent sphere limits and allowed gauge transformations. Bondi mass loss also requires asymptotic Einstein expansion, news and flux normalization. The present compact-domain flux identities do not supply these limits. Electromagnetic memory and soft charges belong at this interface only after their exact asymptotic spaces are supplied, and quantum soft theorems remain QFT-owned.

A full small-charge RN linear-stability theorem has an accessible established source, but its detailed quantitative proof is a separate development: exact gauge-invariant variables; spin-1/spin-2 coupled wave equations; low-harmonic decomposition; coercive redshift/Morawetz/r-weighted estimates; reconstruction; controlled pure gauge; final parameter modes. None of the finite-energy items here asserts all those steps. The reviewed rough theorem is a contextual frontier connection, not an unproved dependency. General nonlinear KN stability, strong/weak cosmic censorship and evaporation endpoints are not assumed.

Plan a TikZ double-null rectangle only after fixing g=-Omega^2 du dv+r^2 gamma, future directions and the sign of both expansions; the independent component derivation must precede any use. A bundle-patch diagram will use transition maps g_ij g_jk=g_ik and A_j=A_i plus the selected normalized transition differential; the diagram cannot prove global exactness.
