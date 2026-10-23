---
id: def-fd-incompressible-newtonian-model
kind: definition
title: "Constant-density incompressible Newtonian model"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
deps:
  - post-fd-continuum-balances
  - post-fd-newtonian-fourier
dependency_roles:
  post-fd-continuum-balances: physical-assumption
  post-fd-newtonian-fourier: physical-assumption
justified_by: []
aliases: []
physical_scope: >-
  A smooth, unforced, constant-density incompressible Newtonian branch with a
  pressure multiplier and constant nonnegative shear viscosity. Boundary and
  initial data are separate, and no solution existence or empirical
  applicability is asserted.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Fluid Mechanics, Part II lecture notes"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf"
      locator: "§3.1.1, printed pp. 60–61"
    - title: "An Introduction to Continuum Mechanics, Second Edition, Chapter 6"
      url: "https://courses.washington.edu/mengr503/Chapter_6.pdf"
      locator: "§6.5.3, printed pp. 244–245"
verification:
  precheck: pending
---

## Definition

Let $I\subset\mathbb R$ be an open time interval and $\Omega\subset I\times\mathbb R^3$ open. A smooth constant-density incompressible Newtonian branch has a constant $\rho_0>0$ in $\mathrm{kg\,m^{-3}}$, a constant dynamic shear viscosity $\mu\ge0$ in $\mathrm{Pa\,s}$, a velocity field $u\in C^2(\Omega,\mathbb R^3)$ measured in $\mathrm{m\,s^{-1}}$, and a pressure multiplier $p\in C^1(\Omega,\mathbb R)$ measured in $\mathrm{Pa}$. Define $L_{ij}=\partial_{x_j}u_i$, $D=(L+L^T)/2$, and $D_tu=\partial_tu+(u\cdot\nabla)u$. The branch is specified by
$$ \rho=\rho_0,\qquad \operatorname{div}u=0,\qquad \sigma=-pI_3+2\mu D,\qquad \rho_0D_tu=\operatorname{div}\sigma, $$
where $(\operatorname{div}\sigma)_i=\sum_{j=1}^3\partial_{x_j}\sigma_{ij}$. Equivalently, for constant $\mu$, its momentum equation is
$$ \rho_0D_tu+\nabla p=\mu\Delta u,\qquad \Delta u_i=\sum_{j=1}^3\partial_{x_jx_j}u_i. $$
Indeed, $\operatorname{div}(2\mu D)=\mu\Delta u+\mu\nabla(\operatorname{div}u)=\mu\Delta u$. This is the incompressible specialization of the adopted Newtonian closure: $\theta=\operatorname{div}u=0$ implies $D_0=D$, so the bulk-viscosity and Fourier-flux terms do not enter this mechanical equation. The pressure is a constraint multiplier and is not identified with a compressible equation-of-state pressure. Define the kinematic viscosity $\nu=\mu/\rho_0$, in $\mathrm{m^2\,s^{-1}}$. Boundary and initial data are not part of this definition, and the item asserts no solution existence.

## Definition references

[David Tong, *Fluid Mechanics*, Part II lecture notes, §3.1.1, printed pp. 60–61](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf)

[An Introduction to Continuum Mechanics, Second Edition, Chapter 6, §6.5.3, printed pp. 244–245](https://courses.washington.edu/mengr503/Chapter_6.pdf)

