---
id: thm-qa-16-dual-evaluator-query-cost
kind: theorem
title: Dual reflection evaluator query complexity
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 26
deps:
  - alg-qa-16-dual-adversary-reflection-evaluator
  - thm-qa-16-dual-evaluator-success
  - thm-qa-phase-estimation-access-cost
  - thm-qa-16-controlled-consistency-reflection-query-cost
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


For a supplied balanced dual certificate of cost A≥1, the evaluator uses exactly
$$2(M-1)\quad\text{queries},\qquad M=2^m=\text{least power of two with }M\ge512A.$$
Thus its query cost is less than $2048A$. The phase-estimation and input-independent witness-span reflections carry no asserted gate bound.

## Facts & Assumptions

**Given:** The bounded-error evaluator and its phase-estimation schedule.



[F1] [[alg-qa-16-dual-adversary-reflection-evaluator]]: the schedule uses controlled powers with exponents 1,2,…,2^{m−1} and each controlled consistency reflection uses two bit queries.

[F2] [[thm-qa-16-dual-evaluator-success]]: the phase-estimation procedure has the required bounded-error correctness.

[F3] [[thm-qa-phase-estimation-access-cost]]: the repeated-power schedule contains M−1 controlled-U calls.

[F4] [[thm-qa-16-controlled-consistency-reflection-query-cost]]: one controlled consistency reflection uses exactly two XOR queries.

[F5] [[def-qa-quantum-query-complexity]]: query count excludes nonoracle gates.

## Proof

1.1 Let M=2^m be the schedule length. The QPE powers use 2^j controlled U_x calls for j=0,…,m−1, whose total is Σ_j2^j=M−1 by [F3]. [given, F1, F3, algebra]

2.1 Each controlled U_x has one controlled input-consistency reflection and one input-independent controlled Δ reflection. The first costs exactly two queries by [F4], while the second costs zero oracle calls. Therefore the total is exactly 2(M−1) queries. [given, F1, F4, step 1.1]

3.1 Minimality of M implies M<1024A unless M=512A exactly, and hence 2(M−1)<2048A. Correctness is [F2]; preparations, equality tests, phase-estimation gates, and the Δ reflection are nonoracle operations and are not included by [F5]. This proves the O(A) query bound without a gate bound. [given, F2, F3, F5, step 2.1, algebra] ∎
