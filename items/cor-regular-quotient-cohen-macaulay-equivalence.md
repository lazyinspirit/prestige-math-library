---
id: cor-regular-quotient-cohen-macaulay-equivalence
title: Cohen--Macaulayness and a regular parameter quotient
kind: corollary
status: published
origin: pipeline
deps: [def-cohen-macaulay-local-module-and-ring, lem-regular-quotient-preserves-depth-dimension-gap]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---
## Statement

Under the hypotheses of
`lem-regular-quotient-preserves-depth-dimension-gap`, $M$ is Cohen--Macaulay
if and only if $M/xM$ is Cohen--Macaulay.

## Facts & Assumptions

**Given:** the depth--dimension gap is defined for both nonzero modules.

## Proof

**Proof technique:** direct.

1.1 The gap lemma says the two modules have the same $\dim-\operatorname{depth}$ value. [given]

2.1 Each module is Cohen--Macaulay exactly when that value is zero. Hence one is Cohen--Macaulay exactly when the other is. [step 1.1, algebra] ∎
