---
id: def-diagram-in-a-category
kind: definition
title: "Diagram as a functor from an indexing category"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-functor-and-contravariant-functor]
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

A **diagram in a category** $\mathcal C$ is a functor
$D:\mathcal J\to\mathcal C$ ([[def-functor-and-contravariant-functor]]) from an
**indexing category** $\mathcal J$. The shape of the diagram is $\mathcal J$.
Thus objects and arrows of $\mathcal J$ name objects and commuting composites
displayed in $\mathcal C$. All relations in $\mathcal J$ are preserved by
functoriality.

