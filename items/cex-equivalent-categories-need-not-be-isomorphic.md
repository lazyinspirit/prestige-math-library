---
id: cex-equivalent-categories-need-not-be-isomorphic
kind: counterexample
title: "A two-object indiscrete preorder is equivalent but not isomorphic to its one-object poset reflection"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-preorders-as-categories-and-monotone-maps-as-functors, def-equivalence-and-adjoint-equivalence-of-categories, prop-category-isomorphisms-are-bijective-on-objects-and-morphisms]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, discussion after Definition 1.5.5"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement refuted

Equivalence of categories does not imply isomorphism of categories.

## Facts & Assumptions

**Given:** The preorder $C=\{0,1\}$ with $x\le y$ for every $x,y$, and the one-object poset $D=\{*\}$.

[L1] Preorders become thin categories and monotone maps become functors ([[prop-preorders-as-categories-and-monotone-maps-as-functors]]).

[L2] Quasi-inverse functors with natural isomorphisms give an equivalence ([[def-equivalence-and-adjoint-equivalence-of-categories]]).

[L3] A category isomorphism is bijective on objects ([[prop-category-isomorphisms-are-bijective-on-objects-and-morphisms]]).

## Counterexample

**Proof technique:** direct.

1.1 Let $F:C\to D$ be the unique functor and let $G:D\to C$ select $0$. Then $FG=1_D$. [L1]

1.2 But $C$ has two objects and $D$ has one. No functor between them is bijective on objects, so [L3] rules out an isomorphism of categories. [L3]

2.1 The functor $GF$ is constant at $0$. Since $C$ has exactly one arrow between every ordered pair of objects, the unique arrows $x\to0$ are the components of a natural isomorphism $1_C\Rightarrow GF$. [step 1.1, L1]

3.1 Hence $F$ and $G$ exhibit $C\simeq D$ by [L2]. [step 1.1, step 2.1, L2]

4.1 Thus $C$ and its one-object poset reflection $D$ are equivalent but not isomorphic. [step 3.1, step 1.2] ∎
