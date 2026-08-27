---
id: fs-a-category-with-finite-products-and-finite-coproducts-has-biproducts
kind: false-statement
title: "FALSE: finite products and finite coproducts already force biproducts"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-biproduct, def-canonical-morphism-from-a-finite-coproduct-to-a-finite-product]
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
    - title: "Emily Riehl, Category Theory in Context, Chapter 3"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-20
---

## Statement

**False claim:** if a category has finite products and finite coproducts, then
those structures are automatically biproducts.

## Facts & Assumptions

**Given:** The category $\mathbf{Set}_*$ of pointed sets and pointed maps.

[L1] A biproduct requires the canonical coproduct-to-product morphism to be an
isomorphism ([[def-biproduct]],
[[def-canonical-morphism-from-a-finite-coproduct-to-a-finite-product]]).

## Refutation

**Proof technique:** direct.

1.1 In $\mathbf{Set}_*$, let $A=B=\{0,1\}$ with basepoint $0$. The binary coproduct $A\vee B$ has three points $0,a,b$, while the binary product $A\times B$ has four points $(0,0),(1,0),(0,1),(1,1)$. [given]

2.1 The canonical map $A\vee B\to A\times B$ sends $0$ to $(0,0)$, $a$ to $(1,0)$, and $b$ to $(0,1)$, so it misses $(1,1)$. Therefore it is not surjective and hence not an isomorphism. By [L1], this pair has product and coproduct without being a biproduct. [L1, step 1.1] ∎
