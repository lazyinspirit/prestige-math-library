---
id: def-principal-part-laurent-series
kind: definition
title: "The principal part of a Laurent series"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-convergent-complex-laurent-series]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 5 §§1.1-1.3"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "Jeremy Orloff, MIT 18.04 Topic 7: Taylor and Laurent Series"
      url: "https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/dff6a0c70eefb1e23bb87f8524361801_MIT18_04S18_topic7.pdf"
pipeline_run: null
---

## Definition

Let

$$\sum_{n\in\mathbb Z}c_n(z-a)^n$$

be a convergent Laurent series on an annulus ([[def-convergent-complex-laurent-series]]).
Its **principal part** is the negative-power subseries

$$\sum_{m\ge1}c_{-m}(z-a)^{-m}.$$

Its **regular part** is the nonnegative-power subseries

$$\sum_{n\ge0}c_n(z-a)^n.$$

## Remarks

When the annulus is a punctured disc about $a$, the principal part measures what
fails to extend holomorphically across $a$: it vanishes for a removable
singularity, is finite and nonzero for a pole, and has infinitely many nonzero
terms for an essential singularity. On an annulus with positive inner radius,
$a$ is outside the domain and no singularity classification at $a$ is implied.
