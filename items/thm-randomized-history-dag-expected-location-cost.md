---
id: thm-randomized-history-dag-expected-location-cost
kind: theorem
title: "Uniform random insertion gives expected O(n log n) location work"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: delaunay-triangulations-and-voronoi-computation
dependency_level: 7
proof_strategy: direct
deps:
  - alg-randomized-history-dag-point-location
  - thm-incremental-planar-delaunay-correctness-and-termination
  - thm-planar-triangle-and-edge-count
  - lem-lifted-power-sphere-determinant-identity
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mark de Berg et al., Computational Geometry: Algorithms and
        Applications, 3rd ed., Chapter 9, Sections 9.3–9.4, Theorem 9.12 and
        Lemma 9.13"
      url: "https://ics-websites.science.uu.nl/geobook/interpolation.pdf"
    - title: "David M. Mount, CMSC 754 Computational Geometry, Lecture 13"
      url: "https://jeffe.web.engr.illinois.edu/teaching/compgeom/2021/refs/Mount.pdf"
verification:
  precheck: pass
---

## Statement

For a full-dimensional planar input in general position, augmented by a fixed supertriangle so the full set is also in general position, a uniform random permutation, the local insertion updates, and history DAG of [[alg-randomized-history-dag-point-location]] give expected $O(n\log n)$ total point-location work in the exact-predicate-call model. Triangle creation and DAG storage have expected $O(n)$ size. A conservative worst-case bound for all location walks is $O(n^3)$; no randomized expected bound is asserted for nonuniform or adversarial insertion orders.

## Facts & Assumptions

**Given:** $n$ distinct planar sites in general position, a fixed augmented supertriangle with three hull vertices, a uniform random permutation, and the history-DAG insertion algorithm.

[F1] [[alg-randomized-history-dag-point-location]]: a face split creates three triangles, every flip creates two triangles incident to the inserted site, and each replaced triangle node has at most three outgoing pointers.

[F2] [[thm-incremental-planar-delaunay-correctness-and-termination]]: after each insertion the augmented triangles are the common formal lift's $d=2$ lower simplices; removing synthetic vertices gives a weakly empty-circle triangulation of the input hull.

[F3] [[thm-planar-triangle-and-edge-count]]: for $m$ vertices and $k$ hull sites, a planar triangulation has $T=2m-2-k$ triangles and $E=3m-3-k$ edges.

[F4] [[lem-lifted-power-sphere-determinant-identity]]: for a nondegenerate triangle, the lifted determinant sign is the oriented power-distance side of its circumcircle.

[A1] The insertion order is uniform over all $n!$ permutations; every exact orientation or incircle predicate call and each constant-size DAG child test costs one unit. The input and augmented set have no three collinear sites and no four cocircular sites.

## Proof

1.1 Let $S_r$ be the unordered set of the first $r$ input sites, and let $p_r$ be the last site among them. Conditional on $S_r$, $p_r$ is uniform on $S_r$. The augmented triangulation has $m=r+3$ vertices and its fixed hull has $k=3$ sites, so [F3] gives $T_r=2r+1$ and $E_r=3r+3$. The conditional expected degree of uniform $p_r$ equals the average input-site degree, hence is at most $(2E_r)/r=6+6/r\le12$. The number of final triangles incident to $p_r$ is its degree. During local legalization, the initial face split creates three triangles and each flip adds two triangles while increasing that degree by one; if the final degree is $d_r$, at most $2d_r-3$ triangle nodes are created in that stage. Thus expected DAG nodes per stage are at most $21$, and the DAG has expected $O(n)$ nodes. [given, F1, F3, A1, algebra]

1.2 Fix a stage $r$ and condition on $S_r$. Let $k_r(q)$ count the triangles of its Delaunay triangulation whose circumdisks contain a future site $q$, and let $k_r(q,p_r)$ count those also incident to $p_r$. Since the triangulation $T_r$ is determined by the unordered set $S_r$, it is fixed under this conditioning. Each triangle has at most three input vertices, so uniformity of $p_r$ gives $\mathbb E[k_r(q,p_r)\mid S_r]\le3k_r(q)/r$. The new final triangles are exactly those of $T_r$ incident to $p_r$, and therefore $\mathbb E\!\left[\sum_{\Delta\in T_r\setminus T_{r-1}}|K(\Delta)|\,\middle|\,S_r\right]=\sum_{q\notin S_r}\mathbb E[k_r(q,p_r)\mid S_r]\le\frac3r\sum_{q\notin S_r}k_r(q)$. [A1, F1, F2, algebra]

2.1 Count first the triangles in the final Delaunay triangulations $T_r$ that are created at a stage; for such a triangle $\Gamma$, let $K(\Gamma)$ be the set of later input sites strictly inside its circumdisk. A DAG walk visits only triangle nodes containing its query: a split's children partition the replaced triangle, and a flip's two linked children together cover each of the two replaced triangles. If a visited node is destroyed by a face split, it is the old Delaunay triangle $\Gamma$ being split; the query lies inside it and hence in $K(\Gamma)$. If it is destroyed by a flip, the flip removes an old Delaunay triangle $\Gamma$ whose circumdisk contains the inserted site, together with one triangle incident to that site. The latter triangle lies in the same disk because its vertices are in the disk and the disk is convex. Charge either visited node to $\Gamma$. Each old $\Gamma$ is deleted once and is paired with at most one inserted-site triangle, so it receives at most two charges per query. Consequently the total number of visits is $O(n+\sum_{\Gamma}|K(\Gamma)|)$. [F1, F2, step 1.1, algebra, algebra]

2.2 Conditional on $S_r$, the next site $q=p_{r+1}$ is uniform among the $n-r$ remaining sites, so $\sum_{q\notin S_r}k_r(q)=(n-r)\mathbb E[k_r(p_{r+1})\mid S_r]$. Every old triangle's plane supports all sites in $S_r$ by [F2]. By [F4], a future site is strictly inside its circumcircle exactly when its lifted point is formally below this plane; augmented general position excludes equality. Thus precisely the triangles counted by $k_r(p_{r+1})$ cease to support after the insertion, and [F2] returns the new lower triangulation, so this count is exactly the number of old triangles destroyed. The hull remains the same supertriangle, so [F3] gives $T_{r+1}-T_r=2$; the number destroyed is the number of final triangles created minus $2$, hence at most that number. After averaging over $S_r$, the set $S_{r+1}$ is a uniform $(r+1)$-subset and $p_{r+1}$ is uniform within it; step 1.1 bounds the expected number of final triangles created by $12$. Thus $\mathbb E[k_r(p_{r+1})]\le12$, and averaging step 1.2 gives a stage-$r$ expected conflict sum at most $36(n-r)/r$. [A1, F2, F3, F4, step 1.1, step 1.2, algebra]

3.1 Summing the bound of step 2.2 over $r=1,\ldots,n-1$ gives at most $36n\sum_{r=1}^{n-1}1/r=O(n\log n)$. Step 2.1 then bounds expected DAG traversal work by $O(n\log n)$. The located face is passed to `INSERT` and verified with at most four exact orientation calls per insertion; the update does not run the triangle scan, so this adds only $O(n)$ predicate calls. Triangle updates and storage are expected $O(n)$. [F1, step 2.1, step 2.2, algebra]

4.1 At stage $r$ the augmented triangulation has $r+3$ vertices, so the inserted site's degree is at most $r+2$. By step 1.1, which counts at most $2d_r-3$ new triangle nodes when the final degree is $d_r$, each stage creates $O(r)$ nodes and the whole DAG has $O(n^2)$ nodes. Each of $n$ queries visits at most all those nodes, with at most three child tests per node by [F1]. Thus worst-case total location work is $O(n^3)$. The count is in exact predicate calls; arbitrary-precision bit cost is not included. [F1, step 1.1, algebra] ∎
