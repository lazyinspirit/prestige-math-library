---
id: def-isomorphism-groupoid-and-connected-category
kind: definition
title: "Isomorphism, groupoid, and connected category"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-category]
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

In a category $\mathcal C$ ([[def-category]]), a morphism $f:A\to B$ is an
**isomorphism** if there is a morphism $g:B\to A$ with
$g\circ f=1_A$ and $f\circ g=1_B$. Such a $g$ is unique and is denoted
$f^{-1}$.

A **groupoid** is a category in which every morphism is an isomorphism. A
category is **connected** when it is nonempty and any two objects can be joined
by a finite zigzag of morphisms, with successive arrows allowed to point in
either direction. In a groupoid this is equivalent to being nonempty and having
an isomorphism between every ordered pair of objects. Nonemptiness cannot be
dropped: the empty groupoid has an isomorphism between every ordered pair of its
objects, vacuously, and is not connected.

