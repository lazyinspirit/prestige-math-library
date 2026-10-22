---
id: prop-exterior-derivative-of-a-function-is-its-differential
kind: proposition
title: "The exterior derivative of a function is its differential"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-exterior-derivative-by-the-invariant-vector-field-formula, def-global-differential-or-tangent-map]
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

For $f\in C^\infty(M)=\Omega^0(M)$, $df(X)=Xf$ for every smooth vector field $X$.

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

[F1] The preceding result states that For $\omega\in\Omega^k(M)$, define the candidate $d\omega$ on smooth vector fields by $$d\omega(X_0,\ldots,X_k)=\sum_i(-1)^iX_i\omega(X_0,\widehat X_i,\ldots,X_k)+\sum_{i<j}(-1)^{i+j}\omega([X_i,X_j],X_0,\widehat X_i,\widehat X_j,\ldots,X_k).$$ The next lemma proves that this candidate is a form. ([[def-exterior-derivative-by-the-invariant-vector-field-formula]]).

## Proof

**Proof technique:** direct.

1.1 For $k=0$ the bracket sum is empty and the invariant formula gives $(df)(X)=Xf$. [F1, given]

2.1 This is exactly the defining action of the ordinary differential on a tangent vector. [step 1.1] ∎

