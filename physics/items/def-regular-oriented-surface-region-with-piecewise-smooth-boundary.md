---
id: def-regular-oriented-surface-region-with-piecewise-smooth-boundary
kind: definition
title: "Regular oriented surface regions with corners"
status: published
origin: pipeline
deps:
  - def-induced-boundary-orientation
  - def-oriented-smooth-manifold-and-oriented-chart
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature, Chapter 9"
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Chapter 9, §Plane Geometry, printed pp. 157–159, for simple piecewise-smooth closed curves, finite vertices, induced direction, and exclusion of cusps; §The Gauss–Bonnet Formula, printed pp. 162–163, for the corresponding oriented-surface boundary convention."
    - title: "Ved Datar, Lectures on Riemannian Geometry, Lectures 1–2"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Lecture 1, Definitions 1.1.1 and 1.2.1, printed pp. 3–5; Lecture 2, §2.0, printed pp. 10–11, for regular piecewise-smooth simple closed curves, finite vertices, no-cusp convention, and positive boundary direction."
---

## Definition

Let $\Sigma$ be an oriented smooth surface without boundary and
$D\subseteq\Sigma$ a compact subset; $\partial D$ means its topological
boundary in $\Sigma$. Call $D$ a **regular oriented surface region** if
$D=\overline{\operatorname{Int}_{\Sigma}D}$ and its boundary, with the
following supplied finite decomposition, is a finite disjoint union of simple
closed curves. Each
curve is a cyclic concatenation of finitely many regular $C^2$ embedded arcs;
the arc images meet only at their designated consecutive endpoints. Away from
those endpoints, a boundary chart identifies $D$ locally with a closed
half-disk bounded by the corresponding $C^2$ arc. At an endpoint (a **vertex**),
a local chart identifies $D$ with the closure of one sector bounded by the two
incident arcs. If $v_-$ and $v_+$ are the nonzero one-sided velocities directed
into and out of the vertex along the cyclic parametrization, require
$v_+\ne -c v_-$ for every $c>0$. Thus the two rays bounding the sector are
distinct: the cusp whose exterior turn would be $\pm\pi$ is excluded. Smooth
subdivision points may be removed from the decomposition; the empty boundary
is allowed. The chart conditions are part of the definition: a piecewise-smooth
closed curve is not declared to bound a region unless a domain side with these
local models is supplied.

On each smooth boundary arc orient its tangent line by the outward-normal-first
rule: for an outward transverse vector $\nu$, the selected tangent direction
$T$ is the one for which $(\nu,T)$ is positive in $T\Sigma$. At a vertex this
orientation is understood by its one-sided limits on the two arcs; no tangent
at the vertex is part of the data. A **disk region** is a nonempty connected
regular region supplied with a homeomorphism of pairs
$(\overline{B^2},S^1)\to(D,\partial D)$, where $\overline{B^2}$ is the closed
unit disk.

The wedge chart allows either a convex or a reflex sector. Its boundary arcs
are $C^2$ separately; the definition does not assert $C^2$ smoothness across a
vertex. The disk homeomorphism is topological data and imposes no additional
smoothness at the vertices.

## Facts & Assumptions

**Given:** An oriented smooth surface and a compact domain with the stated piecewise-$C^2$ boundary data.

[F1] An orientation is a smooth choice of a ray in each determinant line ([[def-oriented-smooth-manifold-and-oriented-chart]]).

[F2] The induced boundary orientation is defined by the outward-normal-first determinant rule ([[def-induced-boundary-orientation]]).

## Proof

1.1 At a smooth boundary point, let $\nu$ be any outward transverse vector and $T$ either choice of nonzero tangent direction. By [F1] the ambient positive determinant is defined, and [F2] selects exactly one of $T$ and $-T$ so that $\nu\wedge T$ is positive. If $\nu'=a\nu+bT$ is another outward transverse vector, then $a>0$ and $\nu'\wedge T=a(\nu\wedge T)$, so this orientation is independent of the chosen outward transverse vector. [F1, F2]

2.1 Along each regular arc the outward side and ambient orientation vary continuously, so the sign selected by [F2] is locally constant and defines an oriented arc. At a vertex the two arcs retain their one-sided limits. The condition $v_+\ne-cv_-$ excludes antipodal one-sided directions, so the signed jump has a unique representative in $(-\pi,\pi)$; a zero jump is allowed. The separately supplied sector chart specifies the local domain at the vertex. The finite cyclic decomposition therefore gives the piecewise-oriented closed boundary, while the supplied homeomorphism of pairs certifies disk topology without imposing vertex smoothness. [F2, step 1.1] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, §“Plane Geometry,” printed pp. 157–159, defines simple closed piecewise-smooth curves, finite vertices, positive direction, and excludes cusps by excluding exterior angles $\pm\pi$; §“The Gauss–Bonnet Formula,” printed pp. 162–163, carries these conventions to oriented surface regions. Datar, *Lectures on Riemannian Geometry*, Lecture 1, Definitions 1.1.1 and 1.2.1, printed pp. 3–5, and Lecture 2, §2.0, printed pp. 10–11, gives the corresponding regular-curve, curved polygon, no-cusp, and positive-orientation conventions. The explicit chart and disk-topology clauses above make the domain hypotheses precise; the boundary orientation calculation is checked above from the cited library definition.
