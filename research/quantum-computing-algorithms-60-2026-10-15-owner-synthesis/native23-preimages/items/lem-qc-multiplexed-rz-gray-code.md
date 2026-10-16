---
id: lem-qc-multiplexed-rz-gray-code
kind: lemma
title: "Gray-code synthesis of a multiplexed Z rotation"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 9
deps:
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - thm-qc-axis-rotation-pauli-formula
  - def-qc-pauli-matrices
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - def-qc-cnot-and-control-target-order
  - def-qc-circuit-syntax-and-register-order
  - def-qc-circuit-denotational-semantics
  - def-qc-elementary-circuit-resources
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Vivek V. Shende, Stephen S. Bullock, and Igor L. Markov, Synthesis of Quantum Logic Circuits, arXiv:quant-ph/0406176v5"
      url: "https://arxiv.org/pdf/quant-ph/0406176"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

For $k\ge0$ control bits $x\in\{0,1\}^k$ and real angles $\theta_x$, define
$$M_z=\sum_{x\in\{0,1\}^k}|x\rangle\langle x|\otimes R_z(\theta_x),\qquad R_z(t):=\operatorname{diag}(e^{-it/2},e^{it/2}).$$
If $k>0$, this multiplexed rotation has an exact circuit with $2^k$ one-qubit $R_z$ gates and $2^k$ CNOTs; for $k=0$ it is one $R_z$ gate and no CNOT. The CNOT count includes the final parity-restoring CNOT.

## Facts & Assumptions

**Given:** Ordered control and target wires, the exact $R_z$ convention above, and access to arbitrary one-qubit rotations and ordered CNOT gates.

[F1] [[def-qc-one-qubit-gate-alphabet-and-rotations]] defines $R_z(t)=R_{(0,0,1)}(t)$ as an exact one-qubit rotation.

[F2] [[thm-qc-axis-rotation-pauli-formula]] gives $R_{\mathbf n}(t)=\cos(t/2)I-i\sin(t/2)(\mathbf n\cdot\boldsymbol\sigma)$.

[F3] [[def-qc-pauli-matrices]] gives $Z=\operatorname{diag}(1,-1)$ and $X=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ in the ordered qubit basis.

[F4] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]] gives $e^{it}=\cos t+i\sin t$ for real $t$.

[F5] [[def-qc-cnot-and-control-target-order]] maps a control-target basis pair $|a,b\rangle$ to $|a,b\oplus a\rangle$; thus on a fixed control bit the target action is $X^a$.

[F6] [[def-qc-circuit-syntax-and-register-order]] fixes ordered wire supports and chronological gate lists; [[def-qc-circuit-denotational-semantics]] assigns their exact chronological matrix product.

[F7] [[def-qc-elementary-circuit-resources]] counts each declared gate occurrence once.

## Proof

1.1 If $k=0$, take the one-element mask list containing the empty string. If $k>0$, construct the reflected Gray list recursively by $G_1=(0,1)$ and $G_k=(0G_{k-1},1\operatorname{rev}(G_{k-1}))$ for $k\ge2$. Induction shows that each $k$-bit string occurs once, consecutive strings differ in one coordinate, and the last string differs from the first in one coordinate; hence for $k>0$ the cycle has $2^k$ single-coordinate transitions. For its masks $p_0,\ldots,p_{2^k-1}$ set $H_{xj}=(-1)^{p_j\cdot x}$ and $\beta_j=2^{-k}\sum_yH_{yj}\theta_y$. Then
$$\sum_jH_{xj}\beta_j=2^{-k}\sum_y\theta_y\sum_p(-1)^{p\cdot(x\oplus y)}=\theta_x,$$
because the inner sum factors as $\prod_{r=1}^k(1+(-1)^{x_r\oplus y_r})$, equal to $2^k$ for $x=y$ and $0$ otherwise. [given, choose, induction, algebra]

2.1 Assume $k>0$. Apply $R_z(\beta_0)$ and follow the cyclic Gray list, placing one CNOT on the coordinate that changes between consecutive masks and one $R_z(\beta_j)$ at each mask, including the CNOT that returns from the last mask to the first. There are exactly $2^k$ of each. On a fixed control word $x$, the accumulated target bit flip before the $j$th rotation is $p_j\cdot x$ modulo two by [F5]. By [F2]–[F4], $R_z(t)=\operatorname{diag}(e^{-it/2},e^{it/2})$; direct multiplication with [F3] gives $XR_z(t)X=R_z(-t)$. Conjugating the target rotation by that parity network therefore gives $R_z((-1)^{p_j\cdot x}\beta_j)$. The final CNOT restores the parity network, so the full branch operator is the product of these rotations. [F2, F3, F4, F5, F6, F7, construct, algebra]

3.1 Rotations about the same axis satisfy $R_z(a)R_z(b)=R_z(a+b)$ by multiplying their diagonal matrices. Thus on branch $x$ the target operation is $R_z(\sum_jH_{xj}\beta_j)=R_z(\theta_x)$ by step 1.1. This proves the exact block action on every computational basis input and hence, by linearity, on every state. When $k=0$, the definition is the single gate $R_z(\theta_0)$. [step 1.1, step 2.1, F1, F2, algebra] ∎
