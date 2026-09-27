---
id: cor-every-system-of-parameters-is-regular-in-a-cohen-macaulay-module
title: Every system of parameters is regular in a Cohen--Macaulay module
kind: corollary
status: published
origin: pipeline
deps: [lem-cohen-macaulay-parameter-sequence-induction]
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

Every system of parameters of a nonzero finite Cohen--Macaulay module over a
Noetherian local ring is a regular sequence on that module.

## Facts & Assumptions

**Given:** $x_1,\ldots,x_d$ is a system of parameters for $M$.

## Proof

**Proof technique:** direct.

1.1 Induct on $d$. For $d=0$ the empty sequence is regular because $M\ne0$. For $d>0$, the parameter induction lemma makes $x_1$ regular and identifies $x_2,\ldots,x_d$ as a parameter system on the Cohen--Macaulay quotient $M/x_1M$. [given]

2.1 The induction hypothesis makes the remaining tuple regular on that quotient. Its terminal quotient is the nonzero parameter quotient (Nakayama), so the whole tuple satisfies the adopted definition of an $M$-regular sequence. [step 1.1, algebra] ∎
