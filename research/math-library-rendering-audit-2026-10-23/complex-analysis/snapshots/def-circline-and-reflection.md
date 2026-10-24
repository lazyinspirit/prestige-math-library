---
id: def-circline-and-reflection
kind: definition
title: "Circlines and their reflections on the Riemann sphere"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [rem-riemann-sphere-one-point-compactification, def-cross-ratio-riemann-sphere]
justified_by: [thm-mobius-preserves-circlines-and-reflections]
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

For distinct points $a,b,c\in\widehat{\mathbb C}$, define
$$C(a,b,c):=\{a,b,c\}\cup\{z\in\widehat{\mathbb C}\setminus\{a,b,c\}:[a,b;c,z]\in\mathbb R\}.$$
A **circline** is a subset of $\widehat{\mathbb C}$ of the form $C(a,b,c)$ for
some ordered triple of distinct points.

The standard circline is
$$\widehat{\mathbb R}:=\mathbb R\cup\{\infty\},$$
whose reflection is complex conjugation
$$\sigma_{\widehat{\mathbb R}}(z)=\overline z,\qquad \sigma_{\widehat{\mathbb R}}(\infty)=\infty.$$
Whenever a Möbius transformation $M$ carries a circline $C$ to
$\widehat{\mathbb R}$, put
$$\sigma_{C,M}:=M^{-1}\circ\sigma_{\widehat{\mathbb R}}\circ M.$$
The well-definedness result
[[thm-mobius-preserves-circlines-and-reflections]] proves that such normalizing
maps exist and that $\sigma_{C,M}$ has the same value for every choice of $M$.
That common map is the **reflection in $C$** and is denoted $\sigma_C$.
