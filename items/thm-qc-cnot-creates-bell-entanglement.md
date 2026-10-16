---
id: thm-qc-cnot-creates-bell-entanglement
kind: theorem
title: Hadamard Followed by CNOT Creates Bell Entanglement from |00>
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-cnot-and-control-target-order
  - def-qc-pure-state-entanglement
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-tensor-register-and-permutation
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
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "John Preskill, Quantum Computation, Chapter 2: Foundations I: States and Ensembles"
      url: "https://www.preskill.caltech.edu/ph219/chap2_15.pdf"
dependency_level: 8
---

## Statement

On two qubit registers with the first wire as control,

$$\operatorname{CNOT}(|+\rangle\otimes|0\rangle)=\frac{|00\rangle+|11\rangle}{\sqrt2},\qquad |+\rangle=\frac{|0\rangle+|1\rangle}{\sqrt2}.$$

The output is an entangled pure state across the first/second-qubit cut.

## Facts & Assumptions

**Given:** The ordered qubit basis, the exact Hadamard matrix, and the CNOT and pure-state entanglement definitions.

[L1] [[def-qc-cnot-and-control-target-order]] gives $\operatorname{CNOT}|a,t\rangle=|a,t\oplus a\rangle$ with the first factor controlling. Its carrier is present in this batch.

[L2] [[def-qc-pure-state-entanglement]] defines entanglement as not being a product ray. Its carrier is present in this batch.

[L3] [[def-qc-one-qubit-gate-alphabet-and-rotations]] defines the exact Hadamard matrix. Its current draft definition body was read; its item is now present in the QC07 manifest and page; the page remains draft.

[L4] [[def-qc-tensor-register-and-permutation]] defines the ordered product basis and product pairing. Its current draft proof was read.

[L5] [[thm-qc-computational-basis-orthonormal]] proves the computational basis is orthonormal. Its current draft proof was read.

## Proof

1.1 The first column of the Hadamard matrix in [L3] gives $H|0\rangle=(|0\rangle+|1\rangle)/\sqrt2=|+\rangle$. Thus before CNOT the state is $(|00\rangle+|10\rangle)/\sqrt2$ in the product order of [L4] and [L5]. [given, L3, L4, L5, algebra]

2.1 By [L1], CNOT fixes $|00\rangle$ and sends $|10\rangle$ to $|11\rangle$. Linearity therefore gives the output $(|00\rangle+|11\rangle)/\sqrt2$ in the Statement. [step 1.1, L1, algebra]

3.1 In the ordered product basis, the coefficient matrix of the output is $\frac1{\sqrt2}\begin{pmatrix}1&0\\0&1\end{pmatrix}$, whose determinant is $1/2\ne0$ and whose rank is two. If a nonzero product vector is $a\otimes b$, its coefficient in row $i$, column $j$ is $a_i b_j$, so its coefficient matrix is $ab^{\mathsf T}$. Since $a,b\ne0$, at least one column is nonzero and every column is a scalar multiple of $a$; its rank is exactly one. A nonzero scalar multiple of a product vector has the same rank-one property, so the output ray is not a product ray. By [L2] it is entangled. [step 2.1, L2, L4, L5, algebra] ∎
