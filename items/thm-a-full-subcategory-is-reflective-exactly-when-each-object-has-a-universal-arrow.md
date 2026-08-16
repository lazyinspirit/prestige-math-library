---
id: thm-a-full-subcategory-is-reflective-exactly-when-each-object-has-a-universal-arrow
kind: theorem
title: "A full subcategory is reflectively structured exactly when universal arrows are supplied at every ambient object"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-reflective-subcategory-and-reflector, def-universal-arrow-to-and-from-a-functor, thm-a-left-adjoint-exists-exactly-when-every-comma-category-has-an-initial-object]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, lemma 4.5.11"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "T. Leinster, Basic Category Theory, section 6.3"
      url: "https://arxiv.org/pdf/1612.09375"
pipeline_run: null
---

## Statement

Let $\mathcal A$ be a full subcategory of $\mathcal C$, with inclusion $I:\mathcal A\to\mathcal C$. The following supplied data are equivalent:

1. a reflector $R:\mathcal C\to\mathcal A$ and an adjunction $R\dashv I$ ([[def-reflective-subcategory-and-reflector]]);
2. for every object $C\in\mathcal C$, a specified universal arrow $(R_C,\eta_C)$ from $C$ to $I$ ([[def-universal-arrow-to-and-from-a-functor]]).

Under this equivalence the specified universal arrows are the components of the reflection unit. Merely asserting their existence, without supplying them object by object, does not supply the functor data in item 1.

## Facts & Assumptions

**Given:** A full inclusion $I:\mathcal A\to\mathcal C$.

[L1] A reflection consists of a left adjoint $R$ to $I$, with unit components $\eta_C:C\to IR(C)$ ([[def-reflective-subcategory-and-reflector]]).

[L2] A universal arrow from $C$ to $I$ is a pair $(A,\eta:C\to I(A))$ such that every $f:C\to I(B)$ factors uniquely as $f=I(h)\circ\eta$ ([[def-universal-arrow-to-and-from-a-functor]]).

[L3] A left adjoint to $I$ is supplied exactly by choosing an initial object, equivalently a universal arrow, in every comma category $(C\downarrow I)$; the supplied objects determine the functor on morphisms and the adjunction uniquely ([[thm-a-left-adjoint-exists-exactly-when-every-comma-category-has-an-initial-object]]).

## Proof

**Proof technique:** direct.

1.1 Suppose item 1 is supplied. By [L3] a supplied left adjoint to $I$ corresponds to an initial object, equivalently a universal arrow, of each comma category $(C\downarrow I)$, and the unit components are exactly those arrows. Hence for each $C$ the unit component $\eta_C:C\to IR(C)$ has the universal factorisation property of [L2], and $(R(C),\eta_C)$ is the required specified universal arrow. [L1, L2, L3]

2.1 Conversely, suppose item 2 is supplied. By [L3] the specified initial objects $(R_C,\eta_C)$ of $(C\downarrow I)$ determine a functor $R:\mathcal C\to\mathcal A$ and an adjunction $R\dashv I$ whose unit is $(\eta_C)$; hence $\mathcal A$ is reflective by [L1]. No selection beyond the supplied family is made. [L1, L2, L3, step 1.1] ∎
