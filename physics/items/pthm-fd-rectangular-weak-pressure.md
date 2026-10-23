---
id: pthm-fd-rectangular-weak-pressure
kind: physics-theorem
title: Weak rectangular Newtonian velocity and pressure
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 6
deps:
  - post-fd-no-slip-newtonian
  - thm-fd-bounded-global-weak-existence
  - prop-fd-bounded-evolving-pressure
  - lem-fd-rectangular-test-divergence-inverse
  - def-fd-bounded-solenoidal-spaces
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  post-fd-no-slip-newtonian: physical-assumption
  thm-fd-bounded-global-weak-existence: mathematical-premise
  prop-fd-bounded-evolving-pressure: mathematical-premise
  lem-fd-rectangular-test-divergence-inverse: mathematical-premise
  def-fd-bounded-solenoidal-spaces: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
physical_scope: >-
  Conditional no-slip weak velocity and normalized distribution pressure on
  a finite rectangular vessel, with constant density, positive constant
  viscosity, and zero force. Pressure is only a spacetime distribution;
  no L2 estimate, corner regularity, or pointwise wall traction is claimed.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "L. C. Berselli and S. Spirito, On the Existence of Leray–Hopf Weak Solutions to the Navier–Stokes Equations, Fluids 6(1), 42 (2021)"
      url: "https://www.mdpi.com/2311-5521/6/1/42/pdf"
      locator: "§1 and §5.2, printed pp. 1–3 and 14–16, for the incompressible model and bounded-domain weak velocity; §3.5, pp. 6–8, explicitly defers bounded-domain pressure reconstruction."
    - title: "Lenya Ryzhik, Lecture Notes for Math 256B, Version 2024"
      url: "https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf"
      locator: "§§5.2–5.5, printed pp. 39–51, for the weak momentum and energy framework."
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

Let $\Omega=\prod_{i=1}^3(a_i,b_i)\subset\mathbb R^3$ be a finite open rectangle in Cartesian coordinates measured in metres, with $a_i<b_i$, and write $U=(0,\infty)\times\Omega\subset\mathbb R^4$ with coordinates $(t,x_1,x_2,x_3)$. For an open $O\subseteq\mathbb R^n$, set $\mathcal D(O)=C_c^\infty(O;\mathbb C)$ and, for each compact $K\subset O$, set $\mathcal D_K(O)=\{\psi\in\mathcal D(O):\operatorname{supp}\psi\subseteq K\}$ with Fréchet seminorms $p_m(\psi)=\max_{|\alpha|\le m}\sup_{x\in K}|\partial^\alpha\psi(x)|$, $m\in\mathbb N_0$. Give $\mathcal D(O)$ its locally convex LF topology, the finest locally convex topology making every inclusion $\mathcal D_K(O)\to\mathcal D(O)$ continuous; real and finite-dimensional vector test-function spaces carry the corresponding real and componentwise topologies. Let $\mathcal D'(O)$ be the vector space of continuous complex-linear functionals on $\mathcal D(O)$, with bilinear pairing $\langle F,\psi\rangle=F(\psi)$; a spacetime distribution on $U$ is an element of $\mathcal D'(U)$. A locally integrable field $f$ is identified componentwise with the distribution $\psi\mapsto\int_U f\psi\,dt\,dx$. For $F\in\mathcal D'(O)$ and a multi-index $\alpha\in\mathbb N_0^n$, define $\langle\partial^\alpha F,\psi\rangle=(-1)^{|\alpha|}\langle F,\partial^\alpha\psi\rangle$ for every $\psi\in\mathcal D(O)$. Derivatives of vector or matrix distributions are taken componentwise; for scalar $F\in\mathcal D'(U)$, $\nabla_xF=(\partial_{x_i}F)_{i=1}^3$, for a matrix distribution $A$, $(\operatorname{div}A)_i=\sum_{j=1}^3\partial_{x_j}A_{ij}$ for $i=1,2,3$, and $\Delta$ acts componentwise as $\sum_{j=1}^3\partial_{x_j}^2$.

Define $D_\sigma(\Omega)=\{a\in C_c^\infty(\Omega;\mathbb R^3):\operatorname{div}a=0\}$, where for smooth fields $\operatorname{div}a=\sum_{i=1}^3\partial_{x_i}a_i$, let $H$ be its closure in $L^2(\Omega;\mathbb R^3)$, and let $V$ be its closure in $H_0^1(\Omega;\mathbb R^3)$, where $H_0^1$ is the $H^1$ closure of compactly supported smooth vector fields and $H^1$ uses square-integrable fields and first weak derivatives. This convention does not identify $V$ with all divergence-free members of $H_0^1$ on an arbitrary open set and makes no pointwise trace assertion. Let $\rho_0>0$ in $\mathrm{kg\,m^{-3}}$, $\mu>0$ in $\mathrm{Pa\,s}$, $\nu=\mu/\rho_0>0$, and $u_0\in H$ be an initial velocity in $\mathrm{m\,s^{-1}}$. Assume AC and Countable Choice. In addition, assume the following rectangular test-divergence inverse: for $D_0(\Omega)=\{h\in C_c^\infty(\Omega;\mathbb R):\int_\Omega h=0\}$ with its subspace LF topology, a continuous linear map $R:D_0(\Omega)\to C_c^\infty(\Omega;\mathbb R^3)$ with the componentwise LF topology satisfies $\operatorname{div}(Rh)=h$; for each compact input support there is one compact output support, and every fixed-support restriction is continuous for the test-function seminorms above.

Then there are a weak velocity $u\in C_w([0,\infty);H)\cap L^\infty(0,\infty;H)\cap L^2_{\mathrm{loc}}(0,\infty;V)$ and a real kinematic-pressure distribution $\pi\in\mathcal D'(U)$, meaning it takes real values on real-valued tests, with units $\mathrm{m^2\,s^{-2}}$. Here $C_w$ means continuity of every fixed $H$-pairing, and the time-dependent spaces use strongly measurable Bochner maps on finite intervals. The velocity has $u(0)=u_0$ and strong $H$ trace at zero, and for every compactly time-supported $C^1$ curve $\phi:[0,\infty)\to V$ it satisfies
$$
\int_0^\infty\!\bigl[(u,\partial_t\phi)_{L^2}+(u\otimes u,\nabla\phi)_{L^2}-\nu(\nabla u,\nabla\phi)_{L^2}\bigr]dt+(u_0,\phi(0))_{L^2}=0.
$$
All spatial pairings use unnormalized Lebesgue measure, with $(u\otimes u)_{ij}=u_i u_j$, $(u\otimes u):\nabla\phi=\sum_{i,j}u_i u_j\partial_j\phi_i$, and $\nabla u:\nabla\phi=\sum_{i,j}\partial_j u_i\partial_j\phi_i$. For every $t\ge0$ it satisfies
$$
\|u(t)\|_2^2+2\nu\int_0^t\|\nabla u(s)\|_2^2ds\le\|u_0\|_2^2,
$$
and there is a full-measure set $S\subset(0,\infty)$ such that for every $s\in S\cup\{0\}$ and every $t\ge s$,
$$
\|u(t)\|_2^2+2\nu\int_s^t\|\nabla u(\tau)\|_2^2d\tau\le\|u(s)\|_2^2.
$$
Fix one real scalar test function $\theta\in C_c^\infty(\Omega;\mathbb R)$ with $\int_\Omega\theta=1$. The following spacetime equation is an equality in $\mathcal D'(U)^3$ under the stated distributional-derivative convention, and this fixed normalization is
$$
\partial_tu+\operatorname{div}(u\otimes u)+\nabla\pi=\nu\Delta u,
$$
$$
\langle\pi,a(t)\theta(x)\rangle=0
$$
for every $a\in C_c^\infty((0,\infty);\mathbb C)$. Such a $\theta$ exists because a product of normalized smooth compactly supported interval bumps belongs to $C_c^\infty(\Omega)$ and has integral one. The physical pressure distribution $p=\rho_0\pi$ has units $\mathrm{Pa}$, is unique under this fixed scaled normalization, and satisfies
$$
\rho_0\partial_tu+\rho_0\operatorname{div}(u\otimes u)+\nabla p=\mu\Delta u
$$
as a spacetime distribution. The SI kinetic energy $E(t)=\frac{\rho_0}{2}\int_\Omega|u(t,x)|^2dx$ obeys $E(t)+\mu\int_0^t\int_\Omega|\nabla u(s,x)|^2dx\,ds\le E(0)$. This conditional result asserts no pressure in $L^2$, corner regularity, or pointwise boundary traction.

## Statement references

[[prop-fd-bounded-evolving-pressure|Rectangular evolving distributional pressure under a continuous divergence inverse]]

[[lem-fd-rectangular-test-divergence-inverse|Continuous right inverse of divergence on mean-zero rectangular tests]]

[Berselli and Spirito, *On the Existence of Leray–Hopf Weak Solutions to the Navier–Stokes Equations*, §3.5 and §5.2, printed pp. 6–8 and 14–16](https://www.mdpi.com/2311-5521/6/1/42/pdf)

[Lenya Ryzhik, *Lecture Notes for Math 256B*, Version 2024, §§5.2–5.5, printed pp. 39–51](https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf)

## Facts & Assumptions

**Given:** The no-slip model, a bounded finite rectangle, $u_0\in H$, AC, Countable Choice, and the stated right inverse $R$.

[A1] [[post-fd-no-slip-newtonian]]: $\rho_0,\mu>0$ are constant, the force is zero, no-slip means membership in $V$, and the weak model is tested on solenoidal $V$-valued curves.

[F1] [[def-fd-bounded-solenoidal-spaces]]: $H$ is the $L^2$ closure and $V$ the $H_0^1$ closure of compactly supported smooth divergence-free fields; no larger solenoidal space or trace identification is included.

[F2] [[thm-fd-bounded-global-weak-existence]]: for bounded open $\Omega$, AC, $\nu>0$, and $u_0\in H$, the supplier Statement gives a global weak velocity with the variational identity and initial/restart energy inequalities.

[F3] [[prop-fd-bounded-evolving-pressure]]: for a finite rectangle and the bounded weak velocity, the proposition constructs a spacetime pressure distribution with one fixed mean-zero-test normalization, conditional on the stated continuous linear right inverse $R$ on mean-zero tests.

[F4] [[lem-fd-rectangular-test-divergence-inverse]]: for every finite rectangle, the current item proves a continuous linear $R:D_0(\Omega)\to C_c^\infty(\Omega;\mathbb R^3)$ with $\operatorname{div}(Rh)=h$, compact-support enlargement, and fixed-support seminorm control.

[A2] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; AC is explicit in the bounded weak-existence Statement.

[A3] [[def-countable-choice]]: every countable family of nonempty sets has a choice function; it is used in the bounded weak-existence proof.

## Proof

**Given:** The rectangle, physical parameters and model, closure spaces, AC, Countable Choice, the bounded weak-existence result [F2], the pressure proposition [F3], and the actual divergence inverse [F4].

1.1 For each side interval set $m_i=(a_i+b_i)/2$, $d_i=(b_i-a_i)/4>0$, and $r_i(x_i)=(x_i-m_i)/d_i$. Define $g_i(x_i)=\exp(-1/(1-r_i(x_i)^2))$ when $|r_i(x_i)|<1$ and $g_i=0$ otherwise. Its support is the compact interval $[m_i-d_i,m_i+d_i]\subset(a_i,b_i)$. Each repeated derivative inside that support is a finite sum of a polynomial in $r_i$ times a negative power of $1-r_i^2$ times the exponential; since $y^{-N}e^{-1/y}\to0$ as $y\downarrow0$ for every $N$, all derivatives vanish at the support endpoints and $g_i\in C_c^\infty((a_i,b_i))$. Positivity and compact support give $I_i=\int_{a_i}^{b_i}g_i\,dx_i\in(0,\infty)$. Put $\eta_i=g_i/I_i$ and $\theta(x)=\eta_1(x_1)\eta_2(x_2)\eta_3(x_3)$; then $\theta\in C_c^\infty(\Omega)$ and Fubini gives $\int_\Omega\theta=1$. Set $\nu=\mu/\rho_0>0$. The domain, initial datum, closure spaces, AC, and Countable Choice match [F2], so choose its global weak velocity $u$ with the stated initial and restart energy inequalities. To match the stress model, first take compactly supported smooth solenoidal $u,\phi$. Then $2D(u):\nabla\phi=\nabla u:\nabla\phi+\partial_j u_i\partial_i\phi_j$; integration by parts makes the last term $-\int u_i\partial_i(\operatorname{div}\phi)=0$. The pressure term also vanishes because $\operatorname{div}\phi=0$. The bilinear forms are continuous in $V$, so density extends this identity to the closure-space weak velocity. Hence [F2] is exactly the weak velocity input for [A1]. [given, A1, F1, F2, A2, A3, algebra]

2.1 The rectangle is within the domain of [F3], and its exact conditional right-inverse hypothesis is supplied by [F4]. Apply the proposition to this weak velocity to obtain $\pi$, its fixed-$\theta$ normalization, and the spacetime distributional equation. [given, F1, F2, F3, F4, step 1.1]

3.1 Define $p=\rho_0\pi$. Multiplication by the positive constant $\rho_0$ preserves distributional equality and the normalization; substituting $\rho_0\nu=\mu$ gives the physical equation in the Statement. The same scaling preserves uniqueness under normalization and converts the velocity energy inequality to SI units. No step supplies an $L^2$ or corner estimate. [F2, F3, step 2.1, algebra] ∎
