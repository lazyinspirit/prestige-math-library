---
id: pthm-fd-px08-prediction
kind: physics-theorem
title: Exact viscous diffusion layer and material-circulation decay — conditional physical prediction
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
- thm-fd-x08
- post-fd-continuum-balances
- post-fd-boundary-data
- post-fd-newtonian-fourier
- def-fd-incompressible-newtonian-model
dependency_roles:
  thm-fd-x08: mathematical-premise
  post-fd-continuum-balances: physical-assumption
  post-fd-boundary-data: physical-assumption
  post-fd-newtonian-fourier: physical-assumption
  def-fd-incompressible-newtonian-model: formulation-prerequisite
physical_scope: t>0,y>0 initial-wall corner excluded; exact layer bound and separately smooth periodic sine-shear
  material loop. Worked example is the actual explicit field/parameter selection in that section. B leaf cannot
  supply any later item.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: Mandre, Fluid Dynamics Lecture Notes
    url: https://notes.shreyasmandre.com/fluid-dynamics-notes/Ch3.html
    locator: §3.3.1, full Stokes first-problem derivation.
  - title: 'MIT 2.25 Advanced Fluid Mechanics, Solution: Stokes First Problem'
    url: https://ocw.mit.edu/courses/2-25-advanced-fluid-mechanics-fall-2013/6c64b72340cd5b5da9a0d59516b63aec_MIT2_25F13_SolutionStokes1.pdf
    locator: All four pages; similarity scale and wall-stress scaling, not erfc profile.
verification:
  precheck: pending
---

## Statement

Let $\rho_0,\mu>0$, $\nu=\mu/\rho_0$, and $U\in\mathbb R$. Use SI units: length metres, time seconds, velocity $U,A$ in $\mathrm{m\,s^{-1}}$, density $\mathrm{kg\,m^{-3}}$, viscosity $\mathrm{Pa\,s}$, diffusivity $\nu$ in $\mathrm{m^2\,s^{-1}}$, periods $L_x,L_y,L_z$ in metres, and $k$ in $\mathrm{m^{-1}}$. For Cartesian fields use $\operatorname{div}u=\partial_xu_x+\partial_yu_y+\partial_zu_z$ and componentwise $\Delta u$. For $t>0,y>0$ and $x,z\in\mathbb R$, set $I_0=\int_0^\infty e^{-r^2}dr$, $E(s)=I_0^{-1}\int_s^\infty e^{-r^2}dr$ for $s\ge0$, and $u(t,x,y,z)=(UE(y/(2\sqrt{\nu t})),0,0)$, with constant pressure. This field is smooth for positive time and positive $y$, solves unsteady Stokes and full constant-density Navier–Stokes because its convective term vanishes, has wall trace $U$ for $t>0$, tends to zero as $y\to\infty$, and tends to zero as $t\downarrow0$ for each fixed $y>0$. The corner $(t,y)=(0,0)$ is excluded. For $0<\varepsilon<1$,
$$y\ge2\sqrt{\nu t}\sqrt{\log(1/\varepsilon)}\quad\Longrightarrow\quad |u(t,y)|\le\varepsilon|U|.$$

Separately let the domain be the flat three-torus $\mathbb T_{L_x}\times\mathbb T_{L_y}\times\mathbb T_{L_z}$, where $\mathbb T_L=\mathbb R/(L\mathbb Z)$ and $L_x,L_y,L_z>0$. Choose an integer $m\ge1$, set $k=2\pi m/L_y$, and take $A\in\mathbb R$. The field $u=(Ae^{-\nu k^2t}\sin(ky),0,0)$ with constant pressure is a smooth exact Navier–Stokes solution for all $t\in\mathbb R$. Choose $b,c>0$ with $c<L_x/2$, $b<L_y/2$, and $\alpha=kb\in(0,\pi)$. The closed material loop
$$X(t,s)=\left(c\sin(2\pi s)+\frac{A}{\nu k^2}(1-e^{-\nu k^2t})\sin(kb\cos(2\pi s)),\ b\cos(2\pi s),\ 0\right),\quad 0\le s\le1,$$
has circulation $\Gamma(t)=AcC_\alpha e^{-\nu k^2t}$, where $C_\alpha=\int_0^{2\pi}\cos\theta\sin(\alpha\cos\theta)\,d\theta>0$; it is nonconstant if $A\ne0$. These are distinct exact solutions in the selected Newtonian model, not experiments or general boundary-layer claims.

## Statement references

[Mandre, *Fluid Dynamics Lecture Notes*, §3.3.1, Stokes first problem](https://notes.shreyasmandre.com/fluid-dynamics-notes/Ch3.html)

[MIT 2.25 Advanced Fluid Mechanics, *Solution: Stokes First Problem*, all four pages; similarity and wall-stress scaling only](https://ocw.mit.edu/courses/2-25-advanced-fluid-mechanics-fall-2013/6c64b72340cd5b5da9a0d59516b63aec_MIT2_25F13_SolutionStokes1.pdf)

## Facts & Assumptions

**Given:** $\rho_0,\mu>0$, $\nu=\mu/\rho_0$, wall speed $U$, half-space data, positive-time restriction, torus periods, wave number and loop.

[A1] [[post-fd-continuum-balances]]: continuum balance laws are adopted physical assumptions; these are conditional model deductions.

[A2] [[post-fd-boundary-data]]: wall and initial values are separate inputs; the impulsive corner is outside the smooth claim.

[A3] [[post-fd-newtonian-fourier]]: the selected mechanical closure is Newtonian in the incompressible constant-viscosity branch; heat flux is unused.

[F1] [[def-fd-incompressible-newtonian-model]]: the local equation is $\operatorname{div}u=0$ and $\rho_0D_tu+\nabla p=\mu\Delta u$ for constant $\mu$.

[F2] [[thm-fd-x08]]: the half-space field, Gaussian tail bound, torus shear solution and specified material-loop circulation are as stated, with the corner excluded.

## Proof

1.1 Since $I_0=\sqrt\pi/2$, $E(s)=\operatorname{erfc}(s)$. For $s\ge0$, $f(s)=e^{-s^2}-E(s)$ has $f(0)=0$, $f'(s)=2e^{-s^2}(1/\sqrt\pi-s)$ and limit zero at infinity; it increases then decreases to zero and is nonnegative. Substituting $s=y/(2\sqrt{\nu t})$ proves the threshold bound. [given, F2, algebra, algebra]

1.2 For the torus field, div $u=0$, $(u\cdot\nabla)u=0$, and $\partial_tu=\nu\Delta u$, so the local Newtonian equation holds. Differentiation gives $X_t=(Ae^{-\nu k^2t}\sin(kb\cos2\pi s),0,0)=u(t,X)$, so $X$ is material. In the circulation integral, parameterize by $\theta=2\pi s$. The base-loop term is $Ac e^{-\nu k^2t}C_\alpha$. The extra term from the moving horizontal shift is proportional to $\int_0^{2\pi}\sin(\alpha\cos\theta)\sin\theta\cos(\alpha\cos\theta)\,d\theta=0$, since its integrand changes sign under $\theta\mapsto2\pi-\theta$. This proves the formula. [A1, A2, A3, F1, F2, algebra]

2.1 The first solution is asserted only for $t>0,y>0$; the second circulation is for the specified torus field and loop. They imply no general boundary-layer or Kelvin theorem. [A2, F2, step 1.1, step 1.2] ∎

