---
id: prop-modules-and-homomorphisms-form-category-rmod
kind: proposition
title: "Left modules over a fixed ring and module homomorphisms form the large locally small category $R\\text{-}\\mathbf{Mod}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-category, def-small-locally-small-and-large-category, def-left-and-right-modules, def-module-homomorphism-kernel-image-and-cokernel, def-the-set-of-functions-from-one-set-to-another, thm-burali-forti]
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

For a fixed ring $R$, left $R$-modules and module homomorphisms form a large
locally small category $R\text{-}\mathbf{Mod}$.

## Facts & Assumptions

**Given:** Left $R$-modules $M,N,P$ and module homomorphisms $f:M\to N$, $g:N\to P$.

[L1] Left modules satisfy the axioms in [[def-left-and-right-modules]], and module homomorphisms preserve addition and scalar multiplication ([[def-module-homomorphism-kernel-image-and-cokernel]]).

[L2] The functions $A\to B$ between fixed sets form the set $B^A$ ([[def-the-set-of-functions-from-one-set-to-another]]); the category and size notions are [[def-category]] and [[def-small-locally-small-and-large-category]], and the ordinals form a proper class ([[thm-burali-forti]]).

## Proof

**Proof technique:** direct.

1.1 Identity maps are module homomorphisms, and $g\circ f$ preserves addition and scalar multiplication by the two homomorphism laws; function composition is associative and unital. [given, L1]

2.1 Thus left $R$-modules and their homomorphisms form a category whose hom-collections are sets. [step 1.1, L2]

3.1 For every ordinal $\alpha$, the singleton $\{\alpha\}$ carries a transported zero $R$-module structure, producing a proper class of distinct objects by [L2]; hence $R\text{-}\mathbf{Mod}$ is large and locally small. [step 2.1, L1, L2] ∎
