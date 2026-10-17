---
id: thm-rosenbrock-computational-steps-terminate-with-finite-work
title: "The Rosenbrock factorization and stage procedures terminate with finite work"
kind: theorem
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-rosenbrock-shifted-qr-solver-with-residual-certificate
  - alg-rosenbrock-euler-step
  - alg-two-stage-rosenbrock-w-method
  - alg-scaled-householder-reflector-formation-and-application
  - def-forward-and-back-substitution-for-triangular-systems
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
proof_strategy: direct
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Daniel Kressner, Advanced Numerical Analysis, §3.5 Rosenbrock methods"
      url: "https://www.epfl.ch/labs/anchp/wp-content/uploads/2018/05/AdvancedNA2015.pdf"
      locator: "§3.5, printed pp. 42–44: fixed factorization and finite stage counts"
    - title: "David Bindel, CS 6210 Matrix Computations, Lecture 4"
      url: "https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-09-10.html"
      locator: "Lecture 4, finite direct solve and residual evaluation procedures"
---

## Statement

For every finite dimension $d\ge1$, finite stored matrix, unit roundoff $u>0$ with $du<1$, and finite collection of stored right-hand sides and nonnegative residual tolerances in the input domains of [[alg-rosenbrock-shifted-qr-solver-with-residual-certificate]], [[alg-rosenbrock-euler-step]], and [[alg-two-stage-rosenbrock-w-method]], assume each called field-evaluation, exact-storage, and certificate-evaluation routine returns in finite work. Then the factorization operation, every requested solve operation, and each step procedure terminate after finitely many elementary operations with one of their stated success or failure statuses. Termination does not imply that the factorization is nonsingular, a residual is certified, or a step succeeds. No asymptotic runtime bound is claimed.

## Facts & Assumptions

**Given:** Finite dimension and finite input data in the procedures' stated domains.

[F1] [[alg-scaled-householder-reflector-formation-and-application]]: its loops range over the finite active column and trailing block, and every elementary operation returns a finite value or a failure status.

[F2] [[alg-rosenbrock-shifted-qr-solver-with-residual-certificate]]: factorization uses one reflector call per column; each solve uses a finite reflector list, triangular substitution, a finite residual check, and finitely many terminating certificate-evaluator calls.

[F3] [[def-forward-and-back-substitution-for-triangular-systems]]: back substitution is a descending finite recursion over the diagonal indices.

[F4] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]: each attempted arithmetic operation either returns a finite value or its declared failure status.

[F5] [[alg-rosenbrock-euler-step]]: a one-stage step performs one factorization and at most one solve.

[F6] [[alg-two-stage-rosenbrock-w-method]]: a two-stage step performs one factorization and at most two solves, with no iterative stage loop.

## Proof

**Given:** The finite input data in the Statement.

1.1 In dimension $d$, the QR factor routine calls the Householder procedure for exactly the $d$ column indices $0,\ldots,d-1$. Each call has finite active vector and block dimensions, so [F1] makes each call finite or returns its first failure. [given, F1, choose]

1.2 On a successful factorization, each solve applies at most $d$ stored reflectors, performs at most $d$ back-substitution stages by [F3], computes $d$ dot products and $d$ residual differences, and makes finitely many certificate-evaluator requests. Each loop has a finite index set, so [F2]–[F4] and the stated evaluator termination assumption imply that the solve also terminates with a stated result or failure. [F2, F3, F4, algebra]

2.1 By [F5], the one-stage procedure makes one factorization call and at most one solve call; by [F6], the two-stage procedure makes one factorization call and at most two solve calls. Each call terminates by steps 1.1–1.2, and the remaining branches are finite tests and finite vector operations. [F5, F6, step 1.1, step 1.2, algebra]

3.1 Thus the factorization call, every solve call in the finite request collection, and each step procedure execute finitely many operations and return the first encountered failure or a declared terminal status. This proves finite-work termination without a success or complexity assertion. [step 2.1, F4, given] ∎
