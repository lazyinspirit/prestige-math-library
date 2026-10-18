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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
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
$t_i=\xi_{i+1}$, with $n\ge p+1$, and write the real degree-$p$
coefficients as $c_0,\ldots,c_{n-1}$. The input includes $p\in\mathbb N_0$,
a nonempty span index $k$ with $p\le k\le n-1$ and $t_k<t_{k+1}$, a real
query, and the $p+1$ active coefficients $c_{k-p},\ldots,c_k$. The query is
either $x\in[t_k,t_{k+1})$ or, for the left limit at the right endpoint $b$,
$x=b$ with the last nonempty span supplied. At an interior knot, the
half-open convention selects the span on its right. In exact mode the
knots, query, and coefficients are real numbers. In floating-point mode the
knots, query, and active coefficients are finite stored real numbers in the
selected format; conversion into that format is outside this procedure.

The arithmetic mode is either exact real arithmetic or the operationwise
floating-point model of
[[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]].
The output is `success(value)`, `invalid-input`, or, in floating-point mode,
`range-failure(operation, r, j)`. The span search is supplied by the caller
and is not part of the evaluation loop. Invalid indices, coefficient counts,
span or query conditions, or floating-point input formats return
`invalid-input`.

1. If the indices, coefficient count, span, or query do not satisfy the
   input conditions, return `invalid-input`.
2. If $p=0$, return $c_k$ by copy.
3. Initialize $d_j^{(0)}=c_{k-p+j}$ for $0\le j\le p$.
4. For $r=1,\ldots,p$, and then $j=p,p-1,\ldots,r$, put
   $L=k-p+j$ and $U=k+1+j-r$. In exact mode set
   $\alpha=(x-t_L)/(t_U-t_L)$ and
   $d_j^{(r)}=(1-\alpha)d_{j-1}^{(r-1)}+\alpha d_j^{(r-1)}$. In
   floating-point mode first compute $v=\operatorname{fl}(x-t_L)$. On
   failure return `range-failure` for the numerator subtraction. If $v=0$,
   copy $d_{j-1}^{(r-1)}$ to $d_j^{(r)}$ and skip the denominator subtraction,
   division, complement subtraction, products, and addition. Otherwise
   compute $w=\operatorname{fl}(t_U-t_L)$ and then
   $\widehat\alpha=\operatorname{fl}(v/w)$; on the first failure return its
   operation and indices. Next compute
   $\widehat\beta=\operatorname{fl}(1-\widehat\alpha)$, followed by
   $a=\operatorname{fl}(\widehat\beta d_{j-1}^{(r-1)})$,
   $b=\operatorname{fl}(\widehat\alpha d_j^{(r-1)})$, and
   $d_j^{(r)}=\operatorname{fl}(a+b)$, in that order, returning the first
   `range-failure`. Keep the old $d_j^{(r-1)}$ until the update is complete.
5. Return `success(d_p^{(p)})`.

For every loop entry, $L\le k<U$, so
$t_L\le t_k<t_{k+1}\le t_U$ and the denominator is positive. The exact
weight therefore lies in $[0,1]$. When a span endpoint is requested as a
one-sided value, the same recurrence is evaluated at that endpoint with the
specified half-open or left-limit convention.
