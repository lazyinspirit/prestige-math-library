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
    - title: "Shewchuk, Adaptive Precision Floating-Point Arithmetic and Fast Robust Geometric Predicates, §§2.1–2.3"
      url: https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
---

## Definition

At each precision, let the representable set, normal range, and unit roundoff be an instance of [[def-standard-relative-floating-point-model-and-unit-roundoff]] specialized to a finite binary format of integer precision $p\ge2$ and integer normal-exponent bounds $j_{\min}\le j\le j_{\max}$. Its normal values are $\pm m2^{j-p+1}$ for integers $2^{p-1}\le m<2^p$ and $j_{\min}\le j\le j_{\max}$, with $N_{\min}=2^{j_{\min}}$ and $N_{\max}=(2^p-1)2^{j_{\max}-p+1}$. The rounding rule is round-to-nearest, ties-to-even by the parity of the normalized significand. Each precision in a mixed-precision procedure has its own format, range, and valid unit-roundoff bound. On every real exact result that is zero or normal, $\operatorname{fl}$ uses this rule; every other nonzero exact result (subnormal or overflow), NaN, infinity, invalid operation, or division by zero returns range-failure. A real add, subtract, multiply, or divide is one rounded operation. For positive in-range $x$, $\operatorname{fl}(\sqrt{x})$ is correctly rounded to nearest, ties-to-even, and fails unless its result is positive and normal. A real fused multiply-add returns the correctly rounded value of the single exact expression $ab+c$; it is not two operations.

Complex addition and subtraction round real and imaginary components separately. A complex product (a+ib)(c+id) uses four rounded real products ac, bd, ad, bc, then rounded subtraction and addition, for six real operations. Conjugation and sign changes are exact. Scaling and division by a positive real scalar round each complex component separately; no other complex division primitive is used here.

A procedure succeeds only when each exact intermediate is zero or normal and every rounded output is finite; otherwise it returns the first range-failure with its operation or pivot index. For ku<1 write gamma_k=ku/(1-ku). This is a no-underflow success model, not the gradual-underflow model.
