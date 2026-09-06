---
id: ex-the-euclidean-area-form-is-closed
kind: example
title: "The Euclidean area form is closed"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-local-coordinate-formula-for-the-exterior-derivative]
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

On $\mathbb R^2$, the area form $dx\wedge dy$ is closed.

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

[F1] The preceding result states that On a chart, if $\omega=\sum_I\omega_I\,dx^I$, then $$d\omega=\sum_I d\omega_I\wedge dx^I.$$ ([[thm-local-coordinate-formula-for-the-exterior-derivative]]).

## Verification

**Proof technique:** direct.

1.1 The coordinate formula gives $d(dx\wedge dy)=d(1)\wedge dx\wedge dy$. [F1, given]

2.1 Because $d(1)=0$, the area form is closed. [step 1.1] ∎

