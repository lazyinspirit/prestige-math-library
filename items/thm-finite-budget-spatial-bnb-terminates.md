---
id: thm-finite-budget-spatial-bnb-terminates
kind: theorem
title: Finite-budget spatial branch and bound always returns a declared status
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: global-optimization-and-certified-branch-and-bound
dependency_level: 3
proof_strategy: direct
deps: [alg-certified-spatial-branch-and-bound, def-spatial-box-bound-certificate]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Arnold Neumaier, Complete Search in Continuous Global Optimization and Constraint Satisfaction, §12"
      url: "https://optimization-online.org/wp-content/uploads/2003/10/765.pdf"
---

## Statement

For every admissible finite oracle call and every positive integer budget $N$, [[alg-certified-spatial-branch-and-bound]] terminates after at most $N$ calls and returns exactly one of: a verified epsilon-global certificate, a certified infeasibility result, or an inconclusive budget/oracle status.

## Facts & Assumptions

**Given:** The algorithm inputs and statuses in [[alg-certified-spatial-branch-and-bound]], with $N\in\mathbb N$, $N\ge1$, and an oracle that finishes each call in finite time or returns its explicit unavailable status.

[F1] One oracle call is charged for each evaluated leaf; before any call, a counter already equal to $N$ makes the algorithm return the recorded ledger with status budget-exhausted. [[alg-certified-spatial-branch-and-bound]]

[F2] A box report with an unavailable required field makes no lower-bound or feasibility claim. [[def-spatial-box-bound-certificate]]

## Proof

1.1 At the start of a call, if the counter is $N$ the algorithm returns by [F1]. Otherwise it consumes exactly one unit for that call; every branch either schedules a finite two-child list or reaches a stated return condition. [given, F1, algebra]

2.1 After at most $N$ evaluations, either a certificate, infeasibility result, or oracle status has already returned, or another call is required and the pre-call guard returns budget-exhausted. Each oracle call terminates by the Given condition, and each unavailable report has the explicit no-claim meaning in [F2], so the procedure terminates within at most $N$ calls. [given, step 1.1, F2, algebra] ∎

