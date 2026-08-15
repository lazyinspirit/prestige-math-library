---
id: def-mutually-left-and-mutually-right-adjoint-contravariant-functors
kind: definition
title: 'Mutually left and mutually right adjoint contravariant functors'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-functor-and-contravariant-functor, def-small-locally-small-and-large-category]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Definition 4.4.1'
      url: 'https://emilyriehl.github.io/files/context.pdf'
pipeline_run: null
---

## Definition

Let $S:\mathcal C^{\mathrm{op}}\to\mathcal D$ and $T:\mathcal D^{\mathrm{op}}\to\mathcal C$ be contravariant functors ([[def-functor-and-contravariant-functor]]) between locally small categories ([[def-small-locally-small-and-large-category]]). They are **mutually left and mutually right adjoint** when there are bijections

$$\mathcal D(d,Sc)\cong\mathcal C(c,Td)$$

natural in $c\in\mathcal C$ and $d\in\mathcal D$. Equivalently, the covariant functors $S:\mathcal C^{\mathrm{op}}\to\mathcal D$ and $T^{\mathrm{op}}:\mathcal D\to\mathcal C^{\mathrm{op}}$ form an adjoint pair, and the same data give the opposite adjunction after reversing both categories.
