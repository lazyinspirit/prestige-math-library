# Relativistic Particle Mechanics

This category develops classical particles on an explicitly stipulated smooth
spacetime. It derives the mechanics selected by massive and massless actions,
then develops observer energy and momentum, force laws, collision kinematics,
constrained Hamiltonian dynamics, symmetries, spin and finite-size models,
explicit trajectories, scattering, controlled limits and the boundary of
radiation-reaction approximations. Mathematical geometry and variational
claims use only mathematical hypotheses. A physical postulate separately
adopts clocks, actions, fields, collision balance or a finite-body truncation;
no covariant equation becomes an empirical law by being derived from an action.

The canonical subject is a test particle. Its metric and any electromagnetic
field are prescribed smooth backgrounds. Neglect of its effect on those
backgrounds is part of the model. A smooth Einstein–matter solution is not a
point-particle self-field theorem: a distributional point source is outside the
smooth matter hypotheses of the background frameworks. Finite-size and
radiation models therefore carry their own equations, scale conditions and
error limits.

## Conventions and objects

The Lorentz signature is $(-,+,+,+)$ and $c>0$ has SI units m/s. A flat
Minkowski spacetime is an affine space $A$ modeled on a four-dimensional real
vector space $V$, with free transitive translation action $a+v$, Lorentz form
$\eta$ on $V$, and a chosen future timelike component. The displacement
$b-a\in V$ is the unique vector with $a+(b-a)=b$; no origin is preferred.
An inertial chart is an affine coordinate isomorphism whose linear part
preserves $\eta$ and the chosen time orientation. In a flat inertial chart or
a curved length-coordinate chart, $x^0=ct$ and all four coordinates have units
m; metric components are dimensionless. An event
observer is a future unit vector $n\in T_pM$ with $g(n,n)=-1$, so its physical
four-velocity is $cn$. An observer congruence is a smooth future unit vector
field on its stated open domain and has its own integral curves. A chart is a
coordinate map. A tetrad is a local orthonormal basis field. These objects are not interchangeable,
and a chart adapted to a congruence does not imply that the orthogonal rest
spaces fit together into simultaneity hypersurfaces.

For flat Lorentz linear algebra, the exact scoped definitions and full basis/cone/observer argument are recorded in the audit's [`definitions/lorentz-foundations.md`](../../scaffold-audit-2026-10-12/relativistic-particle-mechanics/definitions/lorentz-foundations.md). This uses the published vector-space, bilinear-form and Sylvester-inertia interfaces. Six inspected physics snapshots have no matching canonical root originals; the RPP claims do not use them as suppliers because the required Lorentz, causal-cone and observer claims are proved locally. The actual SR draft [worldline definition](../../../items/def-sr-regular-causal-curve-and-worldline.md) and [chart/tetrad/congruence distinction](../../../items/def-sr-chart-tetrad-and-congruence-distinction.md) were also read; they refine the flat framework vocabulary. Curved claims use the actual draft [smooth Lorentzian model](../../../items/def-gr-smooth-lorentzian-objects.md), [timelike worldline and proper time](../../../items/def-gr-timelike-worldline-and-proper-time.md), [observer/rest space](../../../items/def-gr-observer-and-rest-space.md), [congruence and adapted chart](../../../items/def-gr-observer-congruence-and-adapted-charts.md) and [local frame/tetrad field](../../../items/def-gr-local-frame-and-tetrad-fields.md). Their draft status is retained; exact contracts, direct upstreams and proof boundaries actually read are in this audit's [`supplier-map.json`](../../scaffold-audit-2026-10-12/relativistic-particle-mechanics/supplier-map.json).

A particle worldline is a regular future timelike $C^2$ curve on a stated open
interval for force equations. Proper time is the geometric integral
$d\tau=\sqrt{-g(x',x')}\,d\lambda/c$; its value is independent of increasing
regular reparametrization. Identifying it with an ideal clock reading is a
separate physical postulate. A future null curve has zero proper-time
integrand, no unit timelike four-velocity and no rest frame. Its affine
parameter and the scale of its nonzero null momentum are additional data; a
null path alone determines neither momentum magnitude nor energy. The
locally absolutely continuous causal curves used for reachability are a
different class from these $C^2$ mechanical worldlines. Local geodesic or force
IVP uniqueness gives a maximal interval, not completeness; the published
[Picard–Lindelöf theorem](../../../../items/thm-picard-lindelof-local-existence-and-uniqueness.md)
and
[smooth ODE dependence theorem](../../../../items/thm-smooth-dependence-of-ode-solutions-on-parameters.md)
are used only with their open-domain/local-common-interval hypotheses.

For a massive particle, adopt $m>0$ constant in kg and mechanical momentum
$P=mU$ in kg m/s, where $g(U,U)=-c^2$. For a future unit observer $n$,
$h_n(P)=P+g(P,n)n$ is spatial,
$E_n(P)=-c\,g(P,n)$ is in joules, and $q_n(P)=h_n(P)$ is observer-dependent
spatial momentum. The mass shell
$E_n^2=m^2c^4+c^2|q_n|^2$ and the rest criterion follow mathematically from
the Lorentz form and the stated postulate. For a massless particle adopt a
separate nonzero future null momentum $P$ with positive scale; then
$E_n=c|q_n|>0$. Do not set $m=0$ in $P=mU$ or in a square-root action.
Momenta at different events belong to different tangent spaces and require a
specified transport or symmetry before they can be compared.

In the electromagnetic convention, $F=dA$ where a local potential is used,
$F_{0i}=-E_i/c$, $F_{ij}=\epsilon_{ijk}B_k$, and the metric-raised coupling is
$\Phi^\mu=g^{\mu\alpha}F_{\alpha\beta}U^\beta$. The positive-charge action
term is $+q\int A_a\,dx^a$. In an inertial chart this gives
$dp/dt=q(\mathbf E+\mathbf v\times\mathbf B)$ and
$dE/dt=q\mathbf E\cdot\mathbf v$. The optional SR tensor identification
uses the opposite two-form, $F_{\rm SR}=-F_{\rm EM}$; never change the sign
without changing the dictionary. The canonical momentum is
$p_{\rm can}=p_{\rm mech}+qA$, while $p_{\rm mech}$ remains $mU^\flat$.
Here $A_a$ has SI units T m, $F_{ab}$ has T, and $q\int A$ has units J s.

## Paired reading progression

The page pairs, item arrays and supplier-first order remain those in the
paired inventory. Each A page owns reusable definitions, adopted model
premises and conditional deductions; its B companion carries worked
calculations and counterexamples. The identifiers below bind the prose to
actual current source clauses rather than historical labels such as S7, Q1 or
NR E10. An exact item path does not imply publication: the physics draft
suppliers below remain `draft`.

1. **Geometry and causal worldlines — `rpm-geometry-actions`.** Reuse the flat
   SR definitions and the curved GR definitions above, plus the actual GR draft
   [proper-time reparametrization and four-velocity lemma](../../../items/lem-gr-proper-time-reparametrization-and-four-velocity.md).
   Use the metric-selected torsion-free connection only under the actual GR
   draft [Levi-Civita/tensor derivative theorem](../../../items/thm-gr-nondegenerate-levi-civita-and-tensor-derivative.md).
   The local proof in
   [`foundations-and-actions.md`](workers/geometry/foundations-and-actions.md)
   distinguishes a point observer, a congruence, tetrad, chart, inertial frame,
   and adapted chart; proves proper-time normalization; and states the
   regularity/domain of each curve. The published [Picard–Lindelöf theorem](../../../../items/thm-picard-lindelof-local-existence-and-uniqueness.md)
   and [smooth ODE dependence theorem](../../../../items/thm-smooth-dependence-of-ode-solutions-on-parameters.md)
   give local solution and parameter dependence only on their stated open
   domains/common compact intervals. The GR draft geodesic IVP is
   local and explicitly makes no completeness claim. Causal reachability uses
   its own locally absolutely continuous curve class and is never silently
   applied to $C^2$ particle dynamics.

2. **Actions and parametrization — `rpm-geometry-actions`.** On a compact
   finite parameter interval with fixed endpoints, a future timelike curve
   $x(\lambda)$, $T=dx/d\lambda$ and $\ell=\sqrt{-g(T,T)}>0$, define
   $$S_m[x]=-mc\int\ell\,d\lambda=-mc^2\int d\tau.$$
   With $\lambda$ in seconds, this has units J s. The compact first variation
   is
   $$\delta S_m=-mc\int g(J,D_\lambda(T/\ell))\,d\lambda,$$
   including the boundary term removal, realization of compactly supported
   variations and fundamental-lemma step in RP-G2. Stationarity is equivalent
   to $D_\lambda(T/\ell)=0$, and after choosing the curve's proper-time
   parameter to $D_\tau U=0$. This is not a global maximum claim. The positive
   einbein action
   $$S_e[x,e]=\frac12\int\bigl(e^{-1}g(T,T)-e m^2c^2\bigr)\,d\lambda$$
   has independent equations $g(T,T)+e^2m^2c^2=0$ and
   $D_\lambda(T/e)=0$. For $m>0$, on the future timelike branch,
   $e=\ell/(mc)$ and $T/e=mU$. For $m=0$, separately impose nonzero future
   null tangent; the variational constraint gives nullness, $P=T/e$ is a
   nonzero null momentum, and $dx/d\sigma=P$ in the affine parameter
   $d\sigma=e\,d\lambda$. There is no null proper-time gauge. These full
   arguments are in RP-G2/G3; the physical adoption of either stationary action
   remains the separate test-particle postulate.

3. **Momentum, force and collisions — `rpm-momentum-collisions`.** Bind the
   flat physical assumptions to actual draft [massive-particle dynamics](../../../items/post-sr-massive-particle-dynamics.md)
   and [separate ideal massless momentum](../../../items/post-sr-ideal-massless-particle-momentum.md).
   Bind the mathematical observer-energy, frame and four-force clauses to
   actual SR draft items [observer identities](../../../items/lem-sr-energy-momentum-observer-identities.md),
   [four-momentum in an inertial frame](../../../items/lem-sr-four-momentum-in-inertial-frame.md)
   and [four-force/work-energy identities](../../../items/lem-sr-four-force-and-work-energy-identities.md).
   The exact broader SR conditional theorem is
   [energy, momentum and collision thresholds](../../../items/pthm-sr-momentum-and-four-force.md);
   its directly used clauses and draft upstream proof dependencies are in the
   supplier map, while the scoped local Lorentz proof avoids treating its
   imported-orphan foundations as canonical. On a curved background, RPP adopts its own pointwise collision
   balance at one event in $T_pM$; the Lorentz-vector algebra transfers to that
   single tangent space, but does not sum vectors at distinct events without a
   transport rule. The local `dynamics-developments.md` argument preserves
   variable-mass identity $g(P,D_\tau P)=-mc^2\dot m$ as a derivative identity,
   not a variable-mass law. For constant mass, a stipulated force
   $f=D_\tau P=mD_\tau U$ must satisfy $g(U,f)=0$ to preserve
   $g(U,U)=-c^2$; if $m$ varies, then $g(U,D_\tau P)=-c^2\dot m$ instead.
   The local argument proves only local IVP existence for the named smooth
   force field. Collision balance plus future-causal finite lists yields necessary
   mass thresholds, two-body COM momenta and elastic-channel direction
   freedom. Null-null invariant energy depends on the angle between the
   directions. The collision datum, threshold formulas, COM momentum and
   scattering-angle definitions are collected in the audit-local
   [collision contract](../../scaffold-audit-2026-10-12/relativistic-particle-mechanics/definitions/framework-contracts.md#collision-objects-thresholds-and-two-body-scattering).
   These are kinematic permissions, never process existence, interaction
   dynamics, probability or cross section.

4. **External charge — `rpm-external-charge`.** Reuse the actual EM draft
   [tensor dictionary](../../../items/def-em-electromagnetic-tensor.md),
   [Lorentz-coupling postulate](../../../items/post-em-lorentz-coupling.md),
   [relativistic force clause](../../../items/pthm-em-relativistic-lorentz-force.md)
   and, for its flat inertial field-transform clause only, [boost/invariant theorem](../../../items/pthm-em-lorentz-field-transform.md).
   Their exact tensor sign, field units and flat-domain assumptions were
   checked; the EM coupling assumes constant $m,q$, a prescribed external
   $C^1$ field, and no self-field. It supplies the RPP flat special case. The
   curved RPP charge law is a separate physical postulate. Its local CS0/CS1
   argument derives the curved fixed-endpoint action variation and action/force equivalence,
   checks the gauge endpoint term $q[\chi(x_b)-\chi(x_a)]$, and distinguishes
   local potentials from global topology. It proves mass-shell preservation
   by antisymmetry and proves a local IVP only for a smooth prescribed field.
   External work is not closed particle-plus-field balance. The action is a
   model postulate; covariance alone does not select it.

5. **Canonical constraints and symmetries — `rpm-hamiltonian-constraints`
   and `rpm-symmetries-hamilton-jacobi`.** The exact phase-space, constraint,
   first/second-class, Dirac-bracket, lapse/shift, moment-map and
   Hamilton–Jacobi definitions are in the audit-local
   [framework contract register](../../scaffold-audit-2026-10-12/relativistic-particle-mechanics/definitions/framework-contracts.md#cotangent-phase-space-and-constrained-mechanics).
   Use the exact cotangent definitions
   and published mathematics items listed in `supplier-map.json`, including
   the cotangent tautological form, Legendre map, regular-level theorem,
   Frobenius theorem, ODE existence/smooth dependence, Hamiltonian group
   action and coadjoint-orbit form. The library convention is
   $\lambda=p_a dx^a$, $\omega=-d\lambda=dq^i\wedge dp_i$ and
   $\iota_{X_H}\omega=dH$. Mechanical and canonical momentum are distinct.
   The homogeneous length Lagrangian has rank-three velocity Hessian and a
   mass-shell constraint, so the hyperregular Legendre theorem does not apply.
   Local regular first/second-class constraints have explicit Dirac brackets
   and local gauge slices; global reduction requires additional free/proper or
   explicit quotient hypotheses. The flat future-shell quotient and time
   gauge have an explicit global proof, with $p_0=-E/c$ and spatial Hamiltonian
   $E$. On a curved temporal chart, reduction is local and requires a genuine
   temporal coordinate, spacelike slices, positive lapse and declared shift;
   the normal-observer energy is $-c p(n)>0$ even if coordinate $-cp_0$ has a
   different sign. The Poincaré moment map, Killing/Noether charges and local
   Hamilton–Jacobi characteristics use their stated regularity, group and
   invertible-projection hypotheses. The HJ function has action units J s;
   it is not a dimensionless wave phase without an added action scale.

6. **Spin and finite extent — `rpm-spin-finite-size`.** The exact BMT, MPD,
   supplementary-condition and finite-body contract appears in the audit-local
   [spin and finite-size register](../../scaffold-audit-2026-10-12/relativistic-particle-mechanics/definitions/framework-contracts.md#spin-centroids-and-finite-size-equations).
   Adopt the specific
   classical BMT vector model with fixed $m,q$, external field, declared
   dimensionless gyromagnetic parameter and spin constraints; the CS3 proof
   gives transport identities and uniqueness only within its stated ansatz.
   No quantum spin operator or measured $g$ factor is inferred. MPD pole-dipole
   equations and the named supplementary condition are a separate truncation
   premise. In the TD branch the local proof requires invertibility of its
   spin-curvature matrix and future timelikeness of the reconstructed velocity;
   $P$ need not equal $mU$ in the general spinning model. Multipole moments
   require compact support in a convex normal neighborhood and a specified
   parallel-transport convention. The signed-charge Taylor remainder and
   finite-size estimates require bounded moments and smooth background
   derivatives; a small size label alone is insufficient. No exact
   stress-integral-to-all-orders Dixon theorem or global truncation limit is
   claimed.

7. **Explicit motion and scattering — `rpm-exact-flat-orbits` and
   `rpm-curved-orbits-scattering`.** The exact effective-potential,
   Schwarzschild, null-scattering, Newtonian and relativistic-Coulomb quantities
   are defined in the audit-local
   [orbit and scattering register](../../scaffold-audit-2026-10-12/relativistic-particle-mechanics/definitions/framework-contracts.md#orbit-and-scattering-quantities).
   The Rindler clock/radar clause reuses the
   actual SR draft [Rindler horizons and radar theorem](../../../items/pthm-sr-rindler-horizons-and-radar.md);
   local RPP calculations retain the clock gradient and null-ray domains.
   Uniform electric, magnetic and crossed-field solutions are in the prescribed
   external-field model. In the Schwarzschild exterior use the actual GR draft
   model $s=2G_Nm_*/c^2$, $f(r)=1-s/r$, $x^0=ct$; when RPP writes
   $\mu=G_Nm_*/c^2$, the exact conversion is $s=2\mu$ and
   $f=1-2\mu/r$. The exact current GR draft sources are the
   [Schwarzschild vacuum model](../../../items/pthm-gr-schwarzschild-vacuum-model.md),
   [timelike geodesic reduction](../../../items/lem-gr-schwarzschild-timelike-geodesic-reduction.md),
   [circular geodesics and photon sphere](../../../items/lem-gr-schwarzschild-circular-orbits-and-photon-sphere.md),
   [circular-orbit model predictions](../../../items/pthm-gr-schwarzschild-circular-orbit-predictions.md),
   [static clock rates](../../../items/lem-gr-schwarzschild-static-congruence-and-clock-rates.md),
   [stationary redshift](../../../items/pthm-gr-schwarzschild-stationary-redshift.md),
   and [Kruskal causal escape](../../../items/lem-gr-kruskal-causal-escape-and-trapping.md).
   The actual GR draft geodesic reduction gives
   $\dot r^2=e^2-f(c^2+\ell^2/r^2)$ and its circular-orbit draft supplies
   existence thresholds and the local effective-potential curvature sign.
   RPP X5 retains its additional nonlinear radial stability/instability
   argument; that stronger claim is not identified with the GR local $V''$
   test. The actual GR stationary-redshift theorem supplies the frequency/energy
   ratio under the static-observer and ideal-clock model; RPP's additional
   static proper acceleration has magnitude
   $a_{\rm proper}=c^2s/(2r^2\sqrt f)$ m/s$^2$ for $r>s$. The exact null
   scattering quadrature is an exterior-model result. A statement about global
   capture or escape uses the actual GR Kruskal extension and causal
   escape/trapping clauses; reaching an exterior coordinate boundary alone is
   not a global capture theorem. The repulsive relativistic Coulomb result is
   conditional on the specified external-field branch and its nonzero turning
   data. The nonrelativistic Coulomb draft is used only for the stated Newtonian
   comparison, not as a proof of relativistic scattering.

8. **Controlled limits and radiation boundaries — `rpm-controlled-limits`
   and `rpm-radiation-models`.** The LAD and LL equations and their precise
   local/conditional boundaries are in the audit-local
   [radiation model register](../../scaffold-audit-2026-10-12/relativistic-particle-mechanics/definitions/framework-contracts.md#radiation-reaction-models).
   The exact GR draft
   [scaled weak-field trajectory theorem](../../../items/thm-gr-weak-field-scaled-trajectory-limit.md)
   assumes stationary weak-field metric data, bounded two spatial derivatives
   on a compact set, speed $|v|\le C\sqrt\varepsilon c$, compact convex
   containment and a comparison Newtonian solution on a fixed scaled interval.
   It gives an $O(\varepsilon)$ scaled trajectory error on
   $0\le S\le S_*$, with coordinate time
   $t=LS/(\sqrt\varepsilon c)$; it proves neither large-time convergence at
   fixed $\varepsilon$ nor a metric family from arbitrary Newtonian data. The
   GR physics draft's stronger Einstein/dust source correspondence is a
   separate conditional theorem and is not silently imported into this
   test-particle limit. Flat energy, momentum and action low-speed estimates
   carry their explicit uniform speed cut-off and remainder. The Coulomb
   Newtonian angle is a separate central-force statement, not a trajectory
   convergence rate.

   LAD is adopted, if at all, as a separate effective third-order model. Its
   force-free runaway example is a property of that equation. LL order reduction
   is a local model with its explicit $C^2$ external-field and shell hypotheses;
   the residual $O(\tau_e^2)$ estimate is conditional on an already-existing
   regular LAD family. Neither estimate constructs that family or proves a
   universal approximation. Far-field radiation flux is evaluated off the
   worldline and does not define the force of a singular self-field on the
   particle. Full curved-tail self-force construction, unrestricted global
   point-charge existence and arbitrary-duration small-body convergence have
   no logical supplier here and are not used.

## Units, sources and status

Proper time is in seconds, $U$ in m/s, $P=mU$ in kg m/s, $E$ in joules,
force in newtons, and angular momentum/spin in J s. In the einbein model with
parameter in seconds, $e$ has units kg$^{-1}$; its null affine parameter
$d\sigma=e\,d\lambda$ has units s/kg, so $dx/d\sigma$ has momentum units.
A canonical covector pairs with displacement to give J s; its component units
follow the coordinate Jacobian. $G_N$ has m$^3$ kg$^{-1}$ s$^{-2}$ and
$\Lambda$ m$^{-2}$. Electromagnetic normalization is SI, with
$\epsilon_0=1/(\mu_0c^2)$; experimentally measured constants are not all exact
by unit definition. No $\hbar$ or operator identification is assumed.

The audit's supplier map records exact IDs, paths, statuses, actual hypotheses,
proof boundaries, direct dependency/justification edges, hashes and RPP/external
consumer mapping. Research arguments in
[`workers/geometry/foundations-and-actions.md`](workers/geometry/foundations-and-actions.md),
[`workers/charge-spin/proof-modules.md`](workers/charge-spin/proof-modules.md),
[`workers/hamiltonian/`](workers/hamiltonian/),
[`workers/examples/proofs.md`](workers/examples/proofs.md) and
[`dynamics-developments.md`](dynamics-developments.md) are fully developed
research arguments, not production acceptance receipts. This scaffold does not
claim that every transitive dependency has been independently re-proved. Its
specific remaining canonical-root and draft-boundary holds are in `report.md`;
no research alias, citation or draft status is treated as proof acceptance.

All calculations and examples are conditional model results. No laboratory
data, measurements or empirical conclusions are introduced.
