---
id: alg-two-product-fma-error-free-transform
kind: algorithm
title: "TwoProduct product and residual computation using fused multiply-add"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
justified_by: [lem-two-product-kahan-neumaier-termination-and-status]
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

For real floating-point a,b compute p=fl(ab), then e=fma(a,b,-p). Return range-failure if the product overflows, the exact FMA residual is nonzero subnormal or overflow, or another operationwise range condition fails; otherwise return (p,e). The procedure uses one multiplication and one fused multiply-add and terminates. Exact recovery is claimed only if ab-p is representable as zero or a normal number.
