---
id: def-finite-chaos-orthogonal-projection
kind: definition
title: Finite polynomial-chaos orthogonal projection
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-chaos-orthonormal-tensor-basis
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
justified_by: [thm-finite-chaos-projection-parseval-and-moments]
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: No choice axiom is used for the finite coefficient sum.
verification:
  precheck: n/a
sources:
  references:
    - title: Dongbin Xiu, Fast Numerical Methods for Stochastic Computations, §§3.3–3.4
      url: https://publications.sci.utah.edu/publications/xiu09/Xiu_CiCP2009.pdf
    - title: Bruno Sudret, Polynomial Chaos Expansions and Stochastic Finite Element Methods, §3.4.2
      url: https://ethz.ch/content/dam/ethz/special-interest/baug/ibk/risk-safety-and-uncertainty-dam/publications/reports/RSUQ-2015-008.pdf
---

## Definition

For $u\in L^2(\rho)$ and finite $\Lambda$, define
$$c_\alpha=\langle u,\psi_\alpha\rangle_{L^2(\rho)}=\int u(y)\psi_\alpha(y)\,d\rho(y),\qquad P_\Lambda u=\sum_{\alpha\in\Lambda}c_\alpha\psi_\alpha.$$
The coefficient integral is finite by Cauchy–Schwarz. The finite sum is the
orthogonal projection onto $\mathcal P_\Lambda$ of
[[def-chaos-orthonormal-tensor-basis]].
