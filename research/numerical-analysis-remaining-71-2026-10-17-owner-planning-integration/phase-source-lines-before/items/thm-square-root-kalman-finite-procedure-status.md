---
id: thm-square-root-kalman-finite-procedure-status
kind: theorem
title: "The square-root Kalman procedure returns a finite status"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - alg-finite-budget-square-root-kalman-filter
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
  - def-forward-and-back-substitution-for-triangular-systems
  - alg-scaled-householder-reflector-formation-and-application
  - lem-scaled-real-householder-step-termination-and-status
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Kevin S. Tracy, A Square-Root Kalman Filter Using Only QR Decompositions"
      url: "https://arxiv.org/pdf/2208.06452"
      locator: "§3.4, Algorithm 1, finite prediction/innovation/update loop"
    - title: "M. A. Salzmann, Some Aspects of Kalman Filtering, Technical Report 140"
      url: "https://gge.ext.unb.ca/Pubs/TR140.pdf"
      locator: "Chapter 3, §3.5.1, finite operation-count conventions for one filter cycle"
    - title: "Simo Särkkä, Bayesian Filtering and Smoothing"
      url: "https://users.aalto.fi/~ssarkka/pub/cup_book_online_20131111.pdf"
      locator: "Chapter 4, §4.3, finite-horizon filter recursion"
verification:
  precheck: pending
---

## Statement

For every finite admissible input to
[[alg-finite-budget-square-root-kalman-filter]] with finite state and
observation dimensions, the
procedure returns after finitely many arithmetic operations. For $T>0$ its
outcome is one of success, range-failure, or
innovation-factorization-failure. This is a termination and
status result only; it asserts neither that the numerical factorization
succeeds nor that an error bound holds.

## Facts & Assumptions

**Given:** The finite horizon, finite dimensions, finite input matrices and
vectors, and the declared finite-status behavior of the component procedures.

[F1] The algorithm has a loop over the finite horizon and each prediction,
measurement, factorization, and solve has a declared finite status.
[[alg-finite-budget-square-root-kalman-filter]]

[F2] Each scaled Householder step has finite loops and returns either its
declared identity/reflector result or its first range-failure status.
[[lem-scaled-real-householder-step-termination-and-status]]

[F3] Forward substitution computes one component at each finite index from
previous components and returns the unique exact triangular solution when
the diagonal is nonzero. [[def-forward-and-back-substitution-for-triangular-systems]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Every matrix or vector product in [F1] is evaluated by finitely many
left-to-right dot products because all dimensions are finite. Each scalar
operation either returns a finite value in the declared arithmetic model or
the first range-failure status. Concatenation, zero padding, and block
partitioning use finitely many entries. [F1, given, algebra]

1.2 Each QR call processes a finite number of columns and, within a column,
a finite number of active entries. By [F2], each reflector step terminates
with an identity, reflector, or range-failure result; hence a QR call either
returns its reduced factor or a finite failure status. The upper-triangular
innovation solve has finitely many rows by [F3]. [F1, F2, F3, given, algebra]

2.1 The outer loop has at most $T$ steps, and for $T=0$ the algorithm returns
its initial pair immediately. By steps 1.1 and 1.2, every entered step terminates;
therefore the whole procedure returns after finitely many operations with a
declared status. No success or accuracy guarantee is asserted by this
termination result. [F1, step 1.1, step 1.2, induction, algebra] ∎
