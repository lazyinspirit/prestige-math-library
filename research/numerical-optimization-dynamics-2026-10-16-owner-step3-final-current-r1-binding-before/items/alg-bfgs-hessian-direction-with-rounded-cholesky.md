---
id: alg-bfgs-hessian-direction-with-rounded-cholesky
kind: algorithm
title: "Bfgs Hessian direction by failure-aware Cholesky solve"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
  - alg-rounded-cholesky-with-failure-status
  - def-forward-and-back-substitution-for-triangular-systems
  - thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost
axiom_use: "None. This algorithm uses deterministic finite branches and loops with its listed numerical-analysis dependencies; no choice principle is used."
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 6 §6.1, equation (6.2) and the Hessian-matrix implementation discussion, printed pp. 137 and 143 / PDF pp. 155 and 161."
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation"
      url: "https://fncbook.com/structure/"
      locator: "§2.9, Cholesky factorization and triangular solves."
---

## Definition

Input a real symmetric positive-definite matrix $B\in\mathbb R^{n\times n}$, $n\ge1$, a vector $g\in\mathbb R^n$, and representable finite entries in the operationwise arithmetic model of [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]. **Output:** either a computed direction $p$ or a failure status.

1. Call [[alg-rounded-cholesky-with-failure-status]] on $B$. If it returns a failure status, return factorization-failure with that pivot and operation index.

2. If it returns a lower-triangular factor $\widehat L$ with positive normal diagonal, use the forward-substitution recursion of [[def-forward-and-back-substitution-for-triangular-systems]] to compute $\widehat L z=-g$, then its backward-substitution recursion to compute $\widehat L^T p=z$. Round each scalar operation under the given arithmetic model. If an operation returns range-failure, return triangular-solve-failure with the operation and row indices.

3. Otherwise return $p$. The exact-real reference problem is $Bp=-g$ and has a unique solution by [[thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost]]. The returned vector is the computed solve from $\widehat L$; this definition asserts no backward-error bound for it.

The procedure performs a finite factorization loop and two finite triangular loops. Its use in the full BFGS algorithm includes a subsequent descent check; if the computed direction is not descending, that algorithm resets to a positive scalar multiple of the negative gradient.
