---
id: def-qc-controlled-unitary-access
kind: definition
title: Controlled Unitary Access
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-tensor-register-and-permutation
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: https://arxiv.org/pdf/1907.09415
    - title: "John Preskill, Quantum Computation, Chapter 6: Quantum Algorithms"
      url: https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf
dependency_level: 6
---

## Definition

Let $C=\mathbb C^2$ be a control qubit with ordered orthonormal basis $|0\rangle,|1\rangle$, let $H$ be a finite-dimensional complex inner-product space, and let $U:H\to H$ be unitary. On the control-first register $C\otimes H$, define

$$C(U):=\begin{pmatrix}I_H&0\\0&U\end{pmatrix}.$$

Thus $C(U)(|0\rangle\otimes v)=|0\rangle\otimes v$ and $C(U)(|1\rangle\otimes v)=|1\rangle\otimes Uv$. **Controlled access** means that the chosen operation model explicitly grants a call to this block operator. An ordinary call to a black-box $U$ does not silently grant a controlled call, and no query or gate cost is assigned unless the model states it.

## Facts & Assumptions

**Given:** The finite target space $H$, the ordered control-first tensor product, and a unitary $U$ on $H$.

[L1] [[def-qc-tensor-register-and-permutation]] defines the ordered factors and product inner product after an ordered orthonormal basis is specified for each factor. Its proof establishes that the pairing is independent of those basis choices.

[L2] [[def-qc-one-qubit-gate-alphabet-and-rotations]] fixes the ordered qubit computational basis and exact one-qubit matrices. Its current draft definition body was read; its item is now present in the QC07 manifest and page; the page remains draft and no acceptance is claimed.

[F1] [[def-linear-isometry-and-orthogonal-or-unitary-operator]]: a unitary operator on a finite-dimensional complex inner-product space is an invertible linear isometry, so it preserves every vector norm and has an inverse.

[F2] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]: every finite-dimensional inner-product space has an ordered orthonormal basis.

## Verification

1.1 Choose an ordered orthonormal basis of $H$ using [F2]. Together with the control basis in [L2], it supplies the factor bases required by [L1]; the pairing is independent of this choice by [L1]. Write an arbitrary vector of $C\otimes H$ as $|0\rangle\otimes v_0+|1\rangle\otimes v_1$. The orthonormal control basis and the product inner product from [L1] give squared norm $\|v_0\|^2+\|v_1\|^2$. [given, L1, L2, F2, choose]

2.1 The block operator sends that vector to $|0\rangle\otimes v_0+|1\rangle\otimes Uv_1$. By [F1], $\|Uv_1\|=\|v_1\|$, so the squared norm is unchanged. [step 1.1, F1, algebra]

3.1 The block matrix $\operatorname{diag}(I_H,U^{-1})$ is a two-sided inverse for $C(U)$, so $C(U)$ is invertible as well as norm-preserving. By the unitary definition in [F1], $C(U)$ is unitary. [given, F1, algebra] ∎
