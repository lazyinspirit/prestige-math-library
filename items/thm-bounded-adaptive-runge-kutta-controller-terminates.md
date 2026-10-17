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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Ernst Hairer, course notes, Chapter III: Équations Différentielles Ordinaires, §III.2"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Chapter 6"
      url: "https://fncbook.com/adaptive-rk/"
---

## Statement

For finite-dimensional states and the finite-budget procedure in [[alg-bounded-adaptive-runge-kutta-controller]], the controller returns one of `success`, `failure`, `minimum-step-rejected`, or `attempt-budget-exhausted` after at most $N$ trial attempts. Each individual attempt uses finitely many stage evaluations and arithmetic operations.

## Facts & Assumptions

**Given:** A controller input satisfying [[alg-bounded-adaptive-runge-kutta-controller]] with finite stage count $s$ and attempt budget $N$.

[F1] [[alg-bounded-adaptive-runge-kutta-controller]]: the procedure runs attempt indices $k=1,\ldots,N$ in order, advances to $k+1$ only after a nonterminal attempt, and returns `attempt-budget-exhausted` after the $N$th attempt unless an earlier terminal branch applies. Each trial uses the fixed finite tableau stage count and finite state dimension.

## Proof

1.1 Fix an attempt. Computing its trial size, its $s$ stages, its two weighted sums, and the finite-dimensional scaled maximum uses finitely many operations. Any stipulated undefined or nonfinite stage returns `failure`; an accepted step reaching $T$ returns `success`; and a rejection at the minimum step returns its stated status, in that order before the budget branch. A nonterminal attempt computes its next proposal and advances to the next loop index. [given, F1, algebra]

2.1 The loop visits only the finite indices $1,\ldots,N$, with exactly one trial per visited index. If no earlier terminal branch returns, the $N$th attempt returns `attempt-budget-exhausted`; in particular, an accepted step reaching $T$ on that attempt has already returned `success`. Thus termination occurs after at most $N$ attempts. [F1, step 1.1, induction] ∎
