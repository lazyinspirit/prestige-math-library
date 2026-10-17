---
id: ex-full-rank-least-squares-normal-equations-versus-qr
kind: example
title: "A full rank least squares problem where rounded normal equations lose the pivot"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - thm-computed-full-rank-least-squares-backward-stability
  - thm-reduced-qr-solves-full-column-rank-least-squares-without-squaring-the-condition-number
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
    - title: "Fundamentals of Numerical Computation, normal equations"
      url: https://fncbook.com/normaleqns/
    - title: "Fundamentals of Numerical Computation, QR factorization and least squares"
      url: https://fncbook.com/qr/
    - title: "Stuart and Voss, Matrix Analysis and Algorithms, Warwick lecture notes"
      url: https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf
---

## Example

In binary64 RNE take A=((1,1),(0,2^-27)). Its determinant 2^-27 is nonzero. The exact Gram matrix is A^T A=((1,1),(1,1+2^-54)). The spacing above 1 is 2^-52, so the midpoint is 1+2^-53; 1+2^-54 lies strictly below it and rounds to 1. Thus the formed Gram matrix has equal rows and is singular. Reduced QR works directly on A and avoids forming this rounded Gram matrix; the computed stability statement remains conditional on its own hypotheses.

## Facts & Assumptions
**Given:** binary64 RNE and A=((1,1),(0,2^-27)).

[F1] [[thm-reduced-qr-solves-full-column-rank-least-squares-without-squaring-the-condition-number]]: exact reduced QR solves full-rank least squares without forming the Gram matrix.

[F2] [[thm-computed-full-rank-least-squares-backward-stability]]: the computed guarantee is conditional on the listed QR and solve premises.

[F3] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]: binary64 operations use round-to-nearest, ties-to-even.

## Verification

1.1 The determinant is 2^-27, while direct multiplication gives (A^T A)_22=1+2^-54. [given, algebra]

2.1 Since 2^-54<2^-53, the exact entry is strictly below the RNE midpoint above 1 and rounds to 1. The rounded Gram matrix has equal rows and is singular. [step 1.1, F3, algebra]

3.1 The exact result [F1] acts on the full-rank A without a Gram formation. The computed conclusion [F2] applies only if its separate successful-step hypotheses hold. [step 1.1, step 2.1, F1, F2] ∎