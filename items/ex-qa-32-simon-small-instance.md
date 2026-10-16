---
id: ex-qa-32-simon-small-instance
kind: example
title: Simon decision for n equals two
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: quantum-complexity-classes-and-oracle-separations-examples
dependency_level: 18
deps:
  - alg-qa-32-simon-query-rank-test
  - thm-qa-32-simon-sample-rank-correctness
  - def-finite-probability-space-and-event
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 3, Section 3.2"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Example

Take $n=2$, so $V_2=\mathbb F_2^2$, and consider a NO function with mask $s=01$. Then $s^\perp=\{00,10\}$, so every Simon sample lies in this one-dimensional subspace and the rank test rejects. On a YES permutation, the algorithm takes $m=n+2=4$ independent uniform samples. Its exact probability of failing to span is $23/128$, and the general union bound is $3/16$.

## Facts & Assumptions

**Given:** The algorithm and its output law from [[alg-qa-32-simon-query-rank-test]] and [[thm-qa-32-simon-sample-rank-correctness]]; $s=01$; and four independent uniform samples in $V_2$ in the YES case.

[F1] [[thm-qa-32-simon-sample-rank-correctness]]: every NO sample is orthogonal to $s$, every YES sample is uniform on $V_n$, and the YES rank-failure bound for $n=2,m=4$ is $(2^2-1)2^{-4}=3/16$.

[F2] [[def-finite-probability-space-and-event]]: a finite probability space assigns nonnegative weights summing to one to its outcomes; an event's probability is the sum of its outcome weights.

## Verification

1.1 The dot product with $s=01$ is the second coordinate, so $s^\perp=\{00,10\}$. Its span is itself and has rank one. Hence four NO samples cannot have rank two, and the algorithm rejects with probability one. [given, F1, algebra]

1.2 In $V_2$, the three one-dimensional subspaces are $\{00,10\}$, $\{00,01\}$, and $\{00,11\}$. Four vectors fail to span exactly when all four lie in one of these three subspaces. Each corresponding set of four-tuples has $2^4=16$ elements; every pairwise intersection and the triple intersection consist only of $(00,00,00,00)$. Inclusion-exclusion therefore gives $3\cdot16-3\cdot1+1=46$ failing tuples out of $4^4=256$. [given, construct, algebra]

2.1 By the independent runs in the given algorithm and the uniform YES law in [F1], each ordered four-tuple has weight $(1/4)^4=1/256$. Summing these weights by [F2], the exact failure probability is $46/256=23/128$. The union bound is $3\cdot16/256=3/16$, agreeing with [F1] and strictly below $1/4$. There are exactly four oracle runs by the algorithm's definition. [given, F1, F2, step 1.2, algebra] ∎
