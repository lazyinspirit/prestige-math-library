---
id: pthm-fd-bounded-weak-continuation
kind: physics-theorem
title: Global weak velocity in the no-slip vessel model
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - post-fd-no-slip-newtonian
  - thm-fd-bounded-global-weak-existence
  - def-fd-bounded-solenoidal-spaces
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  post-fd-no-slip-newtonian: physical-assumption
  thm-fd-bounded-global-weak-existence: mathematical-premise
  def-fd-bounded-solenoidal-spaces: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
physical_scope: >-
  Conditional global weak velocity for a constant-density, positive-
  viscosity, zero-force incompressible Newtonian model on any fixed bounded
  open three-dimensional vessel. No pointwise boundary trace, pressure
  regularity, uniqueness, smoothness, thermal evolution, or empirical
  universality is claimed.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "L. C. Berselli and S. Spirito, On the Existence of Leray–Hopf Weak Solutions to the Navier–Stokes Equations, Fluids 6(1), 42 (2021)"
      url: "https://www.mdpi.com/2311-5521/6/1/42/pdf"
      locator: "Theorem 3 and proof, §5.2, printed pp. 14–16; source assumes a smoother bounded boundary, while the local proof uses the stated closure spaces."
    - title: "Lenya Ryzhik, Lecture Notes for Math 256B, Version 2024"
      url: "https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf"
      locator: "§§5.2–5.5, printed pp. 39–51, for the energy-space and Galerkin framework; the local bounded-open proof is separate."
verification:
  precheck: pending
---

## Statement

Let $\Omega\subset\mathbb R^3$ be any nonempty bounded open set in Cartesian coordinates measured in metres. Define $D_\sigma(\Omega)=\{a\in C_c^\infty(\Omega;\mathbb R^3):\operatorname{div}a=0\}$, let $H$ be its $L^2(\Omega)$ closure, and let $V$ be its closure in $H_0^1(\Omega;\mathbb R^3)$, where $H_0^1$ is the $H^1$ closure of compactly supported smooth fields and $H^1$ has the norm formed from the $L^2$ norms of a field and its first weak derivatives. Let $\rho_0>0$ in $\mathrm{kg\,m^{-3}}$, $\mu>0$ in $\mathrm{Pa\,s}$, $\nu=\mu/\rho_0$, and $u_0\in H$ be an initial velocity in $\mathrm{m\,s^{-1}}$. Assume the Axiom of Choice and Countable Choice. Then the adopted unforced no-slip model has
$$
u\in C_w([0,\infty);H)\cap L^\infty(0,\infty;H)\cap L^2_{\mathrm{loc}}(0,\infty;V),
$$
where $C_w$ means continuity of every fixed $H$-pairing and the time-dependent spaces are Bochner spaces of strongly measurable maps, with $u(0)=u_0$, strong $H$ trace at zero, and, for every compactly time-supported $C^1$ curve $\phi:[0,\infty)\to V$,
$$
\int_0^\infty\!\bigl[(u,\partial_t\phi)_{L^2}+(u\otimes u,\nabla\phi)_{L^2}-\nu(\nabla u,\nabla\phi)_{L^2}\bigr]dt+(u_0,\phi(0))_{L^2}=0.
$$
It satisfies the initial energy inequality
$$
\|u(t)\|_2^2+2\nu\int_0^t\|\nabla u(s)\|_2^2ds\le\|u_0\|_2^2\qquad(t\ge0),
$$
and a full-measure set $S\subset(0,\infty)$ such that for every $s\in S\cup\{0\}$ and $t\ge s$,
$$
\|u(t)\|_2^2+2\nu\int_s^t\|\nabla u(\tau)\|_2^2d\tau\le\|u(s)\|_2^2.
$$
Here spatial norms and pairings use unnormalized Lebesgue measure, $(u\otimes u):\nabla\phi=\sum_{i,j}u_i u_j\partial_j\phi_i$, and $\nabla u:\nabla\phi=\sum_{i,j}\partial_j u_i\partial_j\phi_i$. Thus the SI kinetic energy $E(t)=\frac{\rho_0}{2}\int_\Omega|u(t,x)|^2dx$ obeys
$$
E(t)+\mu\int_0^t\int_\Omega|\nabla u(s,x)|^2dx\,ds\le E(0).
$$
The no-slip condition is only the stated $H_0^1$ closure condition; the result supplies no pressure or pointwise wall trace.

## Statement references

[Berselli and Spirito, *On the Existence of Leray–Hopf Weak Solutions to the Navier–Stokes Equations*, Theorem 3, §5.2, printed pp. 14–16](https://www.mdpi.com/2311-5521/6/1/42/pdf)

[Lenya Ryzhik, *Lecture Notes for Math 256B*, Version 2024, §§5.2–5.5, printed pp. 39–51](https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf)

## Facts & Assumptions

**Given:** A nonempty bounded open $\Omega\subset\mathbb R^3$, its closure spaces $H,V$, constant $\rho_0,\mu>0$, $u_0\in H$, the Axiom of Choice, and Countable Choice.

[A1] [[post-fd-no-slip-newtonian]]: the vessel is fixed, the body force is zero, the fluid is incompressible with constant positive $\rho_0,\mu$, and no-slip means membership in the stated $V$ closure; no pointwise boundary trace is assumed.

[F1] [[def-fd-bounded-solenoidal-spaces]]: $H$ is the $L^2$ closure and $V$ the $H_0^1$ closure of compactly supported smooth divergence-free fields; the definition does not identify $V$ with all divergence-free $H_0^1$ fields on arbitrary open sets.

[F2] [[thm-fd-bounded-global-weak-existence]]: for bounded open $\Omega$, AC, $\nu>0$, and $u_0\in H$, the supplier gives a global weak velocity with the tested identity, initial trace, and initial/restart energy inequalities.

[A2] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; the mathematical supplier states AC explicitly.

[A3] [[def-countable-choice]]: every countable family of nonempty sets has a choice function; the mathematical supplier uses countable basis/diagonal selections in its proof.

## Proof

**Given:** The no-slip model, bounded closure spaces, SI parameters, AC, and Countable Choice in [A1]–[A3] and [F1]–[F2].

1.1 For smooth fields, $\operatorname{div}(u\otimes u)=(u\cdot\nabla)u$ because $\operatorname{div}u=0$, and $\operatorname{div}(2\mu D(u))=\mu\Delta u$. In the weak form, $-pI_3:\nabla\phi=-p\operatorname{div}\phi=0$. Also $2D(u):\nabla\phi=\nabla u:\nabla\phi+\partial_j u_i\partial_i\phi_j$. For compactly supported smooth solenoidal $u,\phi$, integration by parts makes the integral of the cross term $-\int u_i\partial_i(\operatorname{div}\phi)=0$; density of those fields in $V$ and continuity of the bilinear forms extend this equality to $u,\phi\in V$. Thus the weak stress balance reduces to the identity in [F2] with $\nu=\mu/\rho_0>0$. [given, A1, F1, F2, algebra]

2.1 The domain, viscosity, initial velocity, closure spaces, AC, and Countable Choice meet the exact hypotheses of [F2]. Countable Choice [A3] is carried because its proof uses countable selections. Therefore [F2] supplies the weak velocity, initial/restart inequalities, and tested equation. [given, A2, A3, F1, F2, step 1.1]

3.1 Multiply the initial energy inequality in [F2] by $\rho_0/2>0$ and use $\rho_0\nu=\mu$. This gives the displayed physical kinetic-energy inequality; the same multiplication gives its full-measure restart form. [F2, step 2.1, algebra] ∎
