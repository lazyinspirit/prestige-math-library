# Framework contract register

These definitions state the spaces, maps, equations and hypotheses used in the
repaired scaffold before their first use. They are audit-local RPP interfaces;
full derivations are linked to the read research developments. A listed
physical equation is a model premise unless explicitly called a mathematical
consequence. Draft supplier status is retained in `../supplier-map.json`.

## Affine Minkowski space and inertial charts

An affine space modeled on a real vector space $V$ is a nonempty set $A$ with
a free transitive action $(a,v)\mapsto a+v$ of $V$. For flat Minkowski
spacetime, $\dim_{\mathbb R}V=4$. For every pair $a,b\in A$
there is a unique displacement $b-a\in V$ with $a+(b-a)=b$. A flat
Minkowski spacetime is such an $A$ together with a Lorentz form $\eta$ on $V$
and a chosen future timelike component; it has no preferred origin. Choosing
$o\in A$ gives coordinates $a\mapsto a-o\in V$, and changing $o$ adds a
constant translation. An inertial chart is an affine coordinate isomorphism
whose linear part preserves $\eta$ and the chosen time orientation. In the
SI convention used here, $x^0=ct$ and each coordinate has units of length.
This local contract replaces the absent canonical root original
`def-affine-space-and-displacement`; that imported snapshot is content-only.

## Locality does not imply completeness

For $T>0$ seconds let $M=(0,cT)\times\mathbb R^3$ have coordinates
$(x^0,x^1,x^2,x^3)$ in meters, metric
$g=-(dx^0)^2+\sum_{i=1}^3(dx^i)^2$, and future orientation $\partial_0$.
The curve $\gamma:(0,T)\to M$, $\gamma(\tau)=(c\tau,0,0,0)$, has
$g(\gamma',\gamma')=-c^2$. The Christoffel symbols vanish in this chart and
$\gamma''=0$, so it is a geodesic. Its parameter is proper time. It has no
extension as a curve in
$M$ through either endpoint: the limit events $(0,0,0,0)$ and
$(cT,0,0,0)$ are not in $M$. Thus even this flat local model has an
incomplete maximal timelike geodesic; local ODE existence and uniqueness do
not imply completeness.

## Cotangent phase space and constrained mechanics

Let $Q$ be a smooth configuration manifold and $T^*Q$ its cotangent bundle,
with projection $\pi:T^*Q\to Q$. At $(q,p)\in T^*Q$ the tautological form is
$$\lambda_{(q,p)}(v)=p(d\pi(v)).$$
In cotangent coordinates $(q^i,p_i)$,
$$\lambda=p_i\,dq^i,\qquad \omega=-d\lambda=dq^i\wedge dp_i.$$
The bracket convention is
$$\iota_{X_H}\omega=dH,\qquad X_H=(H_p,-H_q),\qquad \{F,G\}=F_qG_p-F_pG_q=X_G(F).$$
Thus $\dot F=F_t+\{F,H\}$ for an observable along a time-dependent
Hamiltonian flow. A canonical covector has units action per coordinate unit;
$\lambda$ has units J s.

A constraint system is a specified finite list of smooth functions
$\chi_a:T^*Q\supset U\to\mathbb R$ and a nonempty joint level
$N=\{\chi_a=0\}$. It is **regular** on $N$ when the covectors
$d\chi_a(z)$ are linearly independent for each $z\in N$; then the regular
level theorem gives an embedded submanifold and
$T_zN=\bigcap_a\ker d\chi_a(z)$. Write $F\approx G$ when the restrictions to
$N$ agree. The list is **first class relative to this level** when
$\{\chi_a,\chi_b\}\approx0$ for every $a,b$; its Hamiltonian vectors span
the characteristic kernel of $\omega|_N$. A local gauge slice additionally
requires specified gauge functions $\phi_b$ such that
$A_{ab}=\{\chi_a,\phi_b\}$ is invertible on the common level. First-class
regularity alone supplies only local presymplectic geometry and does not
supply a global smooth orbit space. For a total Hamiltonian
$H_T=H_c+u^a\chi_a$, preservation also requires
$\{\chi_b,H_c\}\approx0$: on shell the multiplier term
$u^a\{\chi_b,\chi_a\}$ vanishes for a first-class list. This is a local
constraint-preservation statement.

A regular **second-class** list has an invertible matrix
$C_{ab}=\{\chi_a,\chi_b\}$ on the neighborhood under consideration. Its
inverse is $C^{ab}$ and its Dirac bracket is
$$\{F,G\}_D=\{F,G\}-\{F,\chi_a\}C^{ab}\{\chi_b,G\}.$$
The associated tangent field
$X_F^D=X_F-X_{\chi_a}C^{ab}\{\chi_b,F\}$ lies in each joint level, and the
restricted form is symplectic there under these local hypotheses. The
constraints become Casimirs for this bracket. If multipliers are used, the
total Hamiltonian is the declared $H_T=H_c+u^a\chi_a$; the multiplier units
are chosen so each summand has units of action per trajectory parameter.
These are local statements, not global gauge fixing.

For the free particle shell use the canonical spacetime covector $p_a$ and
$$C_m(x,p)=\tfrac12(g^{ab}p_ap_b+m^2c^2)=0,\qquad p^\sharp=g^{-1}p\ \text{future}.$$
For the charged action $q\int A_a dx^a$, the mechanical covector is
$\pi_a=p_a-qA_a$ and its shell is
$$C_{m,q}(x,p)=\tfrac12(g^{ab}\pi_a\pi_b+m^2c^2)=0,$$
again on the future branch. The free massive square-root Lagrangian has a
rank-three fibre Hessian on nonzero future timelike velocities: its kernel is
the velocity ray, and its image is precisely the future massive shell. Thus
its Legendre map is singular, not hyperregular. The massless model separately
uses $C_{0,q}=\tfrac12g^{ab}\pi_a\pi_b=0$ with $\pi^\sharp$ future and
nonzero; it has no square-root proper-time action.

A curved time reduction is used only on a named product chart with spacelike
slices and metric
$$g=-N^2(dx^0)^2+h_{ij}(dx^i+\beta^i dx^0)(dx^j+\beta^j dx^0),$$
where $N>0$, $h$ is positive definite and $\beta$ is smooth. The future unit
slice normal is $n=N^{-1}(\partial_0-\beta^i\partial_i)$, which is generally
not $\partial_0$. For the free massive shell put
$\kappa=\sqrt{m^2c^2+h^{ij}p_ip_j}$. The future branch is
$$p_0=\beta^ip_i-N\kappa,\qquad H=-cp_0=c(N\kappa-\beta^ip_i),\qquad E_n=-cp(n)=c\kappa>0.$$
This is a local temporal-chart reduction. In flat inertial time the exact
future-shell quotient has an explicit global slice and yields
$H=\sqrt{m^2c^4+c^2|\mathbf p|^2}$; this global proof does not extend to a
generic curved chart.

The flat slice is $x^0=0$: every future massive Hamiltonian orbit intersects
it once, leaving reduced variables $(x^i,p_i)$ and
$p_0=-\sqrt{m^2c^2+|\mathbf p|^2}$. Reparameterizing by $t=x^0/c$ gives the
displayed $H$. This explicit construction, rather than a general quotient
theorem, is the global reduction claim used here.

The full H0–H9 arguments are in
[`geometry-and-constraints.md`](../../../extended-frameworks-2026-10-03/relativistic-particle-mechanics/workers/hamiltonian/geometry-and-constraints.md)
and
[`mass-shell-and-time-gauges.md`](../../../extended-frameworks-2026-10-03/relativistic-particle-mechanics/workers/hamiltonian/mass-shell-and-time-gauges.md).

## Symmetry charges and Hamilton–Jacobi

The proper orthochronous Poincaré group acts on flat spacetime by
$x\mapsto\Lambda x+a$, with $\Lambda\in SO^+(1,3)$. Its cotangent lift is
$x'=\Lambda x+a$, $p'=\Lambda^{-T}p$ and preserves $\lambda$ and $\omega$.
For a Lie algebra generator $(a,A)$, where $A^T\eta+\eta A=0$, the positive
active vector field is $Y=a+Ax$ and the cotangent Hamiltonian is
$$\ell_{(a,A)}(x,p)=p_a(a^a+A^a{}_b x^b).$$
The library uses fundamental field $\xi_M=\left.\frac d{ds}\right|_0
\exp(-s\xi)\cdot z=-Y$ and moment map convention
$$d\langle\mu,\xi\rangle=-\iota_{\xi_M}\omega,\qquad \mu(\xi)=\ell_\xi.$$
With $P^a=\eta^{ab}p_b$ and
$J^{ab}=x^aP^b-x^bP^a$, this gives translation charges $P^a$, Lorentz charges
$J^{ab}$, and brackets
$$\{P^a,P^b\}=0,\quad \{J^{ab},P^c\}=\eta^{ac}P^b-\eta^{bc}P^a,$$
$$\{J^{ab},J^{cd}\}=\eta^{ac}J^{bd}-\eta^{ad}J^{bc} -\eta^{bc}J^{ad}+\eta^{bd}J^{ac}.$$
$[P]=$ kg m/s and $[J]=$ J s. A Killing vector $K$ gives the free-particle
shell integral $p_aK^a$; it is an energy only when the Killing generator and
its normalization are specified as a time translation. For forced motion
$D_\tau P=f$, the exact derivative is
$$\frac d{d\tau}g(K,P)=g(D_\tau K,P)+g(K,f)=g(K,f)$$
when $K$ is Killing and $P=mU$ has constant $m$; a generic curved metric need
not have such a $K$.

The moment map is the smooth map
$\mu:T^*\mathbb R^{1,3}\to\mathfrak{iso}(1,3)^*$ defined by
$\langle\mu(x,p),(a,A)\rangle=p_a(a^a+A^a{}_b x^b)$ for each Lie-algebra
element $(a,A)$. Its components and brackets above use the declared cotangent
lift and sign convention; the map is not an additional conservation premise
for forced motion.

For a smooth time Hamiltonian $H(t,q,p)$ on an open domain, a classical
Hamilton–Jacobi function is an action-valued $C^2$ function satisfying
$$S_t+H(t,q,S_q)=0.$$
The local construction uses a smooth characteristic flow launched from
$p=dS_0(q)$ and requires the projection $(t,a)\mapsto(t,q(t,a))$ to have
invertible differential on the domain where $S$ is defined. The inverse
function theorem then yields a local single-valued graph $p=S_q$. Loss of
invertibility is a caustic; no global solution follows. For covariant free
massive motion the equation is
$g^{ab}\partial_aS\partial_bS+m^2c^2=0$ on the future branch; for the
nonzero massless branch use $m=0$ and $dS\ne0$. The function $S$ has units
J s and is not a dimensionless wave phase without another action scale.

The complete H10–H14 charge and characteristic arguments are in
[`symmetry-orbits-and-hj.md`](../../../extended-frameworks-2026-10-03/relativistic-particle-mechanics/workers/hamiltonian/symmetry-orbits-and-hj.md).

## Spin, centroids and finite-size equations

Let $T^{ab}$ be a smooth symmetric stress-energy tensor with finite support on
a spacelike slice $\Sigma$ inside a convex normal neighborhood of a point
$z$. Let $n_x$ be the future unit normal, $d\Sigma$ the induced positive
volume measure, $v=\exp_z^{-1}(x)$, and $H_{x\to z}$ parallel transport along
the unique radial geodesic. Put $T^\sharp(n)^a=T^{ab}n_b$. The local moment
convention is
$$p_z=-c^{-1}\int_\Sigma H_{x\to z}\!\left(T^\sharp(n_x)\right)d\Sigma, \qquad S_z=-c^{-1}\int_\Sigma v\wedge H_{x\to z}\!\left(T^\sharp(n_x)\right)d\Sigma.$$
Then $p_z\in T_zM$ and $S_z\in\Lambda^2T_zM$; vectors are transported before
addition. These integrals are defined when the support stays in the normal
neighborhood and the integrals exist. This definition alone proves no slice
independence, conservation or exact all-multipole equation. In flat inertial
coordinates it reduces to the $c^{-1}\int T^{0a}$ momentum and displacement-
weighted angular-momentum integrals.

For the classical BMT model let $U$ be future timelike with $g(U,U)=-c^2$,
let $s$ be a classical spin four-vector with $g(U,s)=0$, and let
$F\in C^2(\Lambda^2T^*M)$ be a prescribed antisymmetric two-form and define
$F^\sharp$ by $g(F^\sharp(v),w)=F(w,v)$. Thus $F^\sharp$ is skew with
respect to $g$; it is not a self-field and need not solve Maxwell's equations.
For constant $m>0$, charge $q$ and dimensionless gyromagnetic parameter $g_s$,
write $\alpha=q/m$, $G=g_s/2$ and $K=g(s,F^\sharp(U))$. The adopted BMT
transport law is
$$D_\tau U=\alpha F^\sharp(U),\qquad D_\tau s=\alpha\left[G F^\sharp(s)-(G-1)\frac{U K}{c^2}\right].$$
It preserves $g(U,s)=0$ and $g(s,s)$ under these exact assumptions. This is a
classical vector model, not a quantum spin operator or empirical value of
$g_s$; the proof and the restricted ansatz uniqueness argument are in CS3 of
[`proof-modules.md`](../../../extended-frameworks-2026-10-03/relativistic-particle-mechanics/workers/charge-spin/proof-modules.md).

For pole-dipole motion the adopted MPD equations, under curvature convention
$R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$, are
$$D_\tau p^a=-\tfrac12R^a{}_{bcd}U^bS^{cd}+f_{\rm extra}^a,\qquad D_\tau S^{ab}=p^aU^b-p^bU^a+N_{\rm extra}^{ab}.$$
The spin tensor is antisymmetric; $p$ and $S$ are evolved moments, not
assumed to obey $p=mU$. A supplementary condition (SSC) chooses a centroid.
The Tulczyjew–Dixon (TD) condition is $S^{ab}p_b=0$ with future timelike
$p$; Pirani is $S^{ab}U_b=0$; an observer SSC is $S^{ab}n_b=0$ for a named
future unit $n$. Differentiating the chosen SSC is required to close the
velocity relation. In the TD branch put $\mu^2=-g(p,p)>0$ and
$$K^a{}_b=\mu^2\delta^a_b-\tfrac12S^{ac}R_{cbde}S^{de}.$$
The local closure assumes $K$ invertible and $W^a=(K^{-1})^a{}_bp^b$ future
timelike; it reconstructs
$$U^a=\frac{cW^a}{\sqrt{-g(W,W)}}.$$
The CS5 proof then gives a local ODE preserving $S^{ab}p_b=0$; no claim is
made outside that open admissible region. $f_{\rm extra}$,
$N_{\rm extra}$, quadrupole moments and constitutive response require their own
model and units. The moment integrals, parallel transport in a normal
neighborhood, hidden momentum and size bounds are stated in CS4–CS6 of the
linked proof module; no all-multipole stress-integral theorem is asserted.

One adopted quadrupole convention is
$$f_{\rm quad}^a=-\frac16J^{bcde}\nabla^aR_{bcde},\qquad N_{\rm quad}^{ab}=\frac43R^{[a}{}_{cde}J^{b]cde},$$
where $J^{abcd}$ has curvature's algebraic symmetries, brackets include the
factor $1/2$, and $[J]=\mathrm{kg\,m^4/s^2}$. The terms have force and torque
units. A state-dependent $J$ needs an additional constitutive/evolution law;
these are model formulas, not deductions from the moment definition.

For the exact flat size inequality, let the body's rest-frame energy density
be $e=T^{00}\ge0$, momentum density $j=T^{0i}/c$ satisfy $|j|\le e/c$, and
support lie within $|x-z|\le\ell$. With $Mc^2=\int e\,d^3x$ and
$s_* =\int(x-z)\times j\,d^3x$, the triangle inequality gives
$$|s_*|\le\ell Mc,\qquad \ell\ge\frac{|s_*|}{Mc}.$$
This material bound requires those positivity/dominant-energy and support
hypotheses; it is not universal for all particles.

For a signed charge density $\rho$ supported in the coordinate ball
$|y|\le\ell$, let $Q=\int\rho$ and $d^i=\int y^i\rho$. For a $C^2$ scalar
component $b$ on the whole ball, Taylor's integral remainder gives
$$\left|\int\rho(y)b(z+y)\,d^3y-Qb(z)-d^i\partial_i b(z)\right| \le\frac12\sup_{|y|\le\ell}\!\|D^2b(z+y)\|\,\ell^2\int|\rho|\,d^3y.$$
This is a local component estimate in a fixed chart; tensor use additionally
needs a specified transport/trivialization and its derivatives.

## Radiation-reaction models

For the flat LAD effective model in an inertial chart define $a=D_\tau U$,
$f_0=(q/m)F^\sharp(U)$
and $\tau_e=q^2/(6\pi\epsilon_0mc^3)>0$ in seconds. The separate adopted
equation is
$$a=f_0+\tau_e\left[D_\tau a-\frac{g(a,a)}{c^2}U\right].$$
This is an effective third-order ODE, not a completed coupled point-charge
Maxwell theory. In the LL order-reduced model let
$$\Pi_U{}^a{}_b=\delta^a_b+\frac{U^aU_b}{c^2},\quad \alpha=q/m,$$
$$B^a=\alpha(\partial_bF^a{}_c)U^bU^c+ \alpha^2F^a{}_bF^b{}_cU^c,\qquad a=f_0+\tau_e\Pi_U B.$$
Its local ODE/shell result requires a prescribed $C^2$ external field. The
conditional $O(\tau_e^2)$ residual requires an already existing uniformly
regular LAD family on a fixed compact interval. Force-free runaway/preacceleration
examples and all no-self-field limits are scoped in CS7; they are not global
existence or universal approximation theorems.

## Orbit and scattering quantities

<a id="collision-objects-thresholds-and-two-body-scattering"></a>

At a collision event $x$ in flat spacetime, or at one fixed event in a curved
spacetime, a datum consists of finite incoming and outgoing lists of future
causal momenta $P_i^{\rm in},P_j^{\rm out}\in T_xM$. Each massive leg has
$g(P_i,P_i)=-m_i^2c^2$ with $m_i>0$; each massless leg is nonzero and null.
The separate physical balance postulate is
$$\sum_iP_i^{\rm in}=\sum_jP_j^{\rm out}=:P_{\rm tot}.$$
No momenta at different events are summed without a declared transport. For a
nonzero future timelike total define invariant system mass
$M=\sqrt{-g(P_{\rm tot},P_{\rm tot})}/c$ and rest energy $W=Mc^2$. For
future timelike legs the cone pairing gives
$-g(P_i,P_j)\ge m_im_jc^2$, hence $M\ge\sum_i m_i$. Equality among
nonzero legs requires either only timelike legs with a common four-velocity,
or only parallel future-null legs. For an outgoing channel whose least
allowed total rest mass is $M_f$, $W\ge M_fc^2$ is necessary, not sufficient
for that process to occur.

For a projectile of rest mass $m_a$ and lab energy $E_a$ incident on a target
of rest mass $m_b>0$ at rest, the invariant energy obeys
$$W_{\rm in}^2=m_a^2c^4+m_b^2c^4+2m_bc^2E_a.$$
If $M_f$ is the least final rest mass, the necessary lab kinetic threshold is
$$K_{a,\rm th}=\max\!\left(0, \frac{M_f^2-(m_a+m_b)^2}{2m_b}c^2\right).$$
The centre-of-momentum (COM) frame is the observer frame with
$P_{\rm tot}=(W/c,\mathbf0)$. For a two-body final state with masses $m_1,m_2$
and $W\ge(m_1+m_2)c^2$, each COM momentum has magnitude
$$p_* =\frac{\sqrt{[W^2-(m_1+m_2)^2c^4][W^2-(m_1-m_2)^2c^4]}}{2cW}.$$
The elastic scattering angle is the angle between incoming and outgoing COM
spatial momenta. Balance fixes their magnitudes but leaves a kinematically
permitted direction; it supplies neither a probability nor a cross section.

For two future-null momenta with observer energies $E_1,E_2$ and angle
$\theta$ between their observer-spatial parts,
$$W^2=2E_1E_2(1-\cos\theta).$$
Their combined invariant mass vanishes exactly when they are parallel. One
nonzero future-null momentum cannot balance a finite outgoing list containing
a massive future leg. These algebraic facts use the cone pairing proof in
[`lorentz-foundations.md`](lorentz-foundations.md#lorentz-form-basis-and-causal-classes),
not an interaction-dynamics law.

For Schwarzschild write $\mu=G_Nm_*/c^2$ (m), $s=2\mu$ and
$f=1-s/r=1-2\mu/r$ on the exterior $r>s=2\mu$, with $x^0=ct$. In equatorial
proper time use $e=f\,dt/d\tau>0$ (dimensionless) and
$\ell=r^2d\phi/d\tau$ (m$^2$/s). The timelike effective potential is
$$V_{\rm eff}(r)=f(r)\left(c^2+\frac{\ell^2}{r^2}\right),\qquad \dot r^2=c^2e^2-V_{\rm eff}(r),\quad \ddot r=-\tfrac12V'_{\rm eff}(r).$$
The exact upstream metric and timelike reduction are the actual GR draft
[Schwarzschild vacuum model](../../../../items/pthm-gr-schwarzschild-vacuum-model.md)
and [timelike-geodesic reduction](../../../../items/lem-gr-schwarzschild-timelike-geodesic-reduction.md).
Circular geodesics require $r_0>3\mu$ and
$\ell^2=\mu c^2r_0^2/(r_0-3\mu)$; the local RPP argument proves strict
nonlinear radial stability for $r_0>6\mu$, instability for
$3\mu<r_0<6\mu$, and the stated marginal boundary behavior at $6\mu$ in the
fixed-$\ell$ radial system. The GR draft
[circular-geodesic calculation](../../../../items/lem-gr-schwarzschild-circular-orbits-and-photon-sphere.md)
and [model prediction](../../../../items/pthm-gr-schwarzschild-circular-orbit-predictions.md)
supply the circular-solution threshold and potential-curvature sign; neither
is conflated with the stronger nonlinear proof. The full X5 proof is in
[`examples/proofs.md`](../../../extended-frameworks-2026-10-03/relativistic-particle-mechanics/workers/examples/proofs.md).

For a future null ray with affine parameter of declared length units, conserved
$\bar E=f\,dx^0/d\lambda>0$ and $L=r^2d\phi/d\lambda>0$, set
$b=L/\bar E$ (m). Then
$$\left(\frac{dr}{d\lambda}\right)^2=\bar E^2\left(1-b^2\frac{f}{r^2}\right),$$
and the exterior photon sphere is $r=3\mu$ with critical
$b_c=3\sqrt3\,\mu$. For $b>b_c$ there is an outer turning point and the
exact azimuthal scattering quadrature is
$$\Delta\phi=2\int_{r_*}^{\infty} \frac{b\,dr}{r^2\sqrt{1-b^2f/r^2}}.$$
For $b<b_c$ the ray reaches the horizon in finite affine time in the exterior
chart; a global capture statement additionally uses the actual Kruskal
extension and its causal escape definition. The critical ray approaches the
photon sphere asymptotically. These are exact model calculations, not
observed lensing or intensity claims.

The static exterior observer has unit field $n=f^{-1/2}\partial_0$ and
physical four-velocity $u=cn$. Its proper-acceleration vector is
$a_n=\nabla_u u$ and, for $r>2\mu$, its magnitude is
$$|a_n|=\sqrt{g(a_n,a_n)}=\frac{G_Nm_*}{r^2\sqrt f} =\frac{c^2\mu}{r^2\sqrt f}=\frac{c^2s}{2r^2\sqrt f}.$$
This is the acceleration of the static congruence, not a curvature scalar or
the acceleration of a freely falling geodesic.

For Newtonian central motion with reduced mass $\mu_r>0$, potential $U(r)$,
energy $E$ and angular momentum $J>0$, define
$$V_{\rm eff}^{N}(r)=U(r)+\frac{J^2}{2\mu_r r^2},\qquad \frac12\mu_r\dot r^2+V_{\rm eff}^{N}(r)=E.$$
For a repulsive Coulomb potential $U=\kappa/r$, $\kappa>0$, the exact simple
turn, global branches, asymptotic impact distance and Newtonian deflection are
proved by the draft mathematics theorem
[`thm-cm-coulomb-scattering`](../../../../items/thm-cm-coulomb-scattering.md).
With incident energy $E$ and impact parameter $b$, that deflection is
$\theta_N=2\arctan(\kappa/(2Eb))$.
RPP's relativistic Coulomb result is a separate external-field mass-shell
calculation in X8 and tends to this formula only in its stated
$W=mc^2+K$, $c\to\infty$ branch with $J=b\sqrt{2mK}$; the other relativistic
branch $J\le\kappa/c$ is not supplied by that formula.

For that exact relativistic branch, take $W>mc^2$, $\kappa>0$ and
$J>\kappa/c$, with prescribed Hamiltonian
$$H(x,p)=\sqrt{m^2c^4+c^2|p|^2}+\frac{\kappa}{r},\quad r=|x|>0,$$
on the level $H=W$. Define
$$A=\frac{W^2-m^2c^4}{c^2},\qquad d=\frac{W\kappa}{c^2}, \qquad C=J^2-\frac{\kappa^2}{c^2}>0, \qquad u_* =\frac{-d+\sqrt{d^2+CA}}{C}.$$
The radial momentum satisfies $p_r^2=A-2du-Cu^2$ with $u=1/r$; $u_*$ is
the unique physical simple turning root. The half-angle and signed deflection
are
$$\Delta=\frac{J}{\sqrt C}\arctan\!\left(\frac{\sqrt{CA}}d\right), \qquad \theta_{\rm rel}=\pi-2\Delta.$$
This branch has a complete incoming and outgoing orbit and asymptotic impact
distance $b=J/\sqrt A$. The $C\le0$ branch, central-source recoil, radiation
and self-force are outside this model contract.
