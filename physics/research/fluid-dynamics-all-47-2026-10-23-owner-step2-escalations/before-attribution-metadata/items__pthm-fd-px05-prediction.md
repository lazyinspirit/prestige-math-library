---
id: pthm-fd-px05-prediction
kind: physics-theorem
title: Vortex topology and global-Bernoulli counterexamples — conditional physical prediction
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
- thm-fd-x05
- post-fd-continuum-balances
- post-fd-boundary-data
- def-fd-incompressible-euler-model
dependency_roles:
  thm-fd-x05: mathematical-premise
  post-fd-continuum-balances: physical-assumption
  post-fd-boundary-data: physical-assumption
  def-fd-incompressible-euler-model: formulation-prerequisite
physical_scope: Punctured-axis smooth vortex and solid rotation; prescribed pressures; no global scalar potential
  or common Bernoulli constant without hypotheses. Worked example is the actual explicit field/parameter selection
  in that section. B leaf cannot supply any later item. Constant density with spatially varying constraint pressure,
  not barotropic EOS pressure.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: Stewart, MIT 8.09, Fluid Mechanics
    url: https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf
    locator: §6.4, printed pp. 120–123.
  - title: Fitzpatrick, Fluid Mechanics, UT Austin
    url: https://farside.ph.utexas.edu/teaching/336L/Fluid/node64.html
    locator: Irrotational flow, Bernoulli relation, global-potential topology.
verification:
  precheck: pending
---

## Statement

Let $\rho_0>0$ be constant density in $\mathrm{kg\,m^{-3}}$, let $p_\infty,p_0\in\mathbb R$ be pressure constants in pascals, let the vortex circulation parameter $\kappa\ne0$ be in $\mathrm{m^2\,s^{-1}}$, and let the angular speed $\Omega\ne0$ be in $\mathrm{s^{-1}}$. Spatial Cartesian coordinates $x,y,z$ are measured in metres and velocities in $\mathrm{m\,s^{-1}}$. Define $e_r=(x/r,y/r,0)$ and $e_\theta=(-y/r,x/r,0)$. In Cartesian coordinates, $\operatorname{div}u=\partial_xu_x+\partial_yu_y+\partial_zu_z$ and $\operatorname{curl}u=(\partial_yu_z-\partial_zu_y,\partial_zu_x-\partial_xu_z,\partial_xu_y-\partial_yu_x)$. On the punctured region $r=(x^2+y^2)^{1/2}>0$, set $e_\theta=(-y/r,x/r,0)$, $u=\kappa r^{-1}e_\theta$, and $p=p_\infty-\rho_0\kappa^2/(2r^2)$. This steady field solves the selected unforced incompressible Euler model, is divergence-free and curl-free on its domain, and has circulation $2\pi\kappa$ around every positively oriented circle about the axis. A differentiable global potential means a single-valued $C^1$ function $\phi$ on the domain with $u=\nabla\phi$; none exists.

On a connected open region, the steady solid-rotation field $u=\Omega(-y,x,0)$, $p=p_0+\rho_0\Omega^2(x^2+y^2)/2$ also solves that model. A streamline here is a $C^1$ curve $\gamma:J\to\mathcal O$, where $J\subseteq\mathbb R$ is an interval and $\mathcal O\subseteq\mathbb R^3$ is the selected connected open spatial region, satisfying $\gamma'(s)=u(\gamma(s))$. Its Bernoulli function $B=|u|^2/2+p/\rho_0=p_0/\rho_0+\Omega^2r^2$ is constant along each streamline but is not one constant across streamlines at different radii. These are exact conditional model fields, not viscous-flow or empirical claims.

## Statement references

[Stewart, MIT 8.09, *Fluid Mechanics*, §6.4, printed pp. 120–123](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf)


[Fitzpatrick, *Fluid Mechanics*, UT Austin, Bernoulli and irrotational flow](https://farside.ph.utexas.edu/teaching/336L/Fluid/node64.html)

## Facts & Assumptions

**Given:** $\rho_0>0$, $\kappa\ne0$, $\Omega\ne0$, the stated domains and steady fields.

[A1] [[post-fd-continuum-balances]]: continuum balances are adopted assumptions, and the calculations are conditional on the selected inviscid branch.

[A2] [[post-fd-boundary-data]]: no wall data are used for these local fields; data for finite devices are separate.

[F1] [[def-fd-incompressible-euler-model]]: steady fields satisfy $\operatorname{div}u=0$ and $\rho_0(u\cdot\nabla)u+\nabla p=0$.

[F2] [[thm-fd-x05]]: the vortex has nonzero circulation despite zero curl, and solid rotation has streamline-wise but non-global Bernoulli values.

[F3] [[def-fd-x00]]: for a closed piecewise-$C^1$ oriented curve $\gamma:[a,b]\to\Omega$, circulation is the line integral $\oint_\gamma u\cdot d\mathbf r=\int_a^b u(\gamma(s))\cdot\gamma'(s)\,ds$. The theorem's circular value uses $\gamma_R(\theta)=(R\cos\theta,R\sin\theta,z_0)$ with $0\le\theta\le2\pi$ and positive orientation about the axis.

## Proof

1.1 For $u_v=(-\kappa y/r^2,\kappa x/r^2,0)$, the Cartesian formulas in the Statement give $\operatorname{div}u_v=2\kappa xy/r^4-2\kappa xy/r^4=0$ and $(\operatorname{curl}u_v)_z=\partial_x(\kappa x/r^2)-\partial_y(-\kappa y/r^2)=\kappa(y^2-x^2)/r^4-\kappa(y^2-x^2)/r^4=0$; the first two curl components vanish because $u_{v,z}=0$ and the field is independent of $z$. Direct differentiation also gives $(u_v\cdot\nabla)u_v=-\kappa^2(x,y,0)/r^4$ and $\nabla p=\rho_0\kappa^2(x,y,0)/r^4$, so the steady Euler equation holds for $r>0$. [given, A1, F1, algebra]

1.2 For solid rotation, div $u=0$, acceleration is $-\Omega^2(x,y,0)$, and $\nabla p=\rho_0\Omega^2(x,y,0)$. Thus Euler holds and $B=p_0/\rho_0+\Omega^2r^2$. For a streamline $\gamma(s)=(x(s),y(s),z(s))$, its defining ODE gives $\frac{d}{ds}(x(s)^2+y(s)^2)=2x(-\Omega y)+2y(\Omega x)=0$. Hence its radius and Bernoulli value are constant along the curve, and the values differ across distinct radii because $\Omega\ne0$. [given, F1, F2, algebra]

2.1 With the positively oriented circle $\gamma_R$ and circulation convention in [F3], $u(\gamma_R(\theta))\cdot\gamma_R'(\theta)=\kappa$, so $\Gamma=\int_0^{2\pi}\kappa\,d\theta=2\pi\kappa$. A gradient has zero integral on a closed curve by the chain rule, so this nonzero integral precludes a single-valued global potential. [given, F2, F3, step 1.1, algebra]

3.1 These are conditional deductions inside the adopted model; no wall data are used, and they do not establish viscous behaviour or empirical validity. [A1, A2, F1, step 2.1, step 1.2] ∎

