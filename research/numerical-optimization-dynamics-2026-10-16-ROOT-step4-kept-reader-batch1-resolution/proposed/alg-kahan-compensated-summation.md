---
id: alg-kahan-compensated-summation
kind: algorithm
title: "Kahan compensated summation with range-failure status"
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

For a finite list of $n\ge0$ real floating-point inputs $x_1,\ldots,x_n$, initialize $s_0=c_0=0$. For $i=1,\ldots,n$ compute $y_i=\operatorname{fl}(x_i-c_{i-1})$, $s_i=\operatorname{fl}(s_{i-1}+y_i)$, $d_i=\operatorname{fl}(s_i-s_{i-1})$, and $c_i=\operatorname{fl}(d_i-y_i)$, in that order. Return $s_n$, or the first range-failure and its operation index. There are $4n$ rounded operations, so the finite loop terminates. Its data-dependent error identity is proved separately.
