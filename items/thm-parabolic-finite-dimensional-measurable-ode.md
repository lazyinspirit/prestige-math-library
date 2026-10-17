---
id: thm-parabolic-finite-dimensional-measurable-ode
kind: theorem
title: Finite-dimensional parabolic Galerkin ODEs with measurable coefficients
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-parabolic-evolution-triple-and-energy-space
  - lem-vector-valued-continuous-curve-space-is-complete
  - thm-banach-fixed-point
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Christian Clason, Introduction to Finite Element Methods, lecture notes
      url: https://arxiv.org/pdf/1709.08618v2.pdf
      locator: "Chapter 12, §12.1, PDF p. 104: the finite-dimensional mass/stiffness system after spatial Galerkin discretization."
    - title: Long Chen, Finite Element Methods for Parabolic Equations
      url: https://www.math.uci.edu/~chenlong/226/ParabolicEquation.pdf
      locator: "§2.1, pp. 3–4: the method-of-lines mass-matrix ODE for a spatial finite-element space."
verification: {}
---

## Statement

Let $V_h$ be a finite-dimensional real subspace of an evolution space $V$,
continuously included in $H$. Let $a(t;\cdot,\cdot)$ be real bilinear,
measurable in $t$, uniformly bounded by $M$ and coercive by $\alpha>0$ on
$V_h$. If $f\in L^2(0,T;V_h^*)$ and $u_h^0\in V_h$, then there is a unique
$u_h\in H^1(0,T;V_h)$ with $u_h(0)=u_h^0$ and
$$((u_h)'(t),v_h)_H+a(t;u_h(t),v_h)=\langle f(t),v_h\rangle$$
for every $v_h\in V_h$ and almost every $t$. It satisfies
$$\|u_h(t)\|_H^2+\alpha\int_0^t\|u_h(s)\|_V^2\,ds \le \|u_h^0\|_H^2+\alpha^{-1}\int_0^t\|f(s)\|_{V_h^*}^2\,ds.$$
Here $H^1(0,T;V_h)$ means absolutely continuous $V_h$-valued coefficient
functions whose value and derivative are square-integrable.

## Facts & Assumptions

**Given:** The real evolution triple, finite-dimensional $V_h\subset V$,
the measurable bounded coercive form, $f\in L^2(0,T;V_h^*)$, and $u_h^0$.

[F1] The Hilbert embedding and the associated dual pairing are as defined in
[[def-parabolic-evolution-triple-and-energy-space]].

[F2] For a nonempty compact interval $J$ and $m\ge1$, the space
$C(J,\mathbb R^m)$ is complete in the supremum metric
([[lem-vector-valued-continuous-curve-space-is-complete]]).

[F3] A contraction from a nonempty complete metric space to itself has a
unique fixed point, obtained as the limit of its iterates
([[thm-banach-fixed-point]]).

## Proof

1.1 If $V_h=\{0\}$, the only possible solution is $u_h=0$ and the equation and estimate hold. Otherwise choose a finite $H$-orthonormal basis $(\phi_1,\ldots,\phi_m)$ of $V_h$. In this basis the variational equation is $c'(t)+B(t)c(t)=F(t)$, where $B_{ij}(t)=a(t;\phi_j,\phi_i)$ and $F_i(t)=\langle f(t),\phi_i\rangle$. The entries of $B$ are measurable and bounded because the basis is finite and the form is uniformly bounded; $F$ is in $L^2(0,T;\mathbb R^m)\subset L^1(0,T;\mathbb R^m)$ by finite dimensionality and Cauchy–Schwarz. [F1, given, construct]

2.1 Choose a finite partition of $[0,T]$ with each interval length $\delta$ satisfying $\delta\|B\|_{L^\infty}<1$ (any partition works if $B=0$). On each interval $J=[s,s+\delta]$, fix the incoming vector $c_s$ independently of the trial curve: initially it is the coefficient vector of $u_h^0$, and subsequently the endpoint of the preceding interval solution. The map $\Phi(c)(t)=c_s+\int_s^t(F(r)-B(r)c(r))\,dr$ maps $C(J,\mathbb R^m)$ into itself: $F$ is integrable and $B$ is essentially bounded, so its integrand is integrable for every continuous $c$. The space is nonempty and complete by [F2], and $\|\Phi(c)-\Phi(d)\|_\infty\le\delta\|B\|_{L^\infty}\|c-d\|_\infty$. Thus $\Phi$ is a contraction, and [F3] gives its unique fixed point (the limit of the Picard iterates). This fixed point is absolutely continuous, equals $c_s$ at $s$, and solves the ODE almost everywhere. Concatenating the finitely many intervals gives a continuous absolutely continuous global solution with the prescribed initial value, and uniqueness follows successively on those intervals. Its continuous coefficient vector is bounded on $[0,T]$, so $c'=F-Bc\in L^2(0,T;\mathbb R^m)$; hence the solution belongs to the stated $H^1(0,T;V_h)$. [F2, F3, given, step 1.1, construct]

3.1 In the variational equation choose $v_h=u_h(t)$. Absolute continuity gives $\frac12\frac{d}{dt}\|u_h(t)\|_H^2=((u_h)'(t),u_h(t))_H$. Coercivity and Young's inequality yield $\frac12\frac{d}{dt}\|u_h\|_H^2+ \frac\alpha2\|u_h\|_V^2\le \frac1{2\alpha}\|f\|_{V_h^*}^2.$ Integrating from $0$ to $t$ proves the stated energy estimate. [given, step 2.1, algebra] ∎
