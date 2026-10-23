---
id: thm-fd-polytropic-energy
kind: theorem
title: "Smooth polytropic energy conservation"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 4
deps:
  - def-fd-polytropic-symmetric-variables
  - thm-fd-smooth-polytropic-euler-ivp
  - def-countable-choice
dependency_roles:
  def-fd-polytropic-symmetric-variables: mathematical-premise
  thm-fd-smooth-polytropic-euler-ivp: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Fluid Mechanics, Chapter 3, §4.5"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids3.pdf"
    - title: "François Golse, The Boltzmann Equation and Its Hydrodynamic Limits, Chapter 3"
      url: "https://www.cmls.polytechnique.fr/perso/golse/Surveys/FGHdBookEvEq.pdf"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Let $d\in\{1,2,3\}$, $\kappa>0$, $\gamma>1$, $a=(\gamma-1)/2$, integer $s\ge4$, and smooth real periodic data $\rho_0:Q_d\to(0,\infty)$ and $u_0:Q_d\to\mathbb R^d$ on the normalized torus $Q_d=\mathbb R^d/(2\pi\mathbb Z)^d$, with $\min_{x\in Q_d}\rho_0(x)>0$. Use normalized Lebesgue measure $d\mu=(2\pi)^{-d}dx$, Fourier coefficients $\widehat f(k)=\int_{Q_d}f(x)e^{-ik\cdot x}\,d\mu(x)$, and norms $\|f\|_{H^m}^2=\sum_{k\in\mathbb Z^d}(1+|k|^2)^m|\widehat f(k)|^2$. For $\rho>0$, set $r(\rho)=\sqrt{\kappa\gamma}\rho^a/a$. The local positive-density polytropic Euler theorem supplies a unique smooth solution $(\rho,u)$ on $[0,T]$ with these initial data and $\rho(t,x)>0$, where $T$ depends only on $d,s,\kappa,\gamma,\|(r(\rho_0),u_0)\|_{H^s}$ and $\min_{x\in Q_d}r(\rho_0)(x)$, satisfying
$$\rho_t+\operatorname{div}(\rho u)=0,\qquad u_t+u\cdot\nabla u+\rho^{-1}\nabla p(\rho)=0,\qquad p(\rho)=\kappa\rho^\gamma.$$
Define the internal-energy density $U(\rho)=\kappa\rho^\gamma/(\gamma-1)$ and total-energy density $E=\frac12\rho|u|^2+U(\rho)$. Then
$$\partial_tE+\operatorname{div}((E+p(\rho))u)=0,$$
and the total energy $\int_{Q_d}E(t,x)\,d\mu(x)$ is constant on $[0,T]$.

## Statement references

[[def-fd-polytropic-symmetric-variables]]

[[thm-fd-smooth-polytropic-euler-ivp]]

[Tong, Fluid Mechanics, Chapter 3, §4.5](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids3.pdf)

[Golse, The Boltzmann Equation and Its Hydrodynamic Limits, Chapter 3](https://www.cmls.polytechnique.fr/perso/golse/Surveys/FGHdBookEvEq.pdf)

## Facts & Assumptions

**Given:** Countable Choice, $\kappa>0$, $\gamma>1$, and the smooth positive-density solution in the Statement.

[A1] Countable Choice: every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[F1] [[def-fd-polytropic-symmetric-variables]]: $p(\rho)=\kappa\rho^\gamma$ for $\rho>0$ and the admissible sound-speed variable is defined only on positive density.

[F2] [[thm-fd-smooth-polytropic-euler-ivp]]: for the stated positive-density periodic data and parameters, the polytropic Euler system has a unique local smooth solution; its present proof uses the exact FD-S01 Fourier estimates conditionally.

## Proof

1.1 By [F2], the unique smooth positive-density solution exists on its local lifespan. For every smooth scalar $\phi$, the continuity equation and product rule give
$\partial_t(\rho\phi)+\operatorname{div}(\rho u\phi)=\rho(\partial_t\phi+u\cdot\nabla\phi)$.
Indeed, expansion of the left side produces $\phi(\rho_t+\operatorname{div}(\rho u))+\rho\phi_t+\rho u\cdot\nabla\phi$, and the first term is zero. [given, A1, F2, algebra]

1.2 For $U(\rho)=\kappa\rho^\gamma/(\gamma-1)$, the continuity equation gives $\partial_tU+\operatorname{div}(Uu)=U'(\rho)(\rho_t+u\cdot\nabla\rho)+U\operatorname{div}u=(U-\rho U')\operatorname{div}u$. Direct differentiation gives $U-\rho U'=-\kappa\rho^\gamma=-p$, hence $\partial_tU+\operatorname{div}(Uu)=-p\operatorname{div}u$. [given, F1, algebra]

2.1 Put $K=\rho|u|^2/2$. The momentum equation is $\rho(\partial_tu+u\cdot\nabla u)=-\nabla p$. Apply step 1.1 to $\phi=|u|^2/2$, so $\partial_tK+\operatorname{div}(Ku)=\rho u\cdot(\partial_tu+u\cdot\nabla u)=-u\cdot\nabla p$. [given, step 1.1, algebra]

3.1 Add steps 2.1 and 1.2 and use $u\cdot\nabla p+p\operatorname{div}u=\operatorname{div}(pu)$. This yields $\partial_t(K+U)+\operatorname{div}((K+U+p)u)=0$, which is the asserted local conservation law. Integrating it over the periodic torus makes the divergence integral vanish, so the total energy is constant. [given, step 2.1, step 1.2, algebra] ∎