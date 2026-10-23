---
id: def-fd-creeping-stokes-model
kind: definition
title: Restricted incompressible creeping-flow Stokes model
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
- post-fd-newtonian-fourier
- post-fd-boundary-data
- post-fd-creeping-force-balance
dependency_roles:
  post-fd-newtonian-fourier: physical-assumption
  post-fd-boundary-data: physical-assumption
  post-fd-creeping-force-balance: physical-assumption
physical_scope: Ideal creeping-flow auxiliary model with specified data/decay/regularity; no empirical premises.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: Stewart, MIT 8.09, Fluid Mechanics
    url: https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf
    locator: §6.8, printed pp. 135–139.
  - title: University of Washington, An Introduction to Continuum Mechanics, Chapter 6
    url: https://courses.washington.edu/mengr503/Chapter_6.pdf
    locator: §§6.5.1–6.5.3, printed pp. 242–245.
verification:
  precheck: pending
---

## Definition

Let $\Omega\subseteq\mathbb R^3$ be open, $\rho_0>0$ constant density, $\mu>0$ constant viscosity, $u\in C^2(\Omega;\mathbb R^3)$ velocity, $p\in C^1(\Omega)$ pressure, and $b\in C^0(\Omega;\mathbb R^3)$ specified body acceleration. Set $D=(\nabla u+\nabla u^{\mathsf T})/2$, $(\operatorname{div}\sigma)_i=\sum_j\partial_j\sigma_{ij}$ and $(\Delta u)_i=\sum_j\partial_{jj}u_i$. The selected steady creeping Stokes branch is
$$\operatorname{div}u=0,\qquad \sigma=-pI+2\mu D,\qquad \operatorname{div}\sigma+\rho_0b=0.$$
Equivalently, $-\nabla p+\mu\Delta u+\rho_0b=0$. The definition uses the zero-inertia alternative force balance and does not also impose the full material-acceleration equation on the same field. Boundary, far-field, geometry and decay conditions are separate. The force-free sphere application selects $b=0$. This is not a finite-Reynolds-number approximation theorem.

## Definition references


[Stewart, MIT 8.09, *Fluid Mechanics*, §6.8, printed pp. 135–139](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf)

## Facts & Assumptions

**Given:** Open $\Omega$, constant $\rho_0,\mu>0$, $u\in C^2$, $p\in C^1$, specified $b$, and adopted constitutive and zero-inertia inputs.

[A1] [[post-fd-boundary-data]]: boundary and far-field inputs are separate and imply no solution.

[A2] [[post-fd-newtonian-fourier]]: the selected stress is $\sigma=-pI+2\mu D$; its Fourier law is unused.

[A3] [[post-fd-creeping-force-balance]]: the alternative steady balance is $\operatorname{div}\sigma+\rho_0b=0$, and the full material-acceleration law is not simultaneously imposed.

## Proof

1.1 The definition combines the incompressible Newtonian stress [A2] with the adopted alternative steady force balance [A3]. It is a formulation definition, not a derivation from measurements. [given, A2, A3, algebra]

1.2 Componentwise, $(\operatorname{div}(2\mu D))_i=\mu\Delta u_i+\mu\partial_i\operatorname{div}u$. The last term vanishes; therefore $\operatorname{div}\sigma+\rho_0b=0$ is exactly $-\nabla p+\mu\Delta u+\rho_0b=0$. [given, A2, A3, algebra]

1.3 No boundary data enter this equivalence; their selection under [A1] gives no existence or error estimate. [given, A1, step 1.2, algebra] ∎