---
id: thm-qc-qsd-cnot-upper-bound
kind: theorem
title: "QSD CNOT Upper Bound"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - thm-qc-exact-arbitrary-unitary-qsd-upper-bound
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Shende, Bullock, and Markov, Synthesis of Quantum Logic Circuits"
      url: https://arxiv.org/pdf/quant-ph/0406176
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
proof_strategy: direct
---

## Statement

Reuse QC11 exact QSD: no-ancilla $n$-qubit $U$ needs at most $(23/48)4^n-(3/2)2^n+4/3$ CNOTs. Report one-qubit gates separately; a CNOT count alone is not total classical compilation time. Use $n\ge2$ for this formula; $n\le1$ needs zero CNOT.


## Facts & Assumptions

**Given:** n ordered qubits and exact no-ancilla QSD as in QC11.

[A1] The current supplier [[thm-qc-exact-arbitrary-unitary-qsd-upper-bound]] states the exact no-ancilla CNOT formula. The terminal diagonal-migration helper is now present and its proof was inspected, but the supplier's recursive controlled-Z absorption saving remains unproved; this consumer does not claim the $23/48$ coefficient ready.

## Proof

1.1 For $n\ge2$, the current QC11 supplier states that its no-ancilla QSD construction uses at most $(23/48)4^n-(3/2)2^n+4/3$ CNOTs. This is an upper bound for the displayed construction, not a lower bound or optimum. The terminal diagonal-migration component is supplied by its current helper, but the recursive controlled-Z absorption saving needed for the coefficient remains unproved, so the formula claim remains escalated. [A1, given]

1.2 For $n=1$, a one-qubit $U$ is itself an allowed one-qubit gate and uses zero CNOT; for $n=0$, the empty-register unitary is a scalar and uses zero CNOT. The formula from [A1] is not used in these cases. One-qubit gates remain a separate resource, and no classical compilation-time bound follows. [A1, given, cases]
