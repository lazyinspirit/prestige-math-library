---
id: prop-the-exterior-derivative-is-local
kind: proposition
title: "The exterior derivative is local"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-exterior-derivative-by-the-invariant-vector-field-formula, lem-the-invariant-exterior-derivative-formula-is-c-infinity-multilinear]
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

If $\omega=\eta$ on an open set $U$, then $d\omega=d\eta$ on $U$.

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

[F1] The preceding result states that For $\omega\in\Omega^k(M)$, define the candidate $d\omega$ on smooth vector fields by $$d\omega(X_0,\ldots,X_k)=\sum_i(-1)^iX_i\omega(X_0,\widehat X_i,\ldots,X_k)+\sum_{i<j}(-1)^{i+j}\omega([X_i,X_j],X_0,\widehat X_i,\widehat X_j,\ldots,X_k).$$ The next lemma proves that this candidate is a form. ([[def-exterior-derivative-by-the-invariant-vector-field-formula]]).

## Proof

**Proof technique:** direct.

1.1 At a point of $U$, extend the prescribed tangent vectors by vector fields on $U$; the invariant formula uses only the values of the form and these fields in $U$. [F1, given]

2.1 Applying the same formula to the equal restrictions of $\omega$ and $\eta$ gives equal values at every point of $U$. [step 1.1] ∎

