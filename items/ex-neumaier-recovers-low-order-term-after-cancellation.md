---
id: ex-neumaier-recovers-low-order-term-after-cancellation
kind: example
title: "Neumaier summation recovers a low order term after cancellation"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-neumaier-compensated-summation
  - thm-kahan-and-neumaier-finite-error-identities
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

## Example

In binary64 RNE sum (1,2^-53,-1). Ordinary left-to-right summation rounds 1+2^-53 to 1 by ties-to-even, then returns zero after adding -1. Neumaier step 2 gives s_1=1, t_2=1, q_2=0, a_2=2^-53, c_2=2^-53; step 3 gives t_3=0, q_3=1, a_3=0, c_3=2^-53. The final result is 2^-53, the exact sum. The finite error identity accounts for each branch correction and the final rounding.

## Facts & Assumptions
**Given:** binary64 round-to-nearest, ties-to-even.

[F1] [[alg-neumaier-compensated-summation]]: the method branches on the larger magnitude and returns the rounded sum plus compensation.

[F2] [[thm-kahan-and-neumaier-finite-error-identities]]: its identity includes each executed correction and final rounding.

[F3] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]: binary64 addition is round-to-nearest, ties-to-even.

## Verification

1.1 The value 2^-53 is half an ulp at 1, so 1+2^-53 rounds to 1. Ordinary summation then returns 0. [given, F3, algebra]

1.2 Neumaier step 2 selects |s_1|>=|x_2| and gives t_2=1,q_2=0,a_2=2^-53,c_2=2^-53; step 3 gives t_3=0,q_3=1,a_3=0,c_3=2^-53. [given, F1, F3, algebra]

2.1 The final exact addition 0+2^-53 is 2^-53, which is the exact sum; [F2] records this correction without claiming uniform relative accuracy. [step 1.2, F2, algebra] ∎