---
id: def-geodesic-triangulation
kind: definition
title: Geodesic triangulation with prescribed boundary arcs
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-curvilinear-triangulation-of-a-compact-surface
  - def-riemannian-metric-and-riemannian-manifold
  - def-levi-civita-connection
  - def-interior-point-boundary-point-interior-and-boundary-of-a-manifold
  - def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary
  - def-geodesic-of-an-affine-connection
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
      locator: "Chapter 9, §The Gauss–Bonnet Theorem, printed p. 167 (PDF p. 183), lines 6577–6584: Lee defines smooth triangulation by curved triangles with face-to-face intersections. This supplies context for the underlying triangulation only and does not require geodesic edges."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 15, §15.1, Definition 15.1.1, printed p. 113 (PDF p. 121), lines 6271–6283: a geodesic is a smooth curve with vanishing intrinsic acceleration; the definition allows constant curves, whereas triangulation edges here are regular."
---

## Definition

Let $(M,g)$ be a compact smooth Riemannian surface, possibly with boundary,
and let $\mathcal T=(V,E,F,\phi)$ be a curvilinear triangulation of $M$. It is
a **geodesic triangulation** if every edge $e\in E$ not contained in
$\partial M$ admits a regular $C^2$ embedding $\gamma_e:[0,1]\to M$ with
image $e$ such that $\gamma_e((0,1))\subset\operatorname{Int}M$ and
$\gamma_e|_{(0,1)}$ is an affinely parametrized geodesic for the Riemannian
surface $(\operatorname{Int}M,g|_{\operatorname{Int}M})$ with its
Levi–Civita connection. An edge contained in $\partial M$ remains a prescribed
regular $C^2$ boundary arc and is exempt from the geodesic condition. The
endpoint extension need only be the stated $C^2$ embedding; no
length-minimizing property or existence of a geodesic triangulation is
asserted.

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9,
§“The Gauss–Bonnet Theorem,” printed p. 167 (PDF p. 183), lines 6577–6584,
defines a smooth triangulation as finitely many curved triangles covering the
surface with pairwise intersections along a common vertex or edge. That
passage is context for the underlying face-to-face triangulation; it does not
specify geodesic edges.

Datar, *Lectures on Riemannian Geometry*, Lecture 15, §15.1, Definition
15.1.1, printed p. 113 (PDF p. 121), lines 6271–6283, defines a geodesic by
vanishing intrinsic acceleration and allows constant geodesics. The edge
regularity inherited here excludes the constant case. The boundary-edge
exception and the open-interior endpoint convention are explicit local
conventions in this definition; no existence theorem is imported.

## Facts & Assumptions

**Given:** A compact smooth Riemannian surface $(M,g)$, possibly with boundary, and a curvilinear triangulation $\mathcal T=(V,E,F,\phi)$ with its finite edge data.

[F1] Each edge of a curvilinear triangulation is either contained in $\partial M$ or has relative interior in $\operatorname{Int}M$ ([[def-curvilinear-triangulation-of-a-compact-surface]]).

[F2] Each curvilinear edge is the image of a regular $C^2$ embedding of $[0,1]$ ([[def-curvilinear-triangulation-of-a-compact-surface]]).

[F3] In a boundary chart, an interior point has last coordinate greater than zero ([[def-interior-point-boundary-point-interior-and-boundary-of-a-manifold]]).

[F4] A boundary chart is a homeomorphism to a relatively open subset of a half-space ([[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]]).

[F5] For a supplied Riemannian metric, a Levi–Civita connection is an affine connection compatible with the metric and torsion free ([[def-levi-civita-connection]]).

[F6] A smooth curve on a boundaryless manifold is an affinely parametrized geodesic when its covariant acceleration $D_t\gamma'$ vanishes ([[def-geodesic-of-an-affine-connection]]).

[F7] A Riemannian metric is smooth and positive definite, with smoothness up to the boundary where boundaries are allowed ([[def-riemannian-metric-and-riemannian-manifold]]).

## Verification

**Proof technique:** Restrict the metric and connection to the open interior, then unpack the two edge cases in the definition.

1.1 Let $U=\operatorname{Int}M$. In a boundary chart, each point of $U$ has last coordinate strictly positive by [F3]. A sufficiently small Euclidean neighborhood of that chart image misses the model boundary, so the chart restricts to an ordinary smooth surface chart on $U$ by [F4]. Thus $U$ is a boundaryless open submanifold, and [F7] restricts to a smooth positive definite metric $g|_U$. [F3, F4, F7, given]

2.1 The Levi–Civita connection of $g|_U$ is the affine connection used in the geodesic equation on $U$ by [F5]. By [F6], saying that $\gamma_e|_{(0,1)}$ is an affinely parametrized geodesic means precisely that its covariant acceleration for this connection vanishes throughout $(0,1)$. The condition is imposed on an affine parametrization of the edge image, not on every possible parametrization. [F5, F6, step 1.1]

3.1 For each edge, [F1] separates the boundary-contained case from the case whose relative interior lies in $U$. In the second case the open parameter interval maps into $U$; [F2] supplies the regular $C^2$ extension to any included endpoints, which may lie on $\partial M$. The boundary-contained case retains its supplied regular arc and has no geodesic requirement. If $M$ or $E$ is empty these universal conditions are vacuous; regularity excludes constant edge maps, and this finite unpacking selects no element from an arbitrary nonempty family. [F1, F2, step 1.1, step 2.1, given] ∎
