---
id: def-discrete-memoryless-channel-information-density
kind: definition
title: "Finite DMC information density"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps: [def-discrete-memoryless-channel, def-discrete-memoryless-channel-information-capacity, def-finite-stochastic-kernel, def-finite-probability-vector, def-it-finite-mutual-information, def-natural-logarithm]
justified_by: []
aliases: []
axiom_use: "No choice axiom is used; the definition is on finite probability vectors."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 19 §§19.1–19.2"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf"
    - title: "Robert Gallager, Principles of Digital Communication I, Chapter 8 §8.7.4, MIT OpenCourseWare"
      url: "https://ocw.mit.edu/courses/6-450-principles-of-digital-communications-i-fall-2006/f6c75b427b022503f5c605db7de4d46f_book_8.pdf"
---

## Definition

Given an input law $P_X$, let $Q_{P_X}=P_XW$ be its output law. The **information density** is
$$\imath_{P_X}(x;y):=\ln\frac{W(y\mid x)}{Q_{P_X}(y)}$$
when $P_X(x)W(y\mid x)>0$, and is $-\infty$ otherwise. For block sequences define $\imath_{P_X}(x^n;y^n):=\sum_{i=1}^n\imath_{P_X}(x_i;y_i)$, with any sum containing $-\infty$ equal to $-\infty$. On the support of the induced joint law, both numerator and denominator are positive, and the value is finite.
