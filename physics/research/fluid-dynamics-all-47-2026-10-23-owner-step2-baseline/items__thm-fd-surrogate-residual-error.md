---
id: thm-fd-surrogate-residual-error
kind: theorem
title: Conditional continuous residual-to-error certificate
status: draft
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
dependency_level: 3
domain: mathematics
library: mathematics
deps:
  - def-countable-choice
  - def-fd-periodic-leray-pressure-maps
  - def-fd-solenoidal-surrogate-residual
  - thm-holder-inequality-for-integrals
dependency_roles:
  def-countable-choice: mathematical-premise
  def-fd-periodic-leray-pressure-maps: mathematical-premise
  def-fd-solenoidal-surrogate-residual: mathematical-premise
  thm-holder-inequality-for-integrals: mathematical-premise
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is carried through the periodic Fourier projector supplier. The energy calculation itself uses no further choice."
physical_scope: null
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Tanveer, Energy Estimate, Uniqueness and ν dependence of Smooth Solutions"
      url: "https://people.math.osu.edu/tanveer.1/m865/lec6mweek.pdf"
      locator: "§1.2, PDF pp. 2–3, equations (1.8)–(1.15): comparison of smooth solutions with forcing difference and the energy/Gronwall estimate."
    - title: "Carlo Morosi and Livio Pizzocchero, On approximate solutions of the incompressible Euler and Navier-Stokes equations"
      url: "https://arxiv.org/pdf/1104.3832"
      locator: "Definition 3.4 and §4.1–4.5, especially Lemma 4.2 and Proposition 4.5: continuous residual, initial defect, and a complete periodic Sobolev comparison argument."
---

## Statement

Assume Countable Choice. Let $d\in\{2,3\}$, $T>0$, and $Q_d=\mathbb R^d/(2\pi\mathbb Z)^d$ with normalized measure $d\mu=(2\pi)^{-d}dx$. Use $\|w\|_2=(\int_{Q_d}|w|^2d\mu)^{1/2}$ and let $P$ act on vector Fourier coefficients by $\widehat{Pw}(0)=\widehat w(0)$ and $\widehat{Pw}(k)=(I-kk^{\mathsf T}/|k|^2)\widehat w(k)$ for $k\ne0$. Define $\operatorname{div}w=\sum_j\partial_jw_j$, $(\operatorname{div}F)_i=\sum_j\partial_jF_{ij}$, $(w\otimes z)_{ij}=w_i z_j$, and $\Delta=\sum_j\partial_j^2$. Let $\nu\ge0$, $f\in C^\infty([0,T]\times Q_d;\mathbb R^d)$, $u_0\in C^\infty(Q_d;\mathbb R^d)$, and $u,v\in C^\infty([0,T]\times Q_d;\mathbb R^d)$ all be divergence-free. Suppose $u(0)=u_0$ and

$$\partial_tu+P\operatorname{div}(u\otimes u)-\nu\Delta u=Pf,$$

and define $r_v=\partial_tv+P\operatorname{div}(v\otimes v)-\nu\Delta v-Pf$. Put $A(t)=\int_0^t\sup_{x\in Q_d}\|\nabla u(s,x)\|_{\mathrm{op}}\,ds$, where $\|\cdot\|_{\mathrm{op}}$ is the Euclidean matrix operator norm. Then for every $t\in[0,T]$,

$$\|v(t)-u(t)\|_2\le e^{A(t)}\left(\|v(0)-u_0\|_2+\int_0^t e^{-A(s)}\|r_v(s)\|_2\,ds\right).$$

This is a conditional estimate for an already given smooth exact solution; it proves no existence theorem and gives no error guarantee from finitely many collocation residual values alone. All quantities are mathematical, with no physical units assigned to $\nu$.

## Statement references

[Tanveer, *Energy Estimate, Uniqueness and ν dependence of Smooth Solutions*, Ohio State lecture notes](https://people.math.osu.edu/tanveer.1/m865/lec6mweek.pdf).

[Carlo Morosi and Livio Pizzocchero, *On approximate solutions of the incompressible Euler and Navier-Stokes equations*](https://arxiv.org/pdf/1104.3832).

## Facts & Assumptions

**Given:** The torus, Fourier multiplier, smooth fields, common forcing and viscosity, exact equation, and residual convention stated in the Statement and in the continuous periodic solenoidal surrogate residual Definition.

[A1] $u,v$ are smooth and divergence-free on the compact periodic domain, $\nu\ge0$, $r_v\in C([0,T];L^2)$, and $u(0)=u_0$.

[F1] [[def-fd-solenoidal-surrogate-residual]]: $r_v=\partial_tv+P\operatorname{div}(v\otimes v)-\nu\Delta v-Pf$, with the same normalized $L^2$ norm and tensor-divergence convention used here.

[F2] [[def-fd-periodic-leray-pressure-maps]]: $P$ is self-adjoint as an orthogonal Fourier projection, commutes with derivatives, and fixes divergence-free fields mode by mode.

[F3] [[thm-holder-inequality-for-integrals]]: for measurable $a,b\in L^2(Q_d)$, $\int_{Q_d}|ab|\,d\mu\le\|a\|_2\|b\|_2$.

[F4] [[def-countable-choice]]: every sequence of nonempty sets has a choice function; this is the explicit choice premise carried by the periodic Fourier multiplier framework.

## Proof

**Given:** The hypotheses in [A1], the common forcing and viscosity, and the supplier conventions in [F1]–[F4].

1.1 Set $e=v-u$. Under the explicit Countable Choice convention [F4], subtracting the exact equation from the residual equation [F1] gives $\partial_te+P\operatorname{div}(v\otimes v-u\otimes u)-\nu\Delta e=r_v$. Since $\operatorname{div}u=\operatorname{div}v=0$, the tensor convention gives $\operatorname{div}(v\otimes v)=v\cdot\nabla v$ and $\operatorname{div}(u\otimes u)=u\cdot\nabla u$; the difference is $v\cdot\nabla e+e\cdot\nabla u$. [given, A1, F1, F4, algebra]

2.1 Pair the resulting equation with $e$ in normalized $L^2$. By [F2], $Pe=e$ and $P$ is self-adjoint, so each projected transport term paired with $e$ equals its unprojected pairing. Periodicity gives $\int_{Q_d}\operatorname{div}(v|e|^2)\,d\mu=0$; since $\operatorname{div}v=0$, this yields $\langle v\cdot\nabla e,e\rangle=\frac12\int v\cdot\nabla|e|^2\,d\mu=0$. Also $|\langle e\cdot\nabla u,e\rangle|\le\sup_x\|\nabla u\|_{\mathrm{op}}\|e\|_2^2$. Periodic integration by parts gives $\langle-\nu\Delta e,e\rangle=\nu\|\nabla e\|_2^2\ge0$. By [F3], $|\langle r_v,e\rangle|\le\|r_v\|_2\|e\|_2$. Using $\langle\partial_t e,e\rangle=\frac12\frac{d}{dt}\|e\|_2^2$ now gives $\frac12\frac{d}{dt}\|e\|_2^2\le \sup_x\|\nabla u\|_{\mathrm{op}}\|e\|_2^2+\|r_v\|_2\|e\|_2$. [given, A1, F2, F3, step 1.1, algebra]

3.1 For $\delta>0$ put $y_\delta(t)=(\|e(t)\|_2^2+\delta^2)^{1/2}$ and $a(t)=\sup_x\|\nabla u(t,x)\|_{\mathrm{op}}$. Continuity of $\nabla u$ on compact $[0,T]\times Q_d$ makes $a$ continuous, so the definition of $A$ gives $A'(t)=a(t)$. The differential inequality in step 2.1 and the bounds $\|e\|_2^2/y_\delta\le y_\delta$ and $\|e\|_2/y_\delta\le1$ imply $y_\delta'(t)\le A'(t)y_\delta(t)+\|r_v(t)\|_2$. [A1, step 2.1, algebra]

4.1 The product rule and $A'(t)=\sup_x\|\nabla u(t,x)\|_{\mathrm{op}}$ show that $\frac{d}{dt}(e^{-A(t)}y_\delta(t))\le e^{-A(t)}\|r_v(t)\|_2$. Integrating from $0$ to $t$ and multiplying by $e^{A(t)}$ gives $y_\delta(t)\le e^{A(t)}y_\delta(0)+\int_0^t e^{A(t)-A(s)}\|r_v(s)\|_2ds$. As $\delta\downarrow0$, $y_\delta(t)\to\|e(t)\|_2$ and $y_\delta(0)\to\|v(0)-u_0\|_2$, which proves the stated estimate. [step 3.1, algebra] ∎
