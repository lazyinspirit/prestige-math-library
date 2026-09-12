---
id: "rem-boundaryless-convention-for-geodesic-flow-and-hopf-rinow"
kind: "remark"
title: "Boundaryless convention for geodesic flow and Hopf–Rinow"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-riemannian-metric-and-riemannian-manifold","def-topological-manifold-without-boundary","thm-heine-borel-rn","thm-compact-implies-complete-and-totally-bounded"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Lectures 15.1 and 19.2, pp.113 and 141–144
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Remark

Throughout this page, geodesic flow, exponential maps, geodesic completeness, and Hopf–Rinow concern smooth manifolds without boundary. A metric assertion explicitly about an embedded submanifold may still allow boundary. Boundary variants require separate inward/tangent initial-data conventions, doubling, or a different completeness notion; none is inferred silently.

## Facts & Assumptions

**Given:** The interval $I=[0,1]$ with the metric induced from the Euclidean line.

[F1] [[def-riemannian-metric-and-riemannian-manifold]] allows Riemannian manifolds with boundary only when this is explicitly stated, whereas [[def-topological-manifold-without-boundary]] uses open Euclidean local models.

[F2] [[thm-heine-borel-rn]] makes $I$ compact, and [[thm-compact-implies-complete-and-totally-bounded]] makes its induced metric complete without any choice principle.

## Verification

1.1 The interval gives the obstruction. Its Euclidean Christoffel symbol is zero in the interior, so an affinely parametrized geodesic with initial data $\gamma(0)=1/2$ and $\gamma'(0)=1$ must locally be $\gamma(t)=1/2+t$. It remains inside $I$ only for $-1/2\le t\le1/2$ and cannot be continued as that solution for all real times while taking values in $I$. [given, algebra]

2.1 Nevertheless [F2] makes $I$ a complete metric space. Thus the implication “metric completeness implies two-sided geodesic completeness” would be false if arbitrary manifold boundaries were silently admitted. The boundaryless convention in [F1] prevents this mismatch. The two endpoints and outward direction are explicit; the zero-dimensional case has only constant geodesics, the empty case is vacuous, and no selection or choice principle is used. [F1, F2, step 1.1] ∎
