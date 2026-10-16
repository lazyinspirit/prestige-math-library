---
id: ex-qa-21-cancelling-normalization-padding
kind: example
title: Cancelling identity padding fixes the LCU scale
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - def-qa-21-truncated-taylor-lcu
  - def-qc-pauli-matrices
  - def-natural-logarithm
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 28 §28.3
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Eqs. (28.5)–(28.14), printed pp.141–142: the Taylor LCU and its coefficient normalization."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §9.3.1"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Eqs. (9.4)–(9.5), printed pp.75–76: the Taylor product-term LCU; the cancelling padding calculation is local."
---

## Example

For the truncated Taylor LCU in [[def-qa-21-truncated-taylor-lcu]], suppose
its listed coefficient norm is
$$s_K=\sum_{k=0}^K\frac{(\Lambda|h|)^k}{k!}\le2.$$
Set $q=(2-s_K)/2$ and append two distinct identity entries with coefficients
$+q$ and $-q$. The represented polynomial is unchanged while its listed
coefficient norm becomes exactly $2$.

For example, take the one-term Hamiltonian $H=1\cdot Z$, $h=\log 2$, and
$K=0$. Then
$M_0=I$, $s_0=1$, and the padded list $(1I,\tfrac12I,-\tfrac12I)$ still sums
to $I$ and has absolute coefficient sum $2$.

## Facts & Assumptions

**Given:** A truncated Taylor LCU whose listed coefficient norm satisfies $s_K\le2$.

[F1] [[def-qa-21-truncated-taylor-lcu]]: the $k=0$ term is the empty tuple with coefficient $1$ and unitary $I$, and the listed coefficient norm is $s_K(h)=\sum_{k=0}^K(\Lambda|h|)^k/k!$.

[F2] [[def-qc-pauli-matrices]]: in the ordered qubit basis, $Z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$.

[F3] [[def-natural-logarithm]]: for $x>0$, $\log x$ is the real number whose exponential is $x$.

## Verification

**Given:** As in Facts & Assumptions.

1.1 The hypothesis $s_K\le2$ gives $q=(2-s_K)/2\ge0$. [given, F1, algebra]

2.1 The two appended terms add $qI-qI=0$ to the matrix and add $|q|+|-q|=2q=2-s_K$ to the coefficient norm. The new norm is therefore $s_K+(2-s_K)=2$, including $q=0$. [given, F1, step 1.1, algebra]

3.1 In the stated example, [F2] gives $Z^\dagger=Z$ and $Z^\dagger Z=I$, so $H=1\cdot Z$ is a valid one-term Hamiltonian with $\Lambda=1$; [F3] makes $h=\log2$ a real parameter. Since $K=0$, [F1] gives $M_0=I$ and $s_0=1$. Hence $q=1/2$; the three coefficients sum to $1$ and their absolute values sum to $1+1/2+1/2=2$. [given, F1, F2, F3, step 2.1, algebra] ∎
