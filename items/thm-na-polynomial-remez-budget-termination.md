---
id: thm-na-polynomial-remez-budget-termination
kind: theorem
title: "A budgeted polynomial Remez exchange terminates within its finite cap"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - alg-na-minimax-approximation-and-remez-algorithms
  - lem-na-polynomial-remez-system-invertible
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Ricardo Pachón and Lloyd N. Trefethen, Barycentric-Remez Algorithms for Best Polynomial Approximation in the Chebfun System, §2"
      url: "https://people.maths.ox.ac.uk/trefethen/remez_new2.pdf"
      locator: "Printed pp. 5–7, finite reference-set updates and trial solves."
    - title: "Lloyd N. Trefethen, Approximation Theory and Approximation Practice, Chapter 10"
      url: "https://people.math.ethz.ch/~hiptmair/Seminars/RAP_22/TRE13.pdf"
      locator: "Printed pp. 73–79, polynomial Remez context."
---

## Statement

For any finite integer budget $B\in\mathbb N_0$, the procedure
[[alg-na-minimax-approximation-and-remez-algorithms]] makes at most $B+1$
linear solves and at most $B+1$ oracle calls (at most $2(B+1)$ calls total) and
returns a status, provided each exact linear solve and each oracle call
terminates. This is a finite-budget termination statement, not an iterative
convergence theorem.

## Facts & Assumptions

**Given:** The algorithm inputs and exact-solver/oracle behavior of [[alg-na-minimax-approximation-and-remez-algorithms]], with a finite integer budget $B\in\mathbb N_0$ and terminating exact solves and oracle calls.

[F1] [[alg-na-minimax-approximation-and-remez-algorithms]]: each loop iteration makes one exact alternation solve and one extrema-oracle call, then either returns a status or updates one reference node.

[F2] [[lem-na-polynomial-remez-system-invertible]]: each alternation solve has a unique solution for the supplied distinct ordered reference set.

## Proof

1.1 At the start of each iteration the reference is ordered and distinct: it is so initially, and each permitted replacement preserves strict order. For an interior index the new node lies strictly between its neighboring reference nodes; at index $0$ it satisfies $a\leq y<x_1$, and at index $n+1$ it satisfies $x_n<y\leq b$, so endpoint equality still leaves all reference nodes distinct and ordered. Therefore [F2] supplies a unique solve on every entered iteration, and the termination hypothesis together with [F1] gives a terminating oracle call or one reference update. [given, F1, F2, construct]

2.1 The loop indices are exactly $0,\ldots,B$, a finite set of $B+1$ iterations. Each entered iteration makes one linear solve and at most one oracle call, so there are at most $B+1$ solves and $B+1$ oracle calls in total. Each iteration returns or advances once, so after at most $B+1$ iterations the procedure either has returned earlier or returns budget-exhausted. [given, F1, step 1.1, algebra] ∎
