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
  - alg-certified-scf-with-diis-safeguard
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
dependency_level: 6
---

## Statement

For admissible inputs of any of the three cited SCF iterations with finite budget $N$, there are at most $N$ updates. The undamped and relaxed procedures use at most $N+1$ fixed-point residual tests; the certified DIIS procedure uses at most $2N+1$, counting one current-point test and at most one candidate test at each nonterminal pass. Under returning spectrum/eigensolver, response, constrained least-squares, metric and comparison primitives, each procedure terminates with a stated residual, gap, eigensolver, invariance-certificate or budget status. This is a work/status bound and does not assert contraction, convergence or tolerance attainment.

## Facts & Assumptions

**Given:** Any of the three algorithms' admissible inputs and returning primitives.

[F1] [[alg-undamped-scf-with-gap-and-residual-status]] checks the spectrum/gap, then its residual, then the budget, and updates only at indices below $N$.

[F2] [[alg-relaxed-density-mixing-with-finite-budget]] uses the same index and stopping order for its relaxed residual, with earlier gap/eigensolver returns allowed.

[F3] [[alg-certified-scf-with-diis-safeguard]] checks one current response residual at each entered index, attempts at most one candidate residual test before any update, and stops at budget index $N$.

## Proof

**Proof technique:** induction.

1.1 At the initial entered index $0$, no update has occurred. Each baseline procedure permits at most one residual test after its spectrum and gap checks; the certified DIIS procedure permits one current residual test and, only if $0<N$, at most one candidate residual test. [given, F1, F2, F3, base]

1.2 Before an entered index $k\le N$, its preceding entered indices are exactly $0,\ldots,k-1$, with at most $k$ preceding updates, at most $k$ residual tests for either baseline procedure, and at most $2k$ residual tests for the certified DIIS procedure. [IH]

2.1 A baseline pass permits at most one residual test; a certified DIIS pass permits at most two, for its current point and a candidate. A continuing pass requires $k<N$ and makes at most one update before entering $k+1$. Thus the preceding counts increase by at most one update and, respectively, one or two residual tests, proving step 1.2 at the next index. Any earlier gap, eigensolver, invariance, residual or budget return creates no further pass. [given, F1, F2, F3, step 1.2, algebra]

3.1 The base and induction step show that entered indices form an initial segment of $0,\ldots,N$, with at most $N+1$ residual tests for either baseline procedure and at most $2N+1$ for certified DIIS, since index $N$ checks the current response and returns before a candidate attempt or update. All three make at most $N$ updates. Every entered pass has finitely many returning primitives, so each procedure terminates with a stated status, including when $N=0$. These are only outer-work and status bounds. [given, F1, F2, F3, step 1.1, step 1.2, step 2.1, discharge-induction] ∎
