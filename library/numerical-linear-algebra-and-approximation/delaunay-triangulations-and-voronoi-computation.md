---
page: delaunay-triangulations-and-voronoi-computation
title: "Delaunay triangulations and voronoi computation"
status: draft
requires:
  - certified-geometric-predicates
  - polynomial-interpolation-and-remainder
items:
  - def-indexed-geometric-site-set
  - lem-complete-ordered-field-is-archimedean
  - lem-linear-cardinal-interpolant-on-an-edge
  - def-lexicographic-lift-tie-break
  - lem-lifted-power-sphere-determinant-identity
  - lem-voronoi-vertex-empty-circle
  - def-planar-delaunay-voronoi-structures
  - def-three-dimensional-delaunay-and-weighted-regular-lower-hull
  - thm-lexicographic-lift-tie-break-consistent
  - def-barycentric-point-location-interpolation-and-voronoi-query
  - lem-euler-count-for-planar-triangulation
  - lem-large-delaunay-supertriangle-exists
  - lem-lifted-flip-potential-decreases
  - lem-lower-lifted-facets-cover-the-convex-hull
  - lem-simplicial-four-polytope-facet-count
  - thm-barycentric-interpolation-and-nearest-neighbor-query-correct
  - thm-planar-triangle-and-edge-count
  - alg-incremental-planar-delaunay-edge-flips
  - alg-incremental-three-dimensional-regular-cavity-repair
  - alg-randomized-history-dag-point-location
  - thm-incremental-planar-delaunay-correctness-and-termination
  - thm-three-dimensional-lower-hull-coverage-empty-sphere-and-termination
  - thm-randomized-history-dag-expected-location-cost
  - thm-three-dimensional-delaunay-output-size-quadratic
examples: []
---

This page develops exact Delaunay triangulations and their Voronoi duals for finite indexed dyadic sites. It specifies duplicate collapse, affine-dimension outputs, hull handling and a stable-id tie rule. The planar construction inserts sites into a containing supertriangle and uses exact-predicate edge flips; a lifted-height integral proves termination, and a local Euler count gives linear planar size. Randomized location has an expected bound only under a uniform random permutation and the specified history DAG.

The page also defines barycentric point location and piecewise-affine interpolation on Delaunay cells, plus nearest-site queries that report whether the query is outside the convex hull. In three dimensions, ordinary Delaunay and weighted regular triangulations are described by the lower hull of the lifted points. The exact insertion/cavity branch reports degenerate projected bases, recognizes formal-hidden weighted sites, proves empty-sphere coverage on its admissible branch, and gives a quadratic output bound. No minimum-angle or tetrahedral dihedral-quality guarantee is claimed; such mesh-quality statements require a separate refinement theorem.

## A planar Voronoi–Delaunay dual

The solid triangle joins the three sites. The dotted rays are the common nearest-site boundaries. Their directions are perpendicular to the corresponding Delaunay edges; the three rays meet at the circumcenter, which is the unique Voronoi vertex in this example.

```tikz
\begin{tikzpicture}[scale=1.05]
  \coordinate (A) at (0,0);
  \coordinate (B) at (4,0);
  \coordinate (C) at (1,3);
  \coordinate (O) at (2,1);
  \draw[thick] (A)--(B)--(C)--cycle;
  \draw[densely dashed,blue] (O)--(2,-2);
  \draw[densely dashed,blue] (O)--(-1,2);
  \draw[densely dashed,blue] (O)--(5,4);
  \fill (A) circle (2pt) node[below left] {$A=(0,0)$};
  \fill (B) circle (2pt) node[below right] {$B=(4,0)$};
  \fill (C) circle (2pt) node[above] {$C=(1,3)$};
  \fill[blue] (O) circle (2pt) node[right] {$O=(2,1)$};
  \node[blue] at (2,-1.4) {$V(A)\cap V(B)$};
  \node[blue] at (-0.2,2.4) {$V(A)\cap V(C)$};
  \node[blue] at (4.2,3.3) {$V(B)\cap V(C)$};
\end{tikzpicture}
```

The coordinates are exact: $O$ is equidistant from $A,B,C$, with squared distance $5$. The drawn Voronoi rays are the half-lines of the perpendicular bisectors on which the indicated two sites are jointly nearest. The picture illustrates these definitions; no proof depends on visual measurement.
