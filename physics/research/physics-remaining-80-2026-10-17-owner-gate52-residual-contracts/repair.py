import json,re,hashlib,shutil
from pathlib import Path
B=Path(__file__).resolve().parents[2]; RUN='physics-remaining-80-2026-10-17'; OUT=Path(__file__).parent
updates={}
def put(i,c,text,status='checked'):updates.setdefault(i,{})[c]={'case':c,'status':status,('evidence' if status=='checked' else 'reason'):text}
def na(i,c,text):put(i,c,text,'not_applicable')
def noiff(i,claim):
 for c in ('iff-forward','iff-reverse'):na(i,c,'Statement: '+claim+'; no converse characterization is asserted by this item.')
# Six independently inspected action/matter applications, with the exact exceptional branches.
i='pthm-emg-action-field-equations'
put(i,'empty','Statement and step 2.1: an empty spacetime restriction makes the tensor equations and all compactly supported variations vacuous in both stationarity directions; no stationary configuration is constructed.')
put(i,'zero','Steps 1.1–1.3: zero variation directions give zero first variation; the equivalences still require every admissible direction. F=0 makes the Maxwell stress zero without removing the selected matter equation.')
na(i,'one','Statement: the independent metric, connection and matter variation classes are not a cardinality-indexed family; a single test variation is never asserted sufficient for stationarity.')
put(i,'degenerate','Statement and step 1.2: the metric variations are those of the Lorentzian action supplier and preserve nondegeneracy for small parameter; no degenerate metric or vanishing positive coupling is admitted.')
put(i,'endpoints','Step 1.1 with A1: variations have compact interior support, or vanish near physical boundaries; the supplier integration by parts therefore contributes no endpoint/boundary term. No unrestricted boundary variation is claimed.')
put(i,'nonempty-choice','Steps 1.1–1.2 and A2: compact integration uses exactly the stated indexed AC_omega; the three variation equations apply to supplied fields and do not select a configuration from a solution set.')
i='pthm-emg-total-matter-field-exchange'
put(i,'empty','Statement: on U empty the local tensor identities are pointwise vacuous; steps 1.1–2.1 require no global integral or nonempty solution family.')
put(i,'zero','Steps 1.1–2.1: F=0 makes both force contractions zero (and the sourced Maxwell equation forces j=0); the matter on-shell hypothesis remains needed for its divergence identity.')
na(i,'one','Statement: the sum consists of specified matter and electromagnetic tensors, not a variable-size family whose singleton case is a separate theorem.')
put(i,'degenerate','Step 3.1: compatibility uses the nondegenerate Lorentz metric to lower the free index and kappa_E>0 to divide; zero coupling and degenerate metrics are excluded by the stated conventions.')
na(i,'endpoints','Statement: conservation and Bianchi compatibility are local differential identities on open U; there is no time interval, limiting endpoint, or integrated flux assertion here.')
put(i,'nonempty-choice','Steps 1.1–1.2 use the two supplied conditional identities under A2 indexed AC_omega; no choice of matter solution or action from a nonempty family is performed.')
i='pthm-emg-charged-dust-balance'
put(i,'empty','Statement and step 1.1: the continuum equations are local on the model open domain; on an empty restriction their pointwise divergence conclusions are vacuous, without constructing dust.')
put(i,'zero','Steps 1.1 and 3.1: q=0 gives j=0 and the adopted force equation m nabla_U U=0, so stress divergence is zero. The strictly positive number density nu and mass m are not set to zero.')
na(i,'one','Statement: m is an arbitrary positive constant, not a particle-count or family cardinality; this continuum proof makes no one-particle reduction.')
put(i,'degenerate','Statement and steps 2.1–3.1: the model assumes nu>0, m>0 and a timelike normalized U; the product-rule proof makes no dust law for degenerate metric or singular point density.')
na(i,'endpoints','Statement: smooth continuum divergences are evaluated locally; no worldline-segment endpoint or finite-domain integration appears in steps 1.1–3.1.')
na(i,'nonempty-choice','Steps 1.1–3.1 expand the explicitly supplied current and stress by the product rule; there is no selection of particle trajectories or elements from a family.')
i='pthm-emg-charged-scalar-coupling'
put(i,'empty','Statement and step 1.1: the scalar Euler–Lagrange equivalence concerns every compact section variation; on an empty restriction both the integral variations and pointwise equations are vacuous.')
put(i,'zero','Steps 1.1–3.1 retain the full scalar formula at phi=0 and at allowed lambda=0: j=0 there, while the stress may contain V(0). A zero field is not asserted to solve the Einstein equation for arbitrary potential.')
na(i,'one','Statement: lambda belongs to the selected representation branch and K_phi is an arbitrary positive coefficient; neither labels a one-element family or a unit-field normalization.')
put(i,'degenerate','Statement and A1: K_phi>0 and smooth real V near attained |phi|^2 are retained; step 1.1 cannot divide away a zero K_phi or extend to nonsmooth potential or singular fields.')
put(i,'endpoints','Statement and step 1.1: variations are compactly supported in the fixed-sector interior, so scalar integration by parts uses the supplier no-boundary-term interface; no free boundary data are varied.')
put(i,'nonempty-choice','Steps 1.1–2.1 use the scalar and action suppliers under exactly A2 indexed AC_omega; no smooth coupled solution is selected or asserted to exist.')
i='ex-emg-classical-scalar-background-limits'
put(i,'empty','Example: C is explicitly nonzero and the displayed plane wave is given on Minkowski spacetime; there is no empty parameter family over which a witness is selected.')
put(i,'zero','Steps 1.1–2.2: A=F=0 in both cases; lambda=0 gives j=0 but T_00>0, whereas lambda nonzero gives j^0 nonzero. These separate branches prevent a false coupled-solution conclusion.')
na(i,'one','Example: the amplitude C is any nonzero complex number, not fixed to unit norm; the proof keeps |C|^2 in both current and stress and has no singleton-family boundary.')
put(i,'degenerate','Example and steps 2.1–2.2: C=0 and m_s=0 are excluded from this witness; m_s>0 implies omega>0 and ensures the strict nonzero stress/current contradictions used there.')
na(i,'endpoints','Example and step 1.1: the exponential field is smooth for all finite Cartesian coordinates; no limiting time or finite segment endpoint is used to establish the obstruction.')
put(i,'nonempty-choice','Example explicitly supplies C, k and the plane wave. Steps 1.1–2.2 retain A3 indexed AC_omega inherited through the field-equation supplier, without choosing any coupled solution.')
i='cex-emg-flat-nonzero-field-coupling'
put(i,'empty','Counterexample A1 explicitly supplies a global constant field and potential on nonempty Minkowski spacetime; the refutation is a concrete witness, not a claim over an empty class.')
put(i,'zero','Counterexample steps 1.1–2.1: j=T_m=Lambda=0 are allowed and used. E0=0 is excluded because it would remove the strictly positive T_00 that refutes coupling.')
na(i,'one','Counterexample: one explicit nonzero constant field suffices to refute the universal claim; there is no cardinality parameter or assertion about a one-element physical ensemble.')
put(i,'degenerate','Counterexample step 1.2: E0 nonzero and mu0,c>0 give strictly positive T_00; the flat metric remains nondegenerate and no singular or distributional field is introduced.')
na(i,'endpoints','Counterexample steps 1.1–2.1 are exact Cartesian local equations on Minkowski space, with no cutoff interval, limiting endpoint or surface integral.')
put(i,'nonempty-choice','Counterexample A1 constructs A0=E0*x1/c explicitly and takes the zero matter functional; A2 indexed AC_omega is inherited only through the compact action supplier, not used to select the witness.')
# Conditional current/approximation claims: no invented converses.
for i,claim in {
 'thm-emg-charged-symmetry-current':'smooth exchange plus a Killing field imply current conservation and finite-chain side-flux balance, and a supplied Lorentz-force curve has the local compensated first integral',
 'lem-emg-controlled-maxwell-wkb':'the four amplitude constraints imply exact finite-epsilon residual formulas, estimates and null-ray transport',
 'lem-emg-source-and-test-scaling':'prescribed constant rescalings imply the stated quadratic field residual, linear dust scaling and finite-annulus energy formula',
 'ex-emgmath-ml-b07':'the displayed transverse plane-wave ansatz is an exact source-free test field that fails coupling on the unchanged flat metric',
 'ex-emgmath-ml-b08':'the explicit magnetic trajectories satisfy the finite-time velocity and position error bounds',
 'lem-emg-conformastatic-curvature':'the positive C3 conformastatic profile determines the displayed unique metric-compatible connection and curvature table',
 'pthm-emg-fluid-work-heating':'the adopted fluid exchange equation gives the longitudinal and transverse projections and the two specified work branches',
 'pthm-emg-matter-symmetry-charges':'the adopted dust/Maxwell equations and supplied symmetry imply total current balance and the separate conditional test-body first integral',
}.items():noiff(i,claim)
# Actual specializations of dimensionless unit values, distinguished from cardinality.
for i,t in {
 'ex-emgmath-ml-b02':'Example and steps 1.1–2.1: the one nonzero electric component is along x and the imposed conduction current is parallel to it; evaluating that component gives chi*E0^2 heating, with zero other force components.',
 'ex-emgmath-ml-b03':'Example and steps 1.1–1.2: the single magnetic component produces two eigenvalues of multiplicity two, not the one-plus-three perfect-fluid spectrum; step 2.1 separately computes the crossed-field null current.',
 'ex-emgmath-ml-b04':'Example and steps 1.1–2.1: the single stationary symmetry xi=partial_0 with chi=0 gives the test energy -c*C; no global basis of Killing fields or simultaneous symmetries is assumed.',
 'pthm-emg-source-test-backreaction-scope':'Statement and steps 1.1–2.1: delta=1 gives the unscaled prescribed Maxwell field and residual -kappa*T_EM; eta=1 in step 1.2 leaves the given dust/current unchanged, without establishing a coupled family.',
 'pthm-emg-weak-slow-test-motion':'Statement and step 2.1: epsilon=1 is allowed only if epsilon_*=1 and all the stipulated speed, metric bounds and common compact containment still hold; the stated finite comparison constant is unchanged.',
 'ex-emg-ml-b04':'Example and steps 1.1–2.1: the single time-translation generator produces C=mU_0+qA_0 and E_test=-c*C; the calculation uses a supplied curve and no family of Killing fields.',
 'ex-emg-ml-b07':'Example and step 3.1 explicitly take delta=1 with reference F0=F_epsilon, obtaining the nonzero Einstein residual wherever the sine is nonzero; epsilon=1 also retains every finite-parameter cancellation in step 1.2.',
 'ex-emg-ml-b08':'Example and steps 1.1–2.1: epsilon=1 is admitted only with |W0|^2<=1/2; the positive radicand and rotation comparison remain valid, with no relativistic-speed endpoint reached.',
 'pthm-emg-counterpoised-smooth-sphere':'Statement and step 3.1: delta=1 (a=b) is within 0<delta<=1; the exact profile and all three analytic bounds supplied by F2 apply at that endpoint.',
 'ex-emg-ml-b05':'Example and steps 1.1–2.1: a=b gives H(0)=2, Delta H(0)=-3/b^2, and the displayed central density/curvature; this is the explicit unit ratio a/b=1 case, with b still positive.',
}.items():put(i,'one',t)
na('ex-emg-ml-b06','one','Example: 0<delta<=1/10 excludes delta=1; b is an arbitrary positive length, not a cardinality or unit-value normalization. Steps 1.1–2.1 use delta only in this smaller interval.')
put('cor-emg-regular-counterpoised-sphere','empty','Statement and steps 1.1–2.2: the domain is all nonempty R^3 and density is strictly positive everywhere for a,b>0; the mass integral is over this full domain, not an empty support or zero-volume sphere.')
# Matter-observable definition, with actual zero and endpoint conventions.
i='def-emg-matter-observables'
put(i,'empty','Definition: observer quantities are defined at p in Omega; if Omega is empty there are no such p and the pointwise field definitions have the unique empty restriction. No global observer or solution is constructed.')
put(i,'zero','Definition: rho=0 is permitted in the dust tensor, and F=0 gives T_EM=E_n=B_n=f=0; the optional chi=0 conductivity yields zero conduction current without imposing a matter equation.')
put(i,'one','Definition: observer normalization is g(n,n)=-1; the four-velocity has g(U,U)=-c^2 and n=U/c. Unit normalization is explicit and is not a coordinate-time or tetrad identification.')
put(i,'degenerate','Definition: the spacetime metric is Lorentzian and U is timelike; its rest projector uses c>0, so a degenerate metric, null U or zero speed constant is outside the declared types. Zero dust density remains allowed.')
put(i,'endpoints','Definition: proper-time worldline segments are C2 supplied curves; no integration, acceleration endpoint equation, global flow or extension theorem is asserted by these observable definitions.')
na(i,'nonempty-choice','Definition supplies algebraic contractions from given fields and an observer; it selects no observer or worldline from an arbitrary nonempty family and asserts no global congruence existence.')
noiff(i,'these formulas define constitutive inputs and observer contractions, while explicitly treating the matter exchange law as an additional model condition')
# Physical projection claims: domain, conductivity and energy conditions.
na('pthm-emg-dust-mass-force-reduction','one','Statement: alpha=sigma/rho is an arbitrary real charge-to-mass ratio on rho>0, not constrained to one; the equivalence has no singleton-ensemble or one-dimensional-fluid parameter.')
na('pthm-emg-dust-mass-force-reduction','endpoints','Statement: the result holds on an open positive-density region; step 2.1 expressly does not extend the ratio sigma/rho across the rho=0 boundary or assert an endpoint limit.')
na('pthm-emg-dust-mass-force-reduction','nonempty-choice','Steps 1.1–2.1 substitute the supplied dust fields into the projection theorem; no integral curve or solution is chosen from a nonempty class.')
na('pthm-emg-fluid-work-heating','one','Statement: no unit conductivity is singled out; chi is any nonnegative smooth constitutive coefficient, and step 2.1 retains its exact factor in the work term.')
na('pthm-emg-fluid-work-heating','endpoints','Statement: both projection equations and nonnegative Ohmic work are pointwise on open Omega; no entropy integral, time interval or boundary endpoint is asserted.')
na('pthm-emg-fluid-work-heating','nonempty-choice','Steps 1.1–2.1 apply the stated fluid tensors and supplied conduction branch; no constitutive law or solution is selected from an unspecified family.')
put('pthm-emg-matter-symmetry-charges','one','Statement and steps 2.1–3.1: the single supplied Killing generator xi gives one finite-chain balance with its side flux; the separate test-body constant uses that same generator and no basis of symmetries.')
na('pthm-emg-matter-energy-conditions','one','Statement: WEC, NEC, SEC and DEC are tested for the specified tensor and observer contractions, not a variable-size family; selecting one of the four conditions does not introduce a singleton-cardinality limit.')
na('pthm-emg-matter-energy-conditions','endpoints','Statement and steps 1.1–2.1 are pointwise algebraic inequalities. Saturated signs are already included by >=, and there is no parameter interval with endpoint regularity to prove.')
na('pthm-emg-matter-energy-conditions','nonempty-choice','Steps 1.1–2.1 use supplied pointwise tensors and the algebraic energy-condition theorem; no state or observer field is selected from an arbitrary family.')
# Ingoing RN/KN: case-specific domains and normalization, not generic horizon assertions.
for i,claim in {
 'def-emg-xs-ingoing-rn':'the product tensors and a specified future cone are defined, with a coordinate identification only where f is nonzero',
 'prop-emg-xs-rn-horizon-data':'the positive radial roots have the displayed local Killing-horizon data and the superextremal radial-root case is absent',
 'thm-emg-xs-rn-crossing':'every positive root has a regular ingoing crossing and a simple outer root admits the additional local bifurcation chart',
 'thm-emg-xs-kn-extension':'the explicit product metric/field extend the BL data smoothly across axes and positive roots, with conditional equation continuation',
 'prop-emg-xs-kn-horizon-data':'the specified positive roots have the calculated null generator, signed surface gravity, area and potential',
 'prop-emg-xs-kn-ergoregion':'the specified stationary field has the calculated norm, positive-radius stationary-limit roots and Killing contractions',
 'prop-emg-xs-charged-ring-obstruction':'a supplied approached sequence with divergent charged Ricci contraction precludes its proposed C2 nondegenerate extension',
 'lem-emg-xs-null-barrier':'the two selected metrics admit a collar temporal function and a uniform one-sided radial cone estimate',
 'ex-emg-xs-superextremal-rn':'the specified strict superextremal data have no radial null root and every point admits the explicit outgoing path',
 'ex-emg-xs-extremal-horizon':'the specified extremal datum has a regular double root with zero signed surface gravity, outside the simple-root chart construction',
 'ex-emg-xs-topological-charge':'the stated nonzero sphere flux obstructs both bounding and a global real potential, while explicit local potentials exist',
 'cex-emg-xs-ergo-is-not-horizon':'a nonzero-rotation equatorial witness refutes universal identification of the stationary-limit set and outer horizon',
}.items():noiff(i,claim)
# The escape-set equalities really do contain both membership directions.
put('thm-emg-xs-rn-escape','iff-forward','Step 1.1: a future causal path starting at or below r_H cannot cross outward, including a path initially on the root; hence membership in the unbounded-radius escape set implies r>r_H.')
put('thm-emg-xs-rn-escape','iff-reverse','Step 1.2: for each supplied exterior point integrate 2/f along every finite radial interval and reparameterize by s=r-r0; the resulting single future null path has unbounded r, so r>r_H implies membership.')
put('thm-emg-xs-kn-escape','iff-forward','Steps 1.2 and 3.1: the collar integrating-factor argument excludes outward crossing from r<=r_+, including the zero initial excursion; thus an escaping point must satisfy r>r_+.')
put('thm-emg-xs-kn-escape','iff-reverse','Step 2.1: the explicit v(r) and sphere rotation define one future null path for every r>=r0>r_+, including initial poles; reparameterization gives a path on [0,infinity) with unbounded r.')
# Named empty cases: actual empty locus when relevant, otherwise fixed product domains.
for i,t in {
 'def-emg-xs-ingoing-rn':'Definition and step 1.1: the carrier is the explicit nonempty product R_v x (0,infinity) x S^2; it is not an existence claim over an unspecified manifold. Its radial-root set may be empty without preventing the metric definition.',
 'prop-emg-xs-rn-horizon-data':'Steps 1.1 and 4.1: when M^2<Q^2 the quadratic numerator is strictly positive for every r>0, so the set of positive radial roots and corresponding null levels is empty.',
 'thm-emg-xs-rn-crossing':'Statement and step 1.2: Q^2>0 and M^2>=Q^2 ensure at least one positive root; the asserted local chart is over a nonempty sphere and a shrunken positive coordinate neighborhood, not an empty horizon.',
 'thm-emg-xs-kn-extension':'Statement and step 1.1: the extension is defined on the nonempty R_v x (0,infinity) x S^2 product for all real parameters; absence of Delta roots leaves a valid extension and simply no radial-root crossing locus.',
 'prop-emg-xs-kn-horizon-data':'Step 1.1: M>0 and M^2>=a^2+q^2>0 give both positive roots (possibly coincident), so each stated sphere section is nonempty; no empty root is assigned an area or generator.',
 'prop-emg-xs-kn-ergoregion':'Steps 1.1–2.1: when a=0 the stipulated strict nonpolar rotating-horizon conclusion is not invoked; the positive-norm set is always defined by the norm formula, and only positive algebraic stationary-limit roots are retained.',
 'prop-emg-xs-charged-ring-obstruction':'Statement and steps 1.1–2.1 require an actual sequence approaching a point p with Sigma tending to zero; no obstruction is inferred for an empty sequence class or an unapproached boundary point.',
 'lem-emg-xs-null-barrier':'Statement and step 1.1: the outer radius is positive in both cases and continuity supplies a positive-width collar over the nonempty compact sphere; there is no assertion based on an empty horizon section.',
 'thm-emg-xs-rn-escape':'Steps 1.1–2.1: neither the escape set {r>r_H} nor its complement {0<r<=r_H} is empty on the selected positive-radius product; the explicit witness path is supplied separately for every exterior point.',
 'thm-emg-xs-kn-escape':'Steps 1.2–3.1: the selected product has nonempty exterior and interior radial regions because r_+>0; the collar exclusion and explicit outgoing path identify both parts rather than assuming nonempty escape.',
 'ex-emg-xs-superextremal-rn':'Step 2.1: every point escapes by the explicit path in step 1.2, so the complement and relative boundary of the escape set are empty; step 1.1 independently excludes all positive radial null roots.',
 'ex-emg-xs-extremal-horizon':'Example and step 1.1: M>0 gives the nonempty sphere level r=M; only the simple-root bifurcation construction is unavailable, not the extremal ingoing horizon itself.',
 'ex-emg-xs-topological-charge':'Example and steps 1.1–1.2: the domain expressly contains full sphere cycles with nonzero RN or KN magnetic flux; the global-potential obstruction does not apply on an empty cycle or sphere-free patch.',
 'cex-emg-xs-ergo-is-not-horizon':'Counterexample steps 1.1–2.1: a nonzero rotation gives a strictly positive equatorial separation r_E-r_H, so an actual nonempty region witnesses failure of the universal equality.',
 'prop-emg-xs-rn-local-gauges':'Statement: J is explicitly nonempty, open and positive-radius with f nonzero; the full sphere cycle used in steps 1.1 and 2.1 exists. No global-potential obstruction is inferred on an empty product.',
}.items():put(i,'empty',t)
for i,t in {
 'def-emg-xs-ingoing-rn':'Definition and step 1.2: the chosen pair of null fields has g(ell,n)=-1 and g(N,N)=-2; no unit-normalized observer is silently identified with N, and no one-element parameter family occurs.',
 'prop-emg-xs-rn-horizon-data':'Statement and steps 2.1–3.1: the single specified generator xi=partial_v is fixed by its asymptotic norm -1; rescaling that generator is not a free unit choice in the displayed signed-kappa formula.',
 'thm-emg-xs-rn-crossing':'Statement and step 2.1: ell_* is any positive auxiliary length, with Kprime(r_+)=1/ell_*; choosing numerical unit value is not required. U,V are explicitly dimensionless in the chart.',
 'thm-emg-xs-kn-extension':'Step 3.1: the supplied N has strictly negative norm -(f0^2+f0+1) and is not required to be unit; smooth time orientation needs only timelikeness, not a unit-value parameter case.',
 'prop-emg-xs-kn-horizon-data':'Statement and step 2.1: the generator has v component exactly one, even where the rotation field vanishes on the axis; its nonzero-generator part is therefore the entire nonempty horizon.',
 'prop-emg-xs-kn-ergoregion':'Statement and step 1.1 fix the single stationary field T=partial_v; the rotation field gives a separate Killing contraction in step 3.1. Neither is identified with a normalized observer in the ergoregion.',
 'prop-emg-xs-charged-ring-obstruction':'Statement and step 2.1 test one supplied approaching sequence and extension point; no assertion that one finite sequence value or unit curvature is sufficient replaces the divergent-sequence condition.',
 'lem-emg-xs-null-barrier':'Steps 2.1–3.1 normalize each nonzero future causal tangent by d_tau(Z)=1 before maximizing over the closed spatial unit ball; positive homogeneity then restores the estimate for every allowed tangent.',
 'thm-emg-xs-rn-escape':'Statement and step 1.2 require one future path from the given point with unbounded r, not a separate finite path chosen for each target radius; the explicit integral path satisfies that quantifier.',
 'thm-emg-xs-kn-escape':'Statement and step 2.1 build one rotating outgoing path from the given exterior point on the whole [0,infinity) domain; no collection of radius-dependent finite paths is substituted.',
 'ex-emg-xs-superextremal-rn':'Example and step 1.2 supply one future radial null path per starting point, defined for every finite r>=r0; the same path reaches all arbitrarily large radii.',
 'ex-emg-xs-extremal-horizon':'Example and step 1.1: the two algebraic roots coincide at the single positive level r=M. This is one regular horizon level with kappa=0, not two distinct simple-root horizons.',
 'ex-emg-xs-topological-charge':'Steps 1.1 and 2.1: a single full sphere cycle with flux 4*pi*q_m nonzero suffices to obstruct a global real potential; no integer-valued or unit monopole normalization is imposed.',
 'cex-emg-xs-ergo-is-not-horizon':'Counterexample steps 1.1–2.1 use a single equatorial comparison to refute the universal set identification; the equality on the rotation axis in step 3.1 does not remove that witness.',
 'prop-emg-xs-rn-local-gauges':'Steps 1.1–2.1 use one full sphere cycle with integral 4*pi*q_m; the north/south potentials form the explicit two-patch cover and no single-patch sphere potential is assumed.',
}.items():put(i,'one',t)
for i,t in {
 'def-emg-xs-ingoing-rn':'Definition and step 1.1: the radial block determinant is -1 even when f=0, and r^2*gamma is positive for r>0. The ingoing horizon is regular; the excluded r=0 center is not included by this argument.',
 'ex-emg-xs-superextremal-rn':'Example and step 1.1: Q^2>M^2 is strict, so the radial numerator is everywhere positive; the ingoing block still has determinant -1. No degenerate horizon or extremal equality is admitted in this example.',
 'ex-emg-xs-topological-charge':'Example and steps 1.1–2.1: the obstruction assumes q_m nonzero (or q*sin(beta) nonzero in KN); the zero-flux case cannot support the Stokes contradiction, and the smooth metric remains nondegenerate.',
 'prop-emg-xs-rn-local-gauges':'Statement and step 1.1: static charts require f nonzero and r>0, for either sign of f. Step 1.2 removes polar-coordinate apparent singularities by smooth Cartesian patch expressions, without extending through an excluded radial root.',
}.items():put(i,'degenerate',t)
put('prop-emg-xs-rn-horizon-data','endpoints','Steps 1.1 and 3.1: at M^2=Q^2 the roots coincide at positive M and kappa=0 by the same factorized formula; no division by the root difference or limiting simple-root chart is used.')
put('prop-emg-xs-charged-ring-obstruction','endpoints','Steps 1.1–2.1: Sigma tends to zero only along the supplied approached sequence in the original BL domain; continuity at the proposed extension point contradicts divergence. No metric value at r=0 is assigned.')
put('ex-emg-xs-extremal-horizon','endpoints','Example and steps 1.1–2.1 directly evaluate the extremal boundary M^2=Q^2, giving the double root and kappa=0. The simple-root construction requires kappa>0 and is expressly not continued to this endpoint.')
na('ex-emg-xs-topological-charge','endpoints','Example and steps 1.1–2.1 use finite closed sphere cycles and Stokes on the stated open domain; no radial endpoint, excluded center or infinite-radius limit is part of the potential obstruction.')
# Explicit construction/compactness in these particular geometry arguments.
for i,t in {
 'def-emg-xs-ingoing-rn':'Definition and steps 1.1–1.3 supply the product tensors, fields and local coordinate differential explicitly; the antiderivative is used only on an f-nonzero component and no arbitrary family of models is selected.',
 'prop-emg-xs-rn-horizon-data':'Steps 1.1–3.1 obtain the two radii by the fixed nonnegative-root convention and use the supplied product generator partial_v; there is no selection of a horizon from an arbitrary nonempty family.',
 'thm-emg-xs-rn-crossing':'Steps 1.2–3.1 use the stated indexed choice convention through the inverse/integration suppliers; h, K and the inverse rho are locally constructed, not chosen as a maximal extension.',
 'thm-emg-xs-kn-extension':'Steps 1.1–3.1 construct beta, the metric, potential and timelike N directly on the given product; step 4.1 extends a continuous residual from a dense set without selecting a global extension class.',
 'prop-emg-xs-kn-horizon-data':'Steps 1.1–4.1 compute each root, its supplied generator and its full-sphere integral explicitly; the signed-root convention and finite sphere calculation introduce no arbitrary horizon selection.',
 'prop-emg-xs-kn-ergoregion':'Steps 1.1–2.1 use the unique nonnegative roots at each fixed angle and the specified stationary field; step 3.1 applies to an already supplied geodesic and constructs no family of trajectories.',
 'prop-emg-xs-charged-ring-obstruction':'Statement supplies the sequence, embedding and proposed point p; steps 1.1–2.1 derive a contradiction from these fixed data, rather than choosing an approaching sequence or asserting any extension exists.',
 'thm-emg-xs-rn-escape':'Step 1.2 defines the outgoing path by an integral from its supplied starting radius; step 1.1 uses only a finite partition on each compact path segment. No independent path is chosen for each target radius.',
 'thm-emg-xs-kn-escape':'Step 2.1 constructs the entire outgoing path by two explicit radial integrals and the fixed sphere rotation; step 1.2 uses finite subdivisions on compact path segments rather than choosing arbitrary curve families.',
 'ex-emg-xs-superextremal-rn':'Step 1.2 gives the outgoing path by the explicit integral of 2/f for each supplied starting point; the empty-boundary conclusion in step 2.1 uses no selection of maximal spacetimes.',
 'ex-emg-xs-extremal-horizon':'Steps 1.1–2.1 evaluate the supplied extremal parameters and the ingoing determinant directly; no extremal extension chart or horizon-generator family is selected.',
 'cex-emg-xs-ergo-is-not-horizon':'Counterexample fixes the equator and uses the explicit two nonnegative roots in steps 1.1–2.1; no observer, orbit, or spacetime is selected from an arbitrary family.',
 'prop-emg-xs-rn-local-gauges':'Steps 1.2 and 3.1 give the north/south one-forms and the zero-magnetic-charge global potential explicitly; finite-chain Stokes in step 2.1 needs no selection of potentials or bundle trivializations.',
}.items():na(i,'nonempty-choice',t)
# SI adopters: conditional deductions, with the genuine orbit equivalence retained.
for i,claim in {
 'pthm-emg-xs-rn-model':'the exact SI-rescaled RN datum satisfies the adopted zero-source equations on its f-nonzero domain',
 'pthm-emg-xs-rn-horizons':'the listed parameter regimes give their specified regular radial-root and selected-model escape data',
 'pthm-emg-xs-kn-model':'the exact normalized electric KN fields satisfy the adopted equations on the stated BL and full-sphere exterior domains',
 'pthm-emg-xs-kn-horizons':'the specified geometric horizon data imply the displayed signed SI rates, voltage and selected escape boundary',
 'pthm-emg-xs-dyonic-model':'a fixed duality rotation preserves the source-free model and gives its specified flux parameters and conditional potential obstruction',
 'pthm-emg-xs-static-redshift':'the supplied common phase ray and two static observers give the displayed positive frequency ratio',
 'texp-emg-xs-rotating-ergoregion':'the fixed-coordinate equatorial curve inside the specified stationary-limit radius has spacelike tangent and cannot be a massive static observer',
}.items():noiff(i,claim)
put('texp-emg-xs-photon-radius','iff-forward','Steps 2.1–4.1: an exterior circular null geodesic must satisfy Vprime=0 by its radial connection equation, and only r_gamma^+ among the two quadratic roots lies strictly outside r_+.')
put('texp-emg-xs-photon-radius','iff-reverse','Step 5.1 constructs the null circular tangent at r_gamma^+ with arbitrary ell nonzero and positive E=|ell|*sqrt(f)/r; step 3.1 checks all coordinate geodesic equations, proving sufficiency rather than only an effective-potential root.')
for i,t in {
 'pthm-emg-xs-rn-model':'Statement: J is nonempty and open with f nonzero; step 2.1 applies on each component. Sphere flux parameters are defined on the full sphere, and no empty domain is used as a solution witness.',
 'pthm-emg-xs-rn-horizons':'Steps 1.1 and 2.4: the positive-root set is empty when Q^2>M^2, and then the escape set is the whole selected product with empty relative boundary; the Q^2=0 branch retains the single positive root 2M.',
 'pthm-emg-xs-kn-model':'Statement and step 1.1: the explicit full-sphere exterior r>R0>4|M| is nonempty regardless of root structure; the BL portion is restricted to actual nonsingular open domains rather than counted as an empty solution.',
 'pthm-emg-xs-kn-horizons':'Step 1.1: M>0 and 0<a^2+q^2<=M^2 imply both radii are positive; the sphere horizon section and selected exterior are nonempty, including at the coincident-root boundary.',
 'pthm-emg-xs-dyonic-model':'Statement and step 3.2 require a full sphere-containing exterior for the nonzero-flux potential obstruction; it is not asserted on an empty region or sphere-free local chart.',
 'pthm-emg-xs-static-redshift':'Statement supplies one actual phase ray through both events in the connected static interval J; steps 2.1–3.1 use its nonzero future-null k and positive frequency, not an empty ray or zero denominator.',
 'texp-emg-xs-photon-radius':'Steps 4.1–5.1 prove r_gamma^+>r_+ and explicitly construct a nonzero future circular tangent there; the exterior orbit set is not assumed nonempty merely from a formal quadratic root.',
 'texp-emg-xs-rotating-ergoregion':'Step 1.1 proves r_E+>r_+ even at extremality and supplies their midpoint, so the selected equatorial open radial strip is nonempty and contains the explicit fixed-coordinate curve.',
}.items():put(i,'empty',t)
for i,t in {
 'pthm-emg-xs-rn-model':'Steps 1.1–2.1 use the fixed positive alpha from SI constants, not a unit-normalized alpha=1; both electric and magnetic geometric lengths retain their full conversion coefficients.',
 'pthm-emg-xs-rn-horizons':'Steps 1.1 and 2.1: Q^2=0 gives exactly one positive root 2M and kappa=1/(4M); a coincident charged root is likewise treated as one geometric level, not two distinct surfaces.',
 'pthm-emg-xs-kn-model':'Steps 1.1–2.1 fix alpha by the SI map and set the magnetic flux to zero; alpha is not replaced by one, and the same full normalized Hilbert tensor is retained.',
 'pthm-emg-xs-kn-horizons':'Statement and step 3.1 distinguish the length-time generator chi_H (v coefficient one) from c*chi_H; angular frequency gains c, signed acceleration gains c^2 and the SI potential gains alpha inverse.',
 'pthm-emg-xs-dyonic-model':'Steps 2.1–2.2: a unit-length duality rotation obeys cos(beta)^2+sin(beta)^2=1, preserving q_e^2+q_m^2=q0^2 and the full quadratic stress; no unit magnetic-flux or charge quantization is introduced.',
 'pthm-emg-xs-static-redshift':'Step 3.1: if r_E=r_R then the positive common phase normalization cancels and nu_R/nu_E=1 exactly; the two events need not be different radii for the ratio formula.',
 'texp-emg-xs-photon-radius':'Steps 4.1–5.1 yield exactly one exterior stationary radius and construct a circular null orbit there for any ell nonzero; ell is not fixed to unit magnitude, and the inner algebraic root is excluded from the exterior.',
 'texp-emg-xs-rotating-ergoregion':'Statement and steps 2.1–3.1 test the single stationary tangent T=partial_v; it is spacelike in the chosen strip and cannot be normalized into a massive observer tangent by a real positive rescaling.',
}.items():put(i,'one',t)
for i,t in {
 'pthm-emg-xs-rn-model':'Step 1.1 retains A2 indexed AC_omega from the exact geometric/SI suppliers; parameters and the rescaled field are supplied explicitly and no physical RN object is selected.',
 'pthm-emg-xs-rn-horizons':'Steps 1.1–2.5 use explicit roots, local inverse/integral constructions and the stipulated indexed AC_omega in A2; outgoing paths are constructed from their starting points without selecting a maximal extension.',
 'pthm-emg-xs-kn-model':'Step 1.1 retains the exact indexed AC_omega premise A2 of the field/flux suppliers; the formula and exterior are explicitly given and no coupled solution is chosen from an arbitrary family.',
 'pthm-emg-xs-kn-horizons':'Steps 1.1–4.1 retain indexed AC_omega in A2 while applying the specified two root formulas and supplied causal path convention; no independent horizon or physical model realization is selected.',
 'pthm-emg-xs-dyonic-model':'Steps 2.1–3.3 construct a fixed-angle field rotation, its exact fluxes and a finite octahedron sphere cycle under the indexed A2 convention; they neither choose a circle bundle nor impose U1 flux quantization.',
 'pthm-emg-xs-static-redshift':'Statement supplies the common phase ray and both events; step 4.1 retains only inherited A2 indexed AC_omega. No null geodesic connecting arbitrary emitter/receiver data is selected or asserted to exist.',
 'texp-emg-xs-photon-radius':'Step 5.1 explicitly chooses any stated ell nonzero and sets its positive energy from f(r_gamma^+); the orbit is constructed by constant tangent components under inherited A2, with no unspecified family choice.',
 'texp-emg-xs-rotating-ergoregion':'Step 1.1 explicitly supplies the midpoint radius and any fixed azimuth; inherited A2 indexed AC_omega remains stated but no massive observer, extraction process or family of spacetimes is selected.',
}.items():put(i,'nonempty-choice',t)
partition=json.loads((B/'research'/f'{RUN}-owner-step1-gate-failures-52/boundary-emg.json').read_text())
excluded={'def-emg-finite-real-supremum-domain','def-emg-real-metric-axiom-convention','lem-emg-metric-axioms-imply-nonnegativity','def-emg-explicit-power-regimes','lem-emg-positive-square-root-smoothness','lem-emg-sequence-limit-criterion-with-choice','def-emg-boundaryless-completeness-domain','def-emg-set-size-and-class-schema','lem-emg-circle-connection-gluing','lem-emg-sphere-flux-holonomy'}
owned=[x for x in partition['items'] if (x['batch']<=5 or 13<=x['batch']<=25) and x['batch']not in(21,23,25) and x['id']not in excluded]
missing=[(x['id'],c) for x in owned for c in x['cases'] if c not in updates.get(x['id'],{})];assert not missing,missing
H=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
def archive(p):
 q=OUT/'before'/p.relative_to(B);q.parent.mkdir(parents=True,exist_ok=True);assert not q.exists(),q;shutil.copyfile(p,q)
def section(i,name):
 t=(B/'items'/f'{i}.md').read_text();m=re.search(r'^## '+re.escape(name)+r'\s*\n(.*?)(?=^## |\Z)',t,re.M|re.S);assert m;return m.group(1).strip()
quotejobs=[(4,'lem-emg-maxwell-stress-divergence','F2','lem-emg-maxwell-action-variation','**(b) Metric variation.**'),(14,'ex-emg-electric-stress','F1','lem-emg-maxwell-observer-stress','**(b) Orthonormal observer components.**')]
bybatch={}
for x in owned:bybatch.setdefault(x['batch'],[]).append(x)
for b,*_ in quotejobs:bybatch.setdefault(b,[])
changes=[];bindings=[]
for b,items in sorted(bybatch.items()):
 p=B/'research'/f'{RUN}-batch-{b}.proof-contracts.json';d=json.loads(p.read_text());archive(p);before=H(p)
 for x in items:
  i=x['id'];entry=d['contracts'][i];oldrows={v['case']:v for v in entry['boundaries']}
  for c in x['cases']:
   assert c in oldrows
   replacement=updates[i][c];index=entry['boundaries'].index(oldrows[c]);entry['boundaries'][index]=replacement
   changes.append({'id':i,'batch':b,'case':c,'before':oldrows[c],'after':replacement})
  sp=B/'items'/f'{i}.md';archive(sp);bindings.append({'id':i,'path':str(sp.relative_to(B)),'raw_sha256':H(sp)})
 for qb,i,fact,supplier,start in quotejobs:
  if qb!=b:continue
  text=section(supplier,'Statement');q=text[text.index(start):]
  if supplier=='lem-emg-maxwell-observer-stress':q=q[:q.index('**(d) Geometric normalization.**')].strip()
  else:q=q[:q.index('This is the tensor obtained')].strip()
  entry=d['contracts'][i];found=False
  for v in entry['citations']:
   if v['fact']==fact and v['source']==supplier:old=v['quote'];v['quote']=q;found=True
  assert found
  for v in entry.get('supplier_excerpts',[]):
   if v.get('supplier')==supplier:v['exact_statement']=q
  changes.append({'id':i,'batch':b,'fact':fact,'supplier':supplier,'old_quote':old,'new_quote':q,'actual_use':'Hilbert tensor formula at fixed lower F' if b==4 else 'orthonormal observer energy, mixed flux and spatial stress components; zero field values allowed','public_or_proof_change':False})
  for j in (i,supplier):
   sp=B/'items'/f'{j}.md';ap=OUT/'before'/sp.relative_to(B)
   if not ap.exists():archive(sp)
   if not any(v['id']==j for v in bindings):bindings.append({'id':j,'path':str(sp.relative_to(B)),'raw_sha256':H(sp)})
 p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
 print('wrote',b,len(items),'boundary items',before,H(p))
report={'version':1,'owner':'/root/emg_remaining_interfaces','run':RUN,'scope':'Assigned gate52 residual EMG boundary and exact-citation worksheet repairs; typed10, CP6–12 and delegated21/23/25 excluded. Only original batch worksheets changed.','release':{'path':'.physics-autopilot/'+RUN+'/owner-gate52-edit-release.json','raw_sha256':H(B/'.physics-autopilot'/RUN/'owner-gate52-edit-release.json')},'boundary_items':len(owned),'boundary_rows':sum(len(x['cases']) for x in owned),'quote_repairs':len(quotejobs),'changes':changes,'source_bindings':bindings,'source_changes':[],'checks':'pending scoped strict validation','remaining_conditions':['run scoped strict proof-contract and boundary diagnostic against actual written worksheets'],'mutation_limit':'No native/state/readiness/gate/metadata edits.'}
(OUT/'repair-evidence.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
