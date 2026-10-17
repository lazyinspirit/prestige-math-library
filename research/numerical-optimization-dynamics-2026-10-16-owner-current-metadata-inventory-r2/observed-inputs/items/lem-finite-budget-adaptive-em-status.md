---
id: lem-finite-budget-adaptive-em-status
kind: lemma
title: A finite adaptive Euler–Maruyama budget returns a status
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-adaptive-euler-maruyama-on-predictable-grid
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Simo Särkkä and Arno Solin, Applied Stochastic Differential Equations, Algorithm 8.1"
      url: "https://users.aalto.fi/~asolin/sde-book/sde-book.pdf"
---

## Statement

Assume AC and consider the budgeted procedure in
[[alg-adaptive-euler-maruyama-on-predictable-grid]] with integer budget
$B\in\mathbb N_0$, at most $B$ trial operations occur. The procedure returns
`complete` only after reaching $T$; if the budget is exhausted earlier it
returns `inconclusive`. Consequently its number of trial operations is an
integrable random variable with expectation at most $B$. This is a finite
budget operation count, not an asymptotic cost estimate in terms of error.

## Facts & Assumptions

**Given:** AC; the procedure, its finite work budget $B$, and its rule that each trial operation consumes one unit.

[F1] Each predictable-grid update and each endpoint-refinement node trial consumes one unit; after $B$ units without reaching $T$, the algorithm returns `inconclusive`. [[alg-adaptive-euler-maruyama-on-predictable-grid]]

[A1] AC is inherited from the algorithm interface; the counter argument itself is choice-free. [[def-axiom-of-choice]]

## Proof

1.1 Before the first operation the counter is zero. Each operation increases it by exactly one, and no branch decreases it or runs without consuming a unit. Induction on the operation count therefore gives a counter between $0$ and $B$ throughout execution; the loop either reaches $T$ and returns `complete`, or reaches counter $B$ first and returns `inconclusive` by [F1]. [F1, given, construct]

2.1 Each trial state and finite queue is a measurable function of the initial data, Brownian increments and fresh Gaussian innovations: coefficient evaluation and the acceptance rule are Borel, and updates, splits and queue operations are measurable finite operations. Induction through the deterministic budget makes the event that trial $k$ is performed measurable for each $1\le k\le B$. Thus $C=\sum_{k=1}^B1_{\{\text{trial }k\text{ is performed}\}}$ is a random variable. It satisfies $0\le C\le B$ pointwise by step 1.1, so it is integrable and $\mathbb EC\le B$. If $B=0$, no trial is performed and, since $T>0$, the status is `inconclusive`. This proves the claim without asserting that completion occurs with positive probability. [A1, F1, step 1.1, given, algebra] ∎
