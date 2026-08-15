---
id: ex-moduli-below-twenty-with-primitive-roots
kind: example
title: "The positive moduli below $20$ admitting primitive roots are $1,2,3,4,5,6,7,9,10,11,13,14,17,18,19$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-classification-of-moduli-with-primitive-roots]
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

The positive integers below $20$ that admit primitive roots are

$$1,2,3,4,5,6,7,9,10,11,13,14,17,18,19.$$

## Facts & Assumptions

**Given:** The positive integers $n<20$.

[L1] A modulus admits a primitive root exactly when it is $1$, $2$, $4$, an odd prime power, or twice an odd prime power ([[thm-classification-of-moduli-with-primitive-roots]]).

## Verification

**Proof technique:** direct.

1.1 Below $20$, the odd prime powers are $3,5,7,9,11,13,17,19$, and twice such a power gives $6,10,14,18$; together with $1,2,4$ this is the displayed list. [L1, algebra]

2.1 The omitted positive integers are $8,12,15,16$: $8$ and $16$ are powers $2^a$ with $a\ge3$, $12=4\cdot3$, and $15$ has two odd prime factors, so [L1] excludes each. [step 1.1, L1, algebra] ∎
