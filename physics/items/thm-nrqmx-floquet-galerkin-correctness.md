---
id: thm-nrqmx-floquet-galerkin-correctness
kind: theorem
domain: mathematics
library: mathematics
title: Fourier–Galerkin assembly correctness and termination
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - alg-nrqmx-floquet-fourier-galerkin
  - thm-nrqmx-floquet-sambe-domain
  - thm-nrqm-intervals-twisted-periodic-momentum-domain
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  alg-nrqmx-floquet-fourier-galerkin: mathematical-premise
  thm-nrqmx-floquet-sambe-domain: mathematical-premise
  thm-nrqm-intervals-twisted-periodic-momentum-domain: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Konrad Viebahn, Introduction to Floquet theory, lecture notes (2020)
      url: https://boulderschool.yale.edu/sites/default/files/files/floquetlecture_Konrad%20Viebahn.pdf
      locator: Section IV, equations (57)-(60), exact Fourier-sector matrix and finite truncation discussion.
    - title: André Eckardt and Egidijus Anisimovas, High-frequency approximation for periodically driven quantum systems from a Floquet-space perspective, New Journal of Physics 17 (2015), 093039
      url: https://arxiv.org/pdf/1502.06477
      locator: Section 2.3, equations (17)-(20) and (22), and Appendix B, equations (B.1)-(B.3), Fourier matrix elements of the quasienergy operator.
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $d\ge1$ and $b,N\ge0$ be integers, let $\hbar>0$ and $\omega>0$ be real, and set $T=2\pi/\omega$. Let $H_k\in M_d(\mathbb C)$ for $|k|\le b$ satisfy $H_{-k}=H_k^*$, set $H_k=0$ for $|k|>b$, and put $H(t)=\sum_{|k|\le b}H_ke^{ik\omega t}$. Set $q=(2N+1)d$. Fix $\tau>0$ and a total routine $S_\tau$ on $\{M\in M_q(\mathbb C):M=M^*\}$ with the standard inner product on $\mathbb C^q$, that for each input $M$ returns real numbers $\widetilde\lambda_1,\ldots,\widetilde\lambda_q$, an orthonormal basis $x_1,\ldots,x_q$, and residuals $r_j=\|Mx_j-\widetilde\lambda_jx_j\|\le\tau$ as in the algorithm Definition. Let $\mathscr H_T=L^2((0,T),dt;\mathbb C^d)$ with its componentwise $L^2$ inner product, and let $Kf=H(t)f-i\hbar f'(t)$ on the domain of vectors whose components lie in $H^1(0,T)$ and have equal endpoint traces. Let $\mathcal S_N$ be the span of $T^{-1/2}e^{in\omega t}v$ with $-N\le n\le N$ and $v\in\mathbb C^d$, and let $\Pi_N$ be its orthogonal projection. The matrix with blocks $(K_N)_{nm}=H_{n-m}+n\hbar\omega\delta_{nm}I_d$ is exactly the matrix of $\Pi_NK|_{\mathcal S_N}$ in the ordered Fourier basis and is Hermitian. The block-assembly portion of the algorithm terminates after exactly $(2N+1)^2$ block assignments. The complete procedure is well-defined and terminates, because it then calls $S_\tau$ once on the Hermitian matrix $K_N$. This is an exact compression result only; it asserts no convergence or spectral-accuracy guarantee for finite-section eigenvalues and no residual guarantee beyond the stipulated solver interface.

## Statement references

[[def-axiom-of-choice]]

[[def-countable-choice]]

[[alg-nrqmx-floquet-fourier-galerkin]]

[[thm-nrqmx-floquet-sambe-domain]]

[[thm-nrqm-intervals-twisted-periodic-momentum-domain]]

## Facts & Assumptions

**Given:** AC and Countable Choice, the Fourier coefficients, bandwidth $b$, cutoff $N$, $d\ge1$, $\omega>0$, $\hbar>0$, $T=2\pi/\omega$, $\tau>0$, and the total routine $S_\tau$ with the declared interface from the Statement.

[A1] AC and Countable Choice are carried from the self-adjoint Sambe operator and periodic Fourier supplier ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] [[thm-nrqmx-floquet-sambe-domain]] defines $K=H(t)-i\hbar\,d/dt$ on componentwise periodic $H^1(0,T)$ and states that its domain contains every smooth periodic vector-valued function.

[F2] [[thm-nrqm-intervals-twisted-periodic-momentum-domain]] at twist $\theta=0$ gives the complete orthonormal Fourier family $e_n(t)=T^{-1/2}e^{in\omega t}$ in scalar $L^2(0,T)$.

[F3] [[alg-nrqmx-floquet-fourier-galerkin]] assigns $(K_N)_{nm}=H_{n-m}+n\hbar\omega\delta_{nm}I_d$ for each ordered pair $n,m\in\{-N,\ldots,N\}$, with $H_k=0$ for $|k|>b$ and $H_{-k}=H_k^*$. The finite Fourier polynomial $H(t)=\sum_k H_ke^{ik\omega t}$ is smooth and $T$-periodic; it is Hermitian because $H(t)^*=\sum_k H_k^*e^{-ik\omega t}=\sum_k H_ke^{ik\omega t}=H(t)$ after reindexing.

[F4] Under the algorithm Definition, $S_\tau$ is total on finite Hermitian matrices and is called exactly once after the finite block assembly; it returns the declared finite output record unchanged.

## Proof

**Given:** [A1], [F1]–[F3], and the finite Fourier polynomial in the Statement.

1.1 For $-N\le m\le N$ and $v\in\mathbb C^d$, $e_m(t)v=T^{-1/2}e^{im\omega t}v$ is smooth and periodic, so it lies in $D(K)$ by [F1]. Multiplication by $H(t)$ gives $\sum_kT^{-1/2}e^{i(m+k)\omega t}H_kv$; its coefficient in harmonic $n$ is $H_{n-m}v$. The derivative term is $-i\hbar\,\partial_t(e_m v)=m\hbar\omega e_m v$, which contributes only when $n=m$. Thus $\Pi_NK(e_m v)$ has $n$th coefficient $(H_{n-m}+n\hbar\omega\delta_{nm}I_d)v$. [A1, F1, F2, given, algebra]

1.2 For every pair $n,m$, [F3] gives $(K_N)_{nm}^*=H_{n-m}^*+n\hbar\omega\delta_{nm}I_d=H_{m-n}+m\hbar\omega\delta_{mn}I_d=(K_N)_{mn}$, since $H_{-k}=H_k^*$ and the diagonal term is present only when $n=m$. Hence $K_N$ is Hermitian. [F3, algebra]

2.1 The coefficient just computed is precisely the block assigned by [F3] in row $n$, column $m$. Since the ordered Fourier basis spans $\mathcal S_N$, equality of all its matrix blocks proves that $K_N$ is exactly the matrix of $\Pi_NK|_{\mathcal S_N}$. [F2, F3, step 1.1]

3.1 There are $(2N+1)^2$ ordered pairs $(n,m)$, each assignment fills one finite $d$ by $d$ block, so the block assembly terminates after exactly that many assignments. By step 1.2, $K_N$ is Hermitian, and it has dimension $q=(2N+1)d$; hence it is in the domain of the total routine $S_\tau$ in [F4]. The algorithm makes one call $R:=S_\tau(K_N)$ after assembly, and totality gives a returned finite record. Thus the complete procedure is well-defined and terminates. This exact compression and termination argument proves no convergence as $N\to\infty$, spectral accuracy, or residual claim beyond the routine's stipulated interface. [F3, F4, step 1.2, given] ∎
