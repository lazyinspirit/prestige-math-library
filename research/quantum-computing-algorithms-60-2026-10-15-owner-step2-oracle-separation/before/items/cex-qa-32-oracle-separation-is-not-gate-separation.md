---
id: cex-qa-32-oracle-separation-is-not-gate-separation
kind: counterexample
title: Simon query lower bounds do not imply explicit-input gate lower bounds
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: quantum-complexity-classes-and-oracle-separations-examples
dependency_level: 18
deps:
  - thm-qa-32-simon-classical-randomized-query-lower-bound
  - thm-qa-32-simon-sample-rank-correctness
  - def-qa-32-simon-decision-oracle-promise
  - def-qc-circuit-cost-model
  - def-dtime-ntime-dspace-and-nspace
  - def-worst-case-time-and-space-complexity
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 3, Section 3.3.2"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 1, Section 1.6"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
---

## Statement refuted

For the Simon decision promise, changing from oracle access to an explicit full truth-table input still leaves a classical deterministic algorithm with $\Omega(2^{n/2})$ running time.

## Facts & Assumptions

**Given:** The same YES/NO function promise in two distinct access models: classical oracle queries, and a binary input containing the complete table.

[F1] [[thm-qa-32-simon-classical-randomized-query-lower-bound]]: oracle-only classical randomized decision requires $\Omega(2^{n/2})$ queries.

[F2] [[thm-qa-32-simon-sample-rank-correctness]]: the quantum rank test uses $n+2$ queries under the same oracle promise.

[F3] [[def-qa-32-simon-decision-oracle-promise]]: a table has $N=2^n$ addresses and $n$ output bits per address; the oracle model counts calls separately from an explicit table encoding.

[F4] [[def-dtime-ntime-dspace-and-nspace]] and [[def-worst-case-time-and-space-complexity]]: deterministic polynomial time is measured in the length of the explicit binary input.

[F5] [[def-qc-circuit-cost-model]]: named oracle calls and ordinary gate costs are separate resource coordinates.

## Counterexample

1.1 Let $N=2^n$ and $L=nN+n+1$, the length of the unary-header table code. For each of the $\binom N2$ distinct address pairs, scan the table to retrieve both $n$-bit outputs and answer NO if they coincide; answer YES if no pair collides. On a promised table this is correct, since YES functions are injective and every NO function has a collision. [given, F3, construct, algebra]

2.1 One table scan and output comparison take $O(L)$ transitions, so the $\binom N2$ pairs take $O(N^2L)$ time. Since $N\le L$, this is $O(L^3)$; the explicit-table promise problem is therefore in deterministic polynomial time under [F4]. [F3, F4, step 1.1, algebra]

3.1 The oracle bounds in [F1] and [F2] charge calls to $f$ or $U_f$, whereas the explicit-input algorithm charges table scans and ordinary computation as required by [F5]. Thus this oracle-query separation alone yields no explicit-input gate-time lower bound. [F1, F2, F5, step 2.1] ∎