---
id: ex-the-angular-one-form-on-the-punctured-plane-is-closed
kind: example
title: "The angular one-form on the punctured plane is closed"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-local-coordinate-formula-for-the-exterior-derivative]
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

On $\mathbb R^2\setminus\{0\}$, the angular form $\omega=(-y\,dx+x\,dy)/(x^2+y^2)$ is closed.

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

[F1] The preceding result states that On a chart, if $\omega=\sum_I\omega_I\,dx^I$, then $$d\omega=\sum_I d\omega_I\wedge dx^I.$$ ([[thm-local-coordinate-formula-for-the-exterior-derivative]]).

## Verification

**Proof technique:** direct.

1.1 Write $r^2=x^2+y^2$. Differentiating $-y/r^2$ and $x/r^2$ gives the coefficient $\partial_x(x/r^2)-\partial_y(-y/r^2)=0$. [F1, given]

2.1 The coordinate formula therefore gives $d\omega=0$ on the punctured plane. [step 1.1] ∎

