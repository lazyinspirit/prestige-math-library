---
id: thm-small-categories-form-a-strict-two-category
kind: theorem
title: "Small categories, functors, and natural transformations form the strict 2-category $\\mathbf{Cat}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-strict-two-category, def-functor-category, thm-interchange-law-for-natural-transformations, prop-size-of-functor-categories, rem-category-theory-class-and-size-conventions]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Chapter 1"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Small categories, functors, and natural transformations form a strict
2-category $\mathbf{Cat}$.

## Facts & Assumptions

**Given:** Small categories $\mathcal A,\mathcal B,\mathcal C$.

[L1] A strict 2-category has hom-categories, strictly associative and unital horizontal composition, and interchange ([[def-strict-two-category]]).

[L2] Functors and natural transformations form functor categories ([[def-functor-category]]), these hom-categories are small for small endpoints ([[prop-size-of-functor-categories]]), and interchange holds ([[thm-interchange-law-for-natural-transformations]]).

## Proof

**Proof technique:** direct.

1.1 Take small categories as objects and $[\mathcal A,\mathcal B]$ as each hom-category; its objects are functors and its morphisms are natural transformations. [given, L1, L2]

2.1 Functor composition gives horizontal composition, whiskering gives its action on natural transformations, and ordinary composition of functions makes associativity and units literal equalities. [step 1.1, L1, L2]

3.1 The interchange theorem makes horizontal composition functorial with respect to vertical composition; the class convention of [[rem-category-theory-class-and-size-conventions]] treats the object collection schematically and never forms $\mathbf{CAT}$, so all strict 2-category axioms hold for $\mathbf{Cat}$. [step 2.1, L1, L2] ∎

