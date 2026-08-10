---
id: thm-eckmann-hilton-argument
kind: theorem
title: "Eckmann–Hilton: two unital operations satisfying interchange coincide and are commutative"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-semigroup-and-monoid]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "nLab, Eckmann-Hilton argument"
      url: "https://ncatlab.org/nlab/show/Eckmann-Hilton%2Bargument"
pipeline_run: null
---

## Statement

Let a set $X$ carry two unital binary operations $\circ$ and $*$ with the same
unit $e$, and suppose

$$(a\circ b)*(c\circ d)=(a*c)\circ(b*d)$$

for all $a,b,c,d$. Then the operations coincide and their common operation is
commutative.

## Facts & Assumptions

**Given:** The two operations, common unit, and interchange identity in the Statement.

[L1] A unital associative operation is a monoid operation ([[def-semigroup-and-monoid]]); only the unit laws and interchange are needed for the calculation below.

## Proof

**Proof technique:** direct.

1.1 For $a,b\in X$, interchange gives $a*b=(a\circ e)*(e\circ b)=(a*e)\circ(e*b)=a\circ b$, so the operations coincide. [given, L1]

2.1 A second use gives $a\circ b=(e*a)\circ(b*e)=(e\circ b)*(a\circ e)=b*a$. [step 1.1, L1]

3.1 By step 1.1, $b*a=b\circ a$, so step 2.1 says $a\circ b=b\circ a$; the common operation is commutative. [step 1.1, step 2.1] ∎

