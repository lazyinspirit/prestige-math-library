---
id: ex-fd-x13-application
kind: example
title: Exterior potential sphere and zero ideal force — worked interpretation
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
- pthm-fd-px13-prediction
dependency_roles:
  pthm-fd-px13-prediction: physical-result
physical_scope: Constructed parameter substitution into an inviscid impermeable-slip sphere solution, not a measured
  force or viscous-drag prediction.
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
  - title: Fitzpatrick, Fluid Mechanics, UT Austin
    url: https://farside.ph.utexas.edu/teaching/336L/Fluid/node102.html
    locator: Potential sphere and zero resultant.
verification:
  precheck: pending
---

## Example

For the inviscid fixed-sphere model choose $a=1\,\mathrm m$, $U=(2,0,0)\,\mathrm{m\,s^{-1}}$, $\rho_0=1\,\mathrm{kg\,m^{-3}}$, and $p_\infty=10^5\,\mathrm{Pa}$. At polar angle $\theta$ from the $x$-axis, surface pressure is $p=10^5+2(1-\tfrac94\sin^2\theta)\,\mathrm{Pa}$. It is $100002\,\mathrm{Pa}$ at the front/back poles and $99997.5\,\mathrm{Pa}$ at the equator. Antipodal algebra gives zero pressure-only resultant. This is not a no-slip viscous-sphere calculation.

## Example references

[Stewart, MIT 8.09, *Fluid Mechanics*, §6.4, printed pp. 120–123](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf)

[Fitzpatrick, *Fluid Mechanics*, UT Austin, potential sphere](https://farside.ph.utexas.edu/teaching/336L/Fluid/node102.html)

## Facts & Assumptions

**Given:** $a=1\,\mathrm m$, $U=(2,0,0)\,\mathrm{m\,s^{-1}}$, $\rho_0=1\,\mathrm{kg\,m^{-3}}$, $p_\infty=10^5\,\mathrm{Pa}$ and exact slip solution.

[F1] [[pthm-fd-px13-prediction]]: surface velocity is tangent, pressure is $p_\infty+\rho_0(|U|^2-|u|^2)/2$, and pressure-only resultant vanishes.

## Proof

1.1 At $r=a$, speed is $3|U|\sin\theta/2=3\sin\theta\,\mathrm{m\,s^{-1}}$. Bernoulli gives $p=10^5+\tfrac12(4-9\sin^2\theta)$ Pa, yielding $100002$ Pa at $\sin\theta=0$ and $99997.5$ Pa at $\sin\theta=1$. [given, F1, algebra]

2.1 Pressure depends on $\sin^2\theta$ and is therefore unchanged at antipodal surface points, where normals are opposite. Their pressure-force contributions cancel in pairs; the zero result is only for inviscid pressure stress. [F1, step 1.1, algebra] ∎

