---
id: pthm-fd-local-momentum-balance-from-continuum
kind: physics-theorem
title: "Local momentum equation from the adopted continuum balance"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - post-fd-continuum-balances
  - def-fd-quantity-and-frame-conventions
  - def-fd-incompressible-newtonian-model
  - post-fd-newtonian-fourier
  - thm-divergence-theorem-for-bounded-c-one-euclidean-domains
  - def-countable-choice
dependency_roles:
  post-fd-continuum-balances: physical-assumption
  def-fd-quantity-and-frame-conventions: mathematical-premise
  def-fd-incompressible-newtonian-model: formulation-prerequisite
  post-fd-newtonian-fourier: physical-assumption
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
  def-countable-choice: mathematical-premise
empirical_premises: []
physical_scope: >-
  Smooth positive-density constant-density incompressible Newtonian material
  regions under the adopted integral momentum balance. It derives the local
  forced momentum equation by transport and localization; it asserts no
  solution existence or empirical validity.
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Fluid Mechanics, Chapter 2"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf"
      locator: "§§3.1.1–3.1.2, PDF pp. 4–8 (printed pp. 57–61): local momentum, Cauchy stress and stress divergence."
    - title: "Joseph M. Powers, Lecture Notes on Intermediate Fluid Mechanics"
      url: "https://academicweb.nd.edu/~powers/ame.60635/notes.pdf"
      locator: "§4.4.5.2, printed pp. 145–146: momentum-derived mechanical energy equation and continuum stress work."
verification:
  precheck: pending
---

## Statement

Assume Countable Choice. Let $I\subseteq\mathbb R$ be an open time interval in seconds and let $B\subseteq\mathbb R^3$ be an open reference region. Let $\chi\in C^2(I\times B;\mathbb R^3)$ be a material motion whose maps $\chi_t$ are orientation-preserving $C^2$ diffeomorphisms onto their open images, and define the Eulerian velocity by $u(t,\chi(t,a))=\partial_t\chi(t,a)$. Set $\Omega_t:=\chi_t(B)$ and $\mathcal O:=\{(t,x):t\in I,\ x\in\Omega_t\}$. Assume that $\partial_tu$ and all spatial derivatives of $u$ through order two are continuous on $\mathcal O$, that $p$ and its spatial first derivatives are continuous on $\mathcal O$, and that $b\in C^0(\mathcal O;\mathbb R^3)$; here $u$ is in metres per second, $p$ in pascals, and body acceleration $b$ in metres per second squared. In the selected constant-density incompressible Newtonian branch, let the current density be the constant $\rho>0$ kilograms per cubic metre, let $\operatorname{div}u=0$, let the dynamic viscosity be the constant $\eta>0$ pascal-seconds, and put

$$D(u):=\frac{\nabla u+(\nabla u)^{\mathsf T}}2,\qquad \sigma:=-pI_3+2\eta D(u),\qquad (\operatorname{div}\sigma)_i:=\sum_{j=1}^3\partial_{x_j}\sigma_{ij}.$$

Assume the adopted material linear-momentum balance holds for every nonempty bounded open $V\Subset B$ with $C^1$ boundary:

$$\frac{d}{dt}\int_{\chi_t(V)}\rho u\,dx=\int_{\chi_t(V)}\rho b\,dx+\int_{\partial\chi_t(V)}\sigma n\,dS,$$

where $n$ is the outward normal and $dx,dS$ are Euclidean volume and area measures. Then throughout each $\Omega_t$ the corresponding local equation is

$$\rho\bigl(\partial_tu+(u\cdot\nabla)u\bigr)=\operatorname{div}\sigma+\rho b.$$

This is a conditional local form of the adopted balance for the stated smooth material motion and model branch; it makes no existence or empirical-applicability claim.

## Statement references

[David Tong, *Fluid Mechanics*, Chapter 2, §§3.1.1–3.1.2](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf)

[Joseph M. Powers, *Lecture Notes on Intermediate Fluid Mechanics*, §4.4.5.2](https://academicweb.nd.edu/~powers/ame.60635/notes.pdf)

## Facts & Assumptions

**Given:** Countable Choice, the $C^2$ material motion and its Eulerian velocity, the constant-density incompressible Newtonian branch, and the adopted material momentum balance stated above.

[A1] [[post-fd-continuum-balances]]: for every admissible material subregion, the adopted linear-momentum balance differentiates the material momentum integral and equates it to body-force resultant plus Cauchy-traction resultant. This is an adopted physical premise.

[F1] [[def-fd-quantity-and-frame-conventions]]: a material motion is a $C^2$ family of orientation-preserving diffeomorphisms with positive Jacobian, and its Eulerian velocity satisfies $u(t,\chi(t,a))=\partial_t\chi(t,a)$.

[F2] [[def-fd-incompressible-newtonian-model]]: the current definition specifies constant positive density, $\operatorname{div}u=0$, pressure-multiplier stress $-pI_3+2\mu D$, and rowwise stress divergence. Its displayed momentum equation is unforced and is not used in this result; the force enters through [A1].

[F3] [[post-fd-newtonian-fourier]]: the adopted closure has $\sigma=-pI_3+\tau$ and $\tau=2\mu D_0+\zeta\theta I_3$; for the selected constant-viscosity incompressible branch, $\theta=0$ and $D_0=D$, giving the stress in the Statement.

[F4] [[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]: under Countable Choice, for a bounded $C^1$ domain and a $C^1$ vector field up to its boundary, the volume divergence integral equals its outward boundary flux.

[A2] [[def-countable-choice]]: every at most countable family of nonempty sets has a choice function; this is the precise choice hypothesis of [F4].

## Proof

**Given:** The assumptions in the Statement, including the material motion, constant density, incompressibility, regularity, integral balance and Countable Choice.

1.1 Fix an admissible reference region $V$ and write $J(t,a)=\det D_a\chi(t,a)$. Change of variables gives $\int_{\chi_t(V)}\rho u\,dx=\int_V\rho u(t,\chi(t,a))J(t,a)\,da$. From $\partial_t\chi=u\circ\chi$ and Jacobi's determinant formula, $\partial_tJ=J(\operatorname{div}u)(t,\chi)=0$. Differentiating the changed integral by the chain rule therefore yields $\frac{d}{dt}\int_{\chi_t(V)}\rho u\,dx=\int_{\chi_t(V)}\rho(\partial_tu+(u\cdot\nabla)u)\,dx$. [given, F1, F2, algebra]

2.1 The image $\chi_t(V)$ is a bounded $C^1$ domain and the adopted Newtonian stress [F3] is $C^1$ up to its boundary by the stated field regularity. Apply [F4] to each row of $\sigma$ to replace its traction resultant by $\int_{\chi_t(V)}\operatorname{div}\sigma\,dx$. Substitution of step 1.1 into [A1] gives $\int_{\chi_t(V)}R(t,x)\,dx=0$ for every such $V$, where $R:=\rho(\partial_tu+(u\cdot\nabla)u)-\rho b-\operatorname{div}\sigma$ is continuous. The hypotheses of [F4] hold by the stated regularity, the $C^2$ motion and [A2]. [given, A1, F3, F4, A2, step 1.1]

3.1 Fix $t$ and $x_0\in\Omega_t$. For all sufficiently small $r>0$, the closed ball $\overline{B_r(x_0)}$ lies in $\Omega_t$; because $\chi_t$ is a $C^2$ diffeomorphism, $V:=\chi_t^{-1}(B_r(x_0))$ is a bounded open reference region with $C^1$ boundary. Step 2.1 gives $\int_{B_r(x_0)}R(t,x)\,dx=0$. If any component $R_i(t,x_0)$ were positive, continuity would make it positive on some sufficiently small ball and force its integral to be positive; if negative, the integral would be negative. Both contradict the zero integral, so $R_i(t,x_0)=0$ for each component. Thus $R=0$ throughout $\Omega_t$, which is the claimed local momentum equation. [given, step 2.1, algebra] ∎

## Proof references

[David Tong, *Fluid Mechanics*, Chapter 2, §3.1.2](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf)

[Joseph M. Powers, *Lecture Notes on Intermediate Fluid Mechanics*, §4.4.5.2](https://academicweb.nd.edu/~powers/ame.60635/notes.pdf)
