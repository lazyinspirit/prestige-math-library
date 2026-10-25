---
id: def-natural-isomorphism
kind: definition
title: "Natural isomorphism"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-natural-transformation, def-vertical-composition-of-natural-transformations, def-functor-category, def-isomorphism-groupoid-and-connected-category]
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

A **natural isomorphism** $\alpha:F\Rightarrow G$ is a natural transformation
for which there is a natural transformation
$\beta:G\Rightarrow F$ with
$\beta\circ\alpha=1_F$ and $\alpha\circ\beta=1_G$.
The compositions here are the vertical compositions of
[[def-vertical-composition-of-natural-transformations]].

When the source category is small, so that [[def-functor-category]] is formed,
this says exactly that $\alpha$ is an isomorphism from $F$ to $G$ in that
functor category. Thus the definition combines [[def-natural-transformation]]
with the categorical notion of isomorphism from
[[def-isomorphism-groupoid-and-connected-category]] without requiring a
functor category for an arbitrary large source.
