---
id: lem-high-sobolev-norms-share-base-lifespan
kind: lemma
title: "Higher Sobolev norms of the Galerkin approximations stay bounded on the common base interval, uniformly in $N$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 6
deps: [def-periodic-vector-sobolev-space-and-leray-projection, lem-fluid-energy-common-lifespan, lem-fluid-galerkin-coefficient-ivp, lem-tame-transport-commutator, lem-discrete-young-and-sobolev-product, def-countable-choice, thm-derivative-of-exponential, cor-exponential-reciprocal-and-positivity, thm-chain-rule]
dependency_roles:
  def-periodic-vector-sobolev-space-and-leray-projection: mathematical-premise
  lem-fluid-energy-common-lifespan: mathematical-premise
  lem-fluid-galerkin-coefficient-ivp: mathematical-premise
  lem-tame-transport-commutator: mathematical-premise
  lem-discrete-young-and-sobolev-product: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
  thm-chain-rule: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "E. Wiedemann (ed. J. Skipper), Lecture Notes: Navier-Stokes Equations (Universität Ulm, WS 2018/19), Theorem 4.16 and its proof (higher regularity: the induction giving uniform H^m bounds for the Galerkin approximations on the interval of the strong solution)"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.020/skipper/NSEEmilFinished.pdf"
    - title: "A. J. Majda and A. L. Bertozzi, Vorticity and Incompressible Flow (CUP 2002), estimate (3.58)-(3.60) and the proof of Theorem 3.4 (uniform bounds for v_ε in L^∞H^m and for ∂_tv_ε in L^∞H^{m-2})"
      url: "http://inis.jinr.ru/sl/P_Physics/PC_Classical%20physics/PCfm_Fluid%20mechanics/Majda,%20Bertozzi.%20Vorticity%20and%20incompressible%20flow%20(CUP,%202002)(558s).pdf"
verification:
  precheck: pass
---

## Statement

**Assume the Axiom of Countable Choice** $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Fix $N\ge1$, $\nu\ge0$, a real $s>5/2$, and $u_0\in H^s_\sigma$ with $Y_0=\|u_0\|_{H^s}$, and let $T$ and $u_N:[0,T]\to X_N$ be as in [[lem-fluid-energy-common-lifespan]]. For every real $m\ge s$ with $\|u_0\|_{H^m}<+\infty$ define
$$B_m:=\|u_0\|_{H^m}\,e^{4C_mY_0T},\qquad B_m':=\nu B_m+3C_{m-2}B_{m-1}^2 ,$$
where $C_m$ is the commutator constant of [[lem-tame-transport-commutator]] and $3C_{m-2}$ is the product constant of [[lem-discrete-young-and-sobolev-product]] at order $m-2$ (so that $B_m'$ is defined for $m>7/2$). Then for $0\le t\le T$:

1. $\|u_N(t)\|_{H^m}\le B_m$ for every real $m\ge s$; in particular all bounds hold on the single interval $[0,T]$ whose length depends only on $Y_0$ and $s$, uniformly in $N$.
2. $\|u_N'(t)\|_{H^{m-2}}\le B_m'$ for every real $m>7/2$; in particular, for the integer orders of the main theorem ($s\ge4$, $m\ge s$) these are the uniform-in-$N$ bounds on $L^\infty(0,T;H^m)$ and $L^\infty(0,T;H^{m-2})$ of the Galerkin approximations.

## Facts & Assumptions

**Given:** The Galerkin approximation $u_N$ of [[lem-fluid-galerkin-coefficient-ivp]] and the orbit estimate of [[lem-fluid-energy-common-lifespan]]: for all $t\in[0,T]$, $\|u_N(t)\|_{H^s}\le2Y_0$ and $\frac12\frac{d}{dt}\|u_N\|_{H^m}^2\le C_m\|u_N\|_{H^s}\|u_N\|_{H^m}^2$ for every $m\ge s$.

[F1] $\|P_Nv\|_{H^m}\le\|v\|_{H^m}$ for every $m$ and every $v\in H^m$ ([[def-periodic-vector-sobolev-space-and-leray-projection]], [[lem-fluid-galerkin-coefficient-ivp]]); hence $\|u_N(0)\|_{H^m}=\|P_Nu_0\|_{H^m}\le\|u_0\|_{H^m}$.

[F2] $u_N'=F_N(u_N)=-P_NP((u_N\cdot\nabla)u_N)+\nu\Delta u_N$, $\|\Delta v\|_{H^{m-2}}\le\|v\|_{H^m}$ and $\|(u\cdot\nabla)u\|_{H^{m-2}}\le3C_{m-2}\|u\|_{H^{m-2}}\|u\|_{H^{m-1}}\le3C_{m-2}\|u\|_{H^{m-1}}^2$ for $m-2>3/2$ ([[lem-fluid-galerkin-coefficient-ivp]], [[lem-discrete-young-and-sobolev-product]], claims 2 and 3).

[F3] $t\mapsto\|u_N(t)\|_{H^m}^2$ is differentiable with derivative $2\langle u_N',u_N\rangle_{H^m}$, and the function $Z(t):=\|u_N(t)\|_{H^m}^2\ge0$ satisfies: if $Z'-\lambda Z\le0$ on $[0,T]$ for a real $\lambda$, then $Z(t)\le Z(0)e^{\lambda t}$. Indeed $(e^{-\lambda t}Z)'\le0$ by the product rule and chain rule, and a function with nonpositive derivative is nonincreasing ([[thm-derivative-of-exponential]], [[thm-chain-rule]], [[cor-exponential-reciprocal-and-positivity]]).

## Proof


**Proof technique:** direct; insert the common base bound into the higher-order energy inequality and integrate the resulting linear differential inequality.

**Given:** The Galerkin approximation, its base estimate, and [F1]-[F3].

1.1 Fix $m\ge s$ with $\|u_0\|_{H^m}<\infty$ and let $Z(t):=\|u_N(t)\|^2_{H^m}$. By the energy inequality of [[lem-fluid-energy-common-lifespan]] and $\|u_N(t)\|_{H^s}\le2Y_0$, $Z'(t)\le2C_m\|u_N(t)\|_{H^s}Z(t)\le4C_mY_0\,Z(t)$ for $0\le t\le T$. [F3, given]

2.1 By [F3] applied with $\lambda=4C_mY_0$, $Z(t)\le Z(0)e^{4C_mY_0T}$; and $Z(0)=\|P_Nu_0\|^2_{H^m}\le\|u_0\|^2_{H^m}$ by [F1]. Taking square roots gives $\|u_N(t)\|_{H^m}\le\|u_0\|_{H^m}e^{4C_mY_0T}=B_m$ for $0\le t\le T$; since $T$ and $Y_0$ do not depend on $N$ or $m$, this is claim 1. [step 1.1, F1, F3]

3.1 For claim 2, use $u_N'=F_N(u_N)$ and [F2]: $\|u_N'(t)\|_{H^{m-2}}\le\nu\|u_N(t)\|_{H^m}+3C_{m-2}\|u_N(t)\|_{H^{m-1}}^2\le\nu B_m+3C_{m-2}B_{m-1}^2=B_m'$ by step 2.1, valid for every $m>7/2$. [step 2.1, F2] ∎

## Remarks

- The point of the statement is the word *common*: the interval does not shrink when the order $m$ is raised, because all the higher norms are controlled on the same base interval $[0,T]$.
- For smooth $u_0$ every $B_m$ is finite, which is the situation of the main theorem; for $u_0\in H^s$ only the bounds with $m=s$ are asserted, and they are what the compactness argument uses in the base norm.
