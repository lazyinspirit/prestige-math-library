---
id: ex-fd-x07-application
kind: example
title: Bounded-domain Stokes residual estimate — worked interpretation
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 6
proof_strategy: direct
deps:
  - def-countable-choice
  - def-fd-quantity-and-frame-conventions
  - post-fd-boundary-data
  - pthm-fd-px07-prediction
dependency_roles:
  def-countable-choice: mathematical-premise
  def-fd-quantity-and-frame-conventions: formulation-prerequisite
  post-fd-boundary-data: operational-prerequisite
  pthm-fd-px07-prediction: physical-result
physical_scope: >-
  Exact rigid-rotation comparison on a bounded ball with a rotating no-slip
  wall. It exhibits a nonzero centripetal residual absorbed by the pressure
  while the two velocity fields coincide; it is not an example of a nonzero
  velocity discrepancy or of a general finite-Reynolds-number error bound. A
  zero-trace Poincare constant is an explicit input, not a derived claim.
empirical_premises: []
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
---

## Example

Assume $\mathrm{AC}_\omega$. In SI units, let $R>0$ metres, $\rho_0>0$ kilograms per cubic metre, $\mu>0$ pascal-seconds, $\Omega_r>0$ inverse seconds, and $p_0$ pascals. On the ball $B_R=\{(x,y,z)\in\mathbb R^3:x^2+y^2+z^2<R^2\}$, let the spherical wall rotate rigidly about the $z$-axis with angular velocity $(0,0,\Omega_r)$ and impose no slip. Define

$$u_{\rm NS}=u_{\rm S}=(-\Omega_r y,\Omega_r x,0),\qquad p_{\rm S}=p_0,\qquad p_{\rm NS}=p_0+\frac{\rho_0\Omega_r^2}{2}(x^2+y^2).$$

The two velocity fields are smooth and divergence-free, have the same wall velocity, and satisfy respectively the stationary constant-density incompressible Navier–Stokes equation and the restricted steady Stokes comparison equation with zero body acceleration. Let $C_{B_R}>0$ be an explicitly assumed constant such that $\|v\|_{L^2(B_R)}\le C_{B_R}\|\nabla v\|_{L^2(B_R)}$ for every $C^1$ zero-trace vector field; this example does not establish a value for it. Their velocity difference is zero, while the convective residual is $f=\rho_0\Omega_r^2(x,y,0)=\nabla(p_{\rm NS}-p_{\rm S})$. The residual estimates therefore hold for this supplied Poincare input. This exact example has nonzero pressure residual but zero velocity error; it does not demonstrate a nonzero velocity discrepancy.

## Facts & Assumptions

**Given:** Assume the SI conventions, the rotating wall and no-slip condition, the parameter values, and the fields stated in the Example.

[F1] [[def-fd-quantity-and-frame-conventions]]: a spatial vector transforms in Euclidean space, velocity has units m s$^{-1}$, pressure has units Pa, and $\mu,\rho_0$ have units Pa s and kg m$^{-3}$.

[F2] [[post-fd-boundary-data]]: for a moving solid wall with velocity $w_b$, the no-slip condition is $u=w_b$ on the wall.

[F3] [[pthm-fd-px07-prediction]]: for already-existing smooth Navier–Stokes and restricted Stokes comparison fields with the same boundary velocity and a zero-trace Poincare constant $C_\Omega$, the velocity and gradient differences obey the two stated residual estimates.

[F4] [[def-countable-choice]]: $\mathrm{AC}_\omega$ means every sequence of nonempty sets has a choice function; the example carries this exact assumption from the bounded-domain theorem.

[A1] The displayed fields and pressures are exact model fields, not measured data; $\Omega_r$, $\rho_0$, $\mu$, and $R$ are selected inputs.

[A2] The stated constant $C_{B_R}$ satisfies the displayed zero-trace Poincare inequality; its value is assumed and not proved in this example.

## Verification

1.1 Direct differentiation gives $\nabla\cdot u_{\rm NS}=\nabla\cdot u_{\rm S}=0$ and $\Delta u_{\rm NS}=\Delta u_{\rm S}=0$. The material acceleration is $(u\cdot\nabla)u=(-\Omega_r^2x,-\Omega_r^2y,0)$, while $\nabla p_{\rm NS}=\rho_0\Omega_r^2(x,y,0)$ and $\nabla p_{\rm S}=0$. Therefore $\rho_0(u_{\rm NS}\cdot\nabla)u_{\rm NS}+\nabla p_{\rm NS}-\mu\Delta u_{\rm NS}=0$ and $\nabla p_{\rm S}-\mu\Delta u_{\rm S}=0$. The rotating spherical wall has velocity $(-\Omega_r y,\Omega_r x,0)$, equal to both fluid traces. [given, F1, F2, A1, algebra]

2.1 Set $w=u_{\rm NS}-u_{\rm S}=0$ and $\pi=p_{\rm NS}-p_{\rm S}=\rho_0\Omega_r^2(x^2+y^2)/2$. Then $-\mu\Delta w+\nabla\pi=\nabla\pi=\rho_0\Omega_r^2(x,y,0)=-\rho_0(u_{\rm NS}\cdot\nabla)u_{\rm NS}=f$. The stated Poincare bound [A2] and all strong-solution hypotheses of [F3] hold. Applying [F3] with the carried assumption [F4] gives $\|\nabla w\|_2=0\le(C_{B_R}/\mu)\|f\|_2$ and $\|w\|_2=0\le(C_{B_R}^2/\mu)\|f\|_2$. [given, A2, F3, F4, step 1.1, algebra] ∎
