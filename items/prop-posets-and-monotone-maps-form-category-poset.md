---
id: prop-posets-and-monotone-maps-form-category-poset
kind: proposition
title: "Posets and monotone maps form the large locally small category $\\mathbf{Poset}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-category, def-small-locally-small-and-large-category, def-partial-order, def-the-set-of-functions-from-one-set-to-another, thm-burali-forti]
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

Partially ordered sets and monotone maps form a large locally small category
$\mathbf{Poset}$.

## Facts & Assumptions

**Given:** Posets $P,Q,R$ and monotone maps $f:P\to Q$, $g:Q\to R$.

[L1] Partial orders are reflexive, antisymmetric, and transitive ([[def-partial-order]]); a composite of monotone maps is monotone by transitivity of implication.

[L2] The functions $A\to B$ between fixed sets form the set $B^A$ ([[def-the-set-of-functions-from-one-set-to-another]]); category size is as in [[def-category]] and [[def-small-locally-small-and-large-category]], and the ordinals form a proper class ([[thm-burali-forti]]).

## Proof

**Proof technique:** direct.

1.1 Identity maps are monotone, and $x\le y$ gives $f(x)\le f(y)$ and then $g(f(x))\le g(f(y))$, so $g\circ f$ is monotone; composition is associative and unital as function composition. [given, L1]

2.1 Hence posets and monotone maps form a category whose hom-collections are sets of functions. [step 1.1, L2]

3.1 Each singleton $\{\alpha\}$ has its equality order, and ordinals yield a proper class of distinct such posets by [L2]; therefore $\mathbf{Poset}$ is large and locally small. [step 2.1, L1, L2] ∎
