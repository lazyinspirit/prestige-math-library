---
id: lem-qc-phase-gate-pauli-action
kind: lemma
title: Phase gate pauli action
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-phase-aware-n-qubit-pauli-group
  - def-qc-pauli-matrices
  - thm-qc-pauli-algebra
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-tensor-register-and-permutation
  - def-qc-tensor-map
  - thm-qc-tensor-map-composition-and-adjoint
justified_by: []
dependency_level: 6
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
    - title: John Watrous, Understanding Quantum Information and Computation, Lesson
        14
      url: https://jhwatrous.github.io/UQIC.pdf
    - title: Scott Aaronson and Daniel Gottesman, Improved Simulation of Stabilizer
        Circuits
      url: https://arxiv.org/pdf/quant-ph/0406196
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: "None; the proof is a finite matrix and tensor calculation."
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Statement

For a phase gate $S_j=\operatorname{diag}(1,i)$ on factor $j$, the binary update is $(x_j,z_j)\mapsto(x_j,z_j+x_j)$ and the phase update is $k\mapsto k+x_j$ modulo $4$. In particular $SXS^*=Y$ and $SZS^*=Z$.

## Facts & Assumptions

**Given:** n is a positive integer, j is a factor index, the phase-aware Pauli convention is fixed, and the register factors are ordered.

[F1] [[def-qc-pauli-matrices]]: the explicit X,Y,Z matrices are defined in the ordered computational basis.

[F2] [[thm-qc-pauli-algebra]]: Y=iXZ and YZ=iX.

[F3] [[def-qc-one-qubit-gate-alphabet-and-rotations]]: S=diag(1,i) and S*=diag(1,-i).

[F4] [[def-qc-tensor-map]] and [[thm-qc-tensor-map-composition-and-adjoint]]: tensor maps act factorwise and preserve composition and adjoints.

[F5] [[def-qc-tensor-register-and-permutation]]: the register factors have the declared order.

## Proof

1.1 Multiplying the matrices gives $SXS^*=Y=iXZ$ and $SZS^*=Z$. Therefore $SYS^*=i(SXS^*)(SZS^*)=iYZ=-X$, using $YZ=iX$. [F1, F2, F3, algebra]

2.1 On factor $j$, $S X^{x_j}Z^{z_j}S^*=(iXZ)^{x_j}Z^{z_j}=i^{x_j}X^{x_j}Z^{z_j+x_j}$; other tensor factors are unchanged. Thus the total phase increases by $x_j$ modulo $4$ and the binary $z_j$ coordinate increases by $x_j$ modulo $2$. [F1, F3, F4, F5, step 1.1, algebra] ∎
