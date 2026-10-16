---
id: thm-qa-34-classical-output-writing-lower-bound
kind: theorem
title: Writing an N-bit output costs at least N bit operations
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - def-qa-34-output-and-cost-types
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
---

## Statement

In an output-interface model with $N$ designated output positions, where one bit operation can write at most one position and every output position must be written, emitting an $N$-bit classical string costs at least $N$ bit operations. This lower bound concerns the output interface; it is not a lower bound on preparing a quantum state or on producing a succinct circuit description.

## Facts & Assumptions

**Given:** An integer $N\ge0$ and the output-interface convention in the Statement.

[F1] [[def-qa-34-output-and-cost-types]]: a classical string output is a finite bit string in a declared encoding, and its cost includes every output bit written.

## Proof


1.1 If $N=0$, the empty string requires no output positions and the lower bound is $0$. If $N>0$, the output has $N$ distinct designated positions by [F1] and the stated interface. [given, F1, cases]

2.1 Each bit operation writes at most one position, while all $N$ positions must be written. Hence any execution that emits the string uses at least $N$ bit operations. [given, step 1.1, algebra] ∎
