---
id: cex-square-modulo-each-prime-does-not-ignore-the-two-part
kind: counterexample
title: "Odd-prime tests alone miss the obstruction to $13$ being a square modulo $24$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-unit-square-criterion-modulo-two-powers,
       thm-unit-square-criterion-modulo-n]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement refuted

For an even modulus, testing whether a unit is a square modulo every odd prime divisor does not suffice to prove that it is a square modulo the original modulus.

## Facts & Assumptions

**Given:** The unit $13$ modulo $24=8\cdot3$.

[L1] For $k\ge3$, an odd integer is a square modulo $2^k$ if and only if it is congruent to $1$ modulo $8$ ([[thm-unit-square-criterion-modulo-two-powers]]).

[L2] A unit square modulo $n$ is a square modulo every prime-power factor of $n$ ([[thm-unit-square-criterion-modulo-n]]).

## Counterexample

**Proof technique:** direct.

1.1 The only odd prime divisor of $24$ is $3$, and $13\equiv1\pmod3$, so it passes the odd-prime square test. But $13\equiv5\pmod8$, and [L1] shows that it is not a square modulo $8$. [L1, given, algebra]

2.1 If $13$ were a square modulo $24$, the forward implication in [L2] would make it a square modulo the prime-power factor $8$, contradicting step 1.1. Hence the odd-prime test misses the two-part obstruction. [step 1.1, L2] ∎
