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
---

## Statement

For admissible inputs of [[alg-finite-budget-newton-for-vector-residuals]] with budget $N\in\mathbb N_0$, every entered iterate lies in $U$. The procedure makes at most $N$ correction calls, at most $N$ accepted updates, and at most $N+1$ explicit outer residual evaluations. It returns a stated residual, singular-Jacobian, invalid-trial or budget status. Termination is in the exact-arithmetic model where residual and Jacobian evaluations, domain decisions and correction calls return in finite time. No convergence, tolerance-attainment or backend complexity claim follows.

## Facts & Assumptions

**Given:** The algorithm's admissible inputs and returning primitives.

[F1] [[alg-finite-budget-newton-for-vector-residuals]] evaluates $F(x_k)$ once at an entered index, checks residual and budget before correction, and accepts an update only after checking membership in $U$.

## Proof

**Proof technique:** induction.

1.1 The initial point lies in $U$. A failed trial returns the current point; an accepted trial becomes the next iterate only after its membership test succeeds. Induction proves membership of all entered iterates. [given, F1, induction]

2.1 The entered indices form an initial segment of $0,\ldots,N$. At $k=N$ the residual or budget branch returns before a correction. Each earlier index permits one correction call and at most one accepted update. Consequently there are at most $N+1$ explicit residual evaluations, $N$ correction calls and $N$ updates. Singular or invalid-trial returns only shorten this execution. The finitely many returning primitives therefore terminate with a stated status, including when $N=0$. [given, F1, step 1.1, induction] ∎
