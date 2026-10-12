---
id: ex-cm17-channel-flow-and-no-slip-check
kind: example
title: "Poiseuille and Couette channel flows of the viscous branch: explicit profiles, flux and wall data"
status: draft
origin: session
domain: physics
dependency_level: 15
deps: [post-cm17-fluid-constitutive, pthm-cm17-momentum-equation, pthm-cm17-continuity-equation, thm-cm-plane-couette-and-poiseuille-flows, def-cm-fluid-constitutive-models, def-cm-euclidean-spatial-calculus, def-cm17-continuum-body-and-units, def-cm01-units]
dependency_roles:
  post-cm17-fluid-constitutive: physical-assumption
  pthm-cm17-momentum-equation: physical-result
  pthm-cm17-continuity-equation: physical-result
  thm-cm-plane-couette-and-poiseuille-flows: mathematical-premise
  def-cm-fluid-constitutive-models: mathematical-premise
  def-cm-euclidean-spatial-calculus: mathematical-premise
  def-cm17-continuum-body-and-units: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked steady plane channel problem of the adopted incompressible Newtonian branch: the Poiseuille profile with pressure gradient 6, height 2 and viscosity 3 is verified against the model's momentum equation with zero body force, its flux per unit width 4/3 and centre speed 1 are computed, the Couette profile is verified with its nonzero curl, and the no-slip wall conditions are recorded as adopted ideal boundary data. The example reports no measurement."
sources:
  references:
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Section 8.5 (Couette and Poiseuille flows with no-slip conditions)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Problems 12.9 and 12.14 (channel flows of the incompressible viscous model)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
verification:
  precheck: pass
---

## Example

Adopt the incompressible Newtonian branch of [[post-cm17-fluid-constitutive]]
with constant density $\rho>0$, dynamic viscosity $\eta=3$ and the
two-dimensional channel $O=\mathbb R\times(0,2)\times\mathbb R$ with
coordinates $(x,y,z)$, in the steady description and with no body force, so
that by [[pthm-cm17-momentum-equation]] the branch's momentum equation reads
$\rho(u\cdot\nabla)u=-\nabla p+\eta\Delta u$ together with
$\operatorname{div}u=0$ ([[def-cm-fluid-constitutive-models]]). Then:

1. **(Poiseuille.)** With pressure gradient $G=6$, i.e.
   $p(x)=p_0-6x$, the profile
   $u=(v(y),0,0)$, $v(y)=y(2-y)$ (the value $Gh^3/(12\eta)$ of the general
   formula with $h=2,\eta=3$) satisfies $\operatorname{div}u=0$ and
   $\eta v''(y)=-6=-G$, hence the steady momentum equation with no body
   force; it satisfies the no-slip data $v(0)=v(2)=0$; its flux per unit
   width is $\int_0^2v(y)\,dy=4/3$ and its centre speed is $v(1)=1$.
2. **(Couette.)** With constant pressure and $V=2$, the profile
   $v(y)=Vy/2=y$ satisfies the same equations with zero body force and the
   boundary data $v(0)=0$, $v(2)=2$; its velocity gradient
   $D u=\begin{pmatrix}0&1&0\\0&0&0\\0&0&0\end{pmatrix}$ is not symmetric, so
   the flow is not irrotational: $\operatorname{curl}u=(0,0,-V/h)=(0,0,-1)$.
3. **(Uniqueness in the ansatz.)** Within the ansatz
   $u=(v(y),0,0)$, $p=p_0-Gx$, the difference of two profiles with the same
   $G$ and the same no-slip data satisfies $w''=0$ with $w(0)=w(2)=0$, hence
   $w\equiv0$: the Poiseuille profile is the unique steady solution in this
   class with those data.
4. **(Reading.)** The wall conditions are **adopted ideal boundary data**:
   the model is used with the no-slip assumption $v=0$ at the fixed walls,
   which is the idealization recorded in [[post-cm17-fluid-constitutive]];
   the profiles are exact solutions of the model and are not approximations
   within it. Dimensions: $[G]=\mu\ell^{-2}\tau^{-2}$, so
   $[Gh^3/\eta]=\ell^2\tau^{-1}$ (flux per unit width) and
   $[Gh^2/\eta]=\ell\tau^{-1}$ (speed), consistently with
   [[def-cm17-continuum-body-and-units]], [[def-cm01-units]].

## Facts & Assumptions

**Given:** the branch data $\rho>0$, $\eta=3$; the channel height $h=2$; the gradients $G=6$ and $V=2$; the profiles.

[F1] Branch and model equation ([[post-cm17-fluid-constitutive]], [[def-cm-fluid-constitutive-models]], [[pthm-cm17-momentum-equation]], [[pthm-cm17-continuity-equation]]): for the incompressible Newtonian branch with no body force, steady fields satisfy $\operatorname{div}u=0$ and $\rho(u\cdot\nabla)u=-\nabla p+\eta\Delta u$, where the stress is $\sigma=-pI_3+\eta(Du+Du^{\mathsf T})$.

[F2] Channel-flow theorem ([[thm-cm-plane-couette-and-poiseuille-flows]]): with $h>0$, $G\in\mathbb R$, $v(y)=Gy(h-y)/(2\eta)$, $p=p_0-Gx$, the field $u=(v,0,0)$ satisfies the steady equations, has $v(0)=v(h)=0$, flux $Gh^3/(12\eta)$, and is unique in the ansatz $u=(v(y),0,0)$, $p=p_0-Gx$ with these boundary data; the Couette profile $v=Vy/h$ with constant pressure satisfies the equations with $v(0)=0,v(h)=V$ and nonsymmetric gradient for $V\ne0$.

[F3] Calculus ([[def-cm-euclidean-spatial-calculus]]): componentwise $(u\cdot\nabla)u$, $\Delta u$ and $\operatorname{curl}$ for fields of the form $u=(v(y),0,0)$, so that $(u\cdot\nabla)u=0$ and $\Delta u=(v'',0,0)$.

## Verification

**Proof technique:** direct; substitute the explicit profiles into the model's equations, integrate for the flux, and evaluate the uniqueness difference equation.

1.1 Poiseuille equations: $v(y)=6y(2-y)/6=y(2-y)$ gives $v(0)=v(2)=0$, $v'(y)=2-2y$, $v''=-2$ and, by [F3], $\Delta u=(-2,0,0)=(-\eta^{-1}G,0,0)$ with $\eta=3$, $G=6$; since $(u\cdot\nabla)u=0$ and $\nabla p=(-6,0,0)$, the steady momentum equation $\rho(u\cdot\nabla)u=-\nabla p+\eta\Delta u$ holds identically, and $\operatorname{div}u=\partial_xv=0$. [given, F1, F2, F3, algebra]

1.2 Couette: with $v(y)=y$, $v''=0$ so $\eta\Delta u=0$; with constant pressure $\nabla p=0$; and $v(0)=0,v(2)=2$; the gradient matrix has the single nonzero entry $\partial_yv=1$, which is not symmetric and gives $\operatorname{curl}u=(0,0,-\partial_yv)=(0,0,-1)$. [given, F1, F2, F3, algebra]

2.1 Flux and centre speed: $\int_0^2y(2-y)\,dy=\bigl[y^2-y^3/3\bigr]_0^2=4-\tfrac83=\tfrac43$, matching $Gh^3/(12\eta)=6\cdot8/36=\tfrac43$, and $v(1)=1$, matching $Gh^2/(8\eta)=6\cdot4/24=1$. [step 1.1, F2, algebra]

2.2 Uniqueness in the ansatz: if $v_1,v_2$ are two profiles with the same $G$ and no-slip data, then $w=v_1-v_2$ satisfies $w''=0$ on $(0,2)$ with $w(0)=w(2)=0$; hence $w'$ is constant and $0=w(2)-w(0)=2w'(0)$ gives $w'\equiv0$, so $w\equiv0$. [step 1.1, F2, algebra]

3.1 Reading: the no-slip conditions are exactly the adopted wall data of the branch's idealization, and the two profiles are exact solutions of the model on the channel; the dimensional checks $[G]=\mu\ell^{-2}\tau^{-2}$, $[Gh^3/\eta]=\ell^2\tau^{-1}$, $[Gh^2/\eta]=\ell\tau^{-1}$ hold by the rules of [[def-cm01-units]]. No measured viscosity, pressure or flux is asserted. [step 2.1, step 1.2, F1, algebra] ∎

## Remarks

- The example exhibits the branch's structure: a parabolic profile driven by a
  constant pressure gradient, a linear profile driven by a moving wall, the
  nonzero vorticity of the latter, and the uniqueness of the former inside
  the stated ansatz. Nothing is asserted about stability of these flows,
  about entrance and exit regions, or about flows at higher rates where the
  laminar ansatz or the no-slip idealization may fail.

- The channel data are chosen so that the arithmetic is exact
  ($h=2,\eta=3,G=6$); the same formulas appear in the cited treatments for
  general data, and no numerical coincidence carries physical meaning.
