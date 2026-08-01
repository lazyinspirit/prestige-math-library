---
id: lem-uniqueness-of-the-total-derivative
kind: lemma
title: "The total derivative at a point is unique"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-total-derivative-in-euclidean-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §8.3"
      url: "https://www.jirka.org/ra/html/sec_svtheder.html"
pipeline_run: null
---

## Statement

If $L,M:\mathbb R^m\to\mathbb R^n$ both satisfy the total-differentiability remainder condition for $f$ at $a$, then $L=M$.

## Facts & Assumptions

**Given:** Linear maps $L,M$ which both satisfy the definition of total derivative at $a$.

[L1] In the total-derivative definition, the normalized remainder tends to zero as $h$ tends to zero ([[def-total-derivative-in-euclidean-space]]).

## Proof

**Proof technique:** direct.

1.1 Subtracting the two remainder identities gives $\|(L-M)h\|_2/\|h\|_2\to0$ as $h\to0$. [L1]

2.1 For any fixed $v\in\mathbb R^m$ and nonzero real $t$, linearity gives $\|(L-M)(tv)\|_2/\|tv\|_2=\|(L-M)v\|_2/\|v\|_2$ when $v\ne0$. [step 1.1, algebra]

3.1 Letting $t\to0$ in step 2.1 forces $(L-M)v=0$ for every nonzero $v$, and it is also zero at $v=0$; hence $L=M$. [step 1.1, step 2.1] ∎
