---
id: pthm-fd-two-dimensional-viscous-model-globality
kind: physics-theorem
title: Global two-dimensional periodic viscous model evolution
status: published
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
  Force-free smooth constant-density incompressible Newtonian model in the
  transversely invariant two-dimensional sector of the three-dimensional model,
  with constant positive shear viscosity. It asserts global smooth evolution
  for every smooth divergence-free datum in this invariant sector. This is a
  mechanical subsystem and asserts no wall or thermal evolution, no total-
  energy or entropy-balance solution, no global regularity for general 3D data
  or inviscid flow, and no empirical validity.
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
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Statement

Assume the Axiom of Countable Choice. Let $L>0$ be measured in metres, $U_*>0$ in metres per second, $\rho_*>0$ be a constant mass density in kilograms per cubic metre, and $\mu>0$ be a constant dynamic shear viscosity in pascal seconds. Fix an auxiliary constant temperature $T_*>0$ in kelvins and an open constitutive state set $\mathcal S\subset(0,\infty)^2$ containing $(\rho_*,T_*)$; take the auxiliary constitutive state throughout the branch to be the constant pair $(\rho,T)=(\rho_*,T_*)$, where the adopted shear-viscosity law has value $\mu$. The bulk coefficient may be any admissible value because the velocity is divergence-free, and any admissible conductivity law gives zero Fourier flux for the constant temperature; no total-energy or entropy-balance solution is asserted. Use SI position $X$ in metres, time $t$ in seconds, velocity $u$ in metres per second, and pressure $p$ in pascals. On the reduced two-dimensional periodic torus $\mathbb T_L^2=(\mathbb R/(2\pi L\mathbb Z))^2$, let the smooth model fields be $u\in C^\infty(I\times\mathbb T_L^2;\mathbb R^2)$ and $p\in C^\infty(I\times\mathbb T_L^2;\mathbb R)$ for an open time interval $I$ containing $0$, and adopt the force-free incompressible Newtonian equations. Identify torus fields with smooth periodic lifts to Euclidean coordinates when applying the local continuum equations.
$$\rho_*\bigl(\partial_tu+(u\cdot\nabla_2)u\bigr)=\nabla_2\cdot\sigma^{(2)},\qquad \nabla_2\cdot u=0,\qquad \sigma^{(2)}=-pI_2+2\mu D_2u,\qquad D_2u=\tfrac12\bigl(\nabla_2u+(\nabla_2u)^{\mathsf T}\bigr).$$
These are the invariant reduction of the adopted three-dimensional continuum and Newtonian stress on physical cell $\mathbb T_L^3$. Let $J_2:\mathbb T_L^3\to\mathbb T_L^2$ be $J_2(X_1,X_2,X_3)=(X_1,X_2)$ modulo $2\pi L$, and lift $u=(u_1,u_2)$ and $p$ to $\widetilde u=(u_1\circ J_2,u_2\circ J_2,0)$ and $\widetilde p=p\circ J_2$. The three-dimensional stress is $\widetilde\sigma=-\widetilde pI_3+2\mu D_3\widetilde u$. For $\nabla_2\cdot u=0$, direct differentiation yields $\nabla_3\cdot\widetilde u=0$, $\nabla_3\cdot\widetilde\sigma=(\nabla_2\cdot\sigma^{(2)},0)$, and $\nabla_3\cdot(2\mu D_3\widetilde u)=(\mu\Delta_2u,0)$. The third momentum component vanishes, and the first two are exactly the displayed equations. Conversely, every smooth 3D solution with this transverse invariance and zero third velocity component reduces to the displayed planar equations. The normalized 3D mean of the lifted pressure equals its normalized 2D mean, so the pressure gauge is preserved.
Set $x=X/L\in\mathbb T^2=(\mathbb R/(2\pi\mathbb Z))^2$, $\tau=tU_*/L$, $U=u/U_*$, $\Pi=p/(\rho_*U_*^2)$, and $\bar\nu=\mu/(\rho_*U_*L)>0$. Use normalized measure $d\mu=(2\pi)^{-2}dx$ and fix the pressure gauge by $\int_{\mathbb T^2}\Pi(\tau,x)\,d\mu(x)=0$ at each time. For any smooth real periodic divergence-free initial velocity $U_0:\mathbb T^2\to\mathbb R^2$, the adopted model has a unique smooth velocity $U$ and the unique pressure $\Pi$ with this zero-mean gauge on all normalized times $\tau\ge0$, satisfying
$$\partial_\tau U+(U\cdot\nabla_x)U=-\nabla_x\Pi+\bar\nu\Delta_xU,\qquad \nabla_x\cdot U=0,\qquad U(0,\cdot)=U_0.$$
Here global means smooth on $[0,\infty)$ with finite Sobolev norms on every compact time interval; no uniform-in-time norm bound is asserted. Scaling back gives a unique global smooth physical model evolution for all $t\ge0$. This conclusion applies to the adopted two-dimensional positive-viscosity periodic model and, by the stated lift, to the corresponding transversely invariant three-dimensional data. It asserts no global regularity for arbitrary three-dimensional data or inviscid flow, and no empirical validity claim.

## Statement references

[Sergei Kuksin and Armen Shirikyan, Mathematics of Two-Dimensional Turbulence](https://webusers.imj-prg.fr/~sergei.kuksin/MyBooks/bookArmen.pdf).

## Facts & Assumptions

**Given:** Countable Choice; the constant positive SI density and viscosity, periodic cell, force-free model, and smooth divergence-free data in the Statement.

[A1] [[post-fd-continuum-balances]]: the adopted smooth continuum supplies mass and linear-momentum balances in an inertial Cartesian chart; this theorem uses the force-free constant-density periodic branch.

[A2] [[post-fd-newtonian-fourier]]: the current postulate adopts the three-dimensional stress correction $\tau=2\mu D_0\widetilde u+\zeta(\nabla_3\cdot\widetilde u)I_3$ and Fourier heat flux, with nonnegative shear and bulk coefficients and positive-semidefinite symmetric conductivity. At the constant constitutive state $(\rho_*,T_*)$ fixed in the Statement, the shear-viscosity law has value $\mu>0$. Since $\nabla_3\cdot\widetilde u=0$, $D_0\widetilde u=D_3\widetilde u$; its upper-left $2\times2$ block is $D_2u$ and all remaining entries vanish. The bulk term vanishes and constant temperature gives zero Fourier flux, which is outside this mechanical subsystem. The current batch-11 manifest registers this carrier, and step1Decision reports a current ready record; this records authoring readiness, not independent proof approval.

[A3] [[def-fd-incompressible-newtonian-model]]: the current definition is three-dimensional and specifies constant $\rho_0>0$, $\nabla_3\cdot u=0$, $\sigma=-pI_3+2\mu D_3u$, momentum balance $\rho_0D_tu=\nabla_3\cdot\sigma$, and $\nu=\mu/\rho_0$; initial and boundary data are separate. The Statement verifies its two-dimensional invariant reduction. The current batch-11 manifest registers this carrier, and step1Decision reports a current ready record; this records authoring readiness, not independent proof approval. The local momentum equation is also stated explicitly in the Statement.

[F1] [[thm-fd-global-two-dimensional-periodic-navier-stokes]]: the current Statement assumes Countable Choice, $\nu>0$, and smooth real divergence-free data on the normalized two-dimensional torus; it gives a unique global smooth periodic velocity and a logarithmic Sobolev bound. Its current proof obtains the mean-zero pressure from the local incompressible theorem. The batch-19 manifest and item carrier have matching direct dependencies.

[A4] [[def-countable-choice]]: “For every family $(X_n)_{n\in\mathbb N}$ of nonempty sets indexed by $\mathbb N$ there is a function $f$ with domain $\mathbb N$ such that $f(n)\in X_n$ for every $n$.”

## Proof

**Given:** The Statement hypotheses and conditional inputs [A1]–[A4] and [F1].

**Proof technique:** Reduce the constant-viscosity physical model to the normalized periodic Navier–Stokes equation, apply the current conditional two-dimensional global mathematical supplier, and invert the scaling.

1.1 In the three-dimensional lift from the Statement, $\rho_*$ and $\mu$ are constant and $\nabla_3\cdot\widetilde u=0$. Componentwise differentiation gives $\nabla_3\cdot(2\mu D_3\widetilde u)=\mu\Delta_3\widetilde u+\mu\nabla_3(\nabla_3\cdot\widetilde u)=\mu\Delta_3\widetilde u$. Independence of $X_3$ and the zero third component reduce this identity and the convective term to $\nabla_2\cdot(2\mu D_2u)=\mu\Delta_2u$ and $(u\cdot\nabla_2)u$, respectively; the third momentum component is zero. Thus the adopted reduced momentum equation is $\partial_tu+(u\cdot\nabla_2)u=-\rho_*^{-1}\nabla_2p+(\mu/\rho_*)\Delta_2u$. [given, A1, A2, A3, algebra]

2.1 With $x=X/L$, $\tau=tU_*/L$, $U=u/U_*$, and $\Pi=p/(\rho_*U_*^2)$, the time derivative, convective, pressure-gradient, and Laplacian terms scale respectively by $U_*^2/L$, $U_*^2/L$, $\rho_*U_*^2/L$, and $U_*/L^2$. Substituting these scalings into the acceleration equation of step 1.1 and multiplying by $L/U_*^2$ gives $\partial_\tau U+(U\cdot\nabla_x)U=-\nabla_x\Pi+\bar\nu\Delta_xU$, with $\bar\nu=\mu/(\rho_*U_*L)>0$; the divergence constraint and smooth periodic initial data are preserved. [given, step 1.1, algebra]

3.1 The hypotheses of [F1] hold for $d=2$, $\bar\nu>0$, smooth divergence-free $U_0$, and Countable Choice [A4]. Conditional on the current supplier statement, it gives the unique global smooth normalized velocity and mean-zero pressure asserted in the Statement. [given, A4, F1, step 2.1]

4.1 The inverse scaling $t=(L/U_*)\tau$, $X=Lx$, $u(t,X)=U_*U(\tau,x)$, and $p(t,X)=\rho_*U_*^2\Pi(\tau,x)$ preserves the reduced equations, periodicity, smoothness, and uniqueness. For $d=2$, lifting these fields gives a global smooth solution of the adopted three-dimensional mechanical equations in the stated invariant sector; its pressure remains mean-zero because the normalized full-cell mean equals the reduced mean. Since every finite physical time corresponds to a finite normalized time, the physical solution exists smoothly for all $t\ge0$. [given, step 2.1, step 3.1, construct]

5.1 The argument uses only the adopted force-free positive-viscosity periodic model and the conditional mathematical global theorem. The lift gives global smooth evolution for the stated invariant three-dimensional data, but the argument proves no global regularity for arbitrary three-dimensional data or inviscid flow and establishes no empirical validity of the model assumptions. [given, A1, A2, A3, step 4.1] ∎
