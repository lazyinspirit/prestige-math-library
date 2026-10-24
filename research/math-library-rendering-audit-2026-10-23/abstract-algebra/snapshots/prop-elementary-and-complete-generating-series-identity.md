---
id: prop-elementary-and-complete-generating-series-identity
kind: proposition
title: "The generating-series identity $E(-t)H(t)=1$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-elementary-symmetric-polynomials, def-power-sum-and-complete-homogeneous-symmetric-polynomials]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "D. Grinberg, An Introduction to Algebraic Combinatorics, Chapter 7, Section 7.1"
      url: "https://arxiv.org/pdf/2506.00738v1"
pipeline_run: null
---

## Statement

In the formal power-series ring $R[x_1,\ldots,x_n]\llbracket t\rrbracket$, put

$$E(-t):=\sum_{i=0}^n(-1)^ie_it^i=\prod_{j=1}^n(1-x_jt),\qquad H(t):=\sum_{k\ge0}h_kt^k.$$

Then

$$E(-t)H(t)=1.$$

Equivalently, for every $k\ge1$,

$$\sum_{i=0}^{\min(k,n)}(-1)^ie_ih_{k-i}=0.$$

## Facts & Assumptions

**Given:** A commutative ring $R$ and variables $x_1,\ldots,x_n$.

[L1] For $0\le i\le n$, the polynomial $e_i$ is the sum $\sum_{1\le j_1<\cdots<j_i\le n}x_{j_1}\cdots x_{j_i}$ over the $i$-element index sets, and $e_0=1$ ([[def-elementary-symmetric-polynomials]]).

[L2] The polynomial $h_k$ is the sum of all monomials of total degree $k$, and $h_0=1$ ([[def-power-sum-and-complete-homogeneous-symmetric-polynomials]]).

## Proof

**Proof technique:** direct.

1.1 Expand $\prod_{j=1}^n(1-x_jt)$ by choosing either $1$ or $-x_jt$ from each factor. The choices taking $-x_jt$ at exactly the indices of an $i$-element set $S$ contribute $(-1)^i\bigl(\prod_{j\in S}x_j\bigr)t^i$, so summing over $|S|=i$ and then over $i$ gives $\prod_{j=1}^n(1-x_jt)=\sum_{i=0}^n(-1)^ie_it^i$ by [L1], and both displayed descriptions of $E(-t)$ therefore agree. [given, L1, algebra]

1.2 For one variable, $(1-x_jt)(1+x_jt+x_j^2t^2+\cdots)=1$ coefficientwise as a formal power series. [given, algebra]

2.1 Multiplying the one-variable geometric series over $j=1,\ldots,n$ gives $\prod_j(1-x_jt)^{-1}$, whose coefficient of $t^k$ is the sum of $x_1^{a_1}\cdots x_n^{a_n}$ over $a_1+\cdots+a_n=k$, namely $h_k$. [step 1.2, L2]

3.1 Thus $H(t)=\prod_j(1-x_jt)^{-1}$, which is $E(-t)^{-1}$ by step 1.1, so $E(-t)H(t)=1$. Comparing the coefficient of $t^k$ gives the displayed recurrence, including $k=0$ as $e_0h_0=1$. [step 1.1, step 2.1, L2, algebra] ∎
