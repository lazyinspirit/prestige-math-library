---
id: thm-many-one-reductions-transfer-decidability-and-recognizability
kind: theorem
title: "Computable many-one reductions transfer decidability and recognizability backward"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-computable-many-one-reduction, def-decidable-and-recognizable-language]
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
    - title: "Kevin Kelly, Many-one Reduction"
      url: "https://www.andrew.cmu.edu/user/kk3n/recursionclass/8reduction.html"
---

## Statement

If $A\le_m B$, then:

- whenever $B$ is decidable, $A$ is decidable, and
- whenever $B$ is recognizable, $A$ is recognizable.

## Facts & Assumptions

**Given:** Languages $A\subseteq\Sigma^*$ and $B\subseteq\Gamma^*$ with $A\le_m B$.

[L1] A computable many-one reduction is a total computable function $f$ with $x\in A\iff f(x)\in B$ for every $x$, by [[def-computable-many-one-reduction]].

[L2] A language is decidable when some Turing machine halts on every input and answers membership correctly, and recognizable when some Turing machine accepts exactly its members, by [[def-decidable-and-recognizable-language]].

## Proof

**Proof technique:** direct.

1.1 Let $f$ witness $A\le_m B$. By [L1], $f$ is total and computable and satisfies $x\in A\iff f(x)\in B$ for all $x$. [L1, given]

2.1 If $B$ is decidable, [L2] supplies a decider $D_B$ for $B$. On input $x$, first compute $f(x)$ and then run $D_B$ on that word. By step 1.1 the output is correct for $A$, and totality of $f$ and $D_B$ makes the composite machine halt on every input. Therefore $A$ is decidable. [L1, L2, step 1.1, construct]

3.1 If $B$ is recognizable, [L2] supplies a recognizer $R_B$ for $B$. On input $x$, compute $f(x)$ and run $R_B$ on it. By step 1.1 this machine accepts exactly the words of $A$, so $A$ is recognizable. [L1, L2, step 1.1, construct] ∎

