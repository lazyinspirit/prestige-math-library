---
id: def-chi-square-law
kind: definition
title: "Chi-square laws, including zero degrees"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps:
  - cor-continuous-functions-are-borel-measurable
  - def-axiom-of-choice
  - def-dirac-measure
  - def-law-or-distribution-of-a-random-element
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
  - lem-characteristic-function-of-a-multivariate-normal-law
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Yen-Chi Chen, UW STAT 512 Lecture 8: Linear Models and Multivariate Normal Distributions"
      url: "https://faculty.washington.edu/yenchic/20A_stat512/Lec8_Linear.pdf"
    - title: "Dmitry Panchenko, MIT 18.443 Statistics for Applications, Fall 2003, Lectures 16–17"
      url: "https://mitocw.ups.edu.ec/courses/mathematics/18-443-statistics-for-applications-fall-2003/lecture-notes/18443.pdf"
---

## Definition

Assume the Axiom of Choice. For an integer $k\ge1$, let $G=(G_1,\ldots,G_k)$ have law $N_k(0,I_k)$, so its coordinates are independent $N(0,1)$ random variables. The **chi-square law with $k$ degrees of freedom**, denoted $\chi_k^2$, is the law of
$$
Q_k=\sum_{j=1}^k G_j^2=\|G\|^2.
$$
For $k=0$, define $\chi_0^2=\delta_0$, the point mass at zero. This zero-degree law records a rank-zero projection only; it is not used as a denominator in a Student or Fisher ratio. The multivariate-normal characteristic-function theorem makes the definition independent of the chosen realization of $G$.
