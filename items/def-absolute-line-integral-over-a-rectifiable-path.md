---
id: def-absolute-line-integral-over-a-rectifiable-path
kind: definition
title: "The absolute line integral over a rectifiable path using its arc-length function"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complex-contours-reversal-concatenation-and-closedness, def-arc-length-function, def-riemann-stieltjes-sum-and-integral]
justified_by: [thm-existence-of-complex-line-integrals-on-rectifiable-paths]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
sources:
  scraped: []
  references:
    - title: "L. Ahlfors, Complex Analysis, 3rd ed., Ch. 4"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Definition

Let $\gamma:[a,b]\to\mathbb C$ be a rectifiable contour in the sense of [[def-complex-contours-reversal-concatenation-and-closedness]] and let $f$ be continuous on its trace. With $s_\gamma$ the arc-length function of [[def-arc-length-function]], define the **absolute line integral** by
$$\int_\gamma |f(z)|\,|dz|:=\int_a^b |f(\gamma(t))|\,ds_\gamma(t),$$
using [[def-riemann-stieltjes-sum-and-integral]]. Its existence is proved in [[thm-existence-of-complex-line-integrals-on-rectifiable-paths]]. On a singleton interval it is $0$.
