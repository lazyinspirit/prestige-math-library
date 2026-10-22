---
id: def-csm-frontier-bernoulli-relative-free-energy
kind: definition
title: "Bernoulli relative free-energy functional"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-natural-logarithm
dependency_roles:
  def-natural-logarithm: mathematical-premise
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: null
sources:
  references:
    - title: "Lorenzo Bertini, Alberto De Sole, Davide Gabrielli, Giovanni Jona-Lasinio and Claudio Landim, Macroscopic fluctuation theory"
      url: "https://arxiv.org/pdf/1404.6466"
      locator: "Section V.A, equations (5.1)–(5.3): the equilibrium quasi-potential as the free-energy difference from the homogeneous equilibrium profile."
    - title: "Bernard Derrida, Lecture notes on large deviations in non-equilibrium diffusive systems"
      url: "https://arxiv.org/pdf/2505.15618"
      locator: "Section 13.1, equations (145)–(148): equilibrium density rate functional in terms of the free-energy density."
verification:
  precheck: pending
---

## Definition

For $u\in(0,1)$ define the Bernoulli free-energy density $f(u):=u\log u+(1-u)\log(1-u)$. For a reference density $\bar\rho\in(0,1)$ define $h(u\mid\bar\rho):=f(u)-f(\bar\rho)-\bigl(\log\bar\rho-\log(1-\bar\rho)\bigr)(u-\bar\rho)$. For $d\ge1$, a smooth profile $\rho:\mathbb T^d\to[\varepsilon,1-\varepsilon]$ with some $0<\varepsilon<1/2$, and normalized product Haar measure $dx$ on $\mathbb T^d$, define $\mathcal H_{\bar\rho}(\rho):=\int_{\mathbb T^d}h(\rho(x)\mid\bar\rho)\,dx$. If $\int_{\mathbb T^d}\rho\,dx=\bar\rho$, then $\mathcal H_{\bar\rho}(\rho)=\int_{\mathbb T^d}f(\rho(x))\,dx-f(\bar\rho)$ because the linear term integrates to zero. All logarithm arguments are positive on the stated domains.

## Definition references

[[def-natural-logarithm]]

