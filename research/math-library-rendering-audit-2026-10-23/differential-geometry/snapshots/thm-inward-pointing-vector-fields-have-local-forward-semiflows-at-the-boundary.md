---
id: thm-inward-pointing-vector-fields-have-local-forward-semiflows-at-the-boundary
kind: theorem
title: "Inward-pointing fields have local forward semiflows at the boundary"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-inward-outward-and-boundary-tangent-vectors, thm-tangent-and-cotangent-bundles-extend-over-a-manifold-boundary, thm-fundamental-theorem-on-flows]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ioan Mărcuț, Manifolds (2017 lecture notes), §§14.5, 15.1"
      url: "https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf"
    - title: "Will Merry, Differential Geometry (2021), Lecture 24"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

Let $M$ be a smooth manifold with boundary and let $X$ be a smooth vector field on $M$ that is inward at every boundary point. Near each boundary point, $X$ has a sufficiently small forward flow that remains in $M$. No negative-time-in-$M$ assertion is made.

## Facts & Assumptions

**Given:** A smooth manifold $M$ with boundary, a smooth vector field $X$ that is inward at every boundary point, and a chosen point $p\in\partial M$.

[L1] In a boundary chart, an inward vector has positive last coordinate ([[def-inward-outward-and-boundary-tangent-vectors]]).

[L2] A smooth vector field on a boundaryless manifold has a unique smooth local flow ([[thm-fundamental-theorem-on-flows]]).

## Proof

**Proof technique:** direct.

1.1 Extend the coordinate components of $X$ across the face of a boundary chart at $p$. By [L2] the extension has a Euclidean local flow, and by [L1] its last component is positive at $p$. [given, L1, L2]

2.1 By continuity, shrink to an ambient coordinate neighbourhood $W$ on which the last component of the extended field is at least some $c>0$, and shrink the initial neighbourhood and time so that all relevant trajectories remain in $W$. Let $h(t)$ be the last coordinate of a forward trajectory with $h(0)\ge0$. If $h(t_1)<0$ for some $t_1>0$, let $\tau$ be the largest zero of $h$ in $[0,t_1]$; it exists by continuity. Then $h<0$ on $(\tau,t_1]$, while $h'(t)\ge c$ there, so the one-variable mean-value theorem gives $h(t_1)-h(\tau)>0$, contradicting $h(t_1)<0=h(\tau)$. Thus the restricted forward flow remains in $M$; no analogous negative-time conclusion follows. [given, step 1.1, algebra] ∎
