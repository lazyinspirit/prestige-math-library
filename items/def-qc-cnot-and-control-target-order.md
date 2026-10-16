---
id: def-qc-cnot-and-control-target-order
kind: definition
title: CNOT and Control-Target Order
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-controlled-unitary-access
  - def-qc-pauli-matrices
  - thm-qc-computational-basis-orthonormal
  - lem-qc-tensor-product-basis-and-dimension
  - def-qc-one-qubit-gate-alphabet-and-rotations
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
dependency_level: 7
---

## Definition

In the ordered two-qubit basis $|00\rangle,|01\rangle,|10\rangle,|11\rangle$, the controlled-NOT with first wire control and second wire target is

$$\operatorname{CNOT}_{1\to2}|a,t\rangle=|a,t\mathbin{\oplus}a\rangle,\qquad a,t\in\{0,1\}.$$

Equivalently, it is the control block $C(X)=\operatorname{diag}(I,X)$ of [[def-qc-controlled-unitary-access]], where $X$ is the Pauli bit-flip matrix. The wire order is part of the definition.

## Facts & Assumptions

**Given:** The two ordered qubit factors, their computational basis, and $a,t\in\{0,1\}$.

[L1] [[def-qc-controlled-unitary-access]] defines $C(X)$ to fix the control-zero block and apply $X$ in the control-one block. Its carrier is present in this batch.

[L2] [[def-qc-pauli-matrices]] defines the exact Pauli-$X$ matrix in the ordered computational basis. Its current draft definition body was read; its item is now present in the QC07 manifest and page; the page remains draft.

[L3] [[thm-qc-computational-basis-orthonormal]]: each qubit computational basis is orthonormal.

[L4] [[lem-qc-tensor-product-basis-and-dimension]]: elementary tensors of ordered orthonormal factor bases form an orthonormal basis of the ordered tensor register.

[L5] [[def-qc-one-qubit-gate-alphabet-and-rotations]] verifies that the Pauli-$X$ matrix is unitary; this result is in the dependency closure of [L1].

## Verification

1.1 By [L5], $X$ is unitary, so [L1] defines its controlled block. For control bit $a=0$, the first block of $C(X)$ is the identity, so $|0,0\rangle\mapsto|0,0\rangle$ and $|0,1\rangle\mapsto|0,1\rangle$. [given, L1, L2, L5]

1.2 For control bit $a=1$, [L2] flips the target, so $|1,0\rangle\mapsto|1,1\rangle$ and $|1,1\rangle\mapsto|1,0\rangle$. These are exactly $|a,t\oplus a\rangle$ for the two remaining basis inputs. [given, L1, L2, algebra]

2.1 The columns in the stated ordered basis are therefore $e_{00},e_{01},e_{11},e_{10}$, giving $\operatorname{CNOT}=\begin{pmatrix}1&0&0&0\\0&1&0&0\\0&0&0&1\\0&0&1&0\end{pmatrix}$. By [L3] and [L4], this is a permutation of an orthonormal basis, so it preserves the sum of squared coordinate moduli and thus every vector norm. The permutation is its own inverse, so the operator is invertible and hence unitary. The displayed action fixes the stated control-target order. [step 1.1, step 1.2, L3, L4, algebra] ∎
