---
id: fs-alpha-wedge-d-alpha-vanishes-for-every-one-form
kind: false-statement
title: '$\alpha\wedge d\alpha$ vanishes for every one-form'
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-codimension-one-frobenius-criterion]
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

The assertion that $\alpha\wedge d\alpha=0$ for every one-form is false.

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

[F1] The preceding result states that For a nowhere-zero one-form $\alpha$, the hyperplane distribution $\ker\alpha$ is integrable if and only if $\alpha\wedge d\alpha=0$. ([[cor-codimension-one-frobenius-criterion]]).

## Refutation

**Proof technique:** direct.

1.1 For $\alpha=dz-x\,dy$, $d\alpha=-dx\wedge dy$. [F1, given]

2.1 Therefore $\alpha\wedge d\alpha=-dx\wedge dy\wedge dz\ne0$, disproving the universal assertion. [step 1.1] ∎
