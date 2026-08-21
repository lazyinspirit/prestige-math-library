---
id: fs-semicontinuity-implies-continuity-on-a-compact-set
kind: false-statement
title: "FALSE: semicontinuity implies continuity on a compact set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [ex-characteristic-functions-of-open-and-closed-sets-are-semicontinuous]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "D. Bertsekas, MIT 6.253 Convex Analysis and Optimization, Lectures 2 and 4"
      url: "https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf"
pipeline_run: null
---

## Statement

**False claim:** an upper or lower semicontinuous real-valued function on a compact Euclidean set must be continuous.

## Facts & Assumptions

**Given:** The compact interval $[0,1]$.

[L1] On $[0,1]$, the characteristic function of $\{0\}$ is upper semicontinuous but discontinuous at zero, and its negative is lower semicontinuous but discontinuous there ([[ex-characteristic-functions-of-open-and-closed-sets-are-semicontinuous]]).

## Refutation

**Proof technique:** direct.

1.1 The first function in [L1] satisfies upper semicontinuity on a compact domain and fails continuity. [L1]

2.1 Its negative in [L1] separately satisfies lower semicontinuity and fails continuity on the same compact domain. Thus neither one-sided notion implies continuity. [step 1.1, L1] ∎
