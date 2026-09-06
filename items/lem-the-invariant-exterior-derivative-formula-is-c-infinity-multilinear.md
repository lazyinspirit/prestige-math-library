---
id: lem-the-invariant-exterior-derivative-formula-is-c-infinity-multilinear
kind: lemma
title: 'The invariant exterior-derivative formula is $C^\infty$-multilinear'
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-exterior-derivative-by-the-invariant-vector-field-formula, prop-leibniz-rules-for-the-lie-bracket-with-function-multiples, prop-smoothness-of-a-tensor-field-is-equivalent-to-smooth-coordinate-components]
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

The invariant formula defining $d\omega$ is alternating and $C^\infty(M)$-multilinear in $X_0,\ldots,X_k$; hence it defines a smooth $(k+1)$-form.

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

[F1] The preceding result states that For $\omega\in\Omega^k(M)$, define the candidate $d\omega$ on smooth vector fields by $$d\omega(X_0,\ldots,X_k)=\sum_i(-1)^iX_i\omega(X_0,\widehat X_i,\ldots,X_k)+\sum_{i<j}(-1)^{i+j}\omega([X_i,X_j],X_0,\widehat X_i,\widehat X_j,\ldots,X_k).$$ The next lemma proves that this candidate is a form. ([[def-exterior-derivative-by-the-invariant-vector-field-formula]]).

## Proof

**Proof technique:** direct.

1.1 Replace $X_i$ by $fX_i$. For $a\ne i$, the $a$th derivative term contributes $(-1)^a(X_af)\omega(\widehat X_a)$. If $a<i$, the $(a,i)$ bracket term contributes $(-1)^{a+i}(X_af)\omega(X_i,X_0,\ldots,\widehat X_a,\ldots,\widehat X_i,\ldots,X_k)=-(-1)^a(X_af)\omega(\widehat X_a)$, because moving $X_i$ to its usual slot takes $i-1$ swaps. If $a>i$, the $(i,a)$ bracket correction from $[fX_i,X_a]=f[X_i,X_a]-(X_af)X_i$ contributes $-(-1)^{i+a}(-1)^i(X_af)\omega(\widehat X_a)=-(-1)^a(X_af)\omega(\widehat X_a)$. Thus every derivative-of-$f$ term cancels. [F1, given]

2.1 All remaining terms are $f$ times the original formula; alternation follows by exchanging adjacent inputs, and smooth coordinate coefficients give a smooth form. [step 1.1] ∎
