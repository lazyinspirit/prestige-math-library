---
id: def-initial-terminal-and-zero-object
kind: definition
title: "Initial object, terminal object, and zero object"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-category, thm-category-theoretic-duality-principle]
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

In a category $\mathcal C$ ([[def-category]]), an object $I$ is **initial** when
for every object $A$ there is exactly one morphism $I\to A$. An object $T$ is
**terminal** when for every $A$ there is exactly one morphism $A\to T$. These
notions are dual under [[thm-category-theoretic-duality-principle]].

A **zero object** is an object that is both initial and terminal. The definition
does not choose a particular zero object when several distinct but isomorphic
ones occur.

