---
id: def-population-and-empirical-risk
kind: definition
title: "Population and empirical risk"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-supervised-learning-problem
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
justified_by:
  - lem-population-and-empirical-risk-are-measurable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Shai Shalev-Shwartz and Shai Ben-David, Understanding Machine Learning: From Theory to Algorithms, Chapter 3 §3.2.2"
      url: "https://www.inf.u-szeged.hu/~turan/ML-Konyv.pdf"
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Chapter 2 §§2.1–2.2"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
---

## Definition

For a supervised prediction problem with joint law $P$, the **population risk** of any measurable predictor $f:\mathsf X\to\mathsf A$ (in particular, every $f\in\mathcal F$) is the extended nonnegative integral
$$R_P(f):=\int_{\mathsf X\times\mathsf Y}\ell(f(x),y)\,P(d(x,y))\in[0,+\infty].$$
For an ordered sample $S=((x_1,y_1),\ldots,(x_m,y_m))$ of length $m\ge1$, the **empirical risk** or **training risk** of any such $f$ is
$$\widehat R_S(f):=\frac1m\sum_{i=1}^m\ell(f(x_i),y_i)\in[0,+\infty].$$
Neither definition assumes finite risk. The sum uses extended nonnegative arithmetic; since $m\ge1$, any summand equal to $+\infty$ makes the empirical risk $+\infty$.

## Definition references

[[def-supervised-learning-problem]]: fixes the measurable spaces, joint law, predictor class and loss.

[[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: the expectation of a nonnegative measurable function is its extended integral.
