---
id: thm-fd-stratified-linear-energy
kind: theorem
title: Positive linear stratified energy and diffusion
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-fd-rotating-stratified-shallow-equations
dependency_roles:
  def-fd-rotating-stratified-shallow-equations: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Geoffrey K. Vallis, Fluid Dynamics of the Atmosphere and Ocean, University of Exeter lecture notes, Autumn 2018, §1.6.3, equations (1.72)–(1.78)"
      url: "https://empslocal.ex.ac.uk/people/staff/gv219/ecmm719/lecnotes18w.pdf"
verification:
  precheck: pending
---

## Statement

Let $I\subseteq\mathbb R$ be a nonempty open interval and use the periodic domain $\mathbb T^3=\mathbb R^3/(2\pi\mathbb Z)^3$ with Lebesgue measure on $Q_3=[0,2\pi]^3$. Let $f\in\mathbb R$, $N>0$, and $\nu,\kappa\ge0$ be constants. Suppose $u,b$ are continuously differentiable in time and space with continuous second spatial derivatives, and $\pi$ has continuous first spatial derivatives; all fields are $2\pi$-periodic and satisfy

$$u_t+f e_3\times u+\nabla\pi=b e_3+\nu\Delta u,\qquad \nabla\cdot u=0,\qquad b_t+N^2u_3=\kappa\Delta b.$$

Define the positive energy per reference density

$$E(t):=\frac12\int_{Q_3}\left(|u(t,x)|^2+\frac{b(t,x)^2}{N^2}\right)\,dx.$$

Then for every $t_0<t_1$ in $I$,

$$E(t_1)-E(t_0)=-\int_{t_0}^{t_1}\int_{Q_3}\left(\nu|\nabla u|^2+\frac{\kappa}{N^2}|\nabla b|^2\right)\,dx\,dt.$$

Thus the inviscid model conserves $E$, and the stated nonnegative diffusion coefficients make it nonincreasing. The condition $N>0$ is essential for this positive energy. This is an exact identity conditional on the displayed smooth linear Boussinesq equations; it is not a nonlinear or compressible stability theorem. A discrete analogue requires a skew Coriolis operator and compatible pressure/divergence pairing in the actual discretization; no claim is made for arbitrary schemes.

## Statement references

Equation family and pointwise regularity: [[def-fd-rotating-stratified-shallow-equations]].

Geoffrey K. Vallis, *Fluid Dynamics of the Atmosphere and Ocean*, §1.6.2–1.6.3, pp. 15–17: [full lecture notes, PDF](https://empslocal.ex.ac.uk/people/staff/gv219/ecmm719/lecnotes18w.pdf).

## Facts & Assumptions

**Given:** $I\subseteq\mathbb R$ is nonempty and open; $u,b,\pi$ are classical and $2\pi$-periodic in each spatial coordinate; $f\in\mathbb R$, $N>0$, and $\nu,\kappa\ge0$; the displayed equations hold pointwise.

[F1] [[def-fd-rotating-stratified-shallow-equations]]: the stratified branch on $\mathbb T^3$ is $u_t+f e_3\times u+\nabla\pi=b e_3+\nu\Delta u$, $\nabla\cdot u=0$, and $b_t+N^2u_3=\kappa\Delta b$, with constant $f\in\mathbb R$, $N>0$, and $\nu,\kappa\ge0$.

[F2] [[def-fd-rotating-stratified-shallow-equations]]: for a scalar field $q$, $\nabla q=(\partial_{x_1}q,\partial_{x_2}q,\partial_{x_3}q)$; for a vector field $w$, $\nabla\cdot w=\sum_j\partial_{x_j}w_j$, $\Delta w$ is componentwise, $|w|^2=\sum_jw_j^2$, and $|\nabla w|^2=\sum_{i,j}(\partial_{x_j}w_i)^2$; $e_3\times w=(-w_2,w_1,0)$.

[A1] The fields satisfy these equations with the regularity in the statement, so every product and derivative below is continuous on each compact time interval times $Q_3$.

## Proof

1.1 Dot the momentum equation with $u$. Since $u\cdot(e_3\times u)=0$ pointwise and $u\cdot\nabla\pi=\nabla\cdot(\pi u)$ by the component definitions in [F2] and $\nabla\cdot u=0$, this gives $\partial_t(|u|^2/2)+\nabla\cdot(\pi u-\nu\sum_{i=1}^3u_i\nabla u_i)=bu_3-\nu|\nabla u|^2$. Here $u\cdot\Delta u=\nabla\cdot(\sum_i u_i\nabla u_i)-|\nabla u|^2$ follows by the product rule, component by component. [given, F1, F2, A1, algebra]

2.1 Multiply the buoyancy equation by $b/N^2$ and use $b\Delta b=\nabla\cdot(b\nabla b)-|\nabla b|^2$ to get $\partial_t(b^2/(2N^2))+\nabla\cdot(-(\kappa/N^2)b\nabla b)=-bu_3-(\kappa/N^2)|\nabla b|^2$. Adding this to step 1.1 cancels the two $bu_3$ terms and yields a local energy balance with flux $\pi u-\nu\sum_i u_i\nabla u_i-(\kappa/N^2)b\nabla b$ and dissipation $\nu|\nabla u|^2+(\kappa/N^2)|\nabla b|^2$. [given, F1, F2, A1, step 1.1, algebra]

3.1 Integrate the local balance over $Q_3\times[t_0,t_1]$. For each spatial coordinate, the integral of a periodic derivative over $[0,2\pi]$ is its endpoint difference and is zero; this removes the flux divergence. For each fixed $x$, the fundamental theorem of calculus converts the time derivative into the endpoint energy difference. Therefore the displayed integral identity holds. Since $N>0$, $E(t)\ge0$; since $\nu,\kappa\ge0$, the time-integrated dissipation is nonnegative. If $\nu=\kappa=0$, it vanishes identically and $E(t_1)=E(t_0)$. [given, F1, F2, step 2.1, algebra] ∎
