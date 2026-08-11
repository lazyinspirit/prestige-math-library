---
id: def-monomorphism-and-epimorphism
kind: definition
title: "Monomorphism and epimorphism by left and right cancellation"
status: published
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
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Chapter 1"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Definition

Let $f:A\to B$ be a morphism in a category ([[def-category]]).

- $f$ is a **monomorphism**, or **monic**, when
  $f\circ g=f\circ h$ implies $g=h$ for every parallel pair
  $g,h:X\to A$.
- $f$ is an **epimorphism**, or **epic**, when
  $g\circ f=h\circ f$ implies $g=h$ for every parallel pair
  $g,h:B\to Y$.

Thus monomorphisms are left-cancellable and epimorphisms are
right-cancellable. The definitions are formally dual.

