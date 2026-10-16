---
id: thm-qc-trace-norm-unitary-invariance-and-positive-formula
kind: theorem
title: Trace Norm Unitary Invariance And Positive Formula
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps:
  - def-linear-map
  - def-qc-trace-norm
  - def-singular-values-of-an-endomorphism
  - prop-singular-values-are-well-defined
  - thm-singular-value-decomposition
  - def-non-negative-and-positive-operator
  - thm-non-negative-operator-characterisations
  - thm-non-negative-square-root-exists-and-is-unique
  - def-trace-of-an-endomorphism
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - thm-finite-dimensional-isometry-characterisations
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - thm-adjoint-exists-and-is-unique-in-finite-dimension
  - def-real-and-complex-inner-product-space
justified_by: []
proof_strategy: direct
axiom_use: None; only finite-dimensional orthonormal bases and spectral facts are used.
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
    - title: John Watrous, The Theory of Quantum Information (2018 author-hosted draft), Chapter 1, §1.1.3
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6 (2026-08-27), Appendices A.5 and A.7"
      url: https://arxiv.org/pdf/1907.09415v6
---

## Statement

Let $A:H\to K$ be a linear map ([[def-linear-map]]) between finite-dimensional complex
inner-product spaces. If $U:K\to K$ and $V:H\to H$ are unitary, then
$\|UAV\|_1=\|A\|_1$. If $P:H\to H$ is non-negative (positive semidefinite),
then

$$\|P\|_1=\operatorname{tr}_H(P).$$

Here non-negative means self-adjoint with
$\langle Pv,v\rangle\ge0$ for all $v$, as in
[[def-non-negative-and-positive-operator]].

## Facts & Assumptions
**Given:** The finite-dimensional spaces and maps in the Statement.

[F1] An SVD writes $Az=\sum_{i<r}s_i\langle z,e_i\rangle f_i$, and the trace
norm is the sum of those singular values; singular values are the eigenvalues
of $\sqrt{A^*A}$ and are well-defined
([[thm-singular-value-decomposition]], [[def-qc-trace-norm]],
[[def-singular-values-of-an-endomorphism]],
[[prop-singular-values-are-well-defined]]).

[F2] A unitary endomorphism preserves orthonormal bases and has
$V^{-1}=V^*$ ([[def-linear-isometry-and-orthogonal-or-unitary-operator]],
[[thm-finite-dimensional-isometry-characterisations]]).

[F3] The adjoint identity is
$\langle Tv,w\rangle=\langle v,T^*w\rangle$, and finite-dimensional
adjoints exist uniquely ([[def-adjoint-of-a-linear-map-between-inner-product-spaces]],
[[thm-adjoint-exists-and-is-unique-in-finite-dimension]]).

[F4] Non-negative means self-adjoint with nonnegative quadratic form; such an
endomorphism has an orthonormal eigenbasis with nonnegative real eigenvalues
([[def-non-negative-and-positive-operator]],
[[thm-non-negative-operator-characterisations]]).

[F5] A non-negative endomorphism has a unique non-negative square root
([[thm-non-negative-square-root-exists-and-is-unique]]).

[F6] The trace of an endomorphism is the sum of diagonal entries in any basis,
and is $0$ on the zero space ([[def-trace-of-an-endomorphism]]).

## Proof

1.1 Choose an SVD of $A$ as in [F1], with domain basis $(e_j)$ and codomain basis $(f_i)$. By [F2], $(V^*e_j)$ and $(Uf_i)$ are orthonormal bases. For every $z\in H$, [F3] gives $$UAVz=\sum_{j<r}s_j\langle Vz,e_j\rangle Uf_j =\sum_{j<r}s_j\langle z,V^*e_j\rangle Uf_j.$$ This is an SVD of $UAV$ with the same positive singular values, so [F1] gives $\|UAV\|_1=\|A\|_1$. [F1, F2, F3, choose, algebra]

1.2 Let $P$ be non-negative. By [F4], choose an orthonormal eigenbasis $(e_j)$ with $Pe_j=\lambda_je_j$ and $\lambda_j\ge0$. Since $P^*=P$, $P^*P=P^2$. The operator $P$ is a non-negative square root of $P^2$, so uniqueness [F5] gives $\sqrt{P^*P}=P$. Its singular values are therefore the $\lambda_j$; by [F1] the trace norm is $\sum_j\lambda_j$. [F1, F4, F5, choose, algebra]

2.1 Computing the trace in the same basis by [F6] gives $\operatorname{tr}_H(P)=\sum_j\lambda_j=\|P\|_1$. If $H=0$, both sums are empty and equal $0$. This proves both assertions. [F1, F6, step 1.2] ∎
