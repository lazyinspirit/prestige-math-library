---
id: ex-signs-of-five-and-six-cycles
kind: example
title: 'A five-cycle is even and a six-cycle is odd'
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [cor-sign-from-disjoint-cycle-structure]
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

The cycle $(0\,1\,2\,3\,4)$ is even, while
$(0\,1\,2\,3\,4\,5)$ is odd.

## Facts & Assumptions

**Given:** The displayed cycles in symmetric groups on sets containing their entries.

[L1] A cycle of length $k$ has sign $(-1)^{k-1}$ ([[cor-sign-from-disjoint-cycle-structure]]).

## Verification

**Proof technique:** direct.

1.1 The five-cycle is a product of $5-1=4$ transpositions and has sign $(-1)^4=+1$; the six-cycle is a product of $6-1=5$ transpositions and has sign $(-1)^5=-1$. [given, L1]

2.1 Thus the five-cycle is even and the six-cycle is odd. The shift by one comes from the number of transpositions in the standard cycle factorisation. [step 1.1, L1] ∎
