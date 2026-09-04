---
id: fs-reductions-may-reverse-yes-and-no
kind: false-statement
title: "FALSE: a valid many-one reduction may reverse yes-instances and no-instances"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-computable-many-one-reduction]
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

A valid computable many-one reduction may reverse yes-instances and
no-instances.

## Facts & Assumptions

**Given:** Languages $A$ and $B$.

[L1] A computable many-one reduction satisfies $x\in A\iff f(x)\in B$ for every input $x$, by [[def-computable-many-one-reduction]].

## Refutation

**Proof technique:** direct.

1.1 If $f$ is a many-one reduction from $A$ to $B$, then [L1] says that $x\in A$ and $f(x)\in B$ always have the same truth value. Equivalently, $x\notin A\iff f(x)\notin B$ as well. [L1, given]

2.1 So a valid reduction preserves both yes-answers and no-answers relative to the chosen target language $B$; it does not reverse them. Reversal would mean reducing to the complement language $\overline B$ instead. Therefore the statement is false. [L1, step 1.1] ∎

