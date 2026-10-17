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
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
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

2.1 Keep the arbitrary ordered orthonormal basis $(e_j)$ and its given reference copy $(e'_j)$ from the Statement. Put $T=e^{-\beta K/2}$, so the defining vector is $\Psi_\beta=Z_\beta^{-1/2}\sum_j Te_j\otimes e'_j$. Orthogonality of the reference vectors gives $\|\Psi_\beta\|^2=Z_\beta^{-1}\sum_j\|Te_j\|^2=Z_\beta^{-1}\operatorname{Tr}(T^*T)=1$, because [F1] gives $T^*=T$ and $T^*T=e^{-\beta K}$, and step 1.1 gives its trace $Z_\beta$. This uses the given basis, without requiring it to diagonalize $K$. [given, step 1.1, F1, algebra]

3.1 In those same given bases, $\Psi_\beta$ has coefficient $T_{j\ell}/\sqrt{Z_\beta}$ at $e_j\otimes e'_\ell$. Thus [F3] gives the reduced matrix entry $Z_\beta^{-1}\sum_\ell T_{j\ell}\overline{T_{k\ell}}=(TT^*)_{jk}/Z_\beta=(\rho_\beta)_{jk}$, since $TT^*=e^{-\beta K}$ by [F1]. Equivalently, the reduction is $Z_\beta^{-1}\sum_\ell|Te_\ell\rangle\langle Te_\ell|=TT^*/Z_\beta$. The intrinsic characterization [F4] identifies this coordinate result with the finite partial trace, so the system marginal equals $\rho_\beta$ for every allowed original basis and reference copy. No basis independence of the purification vector itself is asserted. [given, step 1.1, step 2.1, F1, F3, F4, algebra] ∎
