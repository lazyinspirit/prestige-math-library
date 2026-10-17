---
id: def-chaos-orthonormal-tensor-basis
kind: definition
title: Finite orthonormal polynomial tensor basis
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-finite-product-chaos-input
  - def-chaos-total-degree-and-hyperbolic-cross-index-sets
  - lem-positive-moment-gram-produces-univariate-chaos-polynomials
justified_by: [thm-independent-polynomial-chaos-tensors-are-orthonormal]
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: The finite tensor family is defined without any choice axiom.
verification:
  precheck: n/a
sources:
  references:
    - title: Dongbin Xiu and George Em Karniadakis, The Wiener–Askey Polynomial Chaos for Stochastic Differential Equations, §4
      url: https://www.sci.utah.edu/~dxiu/Papers/XiuK_SISC02.pdf
    - title: Bruno Sudret, Polynomial Chaos Expansions and Stochastic Finite Element Methods, §§3.2.1–3.2.2
      url: https://ethz.ch/content/dam/ethz/special-interest/baug/ibk/risk-safety-and-uncertainty-dam/publications/reports/RSUQ-2015-008.pdf
---

## Definition

Let $\phi_{j,k}$ be the Gram–Schmidt polynomials from
[[lem-positive-moment-gram-produces-univariate-chaos-polynomials]], and let
$\Lambda$ be a finite subset of the admissible degree box in
[[def-finite-product-chaos-input]]. For $\alpha=(\alpha_1,\ldots,\alpha_d)\in\Lambda$,
define
$$\psi_\alpha(y_1,\ldots,y_d)=\prod_{j=1}^d\phi_{j,\alpha_j}(y_j).$$
The **finite polynomial-chaos space** is
$\mathcal P_\Lambda=\operatorname{span}\{\psi_\alpha:\alpha\in\Lambda\}$
inside $L^2(\rho)$. Whenever $0\in\Lambda$ (in particular, for the stated
total-degree and hyperbolic-cross sets), the family contains the constant mode
$\psi_0=1$. No density of $\mathcal P_\Lambda$ in $L^2(\rho)$ is part of this
definition.
