---
id: thm-planar-triangle-and-edge-count
kind: theorem
title: "A planar triangulation has linearly many triangles and edges"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: delaunay-triangulations-and-voronoi-computation
dependency_level: 4
proof_strategy: direct
deps:
  - def-planar-delaunay-voronoi-structures
  - lem-euler-count-for-planar-triangulation
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mark de Berg et al., Computational Geometry: Algorithms and Applications, 3rd ed., Chapter 9"
      url: "https://ics-websites.science.uu.nl/geobook/interpolation.pdf"
    - title: "David M. Mount, CMSC 754 Computational Geometry, Lecture 13"
      url: "https://jeffe.web.engr.illinois.edu/teaching/compgeom/2021/refs/Mount.pdf"
---

## Statement

For a triangulation of the convex hull of $n$ distinct planar sites with affine dimension two, let $k$ be the number of sites on the hull boundary, $T$ the number of triangles, and $E$ the number of edges. Then
$$T=2n-2-k,\qquad E=3n-3-k.$$
In particular $T<2n$ and $E<3n$.

## Facts & Assumptions

**Given:** A finite triangulation of the convex hull of $n$ distinct sites of affine dimension two.

[F1] [[def-planar-delaunay-voronoi-structures]]: every hull-boundary site is a vertex, the boundary is subdivided at all such sites, and bounded faces are exactly the chosen triangles.

[F2] [[lem-euler-count-for-planar-triangulation]]: $T=2n-2-k$ and $E=3n-3-k$ for this triangulation.

[A1] The convex hull boundary is a polygon with exactly $k$ boundary edges after subdivision at its $k$ sites.

## Proof

1.1 By [F1] and [A1], the triangulation has $k$ hull boundary sites and therefore exactly $k$ subdivided hull edges. Then [F2] gives $T=2n-2-k$. [given, F1, F2, A1]

2.1 By [F2], $E=3n-3-k$. Since $k\ge3$, the formulas imply $T<2n$ and $E<3n$. [F2, step 1.1, algebra] ∎

