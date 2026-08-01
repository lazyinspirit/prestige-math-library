---
id: def-riemann-integral-over-a-jordan-set
kind: definition
title: "The Riemann integral of a bounded function over a bounded Jordan measurable set"
status: published
origin: session
deps: [def-jordan-inner-and-outer-content, thm-jordan-content-and-indicator-integrability, def-multidimensional-darboux-integral, def-multidimensional-rectangle-and-volume, def-metric-bounded-diameter, def-bounded-set]
justified_by: [lem-jordan-set-integral-well-defined]
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Jordan Measurable Sets"
      url: "https://www.jirka.org/ra/html/sec_jordansets.html"
    - title: "J. Lebl, Basic Analysis, Outer Measure and Null Sets"
      url: "https://www.jirka.org/ra/html/sec_outermeasure.html"
pipeline_run: null
---

## Definition

Let $E\subseteq\mathbb R^m$ be bounded in the metric sense of
[[def-metric-bounded-diameter]] and Jordan measurable, and let
$f:E\to\mathbb R$ be bounded. Choose a nondegenerate rectangle
$Q\supseteq E$, whose existence follows from
[[def-jordan-inner-and-outer-content]], and define the zero extension
$$\widetilde f_Q(x):=\begin{cases}f(x),&x\in E,\\0,&x\in Q\setminus E.\end{cases}$$
The function $f$ is **Riemann integrable over $E$** when $\widetilde f_Q$ is integrable over $Q$, and then
$$\int_Ef:=\int_Q\widetilde f_Q.$$
Independence of the bounding rectangle, for both integrability and value, is proved in [[lem-jordan-set-integral-well-defined]] and recorded as the definition's forward justification. For $f=1$, the zero extension is $1_E$, so [[thm-jordan-content-and-indicator-integrability]] gives $\int_E1=\operatorname{cont}(E)$.
