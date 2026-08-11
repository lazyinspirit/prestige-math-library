---
id: def-functor-category
kind: definition
title: "Functor category $[\\mathcal C,\\mathcal D]$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [rem-category-theory-class-and-size-conventions, def-natural-transformation, def-vertical-composition-of-natural-transformations, lem-vertical-composition-of-natural-transformations-is-natural]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Chapter 1"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Definition

Within the definable-class convention of
[[rem-category-theory-class-and-size-conventions]], the construction below is
formed when the source category $\mathcal C$ is **small**. Then a functor out of
$\mathcal C$ and a natural transformation between two such functors are
set-coded data, so they can be objects and morphisms of a category in ZFC.

For categories $\mathcal C,\mathcal D$, the **functor category**
$[\mathcal C,\mathcal D]$ has functors $\mathcal C\to\mathcal D$ as objects and
natural transformations as morphisms ([[def-natural-transformation]]). Its
identities and composition are the identity transformations and vertical
composition. These are the operations of
[[def-vertical-composition-of-natural-transformations]].

Closure under composition is
[[lem-vertical-composition-of-natural-transformations-is-natural]].
Associativity and the identity laws hold at each component because they hold in
$\mathcal D$. Further smallness and local-smallness properties of this category
are stated separately.

For an arbitrary large source $\mathcal C$, the same notation may be used only
as metatheoretic shorthand for functors and natural transformations; this
definition does not form those proper-class-sized data into a category.
