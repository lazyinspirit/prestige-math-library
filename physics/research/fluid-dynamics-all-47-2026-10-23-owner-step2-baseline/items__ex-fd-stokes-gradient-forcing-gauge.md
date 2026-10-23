---
id: ex-fd-stokes-gradient-forcing-gauge
kind: example
title: "A gradient load observed through Stokes pressure"
status: draft
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-fd-bounded-stokes-observation-interface
  - thm-fd-stokes-load-observable-stability
  - prop-fd-pressure-gauge-observables
  - def-na-stokes-zero-mean-pressure-and-velocity-spaces
  - thm-na-weak-stokes-solvability-lipschitz-domain
  - cor-cauchy-schwarz-inequality-for-l-two
dependency_roles:
  def-fd-bounded-stokes-observation-interface: mathematical-premise
  thm-fd-stokes-load-observable-stability: mathematical-premise
  prop-fd-pressure-gauge-observables: mathematical-premise
  def-na-stokes-zero-mean-pressure-and-velocity-spaces: mathematical-premise
  thm-na-weak-stokes-solvability-lipschitz-domain: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 53 — Stokes Equations"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf
      locator: "Chapter 53, §§53.1–53.2.2: homogeneous weak Stokes formulation, pressure gauge, and well-posedness."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element Methods and Applications"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "§§4.2.1–4.2.3 and §8.2.1, Example 4.2.2, pp. 225–229 and 462–463: weak Stokes solvability and pressure modulo constants."
verification:
  precheck: pending
---

## Example

Assume Countable Choice. Let $d\in\{2,3\}$, let $D\subset\mathbb R^d$ be a nonempty bounded connected Lipschitz open set, and let $\nu>0$. Use $V=H^1_0(D;\mathbb R^d)$ with gradient norm and $Q=L^2_0(D)$. Define $\bar x_1:=|D|^{-1}\int_Dx_1\,dx$ and $\phi(x):=x_1-\bar x_1$. The load $F_\phi(v):=-\int_D\phi\,\operatorname{div}v\,dx$ is the gradient forcing $\nabla\phi=e_1$ in the weak sense. The unique weak Stokes solution is $(u,p)=(0,\phi)$, and the bounded gauge-invariant sensor $S_\phi(q):=\int_D\phi q\,dx$ has reading $S_\phi(p)=\int_D\phi^2\,dx>0$.

## Example references

[Guermond, MATH 661, Chapter 53](https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf), §§53.1–53.2.2, homogeneous weak Stokes formulation, pressure gauge, and well-posedness.

[Boffi–Brezzi–Fortin, *Mixed Finite Element Methods and Applications*](https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf), §§4.2.1–4.2.3 and §8.2.1, Example 4.2.2, pp. 225–229 and 462–463, weak Stokes solvability and pressure modulo constants.

## Facts & Assumptions

**Given:** Countable Choice; the stated domain and viscosity; the homogeneous weak Stokes spaces and equations; and the coordinate function $x\mapsto x_1$ on $D$.

[A1] Countable Choice is required for the weak Stokes solvability input. [[thm-na-weak-stokes-solvability-lipschitz-domain]]

[F1] [[def-na-stokes-zero-mean-pressure-and-velocity-spaces]]: $V=H^1_0(D;\mathbb R^d)$ is the $H^1$-closure of compactly supported smooth fields, $Q=L^2_0(D)$, and the pressure term is $b(v,p)=-\int_Dp\,\operatorname{div}v\,dx$.

[F2] [[thm-na-weak-stokes-solvability-lipschitz-domain]]: every bounded load in $V'$ has a unique weak Stokes pair with its pressure in $Q$.

[F3] [[thm-fd-stokes-load-observable-stability]]: $p_F$ denotes that unique normalized pressure for load $F$.

[F4] [[def-fd-bounded-stokes-observation-interface]]: a sensor is a bounded real-linear functional on $Q$.

[F5] [[prop-fd-pressure-gauge-observables]]: a weight in $Q$ defines a bounded gauge-invariant pressure sensor.

[F6] [[cor-cauchy-schwarz-inequality-for-l-two]]: the integral pairing of $L^2(D)$ functions is bounded by the product of their $L^2$ norms.

## Verification

1.1 Since $D$ is nonempty and open it contains a ball, so $|D|>0$; boundedness gives $|D|<\infty$. Hence $x_1\in L^2(D)$ and $\bar x_1$ is finite. Thus $\phi\in L^2(D)$, $\int_D\phi\,dx=0$, and its weak gradient is $\nabla\phi=e_1$. [given, F1, algebra]

2.1 For $v\in C_c^\infty(D;\mathbb R^d)$, weak integration by parts gives $\int_D\nabla\phi\cdot v\,dx=-\int_D\phi\,\operatorname{div}v\,dx$. By the $H^1$-closure in [F1], approximate any $v\in V$ by such fields; both integrals converge by Cauchy–Schwarz, so the identity holds for all $v\in V$. Pointwise $|\operatorname{div}v|=|\operatorname{tr}\nabla v|\le\sqrt d\,|\nabla v|_F$, whence $|F_\phi(v)|\le\sqrt d\,\|\phi\|_2\|\nabla v\|_2$ and $F_\phi\in V'$. [F1, F6, step 1.1, algebra]

3.1 For every $v\in V$, $a_\nu(0,v)+b(v,\phi)=-\int_D\phi\,\operatorname{div}v\,dx=F_\phi(v)$ by step 2.1, while $b(0,q)=0$ for every $q\in Q$. Thus $(0,\phi)$ satisfies both weak Stokes equations. Uniqueness in [F2] identifies it with the solution, so the pressure notation in [F3] gives $p_{F_\phi}=\phi$. [given, A1, F1, F2, F3, step 2.1]

4.1 By [F6], $S_\phi(q)=\int_D\phi q\,dx$ is bounded on $Q$; by [F4], [F5], and $\phi\in Q$, it is a bounded gauge-invariant sensor. Since a nonempty open $D$ contains a ball and no ball is contained almost everywhere in a hyperplane $x_1=\bar x_1$, $\phi$ is not zero almost everywhere; therefore $\int_D\phi^2\,dx>0$. [F4, F5, F6, step 1.1, step 3.1] ∎
