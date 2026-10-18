---
id: thm-barycentric-interpolation-and-nearest-neighbor-query-correct
kind: theorem
title: "Barycentric interpolation and nearest-site queries are correct"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: delaunay-triangulations-and-voronoi-computation
dependency_level: 4
proof_strategy: direct
deps:
  - def-barycentric-point-location-interpolation-and-voronoi-query
  - def-planar-delaunay-voronoi-structures
  - lem-linear-cardinal-interpolant-on-an-edge
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mark de Berg et al., Computational Geometry: Algorithms and
        Applications, 3rd ed., Chapter 9"
      url: "https://ics-websites.science.uu.nl/geobook/interpolation.pdf"
    - title: "David M. Mount, CMSC 754 Computational Geometry, Lecture 11"
      url: "https://jeffe.web.engr.illinois.edu/teaching/compgeom/2021/refs/Mount.pdf"
verification:
  precheck: pass
---

## Statement

On every nondegenerate triangle, a point lies in the triangle if and only if its unique barycentric coordinates are all nonnegative; these coordinates also give the unique affine interpolant matching the three vertex data. Interpolants on adjacent triangles with common vertex data agree on their shared face. On an edge, the interpolant is the degree-at-most-one cardinal polynomial interpolant. For every nonempty finite site set, the nearest-site query returns a minimizer, breaks ties by least identifier, and reports correctly whether the query is inside or outside the convex hull.

## Facts & Assumptions

**Given:** A finite planar triangulation with vertex data, and a nonempty finite unweighted indexed site set.

[F1] [[def-barycentric-point-location-interpolation-and-voronoi-query]]: barycentric coordinates are the unique affine coefficients summing to one; nonnegative coordinates characterize membership, and the interpolant is their data-weighted sum.

[F2] [[def-planar-delaunay-voronoi-structures]]: adjacent triangles meet in a common vertex or edge and cover the convex hull.

[F3] [[lem-linear-cardinal-interpolant-on-an-edge]]: over a field, the unique degree-at-most-one interpolant at distinct nodes $a,b$ is $y_0+(y_1-y_0)(X-a)/(b-a)$.

[A1] Each triangle has three affinely independent vertices, and all incident triangles use the same datum at a shared site.

## Proof

1.1 The matrix with columns $p_1-p_0,p_2-p_0$ is invertible by [A1], so the two coordinate equations uniquely determine $\lambda_1,\lambda_2$ and then $\lambda_0=1-\lambda_1-\lambda_2$. Thus the coordinates in [F1] are unique, and their nonnegativity is exactly membership in the convex combinations defining the triangle. [given, F1, A1, algebra]

1.2 Parameterize an edge by $x(t)=(1-t)p_0+tp_1$. Its barycentric interpolant is $(1-t)f_0+tf_1$. Apply [F3] with nodes $0,1$ and data $f_0,f_1$: the unique cardinal polynomial is $f_0+(f_1-f_0)t$, which equals the edge interpolant, including its separate endpoint values. [given, F3, algebra]

2.1 Each $\lambda_i(x)$ is affine in $x$, so $I_Tf=\sum_i\lambda_i f_i$ is affine and has value $f_i$ at vertex $p_i$. An affine function agreeing at three noncollinear vertices is unique because its three coefficients are determined by an invertible $3\times3$ augmented vertex matrix. On a shared edge, both triangle restrictions are affine in the edge parameter and agree at its two endpoints, so they coincide throughout the edge; the same endpoint argument handles a shared vertex. [F1, F2, step 1.1, algebra]

3.1 A nonempty finite set of real distances $\{\|x-p\|^2:p\in P\}$ has a minimum. The finite set of identifiers attaining it has a least element, so the specified query returns exactly one minimizing site. Its inside/outside status is decided by the defining convex-hull membership test, equivalently by triangle barycentric membership when $x$ lies in the triangulated hull; outside the hull no triangle is returned but the same finite minimum still exists. [given, F1, F2, construct] ∎
