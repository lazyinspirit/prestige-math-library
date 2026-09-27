---
id: lem-cohen-macaulay-parameter-sequence-induction
title: Induction along a Cohen--Macaulay parameter sequence
kind: lemma
status: published
origin: pipeline
deps: [def-axiom-of-choice, lem-cohen-macaulay-parameter-first-element-regular, cor-regular-quotient-cohen-macaulay-equivalence, thm-dimension-and-parameters-for-modules]
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
`lem-cohen-macaulay-parameter-first-element-regular`, $M/x_1M$ is
Cohen--Macaulay of dimension $d-1$, and
$x_2,\ldots,x_d$ is a system of parameters for it.

## Facts & Assumptions

**Given:** The Axiom of Choice; $x_1,\ldots,x_d$ is a system of parameters of the nonzero Cohen--Macaulay module $M$, with $d=\dim M>0$.

## Proof

**Proof technique:** direct.

1.1 The first-element lemma makes $x_1$ regular. Exact parameter dimension drop gives $\dim(M/x_1M)=d-1$, and the regular-quotient equivalence makes the quotient Cohen--Macaulay. [given]

2.1 Its quotient by $x_2,\ldots,x_d$ is the original parameter quotient, which has dimension $0$. Since the remaining tuple has length $d-1$, it is a system of parameters for $M/x_1M$. [step 1.1, algebra] ∎
