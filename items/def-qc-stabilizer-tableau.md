---
id: def-qc-stabilizer-tableau
kind: definition
title: Phase-aware stabilizer tableau
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-qc-binary-pauli-label-and-quotient
  - thm-qc-binary-pauli-quotient-isomorphism
  - def-qc-binary-symplectic-form
  - thm-qc-pauli-commutator-is-symplectic-pairing
  - def-qc-phase-aware-n-qubit-pauli-group
  - def-qc-pauli-group-on-zero-qubits
  - thm-qc-pauli-product-and-adjoint
  - def-qc-stabilizer-subgroup
  - def-qc-stabilizer-state
justified_by: []
dependency_level: 15
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Scott Aaronson and Daniel Gottesman, Improved Simulation of Stabilizer Circuits, §III
      url: https://arxiv.org/pdf/quant-ph/0406196
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §20.3"
      url: https://arxiv.org/pdf/1907.09415
---

## Definition

For $n\ge0$, $x,z\in\mathbb F_2^n$, and $k\in\mathbb Z/4$, write
$P(k,x,z)=i^kX^xZ^z$, with the fixed tensor order and
$X^x=\bigotimes_{j<n}X^{x_j}$, $Z^z=\bigotimes_{j<n}Z^{z_j}$. A **row**
$(k,x,z)$ is Hermitian when $k\equiv x\cdot z\pmod 2$; it stores the exact
Pauli phase as well as its binary label $(x,z)$.

For $n=0$, use the scalar Pauli convention of
[[def-qc-pauli-group-on-zero-qubits]]; the generator list is empty.

A **generator tableau** is an ordered list of $n$ Hermitian rows whose Pauli
operators commute, have linearly independent labels, and generate a subgroup
not containing $-I$. It represents the unique common $+1$ ray when the rows
stabilize a pure state. An **extended tableau** also stores Hermitian
destabilizer rows $d_1,\ldots,d_n$ and stabilizer rows $s_1,\ldots,s_n$ with

$$\omega(d_i,s_j)=\delta_{ij},\quad \omega(d_i,d_j)=0,\quad \omega(s_i,s_j)=0.$$

The exact phase and symplectic conventions are those of the cited Pauli
suppliers. The generator-only simulator uses the $s_j$ rows; the extended
pairing is retained as a second representation invariant.

## Sources

Aaronson–Gottesman §III, PDF pp. 3–5, defines the phase-bit tableau and its
destabilizer/stabilizer pairing. De Wolf §20.3, PDF pp. 187–188, gives the
generator-only stabilizer representation used by the simulator:
https://arxiv.org/pdf/quant-ph/0406196;
https://arxiv.org/pdf/1907.09415.
