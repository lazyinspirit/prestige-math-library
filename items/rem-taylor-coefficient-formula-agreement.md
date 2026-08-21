---
id: rem-taylor-coefficient-formula-agreement
kind: remark
title: "Agreement of the power-series and Cauchy-integral formulas for Taylor coefficients"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-taylor-series-holomorphic-function, thm-taylor-expansion-holomorphic-function, cor-complex-power-series-coefficient-formula, thm-cauchy-integral-formula-higher-derivatives]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Lars Ahlfors, Complex Analysis, 3rd ed., Ch. 5 §1.2"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "Matthias Weber, Complex Analysis, §2.2"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "B. V. Shabat, Introduction to Complex Analysis, Ch. 2"
      url: "https://math.stanford.edu/~ryzhik/shabat-all.pdf"
pipeline_run: null
---

## Remark

For the Taylor series of [[def-taylor-series-holomorphic-function]], the coefficient of $(z-a)^n$ is $f^{(n)}(a)/n!$. This agrees with the coefficient formula for an arbitrary convergent complex power-series representation in [[cor-complex-power-series-coefficient-formula]]. If $0<r$ is small enough that the circle $|\zeta-a|=r$ and its interior lie in the holomorphy domain, [[thm-cauchy-integral-formula-higher-derivatives]] gives the same coefficient as

$$\frac{f^{(n)}(a)}{n!}=\frac{1}{2\pi i}\int_{|\zeta-a|=r}\frac{f(\zeta)}{(\zeta-a)^{n+1}}\,d\zeta.$$

Thus the derivative and contour formulas name the coefficients of the expansion established by [[thm-taylor-expansion-holomorphic-function]]; neither is an additional choice of series.
