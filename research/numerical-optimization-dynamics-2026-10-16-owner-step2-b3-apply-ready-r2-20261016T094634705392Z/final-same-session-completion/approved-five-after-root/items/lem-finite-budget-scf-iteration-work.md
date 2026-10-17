---
id: lem-finite-budget-scf-iteration-work
kind: lemma
title: "Finite-budget SCF response iterations return a status in bounded outer work"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - alg-undamped-scf-with-gap-and-residual-status
  - alg-relaxed-density-mixing-with-finite-budget
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

For admissible inputs of either cited SCF iteration with finite budget $N$, there are at most $N$ updates and $N+1$ fixed-point residual tests. Under returning spectrum, response, metric and comparison primitives, the procedure terminates with a stated residual, gap, eigensolver or budget status. This is a work/status bound and does not assert contraction, convergence or tolerance attainment.

## Facts & Assumptions

**Given:** Either algorithm's admissible inputs and returning primitives.

[F1] [[alg-undamped-scf-with-gap-and-residual-status]] checks the spectrum/gap, then its residual, then the budget, and updates only at indices below $N$.

[F2] [[alg-relaxed-density-mixing-with-finite-budget]] uses the same index and stopping order for its relaxed residual, with earlier gap/eigensolver returns allowed.

## Proof

**Proof technique:** induction.

1.1 At the initial entered index $0$, no update has occurred, and the pass permits at most one residual test after its spectrum and gap checks. [given, F1, F2, base]

1.2 For an entered index $k\le N$, assume its preceding entered indices are exactly $0,\ldots,k-1$, with at most $k$ preceding residual tests and $k$ updates. [IH]

1.3 Pass $k$ permits at most one residual test. A continuing pass requires $k<N$ and makes one update before entering $k+1$. The counts before that next pass are therefore at most $k+1$ residual tests and updates, proving the assertion of step 1.2 at the next index. An earlier gap, eigensolver, residual or budget return creates no further pass. [given, F1, F2, step 1.2, algebra]

2.1 The base and induction step show that entered indices form an initial segment of $0,\ldots,N$, with at most $N+1$ residual tests and $N$ updates. Index $N$ returns before any update. Every entered pass contains finitely many returning primitives, so the procedure terminates with a stated status, including when $N=0$. These are only outer-work and status bounds. [given, F1, F2, step 1.1, step 1.2, step 1.3, discharge-induction] ∎
