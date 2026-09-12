---
id: thm-covariant-derivative-along-a-curve-is-independent-of-frame-and-extension
kind: theorem
title: "Covariant derivative along a curve is independent of frame and extension"
status: published
origin: pipeline
deps: ["def-covariant-derivative-along-a-curve","thm-pullback-connection-is-well-defined-and-functorial"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Statement

The operator $D_t$ is independent of local frames. If $V=s\circ\gamma$ near a parameter value for an ambient local section $s$, then
$$D_tV=(\nabla s)_{\gamma(t)}(\dot\gamma(t)).$$
Consequently any two such extensions give the same derivative. This is an agreement assertion when an ambient extension exists, not an assertion that every section along a curve extends.

## Facts & Assumptions

**Given:** A connection, a smooth curve and a section of its pullback bundle, with the endpoint convention in the derivative definition.

[F1] $D_t$ is pullback covariant differentiation in direction $\partial_t$ ([[def-covariant-derivative-along-a-curve]]).

[F2] The pullback connection is frame independent and differentiates pulled-back ambient sections by the differential of the base map ([[thm-pullback-connection-is-well-defined-and-functorial]]).

## Proof

1.1 The connection $\gamma^*\nabla$ is intrinsically well defined, so its evaluation on the globally specified vector field $\partial_t$ is frame independent. Apply the ambient-section identity in [F2] with $f=\gamma$ and $X=\partial_t$; its differential is $\dot\gamma(t)$, giving the displayed formula. [F1, F2]

2.1 If $s_1\circ\gamma=s_2\circ\gamma=V$ on a parameter neighbourhood, both displayed derivatives equal the same $D_tV$, proving independence of the extension. At an included endpoint, equality on the one-sided interval makes the derivative equality hold by the endpoint convention. For a constant curve at $p$, $V(t)=tv$ with $v\ne0$ is a valid section with $D_tV=v$, but no ambient extension can have these varying values at $p$. Zero sections and rank zero cause no exception. No ambient extension is selected in defining $D_t$, so this statement uses no choice principle. [F1, step 1.1] ∎
