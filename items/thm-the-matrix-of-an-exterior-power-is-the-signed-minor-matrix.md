---
id: thm-the-matrix-of-an-exterior-power-is-the-signed-minor-matrix
kind: theorem
title: "In basis-wedge coordinates, the matrix of $\\Lambda^kT$ is the signed matrix of $k$-minors"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-kth-exterior-power-of-a-linear-map, thm-increasing-basis-wedges-form-a-basis, def-coordinate-column-and-matrix-of-a-linear-map, def-determinant-of-a-square-matrix]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Exterior Powers"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/extmod.pdf"
---

## Statement

Let $V,W$ be finite-dimensional with ordered bases $(e_1,\ldots,e_n)$ and $(f_1,\ldots,f_m)$, let $T:V\to W$ be linear with matrix $A=(a_{ij})$, so $T(e_j)=\sum_ia_{ij}f_i$, and let $1\le k\le\min(n,m)$. In the wedge bases $(e_I)$ and $(f_J)$ of [[thm-increasing-basis-wedges-form-a-basis]], the matrix of $\Lambda^kT$ has entries

$$[\Lambda^kT]_{J,I}=\det A_{J,I},$$

where $A_{J,I}$ is the $k\times k$ submatrix of $A$ with rows $J=\{j_1<\cdots<j_k\}$ and columns $I=\{i_1<\cdots<i_k\}$.

## Facts & Assumptions

**Given:** Ordered bases, a linear map $T$ with matrix $A$, and $k$-subsets $I,J$.

[L1] The induced map is $\Lambda^kT(e_I)=T(e_{i_1})\wedge\cdots\wedge T(e_{i_k})$ ([[def-kth-exterior-power-of-a-linear-map]]).

[L2] The $j$th column of $A$ is the coordinate column of $T(e_j)$, i.e. $T(e_j)=\sum_ia_{ij}f_i$ ([[def-coordinate-column-and-matrix-of-a-linear-map]]).

[L3] The wedge families $(e_I)$ and $(f_J)$ are bases of the exterior powers ([[thm-increasing-basis-wedges-form-a-basis]]).

[L4] The matrix determinant is the Leibniz sum $\det B=\sum_{\sigma}\operatorname{sgn}(\sigma)\prod_{r}b_{\sigma(r),r}$ ([[def-determinant-of-a-square-matrix]]).

## Proof

**Proof technique:** direct.


1.1 By [L1], $\Lambda^kT(e_I)=T(e_{i_1})\wedge\cdots\wedge T(e_{i_k})$. [L1]

1.2 By [L2], each factor expands as $T(e_{i_r})=\sum_ma_{m,i_r}f_m$. [L2]

1.3 By [L3], the wedges $f_J$ form a basis of $\Lambda^kW$. [L3]

2.1 Expanding step 1.1 with step 1.2 and collecting the coefficient of $f_J=f_{j_1}\wedge\cdots\wedge f_{j_k}$: only tuples with distinct indices survive (a repeated index makes the wedge zero), and reordering the tuple into increasing order multiplies by the permutation sign, so the coefficient is $\sum_{\sigma\in S_k}\operatorname{sgn}(\sigma)\,a_{j_{\sigma(1)},i_1}\cdots a_{j_{\sigma(k)},i_k}$, which is $\det A_{J,I}$ by [L4]. [step 1.1, step 1.2, L4, algebra]

3.1 By step 1.3 and [L2], the coefficients computed in step 2.1 are exactly the entries of the matrix of $\Lambda^kT$ in the wedge bases. [step 1.3, step 2.1, L2] ∎
