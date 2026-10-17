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
    - title: "Stuart and Voss, Matrix Analysis and Algorithms, Warwick lecture notes"
      url: https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf
---

## Definition

Input real floating-point values $x_1,\ldots,x_n$, $n\ge1$. Set $d=\lceil\log_2 n\rceil$, place these values in leaves $1,\ldots,n$ from left to right, and append $2^d-n$ exact zero leaves. At level $\ell=1,\ldots,d$, replace each consecutive pair of current nodes $(a_{\ell-1,2j-1},a_{\ell-1,2j})$, in increasing $j=1,\ldots,2^{d-\ell}$, by
$$a_{\ell,j}=\operatorname{fl}(a_{\ell-1,2j-1}+a_{\ell-1,2j}).$$
If an operation fails, return `range-failure` with the first failing level $\ell$ and node $j$ in this level-by-level, left-to-right order. For $d=0$, return $x_1$ with no additions. Otherwise return the single node $a_{d,1}$.


## Remarks

For termination and the distinction between the successful full-tree addition count and a failing initial segment, apply [[lem-finite-arithmetic-schedule-termination-and-count]] to the prescribed levels. The operationwise model supplies each addition's finite value-or-failure return. Accuracy bounds require successful arithmetic.
