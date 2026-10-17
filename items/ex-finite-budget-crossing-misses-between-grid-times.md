---
id: ex-finite-budget-crossing-misses-between-grid-times
kind: example
title: A finite grid can miss a continuous-time crossing
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-finite-budget-stopped-event-kernel
  - lem-finite-budget-stopped-normalizer
  - lem-stopped-kernel-discretization-bias
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Example

On $[0,1]$, let the deterministic continuous path be $x(t)=1-2|t-1/2|$, and define the target crossing event as $\{\sup_{0\le t\le1}x(t)\ge3/4\}$. Sampling only at grid times $\{0,1\}$ misses the crossing.

## Facts & Assumptions

**Given:** The path $x(t)=1-2|t-1/2|$, the threshold $3/4$, and the endpoint grid $\{0,1\}$.

[F1] [[def-finite-budget-stopped-event-kernel]]: A finite-budget status reports a target hit only when that target is reached at an inspected state within the budget.

[F2] [[lem-finite-budget-stopped-normalizer]]: The finite-budget normalizer is the probability of a target hit by the budget.

[F3] [[lem-stopped-kernel-discretization-bias]]: A grid-detected event contained in the continuous target has probability bias equal to the probability of the missed-crossing event; no rate follows without an additional bound.

## Verification

**Proof technique:** direct.

1.1 The path satisfies $x(0)=x(1)=0<3/4$, while $x(1/2)=1\ge3/4$. Thus the continuous crossing event occurs and endpoint-grid detection fails. [given, algebra]

2.1 The model is deterministic, so its continuous crossing probability is $1$ and the grid-detected probability is $0$; their absolute bias is $1$. This is exactly the missed-crossing event in [F3], and no error rate in grid spacing can be inferred from this single example. [F1, F2, F3, step 1.1, given] ∎
