---
id: prop-isomorphisms-form-the-maximal-subgroupoid
kind: proposition
title: "The isomorphisms in a category form its maximal subgroupoid"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-category, def-isomorphism-groupoid-and-connected-category]
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

For every category $\mathcal C$, the subcategory with all objects and exactly
the isomorphisms as morphisms is a groupoid, and it contains every subgroupoid
of $\mathcal C$.

## Facts & Assumptions

**Given:** A category $\mathcal C$.

[L1] Isomorphisms and groupoids are defined in [[def-isomorphism-groupoid-and-connected-category]], and category composition is associative and unital ([[def-category]]).

## Proof

**Proof technique:** direct.

1.1 Identities are isomorphisms, and if $f$ and $g$ are composable isomorphisms then $g\circ f$ has inverse $f^{-1}\circ g^{-1}$, so the isomorphisms form a subcategory. [given, L1]

2.1 Every morphism of this subcategory is invertible by construction, hence it is a groupoid. [step 1.1, L1]

3.1 If $\mathcal G$ is any subgroupoid contained in $\mathcal C$, every morphism of $\mathcal G$ has its two-sided inverse in $\mathcal C$ and is therefore an isomorphism of $\mathcal C$; thus $\mathcal G$ lies in this subgroupoid, proving maximality. [step 2.1, L1] ∎

