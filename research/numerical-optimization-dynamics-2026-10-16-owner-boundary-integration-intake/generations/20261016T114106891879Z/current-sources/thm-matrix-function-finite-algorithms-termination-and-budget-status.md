---
id: thm-matrix-function-finite-algorithms-termination-and-budget-status
kind: theorem
title: Finite matrix-function algorithms preserve primitive budgets and terminate with explicit statuses
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - alg-exact-jordan-block-analytic-evaluation
  - alg-pade-denominator-solve-by-householder-qr
  - alg-pade-scaling-and-squaring-exponential
  - alg-newton-polar-factor-iteration
  - alg-newton-matrix-sign-iteration
  - alg-schur-parlett-matrix-function
  - alg-principal-matrix-logarithm-and-square-root
  - alg-complex-scaled-householder-reflector-step
  - alg-scaled-complex-householder-and-givens-updates
  - alg-complex-resolvent-cover-validator
  - thm-finite-budget-francis-schur-termination-and-status
  - thm-bartels-stewart-finite-status-and-local-pivot-uniqueness
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Jan Zur, Matrix Functions, TU Berlin lecture notes
      url: https://www.tu.berlin/fileadmin/www/40000110/Dauer-Wimis/Jan_Zur/matrix_functions_zur.pdf
      locator: "Adapted matrix-function method setting. The primitive-dispatch replay and finite status/composition theorem are proved locally from the named current procedures; no verbatim external theorem or new full-text reading is claimed."
dependency_level: 9
---

## Statement

On their admitted finite inputs, each of the seven procedures [[alg-exact-jordan-block-analytic-evaluation]], [[alg-pade-denominator-solve-by-householder-qr]], [[alg-pade-scaling-and-squaring-exponential]], [[alg-newton-polar-factor-iteration]], [[alg-newton-matrix-sign-iteration]], [[alg-schur-parlett-matrix-function]] and [[alg-principal-matrix-logarithm-and-square-root]] terminates with one of its defined outputs/statuses, provided every explicitly supplied evaluator/controller terminates under its input contract. In particular, the denominator candidate executes at most $K_H$ rounded real primitives, counting conversions and all inlined kernel operations, and never evaluates an unaffordable next primitive. With sufficient budget its executed rounded trace and return values equal those of the specified unbudgeted kernel schedules through the same successful prefix. Its exact audit is reached only with a complete candidate; Padé continuation squares only a complete matrix with an admitted candidate/verified status. Partial records and failures are not promoted to complete candidates or error certificates.

The Padé squaring loop respects its separate rounded-operation budget. Exact controller/audit work is finite but is not included in these rounded budgets and is not assigned an arbitrary-real bit-cost bound. Schur–Parlett has at most $n-1$ merges; polar/sign have at most $N$ iterations. These conclusions prove termination and operational status/budget properties only: analytic correctness, certified error, exact Newton convergence, topology and spectral/branch admissibility retain their separately stated hypotheses.

## Facts & Assumptions

**Given:** Actual finite dimensions, supplied data tables, finite operation/iteration budgets and admitted representations, with the stated terminating-callback condition.

[F1] [[alg-pade-denominator-solve-by-householder-qr]] specifies the single budget-before-primitive dispatcher, completion mask, exact finite controller audit, and all candidate failures.

[F2] [[alg-complex-scaled-householder-reflector-step]] and [[alg-scaled-complex-householder-and-givens-updates]] specify the finite scalar schedules, loop indices, zero branches and first failures being expanded by [F1].

[F3] [[alg-exact-jordan-block-analytic-evaluation]] uses a finite exact Jordan certificate and finitely many derivatives of the same holomorphic function on its admitted open domain.

[F4] [[alg-pade-scaling-and-squaring-exponential]] passes its candidate budget, requires a complete candidate/status before squaring, and has finite polynomial, squaring, scalar-tail and bound-recursion loops.

[F5] [[alg-newton-polar-factor-iteration]] and [[alg-newton-matrix-sign-iteration]] pass a finite candidate budget for each solve and have a finite iteration count, returning on unverified solves or range failure.

[F6] [[thm-finite-budget-francis-schur-termination-and-status]] gives termination of the actual delegated Schur procedure on admitted controls and terminating evaluators; [[thm-bartels-stewart-finite-status-and-local-pivot-uniqueness]] gives finite status/solve behavior for the actual delegated Sylvester procedure.

[F7] [[alg-schur-parlett-matrix-function]] traverses finitely many block pairs, and every restart merges at least two contiguous blocks, decreasing the positive block count.

[F8] [[alg-principal-matrix-logarithm-and-square-root]] makes a finite Schur/branch check before its Schur–Parlett call, retaining missing-data and branch failures.

[F9] [[alg-complex-resolvent-cover-validator]] tests finitely many proposed disks/segments and finite matrix-entry outward expressions; failed or unavailable checks return inconclusive.

[A1] Every explicitly supplied controller/evaluator invoked by a delegated routine returns in finite time or with its declared failure, as required by its actual input contract. Exact local scalar comparisons/arithmetic and supplied finite table lookups are those of the declared controller model.

## Proof

1.1 Expand each candidate macro in [F1] into the actual [F2] scalar schedule. Induct over executed primitive requests: before a request the counter equals the number already executed. If the counter is $K_H$, no primitive is evaluated and the dispatcher returns exhaustion; otherwise it increments once and performs exactly the next prescribed rounded primitive. Thus it executes at most $K_H$ primitives and has the same intermediate values, branches and first arithmetic failure as the original schedule whenever the budget allows that prefix. Zero-column identity branches copy data and do not evaluate a zero-vector reflector denominator. Finite source index loops and finite exact control branches preclude a nonterminating primitive-free loop. [F1, F2, A1, given, induction, algebra]

2.1 Each conversion, reflector, separate RHS application and triangular solve has finite dimensions. By step 1.1 their composition returns its defined result or a first budget/range/candidate failure in finite time. The completion mask is set only after each actual solution entry is computed; [F1] permits the exact row-major residual audit only after all $nr$ entries are set. That audit has $nr$ finite inner products and exact component tests, or the explicit finite-codebook adapter/failure, hence terminates. Neither partial values nor an unavailable representation are labeled a verified solution. [F1, F2, A1, step 1.1, algebra]

3.1 The Jordan routine checks finitely many exact identities and block entries and evaluates finitely many finite nilpotent sums using the supplied jets; missing data fail. Thus [F3] terminates. The Padé procedure forms finite polynomial matrices and calls the terminating solve of step 2.1 with $K_H$. Its complete-candidate gate excludes every partial or failure status from squaring. Each of its $s$ squares has finite scalar loops and a before-primitive squaring-budget check, proved bounded by the same counter argument as step 1.1. Exact defects, the finite series/tail expressions and the $s$ bound recurrences are finite; the finite cover validator in [F9] either succeeds or fails. Therefore every Padé path returns a declared status, and a failure/partial candidate cannot be interpreted as a conditional error-bound success. [F3, F4, F9, A1, step 1.1, step 2.1, algebra]

3.2 Each polar/sign iteration makes one finite-budget denominator call and only continues on its complete verified solution; otherwise it returns the solve status and the last candidate. Its component update has finitely many operations and explicit range failures. At most $N$ such iterations occur by [F5], including no iteration at $N=0$, proving termination and the stated budget/status separation without asserting convergence of rounded iterates. [F5, A1, step 2.1, algebra]

4.1 By [F6], each delegated Schur or Sylvester call terminates. A fixed Schur–Parlett partition has finitely many block pairs and Jordan calls, terminating by step 3.1 and [F6]. Each merge strictly lowers the initial block count, which is at most $n$, so at most $n-1$ restarts occur. Every other failure is returned. Thus [F7] terminates. The principal-function routine adds only finitely many exact branch/sign comparisons before that procedure, or an unavailable-comparison return, so [F8] also terminates. Its branch test supplies no claim beyond its original spectral/holomorphic-domain assumptions. [F6, F7, F8, A1, step 3.1, algebra]

5.1 Steps 1.1–4.1 cover all seven procedures and their return branches. They bound only the explicitly counted rounded operations and finite loop counts; they neither bound the work of arbitrary-real exact arithmetic nor establish any separate analytic/error/iteration convergence premise. This is exactly the stated separation between termination, candidate generation and mathematical certificates. [step 1.1, step 2.1, step 3.1, step 3.2, step 4.1, algebra] ∎
