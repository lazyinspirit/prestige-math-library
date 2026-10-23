---
id: pthm-fd-periodic-weak-continuation
kind: physics-theorem
title: Weak continuation of the adopted periodic viscous model
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - post-fd-periodic-newtonian
  - thm-fd-periodic-global-weak-existence
  - def-fd-periodic-solenoidal-spaces
  - def-fd-periodic-leray-hopf
  - def-countable-choice
dependency_roles:
  post-fd-periodic-newtonian: physical-assumption
  thm-fd-periodic-global-weak-existence: mathematical-premise
  def-fd-periodic-solenoidal-spaces: mathematical-premise
  def-fd-periodic-leray-hopf: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
physical_scope: >-
  Conditional global weak velocity existence for the three-dimensional
  constant-density, constant-viscosity, unforced incompressible Newtonian model
  on a flat periodic cell. No pressure regularity, weak uniqueness, global
  smoothness, temperature evolution, or empirical universality is claimed.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lenya Ryzhik, Lecture Notes for Math 256B, Version 2024"
      url: "https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf"
      locator: "§§5.1–5.5, printed pp. 37–51, for the periodic weak formulation,
        Galerkin estimates, compactness, and energy inequality."
    - title: "Luigi C. Berselli and Stefano Spirito, On the Existence of Leray–Hopf
        Weak Solutions to the Navier–Stokes Equations, Fluids 6(1), 42 (2021)"
      url: "https://www.mdpi.com/2311-5521/6/1/42/pdf"
      locator: "Theorem 3 and proof, §5.2, printed pp. 14–16, flat-torus case."
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Statement

Let $L>0$ be the numerical period in the declared SI metre unit, with physical side length $L\,\mathrm m$; let $\rho_0>0$ be constant in $\mathrm{kg\,m^{-3}}$ and $\mu>0$ constant in $\mathrm{Pa\,s}$. Set $\nu=\mu/\rho_0>0$. On $\mathbb T_L^3$, use normalized Lebesgue measure $L^{-3}dx$, and let $H$ be the real $L^2$ vector fields whose divergence vanishes distributionally, with unrestricted mean mode, and $V=H\cap H^1$, where $H^1$ consists of fields and first weak derivatives in $L^2$. Here $H^s_\sigma$ means the real Fourier-weighted Sobolev space with weights $(1+L^2|\kappa_k|^2)^s$, Fourier divergence condition $k\cdot\widehat u(k)=0$ for $k\ne0$, and unrestricted constant mode. Let $u_0\in H$ be an initial velocity measured in $\mathrm{m\,s^{-1}}$. Assume Countable Choice. Then the adopted unforced periodic model has a global weak velocity $u\in C_w([0,\infty);H)\cap L^\infty(0,\infty;H)\cap L^2_{\mathrm{loc}}(0,\infty;V)$, where $C_w$ means continuity of each fixed $H$-pairing and the time-dependent spaces are strongly measurable Bochner spaces, with $u(0)=u_0$ and strong $H$ trace at zero. For every smooth real periodic divergence-free test field $\phi$ compactly supported in time it satisfies
$$
\int_0^\infty\!\bigl[(u,\partial_t\phi)+(u\otimes u,\nabla\phi)-\nu(\nabla u,\nabla\phi)\bigr]dt+(u_0,\phi(0))=0,
$$
where the spatial pairings use the normalized measure and $(u\otimes u):\nabla\phi=\sum_{i,j}u_i u_j\partial_j\phi_i$. It also satisfies, for every $t\ge0$,
$$
\|u(t)\|_2^2+2\nu\int_0^t\|\nabla u(s)\|_2^2ds\le\|u_0\|_2^2,
$$
and there is a full-measure set $S\subset(0,\infty)$ such that for every $s\in S\cup\{0\}$ and every $t\ge s$,
$$
\|u(t)\|_2^2+2\nu\int_s^t\|\nabla u(\tau)\|_2^2d\tau\le\|u(s)\|_2^2.
$$
In SI units the kinetic energy is $K(t)=\frac{\rho_0}{2}\int_{[0,L]^3}|u(t,x)|^2dx$, and the inequality implies
$$
K(t)+\mu\int_0^t\int_{[0,L]^3}|\nabla u(s,x)|^2dx\,ds\le K(0).
$$
There is also a full-measure set $S\subset(0,\infty)$ such that for every $s\in S\cup\{0\}$ and every $t\ge s$,
$$
K(t)+\mu\int_s^t\int_{[0,L]^3}|\nabla u(\tau,x)|^2dx\,d\tau\le K(s).
$$
This is a conditional model deduction about velocity; it asserts no pressure regularity, weak uniqueness, global smoothness, or empirical validity.

## Statement references

[Leonid Ryzhik, *Lecture Notes for Math 256B*, Version 2024, §§5.1–5.5, printed pp. 37–51](https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf)

[Berselli and Spirito, *On the Existence of Leray–Hopf Weak Solutions to the Navier–Stokes Equations*, Theorem 3, §5.2, printed pp. 14–16](https://www.mdpi.com/2311-5521/6/1/42/pdf)

## Facts & Assumptions

**Given:** The periodic model and SI conventions above, $u_0\in H$, Countable Choice.

[A1] [[post-fd-periodic-newtonian]]: the cell is periodic, $\rho_0,\mu>0$ are constant, the body force vanishes, and weak velocity realizations use the unforced periodic Leray–Hopf identity and energy inequalities.

[F1] [[def-fd-periodic-solenoidal-spaces]]: $H$ is the real solenoidal $L^2$ space on $\mathbb T_L^3$ with its mean mode unrestricted, $V=H\cap H^1$, and the spatial measure is normalized by $L^{-3}$.

[F2] [[def-fd-periodic-leray-hopf]]: a global unforced periodic Leray–Hopf velocity has weakly continuous $H$-pairings, lies in $L^\infty H\cap L^2_{\mathrm{loc}}V$, has the strong initial trace, satisfies the divergence-free weak identity, and obeys the initial and almost-everywhere restart energy inequalities.

[F3] [[thm-fd-periodic-global-weak-existence]]: under Countable Choice, $d\ge2$, $L>0$, $\nu>0$, and $u_0\in H$, the mathematical supplier proves existence of a global unforced Leray–Hopf velocity.

[A2] [[def-countable-choice]]: every countable family of nonempty sets has a choice function; the Galerkin proof uses it for countable coefficient/horizon selections.

## Proof

**Given:** The parameters, field spaces, physical postulate, and mathematical suppliers in [A1], [A2], and [F1]–[F3].

1.1 For the classical model, $\operatorname{div}(u\otimes u)=(u\cdot\nabla)u$ follows componentwise from $\operatorname{div}u=0$, and $\operatorname{div}(2\mu D(u))=\mu\Delta u+\mu\nabla\operatorname{div}u=\mu\Delta u$. When tested against a periodic divergence-free $\phi$, the pressure term pairs to zero. For weak $u,\phi\in V$, the diffusion form has the same meaning: $2D(u):\nabla\phi=\nabla u:\nabla\phi+\partial_j u_i\partial_i\phi_j$. Finite Fourier truncations of $u$ and $\phi$ remain divergence free, are smooth, and converge to them in $H^1$ by [F1]; for each truncation, periodic integration by parts makes the integral of the cross term $-\int u_i\partial_i(\operatorname{div}\phi)=0$. Continuity of the bilinear forms in $H^1$ passes this identity to the limit. Thus division by $\rho_0$ gives exactly the weak identity in [F2] with $\nu=\mu/\rho_0>0$. [given, A1, F1, F2, algebra]

2.1 Since $d=3\ge2$, the cell length is $L>0$, the viscosity is $\nu>0$, and $u_0\in H$, [F3] supplies a global weak velocity with the identity and inequalities in [F2] under Countable Choice [A2]. [given, F2, F3, A2, step 1.1]

3.1 By [F1], $\|u(t)\|_2^2=L^{-3}\int_{[0,L]^3}|u(t,x)|^2dx$ and $\|\nabla u(t)\|_2^2=L^{-3}\int_{[0,L]^3}|\nabla u(t,x)|^2dx$. Multiplying the normalized initial energy inequality by $\rho_0L^3/2$, and using $\rho_0\nu=\mu$, gives the displayed SI kinetic-energy inequality. Applying the same positive factor to each restart inequality gives the stated restart form. [F1, F2, step 2.1, algebra] ∎
