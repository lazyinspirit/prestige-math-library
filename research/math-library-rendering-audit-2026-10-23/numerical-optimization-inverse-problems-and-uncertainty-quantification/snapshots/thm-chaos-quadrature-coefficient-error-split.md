---
id: thm-chaos-quadrature-coefficient-error-split
kind: theorem
title: Projection and quadrature errors split in L2
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-finite-chaos-orthogonal-projection
  - def-chaos-quadrature-coefficient-estimator
  - thm-independent-polynomial-chaos-tensors-are-orthonormal
  - cor-cauchy-schwarz-inequality-for-l-two
  - thm-integral-triangle-inequality
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: No choice axiom is used; the result is finite-dimensional orthogonality.
verification: {}
sources:
  references:
    - title: Bruno Sudret, Polynomial Chaos Expansions and Stochastic Finite Element Methods, §3.4.3
      url: https://ethz.ch/content/dam/ethz/special-interest/baug/ibk/risk-safety-and-uncertainty-dam/publications/reports/RSUQ-2015-008.pdf
    - title: Dongbin Xiu, Fast Numerical Methods for Stochastic Computations, §4
      url: https://publications.sci.utah.edu/publications/xiu09/Xiu_CiCP2009.pdf
---

## Statement

Let $u\in L^2(\rho)$ be real, choose a representative $\widetilde u$ defined
at every node of the finite cubature rule used below, let $\Lambda$ be finite,
and use the exact and quadrature coefficients from
[[def-finite-chaos-orthogonal-projection]] and
[[def-chaos-quadrature-coefficient-estimator]], with $\widetilde u$ as the
evaluable input to that estimator. Then
$$\|u-\widehat P_\Lambda u\|_{L^2(\rho)}^2 =\|u-P_\Lambda u\|_{L^2(\rho)}^2+ \sum_{\alpha\in\Lambda}|\widehat c_\alpha-c_\alpha|^2.$$
Since the finite sum equals
$\|\widehat P_\Lambda u-P_\Lambda u\|_{L^2(\rho)}^2$, the triangle inequality
also gives
$$\|u-\widehat P_\Lambda u\|_{L^2(\rho)} \le\|u-P_\Lambda u\|_{L^2(\rho)} +\|\widehat P_\Lambda u-P_\Lambda u\|_{L^2(\rho)}.$$
Thus coefficient quadrature error and finite-space projection error remain
separate even when no completeness statement is available.

## Facts & Assumptions

**Given:** A finite real orthonormal family, $u\in L^2(\rho)$, and finite quadrature values $\widehat c_\alpha$.

[F1] [[def-chaos-quadrature-coefficient-estimator]] defines $\widehat P_\Lambda u$ using the finite basis sum.

[F2] [[def-finite-chaos-orthogonal-projection]] defines $c_\alpha=\langle u,\psi_\alpha\rangle$ and $P_\Lambda u=\sum_{\alpha\in\Lambda}c_\alpha\psi_\alpha$.

[F3] [[thm-independent-polynomial-chaos-tensors-are-orthonormal]] gives the orthonormality of the finite basis.

[F4] [[def-finite-chaos-orthogonal-projection]] gives the choice-free bilinear integral pairing inducing the $L^2$ norm; the finite orthogonality identities follow by expansion.

[F5] [[cor-cauchy-schwarz-inequality-for-l-two]] bounds $\int|vw|\,d\rho$, and [[thm-integral-triangle-inequality]] bounds $|\int vw\,d\rho|$ by that integral. Expanding $\|v+w\|_2^2$ then gives the norm triangle inequality.

## Proof

1.1 For each $\beta\in\Lambda$, the coefficient formula [F2], orthonormality [F3], and bilinearity [F4] give $\langle u-P_\Lambda u,\psi_\beta\rangle=c_\beta-\sum_{\alpha\in\Lambda}c_\alpha\delta_{\alpha\beta}=0$. Thus $u-P_\Lambda u$ is orthogonal to the finite span $\mathcal P_\Lambda$, including when $\Lambda$ is empty. Subtracting the two finite expansions gives $\widehat P_\Lambda u-P_\Lambda u=\sum_{\alpha\in\Lambda}(\widehat c_\alpha-c_\alpha)\psi_\alpha\in\mathcal P_\Lambda$, so this difference is orthogonal to the residual. [F1, F2, F3, F4, algebra]

2.1 The identity $u-\widehat P_\Lambda u=(u-P_\Lambda u)-(\widehat P_\Lambda u-P_\Lambda u)$ is an orthogonal sum by step 1.1. Expanding its squared norm using [F4] gives $\|u-\widehat P_\Lambda u\|^2 =\|u-P_\Lambda u\|^2+\|\widehat P_\Lambda u-P_\Lambda u\|^2$; orthonormality [F3] identifies the second term with $\sum_{\alpha\in\Lambda}|\widehat c_\alpha-c_\alpha|^2$. To obtain the final inequality, use [F5] to expand $\|v+w\|_2^2$ and deduce $\|v+w\|_2\le\|v\|_2+\|w\|_2$ for $v=u-P_\Lambda u$ and $w=P_\Lambda u-\widehat P_\Lambda u$. [F3, F4, F5, step 1.1, algebra] ∎
