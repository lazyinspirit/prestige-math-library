---
id: thm-sqp-merit-globalization-finite-budget-status
kind: theorem
title: "Finite merit-globalization budgets return a defined status"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - alg-sqp-merit-globalization-with-finite-budgets
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

For finite caps $R,J\ge1$ and finite-valued merit evaluations, the procedure
of [[alg-sqp-merit-globalization-with-finite-budgets]] terminates with
exactly one of its specified accepted, QP, nonpositive-prediction, or
line-search statuses. In particular, the theorem asserts no unconditional
accepted step.

## Facts & Assumptions

**Given:** The globalization algorithm, finite positive caps, and
well-defined finite arithmetic evaluations at every tested in-domain point.

[F1] [[alg-sqp-merit-globalization-with-finite-budgets]] performs at most
$R$ penalty attempts and at most $J$ ordinary trial tests per attempt,
plus one optional SOC test.

[A1] The caps $R,J$ are positive finite integers and every in-domain merit
evaluation terminates with a finite value.

## Proof

1.1 The exact QP routine in [F1] tests at most $2^m$ subsets, so it returns a QP status after finitely many tests. A returned infeasible or failure status terminates immediately. Otherwise each penalty attempt computes one finite prediction and either advances or executes a finite list of tests. [A1, F1, algebra]

2.1 There are at most $R(1+J)$ globalization tests. A passing test returns an accepted status; if none passes, the finite record of whether any $D_r>0$ selects exactly one of the two stated budget statuses. Thus the routine terminates with a defined status, without implying that any test must pass. [A1, F1, step 1.1, algebra] ∎
