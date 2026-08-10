---
id: def-functor-category
kind: definition
title: "Functor category $[\\mathcal C,\\mathcal D]$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-natural-transformation, lem-vertical-composition-of-natural-transformations-is-natural]
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

For categories $\mathcal C,\mathcal D$, the **functor category**
$[\mathcal C,\mathcal D]$ has functors $\mathcal C\to\mathcal D$ as objects and
natural transformations as morphisms ([[def-natural-transformation]]). Its
identities and composition are the identity transformations and vertical
composition.

Closure under composition is
[[lem-vertical-composition-of-natural-transformations-is-natural]].
Associativity and the identity laws hold at each component because they hold in
$\mathcal D$. Size conditions are not part of this definition and are stated
separately.

