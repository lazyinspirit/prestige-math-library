---
id: "def-geodesic-of-an-affine-connection"
kind: "definition"
title: "Geodesic of an affine connection"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["rem-boundaryless-convention-for-geodesic-flow-and-hopf-rinow","def-covariant-derivative-along-a-curve","def-affine-connection-on-a-smooth-manifold"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Definition 15.1.1, p.113
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Definition

Let $M$ be a smooth manifold without boundary with affine connection $\nabla$, and let $I\subseteq\mathbb R$ be an interval with nonempty interior. A smooth curve $\gamma:I\to M$ is an **affinely parametrized geodesic** when
$$D_t\gamma'(t)=0\qquad(t\in I),$$
with one-sided interpretation at an included endpoint. Constant curves are geodesics. Unless another parametrization is explicitly stated, “geodesic” means affinely parametrized geodesic.

## Facts & Assumptions

**Given:** The manifold, affine connection, interval, and smooth curve in the definition.

[F1] [[rem-boundaryless-convention-for-geodesic-flow-and-hopf-rinow]] fixes the boundaryless convention for this page.

[F2] [[def-affine-connection-on-a-smooth-manifold]] makes $\nabla$ a connection on $TM$, and [[def-covariant-derivative-along-a-curve]] defines $D_t$ on sections of $\gamma^*TM$, with one-sided endpoint values and zero derivative for the zero section.

## Verification

1.1 The velocity $\gamma'$ is a section of $\gamma^*TM$, so [F2] makes $D_t\gamma'$ well defined and intrinsic. The equation therefore compares vectors in $T_{\gamma(t)}M$ and is independent of any chart or extension of the velocity field. [F2, given]

2.1 If $\gamma(t)=p$ is constant, then $\gamma'$ is the zero section and [F2] gives $D_t\gamma'=0$, so constant curves are included. On a zero-dimensional manifold every smooth curve on an interval is locally constant and hence has zero velocity; the empty manifold has no such curves. A singleton parameter interval is excluded because [F2] supplies no derivative operator there. Included interval endpoints use the one-sided convention, and no point, chart, or curve is selected from a family, so no choice principle is used. [F1, F2, step 1.1] ∎
