---
id: ex-square-roots-modulo-a-composite-by-crt
kind: example
title: "The square roots of $1$ modulo $360$ by the Chinese remainder theorem"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-unit-square-criterion-modulo-n,
       cor-number-of-square-roots-of-a-unit-modulo-n]
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

## Example

The square roots of $1$ modulo $360$ are

$$1,19,71,89,91,109,161,179,181,199,251,269,271,289,341,359.$$

## Facts & Assumptions

**Given:** The factorisation $360=8\cdot9\cdot5$ into pairwise coprime prime powers.

[L1] A unit is a square modulo $n$ if and only if it is a square modulo every prime-power factor of $n$ ([[thm-unit-square-criterion-modulo-n]]).

[L2] The number of square roots of a soluble unit is the product of the local root counts ([[cor-number-of-square-roots-of-a-unit-modulo-n]]).

## Verification

**Proof technique:** direct.

1.1 The roots of $1$ are $1,3,5,7$ modulo $8$, are $1,8$ modulo $9$, and are $1,4$ modulo $5$. By [L1], every combination of these local roots gives a global root, and [L2] gives $4\cdot2\cdot2=16$ global roots. [L1, L2, given, algebra]

2.1 Solving the finite CRT systems and reducing modulo $360$ gives exactly the displayed representatives. They are distinct, and reducing each one modulo $8$, $9$, and $5$ places it in the corresponding local root set from step 1.1, so [L1] verifies that each square is $1$ modulo $360$; the count in [L2] proves completeness. [step 1.1, L1, L2, algebra] ∎
