---
id: thm-nrqmx-floquet-sambe-domain
kind: theorem
domain: mathematics
library: mathematics
title: Finite-level Sambe operator with Fourier domain
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - thm-nrqmx-finite-floquet-normal-form
  - def-nrqmx-finite-hermitian-matrix-exponential
  - lem-nrqmx-finite-hermitian-matrix-exponential
  - thm-kato-rellich
  - def-relative-boundedness-with-respect-to-an-operator
  - def-bounded-linear-operator
  - def-operator-norm
  - def-adjoint-of-a-densely-defined-unbounded-operator
  - def-symmetric-self-adjoint-and-essentially-self-adjoint
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
  - thm-nrqm-intervals-twisted-periodic-momentum-domain
  - def-nrqm-intervals-hilbert-sobolev-spaces
  - lem-classical-derivatives-are-weak-derivatives
  - thm-algebra-of-derivatives
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-nrqmx-finite-floquet-normal-form: mathematical-premise
  def-nrqmx-finite-hermitian-matrix-exponential: mathematical-premise
  lem-nrqmx-finite-hermitian-matrix-exponential: mathematical-premise
  thm-kato-rellich: mathematical-premise
  def-relative-boundedness-with-respect-to-an-operator: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  thm-euclidean-heine-borel-pseudocompactness-and-extreme-values: mathematical-premise
  thm-nrqm-intervals-twisted-periodic-momentum-domain: mathematical-premise
  def-nrqm-intervals-hilbert-sobolev-spaces: mathematical-premise
  lem-classical-derivatives-are-weak-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Konrad Viebahn, Introduction to Floquet theory, lecture notes (2020)
      url: https://boulderschool.yale.edu/sites/default/files/files/floquetlecture_Konrad%20Viebahn.pdf
      locator: Section IV, equations (55)-(60), periodic modes and the infinite Fourier-sector matrix; the local proof supplies the exact periodic H1 domain and self-adjointness.
    - title: André Eckardt and Egidijus Anisimovas, High-frequency approximation for periodically driven quantum systems from a Floquet-space perspective, New Journal of Physics 17 (2015), 093039
      url: https://arxiv.org/pdf/1502.06477
      locator: Section 2.3, equations (17)-(20) and (22), and Appendix B, equations (B.1)-(B.3), quasienergy operator and Fourier blocks; the local proof supplies the exact domain and self-adjointness.
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $d\ge1$, $T>0$, $\omega=2\pi/T$, $\hbar>0$, and let $H:\mathbb R\to M_d(\mathbb C)$ be $C^1$, $T$-periodic, and Hermitian at every time. On $\mathscr H_T=L^2((0,T),dt;\mathbb C^d)$ define
$$D(K)=\{f=(f_1,\ldots,f_d): f_a\in H^1(0,T)\text{ for every }a,\ f(0)=f(T)\},\qquad (Kf)(t)=H(t)f(t)-i\hbar f'(t).$$
Here each $H^1(0,T)$ function is represented by its unique absolutely continuous representative, so endpoint values are its traces, and $f'$ is its componentwise weak derivative. Then $K$ is self-adjoint on exactly $D(K)$. Choose $v_j$ and $\varepsilon_j$ from the finite Floquet normal form, so $H_Fv_j=\varepsilon_jv_j$ and $P(t)$ is its periodic unitary. The functions
$$\phi_{jn}(t)=T^{-1/2}e^{in\omega t}P(t)v_j\qquad(1\le j\le d,\ n\in\mathbb Z)$$
form an orthonormal basis of $\mathscr H_T$ and satisfy $K\phi_{jn}=(\varepsilon_j+n\hbar\omega)\phi_{jn}$.

## Statement references

[[thm-nrqmx-finite-floquet-normal-form]]

[[thm-kato-rellich]]

[[thm-nrqm-intervals-twisted-periodic-momentum-domain]]

[[def-nrqm-intervals-hilbert-sobolev-spaces]]

## Facts & Assumptions

**Given:** AC and Countable Choice, the finite-level periodic Hermitian family $H$, $T>0$, $\omega=2\pi/T$, and $\hbar>0$.

[A1] AC is the hypothesis of Kato–Rellich and the periodic derivative theorem; Countable Choice is also a hypothesis of the periodic derivative theorem and the finite Floquet normal form ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] At length $T$ and twist $\theta=0$, [[thm-nrqm-intervals-twisted-periodic-momentum-domain]] states that $-iD$ is self-adjoint on $\{u\in H^1(0,T):u^*(0)=u^*(T)\}$ and that $T^{-1/2}e^{in\omega t}$ is a complete orthonormal eigenfamily with eigenvalues $n\omega$. In that supplier, $u^*$ denotes the unique absolutely continuous representative of the $H^1$ class, so $u^*(0)$ and $u^*(T)$ are its endpoint traces; its Statement identifies their trace convention as clause (b) of the interval trace result lem-nrqm-intervals-integration-by-parts. The weak derivative defining $H^1$ is that of [[def-nrqm-intervals-hilbert-sobolev-spaces]]. The unbounded adjoint is the adjoint defined by representability on the dense operator domain ([[def-adjoint-of-a-densely-defined-unbounded-operator]]).

[F2] [[thm-kato-rellich]] states that a self-adjoint operator plus a symmetric perturbation of relative bound less than one is self-adjoint on the original operator domain, under AC. A bounded symmetric perturbation has relative bound zero ([[def-relative-boundedness-with-respect-to-an-operator]], [[def-bounded-linear-operator]], [[def-operator-norm]]). A continuous matrix-valued function on $[0,T]$ has bounded operator norm, since this interval is compact ([[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]).

[F3] [[thm-nrqmx-finite-floquet-normal-form]] supplies an orthonormal eigenbasis $v_j$ for $H_F$, the periodic unitary $P(t)$, the propagator equation, and the factorization $U(t,0)=P(t)e^{-itH_F/\hbar}$. Its controlled-dynamics dependency makes $U(t,0)$ $C^1$, while [[def-nrqmx-finite-hermitian-matrix-exponential]] and [[lem-nrqmx-finite-hermitian-matrix-exponential]] make the matrix-exponential factor $C^1$; hence $P$ is $C^1$. The identity $H(t)P(t)-i\hbar P'(t)=P(t)H_F$ is derived by differentiating this factorization in step 1.3, not assumed from the normal-form Statement.

[F4] The ordinary product rule applies componentwise to finite matrix and vector curves ([[thm-algebra-of-derivatives]]). A $C^1$ vector-valued function has its classical derivative as its weak derivative ([[lem-classical-derivatives-are-weak-derivatives]]).

[F5] The componentwise periodic $H^1$ domain is the finite direct sum of the $\theta=0$ domain from [F1]; each component is represented by its unique absolutely continuous representative, and $f(0)=f(T)$ means equality of the corresponding endpoint traces. The derivative $f'$ in $K$ is the componentwise weak derivative from [[def-nrqm-intervals-hilbert-sobolev-spaces]].

## Proof

**Given:** [A1], [F1]–[F4], and the operators and domains in the Statement.

1.1 Let $A_0=-i\hbar D$ on the componentwise periodic $H^1$ domain. For one component, [F1] makes $-iD$ self-adjoint; multiplying by the real scalar $\hbar$ preserves self-adjointness because $(\hbar S)^*=\hbar S^*=\hbar S$ on the same domain by the adjoint definition in [F1]. For $d$ components, the finite orthogonal direct sum is self-adjoint: testing the adjoint identity against vectors with only one nonzero component gives the scalar adjoint domain in each component, hence the full adjoint domain is exactly the componentwise domain. Its orthonormal eigenbasis is $T^{-1/2}e^{in\omega t}e_a$ with eigenvalue $n\hbar\omega$, where $e_a$ is the standard basis of $\mathbb C^d$. [F1, given, algebra]

1.2 Multiplication by $H(t)$ defines a bounded symmetric operator $B$ on $\mathscr H_T$. Indeed, continuity on the compact interval gives $M:=\sup_{t\in[0,T]}\|H(t)\|<\infty$, and $\|Bf\|_2^2\le M^2\|f\|_2^2$; pointwise Hermiticity gives $\langle Bf,g\rangle=\langle f,Bg\rangle$. Thus $B$ has relative bound zero with respect to $A_0$, and [F2] makes $K=A_0+B$ self-adjoint on exactly $D(A_0)=D(K)$. [A1, F2, given, algebra]

1.3 The propagator $U(t,0)$ is $C^1$ by [F3], and the finite exponential in the normal form is $C^1$ by [F3], so $P(t)=U(t,0)e^{itH_F/\hbar}$ is $C^1$. Differentiating $U(t,0)=P(t)e^{-itH_F/\hbar}$ with the product rule [F4] and using the Schrödinger equation gives $H(t)P(t)-i\hbar P'(t)=P(t)H_F$. Pointwise unitarity of $P(t)$ makes multiplication by $P$ unitary on $\mathscr H_T$. [F1, F3, F4, given, algebra]

2.1 For each $j,n$, $\phi_{jn}(t)=T^{-1/2}e^{in\omega t}P(t)v_j$ is $C^1$ and periodic; [F5] and [F4] therefore put it in $D(K)$. Using the identity of step 1.3 and the product rule [F4] gives
$$K\phi_{jn}=T^{-1/2}e^{in\omega t}P(t)(H_F+n\hbar\omega I_d)v_j=(\varepsilon_j+n\hbar\omega)\phi_{jn}.$$
The untransformed family $T^{-1/2}e^{in\omega t}v_j$ is a complete orthonormal basis by [F1] in each of the $d$ internal coordinates. Multiplication by $P$ is unitary by step 1.3, so its image $\{\phi_{jn}\}$ is also a complete orthonormal basis. [F1, F3, F4, F5, step 1.3, algebra] ∎
