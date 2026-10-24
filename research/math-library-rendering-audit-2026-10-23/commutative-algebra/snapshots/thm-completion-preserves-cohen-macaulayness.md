---
id: thm-completion-preserves-cohen-macaulayness
title: Completion preserves Cohen--Macaulayness
kind: theorem
status: published
origin: pipeline
deps: [cor-completion-preserves-cohen-macaulayness-two-directions, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://stacks.math.columbia.edu/download/algebra.pdf
---
## Statement

Assume the Axiom of Choice. For a Noetherian local ring
$(R,\mathfrak m)$ and a nonzero finite $R$-module $M$,
$$M\text{ is Cohen--Macaulay over }R \quad\Longleftrightarrow\quad M\otimes_R\widehat R\text{ is Cohen--Macaulay over }\widehat R.$$
In particular, $R$ is Cohen--Macaulay if and only if its
$\mathfrak m$-adic completion is.

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]); completion is taken at the maximal ideal.

## Proof

**Proof technique:** direct.

1.1 Under AC, the module equivalence is [[cor-completion-preserves-cohen-macaulayness-two-directions]]. Its proof uses AC in the completion-dimension and faithful-flatness suppliers. [given]

2.1 Taking $M=R$ gives $M\otimes_R\widehat R\cong\widehat R$ and proves the ring assertion. [step 1.1, algebra] ∎
