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

Let $\mathcal H$ be a finite-dimensional complex Hilbert space and let $H=H^*$ be a Hamiltonian on $\mathcal H$ with energy unit J; let $\hbar>0$ have unit J s. For real $t$ measured in seconds, $U(t)=e^{-itH/\hbar}$ is unitary and $U(t+s)=U(t)U(s)$. For a trace-one density $\rho$ on $\mathcal H$, the Schrödinger state $U(t)\rho U(t)^*$ and the Heisenberg observable $\alpha_t(A)=U(t)^*AU(t)$ have the same trace expectation. Fix $k_B>0$ in J/K for the entropy convention; then the von Neumann entropy is unchanged. If $d=\dim\mathcal H\geq1$, $\beta>0$ has unit J$^{-1}$, and $\sigma_\beta=e^{-\beta H}/Z_\beta$ with $Z_\beta=\operatorname{Tr}e^{-\beta H}$, then it is stationary and satisfies the finite Gibbs KMS strip identity
$
F_{A,B}(t+i\beta\hbar)=\operatorname{Tr}(\sigma_\beta\alpha_t(B)A),\qquad
F_{A,B}(z)=\operatorname{Tr}(\sigma_\beta A\alpha_z(B)),
$
where $\alpha_z(B)=e^{izH/\hbar}Be^{-izH/\hbar}$, with complexified time $z$ measured in seconds. The function is entire and bounded on $0\leq\operatorname{Im}z\leq\beta\hbar$ seconds. No infinite-volume KMS existence or approach to equilibrium follows.

## Facts & Assumptions

**Given:** A finite-dimensional complex Hilbert space, a Hermitian $H$, $\hbar>0$, real time $t$ in seconds, $\beta>0$ in J$^{-1}$ and a nonzero space for the normalized Gibbs clause, bounded matrices $A,B$, a density matrix $\rho$, and $k_B>0$ for the entropy clause.

[F1] [[lem-qsm-matrix-state-calculus]]: Hermitian matrices have real spectral decompositions, basis-independent spectral calculus, and the stated density trace pairing.

## Proof

1.1 On a zero-dimensional Hilbert space the unique endomorphism is $I=0$, and its exponential is $I$, so the unitary and group identities hold directly. There is no trace-one density there; the remaining density and normalized-Gibbs clauses have no instance. On a nonzero space, diagonalize $H$ by [F1], with eigenvalues $E_j$. Then $U(t)$ has eigenvalues $e^{-itE_j/\hbar}$ of modulus one, so it is unitary. In the same eigenbasis, multiplying scalar exponentials gives $U(t+s)=U(t)U(s)$. The finite exponential series differentiates termwise and yields $i\hbar U'(t)=HU(t)$. [given, F1, algebra]

1.2 In the eigenbasis of $H$, every matrix entry of $e^{izH/\hbar}Be^{-izH/\hbar}$ is a constant times $e^{iz(E_j-E_k)/\hbar}$, an entire scalar function. Thus $F_{A,B}$ is entire. For $z=t+iy$, $0\leq y\leq\beta\hbar$, the real-time factors are unitary and the imaginary-time factors have norm at most $e^{\beta\|H\|}$ each. The trace against a density is bounded by operator norm, so $|F_{A,B}(z)|\leq\|A\|\|B\|e^{2\beta\|H\|}$ throughout the closed strip. [given, F1, algebra]

2.1 For finite matrices $C,D$, the coordinate trace gives $\operatorname{Tr}(CD)=\sum_{i,j}C_{ij}D_{ji}=\operatorname{Tr}(DC)$ by interchanging the two finite indices. This cyclicity gives $\operatorname{Tr}(U\rho U^*A)=\operatorname{Tr}(\rho U^*AU)$. Unitary conjugation preserves positivity, trace, and eigenvalues; therefore it preserves the finite entropy $S(\rho)=-k_B\sum_j f(p_j)$, where $p_j$ are the density eigenvalues, $f(x)=x\log x$ for $x>0$, and $f(0)=0$. Thus $\operatorname{Tr}(\rho\log\rho)$ denotes $\operatorname{Tr}f(\rho)$, including singular densities; no value of $\log0$ is used. Since $\sigma_\beta$ is a function of $H$, it commutes with $U(t)$, hence is stationary. [step 1.1, F1, algebra]

3.1 At $z=t+i\beta\hbar$, $\alpha_z(B)=e^{-\beta H}\alpha_t(B)e^{\beta H}$. Hence $ F_{A,B}(t+i\beta\hbar)=Z_\beta^{-1}\operatorname{Tr}(e^{-\beta H}A e^{-\beta H}\alpha_t(B)e^{\beta H}) =Z_\beta^{-1}\operatorname{Tr}(A e^{-\beta H}\alpha_t(B)) =\operatorname{Tr}(\sigma_\beta\alpha_t(B)A), $ where the first equality uses the definition, the second uses finite trace cyclicity, and the third uses it again. The strip boundary identity follows. [step 1.2, step 2.1, F1, algebra] ∎
