---
id: pthm-fd-newtonian-kinetic-decay
kind: physics-theorem
title: "Closed smooth incompressible kinetic-energy dissipation"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - def-fd-incompressible-newtonian-model
dependency_roles:
  def-fd-incompressible-newtonian-model: formulation-prerequisite
justified_by: []
aliases: []
physical_scope: >-
  Conditional kinetic-energy identity for an actual smooth unforced,
  constant-density incompressible Newtonian solution on a fixed no-slip domain
  or periodic domain. It asserts no existence, uniqueness, long-time
  regularity, global solution or empirical realization.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Fluid Mechanics, Part II lecture notes"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf"
      locator: "§3.1.2, printed pp. 61–63"
    - title: "An Introduction to Continuum Mechanics, Second Edition, Chapter 6"
      url: "https://courses.washington.edu/mengr503/Chapter_6.pdf"
      locator: "§6.5.3, printed pp. 244–245"
verification:
  precheck: pending
---

## Statement

Let $I\subset\mathbb R$ be a nonempty open time interval containing $0$. Use SI units: time is measured in seconds, spatial coordinates and lengths in metres, $\rho_0$ in $\mathrm{kg\,m^{-3}}$, $\mu$ in $\mathrm{Pa\,s}$, $u$ in $\mathrm{m\,s^{-1}}$, and $p$ in $\mathrm{Pa}$. A bounded $C^1$ domain means a bounded open set locally on one side of a continuously differentiable boundary graph. The fixed spatial region $\Omega$ is either a nonempty bounded $C^1$ domain in $\mathbb R^3$ or one rectangular period cell $[0,L_1]\times[0,L_2]\times[0,L_3]$ with side lengths $L_1,L_2,L_3>0$ metres. In the bounded-domain case, let $\mathcal O\subset I\times\mathbb R^3$ be open and contain $I\times\overline\Omega$, and suppose $u\in C^2(\mathcal O,\mathbb R^3)$ and $p\in C^1(\mathcal O,\mathbb R)$. In the periodic case, take $u$ and $p$ on $I\times\mathbb R^3$, periodic with their derivatives on opposite faces of the stated cell. In either case suppose the smooth fields satisfy on the stated spacetime domain the pointwise constant-density incompressible Newtonian model equations
$$ \rho=\rho_0>0,\qquad \operatorname{div}u=0,\qquad \sigma=-pI_3+2\mu D,\qquad \rho_0D_tu=\operatorname{div}\sigma, $$
where $\mu\ge0$ is constant, the body force is zero, $D=(\nabla u+\nabla u^T)/2$, $D_tu=\partial_tu+(u\cdot\nabla)u$, and $\operatorname{div}\sigma$ is the rowwise divergence. In the bounded-domain case impose the no-slip condition $u=0$ on $I\times\partial\Omega$; in the periodic case the model equations hold on the periodic lift to $\mathbb R^3$.

For matrices $A,B\in\mathbb R^{3\times3}$ define the Frobenius contraction $A:B:=\sum_{i,j=1}^3A_{ij}B_{ij}$ and the squared norm $|D|^2:=D:D=\sum_{i,j=1}^3D_{ij}^2$. Let $E_k(t)=\frac{\rho_0}{2}\int_\Omega |u(t,x)|^2\,dx$, using one period cell in the periodic case. For every $t_1<t_2$ in $I$,
$$ E_k(t_2)+2\mu\int_{t_1}^{t_2}\int_\Omega |D(t,x)|^2\,dx\,dt=E_k(t_1). $$
Thus $E_k$ is nonincreasing; strict decay is not claimed when $D$ vanishes. The theorem is conditional on an actual smooth solution and supplies no existence or long-time regularity result.

## Statement references

[David Tong, *Fluid Mechanics*, Part II lecture notes, §3.1.2, printed pp. 61–63](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf)

[An Introduction to Continuum Mechanics, Second Edition, Chapter 6, §6.5.3, printed pp. 244–245](https://courses.washington.edu/mengr503/Chapter_6.pdf)

## Facts & Assumptions

**Given:** The smooth pointwise model solution on the fixed spatial domain or periodic lift, its stress law, positive constant density, zero force, and the applicable boundary condition in the Statement.

[A1] [[def-fd-incompressible-newtonian-model]]: $\rho=\rho_0>0$, $\operatorname{div}u=0$, $\mu\ge0$ is constant, $\sigma=-pI_3+2\mu D$, and $D_tu=\partial_tu+(u\cdot\nabla)u$. Its current batch-11 Definition gives this exact branch.

[A2] The body force is zero. The boundary is fixed; either the velocity vanishes there or opposite periodic faces have matching fields and derivatives.

## Proof

1.1 The pointwise model equation in [A1] holds on the same fixed spatial region used in the energy integral (or on its periodic lift). Dot $\rho_0D_tu=\operatorname{div}\sigma$ with $u$. The component product rule gives $u_i\partial_{x_j}\sigma_{ij}=\partial_{x_j}(\sigma_{ij}u_i)-\sigma_{ij}\partial_{x_j}u_i$, while $D_t(|u|^2/2)=u\cdot D_tu$. Since $\rho_0$ is constant and $\operatorname{div}u=0$, this yields
$$ \partial_t\left(\frac{\rho_0|u|^2}{2}\right) +\operatorname{div}\left(\frac{\rho_0|u|^2}{2}u-\sigma^Tu\right) =-\sigma:\nabla u. $$
[A1, A2, algebra]

2.1 Integrate over the fixed domain or one periodic cell. On a no-slip boundary both flux terms vanish because $u=0$. On a periodic cell the fluxes on opposite faces cancel because their outward normals are opposite and the fields are periodic. Therefore $\frac{d}{dt}E_k(t)=-\int_\Omega\sigma:\nabla u\,dx$. [A2, step 1.1, algebra]

3.1 Using the Frobenius contraction and $|D|^2=D:D$ defined in the Statement, write $\nabla u=D+W$, where $W=(\nabla u-\nabla u^T)/2$ is skew-symmetric. A symmetric matrix is Frobenius-orthogonal to a skew-symmetric matrix, so $D:W=0$. The stress law gives $\sigma:\nabla u=(-pI_3+2\mu D):(D+W)=-p\,\operatorname{div}u+2\mu|D|^2=2\mu|D|^2$. Thus $\frac{d}{dt}E_k=-2\mu\int_\Omega|D|^2\,dx$. Integrating this identity from $t_1$ to $t_2$ proves the stated energy equality and nonincrease because $\mu\ge0$. [A1, step 2.1, algebra] ∎

