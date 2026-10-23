---
id: def-fd-solenoidal-surrogate-residual
kind: definition
title: Continuous periodic solenoidal surrogate residual
status: draft
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
dependency_level: 2
domain: mathematics
library: mathematics
deps:
  - def-countable-choice
  - def-fd-periodic-fourier-sobolev-spaces
  - def-fd-periodic-leray-pressure-maps
dependency_roles:
  def-countable-choice: mathematical-premise
  def-fd-periodic-fourier-sobolev-spaces: mathematical-premise
  def-fd-periodic-leray-pressure-maps: mathematical-premise
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is carried explicitly through the periodic Fourier and Leray-map definitions. No stronger choice principle is used here."
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Tanveer, Energy Estimate, Uniqueness and ν dependence of Smooth Solutions"
      url: "https://people.math.osu.edu/tanveer.1/m865/lec6mweek.pdf"
      locator: "§1.2, PDF pp. 2–3, equations (1.8)–(1.15): the smooth difference equation and continuous forcing difference."
    - title: "Carlo Morosi and Livio Pizzocchero, On approximate solutions of the incompressible Euler and Navier-Stokes equations"
      url: "https://arxiv.org/pdf/1104.3832"
      locator: "Definition 3.4, §4.1, and Lemmas 4.1–4.2: continuous differential residual and initial-data error in the periodic Sobolev formulation."
---

## Definition

Assume Countable Choice. Let $d\in\{2,3\}$, $T>0$, and $Q_d=\mathbb R^d/(2\pi\mathbb Z)^d$ with normalized volume $d\mu=(2\pi)^{-d}dx$. For a vector field $w$, use the componentwise Fourier coefficients $\widehat w(k)=\int_{Q_d}w(x)e^{-ik\cdot x}\,d\mu(x)$ and norm $\|w\|_2=(\int_{Q_d}|w(x)|^2\,d\mu(x))^{1/2}$. Define $P_0=I$ and, for $k\ne0$, $P_k=I-kk^{\mathsf T}/|k|^2$, with $\widehat{Pw}(k)=P_k\widehat w(k)$; $P$ is the Leray projector. For a smooth spatial vector field $w:Q_d\to\mathbb R^d$, define $\operatorname{div}w(x)=\sum_{j=1}^d\partial_jw_j(x)$; for a smooth time-dependent vector field $w:[0,T]\times Q_d\to\mathbb R^d$, define $\operatorname{div}w(t,x)=\sum_{j=1}^d\partial_jw_j(t,x)$, with derivatives taken only in $x$; for a tensor field $F=(F_{ij})$, set $(\operatorname{div}F)_i=\sum_{j=1}^d\partial_jF_{ij}$, and set $(v\otimes v)_{ij}=v_i v_j$. Let $\Delta=\sum_{j=1}^d\partial_j^2$. A smooth spatial field $w:Q_d\to\mathbb R^d$ is solenoidal, or divergence-free, iff $\operatorname{div}w(x)=0$ for every $x\in Q_d$; a smooth time-dependent field $w:[0,T]\times Q_d\to\mathbb R^d$ is solenoidal iff $\operatorname{div}w(t,x)=0$ for every $(t,x)\in[0,T]\times Q_d$. Given a constant $\nu\ge0$, smooth $f:[0,T]\times Q_d\to\mathbb R^d$, a smooth solenoidal field $v:[0,T]\times Q_d\to\mathbb R^d$, and a smooth solenoidal reference initial field $u_0:Q_d\to\mathbb R^d$, define the continuous residual and initial defect by

$$r_v:=\partial_t v+P\operatorname{div}(v\otimes v)-\nu\Delta v-Pf,\qquad d_0:=\|v(0,\cdot)-u_0\|_2.$$

The residual is a continuous function of time with values in $L^2(Q_d;\mathbb R^d)$, so $\int_0^T\|r_v(t,\cdot)\|_2\,dt$ is finite. This is a continuous-domain residual: finitely many collocation values do not by themselves bound this $L^1_tL^2_x$ quantity. All quantities here are mathematical; no physical units are assigned to $\nu$.

## Definition references

[Tanveer, *Energy Estimate, Uniqueness and ν dependence of Smooth Solutions*, Ohio State lecture notes](https://people.math.osu.edu/tanveer.1/m865/lec6mweek.pdf).

[Carlo Morosi and Livio Pizzocchero, *On approximate solutions of the incompressible Euler and Navier-Stokes equations*](https://arxiv.org/pdf/1104.3832).

## Facts & Assumptions

**Given:** Countable Choice; $d\in\{2,3\}$; $T>0$; the normalized torus $Q_d$; $\nu\ge0$; smooth $f,v,u_0$ as in the Definition; and $\operatorname{div}v=\operatorname{div}u_0=0$.

[F1] [[def-fd-periodic-fourier-sobolev-spaces]]: $Q_d$ is the $2\pi$-periodic torus with normalized measure $(2\pi)^{-d}dx$, and its $H^0$ norm is the normalized $L^2$ norm.

[F2] [[def-countable-choice]]: every sequence of nonempty sets has a choice function; this is the explicit choice assumption of the Fourier supplier.

[F3] [[def-fd-periodic-leray-pressure-maps]]: the multiplier $P$ is a real-preserving bounded orthogonal projection on every $H^s$ and commutes with derivatives; its coefficient formula projects each nonzero mode onto $k^\perp$.

## Proof

**Given:** The hypotheses and conventions stated in the Definition.

1.1 The smoothness assumptions make $v\otimes v$, $\partial_t v$, $\Delta v$, and $f$ well-defined periodic fields. By [F1] these fields lie in the required $L^2$ spaces. The adopted projector convention is conditional on the explicit Countable Choice premise [F2], and [F3] defines the multiplier on each term; hence the displayed formula defines $r_v$ at every $t\in[0,T]$. [given, F1, F2, F3, algebra]

2.1 The maps $t\mapsto \partial_t v$, $t\mapsto\operatorname{div}(v\otimes v)$, $t\mapsto\Delta v$, and $t\mapsto f$ are continuous into $L^2$; boundedness of $P$ from [F3] preserves that continuity. Hence $r_v\in C([0,T];L^2)$, and compactness of $[0,T]$ gives $\int_0^T\|r_v(t)\|_2dt<\infty$. Also $v(0)-u_0\in L^2$, so $d_0$ is finite. [given, F1, F3, step 1.1] ∎
