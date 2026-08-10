---
id: prop-preorders-as-categories-and-monotone-maps-as-functors
kind: proposition
title: "A preorder is a category with at most one morphism between any two objects, and its functors are exactly monotone maps"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-category, def-preorder]
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

A preorder determines a category with at most one morphism between any two
objects, and functors between such categories are exactly monotone maps.

## Facts & Assumptions

**Given:** Preorders $(P,\le_P)$ and $(Q,\le_Q)$.

[L1] A preorder is reflexive and transitive, and a monotone map preserves its relation ([[def-preorder]]).

[L2] Category identities and composition have the meanings of [[def-category]]. In this proposition, a functor is an assignment on objects and arrows that preserves identities and composition.

## Proof

**Proof technique:** direct.

1.1 Make the elements of $P$ objects and put one morphism $x\to y$ when $x\le_P y$, and none otherwise; reflexivity supplies identities and transitivity supplies the unique possible composites, so [L1] gives a category. [given, L1, L2]

2.1 A function $F:P\to Q$ extends to a functor exactly when $x\le_P y$ guarantees a target morphism $F(x)\to F(y)$, which is exactly $F(x)\le_Q F(y)$. [step 1.1, L1, L2]

3.1 Thus the functors between the associated categories are precisely the monotone maps, with no extra arrow choices because every relevant hom-collection has at most one member. [step 2.1, L1] ∎
