---
id: ex-cartans-formula-for-a-coordinate-vector-field
kind: example
title: "Cartan's formula for a coordinate vector field"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cartans-magic-formula]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-06
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

For $X=\partial_{x^1}$ and $\omega=\sum_Ia_I dx^I$ on a coordinate chart, both sides of Cartan's formula equal $\sum_I(\partial_{x^1}a_I)dx^I$.

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

[F1] The preceding result states that For every vector field $X$ and differential form $\omega$, $$\mathcal L_X\omega=d(\iota_X\omega)+\iota_X(d\omega).$$ ([[thm-cartans-magic-formula]]).

## Verification

**Proof technique:** direct.

1.1 For $\omega=\sum_Ia_Idx^I$, contraction and the coordinate formula give $d\iota_X\omega+\iota_Xd\omega=\sum_I(\partial_{x^1}a_I)dx^I$. [F1, given]

2.1 This is also the coefficientwise Lie derivative under the translation flow of $\partial_{x^1}$. [step 1.1] ∎

