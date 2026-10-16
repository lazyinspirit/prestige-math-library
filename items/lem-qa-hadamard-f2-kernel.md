---
id: lem-qa-hadamard-f2-kernel
kind: lemma
title: Hadamard character sum on F_2^n
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 6
deps:
  - def-qa-binary-dot-product
  - def-qc-dirac-notation-conversion
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-ordered-bitstring-encoding
  - def-qc-register-and-computational-basis
  - def-qc-tensor-map
  - def-qc-tensor-register-and-permutation
justified_by: []
axiom_use: None; all arguments use finite sums, finite sets, and explicit finite-dimensional registers.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6 (2026-08-27)"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 2 §2.4, PDF pp.29-33: complete DJ and BV promises, amplitudes, query bounds."
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms (updated November 2020)"
      url: https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf
      locator: "§6.1, PDF pp.7-11 (printed pp.1-5): independent direct Deutsch, DJ and BV derivations and classical comparisons."
---

## Statement

For $n\ge1$ and $z\in\{0,1\}^n$, with the binary dot product of [[def-qa-binary-dot-product]],
$$
\sum_{x\in\{0,1\}^n}(-1)^{x\cdot z}=\begin{cases}2^n,&z=0^n,\\0,&z\ne0^n.\end{cases}
$$
Consequently, for every $x\in\{0,1\}^n$,
$$
H^{\otimes n}|x\rangle=2^{-n/2}\sum_{y\in\{0,1\}^n}(-1)^{x\cdot y}|y\rangle,
$$
where $H$ is the exact one-qubit gate of [[def-qc-one-qubit-gate-alphabet-and-rotations]] and tensor factors follow the ordered register convention of [[def-qc-tensor-register-and-permutation]].

## Facts & Assumptions

**Given:** An integer $n\ge1$ and binary strings $x,z\in\{0,1\}^n$.

[F1] [[def-qa-binary-dot-product]]: $x\cdot z$ is the parity $\bigoplus_{i<n}(x_i\land z_i)$, a bit.

[F2] [[def-qc-one-qubit-gate-alphabet-and-rotations]]: in the ordered basis $(|0\rangle,|1\rangle)$, $H=2^{-1/2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$.

[F3] [[def-qc-register-and-computational-basis]] and [[def-qc-ordered-bitstring-encoding]]: the $n$-qubit basis is the ordered product basis indexed by bit strings in lexicographic order, with the first wire most significant.

[F4] [[def-qc-tensor-register-and-permutation]]: the tensor register keeps its displayed factor order and has the product inner product on elementary tensors.

[F5] [[def-qc-tensor-map]]: $H^{\otimes n}$ sends an elementary tensor $v_0\otimes\cdots\otimes v_{n-1}$ to $Hv_0\otimes\cdots\otimes Hv_{n-1}$.

[F6] [[def-qc-dirac-notation-conversion]]: $|v\rangle$ denotes the vector $v$ in the finite-dimensional register.

## Proof

1.1 By [F1], $(-1)^{x\cdot z}=\prod_{i<n}(-1)^{x_i z_i}$, since the exponent parity is the sum of the coordinate products modulo two. Distributivity over the finite Cartesian product gives $\sum_{x\in\{0,1\}^n}(-1)^{x\cdot z}=\prod_{i<n}\left(1+(-1)^{z_i}\right).$ Each factor is $2$ when $z_i=0$ and $0$ when $z_i=1$. Thus the product is $2^n$ when all coordinates of $z$ vanish and is $0$ otherwise. [given, F1, algebra]

2.1 By [F2], on each factor $H|x_i\rangle=2^{-1/2}\sum_{y_i\in\{0,1\}}(-1)^{x_i y_i}|y_i\rangle$. Applying [F5] to the ordered product basis [F3] gives a coefficient $2^{-n/2}\prod_{i<n}(-1)^{x_i y_i}=2^{-n/2}(-1)^{x\cdot y}$ at $|y\rangle$, by [F1]. Summing these coefficients proves the tensor-Hadamard formula in the Statement. [given, F1, F2, F3, F4, F5, F6, algebra] ∎
