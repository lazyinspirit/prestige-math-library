---
id: thm-bounded-mixed-integer-finite-budget-terminates
kind: theorem
title: Finite-budget bounded mixed-integer branch and bound terminates
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: global-optimization-and-certified-branch-and-bound
dependency_level: 8
proof_strategy: direct
deps: [alg-bounded-mixed-integer-branch-and-bound, thm-finite-budget-spatial-bnb-terminates]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Arnold Neumaier, Complete Search in Continuous Global Optimization and Constraint Satisfaction, §§12 and 17"
      url: "https://optimization-online.org/wp-content/uploads/2003/10/765.pdf"
---

## Statement

For finite bounded integer ranges, a positive integer node budget, and finite oracle calls, [[alg-bounded-mixed-integer-branch-and-bound]] terminates with a certificate or an explicit inconclusive status. This is a termination claim only; it gives no polynomial bound on the work.

## Facts & Assumptions

**Given:** A finite set of integer assignments, positive integer total node budget $N$, and the algorithm's deterministic main-tree and enumeration procedures.

[F1] Each main-tree node evaluation consumes one unit of the finite budget; the enumeration fallback is entered only when each of its finitely many assignments can be given a positive integer continuous node budget whose total is at most the remaining integer budget. [[alg-bounded-mixed-integer-branch-and-bound]]

[F2] Every admissible continuous spatial subcall with a positive integer node budget terminates within that budget. [[thm-finite-budget-spatial-bnb-terminates]]

## Proof

1.1 The main tree can make at most $N$ calls because each call decreases the remaining integer budget. Every integer interval split has at least two values and produces finite children; every continuous split produces two children. Thus no one iteration creates an infinite operation sequence. [given, F1, algebra]

2.1 Write $M=|Z|\ge1$ and let $R\le N$ be the remaining integer budget after main-tree calls. The fallback is entered only if $R\ge M$. Its allocation rule [F1] writes $R=Mq+h$ with integers $q=\lfloor R/M\rfloor\ge1$ and $0\le h<M$, and assigns $q+1$ calls to the first $h$ assignments and $q$ to the rest. Every subcall therefore has a positive integer node budget, and the allocations sum to $R$. The algorithm represents a zero-dimensional continuous box by a dummy singleton coordinate before calling suppliers, so every spatial input has dimension at least one. Each subcall terminates by [F2]; the finite enumeration and main-tree calls together use at most $N$ calls and return in finite time. [step 1.1, F1, F2, algebra] ∎

