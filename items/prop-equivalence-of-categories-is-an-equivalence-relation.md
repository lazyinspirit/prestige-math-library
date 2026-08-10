---
id: prop-equivalence-of-categories-is-an-equivalence-relation
kind: proposition
title: "Equivalence of categories is reflexive, symmetric, and transitive"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-equivalence-and-adjoint-equivalence-of-categories, def-horizontal-composition-and-whiskering-of-natural-transformations, lem-horizontal-composition-of-natural-transformations-is-natural]
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
    - title: "Ahrens, Kapulkin and Shulman, Univalent categories and the Rezk completion, section 6"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/2CF86322C8415DE832BE304B4DC04D09/S0960129514000486a.pdf/div-class-title-univalent-categories-and-the-rezk-completion-div.pdf"
pipeline_run: null
---

## Statement

Equivalence of categories is reflexive, symmetric, and transitive.

## Facts & Assumptions

**Given:** Categories and equivalence data between them.

[L1] An equivalence consists of quasi-inverse functors and natural isomorphisms in both composite directions ([[def-equivalence-and-adjoint-equivalence-of-categories]]).

[L2] Whiskering and horizontal composition produce natural transformations between composite functors ([[def-horizontal-composition-and-whiskering-of-natural-transformations]]), and those composites are natural ([[lem-horizontal-composition-of-natural-transformations-is-natural]]).

## Proof

**Proof technique:** direct.

1.1 The identity functor is its own quasi-inverse and the identity natural transformations supply an equivalence $\mathcal C\simeq\mathcal C$, proving reflexivity. [given, L1]

2.1 If $(F,G,\eta,\varepsilon)$ gives $\mathcal C\simeq\mathcal D$, then $(G,F,\varepsilon^{-1},\eta^{-1})$ gives $\mathcal D\simeq\mathcal C$, proving symmetry. [step 1.1, L1]

3.1 If $(F,G)$ gives $\mathcal C\simeq\mathcal D$ and $(H,K)$ gives $\mathcal D\simeq\mathcal E$, then $HF$ and $GK$ are quasi-inverses; whiskering and vertically composing the two units gives $1_{\mathcal C}\Rightarrow GKHF$, and doing the same with the counits gives $HFGK\Rightarrow1_{\mathcal E}$, so [L2] proves transitivity. [step 2.1, L1, L2] ∎

