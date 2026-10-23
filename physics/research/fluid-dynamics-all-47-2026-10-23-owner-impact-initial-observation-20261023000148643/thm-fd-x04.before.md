---
id: thm-fd-x04
kind: theorem
title: "Plane and pipe Couette–Poiseuille verification"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
page: fd-x02
dependency_level: 1
physical_scope: null
scope: "Exact stationary infinite or fully developed plane-channel and circular-pipe solutions within the stated one-dimensional ansatz; the pipe profile is C² on the full cross-sectional disk. No finite entrance or exit claim and no uniqueness beyond the ansatz."
deps: [def-fd-x00]
dependency_roles:
  def-fd-x00: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Iain W. Stewart, MIT 8.09/8.309, Chapter 6: Fluid Mechanics"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
      locator: "§6.7, printed pp. 130–133, infinite parallel plates and an infinitely long circular pipe."
    - title: "David Tong, Fluid Mechanics lecture notes, Chapter 2: The Navier–Stokes Equation"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf"
      locator: "§§3.2.2–3.2.3, printed pp. 65–68/PDF pp. 10–14, Couette flow and plane/circular Poiseuille flow."
    - title: "Shreyas Mandre, Fluid Dynamics Lecture Notes, Chapter 3: One-dimensional flows"
      url: "https://notes.shreyasmandre.com/fluid-dynamics-notes/Ch3.html"
      locator: "§§3.2.1–3.2.2, plane Poiseuille and Hagen–Poiseuille profiles; the local proof uses the assigned full-axis C² condition."
verification:
  precheck: pass
---

## Statement

Let $h,a,\rho_0,\mu>0$, let $p_0,G,V_0,V_1\in\mathbb R$, and set $\nu=\mu/\rho_0$. In the constant-density model

$$\partial_tu+(u\cdot\nabla)u+\rho_0^{-1}\nabla p-\nu\Delta u=0,\qquad \operatorname{div}u=0,$$

take the infinite plane channel $\Omega_{\rm ch}=\{(x,y,z):x\in\mathbb R,\ 0<y<h,\ z\in\mathbb R\}$, with $u=(v(y),0,0)$, $p=p_0-Gx$, $v\in C^2([0,h])$, and wall values $v(0)=V_0$, $v(h)=V_1$. Then the unique profile within this ansatz is

$$v(y)=V_0+(V_1-V_0)\frac yh+\frac{G}{2\mu}y(h-y).$$

Its volume flux per unit width in the $z$ direction and its fixed-coordinate shear component are

$$Q_{\rm ch}=\int_0^h v(y)\,dy=\frac h2(V_0+V_1)+\frac{Gh^3}{12\mu},\qquad \sigma_{xy}(0)=\mu\frac{V_1-V_0}{h}+\frac{Gh}{2},\qquad \sigma_{xy}(h)=\mu\frac{V_1-V_0}{h}-\frac{Gh}{2}.$$

For the infinite circular pipe $\Omega_a=\{(x,y,z):x\in\mathbb R,\ y^2+z^2<a^2\}$, take $x$ as the axial coordinate, $r=(y^2+z^2)^{1/2}$, $u=(w(r),0,0)$, $p=p_0-Gx$, and require the radial field $(y,z)\mapsto w((y^2+z^2)^{1/2})$ to be $C^2$ on the closed cross-sectional disk with no slip $w(a)=0$. Then the unique profile within this ansatz is

$$w(r)=\frac{G}{4\mu}(a^2-r^2),\qquad Q_{\rm pipe}=\int_0^a2\pi r\,w(r)\,dr=\frac{\pi G a^4}{8\mu}.$$

Both fields satisfy the exact stationary Navier–Stokes equations for every choice of the positive constants and also satisfy the corresponding steady Stokes equations, because their time derivative and convective acceleration vanish. The pipe uniqueness claim uses regularity on the full disk, including the axis. Both uniqueness claims are restricted to the stated one-dimensional ansatz; neither asserts uniqueness among all flows. The domains are infinite or fully developed and give no finite entrance or exit error estimate. Under SI interpretation, $h,a,x,y,z,r$ are in metres, $u,V_0,V_1,v,w$ in metres per second, $\rho_0$ in kilograms per cubic metre, $\mu$ in pascal-seconds, $\nu$ in square metres per second, $p,p_0$ in pascals, and $G$ in pascals per metre. The channel flux per unit width is in square metres per second and the pipe volume flux is in cubic metres per second.

## Statement references

[Iain W. Stewart, MIT 8.09/8.309, Chapter 6, §6.7](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf)

[David Tong, Fluid Mechanics lecture notes, Chapter 2, §§3.2.2–3.2.3](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf)

[Shreyas Mandre, Fluid Dynamics Lecture Notes, Chapter 3, §§3.2.1–3.2.2](https://notes.shreyasmandre.com/fluid-dynamics-notes/Ch3.html)

## Facts & Assumptions

**Given:** Use the stated positive constants, domains, profile regularity and wall data. Every equation is a pointwise mathematical model equation; no measured fluid behavior is asserted.

[F1] [[def-fd-x00]]: the current formal definition sets $\nu=\mu/\rho_0$, defines the pointwise constant-density incompressible Navier–Stokes equation and its steady Stokes specialization, defines divergence and curl from Cartesian partial derivatives, fixes the componentwise Laplacian and row-component Jacobian conventions, and defines stress by $\sigma=-pI_3+\mu(D_xu+(D_xu)^{\mathsf T})$.

[A1] In the channel and pipe separately, the velocity has the one-dimensional ansatz and the pressure has the prescribed affine form in the axial coordinate. The pipe velocity is $C^2$ as a radial field on the full disk, not just away from its axis.

## Proof

1.1 For the plane channel, $\operatorname{div}u=0$, $\partial_tu=0$, $(u\cdot\nabla)u=v(y)\partial_xu=0$, $\Delta u=(v''(y),0,0)$, and $\nabla p=(-G,0,0)$. The $x$ component of the stated Navier–Stokes equation is therefore $-G/\rho_0-\nu v''=0$, equivalently $\mu v''=-G$. [given, F1, A1, algebra]

1.2 In the pipe, the velocity is divergence-free and $(u\cdot\nabla)u=w(r)\partial_xu=0$. For $r>0$, Cartesian differentiation gives $\partial_yw=w'y/r$, $\partial_zw=w'z/r$, $\partial_y^2w=w''y^2/r^2+w'(1/r-y^2/r^3)$, and $\partial_z^2w=w''z^2/r^2+w'(1/r-z^2/r^3)$; adding yields $\Delta w=w''+w'/r$. Thus the axial equation is $\mu(w''+w'/r)=-G$, or $(rw')'=-Gr/\mu$. Integrating on $(0,a]$ gives $w(r)=-Gr^2/(4\mu)+C\log r+D$. Since $\log r$ is unbounded as $r\downarrow0$ while the radial field is continuous on the full disk, $C=0$; $w(a)=0$ then gives $D=Ga^2/(4\mu)$. For this profile, the Cartesian momentum residual $R=\partial_tu+(u\cdot\nabla)u+\rho_0^{-1}\nabla p-\nu\Delta u$ is continuous on the closed disk because $u=(w,0,0)$ is polynomial in $y,z$ and $p$ is affine; it vanishes for $r>0$ by the radial calculation and therefore also at $r=0$ by continuity. Also $\operatorname{div}u=0$ throughout the disk because $u$ is independent of the axial coordinate. The resulting polynomial is $C^\infty$ on the disk, proving existence and uniqueness in the stated radial ansatz. [given, F1, A1, algebra]

2.1 Integrating twice gives $v(y)=c_0+c_1y-Gy^2/(2\mu)$. The endpoint conditions give $c_0=V_0$ and $c_1=(V_1-V_0)/h+Gh/(2\mu)$, which yields the displayed profile. Any two profiles satisfying the same ODE and endpoints differ by an affine function vanishing at both $0$ and $h$; since $h>0$, that difference is zero. [given, F1, A1, step 1.1, algebra]

3.1 Integrating the profile term by term gives $Q_{\rm ch}$. The row-component Jacobian gives $\sigma_{xy}=\mu\partial_yu_x=\mu v'(y)$; substituting $y=0,h$ gives the two displayed shear components. The derivative convention gives $\operatorname{curl}u=(0,0,-v'(y))$. These are exact component values; the traction vector additionally depends on the chosen wall normal. [F1, step 2.1, algebra]

4.1 Polar integration yields $Q_{\rm pipe}=2\pi\int_0^a r\,G(a^2-r^2)/(4\mu)\,dr=\pi Ga^4/(8\mu)$. In both geometries the computed time derivative and convective term vanish, so removing them gives exactly the steady Stokes equations as well. [step 1.2, step 1.1, algebra] ∎

## Remarks

The diagram is a coordinate schematic, not to scale. Panel (a) shows the channel in the $(x,y)$ section with $z$ suppressed and walls at $y=0,h$. Panel (b) shows the pipe disk in the $(y,z)$ plane; the axial $x$ direction is normal to the page and the disk radius is $a$. It records the stated domains only and carries no velocity-sign or entrance-flow claim.

```tikz
\begin{tikzpicture}[scale=0.9]
  \draw[thick] (-1.5,0) -- (0.7,0) node[right] {$y=0$};
  \draw[thick] (-1.5,1.3) -- (0.7,1.3) node[right] {$y=h$};
  \draw[->] (1.0,0.15) -- (1.8,0.15) node[right] {$x$};
  \draw[->] (1.0,0.15) -- (1.0,1.05) node[above] {$y$};
  \node at (-0.4,0.65) {(a)};
  \draw (4.2,0.65) circle (0.75);
  \fill (4.2,0.65) circle (0.035);
  \draw[->] (4.2,0.65) -- (4.85,1.05) node[right] {$a$};
  \draw[->] (4.2,0.65) -- (5.25,0.65) node[right] {$y$};
  \draw[->] (4.2,0.65) -- (4.2,1.55) node[above] {$z$};
  \node at (4.2,0.65) [below left] {$\odot x$};
  \node at (4.2,-0.4) {(b)};
\end{tikzpicture}
```
