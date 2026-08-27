---
id: rem-cauchy-principal-value-dictionary
kind: remark
title: "This page keeps Cauchy principal values distinct from genuine improper convergence"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-cauchy-principal-value,
       rem-improper-integral-conventions-and-scope]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §5.3"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Remark

[[def-cauchy-principal-value]] and
[[rem-improper-integral-conventions-and-scope]] already distinguish two notions:
an improper integral on the real line exists only when the one-sided tails or
endpoint pieces converge separately, while a principal value couples symmetric
truncations and can exist even when the separate one-sided limits diverge.

This page keeps that distinction rigid. A contour with a real-axis indentation
usually computes a principal value first. It gives an ordinary improper value
only when the real integral has already been shown to converge by an independent
tail or endpoint argument.
