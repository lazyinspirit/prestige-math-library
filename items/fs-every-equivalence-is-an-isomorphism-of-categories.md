---
id: fs-every-equivalence-is-an-isomorphism-of-categories
kind: false-statement
title: "Every equivalence of categories is an isomorphism of categories"
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

## Statement

**FALSE.** Every equivalence of categories is an isomorphism of categories.

## Facts & Assumptions

**Given:** The indiscrete preorder $C=\{0,1\}$ and the terminal one-object category $D=\{*\}$.

[L1] Preorders define thin categories ([[prop-preorders-as-categories-and-monotone-maps-as-functors]]).

[L2] Equivalence is witnessed by quasi-inverses up to natural isomorphism ([[def-equivalence-and-adjoint-equivalence-of-categories]]).

[L3] Isomorphism of categories requires a bijection on objects ([[prop-category-isomorphisms-are-bijective-on-objects-and-morphisms]]).

## Refutation

**Proof technique:** direct.

1.1 The unique $F:C\to D$ and the functor $G:D\to C$ selecting $0$ satisfy $FG=1_D$. The unique arrows $x\to0$ in the indiscrete preorder form a natural isomorphism $1_C\Rightarrow GF$. [L1]

1.2 No functor $C\to D$ is bijective on objects because $C$ has two objects and $D$ one, so the categories are not isomorphic by [L3]. [L3]

2.1 Therefore $F$ is an equivalence by [L2]. [step 1.1, L2]

3.1 This equivalent but nonisomorphic pair refutes the statement. [step 2.1, step 1.2] ∎
