---
id: pthm-fd-smooth-consistency
kind: physics-theorem
title: Weak continuation agrees with smooth periodic evolution
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 6
deps:
  - pthm-fd-periodic-weak-continuation
  - thm-fd-weak-smooth-uniqueness
  - thm-local-smooth-periodic-euler-viscous-solution
  - lem-periodic-pressure-reconstruction
  - def-fd-periodic-solenoidal-spaces
  - def-periodic-vector-sobolev-space-and-leray-projection
  - def-countable-choice
  - def-dependent-choice
dependency_roles:
  pthm-fd-periodic-weak-continuation: physical-result
  thm-fd-weak-smooth-uniqueness: mathematical-premise
  thm-local-smooth-periodic-euler-viscous-solution: mathematical-premise
  lem-periodic-pressure-reconstruction: mathematical-premise
  def-fd-periodic-solenoidal-spaces: mathematical-premise
  def-periodic-vector-sobolev-space-and-leray-projection: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
proof_strategy: direct
physical_scope: >-
  Smooth divergence-free initial data for the three-dimensional constant-
  density, constant-viscosity, unforced periodic model. Every Leray–Hopf weak
  continuation agrees with the smooth solution only on its local smooth
  interval. No global 3D regularity or uniqueness among arbitrary weak solutions
  is claimed.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lenya Ryzhik, Lecture Notes for Math 256B, Version 2024"
      url: "https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf"
      locator: "§6.1, printed pp. 53–54; the source proves strong-solution uniqueness,
        while the local weak–smooth comparison is supplied by the exact
        mathematical dependency."
    - title: "Luigi C. Berselli and Stefano Spirito, On the Existence of Leray–Hopf
        Weak Solutions to the Navier–Stokes Equations, Fluids 6(1), 42 (2021)"
      url: "https://www.mdpi.com/2311-5521/6/1/42/pdf"
      locator: "§3.1 and §4, printed pp. 5–6 and 8–12, for the weak formulation and
        energy inequality; it does not supply the local weak–smooth comparison
        used here."
verification:
  precheck: pending
---

## Statement

Let $L>0$ be the numerical period in the declared SI metre unit, with physical side length $L\,\mathrm m$; let $\rho_0>0$ in $\mathrm{kg\,m^{-3}}$, $\mu>0$ in $\mathrm{Pa\,s}$, and $\nu=\mu/\rho_0>0$ in $\mathrm{m^2\,s^{-1}}$. Let $s\ge4$ be an integer and let $u_0\in H^s_\sigma(\mathbb T_L^3;\mathbb R^3)\cap C^\infty(\mathbb T_L^3;\mathbb R^3)$ be a divergence-free initial velocity in $\mathrm{m\,s^{-1}}$. Here $H^s_\sigma$ consists of real Fourier-weighted fields with dimensionless weights $(1+L^2|\kappa_k|^2)^s$ and $k\cdot\widehat u_0(k)=0$ for $k\ne0$, with the constant Fourier mode unrestricted. Assume Countable Choice and Dependent Choice. Then there are $T>0$, a smooth periodic velocity $v\in C^\infty([0,T]\times\mathbb T_L^3;\mathbb R^3)$, and a smooth mean-zero kinematic pressure $\pi_v$, with $v(0)=u_0$, such that
$$\partial_tv+\operatorname{div}(v\otimes v)+\nabla\pi_v=\nu\Delta v,\qquad \operatorname{div}v=0.$$
Every global unforced periodic Leray–Hopf weak continuation $u$ of the same model and data satisfies $u(t)=v(t)$ in $H$ for all $t\in[0,T]$. The physical pressure is $p_v=\rho_0\pi_v$ in $\mathrm{Pa}$. The conclusion applies only while this smooth branch exists; it does not assert global smoothness or uniqueness among arbitrary weak solutions.

## Statement references

[[thm-local-smooth-periodic-euler-viscous-solution|Published local smooth periodic Euler/viscous existence theorem on the unit torus]]

[[lem-periodic-pressure-reconstruction|Published smooth mean-zero periodic pressure reconstruction]]

[[thm-fd-weak-smooth-uniqueness|Conditional weak–smooth uniqueness on the smooth interval]]

[Lenya Ryzhik, *Lecture Notes for Math 256B*, Version 2024, §6.1, printed pp. 53–54](https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf)

[Berselli and Spirito, *On the Existence of Leray–Hopf Weak Solutions to the Navier–Stokes Equations*, §3.1 and §4, printed pp. 5–6 and 8–12](https://www.mdpi.com/2311-5521/6/1/42/pdf)

## Facts & Assumptions

**Given:** The periodic model parameters, a smooth divergence-free initial velocity on $\mathbb T_L^3$, Countable Choice and Dependent Choice.

[A1] [[pthm-fd-periodic-weak-continuation]]: under Countable Choice, a global weak periodic Leray–Hopf velocity with the same $\nu$ and $u_0$ exists.

[F1] [[thm-local-smooth-periodic-euler-viscous-solution]]: on the unit torus $\mathbb T^3=(\mathbb R/\mathbb Z)^3$ defined by [[def-periodic-vector-sobolev-space-and-leray-projection]], smooth divergence-free data in $H^s_\sigma\cap C^\infty$, integer $s\ge4$, and $\nu\ge0$ give a smooth projected-equation solution on a positive interval; its proof assumes Countable Choice.

[F2] [[lem-periodic-pressure-reconstruction]]: for a smooth divergence-free solution of the projected equation on $\mathbb T^3$, the Fourier pressure with zero mean is smooth and satisfies $\nabla\pi=-(I-P)((v\cdot\nabla)v)$; it is the unique smooth mean-zero pressure.

[F3] [[thm-fd-weak-smooth-uniqueness]]: this draft mathematical supplier compares a global unforced periodic Leray–Hopf velocity $u$ with a smooth divergence-free velocity $v\in C^\infty([0,T]\times\mathbb T_L^d;\mathbb R^d)$ and smooth pressure $q\in C^\infty([0,T]\times\mathbb T_L^d)$ solving the same equation with the same initial data and viscosity; its proof gives $u(t)=v(t)$ in $H$ on $[0,T]$. We use that comparison under the Statement's Countable Choice and Dependent Choice assumptions: the supplier's absolutely-continuous Grönwall argument uses both principles when applying the fundamental theorem for absolutely continuous functions. It is conditional on the given smooth pair and does not assert its existence.

[F4] [[def-fd-periodic-solenoidal-spaces]]: $\mathbb T_L^3$ uses normalized measure $L^{-3}dx$, $H^s$ has the stated dimensionless Fourier weights, and $H$ has unrestricted mean mode.

[A2] [[def-countable-choice]]: every countable family of nonempty sets has a choice function.

[A3] [[def-dependent-choice]]: for an entire relation on a nonempty set and a specified start, an $\mathbb N$-indexed chain exists.

## Proof

**Given:** The data and assumptions in the Statement, together with [A1]–[A3] and [F1]–[F4].

1.1 Define $y=x/L$, $\tau=t/L^2$, and $\widetilde u_0(y)=L u_0(Ly)$. The period-$L$ Fourier weights $(1+L^2|\kappa_k|^2)^s$, with $\kappa_k=2\pi k/L$, equal the unit-torus weights $(1+4\pi^2|k|^2)^s$, so [F4] makes $\widetilde u_0$ a smooth divergence-free datum in the required $H^s_\sigma$. By [F1] and [A2], there is a smooth projected-equation solution $\widetilde v$ on some interval $[0,\widetilde T]$ for the same $\nu$. Set $v(t,x)=L^{-1}\widetilde v(t/L^2,x/L)$; each time, convective, and viscous term acquires the same factor $L^{-3}$, so $v$ is a smooth solution on $[0,T]$, where $T=L^2\widetilde T>0$, with $v(0)=u_0$. [F1, F4, A2]

2.1 Apply [F2] to $\widetilde v$ to obtain a smooth mean-zero pressure $\widetilde\pi$ for its primitive equation. The rescaled field $\pi_v(t,x)=L^{-2}\widetilde\pi(t/L^2,x/L)$ is smooth, has mean zero, and its gradient scales by $L^{-3}$; therefore $v,\pi_v$ satisfy the full equation in the Statement. [F2, step 1.1]

3.1 By [A1], choose a global weak Leray–Hopf velocity $u$ with the same initial datum and viscosity as $v$. The exact Fourier convention and initial trace are those in [F4], and both $u$ and $v$ solve the same periodic model. [A1, F4, step 1.1, step 2.1]

4.1 The hypotheses of [F3] hold: $u$ is global Leray–Hopf by step 3.1, $v$ and $\pi_v$ are smooth by steps 1.1–2.1, and they share $u_0$ and $\nu$. With the exact Countable and Dependent Choice assumptions [A2]–[A3], the weak–smooth comparison gives $u(t)=v(t)$ in $H$ for every $t\in[0,T]$. This is restricted to the smooth interval. [F3, A2, A3, step 3.1, step 1.1, step 2.1] ∎
