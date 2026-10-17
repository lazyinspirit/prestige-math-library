---
id: def-qsm-finite-gibbs-purification
kind: definition
title: Finite Gibbs density and its canonical purification
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps:
  - lem-qsm-matrix-state-calculus
  - def-qc-density-operator
  - def-qc-partial-trace
  - thm-qc-partial-trace-characterization-and-basis-independence
dependency_roles:
  lem-qsm-matrix-state-calculus: mathematical-premise
  def-qc-density-operator: mathematical-premise
  def-qc-partial-trace: mathematical-premise
  thm-qc-partial-trace-characterization-and-basis-independence: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, Chapter 2, §§2.1–2.3, author-hosted manuscript
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf
    - title: Mehran Kardar, Statistical Mechanics I, MIT OpenCourseWare, Lecture 21, Quantum Microstates and Quantum Macrostates
      url: https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/4f8defd6fcba707a0c691dd8957a43e3_MIT8_333F13_Lec21.pdf
---

## Statement

Let $\mathcal H$ be a nonzero finite-dimensional complex Hilbert space of dimension $d\geq1$, $K=K^*$ an endomorphism, and $\beta>0$. Define $Z_\beta=\operatorname{Tr}(e^{-\beta K})$ and $\rho_\beta=Z_\beta^{-1}e^{-\beta K}$. Given an ordered orthonormal basis $(e_j)_{j=1}^d$ and its identified copy in a reference space $\mathcal H_R$, define
$
|\Phi_d\rangle=d^{-1/2}\sum_{j=1}^d e_j\otimes e_j,\qquad
|\Psi_\beta\rangle=\sqrt{d/Z_\beta}(e^{-\beta K/2}\otimes I_R)|\Phi_d\rangle.
$
Then $Z_\beta>0$, $\rho_\beta$ is a density operator, $|\Psi_\beta\rangle$ is a unit vector, and $\operatorname{Tr}_R(|\Psi_\beta\rangle\langle\Psi_\beta|)=\rho_\beta$. If $K$ is interpreted as energy, the product $\beta K$ is dimensionless.

## Facts & Assumptions

**Given:** $\mathcal H\ne\{0\}$ has finite dimension $d$; $K$ is Hermitian; $\beta>0$; and the ordered orthonormal bases and reference copy are as displayed.

[F1] [[lem-qsm-matrix-state-calculus]]: a finite Hermitian matrix has real eigenvalues and a basis-independent functional calculus; in an eigenbasis, the trace is the sum of diagonal entries.

[F2] [[def-qc-density-operator]]: in finite dimension a density operator is positive with trace one.

[F3] [[def-qc-partial-trace]]: in ordered product bases, $(\operatorname{Tr}_R X)_{jk}=\sum_\ell X_{(j,\ell),(k,\ell)}$.

[F4] [[thm-qc-partial-trace-characterization-and-basis-independence]]: the finite partial trace is independent of the chosen reference basis and is uniquely characterized by its trace pairing.

## Proof

1.1 By [F1], choose an orthonormal eigenbasis of $K$ with real eigenvalues $\lambda_1,\ldots,\lambda_d$. Then $Z_\beta=\sum_j e^{-\beta\lambda_j}$ is a finite sum of strictly positive real numbers, so $Z_\beta>0$. The operator $\rho_\beta$ is diagonal in this basis with positive entries $e^{-\beta\lambda_j}/Z_\beta$, whose sum is one; [F2] therefore makes it a density operator. [given, F1, F2, algebra]

2.1 In the chosen eigenbasis, the vector $|\Psi_\beta\rangle$ is $Z_\beta^{-1/2}\sum_j e^{-\beta\lambda_j/2}e_j\otimes e_j$. Orthonormality gives $\|\Psi_\beta\|^2=Z_\beta^{-1}\sum_j e^{-\beta\lambda_j}=1$. [given, step 1.1, F1, algebra]

3.1 The rank-one matrix $|\Psi_\beta\rangle\langle\Psi_\beta|$ has coordinate entry $Z_\beta^{-1}e^{-\beta(\lambda_j+\lambda_k)/2}\delta_{\ell j}\delta_{\ell k}$ at row $(j,\ell)$, column $(k,\ell)$. Summing over $\ell$ as in [F3] gives a diagonal reduced matrix with entries $e^{-\beta\lambda_j}/Z_\beta$, exactly $\rho_\beta$. By [F4] this reduced operator does not depend on the reference basis used for the construction. [given, step 1.1, F3, F4, algebra] ∎
