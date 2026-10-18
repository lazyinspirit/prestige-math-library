---
id: def-qc-tqc-toric-hamiltonian
kind: definition
title: Finite toric-code Hamiltonian
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-qc-tqc-toric-checks
  - lem-qc-tqc-toric-check-commutation
  - def-qc-pauli-matrices
justified_by: []
proof_strategy: direct
axiom_use: "None; this is a finite-dimensional Hermitian operator."
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

## Definition

For $L\ge3$ and couplings $J_e,J_m>0$, the finite toric-code Hamiltonian on
$\mathcal H_L$ is

$$H_L=-J_e\sum_{i,j\in\mathbb Z_L}A_{i,j}-J_m\sum_{i,j\in\mathbb Z_L}B_{i,j}.$$

The energy unit is fixed by $J_e,J_m$. This is a finite-volume operator
defined from the stabilizer checks; its definition makes no claim about a
material realization or a thermodynamic phase.

## Facts & Assumptions

**Given:** The finite register and commuting checks from [[def-qc-tqc-toric-checks]].

[F1] [[def-qc-tqc-toric-checks]]: every star and plaquette is a Hermitian involution supported on four edges.

[F2] [[lem-qc-tqc-toric-check-commutation]]: all checks commute.

## Verification

1.1 Each coefficient $-J_e$ and $-J_m$ is real, and each summand is self-adjoint by [F1]. Their finite sum is therefore self-adjoint. [given, F1, algebra]

2.1 The terms commute pairwise by [F2], so $H_L$ is a finite sum of commuting local check operators. Its locality follows from the four-edge supports in [F1]. [F1, F2, step 1.1] ∎

