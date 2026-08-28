---
id: cex-complex-conjugation-is-a-sphere-homeomorphism-not-holomorphic
kind: counterexample
title: "Complex conjugation is a homeomorphism of the Riemann sphere that is not holomorphic"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-mobius-transformations-biholomorphic-sphere, thm-stereographic-projection-riemann-sphere-homeomorphism]
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

## Statement refuted

Every self-homeomorphism of the Riemann sphere is holomorphic.

## Facts & Assumptions

**Given:** Complex conjugation $\kappa(z)=\overline z$ on $\mathbb C$ with $\kappa(\infty)=\infty$.

[L1] Stereographic projection identifies the Riemann sphere homeomorphically with the unit sphere ([[thm-stereographic-projection-riemann-sphere-homeomorphism]]).

## Counterexample

**Proof technique:** direct.

1.1 The map $\kappa$ is continuous, involutive, and fixes $\infty$, so it is a self-homeomorphism of $\widehat{\mathbb C}$; under [L1] it is the reflection of the unit sphere across the $xz$-plane. [L1, given]

2.1 At $0$, the complex difference quotient along real increments equals $1$ while along imaginary increments $it$ it equals $-1$, so the complex derivative does not exist there. Thus this sphere homeomorphism is not holomorphic. [given, algebra] ∎
