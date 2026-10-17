---
id: thm-two-sum-error-free-transform
kind: theorem
title: "TwoSum returns the exact rounding error of a floating point sum"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-two-sum-error-free-transform
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pending
sources:
  references:
    - title: "Fundamentals of Numerical Computation, floating-point arithmetic"
      url: https://fncbook.com/floating-point/
    - title: "Higham, The Accuracy of Floating Point Summation"
      url: https://nhigham.com/wp-content/uploads/2023/10/high93s.pdf
    - title: "Ogita, Rump, and Oishi, Accurate Sum and Dot Product"
      url: https://www.tuhh.de/ti3/paper/rump/OgRuOi05.pdf
---

## Statement

Let $a,b$ be real floating-point numbers successfully processed by [[alg-two-sum-error-free-transform]]. Its output $(s,e)$ is claimed to satisfy $s+e=a+b$ exactly in real arithmetic.
## Facts & Assumptions

**Given:** the successful rounded sequence in TwoSum.

[F1] [[alg-two-sum-error-free-transform]]: the algorithm computes s=fl(a+b), z=fl(s-a), and its stated rounded residual expression.

[F2] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]: successful real operations satisfy the operationwise rounding model and range rule.

## Proof

1.1 Writing each intermediate rounded operation as its exact operands plus its rounding error reduces the asserted equality to showing that the evaluated subtractions s-z, a-(s-z), b-z, and the final addition preserve the exact cancellation. [given, F1, F2, algebra]

1.2 If those subexpressions were exact, then (a-(s-z))+(b-z)+s=a+b. The relative model [F2] does not itself prove exactness of those subtractions and the final addition in every sign and exponent case. The required Sterbenz and range-boundary case analysis is unresolved, so this is not a proof of the asserted claim. [step 1.1, F2, algebra]

## Owner escalation

The missing obligation is a complete proof for all successful inputs, including opposite signs, zero, and exponent-boundary cases. The reviewed full-text sources state the transformation but do not supply that complete case argument.
