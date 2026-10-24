---
id: def-skeletal-category-and-skeleton
kind: definition
title: "Skeletal category and skeleton"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-category, def-isomorphism-groupoid-and-connected-category, def-subcategory-and-full-subcategory]
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

A category is **skeletal** when isomorphic objects are equal
([[def-isomorphism-groupoid-and-connected-category]]).

A **skeleton** of a category $\mathcal C$ is a full subcategory
$\mathcal S\subseteq\mathcal C$ ([[def-subcategory-and-full-subcategory]]) that
is skeletal and contains an object isomorphic to every object of $\mathcal C$.
Thus a skeleton contains exactly one object from each isomorphism class, once
the representative objects have been selected.

