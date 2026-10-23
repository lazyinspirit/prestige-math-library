---
id: pthm-fd-two-dimensional-viscous-model-globality
kind: physics-theorem
title: Global two-dimensional periodic viscous model evolution
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 6
deps:
  - def-countable-choice
  - post-fd-continuum-balances
  - post-fd-newtonian-fourier
  - def-fd-incompressible-newtonian-model
  - thm-fd-global-two-dimensional-periodic-navier-stokes
dependency_roles:
  def-countable-choice: mathematical-premise
  post-fd-continuum-balances: physical-assumption
  post-fd-newtonian-fourier: physical-assumption
  def-fd-incompressible-newtonian-model: formulation-prerequisite
  thm-fd-global-two-dimensional-periodic-navier-stokes: mathematical-premise
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
physical_scope: >-
  Force-free smooth constant-density incompressible Newtonian model on a
  two-dimensional periodic cell, with constant positive shear viscosity.
  It asserts global smooth evolution for every smooth divergence-free datum
  inside this adopted planar model. It does not assert 3D or inviscid global
  regularity, wall evolution, or empirical validity.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Sergei Kuksin and Armen Shirikyan, Mathematics of Two-Dimensional Turbulence
      url: https://webusers.imj-prg.fr/~sergei.kuksin/MyBooks/bookArmen.pdf
      locator: Chapter 2 §§2.1.5–2.1.7, especially Theorem 2.1.18 and its complete regularity estimate, PDF pp. 42–51.
empirical_premises: []
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice. Let $L>0$ be measured in metres, $U_*>0$ in metres per second, $\rho_*>0$ be a constant mass density in kilograms per cubic metre, and $\mu>0$ be a constant dynamic shear viscosity in pascal seconds. Use SI position $X$ in metres, time $t$ in seconds, velocity $u$ in metres per second, and pressure $p$ in pascals. On the two-dimensional periodic cell $\mathbb T_L^2=(\mathbb R/(2\pi L\mathbb Z))^2$, adopt the force-free incompressible Newtonian model
$$\rho_*\bigl(\partial_tu+(u\cdot\nabla_X)u\bigr)=\nabla_X\cdot\sigma,\qquad \nabla_X\cdot u=0,\qquad \sigma=-pI+2\mu D_Xu,\qquad D_Xu=\tfrac12\bigl(\nabla_Xu+(\nabla_Xu)^{\mathsf T}\bigr).$$
Set $x=X/L\in\mathbb T^2=(\mathbb R/(2\pi\mathbb Z))^2$, $\tau=tU_*/L$, $U=u/U_*$, $\Pi=p/(\rho_*U_*^2)$, and $\bar\nu=\mu/(\rho_*U_*L)>0$. Use normalized measure $d\mu=(2\pi)^{-2}dx$ and fix the pressure gauge by $\int_{\mathbb T^2}\Pi(\tau,x)\,d\mu(x)=0$ at each time. For any smooth real periodic divergence-free initial velocity $U_0:\mathbb T^2\to\mathbb R^2$, the adopted model has a unique smooth velocity $U$ and the unique pressure $\Pi$ with this zero-mean gauge on all normalized times $\tau\ge0$, satisfying
$$\partial_\tau U+(U\cdot\nabla_x)U=-\nabla_x\Pi+\bar\nu\Delta_xU,\qquad \nabla_x\cdot U=0,\qquad U(0,\cdot)=U_0.$$
Here global means smooth on $[0,\infty)$ with finite Sobolev norms on every compact time interval; no uniform-in-time norm bound is asserted. Scaling back gives a unique global smooth physical model evolution for all $t\ge0$. This conclusion is restricted to the adopted two-dimensional positive-viscosity periodic model; it establishes no three-dimensional or inviscid global regularity result and no empirical validity claim.

## Statement references

[Sergei Kuksin and Armen Shirikyan, Mathematics of Two-Dimensional Turbulence](https://webusers.imj-prg.fr/~sergei.kuksin/MyBooks/bookArmen.pdf).

## Facts & Assumptions

**Given:** Countable Choice; the constant positive SI density and viscosity, periodic cell, force-free model, and smooth divergence-free data in the Statement.

[A1] [[post-fd-continuum-balances]]: the adopted smooth continuum supplies mass and linear-momentum balances in an inertial Cartesian chart; this theorem uses the force-free constant-density periodic branch.

[A2] [[post-fd-newtonian-fourier]]: the current postulate adopts $\tau=2\mu D_0u+\zeta(\nabla\cdot u)I$ and Fourier heat flux, with nonnegative shear and bulk coefficients and positive-semidefinite symmetric conductivity. Here $\mu>0$ is constant and $\nabla\cdot u=0$, so $D_0u=D_Xu$ and the bulk term vanishes; heat flux is unused. The current batch-11 manifest registers this carrier, and step1Decision reports a current ready record; this records authoring readiness, not independent proof approval.

[A3] [[def-fd-incompressible-newtonian-model]]: the current definition specifies constant $\rho_0>0$, $\nabla\cdot u=0$, $\sigma=-pI+2\mu D$, momentum balance $\rho_0D_tu=\operatorname{div}\sigma$, and $\nu=\mu/\rho_0$; initial and boundary data are separate. The current batch-11 manifest registers this carrier, and step1Decision reports a current ready record; this records authoring readiness, not independent proof approval. The local momentum equation is also stated explicitly in the Statement.

[F1] [[thm-fd-global-two-dimensional-periodic-navier-stokes]]: the current Statement assumes Countable Choice, $\nu>0$, and smooth real divergence-free data on the normalized two-dimensional torus; it gives a unique global smooth periodic velocity and a logarithmic Sobolev bound. Its current proof obtains the mean-zero pressure from the local incompressible theorem. The batch-19 manifest and item carrier have matching direct dependencies, but this theorem has no current run Step-1 readiness record. Its transitive Fourier-log, specialized commutator, vorticity, and continuation carriers are present, but their current Step-1 readiness records are missing. This use remains conditional until those authoring-readiness records are current.

[A4] [[def-countable-choice]]: “For every family $(X_n)_{n\in\mathbb N}$ of nonempty sets indexed by $\mathbb N$ there is a function $f$ with domain $\mathbb N$ such that $f(n)\in X_n$ for every $n$.”

## Proof

**Given:** The Statement hypotheses and conditional inputs [A1]–[A4] and [F1].

**Proof technique:** Reduce the constant-viscosity physical model to the normalized periodic Navier–Stokes equation, apply the current conditional two-dimensional global mathematical supplier, and invert the scaling.

1.1 Since $\rho_*$ and $\mu$ are constant and $\nabla_X\cdot u=0$, componentwise differentiation gives $\nabla_X\cdot(2\mu D_Xu)=\mu\Delta_Xu+\mu\nabla_X(\nabla_X\cdot u)=\mu\Delta_Xu$. Thus the adopted momentum equation is $\partial_tu+(u\cdot\nabla_X)u=-\rho_*^{-1}\nabla_Xp+(\mu/\rho_*)\Delta_Xu$. [given, A1, A2, A3, algebra]

2.1 With $x=X/L$, $\tau=tU_*/L$, $U=u/U_*$, and $\Pi=p/(\rho_*U_*^2)$, the time derivative, convective, pressure-gradient, and Laplacian terms scale respectively by $U_*^2/L$, $U_*^2/L$, $\rho_*U_*^2/L$, and $U_*/L^2$. Dividing the momentum equation by $\rho_*U_*^2/L$ gives $\partial_\tau U+(U\cdot\nabla_x)U=-\nabla_x\Pi+\bar\nu\Delta_xU$, with $\bar\nu=\mu/(\rho_*U_*L)>0$; the divergence constraint and smooth periodic initial data are preserved. [given, step 1.1, algebra]

3.1 The hypotheses of [F1] hold for $d=2$, $\bar\nu>0$, smooth divergence-free $U_0$, and Countable Choice [A4]. Conditional on the current supplier statement, it gives the unique global smooth normalized velocity and mean-zero pressure asserted in the Statement. [given, A4, F1, step 2.1]

4.1 The inverse scaling $t=(L/U_*)\tau$, $X=Lx$, $u(t,X)=U_*U(\tau,x)$, and $p(t,X)=\rho_*U_*^2\Pi(\tau,x)$ preserves the equations, periodicity, smoothness, and uniqueness. Since every finite physical time corresponds to a finite normalized time, the physical solution exists smoothly for all $t\ge0$. [given, step 2.1, step 3.1, construct]

5.1 The argument uses only the adopted planar force-free positive-viscosity periodic model and the conditional mathematical global theorem; it neither proves a 3D or Euler global-regularity result nor establishes empirical validity of the model assumptions. [given, A1, A2, A3, step 4.1] ∎
