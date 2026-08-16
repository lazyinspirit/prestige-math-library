---
id: cor-complex-power-series-sums-are-analytic
kind: corollary
title: "The sum of a complex power series is analytic throughout its open disc of convergence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-complex-power-series-reexpansion-at-an-interior-point, def-complex-analytic-function]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "L. Ahlfors, Complex Analysis, 3rd ed., Ch. 2"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement

The sum of a complex power series is analytic on its open disc of convergence.

## Facts & Assumptions

**Given:** A complex power-series sum $f$ on its open disc $D$.

[L1] At every interior point $b$, the sum re-expands as a convergent power series on a positive-radius disc about $b$ ([[thm-complex-power-series-reexpansion-at-an-interior-point]]).

[L2] Analyticity means local representation by a convergent complex power series ([[def-complex-analytic-function]]).

## Proof

**Proof technique:** direct.

1.1 Let $b\in D$. Its distance to the original boundary is positive, and [L1] supplies a power-series representation of $f$ on a disc about $b$. [L1]

2.1 This is exactly analyticity at $b$ by [L2]. Since $b$ was arbitrary, $f$ is analytic on $D$, including the entire-radius case. [step 1.1, L2] ∎
