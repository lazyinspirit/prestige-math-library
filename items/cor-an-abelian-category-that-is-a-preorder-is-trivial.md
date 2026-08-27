---
id: cor-an-abelian-category-that-is-a-preorder-is-trivial
kind: corollary
title: "An abelian category that is a preorder is trivial"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-preorder, def-abelian-category, thm-an-abelian-category-is-balanced]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct-corollary
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, I.1 and VIII.3"
      url: "https://link.springer.com/book/10.1007/978-1-4757-4721-8"
pipeline_run: frontier-21
---

## Statement

If an abelian category is a preorder, then every object is isomorphic to the
zero object. In particular it is equivalent to the terminal one-object category.

## Facts & Assumptions

**Given:** An abelian category $\mathcal A$ that is also a preorder.

[L1] In a preorder there is at most one morphism between any two fixed objects
([[def-preorder]]).

[L2] Abelian categories have a zero object and are balanced
([[def-abelian-category]], [[thm-an-abelian-category-is-balanced]]).

## Proof

**Proof technique:** direct corollary.

1.1 By [L1], any two parallel morphisms in $\mathcal A$ are automatically equal. So every morphism is monic and epic. [L1]

2.1 Let $0$ be the zero object from [L2]. The unique morphisms $X\to0$ and $0\to X$ are both monic and epic by step 1.1, hence isomorphisms by [L2]. Therefore every object is isomorphic to $0$, and the category is equivalent to the terminal one-object category. [L2, step 1.1] ∎
