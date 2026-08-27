---
id: ex-abelian-groups-modules-and-vector-spaces-are-additive
kind: example
title: "Abelian groups, modules, and vector spaces are additive"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-additive-category, prop-modules-and-homomorphisms-form-category-rmod, prop-vector-spaces-and-linear-maps-form-category-vect]
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

## Example

The categories $\mathbf{Ab}$, $R\text{-}\mathbf{Mod}$, and $\mathbf{Vect}_F$
are additive. Their hom-sets are abelian groups under pointwise addition, and
their finite biproducts are the usual direct sums.

## Facts & Assumptions

**Given:** A ring $R$ and a field $F$.

[L1] An additive category is a preadditive category with finite biproducts
([[def-additive-category]]).

[L2] Left $R$-modules and their homomorphisms form a category
([[prop-modules-and-homomorphisms-form-category-rmod]]).

[L3] $F$-vector spaces and linear maps form a category
([[prop-vector-spaces-and-linear-maps-form-category-vect]]).

## Verification

**Proof technique:** direct.

1.1 In each of the categories named in the Example, morphisms add pointwise, so every hom-set is an abelian group. For $\mathbf{Ab}$ this is the special case $R=\mathbb Z$ of [L2], and [L3] gives the vector-space version. [L2, L3]

2.1 Finite direct sums of abelian groups, modules, or vector spaces carry the usual injections and projections, which satisfy the product and coproduct universal properties. Therefore each category has finite biproducts. By [L1], all three categories are additive. [L1, step 1.1] ∎
