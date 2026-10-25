---
id: def-exterior-derivative-by-the-invariant-vector-field-formula
kind: definition
title: "The exterior derivative by the invariant vector-field formula"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-smooth-differential-k-form, def-lie-bracket-of-smooth-vector-fields, prop-coordinate-formula-for-the-lie-bracket]
justified_by: [lem-the-invariant-exterior-derivative-formula-is-c-infinity-multilinear]
verification:
  audited: 2026-09-06
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

## Definition

For $\omega\in\Omega^k(M)$, define the candidate $d\omega$ on smooth vector fields by $$d\omega(X_0,\ldots,X_k)=\sum_i(-1)^iX_i\omega(X_0,\widehat X_i,\ldots,X_k)+\sum_{i<j}(-1)^{i+j}\omega([X_i,X_j],X_0,\widehat X_i,\widehat X_j,\ldots,X_k).$$ The next lemma proves that this candidate is a form.

