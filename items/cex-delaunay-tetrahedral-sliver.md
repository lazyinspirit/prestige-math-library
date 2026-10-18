---
id: cex-delaunay-tetrahedral-sliver
kind: counterexample
title: "An empty-sphere tetrahedron can be arbitrarily flat"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-three-dimensional-delaunay-and-weighted-regular-lower-hull
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jonathan R. Shewchuk, Delaunay Refinement Mesh Generation, 1999"
      url: https://people.eecs.berkeley.edu/~jrs/meshpapers/delnotes99.pdf
verification:
  precheck: pass
---

## Statement refuted

For each integer $n\ge1$, set $\varepsilon_n=2^{-n}$ and take the four unweighted sites with distinct stable identifiers $1,2,3,4$ at $p_1=(0,0,0)$, $p_2=(1,0,0)$, $p_3=(0,1,0)$, and $p_4=(1/4,1/4,\varepsilon_n)$. All coordinates are dyadic. They span one tetrahedron. Its circumsphere is empty of other sites because there are no other sites, so it is a Delaunay tetrahedron, while its inradius tends to zero and its diameter is at least $1$ as $n\to\infty$.

## Facts & Assumptions

**Given:** For each integer $n\ge1$, the four unweighted sites with distinct stable identifiers $1,2,3,4$ and coordinates $p_1,p_2,p_3,p_4$ as specified, with $\varepsilon_n=2^{-n}$.

[F1] [[def-three-dimensional-delaunay-and-weighted-regular-lower-hull]]: in the unweighted full-dimensional case the regular subdivision is ordinary Delaunay, and tetrahedra have empty circumspheres.

## Counterexample

1.1 For every $n\ge1$, $\varepsilon_n\in\mathbb D$ and the four sites therefore satisfy the dyadic-coordinate input condition of [F1]. The first three points are noncollinear in $z=0$ and $p_4$ has positive height, so the four points are affinely independent and form a nondegenerate tetrahedron. Its volume is one third of base area $1/2$ times height $\varepsilon_n$, namely $V_n=\varepsilon_n/6$. With only these four sites, its circumsphere contains no other site in its interior, so [F1] makes it an empty-sphere Delaunay tetrahedron. [F1, given, algebra]

2.1 The total face area $S_n$ is at least the base area $1/2$ and is bounded above uniformly in $n$, since every edge length is at most $2$ and each of the four face areas is at most half the product of two such edge lengths; in particular $S_n\le8$. The inradius is $r_n=3V_n/S_n=\varepsilon_n/(2S_n)$, so $\varepsilon_n/16\le r_n\le\varepsilon_n$ and $r_n\to0$. The diameter is at least $|p_1-p_2|=1$. Thus empty-sphere Delaunay membership imposes no positive uniform inradius-to-diameter bound in three dimensions. [F1, step 1.1, algebra] ∎
