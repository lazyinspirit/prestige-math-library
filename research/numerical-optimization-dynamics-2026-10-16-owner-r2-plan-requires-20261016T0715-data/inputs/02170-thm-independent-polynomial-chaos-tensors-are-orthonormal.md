---
id: thm-independent-polynomial-chaos-tensors-are-orthonormal
kind: theorem
title: Independent polynomial-chaos tensor products are orthonormal
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-chaos-orthonormal-tensor-basis
  - lem-positive-moment-gram-produces-univariate-chaos-polynomials
  - thm-tonelli-and-fubini-for-completed-product-measures
  - thm-independent-random-elements-have-product-joint-law
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: No choice axiom is used; the proof factors finite products of integrable functions.
verification: {}
sources:
  references:
    - title: Dongbin Xiu, Fast Numerical Methods for Stochastic Computations, §3.2
      url: https://publications.sci.utah.edu/publications/xiu09/Xiu_CiCP2009.pdf
    - title: Bruno Sudret, Polynomial Chaos Expansions and Stochastic Finite Element Methods, §3.2.2
      url: https://ethz.ch/content/dam/ethz/special-interest/baug/ibk/risk-safety-and-uncertainty-dam/publications/reports/RSUQ-2015-008.pdf
---

## Statement

Let $\rho=\otimes_{j=1}^d\rho_j$ and form $\psi_\alpha$ from
[[def-chaos-orthonormal-tensor-basis]]. Then each $\psi_\alpha$ belongs to
$L^2(\rho)$ and
$$\int_\Gamma\psi_\alpha(y)\psi_\beta(y)\,d\rho(y)=\begin{cases}1,&\alpha=\beta,\\0,&\alpha\ne\beta.\end{cases}$$
In particular, the family indexed by any finite $\Lambda$ is orthonormal and
its constant mode is $\psi_0=1$.

## Facts & Assumptions

**Given:** Independent real inputs with product law $\rho$, admissible one-dimensional moment data, and indices $\alpha,\beta$ in the finite degree box.

[F1] [[lem-positive-moment-gram-produces-univariate-chaos-polynomials]] gives $\int\phi_{j,k}\phi_{j,l}\,d\rho_j=\delta_{kl}$ and $\phi_{j,0}=1$.

[F2] [[thm-independent-random-elements-have-product-joint-law]] identifies the joint law with $\otimes_j\rho_j$.

[F3] [[thm-tonelli-and-fubini-for-completed-product-measures]] factors integrals of integrable products over the finite product law.

## Proof

1.1 For each $\alpha$, apply [F3] to the nonnegative square of the tensor product. It gives $\int|\psi_\alpha|^2\,d\rho=\prod_{j=1}^d\int|\phi_{j,\alpha_j}|^2\,d\rho_j=1$ by [F1]. Thus $\psi_\alpha\in L^2(\rho)$. [F1, F2, F3, given]

2.1 For $\alpha,\beta$, the product $\psi_\alpha\psi_\beta$ is integrable by Cauchy–Schwarz in $L^2(\rho)$. By [F2]–[F3], its integral factors as $\prod_{j=1}^d\int\phi_{j,\alpha_j}\phi_{j,\beta_j}\,d\rho_j=\prod_{j=1}^d\delta_{\alpha_j\beta_j}$ by [F1]. The finite product is one exactly when every coordinate agrees, and zero otherwise. The identity $\psi_0=1$ follows by multiplying the factor identities $\phi_{j,0}=1$. [F1, F2, F3, step 1.1, algebra] ∎