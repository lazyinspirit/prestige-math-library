---
id: ex-products-and-coproducts-in-set
kind: example
title: "Products in Set are Cartesian products and coproducts are tagged disjoint unions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-products-and-coproducts, prop-sets-and-functions-form-category-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: universal-property
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Examples 3.1.10 and 3.1.14"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Example

For a set-indexed family $(A_i)_{i\in I}$ in $\mathbf{Set}$, the categorical
product is the Cartesian product $\prod_iA_i$, and the categorical coproduct is
the tagged disjoint union $\coprod_i\{i\}\times A_i$.

## Facts & Assumptions

**Given:** A set-indexed family $(A_i)_{i\in I}$.

[F1] A product represents families $X\to A_i$, and a coproduct represents
families $A_i\to X$ ([[def-products-and-coproducts]]).

[F2] Morphisms of $\mathbf{Set}$ are functions
([[prop-sets-and-functions-form-category-set]]).

## Verification

**Proof technique:** universal property.

1.1 Coordinate evaluation gives functions $p_i:\prod_iA_i\to A_i$. Given $f_i:X\to A_i$, define $f(x)=(f_i(x))_i$. Then $p_if=f_i$, and these equations determine every value of $f$, proving existence and uniqueness in [F1]. [F1, F2]

1.2 If $I=\varnothing$, the product consists of the single empty function, so there is exactly one function from every $X$ to it. Thus the same verification covers the nullary product. [F2]

2.1 Let the $i$th injection send $x$ to $(i,x)$. Given $g_i:A_i\to X$, define $g(i,x)=g_i(x)$. This is the unique function whose composite with the $i$th injection is $g_i$ for all $i$, so [F1] proves the coproduct property. For $I=\varnothing$, the tagged union is empty and has exactly one function to every set. [F1, F2] ∎
