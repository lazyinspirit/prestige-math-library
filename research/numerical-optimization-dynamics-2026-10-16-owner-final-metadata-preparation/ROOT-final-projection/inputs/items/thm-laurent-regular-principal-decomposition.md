---
id: thm-laurent-regular-principal-decomposition
kind: theorem
title: "Laurent series split into regular and principal parts"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-convergent-complex-laurent-series, def-principal-part-laurent-series, thm-laurent-expansion-annulus, thm-laurent-coefficient-formula-and-uniqueness]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 5 §1.3"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "Jeremy Orloff, MIT 18.04 Topic 7: Taylor and Laurent Series"
      url: "https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/dff6a0c70eefb1e23bb87f8524361801_MIT18_04S18_topic7.pdf"
pipeline_run: null
---

## Statement

Let

$$f(z)=\sum_{n\in\mathbb Z}c_n(z-a)^n$$

be a convergent Laurent series on an annulus. Then:

1. the regular part $\sum_{n\ge0}c_n(z-a)^n$ converges locally uniformly on
   every smaller disc $|z-a|<R_0<R$, and on all of $\mathbb C$ when $R=\infty$;
2. the principal part $\sum_{m\ge1}c_{-m}(z-a)^{-m}$
   ([[def-principal-part-laurent-series]]) converges locally uniformly on every
   set $|z-a|>\rho>r$;
3. on the original annulus, $f$ is the sum of these two subseries.

Moreover, the regular and principal parts are uniquely determined by the Laurent
coefficients.

## Facts & Assumptions

**Given:** A Laurent expansion $f(z)=\sum_{n\in\mathbb Z}c_n(z-a)^n$ on $A(a;r,R)$.

[L1] Laurent expansions exist on annuli and converge locally uniformly there ([[thm-laurent-expansion-annulus]]).

[L2] Each Laurent coefficient is uniquely determined by the function on the annulus ([[thm-laurent-coefficient-formula-and-uniqueness]]).

## Proof

**Proof technique:** direct.

1.1 Let $0<R_0<R$ and choose $\sigma$ with $R_0<\sigma<R$; the coefficient formula gives $|c_n|\le M_\sigma/\sigma^n$ for $n\ge0$, where $M_\sigma=\max_{|\zeta-a|=\sigma}|f(\zeta)|$, so $|c_n(z-a)^n|\le M_\sigma(R_0/\sigma)^n$ for $|z-a|\le R_0$. [L2, algebra]

1.2 Let $\rho>r$ and choose $\rho_0$ with $r<\rho_0<\rho$; the coefficient formula gives $|c_{-m}|\le M_{\rho_0}\rho_0^m$ for $m\ge1$, where $M_{\rho_0}=\max_{|\zeta-a|=\rho_0}|f(\zeta)|$, so $|c_{-m}(z-a)^{-m}|\le M_{\rho_0}(\rho_0/\rho)^m$ for $|z-a|\ge\rho$. [L2, algebra]

1.3 On the original annulus, [L1] gives that the Laurent series converges to $f$, and by definition that series is the sum of its nonnegative-power and negative-power subseries. So $f=f_{\mathrm{reg}}+f_{\mathrm{prin}}$ there. [given, L1]

1.4 Uniqueness of the Laurent coefficients from [L2] makes both subseries unique term by term. [L2]

2.1 The geometric majorant in step 1.1 converges, so the regular part converges uniformly on $|z-a|\le R_0$; since $R_0<R$ was arbitrary, the convergence is locally uniform on the disc of radius $R$, and when $R=\infty$ it is locally uniform on every bounded disc. [step 1.1]

2.2 The geometric majorant in step 1.2 converges, so the principal part converges uniformly on $|z-a|\ge\rho$; since $\rho>r$ was arbitrary, the convergence is locally uniform on the exterior region $|z-a|>r$. [step 1.2]

3.1 Steps 2.1, 2.2, 1.3, and 1.4 are exactly the claimed decomposition. [step 2.1, step 2.2, step 1.3, step 1.4] ∎
