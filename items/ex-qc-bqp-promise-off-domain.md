---
id: ex-qc-bqp-promise-off-domain
kind: example
title: "A BQP promise pair with unrestricted off-promise inputs"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps:
  - def-qc-bqp-promise-class
  - def-promise-problem
  - def-qc-uniform-circuit-family
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Watrous, Quantum Computational Complexity, Sections II.2 and IV.1"
      url: "https://arxiv.org/pdf/0804.3401"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 13, Section 13.2"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Example

Let $Y=\{0\}$ and $N=\{1\}$ as subsets of $\{0,1\}^*$. They are disjoint, and every other binary word is off the promise. For each $n\ge1$, let $C_n$ be the gate-free identity circuit with the first input wire as its one-bit output. For $n=0$, let $C_0$ have one zero-initialized auxiliary wire as output. Use one total predicate that accepts exactly when $x$ is the one-bit word $0$ and the measured output is $0$.

## Facts & Assumptions

**Given:** The promise pair and the BQP thresholds in [[def-qc-bqp-promise-class]].

[F1] [[def-qc-bqp-promise-class]]: only YES inputs require acceptance at least $2/3$ and NO inputs require acceptance at most $1/3$; off-promise inputs have no constraint.

[F2] [[def-promise-problem]]: a promise problem is a pair of disjoint subsets of $\{0,1\}^*$, and either answer is allowed outside their union.

[F3] [[def-qc-uniform-circuit-family]]: a family description records input and total wire counts, a finite gate list, and an ordered output tuple; the full-list generator receives unary input $1^n$.

## Verification

1.1 The pair is a promise problem because $Y$ and $N$ are disjoint singletons of distinct one-bit words, as required by [F2]. For $n\ge1$, use input count $n$, total wire count $m=n$, gate count zero, and output tuple $(0)$. For $n=0$, use input count zero, total wire count one, gate count zero, and output tuple $(0)$, whose wire is initialized to zero. These are valid descriptions under [F3]. One fixed one-tape generator writes the two unary counts by repeated sweeps over the $n$ input marks and then appends the constant gate-count and output fields; at most $O((n+1)^2)$ transitions suffice. The total predicate is $1$ exactly when $x$ is the one-bit word $0$ and $z=0$, and $0$ otherwise, so it is deterministic and polynomial time. [given, F2, F3, construct]

2.1 On the YES input $x=0$, the identity circuit leaves the measured output in $|0\rangle$, so acceptance is $1\ge2/3$. On the NO input $x=1$, it leaves the measured output in $|1\rangle$, so acceptance is $0\le1/3$. Every other string is outside $Y\cup N$, where [F1] imposes no condition. Hence this promise problem is in BQP in the stated model. [step 1.1, F1, algebra] ∎
