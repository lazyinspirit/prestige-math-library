---
id: def-curvilinear-triangulation-of-a-compact-surface
kind: definition
title: Curvilinear face-to-face triangulation
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-regular-oriented-surface-region-with-piecewise-smooth-boundary
  - def-smooth-manifold
  - def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary
  - def-interior-point-boundary-point-interior-and-boundary-of-a-manifold
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Jürgen Jost, Compact Riemann Surfaces: An Introduction to Contemporary Mathematics"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/jost.pdf"
      locator: "§2.3.A, Definition 2.3.A.1, printed pp. 31–32 (PDF pp. 43–44), lines 1776–1793: finite triangular subsets, a homeomorphism from a planar triangle for each face, and pairwise disjoint/common-vertex/common-full-edge intersections. This is topological and treats closed surfaces; the piecewise-C² and boundary conditions here are separately specified."
verification:
  precheck: pass
  audited: 2026-09-30
---

## Definition

Let $M$ be a compact smooth two-manifold, possibly disconnected, nonorientable,
or with boundary. A **curvilinear face-to-face triangulation** of $M$ is finite
data $(V,E,F,\phi)$ with the following properties.

1. $V$ is a finite subset of $M$. Each $e\in E$ is the image of a regular
   $C^2$ embedding $\gamma_e:[0,1]\to M$. Its endpoints are two distinct
   vertices in $V$; its relative interior contains no vertex. Distinct edges
   meet only at common endpoints.
2. For each $f\in F$, $\phi_f:\overline{\Delta}^2\to M$ is a homeomorphism
   onto a closed subset $F_f$. It sends the three distinct vertices of the
   standard closed triangle to three distinct points of $V$, and sends each
   full side homeomorphically onto an edge of $E$. The open face
   $\phi_f((\Delta^2)^\circ)$ lies in $\operatorname{Int}M$ and is open there;
   $F_f$ is its closure in $M$. The three boundary edges are regular $C^2$
   embedded arcs. At an interior edge point, its incident face has the local
   one-sided half-disk chart of
   [[def-regular-oriented-surface-region-with-piecewise-smooth-boundary]]. At
   a boundary edge point, the edge lies in $\partial M$ and the open face
   approaches it from the inward side in a boundary half-space chart. At a
   face vertex, orient the two incident boundary arcs by the reference
   triangle and let $v_-$ and $v_+$ be their nonzero one-sided velocities into
   and out of the vertex. Require $v_+\ne-cv_-$ for every $c>0$, matching
   the regular-region convention.
   Separately, require the face to occupy the closure of one local sector
   bounded by those arcs; a zero signed turn is allowed. At a boundary vertex
   read that sector relative to the half-space chart. The orientation used on
   a face is induced by its reference triangle only; no orientation of $M$ is
   required.
3. The faces cover $M$. Two distinct face images are disjoint, meet in one
   common vertex, or meet in one common full edge. An edge is either contained
   in $\partial M$ or has relative interior in $\operatorname{Int}M$; each
   interior edge is incident to exactly two faces and each boundary edge to
   exactly one. The union of the boundary edges and their vertices is exactly
   $\partial M$.
4. For a vertex $v$, its finite link graph has one vertex for each incident
   edge germ and one edge for each incident face corner. The link is a circle
   if $v\in\operatorname{Int}M$ and a closed interval if $v\in\partial M$;
   for a boundary vertex the interval endpoints are precisely the boundary
   edge germs.

The objects in $V$, $E$, and $F$ are counted once each. In particular, a
boundary edge has one incident face but contributes one edge to $|E|$. A
prescribed boundary edge need only be a regular $C^2$ arc; it need not be a
geodesic.

## Facts & Assumptions

**Given:** The compact smooth surface $M$ and finite face, edge, vertex, map, and incidence data satisfying the clauses above.

[F1] The regular-region convention requires a local half-disk along a smooth boundary arc and a sector bounded by the two incident arcs at an ordinary vertex ([[def-regular-oriented-surface-region-with-piecewise-smooth-boundary]]).

[F2] A boundary chart maps an open domain homeomorphically to a relatively open subset of a half-space ([[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]]).

[F3] The boundary and interior of a manifold with boundary are denoted $\partial M$ and $\operatorname{Int}M$ ([[def-interior-point-boundary-point-interior-and-boundary-of-a-manifold]]).

[F4] A smooth manifold is a topological manifold with a smooth structure ([[def-smooth-manifold]]).

## Proof

**Proof technique:** unpack the cell and local-chart data.

1.1 In the boundaryless case [F4] gives smooth surface charts; in the boundary case [F2] gives smooth half-space charts. For each $f$, the homeomorphism $\phi_f$ identifies $F_f$ with a closed triangle and its abstract boundary with three distinct full edges. These three edges and their vertices are the intrinsic boundary of the disk $F_f$, namely $\phi_f(\partial\overline{\Delta}^2)$. This need not be the topological boundary of $F_f$ in $M$: a boundary edge of $M$ can lie in the relative interior of $F_f$ as a subset of $M$. The local half-disk, inward-side, and sector models specify the corresponding one-sided face neighborhoods. Each boundary arc is regular $C^2$. At a vertex the non-antipodal velocity condition excludes the ambiguous $\pm\pi$ turn, while the separate sector chart specifies the local domain and allows zero turn. Thus every face is a topological closed disk with a marked piecewise-$C^2$ regular boundary. The reference triangle orients that disk locally, without choosing an orientation of $M$. [F1, F2, F4, given]

1.2 The face-to-face condition gives exactly the listed full-cell intersections, while the coverage clause gives $\bigcup_{f\in F}F_f=M$. There is therefore no overlap of open face interiors or unrecorded partial edge intersection. By [F3], the stipulated boundary edges and their vertices are exactly the boundary subcomplex. [F3, given]

2.1 Fix a vertex $v$. Since there are finitely many closed faces and their union is $M$, a sufficiently small neighborhood of $v$ avoids every face not incident with $v$. In each incident face, the sector chart from [F1] (or the boundary half-space chart [F2]) supplies a truncated neighborhood bounded by its two edge germs. These finitely many sectors meet only along the full edge germs stipulated in clause 3. Their cyclic or linear succession is exactly the link graph of clause 4: one link edge for each sector and one link vertex for each edge germ. Reparametrize the finitely many sector charts along the supplied edge parametrizations so adjacent sectors use the same radial coordinate on each shared germ. Their union is then a truncated cone on the link. The cone on a circle is a disk; the cone on a closed interval is a half-disk, with its two boundary germs on $\partial M$. Thus there is no branch or missing sector at $v$. [F1, F2, given] ∎

## Source locator

Jost, *Compact Riemann Surfaces: An Introduction to Contemporary Mathematics*, §2.3.A, Definition 2.3.A.1, printed pp. 31–32 (PDF pp. 43–44), lines 1776–1793, defines a finite topological subdivision by triangular subsets, homeomorphisms from planar triangles, and the disjoint/common-vertex/full-edge intersection condition. Jost's definition is topological and is stated for closed surfaces. The local piecewise-$C^2$ edges, ordinary corners, vertex links, and boundary subcomplex required here are additional explicit clauses, using the earlier library regular-region definition for the face charts.
