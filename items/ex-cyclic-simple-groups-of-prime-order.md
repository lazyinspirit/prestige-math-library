---
id: ex-cyclic-simple-groups-of-prime-order
kind: example
title: "Cyclic simple groups of prime order"
status: draft
origin: pipeline
deps: [cor-prime-order-group-is-cyclic, def-simple-group]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Stephen D. Smith, CFSG—A User’s Manual"
      url: https://homepages.math.uic.edu/~smiths/talkv.pdf
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Example

$C_p$ is finite simple for every prime $p$.

## Facts & Assumptions

**Given:** Let $p$ be prime.

## Verification

**Proof technique:** direct.

1.1 The group $C_p$ has order $p$, so Lagrange's theorem leaves only subgroups of orders $1$ and $p$.  Thus it has no nontrivial proper normal subgroup. [given, algebra]

2.1 Hence $C_p$ is finite and simple. [step 1.1] ∎
