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
  flows: a linear, constant-stratification Boussinesq branch and a separate
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

Use the nonrelativistic Newtonian spacetime $I\times E$, where $I\subseteq\mathbb R$ has absolute time $t$ in seconds and $E$ is a three-dimensional oriented Euclidean affine space with no distinguished origin. A Cartesian inertial chart is absolute time together with an orientation-preserving affine isometry $x:E\to\mathbb R^3$, with spatial coordinates measured in metres. No relativistic causal structure is assumed. In this chart adopt a time-dependent orthonormal basis rotating uniformly about the chosen vertical unit vector $e_3=(0,0,1)$, with constant angular velocity vector $\boldsymbol\Omega=\Omega e_3$ in s$^{-1}$ and constant Coriolis parameter $f=2\Omega$ in this model's convention. The constant-$f$ choice is a local $f$-plane idealization; no latitude variation, planetary curvature, or $\beta$-plane term is included. The constant reference mass density $\rho_0>0$ has units kg m$^{-3}$; $f$ and $N$ have units s$^{-1}$; $g$ has units m s$^{-2}$; velocities have units m s$^{-1}$; and normalized pressure variables have units m$^2$ s$^{-2}$.

Adopt the following two distinct approximation branches; they are physical-model assumptions and not conclusions derived from mathematics.

1. **Linear, constant-stratification Boussinesq branch.** Let $I\subseteq\mathbb R$ be a nonempty open time interval, use the flat periodic mathematical domain $\mathbb T^3=\mathbb R^3/(2\pi\mathbb Z)^3$ with fundamental cell $Q_3=[0,2\pi]^3$, and represent fields by smooth $2\pi$-periodic lifts. Let $u:I\times\mathbb T^3\to\mathbb R^3$ be velocity, $b:I\times\mathbb T^3\to\mathbb R$ a buoyancy-acceleration perturbation in m s$^{-2}$, and $\pi:I\times\mathbb T^3\to\mathbb R$ pressure per reference density in m$^2$ s$^{-2}$; their displayed time and spatial derivatives are continuous, and $u,b$ have continuous second spatial derivatives. The positive constant reference density $\rho_0$ is used in inertia and the incompressibility constraint, while density-anomaly effects are retained only through the vertical buoyancy acceleration $b$. The buoyancy equation of state is not specified here. The Boussinesq approximation assumes fractional density anomalies small enough to neglect their effect on inertia while retaining their gravitational buoyancy effect. In addition, this branch adopts a linearization about a resting, uniformly stratified state: $N>0$ is a prescribed constant buoyancy-frequency parameter, and advection of the perturbations is omitted. For prescribed constants $f\in\mathbb R$ and $\nu,\kappa\ge 0$ in m$^2$ s$^{-1}$, the model equations are

$$u_t+f e_3\times u+\nabla\pi=b e_3+\nu\Delta u,\qquad \nabla\cdot u=0,\qquad b_t+N^2u_3=\kappa\Delta b.$$

Here $e_3\times u=(-u_2,u_1,0)$, $\nabla q=(\partial_{x_1}q,\partial_{x_2}q,\partial_{x_3}q)$, $\nabla\cdot w=\sum_{j=1}^3\partial_{x_j}w_j$, and $\Delta q=\sum_{j=1}^3\partial_{x_j}^2q$, with $\Delta$ acting componentwise on $u$. The periodic domain is a mathematical boundary idealization. Neither this linear equation family nor the Boussinesq approximation includes a derived error estimate or asserts that a particular measured fluid satisfies the assumptions.

2. **One-layer shallow-water branch.** On the separate flat periodic domain $\mathbb T^2=\mathbb R^2/(2\pi\mathbb Z)^2$, let $h:I\times\mathbb T^2\to(0,\infty)$ be total layer depth in metres and $v:I\times\mathbb T^2\to\mathbb R^2$ be horizontal velocity in m s$^{-1}$, with the displayed derivatives continuous and second spatial derivatives continuous. Use constant $g>0$ in m s$^{-2}$ and constant $f\in\mathbb R$ in s$^{-1}$, and define $J(v_1,v_2)=(-v_2,v_1)$. Adopt a single layer with constant reference density, a flat bottom at vertical coordinate $z=0$, no bottom stress, no wetting or drying, and no interlayer coupling. Let $z$ be height positive upward in metres, $p(t,x_1,x_2,z)$ pressure in Pa, and $H,L>0$ representative vertical and horizontal length scales in metres. Assume the shallow-layer regime $H/L\ll1$; neglect vertical acceleration so pressure is hydrostatic, $\partial_zp=-\rho_0g$, with negligible pressure above the free surface $z=h(t,x_1,x_2)$, and take horizontal velocity independent of depth in the reduced model. The adopted hydrostatic profile is $p(t,x_1,x_2,z)=\rho_0g(h(t,x_1,x_2)-z)$ for $0\le z\le h(t,x_1,x_2)$. The resulting one-layer equations are

$$h_t+\nabla\cdot(hv)=0,\qquad (hv)_t+\nabla\cdot(hv\otimes v)+\nabla\!\left(\frac{g h^2}{2}\right)+f h Jv=0.$$

Here $\nabla q=(\partial_{x_1}q,\partial_{x_2}q)$, $\nabla\cdot w=\partial_{x_1}w_1+\partial_{x_2}w_2$ for $w=(w_1,w_2)$, and tensor divergence is rowwise: $[\nabla\cdot(hv\otimes v)]_i=\sum_{j=1}^2\partial_{x_j}(h v_i v_j)$ for $i=1,2$.

The two-dimensional torus is again a mathematical boundary idealization, not a claim that a geophysical fluid occupies a torus. No reduction theorem or error estimate from the three-dimensional Boussinesq branch to this shallow-water branch is adopted. The branch assumptions specify when these equations are used as a model; they do not establish their empirical adequacy.

## Postulate references

[[def-fd-quantity-and-frame-conventions]]: Newtonian spacetime, Cartesian frames, field types, and SI units.

[[def-fd-rotating-stratified-shallow-equations]]: the pointwise linear stratified Boussinesq and one-layer shallow-water equation families and their mathematical conventions.

[Geoffrey K. Vallis, *Fluid Dynamics of the Atmosphere and Ocean*, University of Exeter ECMM719 full lecture notes (Autumn 2018), §§1.2, 1.6.2–1.6.3, 1.7, 2.1, and 2.4.2, printed pp. 3–4, 12–17, 27–28, and 34–39](https://empslocal.ex.ac.uk/people/staff/gv219/ecmm719/lecnotes18w.pdf)

[Pavel Berloff, *Lectures on Introduction to Geophysical Fluid Dynamics*, Imperial College London full lecture notes, Boussinesq and hydrostatic approximations, printed pp. 36–40, and the shallow-water model, printed pp. 41–42](https://wwwf.imperial.ac.uk/~pberloff/gfd_lectures.pdf)
