---
id: alg-de-boor-coefficient-evaluation
kind: algorithm
title: de Boor coefficient evaluation on a specified knot span
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-b-spline-space-and-basis
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Carl de Boor, A Practical Guide to Splines, revised edition, Chapter X, pp. 123–126
      url: https://www.stat.cmu.edu/~brian/valerie/617-2022/week07/spline%20references/pdfcookie.com_a-practical-guide-to-splines.pdf
    - title: Tom Lyche, Carla Manni, and Hendrik Speleers, B-Splines and Spline Approximation, §1.1
      url: https://www.mat.uniroma2.it/~speleers/cime2017/material/notes_lyche.pdf
---

## Definition

Use zero-based indices for this procedure: write the clamped knot vector from
[[def-b-spline-space-and-basis]] as $t_0\le\cdots\le t_{n+p}$, where
$t_i=\xi_{i+1}$, and write the degree-$p$ coefficients as
$c_0,\ldots,c_{n-1}$. The input includes $p\in\mathbb N_0$, a span index
$k$ with $t_k<t_{k+1}$, a query $x\in[t_k,t_{k+1})$, and the $p+1$
active coefficients $c_{k-p},\ldots,c_k$. At the right endpoint $b$, the
caller supplies the last nonempty span and requests its left limit. At an
interior knot the half-open convention selects the span on its right.

The arithmetic mode is either exact real arithmetic or the operationwise
floating-point model of
[[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]].
The output is `success(value)`, `invalid-input`, or, in floating-point mode,
`range-failure(operation, r, j)`. The span search is supplied by the caller
and is not part of the evaluation loop.

1. If the indices, coefficient count, span, or query do not satisfy the
   input conditions, return `invalid-input`.
2. If $p=0$, return $c_k$ by copy.
3. Initialize $d_j^{(0)}=c_{k-p+j}$ for $0\le j\le p$.
4. For $r=1,\ldots,p$, and then $j=p,p-1,\ldots,r$, put
   $L=k-p+j$ and $U=k+1+j-r$. In exact mode set
   $\alpha=(x-t_L)/(t_U-t_L)$ and
   $d_j^{(r)}=(1-\alpha)d_{j-1}^{(r-1)}+\alpha d_j^{(r-1)}$.
   In floating-point mode perform the numerator subtraction and denominator
   subtraction, then the division. If the rounded numerator is exact zero,
   copy $d_{j-1}^{(r-1)}$ to $d_j^{(r)}$ and skip the remaining operations.
   Otherwise perform the complement subtraction, two multiplications and
   addition in that order, applying the model to each primitive operation.
   On the first `range-failure`, return its operation and indices. Keep the
   old $d_j^{(r-1)}$ until the update is complete.
5. Return `success(d_p^{(p)})`.

For every loop entry, $L\le k<U$, so
$t_L\le t_k<t_{k+1}\le t_U$ and the denominator is positive. The exact
weight therefore lies in $[0,1]$. When a span endpoint is requested as a
one-sided value, the same recurrence is evaluated at that endpoint with the
specified half-open or left-limit convention.
