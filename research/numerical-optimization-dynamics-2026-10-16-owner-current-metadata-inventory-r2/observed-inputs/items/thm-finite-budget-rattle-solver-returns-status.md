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

For finite budgets $N_q,N_p$, the algorithm [[alg-finite-budget-rattle-step-with-scaled-residuals]] terminates after at most two residual-solver calls and returns a stated status: `exact-identity` when $h=0$, and one of the stated success or failure statuses when $h\ne0$. This is a termination claim only; it does not assert that the residual tolerances will be met.

## Facts & Assumptions

**Given:** Finite nonnegative budgets $N_q,N_p$, a consistent input, and the algorithm in the Statement; for nonzero $h$, also its supplied open branch balls, $C^1$ residual maps defined on those balls, returning evaluation/arithmetic/norm/domain-test primitives, and terminating exact factorization and retained-factor solve backends.

[F1] [[alg-finite-budget-rattle-step-with-scaled-residuals]]: for nonzero $h$ the procedure makes at most one position solve and, only if that returns `root`, one momentum solve; for $h=0$ it immediately returns `exact-identity`. Every failure status and returned last valid iterate is specified by the procedure.

[F2] [[alg-newton-chord-implicit-residual-with-factorization-reuse]]: chord mode enters successive indices $k=0,\ldots,N$. At each index it evaluates the residual and tests its norm; it returns `root` when the tolerance is met, and at $k=N$ otherwise returns `iteration-budget-exhausted` before another correction. At a continuing index it refreshes on schedule, returns `singular-jacobian` for a singular factorization, obtains a correction from the retained factor solve, returns `invalid-trial` if the trial leaves the open domain, and otherwise advances to $k+1$. Its admitted primitives and exact backend operations terminate.

## Proof

1.1 If $h=0$, [F1] returns `exact-identity` immediately. For nonzero $h$, consider either chord call with budget $N$ and refresh period $1$. Its initial iterate lies in its open domain. At index $k$, its residual evaluation and norm comparison terminate by the admitted primitive contract. The tolerance and budget branches return the current valid iterate and its actual residual norm. If neither branch returns, then $k<N$; one terminating Jacobian evaluation and factorization attempt either return `singular-jacobian` with this same data or supply a retained factor. Its terminating exact solve produces the correction. The returning domain test either returns `invalid-trial` with the old valid iterate and evaluated residual or admits the new iterate and increments the index. Thus induction preserves domain membership and validity of all returned residual data. [F1, F2, given, induction]

2.1 Every continuing pass strictly increments $k$, and an entered pass $k=N$ returns before a factorization or correction. Consequently there are at most $N+1$ residual checks and at most $N$ correction attempts, Jacobian assemblies, factorization attempts, and retained-factor solves. Each pass consists of finitely many returning operations by step 1.1, so the call terminates, including when $N=0$. These are counts of loop operations, not a uniform bound on the internal cost of a supplied evaluation or backend. [F2, step 1.1, induction]

3.1 Apply step 2.1 first with $N=N_q$. A non-root position status is returned immediately with its last valid multiplier and actual residual, without a momentum call. On position success the finite assignments in [F1] form the momentum residual. The all-$\lambda\in U_q$ admissibility condition ensures that even this approximate returned position multiplier supplies a $C^1$ momentum residual on the whole open $U_p$ with returning evaluations. Apply step 2.1 with $N=N_p$ to the second call. Any failure returns the last valid momentum multiplier and actual tangency residual together with the successful position-stage values. If it succeeds, the remaining assignments and output norms terminate and return the prescribed state, both multipliers, residual norms, and success status. There are at most two calls, at most $N_q+N_p+2$ loop residual checks, and at most $N_q+N_p$ correction/factorization/solve attempts in total. No branch or count asserts success for every finite budget, an exact zero from a positive tolerance, or a forward-error certificate. [F1, F2, given, step 1.1, step 2.1, algebra] ∎
