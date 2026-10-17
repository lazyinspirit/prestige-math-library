---
id: lem-finite-budget-newton-work-and-status
kind: lemma
title: "Finite-budget Newton preserves its domain and returns a status in bounded outer work"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - alg-finite-budget-newton-for-vector-residuals
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
      url: "https://fncbook.com/newtonsys/"
      locator: "Iteration format and stopping context; exact finite-budget status and outer-work bounds for the linked local procedures are proved here."
dependency_level: 2
---

## Statement

For admissible inputs of [[alg-finite-budget-newton-for-vector-residuals]] with budget $N\in\mathbb N_0$, every entered iterate lies in $U$. The procedure makes at most $N$ correction calls, at most $N$ accepted updates, and at most $N+1$ explicit outer residual evaluations. It returns a stated residual, singular-Jacobian, invalid-trial or budget status. Termination is in the exact-arithmetic model where residual and Jacobian evaluations, domain decisions and correction calls return in finite time. No convergence, tolerance-attainment or backend complexity claim follows.

## Facts & Assumptions

**Given:** The algorithm's admissible inputs and returning primitives.

[F1] [[alg-finite-budget-newton-for-vector-residuals]] evaluates $F(x_k)$ once at an entered index, checks residual and budget before correction, and accepts an update only after checking membership in $U$.

## Proof

**Proof technique:** induction.

1.1 At the initial entered index $0$, the point $x_0$ lies in $U$, no correction or update has occurred, and the pass explicitly evaluates one residual. [given, F1, base]

1.2 For an entered index $k\le N$, assume the preceding entered indices are exactly $0,\ldots,k-1$, every entered point through $x_k$ lies in $U$, and at most $k$ correction calls and accepted updates have occurred before pass $k$. [IH]

2.1 A continuing pass requires $k<N$. It makes one correction call; a singular correction or invalid trial returns without entering another index. Otherwise the domain test gives $x_{k+1}\in U$, and the next index is $k+1$ with one additional correction call and accepted update. Thus the assertion of step 1.2 holds at the next entered index. [given, F1, step 1.2, algebra]

3.1 The base and induction step prove membership of all entered iterates and that their indices form an initial segment of $0,\ldots,N$. At $k=N$ the residual or budget branch returns before a correction. Hence there are at most $N+1$ explicit residual evaluations, $N$ correction calls and $N$ accepted updates. Singular or invalid-trial returns only shorten the execution. The finitely many returning primitives therefore terminate with a stated status, including when $N=0$. [given, F1, step 1.1, step 1.2, step 2.1, discharge-induction] ∎
