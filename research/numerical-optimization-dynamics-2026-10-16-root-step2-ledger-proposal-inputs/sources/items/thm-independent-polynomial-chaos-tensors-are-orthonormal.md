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
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
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
[[def-chaos-orthonormal-tensor-basis]] for indices in the admissible degree
box. Then each $\psi_\alpha$ belongs to
$L^2(\rho)$ and
$$\int_\Gamma\psi_\alpha(y)\psi_\beta(y)\,d\rho(y)=\begin{cases}1,&\alpha=\beta,\\0,&\alpha\ne\beta.\end{cases}$$
In particular, the family indexed by any finite subset $\Lambda$ of the box is
orthonormal; when $0\in\Lambda$, it includes the constant mode $\psi_0=1$.

## Facts & Assumptions

**Given:** Independent real inputs with product law $\rho$, admissible one-dimensional moment data, and indices $\alpha,\beta$ in the finite degree box.

[F1] [[lem-positive-moment-gram-produces-univariate-chaos-polynomials]] gives $\int\phi_{j,k}\phi_{j,l}\,d\rho_j=\delta_{kl}$ and $\phi_{j,0}=1$.

[F2] [[thm-independent-random-elements-have-product-joint-law]] identifies the joint law with $\otimes_j\rho_j$.

[F3] Tonelli and Fubini hold for the uncompleted product of sigma-finite measure spaces ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]); finite iteration gives factorization for a finite product.

## Proof

1.1 For $\alpha,\beta$ in the admissible box set $g_j(y_j)=\phi_{j,\alpha_j}(y_j)\phi_{j,\beta_j}(y_j)$. Each $g_j$ is integrable because it is a polynomial of degree at most $2p_j$ and the $2p_j$ moment is finite. Repeated Tonelli [F3] first gives $\int_\Gamma\prod_j|g_j(y_j)|\,d\rho=\prod_{j=1}^d\int|g_j|\,d\rho_j<\infty$; repeated Fubini [F3] then gives $\int_\Gamma\prod_jg_j(y_j)\,d\rho=\prod_{j=1}^d\int g_j\,d\rho_j$. The product-law statement [F2] identifies this finite product measure with the joint law. [F1, F2, F3, given]

2.1 The factorization in step 1.1 and univariate orthonormality [F1] give $\int_\Gamma\psi_\alpha\psi_\beta\,d\rho=\prod_{j=1}^d\delta_{\alpha_j\beta_j}$. This product is one exactly when every coordinate agrees, and zero otherwise; with $\beta=\alpha$ it also shows $\psi_\alpha\in L^2(\rho)$. Multiplying $\phi_{j,0}=1$ over the finitely many coordinates gives $\psi_0=1$, so whenever $0\in\Lambda$ the finite family includes this constant mode. [F1, step 1.1, algebra] ∎
