---
id: pthm-fd-px10-prediction
kind: physics-theorem
title: Conditional nonlinear Couette energy stability — conditional physical prediction
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
proof_strategy: direct
deps:
  - def-countable-choice
  - def-fd-quantity-and-frame-conventions
  - def-fd-x00
  - post-fd-continuum-balances
  - post-fd-boundary-data
  - post-fd-newtonian-fourier
  - thm-fd-x10
dependency_roles:
  def-countable-choice: mathematical-premise
  def-fd-quantity-and-frame-conventions: formulation-prerequisite
  def-fd-x00: formulation-prerequisite
  post-fd-continuum-balances: physical-assumption
  post-fd-boundary-data: physical-assumption
  post-fd-newtonian-fourier: physical-assumption
  thm-fd-x10: mathematical-premise
physical_scope: >-
  Conditional energy estimate for an already-existing smooth incompressible
  constant-density Newtonian solution in a horizontally periodic channel with
  Couette wall velocities and zero perturbation trace. The sufficient decay
  threshold applies only on the stated solution interval; no global existence,
  optimal transition Reynolds number, or empirical applicability is asserted.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Fluid Mechanics lecture notes, Chapter 2: The Navier-Stokes Equation"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf"
      locator: "§3.2.2 Couette flow, printed pp. 64–65; the base profile and wall velocities are treated directly."
    - title: "Jean-Luc Guermond, Introduction to Partial Differential Equations for Engineering Applications, Part I, Chapter 3"
      url: "https://people.it.tamu.edu/~guermond/M602_FALL_2024/vol1.pdf"
      locator: "§3.3 energy method and §3.4.4 Poincare-Steklov inequality, PDF pp. 23–27; contextual energy and Poincare treatment."
verification:
  precheck: pass
---

## Statement

Assume $\mathrm{AC}_\omega$, meaning countable choice for a sequence of nonempty sets. Work in the nonrelativistic SI fluid model with absolute time in seconds and Euclidean spatial coordinates in metres. Let $L_x,L_z,h>0$ be lengths in metres, let $T>0$ be a time in seconds, let $\rho_0>0$ be a constant density in kilograms per cubic metre, and let $\mu>0$ be a constant dynamic viscosity in pascal-seconds on the selected state branch. Set $\nu=\mu/\rho_0$ in square metres per second and take a constant shear rate $S\in\mathbb R$ in inverse seconds. Define $Q=\mathbb T_{L_x}\times(0,h)\times\mathbb T_{L_z}$, where $\mathbb T_L=\mathbb R/(L\mathbb Z)$; cell integrals use Lebesgue measure on one horizontal fundamental cell.

Let $u\in C^1([0,T];C^2(\overline Q;\mathbb R^3))$ and $p\in C([0,T];C^1(\overline Q))$ be periodic in the two torus coordinates. Suppose $u$ is an already-existing strong incompressible solution with zero body acceleration of

$$\partial_tu+(u\cdot\nabla)u+\rho_0^{-1}\nabla p-\nu\Delta u=0,\qquad \nabla\cdot u=0,$$

with no-slip wall values $u|_{y=0}=0$ and $u|_{y=h}=Sh(1,0,0)$. The wall data and strong solution are hypotheses, not existence conclusions. Set $U_b(x,y,z)=(Sy,0,0)$, $w=u-U_b$, and $E(t)=\int_Q|w(t,x,y,z)|^2\,dx\,dy\,dz$. If $|S|h^2/\nu<2$, then for every $t\in[0,T]$,

$$E(t)\le\exp\!\left[-\left(\frac{2\nu}{h^2}-|S|\right)t\right]E(0).$$

The condition is sufficient and is not asserted to be sharp. This model deduction holds only on the interval where the assumed smooth solution exists; it proves neither existence on all time nor global three-dimensional regularity nor a physical transition threshold.

## Statement references

[Tong, Chapter 2, §3.2.2, Couette flow and its prescribed wall velocities](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf)

[Guermond, Part I, Chapter 3, §§3.3–3.4.4, energy and Poincare-Steklov context](https://people.it.tamu.edu/~guermond/M602_FALL_2024/vol1.pdf)

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$, the positive parameters and SI units in the Statement, the periodic channel, the stated regularity and periodicity, the existing strong solution of the displayed equations, and the prescribed no-slip wall values.

[A1] [[post-fd-continuum-balances]]: the smooth single-component continuum model adopts mass and momentum balances on material subregions; these physical premises do not assert that a solution exists.

[A2] [[post-fd-boundary-data]]: the selected no-slip condition is equality of fluid velocity and wall velocity; periodic faces are identified and are not physical walls.

[A3] [[post-fd-newtonian-fourier]]: the adopted Newtonian/Fourier closure specifies the state-dependent shear and bulk coefficients and the tension-positive stress; this item selects a constant positive shear coefficient $\mu$ and incompressibility, without treating the coefficient as measured or universal.

[F1] [[def-fd-quantity-and-frame-conventions]]: the model uses Newtonian spacetime and a Cartesian inertial chart; velocity is an Eulerian vector field, $D_t=\partial_t+u\cdot\nabla$, and the listed physical quantities have their stated SI types and units.

[F2] [[def-fd-x00]]: the formal constant-density incompressible Navier–Stokes system is $\partial_tu+(u\cdot\nabla)u+\rho_0^{-1}\nabla p-(\mu/\rho_0)\Delta u=0$, $\operatorname{div}u=0$, with componentwise vector Laplacian. This formal definition asserts no physical solution.

[F3] [[thm-fd-x10]] is a draft mathematical theorem with a proof present; no independent proof acceptance is recorded. Under $\mathrm{AC}_\omega$, for an existing smooth solution on the periodic channel with Couette wall values, the sufficient condition $|S|h^2/\nu<2$ implies $E(t)\le e^{-(2\nu/h^2-|S|)t}E(0)$ on its assumed interval. Its current Step-1 record is owner-resolved ready; this is authoring readiness only and does not accept the mathematical proof.

[F4] [[def-countable-choice]]: $\mathrm{AC}_\omega$ means every sequence of nonempty sets has a choice function; no full Axiom of Choice is added.

[A4] The displayed pointwise equations and existence of $u,p$ on $[0,T]$ are explicit strong-solution hypotheses. They are not derived here from the integral balance postulate and do not imply global existence.

## Proof

1.1 The field in the Statement has the exact parameters $L_x,L_z,h,\nu,\rho_0,S,T$, periodicity, regularity, zero-body-acceleration strong equations, divergence constraint, Couette wall values, and countable-choice hypothesis [F4] required by [F3]. The perturbation in [F3] is $w=u-U_b$, and its energy is exactly the stated integral $E(t)$. The adopted postulates [A1]–[A3] give the physical model context; the displayed pointwise strong solution remains an explicit hypothesis [A4]. [given, A1, A2, A3, A4, F1, F2, F3, F4]

2.1 Apply [F3] with the exact inherited countable-choice assumption [F4] to these matched hypotheses. It gives the claimed estimate for all $t\in[0,T]$ when $|S|h^2/\nu<2$. Since this is a deduction from the strong model equations and assumed smooth existence, it gives no existence or empirical conclusion. [given, F3, F4, step 1.1, algebra] ∎

The mathematical supplier remains draft despite having a proof present. Its current Step-1 record is owner-resolved ready for authoring only; this is not independent proof acceptance. The conditional argument does not treat readiness as proof approval.
