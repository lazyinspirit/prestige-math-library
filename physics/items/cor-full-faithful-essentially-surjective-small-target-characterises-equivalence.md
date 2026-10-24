---
id: cor-full-faithful-essentially-surjective-small-target-characterises-equivalence
kind: corollary
title: "Under the Axiom of Choice, a functor with small target is an equivalence exactly when it is fully faithful and essentially surjective"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-fully-faithful-split-essentially-surjective-characterises-equivalence, lem-choice-splits-essential-surjectivity-over-a-small-target]
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

Assume the Axiom of Choice and let $F:\mathcal C\to\mathcal D$ have small
target. Then $F$ is an equivalence exactly when it is fully faithful and
essentially surjective.

## Facts & Assumptions

**Given:** A functor $F:\mathcal C\to\mathcal D$ with small $\mathcal D$, under the Axiom of Choice.

[L1] An equivalence is fully faithful and split essentially surjective, and the converse holds ([[thm-fully-faithful-split-essentially-surjective-characterises-equivalence]]).

[L2] Essential surjectivity over a small target can be split under Choice ([[lem-choice-splits-essential-surjectivity-over-a-small-target]]).

## Proof

**Proof technique:** direct.

1.1 If $F$ is an equivalence, [L1] makes it fully faithful and split essentially surjective, hence essentially surjective. [given, L1]

2.1 If $F$ is fully faithful and essentially surjective, [L2] supplies a splitting. [step 1.1, L2]

3.1 The converse direction of [L1] now makes $F$ an equivalence, proving the biconditional. [step 2.1, L1] ∎

