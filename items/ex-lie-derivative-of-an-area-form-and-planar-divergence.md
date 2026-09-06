---
id: ex-lie-derivative-of-an-area-form-and-planar-divergence
kind: example
title: "Lie derivative of an area form and planar divergence"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cartans-magic-formula, thm-local-coordinate-formula-for-the-exterior-derivative]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
---

## Statement

For $X=P\partial_x+Q\partial_y$ on $\mathbb R^2$, $\mathcal L_X(dx\wedge dy)=(\partial_xP+\partial_yQ)dx\wedge dy$.

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

[F1] The preceding result states that For every vector field $X$ and differential form $\omega$, $$\mathcal L_X\omega=d(\iota_X\omega)+\iota_X(d\omega).$$ ([[thm-cartans-magic-formula]]).

## Verification

**Proof technique:** direct.

1.1 Cartan's formula gives $\mathcal L_X(dx\wedge dy)=d(P\,dy-Q\,dx)$ because the area form is closed. [F1, given]

2.1 Differentiating yields $(\partial_xP+\partial_yQ)dx\wedge dy$. [step 1.1] ∎

