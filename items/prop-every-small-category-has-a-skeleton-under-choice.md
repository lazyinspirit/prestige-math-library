---
id: prop-every-small-category-has-a-skeleton-under-choice
kind: proposition
title: "Under the Axiom of Choice, every small category has a skeleton"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-skeletal-category-and-skeleton, def-small-locally-small-and-large-category, def-axiom-of-choice]
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
    - title: "Ahrens, Kapulkin and Shulman, Univalent categories and the Rezk completion, section 6"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/2CF86322C8415DE832BE304B4DC04D09/S0960129514000486a.pdf/div-class-title-univalent-categories-and-the-rezk-completion-div.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Every small category has a skeleton.

## Facts & Assumptions

**Given:** A small category $\mathcal C$.

[L1] A skeleton is a full skeletal subcategory containing one representative of every isomorphism class ([[def-skeletal-category-and-skeleton]]).

[L2] The object collection of a small category is a set ([[def-small-locally-small-and-large-category]]), and Choice selects from a set-indexed family of nonempty sets ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Isomorphism defines an equivalence relation on the set $\operatorname{Ob}\mathcal C$, so its quotient is a set whose members are nonempty isomorphism classes. [given, L1, L2]

2.1 By [L2], choose one object from each class and let $\mathcal S$ be the full subcategory on the selected objects. [step 1.1, L1, L2, choose]

3.1 Every object of $\mathcal C$ is isomorphic to its selected representative, while two selected isomorphic objects lie in the same class and are equal; hence $\mathcal S$ is a skeleton. [step 2.1, L1] ∎

