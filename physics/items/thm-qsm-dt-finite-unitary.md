---
id: thm-qsm-dt-finite-unitary
kind: theorem
title: Finite unitary dynamics and stationary Gibbs states
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 2
deps:
  - lem-qsm-matrix-state-calculus
  - lem-qsm-finite-gibbs-kms
dependency_roles:
  lem-qsm-matrix-state-calculus: mathematical-premise
  lem-qsm-finite-gibbs-kms: mathematical-premise
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
    - title: Ryogo Kubo, Statistical-Mechanical Theory of Irreversible Processes I, Journal of the Physical Society of Japan 12 (1957), §§2–3
      url: https://staff.ulsu.ru/moliver/ref/kubo/kubo57.pdf
    - title: "MIT OpenCourseWare 8.512, Theory of Solids II, Lecture 1: Linear Response Theory, §1.1"
      url: https://ocw.mit.edu/courses/8-512-theory-of-solids-ii-spring-2009/0d1bb83b0e6471874b6c3e02aff52ad5_MIT8_512s09_lec01_rev2.pdf
---

## Statement

Let $\mathcal H$ be a complex Hilbert space of finite dimension $d\ge1$, let $H=H^*$ be a Hamiltonian with energy unit J, and let $\hbar>0$ have unit J s. A **finite density matrix** is a positive semidefinite matrix $\rho$ with $\operatorname{Tr}\rho=1$. For time $t\in\mathbb R$ measured in s, set $U(t)=e^{-itH/\hbar}$ and $\alpha_t(A)=U(t)^*AU(t)$. Then $U(t)$ is a unitary group, $\alpha_t$ is a group of matrix $*$-automorphisms, and for every finite density matrix $\rho$ and matrix $A$,

$$\operatorname{Tr}(U(t)\rho U(t)^*A)=\operatorname{Tr}(\rho\alpha_t(A)).$$

The von Neumann entropy $S(\rho)=-k_B\operatorname{Tr}(\rho\log\rho)$ is defined using $\log\rho$ on the positive spectral support, with zero eigenvalues contributing $0$ (the convention $0\log0:=0$), and is finite and unchanged by $U(t)\rho U(t)^*$. For $\beta>0$ with unit J$^{-1}$, let $Z_\beta=\operatorname{Tr}(e^{-\beta H})$ and $\sigma_\beta=Z_\beta^{-1}e^{-\beta H}$. Then $Z_\beta>0$, $\sigma_\beta$ is stationary, and the finite Gibbs correlation has the KMS strip identity

$$F_{A,B}(t+i\beta\hbar)=\operatorname{Tr}(\sigma_\beta\alpha_t(B)A),\qquad F_{A,B}(z)=\operatorname{Tr}(\sigma_\beta A\alpha_z(B)),$$

where $\alpha_z(B)=e^{izH/\hbar}Be^{-izH/\hbar}$. The function $F_{A,B}$ is entire and bounded on $0\le\operatorname{Im}z\le\beta\hbar$. This finite-dimensional result asserts no approach to equilibrium.

## Facts & Assumptions

**Given:** A finite-dimensional complex Hilbert space, $H=H^*$, $\hbar>0$, $\beta>0$, matrices $A,B$, and a positive semidefinite matrix $\rho$ with trace one.

[F1] [[lem-qsm-matrix-state-calculus]]: every Hermitian matrix has a real spectral decomposition; the finite trace is cyclic; positive matrices have basis-independent spectral functional calculus, including the logarithm on positive support.

[F2] [[lem-qsm-finite-gibbs-kms]]: for finite-dimensional $H=H^*$ and $\beta>0$, $\sigma_\beta$ is stationary and $F_{A,B}$ is entire, bounded on the strip $0\le\operatorname{Im}z\le\beta\hbar$, with boundary value $F_{A,B}(t+i\beta\hbar)=\operatorname{Tr}(\sigma_\beta\alpha_t(B)A)$. Its current draft proof is the inspected finite spectral calculation; no infinite-volume KMS claim is used.

## Proof


**Given:** The finite-dimensional Hamiltonian, density matrix, and constants in the Statement.

1.1 Diagonalize $H$ using [F1], with eigenvalues $E_j\in\mathbb R$. The eigenvalues of $U(t)$ are $e^{-itE_j/\hbar}$, so $U(t)^*U(t)=I$ and multiplication of the scalar phases gives $U(t+s)=U(t)U(s)$. Conjugation therefore makes each $\alpha_t$ a unital matrix $*$-automorphism and gives the group law. [given, F1, algebra]


2.1 By cyclicity in [F1], $\operatorname{Tr}(U\rho U^*A)=\operatorname{Tr}(\rho U^*AU)$. Unitary conjugation preserves the eigenvalues of $\rho$, so it preserves the finite entropy and $\operatorname{Tr}\rho=1$. Since $e^{-\beta H}$ is positive definite in finite dimension, its trace is positive; it commutes with $U(t)$, so $\sigma_\beta$ is stationary. [given, F1, step 1.1, algebra]


3.1 In the eigenbasis of $H$, each entry of $\alpha_z(B)$ is a constant multiple of $e^{iz(E_j-E_k)/\hbar}$, hence is entire. The finite-dimensional trace makes $F_{A,B}$ entire. The KMS boundary identity and boundedness on the specified strip are exactly [F2] under the same hypotheses. [given, F1, F2, step 1.1, algebra] ∎