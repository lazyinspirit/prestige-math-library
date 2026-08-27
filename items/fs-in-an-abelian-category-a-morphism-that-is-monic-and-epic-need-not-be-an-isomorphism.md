---
id: fs-in-an-abelian-category-a-morphism-that-is-monic-and-epic-need-not-be-an-isomorphism
kind: false-statement
title: "FALSE: in an abelian category a morphism can be monic and epic without being an isomorphism"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-an-abelian-category-is-balanced]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Junhan Tan, The Freyd-Mitchell Embedding Theorem, Theorem 2.4"
      url: "https://arxiv.org/pdf/1901.08591"
pipeline_run: frontier-21
---

## Statement

In an abelian category, a morphism can be monic and epic without being an
isomorphism.

## Facts & Assumptions

**Given:** An abelian category.

[L1] Abelian categories are balanced
([[thm-an-abelian-category-is-balanced]]).

## Refutation

1.1 The statement asserts the existence of a bimorphism in an abelian category that is not an isomorphism. [L1]

2.1 But [L1] says every bimorphism in an abelian category is an isomorphism. So the asserted witness cannot exist, and the statement is false. [L1, step 1.1] ∎
