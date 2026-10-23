---
id: rem-fd-thermal-coupling
kind: remark
title: Thermomechanical coupling requires additional assumptions
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 6
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
  rectangular insulated continuum-heat branch. No coupled temperature evolution,
  viscous-heating source, or total thermomechanical energy balance is asserted.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Lenya Ryzhik, Lecture Notes for Math 256B, Version 2024"
      url: "https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf"
      locator: "§1.3, printed pp. 9–11, for the isothermal incompressible Newtonian
        mechanical model."
    - title: "Luigi C. Berselli and Stefano Spirito, On the Existence of Leray–Hopf
        Weak Solutions to the Navier–Stokes Equations, Fluids 6(1), 42 (2021)"
      url: "https://www.mdpi.com/2311-5521/6/1/42/pdf"
      locator: "§1, printed pp. 1–3, which formulates the incompressible model at
        constant temperature and density."
---

## Remark

The periodic mechanical model has a velocity field and a kinetic-energy inequality with viscous dissipation, but it has no temperature variable. The separate thermal model uses a fixed rectangle $\Omega=\prod_{i=1}^3(0,L_i)$ with lengths $L_i>0$ in metres, an open time interval $I\subseteq\mathbb R$ measured in seconds, and a temperature field $T:\overline\Omega\times I\to\mathcal T\subset(0,\infty)$, where $\mathcal T$ is an open interval, measured in kelvins; its time derivative through order one and spatial derivatives through order two extend continuously to $\overline\Omega\times I$. In that thermal supplier, $u\in C^1(\mathcal T,\mathbb R)$ is the internal-energy density in $\mathrm{J\,m^{-3}}$ and $c(T):=u'(T)>0$ is the volumetric heat capacity in $\mathrm{J\,m^{-3}\,K^{-1}}$; write $e_{\mathrm{th}}:=u$ to distinguish this caloric function from the mechanical velocity notation. The thermal flux is $j_Q:\overline\Omega\times I\to\mathbb R^3$ in $\mathrm{W\,m^{-2}}$; in the adopted local-energy postulate it and its first spatial derivatives extend continuously to $\overline\Omega\times[t_0,t_1]$ for every compact $[t_0,t_1]\subset I$, and $j_Q\cdot n=0$ on every face, where $n$ is the outward unit normal. Its local balance is $\partial_t e_{\mathrm{th}}(T)+\operatorname{div}j_Q=0$, with $\operatorname{div}j_Q=\sum_{i=1}^3\partial_{x_i}(j_Q)_i$. The Fourier constitutive assumption is $j_Q=-K(x,T)\nabla T$, where $\nabla T=(\partial_{x_i}T)_{i=1}^3$, $K:\overline\Omega\times\mathcal T\to\mathbb R^{3\times3}$ has entries in $\mathrm{W\,m^{-1}\,K^{-1}}$, and $K_s:=(K+K^{\mathsf T})/2$ satisfies $z^{\mathsf T}K_s(x,T)z\ge0$ for every $z\in\mathbb R^3$. The separate entropy-production theorem and constant-conductivity Neumann heat-evolution theorem retain their own regularity and initial-data conditions.

Neither branch identifies any part of the mechanical viscous dissipation with a source in the thermal balance, and the two branches use different domains. A model relating the mechanical and thermal fields requires additional assumptions specifying that relation and a common domain/field interface. In particular, identifying mechanical viscous dissipation with a source in the thermal balance requires an additional assumption specifying that conversion. A coupled temperature evolution does not follow from the weak periodic continuation or from the thermal entropy and heat-evolution results.

## Remark references

[[pthm-fd-periodic-weak-continuation|Weak continuation of the periodic mechanical model and its kinetic-energy inequality]]

[[post-td-local-energy-balance|Insulated local thermal energy balance with no volumetric source]]

[[post-td-fourier-conductivity|Fourier heat-flux constitutive assumption]]

[[pthm-td-fourier-entropy-production|Conditional local thermal entropy production]]

[[pthm-td-neumann-heat-relaxation|Conditional constant-conductivity Neumann heat evolution and relaxation]]

[Lenya Ryzhik, *Lecture Notes for Math 256B*, Version 2024, §1.3, printed pp. 9–11](https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf)

[Berselli and Spirito, *On the Existence of Leray–Hopf Weak Solutions to the Navier–Stokes Equations*, §1, printed pp. 1–3](https://www.mdpi.com/2311-5521/6/1/42/pdf)
