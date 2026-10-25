---
id: ex-recovering-nilpotent-blocks-from-ranks-of-powers
kind: example
title: "Recovering $J_3(0),J_2(0),J_1(0)$ from ranks of powers"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-power-ranks-determine-nilpotent-jordan-blocks]
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

Suppose a nilpotent endomorphism on a six-dimensional space has power ranks
$$\rho_0=6,\qquad\rho_1=3,\qquad\rho_2=1,\qquad\rho_3=\rho_4=0.$$
Then its nilpotent Jordan blocks have sizes $3,2,1$, each occurring once.

## Facts & Assumptions

**Given:** The displayed rank sequence.

[L1] The number of blocks of size at least $k$ is $\rho_{k-1}-\rho_k$, and the number of size exactly $k$ is $\rho_{k-1}-2\rho_k+\rho_{k+1}$ ([[thm-power-ranks-determine-nilpotent-jordan-blocks]]).

## Verification

**Proof technique:** computation.

1.1 The successive differences $\rho_{k-1}-\rho_k$ are $3,2,1,0$ for $k=1,2,3,4$, so there are respectively three, two, one, and zero blocks of size at least those values. [L1, algebra]

2.1 Taking successive differences again gives one block of each exact size $1,2,3$ and none larger; their sizes sum to $6$, as required. [step 1.1, L1, algebra] ∎
