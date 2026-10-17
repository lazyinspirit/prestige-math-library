---
id: thm-two-product-fma-error-free-transform
kind: theorem
title: "TwoProduct with fused multiply-add returns the exact product residual"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-two-product-fma-error-free-transform
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
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

Let $a,b$ be real floating-point numbers successfully processed by [[alg-two-product-fma-error-free-transform]], and assume the exact residual $ab-p$ is representable as zero or a normal number. Then the returned pair satisfies $p+e=ab$ exactly.
## Facts & Assumptions
**Given:** the returned product p and fused multiply-add residual.

[F1] [[alg-two-product-fma-error-free-transform]]: p=fl(ab) and e=fma(a,b,-p).

[F2] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]: fused multiply-add rounds the single exact expression ab+c to nearest.

## Proof

1.1 The exact value supplied to the FMA is ab-p. By the representability assumption and correct rounding in [F2], e=ab-p exactly. [given, F1, F2, algebra]

2.1 Adding p gives p+e=ab. The addition here is in the real-number conclusion, not an extra rounded operation. [step 1.1, algebra] ∎