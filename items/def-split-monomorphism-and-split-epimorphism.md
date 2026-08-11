---
id: def-split-monomorphism-and-split-epimorphism
kind: definition
title: "Split monomorphism, split epimorphism, retraction, and section"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-isomorphism-groupoid-and-connected-category]
justified_by: []
aliases: []
landmark: false
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

Let $f:A\to B$ be a morphism.

If there is $r:B\to A$ with $r\circ f=1_A$, then $f$ is a
**split monomorphism** and a **section**, while $r$ is a **retraction** of $f$.
If there is $s:B\to A$ with $f\circ s=1_B$, then $f$ is a
**split epimorphism** and a **retraction**, while $s$ is a section of $f$.

When both identities hold, $f$ and its splitting are inverse isomorphisms in
the sense of [[def-isomorphism-groupoid-and-connected-category]].

