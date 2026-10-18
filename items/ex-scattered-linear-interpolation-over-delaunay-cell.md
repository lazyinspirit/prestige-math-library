---
id: ex-scattered-linear-interpolation-over-delaunay-cell
kind: example
title: "A scattered affine interpolant on one Delaunay cell"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: delaunay-triangulations-and-voronoi-computation-examples
dependency_level: 7
proof_strategy: direct
deps:
  - def-indexed-geometric-site-set
  - def-planar-delaunay-voronoi-structures
  - def-barycentric-point-location-interpolation-and-voronoi-query
  - thm-barycentric-interpolation-and-nearest-neighbor-query-correct
  - thm-incremental-planar-delaunay-correctness-and-termination
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

On the Delaunay triangle with vertices $(0,0),(2,0),(0,2)$ and vertex data $0,2,2$, the query $(1/2,1/2)$ has barycentric weights $1/2,1/4,1/4$ and affine interpolated value $1$.

## Facts & Assumptions

**Given:** The three indexed dyadic sites $(0,0),(2,0),(0,2)$ with respective scalar data $0,2,2$, and query $x=(1/2,1/2)$.

[F1] [[def-indexed-geometric-site-set]]: these are distinct exact dyadic sites.

[F2] [[def-planar-delaunay-voronoi-structures]]: a triangulation of three noncollinear sites has their convex hull as its single triangular cell.

[F3] [[def-barycentric-point-location-interpolation-and-voronoi-query]]: barycentric coordinates sum to one, reconstruct the point, and the interpolant is their weighted data sum.

[F4] [[thm-barycentric-interpolation-and-nearest-neighbor-query-correct]]: the coordinates determine exact membership and the unique affine interpolant.

[F5] [[thm-incremental-planar-delaunay-correctness-and-termination]]: the cell is weakly empty-circle and is returned by the algorithm.

[A1] No other sites are included in this example's site set.

## Proof

1.1 Let $\lambda_0,\lambda_1,\lambda_2$ correspond to $(0,0),(2,0),(0,2)$. The coordinate equations give $2\lambda_1=1/2$ and $2\lambda_2=1/2$, hence $\lambda_1=\lambda_2=1/4$; their sum constraint gives $\lambda_0=1/2$. All three are nonnegative, so the query lies in the triangle by [F3]. [given, F1, F3, algebra]

2.1 The interpolated value is $0\cdot\lambda_0+2\cdot\lambda_1+2\cdot\lambda_2=2(1/4)+2(1/4)=1$. Uniqueness follows from [F4]. [F3, F4, step 1.1, algebra]

3.1 The three sites are noncollinear, so by [F2] their convex hull is their single triangle. Its circumcircle has center $(1,1)$ and radius squared $2$; there are no other sites by [A1], so it is weakly empty, and [F5] returns this cell. [F2, F5, A1, algebra] ∎
