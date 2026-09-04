---
id: cor-euler-totient-dirichlet-series
kind: corollary
title: "The Dirichlet series of Euler's totient is zeta of s minus 1 divided by zeta of s on Re s greater than 2"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-unit-group-modulo-n-and-euler-totient, thm-dirichlet-series-multiplication-convolution, cor-classical-mobius-inversion, thm-sum-of-totients-over-divisors, def-divisor-power-sum-functions, cor-mobius-dirichlet-series-reciprocal-zeta, thm-p-series-rational]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Chapter 2 examples"
      url: "https://kskedlaya.org/ant/part-1-3.html"
pipeline_run: null
---

## Statement

For $\Re s>2$,

$$\sum_{n \ge 1} \varphi(n)n^{-s} = \frac{\zeta(s-1)}{\zeta(s)},$$

where $\zeta(s)=\sum_{n \ge 1} n^{-s}$.

## Facts & Assumptions

**Given:** A complex number $s$ with $\Re s>2$.

[L1] Euler's totient satisfies $\sum_{d \mid n}\varphi(d)=n$, where $n=\operatorname{id}_1(n)$ ([[thm-sum-of-totients-over-divisors]], [[def-divisor-power-sum-functions]], [[def-unit-group-modulo-n-and-euler-totient]]).

[L2] Classical Möbius inversion and Dirichlet-series multiplication convert that identity into convolution identities ([[cor-classical-mobius-inversion]], [[thm-dirichlet-series-multiplication-convolution]]).

[L3] The Möbius Dirichlet series is $1/\zeta(s)$ ([[cor-mobius-dirichlet-series-reciprocal-zeta]]).

[L4] For every rational $q>1$, the series $\sum_{n \ge 1} n^{-q}$ converges ([[thm-p-series-rational]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and Möbius inversion from [L2], $$\varphi = \mu * \operatorname{id}_1.$$ [L1, L2, given, algebra]

2.1 Write $\sigma := \Re s > 2$ and choose a rational $q$ with $1 < q < \sigma-1$. Since $\mu(n) \in \{-1,0,1\}$, one has $$|\mu(n)n^{-s}| \le n^{-\sigma} \le n^{-q},\qquad |n^{1-s}| = n^{1-\sigma} \le n^{-q}.$$ By [L4], both Dirichlet series in the next step converge absolutely. [L4, step 1.1, given, choose, algebra]

3.1 Therefore [[thm-dirichlet-series-multiplication-convolution]] gives $$\sum_{n \ge 1} \varphi(n)n^{-s} = \left(\sum_{n \ge 1} \mu(n)n^{-s}\right)\left(\sum_{n \ge 1} n^{1-s}\right).$$ [step 1.1, step 2.1, algebra]

4.1 The first factor is $1/\zeta(s)$ by [L3], and the second is $\zeta(s-1)$ by definition. Hence the product is $\zeta(s-1)/\zeta(s)$. [L3, step 3.1] ∎
