---
id: rem-fd-thermal-coupling
kind: remark
title: Thermal balance requires an additional coupling
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - pthm-fd-periodic-weak-continuation
  - post-td-local-energy-balance
  - post-td-fourier-conductivity
  - pthm-td-fourier-entropy-production
  - pthm-td-neumann-heat-relaxation
  - def-countable-choice
dependency_roles:
  pthm-fd-periodic-weak-continuation: physical-result
  post-td-local-energy-balance: physical-assumption
  post-td-fourier-conductivity: physical-assumption
  pthm-td-fourier-entropy-production: physical-result
  pthm-td-neumann-heat-relaxation: physical-result
  def-countable-choice: mathematical-premise
physical_scope: >-
  Comparison of the separate periodic isothermal mechanical branch and the
  rectangular insulated continuum-heat branch. No coupled temperature
  evolution, viscous-heating source, or total thermomechanical energy balance
  is asserted.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Lenya Ryzhik, Lecture Notes for Math 256B, Version 2024"
      url: "https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf"
      locator: "§1.3, printed pp. 9–11, for the isothermal incompressible Newtonian mechanical model."
    - title: "Luigi C. Berselli and Stefano Spirito, On the Existence of Leray–Hopf Weak Solutions to the Navier–Stokes Equations, Fluids 6(1), 42 (2021)"
      url: "https://www.mdpi.com/2311-5521/6/1/42/pdf"
      locator: "§1, printed pp. 1–3, which formulates the incompressible model at constant temperature and density."
---

## Remark

The periodic mechanical model has a velocity field and a kinetic-energy inequality with viscous dissipation, but it has no temperature variable. The separate thermal model uses a positive temperature field $T$ in kelvin, a thermal energy density $e_{\mathrm{th}}(T)$ in $\mathrm{J\,m^{-3}}$, and heat flux $j_Q$ in $\mathrm{W\,m^{-2}}$; its adopted local balance is $\partial_t e_{\mathrm{th}}(T)+\operatorname{div}j_Q=0$ with insulated faces $j_Q\cdot n=0$. Its Fourier constitutive assumption is $j_Q=-K(x,T)\nabla T$, where the symmetric part of $K$ is positive semidefinite. The separate entropy-production theorem and constant-conductivity Neumann heat-evolution theorem retain their own regularity and initial-data conditions.

Neither branch identifies any part of the mechanical viscous dissipation with a source in the thermal balance, and the two branches use different domains. A coupled temperature evolution therefore requires an additional model assumption specifying the conversion of mechanical energy into heat and a common domain/field interface; it does not follow from the weak periodic continuation or from the thermal entropy and heat-evolution results.

## Remark references

[[pthm-fd-periodic-weak-continuation|Weak continuation of the periodic mechanical model and its kinetic-energy inequality]]

[[post-td-local-energy-balance|Insulated local thermal energy balance with no volumetric source]]

[[post-td-fourier-conductivity|Fourier heat-flux constitutive assumption]]

[[pthm-td-fourier-entropy-production|Conditional local thermal entropy production]]

[[pthm-td-neumann-heat-relaxation|Conditional constant-conductivity Neumann heat evolution and relaxation]]

[Lenya Ryzhik, *Lecture Notes for Math 256B*, Version 2024, §1.3, printed pp. 9–11](https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf)

[Berselli and Spirito, *On the Existence of Leray–Hopf Weak Solutions to the Navier–Stokes Equations*, §1, printed pp. 1–3](https://www.mdpi.com/2311-5521/6/1/42/pdf)
