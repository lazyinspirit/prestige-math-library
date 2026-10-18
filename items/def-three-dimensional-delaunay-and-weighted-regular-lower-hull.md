---
id: def-three-dimensional-delaunay-and-weighted-regular-lower-hull
kind: definition
title: "Three-dimensional Delaunay and weighted regular triangulations by lifting"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: delaunay-triangulations-and-voronoi-computation
dependency_level: 2
deps:
  - def-indexed-geometric-site-set
  - lem-lifted-power-sphere-determinant-identity
  - def-lexicographic-lift-tie-break
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Don Sheehy, Computational Geometry, Fall 2014, Lecture 22: Weighted Delaunay Triangulations"
      url: "https://donsheehy.net/courses/comp_geom/2014_fall/notes/22_weighted_delaunay.pdf"
    - title: "CGAL 6.3 User Manual, 3D Triangulations, Regular Triangulation"
      url: "https://cgal.github.io/9465/doc/Triangulation_3/index.html"
---

## Definition

For a weighted site $(p,w)$, define its power distance from $x\in\mathbb R^3$ by
$$\pi_{(p,w)}(x)=\|x-p\|^2-w.$$
Its lifted point is $\widehat p=(p,\|p\|^2-w)\in\mathbb R^4$. A lower face of the lifted convex hull is a face supported by a nonvertical hyperplane $z=\ell(x)$ with every lifted site on or above that hyperplane. The projection of the union of lower faces is the **regular subdivision** of the projected sites; a simplex in that subdivision has an empty power sphere, meaning its common power distance is no larger than that of any input site.

The lex-refined lift is interpreted over the ordered rational-function field of [[def-lexicographic-lift-tie-break]], using one fixed finite universe of all input sites. When every weight is zero, the regular subdivision is the ordinary 3D Delaunay subdivision and power spheres are circumspheres. A weighted site is **original-hidden** if its unperturbed lift is not a vertex of any lower face of the original lifted convex hull, and **formal-hidden** if its lex-refined lift is not a vertex of any lower face of the fixed formal lifted convex hull. These notions can differ; the algorithm's `hidden` report means formal-hidden. A nonsimplicial lower face is refined with the same fixed-universe lexicographic lift convention. For projected affine dimension below three, the algorithm reports `lower-dimensional` with that dimension and the exact deduplicated site list, and makes no tetrahedralization claim. A tetrahedral output is claimed only on the full-dimensional branch with nondegenerate projected bases.
