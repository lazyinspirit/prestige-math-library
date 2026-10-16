---
id: lem-qc-hadamard-pauli-action
kind: lemma
title: Hadamard pauli action
status: draft
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

For a Hadamard gate $H_j$ on factor $j$, conjugation swaps the binary coordinates $x_j,z_j$ and changes the phase exactly by $2x_jz_j$ modulo $4$. In particular $HXH=Z$, $HZH=X$, and $HYH=-Y$.

## Facts & Assumptions

**Given:** n is a positive integer, j is a factor index, the phase-aware Pauli convention is fixed, and the register factors are ordered.

[F1] [[def-qc-pauli-matrices]]: the explicit X,Y,Z matrices are defined in the ordered computational basis.

[F2] [[thm-qc-pauli-algebra]]: X,Y,Z are self-adjoint involutions, Y=iXZ, ZX=-XZ, and YZ=iX.

[F3] [[def-qc-one-qubit-gate-alphabet-and-rotations]]: H=(X+Z)/sqrt(2); its verification gives H*=H and H^2=I.

[F4] [[def-qc-tensor-map]] and [[thm-qc-tensor-map-composition-and-adjoint]]: tensor maps act factorwise on elementary tensors, preserve composition, and have factorwise adjoints.

[F5] [[def-qc-tensor-register-and-permutation]]: the register factors and product basis have the declared order.

## Proof

1.1 Direct multiplication of the displayed $2\times2$ matrices gives $HXH=Z$ and $HZH=X$. Since $Y=iXZ$, conjugation preserves product order and gives $HYH=i(ZX)=-iXZ=-Y$. [F1, F2, F3, algebra]

2.1 On factor $j$, $H X^{x_j}Z^{z_j}H=Z^{x_j}X^{z_j}=(-1)^{x_jz_j}X^{z_j}Z^{x_j}$; all other tensor factors are unchanged by [F4] and [F5]. As $(-1)^{x_jz_j}=i^{2x_jz_j}$, this is $P(k+2x_jz_j,x',z')$ with $x'_j=z_j$, $z'_j=x_j$, and all other coordinates unchanged. [F1, F3, F4, F5, step 1.1, algebra] ∎
