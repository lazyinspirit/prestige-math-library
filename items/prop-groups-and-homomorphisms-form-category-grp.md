---
id: prop-groups-and-homomorphisms-form-category-grp
kind: proposition
title: "Groups and group homomorphisms form the large locally small category $\\mathbf{Grp}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-category, def-small-locally-small-and-large-category, def-group, def-group-homomorphism, def-the-set-of-functions-from-one-set-to-another, thm-burali-forti]
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

Groups and group homomorphisms form a large locally small category
$\mathbf{Grp}$.

## Facts & Assumptions

**Given:** Groups $G,H,K$ and homomorphisms $f:G\to H$, $g:H\to K$.

[L1] Groups are sets with the group operations ([[def-group]]), and identity maps and composites of group homomorphisms are group homomorphisms ([[def-group-homomorphism]]).

[L2] The functions $A\to B$ between fixed sets form the set $B^A$ ([[def-the-set-of-functions-from-one-set-to-another]]); the category and size conditions are [[def-category]] and [[def-small-locally-small-and-large-category]], while the ordinals form a proper class ([[thm-burali-forti]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], identity maps and composites remain group homomorphisms; their associativity and unit equations are the corresponding equations for functions. [given, L1]

2.1 Thus the group objects and homomorphisms satisfy the category axioms, and each hom-collection is a set of functions between two fixed underlying sets. [step 1.1, L2]

3.1 For every ordinal $\alpha$, the singleton $\{\alpha\}$ carries a transported trivial group structure, and distinct ordinals give distinct group objects; [L2] therefore rules out a set of all group objects, so $\mathbf{Grp}$ is large and locally small. [step 2.1, L2] ∎
