---
id: fs-convergence-at-one-noncentral-point-forces-entire-convergence
kind: false-statement
title: "FALSE: convergence of a complex power series at one point other than its centre forces convergence everywhere"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-cauchy-hadamard-for-complex-power-series, lem-nth-term-test]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lars Ahlfors, Complex Analysis, third edition, Ch. 2 §2.4"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement

**False claim.** If a complex power series converges at one point other than its centre, then it converges at every complex point.

## Facts & Assumptions

**Given:** The geometric series $\sum_{n\ge0}z^n$ centred at $0$.

[L1] Cauchy–Hadamard gives absolute convergence inside the radius, divergence outside it, and no boundary assertion ([[thm-cauchy-hadamard-for-complex-power-series]]).

[L2] If the terms of a real series do not tend to $0$, that real series diverges ([[lem-nth-term-test]]).

## Refutation

**Proof technique:** direct.

1.1 At $z=1/2$, the finite geometric identity shows that the partial sums tend to $2$, so the series converges at a noncentral point. [algebra]

1.2 At $z=2$, its terms $2^n$ do not tend to $0$, so the series diverges by [L2]. [L2]

2.1 Hence the claim is false. Consistently, [L1] gives this series radius $1$: one interior convergence point does not force an infinite radius. [step 1.1, step 1.2, L1] ∎
