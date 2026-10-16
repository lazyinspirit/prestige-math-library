---
id: def-qc-controlled-phase-rotation
kind: definition
title: Controlled Phase Rotation
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-controlled-unitary-access
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - thm-qc-axis-rotation-pauli-formula
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-complex-exponential-addition-and-real-extension
  - thm-qc-computational-basis-orthonormal
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: https://arxiv.org/pdf/1907.09415
    - title: "John Preskill, Quantum Computation, Chapter 6: Quantum Algorithms"
      url: https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf
dependency_level: 7
---

## Definition

For a real angle $\theta$, define the one-qubit phase matrix $P_\theta=\operatorname{diag}(1,e^{i\theta})$. In control-first order define

$$CP(\theta):=C(P_\theta)=\operatorname{diag}(1,1,1,e^{i\theta})$$

in the ordered basis $|00\rangle,|01\rangle,|10\rangle,|11\rangle$. This is the exact controlled phase; no circuit cost or controlled access to an arbitrary black-box unitary is implied.

## Facts & Assumptions

**Given:** A real $\theta$, an ordered control-target qubit pair, and the exact phase convention of the Definition.

[L1] [[def-qc-controlled-unitary-access]] defines the control-first block action $C(U)=\operatorname{diag}(I,U)$. Its carrier is present in this batch.

[L2] [[def-qc-one-qubit-gate-alphabet-and-rotations]] defines the exact $R_z(\theta)$ exponential and computational basis. Its current draft definition body was read; its item is now present in the QC07 manifest and page; the page remains draft.

[L3] [[thm-qc-axis-rotation-pauli-formula]] proves $R_z(\theta)=\operatorname{diag}(e^{-i\theta/2},e^{i\theta/2})$ by the convergent Pauli exponential series. Its current draft proof was read; its item is now present in the QC07 manifest and page; the page remains draft.

[L4] [[thm-qc-computational-basis-orthonormal]] proves the ordered computational basis of $Q_2$ is orthonormal; this supplier is in the dependency closure through [L3].

[F1] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]: for real $\theta$, $|e^{i\theta}|=1$ and $e^{i\pi}=-1$.

[F2] [[thm-complex-exponential-addition-and-real-extension]]: $\exp(z+w)=\exp z\exp w$ for complex $z,w$.

## Verification

1.1 The target computational basis is orthonormal by [L4], and [F1] gives modulus one for both diagonal entries of $P_\theta$. Thus $P_\theta$ is an invertible isometry and hence unitary, so [L1] applies to its controlled block. The first control block applies the identity, so $|00\rangle$ and $|01\rangle$ are fixed. In the second block, $P_\theta$ fixes $|10\rangle$ and sends $|11\rangle$ to $e^{i\theta}|11\rangle$. These four actions give the diagonal matrix in the Definition. [given, L1, L2, L4, F1, algebra]

2.1 Every diagonal entry of $CP(\theta)$ has modulus one by [F1]; its conjugate transpose is therefore its inverse, so it is unitary. [step 1.1, F1, algebra]

3.1 By [L3], $R_z(\theta)=\operatorname{diag}(e^{-i\theta/2},e^{i\theta/2})$. By [F2], multiplying it by $e^{i\theta/2}$ gives $P_\theta=\operatorname{diag}(1,e^{i\theta})$. Therefore $CP(\theta)=\operatorname{diag}(I,e^{i\theta/2}R_z(\theta))$, which is the block phase $\operatorname{diag}(I,e^{i\theta/2}I)$ applied after $C(R_z(\theta))$. Dropping that control phase would change the defined operation. [L1, L3, F2, algebra] ∎
