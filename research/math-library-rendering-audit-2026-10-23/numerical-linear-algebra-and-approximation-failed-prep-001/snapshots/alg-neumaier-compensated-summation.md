---
id: alg-neumaier-compensated-summation
kind: algorithm
title: "Neumaier compensated summation with range-failure status"
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

For a finite list of $n\ge0$ real floating-point inputs $x_1,\ldots,x_n$, initialize $s_0=c_0=0$. For each $i=1,\ldots,n$, set $t_i=\operatorname{fl}(s_{i-1}+x_i)$. If $|s_{i-1}|\ge|x_i|$, set $q_i=\operatorname{fl}(s_{i-1}-t_i)$ and $a_i=\operatorname{fl}(q_i+x_i)$; otherwise set $q_i=\operatorname{fl}(x_i-t_i)$ and $a_i=\operatorname{fl}(q_i+s_{i-1})$. Then set $c_i=\operatorname{fl}(c_{i-1}+a_i)$ and $s_i=t_i$. Return $\operatorname{fl}(s_n+c_n)$, or the first range-failure and operation index.

## Remarks

The separate [[lem-finite-arithmetic-schedule-termination-and-count]] applies to four rounded operations per input index, either branch, and the final addition. It gives finite execution with at most $4n+1$ attempted rounded operations and exactly $4n+1$ on success. The branch comparison is of initialized real values. Successful error properties are proved in [[thm-kahan-and-neumaier-finite-error-identities]].
