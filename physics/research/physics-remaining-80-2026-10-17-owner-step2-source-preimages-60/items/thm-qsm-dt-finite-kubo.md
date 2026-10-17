---
id: thm-qsm-dt-finite-kubo
kind: theorem
title: Finite-time Kubo formula with norm remainder
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 3
deps:
  - thm-qsm-dt-finite-unitary
  - lem-qsm-matrix-state-calculus
  - lem-qsm-dt-finite-matrix-trace-ideal
  - lem-qsm-dt-banach-volterra-dyson
dependency_roles:
  thm-qsm-dt-finite-unitary: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  lem-qsm-dt-finite-matrix-trace-ideal: mathematical-premise
  lem-qsm-dt-banach-volterra-dyson: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Ryogo Kubo, Statistical-Mechanical Theory of Irreversible Processes I, Journal of the Physical Society of Japan 12 (1957), §2, printed pp. 572–575
      url: https://staff.ulsu.ru/moliver/ref/kubo/kubo57.pdf
    - title: "MIT OpenCourseWare 8.512, Theory of Solids II, Lecture 1: Linear Response Theory, §§1.1–1.2"
      url: https://ocw.mit.edu/courses/8-512-theory-of-solids-ii-spring-2009/0d1bb83b0e6471874b6c3e02aff52ad5_MIT8_512s09_lec01_rev2.pdf
    - title: Steven H. Simon, Lecture Notes for Quantum Matter, Chapter 8 §8.2, printed pp. 118–122
      url: https://www-thphys.physics.ox.ac.uk/people/SteveSimon/QCM2023/QuantumMatter.pdf
---

## Statement

Let $\mathcal H$ be a complex Hilbert space of finite dimension $d\ge1$, $H=H^*$ with energy unit J, $\hbar>0$ with unit J s, $\beta>0$ with unit J$^{-1}$, and let $\sigma=Z_\beta^{-1}e^{-\beta H}$ be the stationary Gibbs density from [[thm-qsm-dt-finite-unitary]]. Let $A=A^*$ and $B=B^*$ be matrices, let $T>0$ be finite in s, let $h:[0,T]\to\mathbb R$ be continuous, and let $\epsilon\in\mathbb R$ be dimensionless; $h(t)B$ has unit J. Put $U_0(t)=e^{-itH/\hbar}$ for time $t$ in s, $\alpha_t(A)=U_0(t)^*AU_0(t)$, and $B_t=\alpha_t(B)$. Let $W_\epsilon$ solve
$$W_\epsilon'(t)=\frac{i\epsilon h(t)}{\hbar}B_tW_\epsilon(t),\qquad W_\epsilon(0)=I,$$
and set $U_\epsilon(t)=U_0(t)W_\epsilon(t)$ and $\rho_I(t)=W_\epsilon(t)\sigma W_\epsilon(t)^*$. Then $U_\epsilon$ solves $i\hbar U_\epsilon'(t)=(H-\epsilon h(t)B)U_\epsilon(t)$, $U_\epsilon(0)=I$, and $\rho_\epsilon(t):=U_\epsilon(t)\sigma U_\epsilon(t)^*$ satisfies $\operatorname{Tr}(\rho_\epsilon(t)A)=\operatorname{Tr}(\rho_I(t)\alpha_t(A))$. Define
$$R_{AB}(u)=\frac{i}{\hbar}\operatorname{Tr}\!\left(\sigma[\alpha_u(A),B]\right),\qquad C_T=\frac{2}{\hbar}\int_0^T|h(s)|\,\|B\|\,ds.$$
Then $W_\epsilon(t)$ is unitary and, for $0\le t\le T$,
$$\operatorname{Tr}(\rho_I(t)\alpha_t(A))=\operatorname{Tr}(\sigma\alpha_t(A))+\epsilon\int_0^t h(s)R_{AB}(t-s)\,ds+r_\epsilon(t),\qquad |r_\epsilon(t)|\le\|A\|\frac{(|\epsilon|C_T)^2e^{|\epsilon|C_T}}2.$$
The initial Gibbs matrix is fixed as $\epsilon$ varies. The result is an exact finite-time first variation with a controlled remainder, not a static derivative of a re-prepared Gibbs family. $C_T$ and $\epsilon$ are dimensionless, and $R_{AB}$ has units $[A][B]/(\mathrm J\,\mathrm s)$.

## Facts & Assumptions

**Given:** The finite-dimensional Hamiltonian and Gibbs density, bounded self-adjoint matrices $A,B$, continuous real $h$, $\epsilon\in\mathbb R$, and $T>0$.

[F1] [[thm-qsm-dt-finite-unitary]]: $U_0$ is a unitary group, $\sigma$ is a positive trace-one matrix commuting with $U_0(t)$, and finite trace expectation is cyclically represented in the Heisenberg picture.

[F2] [[lem-qsm-matrix-state-calculus]]: finite Hermitian matrices have basis-independent spectral functional calculus and the finite trace is cyclic.

[F3] [[lem-qsm-dt-finite-matrix-trace-ideal]]: $\|YX\|_1,\|XY\|_1\le\|Y\|\|X\|_1$, $|\operatorname{Tr}X|\le\|X\|_1$, and the finite trace-norm matrix space is complete.

[F4] [[lem-qsm-dt-banach-volterra-dyson]]: a strongly continuous bounded coefficient on a Banach space yields a unique Volterra solution and the explicit quadratic remainder; a strongly continuous skew-adjoint Hilbert-space coefficient yields a unitary solution.

## Proof


**Proof technique:** interaction-picture Volterra series and finite trace cyclicity.

**Given:** [F1]–[F4] and the control/observable hypotheses in the Statement.

1.1 The matrix curve $t\mapsto B_t$ is norm-continuous by the finite matrix exponential in [F1]. On the Hilbert space, $K_t(\psi)=i h(t)B_t\psi/\hbar$ is a strongly continuous skew-adjoint bounded coefficient. On the trace-norm matrix space, $L_t(X)=i h(t)[B_t,X]/\hbar$ is strongly continuous and satisfies $\|L_t(X)\|_1\le2|h(t)|\|B\|\|X\|_1/\hbar$ by [F3]. [given, F1, F3, algebra]


2.1 Apply [F4] to $K_t$ with initial vector $\psi$ to obtain a unitary $W_\epsilon(t)$, and apply [F4] to $L_t$ with initial matrix $\sigma$. The trace-norm solution has linear term $\epsilon(i/\hbar)\int_0^t h(s)[B_s,\sigma]ds$ and remainder norm at most $(|\epsilon|C_T)^2e^{|\epsilon|C_T}/2$, since $\|\sigma\|_1=1$. Differentiating the finite matrix product $W_\epsilon(t)\sigma W_\epsilon(t)^*$ shows it solves the same commutator equation; uniqueness in [F4] identifies it with that trace-norm solution. [given, F1, F3, F4, step 1.1, algebra]


3.1 The product rule and $U_0(t)B_t=BU_0(t)$ give $i\hbar(U_0W_\epsilon)'=HU_0W_\epsilon-\epsilon h(t)BU_0W_\epsilon$, so $U_\epsilon$ solves the displayed controlled Schrödinger equation. Since $U_\epsilon=U_0W_\epsilon$, cyclicity of the finite trace gives $\operatorname{Tr}(U_\epsilon\sigma U_\epsilon^*A)=\operatorname{Tr}(W_\epsilon\sigma W_\epsilon^*\alpha_t(A))$. [given, F1, F2, step 2.1, algebra]


3.2 Applying $\operatorname{Tr}(\cdot\,\alpha_t(A))$ to the linear term, cyclicity [F2] gives $\operatorname{Tr}([B_s,\sigma]\alpha_t(A))=\operatorname{Tr}(\sigma[\alpha_t(A),B_s])$. Since $B_s=\alpha_s(B)$ and $\alpha_t(A)=\alpha_s(\alpha_{t-s}(A))$, stationarity of $\sigma$ from [F1] turns this into $\operatorname{Tr}(\sigma[\alpha_{t-s}(A),B])$. This is exactly the convolution in the Statement. [given, F1, F2, step 2.1, algebra]


4.1 The trace-norm remainder from step 2.1 changes the expectation by at most $\|A\|$ times its trace norm, by [F3] and $\|\alpha_t(A)\|=\|A\|$. This gives the displayed bound. For self-adjoint $A,B$, $\operatorname{Tr}(\sigma[\alpha_u(A),B])$ is purely imaginary by cyclicity and adjoints, so $R_{AB}(u)$ is real. [F1, F2, F3, step 2.1, step 3.2, algebra] ∎