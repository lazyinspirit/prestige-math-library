---
id: def-linear-estimability-in-fixed-design
kind: definition
title: "Linearly estimable contrasts in fixed-design regression"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-fixed-design-linear-regression-model
  - def-estimand-on-a-statistical-model
  - def-statistic-and-estimator
  - lem-linear-contrast-statistics-are-borel-measurable
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Statistics: Lecture Three — Linear Models"
      url: "https://www.stat.berkeley.edu/~rice/Stat230A/statiii.pdf"
    - title: "Statistics for Applications, Section 15: Multiple Linear Regression"
      url: "https://ocw.mit.edu/courses/18-443-statistics-for-applications-fall-2006/dbc17cbfdac61daaff75056992d0af9a_section15.pdf"
---

## Definition

In a fixed-design first-moment regression model with parameter
$\beta\in\mathbb R^p$, a **linear contrast** is the estimand
$$\psi_c(\beta):=c^T\beta,\qquad c\in\mathbb R^p.$$
The contrast is **linearly estimable** if there is a fixed vector
$a\in\mathbb R^n$ such that the statistic $a^TY$ is unbiased for $\psi_c$ at
every parameter value:
$$\mathbb E_\beta[a^TY]=c^T\beta\qquad\text{for every }\beta\in\mathbb R^p.$$
The vector $a$ may depend on the fixed design and on $c$, but not on the
observed response or on the unknown parameter. The map $y\mapsto a^Ty$ is a
measurable statistic by
[[lem-linear-contrast-statistics-are-borel-measurable]] and
[[def-statistic-and-estimator]].
