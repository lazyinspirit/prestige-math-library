---
id: def-barycentric-point-location-interpolation-and-voronoi-query
kind: definition
title: "Barycentric point location, affine interpolation, and nearest-site queries"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: delaunay-triangulations-and-voronoi-computation
dependency_level: 3
deps:
  - def-indexed-geometric-site-set
  - def-planar-delaunay-voronoi-structures
justified_by:
  - thm-barycentric-interpolation-and-nearest-neighbor-query-correct
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Mark de Berg et al., Computational Geometry: Algorithms and Applications, 3rd ed., Chapter 9"
      url: "https://ics-websites.science.uu.nl/geobook/interpolation.pdf"
    - title: "David M. Mount, CMSC 754 Computational Geometry, Lectures 11–13"
      url: "https://jeffe.web.engr.illinois.edu/teaching/compgeom/2021/refs/Mount.pdf"
---

## Definition

Let $T$ be a nondegenerate triangle with ordered vertices $p_0,p_1,p_2\in\mathbb D^2$. For $x\in\mathbb R^2$, its **barycentric coordinates** are the unique scalars $\lambda_0,\lambda_1,\lambda_2$ satisfying $\sum_i\lambda_i=1$ and $x=\sum_i\lambda_i p_i$. They are exact for dyadic $x$: they are obtained by solving the invertible $2\times2$ system with columns $p_1-p_0,p_2-p_0$. The point is in $T$ exactly when all $\lambda_i\ge0$.

Given vertex data $f_0,f_1,f_2\in\mathbb R$, the **barycentric affine interpolant** on $T$ is $I_Tf(x)=\sum_i\lambda_i f_i$. A point-location result is a containing triangle of the triangulation, with a shared-edge or shared-vertex result allowed when the point lies on a face; outside the convex hull its status is `outside-hull` and no containing triangle is returned.

For a nonempty finite unweighted indexed site set $P$, the **nearest-site query** returns a site minimizing $\|x-p\|^2$, breaking ties by the least stable identifier. Its hull status is `inside-hull` for $x\in\operatorname{conv}P$ and `outside-hull` otherwise. The minimizer is returned in either case.
