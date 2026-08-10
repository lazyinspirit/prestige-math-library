---
id: prop-topological-spaces-and-continuous-maps-form-category-top
kind: proposition
title: "Topological spaces and continuous maps form the large locally small category $\\mathbf{Top}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-category, def-small-locally-small-and-large-category, def-topological-space, def-continuous-map-top, def-function, thm-burali-forti]
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

Topological spaces and continuous maps form a large locally small category
$\mathbf{Top}$.

## Facts & Assumptions

**Given:** Topological spaces $X,Y,Z$ and continuous maps $f:X\to Y$, $g:Y\to Z$.

[L1] A topology is the structure in [[def-topological-space]], and identity maps and composites of continuous maps are continuous by the inverse-image definition in [[def-continuous-map-top]].

[L2] Functions between fixed sets form a set ([[def-function]]); category size is as in [[def-category]] and [[def-small-locally-small-and-large-category]], and the ordinals form a proper class ([[thm-burali-forti]]).

## Proof

**Proof technique:** direct.

1.1 Identity maps and $g\circ f$ are continuous by [L1], while associativity and unit equations are those of function composition. [given, L1]

2.1 Consequently spaces and continuous maps form a category, and each hom-collection is a set of functions between fixed underlying sets. [step 1.1, L2]

3.1 Every singleton $\{\alpha\}$, for an ordinal $\alpha$, has its unique topology; these give distinct space objects, so [L2] makes $\mathbf{Top}$ large and locally small. [step 2.1, L1, L2] ∎

