---
id: lem-fluid-energy-common-lifespan
kind: lemma
title: "The higher-order energy inequality and a common Galerkin lifespan with $\\|u_N(t)\\|_{H^s}\\le2Y_0$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 5
deps: [def-periodic-vector-sobolev-space-and-leray-projection, lem-tame-transport-commutator, lem-fluid-galerkin-coefficient-ivp, lem-discrete-young-and-sobolev-product, def-countable-choice, thm-ftc-second-part, thm-monotonicity-of-the-integral, def-interval]
dependency_roles:
  def-periodic-vector-sobolev-space-and-leray-projection: mathematical-premise
  lem-tame-transport-commutator: mathematical-premise
  lem-fluid-galerkin-coefficient-ivp: mathematical-premise
  lem-discrete-young-and-sobolev-product: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "E. Wiedemann (ed. J. Skipper), Lecture Notes: Navier-Stokes Equations (Universität Ulm, WS 2018/19), Section 4.2 and Theorem 4.14 with its proof (the H^m energy inequality for the Galerkin approximations and the resulting common lifespan)"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.020/skipper/NSEEmilFinished.pdf"
    - title: "A. J. Majda and A. L. Bertozzi, Vorticity and Incompressible Flow (CUP 2002), Proposition 3.7 and estimate (3.59) (the a priori H^m bound d/dt||v_ε||_m ≤ c_m||v_ε||_m^2 and the bound ||v_0||_m/(1-c_mt||v_0||_m))"
      url: "http://inis.jinr.ru/sl/P_Physics/PC_Classical%20physics/PCfm_Fluid%20mechanics/Majda,%20Bertozzi.%20Vorticity%20and%20incompressible%20flow%20(CUP,%202002)(558s).pdf"
verification:
  precheck: pass
---

## Statement

**Assume the Axiom of Countable Choice** $\mathrm{AC}_\omega$ ([[def-countable-choice]]), used through the Fourier-coefficient suppliers. Fix $N\ge1$, $\nu\ge0$ and a real $s>5/2$, and let $u_N:I\to X_N$ be the maximal solution of the Galerkin system $u_N'=F_N(u_N)$ of [[lem-fluid-galerkin-coefficient-ivp]] with initial datum $u_N(0)=P_Nu_0$, where $u_0\in H^s_\sigma$ and $Y_0:=\|u_0\|_{H^s}$.

1. **Energy inequality.** For every real $m\ge s$ and every $t\in I$,
$$\frac12\frac{d}{dt}\|u_N(t)\|_{H^m}^2+\nu\|\nabla u_N(t)\|_{H^m}^2\;\le\;C_m\|u_N(t)\|_{H^s}\|u_N(t)\|_{H^m}^2 ,$$
where $C_m$ is the commutator constant of [[lem-tame-transport-commutator]] (claim 2), and $\|\nabla u_N\|_{H^m}^2:=\sum_{j=1}^3\|\partial_ju_N\|_{H^m}^2$.
2. **Common lifespan.** With
$$T:=\begin{cases}(2C_sY_0)^{-1},&Y_0>0,\\ 1,&Y_0=0,\end{cases}$$
one has $[0,T]\subseteq I$ and
$$\|u_N(t)\|_{H^s}\le2Y_0\quad(0\le t\le T);$$
if $Y_0=0$ then $u_N\equiv0$ on $I$. In particular the same interval length $T$, depending only on $Y_0$ and $s$ (and not on $N$ or on the finer profile of $u_0$), is a common interval of existence for all Galerkin approximations.

## Facts & Assumptions

**Given:** The Galerkin solution $u_N$ of [[lem-fluid-galerkin-coefficient-ivp]] (whose values are trigonometric polynomials, hence belong to every $H^m$), the operators $\Lambda^m$, $\partial_j$, $P$, $P_N$ and the weights of [[def-periodic-vector-sobolev-space-and-leray-projection]].

[F1] $H^m$ is a real Hilbert space with weighted inner product $\langle f,g\rangle_{H^m}=\sum_kw_k^{2m}\widehat f(k)\cdot\overline{\widehat g(k)}$ and $\|f\|_{H^m}^2=\langle f,f\rangle_{H^m}$. Bare $\langle f,g\rangle$ denotes the unweighted $L^2$ pairing, so for polynomials $\langle f,g\rangle_{H^m}=\langle f,\Lambda^{2m}g\rangle$; $\Lambda^{2m}$ is self-adjoint and positive and $\Lambda^{2m}=\Lambda^m\Lambda^m$; $\|\partial_jv\|_{H^m}\le\|v\|_{H^{m+1}}$ ([[def-periodic-vector-sobolev-space-and-leray-projection]]).

[F2] $P$ and $P_N$ are self-adjoint orthogonal projections on $H^m$, norm nonincreasing, commuting with $\Delta$; $P_N$ is the identity on $X_N$ and $u_N'\in X_N$ ([[def-periodic-vector-sobolev-space-and-leray-projection]], [[lem-fluid-galerkin-coefficient-ivp]]).

[F3] Claims 1-3 of [[lem-tame-transport-commutator]]: $\int((u\cdot\nabla)w)\cdot w\,dx=0$ for $u\in H^m$ divergence-free and $w\in H^m$; $\|[\Lambda^m,u\cdot\nabla]u\|_{L^2}\le C_m\|u\|_{H^m}\|u\|_{H^s}$; and $\langle(u\cdot\nabla)u,\Lambda^{2m}u\rangle=\langle[\Lambda^m,u\cdot\nabla]u,\Lambda^mu\rangle$ for $u\in H^{2m}$ divergence-free.

[F5] If $G:[0,t]\to\mathbb R$ is differentiable with integrable derivative $G'$ then $\int_0^tG'=G(t)-G(0)$ ([[thm-ftc-second-part]]), and if $f\le g$ pointwise then $\int f\le\int g$ ([[thm-monotonicity-of-the-integral]]).

## Proof


**Proof technique:** direct; differentiate the squared $H^m$-norm along the Galerkin flow, bound the transport term by the commutator estimate, and integrate the resulting scalar differential inequality by a regularization of the reciprocal.

**Given:** The Galerkin solution $u_N$ and facts [F1]-[F5].

1.1 Since $t\mapsto u_N(t)$ is differentiable in $H^m$ with derivative $u_N'(t)$ and the squared norm is the quadratic form $\|u_N\|^2_{H^m}=\langle u_N,u_N\rangle_{H^m}$, the derivative of $t\mapsto\|u_N(t)\|^2_{H^m}$ is $2\langle u_N',u_N\rangle_{H^m}$, and $\langle u_N',u_N\rangle_{H^m}=\langle -P_NP((u_N\cdot\nabla)u_N)+\nu\Delta u_N,u_N\rangle_{H^m}$. By [F2], $P_N$ is self-adjoint and the identity on $X_N\ni u_N$, and $P$ is self-adjoint with $P\Lambda^{2m}u_N=\Lambda^{2m}u_N$ (as $u_N$ is divergence-free); by [F1], $\langle\Delta u_N,u_N\rangle_{H^m}=-\|\nabla u_N\|^2_{H^m}$. Hence with $w:=\Lambda^mu_N$ one has the identity $\frac12\frac{d}{dt}\|u_N\|_{H^m}^2+\nu\|\nabla u_N\|_{H^m}^2=-\bigl\langle (u_N\cdot\nabla)u_N,\Lambda^{2m}u_N\bigr\rangle$. [F1, F2]

2.1 By claim 3 and claim 2 of [F3], $\bigl|\bigl\langle (u_N\cdot\nabla)u_N,\Lambda^{2m}u_N\bigr\rangle\bigr|=\bigl|\bigl\langle[\Lambda^m,u_N\cdot\nabla]u_N,\Lambda^mu_N\bigr\rangle\bigr|\le C_m\|u_N\|_{H^m}\|u_N\|_{H^s}\|\Lambda^mu_N\|_{H^0}=C_m\|u_N\|_{H^s}\|u_N\|_{H^m}^2$. Inserting this into step 1.1 gives the energy inequality of claim 1 for every $m\ge s$, the case $m>5/2$ being the hypothesis of [F3] and $m\ge s>5/2$. [step 1.1, F3]

3.1 Put $Z(t):=\|u_N(t)\|_{H^s}^2$ and $Y(t):=\|u_N(t)\|_{H^s}=Z(t)^{1/2}$. Step 2.1 with $m=s$ gives $\frac12Z'\le C_sZ^{3/2}$, that is $Z'\le2C_sZ^{3/2}$. For $\epsilon>0$ define $Y_\epsilon:=(Z+\epsilon^2)^{1/2}>0$; then $Y_\epsilon'=Z'/(2Y_\epsilon)\le C_sZ^{3/2}/Y_\epsilon\le C_sY_\epsilon{}^2$ because $Z\le Y_\epsilon^2$ and $Z^{3/2}\le Y_\epsilon^3$. [step 2.1, algebra]

4.1 Since $(1/Y_\epsilon)'=-Y_\epsilon'/Y_\epsilon^2\ge-C_s$ on any interval where $Y_\epsilon$ is defined, the fundamental theorem [F5] and monotonicity of the integral give $\frac1{Y_\epsilon(t)}\ge\frac1{Y_\epsilon(0)}-C_st$ for $t\in I$, $t\ge0$, as long as the right-hand side is positive; hence $Y_\epsilon(t)\le Y_\epsilon(0)\bigl(1-C_sY_\epsilon(0)t\bigr)^{-1}$ whenever the denominator is positive. [step 3.1, F5]

5.1 Letting $\epsilon\downarrow0$ in step 4.1 (with $Y_\epsilon(0)\to\|P_Nu_0\|_{H^s}\le Y_0$ and $Y_\epsilon(t)\to Y(t)$; the function $y\mapsto y/(1-C_syt)$ is increasing while its denominator is positive) gives, for $t\in I$ with $t\ge0$ and $C_sY_0t<1$, the bound $Y(t)\le Y_0(1-C_sY_0t)^{-1}$. In particular, for the time $T$ of the statement with $Y_0>0$, the denominator at $t=T$ is $1/2$, so $Y(t)\le2Y_0$ for $t\in I\cap[0,T]$; if $Y_0=0$, the zero field solves the IVP with the same initial datum, so IVP uniqueness gives $u_N\equiv0$ on the whole maximal interval. [step 4.1, given]

6.1 The bound $\|u_N(t)\|_{H^s}\le2Y_0$ on $[0,T]$ precludes a finite maximal right endpoint $T_{\max}\le T$: by the blow-up alternative of [[lem-fluid-galerkin-coefficient-ivp]] (claim 3), $\|u_N(t)\|_{H^s}$ would have to tend to $+\infty$ as $t\uparrow T_{\max}$, contradicting the bound. Hence $T_{\max}>T$, that is, $[0,T]\subseteq I$; this proves claim 2. [step 5.1, given] ∎

## Remarks

- The constant $C_s$ is the commutator constant of order $s$; the lifespan bound is therefore explicit in terms of the commutator estimate, with no hidden compactness.
- If $Y_0=0$ then $P_Nu_0=0$ in $H^s$, so the Galerkin solution is identically zero; the stated choice $T=1$ is a harmless convention to make the common-lifespan statement unconditional.
