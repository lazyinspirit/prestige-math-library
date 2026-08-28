---
id: thm-chordal-metric-induces-sphere-topology
kind: theorem
title: "The chordal metric induces the standard topology of the Riemann sphere"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-chordal-metric-riemann-sphere, thm-stereographic-projection-riemann-sphere-homeomorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
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

## Statement

The chordal metric $\chi$ induces the standard topology of the Riemann sphere.
Equivalently, the identity map from $\widehat{\mathbb C}$ with the
one-point-compactification topology to $\widehat{\mathbb C}$ with the metric
topology of $\chi$ is a homeomorphism.

## Facts & Assumptions

**Given:** The chordal metric $\chi$ and stereographic projection $\Sigma$.

[L1] Stereographic projection is a homeomorphism $\widehat{\mathbb C}\to S^2$ ([[thm-stereographic-projection-riemann-sphere-homeomorphism]]).

## Proof

**Proof technique:** direct.

1.1 By definition, $\chi(p,q)=\|\Sigma(p)-\Sigma(q)\|_2$, so $\Sigma$ is an isometry from $(\widehat{\mathbb C},\chi)$ onto $S^2$ with its Euclidean subspace metric. [given]

2.1 The Euclidean subspace metric induces the usual topology of $S^2$, and [L1] already identifies that topology with the one-point-compactification topology on $\widehat{\mathbb C}$. Therefore $\chi$ induces the same topology. [L1, given] ∎
