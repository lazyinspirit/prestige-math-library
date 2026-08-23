---
id: cor-categories-of-models-for-algebraic-theories-are-complete-and-cocomplete
kind: corollary
title: "Under dependent choice, categories of models for algebraic theories are complete and cocomplete"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-category-of-models-for-an-algebraic-theory, thm-a-finitary-monad-on-a-complete-cocomplete-locally-small-category-has-complete-and-cocomplete-algebras, thm-set-has-all-small-limits, thm-set-has-all-small-colimits, prop-equivalences-preserve-reflect-and-create-limits-and-colimits, def-dependent-choice]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Corollary 5.6.14"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Assume dependent choice. Every category of models for an algebraic theory is complete and cocomplete.

## Facts & Assumptions

**Given:** Dependent choice and a category $\mathcal A$ of models for an algebraic theory.

[L1] A category of models for an algebraic theory is equipped with a finitary monadic functor to $\mathbf{Set}$ ([[def-category-of-models-for-an-algebraic-theory]]).

[L2] Every small diagram in $\mathbf{Set}$ has a limit ([[thm-set-has-all-small-limits]]).

[L3] Every small diagram in $\mathbf{Set}$ has a colimit ([[thm-set-has-all-small-colimits]]).

[L4] Equivalences preserve and reflect existing limits and colimits ([[prop-equivalences-preserve-reflect-and-create-limits-and-colimits]]).

[L5] Under dependent choice, a finitary monad on a complete cocomplete locally small category has a complete and cocomplete Eilenberg–Moore category ([[thm-a-finitary-monad-on-a-complete-cocomplete-locally-small-category-has-complete-and-cocomplete-algebras]]).

## Proof

**Proof technique:** direct.

1.1 By [L2] and [L3], $\mathbf{Set}$ is complete and cocomplete; it is locally small because each function collection between two sets is a set. This includes empty diagrams. [L2, L3, given]

2.1 The finitary monad induced by [L1] satisfies the hypotheses of [L5], so under dependent choice its Eilenberg–Moore category is complete and cocomplete. [step 1.1, L1, L5]

3.1 The comparison supplied by [L1] is an equivalence over $\mathbf{Set}$. Transporting the limits and colimits of step 2.1 across it by [L4] proves that $\mathcal A$ is complete and cocomplete. [step 2.1, L1, L4] ∎
