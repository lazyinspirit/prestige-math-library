---
id: thm-coordinate-action-of-a-linear-map
kind: theorem
title: '$[T(v)]_{\mathcal C}=[T]_{\mathcal B}^{\mathcal C}[v]_{\mathcal B}$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-coordinate-column-and-matrix-of-a-linear-map,
       def-matrix-product-and-identity-matrix, def-linear-map]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'S. Axler, Linear Algebra Done Right, 4th ed., §3C, Matrix multiplication as composition'
      url: 'https://linear.axler.net/LADR4e.pdf'
    - title: 'S. Schiavone, MIT 18.700 Day 9, Proposition 29'
      url: 'https://math.mit.edu/~sschiavo/18-700/Lectures/LessonPlan9.pdf'
pipeline_run: null
---

## Statement

Let $T:V\to W$ be linear, let $\mathcal B$ be an ordered basis of $V$, and let
$\mathcal C$ be an ordered basis of $W$. Then for every $v\in V$,

$$[T(v)]_{\mathcal C}=[T]_{\mathcal B}^{\mathcal C}[v]_{\mathcal B}.$$

## Facts & Assumptions

**Given:** Ordered bases $\mathcal B=(b_j)_{j<n}$ and $\mathcal C=(c_i)_{i<m}$, a linear map $T:V\to W$, and a vector $v\in V$.

[L1] The coordinate column contains the unique coefficients in the ordered-basis expansion, and the $j$-th column of $[T]_{\mathcal B}^{\mathcal C}$ is $[T(b_j)]_{\mathcal C}$ ([[def-coordinate-column-and-matrix-of-a-linear-map]]).

## Proof

**Proof technique:** direct.

1.1 Write $[v]_{\mathcal B}=(x_j)_{j<n}$, so [L1] gives $v=\sum_{j<n}x_jb_j$. [given, L1]

2.1 By linearity, $T(v)=\sum_{j<n}x_jT(b_j)$; writing $T(b_j)=\sum_{i<m}t_{ij}c_i$ gives $T(v)=\sum_{i<m}(\sum_{j<n}t_{ij}x_j)c_i$. [step 1.1, L1]

3.1 The inner sum is the $i$-th row-by-column entry of $[T]_{\mathcal B}^{\mathcal C}[v]_{\mathcal B}$, and uniqueness of $\mathcal C$-coordinates identifies this column with $[T(v)]_{\mathcal C}$. [step 2.1, L1] ∎
