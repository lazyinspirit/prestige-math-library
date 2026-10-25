---
id: lem-lifted-power-sphere-determinant-identity
kind: lemma
title: "The lifted determinant records a power-sphere side"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: delaunay-triangulations-and-voronoi-computation
dependency_level: 1
proof_strategy: direct
deps:
  - def-indexed-geometric-site-set
  - def-certified-geometric-predicate-determinants
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David M. Mount, CMSC 754 Computational Geometry, Lecture 13: Delaunay
        Triangulations: Incremental Construction"
      url: "https://jeffe.web.engr.illinois.edu/teaching/compgeom/2021/refs/Mount.pdf"
    - title: "Don Sheehy, Computational Geometry, Fall 2014, Lecture 22: Weighted
        Delaunay Triangulations"
      url: "https://donsheehy.net/courses/comp_geom/2014_fall/notes/22_weighted_delau\
        nay.pdf"
    - title: "CGAL 6.3 User Manual, 3D Triangulations, Regular Triangulation"
      url: "https://cgal.github.io/9465/doc/Triangulation_3/index.html"
verification:
  precheck: pass
---

## Statement

Let $d\in\{2,3\}$, let $p_0,\ldots,p_d,q\in\mathbb D^d$, and let their dyadic weights be $w_0,\ldots,w_d,w_q$ (zero when absent). Assume $p_0,\ldots,p_d$ are affinely independent. If $c\in\mathbb R^d$ and $R\in\mathbb R$ satisfy
$$\|p_i-c\|^2-w_i=R\qquad(0\le i\le d),$$
define the power difference
$$\Delta(q)=\|q-c\|^2-w_q-R.$$
Let $O_d$ be the determinant of the rows $(p_i,1)$ for $i=0,\ldots,d$, and let $P_d$ be the determinant of the $d+2$ rows $(p_i,\|p_i\|^2-w_i,1)$, including the query row $(q,\|q\|^2-w_q,1)$. Then
$$P_d=-O_d\Delta(q),\qquad O_dP_d=-O_d^2\Delta(q).$$
Thus the sign of $O_dP_d$ is positive, zero or negative exactly when $q$ is respectively inside, on or outside the power sphere. When all weights are zero, this is the ordinary circumsphere convention.

## Facts & Assumptions

**Given:** The ordered points, weights, determinant row conventions and a common power sphere for the base sites.

[F1] [[def-certified-geometric-predicate-determinants]]: orientation determinants use rows $(p_i,1)$; lifted sphere determinants use point coordinates, the lifted height, and a final column of $1$ in the displayed row order.

[F2] [[def-indexed-geometric-site-set]]: site coordinates and weights are exact dyadic rationals; absent weights are zero.

[A1] The points $p_0,\ldots,p_d$ are affinely independent, and $\|p_i-c\|^2-w_i=R$ for each base site.

## Proof

1.1 Put $h_i=\|p_i\|^2-w_i$. Let $A$ be the $d\times d$ matrix whose rows are $p_i-p_0$ for $i=1,\ldots,d$. Subtract row $p_0$ from each other row of the orientation matrix defining $O_d$, then expand along its final column. Since the base points are affinely independent, $\det A\ne0$, and the cofactor sign gives $\det A=(-1)^dO_d$. [given, F1, algebra]

1.2 Expanding the equal power-sphere equations in [A1] gives $h_i-h_0=2c\cdot(p_i-p_0)$ for $1\le i\le d$. For the query row, the same expansion gives $h_q-h_0=2c\cdot(q-p_0)+\Delta(q)$. [given, F2, A1, algebra]

2.1 In the lifted determinant defining $P_d$, subtract row $p_0$ from all other rows and expand along the final column. The cofactor sign is $(-1)^{d+3}$. Subtract $2c_j$ times coordinate column $j$ from the lifted-height column for every $j$; by [step 1.2] the first $d$ height entries become zero and the query height entry becomes $\Delta(q)$. The remaining determinant is $\det A\,\Delta(q)$, so $P_d=(-1)^{d+3}\det A\,\Delta(q)=-O_d\Delta(q)$ by [step 1.1]. [given, F1, step 1.1, step 1.2, algebra]

3.1 Multiplying the identity in [step 2.1] by $O_d$ gives $O_dP_d=-O_d^2\Delta(q)$. Since affine independence gives $O_d\ne0$, the factor $O_d^2$ is positive; hence the product has the claimed inside/on/outside sign. [given, step 2.1, algebra] ∎
