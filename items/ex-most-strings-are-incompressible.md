---
id: ex-most-strings-are-incompressible
kind: example
title: "Counting incompressible strings of a fixed length"
status: published
origin: session
deps: [lem-most-strings-are-incompressible]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Shen, §5"
      url: "https://arxiv.org/pdf/1504.04955"
---
## Example
For every fixed description machine $M$, fewer than $2^{90}$ of the $2^{100}$
strings of length $100$ have $C_M$-complexity below $90$; equivalently, the
proportion is strictly less than $1/1024$.
## Facts & Assumptions

**Given:** $n=100,c=10$.

## Verification

1.1 The compression threshold is $n-c=90$. [given]

2.1 For the fixed machine $M$, [[lem-most-strings-are-incompressible]] bounds the number by strictly less than $2^{100-10}=2^{90}$, hence the proportion by strictly less than $2^{-10}=1/1024$. [step 1.1, algebra] ∎
