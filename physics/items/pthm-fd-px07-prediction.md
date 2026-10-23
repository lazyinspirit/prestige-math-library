---
id: pthm-fd-px07-prediction
kind: physics-theorem
title: Bounded-domain Stokes residual estimate — conditional physical prediction
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 5
proof_strategy: direct
deps:
  - def-countable-choice
  - def-fd-quantity-and-frame-conventions
  - def-fd-x00
  - post-fd-continuum-balances
  - post-fd-boundary-data
  - post-fd-newtonian-fourier
  - post-fd-creeping-force-balance
  - thm-fd-x07
  - def-fd-creeping-stokes-model
dependency_roles:
  def-countable-choice: mathematical-premise
  def-fd-quantity-and-frame-conventions: formulation-prerequisite
  def-fd-x00: formulation-prerequisite
  post-fd-continuum-balances: physical-assumption
  post-fd-boundary-data: physical-assumption
  post-fd-newtonian-fourier: physical-assumption
  post-fd-creeping-force-balance: physical-assumption
  thm-fd-x07: mathematical-premise
  def-fd-creeping-stokes-model: formulation-prerequisite
physical_scope: >-
  Conditional estimate for already-existing smooth constant-density incompressible
  Newtonian and restricted steady Stokes fields with the same prescribed wall
  velocity, zero body acceleration, and an explicit zero-trace Poincare bound;
  includes the periodic channel constant h. It asserts no solution existence,
  exterior-domain estimate, approximation-error estimate against the full
  momentum equation retaining material acceleration beyond these conditional
  residual bounds, or empirical applicability.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Jean-Luc Guermond, Introduction to Partial Differential Equations for Engineering Applications, Part I, Chapter 3"
      url: "https://people.it.tamu.edu/~guermond/M602_FALL_2024/vol1.pdf"
      locator: "§3.3 energy method and §3.4.4 Poincare-Steklov inequality, printed pp. 23–27; the general Poincare proof is explicitly deferred."
    - title: "David Tong, Fluid Mechanics lecture notes, Chapter 3: The Navier-Stokes Equation"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf"
      locator: "§3.4 Stokes-flow dissipation, printed pp. 82–84; contextual comparison only, not the residual estimate."
    - title: "Iain Stewart, MIT 8.09, Advanced Classical Mechanics, Chapter 6: Fluid Mechanics"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
      locator: "§6.8, printed pp. 135–138/PDF pp. 137–140; small-Reynolds-number Stokes sphere calculation, not a bounded-domain residual theorem."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Statement

Assume $\mathrm{AC}_\omega$, meaning countable choice for a sequence of nonempty sets. Work in the nonrelativistic SI fluid model: position is measured in metres, time in seconds, velocity in metres per second, pressure in pascals, density in kilograms per cubic metre, dynamic viscosity $\mu>0$ in pascal-seconds, and kinematic viscosity $\nu=\mu/\rho_0$ in square metres per second for constant density $\rho_0>0$. Use the tension-positive Cauchy stress convention. Adopt the smooth single-component continuum balances, the selected no-slip wall data, and the constant-coefficient incompressible Newtonian branch. The pointwise strong equations below are hypotheses on already-existing fields; no existence claim or inference from the integral balances alone is made.

Let $\Omega\subset\mathbb R^3$ be a bounded connected open $C^1$ domain, meaning that each boundary point has a neighborhood in which the boundary is a $C^1$ graph and $\Omega$ lies on one side of that graph after a rigid coordinate change. Let $C_\Omega>0$ have units of metres and satisfy $\|v\|_{L^2(\Omega)}\le C_\Omega\|\nabla v\|_{L^2(\Omega)}$ for every $v\in C^1(\overline\Omega;\mathbb R^3)$ with zero boundary trace. Suppose $u_{\rm NS},u_{\rm S}\in C^2(\overline\Omega;\mathbb R^3)$ and $p_{\rm NS},p_{\rm S}\in C^1(\overline\Omega)$ are divergence-free velocity fields with the same prescribed no-slip boundary velocity, zero body acceleration, and pointwise equations

$$\rho_0(u_{\rm NS}\cdot\nabla)u_{\rm NS}+\nabla p_{\rm NS}-\mu\Delta u_{\rm NS}=0,\qquad \nabla p_{\rm S}-\mu\Delta u_{\rm S}=0.$$

The first equation is the stationary strong incompressible Navier–Stokes system. The second is the separately adopted restricted steady Stokes comparison system, with its convective term omitted only for $u_{\rm S}$. Define $w=u_{\rm NS}-u_{\rm S}$, $\pi=p_{\rm NS}-p_{\rm S}$, and $f=-\rho_0(u_{\rm NS}\cdot\nabla)u_{\rm NS}$. Then

$$\|\nabla w\|_{L^2(\Omega)}\le \frac{C_\Omega}{\mu}\|f\|_{L^2(\Omega)},\qquad \|w\|_{L^2(\Omega)}\le \frac{C_\Omega^2}{\mu}\|f\|_{L^2(\Omega)}.$$

For a periodic channel $Q=\mathbb T_{L_x}\times(0,h)\times\mathbb T_{L_z}$, with $L_x,L_z,h>0$ measured in metres and $\mathbb T_L=\mathbb R/(L\mathbb Z)$, take periodic fields in the two torus coordinates and integrate over one fundamental cell using Lebesgue measure. Assume the same stationary systems and boundary data on the periodic lift $\mathbb R\times(0,h)\times\mathbb R$, with $u_{\rm NS},u_{\rm S}\in C^2(\overline Q;\mathbb R^3)$ and $p_{\rm NS},p_{\rm S}\in C^1(\overline Q)$. Define $w,\pi,f$ by the same formulas. The direct channel Poincare bound has constant $h$, so

$$\|\nabla w\|_{L^2(Q)}\le \frac{h}{\mu}\|f\|_{L^2(Q)},\qquad \|w\|_{L^2(Q)}\le \frac{h^2}{\mu}\|f\|_{L^2(Q)}.$$

The periodic cell is not treated as a bounded $C^1$ Euclidean domain. Both estimates are conditional a-posteriori bounds for fields that already exist; neither asserts existence, an exterior-domain estimate, an approximation-error estimate against the full momentum equation retaining material acceleration beyond the stated conditional residual bounds, nor empirical validity of either model.

## Statement references

[Guermond, Part I, Chapter 3, §§3.3–3.4.4, energy and Poincare-Steklov context](https://people.it.tamu.edu/~guermond/M602_FALL_2024/vol1.pdf)

[Tong, Chapter 3, §3.4, Stokes-flow dissipation context](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf)

[Stewart, MIT 8.09, §6.8, restricted low-Reynolds-number Stokes formulation and sphere calculation](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf)

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$, the physical model and SI conventions in the Statement, the stated domains and regularity, the no-slip boundary data, the common boundary velocity, zero body acceleration, the strong-form equations, and the explicit Poincare bound on $\Omega$.

[A1] [[post-fd-continuum-balances]]: the smooth single-component continuum model adopts mass and linear/angular momentum balances on material subregions; these are physical assumptions and do not by themselves supply a solution or its existence.

[A2] [[post-fd-boundary-data]]: no-slip is the separately selected equality of fluid and wall velocities on the wall; periodic faces are identified and are not physical walls.

[A3] [[post-fd-newtonian-fourier]]: the constitutive branch adopts $\sigma=-pI_3+2\mu D_0+\zeta\theta I_3$ with stated state laws. Here the theorem selects a constant $\mu>0$ and incompressibility $\theta=0$; no coefficient value is inferred from measurement.

[F1] [[def-fd-quantity-and-frame-conventions]]: time is absolute in Newtonian spacetime; the fields use a Cartesian inertial chart; velocity is an Eulerian vector field, stress is a tensor with traction $\sigma n$, and $\mu,\rho_0,p,u$ have the SI types and units stated in the Definition.

[F2] [[def-fd-x00]]: for constants $\rho_0,\mu>0$, the formal pointwise incompressible Navier–Stokes equation is $\partial_tu+(u\cdot\nabla)u+\rho_0^{-1}\nabla p-(\mu/\rho_0)\Delta u=0$, $\operatorname{div}u=0$; its steady Stokes system omits the time derivative and convection. This is mathematical notation and asserts no physical solution.

[F3] [[thm-fd-x07]] is a draft mathematical theorem with a proof present; no independent proof acceptance is recorded. Under $\mathrm{AC}_\omega$, on bounded $C^1$ Euclidean domains, a smooth divergence-free zero-trace field satisfying $-\mu\Delta w+\nabla q=f$ and the stated zero-trace Poincare inequality obeys both residual bounds in the Statement. The same result separately proves $\|v\|_{L^2(Q)}\le h\|\nabla v\|_{L^2(Q)}$ for smooth periodic channel fields vanishing at $y=0,h$; its proof does not regard $Q$ as a bounded $C^1$ Euclidean domain. Its current Step-1 record is owner-resolved ready for authoring only, not proof acceptance.

[F4] [[def-countable-choice]]: $\mathrm{AC}_\omega$ means every sequence of nonempty sets has a choice function; no stronger choice principle is asserted.

[F5] [[def-fd-creeping-stokes-model]]: the current Definition selects $\operatorname{div}u_{\rm S}=0$, $\sigma_{\rm S}=-p_{\rm S}I_3+2\mu D(u_{\rm S})$, and $\operatorname{div}\sigma_{\rm S}+\rho_0b=0$, equivalently $-\nabla p_{\rm S}+\mu\Delta u_{\rm S}+\rho_0b=0$. For this consumer $b=0$, so it gives the stated restricted Stokes equation. Its current carrier was inspected and the interface matches this zero-body-acceleration specialization.

[A5] [[post-fd-creeping-force-balance]]: the current Postulate adopts the alternative steady incompressible balance $\operatorname{div}\sigma+\rho_0b=0$ with constant $\rho_0>0$ and Newtonian stress; for this comparison set $b=0$. This replaces, and is not simultaneous with, the full material-acceleration momentum balance for $u_{\rm S}$. The adopted interface matches this specialization; its formulation notes explain the algebraically equivalent equation without presenting a deductive proof of the physical balance.

[A4] The compared fields are explicitly assumed to exist with the stated regularity and to satisfy the two pointwise systems in the Statement. This is a strong-solution hypothesis, not a deduction from [A1] and not a claim that either adopted model describes nature.

## Proof

1.1 Within the adopted continuum, wall, and Newtonian assumptions [A1]–[A3] and Cartesian SI conventions [F1], take the full Navier–Stokes equation as the explicit strong-solution hypothesis [A4], not as a consequence of the integral balances alone. For $u_{\rm S}$, the current model Definition [F5] and zero-body-force Postulate specialization [A5] give $\operatorname{div}u_{\rm S}=0$ and $\operatorname{div}\sigma_{\rm S}=0$. With constant $\mu$, componentwise differentiation gives $(\operatorname{div}\sigma_{\rm S})_i=-\partial_i p_{\rm S}+\mu\sum_j(\partial_{jj}u_{{\rm S},i}+\partial_j\partial_i u_{{\rm S},j})=-\partial_i p_{\rm S}+\mu\Delta u_{{\rm S},i}+\mu\partial_i(\operatorname{div}u_{\rm S})=-\partial_i p_{\rm S}+\mu\Delta u_{{\rm S},i}$, so $-\mu\Delta u_{\rm S}+\nabla p_{\rm S}=0$. Set $w=u_{\rm NS}-u_{\rm S}$ and $\pi=p_{\rm NS}-p_{\rm S}$. The shared boundary data give $w|_{\partial\Omega}=0$, and the divergence-free assumptions give $\nabla\cdot w=0$. Rearranging the Navier–Stokes equation gives $-\mu\Delta u_{\rm NS}+\nabla p_{\rm NS}=f$. Subtracting yields $-\mu\Delta w+\nabla\pi=f$, with the exact smoothness and Poincare hypotheses of [F3]. [given, A1, A2, A3, A4, A5, F1, F2, F3, F5, algebra]

2.1 On one periodic channel cell, integrate $(-\mu\Delta w+\nabla\pi)\cdot w=f\cdot w$. Integration by parts in $y$ has zero wall terms because $w=0$ there; the paired periodic-face terms in $x,z$ cancel. Also $\int_Q\nabla\pi\cdot w=-\int_Q\pi\,\nabla\cdot w=0$ by the same boundary conditions and incompressibility. Thus $\mu\|\nabla w\|_{L^2(Q)}^2=\int_Q f\cdot w$. This uses the fundamental theorem of calculus on a fundamental cell, not the bounded-domain divergence theorem. [given, A4, step 1.1, algebra]

2.2 Apply [F3] under the exact countable-choice hypothesis [F4] to the residual system in step 1.1 and the stated $C_\Omega$ inequality. It gives $\|\nabla w\|_{L^2(\Omega)}\le C_\Omega\|f\|_{L^2(\Omega)}/\mu$ and then $\|w\|_{L^2(\Omega)}\le C_\Omega\|\nabla w\|_{L^2(\Omega)}\le C_\Omega^2\|f\|_{L^2(\Omega)}/\mu$. [given, F3, F4, step 1.1, algebra]

3.1 Write $a=\|f\|_{L^2(Q)}$, $b=\|w\|_{L^2(Q)}$, and $c=\int_Q|f||w|$. Pointwise, if $w=0$ then $f\cdot w=0$; if $w\ne0$, $0\le|f-((f\cdot w)/|w|^2)w|^2$ expands to $|f\cdot w|\le|f||w|$. Therefore $|\int_Q f\cdot w|\le c$. If $b=0$, continuity makes $w=0$ and $c=0$. If $b>0$, then for every real $s$, $0\le\int_Q(|f|-s|w|)^2=a^2-2sc+s^2b^2$; choosing $s=c/b^2$ gives $c^2\le a^2b^2$. Hence $|\int_Qf\cdot w|\le ab$. [given, step 2.1, algebra]

4.1 Let $r=\|\nabla w\|_{L^2(Q)}$. By [F3], $b\le hr$. Steps 2.1 and 3.1 give $\mu r^2\le a b\le h a r$. If $r=0$ the gradient estimate is immediate; if $r>0$, divide by $\mu r$ to get $r\le ha/\mu$. Applying $b\le hr$ again gives $b\le h^2a/\mu$. These are the two periodic-channel estimates. [given, F3, F4, step 2.1, step 3.1, algebra] ∎

The deduction is conditional on the strong-solution hypotheses and the adopted restricted Stokes definition recorded in Facts & Assumptions. The zero-inertia force balance is a physical assumption; its algebraically equivalent form does not prove that assumption. No pointwise equations are inferred from the integral balance postulate alone, and no empirical claim is made.
