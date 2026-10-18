---
id: ex-collinear-sites-lower-dimensional-output
kind: example
title: "Collinear and duplicate sites return a canonical chain"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: delaunay-triangulations-and-voronoi-computation-examples
dependency_level: 7
proof_strategy: direct
deps:
  - def-indexed-geometric-site-set
  - def-planar-delaunay-voronoi-structures
  - thm-incremental-planar-delaunay-correctness-and-termination
  - thm-planar-triangle-and-edge-count
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mark de Berg et al., Computational Geometry: Algorithms and Applications, 3rd ed., Chapter 9, Section 9.1"
      url: "https://ics-websites.science.uu.nl/geobook/interpolation.pdf"
    - title: "David M. Mount, CMSC 754 Computational Geometry, Lecture 11"
      url: "https://jeffe.web.engr.illinois.edu/teaching/compgeom/2021/refs/Mount.pdf"
---

## Statement

For unweighted sites with distinct ids at $(0,0),(1,0),(1,0),(2,0)$, duplicate collapse retains the least id at $(1,0)$, and the affine-dimension-one output is the ordered two-edge chain from $(0,0)$ to $(2,0)$.

## Facts & Assumptions

**Given:** The four listed exact dyadic coordinates, stable identifiers $1,2,3,4$ in that order, and unweighted duplicate handling.

[F1] [[def-indexed-geometric-site-set]]: unweighted duplicates are equal coordinates and each class retains its least identifier.

[F2] [[def-planar-delaunay-voronoi-structures]]: an affine-dimension-one set is sorted by the first varying coordinate and joined consecutively, with no triangles.

[F3] [[thm-incremental-planar-delaunay-correctness-and-termination]]: the lower-dimensional branch returns the defined chain.

[F4] [[thm-planar-triangle-and-edge-count]]: the planar triangle-count theorem assumes affine dimension two and makes no claim on this branch.

[A1] The coordinate list is exactly the stated finite input, and its first varying coordinate is $x$.

## Proof

1.1 The two entries at $(1,0)$ form one unweighted duplicate class by [F1]. Their identifiers are $2$ and $3$, so the retained representative has id $2$ and id $3$ is recorded as discarded. The deduplicated coordinates are $(0,0),(1,0),(2,0)$. [given, F1, A1, algebra]

2.1 These three distinct points lie on the horizontal line $y=0$ and are not all equal, so their affine dimension is exactly one. Sorting by $x$ gives the displayed order, and [F2] joins consecutive points, yielding edges $(0,0)(1,0)$ and $(1,0)(2,0)$. [step 1.1, F2, algebra]

3.1 The output has no triangles because the affine dimension is one; the algorithm therefore uses the branch of [F3], while the affine-dimension-two premise of [F4] does not apply. [F2, F3, F4, step 2.1] ∎
