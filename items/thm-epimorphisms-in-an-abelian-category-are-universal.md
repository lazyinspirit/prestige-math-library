---
id: thm-epimorphisms-in-an-abelian-category-are-universal
kind: theorem
title: "Epimorphisms in an abelian category are universal"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-the-pullback-of-an-epimorphism-is-an-epimorphism]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.5, Lemma 12.5.14"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
pipeline_run: frontier-23
---

## Statement

Every epimorphism in an abelian category is universal: every pullback of it is
again an epimorphism.

## Facts & Assumptions

**Given:** An epimorphism in an abelian category and any pullback of it.

[L1] The pullback of an epimorphism is an epimorphism
([[thm-the-pullback-of-an-epimorphism-is-an-epimorphism]]).

## Proof

**Proof technique:** direct.

1.1 Take any epimorphism and any pullback of it. [given]

2.1 The pullback leg is epic by [L1], which is exactly the universality claim. [L1, step 1.1] ∎
