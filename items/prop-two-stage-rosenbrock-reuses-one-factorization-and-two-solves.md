---
id: prop-two-stage-rosenbrock-reuses-one-factorization-and-two-solves
title: "The two-stage Rosenbrock update reuses one shifted factorization for two solves"
kind: proposition
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-two-stage-rosenbrock-w-method
  - alg-rosenbrock-shifted-qr-solver-with-residual-certificate
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
      locator: "§3.5, printed pp. 42–44: a common shifted matrix and factorization reuse"
---

## Statement

On every successful call of [[alg-two-stage-rosenbrock-w-method]], the procedure forms one matrix $W=I-\alpha h\widetilde J$, factorizes it once, and uses that stored factor object for exactly two stage right-hand sides, one for $k_1$ and one for $q_2$. Thus it uses one shifted-matrix factorization and two triangular solves. This is an operation-count statement, not a claim that either solve succeeds.

## Facts & Assumptions

**Given:** A successful execution of the two-stage method with a finite-dimensional shifted matrix.

[F1] [[alg-two-stage-rosenbrock-w-method]]: the procedure factors $W$ once, solves the first stage, then calls the same factor object's solve operation for $Wq_2=F_1-k_1$.

[F2] [[alg-rosenbrock-shifted-qr-solver-with-residual-certificate]]: one factor object stores a single QR factorization and each call to its solve operation applies that factorization and performs one triangular substitution.

## Proof

**Given:** The successful execution in the Statement.

1.1 The first instruction of [F1] constructs $W$ and makes one factorization call, producing the factor object specified by [F2]. [given, F1, F2]

2.1 The algorithm calls that object's solve once for the $k_1$ right-hand side and once for the $q_2$ right-hand side; neither call constructs a new factor object. By [F2], each such call performs one triangular solve. [F1, F2, step 1.1]

3.1 Counting the calls in step 1.1 and step 2.1 gives exactly one factorization and exactly two triangular solves on a successful execution, as asserted. [step 1.1, step 2.1, algebra] ∎
