---
id: thm-qc-clifford-induces-symplectic-map
kind: theorem
title: Clifford induces symplectic map
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-binary-pauli-label-and-quotient
  - thm-qc-binary-pauli-quotient-isomorphism
  - def-qc-binary-symplectic-form
  - thm-qc-pauli-commutator-is-symplectic-pairing
  - def-qc-clifford-normalizer
  - def-linear-map
justified_by: []
dependency_level: 10
sources:
  references:
    - title: "M. Hein et al., Entanglement in Graph States and Its Applications"
      url: https://arxiv.org/pdf/quant-ph/0602096
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
    - title: "John Preskill, Quantum Error Correction, Physics 229 Lecture Notes, Chapter 7"
      url: https://www.preskill.caltech.edu/ph229/notes/chap7.pdf
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: "None; conjugation and the quotient action use finite-dimensional algebra only."
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Statement

For each $U\in\mathcal C_n$, conjugation induces an invertible $\mathbb F_2$-linear map $S_U:V_n\to V_n$ satisfying $\omega(S_Ua,S_Ub)=\omega(a,b)$ for all $a,b\in V_n$. Thus $S_U$ is symplectic. The assignment respects multiplication: $S_{UV}=S_U\circ S_V$ for all $U,V\in\mathcal C_n$.

## Facts & Assumptions

**Given:** $U$ is a unitary normalizer of the phase-aware Pauli group and $V_n=\mathcal P_n/Z_n$ is identified with its binary labels.

[F1] [[thm-qc-binary-pauli-quotient-isomorphism]]: the label quotient is a group isomorphism, with scalar center as kernel.

[F2] [[thm-qc-pauli-commutator-is-symplectic-pairing]]: the commutator sign of two Pauli operators is $(-1)^{\omega(a,b)}$.

[F3] [[def-qc-clifford-normalizer]]: $U$ and $U^*$ normalize $\mathcal P_n$.

## Proof

1.1 Conjugation sends each Pauli to a Pauli by [F3]. It fixes every scalar, so representatives in the same scalar coset have images in the same coset. Therefore it defines a map $S_U$ on $V_n$ under [F1]. [given, F1, F3, algebra]

2.1 For Pauli operators $P,Q$, $U(PQ)U^*=(UPU^*)(UQU^*)$, so the quotient map [F1] shows $S_U(a+b)=S_U(a)+S_U(b)$. An additive map between $\mathbb F_2$ vector spaces is linear because the only scalars are $0$ and $1$. Conjugation by $U^*$ is its inverse, so $S_U$ is invertible. Applying the same identity successively gives $S_{UV}=S_U\circ S_V$ for Clifford unitaries $U,V$. [given, F1, F3, step 1.1, algebra]

3.1 The commutator identity from [F2] remains the same after conjugating both sides by $U$, because conjugation preserves products and scalar signs. Applying [F2] to the image Paulis yields $(-1)^{\omega(S_Ua,S_Ub)}=(-1)^{\omega(a,b)}$. The map $r\mapsto(-1)^r$ is injective on $\mathbb F_2$, hence $\omega(S_Ua,S_Ub)=\omega(a,b)$. [given, F2, step 1.1, algebra] ∎
