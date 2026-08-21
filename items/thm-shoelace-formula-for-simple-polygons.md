---
id: thm-shoelace-formula-for-simple-polygons
kind: theorem
title: "The shoelace formula for the area of a counterclockwise simple polygon"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-simple-polygonal-region-and-triangulation, thm-simple-polygon-admits-a-triangulation, thm-simple-polygon-content-is-the-sum-of-triangle-contents, thm-triangle-content-and-base-height-formula, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: true
short: "Shoelace formula"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Geometry: Combinatorics & Algorithms 2020, Exercise 4.14"
      url: "https://ti.inf.ethz.ch/ew/courses/Geo20/lecture/gca20-4.pdf"
pipeline_run: null
---

## Statement

The shoelace formula gives the Jordan content of a counterclockwise simple polygon.

Precisely, if its cyclic boundary vertices are $v_i=(x_i,y_i)$ for $i<n$, with $v_n=v_0$, then

$$\operatorname{cont}(P)=\frac12\sum_{i<n}(x_i y_{i+1}-y_i x_{i+1}).$$

## Facts & Assumptions

**Given:** A counterclockwise simple polygonal region $P$ with cyclic vertices $v_0,\ldots,v_{n-1}$ and $v_n=v_0$ ([[def-simple-polygonal-region-and-triangulation]]).

[L1] A simple polygon is Jordan measurable and its content is the sum of the triangle contents in any triangulation ([[thm-simple-polygon-content-is-the-sum-of-triangle-contents]]).

[L0] Every simple polygon admits a triangulation ([[thm-simple-polygon-admits-a-triangulation]]).

[L2] A triangle has content one half of the absolute determinant of two displacement vectors ([[thm-triangle-content-and-base-height-formula]]).

[L3] Finite sums are additive and commute with scalar multiplication ([[lem-finite-sum-laws]]).

## Proof

**Proof technique:** direct.

1.1 Choose a triangulation by [L0] and orient every triangular face counterclockwise. By [L1] and [L2], the polygon content is the sum over faces of one half of the signed boundary-edge expression $\det[p,q]+\det[q,r]+\det[r,p]$. [L0, L1, L2, choose]

2.1 By [L3], the finite face sum may be regrouped by oriented edges. Every internal edge is traversed once in each direction by its two incident faces, so its two determinant terms cancel. [step 1.1, L3, algebra]

3.1 Only the counterclockwise boundary edges remain. A triangulation may subdivide the polygon edge from $v_i$ to $v_{i+1}$ at ordered points $p_j=(1-t_j)v_i+t_jv_{i+1}$, but direct bilinearity gives $\det[p_j,p_{j+1}]=(t_{j+1}-t_j)\det[v_i,v_{i+1}]$, so [L3] makes the subdivision sum equal $\det[v_i,v_{i+1}]$. This includes the final edge from $v_{n-1}$ to $v_0$; expanding the determinants gives the stated cyclic shoelace sum. [step 2.1, L3, algebra] ∎
