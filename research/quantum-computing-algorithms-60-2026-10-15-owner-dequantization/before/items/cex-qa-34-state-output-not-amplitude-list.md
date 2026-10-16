---
id: cex-qa-34-state-output-not-amplitude-list
kind: counterexample
title: Quantum-state output does not mean an amplitude list was written
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - def-qa-34-output-and-cost-types
  - thm-qa-34-classical-output-writing-lower-bound
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
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
---

## Statement refuted

An efficient circuit that outputs an $n$-qubit state necessarily outputs its full classical amplitude list in polynomial time.

## Facts & Assumptions

**Given:** An integer $n\ge1$, the computational basis on $n$ qubits, and the full-list output convention in the Statement.

[F1] [[def-qa-34-output-and-cost-types]]: a quantum-state output and a classical bit-string output are distinct types; writing a classical string charges its output positions.

[F2] [[thm-qa-34-classical-output-writing-lower-bound]]: writing an $N$-bit string in the declared output interface costs at least $N$ bit operations.

## Counterexample


1.1 Use the quantum-state output type from [F1] and the empty circuit. It leaves $|0^n\rangle$ unchanged using zero gate occurrences. The full amplitude vector has $N=2^n$ entries, one equal to $1$ and the remaining $2^n-1$ equal to $0$; encode these entries by one bit each. [given, F1, construct]

2.1 The explicit list has $2^n$ designated output bits, so [F2] gives at least $2^n$ bit operations to write it. The empty circuit has zero gate occurrences, so the state output does not entail a polynomial-time amplitude-list output. [step 1.1, F2, algebra] ∎
