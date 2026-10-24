---
id: cor-every-system-of-parameters-is-regular-in-a-cohen-macaulay-module
title: Every system of parameters is regular in a Cohen--Macaulay module
kind: corollary
status: published
origin: pipeline
deps: [def-axiom-of-choice, lem-cohen-macaulay-parameter-sequence-induction]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-01-receipts.jsonl (cor-every-system-of-parameters-is-regular-in-a-cohen-macaulay-module). No independent judge or whole-closure certification.
    delegated_by: owner
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

Every system of parameters of a nonzero finite Cohen--Macaulay module over a
Noetherian local ring is a regular sequence on that module.

## Facts & Assumptions

**Given:** the Axiom of Choice and a system of parameters $x_1,\ldots,x_d$ for $M$.

[L1] Under Choice, the parameter-sequence induction lemma makes the first parameter regular and the remaining tuple a parameter system on the Cohen--Macaulay quotient ([[lem-cohen-macaulay-parameter-sequence-induction]]).

## Proof

**Proof technique:** direct.

1.1 Induct on $d$. For $d=0$ the empty sequence is regular because $M\ne0$. For $d>0$, [L1] makes $x_1$ regular and identifies $x_2,\ldots,x_d$ as a parameter system on the Cohen--Macaulay quotient $M/x_1M$. [L1, given]

2.1 The induction hypothesis makes the remaining tuple regular on that quotient. Its terminal quotient is the nonzero parameter quotient (Nakayama), so the whole tuple satisfies the adopted definition of an $M$-regular sequence. [step 1.1, algebra] ∎
