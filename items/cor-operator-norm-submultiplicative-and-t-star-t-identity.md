---
id: cor-operator-norm-submultiplicative-and-t-star-t-identity
kind: corollary
title: "The operator norm is submultiplicative and satisfies ||T^*T|| = ||T||^2"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-operator-norm-on-a-finite-dimensional-inner-product-space, thm-operator-norm-is-the-largest-singular-value, thm-singular-value-decomposition]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Statement

For compatible linear maps between finite-dimensional real or complex inner
product spaces,

$$\lVert ST\rVert\le \lVert S\rVert\,\lVert T\rVert.$$

For every such linear map $T$,

$$\lVert T^*T\rVert=\lVert T\rVert^2.$$

## Facts & Assumptions

**Given:** Compatible finite-dimensional linear maps $T$ and $S$ between real or complex inner product spaces.

[L1] The operator norm is defined by the maximum over unit vectors ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

[L2] The operator norm equals the largest singular value ([[thm-operator-norm-is-the-largest-singular-value]]).

[L3] If $Te_j=s_je_j'$ is a singular value decomposition, then $T^*Te_j=s_j^2e_j$ ([[thm-singular-value-decomposition]]).

## Proof

**Proof technique:** direct.

1.1 For every unit vector $v$ in the domain of $T$, [L1] gives $\lVert STv\rVert\le \lVert S\rVert\,\lVert Tv\rVert\le \lVert S\rVert\,\lVert T\rVert$. Taking the maximum over all unit $v$ yields $\lVert ST\rVert\le \lVert S\rVert\,\lVert T\rVert$. [L1, algebra]

2.1 If $s_1\ge s_2\ge\cdots$ are the singular values of $T$, then [L3] shows that $T^*T$ has eigenvalues $s_1^2,s_2^2,\dots$ and is already non-negative. Hence its singular values are $s_1^2,s_2^2,\dots$, so [L2] gives $\lVert T^*T\rVert=s_1^2=\lVert T\rVert^2$. [L2, L3, algebra] ∎
