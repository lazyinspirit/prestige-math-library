---
id: thm-chaos-quadrature-coefficient-error-split
kind: theorem
title: Projection and quadrature errors split in L2
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-chaos-quadrature-coefficient-estimator
  - thm-finite-chaos-projection-parseval-and-moments
  - thm-independent-polynomial-chaos-tensors-are-orthonormal
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
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

Let $u\in L^2(\rho)$ be real, let $\Lambda$ be finite, and use the exact and
quadrature coefficients from
[[def-finite-chaos-orthogonal-projection]] and
[[def-chaos-quadrature-coefficient-estimator]]. Then
$$\|u-\widehat P_\Lambda u\|_{L^2(\rho)}^2
=\|u-P_\Lambda u\|_{L^2(\rho)}^2+
\sum_{\alpha\in\Lambda}|\widehat c_\alpha-c_\alpha|^2.$$
Since the finite sum equals
$\|\widehat P_\Lambda u-P_\Lambda u\|_{L^2(\rho)}^2$, the triangle inequality
also gives
$$\|u-\widehat P_\Lambda u\|_{L^2(\rho)}
\le\|u-P_\Lambda u\|_{L^2(\rho)}
+\|\widehat P_\Lambda u-P_\Lambda u\|_{L^2(\rho)}.$$
Thus coefficient quadrature error and finite-space projection error remain
separate even when no completeness statement is available.

## Facts & Assumptions

**Given:** A finite real orthonormal family, $u\in L^2(\rho)$, and finite quadrature values $\widehat c_\alpha$.

[F1] [[def-chaos-quadrature-coefficient-estimator]] defines $\widehat P_\Lambda u$ using the finite basis sum.

[F2] [[thm-finite-chaos-projection-parseval-and-moments]] gives $u-P_\Lambda u\perp\mathcal P_\Lambda$.

[F3] [[thm-independent-polynomial-chaos-tensors-are-orthonormal]] gives the orthonormality of the finite basis.

[F4] [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]] gives the L2 norm triangle inequality and Pythagorean identity.

## Proof

1.1 Subtract the two finite expansions to obtain $\widehat P_\Lambda u-P_\Lambda u=\sum_{\alpha\in\Lambda}(\widehat c_\alpha-c_\alpha)\psi_\alpha\in\mathcal P_\Lambda$. By [F2], this difference is orthogonal to $u-P_\Lambda u$. [F1, F2, algebra]

2.1 The identity $u-\widehat P_\Lambda u=(u-P_\Lambda u)-(\widehat P_\Lambda u-P_\Lambda u)$ is an orthogonal sum by step 1.1. Pythagoras and [F3] give $\|u-\widehat P_\Lambda u\|^2 =\|u-P_\Lambda u\|^2+\sum_{\alpha\in\Lambda}|\widehat c_\alpha-c_\alpha|^2$. Also [F3] identifies the finite coefficient norm with $\|\widehat P_\Lambda u-P_\Lambda u\|_{L^2(\rho)}$, and the triangle inequality gives the final sum bound. This proves both statements. [F3, F4, step 1.1, algebra] ∎