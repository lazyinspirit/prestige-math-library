---
id: def-subcategory-and-full-subcategory
kind: definition
title: "Subcategory and full subcategory"
status: draft
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
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Chapter 1"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Definition

A **subcategory** $\mathcal A$ of a category $\mathcal C$
([[def-category]]) has a subclass of the objects of $\mathcal C$ and, for each
$A,B\in\mathcal A$, a subclass
$\mathcal A(A,B)\subseteq\mathcal C(A,B)$. It contains the identities of its
objects and is closed under the composition inherited from $\mathcal C$.

The subcategory is **full** when
$\mathcal A(A,B)=\mathcal C(A,B)$ for every pair of its objects. Thus a full
subcategory is determined entirely by its objects.

