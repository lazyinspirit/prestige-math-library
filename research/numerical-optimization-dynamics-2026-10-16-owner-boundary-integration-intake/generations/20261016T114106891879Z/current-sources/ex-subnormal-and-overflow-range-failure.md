---
id: ex-subnormal-and-overflow-range-failure
kind: example
title: "Subnormal and overflow branches return range failure"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
  - alg-balanced-pairwise-summation
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Fundamentals of Numerical Computation, floating-point arithmetic"
      url: https://fncbook.com/floating-point/
    - title: "Stuart and Voss, Matrix Analysis and Algorithms, Warwick lecture notes"
      url: https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf
---

## Statement

Use binary64 and the no-subnormal success policy. Put N_min=2^-1022 and the least positive subnormal 2^-1074. Inputs N_min and -(N_min+2^-1074) are normal, but their exact sum is -2^-1074, so the only tree sum in pairwise summation returns range-failure. Also N_max+N_max overflows at the root and returns range-failure. These are policy branches, not claims that IEEE hardware lacks gradual underflow.

## Facts & Assumptions
**Given:** binary64 normal endpoints and the no-subnormal range rule.

[F1] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]: nonzero subnormal and overflow results return range-failure.

[F2] [[alg-balanced-pairwise-summation]]: each internal sum is rounded and the first failure is returned.

## Proof

1.1 The exact first sum is 2^-1022-(2^-1022+2^-1074)=-2^-1074, a nonzero subnormal; [F1] therefore returns range-failure. [given, F1, algebra]

2.1 The exact sum N_max+N_max exceeds the largest finite normal magnitude, so the root triggers the same status under [F2]. [given, F1, F2, algebra] ∎