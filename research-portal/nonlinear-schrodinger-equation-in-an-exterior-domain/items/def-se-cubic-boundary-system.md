---
id: def-se-cubic-boundary-system
kind: definition
domain: mathematics
title: Cubic NLS and boundary control formulations
status: draft
deps:
  - def-se-geometry
  - math:def-bounded-c-one-domain-boundary-charts-and-outward-normal
  - math:def-classical-normal-derivative
  - math:def-laplacian-of-a-c2-function
  - math:def-complex-numbers-and-arithmetic
  - math:def-complex-conjugate-real-imaginary-part-and-modulus
  - math:def-directional-and-partial-derivatives
  - math:def-countable-choice
dependency_roles:
  def-se-geometry: mathematical-premise
  math:def-bounded-c-one-domain-boundary-charts-and-outward-normal: mathematical-premise
  math:def-classical-normal-derivative: mathematical-premise
  math:def-laplacian-of-a-c2-function: mathematical-premise
  math:def-complex-numbers-and-arithmetic: mathematical-premise
  math:def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  math:def-directional-and-partial-derivatives: mathematical-premise
  math:def-countable-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF pages 1–2, equations (1.1)–(1.6)
dependency_level: 2
---

## Definition

Assume countable choice. Take the exterior and truncated obstacle geometry $\Omega$, $\Omega_0$, $\Gamma=\Gamma_1\cup\Gamma_2$ as defined previously. Let $T>0$ and $\lambda\in\mathbb R\setminus\{0\}$. For a complex-valued state $u=u(x,t)$, the cubic nonlinear Schrödinger equation on $\Omega_0\times(0,T)$ is

$$iu_t+\Delta u+\lambda|u|^2u=0.$$

Here $i^2=-1$, $u_t=\partial u/\partial t$, and $\Delta u=\sum_{j=1}^n\partial_{x_j}^2u$; both differential operators act on the real and imaginary parts of $u$. The expression $|u|^2u$ is the pointwise cubic expression $u\overline u\,u$ whenever these quantities are defined.

A full-boundary Dirichlet control prescribes $u=h$ on $\Gamma\times(0,T)$; a full-boundary Neumann control prescribes $\partial_\nu u=h$ there. The outer-boundary versions instead prescribe $u=h$ on $\Gamma_1\times(0,T)$ and $u=0$ on $\Gamma_2\times(0,T)$, or respectively $\partial_\nu u=h$ on $\Gamma_1\times(0,T)$ and $\partial_\nu u=0$ on $\Gamma_2\times(0,T)$. The prescribed function $h$ is the boundary control, and a homogeneous boundary condition is one whose prescribed value is zero.

The normal $\nu$ points outward from $\Omega_0$; for a state continuously differentiable up to the boundary, $\partial_\nu u=\nabla_xu\cdot\nu$ means the classical normal derivative, applied componentwise. For less regular states, the equation and boundary equalities are understood only in a separately specified distributional or trace sense for which all terms are defined. No particular weak Neumann trace, solution class, existence or controllability assertion is included in this formulation.

## Definition references

[[def-se-geometry]]

[[math:def-bounded-c-one-domain-boundary-charts-and-outward-normal]]

[[math:def-classical-normal-derivative]]

[[math:def-laplacian-of-a-c2-function]]

[[math:def-complex-numbers-and-arithmetic]]

[[math:def-complex-conjugate-real-imaginary-part-and-modulus]]

[[math:def-directional-and-partial-derivatives]]

[[math:def-countable-choice]]

## Justification

The geometry and disjoint boundary pieces are fixed by [[def-se-geometry]]. Its smooth obstacle boundary and the enclosing sphere provide the local smooth boundary pieces of the bounded truncated open set. The outward normal convention is that of [[math:def-bounded-c-one-domain-boundary-charts-and-outward-normal]], including the countable-choice assumption defined in [[math:def-countable-choice]]. In particular the normal on the obstacle boundary is outward from the truncated exterior, not outward from the obstacle.

The classical normal derivative is the gradient dotted with that normal by [[math:def-classical-normal-derivative]]. The displayed spatial Laplacian is the componentwise extension to complex functions of the real Laplacian in [[math:def-laplacian-of-a-c2-function]]. Once a solution class and the meaning of its boundary values are specified, each listed equation and boundary prescription is a definite condition on $u$ and $h$. The separate weak-interpretation qualification prevents the classical normal derivative from being implicitly applied to arbitrary Sobolev states.

Complex arithmetic and the imaginary unit use [[math:def-complex-numbers-and-arithmetic]]; real and imaginary parts, conjugation and modulus use [[math:def-complex-conjugate-real-imaginary-part-and-modulus]]. The time derivative uses [[math:def-directional-and-partial-derivatives]], applied to the real two-component map $(\operatorname{Re}u,\operatorname{Im}u)$ in the time coordinate of $(x,t)$.

## Source notes

The frozen original article supplies equations (1.1)–(1.3) and the outer-boundary alternatives (1.5)–(1.6). It is cited for attribution of this article-origin formulation, not as a proof of a prerequisite or of controllability.
