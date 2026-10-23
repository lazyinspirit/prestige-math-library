---
id: def-fd-barotropic-euler-model
kind: definition
title: "Smooth positive-density barotropic Euler model"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
deps:
  - post-fd-continuum-balances
dependency_roles:
  post-fd-continuum-balances: physical-assumption
justified_by: []
aliases: []
physical_scope: >-
  A smooth unforced inviscid barotropic continuum branch with positive density
  and a specified C1 pressure law. The pressure law is a model closure; no
  solution existence, response-sign assumption or empirical applicability is
  asserted.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Fluid Mechanics, Part I lecture notes"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids1.pdf"
      locator: "§2.1, printed pp. 14–18"
    - title: "An Introduction to Continuum Mechanics, Second Edition, Chapter 6"
      url: "https://courses.washington.edu/mengr503/Chapter_6.pdf"
      locator: "§6.5.2, printed pp. 243–244"
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-23
---

## Definition

Let $I\subset\mathbb R$ be an open time interval, let $\Omega\subset I\times\mathbb R^3$ be open, and let $P:(0,\infty)\to\mathbb R$ be a continuously differentiable pressure function. A smooth positive-density barotropic Euler solution is a pair of fields $\rho\in C^2(\Omega,(0,\infty))$ and $u\in C^2(\Omega,\mathbb R^3)$ satisfying
$$ \partial_t\rho+\operatorname{div}(\rho u)=0,\qquad \rho\bigl(\partial_tu+(u\cdot\nabla)u\bigr)+\nabla P(\rho)=0. $$
Here $\operatorname{div}u=\sum_{i=1}^3\partial_{x_i}u_i$, $\nabla$ is the spatial gradient, and $D_tu=\partial_tu+(u\cdot\nabla)u$ is the material acceleration. The constitutive stress is $\sigma=-P(\rho)I_3$ under the tension-positive traction convention. Thus “barotropic” means that pressure is a specified function of density alone, and “Euler” here means that the viscous stress is absent. No sign of $P'(\rho)$ is built into the definition; a positive acoustic response is a separate hypothesis where used. In SI interpretation, $\rho$ is in $\mathrm{kg\,m^{-3}}$, $u$ in $\mathrm{m\,s^{-1}}$, $P$ in $\mathrm{Pa}$, and $P'(\rho)$ in $\mathrm{m^2\,s^{-2}}$. The model gives equations for a smooth solution and asserts no existence theorem.

## Definition references

[David Tong, *Fluid Mechanics*, Part I lecture notes, §2.1, printed pp. 14–18](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids1.pdf)

[An Introduction to Continuum Mechanics, Second Edition, Chapter 6, §6.5.2, printed pp. 243–244](https://courses.washington.edu/mengr503/Chapter_6.pdf)

