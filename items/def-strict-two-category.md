---
id: def-strict-two-category
kind: definition
title: "Strict 2-category"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-category, def-functor-and-contravariant-functor, def-product-category]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Chapter 1"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Definition

A **strict 2-category** consists of a class of objects and, for every ordered
pair $A,B$, a hom-category $\mathcal K(A,B)$ ([[def-category]]). Objects of a
hom-category are **1-morphisms** and its morphisms are **2-morphisms**.

There are identity 1-morphisms and horizontal-composition functors

$$\mathcal K(B,C)\times\mathcal K(A,B)\longrightarrow\mathcal K(A,C)$$

where the product and functor notions are those of [[def-product-category]] and
[[def-functor-and-contravariant-functor]]. They are associative and unital as
literal equalities. Because horizontal composition is functorial, it satisfies
the interchange law with the vertical composition inside each hom-category.
The adjective strict refers to these equalities rather than coherent
isomorphisms.
