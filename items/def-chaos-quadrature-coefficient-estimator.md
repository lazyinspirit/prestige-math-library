---
id: def-chaos-quadrature-coefficient-estimator
kind: definition
title: Quadrature estimates of polynomial-chaos coefficients
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-finite-chaos-orthogonal-projection
  - def-chaos-orthonormal-tensor-basis
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: The estimator is a finite weighted sum and uses no choice axiom.
verification:
  precheck: n/a
sources:
  references:
    - title: Dongbin Xiu, Fast Numerical Methods for Stochastic Computations, §§4–5
      url: https://publications.sci.utah.edu/publications/xiu09/Xiu_CiCP2009.pdf
    - title: Bruno Sudret, Polynomial Chaos Expansions and Stochastic Finite Element Methods, §§3.4.2–3.4.3
      url: https://ethz.ch/content/dam/ethz/special-interest/baug/ibk/risk-safety-and-uncertainty-dam/publications/reports/RSUQ-2015-008.pdf
---

## Definition

Let $\Lambda$ be a finite subset of the admissible degree box, with
$(\psi_\alpha)_{\alpha\in\Lambda}$ as in
[[def-chaos-orthonormal-tensor-basis]], and let $Q$ be any declared finite
cubature functional
$Q(g)=\sum_{q=1}^Jw_qg(y^{(q)})$ whose nodes lie in the domain of evaluation
of $g$. For an evaluable real function $u$, define the quadrature coefficient
and the resulting polynomial by
$$\widehat c_\alpha:=Q(u\psi_\alpha),\qquad \widehat P_\Lambda u:=\sum_{\alpha\in\Lambda}\widehat c_\alpha\psi_\alpha.$$
When $u$ represents an element of $L^2(\rho)$, its exact coefficients
$c_\alpha$ and projection $P_\Lambda u$ are those of
[[def-finite-chaos-orthogonal-projection]]. The quadrature quantities use the
specified node values of $u$ and need not be invariant under changes on null
sets. This definition gives no accuracy claim for a general cubature rule.
