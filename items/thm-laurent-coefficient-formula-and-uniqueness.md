---
id: thm-laurent-coefficient-formula-and-uniqueness
kind: theorem
title: "Laurent coefficients are given by contour integrals and are unique"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complex-annulus, def-convergent-complex-laurent-series, thm-laurent-expansion-annulus, prop-linearity-of-complex-line-integrals, thm-circle-integrals-of-integer-monomials, thm-uniform-limit-interchanges-complex-line-integrals]
aliases: []
landmark: true
proof_strategy: direct
verification:
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

be a convergent Laurent series on the annulus $A(a;r,R)$
([[def-complex-annulus]], [[def-convergent-complex-laurent-series]]). Then for
every $\rho$ with $r<\rho<R$ and every integer $n$,

$$c_n=\frac{1}{2\pi i}\int_{|\zeta-a|=\rho}\frac{f(\zeta)}{(\zeta-a)^{n+1}}\,d\zeta.$$

Consequently, if two Laurent series on the same annulus have the same sum, then
their coefficients agree term by term.

## Facts & Assumptions

**Given:** A Laurent expansion $f(z)=\sum_{n\in\mathbb Z}c_n(z-a)^n$ on $A(a;r,R)$ and a radius $\rho$ with $r<\rho<R$.

[L1] The Laurent series of a holomorphic function converges locally uniformly on the annulus ([[thm-laurent-expansion-annulus]]).

[L2] Uniform convergence of continuous integrands on a fixed contour permits passage of the limit through the contour integral ([[thm-uniform-limit-interchanges-complex-line-integrals]]).

[L3] Complex line integrals are linear in the integrand ([[prop-linearity-of-complex-line-integrals]]).

[L4] On the positively oriented circle $|\zeta-a|=\rho$, the integral of $(\zeta-a)^m$ is $2\pi i$ when $m=-1$ and $0$ otherwise ([[thm-circle-integrals-of-integer-monomials]]).

## Proof

**Proof technique:** direct.

1.1 On the circle $\gamma_\rho(t)=a+\rho\exp(it)$, the Laurent series for $f$ converges uniformly by [L1], so [L2] gives $$\int_{\gamma_\rho}\frac{f(\zeta)}{(\zeta-a)^{n+1}}\,d\zeta=\lim_{N\to\infty}\int_{\gamma_\rho}\sum_{k=-N}^Nc_k(\zeta-a)^{k-n-1}\,d\zeta.$$ [given, L1, L2]

2.1 By [L3] each finite integral in step 1.1 is $\sum_{k=-N}^Nc_k\int_{\gamma_\rho}(\zeta-a)^{k-n-1}\,d\zeta$, and [L4] kills every summand except $k=n$, for which the integral is $2\pi i$; therefore every finite sum equals $2\pi i\,c_n$. [step 1.1, L3, L4, algebra]

3.1 Letting $N\to\infty$ in step 2.1 proves the contour formula for $c_n$. [step 1.1, step 2.1]

4.1 If also $f(z)=\sum_{n\in\mathbb Z}d_n(z-a)^n$ on the same annulus, the same contour formula gives $d_n=(2\pi i)^{-1}\int_{\gamma_\rho}f(\zeta)(\zeta-a)^{-n-1}\,d\zeta=c_n$ for every integer $n$, so the coefficients are unique. [step 3.1] ∎
