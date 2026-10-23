---
id: ex-fd-x05-application
kind: example
title: Vortex topology and global-Bernoulli counterexamples — worked interpretation
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
- pthm-fd-px05-prediction
dependency_roles:
  pthm-fd-px05-prediction: physical-result
physical_scope: Constructed numerical substitutions in exact inviscid model fields; not observations or predictions
  for a viscous material.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: Stewart, MIT 8.09, Fluid Mechanics
    url: https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf
    locator: §6.4, printed pp. 120–123.
verification:
  precheck: pending
---

## Example

In the steady incompressible Euler model, choose vortex circulation parameter $\kappa=1\,\mathrm{m^2\,s^{-1}}$. Its circulation on a radius-$2\,\mathrm m$ circle is $2\pi\,\mathrm{m^2\,s^{-1}}$, although curl vanishes off the axis. In a separate solid-rotation field choose $\Omega=0.2\,\mathrm{s^{-1}}$ and $\rho_0=1000\,\mathrm{kg\,m^{-3}}$. For the steady solid-rotation field $u(x,y,z)=\Omega(-y,x,0)$, a streamline is a $C^1$ curve $\gamma:J\to\mathbb R^3$, with $J\subseteq\mathbb R$ an interval, satisfying $\gamma'(s)=u(\gamma(s))$. The Bernoulli value $B=p/\rho_0+|u|^2/2$ differs between radii $1$ m and $2$ m by $0.12\,\mathrm{m^2\,s^{-2}}$, while it remains constant along each circular streamline. These are conditional model calculations.

## Example references

[Stewart, MIT 8.09, *Fluid Mechanics*, §6.4, printed pp. 120–123](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf)


## Facts & Assumptions

**Given:** The two exact steady incompressible Euler fields and selected values above.

[F1] [[pthm-fd-px05-prediction]]: vortex circulation is $2\pi\kappa$, and solid-rotation Bernoulli is $p_0/\rho_0+\Omega^2r^2$, constant on but not across circles.

[F2] [[def-fd-x00]]: Cartesian curl uses $\operatorname{curl}u=(\partial_yu_z-\partial_zu_y,\partial_zu_x-\partial_xu_z,\partial_xu_y-\partial_yu_x)$. For a closed piecewise-$C^1$ oriented curve $\gamma:[a,b]\to\Omega$, circulation is $\oint_\gamma u\cdot d\mathbf r=\int_a^b u(\gamma(s))\cdot\gamma'(s)\,ds$.

## Proof

1.1 With $\kappa=1$ and $R=2$, $\Gamma=2\pi\kappa=2\pi\,\mathrm{m^2\,s^{-1}}$. Nonzero circulation contradicts the closed-loop integral of a global gradient, so the curl-free field has no global potential on the punctured domain. [given, F1, algebra]

2.1 The Bernoulli difference is $\Omega^2(2^2-1^2)=0.04\cdot3=0.12\,\mathrm{m^2\,s^{-2}}$. For $\gamma(s)=(x(s),y(s),z(s))$, the streamline ODE gives $\frac{d}{ds}(x(s)^2+y(s)^2)=2x(-\Omega y)+2y(\Omega x)=0$. Therefore each circular streamline has fixed radius and one Bernoulli value, while the selected radii have the displayed different values. [given, F1, step 1.1, algebra] ∎

