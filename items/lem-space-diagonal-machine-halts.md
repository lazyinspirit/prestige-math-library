---
id: lem-space-diagonal-machine-halts
kind: lemma
title: "The space-diagonal machine halts"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-space-bounded-universal-simulation, lem-space-bounded-machines-have-exponentially-many-configurations, def-time-and-space-constructible-function]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: "Sebastiaan Terwijn, Complexity Theory, §2.3"
      url: "https://www.math.ru.nl/~terwijn/teaching/complexitytheory.pdf"
---

## Statement

Let $s(n)\ge1$ be space constructible and suppose $n=O(s(n))$. The all-tapes
space diagonalizer can be made total in $O(s(n))$ space by stopping a
simulation after its configuration bound.

## Facts & Assumptions

**Given:** the stated constructible cap and a simulated deterministic machine.

## Proof

**Proof technique:** direct.

1.1 Compute $s(n)$ in binary, enforce that cap, and run the universal simulation with a binary counter through the at most $2^{c s(n)}$ configurations allowed by the cap. The simulation uses $O(s(n))$ space because $n=O(s(n))$. [given, construct]

2.1 A nonhalting deterministic run repeats a configuration before the counter expires, while a halting run is seen directly. Declare a fixed answer at expiry. The counter has $O(s(n))$ bits, so it and the simulator remain within $O(s(n))$ space. [step 1.1, algebra] ∎
