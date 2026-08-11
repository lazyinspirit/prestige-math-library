---
id: prop-rings-and-homomorphisms-form-category-ring
kind: proposition
title: "Unital rings and unit-preserving ring homomorphisms form the large locally small category $\\mathbf{Ring}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-category, def-small-locally-small-and-large-category, def-ring, def-ring-homomorphism, def-the-set-of-functions-from-one-set-to-another, thm-burali-forti]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Chapter 1"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Unital rings and unit-preserving ring homomorphisms form a large locally small
category $\mathbf{Ring}$.

## Facts & Assumptions

**Given:** Unital rings $R,S,T$ and unit-preserving homomorphisms $f:R\to S$ and $g:S\to T$.

[L1] A ring is an additive abelian group and multiplicative monoid with both distributive laws ([[def-ring]]); a ring homomorphism preserves addition, multiplication, zero, and one ([[def-ring-homomorphism]]).

[L2] The functions $A\to B$ between fixed sets form the set $B^A$ ([[def-the-set-of-functions-from-one-set-to-another]]); the category and size conditions are [[def-category]] and [[def-small-locally-small-and-large-category]], and the ordinals form a proper class ([[thm-burali-forti]]).

## Proof

**Proof technique:** direct.

1.1 The identity of a ring preserves both operations and the unit, and $g\circ f$ preserves them because $f$ and $g$ do; function composition supplies associativity and identity equations. [given, L1]

2.1 These data form a category, and every hom-collection is a set because it is a subset of the functions between the two underlying sets. [step 1.1, L2]

3.1 For each ordinal $\alpha$, the one-element set $\{\alpha\}$ carries the zero-ring structure with $0=1=\alpha$; these are distinct objects, so [L2] shows that $\mathbf{Ring}$ is large and locally small. [step 2.1, L1, L2] ∎
