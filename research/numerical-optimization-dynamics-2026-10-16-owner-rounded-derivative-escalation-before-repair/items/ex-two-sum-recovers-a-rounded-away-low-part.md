---
id: ex-two-sum-recovers-a-rounded-away-low-part
kind: example
title: "TwoSum recovers a rounded away low part"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-two-sum-error-free-transform
  - thm-two-sum-error-free-transform
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
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
    - title: "Higham, The Accuracy of Floating Point Summation"
      url: https://nhigham.com/wp-content/uploads/2023/10/high93s.pdf
    - title: "Ogita, Rump, and Oishi, Accurate Sum and Dot Product"
      url: https://www.tuhh.de/ti3/paper/rump/OgRuOi05.pdf
---

## Statement

In binary64 RNE take a=1, b=2^-53. The sum rounds to s=1 by ties-to-even; z=fl(s-a)=0; then e=fl((1-(1-0))+(2^-53-0))=2^-53 exactly. This particular call returns (1,2^-53) and preserves the exact sum although the leading rounded sum loses the low part.

## Facts & Assumptions
**Given:** binary64 RNE with a=1 and b=2^-53.

[F1] [[alg-two-sum-error-free-transform]]: the algorithm evaluates the displayed s,z,e sequence.

[F2] [[thm-two-sum-error-free-transform]]: the intended identity is $s+e=a+b$ when the call succeeds.

[F3] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]: binary64 addition uses round-to-nearest, ties-to-even.

## Proof

1.1 The increment is half an ulp at 1, so ties-to-even gives s=1 and z=fl(1-1)=0. [given, F1, F3, algebra]

2.1 The residual expression is (1-(1-0))+(2^-53-0)=2^-53 exactly; hence e=2^-53 and s+e=a+b for this input. [step 1.1, F1, F2, F3, algebra] ∎