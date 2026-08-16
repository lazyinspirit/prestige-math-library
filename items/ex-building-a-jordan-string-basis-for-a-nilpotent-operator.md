---
id: ex-building-a-jordan-string-basis-for-a-nilpotent-operator
kind: example
title: "Building a Jordan-string basis for a nilpotent operator on $F^6$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-nilpotent-jordan-string-basis, def-jordan-block-and-jordan-string]
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Let $(e_1,\ldots,e_6)$ be the standard basis of $F^6$ and define
$$Ne_1=0,\quad Ne_2=e_1,\quad Ne_3=e_2,\quad Ne_4=0,\quad Ne_5=e_4,\quad Ne_6=0.$$
Then $(e_1,e_2,e_3)$, $(e_4,e_5)$, and $(e_6)$ are Jordan strings whose concatenation is a basis. Thus $[N]=J_3(0)\oplus J_2(0)\oplus J_1(0)$ and $N^3=0\ne N^2$.

## Facts & Assumptions

**Given:** The displayed endomorphism on the standard basis of $F^6$.

[L1] A nilpotent Jordan string satisfies $Nv_1=0$ and $Nv_j=v_{j-1}$ for $j\ge2$ ([[def-jordan-block-and-jordan-string]]).

[L2] Every finite-dimensional nilpotent endomorphism admits a basis of Jordan strings ([[thm-nilpotent-jordan-string-basis]]).

## Verification

**Proof technique:** computation.

1.1 The six displayed images verify [L1] separately for the three listed strings, and their concatenation is the standard basis. [L1, algebra]

2.1 In that order the matrix has blocks $J_3(0)$, $J_2(0)$, and $J_1(0)$; direct iteration gives $N^3=0$ and $N^2e_3=e_1\ne0$, consistently with [L2]. [step 1.1, L2, algebra] ∎
