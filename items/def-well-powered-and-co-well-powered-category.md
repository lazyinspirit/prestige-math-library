---
id: def-well-powered-and-co-well-powered-category
kind: definition
title: "Well-powered and co-well-powered categories, and supplied well-powerings"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-subobject-and-quotient-object, def-small-locally-small-and-large-category]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, section 4.7"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "S. Mac Lane, Categories for the Working Mathematician, section V.8"
      url: "https://web.archive.org/web/20251104003129if_/https://pages.jh.edu/rrynasi1/NewFoundations4Math/Literature/Textbooks/Mac_Lane1998CategoriesForTheWorkingMathematician.2ndEdition.pdf"
pipeline_run: null
---

## Definition

A category $\mathcal C$ is **well-powered** when, for every object $C$, the collection of subobjects of $C$ ([[def-subobject-and-quotient-object]]) is a set. It is **co-well-powered** when, for every $C$, the collection of quotient objects of $C$ is a set.

A **supplied well-powering** gives, for each object $C$, a set-indexed family of monomorphisms into $C$ containing one representative of every subobject class. A **supplied co-well-powering** is the dual datum for quotient objects. The supplied versions include chosen representatives; ordinary well-poweredness is only the size assertion.
