---
id: lem-choice-splits-essential-surjectivity-over-a-small-target
kind: lemma
title: "Under the Axiom of Choice, essential surjectivity onto a small category admits a splitting"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-full-faithful-and-essentially-surjective-functor, def-small-locally-small-and-large-category, def-axiom-of-choice]
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

Assume the Axiom of Choice. If $F:\mathcal C\to\mathcal D$ is essentially
surjective and $\mathcal D$ is small, then its essential surjectivity admits a
splitting.

## Facts & Assumptions

**Given:** An essentially surjective functor $F:\mathcal C\to\mathcal D$ with small target $\mathcal D$.

[L1] Essential surjectivity asserts an object and isomorphism witness over every target object, while split essential surjectivity records one such witness for each object ([[def-full-faithful-and-essentially-surjective-functor]]).

[L2] A small category has a set of objects ([[def-small-locally-small-and-large-category]]), and the Axiom of Choice selects from a set-indexed family of nonempty sets ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Since $\operatorname{Ob}\mathcal D$ is a set and each $D$ has some pair $(C,\varepsilon:FC\to D)$, Collection bounds a witness for every $D$ inside one set of candidate pairs. [given, L1, L2]

2.1 For each $D$, the candidates in that bounding set form a nonempty set, so [L2] chooses one pair $(C_D,\varepsilon_D)$. [step 1.1, L2, choose]

3.1 The selected family is exactly a splitting of essential surjectivity as defined in [L1]. [step 2.1, L1] ∎

