---
id: cex-gaps-tending-to-infinity-need-not-be-hadamard-lacunary
kind: counterexample
title: "Gaps tending to infinity need not be Hadamard-lacunary"
status: published
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-hadamard-lacunary-sequence-and-lacunary-trigonometric-series]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Aihua Fan, Hervé Queffélec, and Martine Queffélec, The Furstenberg Set and Its Random Version"
      url: "https://arxiv.org/pdf/2104.08944"
---

## Statement refuted

“If an increasing integer sequence has gaps tending to infinity, then it is
Hadamard-lacunary.”

## Facts & Assumptions

**Given:** The increasing sequence $\lambda_j=j^2$ for $j\ge1$.

## Counterexample

**Proof technique:** direct gap and ratio calculation.

1.1 Its successive gaps are [given, algebra]
$$\lambda_{j+1}-\lambda_j=(j+1)^2-j^2=2j+1\longrightarrow\infty.$$
[given, algebra]

2.1 But [step 1.1, algebra]
$$\frac{\lambda_{j+1}}{\lambda_j}=\left(1+\frac1j\right)^2\longrightarrow1.$$
Hence no fixed $q>1$ can satisfy the ratio condition eventually, much less at
every index. This violates the definition in
[[def-hadamard-lacunary-sequence-and-lacunary-trigonometric-series]].
[step 1.1, algebra] ∎
