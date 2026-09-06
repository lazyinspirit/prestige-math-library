---
id: lem-completion-preserves-regular-sequences
title: Completion preserves regular sequences
kind: lemma
status: draft
origin: pipeline
deps: [def-regular-sequence-on-a-module, thm-flatness-of-noetherian-completion, thm-faithful-flatness-of-jacobson-adic-completion]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://stacks.math.columbia.edu/download/algebra.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---
## Statement

Let $(R,\mathfrak m)$ be Noetherian local, let $M$ be finite, and put
$\widehat M=M\otimes_R\widehat R$. If $x_1,\ldots,x_r\in\mathfrak m$ is
$M$-regular, then its images form a $\widehat M$-regular sequence.

## Facts & Assumptions

**Given:** $R\to\widehat R$ is faithfully flat.

## Proof

**Proof technique:** direct.

1.1 Tensor each injective multiplication map on the successive quotients with the flat module $\widehat R$. Flatness preserves its injectivity and identifies the resulting quotient with the corresponding quotient of $\widehat M$. [given]

2.1 The terminal quotient remains nonzero because faithful flatness reflects the zero module. Hence the base-changed sequence satisfies both parts of the regular-sequence definition. [step 1.1, algebra] ∎
