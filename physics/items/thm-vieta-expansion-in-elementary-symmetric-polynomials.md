---
id: thm-vieta-expansion-in-elementary-symmetric-polynomials
kind: theorem
title: "Vieta expansion: $\\prod_{i=1}^n(t-x_i)=\\sum_{k=0}^n(-1)^k e_k t^{n-k}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-elementary-symmetric-polynomials, def-group-power]
justified_by: []
aliases: []
landmark: true
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
    - title: "K. Conrad, Symmetric Polynomials, Section 1"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/symmfunction.pdf"
pipeline_run: null
---

## Statement

In $R[x_1,\ldots,x_n,t]$ one has

$$\prod_{i=1}^n(t-x_i)=\sum_{k=0}^n(-1)^k e_k(x_1,\ldots,x_n)t^{n-k}.$$

For $n=0$, both sides are the empty product $1$.

## Facts & Assumptions

**Given:** A commutative ring $R$ and variables $x_1,\ldots,x_n,t$.

[L1] The elementary symmetric polynomial $e_k$ is the sum of the products $x_{i_1}\cdots x_{i_k}$ over all $k$-element subsets of the variables, and $e_0=1$ ([[def-elementary-symmetric-polynomials]]).

[L2] Natural powers in a monoid satisfy $g^0=e$ and $g^{r+1}=g^rg$ ([[def-group-power]]).

## Proof

**Proof technique:** direct.

1.1 In expanding the product, choose either $t$ or $-x_i$ from each factor. A choice of $-x_i$ from exactly the indices in a subset $S$ of size $k$ contributes $(-1)^k(\prod_{i\in S}x_i)t^{n-k}$. [given, L2, algebra]

2.1 Summing the contributions with $|S|=k$ gives $(-1)^ke_kt^{n-k}$ by the definition of $e_k$. [step 1.1, L1]

3.1 Summing over $0\le k\le n$ accounts for every term in the expansion exactly once and proves the identity. If $n=0$, the sole term is $e_0t^0=1$. [step 2.1, L1, L2] ∎
