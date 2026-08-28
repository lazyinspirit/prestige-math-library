---
id: def-meromorphic-function-riemann-sphere
kind: definition
title: "Meromorphic functions on the Riemann sphere"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-riemann-sphere-holomorphic-charts, def-meromorphic-function-complex-domain]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-28
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

A map $f:\widehat{\mathbb C}\to\widehat{\mathbb C}$ is **meromorphic on the
Riemann sphere** when it is not identically $\infty$, is holomorphic wherever
it takes finite values, and has only pole-type singularities where it takes the
value $\infty$, all in the standard charts of
[[def-riemann-sphere-holomorphic-charts]].

Equivalently:

- at each finite point $a\in\mathbb C$, either $f(a)\in\mathbb C$ and $f$ is
  holomorphic near $a$ in the ordinary sense, or $f(a)=\infty$ and $a$ is a pole
  of the scalar-valued function on a punctured neighbourhood of $a$ in the sense
  of [[def-meromorphic-function-complex-domain]];
- at $\infty$, when $f(\infty)\in\mathbb C$, the source-chart expression is
  holomorphic at $0$ and takes the value $f(\infty)$ there; when
  $f(\infty)=\infty$, the target infinity-chart expression, equal to
  $1/f(1/w)$ for $w\ne0$ and defined to be $0$ at $w=0$, is holomorphic at
  $0$.

Thus a meromorphic function on $\widehat{\mathbb C}$ is exactly a sphere-valued
map, not identically $\infty$, whose local chart expressions are ordinary
meromorphic functions.
