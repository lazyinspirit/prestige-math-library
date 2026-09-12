---
id: prop-a-connection-is-metric-compatible-iff-parallel-transport-is-isometric
kind: proposition
title: "A connection is metric compatible iff parallel transport is isometric"
status: published
origin: pipeline
deps: ["def-metric-compatible-connection-on-a-riemannian-vector-bundle","thm-parallel-transport-is-a-linear-isomorphism","prop-local-frame-formula-for-covariant-differentiation-along-a-curve"]
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

A connection on a bundle with supplied positive-definite metric $h$ is metric compatible if and only if parallel transport along every piecewise smooth compact-interval curve is an isometry of endpoint fibres. Manifolds with boundary are included.

## Facts & Assumptions

**Given:** The bundle, connection and metric.

[F1] Metric compatibility is equivalent in a frame to $XH=\omega(X)^TH+H\omega(X)$ ([[def-metric-compatible-connection-on-a-riemannian-vector-bundle]]).

[F2] Parallel transport is a linear isomorphism ([[thm-parallel-transport-is-a-linear-isomorphism]]).

[F3] Parallel coefficients satisfy $v'=-Bv$, $B=\omega(\dot\gamma)$ ([[prop-local-frame-formula-for-covariant-differentiation-along-a-curve]]).

## Proof

1.1 Assume compatibility. Along a frame segment, let $v,w$ be parallel coefficient columns. The chain rule gives $(H\circ\gamma)'=B^TH+HB$ by [F1]. Then $(v^THw)'=(-Bv)^THw+v^T(B^TH+HB)w+v^TH(-Bw)=0$. Their inner product is constant on each smooth piece and, by continuity, across corners. Hence endpoint transport preserves $h$ for all pairs, and is an isometry by its linear invertibility. [F1, F2, F3]

1.2 Conversely assume all transports are isometries. Fix one frame near $p$ and a curve through $p$ with tangent $z$. Choose any initial coefficient vectors $v_0,w_0$ and their parallel solutions. Isometry makes $v^T(H\circ\gamma)w$ constant. Differentiating at the initial time and using [F3] gives $v_0^T(zH-\omega(z)^TH-H\omega(z))w_0=0$. Testing on the finitely many pairs of standard basis vectors makes this matrix zero. At an interior point every coordinate direction is realized by a short coordinate line. At a boundary point use coordinate lines within the boundary for tangential basis directions and the inward one-sided normal line for the last direction; the one-sided derivative gives the same identity. Linearity then covers every tangent vector, including outward ones, without claiming an outward curve lies in the manifold. [F2, F3]

2.1 The matrix identity from step 1.2 is the compatibility criterion [F1]. The empty manifold and zero-rank bundle satisfy both conditions vacuously; in dimension zero compatibility has no nonzero directional test and all curves are constant. Rank one is the same one-entry calculation. The converse only chooses finitely many initial vectors at a fixed point, so neither direction invokes AC. [F1, step 1.1, step 1.2] ∎
