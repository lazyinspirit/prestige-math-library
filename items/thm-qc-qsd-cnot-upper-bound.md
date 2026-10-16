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
  statement: ai-altered
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

Reuse QC11 exact QSD: no-ancilla $n$-qubit $U$ needs at most $(23/48)4^n-(3/2)2^n+4/3$ CNOTs. Report one-qubit gates separately; a CNOT count alone is not total classical compilation time. Use $n\ge2$ for this formula; $n=1$ needs zero CNOT. For $n=0$, an exact circuit exists only for the identity scalar $U=1$, realized by the empty circuit.


## Facts & Assumptions

**Given:** n ordered qubits and exact no-ancilla QSD as in QC11.

[A1] [[thm-qc-exact-arbitrary-unitary-qsd-upper-bound]] proves the exact no-ancilla CNOT formula, including its recursive central controlled-$Z$ absorption identity and terminal diagonal-migration identity.

## Proof


1.1 For $n\ge2$, apply [A1] to the given unitary. Its exact no-ancilla QSD construction uses at most $(23/48)4^n-(3/2)2^n+4/3$ CNOTs. This is an upper bound for that construction, with both savings proved by the supplier, and makes no lower-bound or optimality assertion. [A1, given]

2.1 For $n=1$, a one-qubit $U$ is itself an allowed one-qubit gate and uses zero CNOT; for $n=0$, [A1] states that an exact empty-register circuit exists if and only if the scalar unitary is $1$, realized by the empty circuit with no gates. The formula from [A1] is not used in these cases. One-qubit gates remain a separate resource, and no classical compilation-time bound follows. [A1, given, cases] ∎

