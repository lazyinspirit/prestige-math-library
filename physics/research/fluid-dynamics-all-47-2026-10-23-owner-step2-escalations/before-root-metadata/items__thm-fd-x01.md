---
id: thm-fd-x01
kind: theorem
title: "Exact Reynolds and Mach nondimensionalization"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
page: fd-x01
deps:
  - def-fd-x00
  - thm-chain-rule
dependency_roles:
  def-fd-x00: mathematical-premise
  thm-chain-rule: mathematical-premise
dependency_level: 1
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Iain Stewart, MIT 8.09, Chapter 6: Fluid Mechanics, §6.7 Reynolds Number and Similarity"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/3bfed6897483f5c55bf615ed583af603_MIT8_09F14_Chapter_6.pdf"
    - title: "MIT 16.01 Unified Engineering, F5 lecture notes: Effects of Reynolds Number and Mach Number"
      url: "https://ocw.mit.edu/courses/16-01-unified-engineering-i-ii-iii-iv-fall-2005-spring-2006/b4ddec4a7d0be7ec3814a10dc891d5ef_f5.pdf"
verification:
  precheck: pending
---

## Statement

Let $I\subseteq\mathbb R$ and $\Omega\subseteq\mathbb R^3$ be open, let $\rho_0,\mu,U,L,c>0$, and set $\nu=\mu/\rho_0$, $\operatorname{Re}=UL/\nu$, and $\operatorname{Ma}=U/c$. Define $T=Ut/L$, $X=x/L$, $I^*=\{Ut/L:t\in I\}$, and $\Omega^*=\{x/L:x\in\Omega\}$. For the incompressible branch, let $u:I\times\Omega\to\mathbb R^3$ have continuous first time and first and second spatial partial derivatives, and let $p:I\times\Omega\to\mathbb R$ have continuous first spatial partial derivatives. Write $u^*:I^*\times\Omega^*\to\mathbb R^3$ and $p^*:I^*\times\Omega^*\to\mathbb R$ for the corresponding fields with the same stated regularity. Set $u(t,x)=Uu^*(T,X)$ and $p(t,x)=p_{\mathrm{ref}}+\rho_0U^2p^*(T,X)$, where $p_{\mathrm{ref}}$ is constant. Then the original system is equivalent under this invertible change of variables to

$$\partial_Tu^*+(u^*\cdot\nabla_X)u^*=-\nabla_Xp^*+\operatorname{Re}^{-1}\Delta_Xu^*,\qquad \operatorname{div}_Xu^*=0.$$

For the barotropic branch, let $P:(0,\infty)\to\mathbb R$ have two continuous derivatives with $P'(\rho_0)=c^2>0$. Let $u:I\times\Omega\to\mathbb R^3$ have continuous first time and first and second spatial partial derivatives, let $\rho:I\times\Omega\to(0,\infty)$ have continuous first time and spatial partial derivatives, and let any potential $V$ have continuous spatial partial derivatives through order two. Write $u^*:I^*\times\Omega^*\to\mathbb R^3$, $\rho^*:I^*\times\Omega^*\to(0,\infty)$, and $p^*:I^*\times\Omega^*\to\mathbb R$ for the rescaled fields with the corresponding stated regularity. Set $\rho=\rho_0\rho^*$ and $P(\rho)=P(\rho_0)+\rho_0c^2p^*$; if a potential is present, set $V=U^2V^*$ with $V^*:\Omega^*\to\mathbb R$. Then the exact transformed equations are

$$\partial_T\rho^*+\operatorname{div}_X(\rho^*u^*)=0,\qquad \partial_Tu^*+(u^*\cdot\nabla_X)u^*=-\operatorname{Ma}^{-2}(\rho^*)^{-1}\nabla_Xp^*-\nabla_XV^*.$$

These are coefficient identities under positive changes of scale. They do not assert a limit as either dimensionless ratio tends to zero or infinity, an error estimate, uniqueness, or identical solutions when geometry or rescaled data differ.

In the optional SI interpretation, $[\rho_0]=\mathrm{kg\,m^{-3}}$, $[\mu]=\mathrm{Pa\,s}$, $[U]=[c]=\mathrm{m\,s^{-1}}$, $[L]=\mathrm m$, and $[\nu]=\mathrm{m^2\,s^{-1}}$; $\operatorname{Re}$ and $\operatorname{Ma}$ are dimensionless.

## Statement references

The characteristic Reynolds ratio and similarity discussion: [Stewart, MIT 8.09, Chapter 6, §6.7, printed pp. 133–134](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/3bfed6897483f5c55bf615ed583af603_MIT8_09F14_Chapter_6.pdf).

Independent Reynolds and Mach parameter treatment: [MIT 16.01 Unified Engineering, F5 lecture notes, pp. 1–4](https://ocw.mit.edu/courses/16-01-unified-engineering-i-ii-iii-iv-fall-2005-spring-2006/b4ddec4a7d0be7ec3814a10dc891d5ef_f5.pdf).

The formal systems and derivative conventions: [[def-fd-x00]].

## Facts & Assumptions

**Given:** Positive constants $\rho_0,\mu,U,L,c$, open domains $I,\Omega$, and regular fields $u,p,\rho$ as in the statement. Use Cartesian derivatives and the SI dimensional interpretation only to identify the ratios as dimensionless.

[A1] The constant-density incompressible system is $\partial_tu+(u\cdot\nabla)u+\rho_0^{-1}\nabla p-\nu\Delta u=0$ and $\operatorname{div}u=0$ ([[def-fd-x00]]).

[A2] The barotropic system is $\partial_t\rho+\operatorname{div}(\rho u)=0$ and $\partial_tu+(u\cdot\nabla)u=-\rho^{-1}\nabla(P(\rho))-\nabla V$ ([[def-fd-x00]]).

[F1] The gradient, divergence, Laplacian, and componentwise convective derivative in these systems are the Cartesian operators defined in [[def-fd-x00]].

[F2] If differentiable $g$ maps into the domain of differentiable $f$, then $f\circ g$ is differentiable and $(f\circ g)'(x)=f'(g(x))g'(x)$ ([[thm-chain-rule]]).

## Proof

1.1 From $t=LT/U$, $x=LX$, and $u=Uu^*(T,X)$, the one-variable chain rule in each coordinate gives $\partial_tu=(U^2/L)\partial_Tu^*$, $\nabla_xu=(U/L)\nabla_Xu^*$, $\Delta_xu=(U/L^2)\Delta_Xu^*$, $(u\cdot\nabla_x)u=(U^2/L)(u^*\cdot\nabla_X)u^*$, and $\operatorname{div}_xu=(U/L)\operatorname{div}_Xu^*$. The pressure substitution gives $\rho_0^{-1}\nabla_xp=(U^2/L)\nabla_Xp^*$ because the gradient of $p_{\mathrm{ref}}$ is zero. [given, A1, F1, F2]

1.2 With $\rho=\rho_0\rho^*$ and $u=Uu^*$, the time derivative and divergence terms in the mass equation both acquire the common factor $\rho_0U/L$; dividing by this positive factor gives $\partial_T\rho^*+\operatorname{div}_X(\rho^*u^*)=0$. [given, A2, F1, F2]

1.3 The left side of the barotropic momentum equation acquires the factor $U^2/L$. The pressure gradient satisfies $\rho^{-1}\nabla_xP(\rho)=(c^2/L)(\rho^*)^{-1}\nabla_Xp^*$ by the stated pressure scaling, while $\nabla_xV=(U^2/L)\nabla_XV^*$. Dividing by $U^2/L$ gives the displayed momentum equation and the coefficient $c^2/U^2=\operatorname{Ma}^{-2}$. [given, A2, F1, F2, algebra]

2.1 Substituting the identities of step 1.1 into [A1] and dividing by $U^2/L>0$ yields the displayed incompressible equations, since $\nu/(UL)=\operatorname{Re}^{-1}$. Reversing the same invertible substitutions proves the converse. [step 1.1, A1, algebra]

3.1 Since $U,L,\rho_0,\mu,c$ are positive, every scaling map and every division above is invertible. The equations therefore transform exactly in both directions; this algebra alone supplies no uniqueness, limiting, or error estimate. [given, step 2.1, step 1.2, step 1.3] ∎
