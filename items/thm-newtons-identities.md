---
id: thm-newtons-identities
kind: theorem
title: "Newton's identities: $k e_k=\\sum_{i=1}^k(-1)^{i-1}e_{k-i}p_i$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-power-sum-and-complete-homogeneous-symmetric-polynomials, prop-elementary-and-complete-generating-series-identity, def-formal-derivative-of-a-polynomial, prop-formal-derivative-laws]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "K. Conrad, Symmetric Polynomials, Section 3"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/symmfunction.pdf"
    - title: "D. Grinberg, An Introduction to Algebraic Combinatorics, Chapter 7, Section 7.1"
      url: "https://arxiv.org/pdf/2506.00738v1"
pipeline_run: null
---

## Statement

Put $e_0=1$ and $e_k=0$ for $k>n$. For every $k\ge1$,

$$k e_k=\sum_{i=1}^k(-1)^{i-1}e_{k-i}p_i.$$

In particular, for $k\le n$ this recursively relates $e_k$ to $p_1,\ldots,p_k$, while for $k>n$ it gives

$$p_k-e_1p_{k-1}+\cdots+(-1)^ne_np_{k-n}=0.$$

No division is used, so the identities hold over every commutative ring.

## Facts & Assumptions

**Given:** A commutative ring $R$ and variables $x_1,\ldots,x_n$.

[L1] The power sum is $p_i=\sum_jx_j^i$, and $H(t)=\sum_{r\ge0}h_rt^r$ ([[def-power-sum-and-complete-homogeneous-symmetric-polynomials]]).

[L2] The formal-series identity is $E(-t)H(t)=1$, where $E(-t)=\prod_j(1-x_jt)$ ([[prop-elementary-and-complete-generating-series-identity]]).

[L3] The formal derivative of a polynomial $\sum_ra_rt^r$ is $\sum_{r\ge1}ra_rt^{r-1}$ ([[def-formal-derivative-of-a-polynomial]]).

[L4] Over a commutative ring, formal differentiation of polynomials is additive and satisfies $(fg)'=f'g+fg'$ ([[prop-formal-derivative-laws]]).

## Proof

**Proof technique:** direct.

1.1 Write $G(t):=E(-t)=\prod_{j=1}^n(1-x_jt)$, which by [L2] is a polynomial in $t$ of degree at most $n$ over $R[x_1,\ldots,x_n]$, so [L3] and [L4] apply to it. Iterating the Leibniz rule of [L4] over the $n$ factors, and using $(1-x_jt)'=-x_j$ from [L3], gives $G'(t)=-\sum_jx_j\prod_{\ell\ne j}(1-x_\ell t)$. [L2, L3, L4, algebra]

2.1 Multiply by the power series $H(t)=G(t)^{-1}$ from [L2]. Then $-G'(t)H(t)=\sum_jx_j/(1-x_jt)=\sum_{i\ge1}p_it^{i-1}$, where the last equality is coefficientwise geometric expansion. [step 1.1, L1, L2, algebra]

3.1 Multiply step 2.1 by $G(t)$ and use $G(t)H(t)=1$ from [L2]; no derivative of the infinite series $H$ is taken. This gives $-G'(t)=G(t)\sum_{i\ge1}p_it^{i-1}$. Since $G(t)=\sum_{i=0}^n(-1)^ie_it^i$, [L3] evaluates the left side as $\sum_{k\ge1}(-1)^{k-1}ke_kt^{k-1}$. Comparing the coefficient of $t^{k-1}$ yields $(-1)^{k-1}ke_k=\sum_{i=1}^k(-1)^{k-i}e_{k-i}p_i$. [step 2.1, L2, L3, algebra]

4.1 Multiplying the identity in step 3.1 by $(-1)^{k-1}$ proves the displayed Newton identity. When $k>n$, the term $ke_k$ is zero and reindexing gives the stated recurrence for $p_k$. [step 3.1, algebra] ∎
