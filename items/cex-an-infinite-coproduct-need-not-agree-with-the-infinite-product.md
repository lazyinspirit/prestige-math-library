---
id: cex-an-infinite-coproduct-need-not-agree-with-the-infinite-product
kind: counterexample
title: "An infinite coproduct need not agree with the infinite product"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-direct-sum-of-a-family-of-modules, thm-rmod-is-complete-and-cocomplete]
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
    - title: "Peter Freyd, Abelian Categories, Exercise 2A"
      url: "https://www.tac.mta.ca/tac/reprints/articles/3/tr3.pdf"
    - title: "A. Kleshchev, Lectures on Abstract Algebra for Graduate Students, sections 3.14 and 3.15"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/Alg600LN12.pdf"
pipeline_run: frontier-20
---

## Statement refuted

**Refuted claim:** in an additive category, an infinite coproduct is always the
same object as the corresponding infinite product.

The witness is the countable family of copies of $\mathbb Z$ in
$\mathbf{Ab}=\mathbb Z\text{-}\mathbf{Mod}$.

## Facts & Assumptions

**Given:** The countable family $(\mathbb Z)_{n\in\mathbb N}$ in $\mathbf{Ab}$.

[L1] The direct sum $\bigoplus_{n\in\mathbb N}\mathbb Z$ consists of those
integer sequences with finite support
([[def-direct-sum-of-a-family-of-modules]]).

[L2] For every ring $R$, the category $R\text{-}\mathbf{Mod}$ has all small
products and coproducts ([[thm-rmod-is-complete-and-cocomplete]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L2], both $\bigoplus_{n\in\mathbb N}\mathbb Z$ and $\prod_{n\in\mathbb N}\mathbb Z$ exist in $\mathbf{Ab}$. The canonical map from the coproduct to the product sends a finitely supported sequence to the same sequence viewed in the full product. [L1, L2]

2.1 The product element $(1,1,1,\ldots)$ is not in the image of that map, because every element of the direct sum has finite support by [L1]. Therefore the canonical map is not surjective, hence not an isomorphism. [L1, step 1.1]

3.1 So an infinite coproduct need not agree with the corresponding infinite product. [step 2.1] ∎
