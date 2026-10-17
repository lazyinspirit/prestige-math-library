---
id: thm-finite-budget-rattle-solver-returns-status
kind: theorem
title: The finite budget RATTLE solver returns a status in finite work
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-finite-budget-rattle-step-with-scaled-residuals
  - alg-newton-chord-implicit-residual-with-factorization-reuse
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: "No choice principle is used."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Ernst Hairer, Christian Lubich, and Gerhard Wanner, Geometric Numerical Integration, 2nd ed., Chapter VII.1"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/63242/1/131.pdf"
    - title: "Robert I. McLachlan, Klas Modin, Olivier Verdier, and Matt Wilkins, Geometric Generalisations of SHAKE and RATTLE, Foundations of Computational Mathematics 14 (2014), 339–370"
      url: "https://arxiv.org/pdf/1207.3367"
---

## Statement

For finite budgets $N_q,N_p$, the algorithm [[alg-finite-budget-rattle-step-with-scaled-residuals]] terminates after two finite residual-solver calls at most and returns one of its stated success or failure statuses. This is a termination claim only; it does not assert the residual tolerances will be met.

## Facts & Assumptions

**Given:** Finite nonnegative budgets $N_q,N_p$, a valid input, branch balls, and the algorithm in the Statement.

[F1] [[alg-finite-budget-rattle-step-with-scaled-residuals]]: the procedure makes at most one position solve and, only if that succeeds, one momentum solve; all other actions are finite evaluations and assignments.

[F2] [[alg-newton-chord-implicit-residual-with-factorization-reuse]]: in chord mode with budget $N$, the residual solver checks at most $N+1$ iterates, makes at most $N$ corrections, and returns a residual or failure status at each terminating branch.

## Proof

1.1 The position call in [F1] is the finite-budget supplier call in [F2], so it terminates after at most $N_q+1$ residual checks and $N_q$ corrections. If it returns any non-success status, the RATTLE routine returns immediately after finitely many further arithmetic operations. [F1, F2, given]

2.1 If the position call succeeds, the algorithm makes the single momentum call in [F1], which by [F2] terminates after at most $N_p+1$ residual checks and $N_p$ corrections; the remaining assignment and status return are finite. Therefore every execution terminates and returns one of the specified statuses. [F1, F2, step 1.1, algebra] ∎
