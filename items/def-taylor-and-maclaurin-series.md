---
id: def-taylor-and-maclaurin-series
kind: definition
title: "Taylor and Maclaurin series"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-higher-derivatives-and-smoothness, def-taylor-polynomial-and-remainder, def-real-power-series-and-radius-of-convergence, def-factorial-and-falling-factorial]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "W. F. Trench, Introduction to Real Analysis, §4.5"
      url: "https://digitalcommons.trinity.edu/mono/7/"
    - title: "J. K. Hunter, An Introduction to Real Analysis, §§10.7.1–10.7.2"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "MIT OpenCourseWare 18.100C Real Analysis, Lecture 23"
      url: "https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/381efa3847b9801fc7a7bfe520018bd7_MIT18_100CF12_l23sum.pdf"
pipeline_run: null
---

## Definition

Let $I\subseteq\mathbb R$ be an open interval, let $f\in C^\infty(I)$
([[def-higher-derivatives-and-smoothness]]), and let $a\in I$. The **Taylor
series of $f$ at $a$** is the real power series

$$\sum_{n=0}^{\infty}\frac{f^{(n)}(a)}{n!}(x-a)^n.$$

Its $n$th partial sum is the Taylor polynomial $T_{n,a}f$
([[def-taylor-polynomial-and-remainder]]). When $a=0$, the series is called
the **Maclaurin series of $f$**. This definition names a power series
([[def-real-power-series-and-radius-of-convergence]]); by itself it asserts
neither that the series converges nor that its sum equals $f$.
