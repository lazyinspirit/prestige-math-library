---
id: lem-finite-budget-fixed-point-iteration-work
kind: lemma
title: "Finite-budget fixed-point iteration returns a status in bounded outer work"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - alg-fixed-point-iteration
justified_by: []
aliases: []
proof_strategy: induction
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation"
      url: "https://fncbook.com/fixed-point/"
      locator: "Iteration format and stopping context; exact finite-budget status and outer-work bounds for the linked local procedures are proved here."
---

## Statement

For admissible inputs of [[alg-fixed-point-iteration]] with budget $N\in\mathbb N_0$, every entered iterate belongs to $X$. The procedure uses at most $N$ updates and $N+1$ fixed-point residual evaluations and returns one of its stated statuses. Termination is in the model where each map evaluation, metric evaluation and comparison returns in finite time. These counts specify outer procedure operations and give no bound on the internal cost of evaluating the supplied map or metric.

## Facts & Assumptions

**Given:** The algorithm's metric space, self-map, initial point, tolerance and finite budget, and returning evaluation primitives.

[F1] [[alg-fixed-point-iteration]] evaluates its residual once at each entered index, tests tolerance before budget, returns at index $N$ if tolerance fails, and updates only when $k<N$.

## Proof

**Proof technique:** induction.

1.1 At the initial entered index $0$, the point $x_0$ belongs to $X$, no update has occurred, and the single pass evaluates one residual. [given, F1, base]

1.2 For an entered index $k\le N$, assume the preceding entered indices are exactly $0,\ldots,k-1$, every entered point through $x_k$ lies in $X$, and at most $k$ updates have occurred before pass $k$. [IH]

2.1 If pass $k$ continues, [F1] requires $k<N$ and sets $x_{k+1}=G(x_k)\in X$ by the self-map condition. The next index is $k+1$ and exactly one additional update has occurred. Thus the assertion of step 1.2 holds at the next entered index. A return creates no further index or update. [given, F1, step 1.2, algebra]

3.1 The base and induction step prove membership of every entered iterate and that the entered indices form an initial segment of $0,\ldots,N$. At index $N$, either the residual test returns or the budget test returns before another update. Hence there are at most $N+1$ residual evaluations and $N$ updates. Every pass contains finitely many returning primitives, so the procedure terminates with a stated status, including when $N=0$. [given, F1, step 1.1, step 1.2, step 2.1, discharge-induction] ∎
