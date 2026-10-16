---
id: thm-qc-hermitian-pauli-phase-criterion
kind: theorem
title: Hermitian Pauli phase criterion
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-phase-aware-n-qubit-pauli-group
  - thm-qc-pauli-product-and-adjoint
  - def-qc-pauli-matrices
justified_by: []
dependency_level: 7
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
    - title: "Scott Aaronson and Daniel Gottesman, Improved Simulation of Stabilizer Circuits"
      url: https://arxiv.org/pdf/quant-ph/0406196
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: "None; the proof uses the finite phase-aware product law."
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Statement

For $P(k,x,z)=i^kX^xZ^z\in\mathcal P_n$, the operator is Hermitian exactly when $k\equiv x\cdot z\pmod 2$. In that case $P(k,x,z)^2=I$.

## Facts & Assumptions

**Given:** $k\in\mathbb Z/4\mathbb Z$, $x,z\in\mathbb F_2^n$, and the phase-aware Pauli convention.

[F1] [[thm-qc-pauli-product-and-adjoint]]: $P(k,x,z)^*=P(2(x\cdot z)-k,x,z)$ and $P(k,x,z)^2=P(2k+2(x\cdot z),0,0)$.

## Proof

1.1 Put $p=x\cdot z\in\mathbb F_2$ and use its representative $0$ or $1$. By [F1], equality $P^*=P$ is equivalent to $2p-k\equiv k\pmod4$, or $2(k-p)\equiv0\pmod4$, which holds exactly when $k-p$ is even, that is, $k\equiv p\pmod2$. [given, F1, algebra]

2.1 The same product formula gives $P^2=i^{2(k+p)}I=(-1)^{k+p}I$, which equals $I$ exactly under the parity condition in 1.1. Conversely, if $P$ is Hermitian then 1.1 gives that condition. [given, F1, step 1.1, algebra] ∎
