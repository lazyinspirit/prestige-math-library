---
id: pthm-fd-px04-prediction
kind: physics-theorem
title: Plane and pipe Couette–Poiseuille verification — conditional physical prediction
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
- thm-fd-x04
- post-fd-continuum-balances
- post-fd-boundary-data
- post-fd-newtonian-fourier
- def-fd-incompressible-newtonian-model
dependency_roles:
  thm-fd-x04: mathematical-premise
  post-fd-continuum-balances: physical-assumption
  post-fd-boundary-data: physical-assumption
  post-fd-newtonian-fourier: physical-assumption
  def-fd-incompressible-newtonian-model: formulation-prerequisite
physical_scope: >-
  Infinite/fully developed channel or pipe ansatz with the stated regularity;
  exact stationary Navier–Stokes and Stokes solutions for every parameter
  choice in the Statement, without a small-inertia approximation; uniqueness
  only within the stated ansätze. Worked example is the actual explicit
  field/parameter selection in that section. B leaf cannot supply any later
  item.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: Stewart, MIT 8.09, Fluid Mechanics
    url: https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf
    locator: §6.7, printed pp. 130–133.
  - title: Fitzpatrick, Fluid Mechanics, UT Austin
    url: https://farside.ph.utexas.edu/teaching/336L/Fluid/node134.html
    locator: Moving-wall and pressure-driven parallel-plate flow.
  - title: Fitzpatrick, Fluid Mechanics, UT Austin
    url: https://farside.ph.utexas.edu/teaching/336L/Fluid/node136.html
    locator: Pipe profile, flux and wall shear.
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Statement

Let $h,a,\rho_0,\mu>0$, $p_0,G,V_0,V_1\in\mathbb R$, and $\nu=\mu/\rho_0$. Use SI units: lengths in metres, $p_0$ in pascals, velocities in $\mathrm{m\,s^{-1}}$, density in $\mathrm{kg\,m^{-3}}$, viscosity in $\mathrm{Pa\,s}$, pressure in pascals, and $G$ in pascals per metre. Let $e_x,e_y,e_z$ be the standard Cartesian unit vectors. In Cartesian coordinates, $\operatorname{div}u=\partial_xu_x+\partial_yu_y+\partial_zu_z$ and $(\Delta u)_i=\partial_{xx}u_i+\partial_{yy}u_i+\partial_{zz}u_i$. The stress is $\sigma=-pI+2\mu D$, with $D=(\nabla u+\nabla u^{\mathsf T})/2$ and $(\nabla u)_{ij}=\partial_{x_j}u_i$. The selected constant-density incompressible Newtonian model has
$$\partial_tu+(u\cdot\nabla)u+\rho_0^{-1}\nabla p-\nu\Delta u=0,\qquad \operatorname{div}u=0.$$

For the infinite plane channel
$\Omega_{\rm ch}=\{(x,y,z):x,z\in\mathbb R,\ 0<y<h\}$, set
$u=(v(y),0,0)$, $p=p_0-Gx$, with $v\in C^2([0,h])$ and wall values $v(0)=V_0$, $v(h)=V_1$. The unique profile within this one-dimensional ansatz is
$$v(y)=V_0+(V_1-V_0)\frac yh+\frac{G}{2\mu}y(h-y).$$
Its volume flux per unit width in $z$, measured in $\mathrm{m^2\,s^{-1}}$, and channel shear values are
$$Q_{\rm ch}=\int_0^h v(y)\,dy=\frac h2(V_0+V_1)+\frac{Gh^3}{12\mu},\qquad \sigma_{xy}(0)=\mu\frac{V_1-V_0}{h}+\frac{Gh}{2},\quad \sigma_{xy}(h)=\mu\frac{V_1-V_0}{h}-\frac{Gh}{2}.$$

For the infinite circular pipe
$\Omega_a=\{(x,y,z):x\in\mathbb R,\ y^2+z^2<a^2\}$, take $x$ as axial coordinate, $r=(y^2+z^2)^{1/2}$, $u=(w(r),0,0)$, and $p=p_0-Gx$. Require $w(a)=0$ and require the radial field $(y,z)\mapsto w((y^2+z^2)^{1/2})$ to be $C^2$ on the closed disk. The unique profile within this ansatz is
$$w(r)=\frac{G}{4\mu}(a^2-r^2),\qquad Q_{\rm pipe}=\int_0^a2\pi r\,w(r)\,dr=\frac{\pi Ga^4}{8\mu}.$$
The pipe volume flux is in $\mathrm{m^3\,s^{-1}}$. For $r>0$ let $e_r=(0,y/r,z/r)$ and define the radial-axial stress component by $\sigma_{rx}=e_r\cdot\sigma e_x$; it is $\sigma_{rx}(r)=\mu w'(r)=-Gr/2$.

Both fields satisfy the exact stationary Navier–Stokes equations for every allowed parameter choice and also the corresponding steady Stokes equations because their time derivatives and convective accelerations vanish. Uniqueness is only within the stated ansätze; pipe uniqueness uses full-disk regularity at the axis. These infinite or fully developed geometries give no finite entrance or exit error estimate, stability or transition claim, observation, or empirical-validity claim.

## Statement references

[Stewart, MIT 8.09, *Fluid Mechanics*, §6.7, printed pp. 130–133](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf)

[Fitzpatrick, *Fluid Mechanics*, UT Austin, flow between parallel plates](https://farside.ph.utexas.edu/teaching/336L/Fluid/node134.html)

[Fitzpatrick, *Fluid Mechanics*, UT Austin, pipe Poiseuille flow](https://farside.ph.utexas.edu/teaching/336L/Fluid/node136.html)

## Facts & Assumptions

**Given:** Positive $h,a,\rho_0,\mu$; real $p_0,G,V_0,V_1$; the stated infinite geometries, one-dimensional ansätze, pressure fields and boundary data.

[A1] [[post-fd-continuum-balances]]: the adopted continuum framework includes the mechanical momentum balance; it is a physical model input, not empirical proof.

[A2] [[post-fd-boundary-data]]: no-slip and pressure data are selected separately and imply no solution-existence result.

[A3] [[post-fd-newtonian-fourier]]: the selected mechanical closure is $\sigma=-pI+2\mu D$ in this incompressible constant-viscosity subcase; heat flux is unused.

[F1] [[def-fd-incompressible-newtonian-model]]: the local branch has $\operatorname{div}u=0$ and constant-density Newtonian momentum equation, equivalent to $\partial_tu+(u\cdot\nabla)u+\rho_0^{-1}\nabla p-\nu\Delta u=0$.

[F2] [[thm-fd-x04]]: the channel and fixed-wall pipe profiles are unique within their stated one-dimensional ansätze; pipe uniqueness assumes full-disk regularity, and both fields solve NS and Stokes because acceleration vanishes.

## Proof

1.1 In both fields velocity has only an axial component independent of the axial coordinate; hence $\operatorname{div}u=0$ and $(u\cdot\nabla)u=0$. The plane momentum equation reduces to $\mu v''=-G$, and the pipe equation to $\mu(w''+r^{-1}w')=-G$ for $r>0$. [given, A1, A2, A3, F1, algebra]

2.1 Integrating the plane equation twice gives $v(y)=-Gy^2/(2\mu)+C_1y+C_0$. The wall values determine $C_0=V_0$ and $C_1=(V_1-V_0)/h+Gh/(2\mu)$, yielding the stated profile uniquely. Its integral gives $Q_{\rm ch}$; differentiation and $\sigma_{xy}=\mu v'$ give both wall shear values. [given, A2, F2, step 1.1, algebra]

2.2 Multiplication of the pipe equation by $r$ gives $(rw')'=-Gr/\mu$. Integration yields $w=-Gr^2/(4\mu)+C\log r+D$ on $r>0$. Full-disk $C^2$ regularity forces $C=0$, and $w(a)=0$ fixes $D=Ga^2/(4\mu)$, proving uniqueness within this ansatz. Integration with area element $2\pi r\,dr$ gives $Q_{\rm pipe}$; differentiation gives $\sigma_{rx}=-Gr/2$. [given, A2, A3, F2, step 1.1, algebra]

3.1 Time derivatives and convective accelerations vanish, so each field solves the stationary Navier–Stokes and corresponding steady Stokes equations for every allowed parameter choice, without a limiting or small-parameter hypothesis. This says nothing about finite-device behavior or empirical validity. [A1, F1, F2, step 2.1, step 2.2] ∎

