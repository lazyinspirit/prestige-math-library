# Classical electromagnetism: first-principles prose scaffold

Design date: 2026-10-03. This owner-authorized prose design precedes engine planning. It changes no plan, production item/page, import, state, verdict or receipt. All IDs and A/B homes below are proposals. No item is declared ready, published or mathematically closed merely because a textbook presents it. Mathematical prerequisites and open obligations are in [mathematical-prerequisites.md](mathematical-prerequisites.md), with exact supplier inspection in [mathematics-audit.md](mathematics-audit.md).

## Formulation, physical scope and primitive quantities

Adopt the microscopic Maxwell–Lorentz continuum field formulation in vacuum first, with prescribed sources; introduce material response and mechanical coupling as additional restricted assumptions. This is a classical model: continuum currents and fields, idealized charge support, measured constitutive behavior, no quantum measurement law, no claim of point-charge self-force well-posedness. Static Coulomb and Biot–Savart laws are derived specializations once boundary/decay data are stated; a Coulomb-first alternative may instead adopt Coulomb's law, and its primitive/derived declarations would change. Charge conservation is operationally meaningful before Maxwell, but within this formulation its differential compatibility also follows from Maxwell. Avoid a circular proof: define charge and current, adopt the field equations, then derive compatibility. Continuity alone does not uniquely derive the displacement-current law.

The first geometry is a lab coordinate presentation M=R3×I, I an open real time interval, with Euclidean spatial metric δij, fixed spatial orientation and time coordinate t. A lab frame here is a chosen global product coordinate chart plus an oriented orthonormal spatial basis, origin and clock origin; the early theory is presented in this chart, without claiming Galilean covariance of Maxwell. A prescribed particle worldline is Γ(t)=(z(t),t), z:I→Ω⊂R3 of class C2; velocity z' and acceleration z'' are derivatives in that chart. Subluminality is added only when using the later relativistic/retarded-particle model. The later Minkowski geometry and inertial frames are separately defined, not smuggled into this product model.

Specify Ω open in R3. Smooth-branch fields E,B:Ω×I→R3 are C1 jointly; for curl-curl/wave equations require C2, and for potential constructions use smooth fields on star-shaped Ω. Sources ρ:Ω×I→R and J:Ω×I→R3 are C1 when continuity is taken pointwise. At fixed t these are spatial scalar/vector fields. E is a polar spatial vector and B an axial vector under orientation-reversing orthogonal spatial coordinate changes; only orientation-preserving spatial changes are used in the basic coordinate formulas. Relativistic boosts mix E and B later. Neither field is an unexplained force arrow.

Charge q is a signed scalar parameter (C), spatial charge density ρ is C m^-3 and current J is C m^-2 s^-1=A m^-2. For a spatial set V with integrable ρ, Q(V,t)=∫Vρ dx; outward current through an oriented surface is ∫S J·n dS. A point source uses qδz(t), a distribution, not a continuous density. A stationary sheet uses σδS and KδS, with σ in C m^-2, K tangential in A m^-1. Define distribution/test spaces before their use; smooth equations apply only off support and jump conditions follow from distributional equations on stationary interfaces. Products such as point δ times its own divergent E are undefined in this design.

In this formulation E,B, charge/source parameters, electromagnetic vacuum coupling and a propagation constant are primitive framework inputs; potentials are representations derived locally from homogeneous Maxwell equations; field energy/momentum are balance-law constructions; charge/current moments are derived integrals. Introduce positive c and μ0, define ε0=1/(μ0c2), and choose normalization by SI. Modern SI fixes c=299792458 m s^-1 exactly and elementary charge e=1.602176634×10^-19 C exactly as metrological definitions; this does not quantize charge within the classical postulates. μ0 is experimentally determined, and ε0 inherits its uncertainty through the exact relation. Do not copy older texts' exact μ0=4π×10^-7 N A^-2. Precision values require a dated CODATA record; none is invented here. SI base-unit status does not settle framework primitiveness.

| Quantity | Mathematical type/construction | SI unit |
|---|---|---|
| E | R3 field, force per positive test charge at rest within Lorentz operational assumption | V m^-1=N C^-1 |
| B | axial R3 field, velocity-dependent part of Lorentz force | T=N s C^-1 m^-1 |
| μ0, ε0, c | positive scalar constants, ε0=(μ0c2)^-1 | N A^-2, F m^-1, m s^-1 |
| φ, A | scalar potential, spatial vector potential | V, T m=V s m^-1 |
| F, m | force vector, externally supplied mechanical mass | N, kg |
| P, M | electric dipole density, magnetic dipole density | C m^-2, A m^-1 |
| D, H | D=ε0E+P; H=B/μ0-M | C m^-2, A m^-1 |
| ε, μ, σc | material response coefficients | F m^-1, H m^-1, S m^-1 |
| u, S, g, Tij | energy density, energy flux, momentum density, stress | J m^-3, W m^-2, kg m^-2 s^-1, N m^-2 |
| p, m_dip | ∫xρ dx; (1/2)∫x×J dx | C m, A m2 |
| k, ω, Z | wavevector, angular frequency, impedance | m^-1, s^-1, Ω |

Mass is not generally derived by classical EM. For test-particle dynamics assume a separately declared mechanical law and m>0; early nonrelativistic m z''=q(E+z'×B) has the small-speed regime and ignores radiation self-interaction. Field-energy divergence cannot be converted into a proof of electron mass. Capacitive/inductive energy and a field contribution to a composite system's energy have narrower meanings.

## Postulates and immediate conditional deductions

For the smooth vacuum branch adopt, pointwise on Ω×I,

$$\nabla\cdot E=\rho/\epsilon_0,\qquad \nabla\cdot B=0,$$

$$\nabla\times E=-\partial_tB,\qquad \nabla\times B=\mu_0J+\mu_0\epsilon_0\partial_tE.$$

These are physical postulates in the adopted formulation, with no magnetic-charge branch. Adopt Lorentz force on a prescribed test particle, F=q(E+v×B), as an additional coupling postulate; a continuum force density f=ρE+J×B presumes an applicable smooth continuum model. Linear superposition of fields follows from linearity for prescribed sources, not for arbitrary nonlinear self-consistent matter.

For each fixed bounded test volume V compactly inside Ω with a specified finite piecewise C1 boundary, continuous traces and the published divergence hypotheses,

$$\oint_{\partial V}E\cdot n\,dS=\epsilon_0^{-1}\int_V\rho\,dx,\qquad \oint_{\partial V}B\cdot n\,dS=0.$$

For each fixed oriented C2 patch S over a supplied finite elementary parameter region, C1 fields on a neighborhood and compatible boundary orientation,

$$\oint_{\partial S}E\cdot dl=-\frac{d}{dt}\int_SB\cdot n\,dS,$$

$$\oint_{\partial S}B\cdot dl=\mu_0\int_SJ\cdot n\,dS+\mu_0\epsilon_0\frac{d}{dt}\int_SE\cdot n\,dS.$$

Time differentiation is on a fixed compact patch, with joint regularity, and uses M01. For general smooth compact embedded surfaces use the stronger general Stokes interface. Conversely, if these equations hold for every sufficiently small ball/disk with continuous integrands, localization M01 recovers the differential equations. A loop crossing a singularity is outside the smooth theorem; weak equations, puncture/excision or explicit sheets are needed. Taking divergence of Ampère–Maxwell for C2 E,B gives ∂tρ+div J=0. Initial Gauss constraints propagate under the evolution equations if continuity holds; they are not dispensable initial data.

The no-monopole postulate does not prove absence of every possible magnetic monopole in nature. Neither finite data nor conservation-law consistency deduces all four equations uniquely. Sources and initial/boundary data are part of a problem; arbitrary independent ρ,J are not admissible.

## Dependency-ordered A/B design

The exact proposed item inventories, levels, prerequisite IDs, page counts and proof/source-review strategies are in [proposed-inventory.json](proposed-inventory.json). This JSON is a design companion, not an engine manifest. The shorthand page arrows below mean A suppliers precede A consumers; B pages are leaves, never suppliers to another page. Extra mathematical A pages precede the indicated physical consumers. Counts include local mathematical items only when explicitly assigned there; unresolved mathematical developments have their own bounded pages and cannot be omitted to fit a cap.

| Pair | A page | A/B exact count | Principal preceding A pages | Purpose / proof burden |
|---|---|---|---|---|
| 01 | `em-primitives-and-postulates` | 7/2 | mathematical coordinate/calculus suppliers | Defined quantities, SI conventions, Lorentz coupling, Maxwell postulates |
| 02 | `em-maxwell-integral-and-constraints` | 6/2 | 01, M01/M03 | Differential/integral equivalence, continuity, initial constraints, singular-source branch |
| 03 | `em-electrostatics-in-vacuum` | 6/2 | 01–02, Poincaré, Newtonian kernel | Coulomb from static Maxwell plus decay; Poisson, electrostatic work/energy |
| 04 | `em-electrostatic-boundaries-and-conductors` | 6/3 | 03, Green, M03/M12 | Specified equilibrium conductor model, images, conditional uniqueness/existence distinction |
| 05 | `em-electrostatic-multipoles` | 5/2 | 03, M06/M11 | Controlled dipole expansion first; convergent general harmonic expansion stays open |
| 06 | `em-magnetostatics-in-vacuum` | 6/3 | 02, Poincaré/kernel | Conserved compact steady currents, Biot–Savart, magnetic dipoles/forces |
| 07 | `em-material-response` | 7/3 | 03–06, M03/M14 | Bound/free split, constitutive postulates, stationary transmission, restricted energy |
| 08 | `em-induction-and-circuit-limits` | 6/3 | 02,06–07, M02 | Fixed versus moving emf, quasistatic inductance, RL/LC model assumptions |
| 09 | `em-potentials-and-gauge` | 5/3 | 02, M05/M09 | Local/global potential distinction, gauge invariance versus reachability |
| 10 | `em-energy-momentum-and-angular-balance` | 6/1 | 01–02, M04 | Poynting, stress, field/particle balance; no ambiguous general material momentum |
| 11 | `em-vacuum-waves-and-polarization` | 7/4 | 02,10, M07/M09 | Wave equation, constrained plane waves, polarization, interference and finite-energy issues |
| 12 | `em-wave-interfaces-and-conductors` | 5/3 | 07,11, M07/M14 | Fresnel/refraction, total internal reflection, skin depth with response regime |
| 13 | `em-waveguides-and-cavities` | 4/3 | 11–12, M13 | Verified rectangular TE/TM modes, cutoff, standing waves; completeness open |
| 14 | `em-retarded-fields-and-radiation` | 7/3 | 09–11, M09/M10/M15 | Causal selection, retarded fields, dipole radiation, Larmor with errors/regime |
| 15 | `em-lorentz-covariant-formulation` | 7/2 | 01–02,09–10, M08 | Explicit Minkowski geometry, tensor Maxwell, transformations and relativistic force |
| 16 | `em-empirical-tests-and-scope` | 6/2 | relevant prediction pages, M16 if needed | Actual report proposals remain OPEN pending primary reports |
| 17 | `em-action-and-variational-formulation` | 5/2 | 15, M17 | Alternative adopted action and compact field variation; particle curve variation OPEN |

There is no physical dependency 15→01: early lab fields are already defined without relativity. Particle radiation may use the defined subluminal trajectory directly plus M10; covariance and relativistic Liénard generalization belong on 15 or a subsequent extension. This ordering avoids a radiation/relativity cycle. M09 must be established before claiming general retarded existence; it can be inserted immediately before 09. Constitutive dispersion needs M14 before 07 only if that branch is promoted beyond a recorded discussion; nondispersive restricted models do not depend on that open theorem.

### 03–06: static results and their exact assumptions

Static means ∂tE=∂tB=∂tρ=∂tJ=0. On a star-shaped Ω, curl E=0 gives E=-∇φ. Then -Δφ=ρ/ε0. On R3 for compactly supported smooth ρ and the condition φ→0 at infinity, the candidate is φ(x)=(4πε0)^-1∫ρ(y)/|x-y|dy. The published distributional Newtonian theorem supplies -Δφ=ρ/ε0 for compact L1 sources as a weak statement; upgrading to C2 for Hölder data requires the exact regularity theorem and a complete proof audit. For a point charge, φ=q/(4πε0r), E=q x/(4πε0r3) off the charge and Gauss holds distributionally/excision. No classical smooth equation is asserted at the pole. Uniqueness on all space requires suitable decay; adding a constant or a harmonic field defeats an unrestricted uniqueness claim.

For compact smooth sources with adequate decay, electrostatic assembly/work energy U=(1/2)∫ρφ=(ε0/2)∫|E|2 follows from Green integration and the vanishing boundary term. The factor 1/2 counts pair interactions once. For point support, the self-energy integral near r=0 behaves as ∫dr/r2 and diverges; finite interaction energies can be separated only with a stated subtraction/model. A capacitor with fixed geometry in a linear regime has Q=CV and U=Q2/(2C)=CV2/2; C>0 is derived from that boundary problem, not a universal arbitrary proportionality.

A perfect electrostatic conductor is a restricted equilibrium model with E=0 in its connected conducting interior, constant potential on each connected component, no volume charge there, and surface charge from the normal jump. Finite-conductivity transients are distinct. Prove Dirichlet uniqueness conditional on existence with identical boundary data, Neumann uniqueness up to one constant per component and necessary total-flux compatibility. An explicit image-charge candidate must satisfy the domain's Poisson equation, boundary trace and decay before invoking uniqueness. Images do not prove generic solvability. Sphere/parallel-plate examples declare idealization, fringing approximation and boundary orientation.

Dipole moments and multipoles require compact support or enough moment integrability. If support radius a and observation r≥2a, M06 gives φ=Q/(4πε0r)+(p·x)/(4πε0r3)+O(a2||ρ||1/(ε0r3)), uniformly in direction. State origin dependence p' = p-Qa_shift; p is origin-independent only for Q=0. Arbitrary all-orders expansions require M11's convergence, not a formal Taylor series.

For magnetostatics assume div J=0, compact support and enough regularity on R3. Set A=μ0/(4π)∫J(y)/|x-y|dy. Integrating div J=0 by parts gives div A=0; -ΔA=μ0J componentwise and B=curl A gives div B=0 and curl B=μ0J. Deriving Biot–Savart B=μ0/(4π)∫J(y)×(x-y)/|x-y|3dy uses differentiated kernel integrability or an off-support calculation, with regularity audited. A thin wire is a further distribution/limit model. Infinite wires and solenoids lack compact support and need symmetry plus boundary conditions; they cannot be automatic corollaries of the compact theorem. Magnetic dipole m_dip=(1/2)∫x×J has units A m2; force/torque formulas assume small, prescribed loops and slowly varying external fields. Do not treat intrinsic electron spin as a classical current-loop derivation.

### 07–09: matter, induction, potentials

Define P,M as macroscopic dipole-density fields after declaring spatial averaging and separation assumptions; neither is derived from vacuum Maxwell alone. For regular fields, ρbound=-div P and Jbound=∂tP+curl M, with stationary surface charge P·n and current M×n. Define D=ε0E+P and H=B/μ0-M; then div D=ρfree and curl H=Jfree+∂tD follow algebraically, while curl E=-∂tB and div B=0 remain. Free/bound splitting is model-dependent and not unique absent an adopted material convention. Linear isotropic nondispersive matter adopts P=ε0χe E, B=μH and Jconduction=σcE in its declared regime. Positive ε,μ and σc≥0 make the simplest loss/energy signs meaningful. Anisotropy uses tensors; hysteresis, spatial nonlocality, dispersion and nonlinear response require explicit response maps. Ohm's law is a restricted constitutive assumption, not a derivation from Lorentz force without microscopic assumptions.

At a fixed stationary C2 interface with normal n from medium 1 to 2, bounded one-sided smooth traces and surface free sources σfree,Kfree but no magnetic sheet sources, distribution Maxwell gives n·[D]=σfree, n·[B]=0, n×[E]=0 and n×[H]=Kfree. M03 proves the signs. The bounded ∂t terms give no delta contribution for this fixed interface. Ideal sheet polarizations/dipole layers or moving interfaces change this analysis. An ideal perfect electric conductor wave boundary uses n×E=0 with induced charge/current and flux/initial constraints; it does not always imply an initially trapped B suddenly vanishes.

Define fixed-loop emf as ∮E·dl. For a moving material circuit C(t)=∂S(t), define ℰ=∮(E+v×B)·dl under the test-force/rigid material velocity assumptions. M02 and homogeneous Maxwell give ℰ=-dΦB/dt. A universal fixed-loop expression used on a moving loop is wrong. Lumped circuits require size L≪cT, small radiation/leakage, well-defined conductor/electroquasistatic potentials and stated inductance/capacitance approximations. In that restricted model ℰind=-L dI/dt and magnetic energy LI2/2 follow the linear flux-linkage construction; mutual inductance reciprocity needs the kernel symmetry and conserved current profiles, not just a symbol M. RL/LC differential equations additionally use restricted resistor/source mechanical apparatus assumptions. Full radiation does not reduce exactly to a lumped circuit.

On smooth star-shaped Ω×I, M05 supplies B=curl A and E=-∇φ-∂tA. Gauge χ gives A'=A+∇χ, φ'=φ-∂tχ. Lorenz G=div A+c^-2∂tφ=0 turns Maxwell into Wφ=ρ/ε0 and WA=μ0J with W=c^-2∂t2-Δ. Since G'=G-Wχ, reachability requires solving Wχ=G with compatible initial/boundary data. Residual freedom obeys Wχ=0. Coulomb div A=0 gauge is an elliptic spatial condition, with an instantaneous scalar representation and compensated vector contribution; no observable faster-than-c signal follows from that representation alone. Retarded rather than advanced/no-free-field selection is extra temporal data, never a theorem from time-symmetric differential equations alone.

### 10–13: conservation, waves and boundaries

For C1 vacuum fields define u=ε0|E|2/2+|B|2/(2μ0), S=E×B/μ0. Dot the evolution equations with E and B and use div(E×B)=B·curl E-E·curl B to obtain ∂tu+div S=-J·E. Integrate on a fixed compact volume only with finite flux and differentiability hypotheses. Mechanical work interpretation uses the Lorentz and mechanical coupling; total energy conservation additionally needs the matter energy balance and zero/included boundary flux, not merely Maxwell. For a finite-energy domain, no negative energy is inferred from a complex amplitude.

Set g=ε0 E×B=S/c2 and Tij=ε0(EiEj-δij|E|2/2)+(BiBj-δij|B|2/2)/μ0. M04 plus Maxwell yields f=div T-∂tg with f=ρE+J×B. Thus ∂tg+div Π=-f for momentum-flux Π=-T; the sign convention is explicit. Integrating gives force ∫f=∮Tn-d/dt∫g. Symmetric T gives angular density x×g and its corresponding balance. Vacuum field momentum and stress are derived by these balances; Minkowski/Abraham material momentum cannot be selected by inserting D,H in every vacuum formula without a full material momentum model. Radiation pressure is a consequence under specified incident/reflected/transmitted energy/momentum flux and absorber coupling.

For C2 source-free vacuum, curl-curl identity gives (Δ-c^-2∂t2)E=0 and similarly B, with the Gauss constraints retained. Every component-wave solution is not necessarily a Maxwell solution. For real k≠0, ω>0, complex amplitudes satisfy k·e=k·b=0, k×e=ωb and k×b=-(ω/c2)e, hence ω=c|k| for nonzero amplitudes. This gives transverse plane waves and two polarizations; a one-direction pulse f(khat·x-ct) is a subclass of 3D solutions. Plane waves have infinite whole-space energy, so do not apply finite-energy global conservation directly. For phasors M07 yields average S=(1/2μ0)Re(e×conjugate(b)). Define linear/circular/elliptic polarization by the real tip curve of E at a fixed point; Jones coordinates refer to a chosen transverse basis, not a new ontology.

Classical coherent fields interfere through |e1+e2|2, including a cross term. This is a deterministic intensity calculation for the stated fields. Statistical optical measurements add apparatus and sampling assumptions. It is no evidence that every classical-particle alternative fails, and does not by itself establish quantum mechanics. B examples derive a two-beam interference profile and show phase averaging removes the cross term under a declared phase distribution; no experiment counts are fabricated.

For homogeneous positive nondispersive ε,μ define vphase=(εμ)^-1/2 and Z=√(μ/ε). Tangential phase matching at a planar stationary interface gives Snell/reflection relations; boundary equations determine Fresnel amplitudes, and M07 verifies normal-incidence energy balance. Oblique TE/TM require polarization/orientation conventions, nonzero denominators and separate total-internal-reflection treatment. Evanescent normal decay is not a traveling normal energy flux. In a homogeneous conductor with constant σc, harmonic convention e^-iωt gives k2=μεω2+iμσcω; choose Im k>0 for decay. Skin-depth approximation δ≈√(2/(μσcω)) requires σc≫εω and a locally valid material response. Dispersion/negative-index/complex tensor media need causal response and branch selection, not the simple real formulas. Group velocity is dω/dk on a specified branch; no universal vg≤c statement is adopted, and signal-front velocity is a separate causal question.

Rectangular perfect-conductor guides/cavities can be defined geometrically and explicit TE/TM separated modes checked directly, with cutoff kc2=(mπ/a)2+(nπ/b)2, dispersion ω2/c2=kz2+kc2 and correct nonzero index restrictions. TE means Ez=0, TM means Bz=0 relative to the guide axis; TEM requires multiply connected conductor geometries rather than a single empty rectangular tube. Define cutoff, phase/group velocities, boundary traces and standing-wave conditions. Individual mode verification is not spectral completeness; arbitrary-field expansions remain M13-open. Losses, apertures and scattering require separate estimates.

### 14–15: radiation and relativistic scope

For conserved smooth sources compact in space with sufficient time regularity/history, the candidate no-incoming retarded potentials on R3 are φ(x,t)=(4πε0)^-1∫ρ(y,t-|x-y|/c)/|x-y|dy and A(x,t)=μ0/(4π)∫J(y,t-|x-y|/c)/|x-y|dy. Their causal Green identity, source/gauge compatibility, regularity and initial/free-field contributions require M09. They are not the general Maxwell solution: homogeneous radiation can be added. Far-field approximations hold for r≫source size with explicit uniform errors and cannot drop retardation when ωr/c is large. For a slowly moving localized source with wavelength much larger than source size, electric dipole radiation has E_rad=(4πε0c2r)^-1 n×(n×p''(t-r/c)) up to sign convention fixed by differentiation, B_rad=n×E_rad/c and power P=|p''|2/(6πε0c3). The sign follows from -∂tA giving -p'' and -∇φ giving n(n·p''); their sum is n×(n×p''). Establish M15 before accepting the field formula. The nonrelativistic point-charge specialization gives P=q2|a|2/(6πε0c3) only under v≪c and the prescribed-trajectory/test-self-force regime. Magnetic dipole/quadrupole branches retain hierarchy and error controls. Energy loss does not by itself provide a well-posed self-force equation; Abraham–Lorentz runaways/preacceleration and finite-size regularization belong to a explicitly deferred extension.

For a point trajectory, the retarded root s is defined by t-s=|x-z(s)|/c. A C3 all-time worldline with |z'|<c pointwise does not guarantee global root existence; require uniform subluminality plus appropriate history or explicitly assume a unique past-light-cone intersection. Off the trajectory, monotonicity and implicit derivatives yield 1-n·β factors. Liénard–Wiechert potentials/velocity-and-acceleration fields remain M10-open; do not copy a delta substitution without its Jacobian. A hypothetical charge switched on with J=0 violates conservation and is not an admissible thought experiment here.

Later adopt Minkowski affine geometry η=diag(-1,1,1,1), x0=ct, time orientation and inertial tetrad frames as in M08. Massive worldlines are C2 future-directed timelike curves; proper time τ=c^-1∫√(-η(dz,dz)), U=dz/dτ, η(U,U)=-c2. Null trajectories have no massive proper-time parameter. An inertial frame is an origin plus a future-oriented η-orthonormal basis; observer congruences and arbitrary tetrad fields are different objects and are not interchangeable with that definition.

Define Aμ=(φ/c,A), ∂μ=(c^-1∂t,∇), and lower indices using η. To match the lab equations use Fμν=∂μAν-∂νAμ with raised derivative ∂0=-c^-1∂t: F0i=Ei/c, Fij=εijk Bk; then ∂μFμν=-μ0Jν for Jν=(cρ,J), and the lowered tensor satisfies the cyclic derivative identity. These signs must be derived explicitly by component calculation, not mixed with a (+---) textbook convention. Relativistic coupling is m dUμ/dτ=qFμνUν, with Uν=ηνλUλ. Indeed the spatial electric contribution is Fi0U0=(-Ei/c)(-γc)=γEi, and FijUj=γεijkvjBk=γ(v×B)i. Dividing dp/dτ=γ dp/dt recovers the spatial Lorentz force. The time component gives d(γmc2)/dt=qE·v. Thus the conventions are consistent. The antisymmetry calculation preserves U·U. Standard boost field transformations and invariants |B|2-|E|2/c2 and E·B follow multilinear transformation, not the claim that E or B separately remains invariant.

The relativistic model adds the relativity principle, mechanical momentum pμ=mUμ and invariant mass as coupling assumptions; Maxwell lab equations do not independently prove all special relativity. No general relativity/curved-spacetime extension is included.

### 17: action as an alternative adopted formulation

Define the potential field A on a bounded spacetime region with smooth extension to its closure, a conserved smooth prescribed current J and smooth compactly supported variations h. With the chosen (-+++) convention, the real functional is S[A]=∫[-FμνFμν/(4μ0)+JμAμ] d4x, up to a common normalization factor. Stationarity for every h is an alternative physical model assumption, rather than an empirical theorem or a demand that S be a minimum. M17 expands the quadratic functional exactly and integrates its linear variation by parts, obtaining δS=∫[(∂μFμν)/μ0+Jν]hν; the fundamental lemma gives ∂μFμν=-μ0Jν. The homogeneous equations hold because F is constructed from A and commuting derivatives. Thus this is equivalent to the adopted Maxwell formulation in its declared local smooth potential sector; arbitrary global topology remains a separate question. Under compact gauge changes the source term changes by -∫(∂μJμ)χ=0, with no discarded noncompact boundary contribution.

The particle action -mc²∫dτ+q∫Aμdzμ is a further mechanical coupling functional, with fixed endpoint timelike variations; its full curve-variation theorem remains open in this inventory. Translation Noether theory and general gauge-current identities require separate symmetry/variation suppliers. Neither Lorentz symmetry nor a quadratic-action ansatz alone proves that the model describes nature or uniquely eliminates nonlinear/higher-derivative alternatives.

## Empirical source and item discipline

An experiment item must describe a retrieved actual report: apparatus, preparation/calibration, recorded observables, quantitative uncertainty when reported, limitations and qualified interpretation. Historical Coulomb/Faraday/Hertz narratives are contexts, not enough to invent quantitative experiments. The completed reader dispositions determine which actual reports can be used. A prediction, such as field inverse-square behavior or frequency-dependent radiation, belongs in a separate physical theorem; its comparison to observations is a nonlogical `tested_by` relationship unless a stated empirical estimate is actually used as a premise. Postulates carry `supported_by` relations, never an empirical proof edge.

No finite agreement proves Maxwell theory. A discrepancy tests theory plus source preparation, boundary, material, detector and inference assumptions. Point estimates inherit calibration and model uncertainty. Qualitative reports remain qualitative; sample size, independence, error bars, p-values, significance, confidence and precision are never supplied from imagination. Simulated field plots/ideal interference are B examples; complete hypothetical deductions are thought-experiments with explicit premises. Every theorem consuming actual measured parameters carries conditions and uncertainty through its result chain.

## Source integration and closure

All four complete independent source reports have been integrated; the completed-source table and per-pair dispositions below record exact locators, accepted scope and limitations. Primary metrology/experiment supplements do not replace a missing complete treatment. Mathematical closure remains partial: the local elementary arguments and inspected published interfaces cover many smooth conditional calculations, while wave existence, retarded asymptotics, general boundary/spectral/dispersion and source-specific statistical analysis are explicitly open. A future engine plan must decide whether to build those mathematical prerequisite pairs or restrict individual claims to explicitly verified candidates. Neither option permits quietly calling the deep category closed.

## Exact item inventories and design levels

Levels are computed from all listed proposed dependencies, including mathematical suppliers. Published suppliers do not raise levels. OPEN subproof expansion must precede production; levels never certify readiness.

### em-primitives-and-postulates / em-primitives-and-postulates-examples

Exact current inventories: A=7, B=2; cap=100 each. Remaining expansion budget A=93, B=98. Split before exceeding cap; substantial open proof expansion is not already included in these counts.

| ID | Kind / level | Exact proposed deps | Strategy / status |
|---|---|---|---|
| `def-em-lab-geometry` | definition / 0 | `def-ck-euclidean-maps-and-diffeomorphisms`, `def-euclidean-inner-product`, `def-vector-space`, `lem-standard-basis-of-f-n`, `def-directional-and-partial-derivatives` | Define Ω,I, chart, basis, Euclidean metric, worldline and velocity; no unspoken Lorentz geometry; conditional-design |
| `def-em-sources` | definition / 1 | `def-em-lab-geometry` | Explicit type/domain/convention definition; conditional-design |
| `def-em-si-conventions` | definition / 1 | `def-em-lab-geometry` | Unit table; positive c,μ0 and ε0=(μ0c²)^-1; exact modern c/e, measured μ0; conditional-design |
| `def-em-fields` | definition / 2 | `def-em-lab-geometry`, `def-em-si-conventions` | Explicit type/domain/convention definition; conditional-design |
| `post-em-vacuum-maxwell` | postulate / 3 | `def-em-fields`, `def-em-sources` | Formulation review; no magnetic charge; C1 baseline; C2 consumers separately; conditional-design |
| `post-em-lorentz-coupling` | postulate / 3 | `def-em-fields`, `def-em-sources` | State force equation, q,m inputs, external/self-field exclusion and nonrelativistic approximation; conditional-design |
| `pthm-em-linear-superposition` | physical-theorem / 4 | `post-em-vacuum-maxwell` | Linearity of all four equations, source and initial/boundary data; conditional-design |
| `ex-em-unit-dimensional-checks` | example / 4 | `post-em-vacuum-maxwell`, `post-em-lorentz-coupling` | Direct substitution and declared assumptions; conditional-design |
| `ex-em-smooth-and-point-source-types` | example / 3 | `def-em-sources`, `def-em-fields` | Direct substitution and declared assumptions; conditional-design |

### em-maxwell-integral-and-constraints / em-maxwell-integral-and-constraints-examples

Exact current inventories: A=6, B=2; cap=100 each. Remaining expansion budget A=94, B=98. Split before exceeding cap; substantial open proof expansion is not already included in these counts.

| ID | Kind / level | Exact proposed deps | Strategy / status |
|---|---|---|---|
| `def-em-fixed-test-geometry` | definition / 1 | `def-em-lab-geometry`, `def-bounded-piecewise-c-one-euclidean-domain`, `def-oriented-unit-normal-and-flux-of-a-surface-patch`, `def-scalar-and-vector-line-integrals-along-piecewise-c1-paths` | Explicit type/domain/convention definition; conditional-design |
| `pthm-em-integral-maxwell` | physical-theorem / 4 | `post-em-vacuum-maxwell`, `def-em-fixed-test-geometry`, `thm-divergence-theorem-for-bounded-piecewise-c-one-domains`, `thm-the-classical-stokes-theorem-for-a-c2-surface-patch`, `lem-em-parameter-integrals`, `lem-em-continuous-localization` | Divergence, patch Stokes, M01 differentiation and localization; conditional-design |
| `pthm-em-charge-continuity` | physical-theorem / 4 | `post-em-vacuum-maxwell`, `thm-the-divergence-of-a-curl-vanishes`, `thm-distributional-differentiation-is-continuous-and-commutes` | Take divergence at C2; distributional derivative commutation in weak branch; conditional-design |
| `pthm-em-gauss-constraint-propagation` | physical-theorem / 5 | `post-em-vacuum-maxwell`, `pthm-em-charge-continuity` | Time-differentiate div B and div E-ρ/ε0; integrate constant-in-time defect; conditional-design |
| `def-em-weak-sources` | definition / 4 | `def-em-sources`, `post-em-vacuum-maxwell`, `def-distribution`, `def-distributional-derivative`, `def-dirac-delta-and-its-derivatives`, `def-em-surface-distribution`, `lem-em-point-current-continuity` | Use test functions and M03; do not multiply self-fields by delta; conditional-design |
| `pthm-em-fixed-vacuum-jumps` | physical-theorem / 5 | `def-em-weak-sources`, `lem-em-interface-derivatives` | M03 delta coefficients: n·[E]=σ/ε0, n×[B]=μ0K, n·[B]=0,n×[E]=0; conditional-design |
| `texp-em-displacement-current-surface-choice` | thought-experiment / 5 | `pthm-em-integral-maxwell`, `pthm-em-charge-continuity` | Subtract two spanning surface fluxes and use volume continuity; account for displacement term; conditional-design |
| `ex-em-nonconserved-switched-charge` | example / 5 | `pthm-em-charge-continuity` | Direct substitution and declared assumptions; conditional-design |

### em-electrostatics-in-vacuum / em-electrostatics-in-vacuum-examples

Exact current inventories: A=6, B=2; cap=100 each. Remaining expansion budget A=94, B=98. Split before exceeding cap; substantial open proof expansion is not already included in these counts.

| ID | Kind / level | Exact proposed deps | Strategy / status |
|---|---|---|---|
| `def-em-electrostatic-regime` | definition / 4 | `post-em-vacuum-maxwell` | Explicit type/domain/convention definition; conditional-design |
| `pthm-em-electrostatic-potential` | physical-theorem / 5 | `def-em-electrostatic-regime`, `thm-poincare-lemma-for-star-shaped-domains`, `def-laplacian-of-a-c2-function` | Published scalar Poincare plus div E=ρ/ε0; conditional-design |
| `pthm-em-coulomb-solution` | physical-theorem / 6 | `pthm-em-electrostatic-potential`, `def-em-weak-sources`, `thm-minus-laplacian-of-the-fundamental-solution-is-dirac`, `thm-newtonian-potential-solves-poisson-distributionally` | Published Newtonian distribution theorem; smooth upgrade separately audited; point kernel/excision; conditional-design |
| `pthm-em-electrostatic-work` | physical-theorem / 6 | `pthm-em-electrostatic-potential`, `post-em-lorentz-coupling`, `thm-gradient-theorem-for-line-integrals` | Gradient theorem plus external test-charge work assumption; conditional-design |
| `pthm-em-electrostatic-field-energy` | physical-theorem / 7 | `pthm-em-coulomb-solution`, `pthm-em-electrostatic-work`, `cor-first-green-identity-on-a-bounded-c-one-domain`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-dominated-convergence` | Green identity, symmetric kernel, finite integrals and vanishing infinity term; conditional-design |
| `pthm-em-point-self-energy-divergence` | physical-theorem / 8 | `pthm-em-coulomb-solution`, `pthm-em-electrostatic-field-energy` | Integrate r^-4 density with r² dr near pole; no particle mass conclusion; conditional-design |
| `ex-em-uniform-ball-coulomb` | example / 8 | `pthm-em-coulomb-solution`, `pthm-em-electrostatic-field-energy` | Direct substitution and declared assumptions; conditional-design |
| `ex-em-infinite-line-normalization` | example / 6 | `pthm-em-electrostatic-potential` | Direct substitution and declared assumptions; conditional-design |

### em-electrostatic-boundaries-and-conductors / em-electrostatic-boundaries-and-conductors-examples

Exact current inventories: A=6, B=3; cap=100 each. Remaining expansion budget A=94, B=97. Split before exceeding cap; substantial open proof expansion is not already included in these counts.

| ID | Kind / level | Exact proposed deps | Strategy / status |
|---|---|---|---|
| `post-em-electrostatic-conductor-model` | postulate / 5 | `def-em-electrostatic-regime` | Declare E=0 connected interior, equilibrium, surface charge model; not all-time perfect-conductor dynamics; conditional-design |
| `pthm-em-conductor-surface-charge` | physical-theorem / 6 | `post-em-electrostatic-conductor-model`, `pthm-em-fixed-vacuum-jumps` | Direct substitution and declared assumptions; conditional-design |
| `pthm-em-electrostatic-bvp-uniqueness` | physical-theorem / 6 | `pthm-em-electrostatic-potential`, `cor-classical-dirichlet-and-poisson-problems-are-unique`, `cor-neumann-solutions-are-unique-modulo-componentwise-constants`, `lem-neumann-compatibility-from-the-divergence-theorem` | Published Green/uniqueness with bounded C1 domain and ACω; no existence inference; conditional-design |
| `pthm-em-electrostatic-bvp-existence` | physical-theorem / 7 | `pthm-em-electrostatic-bvp-uniqueness`, `thm-em-elliptic-boundary-existence` | M12 variational/traces/regularity inventory; exact hypotheses required; OPEN-M12 |
| `pthm-em-image-method-certificate` | physical-theorem / 7 | `pthm-em-coulomb-solution`, `pthm-em-electrostatic-bvp-uniqueness` | Check harmonicity outside mirror point, zero plane trace, source pole and exterior decay uniqueness; conditional-design |
| `pthm-em-capacitance-energy` | physical-theorem / 8 | `pthm-em-conductor-surface-charge`, `pthm-em-electrostatic-field-energy` | Derive Q=CV by scaled BVP; C>0 from energy for nonzero solution; U=QV/2; conditional-design |
| `ex-em-grounded-plane-image-force` | example / 8 | `pthm-em-image-method-certificate`, `post-em-lorentz-coupling` | Direct substitution and declared assumptions; conditional-design |
| `ex-em-parallel-plate-capacitor` | example / 9 | `pthm-em-capacitance-energy` | Direct substitution and declared assumptions; conditional-design |
| `ex-em-neumann-data-failure` | example / 7 | `pthm-em-electrostatic-bvp-uniqueness` | Direct substitution and declared assumptions; conditional-design |

### em-electrostatic-multipoles / em-electrostatic-multipoles-examples

Exact current inventories: A=5, B=2; cap=100 each. Remaining expansion budget A=95, B=98. Split before exceeding cap; substantial open proof expansion is not already included in these counts.

| ID | Kind / level | Exact proposed deps | Strategy / status |
|---|---|---|---|
| `def-em-electric-moments` | definition / 2 | `def-em-sources` | Explicit type/domain/convention definition; conditional-design |
| `pthm-em-electric-dipole-expansion` | physical-theorem / 7 | `pthm-em-coulomb-solution`, `def-em-electric-moments`, `lem-em-coulomb-dipole-remainder` | M06 Taylor-with-integral-remainder, r≥2a; conditional-design |
| `pthm-em-moment-origin-change` | physical-theorem / 3 | `def-em-electric-moments` | Integrate (x-a)ρ, obtain p-Q a; conditional-design |
| `pthm-em-electric-general-multipoles` | physical-theorem / 8 | `pthm-em-electric-dipole-expansion`, `thm-em-spherical-multipole-basis` | M11 basis/completeness/convergence/derivative control; OPEN-M11 |
| `pthm-em-electric-dipole-torque` | physical-theorem / 4 | `def-em-electric-moments`, `post-em-lorentz-coupling` | Two-charge or distributed expansion with size/error hypothesis; conditional-design |
| `ex-em-two-charge-dipole` | example / 8 | `pthm-em-electric-dipole-expansion` | Direct substitution and declared assumptions; conditional-design |
| `ex-em-quadrupole-symmetry` | example / 3 | `def-em-electric-moments` | Direct substitution and declared assumptions; conditional-design |

### em-magnetostatics-in-vacuum / em-magnetostatics-in-vacuum-examples

Exact current inventories: A=6, B=3; cap=100 each. Remaining expansion budget A=94, B=97. Split before exceeding cap; substantial open proof expansion is not already included in these counts.

| ID | Kind / level | Exact proposed deps | Strategy / status |
|---|---|---|---|
| `def-em-steady-current-regime` | definition / 5 | `pthm-em-charge-continuity` | Explicit type/domain/convention definition; conditional-design |
| `pthm-em-magnetostatic-vector-potential` | physical-theorem / 6 | `def-em-steady-current-regime`, `post-em-vacuum-maxwell`, `thm-newtonian-potential-solves-poisson-distributionally` | Componentwise kernel theorem; integrate div J by parts; joint regularity not assumed; conditional-design |
| `pthm-em-biot-savart` | physical-theorem / 7 | `pthm-em-magnetostatic-vector-potential`, `thm-differentiation-under-the-integral-sign` | Differentiate Newtonian kernel with adequate integrability or off-support scope; conditional-design |
| `def-em-magnetic-moment` | definition / 6 | `def-em-steady-current-regime` | Explicit type/domain/convention definition; conditional-design |
| `pthm-em-magnetic-dipole-field` | physical-theorem / 8 | `pthm-em-biot-savart`, `def-em-magnetic-moment`, `lem-em-coulomb-dipole-remainder` | M06 kernel derivative extension and continuity-integral identities; remainder remains explicit; OPEN-derivative-remainder |
| `pthm-em-magnetic-loop-force-torque` | physical-theorem / 8 | `pthm-em-biot-savart`, `post-em-lorentz-coupling`, `def-em-magnetic-moment` | Integrate Lorentz density; small-loop multipole approximation; external fields; conditional-design |
| `ex-em-circular-loop-axis-field` | example / 8 | `pthm-em-biot-savart` | Specify a line-current distribution/finite-radius limit and prove its Biot–Savart convergence away from support before axis integration; OPEN-thin-current-limit |
| `ex-em-infinite-wire-and-solenoid` | example / 6 | `pthm-em-integral-maxwell`, `def-em-steady-current-regime` | Direct substitution and declared assumptions; conditional-design |
| `ex-em-wire-force-coupling` | example / 9 | `pthm-em-magnetic-loop-force-torque` | Direct substitution and declared assumptions; conditional-design |

### em-material-response / em-material-response-examples

Exact current inventories: A=7, B=3; cap=100 each. Remaining expansion budget A=93, B=97. Split before exceeding cap; substantial open proof expansion is not already included in these counts.

| ID | Kind / level | Exact proposed deps | Strategy / status |
|---|---|---|---|
| `post-em-coarse-graining` | postulate / 3 | `def-em-fields`, `def-em-sources` | Normalized spatial kernel, averaging length, slow variation and boundary handling; not vacuum implication; conditional-design |
| `def-em-polarization-magnetization` | definition / 4 | `post-em-coarse-graining` | Explicit type/domain/convention definition; conditional-design |
| `pthm-em-macroscopic-maxwell` | physical-theorem / 5 | `def-em-polarization-magnetization`, `post-em-vacuum-maxwell` | Insert ρb=-divP and Jb=dtP+curlM; commutation under stated regularity; conditional-design |
| `post-em-material-closure` | postulate / 6 | `pthm-em-macroscopic-maxwell` | Declared material regime, positive ε,μ, σc≥0; tensor/causal alternatives are separate; conditional-design |
| `pthm-em-material-stationary-jumps` | physical-theorem / 6 | `pthm-em-macroscopic-maxwell`, `def-em-weak-sources`, `lem-em-interface-derivatives` | M03 with free σ,K, fixed interface, no dipole/magnetic sheet; conditional-design |
| `pthm-em-restricted-material-energy` | physical-theorem / 7 | `post-em-material-closure` | u=(E·D+B·H)/2 only constant symmetric nondispersive response; loss J·E; general dispersive model deferred; conditional-design |
| `pthm-em-causal-dispersive-response` | physical-theorem / 7 | `post-em-material-closure`, `thm-em-causal-dispersive-response` | M14 Fourier/Laplace/analyticity/subtraction/passivity hypotheses; OPEN-M14 |
| `ex-em-dielectric-interface-example` | example / 7 | `pthm-em-material-stationary-jumps` | Direct substitution and declared assumptions; conditional-design |
| `ex-em-dielectric-sphere-example` | example / 7 | `post-em-material-closure`, `pthm-em-material-stationary-jumps` | Direct substitution and declared assumptions; conditional-design |
| `ex-em-constitutive-unit-counterexample` | example / 7 | `post-em-material-closure` | Direct substitution and declared assumptions; conditional-design |

### em-induction-and-circuit-limits / em-induction-and-circuit-limits-examples

Exact current inventories: A=6, B=3; cap=100 each. Remaining expansion budget A=94, B=97. Split before exceeding cap; substantial open proof expansion is not already included in these counts.

| ID | Kind / level | Exact proposed deps | Strategy / status |
|---|---|---|---|
| `def-em-moving-circuit-geometry` | definition / 1 | `def-em-lab-geometry`, `def-em-moving-patch` | Explicit type/domain/convention definition; conditional-design |
| `pthm-em-motional-emf` | physical-theorem / 5 | `def-em-moving-circuit-geometry`, `post-em-lorentz-coupling`, `pthm-em-integral-maxwell`, `lem-em-moving-flux` | M02 transport, smooth no-source-crossing hypotheses; conditional-design |
| `post-em-circuit-approximation` | postulate / 7 | `post-em-material-closure`, `def-em-steady-current-regime` | Size≪cT, specified conductors, negligible radiation/leakage, ideal terminals; conditional-design |
| `pthm-em-inductance-reciprocity` | physical-theorem / 8 | `pthm-em-magnetostatic-vector-potential`, `post-em-circuit-approximation` | Conserved current profiles and symmetric kernel, finite self-energy; thin-wire self-inductance needs radius; conditional-design |
| `pthm-em-inductor-energy` | physical-theorem / 9 | `pthm-em-inductance-reciprocity`, `pthm-em-motional-emf` | Integrate terminal power with fixed L and restricted geometry; conditional-design |
| `pthm-em-rl-lc-dynamics` | physical-theorem / 10 | `pthm-em-inductor-energy`, `pthm-em-capacitance-energy`, `post-em-circuit-approximation`, `thm-first-order-linear-ode-integrating-factor` | Solve explicit linear ODE and check circuit/model signs; no general network completeness; conditional-design |
| `texp-em-sliding-bar-emf` | thought-experiment / 6 | `pthm-em-motional-emf`, `post-em-lorentz-coupling` | Complete idealized geometry deduction; no reported measurement; conditional-design |
| `ex-em-rl-time-response` | example / 11 | `pthm-em-rl-lc-dynamics` | Direct substitution and declared assumptions; conditional-design |
| `ex-em-transformer-idealization` | example / 9 | `pthm-em-inductance-reciprocity` | Direct substitution and declared assumptions; conditional-design |

### em-potentials-and-gauge / em-potentials-and-gauge-examples

Exact current inventories: A=5, B=3; cap=100 each. Remaining expansion budget A=95, B=97. Split before exceeding cap; substantial open proof expansion is not already included in these counts.

| ID | Kind / level | Exact proposed deps | Strategy / status |
|---|---|---|---|
| `pthm-em-spacetime-potentials` | physical-theorem / 4 | `post-em-vacuum-maxwell`, `lem-em-joint-smooth-potentials` | M05 joint-smooth radial Poincare construction; conditional-design |
| `def-em-gauge-transformation` | definition / 5 | `pthm-em-spacetime-potentials` | Explicit type/domain/convention definition; conditional-design |
| `pthm-em-gauge-invariance` | physical-theorem / 6 | `def-em-gauge-transformation`, `thm-the-curl-of-a-gradient-vanishes`, `thm-clairaut-schwarz-mixed-partials` | Curl gradient zero and commuting mixed derivatives; conditional-design |
| `pthm-em-lorenz-gauge-wave-form` | physical-theorem / 7 | `pthm-em-spacetime-potentials`, `pthm-em-gauge-invariance` | Direct Maxwell substitution; G′=G-Wχ; require Wχ=G for fixing; conditional-design |
| `pthm-em-gauge-reachability` | physical-theorem / 8 | `pthm-em-lorenz-gauge-wave-form`, `thm-em-wave-cauchy-kirchhoff`, `thm-em-elliptic-boundary-existence` | M09 wave solvability or M12 elliptic for Coulomb; compatibility and residual data; OPEN-M09-M12 |
| `ex-em-topological-potential-obstructions` | example / 5 | `pthm-em-spacetime-potentials` | Direct substitution and declared assumptions; conditional-design |
| `ex-em-pure-gauge-fields` | example / 7 | `pthm-em-gauge-invariance` | Direct substitution and declared assumptions; conditional-design |
| `ex-em-residual-lorenz-example` | example / 8 | `pthm-em-lorenz-gauge-wave-form` | Direct substitution and declared assumptions; conditional-design |

### em-energy-momentum-and-angular-balance / em-energy-momentum-and-angular-balance-examples

Exact current inventories: A=6, B=1; cap=100 each. Remaining expansion budget A=94, B=99. Split before exceeding cap; substantial open proof expansion is not already included in these counts.

| ID | Kind / level | Exact proposed deps | Strategy / status |
|---|---|---|---|
| `def-em-vacuum-energy-flux` | definition / 3 | `def-em-fields` | Explicit type/domain/convention definition; conditional-design |
| `pthm-em-poynting-balance` | physical-theorem / 4 | `def-em-vacuum-energy-flux`, `post-em-vacuum-maxwell`, `lem-the-divergence-and-curl-of-a-cross-product`, `lem-em-parameter-integrals`, `thm-divergence-theorem-for-bounded-piecewise-c-one-domains` | Dot equations, cross-product divergence identity, M01 and divergence theorem; conditional-design |
| `def-em-vacuum-stress-momentum` | definition / 4 | `def-em-vacuum-energy-flux` | Explicit type/domain/convention definition; conditional-design |
| `pthm-em-momentum-balance` | physical-theorem / 5 | `def-em-vacuum-stress-momentum`, `post-em-vacuum-maxwell`, `post-em-lorentz-coupling`, `lem-em-quadratic-stress-identity` | M04 quadratic identity; explicit spatial tensor divergence convention; conditional-design |
| `pthm-em-angular-balance` | physical-theorem / 6 | `pthm-em-momentum-balance`, `lem-em-quadratic-stress-identity` | M04 symmetric stress cancellation; finite integrals/boundary flux; conditional-design |
| `pthm-em-coupled-total-conservation` | physical-theorem / 7 | `pthm-em-poynting-balance`, `pthm-em-momentum-balance`, `pthm-em-angular-balance`, `post-em-lorentz-coupling` | Explicit extra mechanical continuity, matter stress/work and vanishing/included boundary terms; conditional-design |
| `ex-em-vacuum-energy-flow-example` | example / 5 | `pthm-em-poynting-balance` | Direct substitution and declared assumptions; conditional-design |

### em-vacuum-waves-and-polarization / em-vacuum-waves-and-polarization-examples

Exact current inventories: A=7, B=4; cap=100 each. Remaining expansion budget A=93, B=96. Split before exceeding cap; substantial open proof expansion is not already included in these counts.

| ID | Kind / level | Exact proposed deps | Strategy / status |
|---|---|---|---|
| `pthm-em-vacuum-wave-equation` | physical-theorem / 4 | `post-em-vacuum-maxwell`, `cor-the-curl-of-a-curl-of-a-c2-field` | C2 curl-curl identity; retain div constraints; conditional-design |
| `def-em-plane-wave-definition` | definition / 3 | `def-em-fields`, `def-em-complex-plane-wave` | Explicit type/domain/convention definition; conditional-design |
| `pthm-em-plane-wave-maxwell` | physical-theorem / 5 | `def-em-plane-wave-definition`, `pthm-em-vacuum-wave-equation` | Substitution gives four amplitude equations, nonzero k,ω and field; conditional-design |
| `def-em-polarization-definition` | definition / 6 | `pthm-em-plane-wave-maxwell` | Explicit type/domain/convention definition; conditional-design |
| `pthm-em-wave-energy-average` | physical-theorem / 6 | `pthm-em-plane-wave-maxwell`, `pthm-em-poynting-balance`, `pthm-em-momentum-balance`, `lem-em-period-average` | M07 averaging and positive vacuum energy; conditional-design |
| `pthm-em-classical-interference` | physical-theorem / 7 | `pthm-em-linear-superposition`, `pthm-em-wave-energy-average` | Expand real averaged square; equal frequency/preparation and phase stated; conditional-design |
| `pthm-em-general-wave-ivp` | physical-theorem / 6 | `pthm-em-gauss-constraint-propagation`, `pthm-em-vacuum-wave-equation`, `thm-em-wave-cauchy-kirchhoff` | M09 Cauchy existence/finite propagation/energy uniqueness; OPEN-M09 |
| `ex-em-polarization-examples` | example / 7 | `def-em-polarization-definition` | Direct substitution and declared assumptions; conditional-design |
| `ex-em-two-beam-fringes` | example / 8 | `pthm-em-classical-interference` | Direct substitution and declared assumptions; conditional-design |
| `ex-em-plane-wave-infinite-energy` | example / 7 | `pthm-em-wave-energy-average` | Direct substitution and declared assumptions; conditional-design |
| `texp-em-radiation-pressure-example` | thought-experiment / 7 | `pthm-em-momentum-balance`, `pthm-em-wave-energy-average` | Use incident/reflected flux after wave suppliers; keep in later B if needed; conditional-design |

### em-wave-interfaces-and-conductors / em-wave-interfaces-and-conductors-examples

Exact current inventories: A=5, B=3; cap=100 each. Remaining expansion budget A=95, B=97. Split before exceeding cap; substantial open proof expansion is not already included in these counts.

| ID | Kind / level | Exact proposed deps | Strategy / status |
|---|---|---|---|
| `def-em-medium-wave-parameters` | definition / 7 | `post-em-material-closure` | Explicit type/domain/convention definition; conditional-design |
| `pthm-em-phase-matching` | physical-theorem / 8 | `def-em-medium-wave-parameters`, `pthm-em-plane-wave-maxwell`, `pthm-em-material-stationary-jumps` | Boundary Fourier phase equality for all tangential x,t; positive media assumptions; conditional-design |
| `pthm-em-normal-fresnel` | physical-theorem / 9 | `pthm-em-phase-matching`, `pthm-em-wave-energy-average`, `lem-em-interface-wave-linear-system` | M07 two-equation system with Z>0; conditional-design |
| `pthm-em-oblique-fresnel` | physical-theorem / 9 | `pthm-em-phase-matching`, `pthm-em-wave-energy-average` | Explicit oblique polarization bases, evanescent branch and boundary linear system; conditional-design |
| `pthm-em-conducting-skin-depth` | physical-theorem / 8 | `def-em-medium-wave-parameters`, `post-em-material-closure` | Complex k²=μεω²+iμσω with e^-iωt, select Imk>0, approximation σ≫εω; conditional-design |
| `ex-em-brewster-angle-example` | example / 10 | `pthm-em-oblique-fresnel` | Direct substitution and declared assumptions; conditional-design |
| `ex-em-evanescent-flux-example` | example / 10 | `pthm-em-oblique-fresnel` | Direct substitution and declared assumptions; conditional-design |
| `ex-em-skin-depth-approximation-example` | example / 9 | `pthm-em-conducting-skin-depth` | Direct substitution and declared assumptions; conditional-design |

### em-waveguides-and-cavities / em-waveguides-and-cavities-examples

Exact current inventories: A=4, B=3; cap=100 each. Remaining expansion budget A=96, B=97. Split before exceeding cap; substantial open proof expansion is not already included in these counts.

| ID | Kind / level | Exact proposed deps | Strategy / status |
|---|---|---|---|
| `def-em-guide-cavity-geometry` | definition / 7 | `def-em-fields`, `pthm-em-material-stationary-jumps` | Explicit type/domain/convention definition; conditional-design |
| `pthm-em-rectangular-mode-candidates` | physical-theorem / 8 | `def-em-guide-cavity-geometry`, `pthm-em-vacuum-wave-equation` | Differentiate explicit sin/cos modes, enforce PEC traces and index exclusions; conditional-design |
| `pthm-em-guide-dispersion-energy` | physical-theorem / 9 | `pthm-em-rectangular-mode-candidates`, `pthm-em-wave-energy-average` | ω²/c²=kz²+kc², stated lossless branch; average finite cross-section flux; conditional-design |
| `pthm-em-guide-completeness` | physical-theorem / 9 | `pthm-em-rectangular-mode-candidates`, `thm-em-waveguide-spectral-completeness` | M13 spectral theorem/H(curl) boundary theory; not individual mode verification; OPEN-M13 |
| `ex-em-te-ten-example` | example / 9 | `pthm-em-rectangular-mode-candidates` | Direct substitution and declared assumptions; conditional-design |
| `ex-em-rectangular-cavity-example` | example / 9 | `pthm-em-rectangular-mode-candidates` | Direct substitution and declared assumptions; conditional-design |
| `ex-em-tem-topology-example` | example / 8 | `def-em-guide-cavity-geometry`, `pthm-em-electrostatic-bvp-uniqueness` | Direct substitution and declared assumptions; conditional-design |

### em-retarded-fields-and-radiation / em-retarded-fields-and-radiation-examples

Exact current inventories: A=7, B=3; cap=100 each. Remaining expansion budget A=93, B=97. Split before exceeding cap; substantial open proof expansion is not already included in these counts.

| ID | Kind / level | Exact proposed deps | Strategy / status |
|---|---|---|---|
| `post-em-radiation-selection` | postulate / 8 | `pthm-em-lorenz-gauge-wave-form` | Extra temporal data/physical solution selection; Maxwell admits advanced and free fields; conditional-design |
| `pthm-em-retarded-potentials` | physical-theorem / 9 | `post-em-radiation-selection`, `pthm-em-charge-continuity`, `thm-em-wave-cauchy-kirchhoff` | M09 causal Green verification, boundary/history integrability and Lorenz compatibility; OPEN-M09 |
| `pthm-em-dipole-radiation` | physical-theorem / 10 | `pthm-em-retarded-potentials`, `def-em-electric-moments`, `pthm-em-poynting-balance`, `thm-em-radiation-asymptotic-flux` | M15 uniform asymptotics, angular integral, long-wavelength source-size regime; OPEN-M15 |
| `def-em-retarded-point-geometry` | definition / 9 | `def-em-lab-geometry`, `post-em-radiation-selection` | Explicit past history/light-cone intersection; uniform subluminality sufficient with history limits; conditional-design |
| `pthm-em-lienard-wiechert` | physical-theorem / 10 | `def-em-retarded-point-geometry`, `pthm-em-retarded-potentials`, `thm-em-retarded-root-and-fields` | M10 implicit root derivatives and delta Jacobian 1-n·β; no self-force; OPEN-M10 |
| `pthm-em-larmor-nonrelativistic` | physical-theorem / 11 | `pthm-em-dipole-radiation`, `def-em-retarded-point-geometry`, `thm-em-radiation-asymptotic-flux` | p=qz, source-size/long-wavelength or M10 acceleration field; approximate v≪c, no mass derivation; OPEN-M10-M15 |
| `rem-em-radiation-reaction-limits` | remark / 12 | `pthm-em-point-self-energy-divergence`, `pthm-em-larmor-nonrelativistic` | Recorded limitations; no unproved result supplies a proof; conditional-design |
| `ex-em-dipole-antenna-example` | example / 11 | `pthm-em-dipole-radiation` | Direct substitution and declared assumptions; conditional-design |
| `texp-em-classical-orbit-instability` | thought-experiment / 12 | `pthm-em-larmor-nonrelativistic`, `post-em-lorentz-coupling` | Include separate mechanical orbit/adiabatic assumptions; complete deduction cannot become observed experiment; conditional-design |
| `ex-em-no-retarded-root-example` | example / 10 | `def-em-retarded-point-geometry` | Direct substitution and declared assumptions; conditional-design |

### em-lorentz-covariant-formulation / em-lorentz-covariant-formulation-examples

Exact current inventories: A=7, B=2; cap=100 each. Remaining expansion budget A=93, B=98. Split before exceeding cap; substantial open proof expansion is not already included in these counts.

| ID | Kind / level | Exact proposed deps | Strategy / status |
|---|---|---|---|
| `post-em-minkowski-physical-model` | postulate / 2 | `def-em-lab-geometry`, `def-em-si-conventions`, `def-em-minkowski-affine-space` | Adopt geometry/observer equivalence; mathematical M08 defines it, not proof of applicability; conditional-design |
| `def-em-relativistic-worldlines-frames` | definition / 3 | `post-em-minkowski-physical-model` | Explicit type/domain/convention definition; conditional-design |
| `def-em-electromagnetic-tensor` | definition / 5 | `def-em-relativistic-worldlines-frames`, `pthm-em-spacetime-potentials` | A^μ=(φ/c,A), F^μν=∂^μA^ν-∂^νA^μ; F0i=E/c,Fij=εijkBk; conditional-design |
| `pthm-em-tensor-maxwell-equivalence` | physical-theorem / 6 | `def-em-electromagnetic-tensor`, `post-em-vacuum-maxwell` | Component check ∂μF^μν=-μ0J^ν plus lowered cyclic identity; conditional-design |
| `pthm-em-lorentz-field-transform` | physical-theorem / 7 | `pthm-em-tensor-maxwell-equivalence`, `lem-em-boost-preserves-metric` | M08 inverse/dual transformations and chain rule; explicit convention check; conditional-design |
| `pthm-em-relativistic-lorentz-force` | physical-theorem / 6 | `def-em-electromagnetic-tensor`, `post-em-lorentz-coupling`, `lem-em-antisymmetric-tensor-contraction` | m dU^μ/dτ=qF^μνUν; dτ=dt/γ; f^μ=γ(power/c,F); antisymmetry; conditional-design |
| `pthm-em-covariant-stress-energy` | physical-theorem / 8 | `pthm-em-lorentz-field-transform`, `def-em-vacuum-stress-momentum`, `pthm-em-momentum-balance` | Define symmetric tensor by component u,S,g,T and prove covariance/sign under metric convention; conditional-design |
| `ex-em-boosted-fields-example` | example / 8 | `pthm-em-lorentz-field-transform` | Direct substitution and declared assumptions; conditional-design |
| `ex-em-constant-field-trajectory` | example / 7 | `pthm-em-relativistic-lorentz-force` | Direct substitution and declared assumptions; conditional-design |

### em-empirical-tests-and-scope / em-empirical-tests-and-scope-examples

Exact current inventories: A=6, B=2; cap=100 each. Remaining expansion budget A=94, B=98. Split before exceeding cap; substantial open proof expansion is not already included in these counts.

| ID | Kind / level | Exact proposed deps | Strategy / status |
|---|---|---|---|
| `def-em-experiment-record-contract` | definition / 3 | `def-em-sources`, `def-em-fields` | Define measured observables, calibration, reported dataset/uncertainty and qualified interpretation; conditional-design |
| `exp-em-inverse-square-report` | experiment / 4 | `def-em-experiment-record-contract` | Needs actual retrieved primary report; historical textbook narrative insufficient; OPEN-primary-report |
| `exp-em-induction-report` | experiment / 4 | `def-em-experiment-record-contract` | Needs apparatus/preparation/calibration/source limitations; qualitative source stays qualitative; OPEN-primary-report |
| `exp-em-wave-propagation-report` | experiment / 4 | `def-em-experiment-record-contract` | Needs actual report and reported uncertainty; no proof of Maxwell; OPEN-primary-report |
| `pthm-em-specified-model-comparison` | physical-theorem / 7 | `pthm-em-integral-maxwell`, `pthm-em-wave-energy-average`, `def-em-experiment-record-contract`, `thm-em-uncertainty-analysis` | M16 only if actual quantitative inference required; empirical premises propagate; OPEN-primary-report-M16 |
| `rem-em-classical-validity-limits` | remark / 13 | `rem-em-radiation-reaction-limits`, `post-em-material-closure` | Explicit source-backed scope limits; no ontological conclusion from classical interference; conditional-design |
| `ex-em-ideal-and-measured-fringes` | example / 8 | `pthm-em-classical-interference`, `def-em-experiment-record-contract` | Direct substitution and declared assumptions; conditional-design |
| `ex-em-apparatus-model-ambiguity` | example / 4 | `def-em-experiment-record-contract` | Direct substitution and declared assumptions; conditional-design |

### em-action-and-variational-formulation / em-action-and-variational-formulation-examples

Exact current inventories: A=5, B=2; cap=100 each. Remaining expansion budget A=95, B=98. Split before exceeding cap; substantial open proof expansion is not already included in these counts.

| ID | Kind / level | Exact proposed deps | Strategy / status |
|---|---|---|---|
| `def-em-field-action-definition` | definition / 6 | `def-em-electromagnetic-tensor`, `lem-em-compact-field-variation` | Define real functional S=∫[-F²/(4μ0)+J·A], smooth A,J, compactly supported variations; conditional-design |
| `post-em-stationary-action-model` | postulate / 7 | `def-em-field-action-definition` | Stationarity is an adopted model principle; not minimum, not uniquely forced by symmetry; conditional-design |
| `pthm-em-action-maxwell-variation` | physical-theorem / 8 | `post-em-stationary-action-model`, `lem-em-compact-field-variation` | M17 compact variation, integration by parts and fundamental lemma; homogeneous equations follow from F=dA; conditional-design |
| `pthm-em-action-gauge-source-compatibility` | physical-theorem / 7 | `def-em-field-action-definition`, `pthm-em-charge-continuity`, `def-distributional-derivative` | M17 integrate J^μ∂μχ; divergence zero; compact support; conditional-design |
| `pthm-em-particle-action-coupling` | physical-theorem / 8 | `def-em-relativistic-worldlines-frames`, `pthm-em-relativistic-lorentz-force`, `post-em-stationary-action-model` | Independent curve variation of -mc²∫dτ+q∫Aμdxμ; endpoint/regularity hypotheses; complete local curve calculation required; OPEN-curve-variation |
| `ex-em-compact-variation-example` | example / 9 | `pthm-em-action-maxwell-variation`, `pthm-em-action-gauge-source-compatibility` | Direct substitution and declared assumptions; conditional-design |
| `ex-em-stationary-not-minimum` | example / 8 | `post-em-stationary-action-model` | Direct substitution and declared assumptions; conditional-design |

### em-elementary-mathematical-prerequisites / em-elementary-mathematical-prerequisites-examples

Exact current inventories: A=13, B=1; cap=100 each. Remaining expansion budget A=87, B=99. Split before exceeding cap; substantial open proof expansion is not already included in these counts.

| ID | Kind / level | Exact proposed deps | Strategy / status |
|---|---|---|---|
| `lem-em-parameter-integrals` | lemma / 0 | `def-ck-euclidean-maps-and-diffeomorphisms`, `def-euclidean-inner-product`, `thm-algebra-of-derivatives`, `thm-chain-rule-for-total-derivatives`, `thm-differentiation-under-the-integral-sign-on-a-compact-rectangle`, `thm-heine-cantor-metric`, `thm-heine-borel-rn` | mathematical-prerequisites.md#M01; LOCAL-ARGUMENT |
| `lem-em-continuous-localization` | lemma / 0 | `def-ck-euclidean-maps-and-diffeomorphisms`, `def-euclidean-inner-product`, `thm-algebra-of-derivatives`, `thm-chain-rule-for-total-derivatives`, `lem-euclidean-balls-have-positive-finite-lebesgue-measure` | mathematical-prerequisites.md#M01; LOCAL-ARGUMENT |
| `def-em-moving-patch` | definition / 0 | `def-ck-euclidean-maps-and-diffeomorphisms`, `def-euclidean-inner-product`, `thm-algebra-of-derivatives`, `thm-chain-rule-for-total-derivatives`, `def-oriented-unit-normal-and-flux-of-a-surface-patch` | mathematical-prerequisites.md#M02; LOCAL-ARGUMENT |
| `lem-em-moving-flux` | lemma / 1 | `def-ck-euclidean-maps-and-diffeomorphisms`, `def-euclidean-inner-product`, `thm-algebra-of-derivatives`, `thm-chain-rule-for-total-derivatives`, `def-em-moving-patch`, `lem-em-parameter-integrals`, `lem-the-divergence-and-curl-of-a-cross-product`, `thm-the-classical-stokes-theorem-for-a-c2-surface-patch` | mathematical-prerequisites.md#M02; LOCAL-ARGUMENT |
| `def-em-surface-distribution` | definition / 0 | `def-ck-euclidean-maps-and-diffeomorphisms`, `def-euclidean-inner-product`, `thm-algebra-of-derivatives`, `thm-chain-rule-for-total-derivatives`, `def-distribution`, `def-test-function-space-d-of-an-open-set`, `def-oriented-unit-normal-and-flux-of-a-surface-patch` | mathematical-prerequisites.md#M03; LOCAL-ARGUMENT |
| `lem-em-interface-derivatives` | lemma / 1 | `def-ck-euclidean-maps-and-diffeomorphisms`, `def-euclidean-inner-product`, `thm-algebra-of-derivatives`, `thm-chain-rule-for-total-derivatives`, `def-em-surface-distribution`, `def-distributional-derivative`, `thm-divergence-theorem-for-bounded-piecewise-c-one-domains` | mathematical-prerequisites.md#M03; LOCAL-ARGUMENT |
| `lem-em-point-current-continuity` | lemma / 0 | `def-ck-euclidean-maps-and-diffeomorphisms`, `def-euclidean-inner-product`, `thm-algebra-of-derivatives`, `thm-chain-rule-for-total-derivatives`, `def-dirac-delta-and-its-derivatives`, `def-distributional-derivative` | mathematical-prerequisites.md#M03; LOCAL-ARGUMENT |
| `lem-em-quadratic-stress-identity` | lemma / 0 | `def-ck-euclidean-maps-and-diffeomorphisms`, `def-euclidean-inner-product`, `thm-algebra-of-derivatives`, `thm-chain-rule-for-total-derivatives`, `def-divergence-and-curl-of-a-c1-vector-field`, `def-cross-product-in-r3` | mathematical-prerequisites.md#M04; LOCAL-ARGUMENT |
| `lem-em-joint-smooth-potentials` | lemma / 1 | `def-ck-euclidean-maps-and-diffeomorphisms`, `def-euclidean-inner-product`, `thm-algebra-of-derivatives`, `thm-chain-rule-for-total-derivatives`, `lem-em-parameter-integrals`, `thm-poincare-lemma-for-star-shaped-domains`, `thm-a-divergence-free-c1-field-on-a-star-shaped-open-set-has-a-vector-potential` | mathematical-prerequisites.md#M05; LOCAL-ARGUMENT |
| `lem-em-coulomb-dipole-remainder` | lemma / 0 | `def-ck-euclidean-maps-and-diffeomorphisms`, `def-euclidean-inner-product`, `thm-algebra-of-derivatives`, `thm-chain-rule-for-total-derivatives`, `thm-decay-of-the-newtonian-potential-of-compactly-supported-data` | mathematical-prerequisites.md#M06; LOCAL-ARGUMENT |
| `def-em-complex-plane-wave` | definition / 0 | `def-ck-euclidean-maps-and-diffeomorphisms`, `def-euclidean-inner-product`, `thm-algebra-of-derivatives`, `thm-chain-rule-for-total-derivatives`, `thm-complex-exponential-is-entire-with-derivative-itself` | mathematical-prerequisites.md#M07; LOCAL-ARGUMENT |
| `lem-em-period-average` | lemma / 1 | `def-ck-euclidean-maps-and-diffeomorphisms`, `def-euclidean-inner-product`, `thm-algebra-of-derivatives`, `thm-chain-rule-for-total-derivatives`, `def-em-complex-plane-wave` | mathematical-prerequisites.md#M07; LOCAL-ARGUMENT |
| `lem-em-interface-wave-linear-system` | lemma / 2 | `def-ck-euclidean-maps-and-diffeomorphisms`, `def-euclidean-inner-product`, `thm-algebra-of-derivatives`, `thm-chain-rule-for-total-derivatives`, `lem-em-period-average` | mathematical-prerequisites.md#M07; LOCAL-ARGUMENT |
| `ex-em-elementary-mathematical-prerequisites-hypothesis-boundaries` | example / 3 | `lem-em-parameter-integrals`, `lem-em-continuous-localization`, `def-em-moving-patch`, `lem-em-moving-flux`, `def-em-surface-distribution`, `lem-em-interface-derivatives`, `lem-em-point-current-continuity`, `lem-em-quadratic-stress-identity`, `lem-em-joint-smooth-potentials`, `lem-em-coulomb-dipole-remainder`, `def-em-complex-plane-wave`, `lem-em-period-average`, `lem-em-interface-wave-linear-system` | Mathematical hypothesis example; design |

### em-minkowski-mathematical-prerequisites / em-minkowski-mathematical-prerequisites-examples

Exact current inventories: A=3, B=1; cap=100 each. Remaining expansion budget A=97, B=99. Split before exceeding cap; substantial open proof expansion is not already included in these counts.

| ID | Kind / level | Exact proposed deps | Strategy / status |
|---|---|---|---|
| `def-em-minkowski-affine-space` | definition / 0 | `def-ck-euclidean-maps-and-diffeomorphisms`, `def-euclidean-inner-product`, `thm-algebra-of-derivatives`, `thm-chain-rule-for-total-derivatives`, `def-standard-bilinear-form-on-a-coordinate-space`, `thm-change-of-basis-for-a-bilinear-form-is-congruence` | mathematical-prerequisites.md#M08; LOCAL-ARGUMENT |
| `lem-em-boost-preserves-metric` | lemma / 1 | `def-ck-euclidean-maps-and-diffeomorphisms`, `def-euclidean-inner-product`, `thm-algebra-of-derivatives`, `thm-chain-rule-for-total-derivatives`, `def-em-minkowski-affine-space` | mathematical-prerequisites.md#M08; LOCAL-ARGUMENT |
| `lem-em-antisymmetric-tensor-contraction` | lemma / 1 | `def-ck-euclidean-maps-and-diffeomorphisms`, `def-euclidean-inner-product`, `thm-algebra-of-derivatives`, `thm-chain-rule-for-total-derivatives`, `def-em-minkowski-affine-space` | mathematical-prerequisites.md#M08; LOCAL-ARGUMENT |
| `ex-em-minkowski-mathematical-prerequisites-hypothesis-boundaries` | example / 2 | `def-em-minkowski-affine-space`, `lem-em-boost-preserves-metric`, `lem-em-antisymmetric-tensor-contraction` | Mathematical hypothesis example; design |

### em-wave-equation-prerequisites / em-wave-equation-prerequisites-examples

Exact current inventories: A=2, B=1; cap=100 each. Remaining expansion budget A=98, B=99. Split before exceeding cap; substantial open proof expansion is not already included in these counts.

| ID | Kind / level | Exact proposed deps | Strategy / status |
|---|---|---|---|
| `thm-em-wave-cauchy-kirchhoff` | theorem / 1 | `def-ck-euclidean-maps-and-diffeomorphisms`, `def-euclidean-inner-product`, `thm-algebra-of-derivatives`, `thm-chain-rule-for-total-derivatives`, `lem-em-parameter-integrals`, `thm-distributional-differentiation-is-continuous-and-commutes` | mathematical-prerequisites.md#M09; OPEN |
| `thm-em-retarded-root-and-fields` | theorem / 2 | `def-ck-euclidean-maps-and-diffeomorphisms`, `def-euclidean-inner-product`, `thm-algebra-of-derivatives`, `thm-chain-rule-for-total-derivatives`, `thm-em-wave-cauchy-kirchhoff`, `thm-parametrized-implicit-function-theorem-with-higher-regularity`, `lem-em-point-current-continuity` | mathematical-prerequisites.md#M10; OPEN |
| `ex-em-wave-equation-prerequisites-hypothesis-boundaries` | example / 3 | `thm-em-wave-cauchy-kirchhoff`, `thm-em-retarded-root-and-fields` | Mathematical hypothesis example; design |

### em-boundary-and-spectral-prerequisites / em-boundary-and-spectral-prerequisites-examples

Exact current inventories: A=3, B=1; cap=100 each. Remaining expansion budget A=97, B=99. Split before exceeding cap; substantial open proof expansion is not already included in these counts.

| ID | Kind / level | Exact proposed deps | Strategy / status |
|---|---|---|---|
| `thm-em-spherical-multipole-basis` | theorem / 1 | `def-ck-euclidean-maps-and-diffeomorphisms`, `def-euclidean-inner-product`, `thm-algebra-of-derivatives`, `thm-chain-rule-for-total-derivatives`, `lem-em-coulomb-dipole-remainder`, `def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis` | mathematical-prerequisites.md#M11; OPEN |
| `thm-em-elliptic-boundary-existence` | theorem / 0 | `def-ck-euclidean-maps-and-diffeomorphisms`, `def-euclidean-inner-product`, `thm-algebra-of-derivatives`, `thm-chain-rule-for-total-derivatives`, `cor-first-green-identity-on-a-bounded-c-one-domain` | mathematical-prerequisites.md#M12; OPEN |
| `thm-em-waveguide-spectral-completeness` | theorem / 1 | `def-ck-euclidean-maps-and-diffeomorphisms`, `def-euclidean-inner-product`, `thm-algebra-of-derivatives`, `thm-chain-rule-for-total-derivatives`, `thm-em-elliptic-boundary-existence` | mathematical-prerequisites.md#M13; OPEN |
| `ex-em-boundary-and-spectral-prerequisites-hypothesis-boundaries` | example / 2 | `thm-em-spherical-multipole-basis`, `thm-em-elliptic-boundary-existence`, `thm-em-waveguide-spectral-completeness` | Mathematical hypothesis example; design |

### em-causal-response-and-radiation-prerequisites / em-causal-response-and-radiation-prerequisites-examples

Exact current inventories: A=2, B=1; cap=100 each. Remaining expansion budget A=98, B=99. Split before exceeding cap; substantial open proof expansion is not already included in these counts.

| ID | Kind / level | Exact proposed deps | Strategy / status |
|---|---|---|---|
| `thm-em-causal-dispersive-response` | theorem / 0 | `def-ck-euclidean-maps-and-diffeomorphisms`, `def-euclidean-inner-product`, `thm-algebra-of-derivatives`, `thm-chain-rule-for-total-derivatives`, `def-schwartz-space-and-its-seminorms` | mathematical-prerequisites.md#M14; OPEN |
| `thm-em-radiation-asymptotic-flux` | theorem / 2 | `def-ck-euclidean-maps-and-diffeomorphisms`, `def-euclidean-inner-product`, `thm-algebra-of-derivatives`, `thm-chain-rule-for-total-derivatives`, `thm-em-wave-cauchy-kirchhoff`, `lem-em-coulomb-dipole-remainder`, `lem-em-period-average` | mathematical-prerequisites.md#M15; OPEN |
| `ex-em-causal-response-and-radiation-prerequisites-hypothesis-boundaries` | example / 3 | `thm-em-causal-dispersive-response`, `thm-em-radiation-asymptotic-flux` | Mathematical hypothesis example; design |

### em-experiment-analysis-prerequisites / em-experiment-analysis-prerequisites-examples

Exact current inventories: A=1, B=1; cap=100 each. Remaining expansion budget A=99, B=99. Split before exceeding cap; substantial open proof expansion is not already included in these counts.

| ID | Kind / level | Exact proposed deps | Strategy / status |
|---|---|---|---|
| `thm-em-uncertainty-analysis` | theorem / 0 | `def-ck-euclidean-maps-and-diffeomorphisms`, `def-euclidean-inner-product`, `thm-algebra-of-derivatives`, `thm-chain-rule-for-total-derivatives` | mathematical-prerequisites.md#M16; OPEN |
| `ex-em-experiment-analysis-prerequisites-hypothesis-boundaries` | example / 1 | `thm-em-uncertainty-analysis` | Mathematical hypothesis example; design |

### em-variational-mathematical-prerequisites / em-variational-mathematical-prerequisites-examples

Exact current inventories: A=2, B=1; cap=100 each. Remaining expansion budget A=98, B=99. Split before exceeding cap; substantial open proof expansion is not already included in these counts.

| ID | Kind / level | Exact proposed deps | Strategy / status |
|---|---|---|---|
| `lem-em-compact-field-variation` | lemma / 2 | `def-ck-euclidean-maps-and-diffeomorphisms`, `def-euclidean-inner-product`, `thm-algebra-of-derivatives`, `thm-chain-rule-for-total-derivatives`, `lem-em-fundamental-variation-lemma`, `def-em-minkowski-affine-space`, `def-distributional-derivative` | mathematical-prerequisites.md#M17; LOCAL-ARGUMENT |
| `lem-em-fundamental-variation-lemma` | lemma / 1 | `def-ck-euclidean-maps-and-diffeomorphisms`, `def-euclidean-inner-product`, `thm-algebra-of-derivatives`, `thm-chain-rule-for-total-derivatives`, `lem-em-continuous-localization`, `lem-test-function-cutoffs-and-euclidean-localization` | mathematical-prerequisites.md#M17; LOCAL-ARGUMENT |
| `ex-em-variational-mathematical-prerequisites-hypothesis-boundaries` | example / 3 | `lem-em-compact-field-variation`, `lem-em-fundamental-variation-lemma` | Mathematical hypothesis example; design |

## Completed source integration, exact locators and dispositions

All four completed reader reports were read and integrated before this design was finalized. The reports pin complete-text retrieval and full reading; this scaffold independently inspected actual load-bearing source passages listed below. Full-course reading belongs to the named readers, not a claim that the scaffold author reread four books end to end.

| Label / complete source | Completed reading evidence | Disposition in this design |
|---|---|---|
| T: [David Tong, Electromagnetism](https://www.damtp.cam.ac.uk/user/tong/em/electro.pdf), Lent 2015 title, retrieved revision 2026-09-23 | [Tong report](../reader-tong/report.md), reading-ledger.md; all 236 PDF pages, printed pp.1–228 substantive text | Primary broad vacuum/relativity/radiation/matter treatment. Correct modern SI, gauge sign and incident-flux errors; quantum screening tail excluded. |
| F: [Richard Fitzpatrick, Classical Electromagnetism](https://farside.ph.utexas.edu/teaching/em/lectures/lectures.html), 2006 HTML course | [Fitzpatrick report](../reader-fitzpatrick/report.md), reading-ledger.md, completeness.json and visual recovery ledger; all substantive nodes1–133, truncated formula images recovered by reader | Independent broad course, circuits/material/interfaces/guides. Topology/decay/gauge/singularities supplied separately; switched isolated charge rejected; group velocity overclaim not adopted. |
| E: [Niklas Beisert, Elektrodynamik](https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf), 2024FS title, pinned September2026 PDF | [ETH report](../reader-eth/report.md), reading-ledger.json; all 176 physical PDF pages, §§0.1–14.3, official TeX checked for suspicious equations | Independent broad static/dynamic/relativistic/wave course, useful averaging and spectral/gauge caveats. Retarded-root existence repaired; generic PDE/spectral existence remains open. |
| O: [James Binney, Classical Fields](https://www-thphys.physics.ox.ac.uk/people/JamesBinney/classf.pdf), Oxford 2006–2007 | [Oxford replacement report](../reader-mit/report.md), reading-ledger.md; all 95 PDF pages, nine chapters and appendices | Complete classical-field course with strong tensor/action/energy foundations. It is not a complete survey of EM boundary/matter/radiation. Gravity, cosmology and spinor/scalar/Dirac models are out of this category's scope. |

MIT OCW8.07 handouts were rejected as incomplete supplementary teaching material after actual inspection; they count as **zero** complete-source treatments. The fourth source is Oxford, despite the retained `reader-mit` directory name. Four complete treatments are counted; coverage is not falsely multiplied by HTML nodes or chapters. Three cover most full EM branches; Oxford is used where it actually has content.

A fifth source is a metrology supplement, not a complete EM treatment: [BIPM, SI Brochure, ninth edition](https://www.bipm.org/documents/20126/41483022/SI-Brochure-9.pdf), retained PDF/text/hash record in this scaffold directory. Relevant English §2.2, printed pp.123–124 (PDF125–126), and §2.3.1 ampere, printed p.128 (PDF130), were independently read. They explicitly fix c and e, make μ0 experimentally determined, and retain exact ε0μ0=1/c2. The brochure's uncertainty quoted at adoption is historical; this design does not present it as a current measured μ0 uncertainty.

| A page | At least two independently completed treatments and precise locator | Included result family / deferred or excluded harvest |
|---|---|---|
| 01 primitives/postulates | T §§1.1–1.2 pp.2–7, §3.5 pp.64–65; F nodes28–35,41–47; E §§1.1,4.1,6.1–6.3 pp.1.1–1.5,4.1–4.6,6.1–6.5; O §§1.1–1.6 pp.1–15 | Include typed fields, charge/source definitions, Maxwell/Lorentz and SI convention IDs in inventory. Old exact μ0 and hidden mass/quantum inputs out of scope; BIPM supplement corrects units. |
| 02 integral/constraints | T §§1.1.1,2.1,3.1,4.2 pp.4,8–14,42–45,79–82; F nodes30,36,43,46; E §§6.2–6.3,8.1 pp.6.2–6.5,8.1 | Include integral Maxwell, continuity, Gauss propagation and weak/source/jump IDs. Conservation as unique derivation of Maxwell is rejected. Source pointwise delta is replaced by M03. |
| 03 electrostatics | T §§2.1–2.3 pp.8–29; F nodes28–31,56; E §§1.1–1.4 pp.1.1–1.13 | Include Coulomb/Poisson/work/energy/self-energy. General self-force and mass derivation excluded. Classical upgrade inside rough sources remains mathematical obligation. |
| 04 conductor/BVP | T §2.4 pp.30–38; F nodes58–64; E §§2.1–2.4 pp.2.1–2.14 | Include equilibrium conductor, uniqueness/compatibility, specific images/capacitance. Existence M12 open. Capacitance matrices, Kelvin transforms and conformal solutions deferred to `em-advanced-electrostatic-boundary-methods`; no unproved existence premise. |
| 05 multipoles | T §§2.2.2–2.2.3 pp.19–23; E §§3.1–3.6 pp.3.1–3.14; F node66 for separation context | Include compact moment/dipole/error/origin-change IDs. All-order harmonic basis M11 open. STF/group-representation machinery deferred to the same A page only after its exact mathematical suppliers, or a split `em-harmonic-boundary-methods`. |
| 06 magnetostatics | T §§3.1–3.4 pp.42–61; F nodes32–40; E §§4.1–4.4 pp.4.1–4.10 | Include conserved compact J/potential/Biot–Savart/moment/loop force. Derivative remainder open. Intrinsic spin/quantum moments excluded; linking-number formalism deferred `em-topological-field-configurations`. |
| 07 materials | T §§7.1–7.3 pp.172–185, §§7.5–7.6 pp.193–211; F nodes69–78,99–103; E §§5.1–5.4,12.1 pp.5.1–5.7,12.1–12.2 | Include averaging/P,M,D,H/bound sources/restricted closure/interface/energy. Causal dispersion M14 open; hysteresis discussed as model limitation. Drude/Lorentz oscillator/plasma/Hall/Faraday rotation deferred `em-classical-material-models`; quantum screening §§7.7.3–7.7.5 out of scope. |
| 08 induction/circuits | T §4.1 pp.67–77; F nodes43,79–86; E §§6.2,7.1–7.4 pp.6.2–6.3,7.1–7.11 | Include transport emf, approximation premises, flux linkage and linear RL/LC. General graph networks, transmission-line matching and RLC phasor synthesis deferred `em-circuit-and-transmission-line-models`. Finite-radius self-inductance cannot be replaced by divergent zero-radius integral. |
| 09 potentials/gauge | T §§3.2.2,5.3.1,6.1 pp.48–49,105–106,134–135; F nodes38,44–47,118; E §6.4 pp.6.5–6.7; O §1.5–1.6 pp.11–15, Eqs1.39–1.40,1.54–1.57 | Include local/joint potentials and gauge equivalence/wave equations; reachability open. Retain residual homogeneous χ, repair Tong sign. Arbitrary global Helmholtz reconstruction not adopted without decay/topology. |
| 10 conservation | T §4.4 pp.92–94 and §5.6 pp.127–133; F nodes89–91; E §§8.2–8.3 pp.8.1–8.4; O §1.4 pp.8–10, §3.8 pp.34–36 | Include vector energy/momentum/angular balance and conditional total conservation. Covariant completion belongs15. Photon argument is excluded from classical derivation; general material momentum allocation deferred `em-material-energy-and-momentum-models`. |
| 11 vacuum waves | T §§4.3.1–4.3.3 pp.84–90; F node48; E §§10.1–10.5 pp.10.1–10.12; O §1.4 plane-wave example p.9 | Include constrained plane-wave/polarization/phasor/interference IDs; IVP M09 open. General Fourier wave packets need inspected Fourier/Cauchy suppliers. One-direction plane pulse is not all 3D solutions. |
| 12 interfaces/conductors | T §§7.4–7.6 pp.185–211; F nodes98,102–104; E §§12.2,13.1 pp.12.3–12.7,13.1–13.2 | Include phase matching/Fresnel/TE–TM/TIR/skin-depth with branch/regime. General anisotropic, dispersive active media and universal signal/group velocity claims excluded from simple theorem. |
| 13 guides/cavities | F node105; E §13.2–13.3 pp.13.3–13.10 | Include explicit rectangular candidate modes, cutoff/dispersion and B examples. Completeness M13 open; circular/Bessel/coax/TEM count and open-cross-section spectrum deferred `em-guide-spectral-and-transmission-models`. Repair ETH complex conjugation and TE Bessel stationary-root error before using them. T/O do not supply a complete guide treatment; no credit assigned. |
| 14 retarded/radiation | T §§6.1–6.2,6.4 pp.134–151,157–171; F nodes49–52,94–95 and relativistic chapter nodes128–133; E §§11.1–11.5 pp.11.1–11.21 | Include causal selection/retarded/root/dipole/Larmor/LW proposals with M09,M10,M15 open labels. Magnetic/quadrupole/relativistic beaming/cyclotron/synchrotron extensions deferred `em-radiation-multipoles-and-relativistic-emission`; self-force limitations deferred `em-finite-charge-and-radiation-reaction-models`. Switched isolated charge with J=0 is invalid and excluded. |
| 15 covariant Maxwell | T §§5.1–5.6 pp.95–133; F nodes106–127; E §§9.1–9.4 pp.9.1–9.13; O §§1.1–1.6 pp.1–15 | Include explicit Minkowski frames/timelike/null curves/F/J/boosts/force/stress IDs. Use one (-+++) convention and verified γ factors; arbitrary coordinate/curved spacetime deferred or out of flat EM scope. |
| 16 empirical scope | T history pp.39–40,65–66,77–84; F nodes28,32,33,43; E intro and historical references; O gravity observations are not EM data | Include record-contract and scope distinctions. All actual experiment proposals OPEN, with no completed primary report. Secondary narratives have disposition **deferred pending source retrieval**, not empirical proof. The two-source rule supports context only and cannot manufacture two primary experimental accounts. |
| 17 action alternative | O §§3.1–3.2,3.6–3.8 pp.22–36, Eqs3.29–3.36; T §5.5 pp.119–127 | Include compact field action/variation/gauge-source IDs with M17, alternative stationarity postulate. Particle-curve variation remains OPEN; generic Noether gauge treatment deferred `em-action-symmetry-and-noether-extensions`. Scalar/Dirac/spinor/gravity models from O are out of scope. |

Each family’s included disposition refers to the exact proposed IDs in the item inventory, rather than implying that every source equation is accepted verbatim. Deferred destinations are named prospective A/B pairs, not published pages, approved plan entries or logical prerequisites of the core. No harvested family disappears merely because it is analytically hard.

### Independent inspection of actual source arguments

The scaffold author independently read T actual §4.4 pp.92–94 in the retained text, including the full dot/cross Poynting argument and time averaging; and §6.1 pp.134–138 with the gauge equation, Helmholtz Green normalization and advanced alternative. This confirmed the need to repair the gauge sign and add analytic/temporal assumptions. E actual printed pp.6.7 (PDF75),8.1–8.2 (PDF87–88),11.15–11.16 (PDF135–136) were read, confirming residual Lorenz gauge, local energy derivation and the unsupported global retarded-root assertion. O actual printed pp.11–12 (PDF12–13) and pp.32–33 (PDF33–34) were read from retained OCR with its known symbol limitations; the reader's visual verification confirms the γ issue. These arguments, plus independent coordinate calculations here, determine the tensor/force/gauge choices. F actual node91 momentum derivation was inspected, but its long equations have truncated ALT: its reader's visual recovery and T/E/local tensor calculation supply the missing formulas; the scaffold author does not claim to have visually reread all recovered Fitzpatrick images.

### Source-retrieval obligations for actual experiments

`exp-em-inverse-square-report`: candidate Williams–Faller–Hill laboratory Coulomb-law/photon-mass null-test report (1971) or a fully retrievable later primary replication; retrieve the actual full report, verify exact title/publication, apparatus circuit/geometry, measured null observable, calibration/systematic uncertainty and competing model parameter before authoring. No numerical bound is copied here.

`exp-em-induction-report`: candidate Faraday, *Experimental Researches in Electricity*, first series (1832), or a modern full experimental induction report with calibration. Read actual procedure and observations; the historical source may justify only qualitative findings and must not be assigned invented sample sizes/error bars.

`exp-em-wave-propagation-report`: candidate Hertz's original wave-reflection/interference reports collected in *Electric Waves*, or a modern quantitative propagation/dispersion report. Verify actual preparation, detector response, wavelength/distance conditions, finite resolution and reported uncertainty. A historical qualitative agreement remains qualitative; modern statistical procedure requires M16's exact model.

These names are retrieval strategies, not citation/read receipts or approved empirical claims. Until a primary report is completed, the corresponding item remains OPEN. No datasets, p-values, certainty or independence are invented.

### Deferred extension inventory and cap planning

The core 17 pairs have exact current inventories in the JSON. Further source families have explicit destinations: advanced electrostatic boundary methods; harmonic boundary methods; topological configurations; classical material models; circuit/transmission-line models; material momentum; radiation multipoles/relativistic emission; finite-charge/self-force; action/Noether extensions. Their first task is a separate exact mathematical/physical closure design, not a forward proof edge into this core. Scalar diffraction (E ch14, F wave discussion) is deferred to `em-vector-to-scalar-diffraction-limits`: A must define vector boundary/scattering problem, outgoing Helmholtz uniqueness, consistent traces, scalar approximation, Kirchhoff aperture assumptions, Fraunhofer/Fresnel error scale ka²/R and stationary-phase mathematics before its B slit/aperture/Poisson-spot predictions. Thomson/Rayleigh scattering (T §6.3 pp.154–157, F nodes96–97, E §12.3 pp.12.8–12.11) is deferred to `em-classical-scattering-models`: A must first supply oscillator/mechanical polarizability, incident Poynting flux, dipole power, differential/total cross-section and small-particle/weak-scattering approximation; repair T incident c factor. Those calculations are predictions, not actual measured cross-section reports.

No mathematical prerequisite page may hide physical postulates. At most100 items per A or B page is retained; counts of current composite OPEN results are not an estimate of their fully expanded closure. The reserved capacity listed by page must be checked against actual contracts, and extra A/B prerequisite pairs introduced if expansion exceeds it. A future production run requires owner/engine planning and all relevant open proofs/source reviews; this document performs neither.
