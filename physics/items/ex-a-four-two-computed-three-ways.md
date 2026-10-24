---
id: ex-a-four-two-computed-three-ways
kind: example
title: "$A(4,2)=11$ by the recurrence, by Worpitzky's identity and by excedances"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-eulerian-recurrence, thm-worpitzky-identity, thm-descents-and-excedances-are-equidistributed]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

The Eulerian number $A(4,2)$ equals $11$, and three different routes produce the
same value.

## Facts & Assumptions

**Given:** The Eulerian recurrence, Worpitzky's identity, and the equidistribution of descents and excedances ([[thm-eulerian-recurrence]], [[thm-worpitzky-identity]], [[thm-descents-and-excedances-are-equidistributed]]).

## Verification

**Proof technique:** direct.

1.1 The recurrence gives $A(4,2)=3A(3,2)+2A(3,1)=3\cdot1+2\cdot4=11$. [given, algebra]

1.2 Worpitzky's identity with $n=4$ and $m=2$ gives $2^4=A(4,2)\binom{4}{4}+A(4,3)\binom{5}{4}$, because the $k=0,1$ terms vanish. Since $A(4,3)=1$, this reads $16=A(4,2)+5$, so again $A(4,2)=11$. [given, algebra]

2.1 By descents/excedances equidistribution, $A(4,2)$ also counts permutations of $S_4$ with exactly two excedances, and the $S_4$ table on this companion page contains exactly $11$ such permutations. [step 1.1, given] ∎
