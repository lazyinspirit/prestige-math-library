---
id: cor-regular-quotient-cohen-macaulay-equivalence
title: Cohen--Macaulayness and a regular parameter quotient
kind: corollary
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-cohen-macaulay-local-module-and-ring, lem-regular-quotient-preserves-depth-dimension-gap]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-01-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

Under the hypotheses of
`lem-regular-quotient-preserves-depth-dimension-gap`, $M$ is Cohen--Macaulay
if and only if $M/xM$ is Cohen--Macaulay.

## Facts & Assumptions

**Given:** The Axiom of Choice; the depth--dimension gap is defined for both nonzero modules.

## Proof

**Proof technique:** direct.

1.1 Under the assumed Choice, the gap lemma says the two modules have the same $\dim-\operatorname{depth}$ value. [given]

2.1 Each module is Cohen--Macaulay exactly when that value is zero. Hence one is Cohen--Macaulay exactly when the other is. [step 1.1, algebra] ∎
