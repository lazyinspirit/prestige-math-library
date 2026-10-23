---
id: pthm-fd-px06-prediction
kind: physics-theorem
title: Exterior sphere Stokes solution, force and decay-class uniqueness — conditional physical prediction
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
- thm-fd-x06
- def-countable-choice
- post-fd-boundary-data
- post-fd-newtonian-fourier
- def-fd-creeping-stokes-model
dependency_roles:
  thm-fd-x06: mathematical-premise
  def-countable-choice: mathematical-premise
  post-fd-boundary-data: physical-assumption
  post-fd-newtonian-fourier: physical-assumption
  def-fd-creeping-stokes-model: formulation-prerequisite
physical_scope: Exterior r>a smooth Stokes problem, no-slip sphere, constant far field; explicit O(r^-1)/O(r^-2)
  velocity/gradient/pressure decay class; exact 6πμaU force. Worked example is the actual explicit field/parameter
  selection in that section. B leaf cannot supply any later item. Inherits ACω.
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
  - title: Fitzpatrick, Fluid Mechanics, UT Austin
    url: https://farside.ph.utexas.edu/teaching/336L/Fluid/node142.html
    locator: Stokes sphere solution and drag.
  - title: Mandre, Fluid Dynamics Lecture Notes
    url: https://notes.shreyasmandre.com/fluid-dynamics-notes/Ch9.html
    locator: Chapter 9; translating-sphere sign convention.
verification:
  precheck: pending
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $a,\mu,\rho_0>0$, $p_\infty\in\mathbb R$, $U\in\mathbb R^3$, $\nu=\mu/\rho_0$, and $\Omega_a=\{x\in\mathbb R^3:r=|x|>a\}$. Set $s=U\cdot x$ and
$$u=A(r)U+B(r)sx,\quad A(r)=1-\frac{3a}{4r}-\frac{a^3}{4r^3},\quad B(r)=-\frac{3a}{4r^3}+\frac{3a^3}{4r^5},\quad p=p_\infty-\frac{3\mu a}{2}\frac{s}{r^3},$$
where the force-free, steady creeping model is selected. In Cartesian coordinates, $\operatorname{div}u=\sum_i\partial_i u_i$ and $(\Delta u)_i=\sum_j\partial_{jj}u_i$. The field is $C^2$ up to the sphere from outside, $p\in C^1$, $u=0$ at $r=a$, and $u\to U$ uniformly in direction at infinity. It solves $\rho_0^{-1}\nabla p-\nu\Delta u=0$, $\operatorname{div}u=0$. For $n=x/a$ on $S_a$, with $\sigma=-pI+\mu(\nabla u+(\nabla u)^{\mathsf T})$, the oriented resultant is
$$\int_{S_a}\sigma n\,dS=6\pi\mu aU.$$
Among classical pairs solving the same Stokes system, boundary condition and far-field limits, this pair is unique in the uniform decay class $u-U=O(r^{-1})$, $\nabla u=O(r^{-2})$, $p-p_\infty=O(r^{-2})$, with all bounds uniform in direction and pressure normalized by its limit. The classical regularity is $u\in C^2$, $p\in C^1$ locally up to $S_a$. Under SI units, $a,r,x$ are metres, $U$ is $\mathrm{m\,s^{-1}}$, $\rho_0$ is $\mathrm{kg\,m^{-3}}$, $\mu$ is $\mathrm{Pa\,s}$, $\nu$ is $\mathrm{m^2\,s^{-1}}$, pressure is pascals, and resultant is newtons. This is an exact zero-inertia model result; no error estimate comparing it with the full momentum equation retaining material acceleration, and no exterior Navier–Stokes existence claim, is asserted.

## Statement references

[Stewart, MIT 8.09, *Fluid Mechanics*, §6.8, printed pp. 135–139](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf)

[Fitzpatrick, *Fluid Mechanics*, UT Austin, Stokes flow around a sphere](https://farside.ph.utexas.edu/teaching/336L/Fluid/node142.html)

[Mandre, *Fluid Dynamics Lecture Notes*, Chapter 9; translating-sphere convention reverses the velocity sign](https://notes.shreyasmandre.com/fluid-dynamics-notes/Ch9.html)

## Facts & Assumptions

**Given:** $\rho_0,\mu,a>0$, $U,p_\infty$, the exterior domain, exact fields, force-free boundary/far-field data and uniform decay class.

[A1] [[post-fd-boundary-data]]: no-slip and far-field data are separate model inputs; specifying them alone yields no existence result.

[A2] [[post-fd-newtonian-fourier]]: in the incompressible constant-viscosity subcase, $\sigma=-pI+2\mu D$.

[F1] [[def-fd-creeping-stokes-model]]: the selected force-free model is $\operatorname{div}u=0$ and $\operatorname{div}\sigma=0$ with $\sigma=-pI+2\mu D$.

[F2] [[def-countable-choice]]: $\mathrm{AC}_\omega$ asserts a choice function for every sequence of nonempty sets; the mathematical uniqueness proof assumes it.

[F3] [[thm-fd-x06]]: under $\mathrm{AC}_\omega$, the exact exterior fields solve Stokes, have resultant $6\pi\mu aU$, and are unique only in the stated uniform decay class.

## Proof

1.1 By [F3], the displayed fields are classical on the exterior, satisfy no-slip, the uniform far field and the force-free Stokes system; their stress integral with $n=x/a$ has vector value $6\pi\mu aU$. This matches the selected model [A2, F1]. [given, A1, A2, F1, F3]

2.1 Uniqueness uses $\mathrm{AC}_\omega$ [F2] and is restricted to the stated regularity, pressure normalization and uniform decay bounds. It gives no uniqueness beyond this class. [F2, F3, step 1.1]

3.1 The equation was adopted as a zero-inertia model [F1]; the force deduction is conditional and supplies no error estimate against the full material-acceleration equation or experimental measurement. [F1, step 1.1, step 2.1] ∎

