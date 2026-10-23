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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-23
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

Assume Countable Choice. Let $d\in\{2,3\}$, $T>0$, and $Q_d=\mathbb R^d/(2\pi\mathbb Z)^d$ with normalized measure $d\mu=(2\pi)^{-d}dx$. Use $\|w\|_2=(\int_{Q_d}|w|^2d\mu)^{1/2}$ and let $P$ act on vector Fourier coefficients by $\widehat{Pw}(0)=\widehat w(0)$ and $\widehat{Pw}(k)=(I-kk^{\mathsf T}/|k|^2)\widehat w(k)$ for $k\ne0$. For a smooth spatial vector field $w:Q_d\to\mathbb R^d$, define $\operatorname{div}w(x)=\sum_j\partial_jw_j(x)$; for a smooth time-dependent vector field $w:[0,T]\times Q_d\to\mathbb R^d$, define $\operatorname{div}_xw(t,x)=\sum_j\partial_jw_j(t,x)$, with derivatives taken only in $x$. Here divergence-free means $\operatorname{div}w=0$ at every $x$ for a spatial field and $\operatorname{div}_xw=0$ at every $(t,x)$ for a time-dependent field. For a tensor field $F$, define $(\operatorname{div}F)_i=\sum_j\partial_jF_{ij}$; define $(w\otimes z)_{ij}=w_i z_j$ and $\Delta=\sum_j\partial_j^2$. Let $\nu\ge0$, let $f\in C^\infty([0,T]\times Q_d;\mathbb R^d)$ be arbitrary, with no divergence condition imposed on $f$, let $u_0\in C^\infty(Q_d;\mathbb R^d)$ satisfy $\operatorname{div}u_0=0$ on $Q_d$, and let $u,v\in C^\infty([0,T]\times Q_d;\mathbb R^d)$ satisfy $\operatorname{div}_xu=\operatorname{div}_xv=0$ on $[0,T]\times Q_d$. Thus only $u_0,u,v$ are required to be divergence-free. Suppose $u(0)=u_0$ and

$$\partial_tu+P\operatorname{div}(u\otimes u)-\nu\Delta u=Pf,$$

and define $r_v=\partial_tv+P\operatorname{div}(v\otimes v)-\nu\Delta v-Pf$. For a smooth time-dependent vector field $b$, define its spatial Jacobian by $(\nabla_x b(t,x))_{ij}=\partial_jb_i(t,x)$, and for $a\in\mathbb R^d$ define $(a\cdot\nabla_x)b=(\nabla_xb)a$. For a smooth scalar field $\phi:[0,T]\times Q_d\to\mathbb R$, let $\nabla_x\phi=(\partial_j\phi)_{j=1}^d$. For $M\in\mathbb R^{d\times d}$, define $\|M\|_{\mathrm{op}}=\sup_{z\in\mathbb R^d,\,|z|=1}|Mz|$, using the Euclidean norm. Set $A(t)=\int_0^t\sup_{x\in Q_d}\|\nabla_xu(s,x)\|_{\mathrm{op}}\,ds$. Then for every $t\in[0,T]$,

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

1.1 Set $e=v-u$. Under the explicit Countable Choice convention [F4], subtracting the exact equation from the residual equation [F1] gives $\partial_te+P\operatorname{div}(v\otimes v-u\otimes u)-\nu\Delta e=r_v$. Since $\operatorname{div}_xu=\operatorname{div}_xv=0$, the tensor convention gives $\operatorname{div}(v\otimes v)=(v\cdot\nabla_x)v$ and $\operatorname{div}(u\otimes u)=(u\cdot\nabla_x)u$; the difference is $(v\cdot\nabla_x)e+(e\cdot\nabla_x)u$. [given, A1, F1, F4, algebra]

2.1 Define the real $L^2$ pairing by $\langle a,b\rangle_2=\int_{Q_d}a(x)\cdot b(x)\,d\mu(x)$ for $a,b\in L^2(Q_d;\mathbb R^d)$. Pair the resulting equation with $e$ in this pairing. By [F2], $Pe=e$ and $P$ is self-adjoint, so each projected transport term paired with $e$ equals its unprojected pairing. Periodicity gives $\int_{Q_d}\operatorname{div}_x(v|e|^2)\,d\mu=0$; since $\operatorname{div}_xv=0$, this yields $\langle(v\cdot\nabla_x)e,e\rangle_2=\frac12\int v\cdot\nabla_x|e|^2\,d\mu=0$. The Jacobian convention in the Statement gives $(e\cdot\nabla_x)u=(\nabla_xu)e$, so $|(e\cdot\nabla_x)u|\le\sup_x\|\nabla_xu\|_{\mathrm{op}}|e|$ pointwise and $|\langle(e\cdot\nabla_x)u,e\rangle_2|\le\sup_x\|\nabla_xu\|_{\mathrm{op}}\|e\|_2^2$. Periodic integration by parts gives $\langle-\nu\Delta e,e\rangle_2=\nu\sum_{i,j}\int_{Q_d}|\partial_je_i|^2\,d\mu\ge0$. Pointwise Euclidean Cauchy–Schwarz gives $|r_v\cdot e|\le|r_v||e|$; the real scalar functions $|r_v|$ and $|e|$ belong to $L^2(Q_d)$, so [F3] applied to them gives $|\langle r_v,e\rangle_2|\le\int_{Q_d}|r_v||e|\,d\mu\le\|r_v\|_2\|e\|_2$. Using $\langle\partial_t e,e\rangle_2=\frac12\frac{d}{dt}\|e\|_2^2$ now gives $\frac12\frac{d}{dt}\|e\|_2^2\le \sup_x\|\nabla_xu\|_{\mathrm{op}}\|e\|_2^2+\|r_v\|_2\|e\|_2$. [given, A1, F2, F3, step 1.1, algebra]

3.1 For $\delta>0$ put $y_\delta(t)=(\|e(t)\|_2^2+\delta^2)^{1/2}$ and $a(t)=\sup_x\|\nabla_xu(t,x)\|_{\mathrm{op}}$. Continuity of $\nabla_xu$ on compact $[0,T]\times Q_d$ makes $a$ continuous, so the definition of $A$ gives $A'(t)=a(t)$. The differential inequality in step 2.1 and the bounds $\|e\|_2^2/y_\delta\le y_\delta$ and $\|e\|_2/y_\delta\le1$ imply $y_\delta'(t)\le A'(t)y_\delta(t)+\|r_v(t)\|_2$. [A1, step 2.1, algebra]

4.1 The product rule and $A'(t)=\sup_x\|\nabla_xu(t,x)\|_{\mathrm{op}}$ show that $\frac{d}{dt}(e^{-A(t)}y_\delta(t))\le e^{-A(t)}\|r_v(t)\|_2$. Integrating from $0$ to $t$ and multiplying by $e^{A(t)}$ gives $y_\delta(t)\le e^{A(t)}y_\delta(0)+\int_0^t e^{A(t)-A(s)}\|r_v(s)\|_2ds$. As $\delta\downarrow0$, $y_\delta(t)\to\|e(t)\|_2$ and $y_\delta(0)\to\|v(0)-u_0\|_2$, which proves the stated estimate. [step 3.1, algebra] ∎
