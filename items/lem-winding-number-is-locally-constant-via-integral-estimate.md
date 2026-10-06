---
id: lem-winding-number-is-locally-constant-via-integral-estimate
kind: lemma
title: "The winding number is locally constant by an integral estimate"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-winding-number-closed-complex-contour, thm-winding-number-is-integer, prop-linearity-of-complex-line-integrals, cor-ml-estimate-for-complex-line-integrals, thm-heine-borel-rn]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 0
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §2.1-2.3 (the index of a closed curve, its local constancy, and the Cauchy integral formula)"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
      locator: "Ch. 4 §2.1-2.3; the quantitative estimate is the ML estimate applied to the difference of the two Cauchy integrands"
    - title: "J. Lebl, Complex Analysis (open text), Ch. 4 §4.1 (the index of a closed curve)"
      url: "https://www.jirka.org/ca/ca.pdf"
      locator: "§4.1, printed pp. 179-184"
---

## Statement

Let $\Gamma$ be a closed rectifiable contour of length $L$ and let $p_0$ lie off its
trace. If $d>0$ satisfies $|z-p_0|\ge d$ for all $z\in\Gamma^*$ and $|p-p_0|<d/2$, then
$\left|n(\Gamma,p)-n(\Gamma,p_0)\right|\le L|p-p_0|/(\pi d^2)$. In particular the
winding number is locally constant on the complement of the trace.

## Facts & Assumptions

**Given:** A closed rectifiable contour $\Gamma$ of length $L$, a point $p_0$ off its trace, and a number $d>0$ with $|z-p_0|\ge d$ for all $z\in\Gamma^*$.

[F1] For a closed complex contour $\gamma$ and a point $p$ off its trace, $n(\gamma,p)=\frac{1}{2\pi i}\int_\gamma\frac{dz}{z-p}$. ([[def-winding-number-closed-complex-contour]]).

[F2] For continuous $f,g$ on the trace of a rectifiable contour $\gamma$ and $\alpha,\beta\in\mathbb C$, $\int_\gamma(\alpha f+\beta g)\,dz=\alpha\int_\gamma f\,dz+\beta\int_\gamma g\,dz$. ([[prop-linearity-of-complex-line-integrals]]).

[F3] If $|f(z)|\le M$ on the trace of a rectifiable contour $\gamma$ with $M\ge0$, then $\left|\int_\gamma f(z)\,dz\right|\le M L(\gamma)$. ([[cor-ml-estimate-for-complex-line-integrals]]).

[F4] A closed box in $\mathbb{R}^n$ is a compact subset of Euclidean space. ([[thm-heine-borel-rn]]).

[F5] For a closed complex contour $\gamma$ and a point $p$ off its trace, $n(\gamma,p)\in\mathbb Z$. ([[thm-winding-number-is-integer]]).

## Proof

**Proof technique:** direct.

1.1 Let $p$ satisfy $|p-p_0|<d/2$; then $|z-p|\ge|z-p_0|-|p-p_0|>d-d/2=d/2>0$ for every $z\in\Gamma^*$, so $p$ also lies off the trace and both winding numbers are defined by the contour integral of the corresponding $1/(z-p)$. [given, F1]

2.1 Subtracting the two integrands gives $\frac{1}{z-p}-\frac{1}{z-p_0}=\frac{p-p_0}{(z-p)(z-p_0)}$ for $z\in\Gamma^*$, so by linearity of complex line integrals $n(\Gamma,p)-n(\Gamma,p_0)=\frac{1}{2\pi i}\int_\Gamma\frac{p-p_0}{(z-p)(z-p_0)}\,dz$. [F1, F2, step 1.1]

2.2 On the trace $|z-p|\ge d/2$ and $|z-p_0|\ge d$, so the integrand has modulus at most $2|p-p_0|/d^2$; the ML estimate with the length $L$ of $\Gamma$ and the factor $(2\pi i)^{-1}$ give $|n(\Gamma,p)-n(\Gamma,p_0)|\le L|p-p_0|/(\pi d^2)$, the displayed estimate. [F3, step 1.1]

3.1 For the local-constancy assertion fix $p_0$ off the trace; if $L=0$ the estimate of step 2.2 bounds the defining integral by $0$ for every point off the trace, so the winding number vanishes near $p_0$; if $L>0$, then for each parameter $t$ continuity of the rectifiable contour supplies a relative interval $J$ containing $t$ on which $|\Gamma(s)-p_0|>|\Gamma(t)-p_0|/2$, the family of all such pairs $(t,J)$ covers the compact parameter interval, so finitely many cover it by [F4], and the minimum of the finitely many positive numbers $|\Gamma(t_i)-p_0|/2$ is a $d>0$ with $|z-p_0|\ge d$ on $\Gamma^*$. [F4, step 2.2]

4.1 With that $d$ the estimate of step 2.2 gives $|n(\Gamma,p)-n(\Gamma,p_0)|\le L|p-p_0|/(\pi d^2)$, which is less than $1$ whenever $|p-p_0|<\min(d/2,\pi d^2/L)$; the difference of the two winding numbers is an integer by [F5], so it vanishes for every $p$ in that relative neighbourhood of $p_0$, and since $p_0$ was an arbitrary point off the trace the winding number is locally constant on the complement of the trace; no general Jordan theorem or choice principle is used. [F5, step 3.1] ∎
