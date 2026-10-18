---
id: lem-voronoi-vertex-empty-circle
kind: lemma
title: "A Voronoi vertex has a common empty circle of nearest sites"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: delaunay-triangulations-and-voronoi-computation
dependency_level: 1
proof_strategy: direct
deps:
  - def-indexed-geometric-site-set
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David M. Mount, CMSC 754 Computational Geometry, Lecture 11"
      url: "https://jeffe.web.engr.illinois.edu/teaching/compgeom/2021/refs/Mount.pdf"
    - title: "Mark de Berg et al., Computational Geometry: Algorithms and Applications, 3rd ed., Chapter 9"
      url: "https://ics-websites.science.uu.nl/geobook/interpolation.pdf"
---

## Statement

Let $P\subset\mathbb R^2$ be finite and nonempty, and define $V(p)=\{x:\|x-p\|^2\le\|x-q\|^2\ \text{for all }q\in P\}$. If $x$ belongs to at least three distinct cells, then all sites whose cells contain $x$ lie on one circle centered at $x$, no site lies strictly inside that circle, and their convex hull is a polygon with those sites as its vertices.

## Facts & Assumptions

**Given:** A finite nonempty planar site set $P$ and a point $x$ in at least three distinct closed nearest-site cells.

[F1] [[def-indexed-geometric-site-set]]: after duplicate collapse, the sites are distinct points in the Euclidean plane.

[A1] The Voronoi cell convention is the closed nearest-site inequality in the Statement.

## Proof

1.1 Choose three distinct sites $p_1,p_2,p_3$ whose cells contain $x$. From $x\in V(p_i)$, $\|x-p_i\|^2\le\|x-p_j\|^2$ for every $j$; reversing $i,j$ gives equality. Thus all sites whose cells contain $x$ have the same squared distance $r^2$ from $x$. For every other site $q$, the defining inequality gives $r^2\le\|x-q\|^2$, so none is strictly inside the circle. [given, F1, A1, algebra]

2.1 The common radius is positive, since radius zero would force every site whose cell contains $x$ to equal $x$, contradicting distinctness and the existence of three sites. A line intersects the circle $\|y-x\|^2=r^2$ in at most two points: parameterizing the line as $y=a+tv$ gives a nonzero quadratic equation in $t$. Hence no three of the sites on the circle are collinear. For any one such site $p$, the tangent line at $p$ supports the disk and meets the circle only at $p$; therefore $p$ cannot be a convex combination of the other circle sites. All nearest sites are extreme points of their convex hull, so that hull is a polygon with these sites as its vertices. [step 1.1, F1, algebra, algebra] ∎
