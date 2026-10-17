---
id: def-caputo-derivative-and-fractional-integral
kind: definition
title: Fractional integral and Caputo derivative
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-real-gamma-function-by-the-euler-integral
  - def-absolutely-continuous-function
  - def-l-one-of-a-measure
  - def-indefinite-lebesgue-integral-on-a-compact-interval
  - thm-absolutely-continuous-functions-have-integrable-derivatives
  - thm-real-gamma-functional-equation
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - lem-fractional-integral-kernel-power-integral
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Yumin Lin and Chuanju Xu, Finite difference/spectral approximations for the time-fractional diffusion equation, Journal of Computational Physics 225 (2007), §2
      url: https://sem.xmu.edu.cn/papers/jcp07.pdf
    - title: Bangti Jin, Raytcho Lazarov, and Zhi Zhou, An Analysis of the L1 Scheme for the Subdiffusion Equation with Nonsmooth Data, IMA Journal of Numerical Analysis, §1
      url: https://discovery.ucl.ac.uk/1459965/1/fracL1scheme_IMA_rev.pdf
    - title: Jeffrey R. L. Webb, Initial Value Problems for Caputo Fractional Equations with Singular Nonlinearities, Electronic Journal of Differential Equations 2019(117), §4
      url: https://ejde.math.txstate.edu/Volumes/2019/117/webb.pdf
---

## Definition

Let $T>0$ and $\beta>0$. For $g\in L^1(0,T)$, its left fractional
integral of order $\beta$ is, for almost every $t\in(0,T)$,

$$I^\beta g(t):=\frac{1}{\Gamma(\beta)}\int_0^t(t-s)^{\beta-1}g(s)\,ds.$$

The definition uses Lebesgue integration, with
[[def-indefinite-lebesgue-integral-on-a-compact-interval]] and
[[def-l-one-of-a-measure]]. The kernel is integrable and
$$\int_0^t(t-s)^{\beta-1}\,ds=\frac{t^\beta}{\beta}$$
by [[lem-fractional-integral-kernel-power-integral]]. Tonelli's theorem
[[thm-tonelli-theorem-for-sigma-finite-product-spaces]] therefore gives
$$\int_0^T\int_0^t(t-s)^{\beta-1}|g(s)|\,ds\,dt =\int_0^T|g(s)|\int_s^T(t-s)^{\beta-1}dt\,ds \le \frac{T^\beta}{\beta}\|g\|_{L^1(0,T)}<\infty,$$
so the defining integral is finite for almost every $t$. For continuous $g$,
it is finite at every $t\in[0,T]$ and
$$|I^\beta g(t)|\le \frac{t^\beta}{\beta\Gamma(\beta)}\|g\|_\infty =\frac{t^\beta}{\Gamma(\beta+1)}\|g\|_\infty,$$
using [[thm-real-gamma-functional-equation]].

For $0<\alpha<1$ and an absolutely continuous function
$u:[0,T]\to\mathbb R$, its Caputo derivative of order $\alpha$ is the
almost-everywhere defined function

$$D_C^\alpha u:=I^{1-\alpha}u'=\frac{1}{\Gamma(1-\alpha)}\int_0^t(t-s)^{-\alpha}u'(s)\,ds.$$

Here absolute continuity is as in
[[def-absolutely-continuous-function]], so $u'\in L^1(0,T)$ almost
everywhere by [[thm-absolutely-continuous-functions-have-integrable-derivatives]].
The Gamma factors are the positive real Euler Gamma function
[[def-real-gamma-function-by-the-euler-integral]].
