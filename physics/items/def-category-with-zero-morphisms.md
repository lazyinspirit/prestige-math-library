---
id: def-category-with-zero-morphisms
kind: definition
title: "Category with zero morphisms"
status: published
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
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "Haru Park, Category Theory and Homological Algebra, section 2.2"
      url: "https://yglena.github.io/files/CategoryTheory210618.pdf"
pipeline_run: null
---

## Definition

A **category with zero morphisms** is a category $\mathcal C$
([[def-category]]) equipped with a specified morphism
$0_{A,B}:A\to B$ for every ordered pair of objects such that, for all
$f:A'\to A$ and $g:B\to B'$,

$$0_{A,B}\circ f=0_{A',B},\qquad g\circ0_{A,B}=0_{A,B'}.$$

The family is part of the structure. Merely naming an isolated morphism as zero
does not supply zero morphisms.
