---
id: thm-matrix-of-transpose-is-the-transposed-matrix
kind: theorem
title: 'In dual bases, the matrix of $T^*$ is the transpose of the matrix of $T$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-transpose-of-a-linear-map, thm-dual-family-is-a-basis-in-finite-dimension, def-coordinate-column-and-matrix-of-a-linear-map, def-transpose-of-a-matrix]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'H. Pinkham, Linear Algebra, Chapter 6'
      url: 'https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf'
pipeline_run: null
---

## Statement

Let $T:V\to W$ be linear between finite-dimensional spaces, with ordered bases $\mathcal V=(v_1,\ldots,v_n)$ and $\mathcal W=(w_1,\ldots,w_m)$. In the dual bases,

$$[T^*]_{\mathcal W^*}^{\mathcal V^*}=\bigl([T]_{\mathcal V}^{\mathcal W}\bigr)^{\mathsf T}.$$

## Facts & Assumptions

**Given:** The displayed map, bases, and their dual bases.

[L1] The transpose satisfies $T^*(g)=g\circ T$ ([[def-transpose-of-a-linear-map]]).

[L2] The dual families of the finite bases are bases of the dual spaces ([[thm-dual-family-is-a-basis-in-finite-dimension]]).

[L3] The $j$th column of a representing matrix is the coordinate column of the image of the $j$th basis vector ([[def-coordinate-column-and-matrix-of-a-linear-map]]).

[L4] The transpose of an $m\times n$ matrix has $(j,i)$ entry equal to the original $(i,j)$ entry ([[def-transpose-of-a-matrix]]).

## Proof

**Proof technique:** entrywise comparison.

1.1 Write $[T]_{\mathcal V}^{\mathcal W}=(a_{ij})$, so [L3] gives $T(v_j)=\sum_{i=1}^m a_{ij}w_i$ and therefore $w_i^*(T(v_j))=a_{ij}$. [L2, L3, algebra]

2.1 The $(j,i)$ entry of $[T^*]_{\mathcal W^*}^{\mathcal V^*}$ is the coefficient of $v_j^*$ in the expansion of $T^*(w_i^*)\in V^*$ along the dual basis $\mathcal V^*$. Since every $\phi\in V^*$ satisfies $\phi=\sum_j\phi(v_j)v_j^*$, that coefficient is $T^*(w_i^*)(v_j)$, which by [L1] equals $w_i^*(T(v_j))=a_{ij}$. [step 1.1, L1, L2, L3]

3.1 By [L4], step 2.1 says exactly that the $n\times m$ matrix of $T^*$ is the transpose of the $m\times n$ matrix of $T$. The calculation also covers $m=0$ or $n=0$, where the matrices are empty rectangles. [step 2.1, L4] ∎
