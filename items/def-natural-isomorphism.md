---
id: def-natural-isomorphism
kind: definition
title: "Natural isomorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-natural-transformation, def-isomorphism-groupoid-and-connected-category]
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

A **natural isomorphism** $\alpha:F\Rightarrow G$ is an isomorphism from $F$ to
$G$ in the functor category: there is a natural transformation
$\beta:G\Rightarrow F$ with
$\beta\circ\alpha=1_F$ and $\alpha\circ\beta=1_G$.

This combines [[def-natural-transformation]] with the categorical notion of
isomorphism from [[def-isomorphism-groupoid-and-connected-category]].

