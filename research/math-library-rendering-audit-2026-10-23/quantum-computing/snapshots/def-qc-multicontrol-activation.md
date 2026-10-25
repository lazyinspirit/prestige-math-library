---
id: def-qc-multicontrol-activation
kind: definition
title: Multi-Control Activation Pattern
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-controlled-unitary-access
  - def-qc-pauli-matrices
  - def-qc-tensor-map
  - def-qc-tensor-register-and-permutation
  - def-linear-isometry-and-orthogonal-or-unitary-operator
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
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "John Preskill, Quantum Computation, Chapter 6: Quantum Algorithms"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
dependency_level: 7
---

## Definition

Let $m\ge1$, let the ordered control register be $Q_2^{\otimes m}$ with computational basis $|x\rangle$ indexed by $x=(x_1,\ldots,x_m)\in\{0,1\}^m$, and let $T$ be a finite-dimensional target register disjoint from the controls. Let $U:T\to T$ be unitary, and let $s=(s_1,\ldots,s_m)\in\{0,1\}^m$ be the activation string. Define the multi-controlled operation by

$$C_s(U)(|x\rangle\otimes v)=\begin{cases}|s\rangle\otimes Uv,&x=s,\\|x\rangle\otimes v,&x\ne s.\end{cases}$$

Extend this rule linearly. The all-one control is $C_{1^m}(U)$. For negative controls in $s$, let $N=\{j\in\{1,\ldots,m\}:s_j=0\}$ and let $X_N$ be the tensor product of Pauli $X$ on controls in $N$ and identity on the other controls. Then

$$C_s(U)=(X_N\otimes I_T)C_{1^m}(U)(X_N\otimes I_T),$$

with the rightmost $X_N$ applied first and the leftmost $X_N$ restoring the original control string. The matrix definition does not itself grant an implementation or assign a cost to the operation.

## Facts & Assumptions

**Given:** The ordered control basis, $m\ge1$, a finite-dimensional target register $T$, an activation string $s\in\{0,1\}^m$, and a unitary $U:T\to T$.

[L1] [[def-qc-controlled-unitary-access]] fixes the positive-control block convention $C(U)=\operatorname{diag}(I,U)$ and treats controlled access as an explicit model capability. Its carrier is present in this batch.

[L2] [[def-qc-pauli-matrices]] defines the exact Pauli-$X$ matrix. Its current draft definition body was read; the QC07 page carrier exists but remains draft.

[L3] [[def-qc-tensor-map]] defines the tensor map on elementary tensors and its linear extension. Its current draft proof was read and supplies the simultaneous control-flip/target-identity map.

[L4] [[def-qc-tensor-register-and-permutation]] defines the ordered tensor register, computational product basis, and product pairing. Its current draft proof was read.

[F1] [[def-linear-isometry-and-orthogonal-or-unitary-operator]]: a unitary endomorphism is an invertible linear norm-preserving map.

## Verification

1.1 By [L4], the vectors $|x\rangle\otimes v$ over the computational control basis span the joint register. The cases in the Definition therefore determine a unique linear operator and give the activation behavior on every superposition. [given, L4, construct]

2.1 Let $n=(n_1,\ldots,n_m)\in\{0,1\}^m$ have $n_j=1$ exactly when $s_j=0$. By [L2] and [L4], $X_N\otimes I_T$ sends $|x\rangle\otimes v$ to $|x\oplus n\rangle\otimes v$. The middle positive-control block activates exactly when $x\oplus n=1^m$, which coordinatewise is equivalent to $x=s$. The leftmost $X_N$ restores the original control string because $n\oplus n=0$. Thus the conjugated operation has exactly the defining action of $C_s(U)$, including $N=\varnothing$ and $N=\{1,\ldots,m\}$. [given, L1, L2, L3, L4, step 1.1, algebra]

3.1 Write any joint vector uniquely as $v=\sum_{x\in\{0,1\}^m}|x\rangle\otimes v_x$ using the ordered product basis in [L4]. The Definition maps each block to $W_xv_x$, where $W_s=U$ and $W_x=I_T$ otherwise. Each $W_x$ is an invertible isometry by [F1], so orthogonality of the control basis and the product pairing give $\|C_s(U)v\|^2=\sum_x\|W_xv_x\|^2=\sum_x\|v_x\|^2=\|v\|^2$. The block map with $W_s=U^{-1}$ and other blocks identity is a two-sided inverse. Hence $C_s(U)$ is an invertible isometry, therefore unitary by [F1]. [given, L4, F1, algebra] ∎
