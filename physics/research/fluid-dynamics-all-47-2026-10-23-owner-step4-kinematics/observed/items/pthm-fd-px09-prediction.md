---
id: pthm-fd-px09-prediction
kind: physics-theorem
title: Barotropic Kelvin and Bernoulli with exact hypotheses — conditional
  physical prediction
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - thm-fd-x09
  - post-fd-continuum-balances
  - post-fd-boundary-data
  - def-fd-barotropic-euler-model
  - def-fd-x00
dependency_roles:
  thm-fd-x09: mathematical-premise
  post-fd-continuum-balances: physical-assumption
  post-fd-boundary-data: physical-assumption
  def-fd-barotropic-euler-model: formulation-prerequisite
  def-fd-x00: formulation-prerequisite
physical_scope: C² smooth barotropic Euler, positive density and conservative
  body force; C¹ advected loop with continuous mixed derivatives; steady
  Bernoulli; connected component global constant only if irrotational. Worked
  example is the actual explicit field/parameter selection in that section. B
  leaf cannot supply any later item.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Mandre, Fluid Dynamics Lecture Notes
      url: https://notes.shreyasmandre.com/fluid-dynamics-notes/Ch5.html
      locator: Chapter 5, §§5.2.1–5.2.2, incompressible Bernoulli context only; the
        chapter does not treat the barotropic/compressible result proved here.
    - title: Stewart, MIT 8.09, Fluid Mechanics
      url: https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf
      locator: §6.4, printed pp. 120–123; ideal Bernoulli context only.
verification:
  precheck: pending
---

## Statement

Let $I\subseteq\mathbb R$ be a nonempty open time interval measured in seconds, $\Omega\subseteq\mathbb R^3$ nonempty and open in metres, and $P:(0,\infty)\to\mathbb R$ be $C^2$. Use SI units: $u$ in $\mathrm{m\,s^{-1}}$, $\rho$ in $\mathrm{kg\,m^{-3}}$, $P$ in pascals, and $V,h,B$ in $\mathrm{m^2\,s^{-2}}$. Let $\rho:I\times\Omega\to(0,\infty)$ have continuous first time and spatial derivatives, $u:I\times\Omega\to\mathbb R^3$ have continuous first time, first spatial and second spatial derivatives, and $V:\Omega\to\mathbb R$ be a time-independent $C^2$ potential per unit mass. Adopt the barotropic Euler equations with conservative body acceleration $-\nabla V$:
$$\partial_t\rho+\operatorname{div}(\rho u)=0,\qquad \partial_tu+(u\cdot\nabla)u=-\rho^{-1}\nabla(P(\rho))-\nabla V.$$
For a fixed $\rho_{\rm ref}>0$, define $h(q)=\int_{\rho_{\rm ref}}^qP'(r)/r\,dr$. A steady streamline is a $C^1$ curve $x:J\to\Omega$ satisfying $x'(s)=u(x(s))$. If $u,\rho$ are steady, then
$$B=\frac{|u|^2}{2}+h(\rho)+V$$
is constant along each streamline. If additionally $\operatorname{curl}u=0$ on a connected component, then $B$ is constant throughout that component; here $\operatorname{curl}$ is the Cartesian curl. For every closed $C^1$ material loop $X:J\times[0,1]\to\Omega$ with $X(t,0)=X(t,1)$, $X_t=u(t,X)$, and continuous $X_s,X_{ts}$, the circulation
$$\Gamma(t)=\int_0^1u(t,X(t,s))\cdot X_s(t,s)\,ds$$
is constant. The conservative body acceleration and local barotropic branch are model inputs; no statement concerns shocks, nonbarotropic pressure, nonconservative forcing, or viscous circulation.

In particular, take $P(\rho)=c^2\rho$ with $c>0$ in $\mathrm{m\,s^{-1}}$, $V=0$, angular speed $\Omega_0\ne0$ in $\mathrm{s^{-1}}$, density $\rho_c,\rho_{\rm ref}>0$ in $\mathrm{kg\,m^{-3}}$, angular and reference lengths $R,H$ in metres, and the open cylinder $D=\{(x,y,z):x^2+y^2<R^2,\ |z|<H\}$ for $R,H>0$ measured in metres. Set $r=(x^2+y^2)^{1/2}$, $e_\theta=(-y/r,x/r,0)$ for $r>0$, $u=\Omega_0(-y,x,0)$, and $\rho=\rho_c\exp(\Omega_0^2r^2/(2c^2))$ for $\rho_c>0$. These smooth fields satisfy both equations. For any $\ell\in(0,R)$ and $z_0\in(-H,H)$, the closed material loop $X:\mathbb R\times[0,2\pi]\to D$ is
$$X(t,\theta)=(\ell\cos(\theta+\Omega_0t),\ell\sin(\theta+\Omega_0t),z_0),\qquad t\in\mathbb R,\quad 0\le\theta\le2\pi.$$

It satisfies $X(t,0)=X(t,2\pi)$ and $\partial_tX(t,\theta)=u(t,X(t,\theta))$. Its circulation is
$$\Gamma(t)=\int_0^{2\pi}u(t,X(t,\theta))\cdot\partial_\theta X(t,\theta)\,d\theta=2\pi\Omega_0\ell^2.$$

Its Bernoulli function is
$$B=c^2\log(\rho_c/\rho_{\rm ref})+\Omega_0^2r^2.$$
It is constant along each circular streamline but varies between radii, since $\operatorname{curl}u=(0,0,2\Omega_0)\ne0$. This is a conditional prediction of the stated smooth barotropic model, not an empirical claim about viscous flow.

## Statement references


[Mandre, *Fluid Dynamics Lecture Notes*, Chapter 5, §§5.2.1–5.2.2, incompressible Bernoulli context only; the chapter does not treat the barotropic/compressible result proved here](https://notes.shreyasmandre.com/fluid-dynamics-notes/Ch5.html)

[Stewart, MIT 8.09, *Fluid Mechanics*, §6.4, ideal Bernoulli context, printed pp. 120–123](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf)

## Facts & Assumptions

**Given:** The smooth positive-density barotropic model, $P\in C^2$, time-independent potential $V$, material-loop regularity, and the explicit solid-rotation specialization stated above.

[A1] [[post-fd-continuum-balances]]: the continuum model includes a specified body-acceleration input. In the general theorem statement the conservative acceleration $-\nabla V$ is an explicit model hypothesis; it is set to zero in the solid-rotation example.

[A2] [[post-fd-boundary-data]]: boundary data are separate; no wall data are required for this local steady solution.

[F1] [[def-fd-barotropic-euler-model]]: this earlier Definition is the unforced positive-density barotropic branch with a specified $C^1$ pressure law; its equations match the $V=0$ specialization. The general time-independent potential force $-\nabla V$ used here is separately and explicitly assumed in the Statement, not inferred from that unforced Definition. The theorem uses the stronger regularity $P\in C^2$.

[F2] [[thm-fd-x09]]: for the stated smooth barotropic Euler system with conservative potential, steady Bernoulli is constant along streamlines and globally on connected curl-free components, and circulation is conserved for closed material loops with the stated regularity.

[F3] [[def-fd-x00]]: for $u=(u_x,u_y,u_z)$ in Cartesian coordinates, $\operatorname{curl}u=(\partial_yu_z-\partial_zu_y,\partial_zu_x-\partial_xu_z,\partial_xu_y-\partial_yu_x)$.

## Proof

1.1 The hypotheses of [F2] hold: $\rho>0$, the stated derivatives exist, $P\in C^2$, and $V$ is time-independent and $C^2$. The body force is the conservative input $-\nabla V$, so [F2] supplies the streamline Bernoulli, curl-free global-constant and material-loop circulation conclusions conditionally on this adopted model. [given, A1, F1, F2]

1.2 In the example, $\operatorname{div}u=0$ and $u\cdot\nabla(r^2)=\Omega_0(-y,x,0)\cdot(2x,2y,0)=0$ throughout the cylinder, including its axis. Since $\rho=\rho_c\exp(\Omega_0^2r^2/(2c^2))$, the Cartesian chain rule gives $u\cdot\nabla\rho=0$; together with $\partial_t\rho=0$, this yields $\partial_t\rho+\operatorname{div}(\rho u)=0$. Also $(u\cdot\nabla)u=-\Omega_0^2(x,y,0)$ and $\nabla P(\rho)=c^2\nabla\rho=\rho\Omega_0^2(x,y,0)$, proving momentum balance for $V=0$. The Cartesian curl convention in [F3] gives $\operatorname{curl}u=(0,0,2\Omega_0)$ for this rotation field. [given, F1, F3, algebra]

2.1 On the radius-$\ell$ material circle, $u=\Omega_0\ell e_\theta$ and $dX=\ell e_\theta d\theta$, hence $\Gamma=2\pi\Omega_0\ell^2$. Since $h(\rho)=c^2\log(\rho/\rho_{\rm ref})$, substitution gives $B=c^2\log(\rho_c/\rho_{\rm ref})+\Omega_0^2r^2$. The radius is fixed on each circle, but the value varies across radii because $\Omega_0\ne0$. [given, F2, step 1.2, algebra, algebra]

3.1 These are deductions from the stated barotropic Euler model and do not establish its empirical validity or apply to viscous circulation. No wall data are used, under [A2]. [A1, A2, F1, F2, step 1.1, step 2.1] ∎

