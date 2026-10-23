---
id: prop-fd-fluid-equation-scaling
kind: proposition
title: "Fluid equation scalings and dimensionless numbers"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
deps:
  - def-fd-periodic-leray-pressure-maps
  - def-countable-choice
dependency_roles:
  def-fd-periodic-leray-pressure-maps: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Fluid Mechanics, Chapter 2, §3.3.1"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf"
    - title: "David Tong, Fluid Mechanics, Chapter 3, §4.4.4"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids3.pdf"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Let $d\in\{1,2,3\}$, $\ell>0$, and $\nu\ge0$, and write $Q_\ell=\mathbb R^d/(\ell\mathbb Z)^d$. For a period cell, define $\|f\|_{L^2_{\rm vol}(Q_\ell)}=(\int_{[0,\ell]^d}|f(x)|^2dx)^{1/2}$. First, if a smooth velocity-pressure pair on $[0,T]\times\mathbb R^d$ or $[0,T]\times Q_\ell$ solves the unforced incompressible Navier–Stokes system
$$u_t+(u\cdot\nabla)u=-\nabla\pi+\nu\Delta u,\qquad \operatorname{div}u=0,$$
then for any $\lambda>0$,
$$u_\lambda(t,x)=\lambda u(\lambda^2t,\lambda x),\qquad \pi_\lambda(t,x)=\lambda^2\pi(\lambda^2t,\lambda x)$$
solves the same system with the same viscosity on $\mathbb R^d$ or on the torus of period $\ell/\lambda$, respectively, for $0\le t\le T/\lambda^2$. On the torus, use the Fourier Leray multiplier $P_0=I$, $P_\xi=I-\xi\xi^{\mathsf T}/|\xi|^2$ for $\xi\ne0$; the projected equation is preserved as well because $P_{\lambda\xi}=P_\xi$. For a cell-volume $L^2$ norm, $\|u_\lambda(0)\|_{L^2_{\rm vol}(Q_{\ell/\lambda})}=\lambda^{1-d/2}\|u(0)\|_{L^2_{\rm vol}(Q_\ell)}$.

Second, for any $\alpha,\beta>0$, if $\Omega\subseteq\mathbb R^d$ is open and a smooth pair $(u,\pi)$ on $[0,T]\times\Omega$ solves the unforced incompressible Euler system $u_t+(u\cdot\nabla)u=-\nabla\pi$, $\operatorname{div}u=0$, then on the scaled domain $\beta^{-1}\Omega$,
$$u_{\alpha,\beta}(t,x)=\alpha u(\alpha\beta t,\beta x),\qquad \pi_{\alpha,\beta}(t,x)=\alpha^2\pi(\alpha\beta t,\beta x)$$
solves the same equation on the correspondingly scaled domain and time interval $0\le t\le T/(\alpha\beta)$. These transformations are equation symmetries; on a torus they transform its period.

Finally, let $U,L,\rho_*,\eta>0$ be physical scales in SI units, with $U$ and sound speed in m/s, $L$ in m, $\rho_*$ in kg/m$^3$, dynamic viscosity $\eta$ in Pa$\cdot$s, kinematic viscosity $\nu=\eta/\rho_*$ in m$^2$/s, and kinematic pressure $\pi_{\rm phys}$ in m$^2$/s$^2$. The substitution $X=Lx$, $t_{\rm phys}=(L/U)t$, $u_{\rm phys}=Uu$, and $\pi_{\rm phys}=U^2\pi$ gives the dimensionless incompressible Navier–Stokes coefficient $Re^{-1}$, where $Re=UL/\nu=\rho_*UL/\eta$. Let $p$ be differentiable at the positive reference density $\rho_*$, with pressure measured in Pa and $p'(\rho_*)>0$ in m$^2$/s$^2$, and sound speed $c_*=\sqrt{p'(\rho_*)}$. For the linear acoustic tangent system $\delta\rho_t+\rho_*\operatorname{div}v_{\rm phys}=0$, $(v_{\rm phys})_t+(c_*^2/\rho_*)\nabla_X\delta\rho=0$, where $\delta\rho$ has units kg/m$^3$, the scales $X=Lx$, $t_{\rm phys}=(L/U)t$, $\delta\rho=\rho_*\delta\rho'$, and $v_{\rm phys}=Uv$ give the momentum coefficient $Ma^{-2}$, where $Ma=U/c_*$. Both $Re$ and $Ma$ are dimensionless. These are chain-rule identities and assert no continuum limit or empirical similarity.

## Statement references

[[def-fd-periodic-leray-pressure-maps]]

[Tong, Fluid Mechanics, Chapter 2, §3.3.1](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf)

[Tong, Fluid Mechanics, Chapter 3, §4.4.4](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids3.pdf)

## Facts & Assumptions

**Given:** The smooth equations and positive scale constants in the Statement. All scale constants are mathematical parameters; no empirical assumption is made.

[F1] [[def-fd-periodic-leray-pressure-maps]]: at nonzero Fourier frequency $\xi$, the Leray multiplier is $P_\xi=I-\xi\xi^{\mathsf T}/|\xi|^2$, and the pressure multiplier has the same degree-zero dependence on frequency direction.

[A1] Countable Choice: every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

## Proof

1.1 For the Navier–Stokes scaling, the chain rule gives $(u_\lambda)_t=\lambda^3u_t(\lambda^2t,\lambda x)$, $(u_\lambda\cdot\nabla)u_\lambda=\lambda^3(u\cdot\nabla)u(\lambda^2t,\lambda x)$, $\nabla\pi_\lambda=\lambda^3\nabla\pi(\lambda^2t,\lambda x)$, and $\Delta u_\lambda=\lambda^3\Delta u(\lambda^2t,\lambda x)$. Also $\operatorname{div}u_\lambda=\lambda^2\operatorname{div}u$. Thus the full equation and divergence constraint retain the same viscosity. [given, algebra]

1.2 For the Euler transformation, the time derivative, convective term, and pressure gradient each acquire the common factor $\alpha^2\beta$; the divergence acquires $\alpha\beta$. Thus the equation and divergence constraint are preserved on the scaled domain and time interval. [given, algebra]

1.3 Under the stated dimensional change of variables, each acceleration term has factor $U^2/L$, while $\nu\Delta u_{\rm phys}$ has factor $\nu U/L^2$. Dividing by $U^2/L$ leaves $\nu/(UL)=Re^{-1}$; substituting $\nu=\eta/\rho_*$ gives $Re=\rho_*UL/\eta$. [given, algebra]

2.1 On the period-$\ell$ torus, a Fourier frequency $\xi=2\pi k/\ell$ becomes $\lambda\xi$ on the period-$\ell/\lambda$ torus. Since $P_{\lambda\xi}=P_\xi$ and the pressure multiplier in [F1] also depends only on frequency direction, the projected equation scales with the same factor $\lambda^3$. For the volume norm, change variables $y=\lambda x$ over a period cell: $dx=\lambda^{-d}dy$ while $|u_\lambda|^2=\lambda^2|u|^2$, so the squared norm scales by $\lambda^{2-d}$ and its square root by $\lambda^{1-d/2}$. [given, A1, F1, step 1.1, algebra]

3.1 In the linear acoustic equations $\delta\rho_t+\rho_*\operatorname{div}v_{\rm phys}=0$ and $(v_{\rm phys})_t+(c_*^2/\rho_*)\nabla_X\delta\rho=0$, substitute $\delta\rho=\rho_*\delta\rho'$, $v_{\rm phys}=Uv$, $X=Lx$, and $t_{\rm phys}=(L/U)t$. Dividing the first equation by $\rho_*U/L$ gives $\delta\rho'_t+\operatorname{div}v=0$; dividing the second by $U^2/L$ gives $v_t+(c_*^2/U^2)\nabla\delta\rho'=0$. Since $Ma=U/c_*$, the coefficient is $Ma^{-2}$. [given, algebra] ∎