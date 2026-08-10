---
id: prop-sets-and-functions-form-category-set
kind: proposition
title: "Sets and functions form the large locally small category $\\mathbf{Set}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-category, def-small-locally-small-and-large-category, def-function, thm-burali-forti]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Chapter 1"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Sets as objects and functions as morphisms form a large locally small category
$\mathbf{Set}$.

## Facts & Assumptions

**Given:** Sets $A,B,C$ and functions $f:A\to B$, $g:B\to C$.

[L1] A category has associative composition and an identity at every object ([[def-category]]), and a function has a set domain, a codomain, and a uniquely determined value at each point of its domain ([[def-function]]).

[L2] Small, locally small, and large have the meanings in [[def-small-locally-small-and-large-category]], and the ordinals do not form a set ([[thm-burali-forti]]).

## Proof

**Proof technique:** direct.

1.1 Identity functions are functions, composites of functions are functions, function composition is associative, and $1_B\circ f=f=f\circ1_A$. [given, L1]

2.1 Hence sets and functions satisfy every axiom of a category. [step 1.1, L1]

3.1 For fixed $A,B$, the functions $A\to B$ form a subset of the power set of $A\times B$, so the hom-collection is a set; the object class contains every ordinal and therefore is not a set, so $\mathbf{Set}$ is locally small and large. [step 2.1, L2] ∎

