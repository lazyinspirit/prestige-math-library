---
id: ex-fd-adopted-poiseuille-couette
kind: example
title: "Adopted Poiseuille and Couette channel predictions"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - pthm-fd-wall-mechanical-power-balance
  - def-countable-choice
dependency_roles:
  pthm-fd-wall-mechanical-power-balance: physical-result
  def-countable-choice: mathematical-premise
empirical_premises: []
physical_scope: >-
  Exact steady profiles in the stated periodic incompressible Newtonian channel
  model with no-slip walls; the Poiseuille pressure-drop notation is replaced by
  a constant body acceleration on the periodic cell. No measured flow or claim
  about a named material is included.
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Fluid Mechanics, Chapter 2"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf"
      locator: "§§3.2.2–3.2.3, printed pp. 65–68 (PDF pp. 10–14): exact Couette and
        planar Poiseuille profiles with no-slip walls."
    - title: "Joseph M. Powers, Lecture Notes on Intermediate Fluid Mechanics"
      url: "https://academicweb.nd.edu/~powers/ame.60635/notes.pdf"
      locator: "§5.4.1, printed pp. 173–175: Couette setup, no-slip convention, and
        shear-stress/strain-rate relation."
verification:
  precheck: pending
---

## Example

Assume Countable Choice, meaning every countable family of nonempty sets has a choice function.

Let $L_x,L_z,h>0$ be lengths in metres and let $\Omega=(\mathbb R/L_x\mathbb Z)\times(0,h)\times(\mathbb R/L_z\mathbb Z)$ have periodic streamwise coordinate $x$ and spanwise coordinate $z$, with stationary walls $y=0,h$; all three coordinates are measured in metres. Let $\rho>0$ be constant density in kilograms per cubic metre, $\eta>0$ constant dynamic viscosity in pascal-seconds, and $p_0$ a constant pressure in pascals. Use the incompressible Newtonian model $\rho(\partial_tu+(u\cdot\nabla)u)=\operatorname{div}\sigma+\rho b$, $\operatorname{div}u=0$, $\sigma=-pI+2\eta D(u)$, where $D(u)_{ij}=(\partial_j u_i+\partial_i u_j)/2$ and divergence is rowwise. For matrices $A,B\in\mathbb R^{3\times3}$ define the Frobenius contraction $A:B:=\sum_{i,j=1}^3A_{ij}B_{ij}$ and the squared norm $|D(u)|^2:=D(u):D(u)=\sum_{i,j=1}^3D(u)_{ij}^2$. In the verification, $D$ abbreviates $D(u)$. In the Poiseuille case let $G>0$ be a pressure-gradient scale in pascals per metre, set the body acceleration $b=(G/\rho,0,0)$ in metres per second squared and $p=p_0$, and define

$$u_P(x,y,z)=\left(\frac{G\,y(h-y)}{2\eta},0,0\right).$$

In the Couette case let $V\in\mathbb R$ be a tangential wall speed in metres per second, set $b=0$, $p=p_0$, and define

$$u_C(x,y,z)=\left(\frac{Vy}{h},0,0\right),$$

with no-slip wall velocity $g=0$ at $y=0$ and $g=(V,0,0)$ at $y=h$. Both fields are exact steady smooth solutions with impermeable no-slip walls. Their volumetric fluxes per unit span are $Q_P=Gh^3/(12\eta)$ and $Q_C=Vh/2$, each in square metres per second, and their vorticities $\omega:=\nabla\times u$ in inverse seconds are $\omega_P=(0,0,-G(h-2y)/(2\eta))$ and $\omega_C=(0,0,-V/h)$. In the Poiseuille case the body-force power per unit wall area equals viscous dissipation and stationary walls do no work. In the Couette case the moving top wall supplies power equal to viscous dissipation. A periodic pressure cannot contain the nonperiodic term $-Gx$; the stated constant pressure and body acceleration are the periodic-cell formulation. These are conditional predictions of the adopted equations, not observations or claims about all fluids.

## Example references

[David Tong, *Fluid Mechanics*, Chapter 2, §§3.2.2–3.2.3](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf)

[Joseph M. Powers, *Lecture Notes on Intermediate Fluid Mechanics*, §5.4.1](https://academicweb.nd.edu/~powers/ame.60635/notes.pdf)

## Facts & Assumptions

**Given:** Countable Choice, the periodic channel, constants, body accelerations, wall velocities, fields and SI units in the Example.

[A1] [[def-countable-choice]]: every countable family of nonempty sets has a choice function; the depended-on mechanical-power theorem states this hypothesis explicitly.

[F1] [[pthm-fd-wall-mechanical-power-balance]]: under its smooth constant-density incompressible equations, domain-preserving material motion, and adopted material momentum balance, the no-slip branches have the mechanical-power identities proved in steps 1.1–5.1 of that item. Its separate uniqueness clause is proved there but is not used in this example; no existence claim is imported.

## Verification

**Given:** The fields and model assumptions in the Example.

1.1 Let $\widetilde\Omega=\mathbb R\times(0,h)\times\mathbb R$ and $\Lambda=\{(mL_x,0,nL_z):m,n\in\mathbb Z\}$. For $U=U_P$ in the Poiseuille case and $U=U_C$ in the Couette case, define the lifted material map for each $t$ by $\widetilde\chi^U_t(x,y,z)=(x+tU(y),y,z)$. Both profiles are smooth, so this map is $C^\infty$; its inverse is $(x-tU(y),y,z)$. It maps $\widetilde\Omega$ onto itself, fixes the $y$ coordinate, and obeys $\widetilde\chi^U_t(a+\lambda)=\widetilde\chi^U_t(a)+\lambda$ for every $\lambda\in\Lambda$. Its Jacobian matrix is $\begin{pmatrix}1&tU'(y)&0\\0&1&0\\0&0&1\end{pmatrix}$, with determinant $1>0$. Since $y$ is unchanged, $\partial_t\widetilde\chi^U_t=(U(y),0,0)=\widetilde u(t,\widetilde\chi^U_t(x,y,z))$, so each map descends to the periodic channel and has the example's velocity as its Eulerian velocity. Thus both profiles meet the material-motion hypothesis of [F1]. [given, F1, construct, algebra]

1.2 For either profile $u=(U(y),0,0)$, $\operatorname{div}u=0$, $\partial_tu=0$ and $(u\cdot\nabla)u=U(y)\partial_xu=0$. The only nonzero entries of $D$ are $D_{xy}=D_{yx}=U'/2$, so the only nonzero viscous shear entries are $\sigma_{xy}=\sigma_{yx}=\eta U'$, and $(\operatorname{div}\sigma)_x=-\partial_xp+\eta U''$. [given, F1, algebra]

2.1 In the Poiseuille case, $U_P(0)=U_P(h)=0$ and $U_P''=-G/\eta$. Thus $(\operatorname{div}\sigma)_x+\rho b_x=\eta U_P''+G=0$, and the other momentum components vanish, proving the steady equations and no-slip compatibility. Direct integration gives $Q_P=\int_0^hU_P(y)\,dy=Gh^3/(12\eta)$ and $\omega_{P,z}=-U_P'=-G(h-2y)/(2\eta)$. [given, F1, step 1.2, algebra]

2.2 In the Couette case, $U_C(0)=0$, $U_C(h)=V$, and $U_C''=0$, so the momentum equation holds with constant pressure and no body force; the velocity traces equal the stated wall velocities. Direct integration gives $Q_C=\int_0^hU_C(y)\,dy=Vh/2$ and $\omega_{C,z}=-U_C'=-V/h$. [given, F1, step 1.2, algebra]

3.1 By the defined squared norm $|D|^2=D:D$, for either profile $|D|^2=(U')^2/2$, hence viscous dissipation per unit streamwise/spanwise wall area is $\eta\int_0^h(U')^2\,dy$. In the Poiseuille case this is $\frac{G^2}{4\eta}\int_0^h(h-2y)^2\,dy=G^2h^3/(12\eta)$, while body-force power is $\int_0^h\rho(G/\rho)U_P\,dy=GQ_P=G^2h^3/(12\eta)$; stationary-wall power is zero. This agrees with the stationary no-slip case of [F1]. [given, A1, F1, step 2.1, algebra]

4.1 In the Couette case viscous dissipation per unit wall area is $\eta\int_0^h(V/h)^2\,dy=\eta V^2/h$. At the top wall $n=(0,1,0)$ and $\sigma n$ has tangential component $\eta(V/h)(1,0,0)$, so wall power per unit area is $g\cdot\sigma n=\eta V^2/h$; the lower wall has $g=0$. This agrees with the tangential no-slip case of [F1]. Finally, a purported periodic pressure $p_0-Gx$ changes by $-GL_x$ under $x\mapsto x+L_x$, so it is not single-valued on $\Omega$ when $G>0$; the body-force formulation in the Example avoids that incompatibility. [given, A1, F1, step 2.2, algebra] ∎
