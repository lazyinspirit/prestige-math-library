---
id: thm-completion-preserves-cohen-macaulayness
title: Completion preserves Cohen--Macaulayness
kind: theorem
status: published
origin: pipeline
deps: [cor-completion-preserves-cohen-macaulayness-two-directions]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://stacks.math.columbia.edu/download/algebra.pdf
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---
## Statement

Assume the stated choice convention. For a Noetherian local ring
$(R,\mathfrak m)$ and a nonzero finite $R$-module $M$,
$$M\text{ is Cohen--Macaulay over }R \quad\Longleftrightarrow\quad M\otimes_R\widehat R\text{ is Cohen--Macaulay over }\widehat R.$$
In particular, $R$ is Cohen--Macaulay if and only if its
$\mathfrak m$-adic completion is.

## Facts & Assumptions

**Given:** completion is taken at the maximal ideal.

## Proof

**Proof technique:** direct.

1.1 The module equivalence is `cor-completion-preserves-cohen-macaulayness-two-directions`. [given]

2.1 Taking $M=R$ gives $M\otimes_R\widehat R\cong\widehat R$ and proves the ring assertion. [step 1.1, algebra] ∎
