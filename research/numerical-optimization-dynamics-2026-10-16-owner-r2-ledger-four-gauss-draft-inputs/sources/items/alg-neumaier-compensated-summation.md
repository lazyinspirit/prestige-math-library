---
id: alg-neumaier-compensated-summation
kind: algorithm
title: "Neumaier compensated summation with range-failure status"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
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

## Definition

For real floating-point inputs $x_1,\ldots,x_n$ initialize s_0=c_0=0. Set t_i=fl(s_{i-1}+x_i). If |s_{i-1}|>=|x_i| set q_i=fl(s_{i-1}-t_i), a_i=fl(q_i+x_i); otherwise set q_i=fl(x_i-t_i), a_i=fl(q_i+s_{i-1}). Then set c_i=fl(c_{i-1}+a_i), s_i=t_i. Return fl(s_n+c_n), or the first range-failure and operation index. The branch test is defined for all real inputs and the loop terminates.

## Facts & Assumptions
**Given:** a finite input of the stated type and the operationwise arithmetic model.

[F1] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]: each successful elementary operation returns a finite value, and an invalid or out-of-range operation returns a failure status.

## Proof

1.1 Every loop index ranges over the finite input length or matrix dimensions; any branch test in the definition is a comparison of already supplied finite values. [given, choose]

2.1 At each operation the model [F1] either returns a finite next value or the defined failure status, and every loop has its stated finite bound. Thus execution terminates with the specified output or first failure. [step 1.1, F1, algebra] ∎