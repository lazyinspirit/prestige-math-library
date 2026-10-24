---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/alg-randomized-history-dag-point-location.json
  precheck: n/a
id: alg-randomized-history-dag-point-location
kind: algorithm
title: "Randomized planar point location by a history DAG"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: delaunay-triangulations-and-voronoi-computation
dependency_level: 6
deps:
  - def-indexed-geometric-site-set
  - def-planar-delaunay-voronoi-structures
  - alg-incremental-planar-delaunay-edge-flips
  - lem-large-delaunay-supertriangle-exists
justified_by:
  - thm-randomized-history-dag-expected-location-cost
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Mark de Berg et al., Computational Geometry: Algorithms and Applications, 3rd ed., Chapter 9, Sections 9.3–9.4"
      url: "https://ics-websites.science.uu.nl/geobook/interpolation.pdf"
    - title: "David M. Mount, CMSC 754 Computational Geometry, Lecture 13"
      url: "https://jeffe.web.engr.illinois.edu/teaching/compgeom/2021/refs/Mount.pdf"
---

## Definition

Assume a finite full-dimensional planar site set in general position: no three input sites are collinear and no four are cocircular. Choose the augmented dyadic supertriangle by calling `CHOOSE-SUPERTRIANGLE(P,1)` from [[alg-incremental-planar-delaunay-edge-flips]], so the full augmented set has no three collinear sites and no four cocircular sites. Fix the common tie ranks before processing.

Draw one permutation uniformly from all $n!$ permutations of the distinct input sites. Initialize the fixed-universe supertriangle and current triangulation as in [[alg-incremental-planar-delaunay-edge-flips]], and maintain a directed acyclic graph (DAG) whose leaves correspond one-to-one with current triangulation triangles. Initially the DAG has one leaf for the supertriangle.

For each next site $p$, start at the root. At each node, order its child triangles lexicographically by their sorted vertex identifiers and test each child by the same three signed-orientation containment tests used by `INSERT` in [[alg-incremental-planar-delaunay-edge-flips]]. Descend to the unique child containing $p$ until reaching a current leaf $T$. Under the augmented general-position condition, $p$ lies in the interior of a unique triangle at every stage; the located leaf therefore supplies the face certificate `face(T)`. Call `INSERT(p,face(T))` from [[alg-incremental-planar-delaunay-edge-flips]]. The update verifies that certificate, uses it without a triangle scan, and returns the ordered replacement events. Process those events in order: for a face split, replace the old leaf by pointers to its three new triangle leaves; for an interior-edge split, replace each of the two old leaves by pointers to the two new triangles whose interiors meet that old triangle; for a flip, point each of the two old leaves to both new triangle leaves. Each event names the triangles and overlap map as specified by the insertion procedure. A leaf replaced later is treated in the same way, so the graph remains acyclic and its current leaves correspond exactly to the current triangulation. The insertion procedure also accepts an interior-edge certificate from callers whose admissible inputs permit edge hits; this randomized variant's general-position condition excludes that case. Each internal node has at most three children. After construction, remove synthetic-vertex triangles for the returned Delaunay triangulation; the history DAG is the insertion-time point-location structure.


## Remarks

The following are local fragments of the history DAG immediately after one replacement event. In a face split, the old triangle $T$ points to its three new triangles $T_1,T_2,T_3$. In a flip, the two old triangles $A,B$ both point to the same two new triangles $C,D$: these are shared nodes, not duplicate copies. Arrows record the prescribed overlap map from an old triangle to a newly created triangle; they are not geometric edges of the triangulation. Crossings of arrows are not vertices.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm,>=stealth]
\node at (0,1.1) {Face split};
\node[draw,circle,minimum size=0.65cm] (T) at (0,0) {$T$};
\node[draw,circle,minimum size=0.65cm] (T1) at (-1.2,-1.6) {$T_1$};
\node[draw,circle,minimum size=0.65cm] (T2) at (0,-1.6) {$T_2$};
\node[draw,circle,minimum size=0.65cm] (T3) at (1.2,-1.6) {$T_3$};
\draw[->] (T) -- (T1);
\draw[->] (T) -- (T2);
\draw[->] (T) -- (T3);
\node at (4.4,1.1) {Flip};
\node[draw,circle,minimum size=0.65cm] (A) at (3.5,0) {$A$};
\node[draw,circle,minimum size=0.65cm] (B) at (5.3,0) {$B$};
\node[draw,circle,minimum size=0.65cm] (C) at (3.5,-1.6) {$C$};
\node[draw,circle,minimum size=0.65cm] (D) at (5.3,-1.6) {$D$};
\draw[->] (A) -- (C);
\draw[->] (A) -- (D);
\draw[->] (B) -- (C);
\draw[->] (B) -- (D);
\node[anchor=west] at (6,0) {old triangles};
\node[anchor=west] at (6,-1.6) {new triangles};
\end{tikzpicture}
```

Every arrow goes from an older triangle to a triangle created by that replacement event. Repeating this rule gives no directed cycle, even when new nodes have two parents. Only the new nodes shown are leaves immediately after the event; later events can replace them in turn. The procedure above specifies the algorithm independently of this illustration.
