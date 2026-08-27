---
id: cor-additive-categories-are-closed-under-passage-to-the-opposite
kind: corollary
title: "Additive categories are closed under passage to the opposite"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-additive-category, thm-the-opposite-of-a-preadditive-category-is-preadditive]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.3: Preadditive and additive categories"
      url: "https://stacks.math.columbia.edu/tag/09SE"
pipeline_run: frontier-20
---

## Statement

If $\mathcal C$ is additive, then $\mathcal C^{\mathrm{op}}$ is additive.

## Facts & Assumptions

**Given:** An additive category $\mathcal C$.

[L1] The opposite of a preadditive category is preadditive ([[thm-the-opposite-of-a-preadditive-category-is-preadditive]]).

[L2] An additive category is a preadditive category with finite biproducts ([[def-additive-category]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], $\mathcal C$ is preadditive, so $\mathcal C^{\mathrm{op}}$ is preadditive by [L1]. [L1, L2]

2.1 By [L2], $\mathcal C$ has finite biproducts. Passing to the opposite category swaps products and coproducts, so every finite biproduct diagram in $\mathcal C$ becomes a diagram in $\mathcal C^{\mathrm{op}}$ that is again simultaneously a finite product and a finite coproduct. Thus $\mathcal C^{\mathrm{op}}$ has finite biproducts. [L2, step 1.1]

3.1 Thus $\mathcal C^{\mathrm{op}}$ is preadditive and has finite biproducts, so it is additive by [L2]. [L2, step 2.1] ∎
