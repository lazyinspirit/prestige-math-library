---
id: thm-bounded-adaptive-runge-kutta-controller-terminates
kind: theorem
title: "The bounded adaptive Runge–Kutta controller terminates"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-bounded-adaptive-runge-kutta-controller
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I, 2nd ed., Chapter III, §III.2"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Chapter 6"
      url: "https://fncbook.com/adaptive-rk/"
---

## Statement

For finite-dimensional states and the finite-budget procedure in [[alg-bounded-adaptive-runge-kutta-controller]], the controller returns one of `success`, `failure`, `minimum-step-rejected`, or `attempt-budget-exhausted` after at most $N$ trial attempts. Each individual attempt uses finitely many stage evaluations and arithmetic operations.

## Facts & Assumptions

**Given:** A controller input satisfying [[alg-bounded-adaptive-runge-kutta-controller]] with finite stage count $s$ and attempt budget $N$.

[F1] [[alg-bounded-adaptive-runge-kutta-controller]]: an attempt either returns a terminal status or increments the attempt counter by one; each trial uses the fixed finite tableau stage count and a finite state dimension.

## Proof

1.1 Fix an attempt. Computing its trial size, its $s$ stages, its two weighted sums, the finite-dimensional scaled maximum, and the factor uses finitely many operations. Any stipulated undefined or nonfinite stage returns `failure`; the zero terminal interval returns `success`; a rejection at the minimum step returns its stated status. Otherwise the attempt either reaches $T$ or returns a state for the next attempt. [given, F1, algebra]

2.1 The counter starts at zero and increases by one after each nonterminal attempt. It cannot exceed the finite integer $N$ without the final branch returning `attempt-budget-exhausted`; an earlier branch also returns one of the four statuses. Thus termination occurs after at most $N$ attempts. [F1, step 1.1, induction] ∎
