---
id: def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
kind: definition
title: "Operationwise real and complex floating point arithmetic with rounded square roots and fused multiply-add"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-standard-relative-floating-point-model-and-unit-roundoff
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
    - title: "Stuart and Voss, Matrix Analysis and Algorithms, Warwick lecture notes"
      url: https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf
---

## Definition

Let the representable set, normal range, and unit roundoff be as in [[def-standard-relative-floating-point-model-and-unit-roundoff]]. Here fl is round-to-nearest, ties-to-even, on each real exact result that is zero or normal; every other nonzero exact result (subnormal or overflow), NaN, infinity, invalid operation, or division by zero returns range-failure. A real add, subtract, multiply, or divide is one rounded operation. For positive in-range x, fl(sqrt(x)) is correctly rounded to nearest, ties-to-even, and fails unless its result is positive and normal. A real fused multiply-add returns the correctly rounded value of the single exact expression ab+c; it is not two operations.

Complex addition and subtraction round real and imaginary components separately. A complex product (a+ib)(c+id) uses four rounded real products ac, bd, ad, bc, then rounded subtraction and addition, for six real operations. Conjugation and sign changes are exact. Scaling and division by a positive real scalar round each complex component separately; no other complex division primitive is used here.

A procedure succeeds only when each exact intermediate is zero or normal and every rounded output is finite; otherwise it returns the first range-failure with its operation or pivot index. For ku<1 write gamma_k=ku/(1-ku). This is a no-underflow success model, not the gradual-underflow model.
