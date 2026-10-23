---
id: pthm-fd-geophysical-conditional-energy
kind: physics-theorem
title: Conditional energy balance for the linear stratified Boussinesq model
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
deps:
  - post-fd-geophysical-model-branches
  - thm-fd-stratified-linear-energy
  - def-countable-choice
dependency_roles:
  post-fd-geophysical-model-branches: physical-assumption
  thm-fd-stratified-linear-energy: mathematical-premise
  def-countable-choice: mathematical-premise
physical_scope: >-
  Conditional energy identity for smooth periodic solutions of the adopted
  linear, constant-stratification rotating Boussinesq branch. It makes no claim
  about nonlinear or compressible flows, nonperiodic boundaries, the accuracy of
  the approximation, or empirical validity for an observed fluid.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Geoffrey K. Vallis, Fluid Dynamics of the Atmosphere and Ocean,
        University of Exeter ECMM719 full lecture notes, Autumn 2018"
      url: "https://empslocal.ex.ac.uk/people/staff/gv219/ecmm719/lecnotes18w.pdf"
    - title: "Pavel Berloff, Lectures on Introduction to Geophysical Fluid Dynamics,
        Imperial College London full lecture notes"
      url: "https://wwwf.imperial.ac.uk/~pberloff/gfd_lectures.pdf"
proof_strategy: direct
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ for the Lebesgue measure and energy-integration convention. Let $I\subseteq\mathbb R$ be a nonempty open time interval, let $\mathbb T^3=\mathbb R^3/(2\pi\mathbb Z)^3$ have fundamental cell $Q_3=[0,2\pi]^3$ with Lebesgue measure $\lambda_3$, where $dx=d\lambda_3(x)$ and time-space integration means the iterated Lebesgue integral with the spatial integral first, and represent fields by $2\pi$-periodic lifts. Let $u:I\times\mathbb T^3\to\mathbb R^3$ be a velocity field and $b:I\times\mathbb T^3\to\mathbb R$ a scalar buoyancy-acceleration field, each with continuous first time and spatial derivatives and continuous second spatial derivatives; let $\pi:I\times\mathbb T^3\to\mathbb R$ be pressure per reference density with continuous first spatial derivatives. Let $f\in\mathbb R$, $N>0$, and $\nu,\kappa\ge0$ be constants, with SI units s$^{-1}$, s$^{-1}$, m$^2$ s$^{-1}$, and m$^2$ s$^{-1}$, respectively. Assume these fields satisfy the linear rotating constant-stratification Boussinesq equations adopted in the geophysical-model postulate,

$$u_t+f e_3\times u+\nabla\pi=b e_3+\nu\Delta u,\qquad \nabla\cdot u=0,\qquad b_t+N^2u_3=\kappa\Delta b,$$

where $e_3=(0,0,1)$, $e_3\times u=(-u_2,u_1,0)$, $u_3$ is the vertical velocity component, $\pi$ has units m$^2$ s$^{-2}$, $\nabla q=(\partial_{x_1}q,\partial_{x_2}q,\partial_{x_3}q)$, $\nabla\cdot w=\sum_{j=1}^3\partial_{x_j}w_j$, and $\Delta q=\sum_{j=1}^3\partial_{x_j}^2q$, with $\Delta$ applied componentwise to vector fields. Define the normalized energy density per unit constant reference density and its spatial integral by

$$e(t,x):=\frac12\left(|u(t,x)|^2+\frac{b(t,x)^2}{N^2}\right),\qquad E(t):=\int_{Q_3}e(t,x)\,dx,$$

where $|u|^2=\sum_{i=1}^3u_i^2$, $|\nabla u|^2=\sum_{i,j=1}^3(\partial_{x_j}u_i)^2$, and $|\nabla b|^2=\sum_{j=1}^3(\partial_{x_j}b)^2$. Then, for every $t_0<t_1$ in $I$,

$$E(t_1)-E(t_0)=-\int_{t_0}^{t_1}\int_{Q_3}\left(\nu|\nabla u|^2+\frac{\kappa}{N^2}|\nabla b|^2\right)\,dx\,dt.$$

Thus $E$ is conserved when $\nu=\kappa=0$ and is nonincreasing when $\nu,\kappa\ge0$. In SI units, $e$ has units m$^2$ s$^{-2}$ and $E$ has units m$^5$ s$^{-2}$; multiplication by the constant reference density in kg m$^{-3}$ converts $E$ to joules. This is a conditional deduction from the adopted model and the stated smooth periodic hypotheses. It is not an approximation-error estimate, a nonlinear or compressible energy theorem, or evidence that the model describes an observed fluid.

## Statement references

[[def-countable-choice]]: Countable Choice, used in the mathematical energy supplier's Lebesgue integration convention.

[[post-fd-geophysical-model-branches]]: adopted linear constant-stratification rotating Boussinesq branch and its physical scope.

[[thm-fd-stratified-linear-energy]]: exact mathematical energy identity for the same periodic pointwise equations and regularity hypotheses.

[Geoffrey K. Vallis, *Fluid Dynamics of the Atmosphere and Ocean*, University of Exeter ECMM719 full lecture notes (Autumn 2018), §1.6.3, equations (1.74)–(1.78), printed pp. 15–17](https://empslocal.ex.ac.uk/people/staff/gv219/ecmm719/lecnotes18w.pdf)

[Pavel Berloff, *Lectures on Introduction to Geophysical Fluid Dynamics*, Imperial College London full lecture notes, Boussinesq approximation and energy context, printed pp. 36–38](https://wwwf.imperial.ac.uk/~pberloff/gfd_lectures.pdf)

## Facts & Assumptions

**Given:** Countable Choice $\mathrm{AC}_\omega$ and the smooth periodic fields, constants, equations, and energy definitions in the statement, with the physical interpretation adopted in the postulate.

[A1] [[post-fd-geophysical-model-branches]]: the Boussinesq branch uses a constant reference density in inertia and the divergence constraint, retains buoyancy perturbation vertically, and adopts the displayed linear periodic equations with constant $f,N,\nu,\kappa$; this is a model assumption without a claim of empirical validity.

[A2] Countable Choice $\mathrm{AC}_\omega$ means that every $\mathbb N$-indexed family of nonempty sets has a choice function ([[def-countable-choice]]). It supplies the mathematical hypothesis used by the energy supplier for Lebesgue measure and the Riemann-to-Lebesgue comparisons; it is not an empirical assumption about the fluid.

[F1] [[thm-fd-stratified-linear-energy]] (draft; complete proof inspected): under $\mathrm{AC}_\omega$, for these $2\pi$-periodic fields and equations, with $N>0$ and $\nu,\kappa\ge0$, the integral of $\tfrac12(|u|^2+b^2/N^2)$ changes by minus the time-integrated diffusion terms $\nu|\nabla u|^2+\kappa|\nabla b|^2/N^2$.

## Proof

1.1 The hypotheses in the statement, including Countable Choice [A2], give exactly the periodic domain, Lebesgue integration convention, regularity, coefficient signs, and pointwise equations required by [F1], and the defined $E$ is the same normalized integral functional as [F1]; [A1] identifies those equations as the adopted physical model branch. [given, A1, A2, F1]

2.1 Apply [F1] on the interval $[t_0,t_1]$ to obtain the displayed identity for $E(t_1)-E(t_0)$. [given, F1, step 1.1]

3.1 Each squared norm in the time integrand is nonnegative, and $\nu,\kappa\ge0$, so $E(t_1)\le E(t_0)$. If $\nu=\kappa=0$, the integrand vanishes and $E(t_1)=E(t_0)$. The density and integral units follow from $[u]=\mathrm{m\,s^{-1}}$, $[b]=\mathrm{m\,s^{-2}}$, $[N]=\mathrm{s^{-1}}$, and $[dx]=\mathrm{m^3}$. [given, step 2.1, algebra] ∎
