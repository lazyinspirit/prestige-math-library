---
id: alg-rounded-cholesky-with-failure-status
kind: algorithm
title: "Failure-aware rounded Cholesky factorization"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
  - def-cholesky-factorisation-with-positive-diagonal
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Fundamentals of Numerical Computation, floating-point arithmetic"
      url: https://fncbook.com/floating-point/
    - title: "Fundamentals of Numerical Computation, Cholesky factorization"
      url: https://fncbook.com/structure/
    - title: "Stuart and Voss, Matrix Analysis and Algorithms, Warwick lecture notes"
      url: https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf
---

## Definition

Input a Hermitian positive-definite matrix $A\in\mathbb C^{n\times n}$, $n\ge1$, whose real and imaginary components are in the floating-point system, in the convention of [[def-cholesky-factorisation-with-positive-diagonal]]; real matrices are included. Set L-hat=0. For j=1,...,n, form the diagonal sum from rounded real squares of the real and imaginary components of l_jk and rounded additions, then p_j=fl(a_jj-sum_{k<j}|l_jk|^2). If an operation fails or p_j is not positive normal, return failure(j). Set l_jj=fl(sqrt(p_j)); unless this is positive normal return failure(j). For i>j, form c_ij by sequential complex products with six real operations each and componentwise rounded additions; form r_ij=fl(a_ij-c_ij) componentwise and divide each real component by positive l_jj with one rounded real division. Any range failure returns failure(j) with the operation index. If all columns finish, return success(L-hat). The loops are finite. By [[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]], exact positive definiteness ensures an exact factor exists, but does not ensure the rounded algorithm succeeds.

## Facts & Assumptions
**Given:** a finite input of the stated type and the operationwise arithmetic model.

[F1] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]: each successful elementary operation returns a finite value, and an invalid or out-of-range operation returns a failure status.

## Proof

1.1 Every loop index ranges over the finite input length or matrix dimensions; any branch test in the definition is a comparison of already supplied finite values. [given, choose]

2.1 At each operation the model [F1] either returns a finite next value or the defined failure status, and every loop has its stated finite bound. Thus execution terminates with the specified output or first failure. [step 1.1, F1, algebra] ∎