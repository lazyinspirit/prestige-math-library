---
id: def-tgr-emitter-quasistatic-diagnostic
kind: definition
title: Quasistatic diagnostic for the ideal emitter model
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 5
deps:
  - def-countable-choice
  - prop-tgr-ideal-evaporation-accounting
dependency_roles:
  def-countable-choice: mathematical-premise
  prop-tgr-ideal-evaporation-accounting: mathematical-premise
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Robert M. Wald, The Thermodynamics of Black Holes, Living Reviews in Relativity 4 (2001), 6"
      url: "https://arxiv.org/pdf/gr-qc/9912119"
      locator: "Complete 46-page review; §2, PDF pp. 6–10, and §3, PDF pp. 10–16, for the stationary horizon and evaporation context. The local diagnostic below is defined here, not supplied by the review."
    - title: "Pietro Benetti Genolini, Introduction to black hole thermodynamics, lecture notes for the Roberto Salmeron School in Mathematical Physics (2025), arXiv:2512.24929v1"
      url: "https://arxiv.org/pdf/2512.24929v1"
      locator: "Complete 84-page lecture notes; §1.3, PDF pp. 14–16, and §2.1, PDF pp. 18–20, for stationary-family and thermodynamic conventions. The local diagnostic below is defined here."
verification:
  precheck: n/a
---

## Definition

Assume $\mathrm{AC}_\omega$ as defined by [[def-countable-choice]] and use the fixed-reference mathematical emitter model of [[prop-tgr-ideal-evaporation-accounting]], with positive constants $G,c$, a positive mass function $M(t_\infty)$, and the model horizon radius $r_H(M)=2GM/c^2$. Here $t_\infty$ is measured in seconds, $M$ in kilograms, $r_H$ in metres, $G$ in $\mathrm{m^3\,kg^{-1}\,s^{-2}}$, and $c$ in $\mathrm{m\,s^{-1}}$. For each $t_\infty\in[0,\tau]$, including the positive-mass cutoff endpoint supplied by the model, where $M(\tau)=M_{\min}>0$, define the selected crossing-time scale and dimensionless fractional-change diagnostic by

$$ t_{\mathrm{cross}}(t_\infty):=\frac{r_H(M(t_\infty))}{c}, \qquad \epsilon_{\mathrm{qs}}(t_\infty):=\frac{|M'(t_\infty)|\,t_{\mathrm{cross}}(t_\infty)}{M(t_\infty)}. $$

Thus $t_{\mathrm{cross}}$ has units of seconds and $\epsilon_{\mathrm{qs}}$ is dimensionless. This is a diagnostic defined from the adopted mass ODE and the chosen length scale $r_H/c$; it is not a measured crossing time, an estimate of error against a time-dependent Einstein solution, or a proof that the ideal model approximates such a solution.
