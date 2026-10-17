---
id: alg-dyadic-square-root-bisection
kind: algorithm
title: Exact dyadic bisection for square-root endpoints
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: outward-rounded-interval-and-ball-arithmetic
dependency_level: 2
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-dyadic-floating-point-format-and-directed-rounding, lem-nonnegative-square-root-exists-and-unique]
justified_by: [thm-dyadic-square-root-bisection-encloses]
verification:
  precheck: pending
sources:
  references:
    - title: "Kearfott, Interval Computations: Introduction, Uses, and Resources, §1"
      url: "https://interval.louisiana.edu/preprints/survey.pdf"
    - title: "Rump, Verification methods: Rigorous results using floating-point arithmetic, §7"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
---

## Definition

Input: a nonnegative exact dyadic rational $x$ and integer request $n\ge1$.
Output: an exact dyadic lower and upper bound for $\sqrt{x}$; no finite
storage format is needed by this procedure.

1. If $x=0$, return $[0,0]$.
2. Otherwise determine the unique integer $j$ with $2^j\le x<2^{j+1}$ from the
   exact dyadic representation, put $m=\lfloor j/2\rfloor$ and
   $\delta=2^{m-n}$.
3. Set integer indices $L=0$ and $U=2^{n+1}$. While $U-L>1$, put
   $Q=\lfloor(L+U)/2\rfloor$. If $(Q\delta)^2\le x$, replace $L$ by $Q$;
   otherwise replace $U$ by $Q$.
4. Return the exact dyadic pair $[L\delta,U\delta]$. A caller that stores
   these endpoints in a selected finite format must separately round the
   lower endpoint down and the upper endpoint up, propagating the resulting
   `subnormal` or `overflow` status.

All comparisons and multiplications in the loop are exact integer/dyadic
operations. The loop has at most $n+1$ iterations.

