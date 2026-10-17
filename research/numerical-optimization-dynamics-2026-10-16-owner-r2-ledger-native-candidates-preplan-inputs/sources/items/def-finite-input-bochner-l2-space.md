---
id: def-finite-input-bochner-l2-space
kind: definition
title: Bochner L2 space for a finite product-law input
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-finite-product-chaos-input
  - def-strongly-measurable-banach-valued-function
  - def-hilbert-space
justified_by: [thm-finite-input-bochner-l2-is-hilbert]
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: The definition is choice-free; countable choice is used only by the following completeness theorem.
verification:
  precheck: n/a
sources:
  references:
    - title: Ivo Babuška, Fabio Nobile, and Raúl Tempone, A Stochastic Collocation Method for Elliptic Partial Differential Equations with Random Input Data, §1
      url: https://www.ices.utexas.edu/media/reports/2005/0547.pdf
    - title: Bruno Sudret, Polynomial Chaos Expansions and Stochastic Finite Element Methods, §4
      url: https://ethz.ch/content/dam/ethz/special-interest/baug/ibk/risk-safety-and-uncertainty-dam/publications/reports/RSUQ-2015-008.pdf
---

## Definition

Let $(\Gamma,\mathcal B(\Gamma),\rho)$ be the finite product-law probability
space of [[def-finite-product-chaos-input]], and let $V$ be a separable real
Hilbert space. Define $L^2_\rho(V)$ to be the space of strongly measurable
maps $U:\Gamma\to V$ for which
$\int_\Gamma\|U(y)\|_V^2\,d\rho(y)<\infty$, modulo equality
$\rho$-almost everywhere. Its inner product is
$$ (U,W)_{L^2_\rho(V)}=\int_\Gamma (U(y),W(y))_V\,d\rho(y). $$
