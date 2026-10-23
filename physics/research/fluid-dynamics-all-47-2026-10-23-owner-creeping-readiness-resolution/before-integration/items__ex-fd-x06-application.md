---
id: ex-fd-x06-application
kind: example
title: Exterior sphere Stokes solution, force and decay-class uniqueness — worked interpretation
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 6
deps:
- pthm-fd-px06-prediction
- def-countable-choice
dependency_roles:
  pthm-fd-px06-prediction: physical-result
  def-countable-choice: mathematical-premise
physical_scope: Constructed substitution into the exact zero-inertia Stokes sphere result, conditional on its uniform
  decay class and ACω; not a finite-Reynolds drag estimate or measurement.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: Fitzpatrick, Fluid Mechanics, UT Austin
    url: https://farside.ph.utexas.edu/teaching/336L/Fluid/node142.html
    locator: Stokes flow around a sphere.
  - title: Stewart, MIT 8.09, Fluid Mechanics
    url: https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf
    locator: §6.8, printed pp. 135–139.
verification:
  precheck: pending
---

## Example

Assume $\mathrm{AC}_\omega$ and use the exact uniform-decay Stokes model for a sphere of radius $a=1\,\mathrm m$ with $\mu=1\,\mathrm{Pa\,s}$, $\rho_0=1\,\mathrm{kg\,m^{-3}}$, and uniform far-field velocity $U=(10^{-3},0,0)\,\mathrm{m\,s^{-1}}$. The exact model resultant with sphere normal directed into the fluid is $6\pi\cdot10^{-3}e_x\,\mathrm N$. The ratio $\rho_0|U|a/\mu=10^{-3}$ is only a parameter calculation; it supplies no finite-Reynolds-number error estimate for this zero-inertia model.

## Example references

[Fitzpatrick, *Fluid Mechanics*, UT Austin, Stokes flow around a sphere](https://farside.ph.utexas.edu/teaching/336L/Fluid/node142.html)

[Stewart, MIT 8.09, *Fluid Mechanics*, §6.8, printed pp. 135–139](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf)

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $a=\mu=\rho_0=1$ in the stated SI units, $U=(10^{-3},0,0)$, and the exact uniform-decay class.

[F1] [[pthm-fd-px06-prediction]]: under $\mathrm{AC}_\omega$, the fixed-sphere Stokes resultant is $6\pi\mu aU$ in the stated orientation and decay class.

[F2] [[def-countable-choice]]: $\mathrm{AC}_\omega$ is countable choice, used by the mathematical uniqueness proof.

## Proof

1.1 Substituting $\mu=a=1$ and $U=10^{-3}e_x\,\mathrm{m\,s^{-1}}$ into $6\pi\mu aU$ gives $6\pi\times10^{-3}e_x\,\mathrm N$. [given, F1, algebra]

1.2 The dimensionless ratio is $(1)(10^{-3})(1)/(1)=10^{-3}$. It does not change the Stokes-model hypotheses or create an error bound for Navier–Stokes. [given, F1, F2, step 1.1, algebra] ∎
