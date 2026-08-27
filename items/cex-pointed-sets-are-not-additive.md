---
id: cex-pointed-sets-are-not-additive
kind: counterexample
title: "Pointed sets are not additive"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [fs-a-category-with-finite-products-and-finite-coproducts-has-biproducts]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Chapter 3"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-20
---

## Statement refuted

**Refuted claim:** the category of pointed sets is additive.

Take $A=B=\{0,1\}$ with basepoint $0$.

## Facts & Assumptions

**Given:** The pointed sets $A=B=\{0,1\}$ with basepoint $0$.

[A1] In $\mathbf{Set}_*$, the wedge $A\vee B$ has three points and the product
$A\times B$ has four points.

## Counterexample

**Proof technique:** direct.

1.1 The canonical map $A\vee B\to A\times B$ sends the three wedge points to $(0,0)$, $(1,0)$, and $(0,1)$, so it misses $(1,1)$. Therefore the wedge and product are not a biproduct pair. [A1]

2.1 An additive category must in particular have binary biproducts, so $\mathbf{Set}_*$ cannot be additive. [step 1.1] ∎
