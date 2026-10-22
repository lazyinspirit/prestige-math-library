---
id: def-nrqmx-finite-hermitian-matrix-exponential
kind: definition
domain: mathematics
library: mathematics
title: Finite-dimensional matrix exponential
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 0
deps:
  - def-complex-exponential
  - def-operator-norm
  - def-real-and-complex-inner-product-space
  - lem-complex-exponential-series-converges-everywhere
dependency_roles:
  def-complex-exponential: mathematical-premise
  def-operator-norm: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  lem-complex-exponential-series-converges-everywhere: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Konrad Viebahn, Introduction to Floquet theory, lecture notes (2020)
      url: https://boulderschool.yale.edu/sites/default/files/files/floquetlecture_Konrad%20Viebahn.pdf
      locator: Section II, equations (15)-(19), finite-dimensional Floquet Hamiltonian and propagator exponentials.
    - title: André Eckardt and Egidijus Anisimovas, High-frequency approximation for periodically driven quantum systems from a Floquet-space perspective, New Journal of Physics 17 (2015), 093039
      url: https://arxiv.org/pdf/1502.06477
      locator: Section 2.2, equations (8)-(13), Floquet Hamiltonian and finite-dimensional exponentials.
---

## Definition

Let $d\ge1$, let $A\in M_d(\mathbb C)$ act on $\mathbb C^d$ with its standard complex inner product, and let $z\in\mathbb C$. Define the finite-dimensional matrix exponential by
$$e^{zA}:=\sum_{k=0}^{\infty}\frac{z^kA^k}{k!},\qquad A^0=I_d.$$
For the operator norm, $\|A^k\|\le\|A\|^k$, so the terms are dominated by the convergent scalar exponential series $\sum_{k\ge0}(|z|\|A\|)^k/k!$; the displayed series therefore converges absolutely in operator norm. The scalar exponential uses the convention $\exp z=\sum_{k\ge0}z^k/k!$.

## Definition references

[[def-complex-exponential]]

[[def-operator-norm]]

[[def-real-and-complex-inner-product-space]]

[[lem-complex-exponential-series-converges-everywhere]]
