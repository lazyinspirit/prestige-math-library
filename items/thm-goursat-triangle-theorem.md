---
id: thm-goursat-triangle-theorem
kind: theorem
title: "Goursat's triangle theorem: a holomorphic function integrates to zero around every triangle contained in its domain"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-oriented-complex-triangle-and-boundary, lem-goursat-nested-triangle-selection, cor-ml-estimate-for-complex-line-integrals, cor-closed-contour-integral-of-a-derivative-is-zero, thm-complex-polynomials-and-rational-functions-are-holomorphic, cor-complex-differentiability-implies-continuity, def-complex-differentiability-holomorphic-and-entire, prop-linearity-of-complex-line-integrals]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 2, Theorem 1.1"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb C$ be open and let $f:U\to\mathbb C$ be holomorphic. If the filled triangle $T=\Delta[a,b,c]$ of [[def-oriented-complex-triangle-and-boundary]] is contained in $U$, then

$$\int_{\partial T}f(z)\,dz=0.$$

No continuity of $f'$ is assumed, and repeated or collinear vertices are allowed.

## Facts & Assumptions

**Given:** An open set $U$, a holomorphic function $f:U\to\mathbb C$, and a filled triangle $T_0\subseteq U$.

[L1] Nested midpoint selection supplies triangles $T_n$, a common point $z_*$, the retention estimate $|I_f(T_n)|\ge4^{-n}|I_f(T_0)|$, and the formulas $P(T_n)=2^{-n}P(T_0)$ and $\operatorname{diam}(T_n)=2^{-n}\operatorname{diam}(T_0)$ ([[lem-goursat-nested-triangle-selection]]).

[L2] If $P$ is holomorphic on an open set, $P'$ is continuous there, and $\gamma$ is a closed rectifiable contour, then $\int_\gamma P'(z)\,dz=0$ ([[cor-closed-contour-integral-of-a-derivative-is-zero]]).

[L3] Complex polynomials are entire and obey the usual derivative rule ([[thm-complex-polynomials-and-rational-functions-are-holomorphic]]).

[L4] The ML estimate bounds the modulus of a contour integral by a bound for the integrand on the trace times the contour length ([[cor-ml-estimate-for-complex-line-integrals]]).

[L5] A holomorphic function is continuous ([[cor-complex-differentiability-implies-continuity]]).

[L6] Complex line integrals are linear in the integrand ([[prop-linearity-of-complex-line-integrals]]).

[L7] The complex derivative at $a$ is the limit of $(f(a+h)-f(a))/h$ as nonzero increments $h$ tend to zero within the open domain ([[def-complex-differentiability-holomorphic-and-entire]]).

## Proof

**Proof technique:** direct.

1.1 By [L5], $f$ is continuous, so [L1] gives selected triangles $T_n$ with common point $z_*$ and all the stated retention and scaling formulas. [L1, L5]

1.2 By [L7], differentiability at $z_*$ gives $f(w)=f(z_*)+f'(z_*)(w-z_*)+(w-z_*)\eta(w)$, where $\eta(w)\to0$ as $w\to z_*$; set $\eta(z_*)=0$. [given, L7]

1.3 Put $P(w)=f(z_*)w+\tfrac12f'(z_*)(w-z_*)^2$. By [L3], $P$ is entire and $P'(w)=f(z_*)+f'(z_*)(w-z_*)$ is a polynomial, hence continuous. Every $\partial T_n$ is a closed rectifiable contour, so all hypotheses of [L2] hold and $\int_{\partial T_n}P'(w)\,dw=0$. [L2, L3]

2.1 Given $\varepsilon>0$, take $n$ so large that $|\eta(w)|<\varepsilon$ whenever $|w-z_*|\le\operatorname{diam}(T_n)$; this is possible by step 1.2 and the diameter limit in [L1]. Since $z_*\in T_n$, [L4], [L6], and step 1.3 give $|I_f(T_n)|\le\varepsilon\operatorname{diam}(T_n)P(T_n)$. [step 1.1, step 1.2, step 1.3, L1, L4, L6]

3.1 The retention and scaling formulas yield $|I_f(T_0)|\le4^n|I_f(T_n)|\le\varepsilon\operatorname{diam}(T_0)P(T_0)$. Because this holds for every $\varepsilon>0$, $I_f(T_0)=0$; the argument never divides by the initial integral, diameter, or perimeter, so it also covers zero integrals and degenerate triangles. [step 2.1, L1, algebra] ∎
