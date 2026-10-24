---
id: fs-the-lie-derivative-is-c-infinity-linear-in-the-vector-field
kind: false-statement
title: 'The Lie derivative is $C^\infty$-linear in the vector field'
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

The assertion that $\mathcal L_{fX}\omega=f\mathcal L_X\omega$ for all smooth $f$, $X$, and $\omega$ is false.

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

[F1] The preceding result states that For every vector field $X$ and differential form $\omega$, $$\mathcal L_X\omega=d(\iota_X\omega)+\iota_X(d\omega).$$ ([[thm-cartans-magic-formula]]).

## Refutation

**Proof technique:** direct.

1.1 Cartan's formula and $\iota_{fX}=f\iota_X$ give $\mathcal L_{fX}\omega=f\mathcal L_X\omega+df\wedge\iota_X\omega$. [F1, given]

2.1 On $\mathbb R^2$, take $f=x$, $X=\partial_y$, and $\omega=dy$; the correction is $dx\ne0$. [step 1.1] ∎
