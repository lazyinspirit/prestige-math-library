---
id: lem-qc-tqc-special-unitary-connected
kind: lemma
title: Special unitary groups are connected
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-kernel-and-fibres-of-complex-exponential
  - thm-complex-exponential-is-entire-with-derivative-itself
dependency_level: 0
axiom_use: None; the proof uses a finite orthonormal eigenbasis and scalar paths.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: §IV.C, PDF pp. 58–60; compact Lie group context
    - title: "Michael H. Freedman, Michael J. Larsen, and Zhenghan Wang, A Modular Functor Which Is Universal for Quantum Computation"
      url: https://arxiv.org/pdf/quant-ph/0001108
      locator: §4, Theorem 4.1 and complete proof, printed pp. 17–21
---

## Statement

For every integer $n\ge1$, the matrix group
$$SU(n)=\{A\in M_n(\mathbb C):A^*A=I,\ \det A=1\}$$
is path connected.

## Facts & Assumptions

**Given:** An integer $n\ge1$ and a matrix $A\in SU(n)$.

[F1] A normal complex matrix has an orthonormal eigenbasis.
[[thm-complex-spectral-theorem-for-normal-endomorphisms]]

[F2] For real $\alpha$, $|e^{i\alpha}|=1$, and
$e^{i\alpha}=e^{i\beta}$ exactly when $\alpha-\beta\in2\pi\mathbb Z$.
[[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]
[[thm-kernel-and-fibres-of-complex-exponential]]

[F3] The complex exponential is entire, hence continuous.
[[thm-complex-exponential-is-entire-with-derivative-itself]]

## Proof

1.1 The matrix $A$ is unitary and therefore normal. By [F1], choose a unitary matrix $Q$ and real phases $\alpha_1,\ldots,\alpha_n$ such that $A=Q\operatorname{diag}(e^{i\alpha_1},\ldots,e^{i\alpha_n})Q^*$. Since $\det A=1$, [F2] gives $\sum_j\alpha_j=2\pi k$ for some integer $k$. Replace $\alpha_1$ by $\alpha_1-2\pi k$; the eigenvalue is unchanged and the sum of phases is now zero. This uses only finitely many eigenvalues. [given, F1, F2, choose, algebra]

2.1 Define $A(t)=Q\operatorname{diag}(e^{it\alpha_1},\ldots,e^{it\alpha_n})Q^*$ for $0\le t\le1$. Each $A(t)$ is unitary by [F2], and $\det A(t)=e^{it\sum_j\alpha_j}=1$, so $A(t)\in SU(n)$. The path is continuous by [F3], $A(0)=I$, and $A(1)=A$. Thus every element is joined to the identity, proving path connectedness. [given, F2, F3, step 1.1, algebra] ∎
