---
id: def-fd-rotating-stratified-shallow-equations
kind: definition
title: Rotating stratified and shallow-water equation families
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-fd-x00
dependency_roles:
  def-fd-x00: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Geoffrey K. Vallis, Fluid Dynamics of the Atmosphere and Ocean, University of Exeter lecture notes, Autumn 2018, §§1.6.2–1.6.3 and §2.4.2"
      url: "https://empslocal.ex.ac.uk/people/staff/gv219/ecmm719/lecnotes18w.pdf"
    - title: "Darryl D. Holm, Ideal shallow water dynamics in a rotating frame, Imperial College London MPE CDT PDE lecture notes, Autumn 2016, §§1.1 and 1.4"
      url: "https://www.ma.ic.ac.uk/~dholm/classnotes/MPE2015-RSWlectures-6Dec.pdf"
    - title: "Paola Rizzoli, Wave Motion in the Ocean and the Atmosphere, MIT OpenCourseWare 12.802, Lecture 12: Shallow water equations with rotation — Poincaré waves, Spring 2008"
      url: "https://ocw.mit.edu/courses/12-802-wave-motion-in-the-ocean-and-the-atmosphere-spring-2008/b480aaaa3a6dff999df6d5007b5b73f6_MIT12_802S08_lec12.pdf"
verification:
  precheck: pending
---

## Definition

Let $I\subseteq\mathbb R$ be a nonempty open time interval. For $d=2,3$, define the flat periodic domain $\mathbb T^d:=\mathbb R^d/(2\pi\mathbb Z)^d$ and integrate over the fundamental cell $Q_d=[0,2\pi]^d$ using ordinary Lebesgue measure. A field on $\mathbb T^d$ is represented by its $2\pi$-periodic lift to the nonempty open spatial domain $\mathbb R^d$. All fields below are classical: their displayed time and spatial derivatives are continuous, and the velocity and buoyancy fields have continuous second spatial derivatives. Each displayed equation is a pointwise equality.

For a scalar field $q$, set $\nabla q=(\partial_{x_1}q,\ldots,\partial_{x_d}q)$ and $\Delta q=\sum_{j=1}^d\partial_{x_j}^2q$. For a vector field $w=(w_1,\ldots,w_d)$, set $\nabla\cdot w=\sum_{j=1}^d\partial_{x_j}w_j$, $\Delta w=(\Delta w_1,\ldots,\Delta w_d)$, $|w|^2=\sum_{j=1}^dw_j^2$, and $|\nabla w|^2=\sum_{i,j=1}^d(\partial_{x_j}w_i)^2$. For a matrix field $A$, its divergence is rowwise: $(\nabla\cdot A)_i=\sum_{j=1}^d\partial_{x_j}A_{ij}$. In three dimensions $e_3\times u=(-u_2,u_1,0)$, and in two dimensions $Jv=(-v_2,v_1)$.

On $\mathbb T^3$, let $u:I\times\mathbb T^3\to\mathbb R^3$ be velocity, $b:I\times\mathbb T^3\to\mathbb R$ be a buoyancy perturbation, and $\pi:I\times\mathbb T^3\to\mathbb R$ be specific pressure. Let $e_3=(0,0,1)$, and prescribe constant parameters $f\in\mathbb R$, $N>0$, and $\nu,\kappa\ge0$. The rotating, linear, constant-stratification Boussinesq equation family is

$$u_t+f e_3\times u+\nabla\pi=b e_3+\nu\Delta u,\qquad \nabla\cdot u=0,\qquad b_t+N^2u_3=\kappa\Delta b.$$

Here $\Delta$ acts componentwise, $u_3$ is the vertical velocity component, $f$ is the Coriolis coefficient, $N$ is the constant buoyancy-frequency parameter, and $\nu$ and $\kappa$ are the prescribed momentum and buoyancy diffusion coefficients. The inviscid branch is the choice $\nu=\kappa=0$. In the Boussinesq interpretation, a constant reference density is used in inertia and the divergence constraint while the density anomaly is retained through the vertical buoyancy force; small fractional density variation is an applicability assumption, not a theorem giving a compressible limit.

For its rotating-frame interpretation, take a time-dependent orthonormal Euclidean basis rotating uniformly about $e_3$ with constant angular velocity $\boldsymbol\Omega=\Omega e_3$, so $f=2\Omega$. The Coriolis acceleration on the force side is $-2\boldsymbol\Omega\times u$, written on the left as $+f e_3\times u$. If $\Phi$ is gravitational potential per unit mass, define the effective potential by $\Phi_{\rm eff}(x):=\Phi(x)-\tfrac12|\boldsymbol\Omega\times x|^2$, which absorbs the centrifugal contribution. These frame and effective-potential choices are assumptions; the inertial-frame balance is distinct. The periodic domain is a mathematical idealization, not a claim that the physical fluid occupies a compact torus.

Independently, on $\mathbb T^2$, let $h:I\times\mathbb T^2\to(0,\infty)$ be total layer depth and $v:I\times\mathbb T^2\to\mathbb R^2$ be horizontal velocity. Let $g>0$ and $f\in\mathbb R$ be prescribed constants, define $Jv:=(-v_2,v_1)$, and take a fixed flat bottom. The inviscid one-layer shallow-water equation family is

$$h_t+\nabla\cdot(hv)=0,\qquad (hv)_t+\nabla\cdot(hv\otimes v)+\nabla\!\left(\frac{g h^2}{2}\right)+f h Jv=0.$$

The tensor divergence is rowwise, $(\nabla\cdot(hv\otimes v))_i=\sum_{j=1}^2\partial_{x_j}(h v_i v_j)$. This family has one layer, positive depth, a flat bottom, and no bottom friction, wetting/drying, or interlayer coupling. These are mathematical equation systems, not assertions that a measured fluid realizes them. With SI interpretation, $t$ is in seconds, spatial coordinates in metres, $u$ and $v$ in metres per second, $b$ in metres per second squared, $\pi$, $\Phi$, and $\Phi_{\rm eff}$ in square metres per square second, $f$, $N$, and $\Omega$ in inverse seconds, $\nu$ and $\kappa$ in square metres per second, $h$ in metres, and $g$ in metres per square second. The displayed coefficients are prescribed within these formulations; no empirical calibration is asserted. The energy integrals below omit a constant reference density; multiplying them by a specified density in kilograms per cubic metre gives joules.

## Definition references

Formal-PDE supplier [[def-fd-x00]]: it defines $I$ as a nonempty open time interval and $\Omega$ as a nonempty open subset of $\mathbb R^3$, requires pointwise classical equations with velocity $C^1$ in time and $C^2$ in space and pressure $C^1$ in space, and requires any further regularity used by a proof. Its Cartesian gradient, divergence, Laplacian, componentwise vector-Laplacian, row-component Jacobian, and Euclidean conventions match the conventions stated locally above. The periodic lifts use $\Omega=\mathbb R^3$, so the stratified branch meets its spatial-domain hypothesis. It does not define the two-dimensional shallow-water equations, which this item specifies locally.

Geoffrey K. Vallis, *Fluid Dynamics of the Atmosphere and Ocean*, University of Exeter full lecture notes, §§1.6.2–1.6.3 (buoyancy frequency and Boussinesq energetics) and §2.4.2 (shallow-water energy): [full lecture notes, PDF](https://empslocal.ex.ac.uk/people/staff/gv219/ecmm719/lecnotes18w.pdf).

Darryl D. Holm, *Ideal shallow water dynamics in a rotating frame*, Imperial College London MPE CDT PDE full lecture notes, §§1.1 and 1.4 (rotating equations and their energy law): [full lecture notes, PDF](https://www.ma.ic.ac.uk/~dholm/classnotes/MPE2015-RSWlectures-6Dec.pdf).

Paola Rizzoli, MIT OpenCourseWare 12.802, Lecture 12, *Shallow water equations with rotation — Poincaré waves*, pp. 1–4 (derivation of the rotating one-layer system): [full lecture notes, PDF](https://ocw.mit.edu/courses/12-802-wave-motion-in-the-ocean-and-the-atmosphere-spring-2008/b480aaaa3a6dff999df6d5007b5b73f6_MIT12_802S08_lec12.pdf).
