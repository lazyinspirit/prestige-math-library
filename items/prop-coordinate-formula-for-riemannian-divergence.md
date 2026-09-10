---
id: "prop-coordinate-formula-for-riemannian-divergence"
kind: "proposition"
title: "Coordinate formula for riemannian divergence"
deps: ["def-riemannian-divergence", "prop-divergence-is-well-defined-and-has-the-coordinate-formula"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In coordinates, $\operatorname{div}_gX=(\det G)^{-1/2}\sum_{i=1}^n\partial_i((\det G)^{1/2}X^i)$.

## Facts & Assumptions

**Given:** A smooth vector field $X=\sum_iX^i\partial_i$.

[F1] [[def-riemannian-divergence]]: The **Riemannian divergence** is defined in a local orientation by $\mathcal L_X\operatorname{vol}_g=(\operatorname{div}_gX)\operatorname{vol}_g$. Use def-divergence-relative-to-a-volume-form with the local form of def-riemannian-volume-form-on-an-oriented-manifold. On overlaps, changing orientation multiplies the nonvanishing form by a locally constant sign. The Lie derivative multiplies by that same sign, so its scalar quotient is unchanged and glues even on nonorientable manifolds. Equivalently this differentiates the positive density of lem-the-riemannian-volume-density-is-coordinate-independent and divides by it; the equivalence is local in a density frame. At a boundary use local smooth extensions. In dimension zero every vector field, and hence divergence, is zero.

[F2] [[prop-divergence-is-well-defined-and-has-the-coordinate-formula]]: If $\mu=\rho\,dx^1\wedge\cdots\wedge dx^n$ with $\rho$ nowhere zero and $X=\sum_iX^i\partial_i$, then $$\operatorname{div}_\mu X=\rho^{-1}\sum_{i=1}^n\partial_i(\rho X^i).$$ This defines a smooth global function, also at boundary points. In dimension zero $X=0$ and divergence is zero.

## Proof

**Proof technique:** direct.

1.1 Choose the local coordinate orientation. Its volume coefficient is $\rho=\sqrt{\det G}>0$, so the volume-form divergence formula gives $\operatorname{div}_gX=\rho^{-1}\sum_i\partial_i(\rho X^i)$, which is the asserted formula. [F1, F2, given]

2.1 Reversing the local orientation replaces $\rho$ by $-\rho$ and therefore multiplies numerator and denominator by $-1$, leaving the quotient unchanged. Thus the expression works on all charts, including nonorientable manifolds and boundary charts with local extensions. For $n=0$ the sum is empty and divergence is zero. [F1, F2, step 1.1] ∎

## Source locator

Lee, definition pp.423–424; local volume-divergence coordinate formula from the declared supplier.
