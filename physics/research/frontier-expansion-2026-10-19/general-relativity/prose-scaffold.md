# General relativity frontier successor prose scaffold

Draft research design dated 2026-10-19. The fourteen new pairs below extend every retained original GR promise. These proof routes are not accepted item proofs or publication receipts. Definitions/results are mathematical geometric statements unless an explicitly adopted physical Einstein/matter interpretation is invoked. The original physical postulates remain authoritative; no adopted law is derived from covariance alone.

Use a Hausdorff second-countable smooth time-oriented Lorentzian four-manifold without boundary, signature (-+++), inherited curvature sign and K(X,Y)=g(nabla_X n,Y). Smoothness is the default; finite regularity claims state their Sobolev index. Orientation is independent of time orientation and is required for form integration. SI uses length coordinates x0=ct, dimensionless g components, connection inverse metres, curvature inverse metres squared, c in m/s and G_N in m^3/(kg s^2); cosmological Lambda has inverse-metres-squared units. Natural units may simplify a calculation only after the physical conversion is stated. Reference time vectors, tetrads, coordinate maps and observers remain distinct objects. No all-space tetrad, spin structure, asymptotic flatness or energy condition is automatic.

All fifteen original pairs and their exact statements remain in baseline.json. The former track, its linked original inventories, complete geometric/PDE/solution proof modules, and gr-repair-2026-10-11 repair successor remain required reading. Existing authored carriers are unchanged. In particular full smooth temporal splitting, selected Einstein-matter local evolution including dust, and the data-fixing smooth MGHD are retained; their old audit holds do not override the later repairs. All original empirical-interface reservations and their qualifications survive. New examples are B leaves and cannot supply another page.

The inventory gives exact item dependencies; suppliers.json binds actual carrier bytes, status and full relevant statements. A planned supplier is a task obligation and cannot be treated as accepted proof. Source codes resolve in sources.json. Unnamed standard theorem discharge is forbidden. Remaining explicit obligations listed in coverage-and-closure.md must be resolved before their consumers can be authored or dispatched.

## Hypersurface and null geometry

A page `gr-fx01-hypersurface-and-null-geometry`; B companion `gr-fx01-hypersurface-and-null-geometry-examples`. Category `general-relativity`; library `physics`.

Use the inherited curvature convention and K=+g(nabla n,.) throughout. For X,Y tangent, metric compatibility gives g(nabla_X Y,n)=-K(X,Y), so the normal projection is +K(X,Y)n. This fixes the sign in Gauss before any contraction. The actual published full Gauss-Codazzi theorem in GR14 is reused; the earlier projection lemma alone would only be an evaluation of the field equation. The null screen is the quotient l-perp/span(l), or its identified tangent plane at S; q has no inverse on the whole null hypersurface. Its optical endomorphism B obeys B'+B^2+R_l=0 by differentiating Jacobi fields. Taking traces in two screen dimensions gives tr(B^2)=theta^2/2+|sigma|^2 when twist vanishes. With theta negative, theta'<=-theta^2/2, hence 1/theta(lambda)>=1/theta(0)+lambda/2. A smooth nonsingular screen cannot survive the resulting blowdown. The argument is local and requires generator continuation up to the comparison time. Plan a TikZ null frame with both future normals, normalization -2 and affine directions labelled; the proof uses the screen equations independently.

### `def-gr-fx-null-screen-geometry` — definition

On a smooth spacelike closed two-surface S in an oriented time-oriented Lorentzian four-manifold, choose future null normals l,k with g(l,k)=-2. Define q as the positive induced metric, chi_l(X,Y)=g(nabla_X l,Y), theta_l=tr_q chi_l and sigma_l=chi_l-(theta_l/2)q. Rescaling l by exp(f) and k by exp(-f) is a normal-frame boost.

Statement references:

[[def-gr-spacelike-initial-data-and-constraints]]

[[def-gr-curvature-tensor-and-derived-tensors]]

Proof / well-definedness route: Construct the rank-two normal bundle locally; give overlap boost laws and prove q is positive. No global choice of normal frame is inferred without a stated trivialization.

### `prop-gr-fx-null-raychaudhuri` — proposition

For a twist-free affinely parametrized null geodesic hypersurface congruence in four dimensions, before its first caustic, dtheta/dlambda=-theta^2/2-|sigma|^2-Ric(l,l). If Ric(l,l)>=0 and theta(0)<0, a focal point occurs by affine length 2/|theta(0)| provided the generators exist that long.

Statement references:

[[def-gr-fx-null-screen-geometry]]

[[def-gr-curvature-tensor-and-derived-tensors]]

[[thm-gr-jacobi-equation-and-geodesic-deviation]]

Proof / well-definedness route: Derive the screen Riccati equation from the Jacobi equation, take its trace, and integrate (1/theta)' >=1/2 while theta<0. Prove the Jacobi determinant vanishes when the expansion blows down; do not infer curvature blowup.

### `lem-gr-fx-null-focal-boundary-exclusion` — lemma

Let S be a smooth spacelike two-surface and gamma a future affinely parametrized normal null geodesic. A focal instant is a positive lambda at which a nonzero normal-screen Jacobi variation with initial point varying in S and initial screen derivative chi_l has zero screen value. If a focal instant occurs at lambda0, then gamma(lambda) lies in I^+(S) for every sufficiently close lambda>lambda0, and hence the generator cannot remain in E^+(S) beyond that instant.

Statement references:

[[def-gr-fx-null-screen-geometry]]

[[thm-gr-jacobi-equation-and-geodesic-deviation]]

[[thm-gr-convex-normal-neighborhoods]]

[[lem-gr-push-up-rule]]

Proof / well-definedness route: Write the null screen index form with the S boundary term determined by chi_l. A focal Jacobi field gives a zero index direction up to lambda0. Extend by zero and add a small smooth screen perturbation supported across lambda0; integration by parts at the derivative jump makes the index form strictly negative. Construct the corresponding variation with starting point on S; use a small longitudinal null correction to obtain a timelike curve to a point just beyond the focal instant. The local convex-normal cone criterion and push-up turn this into chronological membership. This complete null second-variation argument must be authored; the retained timelike maximum theorem is not substituted.

### B leaf obligations

`ex-gr-fx01-1`: Round Minkowski spheres have theta_l=2/r and theta_k=-2/r for l=partial_t+partial_r, k=partial_t-partial_r in length coordinates.

`ex-gr-fx01-2`: A boosted normal pair changes theta_l by exp(f), so its sign is invariant although its magnitude is not.

## Conformal construction of constrained initial data

A page `gr-fx02-conformal-constraint-construction`; B companion `gr-fx02-conformal-constraint-construction-examples`. Category `general-relativity`; library `physics`.

This module adds actual solutions of the constraints rather than repeating their definition. With K convention already fixed, the vacuum momentum equation is div K-d tr K=0 regardless of the sign of the zero right-hand side. Derive the conformal weights explicitly, including which indices are raised before divergence. For torus coordinates of period 2pi and a fixed reference length L, nondimensionalize derivatives by L; restore R, |K|^2 and Lambda as inverse-length-squared quantities. The explicit A>0 example gives a nontrivial family, and the c>0 Fourier inverse proves a local analytic prerequisite. A future near-constant existence theorem requires a separately authored Banach-space implicit function theorem with the nonlinear map H^(s+2)->H^s, s>3/2, the positive-open subset and composition estimates. It is deliberately not asserted in this inventory; the local positive inverse and exact CMC solutions are complete targets. The old general construction and matter branches remain retained; no all-Yamabe, non-CMC, puncture or conformal-thin-sandwich existence theorem is smuggled into the explicit torus result.

### `def-gr-fx-conformal-constraint-data` — definition

Let Sigma be a closed smooth three-manifold, htilde a smooth Riemannian metric, tau a real constant, sigmatilde a smooth transverse-traceless covariant tensor and Lambda=0. For a positive smooth scalar phi put h=phi^4 htilde and K=phi^-2 sigmatilde+(tau/3)h; transverse-traceless means tr_htilde sigmatilde=0 and div_htilde sigmatilde=0.

Statement references:

[[thm-gr-constraint-equations-in-normal-frame]]

Proof / well-definedness route: Define all contractions with the metric indicated and phi dimensionless relative to a fixed length scale.

### `thm-gr-fx-lichnerowicz-reduction` — theorem

For the displayed vacuum conformal data the momentum constraint vanishes, and the Hamiltonian constraint is equivalent to -8 Delta_htilde phi+R_htilde phi-|sigmatilde|^2 phi^-7+(2/3)tau^2 phi^5=0, where Delta=div grad.

Statement references:

[[def-gr-fx-conformal-constraint-data]]

[[thm-gr-constraint-equations-in-normal-frame]]

Proof / well-definedness route: Calculate the difference of Levi-Civita connections for phi^4 htilde; contract to obtain R_h=phi^-5(-8 Delta phi+Rtilde phi), show |K|^2=phi^-12|sigmatilde|^2+tau^2/3 and verify the divergence weight.

### `prop-gr-fx-constant-constraint-solution` — proposition

If R_htilde=0, |sigmatilde|^2=A>0 is constant and tau is a nonzero constant, the conformal constraint equation has exactly one positive constant solution phi=(3A/(2tau^2))^(1/12).

Statement references:

[[thm-gr-fx-lichnerowicz-reduction]]

Proof / well-definedness route: With Delta phi=0 the equation is A=(2/3)tau^2 phi^12; positivity gives existence and uniqueness among constants only.

### `prop-gr-fx-positive-linearized-constraint` — proposition

At the constant solution on a flat three-torus, the derivative of the scalar constraint operator is L=-8Delta+c with c=7A phi^-8+(10/3)tau^2 phi^4>0. For smooth v, integral vLv=8 integral |Dv|^2+c integral v^2, and each Fourier coefficient is inverted by (8|k|^2+c)^-1.

Statement references:

[[prop-gr-fx-constant-constraint-solution]]

Proof / well-definedness route: Integrate by parts on the closed torus. Define the inverse on Fourier Sobolev spaces and prove the H^(s+2) bound mode by mode. This gives a specified local elliptic kernel, not a universal solvability theorem.

### B leaf obligations

`ex-gr-fx02-1`: A constant diagonal trace-free tensor on a flat torus yields explicit nonzero-TT CMC vacuum data.

`ex-gr-fx02-2`: For tau=0, sigmatilde=0 on the flat torus every positive constant phi solves the equation; uniqueness and coercivity fail.

## Finite-slab geometric Cauchy stability

A page `gr-fx03-geometric-cauchy-stability`; B companion `gr-fx03-geometric-cauchy-stability-examples`. Category `general-relativity`; library `physics`.

The existing high-regularity result supplies local existence, stability and constraint propagation. This expansion spells out their finite-slab interface for later numerical and perturbative modules. No new global stability follows. Choice assumptions of the exact existing mathematical suppliers are inherited. Cover a fixed reference slab by finitely many local existence neighborhoods with a common positivity/regularity margin; inductively select a data neighborhood staying in each permitted set. At the difference level the derivative falling on the reference solution costs one derivative, hence H^(s-1), not an unsupported uniform Lipschitz claim at top order. The energy obeys E'<=CE+C||f||sqrt(E); replace sqrt(E) by sqrt(E+epsilon), integrate, and let epsilon decrease to zero. In geometric comparisons the identity map of coordinate grids is a gauge choice, not an invariant comparison. The timelike margin makes the proper-time square root Lipschitz on its compact negative interval. Dust conclusions stop at caustics, fluid conclusions require the strict interior equation-of-state state region, and no shock continuation is claimed. The maximal-development theorem determines the development up to data-fixing isometry; it supplies no global-in-time smallness estimate.

### `def-gr-fx-fixed-gauge-data-topology` — definition

Fix a compact spatial three-torus, integer s>=5, a coordinate gauge and a compact time slab on which the reference first-order Einstein reduction is H^s with uniformly positive time matrix. Compare reduced data in H^s and solutions in C_t H^(s-1), carrying the harmonic constraints and selected matter branch separately.

Statement references:

[[thm-gr-local-geometric-development]]

[[thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability]]

Proof / well-definedness route: Use the existing periodic system and its coefficient domain; specify a common compact subset of coefficient space and lower bound A0>=a I, a>0.

### `thm-gr-fx-finite-slab-stability` — theorem

On the common existence interval of two H^s solutions in the stated bounded coefficient set, their difference w satisfies ||w(t)||_(s-1)<=C exp(Ct)(||w(0)||_(s-1)+integral_0^t ||f_difference||_(s-1) dr). If the data satisfy the Einstein constraints, the developments solve the original geometric equations after the stated gauge identifications.

Statement references:

[[def-gr-fx-fixed-gauge-data-topology]]

[[thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability]]

[[thm-gr-local-geometric-development]]

Proof / well-definedness route: Subtract the first-order systems, commute up to s-1 derivatives, use the existing tame products/commutators and positive A0 energy, then Gronwall; invoke the existing subsidiary system, not stability alone, for constraints.

### `prop-gr-fx-geometric-observable-continuity` — proposition

Under the preceding H^s bounds and convergence with s>=5, metric components converge in C^1 on the compact slab and finite-parameter geodesics with convergent initial data staying in a common compact chart converge in C^1. Proper-time integrals of uniformly timelike converging C^1 curves converge.

Statement references:

[[thm-gr-fx-finite-slab-stability]]

[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]

Proof / well-definedness route: Sobolev embedding gives connection convergence; subtract the finite-dimensional geodesic ODE and use its local Lipschitz bound. For proper time use a uniform negative margin and uniform convergence of the integrand.

### B leaf obligations

`ex-gr-fx03-1`: A pure small diffeomorphism changes coordinate components while preserving scalar geometric observables after pullback.

`ex-gr-fx03-2`: Finite-slab continuous dependence does not imply a uniform estimate as the slab length tends to infinity.

## Asymptotic ends and ADM surface integrals

A page `gr-fx04-asymptotic-ends-and-adm`; B companion `gr-fx04-asymptotic-ends-and-adm-examples`. Category `general-relativity`; library `physics`.

The asymptotic hypotheses are deliberately concrete. More general O_2(r^-q), q>1/2, with integrable scalar curvature are important, but require a coordinate-invariance and convergence proof not supplied by a mere decay slogan. The specified expansion makes the displayed calculation rigorous and exposes the physical conversion from length m to mass. ADM energy is an asymptotic charge of an end with chosen asymptotic time normalization, not an integral of a generally covariant local gravitational density. Angular momentum and center of mass require additional parity and decay; they are retained research obligations and not inferred from this energy module. A positive mass theorem would need completeness, scalar nonnegativity (or the dominant energy condition for spacetime data), asymptotic hypotheses and the full Schoen-Yau or Witten proof. This scaffold does not make such an unproved local theorem a supplier. The Einstein-Maxwell author may consume this fixed-end formula only with its compatible end data; electromagnetic boundary charges remain in that framework.

### `def-gr-fx-adm-end` — definition

An end is identified with R^3 minus a ball, with h_ij=delta_ij+a_ij/r+O_2(r^-1-epsilon), epsilon>0, and K=O_1(r^-2), all bounds uniform in angle. When its limit exists define E_ADM=c^4/(16pi G_N) lim_R integral_(S_R)(partial_j h_ij-partial_i h_jj)n^i dS; the associated mass is E_ADM/c^2.

Statement references:

[[thm-gr-constraint-equations-in-normal-frame]]

[[thm-gr-density-divergence-and-finite-chain-flux]]

Proof / well-definedness route: Specify O_k as Cartesian derivative decay up to k. The stronger leading coefficient is constant here; coordinate invariance beyond the fixed end requires a separate theorem, not this definition.

### `prop-gr-fx-conformal-adm-value` — proposition

For h=u^4 delta with u=1+m/(2r)+O_2(r^-2), the fixed-end ADM energy equals c^4 m/G_N, where m is a length.

Statement references:

[[def-gr-fx-adm-end]]

Proof / well-definedness route: Since partial_j h_ij-partial_i h_jj=-2partial_i(u^4), the integral is -8 integral u^3 partial_r u dS=16pi m+O(R^-1).

### `prop-gr-fx-compact-change-adm` — proposition

If two metrics agree outside a compact set in the same specified end chart and both fixed-chart ADM limits exist, their ADM energies are equal.

Statement references:

[[def-gr-fx-adm-end]]

Proof / well-definedness route: For every sufficiently large sphere the two integrands coincide pointwise. No field equations, positivity or diffeomorphism invariance are required.

### B leaf obligations

`ex-gr-fx04-1`: The isotropic Schwarzschild slice u=1+G_N M/(2c^2 r) yields E_ADM=M c^2.

`ex-gr-fx04-2`: A smooth compact interior deformation leaves the ADM boundary integral unchanged while changing local scalar curvature.

## Null infinity, Bondi news and classical memory

A page `gr-fx05-bondi-news-and-memory`; B companion `gr-fx05-bondi-news-and-memory-examples`. Category `general-relativity`; library `physics`.

The Bondi hierarchy lemma is the substantial missing supplier; its proof must retain angular derivatives and subleading determinant-gauge terms. The integrated theorem is a short exact deduction once that explicitly planned lemma is authored. Set E_B=(c^4/G_N)m_B and u=ct_ret; power dE_B/dt_ret=-(c^5/(32pi G_N))integral N^2. Thus N is dimensionless, C and m are lengths and power has watts. Do not identify a finite-radius TT waveform with the limiting news without an error estimate. Define BMS transformations as diffeomorphisms preserving the asymptotic universal null structure, with the supertranslation u->u+f(x); their action shifts C by a sphere trace-free Hessian and does not select a preferred Poincare subgroup without extra structure. A full BMS representation or charge algebra is deferred to the boundary choices of FX12, not treated as supplied by a compact Lie representation theorem. Peeling and smooth null infinity are additional regularity assumptions; polyhomogeneous ends require a different expansion. Classical memory is not an entropy or soft-graviton quantization theorem.

### `def-gr-fx-bondi-expansion` — definition

On a vacuum end with retarded length coordinate u, luminosity radius r and unit sphere metric q_AB, impose Bondi determinant gauge and g_uu=-1+2m(u,x)/r+O(r^-2), g_ur=-1+O(r^-2), g_AB=r^2 q_AB+r C_AB+O(1), q^AB C_AB=0, with enough differentiated uniform remainders through the Einstein coefficient order used. Define N_AB=partial_u C_AB and geometric Bondi mass m_B=(1/(4pi))integral m dOmega.

Statement references:

[[def-gr-wave-screen-and-tt-projection]]

[[def-gr-fx-null-screen-geometry]]

Proof / well-definedness route: State smooth conformal/null expansion as a hypothesis, not a theorem for arbitrary asymptotically Euclidean data. Define all sphere derivatives with q.

### `lem-gr-fx-bondi-mass-coefficient` — lemma

For the vacuum Bondi expansion, the asymptotic Einstein equations imply partial_u m=(1/4)D_A D_B N^AB-(1/8)N_AB N^AB in this normalization.

Statement references:

[[def-gr-fx-bondi-expansion]]

[[def-gr-curvature-tensor-and-derived-tensors]]

Proof / well-definedness route: Author the inverse metric and radial hierarchy through the needed order; solve R_rr=R_rA=trace R_AB=0 before extracting R_uu at r^-2. The detailed coefficient calculation is a local authoring obligation, with no finite-radius substitution.

### `prop-gr-fx-bondi-mass-loss` — proposition

Subject to the preceding expansion and coefficient lemma, dm_B/du=-(1/(32pi))integral N_AB N^AB dOmega<=0. If N is continuous and the derivative vanishes on an interval, N=0 there.

Statement references:

[[lem-gr-fx-bondi-mass-coefficient]]

Proof / well-definedness route: Integrate the double sphere divergence using closed-surface Stokes. Positive q makes the square nonnegative; continuity upgrades almost-everywhere zero to pointwise zero.

### `prop-gr-fx-memory-integral` — proposition

For C^1 Bondi shear on [u1,u2], Delta C_AB=integral_(u1)^(u2) N_AB du. At large fixed r in the linear transverse detector approximation, a small initial screen separation s changes by Delta s^A=(1/(2r))Delta C^A_B s^B plus the stated higher-order and finite-distance corrections.

Statement references:

[[def-gr-fx-bondi-expansion]]

[[def-gr-wave-screen-and-tt-projection]]

Proof / well-definedness route: The first identity is the Banach-valued component FTC. For displacement integrate the linearized geodesic-deviation equation with initially comoving masses and the chosen TT/large-r regime; retain endpoint velocity terms unless assumed absent.

### B leaf obligations

`ex-gr-fx05-1`: A compact-u smooth trace-free news pulse gives nonpositive geometric mass change and a prescribed integral shear memory.

`ex-gr-fx05-2`: A time-independent nonzero C_AB has no news; shear value alone is not radiated power.

## Trapped surfaces and Penrose incompleteness

A page `gr-fx06-trapped-surfaces-and-incompleteness`; B companion `gr-fx06-trapped-surfaces-and-incompleteness-examples`. Category `general-relativity`; library `physics`.

The theorem is geometric; null convergence may follow from the adopted Einstein equation and null energy condition but is independently stated. An affine incompleteness conclusion does not assert a curvature scalar diverges or that a singular point belongs to M. A trapped surface is not automatically an event horizon: the latter comparison needs asymptotic predictability/completeness hypotheses. The proof route isolates the missing global topological step explicitly. The retained global-causal module supplies compact diamond maximizers, achronal boundary graphs and complete timelike projection after temporal splitting. The exponential image of a compact parameter set only bounds the boundary after showing generators leave at the first focal point; this is why the focal-point lemma cannot be skipped. No cosmic-censorship conclusion is used. The planned theorem is established mathematical knowledge awaiting complete local authoring, not an open problem. A Penrose diagram can display the distinguished Iplus and event horizon only after the completion is fixed; conformal diagrams do not prove the theorem.

### `def-gr-fx-trapped-surface-and-black-region` — definition

A future trapped surface is a smooth compact spacelike two-surface with both future null expansions negative. If a specified conformal completion has future null infinity Iplus, define B=M minus J^-(Iplus) and the event horizon as its boundary in M. A marginally outer trapped surface has theta_l=0 for a specified outward null direction.

Statement references:

[[def-gr-fx-null-screen-geometry]]

Proof / well-definedness route: Fix which asymptotic end defines outward. The event horizon is global and the marginal condition is slice dependent.

### `lem-gr-fx-trapped-boundary-compactness` — lemma

In a globally hyperbolic spacetime with a compact future trapped surface S, Ric(l,l)>=0 and future null geodesic completeness, E^+(S)=J^+(S) minus I^+(S) is compact.

Statement references:

[[prop-gr-fx-null-raychaudhuri]]

[[def-gr-fx-trapped-surface-and-black-region]]

[[lem-gr-achronal-boundaries-lipschitz-graphs]]

[[lem-gr-fx-null-focal-boundary-exclusion]]

[[lem-gr-time-separation-maximizers]]

Proof / well-definedness route: Use the previously authored causal maximizers to show every horismos generator is normal to S and has no focal point before leaving the boundary. Normalize null normals by a fixed smooth timelike observer. Compactness of S gives a uniform negative expansion bound and uniform finite affine cutoff; E^+(S) is a closed subset of the exponential image of the compact normalized normal bundle times that cutoff.

### `thm-gr-fx-penrose-incompleteness` — theorem

Assume the Axiom of Choice. A time-oriented globally hyperbolic Lorentzian four-manifold with connected noncompact Cauchy hypersurface, a compact future trapped surface and Ric(l,l)>=0 for all null l is future null geodesically incomplete.

Statement references:

[[lem-gr-fx-trapped-boundary-compactness]]

[[thm-invariance-of-domain]]

[[def-axiom-of-choice]]

[[lem-gr-achronal-boundaries-lipschitz-graphs]]

[[thm-gr-smooth-cauchy-temporal-splitting]]

Proof / well-definedness route: Assume completeness. Prove the achronal boundary E^+(S) is a boundaryless topological hypersurface using the retained achronal-boundary graph lemma. Project along a complete timelike flow to the Cauchy hypersurface; achronality makes the projection injective and invariance of domain makes its image open. Compactness makes the image closed and compact; connectedness gives the whole noncompact Cauchy surface, contradiction. The exact published invariance-of-domain supplier applies chartwise; inherit its AC assumption explicitly.

### B leaf obligations

`ex-gr-fx06-1`: In Minkowski space round spheres have one positive expansion and fail the trapping hypothesis.

`ex-gr-fx06-2`: The compact-Cauchy de Sitter model shows why the noncompact Cauchy hypothesis cannot simply be omitted.

## Kerr geometry and hidden symmetry

A page `gr-fx07-kerr-and-hidden-symmetry`; B companion `gr-fx07-kerr-and-hidden-symmetry-examples`. Category `general-relativity`; library `physics`.

The metric definition and horizon algebra are explicit targets; a claim of Ricci flatness needs the full signed curvature calculation and is not silently assumed by naming Kerr. Complete the exact new Kerr vacuum verification item before using the metric as a vacuum Einstein solution. The horizon generator calculation uses Delta(rplus)=0 and 2Mrplus=rplus^2+a^2. The stationary-limit radius follows by solving Sigma=2Mr, not by confusing it with Delta=0. The quadratic-integral theorem provides the exact mathematical mechanism of Carter separation. An explicit Carter tensor formula must be checked in regular frames before asserting its irreducibility; the separately registered local Hamilton-Jacobi separation is derived directly from the inverse metric. No compact-group highest-weight theorem yields Kerr's hidden symmetry. Scalar mode separation and spin-weighted spherical/spheroidal harmonics need their actual self-adjoint angular operators and endpoint regularity; these are explicit extensions for FX08, while the robust coordinate-free Killing-tensor implication is already fully derived here. The inventory now explicitly reserves the complete Kerr vacuum tensor verification and the Hamilton-Jacobi separation theorem rather than leaving them as unnamed later suppliers. The inverse-block identities in the separation proof give a checkable exact algebraic derivation and the radial/angular domains exclude axes and branch turning points. The horizon geometric angular velocity has inverse-length units; multiply by c for angular frequency per second. The vacuum verification remains a full finite tensor-calculation authoring obligation, separate from the already derived separation identity.

### `def-gr-fx-kerr-exterior` — definition

Let M>0 and |a|<M be lengths, Sigma=r^2+a^2 cos^2(theta), Delta=r^2-2Mr+a^2 and rplus=M+sqrt(M^2-a^2). On r>rplus use the metric g=-(1-2Mr/Sigma)dt^2-(4Mar sin^2(theta)/Sigma)dt dphi+(Sigma/Delta)dr^2+Sigma dtheta^2+(r^2+a^2+2Ma^2 r sin^2(theta)/Sigma)sin^2(theta)dphi^2. The displayed cross term equals 2g_tphi dt dphi.

Statement references:

[[def-gr-smooth-lorentzian-objects]]

[[def-gr-killing-field]]

Proof / well-definedness route: Use regular sphere charts near axes; t and r have lengths, angles are dimensionless. Physical mass is c^2 M/G_N and physical angular momentum is c^3 Ma/G_N.

### `prop-gr-fx-kerr-horizon-generator` — proposition

The stationary and axial coordinate fields T and Phi are Killing. At r=rplus the limiting null generator is T+Omega_H Phi with Omega_H=a/(rplus^2+a^2). The stationary field is spacelike where rplus<r<M+sqrt(M^2-a^2 cos^2(theta)).

Statement references:

[[def-gr-fx-kerr-exterior]]

Proof / well-definedness route: Differentiate the metric coefficients in t,phi; solve g(T+Omega Phi,T+Omega Phi)=0 on Delta=0. Construct ingoing coordinates to distinguish a regular horizon from a Boyer-Lindquist chart singularity.

### `def-gr-fx-killing-tensor` — definition

A symmetric smooth covariant tensor K_ab is a rank-two Killing tensor if nabla_(a K_bc)=0. A hidden integral is K_ab v^a v^b along an affinely parametrized geodesic. Reducible Killing tensors are linear combinations of the metric and symmetrized products of Killing fields.

Statement references:

[[def-gr-killing-field]]

[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]

Proof / well-definedness route: Define the symmetrization weight and distinguish the symbol K here from a hypersurface second fundamental form.

### `prop-gr-fx-killing-tensor-conservation` — proposition

For any Killing tensor K and affine geodesic with tangent v, d(K_ab v^a v^b)/dlambda=0.

Statement references:

[[def-gr-fx-killing-tensor]]

Proof / well-definedness route: The derivative is (nabla_c K_ab)v^c v^a v^b+2K_ab (nabla_v v)^a v^b; the second term vanishes and the first is the complete symmetrization contracted with v cubed.

### `lem-gr-fx-kerr-vacuum-verification` — lemma

For the specified subextremal Kerr exterior metric, Ric(g)=0 at every point of r>rplus. This is a local geometric tensor identity; it does not assert that arbitrary stationary vacuum data are Kerr.

Statement references:

[[def-gr-fx-kerr-exterior]]

[[def-gr-curvature-tensor-and-derived-tensors]]

Proof / well-definedness route: Invert the t-phi block with determinant -Delta sin(theta)^2 and use g^rr=Delta/Sigma, g^theta theta=1/Sigma. Compute the Levi-Civita symbols and Ricci contractions with the exact library sign. Equivalently use the orthonormal coframe sqrt(Delta/Sigma)(dt-a sin(theta)^2 dphi), sqrt(Sigma/Delta)dr, sqrt(Sigma)dtheta, sin(theta)/sqrt(Sigma)((r^2+a^2)dphi-a dt), solve the torsion-free Cartan equations and contract the curvature. Keep the full connection/curvature worksheets as future authoring evidence; the scalar R=0 alone is insufficient.

### `thm-gr-fx-kerr-hamilton-jacobi-separation` — theorem

In an axis-avoiding Kerr exterior chart, the geodesic Hamilton-Jacobi equation g^ab partial_a S partial_b S=-mu^2 admits the separated form S=-E t+L phi+S_r(r)+S_theta(theta), where Delta^2 (S_r prime)^2=[E(r^2+a^2)-aL]^2-Delta[mu^2 r^2+(L-aE)^2+Q] and (S_theta prime)^2=Q-cos(theta)^2[a^2(mu^2-E^2)+L^2/sin(theta)^2]. Local real branches require nonnegative radicands, and smooth branch formulas away from turning points use strictly positive radicands.

Statement references:

[[def-gr-fx-kerr-exterior]]

Proof / well-definedness route: Set Sigma g^tt=-(r^2+a^2)^2/Delta+a^2 sin(theta)^2, Sigma g^tphi=-a((r^2+a^2)/Delta-1), Sigma g^phiphi=1/sin(theta)^2-a^2/Delta. After inserting partial_t S=-E and partial_phi S=L, the equation is Delta(S_r prime)^2-[E(r^2+a^2)-aL]^2/Delta+mu^2 r^2+(S_theta prime)^2+(L/sin(theta)-aE sin(theta))^2+mu^2 a^2 cos(theta)^2=0. Group the last angular expression to the constant Q+(L-aE)^2 and rearrange; integrate the specified one-variable square roots on intervals where they are real. This proves local separation without a general integrability claim through turning points.

### B leaf obligations

`ex-gr-fx07-1`: At a=0 the Kerr exterior reduces to the existing Schwarzschild model, and Omega_H=0.

`ex-gr-fx07-2`: The stationary Killing energy can have negative density in the ergoregion, so its flux is not a global positive coercive energy there.

## Wave energy and black-hole perturbation interfaces

A page `gr-fx08-wave-energy-and-black-hole-perturbations`; B companion `gr-fx08-wave-energy-and-black-hole-perturbations-examples`. Category `general-relativity`; library `physics`.

Begin with the fully checkable multiplier identity. In a future orthonormal frame Q(n,n)=((n psi)^2+|D psi|^2)/2 and Q(n,X) is nonnegative for future causal X under the flux convention E=integral Q(n,X). The stationary Schwarzschild current gives conservation and degeneracy, not decay; the redshift multiplier and Morawetz estimate are separate deeper suppliers. Their future proof route requires a vector field timelike across the horizon, positivity of its deformation tensor near the nonextremal horizon, a radial Morawetz multiplier with a degeneracy at r=3M and a controlled far-region r-weighted estimate. Linear gravitational perturbations require the gauge-invariant Regge-Wheeler/Zerilli or Teukolsky variables, reconstruction, mode exclusions and boundary conditions. None is identified with the scalar stress tensor. Plan exact master-equation definitions and prove their reduction before any gravitational stability theorem; this scaffold retains them as explicit research obligations rather than using them as existing suppliers. This qualification also prevents a scalar-wave energy estimate from being advertised as nonlinear Kerr stability.

### `def-gr-fx-scalar-wave-stress` — definition

For a real smooth scalar psi on a fixed Lorentzian background define Q_ab=partial_a psi partial_b psi-(1/2)g_ab g^cd partial_c psi partial_d psi and J_a^X=Q_ab X^b. The test equation is box_g psi=0; the background is not evolved by this test stress.

Statement references:

[[def-gr-curvature-tensor-and-derived-tensors]]

[[def-gr-killing-field]]

Proof / well-definedness route: Specify field units independently; with dimensionless psi, Q has inverse-length-squared components and is a mathematical energy tensor, not automatically SI matter stress.

### `prop-gr-fx-wave-multiplier-identity` — proposition

For every smooth psi and X, nabla^a J_a^X=(box_g psi)X(psi)+(1/2)Q^ab (L_X g)_ab. Thus on-shell Killing currents are divergence free.

Statement references:

[[def-gr-fx-scalar-wave-stress]]

[[thm-gr-density-divergence-and-finite-chain-flux]]

Proof / well-definedness route: Differentiate Q, cancel Hessian terms using symmetry for scalars and metric compatibility, then symmetrize Q_ab nabla^a X^b.

### `prop-gr-fx-schwarzschild-test-energy` — proposition

For a smooth solution on a finite regular Schwarzschild exterior slab, the future stationary Killing current has nonnegative flux through spacelike slices and the future horizon, with balance including the outer boundary. The slice energy degenerates at the horizon where the Killing vector becomes null.

Statement references:

[[prop-gr-fx-wave-multiplier-identity]]

[[def-gr-killing-field]]

Proof / well-definedness route: Use the dominant-energy inequality of Q in a Lorentz orthonormal frame and the divergence theorem on truncated regular domains; pass to the horizon only with smooth extendibility and integrable traces.

### B leaf obligations

`ex-gr-fx08-1`: A scalar mode proportional to exp(-i omega t+i m phi) has horizon frequency omega-m Omega_H; negative stationary horizon flux is possible in the superradiant range.

`ex-gr-fx08-2`: The photon-sphere trapped null orbit obstructs a nondegenerate integrated local energy estimate with no trapping loss.

## Bootstrap closure and nonlinear stability boundaries

A page `gr-fx09-bootstrap-and-stability-boundaries`; B companion `gr-fx09-bootstrap-and-stability-boundaries-examples`. Category `general-relativity`; library `physics`.

The abstract closure theorem identifies what must be shown in a real global stability argument. It does not furnish the needed r-weighted decay, null-structure cancellations, optical-function construction, control of trapped rays, nonlinear gauge or final-parameter modulation. A physically meaningful stability statement must specify the background family and dimension, vacuum/matter model and Lambda, weighted initial norm, quotient by diffeomorphisms, regularity, asymptotic time, domain of outer communications, completeness and final mass/angular momentum. Minkowski stability, de Sitter stability and Kerr exterior stability are distinct theorems. The 2008 review's claim that no dynamical vacuum black holes are globally constructed is historical and cannot supply present status. The accessed 2021 small-a paper supersedes that broad claim in its stated regime, but this dossier deliberately makes no assertion that the whole subextremal or extremal problem is open or solved at the current cutoff. Such a status item requires a fresh exact literature review. Cosmic censorship and complete nonperturbative quantum gravity remain nonlogical research directions; they never discharge the continuation contract.

### `def-gr-fx-bootstrap-continuation-contract` — definition

Let E:[0,Tmax)->[0,infinity) be continuous, with local existence, and suppose a solution extends past every finite T when sup_[0,T] E<=eta and all separately listed gauge/coercivity margins persist. A bootstrap estimate is an implication E<=2A epsilon^2 on [0,T] implies E<=A epsilon^2 on that interval, for constants A>0 and 2A epsilon^2<eta.

Statement references:

[[thm-gr-fx-finite-slab-stability]]

Proof / well-definedness route: This is an abstract mathematical contract. Every application must identify E, norms, parameter modulation and the continuation criterion; the definition does not establish any Einstein estimate.

### `thm-gr-fx-bootstrap-closure` — theorem

Under the contract, initial E(0)<A epsilon^2 and an improvement valid on every compact subinterval give E(t)<=A epsilon^2 on the whole maximal interval; if the listed margins persist, Tmax=infinity.

Statement references:

[[def-gr-fx-bootstrap-continuation-contract]]

Proof / well-definedness route: Use continuity to obtain the first bootstrap interval. The supremum time of the 2A bound cannot end before Tmax because the A improvement leaves a strict margin. If Tmax were finite, the continuation hypothesis contradicts maximality.

### `rem-gr-fx-kerr-stability-source-boundary` — remark

The accessed Klainerman-Szeftel 2021 manuscript describes a nonlinear asymptotically flat vacuum stability theorem for |a|/M sufficiently small and a multi-paper proof. Its abstract is evidence of the scoped result claimed by those authors, not a local proof, a certification of every companion, or a status survey of all subextremal Kerr as of 2026-10-19. No logical consumer uses this remark.

Statement references:

[[def-gr-fx-bootstrap-continuation-contract]]

Proof / well-definedness route: Read source title, abstract and scope; retain exact restriction and distinguish the announced theorem from the locally proved abstract bootstrap lemma.

### B leaf obligations

`ex-gr-fx09-1`: E(t)<=E0+C epsilon integral_0^t (1+s)^(-1-delta)E(s)ds gives a uniform bound by Gronwall when delta>0.

`ex-gr-fx09-2`: Replacing the integrable weight by (1+s)^-1 yields polynomial growth and does not automatically close a uniform bootstrap.

## Cosmological dynamics and anisotropic shear

A page `gr-fx10-cosmological-dynamics-and-shear`; B companion `gr-fx10-cosmological-dynamics-and-shear-examples`. Category `general-relativity`; library `physics`.

This module expands the existing isotropic FLRW branch by a completely specified anisotropic finite-dimensional family. Derive the Ricci components before interpreting a power law. Shear has s^-2 units; H has s^-1, and the scale-factor volume has m^3. In the presence of anisotropic stress, the difference equation acquires a source; the unsourced V^-2 law must not be retained. The Kasner family does not prove generic BKL oscillations or past inextendibility of all cosmological developments. A future homogeneous Lambda>0 no-hair theorem must specify the matter energy conditions, Bianchi type and exceptions; arbitrary inhomogeneous de Sitter stability requires a different PDE theorem. Observational density parameters and cosmological perturbation spectra require qualified data and gauge-invariant perturbation definitions. This scaffold adds exact geometric models, not a fit to observations. The original FLRW scaling repair and definitions remain authoritative, with no replacement of scale factor by dimensionless redshift without a stated normalization.

### `def-gr-fx-bianchi-i-data` — definition

On I times T^3 take g=-c^2 dt^2+sum_i a_i(t)^2(dx^i)^2 with positive C^2 lengths a_i and dimensionless periodic x^i. Define H_i=adot_i/a_i, H=(sum H_i)/3, V=a_1 a_2 a_3 and sigma^2=(1/2)sum_i(H_i-H)^2. Adopt the vacuum Einstein equation for the Kasner branch.

Statement references:

[[def-gr-flrw-model-data]]

[[def-gr-curvature-tensor-and-derived-tensors]]

Proof / well-definedness route: This is a spatially homogeneous ansatz; it does not cover arbitrary anisotropic or inhomogeneous cosmologies.

### `prop-gr-fx-kasner-vacuum` — proposition

For t>0, a_i=A_i(t/t0)^p_i, A_i,t0>0, the diagonal Bianchi I metric is vacuum when sum p_i=sum p_i^2=1; the all-zero p_i case is separately flat. Conversely, a nonstatic power-law vacuum ansatz obeys these two equations.

Statement references:

[[def-gr-fx-bianchi-i-data]]

Proof / well-definedness route: Compute R_tt=-(sum_i(p_i^2-p_i))/t^2 and R_ii=(a_i^2/(c^2t^2))p_i(sum_j p_j-1). If any p_i differs from zero the second set forces sum p=1, and the first then gives sum p^2=1.

### `prop-gr-fx-bianchi-shear-decay` — proposition

For a diagonal Bianchi I Einstein model with isotropic spatial stress, subtracting the spatial diagonal equations gives d(H_i-H_j)/dt+3H(H_i-H_j)=0. Thus V(H_i-H_j) is constant and sigma^2 is proportional to V^-2.

Statement references:

[[def-gr-fx-bianchi-i-data]]

Proof / well-definedness route: Subtract R_i^i-R_j^j; the trace and isotropic matter terms cancel. Since Vdot=3HV, multiply by V and integrate.

### B leaf obligations

`ex-gr-fx10-1`: The Kasner exponents (-1/3,2/3,2/3) give a nonflat anisotropic vacuum model.

`ex-gr-fx10-2`: The exponents (1,0,0) have the Kasner sums but are locally flat; coordinate collapse at t=0 alone does not prove curvature blowup.

## Numerical geometry and constraint monitoring

A page `gr-fx11-numerical-geometry-and-constraint-monitoring`; B companion `gr-fx11-numerical-geometry-and-constraint-monitoring-examples`. Category `general-relativity`; library `physics`.

Use the scalar benchmark to make numerical correctness and termination obligations concrete. Taylor expansion gives local truncation residual O(k^2+h^2) for a C^6 continuum wave; an actual convergence theorem additionally requires uniformly bounded initialization error and a discrete energy estimate, not just pointwise mode roots. On a fixed torus the lowest nonzero frequency is bounded below; strict lambda<1 avoids the endpoint repeated-root instability at the Nyquist mode. Generalized harmonic, BSSN, Z4 and characteristic codes need separate principal-symbol, boundary and subsidiary analyses. A finite computational outer boundary does not equal null infinity; waveform extraction must declare extrapolation or Cauchy-characteristic matching errors. Constraint damping changes the off-constraint system and requires its own homogeneous residual estimate. This module supplies the precise diagnostic vocabulary and an executable finite benchmark; it makes no claim of production numerical-relativity convergence. Future Bayesian parameter inference consumes waveform/model/discretization errors as explicit assumptions and belongs to the relevant statistical supplier, not a probability-free deterministic theorem.

### `alg-gr-fx-periodic-wave-leapfrog` — algorithm

Input N>=3, grid spacing h=2pi/N, time step k>0, integer step count nmax>=1, periodic arrays u0 and v0. Define D_h u_j=(u_(j+1)-2u_j+u_(j-1))/h^2. Set u1=u0+k v0+(k^2/2)D_h u0; for n=1,...,nmax-1 output u_(n+1)=2u_n-u_(n-1)+k^2 D_h u_n with indices modulo N.

Statement references:

[[def-gr-fx-fixed-gauge-data-topology]]

Proof / well-definedness route: The procedure is finite and exact in real arithmetic; floating-point roundoff needs a separate model. It is a one-dimensional scalar hyperbolic benchmark, not an Einstein solver.

### `prop-gr-fx-leapfrog-termination` — proposition

For admissible integer N,nmax the benchmark terminates after nmax-1 update loops, outputs all time levels through nmax, and uses O(N nmax) arithmetic operations.

Statement references:

[[alg-gr-fx-periodic-wave-leapfrog]]

Proof / well-definedness route: Each loop has N explicit scalar updates, no nonlinear solve and a bounded counter.

### `thm-gr-fx-leapfrog-mode-stability` — theorem

For 0<k/h<1 each nonconstant Fourier mode has amplification roots on the unit circle with distinct roots except for the zero-frequency component; the latter represents the exact linear-in-time spatial mean and is controlled on fixed finite slabs. No uniform-in-time bound on displacement follows for nonzero mean velocity.

Statement references:

[[alg-gr-fx-periodic-wave-leapfrog]]

Proof / well-definedness route: Diagonalize D_h with exp(2pi i l j/N). The root equation is z^2-2(1-2lambda^2 sin^2(pi l/N))z+1=0. For 0<lambda<1 and l!=0 its real middle coefficient has absolute value <2. Treat the repeated root z=1 for l=0 using the initial velocity.

### `def-gr-fx-constraint-residual-diagnostic` — definition

For discrete metric/extrinsic-curvature data and a specified reconstruction/interpolation, define H_h and M_h by evaluating the signed Hamiltonian and momentum residuals with the chosen discrete derivative operators. Report the grid norm, units, mesh hierarchy, boundary treatment and reconstruction. A small residual is a diagnostic, not a proof of closeness to an exact development.

Statement references:

[[thm-gr-constraint-equations-in-normal-frame]]

[[def-gr-fx-fixed-gauge-data-topology]]

Proof / well-definedness route: Define the actual discrete operators before every code experiment. Constraint convergence and solution convergence are separate claims.

### B leaf obligations

`ex-gr-fx11-1`: For even N, the alternating Nyquist mode grows exponentially when k/h>1.

`ex-gr-fx11-2`: Identically zero grid residuals can coexist with a wrong gauge evolution or unresolved high-frequency interpolation; residuals alone do not certify physical accuracy.

## Covariant phase space and boundary ambiguities

A page `gr-fx12-covariant-phase-space`; B companion `gr-fx12-covariant-phase-space-examples`. Category `general-relativity`; library `physics`.

This is the gravity-facing classical interface shared with the combined thermo-GR author. It defines theta as a choice, not a unique object, and proves the ambiguity and flux laws on compact regions where no falloff is hidden. If delta1 and delta2 are derivatives of a smooth two-parameter family, delta2 delta1 L-delta1 delta2 L=0; expanding the chosen decomposition immediately gives the displayed d omega formula. Closedness in field space is a separate variation identity and follows from omega being a field-space exterior derivative of theta with the chosen sign. Gauge diffeomorphisms need not be null when they act nontrivially on the boundary: their surface charges can be physical. Define J_xi=theta(L_xi phi)-i_xi L; Cartan's identity and covariance yield dJ_xi=-E dot L_xi phi. Closedness gives local exactness only on contractible patches; a globally defined Noether charge needs a separate cohomological argument. Integrability of a proposed charge variation is a separate condition, and corner counterterms may change it. These exact classical identities provide a starting structure for quantum-gravity research but construct neither a Hilbert space nor a measure nor an anomaly-free quantization. Thermal first laws/entropy interpretations are owned by thermo-GR; TQFT quantization is owned by QFT.

### `def-gr-fx-covariant-presymplectic-current` — definition

Let L be a smooth local four-form Lagrangian for fields phi on an oriented four-manifold and let a chosen variational decomposition be delta L=E(phi) dot delta phi+d theta(phi;delta phi). For commuting smooth variations define omega(phi;delta1 phi,delta2 phi)=delta2 theta(phi;delta1 phi)-delta1 theta(phi;delta2 phi). For a compact oriented three-surface Sigma put Omega_Sigma=integral_Sigma omega.

Statement references:

[[thm-gr-density-divergence-and-finite-chain-flux]]

Proof / well-definedness route: Use Iyer-Wald ordering explicitly. Define variations as derivatives of a smooth two-parameter family, so commutation and passage through d/integrals have a stated regularity basis.

### `prop-gr-fx-on-shell-current-closure` — proposition

If E=0 and both variations obey delta_i E=0, then d omega=0. For a compact region with oriented boundary Sigma2-Sigma1+B, Omega_Sigma2-Omega_Sigma1=-integral_B omega.

Statement references:

[[def-gr-fx-covariant-presymplectic-current]]

[[thm-gr-density-divergence-and-finite-chain-flux]]

Proof / well-definedness route: Antisymmetrize the two variations of L: d omega=delta1 E dot delta2 phi-delta2 E dot delta1 phi under the chosen ordering. Apply finite-region Stokes. Cauchy independence requires zero boundary flux, not on-shell closure alone.

### `prop-gr-fx-potential-ambiguity` — proposition

Replacing L by L+d mu and theta by theta+delta mu+dY changes omega by d(delta2 Y(delta1)-delta1 Y(delta2)); the delta mu terms cancel. Consequently Omega on a compact surface changes by the corresponding integral over its boundary.

Statement references:

[[def-gr-fx-covariant-presymplectic-current]]

Proof / well-definedness route: Commute variations, use delta_i d=d delta_i and surface Stokes. A boundary condition may kill the corner term; covariance alone does not.

### `def-gr-fx-admissible-phase-reduction` — definition

On a specified solution space with specified admissible variations and boundary conditions, call Omega presymplectic if it is closed but possibly degenerate. A reduced symplectic manifold exists only when the null distribution has a smooth quotient with a descended nondegenerate two-form. A Hamiltonian for an admissible vector field X satisfies i_X Omega=dH on that specified space.

Statement references:

[[def-gr-fx-covariant-presymplectic-current]]

[[prop-symplectic-reduction-of-a-coisotropic-vector-subspace]]

[[def-poisson-bracket-on-a-symplectic-manifold]]

Proof / well-definedness route: Use the existing finite-dimensional reduction only for tangent linear models; it does not establish an infinite-dimensional smooth quotient. The library convention i_XH omega=dH fixes bracket signs.

### B leaf obligations

`ex-gr-fx12-1`: For a real scalar Lagrangian, compute theta and omega explicitly and recover the Cauchy data pairing between delta psi and delta normal derivative.

`ex-gr-fx12-2`: With nonzero boundary symplectic flux, the integrated presymplectic form on two Cauchy cuts differs although d omega=0 in the bulk.

## Tetrads, Lorentz connections and spin interfaces

A page `gr-fx13-tetrads-and-lorentz-spin`; B companion `gr-fx13-tetrads-and-lorentz-spin-examples`. Category `general-relativity`; library `physics`.

The actual root Euclidean spin draft was inspected and deliberately not used as a Lorentzian theorem. It concerns a positive-definite rank-n metric and Spin(n), whereas the Lorentz connection here takes values in so(1,3). The generic principal-bundle and gauge-group draft suppliers are adequate for gluing local frames and defining vertical automorphisms, with draft status carried honestly. The Lorentz-spin cover's matrix model is fully specified as a new local obligation: Hermitian matrices identify Minkowski vectors, determinant invariance gives a Lorentz action, the kernel follows because A commuting with every Hermitian matrix is scalar, and the identity-component image follows from the differential plus connectedness. Global spin-lift existence has topological obstructions and choices; do not assume a global tetrad or global spinor field. The torsion-free equivalence is classical and exact for an invertible coframe. A Palatini or Einstein-Cartan action with independent omega, degenerate tetrads, fermion torsion or a Holst/Immirzi term changes the model and needs explicit equations before any claimed equivalence. No compact SU(2) time-gauge representation supplies the noncompact Lorentz representation without a reduction choice.

### `def-gr-fx-tetrad-spin-connection` — definition

On a trivializing patch let e^I be a smooth coframe, eta=diag(-1,1,1,1), g=eta_IJ e^I tensor e^J and omega^I_J an so(1,3)-valued one-form. Define torsion T^I=de^I+omega^I_J wedge e^J and curvature F^I_J=domega^I_J+omega^I_K wedge omega^K_J. Under eprime=Lambda e put omegaprime=Lambda omega Lambda^-1-dLambda Lambda^-1.

Statement references:

[[def-gr-smooth-lorentzian-objects]]

[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]

[[thm-second-bianchi-identity-for-a-bundle-connection]]

[[def-smooth-principal-g-bundle]]

Proof / well-definedness route: A local coframe need not extend globally. Distinguish a Lorentz connection from a spin lift; the title is an interface and not an assertion that a spin structure exists.

### `prop-gr-fx-torsion-free-tetrad-equivalence` — proposition

For a nondegenerate coframe there is exactly one eta-skew connection one-form with de^I+omega^I_J wedge e^J=0; its induced tangent connection is the metric-selected torsion-free connection. Under a Lorentz coframe change Fprime=Lambda F Lambda^-1 and Tprime=Lambda T.

Statement references:

[[def-gr-fx-tetrad-spin-connection]]

[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]

Proof / well-definedness route: Construct omega from the existing Levi-Civita connection in the frame. Conversely the Cartan torsion equation implies zero tangent torsion and eta-skewness gives metric compatibility; uniqueness follows from Levi-Civita. Expand the gauge law to cancel dLambda terms.

### `def-gr-fx-lorentz-spin-lift` — definition

For an oriented time-oriented Lorentzian four-manifold, a Lorentzian spin structure is a principal Spin+(1,3) bundle with an equivariant double-cover map to the oriented time-oriented orthonormal SO+(1,3) frame bundle. The chosen spin representation gives its associated complex spinor bundle, and a lifted Lorentz connection differentiates spinors. This definition assumes a supplied smooth double cover and a chosen lift; it asserts neither lift existence nor uniqueness.

Statement references:

[[def-gr-fx-tetrad-spin-connection]]

[[def-frame-bundle-and-associated-vector-bundle]]

[[def-smooth-principal-g-bundle]]

Proof / well-definedness route: Define Spin+(1,3) concretely via SL(2,C) acting on Hermitian 2x2 matrices X=x0 I+x dot sigma by X->A X A dagger; det X=x0^2-|x|^2. Prove kernel {+I,-I}, local differential isomorphism and surjectivity onto the identity component before using the cover.

### `prop-gr-fx-lorentz-clifford-compatibility` — proposition

For gamma matrices with {gamma^I,gamma^J}=2eta^IJ I and omega_IJ=-omega_JI, the local spin covariant derivative D=d+(1/4)omega_IJ gamma^I gamma^J induces the vector Lorentz connection under Clifford multiplication. The assertion is local and presumes the selected spin representation.

Statement references:

[[def-gr-fx-lorentz-spin-lift]]

Proof / well-definedness route: Compute [gamma^I gamma^J,gamma^K]=2(eta^JK gamma^I-eta^IK gamma^J) and contract with omega_IJ. Fix raised/lowered gamma conventions before identifying the vector action.

### B leaf obligations

`ex-gr-fx13-1`: A nonconstant local Lorentz rotation of a Minkowski coframe produces a nonzero pure-gauge omega with F=0.

`ex-gr-fx13-2`: A Euclidean Spin(4) construction cannot be used verbatim as a Spin+(1,3) Lorentzian lift.

## Holonomy and discrete geometric interfaces

A page `gr-fx14-holonomy-and-discrete-geometric-interface`; B companion `gr-fx14-holonomy-and-discrete-geometric-interface-examples`. Category `general-relativity`; library `physics`.

This module uses Lie theory, representation theory and category language only where their structure does work. Objects are points and morphisms are piecewise smooth paths modulo thin homotopy, with transport respecting identity and composition; ordinary homotopy invariance requires flatness. The local small-loop expansion derives curvature from parallel transport and supplies the actual continuum-to-discrete interface. For a finite SU(2) graph, the trace of a loop product is gauge invariant because all intermediate h factors cancel and the base factor acts by conjugation. A representation is explicitly a homomorphism into unitary matrices. Haar integration, Peter-Weyl decomposition, Clebsch-Gordan intertwiner bases, spin networks, recoupling/Temperley-Lieb categories and q-deformations are potential exact tools, but this module does not declare them supplied or construct a gravitational physical Hilbert space from them. Their use in a future finite model must specify group, level/parameter, pivotal structure and positivity and then coordinate with QFT's TQFT ownership. A lattice/graph regulator, a continuum limit, imposition of Hamiltonian constraints and physical observables are four distinct obligations. No graph trace identity proves any of them. This is a precise quantum-gravity-facing classical/kinematic boundary, with no duplicate TQFT or entropy development. The new finite-vertex Haar projection consumes the actual published intertwiner-averaging lemma, with AC inherited explicitly. It supplies a rigorous invariant-tensor operation used in spin-network kinematics, while avoiding any claim about gravitational dynamics. Haar averaging is used only on compact SU(2); normalized probability averaging over noncompact SL(2,C) is unavailable.

### `def-gr-fx-connection-path-transport` — definition

For a C^1 path gamma:[0,1]->U and continuous matrix-valued omega(gammadot), define transport U_gamma as the endpoint solution Udot=-omega(gammadot)U, U(0)=I. Concatenation is piecewise C^1 with its orientation stated; reversal reverses the path.

Statement references:

[[def-gr-fx-tetrad-spin-connection]]

[[def-gauge-group-of-a-smooth-principal-bundle]]

Proof / well-definedness route: Use linear ODE existence and uniqueness for finite-dimensional matrices. This defines tangent/associated-bundle transport, not foliation holonomy.

### `prop-gr-fx-path-functor-and-gauge` — proposition

Transport obeys U_(gamma2*gamma1)=U_gamma2 U_gamma1, U_(gamma^-1)=U_gamma^-1, and under eprime=Lambda e, Uprime_gamma=Lambda(gamma(1)) U_gamma Lambda(gamma(0))^-1.

Statement references:

[[def-gr-fx-connection-path-transport]]

Proof / well-definedness route: Solve separately on concatenated pieces and invoke uniqueness. Differentiate Lambda(gamma(t))U(t)Lambda(gamma(0))^-1 and substitute the connection transformation law. The resulting path groupoid functor need not factor through the fundamental groupoid unless curvature vanishes.

### `prop-gr-fx-small-loop-curvature` — proposition

For a C^2 matrix connection on a coordinate rectangle based at p with side lengths epsilon in directions i then j, traversed in positive boundary order, U_loop=I-epsilon^2 F_ij(p)+O(epsilon^3) in a fixed local frame.

Statement references:

[[prop-gr-fx-path-functor-and-gauge]]

[[def-gr-fx-tetrad-spin-connection]]

Proof / well-definedness route: Expand the four segment ODE solutions through second order, including first derivatives of omega; multiplication yields -(partial_i omega_j-partial_j omega_i+[omega_i,omega_j])epsilon^2. Uniform C^2 bounds on a compact patch control the remainder.

### `def-gr-fx-discrete-holonomy-model` — definition

For a finite oriented graph with compact group G=SU(2), assign g_e in G, g_reverse=g_e^-1; a vertex gauge transformation h_v acts by g_e->h_target g_e h_source^-1. A Wilson loop in a specified finite-dimensional unitary representation rho is tr rho(product of edge elements in path order). This is a finite configuration model, not an established continuum quantum theory of gravity.

Statement references:

[[prop-gr-fx-path-functor-and-gauge]]

Proof / well-definedness route: Define the graph, path ordering, representation and group before taking trace. Vertex gauge invariance follows by endpoint cancellation and trace cyclicity. The SU(2) choice requires a separate time-gauge reduction for a gravity interpretation.

### `prop-gr-fx-vertex-haar-projection` — proposition

Assume the Axiom of Choice. For a finite graph and prescribed finite-dimensional unitary edge representations of compact G=SU(2), form at each vertex the tensor product W_v of incoming representation spaces and outgoing dual representation spaces. The normalized Haar average P_v=integral_G R_v(g) dmu(g) is the orthogonal projection onto W_v^G. Products of these vertex projections impose the finite vertex gauge invariance condition on the graph coefficient tensor space; no Hamiltonian or continuum constraint is imposed.

Statement references:

[[def-gr-fx-discrete-holonomy-model]]

[[lem-haar-averaging-projects-onto-the-intertwiner-space]]

[[def-axiom-of-choice]]

Proof / well-definedness route: Apply the exact Haar intertwiner projection with H=C carrying the trivial representation, J=W_v and T(1)=w. Its contraction/idempotence gives an invariant-vector projection. If P is a contractive idempotent on a Hilbert space, take x in its range and y in its kernel, and compare ||x||^2<=||x+t y||^2 for real and imaginary t to get orthogonality. Distinct vertex gauge actions commute on edge coefficient factors, so their projections commute.

### B leaf obligations

`ex-gr-fx14-1`: A flat connection has local endpoint-independent transport on a coordinate ball, while noncontractible loops may retain global holonomy.

`ex-gr-fx14-2`: On a triangular graph, the Wilson trace is invariant under all vertex gauge transformations although individual edge matrices change.

`ex-gr-fx14-3`: At a bivalent vertex with two copies of the defining SU(2) representation, the antisymmetric tensor e1 tensor e2-e2 tensor e1 is invariant because det g=1; the Haar projection fixes it.
