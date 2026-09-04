---
id: lem-many-one-implies-turing-reduction
kind: lemma
title: "Every computable many-one reduction induces a Turing reduction"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-computable-many-one-reduction, def-turing-reduction]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "MIT 6.045J / 18.400J, Lecture 9: Mapping Reducibility and Rice's Theorem"
      url: "https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/7aead2c728dd3d5a737d832811ef97e6_MIT6_045JS11_lec09.pdf"
---

## Statement

If $A\le_m B$, then $A\le_T B$.

## Facts & Assumptions

**Given:** Languages $A$ and $B$ with $A\le_m B$.

[L1] A computable many-one reduction is a total computable function $f$ satisfying $x\in A\iff f(x)\in B$, by [[def-computable-many-one-reduction]].

[L2] A Turing reduction is a halting oracle decider that answers membership in the source language correctly, by [[def-turing-reduction]].

## Proof

**Proof technique:** direct.

1.1 Let $f$ witness $A\le_m B$. Build an oracle machine that, on input $x$, first computes $f(x)$ and then asks the oracle for $B$ whether $f(x)\in B$. [L1, given, construct]

2.1 By [L1], the oracle answer to step 1.1 is "yes" exactly when $x\in A$. The machine makes only that one query and then halts with the same answer, so [L2] shows that it is a Turing reduction from $A$ to $B$. [L1, L2, step 1.1] ∎

