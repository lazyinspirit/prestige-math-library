---
id: lem-qsm-finite-gibbs-kms
kind: lemma
title: Finite unitary dynamics and Gibbs KMS identity
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps:
  - lem-qsm-matrix-state-calculus
dependency_roles:
  lem-qsm-matrix-state-calculus: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Alain Connes and Matilde Marcolli, Noncommutative Geometry, Quantum Fields and Motives, Chapter 3, §2.2, “The KMS condition”
      url: https://alainconnes.org/wp-content/uploads/bookwebfinal-2.pdf
      locator: Complete 705-page author-hosted book; Chapter 3, §2.2, printed pp. 407–408 (PDF pp. 406–408), Definition 3.6 and equation (3.11); also §2.1, pp. 404–406, for finite Gibbs states and time evolution.
    - title: Mehran Kardar, Statistical Mechanics I, MIT OpenCourseWare, Lecture 21, Quantum Microstates and Quantum Macrostates
      url: https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/4f8defd6fcba707a0c691dd8957a43e3_MIT8_333F13_Lec21.pdf
---

## Statement

Let $H=H^*$ be a finite-dimensional Hamiltonian with energy unit J and let $\hbar>0$ have unit J s. For $t\in\mathbb R$, $U(t)=e^{-itH/\hbar}$ is unitary and $U(t+s)=U(t)U(s)$. For a density $\rho$, the Schrödinger state $U(t)\rho U(t)^*$ and the Heisenberg observable $\alpha_t(A)=U(t)^*AU(t)$ have the same trace expectation, and the von Neumann entropy is unchanged. If $\sigma_\beta=e^{-\beta H}/Z_\beta$, $Z_\beta=\operatorname{Tr}e^{-\beta H}$, then it is stationary and satisfies the finite Gibbs KMS strip identity
$
F_{A,B}(t+i\beta\hbar)=\operatorname{Tr}(\sigma_\beta\alpha_t(B)A),\qquad
F_{A,B}(z)=\operatorname{Tr}(\sigma_\beta A\alpha_z(B)),
$
where $\alpha_z(B)=e^{izH/\hbar}Be^{-izH/\hbar}$. The function is entire and bounded on $0\leq\operatorname{Im}z\leq\beta\hbar$. No infinite-volume KMS existence or approach to equilibrium follows.

## Facts & Assumptions

**Given:** A finite-dimensional complex Hilbert space, a Hermitian $H$, $\hbar>0$, $\beta>0$, bounded matrices $A,B$, and a density matrix $\rho$.

[F1] [[lem-qsm-matrix-state-calculus]]: Hermitian matrices have real spectral decompositions, and the finite trace is cyclic.

## Proof

1.1 Diagonalize $H$ by [F1], with eigenvalues $E_j$. Then $U(t)$ has eigenvalues $e^{-itE_j/\hbar}$ of modulus one, so it is unitary. In the same eigenbasis, multiplying scalar exponentials gives $U(t+s)=U(t)U(s)$. The finite exponential series differentiates termwise and yields $i\hbar U'(t)=HU(t)$. [given, F1, algebra]

1.2 In the eigenbasis of $H$, every matrix entry of $e^{izH/\hbar}Be^{-izH/\hbar}$ is a constant times $e^{iz(E_j-E_k)/\hbar}$, an entire scalar function. Thus $F_{A,B}$ is entire. For $z=t+iy$, $0\leq y\leq\beta\hbar$, the real-time factors are unitary and the imaginary-time factors have norm at most $e^{\beta\|H\|}$ each. The trace against a density is bounded by operator norm, so $|F_{A,B}(z)|\leq\|A\|\|B\|e^{2\beta\|H\|}$ throughout the closed strip. [given, F1, algebra]

2.1 Cyclicity [F1] gives $\operatorname{Tr}(U\rho U^*A)=\operatorname{Tr}(\rho U^*AU)$. Unitary conjugation preserves positivity, trace, and eigenvalues; therefore it preserves the finite entropy $-k_B\operatorname{Tr}(\rho\log\rho)$. Since $\sigma_\beta$ is a function of $H$, it commutes with $U(t)$, hence is stationary. [step 1.1, F1, algebra]

3.1 At $z=t+i\beta\hbar$, $\alpha_z(B)=e^{-\beta H}\alpha_t(B)e^{\beta H}$. Hence $ F_{A,B}(t+i\beta\hbar)=Z_\beta^{-1}\operatorname{Tr}(e^{-\beta H}A e^{-\beta H}\alpha_t(B)e^{\beta H}) =Z_\beta^{-1}\operatorname{Tr}(A e^{-\beta H}\alpha_t(B)) =\operatorname{Tr}(\sigma_\beta\alpha_t(B)A), $ where the first equality uses the definition, the second uses finite trace cyclicity, and the third uses it again. The strip boundary identity follows. [step 1.2, F1, algebra] ∎
