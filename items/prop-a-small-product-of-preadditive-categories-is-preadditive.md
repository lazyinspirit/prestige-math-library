---
id: prop-a-small-product-of-preadditive-categories-is-preadditive
kind: proposition
title: "A small product of preadditive categories is preadditive"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-preadditive-category, def-product-category, def-small-locally-small-and-large-category]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Chapter 1"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-20
---

## Statement

Let $(\mathcal C_i)_{i\in I}$ be a set-indexed family of preadditive
categories. Then their product category $\prod_{i\in I}\mathcal C_i$, with
objects, morphisms, identities, and composition taken coordinatewise, is
preadditive.

## Facts & Assumptions

**Given:** A set $I$ and a family $(\mathcal C_i)_{i\in I}$ of preadditive
categories.

[L1] A preadditive category has abelian-group hom-sets and bilinear
composition ([[def-preadditive-category]]).

[L2] Product categories compose and take identities componentwise
([[def-product-category]]).

[L3] The phrase "small product" means the indexing family is set-sized
([[def-small-locally-small-and-large-category]]).

## Proof

**Proof technique:** direct.

1.1 For objects $A=(A_i)$ and $B=(B_i)$, define $\prod_i\mathcal C_i(A_i,B_i)$ with componentwise addition. Each factor is an abelian group by [L1], so the componentwise law makes the product an abelian group. [L1, L3]

1.2 By [L2], composition in the product category is coordinatewise. Therefore for composable families $(f_i),(g_i),(h_i)$ one has $(h_i)\circ((f_i)+(g_i))=(h_i\circ(f_i+g_i))=(h_i\circ f_i+h_i\circ g_i)$ coordinatewise, and likewise on the other side. So composition is bilinear. [L1, L2]

2.1 Steps 1.1 and 1.2 are exactly the preadditive axioms, hence the set-indexed product category is preadditive. [step 1.1, step 1.2, L1] ∎
