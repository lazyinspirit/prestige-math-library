---
id: def-product-category
kind: definition
title: "Product category and its projection functors"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-category, def-functor-and-contravariant-functor]
justified_by: []
aliases: []
landmark: false
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

For categories $\mathcal C$ and $\mathcal D$ ([[def-category]]), their
**product category** $\mathcal C\times\mathcal D$ has objects $(C,D)$,
morphisms $(f,g):(C,D)\to(C',D')$, componentwise identities, and componentwise
composition

$$(f',g')\circ(f,g)=(f'\circ f,g'\circ g).$$

The category axioms hold componentwise. The **projection functors**
$\pi_{\mathcal C}$ and $\pi_{\mathcal D}$ send an object or morphism to its
corresponding component, and satisfy the functor laws of
[[def-functor-and-contravariant-functor]] componentwise.

