---
id: lem-simplicial-four-polytope-facet-count
kind: lemma
title: "A convex 4-polytope has at most m(m−3)/2 facets"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: delaunay-triangulations-and-voronoi-computation
dependency_level: 4
proof_strategy: direct
deps:
  - lem-euler-count-for-planar-triangulation
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "CGAL 6.3 User Manual, 3D Triangulations, Complexity and Performance"
      url: "https://cgal.github.io/9465/doc/Triangulation_3/index.html"
    - title: "Mark de Berg et al., Computational Geometry: Algorithms and Applications, 3rd ed., Chapter 9"
      url: "https://ics-websites.science.uu.nl/geobook/interpolation.pdf"
---

## Statement

Let $Q$ be a full-dimensional convex polytope in $\mathbb R^4$ with $m\ge5$ vertices. A facet is a three-dimensional face, and a vertex is an extreme point. Then the number $f_3$ of facets satisfies
$$f_3\le \frac{m(m-3)}2.$$

## Facts & Assumptions

**Given:** A full-dimensional convex 4-polytope $Q$ with $m\ge5$ vertices.

[F1] [[lem-euler-count-for-planar-triangulation]]: a triangulation of a convex planar polygonal domain with $d$ vertices and $k$ hull sites has exactly $2d-2-k$ bounded triangles, by the local angle-and-incidence count.

## Proof

1.1 Fix a vertex $v$ of $Q$ and let $C$ be the convex hull of its other vertices. Since $v$ is extreme, $v\notin C$. The finite convex hull $C$ is compact, so choose $q\in C$ minimizing $\|v-q\|$. For every $y\in C$ and $0<t\le1$, $q+t(y-q)\in C$, hence $\|v-q-t(y-q)\|^2\ge\|v-q\|^2$. Expanding, dividing by $t$, and letting $t\downarrow0$ gives $(v-q)\cdot(y-q)\le0$. Therefore $\ell(x)=(v-q)\cdot x$ satisfies $\ell(v)-\ell(y)\ge\|v-q\|^2>0$ for every $y\in C$. Choose $\delta>0$ smaller than every positive gap $\ell(v)-\ell(u)$ over the other vertices. The section $Q_v=Q\cap\{\ell=\ell(v)-\delta\}$ cuts exactly the edges incident to $v$ and is a three-dimensional convex polytope; its vertices correspond to those edges, and its facets correspond to the facets of $Q$ containing $v$. Write $d_v,t_v$ for the numbers of vertices and facets of $Q_v$. [given, choose, construct, algebra]

2.1 Choose a facet $F_0$ of $Q_v$ and a viewpoint just outside its relative interior in the open region that gives a Schlegel projection onto the plane of $F_0$. Convexity makes the projected facets cover $F_0$: each ray from the viewpoint through an interior point of $F_0$ enters $Q_v$ there and has a unique last intersection with its boundary. The exit point lies on a non-base facet; uniqueness of that exit makes projected facet interiors disjoint, and shared edges project to shared boundaries. Choose the viewpoint generically within this open region so projected vertices are distinct and no three projected vertices are collinear. For each pair or triple of vertices, the forbidden coincidence or collinearity condition is a nonzero polynomial equation in the viewpoint coordinates: a pair coincidence forces the viewpoint onto their line, and a triple collinearity forces it into the plane through those three noncollinear vertices. A nonzero polynomial cannot vanish on an open set (in one variable it has finitely many roots; induction on the variables applied to its coefficient polynomials proves the claim), so finitely many forbidden sets cannot exhaust the region. Triangulate each projected convex polygonal facet by joining one vertex to its nonadjacent vertices. This yields a triangulation of $F_0$ with $d_v$ sites and $k_v$ hull sites, where $k_v$ is the number of vertices of $F_0$ and $k_v\ge3$. [step 1.1, construct, choose, algebra]

3.1 There are $t_v-1$ bounded facets in the Schlegel triangulation, and each contributes at least one triangle, so $t_v-1\le T_v$. By [F1], $T_v=2d_v-2-k_v$. Therefore $t_v\le2d_v-1-k_v\le2d_v-4$. [F1, step 2.1, algebra]

4.1 Count vertex-facet incidences. Every facet of a four-dimensional polytope has at least four vertices, so $4f_3\le\sum_v t_v$. By step 3.1 and the fact that each edge has two endpoints, $\sum_vt_v\le2\sum_vd_v-4m=4f_1-4m$. [step 3.1, algebra]

5.1 The graph of $Q$ is simple, so $f_1\le\binom m2$. Step 4.1 yields $4f_3\le4f_1-4m$, hence $f_3\le f_1-m\le\binom m2-m=m(m-3)/2$. [step 4.1, algebra] ∎
