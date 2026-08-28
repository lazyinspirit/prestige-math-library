---
id: def-chordal-metric-riemann-sphere
kind: definition
title: "The chordal metric on the Riemann sphere"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-stereographic-projection-riemann-sphere-homeomorphism]
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

Let $\Sigma:\widehat{\mathbb C}\to S^2$ be the stereographic homeomorphism of
[[thm-stereographic-projection-riemann-sphere-homeomorphism]]. The **chordal
metric** on $\widehat{\mathbb C}$ is
$$\chi(p,q):=\|\Sigma(p)-\Sigma(q)\|_2\qquad(p,q\in\widehat{\mathbb C}),$$
that is, the Euclidean chord length between the corresponding points of the unit
sphere.

Because $\Sigma$ is a bijection, $\chi(p,q)=0$ exactly when $p=q$, and the
metric properties are inherited from the Euclidean metric of $\mathbb R^3$. The
explicit coordinate formula on the finite plane is computed on the companion
examples page.
