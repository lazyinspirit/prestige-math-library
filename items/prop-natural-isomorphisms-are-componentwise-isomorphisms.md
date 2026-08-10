---
id: prop-natural-isomorphisms-are-componentwise-isomorphisms
kind: proposition
title: "A natural transformation is a natural isomorphism exactly when every component is an isomorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-natural-isomorphism, def-vertical-composition-of-natural-transformations]
justified_by: []
aliases: []
landmark: true
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

A natural transformation $\alpha:F\Rightarrow G$ is a natural isomorphism
exactly when every component $\alpha_A$ is an isomorphism.

## Facts & Assumptions

**Given:** A natural transformation $\alpha:F\Rightarrow G$.

[L1] A natural isomorphism has a two-sided inverse natural transformation ([[def-natural-isomorphism]]), and vertical composition and identity transformations are componentwise ([[def-vertical-composition-of-natural-transformations]]).

## Proof

**Proof technique:** direct.

1.1 If $\alpha$ has a natural inverse $\beta$, then $\beta_A\alpha_A=1_{FA}$ and $\alpha_A\beta_A=1_{GA}$ at every object, so each $\alpha_A$ is an isomorphism. [given, L1]

2.1 Conversely, suppose every $\alpha_A$ is invertible and put $\beta_A=\alpha_A^{-1}$; from $Gf\alpha_A=\alpha_BFf$, composition with the two inverses gives $Ff\beta_A=\beta_BGf$, so $\beta:G\Rightarrow F$ is natural. [step 1.1, L1]

3.1 Componentwise, $\beta\circ\alpha=1_F$ and $\alpha\circ\beta=1_G$, hence $\alpha$ is a natural isomorphism. [step 2.1, L1] ∎
