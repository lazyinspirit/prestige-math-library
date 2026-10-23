---
id: thm-fd-x10
kind: theorem
title: Conditional nonlinear Couette energy stability
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-fd-x00
  - thm-fd-x07
  - thm-divergence-theorem-for-bounded-c-one-euclidean-domains
  - def-countable-choice
dependency_roles:
  def-fd-x00: mathematical-premise
  thm-fd-x07: mathematical-premise
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
  def-countable-choice: mathematical-premise
scope: "Existing smooth incompressible Navier-Stokes perturbation periodic in x,z and zero trace at y=0,h; energy decays if |S|h^2/nu<2 on its assumed smooth existence interval. This is a sufficient, nonsharp bound, not global three-dimensional regularity or a transition threshold; the planned dependency closure carries AC_omega."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "David Tong, Fluid Mechanics lecture notes, Chapter 2: The Navier-Stokes Equation"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf"
      locator: "§3.2.2 Couette Flow, printed pp. 64-65/PDF pp. 10-11; defines the plane Couette profile and wall speeds."
    - title: "Jean-Luc Guermond, M602 Fall 2024, Volume 1, Part I, Chapter 3: Energy method and applications"
      url: "https://people.it.tamu.edu/~guermond/M602_FALL_2024/vol1.pdf"
      locator: "§3.3 energy method and §3.4.4 Poincare-Steklov inequality; generic energy/Poincare context."
    - title: "Paolo Falsaperla, Giuseppe Mulone, and Carla Perrone, Energy stability of plane Couette and Poiseuille flows and Couette paradox"
      url: "https://arxiv.org/pdf/2105.06443"
      locator: "arXiv:2105.06443v1, §§2.1 and 3.1, PDF pp. 4 and 8-10. Its detailed nonlinear energy result is for the streamwise perturbation class, not the full class proved here."
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $L_x,L_z,h,\nu,\rho_0>0$, $S\in\mathbb R$, and $T>0$. For $L>0$, define $\mathbb T_L=\mathbb R/(L\mathbb Z)$ and set $Q=\mathbb T_{L_x}\times(0,h)\times\mathbb T_{L_z}$, with Lebesgue integration over one fundamental cell. Define $\mu:=\rho_0\nu>0$, so $\nu=\mu/\rho_0$ as in the formal convention of definition def-fd-x00. Let $U_b(x,y,z)=(Sy,0,0)$. Let $u\in C^1([0,T];C^2(\overline Q;\mathbb R^3))$ and $p\in C([0,T];C^1(\overline Q))$, periodic in $x,z$. Regard these fields as periodic lifts $\widetilde u:[0,T]\times\mathbb R\times[0,h]\times\mathbb R\to\mathbb R^3$ and $\widetilde p:[0,T]\times\mathbb R\times[0,h]\times\mathbb R\to\mathbb R$, with periods $L_x,L_z$ in $x,z$; all spatial derivatives and equations are interpreted on these lifts. For $a=(a_1,a_2,a_3)\in\mathbb R^3$, use the Euclidean norm $|a|=(a_1^2+a_2^2+a_3^2)^{1/2}$ as in the norm convention in theorem thm-fd-x07. With ordinary Cartesian derivatives, $\nabla p=(\partial_xp,\partial_yp,\partial_zp)$, $\nabla\cdot u=\partial_xu_1+\partial_yu_2+\partial_zu_3$, $(u\cdot\nabla)u=\sum_{j=1}^3u_j\partial_{x_j}u$, and $(\Delta u)_i=\partial_{xx}u_i+\partial_{yy}u_i+\partial_{zz}u_i$ for $i=1,2,3$. Suppose $u$ is an already-existing solution of the constant-density incompressible Navier-Stokes equation $u_t+(u\cdot\nabla)u+\rho_0^{-1}\nabla p-\nu\Delta u=0$, $\nabla\cdot u=0$, with wall values $u|_{y=0}=0$ and $u|_{y=h}=Sh(1,0,0)$. Define $w=u-U_b$ and $E(t)=\int_Q|w(t,x,y,z)|^2\,dx\,dy\,dz$. If $|S|h^2/\nu<2$, then for every $t\in[0,T]$,

$$E(t)\le \exp\!\left[-\left(\frac{2\nu}{h^2}-|S|\right)t\right]E(0).$$

The condition is sufficient and is not asserted to be sharp. The estimate holds only on the interval where the assumed smooth solution exists; it proves neither existence on all time nor global three-dimensional regularity or a physical transition threshold.

## Statement references

[Tong, Chapter 2, §3.2.2 Couette flow](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf)

[Guermond, Part I, Chapter 3, energy method and Poincare-Steklov context](https://people.it.tamu.edu/~guermond/M602_FALL_2024/vol1.pdf)

[Falsaperla, Mulone, and Perrone, §§2.1 and 3.1; nonlinear energy treatment for streamwise perturbations](https://arxiv.org/pdf/2105.06443)

## Facts & Assumptions

**Given:** The parameters, periodic channel, existing smooth solution, equations and wall data in [A1]. The exact formal model convention is [F1]; the channel Poincare estimate is [F2].

[A1] Assume $\mathrm{AC}_\omega$, $L_x,L_z,h,\nu,\rho_0>0$, $S\in\mathbb R$, $T>0$, $u$ periodic in $x,z$, $u_t$ and its spatial derivatives through order two continuous up to $y=0,h$, $u_t+(u\cdot\nabla)u+\rho_0^{-1}\nabla p-\nu\Delta u=0$, $\nabla\cdot u=0$, $u|_{y=0}=0$, and $u|_{y=h}=Sh(1,0,0)$.

[F1] [[def-fd-x00]] on $fd-x01$ defines, for constants $\rho_0>0$ and $\mu>0$ with $\nu=\mu/\rho_0$, the pointwise constant-density incompressible equation $u_t+(u\cdot\nabla)u+\rho_0^{-1}\nabla p-\nu\Delta u=0$, $\nabla\cdot u=0$. Its vector Laplacian is componentwise; the fields here have the stated stronger channel regularity.

[F2] [[thm-fd-x07]] states that for the periodic channel and any $C^1$ field $v$ periodic in $x,z$ and zero at $y=0,h$, $\|v\|_{L^2(Q)}^2\le h^2\|\nabla v\|_{L^2(Q)}^2$. Its full conditional proof interface includes $\mathrm{AC}_\omega$.

[F3] [[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]] assumes $\mathrm{AC}_\omega$ and applies to $C^1$ fields on bounded $C^1$ Euclidean domains. It is used in the proof of [F2]'s general residual clause; it is not applied to the periodic representative cell in this proof.

[F4] [[def-countable-choice]]: $\mathrm{AC}_\omega$ is countable choice for a sequence of nonempty sets. This exact assumption is carried through [F2] and the assigned dependency closure; no full Axiom of Choice is added.

## Proof

1.1 The base field $U_b=(Sy,0,0)$ has $\nabla\cdot U_b=0$, $(U_b\cdot\nabla)U_b=0$, and $\Delta U_b=0$, so with constant pressure it solves the stationary equation in [F1]. Its wall values are $0$ and $Sh(1,0,0)$. Subtracting this equation from [A1] and using $w=u-U_b$ gives $w_t+(U_b\cdot\nabla)w+(w\cdot\nabla)U_b+(w\cdot\nabla)w=-\nabla q+\nu\Delta w$, $\nabla\cdot w=0$, and $w=0$ at both walls, where $q=p/\rho_0$ up to an additive constant. [given, A1, F1, algebra]

1.2 Pointwise, $2|w_1w_2|\le w_1^2+w_2^2\le|w|^2$. Integrating yields $|S|\left|\int_Qw_1w_2\right|\le\frac{|S|}{2}E(t)$. [given, A1, algebra]

2.1 Put $E(t)=\int_Q|w|^2$. Multiply the perturbation equation in step 1.1 by $w$ and integrate over one cell. The $U_b$ transport integral is $\frac12\int_Q\nabla\cdot(U_b|w|^2)=0$: $\nabla\cdot U_b=0$, its normal component vanishes at the $y$ walls, and paired periodic-face terms cancel. The nonlinear transport integral is $\frac12\int_Q\nabla\cdot(w|w|^2)=0$ because $\nabla\cdot w=0$, $w=0$ at the walls, and periodic-face terms cancel. The pressure integral is $-\int_Q\nabla\cdot(qw)+\int_Qq\nabla\cdot w=0$ for the same wall and periodic reasons. Componentwise integration by parts gives $\int_Qw\cdot\Delta w=-\|\nabla w\|_{L^2(Q)}^2$, with zero wall term and canceling periodic faces. Since $(w\cdot\nabla)U_b=S w_2(1,0,0)$, the remaining identity is $\frac12E'(t)=-\nu\|\nabla w\|_{L^2(Q)}^2-S\int_Qw_1w_2$. These integrations use the one-dimensional FTC on one periodic cell, not the bounded $C^1$ Euclidean divergence theorem. [given, A1, step 1.1, algebra]

3.1 From step 2.1 and step 1.2, $E'(t)\le-2\nu\|\nabla w\|_{L^2(Q)}^2+|S|E(t)$. Apply [F2] with the carried exact $\mathrm{AC}_\omega$ premise [F4] to get $E'(t)\le-(2\nu/h^2-|S|)E(t)$. [given, A1, F2, F3, F4, step 2.1, step 1.2, algebra]

4.1 Set $c=2\nu/h^2-|S|>0$ by the stated strict condition. Then $\frac{d}{dt}(e^{ct}E(t))=e^{ct}(E'(t)+cE(t))\le0$ by step 3.1. Integrating from $0$ to $t$ gives $E(t)\le e^{-ct}E(0)$ for every $t\in[0,T]$, which is the claimed conditional decay. [given, A1, step 3.1, algebra] ∎
