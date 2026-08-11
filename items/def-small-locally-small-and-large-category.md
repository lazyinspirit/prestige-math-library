---
id: def-small-locally-small-and-large-category
kind: definition
title: "Small, locally small, and large categories"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-category, rem-category-theory-class-and-size-conventions]
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

Let $\mathcal C$ be a category ([[def-category]]) under the class convention of
[[rem-category-theory-class-and-size-conventions]].

- $\mathcal C$ is **small** when both
  $\operatorname{Ob}(\mathcal C)$ and $\operatorname{Mor}(\mathcal C)$ are sets.
- $\mathcal C$ is **locally small** when every
  $\mathcal C(A,B)$ is a set.
- $\mathcal C$ is **large** when it is not small.

A small category is locally small because each hom-collection is a subclass of
the set of all morphisms. A large category may or may not be locally small.

