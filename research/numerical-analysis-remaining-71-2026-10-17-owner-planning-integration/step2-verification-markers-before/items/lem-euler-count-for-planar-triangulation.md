---
id: lem-euler-count-for-planar-triangulation
kind: lemma
title: "Euler counting for a finite planar triangulation"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: delaunay-triangulations-and-voronoi-computation
dependency_level: 3
proof_strategy: direct
deps:
  - def-planar-delaunay-voronoi-structures
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mark de Berg et al., Computational Geometry: Algorithms and Applications, 3rd ed., Chapter 9"
      url: "https://ics-websites.science.uu.nl/geobook/interpolation.pdf"
    - title: "David M. Mount, CMSC 754 Computational Geometry, Lecture 12"
      url: "https://jeffe.web.engr.illinois.edu/teaching/compgeom/2021/refs/Mount.pdf"
---

## Statement

For a finite triangulation of the convex hull of $n$ distinct planar sites of affine dimension two, let $k$ be the number of sites on the hull boundary, $E$ the number of edges, and $T$ the number of bounded triangular faces. Then
$$3T=2E-k,\qquad n-E+T=1,$$
and consequently $T=2n-2-k$ and $E=3n-3-k$.

## Facts & Assumptions

**Given:** A finite triangulation of the convex hull of $n$ distinct planar sites, with its connected 1-skeleton.

[F1] [[def-planar-delaunay-voronoi-structures]]: a triangulation covers the convex hull with nondegenerate triangles meeting in common faces; its connected 1-skeleton has precisely those bounded triangular faces and one unbounded exterior face.

[F2] [[def-planar-delaunay-voronoi-structures]]: the triangles partition the convex hull, meet along common complete faces, and the hull boundary is subdivided at every boundary site.

## Proof

1.1 Let $h$ be the number of hull corners, meaning the boundary sites that are not in the relative interior of any hull edge. Their interior angles sum to $(h-2)\pi$, because a convex $h$-gon is divided into $h-2$ triangles by diagonals from one corner. Each of the other $k-h$ boundary sites has straight angle $\pi$. Around each interior site the incident triangle angles sum to $2\pi$, while at each boundary site they sum to its hull angle. Counting all triangle angles gives $\pi T=2\pi(n-k)+(h-2)\pi+(k-h)\pi=(2n-k-2)\pi$, hence $T=2n-2-k$. [given, F1, F2, algebra]

1.2 Count incidences between triangle sides and edges. Each triangle contributes three. An interior edge has one triangle on each of its two local sides; a hull edge has exactly one incident triangle inside the convex hull. Since the hull boundary has $k$ sites, it has $k$ subdivided boundary edges. Thus $3T=2(E-k)+k=2E-k$. [given, F1, F2, algebra]

2.1 Substituting the value of $T$ from step 1.1 into step 1.2 gives $E=3n-3-k$. Consequently $n-E+T=n-(3n-3-k)+(2n-2-k)=1$, proving both identities. [step 1.1, step 1.2, algebra] ∎
