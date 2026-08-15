---
id: def-intersection-of-a-family-of-subobjects
kind: definition
title: "Intersection of a supplied family of subobjects as its greatest lower bound"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-subobjects-and-quotient-objects-form-oppositely-ordered-collections]
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

Let $([m_i])_{i\in I}$ be a supplied family of subobjects of an object $C$, indexed by a set $I$. An **intersection** of this family is a greatest lower bound in the subobject order of [[thm-subobjects-and-quotient-objects-form-oppositely-ordered-collections]]: it is a subobject $[p]$ with $[p]\le[m_i]$ for every $i\in I$, and every subobject $[q]$ satisfying $[q]\le[m_i]$ for all $i$ also satisfies $[q]\le[p]$.

This definition does not assert that the intersection exists. When $I$ is empty, its intersection, if it exists, is the greatest subobject of $C$, represented by $1_C:C\to C$.
