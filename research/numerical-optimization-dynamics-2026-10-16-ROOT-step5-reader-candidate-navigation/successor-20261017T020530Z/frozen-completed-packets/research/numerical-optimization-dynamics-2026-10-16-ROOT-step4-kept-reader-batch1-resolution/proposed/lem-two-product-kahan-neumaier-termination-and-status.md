---
id: lem-two-product-kahan-neumaier-termination-and-status
kind: lemma
title: "TwoProduct, Kahan, and Neumaier procedures terminate with defined statuses"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-two-product-fma-error-free-transform
  - alg-kahan-compensated-summation
  - alg-neumaier-compensated-summation
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Fundamentals of Numerical Computation, floating-point arithmetic"
      url: https://fncbook.com/floating-point/
---

## Statement

On every admitted finite input, [[alg-two-product-fma-error-free-transform]], [[alg-kahan-compensated-summation]], and [[alg-neumaier-compensated-summation]] terminate with their specified output or failure status. TwoProduct attempts at most two rounded operations. For input length $n\ge0$, Kahan attempts at most $4n$ rounded operations, and Neumaier at most $4n+1$. If no operation fails these are the respective operation counts. For an empty list, both summation procedures return exactly zero. This result does not assert unconditional arithmetic success or an accuracy bound.

## Facts & Assumptions

**Given:** The admitted finite inputs, the specified operation schedules, and the operationwise arithmetic model.

[F1] [[alg-two-product-fma-error-free-transform]] specifies one multiplication followed by one fused multiply-add, with failure returned if an operationwise range condition fails.

[F2] [[alg-kahan-compensated-summation]] specifies initialization at zero and the ordered four-operation recurrence $y_i,s_i,d_i,c_i$ for $i=1,\ldots,n$, returning its first failure or $s_n$.

[F3] [[alg-neumaier-compensated-summation]] specifies initialization at zero, one magnitude comparison and the four operations $t_i,q_i,a_i,c_i$ in the selected branch for each $i$, followed by the rounded addition $s_n+c_n$; it returns its first failure or that final value.

[F4] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]] makes every attempted elementary operation return its finite rounded value or a failure status. An exact zero is rounded exactly; copies and sign changes are exact.

## Proof

1.1 By [F1], TwoProduct has just the ordered multiply and FMA. By [F4], either the multiplication fails and the procedure returns, or it supplies a finite $p$ for the FMA, which returns a finite $e$ or a failure. The extra range checks are finite. Hence at most two rounded operations are attempted, and if neither fails the specified pair is returned. [given, F1, F4, algebra]

1.2 For Kahan, the initial state is finite. Each loop index executes the fixed four-operation schedule in [F2]; [F4] either supplies the finite state for the next operation or returns a failure immediately. Induction over the $n$ indices therefore gives termination after at most $4n$ attempted rounded operations, with the specified output if all succeed. If $n=0$, there is no loop operation and the returned $s_0$ is exactly zero. [given, F2, F4, induction, algebra]

1.3 For Neumaier, every reached state and input is finite, so its magnitude comparison selects exactly one of the branches in [F3], including equality in the first branch. Either branch has exactly the four ordered rounded operations described there, and [F4] supplies a next finite state or an immediate failure. Induction over the $n$ indices, followed by the one final addition, bounds attempted operations by $4n+1$ and proves the specified output-or-failure return. At $n=0$, that final addition is the exact zero $0+0$ and returns zero by [F4]. [given, F3, F4, induction, algebra]

2.1 On a branch with no failure, all scheduled operations in steps 1.1–1.3 are executed, so the corresponding counts are exactly $2$, $4n$, and $4n+1$. Each failure branch exits at the first prescribed failure and cannot execute more operations. These steps establish all stated termination, status, count, and empty-input conclusions without assuming arithmetic success. [step 1.1, step 1.2, step 1.3, algebra] ∎

## Remarks

This proposed result extracts finite-schedule arguments from the three existing procedure carriers. The reference is inherited as arithmetic context; no additional external full-text reading is claimed. Exact TwoProduct residual recovery and compensated-summation error identities remain in their existing separate theorems.
