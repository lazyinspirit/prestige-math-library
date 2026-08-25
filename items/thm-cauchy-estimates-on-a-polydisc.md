---
id: thm-cauchy-estimates-on-a-polydisc
kind: theorem
title: "Cauchy estimates for mixed derivatives on a polydisc"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-power-series-expansion-in-several-complex-variables, cor-uniqueness-of-multivariable-power-series-coefficients, cor-holomorphic-functions-in-several-variables-are-smooth, prop-holomorphic-functions-are-continuous-and-separately-holomorphic, cor-ml-estimate-for-complex-line-integrals, cor-cauchy-inequalities, def-balls-and-polydiscs-in-complex-euclidean-space, def-complex-integer-powers, def-factorial-and-falling-factorial, thm-circle-circumference-diameter-ratio-is-pi, def-ck-and-multi-index-notation-in-several-variables, rem-complex-euclidean-space-dictionary]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §1.2"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "H. P. Boas, Lecture Notes on Multidimensional Complex Analysis, Ch. 2"
      url: "https://haroldpboas.gitlab.io/courses/650-2019c/notes.pdf"
pipeline_run: null
---

## Statement

Let $m\ge1$, let $a\in\mathbb C^m$, let $\rho$ be a polyradius and let
$f:\Delta_\rho(a)\to\mathbb C$ be holomorphic. Let $r$ be a polyradius with
$r_k<\rho_k$ for every $k<m$, and put $M=\sup_{\Gamma_r(a)}|f|$, the supremum
over the **distinguished boundary** only. Then for every multi-index $\alpha$

$$\bigl|\partial^\alpha_zf(a)\bigr|\ \le\ \alpha!\,M\prod_{k<m}r_k^{-\alpha_k}.$$

The bound uses no value of $f$ outside $\Gamma_r(a)$, which for $m\ge2$ is a
proper subset of the topological boundary of the closed polydisc.

## Facts & Assumptions

**Given:** A holomorphic $f$ on $\Delta_\rho(a)$ and a polyradius $r$ with $r_k<\rho_k$; $\mathbb C^m$ is read through [[rem-complex-euclidean-space-dictionary]].

[L1] For $f$ continuous and separately holomorphic on $\Delta_\rho(a)$ and $r_k<\rho_k$, the iterated-integral coefficients satisfy $|c_\alpha|\le M\prod_{k<m}r_k^{-\alpha_k}$ with $M=\sup_{\Gamma_r(a)}|f|$, and $f=\sum_\alpha c_\alpha(z-a)^\alpha$ on $\Delta_r(a)$ ([[thm-power-series-expansion-in-several-complex-variables]]).

[L2] Every iterated complex partial derivative of a holomorphic function exists and is holomorphic ([[cor-holomorphic-functions-in-several-variables-are-smooth]]). For coefficient families satisfying the geometric polyradius bound, the power-series representation about a fixed centre is unique and its coefficients are $c_\alpha=\partial^\alpha_zf(a)/\alpha!$ ([[cor-uniqueness-of-multivariable-power-series-coefficients]]).

[L3] A holomorphic function of several variables is continuous and separately holomorphic ([[prop-holomorphic-functions-are-continuous-and-separately-holomorphic]]).

[L4] If $|g|\le K$ on the trace of a rectifiable contour $\gamma$, then $|\int_\gamma g\,dz|\le K\,L(\gamma)$ ([[cor-ml-estimate-for-complex-line-integrals]]), and the once-traversed circle of radius $r'>0$ has length $2\pi r'$ ([[thm-circle-circumference-diameter-ratio-is-pi]]).

[L5] For $f$ holomorphic on $D(a',R)$, $0<r'<R$ and $|f|\le K$ on the circle $|\zeta-a'|=r'$, one has $|f^{(n)}(a')|\le n!K/r'^n$ ([[cor-cauchy-inequalities]]).

[L6] $\Gamma_r(a)$ is the set of points with $|z_k-a_k|=r_k$ for every $k<m$, and for $m\ge2$ it is a proper subset of the topological boundary of $\overline\Delta_r(a)$ ([[def-balls-and-polydiscs-in-complex-euclidean-space]]).

[L7] $\alpha!=\prod_{k<m}\alpha_k!$ ([[def-ck-and-multi-index-notation-in-several-variables]]) and $\alpha!\ne0$ ([[def-factorial-and-falling-factorial]]); negative integer powers need a nonzero base ([[def-complex-integer-powers]]).

## Proof

**Proof technique:** direct.

1.1 By [L3] the function $f$ is continuous and separately holomorphic on $\Delta_\rho(a)$, so [L1] applies with the given $r$ and produces coefficients $c_\alpha$ with $|c_\alpha|\le M\prod_{k<m}r_k^{-\alpha_k}$, the constant $M$ being the supremum of $|f|$ on $\Gamma_r(a)$ alone. That bound is what the $m$-fold application of the ML estimate of [L4] on the $m$ circles of radius $r_k$ produces, one factor $2\pi r_k$ cancelling each factor $(2\pi)^{-1}$, and it specialises at $m=1$ to the published one-variable inequality of [L5]. [given, L1, L3, L4, L5, L6]

2.1 By [L2] those same coefficients are $c_\alpha=\partial^\alpha_zf(a)/\alpha!$, so multiplying the bound of step 1.1 by $\alpha!$ gives $|\partial^\alpha_zf(a)|\le\alpha!\,M\prod_{k<m}r_k^{-\alpha_k}$, as claimed; $\alpha!\ne0$ by [L7] makes the division legitimate. [step 1.1, L2, L7]

3.1 No value of $f$ off $\Gamma_r(a)$ entered: the constant $M$ of step 1.1 is a supremum over that set, and by [L6] it is for $m\ge2$ a proper subset of the topological boundary of the closed polydisc. [step 1.1, step 2.1, L6] ∎
