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
  - lem-qsm-matrix-state-calculus
  - thm-qsm-dt-reduced-unitary
dependency_roles:
  def-qc-partial-trace: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  thm-qsm-dt-reduced-unitary: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
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

[F3] [[thm-qsm-dt-reduced-unitary]]: for a finite Hermitian total Hamiltonian and fixed environment density $\sigma_E$, the product-prepared reduced map $\Phi_t(\rho)=\operatorname{Tr}_E(U_t(\rho\otimes\sigma_E)U_t^*)$ is a channel for each real $t$; this theorem does not assert a semigroup law.

## Counterexample


1.1 Let $Z=\operatorname{diag}(1,-1)$, take $g>0$ in ${\rm s}^{-1}$, and set $H=\hbar g\,Z\otimes Z$. With $\sigma_E=I_2/2=\frac12\sum_{b=\pm1}|b\rangle\langle b|$ and $U_t=e^{-itH/\hbar}$, the environment $Z$-eigenbasis gives $U_t=\sum_{b=\pm1}e^{-ibgtZ}\otimes|b\rangle\langle b|$. Applying the coordinate partial-trace formula [F1] to these two orthogonal environment sectors yields $\Phi_t(\rho)=\frac12(e^{-igtZ}\rho e^{igtZ}+e^{igtZ}\rho e^{-igtZ})$. By [F3] each $\Phi_t$ is a channel. [given, F1, F2, F3, algebra]

2.1 For $\rho=\begin{pmatrix}a&x\\y&d\end{pmatrix}$, direct multiplication gives $\Phi_t(\rho)=\begin{pmatrix}a&c(t)x\\c(t)y&d\end{pmatrix}$, where $c(t)=\cos(2gt)$. Set $\tau=\pi/(4g)>0$ and $\rho_+=|+\rangle\langle+|$, with $|+\rangle=(|0\rangle+|1\rangle)/\sqrt2$. Then $c(\tau)=0$ and $c(2\tau)=-1$, so $\Phi_\tau(\Phi_\tau(\rho_+))=I_2/2$ whereas $\Phi_{2\tau}(\rho_+)=| -\rangle\langle -|$, where $|-\rangle=(|0\rangle-|1\rangle)/\sqrt2$. The outputs differ, so $\Phi_{2\tau}\ne\Phi_\tau\circ\Phi_\tau$; the family is not a semigroup. [given, F2, step 1.1, algebra] ∎
