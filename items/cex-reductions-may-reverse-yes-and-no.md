---
id: cex-reductions-may-reverse-yes-and-no
kind: counterexample
title: "A reduction to the complement is not a reduction to the original target"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [fs-reductions-may-reverse-yes-and-no, def-computable-many-one-reduction]
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

## Statement refuted

A computable many-one reduction may reverse yes-instances and no-instances.

## Facts & Assumptions

**Given:** $A=\{0\}$, $B=\{1\}$, and the computable map $r$ on $\{0,1\}^*$ defined by $r(0)=0$ and $r(x)=1$ for $x\neq 0$.

[L1] A many-one reduction to $B$ must satisfy $x\in A\iff f(x)\in B$, by [[def-computable-many-one-reduction]].

[L2] The false slogan being refuted is recorded in [[fs-reductions-may-reverse-yes-and-no]].

## Counterexample

**Proof technique:** direct.

1.1 The map $r$ reverses membership relative to $B$: the yes-instance $0\in A$ is sent to $0\notin B$, while every no-instance $x\notin A$ is sent to $1\in B$. In particular, already at $x=0$ the biconditional required by [L1] fails, so $r$ is not a many-one reduction from $A$ to $B$. [L1, given]

2.1 The same map does satisfy $x\in A\iff r(x)\in\overline B$, so it is a reduction from $A$ to $\overline B$. Thus an answer-reversing transformation changes the target to its complement and is not a valid reduction to $B$; this refutes [L2]. [L1, L2, step 1.1] ∎
