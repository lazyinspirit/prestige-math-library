---
id: alg-incremental-three-dimensional-regular-cavity-repair
kind: algorithm
title: "Finite exact 3D Delaunay and regular lower-hull cavity repair"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: delaunay-triangulations-and-voronoi-computation
dependency_level: 5
deps:
  - def-three-dimensional-delaunay-and-weighted-regular-lower-hull
  - def-lexicographic-lift-tie-break
  - alg-certified-dyadic-geometric-predicate
  - alg-exact-dyadic-determinant-sign
  - thm-lexicographic-lift-tie-break-consistent
justified_by:
  - thm-three-dimensional-lower-hull-coverage-empty-sphere-and-termination
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Don Sheehy, Computational Geometry, Fall 2014, Lecture 22: Weighted Delaunay Triangulations"
      url: "https://donsheehy.net/courses/comp_geom/2014_fall/notes/22_weighted_delaunay.pdf"
    - title: "CGAL 6.3 User Manual, 3D Triangulations, Regular Triangulations and Conflict Zones"
      url: "https://cgal.github.io/9465/doc/Triangulation_3/index.html"
---

## Definition

Input is a finite indexed list of dyadic sites in $\mathbb R^3$, each with an optional dyadic weight. Collapse only exact duplicate coordinate-weight pairs, retaining the least identifier. If the projected set has affine dimension less than three, return `lower-dimensional`, that dimension, and the exact deduplicated list; do not assert tetrahedra.

For affine dimension three, fix the finite lexicographic universe before insertion. Process sites in stable-id order (any stated permutation is allowed if it is fixed before processing). At each prefix, enumerate every four-site subset. If its projected base is affinely dependent, record that tuple with status `degenerate-base` and omit it from tetrahedral candidates. Otherwise solve the unique affine height plane through its four lifted sites. Retain the tetrahedron exactly when every other lifted site in that prefix lies on or above this plane in the ordered formal field of [[def-lexicographic-lift-tie-break]].

After adding a site, delete old tetrahedra whose plane the new lift violates, retain old tetrahedra still supporting, and add every newly supporting tetrahedron containing the inserted site. This finite set difference is the **cavity repair**; no geometric connectivity or running-time bound is asserted. After the final prefix, report the retained lower tetrahedra, the finite `degenerate-base` tuple list, and every weighted site absent from the lower tetrahedra as `hidden`, meaning formal-hidden in the fixed formal lift, without asserting original-hidden status.

For ordinary orientation use [[alg-certified-dyadic-geometric-predicate]]. For weighted lower tests, form the exact dyadic matrix with lifted column $\|p\|^2-w$ and evaluate the finite formal perturbation coefficients using exact integer determinant signs from [[alg-exact-dyadic-determinant-sign]]. The raw exact predicate keeps zero; the formal lift is applied only by this algorithm's declared tie convention.

## Remarks

For a concrete unweighted insertion, take $A=(0,0,0)$, $B=(1,0,0)$, $C=(0,1,0)$, $D=(0,0,1)$ and insert $q=(1/4,1/4,1/4)$. The picture is a projection in site space: the outer tetrahedron's four triangular facets form the cavity boundary, and joining each facet to $q$ gives $qABC$, $qABD$, $qACD$ and $qBCD$. Dashed edges show the back vertex $D$; crossings in the projection are not extra vertices.

```tikz
\begin{tikzpicture}[scale=1.15]
\coordinate (A) at (0,0);
\coordinate (B) at (3.6,0);
\coordinate (C) at (1.3,2.6);
\coordinate (D) at (2.5,0.9);
\coordinate (Q) at (1.85,0.875);
\draw[thick] (A)--(B)--(C)--(A);
\draw[thick,dashed] (A)--(D) (B)--(D) (C)--(D);
\draw[thick,cyan] (Q)--(A) (Q)--(B) (Q)--(C) (Q)--(D);
\fill (A) circle (1.5pt) node[below left] {$A$};
\fill (B) circle (1.5pt) node[below right] {$B$};
\fill (C) circle (1.5pt) node[above] {$C$};
\fill (D) circle (1.5pt) node[right] {$D$};
\fill[cyan] (Q) circle (2pt) node[above left] {$q$};
\end{tikzpicture}
```

The lower-hull test, rather than the drawing, certifies this replacement. Before insertion the affine height plane is $z=x_1+x_2+x_3$; the new lift has height $3/16<3/4$, so the old tetrahedron is deleted. For $qABC$, the plane is $z=x_1+x_2-5x_3/4$, and the omitted site $D$ has height $1>-5/4$; permuting coordinates checks $qABD$ and $qACD$. For $qBCD$, the plane is $z=13(x_1+x_2+x_3)/4-9/4$, and the omitted site $A$ has height $0>-9/4$. These strict inequalities persist under the fixed formal lift. The schematic illustrates this example only: weighted updates are decided in lifted four-dimensional space, and no general cavity-connectivity assertion is inferred from it. The algorithm's definition and correctness justification remain independent of the figure.
