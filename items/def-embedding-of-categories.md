---
id: def-embedding-of-categories
kind: definition
title: "Embedding and full embedding of categories"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-full-faithful-and-essentially-surjective-functor]
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

An **embedding of categories** is a functor that is faithful and injective on
objects. A **full embedding** is an embedding that is also full. These terms use
the notions of [[def-full-faithful-and-essentially-surjective-functor]].

Thus a fully faithful functor need not be an embedding: it may send distinct but
isomorphic objects to the same object. Conversely, an embedding need not be full.

