---
id: ex-trivial-factors-in-an-elementary-group
kind: example
title: Trivial factors in an elementary group
status: draft
origin: pipeline
deps: [def-p-elementary-and-p-hyperelementary-finite-groups]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: Wen-Wei Li, Yanqi Lake Lectures on Algebra I, Definition 14.1.1
      url: https://www.wwli.asia/downloads/YAlg1.pdf
provenance:
  statement: literature-derived
  proof: literature-derived
---

## Example

For every prime $p$, every finite $p$-group is $p$-elementary by taking $C=1$; every cyclic group of order prime to $p$ is $p$-elementary by taking $P=1$; and $1=1\times1$ is $p$-elementary and $p$-hyperelementary.

## Facts & Assumptions

[F1] The cited prerequisite is [[def-p-elementary-and-p-hyperelementary-finite-groups]].

## Verification

**Given:** the trivial group is cyclic and has order $1$.

1.1 The order $1$ is prime to every prime, and it is also $p^0$. [F1, given]

2.1 Therefore each displayed choice satisfies both factor conditions in the definition, including the simultaneous trivial-factor case. $\square$ [step 1.1]
