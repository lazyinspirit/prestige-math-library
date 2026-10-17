---
id: alg-computed-francis-schur-reduction
kind: algorithm
title: "Computed finite-budget Francis Schur reduction"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-complex-scaled-householder-reflector-step
  - alg-exact-francis-hessenberg-qr-step
  - alg-scaled-householder-reflector-formation-and-application
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
  - def-real-and-complex-schur-forms
  - def-unshifted-and-shifted-qr-iteration-with-deflation-and-wilkinson-shift
  - lem-real-francis-double-shift-polynomial
  - lem-scaled-householder-step-meets-local-backward-error-premise
  - thm-householder-similarity-reduces-to-hessenberg-and-tridiagonal-form
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "James Demmel, Math 221 Lecture 16: Hessenberg reduction and implicit Q"
      url: https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_16.html
    - title: "David Bindel, CS 6210 Matrix Computations, Hessenberg QR iteration"
      url: https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-10-29.html
    - title: "Per-Olof Persson, The QR Algorithm II"
      url: https://ocw.mit.edu/courses/18-335j-introduction-to-numerical-methods-spring-2019/26ed98a9d8ea1b69ae3bd2817a0bb1c1_MIT18_335JS19_lec16_reading2.pdf
---

## Definition

Inputs are $A\in\mathbb F^{n\times n}$ for $\mathbb F=\mathbb R$ or $\mathbb C$, tolerance $\tau\ge0$, sweep budget $N\in\mathbb N$, stagnation period $h\ge1$, and finite exceptional-shift tables. Initialize a partial factor list $Q$ with the Householder Hessenberg reduction, applying each stored real reflector to both sides in the operation order specified by [[alg-scaled-householder-reflector-formation-and-application]]; in the complex branch use [[alg-complex-scaled-householder-reflector-step]]. The product of the exact reflectors associated with the stored vectors is the represented unitary factor $Q$.

For each sweep up to $N$:

1. On each active block, set $h_{i,i-1}$ to zero exactly when
   $$|h_{i,i-1}|\le\tau\bigl(|h_{i-1,i-1}|+|h_{i,i}|\bigr),$$
   and record the value removed. A complex block of size at least two uses a single shift, normally its last diagonal entry. A real block uses the trace/determinant polynomial of its trailing $2\times2$ block. After $h$ sweeps without deflation, use the next exceptional shift from the supplied table; if none remains, return stagnation-exhausted.
2. For every active block, execute the corresponding step of [[alg-exact-francis-hessenberg-qr-step]] using the stored reflectors, rounding each real or complex operation under [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]. Apply a stored reflector on the right by applying the same left-update routine to the adjoint and taking the adjoint back. Range-failure or breakdown returns the first failing operation and the partial factors.
3. Return Schur-computed if every complex block has size one, or every real block has size one or is a $2\times2$ block with negative characteristic-polynomial discriminant. Return budget-exhausted if the sweep cap is reached first. If a completed factorization lacks a proof-backed local error certificate for any update, retain its residual diagnostic and set certificate-status to inconclusive.

Return $Q$ as its exact product representation, the computed triangular or quasi-triangular factor, the removed deflation entries, the residual diagnostic $\|\widehat A-Q\widehat TQ^*\|_F$, the orthogonality bound $0$ for the product representation, and the certificate or status. No shift rule is asserted to converge unconditionally.

## Facts & Assumptions

**Given:** A finite real or complex square matrix, the finite controls and exceptional-shift tables, and the operationwise arithmetic model.

[F1] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]: each operation either returns its finite rounded value or a range-failure status.

[F2] [[alg-exact-francis-hessenberg-qr-step]]: one exact implicit single- or double-shift step has a finite reflector loop.

[F3] [[thm-householder-similarity-reduces-to-hessenberg-and-tridiagonal-form]]: a square real or complex matrix can be reduced to Hessenberg form by finitely many Householder similarities.

[F4] [[alg-scaled-householder-reflector-formation-and-application]]: the current numerical reflector procedure is defined for real inputs only.

[F5] [[lem-scaled-householder-step-meets-local-backward-error-premise]]: its zero-column local error case is proved, while the nonzero real estimate is explicitly unresolved.

[F6] [[alg-complex-scaled-householder-reflector-step]]: the local complex reflector routine has finite control loops and explicit failure branches but no local backward-error estimate.

## Proof

1.1 The initial Hessenberg reduction has at most $n-2$ columns. By [F3] it uses finitely many exact reflectors; the computed branches in [F4] and [F6] either return their specified result or terminate with their stated failure. [given, F3, F4, F6, choose]

1.2 Each sweep performs finitely many deflation tests and at most $n-2$ implicit reflectors per active block by [F2]. There are at most $N$ sweeps. By [F1], every operation returns a finite value or ends with range-failure; the finite shift tables also give the stated stagnation-exhausted branch. [given, F1, F2]

2.1 Therefore the algorithm terminates with one of its declared Schur-computed, budget-exhausted, stagnation-exhausted, breakdown, or range-failure statuses. Its definition does not manufacture a local error certificate when [F5] or [F6] supplies none. [step 1.1, step 1.2, F5, F6, algebra] ∎
