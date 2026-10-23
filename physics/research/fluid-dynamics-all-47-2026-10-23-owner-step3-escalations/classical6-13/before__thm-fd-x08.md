---
id: thm-fd-x08
kind: theorem
title: "Exact viscous diffusion layer and material-circulation decay"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
page: fd-x02
dependency_level: 1
physical_scope: null
scope: "An exact one-dimensional unsteady Stokes layer on t>0,y>0 with the initial-wall corner excluded, plus a separate smooth periodic sine-shear Navier–Stokes solution whose advected material-loop circulation decays. No general boundary-layer or viscous circulation theorem is claimed."
deps:
  - def-fd-x00
dependency_roles:
  def-fd-x00: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Shreyas Mandre, Fluid Dynamics Lecture Notes, Chapter 3: One-dimensional flows"
      url: "https://notes.shreyasmandre.com/fluid-dynamics-notes/Ch3.html"
      locator: "§3.3.1, complete Stokes first-problem similarity solution and complementary-error-function profile; the explicit tail bound and circulation calculation are verified locally."
    - title: "MIT 2.25 Advanced Fluid Mechanics, Solution to Stokes First Problem ATP"
      url: "https://ocw.mit.edu/courses/2-25-advanced-fluid-mechanics-fall-2013/6c64b72340cd5b5da9a0d59516b63aec_MIT2_25F13_SolutionStokes1.pdf"
      locator: "Complete four-page solution, setup and square-root viscous-diffusion scale; it does not supply the exact erfc profile, which is derived here."
verification:
  precheck: pass
---

## Statement

Let $\rho_0,\mu>0$, $\nu=\mu/\rho_0$, and $U\in\mathbb R$. Use the constant-density incompressible model

$$\partial_tu+(u\cdot\nabla)u+\rho_0^{-1}\nabla p-\nu\Delta u=0,\qquad \operatorname{div}u=0,$$

with Cartesian derivatives and componentwise Laplacian; its unsteady Stokes system omits the convective term. Set $I=(0,\infty)$ and $\Omega_+=\mathbb R\times(0,\infty)\times\mathbb R$, with coordinates $(x,y,z)$. Define $I_0=\int_0^\infty e^{-r^2}\,dr$ and $E(s)=I_0^{-1}\int_s^\infty e^{-r^2}\,dr$ for $s\ge0$. On $I\times\Omega_+$ define $u:I\times\Omega_+\to\mathbb R^3$ by $u(t,x,y,z)=(U E(y/(2\sqrt{\nu t})),0,0)$ and let $p$ be any constant scalar field. The field is smooth for $t>0,y>0$ and satisfies the pointwise unsteady Stokes equation $\partial_tu+\rho_0^{-1}\nabla p-\nu\Delta u=0$ and $\operatorname{div}u=0$. It also solves the full constant-density Navier–Stokes system because its convective term vanishes. For each fixed $t>0$ and $x,z\in\mathbb R$, its one-sided boundary limit is $\lim_{y\downarrow0}u(t,x,y,z)=(U,0,0)$ and its limit as $y\to\infty$ is $0$; for each fixed $x,z\in\mathbb R$ and $y>0$, its limit as $t\downarrow0$ is $0$. The corner $(t,y)=(0,0)$ is excluded from the classical claim. For every $x,z\in\mathbb R$, $t>0$, $0<\varepsilon<1$, and $y\ge2\sqrt{\nu t}\sqrt{\log(1/\varepsilon)}$, the absolute value of the first velocity component satisfies $|U E(y/(2\sqrt{\nu t}))|\le\varepsilon|U|.

Separately, let $\mathbb T_L=\mathbb R/(L\mathbb Z)$ for $L>0$, set $\mathbb T^3=\mathbb T_{L_x}\times\mathbb T_{L_y}\times\mathbb T_{L_z}$, and let $\pi:\mathbb R^3\to\mathbb T^3$ be the quotient map, where $L_x,L_y,L_z>0$. Equip this quotient with the flat smooth structure and metric induced by Euclidean translations, identifying each tangent space with $\mathbb R^3$ through the derivative of $\pi$. In this branch, the Navier–Stokes equations mean that the periodic lift satisfies the displayed constant-density system pointwise on $\mathbb R^3$. Choose an integer $m\ge1$, put $k=2\pi m/L_y$, and let $A\in\mathbb R$. The periodic lift $\widetilde u(t,x,y,z)=(A e^{-\nu k^2t}\sin(ky),0,0)$ defines a smooth vector field $u$ on $\mathbb T^3$ by $u(t,\pi(q))=d\pi_q(\widetilde u(t,q))$; with constant pressure, it is an exact Navier–Stokes solution for all $t\in\mathbb R$. Choose $c,b>0$ with $c<L_x/2$, $b<L_y/2$, and $0<\alpha:=kb<\pi$. Define the closed lifted loop and its quotient by

$$\widetilde X(t,s)=\left(c\sin(2\pi s)+\frac{A}{\nu k^2}(1-e^{-\nu k^2t})\sin(kb\cos(2\pi s)),\,b\cos(2\pi s),\,0\right),\qquad X(t,s)=\pi(\widetilde X(t,s)),\quad t\in\mathbb R,\quad 0\le s\le1.$$

The displayed lift satisfies $\widetilde X(t,0)=\widetilde X(t,1)$. The loop is material when $\partial_t\widetilde X(t,s)=\widetilde u(t,\widetilde X(t,s))$, as it does here. Define its flat-torus circulation by $\Gamma(t)=\int_0^1\widetilde u(t,\widetilde X(t,s))\cdot\partial_s\widetilde X(t,s)\,ds$; this value is unchanged if the lift is translated by a vector in $L_x\mathbb Z\times L_y\mathbb Z\times L_z\mathbb Z$. Let $C_\alpha=\int_0^{2\pi}\cos\theta\,\sin(\alpha\cos\theta)\,d\theta$. Then $C_\alpha>0$ and $\Gamma(t)=AcC_\alpha e^{-\nu k^2t}$, which is nonconstant when $A\ne0$. The corner-excluded wall-layer solution and periodic material-loop solution are distinct exact mathematical models; neither states an experiment or a general boundary-layer theorem. Under SI interpretation, $x,y,z,L_x,L_y,L_z,b,c$ are in metres, $t$ in seconds, $u,U,A$ in metres per second, $\rho_0$ in kilograms per cubic metre, $\mu$ in pascal-seconds, $\nu$ in square metres per second, and $k$ in inverse metres.

## Statement references

[Shreyas Mandre, Fluid Dynamics Lecture Notes, Chapter 3, §3.3.1](https://notes.shreyasmandre.com/fluid-dynamics-notes/Ch3.html)

[MIT 2.25 Advanced Fluid Mechanics, Solution to Stokes First Problem ATP](https://ocw.mit.edu/courses/2-25-advanced-fluid-mechanics-fall-2013/6c64b72340cd5b5da9a0d59516b63aec_MIT2_25F13_SolutionStokes1.pdf)

Constant-density equations and Euclidean circulation conventions: [[def-fd-x00]].

## Facts & Assumptions

**Given:** Use the constants, domains, velocities, initial and wall limits, loop orientation and regularity in the Statement. The equations are pointwise formal model equations; the first solution is classical only for $t>0,y>0$.

[F1] [[def-fd-x00]]: for constant density, $\nu=\mu/\rho_0$ and the incompressible Navier–Stokes equation is $u_t+(u\cdot\nabla)u+\rho_0^{-1}\nabla p-\nu\Delta u=0$ with $\operatorname{div}u=0$; Cartesian derivatives and componentwise Laplacian are used. This supplies the pointwise system for the half-space field and, through the periodic-lift convention in the Statement, for the torus field. The Euclidean material-loop definition there has domain in an open subset of $\mathbb R^3$; it is not used for the torus loop, whose material condition and circulation are defined through lifts in the Statement.

[A1] On the first domain the pressure is constant. On the torus, $A$ and $k$ are constant and the displayed field is periodic because $kL_y=2\pi m$.

## Proof

1.1 The Gaussian integral $I_0$ is positive and finite: its integrand is positive and, for $r\ge1$, $e^{-r^2}\le e^{-r}$, whose tail is integrable. Differentiation gives $E'(s)=-e^{-s^2}/I_0$ and $E''(s)=-2sE'(s)$. For $s=y/(2\sqrt{\nu t})$, $s_t=-s/(2t)$ and $s_y=1/(2\sqrt{\nu t})$, so $u_t=-UsE'(s)/(2t)$ and $\nu u_{yy}=-UsE'(s)/(2t)$. Thus $u_t=\nu u_{yy}$; the field has zero divergence and zero convection because it has only an $x$ component and is independent of $x$. The pressure gradient is zero, so [F1] gives the exact equation. Also $E(0)=1$, $E(s)\to0$ as $s\to\infty$, and for fixed $y>0$, $s\to\infty$ as $t\downarrow0$. [given, F1, A1, algebra]

1.2 For the periodic shear, $u_t=-\nu k^2u$, $\Delta u=-k^2u$, $\operatorname{div}u=0$, and $(u\cdot\nabla)u=u_x\partial_xu=0$. A constant pressure therefore makes every term in [F1] sum to zero. Let $y_0(s)=b\cos(2\pi s)$ and $x_0(s)=c\sin(2\pi s)$; the displacement $d(y,t)=A(1-e^{-\nu k^2t})\sin(ky)/(\nu k^2)$ satisfies $d_t(y,t)=Ae^{-\nu k^2t}\sin(ky)$. Hence $X(t,s)=(x_0(s)+d(y_0(s),t),y_0(s),0)$ is closed and $X_t=u(t,X)$, so it is a smooth material loop. Its circulation is $\int_0^1Ae^{-\nu k^2t}\sin(ky_0(s))(x_0'(s)+d_y(y_0(s),t)y_0'(s))\,ds$. The second term is the integral of $\partial_sH(y_0(s),t)$ for a primitive $H_y(y,t)=Ae^{-\nu k^2t}\sin(ky)d_y(y,t)$; it vanishes because $y_0(0)=y_0(1)$ and $H$ is single-valued. Changing variables $\theta=2\pi s$ in the remaining term gives $\Gamma(t)=Ac e^{-\nu k^2t}\int_0^{2\pi}\cos\theta\sin(kb\cos\theta)\,d\theta=AcC_\alpha e^{-\nu k^2t}$. [given, F1, A1, algebra]

2.1 Substituting $r=s+z$ in the tail integral gives $E(s)=I_0^{-1}\int_0^\infty e^{-(s+z)^2}dz\le e^{-s^2}I_0^{-1}\int_0^\infty e^{-z^2}dz=e^{-s^2}$, since $(s+z)^2\ge s^2+z^2$. If $y\ge2\sqrt{\nu t}\sqrt{\log(1/\varepsilon)}$, then $s^2\ge\log(1/\varepsilon)$ and hence $|u|=|U|E(s)\le\varepsilon|U|$. [given, step 1.1, algebra]

3.1 Since $0<\alpha<\pi$, $\sin(\alpha\cos\theta)$ has the same sign as $\cos\theta$ whenever $\cos\theta\ne0$. Thus $\cos\theta\sin(\alpha\cos\theta)>0$ except at its zeros, so its integral $C_\alpha$ is strictly positive. With $A\ne0$, $c>0$, $\nu>0$, and $k\ne0$, step 1.2 has a nonzero coefficient multiplying the nonconstant exponential $e^{-\nu k^2t}$. This exact viscous solution therefore has a smooth material loop with nonconserved circulation; it does not assert Kelvin conservation for a viscous model. [given, step 1.2, algebra] ∎

## Remarks

The sketch shows the initial material loop in the $(x,y)$ cross-section, with $x_0=c\sin\theta$ and $y_0=b\cos\theta$. It is only a schematic of the exact parametrization in the Statement; the proof uses the parametrized curve, not the drawing.

~~~tikz
\begin{tikzpicture}[scale=1.1]
  \draw[->] (-1.4,0) -- (1.5,0) node[right] {$x$};
  \draw[->] (0,-1.1) -- (0,1.2) node[above] {$y$};
  \draw[thick,domain=0:360,samples=80,variable=\t] plot ({0.9*sin(\t)},{0.65*cos(\t)});
  \node at (1.08,0.86) {$y_0=b\cos\theta$};
\end{tikzpicture}
~~~
