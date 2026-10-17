---
id: cor-tensor-gauss-exact-chaos-coefficients
kind: corollary
title: Tensor Gaussian rules recover polynomial-chaos coefficients exactly
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 9
deps:
  - lem-tensor-product-moment-functional-equals-product-measure-integral
  - thm-chaos-quadrature-coefficient-error-split
  - def-chaos-quadrature-coefficient-estimator
  - def-chaos-orthonormal-tensor-basis
  - thm-independent-polynomial-chaos-tensors-are-orthonormal
  - def-coordinatewise-product-moment-functional
  - thm-independent-random-elements-have-product-joint-law
  - thm-tensor-product-gauss-exactness-and-exponential-node-count
  - def-tensor-product-gauss-rule
  - def-finite-product-chaos-input
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: No choice axiom is used; exactness is a finite polynomial calculation.
verification: {}
sources:
  references:
    - title: Dongbin Xiu, Fast Numerical Methods for Stochastic Computations, §4
      url: https://publications.sci.utah.edu/publications/xiu09/Xiu_CiCP2009.pdf
    - title: Bruno Sudret, Polynomial Chaos Expansions and Stochastic Finite Element Methods, §3.4.2
      url: https://ethz.ch/content/dam/ethz/special-interest/baug/ibk/risk-safety-and-uncertainty-dam/publications/reports/RSUQ-2015-008.pdf
---

## Statement

Suppose each marginal law $\rho_j$ is the positive measure $\mu_j$ in
Gaussian data from [[def-coordinatewise-product-moment-functional]], with
$m_j\ge p_j+1$, where $p$ is the admissible cutoff vector of
[[def-finite-product-chaos-input]]. Let $Q_\otimes$ be the tensor rule of
[[def-tensor-product-gauss-rule]], exact through degree $2m_j-1$ in coordinate
$j$. For every $u\in\mathcal P_\Lambda$ and $\alpha\in\Lambda$, the quadrature
coefficient $Q_\otimes(u\psi_\alpha)$ equals the exact coefficient
$\langle u,\psi_\alpha\rangle$. Hence
$\widehat P_\Lambda u=P_\Lambda u$ and the coefficient quadrature term in
[[thm-chaos-quadrature-coefficient-error-split]] is zero.

## Facts & Assumptions

**Given:** A product law with the stated marginal Gaussian moment data, $m_j\ge p_j+1$, and $u\in\mathcal P_\Lambda$.

[F1] [[def-finite-product-chaos-input]] bounds every basis coordinate degree by $p_j$.

[F2] [[def-chaos-orthonormal-tensor-basis]] defines each $\psi_\beta$ as a product of one-dimensional polynomials of degree $\beta_j$ in coordinate $j$.

[F3] [[thm-independent-random-elements-have-product-joint-law]] identifies the joint law with the product of its marginal laws.

[F4] [[def-coordinatewise-product-moment-functional]] defines the algebraic product-moment functional; [[lem-tensor-product-moment-functional-equals-product-measure-integral]] proves that it equals integration under the finite product of the marginal measures for these coordinatewise tensor polynomials.

[F5] [[thm-tensor-product-gauss-exactness-and-exponential-node-count]] states exactness of the tensor Gaussian functional for coordinatewise degrees at most $2m_j-1$.

[F6] [[thm-independent-polynomial-chaos-tensors-are-orthonormal]] gives $\int\psi_\beta\psi_\alpha\,d\rho=\delta_{\alpha\beta}$.

[F7] [[def-chaos-quadrature-coefficient-estimator]] defines $\widehat c_\alpha=Q_\otimes(u\psi_\alpha)$.

## Proof

1.1 Expand $u=\sum_{\beta\in\Lambda}c_\beta\psi_\beta$. By [F1] and [F2], each $\psi_\beta$ has coordinate degree $\beta_j\le p_j$, so each product $\psi_\beta\psi_\alpha$ has degree at most $2p_j\le2m_j-2\le2m_j-1$ in coordinate $j$. [F1, F2, given, algebra]

2.1 By [F3] and [F4], the product-law integral of this finite polynomial equals its coordinatewise product-moment functional. Its degrees satisfy the limits checked in step 1.1, so [F5] gives $Q_\otimes(\psi_\beta\psi_\alpha)=\int\psi_\beta\psi_\alpha\,d\rho=\delta_{\alpha\beta}$ by [F6]. Finite linearity then gives $Q_\otimes(u\psi_\alpha)=c_\alpha=\langle u,\psi_\alpha\rangle$. [F3, F4, F5, F6, step 1.1, algebra]

3.1 The equality in step 2.1 holds for every $\alpha\in\Lambda$, so all coefficient differences vanish and the finite sums defining $\widehat P_\Lambda u$ and $P_\Lambda u$ coincide. The quadrature contribution in the error split is therefore zero. [F7, step 2.1, algebra] ∎