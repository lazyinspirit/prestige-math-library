---
id: post-fd-geophysical-model-branches
kind: postulate
title: Geophysical approximation branches
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 2
deps:
  - def-fd-quantity-and-frame-conventions
  - def-fd-rotating-stratified-shallow-equations
dependency_roles:
  def-fd-quantity-and-frame-conventions: formulation-prerequisite
  def-fd-rotating-stratified-shallow-equations: formulation-prerequisite
physical_scope: >-
  Adopted idealized local Cartesian models for rotating geophysical continuum
  flows: a linear, constant-stratification Boussinesq branch about a
  hydrostatically balanced resting background and a separate
  one-layer shallow-water branch. Their approximation regimes and omitted
  effects are explicit; no universal empirical validity or approximation-error
  estimate is asserted.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Geoffrey K. Vallis, Fluid Dynamics of the Atmosphere and Ocean, University of Exeter ECMM719 full lecture notes, Autumn 2018"
      url: "https://empslocal.ex.ac.uk/people/staff/gv219/ecmm719/lecnotes18w.pdf"
    - title: "Pavel Berloff, Lectures on Introduction to Geophysical Fluid Dynamics, Imperial College London full lecture notes"
      url: "https://wwwf.imperial.ac.uk/~pberloff/gfd_lectures.pdf"
verification:
  precheck: pending
---

## Postulate

Use the nonrelativistic Newtonian spacetime $I\times E$, where $I\subseteq\mathbb R$ is a nonempty open interval with absolute time $t$ in seconds and $E$ is a three-dimensional oriented Euclidean affine space with no distinguished origin. Choose a Cartesian inertial chart with an orientation-preserving affine isometry $X:E\to\mathbb R^3$, in metres, and the absolute-time coordinate. Its coordinate origin is a fixed inertial point; no relativistic causal structure is assumed. Fix $t_r\in I$ and a constant $\Omega\in\mathbb R$ in s$^{-1}$, set $\theta(t)=\Omega(t-t_r)$, and define

$$R(t)=\begin{pmatrix}\cos\theta(t)&-\sin\theta(t)&0\\\sin\theta(t)&\cos\theta(t)&0\\0&0&1\end{pmatrix},\qquad x(t,q)=R(t)^{\mathsf T}X(q)\quad(q\in E).$$

The map $(t,q)\mapsto(t,x(t,q))$ is the adapted rotating Cartesian chart, a rigid observer change in the stated frame convention. Its orthonormal basis vectors have inertial components $R(t)e_i$, where $e_i$ are the standard coordinate unit vectors and $e_3$ points vertically upward; the basis is associated with the chart, rather than itself being called a frame. For a $C^2$ worldline $q(t)$ with inertial-coordinate velocity $V(t)=dX(q(t))/dt$, its rotating-coordinate velocity is

$$\frac{dx}{dt}=R(t)^{\mathsf T}V(t)-\Omega e_3\times x(t,q(t)),\qquad e_3=(0,0,1).$$

Thus $u$ below denotes velocity relative to the rotating chart, not merely rotated components of $V$; the shallow-water $v$ denotes the first two components of this relative velocity in its separate depth-independent reduced model. The rotation is right-handed about $e_3$, with angular-velocity vector $\boldsymbol\Omega=\Omega e_3$ and Coriolis parameter $f=2\Omega$. In this convention the modeled Coriolis acceleration is $-2\boldsymbol\Omega\times u$ on the force side, hence $+f e_3\times u$ on the left of the momentum equation. Constant rotation has no angular-acceleration term. Let $U_{\rm bg}\subseteq\mathbb R^3$ be an open local region in rotating spatial coordinates, and let $\Phi:I\times U_{\rm bg}\to\mathbb R$ be a scalar gravitational potential per unit mass, continuous in time and twice continuously differentiable in space, with SI units $\mathrm{m^2\,s^{-2}}$; by convention its gravitational acceleration is $-\nabla_x\Phi$, where $\nabla_x$ is the standard Cartesian spatial gradient. Define $\Phi_{\rm eff}:I\times U_{\rm bg}\to\mathbb R$ by

$$\Phi_{\rm eff}(t,x)=\Phi(t,x)-\frac12|\boldsymbol\Omega\times x|^2.$$

The model replaces the effective acceleration $-\nabla_x\Phi_{\rm eff}$ locally by the constant downward vector $-g e_3$, where $g>0$ has units $\mathrm{m\,s^{-2}}$. Let $\rho_0>0$ be the constant reference mass density in $\mathrm{kg\,m^{-3}}$, let $p_0\in C^1(U_{\rm bg},\mathbb R)$ be the prescribed time-independent pressure of the zero-velocity reference state in Pa, and let $p:I\times U_{\rm bg}\to\mathbb R$ be the pressure field, continuously differentiable in space and measured in Pa. The perturbation pressure per reference density is $\pi(t,x)=(p(t,x)-p_0(x))/\rho_0$, in $\mathrm{m^2\,s^{-2}}$. The resting background pressure is constrained by hydrostatic balance as specified for the Boussinesq branch below; this constraint is an adopted model assumption, not a consequence of the perturbation equations. These are adopted local approximations and linearization choices, not an exact Newtonian coordinate-transformation derivation of the displayed reduced systems. Periodicity below is imposed on the perturbation fields in rotating coordinates; it does not require that $R(t)$ map a fixed periodic lattice to itself or that the background potential or pressure be periodic.

The constant-$f$ choice is a local $f$-plane idealization; no latitude variation, planetary curvature, or $\beta$-plane term is included. The constant reference mass density $\rho_0>0$ has units kg m$^{-3}$; $f$ and $N$ have units s$^{-1}$; $g$ has units m s$^{-2}$; velocities have units m s$^{-1}$; and normalized pressure and potential variables have units m$^2$ s$^{-2}$.

Adopt the following two distinct approximation branches; they are physical-model assumptions and not conclusions derived from mathematics.

1. **Linear, constant-stratification Boussinesq branch.** Let $I\subseteq\mathbb R$ be a nonempty open time interval, use the flat periodic mathematical domain $\mathbb T^3=\mathbb R^3/(2\pi\mathbb Z)^3$ with fundamental cell $Q_3=[0,2\pi]^3$, and represent fields by $2\pi$-periodic lifts with the regularity specified next. Let $u:I\times\mathbb T^3\to\mathbb R^3$ be velocity, $b:I\times\mathbb T^3\to\mathbb R$ a buoyancy-acceleration perturbation in m s$^{-2}$, and $\pi:I\times\mathbb T^3\to\mathbb R$ pressure per reference density in m$^2$ s$^{-2}$; $u,b$ have continuous first time and spatial derivatives and continuous second spatial derivatives, and $\pi$ has continuous first spatial derivatives. The positive constant reference density $\rho_0$ is used in inertia and the incompressibility constraint, while density-anomaly effects are retained only through buoyancy. The buoyancy equation of state is not specified here. The Boussinesq approximation assumes fractional density anomalies small enough to neglect their effect on inertia while retaining their gravitational buoyancy effect. In addition, this branch adopts a linearization about a resting, uniformly stratified state. Write $z=x_3$ for upward height and prescribe $B_0:\mathbb R\to\mathbb R$ by $B_0(z)=B_*+N^2z$, where $B_*$ is a constant buoyancy acceleration in $\mathrm{m\,s^{-2}}$ and $N>0$ is the constant buoyancy-frequency parameter in $\mathrm{s^{-1}}$. The modeled total buoyancy anomaly relative to the constant-density gravitational reference is $B_0(z)+b(t,x)$, in $\mathrm{m\,s^{-2}}$; $b$ is its perturbation. Require the resting pressure to satisfy $\rho_0^{-1}\nabla_xp_0(x)=(B_0(x_3)-g)e_3$ on $U_{\rm bg}$. This is hydrostatic balance of the full stratified reference state: $-\rho_0^{-1}\nabla_xp_0-ge_3+B_0e_3=0$, so substituting $p=p_0+\rho_0\pi$ leaves exactly $-\nabla\pi+be_3$ in perturbation momentum. The full resting $p_0$ includes both the constant-density hydrostatic pressure, with gradient $-\rho_0g e_3$, and the stratification pressure, with gradient $\rho_0B_0e_3$. These background profiles are used on the local region $U_{\rm bg}$; no globally small density anomaly at all real heights or periodic background is asserted. The identity $B_0'=N^2$ specifies uniform stratification, and advection of the perturbations is omitted. For prescribed constants $f\in\mathbb R$ and $\nu,\kappa\ge 0$ in m$^2$ s$^{-1}$, the model equations are

$$u_t+f e_3\times u+\nabla\pi=b e_3+\nu\Delta u,\qquad \nabla\cdot u=0,\qquad b_t+N^2u_3=\kappa\Delta b.$$

Here $e_3\times u=(-u_2,u_1,0)$, $\nabla q=(\partial_{x_1}q,\partial_{x_2}q,\partial_{x_3}q)$, $\nabla\cdot w=\sum_{j=1}^3\partial_{x_j}w_j$, and $\Delta q=\sum_{j=1}^3\partial_{x_j}^2q$, with $\Delta$ acting componentwise on $u$. The periodic domain is a mathematical boundary idealization. Neither this linear equation family nor the Boussinesq approximation includes a derived error estimate or asserts that a particular measured fluid satisfies the assumptions.

2. **One-layer shallow-water branch.** On the separate flat periodic domain $\mathbb T^2=\mathbb R^2/(2\pi\mathbb Z)^2$, let $h:I\times\mathbb T^2\to(0,\infty)$ be total layer depth in metres and $v:I\times\mathbb T^2\to\mathbb R^2$ be horizontal velocity in m s$^{-1}$, with continuous first time and spatial derivatives and continuous second spatial derivatives. Use constant $g>0$ in m s$^{-2}$ and constant $f\in\mathbb R$ in s$^{-1}$, and define $J(v_1,v_2)=(-v_2,v_1)$. Adopt a single layer with constant reference density, a flat bottom at vertical coordinate $z=0$, no bottom stress, no wetting or drying, and no interlayer coupling. Let $z$ be height positive upward in metres, $p(t,x_1,x_2,z)$ pressure in Pa, and $H,L>0$ representative vertical and horizontal length scales in metres. Assume the shallow-layer regime $H/L\ll1$; neglect vertical acceleration so pressure is hydrostatic, $\partial_zp=-\rho_0g$, with negligible pressure above the free surface $z=h(t,x_1,x_2)$, and take horizontal velocity independent of depth in the reduced model. The adopted hydrostatic profile is $p(t,x_1,x_2,z)=\rho_0g(h(t,x_1,x_2)-z)$ for $0\le z\le h(t,x_1,x_2)$. The resulting one-layer equations are

$$h_t+\nabla\cdot(hv)=0,\qquad (hv)_t+\nabla\cdot(hv\otimes v)+\nabla\!\left(\frac{g h^2}{2}\right)+f h Jv=0.$$

Here $\nabla q=(\partial_{x_1}q,\partial_{x_2}q)$, $\nabla\cdot w=\partial_{x_1}w_1+\partial_{x_2}w_2$ for $w=(w_1,w_2)$, and tensor divergence is rowwise: $[\nabla\cdot(hv\otimes v)]_i=\sum_{j=1}^2\partial_{x_j}(h v_i v_j)$ for $i=1,2$.

The two-dimensional torus is again a mathematical boundary idealization, not a claim that a geophysical fluid occupies a torus. No reduction theorem or error estimate from the three-dimensional Boussinesq branch to this shallow-water branch is adopted. The branch assumptions specify when these equations are used as a model; they do not establish their empirical adequacy.

## Postulate references

[[def-fd-quantity-and-frame-conventions]]: Newtonian spacetime, Cartesian frames, field types, and SI units.

[[def-fd-rotating-stratified-shallow-equations]]: the pointwise linear stratified Boussinesq and one-layer shallow-water equation families and their mathematical conventions.

[Geoffrey K. Vallis, *Fluid Dynamics of the Atmosphere and Ocean*, University of Exeter ECMM719 full lecture notes (Autumn 2018), §§1.2, 1.6.2–1.6.3, 1.7, 2.1, and 2.4.2, printed pp. 4–6, 12–17, 27–30, and 34–39](https://empslocal.ex.ac.uk/people/staff/gv219/ecmm719/lecnotes18w.pdf)

[Pavel Berloff, *Lectures on Introduction to Geophysical Fluid Dynamics*, Imperial College London full lecture notes, Boussinesq and hydrostatic approximations, printed pp. 36–40, and the shallow-water model, printed pp. 41–42](https://wwwf.imperial.ac.uk/~pberloff/gfd_lectures.pdf)
