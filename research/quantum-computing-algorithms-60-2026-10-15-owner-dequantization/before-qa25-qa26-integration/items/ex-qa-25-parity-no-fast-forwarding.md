---
id: ex-qa-25-parity-no-fast-forwarding
kind: example
title: Two-bit parity path and sparse normalization
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - lem-qa-25-parity-path-transfer
  - thm-qa-25-sparse-no-fast-forwarding-lower-bound
  - thm-qa-25-sparse-hamiltonian-block-encoding-correctness
proof_strategy: direct
axiom_use: "None; all four matrices are finite and the path evolution is explicit."
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 28 §28.1"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
provenance:
  statement: ai-altered
  proof: ai-generated
---

## Example

For $n=2$, both path weights are $1/\sqrt2$. Starting from $|0,0\rangle$, the four input strings give
$$\begin{array}{c|c|c} x&\text{weighted path}&\operatorname{parity}(x)\\\hline 00&|0,0\rangle\;-\;|1,0\rangle\;-\;|2,0\rangle&0\\ 01&|0,0\rangle\;-\;|1,0\rangle\;-\;|2,1\rangle&1\\ 10&|0,0\rangle\;-\;|1,1\rangle\;-\;|2,1\rangle&1\\ 11&|0,0\rangle\;-\;|1,1\rangle\;-\;|2,0\rangle&0 \end{array}$$
Each displayed edge has matrix entry $1/\sqrt2$. The sparse normalization of [[thm-qa-25-sparse-hamiltonian-block-encoding-correctness]] is $\alpha_{\rm sp}=2/\sqrt2=\sqrt2$, and at time $t=\pi$ the endpoint state is $-|2,\operatorname{parity}(x)\rangle$.

## Facts & Assumptions

**Given:** The path family of [[lem-qa-25-parity-path-transfer]] with $n=2$.

[F1] [[lem-qa-25-parity-path-transfer]]: the path weights are $w_i=\sqrt{i(n+1-i)}/n$, and the exact time-$\pi n/2$ evolution sends $|0,0\rangle$ to $(-i)^n|n,\operatorname{parity}(x)\rangle$.

[F2] [[thm-qa-25-sparse-hamiltonian-block-encoding-correctness]]: a $d_H$-row-sparse Hermitian matrix with maximum entry magnitude $h_{\max}>0$ has sparse normalization $d_Hh_{\max}$.

[F3] [[thm-qa-25-sparse-no-fast-forwarding-lower-bound]]: the full path family has at-most-two sparsity, constant sparse normalization, and an $\Omega(n)$ sparse-oracle simulation lower bound at time $\pi n/2$.

## Proof

**Given:** As in Facts & Assumptions.

1.1 Substituting $n=2$ gives $w_1=w_2=\sqrt2/2$. For $b\in\{0,1\}$, edge 1 joins $|0,b\rangle$ to $|1,b\oplus x_1\rangle$, and edge 2 joins $|1,b\rangle$ to $|2,b\oplus x_2\rangle$. Starting with $b=0$, these two edges produce the four paths in the table; each endpoint bit is $x_1\oplus x_2$. Each internal path vertex has degree two and each endpoint degree one. [F1, given, algebra]

2.1 Therefore $d_H=2$ and $h_{\max}=1/\sqrt2$, so [F2] gives $\alpha_{\rm sp}=d_Hh_{\max}=\sqrt2$. This is the $n=2$ instance of the constant-normalization family in [F3]. [F2, F3, step 1.1, algebra]

3.1 In the parity-free basis, the path matrix is $H_0=\frac1{\sqrt2}\begin{pmatrix}0&1&0\\1&0&1\\0&1&0\end{pmatrix},\qquad H_0^2=\frac12\begin{pmatrix}1&0&1\\0&2&0\\1&0&1\end{pmatrix}.$ Its eigenvalues are $1,0,-1$, so spectral functional calculus gives $e^{-i\pi H_0}=I-2H_0^2$, which sends $|0\rangle$ to $-|2\rangle$. The prefix-parity basis permutation of [F1] restores the endpoint bit $x_1\oplus x_2$; equivalently, [F1] gives $(-i)^2=-1$ times the same endpoint. [F1, step 1.1, algebra] ∎
