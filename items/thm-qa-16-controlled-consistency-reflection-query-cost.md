---
id: thm-qa-16-controlled-consistency-reflection-query-cost
kind: theorem
title: Controlled consistency reflection uses two bit queries
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 22
deps:
  - alg-qa-16-controlled-consistency-reflection
  - thm-qa-16-controlled-consistency-reflection-correct
  - def-qa-quantum-query-complexity
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: None; all spaces, matrices, decompositions and optimization variables are finite-dimensional.
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement


For every x and every control value, the controlled input-consistency reflection circuit makes exactly two standard XOR bit-query calls. Equality tests, the phase operation, and scratch-register operations are nonoracle gates and are not included in this query count.

## Facts & Assumptions

**Given:** The controlled consistency-reflection algorithm from [[alg-qa-16-controlled-consistency-reflection]].



[F1] [[alg-qa-16-controlled-consistency-reflection]]: its circuit makes one XOR query to compute x_i into a clean scratch bit and a second to uncompute it.

[F2] [[def-qa-quantum-query-complexity]]: one invocation of the designated standard oracle is one query; nonoracle gates are outside this count.

## Proof

1.1 The algorithm contains exactly two designated calls to O_x: one before the equality-controlled phase and one after it. Both calls occur for every value of the control bit; the inactive branch is protected by its scratch/response state but does not remove a designated invocation. [given, F1]

2.1 The second call is valid uncomputation because O_x is self-inverse, as recorded in [F1]. The equality test, phase gate, control logic and scratch preparation are nonoracle operations, so [F2] excludes them from query cost. Therefore the cost is exactly two queries. [given, F1, F2, step 1.1] ∎
