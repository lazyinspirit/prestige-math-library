---
id: def-fd-creeping-stokes-model
kind: definition
title: Restricted incompressible creeping-flow Stokes model
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - post-fd-newtonian-fourier
  - post-fd-boundary-data
  - post-fd-creeping-force-balance
  - def-fd-quantity-and-frame-conventions
dependency_roles:
  post-fd-newtonian-fourier: physical-assumption
  post-fd-boundary-data: physical-assumption
  post-fd-creeping-force-balance: physical-assumption
  def-fd-quantity-and-frame-conventions: formulation-prerequisite
physical_scope: Ideal creeping-flow auxiliary model with specified
  data/decay/regularity; no empirical premises.
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
    - title: University of Washington, An Introduction to Continuum Mechanics, Chapter
        6
      url: https://courses.washington.edu/mengr503/Chapter_6.pdf
      locator: §§6.5.1–6.5.3, printed pp. 242–245.
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Definition

Use the Newtonian Cartesian inertial chart convention of the earlier classical-frame definition, with spatial coordinates $x$ in metres. Let $\Omega\subseteq\mathbb R^3$ be open, $\rho_0>0$ constant density in $\mathrm{kg\,m^{-3}}$, $\mu>0$ constant dynamic viscosity in $\mathrm{Pa\,s}$, $u\in C^2(\Omega;\mathbb R^3)$ velocity in $\mathrm{m\,s^{-1}}$, $p\in C^1(\Omega)$ pressure in pascals, and $b\in C^0(\Omega;\mathbb R^3)$ specified body acceleration in $\mathrm{m\,s^{-2}}$. Set $D=(\nabla u+\nabla u^{\mathsf T})/2$ in $\mathrm{s^{-1}}$, $(\operatorname{div}\sigma)_i=\sum_j\partial_j\sigma_{ij}$, and $(\Delta u)_i=\sum_j\partial_{jj}u_i$; $\nabla$ has units $\mathrm{m^{-1}}$ and $\Delta$ has units $\mathrm{m^{-2}}$. The stress $\sigma=-pI+2\mu D$ has units Pa. The selected steady creeping Stokes branch is
$$\operatorname{div}u=0,\qquad \sigma=-pI+2\mu D,\qquad \operatorname{div}\sigma+\rho_0b=0.$$
Equivalently, $-\nabla p+\mu\Delta u+\rho_0b=0$. The definition uses the zero-inertia alternative force balance and does not also impose the full material-acceleration equation on the same field. Boundary, far-field, geometry and decay conditions are separate. The force-free sphere application selects $b=0$. No error estimate comparing this steady branch with the full constant-density momentum equation retaining material acceleration is asserted.

## Definition references

[[def-fd-quantity-and-frame-conventions]]


[Stewart, MIT 8.09, *Fluid Mechanics*, §6.8, printed pp. 135–139](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf)

## Facts & Assumptions

**Given:** Open $\Omega$, constant $\rho_0,\mu>0$, $u\in C^2$, $p\in C^1$, specified $b$, and adopted constitutive and zero-inertia inputs.

[A1] [[post-fd-boundary-data]]: boundary and far-field inputs are separate and imply no solution.

[A2] [[post-fd-newtonian-fourier]]: the selected stress is $\sigma=-pI+2\mu D$; its Fourier law is unused.

[A3] [[post-fd-creeping-force-balance]]: the alternative steady balance is $\operatorname{div}\sigma+\rho_0b=0$, and the full material-acceleration law is not simultaneously imposed.

[F1] [[def-fd-quantity-and-frame-conventions]]: time is absolute in seconds on Newtonian spacetime with oriented Euclidean affine three-space; a frame is an adapted Cartesian inertial chart with spatial coordinates in metres and inertial chart changes $t^*=t+t_0$, $x^*=Qx+vt+a$ for constant $Q\in\mathrm{SO}(3)$, $v$ in $\mathrm{m\,s^{-1}}$, and $a$ in metres. Its SI dictionary assigns $u$ units $\mathrm{m\,s^{-1}}$, $\rho_0$ units $\mathrm{kg\,m^{-3}}$, $p$ units Pa, $\mu$ units $\mathrm{Pa\,s}$, and $b$ units $\mathrm{m\,s^{-2}}$.

## Proof

1.1 Use the adapted Cartesian inertial chart and SI field dictionary in [F1]. The definition combines the incompressible Newtonian stress [A2] with the adopted alternative steady force balance [A3]. It is a formulation definition, not a derivation from measurements. [given, A2, A3, F1, algebra]

1.2 Componentwise, $(\operatorname{div}(2\mu D))_i=\mu\Delta u_i+\mu\partial_i\operatorname{div}u$. The last term vanishes; therefore $\operatorname{div}\sigma+\rho_0b=0$ is exactly $-\nabla p+\mu\Delta u+\rho_0b=0$. [given, A2, A3, algebra]

2.1 No boundary data enter this equivalence; their selection under [A1] gives no existence or error estimate. [given, A1, step 1.2, algebra] ∎

