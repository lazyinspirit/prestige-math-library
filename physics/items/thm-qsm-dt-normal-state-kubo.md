---
id: thm-qsm-dt-normal-state-kubo
kind: theorem
title: Trace-class bounded-observable response
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-qsm-density-trace-state
  - def-axiom-of-choice
  - lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group
  - thm-cyclicity-of-the-trace
  - thm-trace-class-is-a-two-sided-banach-operator-ideal
  - thm-trace-is-absolutely-convergent-and-basis-independent
  - thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues
  - lem-nuclear-series-characterizes-trace-norm
  - lem-qsm-dt-banach-volterra-dyson
dependency_roles:
  def-qsm-density-trace-state: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group: mathematical-premise
  thm-cyclicity-of-the-trace: mathematical-premise
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
  thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
  thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues: mathematical-premise
  lem-nuclear-series-characterizes-trace-norm: mathematical-premise
  lem-qsm-dt-banach-volterra-dyson: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Ryogo Kubo, Statistical-Mechanical Theory of Irreversible Processes I, Journal of the Physical Society of Japan 12 (1957), §2
      url: https://staff.ulsu.ru/moliver/ref/kubo/kubo57.pdf
    - title: "MIT OpenCourseWare 8.512, Theory of Solids II, Lecture 1: Linear Response Theory, §§1.1–1.2"
      url: https://ocw.mit.edu/courses/8-512-theory-of-solids-ii-spring-2009/0d1bb83b0e6471874b6c3e02aff52ad5_MIT8_512s09_lec01_rev2.pdf
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, complete lecture notes, §3.3.11–3.3.12
      url: https://arxiv.org/pdf/1311.2717
---

## Statement

Assume the Axiom of Choice. Let $\mathcal H\ne\{0\}$ be a separable complex Hilbert space, let $H=H^*$ be a densely defined operator with domain $D(H)$, and let $\hbar>0$. Put $U_0(t)=e^{-itH/\hbar}$. Let $\rho$ be a density operator, meaning a positive trace-class operator with $\operatorname{Tr}\rho=1$ as in [[def-qsm-density-trace-state]], and assume $\rho U_0(t)=U_0(t)\rho$ for every $t\in\mathbb R$. Let $A,B\in\mathcal B(\mathcal H)$ be bounded self-adjoint operators, let $T>0$ be a finite time in s, let $h:[0,T]\to\mathbb R$ be continuous, and let $\epsilon\in\mathbb R$ be dimensionless. Interpret $H$ in J, $\hbar$ in J s, and $h(t)B$ in J; if $A,B$ carry units $[A],[B]$, then $R_{AB}$ has units $[A][B]/(\mathrm J\,\mathrm s)$.

Define $B_s=U_0(s)^*BU_0(s)$, $\alpha_t(A)=U_0(t)^*AU_0(t)$, and
$$
R_{AB}(u)=\frac{i}{\hbar}\operatorname{Tr}\!\left(\rho[\alpha_u(A),B]\right),\qquad C_T=\frac2{\hbar}\int_0^T|h(s)|\,\|B\|\,ds.
$$
The trace-class interaction-picture solution of $\rho_I'(t)=\frac{i\epsilon h(t)}{\hbar}[B_t,\rho_I(t)]$, $\rho_I(0)=\rho$, satisfies
$$
\operatorname{Tr}(\rho_I(t)\alpha_t(A))=\operatorname{Tr}(\rho\alpha_t(A))+\epsilon\int_0^t h(s)R_{AB}(t-s)\,ds+r_\epsilon(t),
$$
where $|r_\epsilon(t)|\le\|A\|(|\epsilon|C_T)^2e^{|\epsilon|C_T}/2$ for $0\le t\le T$. Thus the bounded-observable first variation is exact, with an explicit finite-time remainder. No energy or entropy moment of $\rho$ is assumed, and no trace of an unbounded product such as $\rho H A$ is used.

## Facts & Assumptions

**Given:** Choice, the Hilbert space, self-adjoint $H$, $\hbar>0$, trace-class density $\rho$, bounded self-adjoint $A,B$, continuous real control $h$, and finite $T$.

[A1] [[def-axiom-of-choice]]: the full Axiom of Choice is assumed for the unbounded spectral theorem used to define $U_0(t)$.

[F1] [[def-qsm-density-trace-state]]: a density operator is positive, trace class, and has trace one; its state pairing with a bounded operator is $\omega_\rho(A)=\operatorname{Tr}(\rho A)$.

[F2] [[lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group]]: under [A1], $U_0(t)=e^{-itH/\hbar}$ is a strongly continuous unitary group, preserves $D(H)$, and differentiates there; the exact scale change from $e^{isH}$ is $s=-t/\hbar$.

[F3] [[thm-trace-class-is-a-two-sided-banach-operator-ideal]]: trace-class operators are complete in trace norm, bounded left/right multiplication is trace-class, and $\|AXB\|_1\le\|A\|\|X\|_1\|B\|$.

[F4] [[thm-cyclicity-of-the-trace]]: for trace-class $X$ and bounded $Y$, $\operatorname{Tr}(YX)=\operatorname{Tr}(XY)$.

[F5] [[thm-trace-is-absolutely-convergent-and-basis-independent]]: the trace is linear and basis independent, and $|\operatorname{Tr}X|\le\|X\|_1$.

[F6] [[lem-qsm-dt-banach-volterra-dyson]]: a strongly continuous bounded coefficient on a Banach space has a unique norm-convergent Volterra series solution with the stated quadratic remainder; its Hilbert-space clause gives a unitary solution operator for a strongly continuous skew-adjoint coefficient.

[F7] [[lem-nuclear-series-characterizes-trace-norm]]: each trace-class operator has a nuclear singular-value representation with summable singular values. Its finite-rank partial sums $X_N$ satisfy $\|X-X_N\|_1\le\sum_{j>N}s_j(X)\to0$: the tail is a nuclear representation, and the supplier's infimum formula bounds its trace norm by that tail sum.

[F8] [[thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues]]: for a positive trace-class operator $\rho$, $\operatorname{Tr}\rho=\|\rho\|_1$.

## Proof


**Proof technique:** direct.

**Given:** [A1], [F1]–[F6], and the stationarity condition $\rho U_0(t)=U_0(t)\rho$.

1.1 For a rank-one operator $R_{u,v}x=\langle x,v\rangle u$, one has $\|R_{u,v}\|_1=\|u\|\|v\|$, and $\|R_{u,v}-R_{u',v'}\|_1\le\|u-u'\|\|v\|+\|u'\|\|v-v'\|$. Strong continuity in [F2] therefore makes $t\mapsto U_0(t)R_{u,v}U_0(t)^*$ trace-norm continuous. Finite sums have the same property. By [F7], finite-rank SVD truncations $X_N$ of any trace-class $X$ satisfy $\|X-X_N\|_1\to0$. The ideal estimate in [F3] and $\|U_0(t)\|=\|U_0(t)^*\|=1$ bound the conjugated tails uniformly by $\|X-X_N\|_1$, so $t\mapsto U_0(t)XU_0(t)^*$ is trace-norm continuous. [given, A1, F2, F3, F7, algebra]


1.2 For finite-rank $X_N=\sum_{j=1}^mR_{u_j,v_j}$, $B_tX_N=\sum_jR_{B_tu_j,v_j}$ and $X_NB_t=\sum_jR_{u_j,B_t v_j}$ because $B_t=B_t^*$. Strong continuity of $B_t$ makes both curves trace-norm continuous. For general trace-class $X$, take the finite-rank approximants from [F7] and use $\|B_t(X-X_N)\|_1,\|(X-X_N)B_t\|_1\le\|B\|\|X-X_N\|_1$ uniformly in $t$. Thus $X\mapsto \frac{i h(t)}{\hbar}[B_t,X]$ is strongly continuous on the trace-class Banach space and has norm bound $2|h(t)|\|B\|/\hbar$. [given, F2, F3, F7, algebra]


1.3 Apply [F6] on the trace-class Banach space with $K_t(X)=\frac{i h(t)}{\hbar}[B_t,X]$ and $x_0=\rho$. By [F1] and [F8], $\rho$ is positive, has trace one, and satisfies $\|\rho\|_1=1$; its Volterra solution has the claimed trace-norm linear approximation and remainder bound with $C_T=\frac2{\hbar}\int_0^T|h(s)|\|B\|\,ds$. The Hilbert clause of [F6], applied to $K_t=i h(t)B_t/\hbar$ on $\mathcal H$, gives a unitary solution operator $W(t)=W_\epsilon(t)$ satisfying $W'(t)u=\epsilon i h(t)B_tW(t)u/\hbar$ for every $u\in\mathcal H$. For a rank-one $R_{u,v}$, $W(t)R_{u,v}W(t)^*=R_{W(t)u,W(t)v}$ is trace-norm differentiable and its derivative is $\epsilon K_t(W(t)R_{u,v}W(t)^*)$, by the vector equation and skew-adjointness. Finite sums give the same integral equation. Approximate $\rho$ by finite-rank $\rho_N$ in trace norm using [F7]. Unitary invariance of trace norm follows from the ideal estimate [F3] applied to $W(t)$ and $W(t)^*$, both of norm one; hence $W(t)\rho_NW(t)^*\to W(t)\rho W(t)^*$ uniformly, while the right-hand integral errors are at most $|\epsilon|C_T\|\rho-\rho_N\|_1$. Thus $W(t)\rho W(t)^*$ solves the trace-class Volterra equation, and uniqueness in [F6] identifies it with $\rho_I(t)$. [given, F1, F3, F6, F7, F8, algebra]


2.1 The linear term in the expectation is $\frac{i\epsilon}{\hbar}\int_0^t h(s)\operatorname{Tr}([B_s,\rho]\alpha_t(A))\,ds$. By [F4], the trace integrand equals $\operatorname{Tr}(\rho[\alpha_t(A),B_s])$. The group law and stationarity give $[\alpha_t(A),B_s]=\alpha_s([\alpha_{t-s}(A),B])$ and $\operatorname{Tr}(\rho\alpha_s(C))=\operatorname{Tr}(\rho C)$ for bounded $C$. Hence the integrand is $\operatorname{Tr}(\rho[\alpha_{t-s}(A),B])$, producing the stated convolution and response kernel. [given, F2, F4, step 1.3, algebra]


3.1 The trace-norm remainder in step 1.3 changes the expectation by at most $\|A\|\|\rho_I(t)-\rho-\epsilon\int_0^tK_s(\rho)\,ds\|_1$ by [F3, F5]. This gives the stated bound. Since $A,B$ are self-adjoint and $\rho$ is positive, the commutator trace is purely imaginary by cyclicity; hence $R_{AB}(u)$ is real. No moment of $H$ occurs in any trace. [given, F3, F4, F5, step 1.3, step 2.1, algebra] ∎
