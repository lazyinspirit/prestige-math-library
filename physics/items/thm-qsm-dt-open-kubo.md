---
id: thm-qsm-dt-open-kubo
kind: theorem
title: Fixed-dissipator finite response and integrable kernel
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 6
deps:
  - def-qsm-dt-gns-detailed-balance
  - thm-qsm-dt-time-dependent-gksl
  - thm-qsm-dt-detailed-balance-gap
  - lem-qsm-dt-finite-trace-pairing-cyclicity
dependency_roles:
  def-qsm-dt-gns-detailed-balance: mathematical-premise
  thm-qsm-dt-time-dependent-gksl: mathematical-premise
  thm-qsm-dt-detailed-balance-gap: mathematical-premise
  lem-qsm-dt-finite-trace-pairing-cyclicity: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Robert Alicki and Karl Lendi, Quantum Dynamical Semigroups and Applications, Lecture Notes in Physics 717, §§1.3.4 and 1.4.2
      url: https://www.nzdr.ru/data/media/biblio/kolxoz/P/PS/PSa/Alicki%20R.%2C%20Lendi%20K.%20Quantum%20dynamical%20semigroups%20and%20applications%20%28LNP0717%2C%20Springer%2C%202007%29%28136s%29_PSa_.pdf
    - title: Eric A. Carlen and Jan Maas, Gradient flow and entropy inequalities for quantum Markov semigroups with detailed balance, §2
      url: https://arxiv.org/pdf/1609.01254
---

## Statement

Let $\mathcal L_0$ be the finite Schrödinger generator trace-dual to $G$ in [[def-qsm-dt-gns-detailed-balance]], and assume the gap hypotheses of [[thm-qsm-dt-detailed-balance-gap]] with $d>1$. Let $A\in M_d(\mathbb C)$, $B=B^*\in M_d(\mathbb C)$ be dimensionless observables, and let $h:[0,T]\to\mathbb R$ be continuous with units joules. For dimensionless $\epsilon\in\mathbb R$, perturb only the Hamiltonian by $H_\epsilon(t)=H_{\rm s}-\epsilon h(t)B$; hold the dissipator fixed. Let $\rho^\epsilon_t$ be the unique state solution with $\rho^\epsilon_0=\sigma$, supplied by [[thm-qsm-dt-time-dependent-gksl]].

Define $A_0:=A-\operatorname{Tr}(\sigma A)I$ and, for $\tau\geq0$,

$$R_{AB}(\tau):=\frac{i}{\hbar}\operatorname{Tr}\!\left(\sigma[e^{\tau G}A_0,B]\right).$$

Then, on every finite interval $[0,T]$, the derivative at $\epsilon=0$ exists and

$$\left.\frac{d}{d\epsilon}\operatorname{Tr}(\rho^\epsilon_tA)\right|_{\epsilon=0}=\int_0^t h(s)R_{AB}(t-s)\,ds.$$

The kernel is absolutely integrable on $[0,\infty)$. If $\mu$ is the smallest eigenvalue of $\sigma$, then

$$|R_{AB}(\tau)|\leq\frac{2\|B\|_\infty}{\hbar\sqrt{\mu}}\,e^{-\gamma\tau}\|A_0\|_\sigma.$$

This is an open-system model response with a fixed dissipator. It does not assert that the driven stationary state is the Gibbs state of $H_{\rm s}-\epsilon hB$.

## Facts & Assumptions

**Given:** The finite GKSL dynamics of $\mathcal L_0$, its trace-dual $G$, faithful stationary density $\sigma$, positive gap $\gamma$, Hermitian $B$, continuous field $h$, and initial preparation $\sigma$.

[F1] [[def-qsm-dt-gns-detailed-balance]]: $G$ is the trace-dual observable generator $i[H_{\rm s},\cdot]/\hbar+D$, with $D(I)=0$ and $[H_{\rm s},\sigma]=0$.

[F2] [[thm-qsm-dt-time-dependent-gksl]]: a continuous finite GKSL family has a unique CPTP propagator on every compact time interval.

[F3] [[thm-qsm-dt-detailed-balance-gap]]: $\sigma$ is stationary, centered observables decay in $\|\cdot\|_\sigma$ at least as $e^{-\gamma t}$, and $\sigma$ is faithful.

[F4] [[lem-qsm-dt-finite-trace-pairing-cyclicity]]: the finite trace is cyclic.

## Proof

1.1 Put $V(X):=i[B,X]/\hbar$. The perturbed Schrödinger generator is $\mathcal L_\epsilon(t)=\mathcal L_0+\epsilon h(t)V$. Since $\mathcal L_0$ leaves $\sigma$ stationary by [F3], variation of constants gives
$$
\rho^\epsilon_t=\sigma+\epsilon\int_0^t h(s)e^{(t-s)\mathcal L_0}V(\sigma)\,ds+\epsilon^2\int_{0\leq u\leq s\leq t}h(s)h(u)e^{(t-s)\mathcal L_0}V e^{(s-u)\mathcal L_0}V(\rho^\epsilon_u)\,du\,ds.
$$
The second integral is $O(\epsilon^2)$ uniformly on $[0,T]$: $h$ is bounded, $V$ is a bounded linear map on the finite matrix space, $\sup_{0\leq s\leq t\leq T}\|e^{(t-s)\mathcal L_0}\|_1<\infty$, and $\|\rho^\epsilon_u\|_1=1$ because [F2] gives a channel propagator. Thus the first derivative exists and equals $\int_0^t h(s)e^{(t-s)\mathcal L_0}V(\sigma)\,ds$. [given, F2, F3, algebra]

2.1 By the generator duality in [F1], the exponential power series gives $\operatorname{Tr}(A e^{\tau\mathcal L_0}X)=\operatorname{Tr}(e^{\tau G}A\,X)$ for every finite matrix $X$. Using [F4] and $V(\sigma)=i[B,\sigma]/\hbar$,
$$
\operatorname{Tr}\!\left(Ae^{\tau\mathcal L_0}V(\sigma)\right)=\frac{i}{\hbar}\operatorname{Tr}\!\left(\sigma[e^{\tau G}A,B]\right).
$$
The scalar part of $A$ commutes with $B$, so $A$ may be replaced by $A_0$. Substituting this identity into step 1.1 gives the stated response formula. [F1, F4, step 1.1, algebra]

3.1 Let $C=e^{\tau G}A_0$. The gap theorem gives $\|C\|_\sigma\leq e^{-\gamma\tau}\|A_0\|_\sigma$. If $\mu>0$ is the smallest eigenvalue of $\sigma$, then
$$
\|C\|_\infty\leq\frac{\|C\sigma^{1/2}\|_2}{\sqrt\mu}=\frac{\|C\|_\sigma}{\sqrt\mu}.
$$
The finite density trace satisfies $|\operatorname{Tr}(\sigma M)|\leq\|M\|_\infty$: diagonalize $\sigma$, write its nonnegative eigenvalues summing to one, and bound each diagonal matrix element of $M$ by $\|M\|_\infty$. Therefore $|\operatorname{Tr}(\sigma[C,B])|\leq2\|B\|_\infty\|C\|_\infty$, which proves the exponential bound and absolute integrability. [F3, step 2.1, algebra] ∎

## Remarks

If the bath rates or jump operators depended on the perturbing field, a derivative of the dissipator would appear in step 1.1. It is absent here by the explicit fixed-dissipator hypothesis. The formula is not a universal fluctuation-dissipation theorem and is not an empirical observation.
