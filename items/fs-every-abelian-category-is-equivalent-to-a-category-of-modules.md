---
id: fs-every-abelian-category-is-equivalent-to-a-category-of-modules
kind: false-statement
title: "FALSE: every abelian category is equivalent to a module category"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-modules-over-a-ring-form-an-abelian-category, thm-rmod-is-complete-and-cocomplete]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Junhan Tan, The Freyd-Mitchell Embedding Theorem, Corollary 7.17"
      url: "https://arxiv.org/pdf/1901.08591"
pipeline_run: frontier-21
---

## Statement

Every abelian category is equivalent to a category of modules.

## Facts & Assumptions

**Given:** A field $F$ and the full subcategory $\mathbf{FinVect}_F$ of
finite-dimensional $F$-vector spaces.

[L1] Module categories are abelian
([[thm-modules-over-a-ring-form-an-abelian-category]]).

[L2] Every module category has all small coproducts
([[thm-rmod-is-complete-and-cocomplete]]).

## Refutation

1.1 The category $\mathbf{FinVect}_F$ is abelian: kernels, cokernels, images, coimages, and finite direct sums of linear maps between finite-dimensional vector spaces stay finite-dimensional, so the abelian-category structure of $\mathbf{Vect}_F$ restricts to this full subcategory. [L1]

2.1 The countable coproduct of countably many copies of the one-dimensional space $F$ does not exist in $\mathbf{FinVect}_F$, because its usual direct sum is infinite-dimensional. But [L2] says every module category has all small coproducts. Since equivalences preserve which small coproducts exist, $\mathbf{FinVect}_F$ cannot be equivalent to any module category. Therefore the universal statement is false. [L2, step 1.1] ∎
