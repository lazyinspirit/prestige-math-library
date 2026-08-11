---
id: prop-fully-faithful-functors-reflect-isomorphisms
kind: proposition
title: "Every fully faithful functor reflects isomorphisms"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-full-faithful-and-essentially-surjective-functor, def-isomorphism-groupoid-and-connected-category]
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

If $F:\mathcal C\to\mathcal D$ is fully faithful and $F(f)$ is an isomorphism,
then $f$ is an isomorphism.

## Facts & Assumptions

**Given:** A fully faithful functor $F$ and a morphism $f:A\to B$ such that $F(f)$ is invertible.

[L1] Fullness lifts every morphism between $FA$ and $FB$, while faithfulness reflects equality between parallel morphisms ([[def-full-faithful-and-essentially-surjective-functor]]).

[L2] An isomorphism has a two-sided inverse ([[def-isomorphism-groupoid-and-connected-category]]).

## Proof

**Proof technique:** direct.

1.1 Let $h:FB\to FA$ be the inverse of $F(f)$; fullness gives $g:B\to A$ with $F(g)=h$. [given, L1, L2]

2.1 Then $F(g\circ f)=h\circ F(f)=1_{FA}=F(1_A)$ and $F(f\circ g)=F(f)\circ h=1_{FB}=F(1_B)$. [step 1.1, L1, L2]

3.1 Faithfulness gives $g\circ f=1_A$ and $f\circ g=1_B$, so $f$ is an isomorphism. [step 2.1, L1, L2] ∎

