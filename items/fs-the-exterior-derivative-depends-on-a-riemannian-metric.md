---
id: fs-the-exterior-derivative-depends-on-a-riemannian-metric
kind: false-statement
title: "The exterior derivative depends on a Riemannian metric"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-exterior-derivative-by-the-invariant-vector-field-formula]
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

The assertion that constructing the exterior derivative requires a Riemannian metric is false.

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

[F1] The preceding result states that For $\omega\in\Omega^k(M)$, define the candidate $d\omega$ on smooth vector fields by $$d\omega(X_0,\ldots,X_k)=\sum_i(-1)^iX_i\omega(X_0,\widehat X_i,\ldots,X_k)+\sum_{i<j}(-1)^{i+j}\omega([X_i,X_j],X_0,\widehat X_i,\widehat X_j,\ldots,X_k).$$ The next lemma proves that this candidate is a form. ([[def-exterior-derivative-by-the-invariant-vector-field-formula]]).

## Refutation

**Proof technique:** direct.

1.1 The invariant formula uses only the form, vector fields, their action on functions, and their Lie brackets. [F1, given]

2.1 No metric, connection, or inner product occurs in that construction, so the asserted dependence is false. [step 1.1] ∎

