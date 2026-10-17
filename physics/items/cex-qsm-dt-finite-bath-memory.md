---
id: cex-qsm-dt-finite-bath-memory
kind: counterexample
title: Finite-bath dephasing revival violates semigroup
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 4
deps:
  - def-qc-partial-trace
  - def-complex-exponential
  - lem-qsm-matrix-state-calculus
  - thm-qsm-dt-reduced-unitary
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-complex-exponential-addition-and-real-extension
  - thm-sine-and-cosine-parametrize-the-unit-circle
dependency_roles:
  def-qc-partial-trace: mathematical-premise
  def-complex-exponential: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  thm-qsm-dt-reduced-unitary: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
  thm-sine-and-cosine-parametrize-the-unit-circle: mathematical-premise
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
    - title: John Watrous, The Theory of Quantum Information, Chapter 2, §§2.1.3–2.2.2
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf
    - title: Lin Lin and Nathan Wiebe, Quantum Algorithms for Scientific Computation, Chapter 3, §§3.2–3.3
      url: https://math.berkeley.edu/~linlin/qasc/live_notes_0315.pdf
---

## Statement refuted

Every reduced-unitary family from a fixed finite system–environment Hamiltonian and a fixed product environment state is a semigroup: $\Phi_{t+s}=\Phi_t\circ\Phi_s$ for all $t,s\geq0$.

## Facts & Assumptions

**Given:** Finite system and environment spaces $\mathbb C^2$, a total Hamiltonian $H=H^*$, $\hbar>0$ in joule-seconds, time in seconds, and a fixed product preparation $\rho\otimes\sigma_E$.

[F1] [[def-qc-partial-trace]]: $\operatorname{Tr}_E$ contracts the environment coordinate in the ordered product basis, $(\operatorname{Tr}_ER)_{aa'}=\sum_bR_{(a,b),(a',b)}$.

[F2] [[lem-qsm-matrix-state-calculus]]: finite Hermitian matrices have spectral exponentials, and the finite trace is cyclic.

[F3] [[thm-qsm-dt-reduced-unitary]]: for a finite Hermitian total Hamiltonian and fixed environment density $\sigma_E$, the product-prepared reduced map $\Phi_t(\rho)=\operatorname{Tr}_E(U_t(\rho\otimes\sigma_E)U_t^*)$ is a channel for each real $t$ and uses the operator-norm power-series exponential. This theorem does not assert a semigroup law.

[F4] [[def-complex-exponential]]: $\exp z=\sum_{n=0}^{\infty}z^n/n!$ for every $z\in\mathbb C$, and $\exp0=1$.

[F5] [[thm-complex-exponential-addition-and-real-extension]]: $\exp(z+w)=\exp z\exp w$ for $z,w\in\mathbb C$.

[F6] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]: for real $\theta$, $\exp(i\theta)=\cos\theta+i\sin\theta$ and $|\exp(i\theta)|=1$.

[F7] [[thm-sine-and-cosine-parametrize-the-unit-circle]]: every point of the unit circle has the form $(\cos\theta,\sin\theta)$ for some $\theta\in[0,2\pi)$.

## Counterexample


1.1 Let $Z=\operatorname{diag}(1,-1)$, take $g>0$ in ${\rm s}^{-1}$, and set $H=\hbar g\,Z\otimes Z$. With $\sigma_E=I_2/2=\frac12\sum_{b=\pm1}|b\rangle\langle b|$ and $U_t=e^{-itH/\hbar}$, the power-series definition of the finite operator exponential in [F3] and the $Z$-eigenbasis give $U_t=\sum_{b=\pm1}\operatorname{diag}(\exp(-ibgt),\exp(ibgt))\otimes|b\rangle\langle b|$. Applying [F1] to the two orthogonal environment sectors yields $\Phi_t(\rho)=\frac12(V_t\rho V_t^*+V_t^*\rho V_t)$, where $V_t=\operatorname{diag}(\exp(-igt),\exp(igt))$. In matrix coordinates, $\Phi_t\!\left(\begin{smallmatrix}a&x\\y&d\end{smallmatrix}\right)=\left(\begin{smallmatrix}a&\kappa(t)x\\\kappa(t)y&d\end{smallmatrix}\right)$ with $\kappa(t):=\frac12(\exp(-2igt)+\exp(2igt))$. By [F3], each $\Phi_t$ is a channel. [given, F1, F2, F3, F4, F5, F6, algebra]

2.1 By [F7], choose a dimensionless $\theta\in[0,2\pi)$ with $(\cos\theta,\sin\theta)=(0,1)$; hence $\theta>0$. Equation [F6] gives $\exp(i\theta)=i$, and [F5] with [F4] gives $\exp(-i\theta)=-i$ and $\exp(2i\theta)=\exp(-2i\theta)=-1$. Set $\tau=\theta/(2g)>0$ and $\rho_+=|+\rangle\langle+|$, with $|+\rangle=(|0\rangle+|1\rangle)/\sqrt2$. By step 1.1, $\kappa(\tau)=\frac12(-i+i)=0$ and $\kappa(2\tau)=\frac12(-1-1)=-1$. Therefore $\Phi_\tau(\Phi_\tau(\rho_+))=I_2/2$ whereas $\Phi_{2\tau}(\rho_+)=| -\rangle\langle -|$, where $| -\rangle=(|0\rangle-|1\rangle)/\sqrt2$. The outputs differ, so $\Phi_{2\tau}\ne\Phi_\tau\circ\Phi_\tau$; the family is not a semigroup. [given, F4, F5, F6, F7, step 1.1, algebra] ∎
