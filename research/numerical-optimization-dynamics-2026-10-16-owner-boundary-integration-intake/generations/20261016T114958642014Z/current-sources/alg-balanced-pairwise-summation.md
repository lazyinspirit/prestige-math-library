---
id: alg-balanced-pairwise-summation
kind: algorithm
title: "Balanced pairwise summation with range-failure status"
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
    - title: "Stuart and Voss, Matrix Analysis and Algorithms, Warwick lecture notes"
      url: https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf
---

## Definition

Input real floating-point values $x_1,\ldots,x_n$, $n\ge1$. Set $d=\lceil\log_2 n\rceil$, place these values in leaves $1,\ldots,n$ from left to right, and append $2^d-n$ exact zero leaves. At level $\ell=1,\ldots,d$, replace each consecutive pair of current nodes $(a_{\ell-1,2j-1},a_{\ell-1,2j})$, in increasing $j=1,\ldots,2^{d-\ell}$, by
$$a_{\ell,j}=\operatorname{fl}(a_{\ell-1,2j-1}+a_{\ell-1,2j}).$$
If an operation fails, return `range-failure` with the first failing level $\ell$ and node $j$ in this level-by-level, left-to-right order. For $d=0$, return $x_1$ with no additions. Otherwise return the single node $a_{d,1}$. The tree is fully specified, terminates after $2^d-1$ additions, and its accuracy is asserted only on success.

## Facts & Assumptions
**Given:** a finite input of the stated type and the operationwise arithmetic model.

[F1] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]: each successful elementary operation returns a finite value, and an invalid or out-of-range operation returns a failure status.

## Proof

1.1 Every loop index ranges over the finite input length or matrix dimensions; any branch test in the definition is a comparison of already supplied finite values. [given, choose]

2.1 At each operation the model [F1] either returns a finite next value or the defined failure status, and every loop has its stated finite bound. Thus execution terminates with the specified output or first failure. [step 1.1, F1, algebra] ∎
