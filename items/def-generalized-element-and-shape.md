---
id: def-generalized-element-and-shape
kind: definition
title: "Generalized elements and their shapes"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-category]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Tom Leinster, Basic Category Theory, Definition 4.1.25"
      url: "https://arxiv.org/pdf/1612.09375.pdf"
pipeline_run: null
---

## Definition

Let $A$ and $S$ be objects of a category $\mathcal C$ ([[def-category]]). A
**generalized element of $A$ of shape $S$** is a morphism $x:S\to A$. The
domain $S$ is its **shape**.

For a set $A$, ordinary elements are exactly generalized elements of singleton
shape: a function $1\to A$ is determined by the image of the unique point, and
every element of $A$ determines such a function. Other shapes can record more
structure than singleton-shaped elements do.
