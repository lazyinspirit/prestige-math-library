---
id: prop-functors-preserve-isomorphisms
kind: proposition
title: "Every functor preserves isomorphisms"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-functor-and-contravariant-functor, def-isomorphism-groupoid-and-connected-category]
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

Every functor sends isomorphisms to isomorphisms.

## Facts & Assumptions

**Given:** A functor $F:\mathcal C\to\mathcal D$ and an isomorphism $f:A\to B$.

[L1] Functors preserve identities and composition ([[def-functor-and-contravariant-functor]]), and an isomorphism has a two-sided inverse ([[def-isomorphism-groupoid-and-connected-category]]).

## Proof

**Proof technique:** direct.

1.1 Let $g:B\to A$ satisfy $g\circ f=1_A$ and $f\circ g=1_B$. [given, L1]

2.1 Functoriality gives $F(g)\circ F(f)=F(1_A)=1_{FA}$ and $F(f)\circ F(g)=F(1_B)=1_{FB}$. [step 1.1, L1]

3.1 Thus $F(g)$ is a two-sided inverse of $F(f)$, so $F(f)$ is an isomorphism. [step 2.1, L1] ∎

