---
id: thm-a-small-product-of-abelian-categories-is-abelian
kind: theorem
title: "A small product of abelian categories is abelian"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-abelian-category, prop-a-small-product-of-preadditive-categories-is-preadditive]
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
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, I.2 and VIII.3"
      url: "https://link.springer.com/book/10.1007/978-1-4757-4721-8"
pipeline_run: frontier-21
---

## Statement

Every set-indexed product of abelian categories is abelian. In particular, the
empty product category is abelian.

## Facts & Assumptions

**Given:** A set-indexed family $(\mathcal A_i)_{i\in I}$ of abelian
categories.

[L1] A small product of preadditive categories is preadditive
([[prop-a-small-product-of-preadditive-categories-is-preadditive]]).

[L2] Abelian categories are additive and compute kernels, cokernels, and
coimage-image comparison maps internally
([[def-abelian-category]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the product category $\prod_{i\in I}\mathcal A_i$ is preadditive. If $I=\varnothing$, this product has one object and one morphism, which is simultaneously zero and identity, so it is already an abelian zero category. For nonempty $I$, the zero object, finite biproducts, kernels, cokernels, and canonical coimage-image maps are all computed coordinatewise from the corresponding structures in each factor from [L2]. [L1, L2]

2.1 Therefore the product category is additive and satisfies the AB1 and AB2 clauses coordinatewise. So every small product of abelian categories is abelian. [L2, step 1.1] ∎
