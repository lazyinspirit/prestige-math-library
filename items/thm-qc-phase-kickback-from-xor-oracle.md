---
id: thm-qc-phase-kickback-from-xor-oracle
kind: theorem
title: "Phase kickback from an XOR oracle"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - def-qc-coherent-function-oracle
  - def-qc-register-and-computational-basis
  - def-qc-ordered-bitstring-encoding
  - thm-qc-bitstring-index-is-bijection
  - def-qc-tensor-register-and-permutation
  - def-qc-tensor-map
  - def-qc-pauli-matrices
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - thm-qc-reversible-xor-oracle-unitary
  - thm-qc-computational-basis-orthonormal
  - lem-qc-tensor-product-basis-and-dimension
justified_by: []
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
    - title: "John Preskill, Quantum Computation, Chapter 5: Classical and Quantum Circuits (updated July 2015)"
      url: "https://www.preskill.caltech.edu/ph219/chap5_15.pdf"
      locator: "§5.2.2, printed pp.14–19: the reversible XOR embedding; the phase consequence is proved locally."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "§2.4, printed p.17: phase queries obtained by placing the target in $|-\rangle$."
---

## Statement

Let $f:\{0,1\}^n\to\{0,1\}^m$ be total, let $s\in\{0,1\}^m$, and define the normalized character target
$$
|\chi_s\rangle=2^{-m/2}\sum_{y\in\{0,1\}^m}(-1)^{s\cdot y}|y\rangle,
$$
where $s\cdot y$ is the dot product modulo two. Then
$$
O_f(|x\rangle|\chi_s\rangle)=(-1)^{s\cdot f(x)}|x\rangle|\chi_s\rangle.
$$
For a one-bit output with $s=1$, $|\chi_s\rangle=|-\rangle=(|0\rangle-|1\rangle)/\sqrt2=H|1\rangle$. Thus the phase action is obtained with one invocation of the declared XOR oracle, with target preparation cost accounted separately.

## Facts & Assumptions

**Given:** The coherent XOR action and ordered bit-string basis. Prove the character-target identity.

[F1] [[def-qc-coherent-function-oracle]]: $O_f|x,y\rangle=|x,y\oplus f(x)\rangle$.

[F2] [[thm-qc-reversible-xor-oracle-unitary]]: The XOR oracle is a unitary involution for every total Boolean function.

[F3] [[def-qc-register-and-computational-basis]]: The $n$-qubit register is the ordered tensor product of $n$ copies of $Q_2$, with tuples in lexicographic order and the first wire most significant; the empty register is $\mathbb C$.

[F4] [[thm-qc-computational-basis-orthonormal]]: The ordered computational basis of each $Q_d$ register is an orthonormal basis for its declared inner product.

[F5] [[thm-qc-bitstring-index-is-bijection]]: For every $n\ge0$, the big-endian encoding is a bijection from the length-$n$ bit strings to the $2^n$ basis indices.

[F6] [[lem-qc-tensor-product-basis-and-dimension]]: Ordered product basis vectors form an orthonormal basis of the tensor register.

[F7] [[def-qc-one-qubit-gate-alphabet-and-rotations]]: The exact Hadamard matrix is $H:=\frac{X+Z}{\sqrt2}=\frac1{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$.

## Proof

1.1 By [F4]–[F6], the $2^m$ target basis vectors are orthonormal and the encoding lists each exactly once; hence $|\chi_s\rangle$ has squared norm $2^m2^{-m}=1$. Applying the oracle termwise gives $2^{-m/2}\sum_y(-1)^{s\cdot y}|x,y\oplus f(x)\rangle$. Set $z=y\oplus f(x)$. Then $y=z\oplus f(x)$ and $s\cdot y=s\cdot z\oplus s\cdot f(x)$, so the sum is $(-1)^{s\cdot f(x)}|x\rangle|\chi_s\rangle$. [given, F1, F3, F4, F5, F6, algebra]

2.1 By [F3]–[F6], the ordered input basis spans its register, so linearity gives the same phase action on every superposition $\sum_x\alpha_x|x\rangle$, with the target factor unchanged. When $m=1$ and $s=1$, multiplying the matrix in [F7] by $|1\rangle=(0,1)^T$ gives $H|1\rangle=(|0\rangle-|1\rangle)/\sqrt2=|-\rangle$. Also $H^*H=\tfrac12\begin{pmatrix}1&1\\1&-1\end{pmatrix}\begin{pmatrix}1&1\\1&-1\end{pmatrix}=I$, so this is a unitary target preparation. The unitary character of the oracle is supplied by [F2]. [step 1.1, F2, F3, F4, F5, F6, F7, algebra] ∎

