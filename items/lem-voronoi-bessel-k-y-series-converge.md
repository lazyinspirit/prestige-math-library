---
id: lem-voronoi-bessel-k-y-series-converge
kind: lemma
title: "The divisor-kernel Bessel series converge locally with all derivatives"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps: [def-voronoi-bessel-k-y-functions, def-integer-order-bessel-series, lem-integer-order-bessel-series-tail, def-natural-logarithm, thm-logarithm-derivative-and-integral, thm-chain-rule, thm-ratio-test, thm-weierstrass-m-test-for-complex-function-series, thm-termwise-differentiation-of-complex-power-series, thm-algebra-of-derivatives]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Aleksandar Ivić, Topics in Recent Zeta-Function Theory, Chapter 3: The Voronoï Summation Formula"
      url: "https://bibliotheque.imo.universite-paris-saclay.fr/media/filer_public/86/6d/866d1cf0-a942-4f8a-9d30-7cb3b03e1b1c/i_ivic-66.pdf"
      locator: "§1, Bessel series (3.4)–(3.9), printed pp. 47–48"
verification:
  precheck: pending
---

## Statement

For $z>0$, put $H_m:=\sum_{j=1}^{m}j^{-1}$ for $m\ge1$ and define the harmonic series
$$S_K(z):=\sum_{m=1}^{\infty}\frac{H_m(z^2/4)^m}{(m!)^2},\qquad S_Y(z):=\sum_{m=1}^{\infty}\frac{(-1)^{m+1}H_m(z^2/4)^m}{(m!)^2}$$
that occur in the preceding divisor-kernel Bessel definition. Both series, together with every fixed finite termwise derivative series, converge absolutely and uniformly on every compact interval $[a,b]\subset(0,\infty)$. Consequently the full functions $K_0,Y_0$ defined there are smooth on $(0,\infty)$, and the derivatives $K_1=-K_0'$ and $Y_1=-Y_0'$ exist.

## Statement references

[Ivić, Chapter 3, §1, Bessel series (3.4)–(3.9)](https://bibliotheque.imo.universite-paris-saclay.fr/media/filer_public/86/6d/866d1cf0-a942-4f8a-9d30-7cb3b03e1b1c/i_ivic-66.pdf)

## Facts & Assumptions

**Given:** A compact interval $[a,b]\subset(0,\infty)$ and the series defining the divisor-kernel Bessel functions.

[F1] [[def-voronoi-bessel-k-y-functions]]: $K_0=-(\log(z/2)+\gamma)I_0+S_K$ and $Y_0=(2/\pi)((\log(z/2)+\gamma)J_0+S_Y)$, where $S_K,S_Y$ have the harmonic-series coefficients in the Statement.

[F2] [[def-integer-order-bessel-series]] and [[lem-integer-order-bessel-series-tail]]: $J_0,I_0$ are the displayed even-power series and converge locally uniformly; their first two formal derivative series converge locally uniformly.

[F3] [[thm-logarithm-derivative-and-integral]] and [[thm-chain-rule]]: $\log'(z)=1/z$ for $z>0$, so the natural-logarithm factor in [F1] is smooth on the positive axis after the affine substitution $z\mapsto z/2$.

[F4] [[thm-ratio-test]]: a positive series with consecutive-term ratio eventually bounded above by a fixed number less than $1$ converges.

[F5] [[thm-weierstrass-m-test-for-complex-function-series]]: a complex-valued function series dominated in absolute value by a summable sequence converges absolutely and uniformly.

[F6] [[thm-termwise-differentiation-of-complex-power-series]] and [[thm-algebra-of-derivatives]]: a power series may be differentiated term by term strictly within its radius of convergence, and the usual product and sum rules hold.

## Proof

1.1 For every $m\ge1$, $1\le H_m\le m$. Put $B:=\max(1,b^2/4)$. The absolute value of either $m$th harmonic-series summand in [F1] on $[a,b]$ is at most $mB^m/(m!)^2$. The ratio of successive majorants is $B/(m(m+1))$, eventually at most $1/2$; [F4] gives summability and [F5] gives absolute uniform convergence of $S_K,S_Y$. [F1, F4, F5, given, algebra]

1.2 Fix an integer $q\ge1$. If $2m<q$, the $q$th derivative of $z^{2m}$ is zero; otherwise its absolute value is at most $(2m)^qz^{2m-q}$. On $[a,b]$, after division by $4^m$, this is at most $a^{-q}(2m)^qB^m$. Thus each differentiated series in [F1] is dominated by $a^{-q}m(2m)^qB^m/(m!)^2$, whose consecutive-term ratio tends to zero. By [F4]–[F5], every fixed derivative series converges absolutely and uniformly on $[a,b]$. [F1, F4, F5, given, algebra]

2.1 The harmonic coefficient series are power series in $z$ with infinite radius of convergence by the same ratio bound on every bounded disk, so [F6] licenses termwise differentiation. By [F2] their power series have infinite radius, so repeated use of [F6] makes $J_0,I_0$ smooth; the logarithm is smooth by [F3]. The product rule therefore makes the displayed $K_0,Y_0$ smooth on $(0,\infty)$. Their first derivatives exist, which makes $K_1,Y_1$ well-defined. [F1, F2, F3, F6, step 1.1, step 1.2, given] ∎
