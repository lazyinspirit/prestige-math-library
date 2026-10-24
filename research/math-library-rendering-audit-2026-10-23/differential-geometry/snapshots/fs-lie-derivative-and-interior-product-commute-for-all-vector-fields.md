---
id: fs-lie-derivative-and-interior-product-commute-for-all-vector-fields
kind: false-statement
title: "Lie derivative and interior product commute for all vector fields"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-cartan-commutator-identities]
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

The assertion that $\mathcal L_X\iota_Y=\iota_Y\mathcal L_X$ for all vector fields is false.

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

[F1] The preceding result states that With $[A,B]=AB-(-1)^{|A||B|}BA$ for homogeneous graded operators, $$[\mathcal L_X,\iota_Y]=\iota_{[X,Y]},\qquad [\mathcal L_X,\mathcal L_Y]=\mathcal L_{[X,Y]},\qquad \iota_X\iota_Y+\iota_Y\iota_X=0.$$ ([[prop-cartan-commutator-identities]]).

## Refutation

**Proof technique:** direct.

1.1 The Cartan commutator identity is $[\mathcal L_X,\iota_Y]=\iota_{[X,Y]}$. [F1, given]

2.1 For $X=\partial_x$ and $Y=x\partial_y$, the bracket is $\partial_y$, whose contraction is nonzero, so the commutator need not vanish. [step 1.1] ∎

