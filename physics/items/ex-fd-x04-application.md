---
id: ex-fd-x04-application
kind: example
title: Plane and pipe Couette–Poiseuille verification — worked interpretation
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
- pthm-fd-px04-prediction
dependency_roles:
  pthm-fd-px04-prediction: physical-result
physical_scope: Constructed SI parameter substitution into the exact infinite-geometry profiles; illustrative model
  inputs, not measurements.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: Stewart, MIT 8.09, Fluid Mechanics
    url: https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf
    locator: §6.7, printed pp. 130–133.
  - title: Fitzpatrick, Fluid Mechanics, UT Austin
    url: https://farside.ph.utexas.edu/teaching/336L/Fluid/node134.html
    locator: Parallel plates.
  - title: Fitzpatrick, Fluid Mechanics, UT Austin
    url: https://farside.ph.utexas.edu/teaching/336L/Fluid/node136.html
    locator: Pipe flow.
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Example

In the exact channel and fixed-wall pipe models, choose $h=2\,\mathrm m$, $a=1\,\mathrm m$, $\rho_0=1000\,\mathrm{kg\,m^{-3}}$, $\mu=2\,\mathrm{Pa\,s}$, $G=12\,\mathrm{Pa\,m^{-1}}$, and for the channel $V_0=0,\ V_1=1\,\mathrm{m\,s^{-1}}$. Define dimensionless coordinates $\bar y=y/(1\,\mathrm m)$ and $\bar r=r/(1\,\mathrm m)$. The model profiles and observables are
$$v(y)=\left(\tfrac12\bar y+3\bar y(2-\bar y)\right)\,\mathrm{m\,s^{-1}},\quad Q_{\rm ch}=5\,\mathrm{m^2\,s^{-1}},\quad (\sigma_{xy}(0),\sigma_{xy}(h))=(13,-11)\,\mathrm{Pa};$$
$$w(r)=\tfrac32(1-\bar r^2)\,\mathrm{m\,s^{-1}},\quad Q=\tfrac{3\pi}{4}\,\mathrm{m^3\,s^{-1}},\quad \sigma_{rx}(a)=-6\,\mathrm{Pa}.$$
These are calculated values for the selected models, not experimental data.

## Example references

[Stewart, MIT 8.09, *Fluid Mechanics*, §6.7, printed pp. 130–133](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf)

[Fitzpatrick, *Fluid Mechanics*, UT Austin, parallel plates](https://farside.ph.utexas.edu/teaching/336L/Fluid/node134.html)

[Fitzpatrick, *Fluid Mechanics*, UT Austin, pipe flow](https://farside.ph.utexas.edu/teaching/336L/Fluid/node136.html)

## Facts & Assumptions

**Given:** The SI parameters and exact channel/pipe formulas stated above.

[F1] [[pthm-fd-px04-prediction]]: channel flux and wall shear and fixed-pipe flux and wall shear follow from the exact stated profiles in the infinite one-dimensional model.

## Proof

1.1 With $\bar y=y/(1\,\mathrm m)$, substitution gives $v(y)=(\bar y/2+3\bar y(2-\bar y))\,\mathrm{m\,s^{-1}}$. Integrating the profile over $0\le y\le2\,\mathrm m$ gives $Q_{\rm ch}=5\,\mathrm{m^2\,s^{-1}}$. [given, F1, algebra]

2.1 The channel shear formula gives $2(1/2+6)=13$ Pa at $y=0$ and $2(1/2-6)=-11$ Pa at $y=2$. For the pipe, with $\bar r=r/(1\,\mathrm m)$, $w=(3/2)(1-\bar r^2)\,\mathrm{m\,s^{-1}}$, $Q=3\pi/4\,\mathrm{m^3\,s^{-1}}$, and $-Ga/2=-6\,\mathrm{Pa}$. These are model calculations only. [given, F1, step 1.1, algebra] ∎

