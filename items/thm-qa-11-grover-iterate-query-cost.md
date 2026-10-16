---
id: thm-qa-11-grover-iterate-query-cost
kind: theorem
title: One Grover iterate uses one standard bit query
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 21
proof_strategy: direct
deps:
  - alg-qa-11-grover-iterate
  - def-qa-quantum-query-complexity
  - thm-qa-bit-query-to-phase-query
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: 'Ronald de Wolf, Quantum Computing: Lecture Notes, §7.2'
      url: https://arxiv.org/pdf/1907.09415
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, §19.1
      url: https://cs.umd.edu/~amchilds/qa/qa.pdf
axiom_use: None; only finite sums, finite random choices, elementary real arithmetic, and natural-number induction are used; no choice principle is needed.
---

## Statement

One execution of [[alg-qa-11-grover-iterate]] makes exactly one standard bit-query call, through phase kickback. The response-qubit preparation and the reflection about $|s\rangle$ make no oracle calls and are charged separately as gates or explicitly supplied reflection operations.

## Facts & Assumptions

**Given:** The Grover iterate and the worst-case query-count convention.

[F1] [[alg-qa-11-grover-iterate]]: one standard bit query is applied to a response qubit in $|-\rangle$, after which the address reflection is applied.

[F2] [[def-qa-quantum-query-complexity]]: the query coordinate counts designated oracle invocations and keeps ordinary gates outside those calls separate.

[F3] [[thm-qa-bit-query-to-phase-query]]: one prepared-response standard query induces the phase query and uses exactly one query invocation.

## Proof

1.1 The algorithm contains one invocation of $U_f$; [F3] identifies that invocation with the phase mark on the address register. By [F2], this designated oracle invocation contributes one query. [given, F1, F2, F3]

2.1 The response preparation and $R_s$ are operations outside $U_f$, so they add no oracle invocation. The iterate therefore uses exactly one query, with no gate-cost bound inferred. [step 1.1, F1, F2] ∎
