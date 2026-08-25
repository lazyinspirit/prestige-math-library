---
id: cor-uniqueness-of-multivariable-power-series-coefficients
kind: corollary
title: "The coefficients of a convergent multi-indexed power series are its derivative coefficients, hence unique"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-power-series-define-holomorphic-functions-in-several-variables, cor-holomorphic-functions-in-several-variables-are-smooth, def-multivariable-power-series, def-ck-and-multi-index-notation-in-several-variables, def-factorial-and-falling-factorial, def-balls-and-polydiscs-in-complex-euclidean-space]
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
pipeline_run: null
---

## Statement

Let $m\ge1$, $a\in\mathbb C^m$ and let $r$ be a polyradius. Suppose
$c,c':\mathbb N^m\to\mathbb C$ both satisfy a bound
$|c_\alpha|\le M\prod_{k<m}r_k^{-\alpha_k}$ and
$|c'_\alpha|\le M'\prod_{k<m}r_k^{-\alpha_k}$, and suppose

$$\sum_\alpha c_\alpha(z-a)^\alpha=\sum_\alpha c'_\alpha(z-a)^\alpha \qquad\text{for every }z\in\Delta_r(a).$$

Then $c_\alpha=c'_\alpha$ for every multi-index $\alpha$. In particular a
function has at most one such power-series representation about a given centre,
and its coefficients are $\partial^\alpha_zf(a)/\alpha!$.

## Facts & Assumptions

**Given:** Coefficient families $c,c'$ with the stated bounds whose sums agree on $\Delta_r(a)$.

[L1] Under a bound $|c_\alpha|\le M\prod_{k<m}r_k^{-\alpha_k}$ the series converges absolutely on $\Delta_r(a)$, its sum is holomorphic there, every iterated complex partial derivative of the sum exists, and $\partial^\alpha_z(\text{sum})(a)=\alpha!\,c_\alpha$ ([[thm-power-series-define-holomorphic-functions-in-several-variables]]).

[L2] A holomorphic function is locally the sum of an absolutely convergent power series whose coefficients are $\partial^\alpha_zf(a)/\alpha!$, and every iterated complex partial derivative is holomorphic ([[cor-holomorphic-functions-in-several-variables-are-smooth]]).

[L3] Multi-indexed power series and their absolute convergence are those of [[def-multivariable-power-series]]; $\alpha!=\prod_{k<m}\alpha_k!$ ([[def-ck-and-multi-index-notation-in-several-variables]]) and $\alpha!\ne0$ ([[def-factorial-and-falling-factorial]]).

[L4] $\Delta_r(a)$ is defined coordinatewise by $|z_k-a_k|<r_k$ ([[def-balls-and-polydiscs-in-complex-euclidean-space]]).

## Proof

**Proof technique:** direct.

1.1 Let $f$ be the common sum on $\Delta_r(a)$. By [L1] applied to $c$, the function $f$ is holomorphic on $\Delta_r(a)$, every $\partial^\alpha_zf$ exists there, and $\partial^\alpha_zf(a)=\alpha!\,c_\alpha$. [given, L1, L3, L4]

1.2 By [L1] applied to $c'$, the same function $f$ satisfies $\partial^\alpha_zf(a)=\alpha!\,c'_\alpha$; the derivatives are those of the single function $f$ and so do not depend on which series it is written as. [given, L1, L3, L4]

2.1 Comparing steps 1.1 and 1.2 gives $\alpha!\,c_\alpha=\alpha!\,c'_\alpha$, and $\alpha!\ne0$ by [L3], so $c_\alpha=c'_\alpha$ for every $\alpha$. [step 1.1, step 1.2, L3]

3.1 Consequently a holomorphic $f$ has at most one power-series representation about $a$ subject to such a bound, and by [L2] the one it has is the derivative series $\sum_\alpha\partial^\alpha_zf(a)(z-a)^\alpha/\alpha!$; this is what licenses the definite article in "the coefficients of $f$ at $a$". [step 2.1, L2] ∎
