---
id: def-abelian-subcategory-and-exact-embedding
kind: definition
title: "Abelian subcategory and exact embedding"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-embedding-of-categories, def-additive-functor, def-abelian-category]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Barry Mitchell, Theory of Categories, Chapter I"
      url: "https://archive.org/details/theoryofcategori0000mitc"
    - title: "Peter Freyd, Abelian Categories, Chapter 7"
      url: "https://www.tac.mta.ca/tac/reprints/articles/3/tr3.pdf"
pipeline_run: frontier-21
---

## Definition

Let $\mathcal B$ be a full subcategory of an abelian category $\mathcal A$. The
subcategory $\mathcal B$ is an **abelian subcategory** when for every morphism
of $\mathcal B$ its kernel and cokernel computed in $\mathcal A$ again lie in
$\mathcal B$, and when $\mathcal B$ is closed under finite biproducts in
$\mathcal A$.

An **exact embedding** is a full embedding
([[def-embedding-of-categories]]) whose essential image is an abelian
subcategory and whose underlying functor is additive
([[def-additive-functor]]).
