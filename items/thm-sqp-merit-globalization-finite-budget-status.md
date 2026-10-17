---
id: thm-sqp-merit-globalization-finite-budget-status
kind: theorem
title: "Finite merit-globalization budgets return a defined status"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - alg-sqp-merit-globalization-with-finite-budgets
  - thm-sqp-exhaustive-active-set-qp-solve-correct-finite
  - alg-sqp-second-order-correction
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/NocedalJ.pdf
      locator: "Chapter 18 §18.5, L1 merit globalization, printed pp. 542–550 / PDF pp. 560–568."
---

## Statement

For finite caps $R,J_{\max}\ge1$ and finite-valued merit evaluations, the
procedure of [[alg-sqp-merit-globalization-with-finite-budgets]] terminates with
exactly one of its specified accepted, QP, nonpositive-prediction,
domain-exit, or line-search-budget statuses. Each accepted record contains
the trial point and QP multiplier vectors; an ordinary accepted record also
contains its fraction. In particular, the theorem asserts no unconditional
accepted step.

## Facts & Assumptions

**Given:** The globalization algorithm, finite positive caps, and
well-defined finite arithmetic evaluations at every tested in-domain point.

[F1] [[alg-sqp-merit-globalization-with-finite-budgets]] performs at most
$R$ penalty attempts and at most $J_{\max}$ ordinary trial tests per
attempt, plus at most one optional in-domain SOC test per attempt, and
records whether any positive prediction and any in-domain trial test
occurred.

[F2] [[thm-sqp-exhaustive-active-set-qp-solve-correct-finite]] proves
that the exact exhaustive QP solve terminates with a subproblem status.

[F3] [[alg-sqp-second-order-correction]] specifies a single active-residual
evaluation and a finite-dimensional rank test and linear solve, or its
zero-row or failure return.

[A1] The caps $R,J_{\max}$ are positive finite integers and every in-domain
merit evaluation terminates with a finite value.

## Proof

1.1 By [F2], the initial exact QP call returns after finitely many tests. An infeasible or failure status terminates the globalization routine immediately. Otherwise each penalty attempt computes one finite prediction and either advances or executes a finite list of tests. Each optional SOC call consists of the finite operations in [F3], including its zero-row and failure branches, so it also terminates. [A1, F1, F2, F3, algebra]

2.1 There are at most $R(1+J_{\max})$ globalization tests. A passing test returns an accepted record. If none passes, the stored flags select exactly one of the nonpositive-prediction, domain-exit, or line-search-budget-exhausted statuses according to whether any positive prediction and any in-domain test occurred. Thus the routine terminates with a defined status, without implying that any test must pass. [A1, F1, step 1.1, algebra] ∎
