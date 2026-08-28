---
id: cex-e-to-z-is-meromorphic-on-c-but-not-on-the-riemann-sphere
kind: counterexample
title: "The exponential function is meromorphic on C but not meromorphic on the Riemann sphere"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-meromorphic-functions-riemann-sphere-are-rational]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
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

Every meromorphic function on $\mathbb C$ is meromorphic on the Riemann sphere.

## Facts & Assumptions

**Given:** The exponential function $f(z)=e^z$.

[L1] Sphere-meromorphic functions are exactly rational functions ([[thm-meromorphic-functions-riemann-sphere-are-rational]]).

## Counterexample

**Proof technique:** direct.

1.1 The function $e^z$ is entire on $\mathbb C$, so it is meromorphic on $\mathbb C$. If it were meromorphic on $\widehat{\mathbb C}$, then [L1] would make it rational. [L1, given]

2.1 A rational function with no finite poles is a polynomial, but $e^{z+2\pi i}=e^z$ whereas no nonconstant polynomial is $2\pi i$-periodic. Therefore $e^z$ is not rational, so it cannot be meromorphic on the sphere. [given, algebra] ∎
