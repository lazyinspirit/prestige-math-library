---
id: thm-nrqmx-finite-floquet-normal-form
kind: theorem
domain: mathematics
library: mathematics
title: Finite Floquet unitary normal form
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 2
deps:
  - def-countable-choice
  - def-self-adjoint-and-normal-endomorphism
  - thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-sine-and-cosine-parametrize-the-unit-circle
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-kernel-and-fibres-of-complex-exponential
  - def-nrqmx-finite-hermitian-matrix-exponential
  - lem-nrqmx-finite-hermitian-matrix-exponential
dependency_roles:
  def-countable-choice: mathematical-premise
  def-self-adjoint-and-normal-endomorphism: mathematical-premise
  thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness: mathematical-premise
  thm-complex-spectral-theorem-for-normal-endomorphisms: mathematical-premise
  thm-sine-and-cosine-parametrize-the-unit-circle: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  thm-kernel-and-fibres-of-complex-exponential: mathematical-premise
  def-nrqmx-finite-hermitian-matrix-exponential: mathematical-premise
  lem-nrqmx-finite-hermitian-matrix-exponential: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Konrad Viebahn, Introduction to Floquet theory, lecture notes (2020)
      url: https://boulderschool.yale.edu/sites/default/files/files/floquetlecture_Konrad%20Viebahn.pdf
      locator: Section II, equations (10)-(20), period propagator, Hermitian Floquet Hamiltonian, and periodic micromotion.
    - title: André Eckardt and Egidijus Anisimovas, High-frequency approximation for periodically driven quantum systems from a Floquet-space perspective, New Journal of Physics 17 (2015), 093039
      url: https://arxiv.org/pdf/1502.06477
      locator: Sections 2.1-2.3 and Appendix A, equations (1)-(20) and (178)-(183), Floquet modes, quasienergy branches, and the period propagator.
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Let $d\ge1$, $T>0$, $\hbar>0$, $\omega=2\pi/T$, and let $H:\mathbb R\to M_d(\mathbb C)$ be continuous, $T$-periodic, and Hermitian at every time. Let $U(t,s)$ be the unitary propagator solving $i\hbar\,\partial_tU(t,s)=H(t)U(t,s)$ and $U(s,s)=I_d$. There are an orthonormal basis $v_1,\ldots,v_d$ and real numbers $\varepsilon_1,\ldots,\varepsilon_d$ such that
$$U(T,0)v_j=e^{-iT\varepsilon_j/\hbar}v_j\qquad(1\le j\le d).$$
Define the Hermitian matrix $H_Fv_j=\varepsilon_jv_j$ and the quasienergy classes $\varepsilon_j+\hbar\omega\mathbb Z$. With $P(t):=U(t,0)e^{itH_F/\hbar}$, $P(t)$ is a $T$-periodic unitary matrix and
$$U(t,0)=P(t)e^{-itH_F/\hbar}\qquad(t\in\mathbb R).$$
The real representative $\varepsilon_j$ may be changed by any integer multiple of $\hbar\omega$ without changing its eigenphase; no preferred real branch is asserted.

## Statement references

[[thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness]]

[[thm-complex-spectral-theorem-for-normal-endomorphisms]]

[[thm-sine-and-cosine-parametrize-the-unit-circle]]

[[thm-kernel-and-fibres-of-complex-exponential]]

[[def-nrqmx-finite-hermitian-matrix-exponential]]

## Facts & Assumptions

**Given:** Countable Choice, $d\ge1$, $T>0$, $\hbar>0$, and the continuous periodic Hermitian matrix family $H$.

[A1] Countable Choice is assumed, as required by the norm-continuous bounded-dynamics supplier ([[def-countable-choice]]).

[F1] [[thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness]]: on each compact time interval a norm-continuous bounded self-adjoint family has a unique unitary propagator with the differential equation, initial identity, composition law, and uniqueness for every initial value.

[F2] A unitary endomorphism is normal by [[def-self-adjoint-and-normal-endomorphism]], and the finite-dimensional complex spectral theorem gives it an orthonormal eigenbasis ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[F3] Every point of the real unit circle has the form $(\cos\theta,\sin\theta)$ for some $\theta\in[0,2\pi)$ ([[thm-sine-and-cosine-parametrize-the-unit-circle]]); Euler's identity gives $e^{i\theta}=\cos\theta+i\sin\theta$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F4] Two complex exponential values agree exactly when their exponents differ by an element of $2\pi i\mathbb Z$ ([[thm-kernel-and-fibres-of-complex-exponential]]).

[F5] The finite matrix exponential of a Hermitian matrix is unitary, differentiable, and obeys the exponential group law ([[def-nrqmx-finite-hermitian-matrix-exponential]], [[lem-nrqmx-finite-hermitian-matrix-exponential]]).

## Proof

**Given:** [A1] and [F1]–[F5].

1.1 On any compact interval, $H$ is a norm-continuous bounded self-adjoint family, so [F1] supplies the unique unitary propagator there. On overlapping compact intervals the propagators agree by uniqueness; hence $U(t,s)$ is consistently defined for all real $s,t$. For each fixed $t$, the curves $r\mapsto U(r+T,T)$ and $r\mapsto U(r,0)$ solve the same differential equation because $H(r+T)=H(r)$, and both equal $I_d$ at $r=0$. Uniqueness in [F1] gives $U(t+T,T)=U(t,0)$. [A1, F1, given]

1.2 Put $M=U(T,0)$. By [F1], $M$ is unitary, so [F2] gives an orthonormal eigenbasis $v_j$ with eigenvalues $\lambda_j$ of modulus one. Write $\lambda_j=x_j+iy_j$; then $(x_j,-y_j)$ lies on the real unit circle. By [F3], choose $\theta_j\in[0,2\pi)$ with $x_j=\cos\theta_j$ and $-y_j=\sin\theta_j$, so $\lambda_j=e^{-i\theta_j}$. Set $\varepsilon_j=\hbar\theta_j/T$ and define $H_Fv_j=\varepsilon_jv_j$. Each $\varepsilon_j$ is real, hence $H_F$ is Hermitian, and [F5] gives $e^{-iTH_F/\hbar}v_j=e^{-i\theta_j}v_j=\lambda_jv_j$. Equality on the basis proves $e^{-iTH_F/\hbar}=U(T,0)$. [F1, F2, F3, F5, given]

1.3 If $\varepsilon'_j$ gives the same eigenphase as $\varepsilon_j$, then $\exp(-iT(\varepsilon'_j-\varepsilon_j)/\hbar)=1$. By [F4], $T(\varepsilon'_j-\varepsilon_j)/\hbar\in2\pi\mathbb Z$, so $\varepsilon'_j-\varepsilon_j\in\hbar\omega\mathbb Z$. Conversely adding $n\hbar\omega$ multiplies the phase by $e^{-i2\pi n}=1$. Thus the class stated is independent of the real lift. [F4, given, algebra]

2.1 Define $P(t)=U(t,0)e^{itH_F/\hbar}$. Both factors are unitary by [F1] and [F5], so $P(t)$ is unitary, and the group law in [F5] gives $P(t)e^{-itH_F/\hbar}=U(t,0)$. By composition and step 1.1, $U(t+T,0)=U(t+T,T)U(T,0)=U(t,0)e^{-iTH_F/\hbar}$. Therefore
$$P(t+T)=U(t,0)e^{-iTH_F/\hbar}e^{i(t+T)H_F/\hbar}=U(t,0)e^{itH_F/\hbar}=P(t),$$
where the middle cancellation follows from [F5]. This proves the factorization and periodicity. [F1, F5, step 1.1, step 1.2, algebra] ∎
