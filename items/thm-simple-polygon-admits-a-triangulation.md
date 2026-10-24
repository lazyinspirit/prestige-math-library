---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-simple-polygon-admits-a-triangulation.json
  precheck: pass
id: thm-simple-polygon-admits-a-triangulation
kind: theorem
title: "Every simple polygon admits a triangulation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-simple-polygonal-region-and-triangulation]
justified_by: []
aliases: []
landmark: true
short: "Simple polygons triangulate"
proof_strategy: constructive
sources:
  scraped: []
  references:
    - title: "Geometry: Combinatorics & Algorithms 2020, Theorem 4.9"
      url: "https://ti.inf.ethz.ch/ew/courses/Geo20/lecture/gca20-4.pdf"
    - title: "J. Erickson, Simple Polygons, Theorem 1.5"
      url: "https://jeffe.cs.illinois.edu/teaching/comptop/2017/chapters/01-simple-polygons.pdf"
pipeline_run: null
---

## Statement

Every simple polygon admits a triangulation.

## Facts & Assumptions

**Given:** A simple polygonal region with $n\ge3$ boundary vertices, in the sense of [[def-simple-polygonal-region-and-triangulation]].

[L1] A triangulation is a finite family of nondegenerate closed triangles whose union is the polygon and whose pairwise intersections are empty, a common vertex, or a full common edge ([[def-simple-polygonal-region-and-triangulation]]).

## Proof

**Proof technique:** constructive.

1.1 Choose a direction $e$ such that the scalar projections $\langle v_i,e\rangle$ of the finitely many boundary vertices are pairwise distinct. Such a direction exists because only finitely many directions perpendicular to a difference $v_i-v_j$ are forbidden. Use the projection onto $e$ as the horizontal coordinate and the perpendicular coordinate as the vertical one. No boundary edge is vertical in these coordinates. [given, choose, construct]

2.1 Between two consecutive vertex projections, every boundary edge that crosses the open vertical slab is the graph of an affine function, and disjoint boundary edges have a fixed vertical order throughout the slab. On a vertical line in the slab, the compact set $P$ can change between membership and nonmembership only at one of these boundary crossings. Near such a crossing the boundary is a single straight segment and, because the crossing point is not an interior point of $P$, the two local sides cannot both lie in $P$; since $P=\overline{\operatorname{int}P}$, exactly the side belonging to $P$ is filled. Starting below the bounded set and moving upward therefore expresses the part of $P$ in the slab as a finite union of closed bands between consecutive affine boundary graphs. [step 1.1, given]

3.1 Take the closures of all those bands in the finitely many closed slabs. Insert every boundary--wall intersection as a subdivision vertex and use their common finite refinement on each vertical wall. Before this common refinement, the closure of a nonempty band is a convex triangle or quadrilateral: it is bounded by two vertical segments and two affine graphs that retain their vertical order. The common refinement may add collinear vertices to a vertical side, so each resulting two-dimensional cell is a convex polygon whose boundary carries all wall-subdivision vertices. These cells cover $P$, and two distinct cells meet only in a union of full consecutive wall segments, a common vertex, or not at all. [step 2.1, construct]

4.1 Choose one interior point in each two-dimensional cell. Join it to every boundary vertex of that cell in cyclic order. Convexity keeps every joining segment in the cell, and each consecutive boundary pair with the interior point forms a nondegenerate triangle. These triangles cover the cell. On a shared vertical wall, both adjacent cells use the same refined boundary segments, so triangles from opposite sides meet in a full common refined segment, a common endpoint, or not at all; within one cell the fan triangles meet in a full radial edge, the chosen interior point, or not at all. The resulting finite family is therefore face-to-face, covers $P$, and is a triangulation by [L1]. [step 3.1, L1, discharge-construct: finite face-to-face triangulation] ∎

## Remarks

The schematic shows three convex cells meeting a vertical wall after the common wall refinement in step 3.1. The shared vertical wall has consecutive refined segments $[a,q]$ and $[q,b]$. The left cell meets two cells on the right, so its wall must also include their common endpoint $q$. Joining the interior points $p_L$, $p_-$, and $p_+$ to all boundary vertices produces the fans of step 4.1; the fans on opposite sides use matching refined wall segments. The picture illustrates a local configuration, not the entire polygon, and the proof above is independent of it.

```tikz
\begin{tikzpicture}[scale=1.6]
\coordinate (a) at (0,0);
\coordinate (q) at (0,1.5);
\coordinate (b) at (0,3);
\coordinate (l0) at (-3,-0.5);
\coordinate (l1) at (-3,3.4);
\coordinate (r0) at (3,0.5);
\coordinate (r1) at (3,2.6);
\coordinate (pL) at (-1.5,1.45);
\coordinate (pR) at (1,0.65);
\coordinate (pU) at (1,2.37);
\draw[thin] (pL)--(l0) (pL)--(a) (pL)--(q) (pL)--(b) (pL)--(l1);
\draw[thin] (pR)--(a) (pR)--(r0) (pR)--(q);
\draw[thin] (pU)--(q) (pU)--(r1) (pU)--(b);
\draw[thick] (a)--(l0)--(l1)--(b)--(a);
\draw[thick] (a)--(r0)--(q)--(r1)--(b);
\fill (a) circle (1.5pt) node[below] {$a$};
\fill (q) circle (1.5pt) node[right] {$q$};
\fill (b) circle (1.5pt) node[above] {$b$};
\fill (pL) circle (1.5pt) node[above] {$p_L$};
\fill (pR) circle (1.5pt) node[below] {$p_-$};
\fill (pU) circle (1.5pt) node[above] {$p_+$};
\end{tikzpicture}
```
