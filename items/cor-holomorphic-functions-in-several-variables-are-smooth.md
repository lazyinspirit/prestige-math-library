---
id: cor-holomorphic-functions-in-several-variables-are-smooth
kind: corollary
title: "Holomorphic functions of several variables are smooth and their complex derivatives are holomorphic"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-osgood-lemma-in-several-complex-variables, thm-power-series-expansion-in-several-complex-variables, thm-power-series-define-holomorphic-functions-in-several-variables, prop-holomorphic-functions-are-continuous-and-separately-holomorphic, def-ck-and-multi-index-notation-in-several-variables, def-wirtinger-operators-in-several-complex-variables, lem-complex-linear-real-differential-criterion, thm-induction-principle, def-holomorphic-function-in-several-complex-variables, def-balls-and-polydiscs-in-complex-euclidean-space, cor-complex-differentiability-implies-continuity, def-factorial-and-falling-factorial, rem-complex-euclidean-space-dictionary]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §1.2"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "M. Jabbari, Notes for Analysis and Geometry of Several Complex Variables, §3.1"
      url: "https://www.cimat.mx/~mohammad.jabbari/course-SCV.pdf"
pipeline_run: null
---

## Statement

Let $m\ge1$, let $U\subseteq\mathbb C^m$ be open and let $f:U\to\mathbb C$ be
holomorphic. Then:

1. every point $a\in U$ has a polydisc $\Delta_r(a)\subseteq U$ on which
   $f(z)=\sum_\alpha c_\alpha(z-a)^\alpha$ with the series absolutely convergent,
   and the coefficients are
   $$c_\alpha=\frac{\partial^\alpha_zf(a)}{\alpha!},\qquad \partial^\alpha_z:=\partial_{z_0}^{\alpha_0}\cdots\partial_{z_{m-1}}^{\alpha_{m-1}};$$
2. every iterated complex partial derivative $\partial^\alpha_zf$ exists and is
   holomorphic on $U$;
3. $\partial_{x_k}f=\partial_{z_k}f$ and $\partial_{y_k}f=i\,\partial_{z_k}f$ for
   every $k<m$, and $f$ is of class $C^n$ in the real coordinates for every
   natural $n$, hence smooth.

## Facts & Assumptions

**Given:** An open $U\subseteq\mathbb C^m$ and a holomorphic $f:U\to\mathbb C$; $\mathbb C^m$ is read through [[rem-complex-euclidean-space-dictionary]].

[L1] A continuous separately holomorphic function on an open set is holomorphic, and for a continuous function holomorphy, separate holomorphy and local power-series representability agree ([[thm-osgood-lemma-in-several-complex-variables]]).

[L2] For $f$ continuous and separately holomorphic on $\Delta_\rho(a)$ and $r_k<\rho_k$, there are coefficients with $|c_\alpha|\le M\prod_{k<m}r_k^{-\alpha_k}$ and $f=\sum_\alpha c_\alpha(z-a)^\alpha$ on $\Delta_r(a)$ ([[thm-power-series-expansion-in-several-complex-variables]]).

[L3] Under such a coefficient bound the sum is holomorphic on $\Delta_r(a)$, differentiates termwise with $\partial_{z_k}$, the derived series obeys a bound of the same shape on every smaller polyradius, every iterated $\partial^\beta_z$ of the sum exists, and $\partial^\beta_z(\text{sum})(a)=\beta!\,c_\beta$ ([[thm-power-series-define-holomorphic-functions-in-several-variables]]).

[L4] A holomorphic function of several variables is continuous and separately holomorphic, with $Df(a)h=\sum_{k<m}(\partial_{z_k}f(a))h_k$ ([[prop-holomorphic-functions-are-continuous-and-separately-holomorphic]]).

[L5] $\partial_{z_k}f=\tfrac12(\partial_{x_k}f-i\partial_{y_k}f)$ and $\partial_{\bar z_k}f=\tfrac12(\partial_{x_k}f+i\partial_{y_k}f)$ ([[def-wirtinger-operators-in-several-complex-variables]]).

[L6] An $\mathbb R$-linear $T$ has the unique representation $T(h)=\sum_kc'_kh_k+\sum_kd'_k\overline{h_k}$ and is $\mathbb C$-linear exactly when every $d'_k=0$; for a real totally differentiable $f$ these coefficients are $\partial_{z_k}f$ and $\partial_{\bar z_k}f$ ([[lem-complex-linear-real-differential-criterion]]).

[L7] If a property holds at $0$ and passes from $n$ to $n+1$, it holds for every natural number ([[thm-induction-principle]]).

[L8] Complex differentiability at $a$ gives real total differentiability at $a$ with the same differential ([[def-holomorphic-function-in-several-complex-variables]]).

[L9] $f$ is of class $C^n$ on an open subset of $\mathbb R^{2m}$ when every iterated coordinate partial derivative of order at most $n$ exists and is continuous ([[def-ck-and-multi-index-notation-in-several-variables]]), and $\alpha!=\prod_{k<m}\alpha_k!$ with $0!=1$ ([[def-factorial-and-falling-factorial]]).

[L10] A complex differentiable function is continuous ([[cor-complex-differentiability-implies-continuity]]).

[L11] $\Delta_r(a)$ is defined coordinatewise by $|z_k-a_k|<r_k$ ([[def-balls-and-polydiscs-in-complex-euclidean-space]]).

## Proof

**Proof technique:** direct.

1.1 By [L4] the function $f$ is continuous and separately holomorphic on $U$, so the construction inside the proof of [L1] gives, at each $a\in U$, a polydisc $\Delta_\rho(a)\subseteq U$ and then $r_k=\rho_k/2$ for which [L2] supplies coefficients with $|c_\alpha|\le M\prod_{k<m}r_k^{-\alpha_k}$ and $f=\sum_\alpha c_\alpha(z-a)^\alpha$ on $\Delta_r(a)$. [given, L1, L2, L4, L11]

1.2 By [L6] and [L8] the $\mathbb C$-linearity of $Df(a)$ makes every $\partial_{\bar z_k}f(a)$ vanish, so [L5] gives $\partial_{x_k}f=\partial_{z_k}f+\partial_{\bar z_k}f=\partial_{z_k}f$ and $\partial_{y_k}f=i(\partial_{z_k}f-\partial_{\bar z_k}f)=i\,\partial_{z_k}f$ at every point of $U$. [given, L4, L5, L6, L8]

2.1 By [L3] applied to that series, $f$ differentiates termwise on $\Delta_r(a)$, every iterated $\partial^\alpha_zf$ exists there, and $\partial^\alpha_zf(a)=\alpha!\,c_\alpha$; dividing by $\alpha!\ne0$ ([L9]) gives claim 1. [step 1.1, L3, L9]

3.1 By [L3] the derived series for $\partial_{z_k}f$ again obeys a bound of the same shape on a smaller polyradius, so its sum is holomorphic there; since that sum is $\partial_{z_k}f$ by step 2.1, each $\partial_{z_k}f$ is holomorphic on a polydisc about every point of $U$, hence holomorphic on $U$. An induction on $|\alpha|$ ([L7]) repeats this for every iterated derivative, giving claim 2. [step 1.1, step 2.1, L3, L7]

4.1 By step 1.2 each first-order real partial derivative of $f$ is $\partial_{z_k}f$ or $i\,\partial_{z_k}f$, which step 3.1 makes holomorphic and [L10] makes continuous; applying step 1.2 to those functions in turn, an induction on the order ([L7]) shows every iterated real coordinate partial derivative of $f$ exists and is continuous on $U$. Taking real and imaginary parts, which are continuous together with $f$, [L9] makes $f$ of class $C^n$ for every natural $n$, which is claim 3. [step 1.2, step 3.1, L7, L9, L10] ∎
