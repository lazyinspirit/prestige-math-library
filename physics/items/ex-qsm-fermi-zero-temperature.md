---
id: ex-qsm-fermi-zero-temperature
kind: example
title: "Fermi sea energy and ideal degeneracy pressure"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 6
deps:
  - pthm-qsm-fermi-zero-temperature
  - def-countable-choice
dependency_roles:
  pthm-qsm-fermi-zero-temperature: physical-result
  def-countable-choice: mathematical-premise
physical_scope: "A three-dimensional ideal Fermi sea at fixed density, calculating its Fermi wave number, mean energy per particle, and grand thermodynamic pressure from the linked zero-temperature theorem. It is not a material equation of state or measured pressure."
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Mehran Kardar, MIT OpenCourseWare 8.333, Lecture 24, degenerate Fermi gas"
      url: "https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/9d5207eef23c4d6e18ef3afbca5d9d81_MIT8_333F13_Lec24.pdf"
---

## Example

For degeneracy $g=2$ and number density $\rho>0$ in the declared homogeneous ideal model, the zero-temperature occupied region is the ball $|k|<k_F$, where $k_F=(3\pi^2\rho)^{1/3}$. The mean kinetic energy per particle is $3E_F/5$ and the ideal grand thermodynamic pressure is $2\rho E_F/5$, with $E_F=\hbar^2k_F^2/(2m)$. These values are model predictions under the ideal-gas assumptions.

## Verification

**Given:** $\mathrm{AC}_\omega$ ([[def-countable-choice]]), $g=2$, $\rho>0$, $\alpha=\hbar^2/(2m)$, and the zero-temperature formulas of [[pthm-qsm-fermi-zero-temperature]], with its SI convention: $m>0$ is the mass parameter in kg, $\hbar>0$ is the reduced Planck constant parameter in J s, $\alpha$ has units J m$^2$, $\rho$ is number per volume in m$^{-3}$, $k$ and $k_F$ have units m$^{-1}$, $E_F$ and $u/\rho$ have units J, $u$ has units J m$^{-3}$, and $p$ has units Pa $=$ J m$^{-3}$. The internal multiplicity $g=2$ is dimensionless.

[F1] [[pthm-qsm-fermi-zero-temperature]], Statement: $k_F=(6\pi^2\rho/g)^{1/3}$, $u=(3/5)\rho E_F$, and $p=2u/3$.

1.1 Setting $g=2$ in [F1] gives $k_F=(3\pi^2\rho)^{1/3}$ and $E_F=\alpha k_F^2=\hbar^2k_F^2/(2m)$. Dividing the energy density $u$ by the number density $\rho$ gives mean energy per particle $3E_F/5$. [given, F1, algebra]

2.1 The pressure identity in [F1] yields $p=(2/3)(3/5)\rho E_F=2\rho E_F/5$. The result applies to the ideal continuum model and supplies no material-specific or empirical pressure. [step 1.1, F1, algebra] ∎
