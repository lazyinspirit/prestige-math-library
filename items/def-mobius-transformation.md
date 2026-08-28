---
id: def-mobius-transformation
kind: definition
title: "Möbius transformations of the Riemann sphere"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [rem-riemann-sphere-one-point-compactification]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 3 §§2.2-3.5"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "Matthias Weber, Complex Analysis, Ch. 1 §§1.3-1.4"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 8 §§1-2"
      url: "https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis"
pipeline_run: frontier-22
---

## Definition

For complex numbers $a,b,c,d$ with $ad-bc\neq0$, the associated
**Möbius transformation** is the map $M:\widehat{\mathbb C}\to\widehat{\mathbb C}$
given on the finite plane by
$$M(z)=\frac{az+b}{cz+d}$$
whenever $cz+d\neq0$, and extended by
$$M(-d/c)=\infty\quad(c\neq0),\qquad M(\infty)=\begin{cases}a/c,&c\neq0,\\ \infty,&c=0.\end{cases}$$

Two coefficient quadruples that differ by a common nonzero scalar define the
same map. The next theorem packages this as the quotient by scalar matrices.
