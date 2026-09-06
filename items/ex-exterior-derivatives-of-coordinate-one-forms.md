---
id: ex-exterior-derivatives-of-coordinate-one-forms
kind: example
title: "Exterior derivatives of coordinate one-forms"
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
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
---

## Statement

On a coordinate domain, $d x^i=dx^i$ and $d(dx^i)=0$.

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

[F1] The preceding result states that On a chart, if $\omega=\sum_I\omega_I\,dx^I$, then $$d\omega=\sum_I d\omega_I\wedge dx^I.$$ ([[thm-local-coordinate-formula-for-the-exterior-derivative]]).

## Verification

**Proof technique:** direct.

1.1 The coordinate formula applied to the function $x^i$ gives $d x^i=dx^i$. [F1, given]

2.1 Applying the same coordinate formula to $dx^i=1\,dx^i$ gives $d(dx^i)=d(1)\wedge dx^i=0$. [F1, step 1.1] ∎
