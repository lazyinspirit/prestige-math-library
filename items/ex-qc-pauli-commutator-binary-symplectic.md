---
id: ex-qc-pauli-commutator-binary-symplectic
kind: example
title: Pauli commutator and binary symplectic sign
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - thm-qc-pauli-commutator-is-symplectic-pairing
  - def-qc-pauli-matrices
  - thm-qc-pauli-algebra
justified_by: []
dependency_level: 10
sources:
  references:
    - title: "John Preskill, Quantum Error Correction, Physics 229 Lecture Notes, Chapter 7"
      url: https://www.preskill.caltech.edu/ph229/notes/chap7.pdf
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
provenance:
  statement: ai-generated
  proof: ai-generated
axiom_use: "None; the example is a direct one-qubit matrix calculation."
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Example

For one qubit, the labels of $X$ and $Z$ have symplectic pairing $1$, so the binary form records their anticommutation. The two operators $Z$ and $-Z$ have the same binary label but different mod-$4$ phases.

## Facts & Assumptions

**Given:** one qubit and $P(k,x,z)=i^kX^xZ^z$.

[F1] [[thm-qc-pauli-commutator-is-symplectic-pairing]]: Pauli commutation is determined by $(-1)^{\omega}$.

[F2] [[def-qc-pauli-matrices]] and [[thm-qc-pauli-algebra]]: $X$ and $Z$ are the displayed one-qubit matrices and $XZ=-ZX$.

## Verification

1.1 The labels are $\lambda(X)=(1,0)$ and $\lambda(Z)=(0,1)$. Their pairing is $1\cdot1+0\cdot0=1$ in $\mathbb F_2$, so [F1] gives $XZ=-ZX$, which also follows by multiplying the matrices in [F2]. [given, F1, F2, algebra]

2.1 The operators $Z=P(0,0,1)$ and $-Z=P(2,0,1)$ have equal binary label $(0,1)$ and distinct scalar phases $1$ and $-1$. Thus the label quotient records commutation but alone does not recover the exact signed Pauli. [given, F2, algebra] ∎
