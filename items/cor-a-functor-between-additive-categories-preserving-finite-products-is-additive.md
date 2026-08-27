---
id: cor-a-functor-between-additive-categories-preserving-finite-products-is-additive
kind: corollary
title: "A functor between additive categories preserving finite products is additive"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-a-functor-between-additive-categories-is-additive-exactly-when-it-preserves-finite-biproducts, thm-in-a-preadditive-category-a-finite-product-is-automatically-a-biproduct]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.7, Lemma 12.7.1"
      url: "https://stacks.math.columbia.edu/tag/010M"
pipeline_run: frontier-20
---

## Statement

If a functor between additive categories preserves finite products, then it is
additive.

## Facts & Assumptions

**Given:** A functor $F:\mathcal C\to\mathcal D$ between additive categories
that preserves finite products.

[L1] In an additive category, finite products are finite biproducts
([[thm-in-a-preadditive-category-a-finite-product-is-automatically-a-biproduct]]).

[L2] A functor between additive categories is additive exactly when it preserves
finite biproducts
([[thm-a-functor-between-additive-categories-is-additive-exactly-when-it-preserves-finite-biproducts]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], every finite product in the source and target is already a finite biproduct. Therefore a functor preserving finite products also preserves finite biproducts. [L1]

2.1 The criterion [L2] now shows that $F$ is additive. [L2, step 1.1] ∎
