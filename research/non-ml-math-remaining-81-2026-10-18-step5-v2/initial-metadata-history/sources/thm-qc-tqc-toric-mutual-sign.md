---
id: thm-qc-tqc-toric-mutual-sign
kind: theorem
title: A single primal-dual crossing anticommutes
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - lem-qc-tqc-toric-string-syndrome
  - thm-qc-pauli-commutator-is-symplectic-pairing
justified_by: []
proof_strategy: direct
axiom_use: "None; this is a finite Pauli-matrix calculation."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Alexei Kitaev, Fault-tolerant quantum computation by anyons"
      url: https://arxiv.org/pdf/quant-ph/9707021
    - title: "John Preskill, Quantum Computation, Chapter 9: Topological Quantum Computation"
      url: https://www.preskill.caltech.edu/ph219/topological.pdf
---

## Statement

Let $P$ be a primal path and $Q$ a dual path whose edge supports share
exactly one physical qubit. Then their string Paulis anticommute:
$Z(P)X(Q)=-X(Q)Z(P)$. This is the algebraic mutual e/m string sign.

## Facts & Assumptions

**Given:** A primal Z string and a dual X string with exactly one shared edge-qubit.

[F1] [[lem-qc-tqc-toric-string-syndrome]]: $Z(P)$ is Z on the primal path edges and $X(Q)$ is X on the primal edge-qubits crossed by the dual path.

[F2] [[thm-qc-pauli-commutator-is-symplectic-pairing]]: two Pauli strings commute with sign $(-1)^{\omega}$, where $\omega$ is the parity of their X/Z support overlap.

## Proof

1.1 The X and Z supports meet at exactly one qubit, so their binary symplectic pairing is $1\in\mathbb F_2$. By [F2], $Z(P)X(Q)=(-1)^1X(Q)Z(P)=-X(Q)Z(P)$. [given, F1, F2, algebra]

2.1 The sign is obtained from the finite Pauli commutator alone. No trajectory, Hamiltonian evolution, or dynamical exchange is part of the hypotheses, so the result asserts the mutual string algebra and no braiding experiment. [given, step 1.1] ∎

## Remarks

The sign matches the conventional e/m mutual-statistics label for the toric code. The theorem proves the finite operator identity only.

