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

[F2] The finite $2p_j$ moment makes every monomial of degree at most $2p_j$ integrable: for $0\le q\le2p_j$, $|y|^q\le1+|y|^{2p_j}$.

[F3] On a real inner-product space, [[thm-gram-schmidt-orthonormalisation]] constructs the finite orthonormal list by recursive subtraction and normalization, preserving each successive span.

[F4] [[def-inner-product-norm]] defines normalization by the positive norm of each nonzero residual.

## Proof

1.1 Let $\mathcal P_{p_j}$ be the real vector space spanned by the formal monomials $1,y,\ldots,y^{p_j}$. For $q,r\in\mathcal P_{p_j}$ define $\langle q,r\rangle_{\rho_j}:=\int q(y)r(y)\,d\rho_j(y)$. Every product $qr$ has degree at most $2p_j$ and is integrable by [F2], so the pairing is finite; linearity of the integral makes it bilinear and symmetric. If $q(y)=\sum_{r=0}^{p_j}c_ry^r$, then $\langle q,q\rangle_{\rho_j}=c^TG_jc$, which is positive for each nonzero formal polynomial by [F1]. Thus this is an inner product on $\mathcal P_{p_j}$. [given, F1, F2, algebra]

2.1 Every $q\in\mathcal P_{p_j}$ has finite squared integral by [F2], so it defines an $L^2(\rho_j)$ class. If that class is zero, then $q=0$ almost everywhere and $\int q^2\,d\rho_j=0$; by [F1] its coefficient vector must be zero. Thus the class map is injective and the monomial classes are linearly independent. The formal monomials are also independent by uniqueness of their coefficient lists, so [F3] applies to this list in $\mathcal P_{p_j}$. Its residual at stage $k$ is $y^k$ minus a polynomial of degree at most $k-1$, so it has degree $k$ and leading coefficient $1$. [step 1.1, F1, F2, F3, algebra]

3.1 Each residual is nonzero in $\mathcal P_{p_j}$ by its degree and leading coefficient, so [F4] makes its norm strictly positive. The normalized residual is orthogonal to the preceding polynomials and has positive leading coefficient. At $k=0$, the residual is $1$ and its norm is $\sqrt{\int1\,d\rho_j}=1$ because $\rho_j$ is a probability law; hence $\phi_{j,0}=1$. This proves the stated finite orthonormal family. [given, F3, F4, step 2.1, algebra] ∎
