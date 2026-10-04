# Exact physical definition and postulate contracts

This registry replaces name-only inventory definitions. Geometry is SR S0–S4,
read in `../../relativity/scaffold/sr-supplier-proofs.md` (relative from this
scaffold: `../../relativity` is the sibling framework). The actual correct
relative link from this directory is `../../relativity/scaffold/sr-supplier-proofs.md`.
All listed physical definitions are model choices or mathematical constructions,
not observational conclusions. Units and sign conventions are those of the
canonical scaffold and completed arguments C1; c>0, μ0>0, ε0=1/(μ0c²).

- `def-em-lab-geometry`: restrict an oriented SR inertial affine chart to
  U={x⁰=ct:t∈I,x∈Ω}, Ω⊂R³ open, I⊂R open interval. Its constant future
  unit time vector is n=e0, its spatial basis e1,e2,e3 is oriented orthonormal
  for η restricted to n⊥. The frame includes origin and basis, not an observer
  congruence. The three-dimensional product notation does not assert Galilean
  covariance. Spatial derivatives hold t fixed. Moving observers are separately
  supplied by SR S4; a timelike particle requires |z'|<c.
- `def-em-sources`: q∈R (C), adopted as an invariant Lorentz scalar charge parameter; smooth branch ρ:Ω×I→R (C m⁻³),
  J:Ω×I→R³ (A m⁻²), continuous unless a derivative requires C¹. For bounded
  measurable V compact in Ω, Q(V,t)=∫Vρ dx; for an oriented finite-area
  surface S with unit normal nS, current flux is ∫S J·nS dS. In the covariant
  model j=(cρ,J) is adopted as a vector, so S3 gives its frame transformations;
  ρ is a frame volume density, not an invariant scalar rest density.
- `def-em-si-conventions`: quantities are SI; x⁰ and xi are metres, t seconds,
  q coulombs, mechanical m kilograms. E has V m⁻¹, B T, φ V, A T m,
  j A m⁻², F T, μ0 N A⁻², ε0 F m⁻¹. c and e have exact SI defining
  values stated in the canonical prose; μ0 is measured and no exact numerical
  μ0 is asserted. Charge quantization does not follow from that unit definition.
- `def-em-fields`: E,B:Ω×I→R³, jointly C¹ for classical Maxwell, C² for
  classical wave identities, smooth in the smooth existence branch. At fixed
  t these are sections of the spatial tangent bundle identified by the inertial
  basis with R³. E is polar, B axial under parity; adopted changes here are
  proper and oriented. They are observer components of C1's two-form, with
  full boosts C3. Across singular support use the weak contract instead.
- `post-em-vacuum-maxwell`: on the declared smooth region div E=ρ/ε0,
  div B=0, curl E=−B_t, curl B=μ0J+c⁻²E_t. Weak branch means these four
  identities after signed differentiation against every compact smooth test.
  This is adopted classical vacuum physics without magnetic charge, not a
  deduction from charge conservation or empirical agreement.
- `post-em-lorentz-coupling`: for smooth prescribed external fields and a
  constant-charge massive future timelike test curve, adopt qF_EM^{μν}U_ν
  as four-force and SR P=mU, m>0 externally supplied. C4 proves coordinate
  d(γmv)/dt=q(E+v×B). Smooth continuum force density is ρE+J×B and power
  J·E only under an applicable matter coupling. Singular self-fields excluded.
  Newtonian acceleration is a controlled low-speed approximation requiring its
  stated trajectory-stability assumptions, not the default exact law.
- `def-em-fixed-test-geometry`: fixed bounded finite piecewise-C¹ V with closure
  in Ω, outward normal and finite face presentation; fixed oriented regular C²
  patch r:D→Ω over a finite elementary planar region, induced normal ru×rv
  and compatible boundary orientation. Field regularity is on a neighborhood
  of the compact test geometry. This is precisely the imported divergence/
  patch-Stokes scope, retaining their ACω assumption.
- `def-em-weak-sources`: distributions are continuous linear maps on Cc∞(U)
  with its test topology, pairing bilinear. ∂μT(ψ)=−T(∂μψ). Point sources
  pair as ∫qψ(z(t),t)dt and current as ∫qz'(t)ψ(z(t),t)dt; no curve endpoints
  inside U unless their source terms are included. Stationary sheet densities
  pair as ∫I∫Sσψ dSdt and ∫I∫SKψ dSdt, K tangent. Fields may be
  locally integrable and piecewise C¹ with continuous one-sided traces.
  Arbitrary products of distributions are not part of this definition.
- `def-em-electrostatic-regime`: in a specified inertial frame ∂tE=∂tB=
  ∂tρ=∂tJ=0 on U. Pure electrostatics further chooses J=0,B=0. Static
  charged matter requires external support or an adopted equilibrium model;
  a boosted static distribution ordinarily is not static in the new frame.
- `post-em-electrostatic-conductor-model`: a conducting region with specified
  connected components has E=0 in its equilibrium interior; potential is
  constant per component, boundary charges are supplied by vacuum jumps, and
  imposed component potentials or total charges are specified as boundary data.
  This is an equilibrium idealization, not a transient finite-conductivity law.
- `def-em-electric-moments`: for ρ∈L¹ supported in B_a, Q=∫ρ, p=∫xρ,
  Cartesian moment M_(i1…il)=∫x_i1…x_ilρ for l≥0, with units C m^l.
  Define traceless quadrupole Qij=∫(3xixj−|x|²δij)ρ. For unbounded support
  require the absolute lth moment finite. An origin is part of each definition.
- `def-em-steady-current-regime`: time-independent J∈Cc∞(R³;R³) with
  div J=0 for the compact kernel theorems; ideal infinite wire/solenoid examples
  instead declare their noncompact distributions and symmetry/boundary data.
- `def-em-magnetic-moment`: for a compact integrable steady current with finite
  first moment, m_d=½∫x×J dx, in A m². It is a source moment, not rest mass
  or intrinsic spin. Closed thin-loop current is S2's tangent distribution.
- `post-em-coarse-graining`: choose ℓ>0 and nonnegative η∈Cc∞(R³), ∫η=1,
  ηℓ(x)=ℓ⁻³η(x/ℓ). Average a locally integrable microscopic field by
  ηℓ*f on regions whose ℓ-neighborhood lies in the physical domain; require
  a specified separation of microscopic and observation scales. A constitutive
  interpretation and boundary extension are additional model assumptions.
- `def-em-polarization-magnetization`: P,M are specified jointly C² averaged
  dipole-density maps Ω×I→R³ (C m⁻²,A m⁻¹). Define ρb=−div P,
  Jb=P_t+curl M, ρf=ρ−ρb, Jf=J−Jb, D=ε0E+P and H=B/μ0−M.
  The bound/free allocation is part of the chosen material model.
- `post-em-material-closure`: choose a future material rest observer field and
  its rest-space constitutive map. The elementary inertial-rest branch assumes
  D=εE, B=μH, Jconduction=σE with constant symmetric positive-definite
  ε,μ (scalar isotropic cases included), σ positive semidefinite. Local,
  linear, nondispersive hypotheses are part of this restricted assumption.
  Memory branch specifies P(t)=ε0∫0∞K(s)E(t−s)ds in a stationary material
  rest frame, with its actual kernel space, causality and passivity separately.
  In an exact broadband isotropic signal interpretation additionally require
  εμ≥c⁻², so its characteristic speed does not exceed the vacuum c. Without
  that condition the constant-coefficient law is a stated finite-band effective
  phase-response model and carries no universal front-speed claim.
  Boosting the material changes both fields and its rest observer; an unchanged
  scalar instantaneous law in every frame is not assumed.
- `def-em-moving-circuit-geometry`: r:D×I→Ω is C², embedded at each t,
  ru×rv≠0; v(r(u,v,t),t)=r_t is single-valued C¹ on a neighborhood.
  S(t)=r(D,t), C(t)=∂S(t), ΦB=∫D B(r,t)·(ru×rv)dudv,
  emf=∮C(t)(E+v×B)·dl. Exclude singularity crossings; conductor matter
  speeds must be subluminal when the relativistic force interpretation is used.
- `post-em-circuit-approximation`: explicitly adopt a fixed finite set of
  circuit currents Iα, charges Qα and ideal terminal potentials, constant
  finite symmetric inductance/capacitance matrices, resistor relation V=RI,
  KCL and loop voltage balance in the quasistatic regime L/(cT)≪1, with
  negligible radiation/leakage and specified geometry. This is a reduced model;
  no exact Maxwell error theorem follows from the inequality alone.
- `def-em-gauge-transformation`: smooth scalar χ on U sends
  (φ,A)↦(φ−χ_t,A+∇χ), equivalently A_μ↦A_μ+∂μχ. Restrictions on χ
  depend on prescribed initial/boundary data. “Lorenz” means G=div A+c⁻²φ_t=0;
  “Coulomb” means div A=0 in the chosen spatial chart. Reachability is a PDE
  conclusion with its own domain/data hypotheses, not part of the definition.
- `def-em-vacuum-energy-flux`: for smooth real fields u=(ε0E²+B²/μ0)/2,
  S=E×B/μ0, in J m⁻³,W m⁻². Quadratic distributions are excluded unless
  their products/integrability are separately established.
- `def-em-vacuum-stress-momentum`: g=S/c², Maxwell mechanical stress
  σij=ε0(EiEj−δijE²/2)+(BiBj−δijB²/2)/μ0. Define momentum flux Π=−σ,
  (div Π)i=∂jΠij; angular density x×g depends on the specified origin.
  Covariant stress C5 has T00=u,T0i=S_i/c,Tij=Πij.
- `def-em-plane-wave-definition`: k∈R³\{0}, ω>0, e,b∈C³,
  E=Re(e exp(i(k·x−ωt))), B=Re(b exp(i(k·x−ωt))). Physical fields are
  real. Their complex amplitudes satisfy the four Maxwell algebraic equations;
  full-space plane waves have infinite energy if their amplitude is nonzero.
- `def-em-polarization-definition`: for a transverse amplitude e=a+id,
  with a,d real perpendicular to k, the electric vector at a fixed phase origin
  traces a cosθ−d sinθ in k⊥. Linear means its span dimension ≤1; circular
  means |a|=|d|>0,a·d=0; otherwise the nondegenerate trace is elliptical.
  Handedness uses the named propagation direction, orientation and phase sign.
- `def-em-medium-wave-parameters`: in scalar positive ε,μ rest medium,
  speed vm=(εμ)⁻¹/², impedance Z=(μ/ε)¹/², refractive index c/vm,
  wave number k=ω/vm. In dissipative media k is a complex root selected by
  Im k≥0 for exp(ikz−iωt) in z>0, with actual response/domain assumptions.
- `def-em-guide-cavity-geometry`: G1's straight rectangular cross-section times
  R is the basic guide; a finite rectangular box is the cavity. PEC boundary
  n×E=0 accompanies consistent Gauss and declared initial normal-B data;
  G2 uses the zero-normal-B reflection class. TE means E_z=0, TM means B_z=0,
  TEM both, relative to the named longitudinal axis. General H(curl) boundary
  classes are separate proposed definitions until their traces are established.
- `post-em-radiation-selection`: fix source history and choose the retarded
  fundamental solution with zero incoming/free field, or specify initial data
  determining its homogeneous addition. Causality is this extra data choice;
  time-symmetric Maxwell equations also admit advanced/free solutions.
- `def-em-retarded-point-geometry`: use an all-time C³ timelike spatial curve
  z:R→R³ with uniform |z'|≤v*<c for R1/R2, fixed q, and observations
  x≠z(t). Retarded s solves t−s=|x−z(s)|/c; define R,r,n,β,κ as R1.
  Alternative finite-history curves must explicitly assume cone intersection.
- `post-em-minkowski-physical-model`: reuse/adopt both named SR postulates
  S1 and the shared c as the classical vacuum propagation constant. EM's
  equations/couplings are additional postulates; SR alone does not select them.
- `def-em-relativistic-worldlines-frames`: reuse S0 inertial frames and S4
  future C² timelike curves, proper time U norm −c², observer n norm −1 and
  positive rest projection h. Null curves have zero proper time and cannot be
  treated as massive test curves; noninertial tetrads are separate objects.
- `def-em-electromagnetic-tensor`: completed C1 is the exact tensor definition,
  F_EM=dA where a potential exists, F_EM0i=−Ei/c,F_EMij=εijkBk,
  F_SR(optional example)=−F_EM. C2 verifies the equations, O1 the observer
  split. A potential's existence is not assumed globally by the tensor definition.
- `def-em-experiment-record-contract`: a report record is a tuple
  (primary source, apparatus/preparation, finite recorded data or reported
  qualitative observations, calibration model, uncertainty record, analysis
  assumptions, interpretation). A quantitative measurement map sends an actual
  apparatus output to an estimator of a defined quantity with a declared error
  model. Missing source details stay missing; no universal sampling law or
  precision is part of this definition. The current three experiment proposals
  lack primary apparatus reports and are not asserted observations.
- `def-em-field-action-definition`: V2's real functional on smooth A over a
  bounded spacetime region with compact variations; source j smooth prescribed,
  S[A]=c⁻¹∫[−F²/(4μ0)+j^μA_μ]d⁴x, in J s. Curve action is V1's
  finite-interval functional on future timelike C² curves with fixed endpoints.
- `post-em-stationary-action-model`: adopt stationarity of those precisely
  defined field/curve functionals under the specified variations as an alternative
  Maxwell/force formulation. Their conditional Euler–Lagrange deductions are
  V1/V2. Stationarity is not a minimum or empirical proof; no general Noether
  or singular coupled existence theorem is assumed.
