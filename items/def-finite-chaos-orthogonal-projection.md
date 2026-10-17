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
  - def-l-p-space-as-a-quotient-by-null-functions
  - thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space
  - cor-cauchy-schwarz-inequality-for-l-two
  - thm-the-lebesgue-integral-respects-almost-everywhere-equality
  - thm-linearity-of-the-lebesgue-integral-on-l-one
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

For real $u\in L^2(\rho)$ and a finite subset $\Lambda$ of the admissible
degree box, with $(\psi_\alpha)_{\alpha\in\Lambda}$ as in
[[def-chaos-orthonormal-tensor-basis]], define
$$c_\alpha=\langle u,\psi_\alpha\rangle_{L^2(\rho)}=\int u(y)\psi_\alpha(y)\,d\rho(y),\qquad P_\Lambda u=\sum_{\alpha\in\Lambda}c_\alpha\psi_\alpha.$$
The scalar integral pairing is choice-free: for representatives $f,g$ of
classes in $L^2(\rho)$, Cauchy–Schwarz makes $fg$ integrable, and the integral
is unchanged when either representative is changed on a null set. Its
bilinearity follows from linearity of the integral and its symmetry from
commutativity of multiplication; moreover
$\int f^2\,d\rho=\|[f]\|_2^2$, so it is positive definite on the quotient.
These facts use only the integral pairing, not completeness of $L^2(\rho)$.
The displayed finite sum is the orthogonal projection onto $\mathcal P_\Lambda$
of [[def-chaos-orthonormal-tensor-basis]].
