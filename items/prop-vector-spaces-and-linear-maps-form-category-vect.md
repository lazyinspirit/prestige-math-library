---
id: prop-vector-spaces-and-linear-maps-form-category-vect
kind: proposition
title: "Vector spaces over a fixed field and linear maps form the large locally small category $\\mathbf{Vect}_F$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-category, def-small-locally-small-and-large-category, def-vector-space, def-linear-map, def-the-set-of-functions-from-one-set-to-another, thm-burali-forti]
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

For a fixed field $F$, vector spaces over $F$ and linear maps form a large
locally small category $\mathbf{Vect}_F$.

## Facts & Assumptions

**Given:** $F$-vector spaces $U,V,W$ and linear maps $S:U\to V$, $T:V\to W$.

[L1] The vector-space axioms are those of [[def-vector-space]], and a linear map preserves vector addition and scalar multiplication ([[def-linear-map]]).

[L2] The functions $A\to B$ between fixed sets form the set $B^A$ ([[def-the-set-of-functions-from-one-set-to-another]]); category size is governed by [[def-category]] and [[def-small-locally-small-and-large-category]], and the ordinals form a proper class ([[thm-burali-forti]]).

## Proof

**Proof technique:** direct.

1.1 Identity maps preserve addition and scalar multiplication, and $T\circ S$ does so by applying linearity first to $S$ and then to $T$; composition is associative and unital as function composition. [given, L1]

2.1 Hence $F$-vector spaces and linear maps form a category, and every hom-collection is a set of functions. [step 1.1, L2]

3.1 Each singleton $\{\alpha\}$, for an ordinal $\alpha$, carries a transported zero-dimensional $F$-vector-space structure; these distinct objects and [L2] show that $\mathbf{Vect}_F$ is large and locally small. [step 2.1, L1, L2] ∎
