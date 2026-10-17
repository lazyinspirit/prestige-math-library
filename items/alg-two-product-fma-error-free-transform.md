---
id: alg-two-product-fma-error-free-transform
kind: algorithm
title: "TwoProduct product and residual computation using fused multiply-add"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
  - lem-finite-arithmetic-schedule-termination-and-count
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Fundamentals of Numerical Computation, floating-point arithmetic"
      url: https://fncbook.com/floating-point/
    - title: "Higham, The Accuracy of Floating Point Summation"
      url: https://nhigham.com/wp-content/uploads/2023/10/high93s.pdf
    - title: "Ogita, Rump, and Oishi, Accurate Sum and Dot Product"
      url: https://www.tuhh.de/ti3/paper/rump/OgRuOi05.pdf
---

## Definition

For real floating-point a,b compute p=fl(ab), then e=fma(a,b,-p). Return range-failure if the product overflows, the exact FMA residual is nonzero subnormal or overflow, or another operationwise range condition fails; otherwise return (p,e).

## Remarks

The separate [[lem-finite-arithmetic-schedule-termination-and-count]] applies to the ordered multiplication and FMA, each returning a finite result or immediate range failure. It gives at most two attempted rounded operations and exactly two on success. Exact recovery under representability of the residual as zero or a normal number is proved in [[thm-two-product-fma-error-free-transform]].
