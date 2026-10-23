---
id: pthm-fd-px13-prediction
kind: physics-theorem
title: Exterior potential sphere and zero ideal force — conditional physical prediction
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
- thm-fd-x13
- post-fd-continuum-balances
- post-fd-boundary-data
- def-fd-incompressible-euler-model
dependency_roles:
  thm-fd-x13: mathematical-premise
  post-fd-continuum-balances: physical-assumption
  post-fd-boundary-data: physical-assumption
  def-fd-incompressible-euler-model: formulation-prerequisite
physical_scope: Explicit smooth potential on exterior sphere, slip/no-through condition; exact inviscid Euler pressure
  force zero; not viscous/no-slip. Worked example is the actual explicit field/parameter selection in that section.
  B leaf cannot supply any later item. Constant density with spatially varying constraint pressure, not barotropic
  EOS pressure.
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
    url: https://farside.ph.utexas.edu/teaching/336L/Fluid/node102.html
    locator: Potential flow past a sphere and zero resultant.
  - title: Mandre, Fluid Dynamics Lecture Notes
    url: https://notes.shreyasmandre.com/fluid-dynamics-notes/Ch6.html
    locator: Chapter 6, potential flow.
verification:
  precheck: pending
---

## Statement

Let $a,\rho_0>0$, $p_\infty\in\mathbb R$, $U\in\mathbb R^3$, with lengths in metres, velocity in $\mathrm{m\,s^{-1}}$, density in $\mathrm{kg\,m^{-3}}$ and pressure in pascals, and $\Omega_a=\{x\in\mathbb R^3:r=|x|>a\}$. Define $n=x/r$, Cartesian $\operatorname{div}u=\partial_xu_x+\partial_yu_y+\partial_zu_z$, $\phi(x)=(U\cdot x)(1+a^3/(2r^3))$, $u=\nabla\phi$, and $p=p_\infty+\rho_0(|U|^2-|u|^2)/2$. In the selected unforced incompressible Euler model these smooth fields solve $(u\cdot\nabla)u+\rho_0^{-1}\nabla p=0$, div $u=0$, tend uniformly in direction to $U,p_\infty$ at infinity, and have $u\cdot n=0$ at $r=a$. On the surface the velocity is $u=\tfrac32(U-(U\cdot n)n)$, generally nonzero tangent to the sphere. Thus the boundary is impermeable with slip, not no-slip. For the inviscid stress $\sigma_E=-pI$ and sphere normal $n=x/a$ pointing from center into exterior,
$$\int_{|x|=a}\sigma_E n\,dS=-\int_{|x|=a}p n\,dS=0.$$
This is an exact inviscid mathematical-model prediction, neither zero viscous drag nor an observed force.

## Statement references

[Stewart, MIT 8.09, *Fluid Mechanics*, §6.4, printed pp. 120–123](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf)

[Fitzpatrick, *Fluid Mechanics*, UT Austin, potential flow past a sphere and zero resultant](https://farside.ph.utexas.edu/teaching/336L/Fluid/node102.html)

[Mandre, *Fluid Dynamics Lecture Notes*, Chapter 6, potential flow](https://notes.shreyasmandre.com/fluid-dynamics-notes/Ch6.html)

## Facts & Assumptions

**Given:** $a,\rho_0>0$, $U,p_\infty$, exterior sphere, exact potential and pressure, far field and slip boundary.

[A1] [[post-fd-continuum-balances]]: continuum balances are adopted physical inputs, not measured force laws.

[A2] [[post-fd-boundary-data]]: far-field and impermeability data are separate; no no-slip condition is adopted.

[F1] [[def-fd-incompressible-euler-model]]: the selected local equations are div $u=0$ and $\rho_0D_tu+\nabla p=0$, with inviscid stress $\sigma_E=-pI$.

[F2] [[thm-fd-x13]]: the displayed potential sphere field solves steady Euler, has no-through slip, and has zero pressure-only resultant with the stated orientation.

## Proof

1.1 The potential field in [F2] is divergence-free, solves the local steady Euler equation in [F1], tends to $U$, and has zero radial velocity at $r=a$. Its tangential surface value is the stated projection; this is slip, not no-slip. [given, A1, A2, F1, F2]

1.2 On $r=a$, [F2] gives $u=\tfrac32(U-(U\cdot n)n)$, so $|u|^2=\tfrac94(|U|^2-(U\cdot n)^2)$. The pressure formula in the Statement therefore depends on $n$ only through $(U\cdot n)^2$. Under $n\mapsto-n$, pressure and area are unchanged and $n$ changes sign; hence $\int p n\,dS=0$. [F2, step 1.1, algebra]

1.3 The resultant uses only $\sigma_E=-pI$ and contains no viscous shear term, so it makes no no-slip or viscous-drag claim. [A2, F1, step 1.2] ∎
