---
id: post-fd-creeping-force-balance
kind: postulate
title: Alternative restricted creeping-flow force balance
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
deps:
- post-fd-newtonian-fourier
- post-fd-boundary-data
dependency_roles:
  post-fd-newtonian-fourier: formulation-prerequisite
  post-fd-boundary-data: formulation-prerequisite
physical_scope: Ideal creeping-flow alternative, prescribed stress/data, constant density, no unconditional NS approximation
  error or empirical premise.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
  - title: Stewart, MIT 8.09, Fluid Mechanics
    url: https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf
    locator: §6.8, printed pp. 135–139.
  - title: University of Washington, An Introduction to Continuum Mechanics
    url: https://courses.washington.edu/mengr503/Chapter_6.pdf
    locator: §§6.5.1–6.5.3, printed pp. 242–245.
verification:
  precheck: pending
---

## Postulate

For a smooth constant-density incompressible Newtonian continuum in an inertial Cartesian chart, select the steady zero-inertia alternative force balance on an open region $\Omega\subseteq\mathbb R^3$. Let $\rho_0>0$ be constant mass density, $\mu>0$ constant dynamic viscosity, $u\in C^2(\Omega;\mathbb R^3)$ velocity, $p\in C^1(\Omega)$ pressure and $b\in C^0(\Omega;\mathbb R^3)$ specified body acceleration. In SI units, $\rho_0$ is $\mathrm{kg\,m^{-3}}$, $\mu$ is $\mathrm{Pa\,s}$, $u$ is $\mathrm{m\,s^{-1}}$, $b$ is $\mathrm{m\,s^{-2}}$, and $p$ is in pascals. Adopt
$$\operatorname{div}u=0,\qquad \sigma=-pI+2\mu D,\qquad \operatorname{div}\sigma+\rho_0b=0,\qquad D=\tfrac12(\nabla u+\nabla u^{\mathsf T}).$$
Here $(\nabla u)_{ij}=\partial_j u_i$ and $(\operatorname{div}\sigma)_i=\sum_j\partial_j\sigma_{ij}$. This is an alternative zero-inertia branch: the full material-acceleration momentum equation is not also imposed on the same field. For constant $\mu$, the adopted balance is equivalent to $-\nabla p+\mu\Delta u+\rho_0b=0$. The Postulate does not assert that small Reynolds number alone yields this branch, provide an approximation error or solution-existence result, or establish empirical validity. Boundary and far-field data remain separate.

## Postulate references

[Stewart, MIT 8.09, *Fluid Mechanics*, §6.8, printed pp. 135–139](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf)


[University of Washington, *An Introduction to Continuum Mechanics*, Chapter 6, §§6.5.1–6.5.3, printed pp. 242–245](https://courses.washington.edu/mengr503/Chapter_6.pdf)

## Facts & Assumptions

**Given:** Smooth fields, constant $\rho_0,\mu>0$, specified body acceleration and the adopted steady zero-inertia alternative force law.

[A1] [[post-fd-newtonian-fourier]]: the selected mechanical closure is $\sigma=-pI+2\mu D$ in the constant-density incompressible subcase.

[A2] [[post-fd-boundary-data]]: boundary and far-field data are separately selected and are not implied by the local force law.

[F1] [[def-fd-quantity-and-frame-conventions]]: Newtonian spacetime has absolute time in seconds and oriented Euclidean affine three-space; an inertial Cartesian chart is an orientation-preserving affine isometry from that space to $\mathbb R^3$, with coordinates in metres and chart changes $t^*=t+t_0$, $x^*=Qx+vt+a$ for constant $Q\in\mathrm{SO}(3)$, relative velocity $v$ in $\mathrm{m\,s^{-1}}$, and translation $a$ in metres. Here a frame means the adapted chart, not an observer congruence or basis field.

## Formulation notes

The steady zero-inertia balance is an adopted alternative branch, not a deduction from the full material-acceleration equation or from experimental data. For constant $\mu$, componentwise differentiation gives $\operatorname{div}(2\mu D)=\mu\Delta u+\mu\nabla\operatorname{div}u$. Incompressibility therefore makes the adopted force law equivalent to $-\nabla p+\mu\Delta u+\rho_0b=0$. Boundary and far-field data remain separate inputs; this algebraic equivalence supplies no approximation-error or solvability claim.
