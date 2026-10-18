---
id: thm-three-dimensional-delaunay-output-size-quadratic
kind: theorem
title: "Three-dimensional Delaunay and regular output size is quadratic"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: delaunay-triangulations-and-voronoi-computation
dependency_level: 7
proof_strategy: direct
deps:
  - def-three-dimensional-delaunay-and-weighted-regular-lower-hull
  - thm-three-dimensional-lower-hull-coverage-empty-sphere-and-termination
  - lem-simplicial-four-polytope-facet-count
  - thm-lexicographic-lift-tie-break-consistent
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mark de Berg et al., Computational Geometry: Algorithms and Applications, 3rd ed., Chapter 9"
      url: "https://ics-websites.science.uu.nl/geobook/interpolation.pdf"
    - title: "CGAL 6.3 User Manual, 3D Triangulations, Complexity and Performance"
      url: "https://cgal.github.io/9465/doc/Triangulation_3/index.html"
---

## Statement

For $n\ge4$ weighted sites of projected affine dimension three, the number of 3D Delaunay tetrahedra or weighted regular tetrahedra returned by the fixed formal lift is at most $n(n-3)/2$, hence $O(n^2)$. No planar $O(n)$ bound or mesh-quality guarantee is asserted.

## Facts & Assumptions

**Given:** A finite indexed weighted site set of projected affine dimension three and the fixed-universe formal lift.

[F1] [[def-three-dimensional-delaunay-and-weighted-regular-lower-hull]]: lower facets project to regular cells; zero weights give ordinary Delaunay tetrahedra.

[F2] [[thm-lexicographic-lift-tie-break-consistent]]: any five lifted sites whose projected base contains four affinely independent sites have a nonzero formal determinant.

[F3] [[lem-simplicial-four-polytope-facet-count]]: every full-dimensional convex 4-polytope with $m\ge5$ vertices has at most $m(m-3)/2$ facets.

[F4] [[thm-three-dimensional-lower-hull-coverage-empty-sphere-and-termination]]: the returned tetrahedra are exactly the full-dimensional lower simplices of the formal lift.

[A1] The projected site set has affine dimension three.

## Proof

1.1 Assume $n\ge5$. For each five-site tuple whose projected points contain four affinely independent sites, order four such sites first and the fifth last, and let $P(\varepsilon)$ be its lifted determinant polynomial. By [F2], this polynomial is nonzero. Write it as $c\varepsilon^k+\sum_j c_j\varepsilon^{k_j}$, where $c\ne0$ and every $k_j>k$. If $C=\sum_j|c_j|>0$, then for $0<\varepsilon<\min(1,|c|/(2C))$, the absolute value of the higher terms after dividing by $\varepsilon^k$ is at most $C\varepsilon<|c|/2$, since each $k_j-k$ is a positive integer; if $C=0$, its sign is constant for every $\varepsilon>0$. Thus each such determinant has its formal sign for all sufficiently small positive real $\varepsilon$. There are finitely many relevant tuples, so choose one positive real $\varepsilon$ small enough for all of them. Use this same value to evaluate the heights of every site. By [F4], each output tetrahedron is a lower simplex of the formal lift. On its affinely independent projected base, every other site's formal support determinant is nonzero by [F2]; step 1.1 preserves its sign. If $O$ is the projected orientation determinant of the base, $h_q$ is the query height, and $\ell(q)$ is the height of the base graph plane at the query, row subtraction gives the displayed-order identity $P=-O(h_q-\ell(q))$. As $O\ne0$ and is unchanged by height specialization, the same four real lifted points support a real lower facet and every other lifted point lies strictly above it. No fifth point is in that facet. Distinct output tetrahedra therefore correspond to distinct facets of this one real convex hull. [F1, F2, F4, algebra]

1.2 If $n=4$, at most one four-site candidate is output, and $1\le4(4-3)/2$. If $n\ge5$, choose four affinely independent projected sites and a fifth distinct site. Their formal determinant is nonzero by [F2], and its real specialization at the common value from step 1.1 is nonzero. Hence the real lifted convex hull is full-dimensional in $\mathbb R^4$. Let $m\le n$ be its number of extreme vertices; full dimension forces $m\ge5$. [A1, F2, step 1.1, algebra]

2.1 Apply [F3] to this full-dimensional convex 4-polytope. Its total number of facets, hence also its number of lower facets, is at most $m(m-3)/2$. By step 1.1, the output tetrahedra inject into those facets. The function $s(s-3)/2$ is increasing for integers $s\ge5$, so the output count is at most $n(n-3)/2$. This is quadratic; the argument establishes no angle or tetrahedral-quality bound. [F3, step 1.1, step 1.2, algebra] ∎
