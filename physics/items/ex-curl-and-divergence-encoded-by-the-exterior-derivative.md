---
id: ex-curl-and-divergence-encoded-by-the-exterior-derivative
kind: example
title: "Curl and divergence encoded by the exterior derivative"
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

For $P,Q,R,A,B,C\in C^\infty(\mathbb R^3)$,
$d(Pdx+Qdy+Rdz)$ has the usual curl coefficients, and
$$ d(A\,dy\wedge dz+B\,dz\wedge dx+C\,dx\wedge dy)=(\partial_xA+\partial_yB+\partial_zC)dx\wedge dy\wedge dz. $$

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

[F1] The preceding result states that On a chart, if $\omega=\sum_I\omega_I\,dx^I$, then $$d\omega=\sum_I d\omega_I\wedge dx^I.$$ ([[thm-local-coordinate-formula-for-the-exterior-derivative]]).

## Verification

**Proof technique:** direct.

1.1 Apply the coordinate formula to $Pdx+Qdy+Rdz$ and collect the $dy\wedge dz$, $dz\wedge dx$, and $dx\wedge dy$ coefficients. [F1, given]

2.1 Applying it to $A\,dy\wedge dz+B\,dz\wedge dx+C\,dx\wedge dy$ leaves the coefficient $\partial_xA+\partial_yB+\partial_zC$ of $dx\wedge dy\wedge dz$. [step 1.1] ∎
