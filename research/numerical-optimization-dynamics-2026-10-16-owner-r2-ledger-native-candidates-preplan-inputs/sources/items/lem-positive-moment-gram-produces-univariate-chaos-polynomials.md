---
id: lem-positive-moment-gram-produces-univariate-chaos-polynomials
kind: lemma
title: Positive moment Gram matrices produce orthonormal polynomial families
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-finite-product-chaos-input
  - thm-gram-schmidt-orthonormalisation
  - def-inner-product-norm
  - def-linear-independence
  - def-orthogonal-vectors-sets-and-orthonormal-bases
  - def-real-polynomial-degree-leading-coefficient-and-monic
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: None. The Gram–Schmidt recursion is finite and deterministic.
verification: {}
sources:
  references:
    - title: Dongbin Xiu and George Em Karniadakis, The Wiener–Askey Polynomial Chaos for Stochastic Differential Equations, §4
      url: https://www.sci.utah.edu/~dxiu/Papers/XiuK_SISC02.pdf
    - title: Bruno Sudret, Polynomial Chaos Expansions and Stochastic Finite Element Methods, §§3.2.1–3.2.2
      url: https://ethz.ch/content/dam/ethz/special-interest/baug/ibk/risk-safety-and-uncertainty-dam/publications/reports/RSUQ-2015-008.pdf
---

## Statement

Let $\rho_j$ be one factor law with admissible degree $p_j$ as in
[[def-finite-product-chaos-input]]. The monomial classes
$1,y,\ldots,y^{p_j}$ are linearly independent in $L^2(\rho_j)$. Applying the
finite Gram–Schmidt recursion to this ordered list gives real orthonormal
polynomials $\phi_{j,0},\ldots,\phi_{j,p_j}$, where $\phi_{j,k}$ has degree
$k$, positive leading coefficient, and $\phi_{j,0}=1$.

## Facts & Assumptions

**Given:** A probability law $\rho_j$ with finite $2p_j$ moment and positive-definite monomial Gram matrix.

[F1] [[def-finite-product-chaos-input]] states that for every nonzero coefficient vector $c$, the quadratic form $c^TG_jc$ is strictly positive.

[F2] [[thm-gram-schmidt-orthonormalisation]] gives the finite orthonormal list by the recursive subtraction and normalization formula, preserving each successive span.

[F3] [[def-inner-product-norm]] gives $\|v\|=0$ only for the zero vector and defines normalization by $\|v\|$.

## Proof

1.1 For a coefficient vector $c=(c_0,\ldots,c_{p_j})$, the squared $L^2(\rho_j)$ norm of $q(y)=\sum_{r=0}^{p_j}c_ry^r$ is $c^TG_jc$. If $c\ne0$, [F1] makes this quantity positive, so no nonzero coefficient vector represents the zero $L^2$ class. The monomial classes are therefore linearly independent. [given, F1, algebra]

2.1 Apply [F2] to this independent finite list. Each residual at stage $k$ is $y^k$ minus a polynomial of degree at most $k-1$, so it still has degree $k$ and leading coefficient $1$. [step 1.1, F2, algebra]

3.1 By [F3] each residual has positive norm, so the normalization in [F2] is defined and has positive leading coefficient. At $k=0$, the residual is the constant $1$ and its norm is $\sqrt{\int1\,d\rho_j}=1$ because $\rho_j$ is a probability law. This gives $\phi_{j,0}=1$ and completes the recursion. [given, F2, F3, step 2.1, algebra] ∎