---
id: cor-complex-analytic-functions-have-local-primitives
kind: corollary
title: "Every complex analytic function has a primitive on a neighbourhood of each point"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complex-analytic-function, lem-derived-complex-power-series-has-the-same-radius, thm-termwise-differentiation-of-complex-power-series]
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
sources:
  scraped: []
  references:
    - title: "L. Ahlfors, Complex Analysis, 3rd ed., Ch. 2"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement

If $f$ is analytic at $a$, then some neighbourhood of $a$ admits a primitive of $f$.

## Facts & Assumptions

**Given:** A function $f$ analytic at $a$.

[L1] Analyticity supplies $f(z)=\sum c_n(z-a)^n$ on a positive-radius disc ([[def-complex-analytic-function]]).

[L2] The zero-constant-term formal antiderivative has the same radius as the original series ([[lem-derived-complex-power-series-has-the-same-radius]]).

[L3] A complex power series may be differentiated term by term inside its radius ([[thm-termwise-differentiation-of-complex-power-series]]).

## Proof

**Proof technique:** constructive.

1.1 Choose a local representation from [L1] and define $F(z)=\sum_{n\ge0}c_n(z-a)^{n+1}/(n+1)$ on the same disc. [L1, L2, construct]

2.1 By [L3], $F'(z)=\sum c_n(z-a)^n=f(z)$ throughout the disc, so $F$ is a local primitive. [step 1.1, L3, discharge-construct] ∎
