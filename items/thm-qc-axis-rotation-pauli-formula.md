---
id: thm-qc-axis-rotation-pauli-formula
kind: theorem
title: "Pauli formula for an axis rotation"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - thm-qc-pauli-algebra
  - def-qc-qubit-and-bloch-representation
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - def-sine-and-cosine-by-power-series
  - thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions
  - lem-exponential-series-of-a-bounded-operator
  - cor-finite-dimensional-normed-spaces-are-banach
  - cor-linear-maps-with-finite-dimensional-domain-are-bounded
  - thm-finite-dimensional-isometry-characterisations
justified_by: []
dependency_level: 6
proof_strategy: direct
axiom_use: "None; the proof uses norm-convergent finite-dimensional matrix series."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "John Preskill, Quantum Computation, Chapter 2: Foundations I: States and Ensembles (updated July 2015)"
      url: "https://www.preskill.caltech.edu/ph219/chap2_15.pdf"
      locator: "§2.2.1, PDF pp.10–11, Eqs. (2.29)–(2.31)"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6 (2026-08-27)"
      url: "https://arxiv.org/pdf/1907.09415v6"
      locator: "§1.4 and Appendix A.9, PDF pp.9 and 198"
    - title: "Aram Harrow, 6.443/8.371/18.436 Quantum Information Science II, Lecture 1: Quantum states and operations (2018)"
      url: "https://web.mit.edu/8.371/www/lectures/lect01.pdf"
      locator: "§1.2.1, PDF pp.2–3"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Statement

For $\theta\in\mathbb R$ and $\mathbf n=(n_x,n_y,n_z)\in\mathbb R^3$ with $\|\mathbf n\|_2=1$, put $\Sigma=\mathbf n\cdot\boldsymbol{\sigma}=n_xX+n_yY+n_zZ$. Then
$$R_{\mathbf n}(\theta)=\exp\!\left(-\frac{i\theta}{2}\Sigma\right)=\cos(\theta/2)I-i\sin(\theta/2)\Sigma,$$
and $R_{\mathbf n}(\theta)$ is unitary. For the endpoint $\theta=0$, it equals $I$.

## Facts & Assumptions

**Given:** A real $\theta$, a real unit vector $\mathbf n\in\mathbb R^3$, and $Q_2=\mathbb C^2$ with the ordered computational basis.

[F1] [[def-qc-qubit-and-bloch-representation]]: $Q_2$ is the finite-dimensional qubit inner-product space.

[F2] [[def-qc-one-qubit-gate-alphabet-and-rotations]]: $R_{\mathbf n}(\theta)$ is the operator-norm series exponential of $-\tfrac{i\theta}{2}\mathbf n\cdot\boldsymbol\sigma$.

[F3] [[thm-qc-pauli-algebra]]: the Pauli matrices are Hermitian and satisfy $\sigma_j\sigma_k+\sigma_k\sigma_j=2\delta_{jk}I$.

[F4] [[def-sine-and-cosine-by-power-series]]: $\cos t=\sum_{m\ge0}(-1)^mt^{2m}/(2m)!$ and $\sin t=\sum_{m\ge0}(-1)^mt^{2m+1}/(2m+1)!$ for real $t$.

[F5] [[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]]: for real $t$, $\cos^2t+\sin^2t=1$.

[F6] [[lem-exponential-series-of-a-bounded-operator]]: for a bounded endomorphism $B$ on a Banach space, $\sum B^k/k!$ converges absolutely in operator norm.

[F7] [[thm-finite-dimensional-isometry-characterisations]]: for a finite-dimensional endomorphism, $U^*U=I$ implies that $U$ is unitary.

[F8] [[def-linear-isometry-and-orthogonal-or-unitary-operator]]: a unitary operator on a complex inner-product space is an invertible linear isometry from the space to itself.

[F9] [[cor-finite-dimensional-normed-spaces-are-banach]]: every finite-dimensional normed space, including $Q_2$, is Banach.

[F10] [[cor-linear-maps-with-finite-dimensional-domain-are-bounded]]: every linear endomorphism of the finite-dimensional normed space $Q_2$ is bounded.

## Proof

1.1 By [F3], $\Sigma^2=\sum_j n_j^2\sigma_j^2+\sum_{j<k}n_jn_k(\sigma_j\sigma_k+\sigma_k\sigma_j)=(\sum_j n_j^2)I=I$. Also $\Sigma^*=\Sigma$, since the $n_j$ are real and every $\sigma_j$ is Hermitian. [given, F3, algebra]

2.1 Let $B=-i\theta\Sigma/2$. By [F1], $Q_2$ is finite-dimensional; [F9] makes it Banach and [F10] makes $B$ bounded, so [F6] makes $\sum_{k\ge0}B^k/k!$ absolutely convergent. From [step 1.1], induction gives $B^{2m}=(-1)^m(\theta/2)^{2m}I$ and $B^{2m+1}=-i(-1)^m(\theta/2)^{2m+1}\Sigma$. Grouping its even and odd terms is valid by absolute convergence; [F4] identifies the two scalar series as $\cos(\theta/2)$ and $\sin(\theta/2)$. Thus $R_{\mathbf n}(\theta)=\cos(\theta/2)I-i\sin(\theta/2)\Sigma$. When $\theta=0$, this is $I$. [given, F1, F2, F4, F6, F9, F10, step 1.1, algebra]

3.1 Since $\Sigma^*=\Sigma$, the adjoint of the displayed formula is $\cos(\theta/2)I+i\sin(\theta/2)\Sigma$. Multiplying this by $R_{\mathbf n}(\theta)$ and using $\Sigma^2=I$ from step 1.1 gives $R_{\mathbf n}(\theta)^*R_{\mathbf n}(\theta)=(\cos^2(\theta/2)+\sin^2(\theta/2))I=I$ by [F5]. Hence [F7] makes $R_{\mathbf n}(\theta)$ unitary in the sense of [F8]. [F1, F5, F7, F8, step 1.1, step 2.1, algebra] ∎

