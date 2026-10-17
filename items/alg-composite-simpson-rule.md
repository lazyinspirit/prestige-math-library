---
id: alg-composite-simpson-rule
kind: algorithm
title: Composite Simpson rule on an even uniform grid
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-finite-sum]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §5.6
      url: https://fncbook.com/integration/
      locator: Complete online section read; equations (5.6.14), (5.6.20)–(5.6.21), and Exercise 5.6.4
---

## Definition

Input real endpoints $a,b$, an integer $n$, and an evaluation function $f$.
If $a\ge b$ or $n<2$, return invalid-grid without evaluating $f$. For the
remaining inputs require $f:[a,b]\to\mathbb R$ to be evaluable at every
point of $[a,b]$. If $n$ is odd, the procedure returns
invalid-Simpson-panel-count. If $n$ is even, put
$h=(b-a)/n$ and $x_j=a+jh$ for $0\le j\le n$; return

$$Q_S(f;a,b,n):=\frac h3\sum_{j<n/2}\bigl(f(x_{2j})+4f(x_{2j+1})+f(x_{2j+2})\bigr).$$

The sum is a finite sum of [[def-finite-sum]]. Each two-panel block
$[x_{2j},x_{2j+2}]$ uses its endpoints and midpoint. Expanding the block sum
gives weights $1,4,2,\ldots,4,1$. The even condition
$n\ge2$ makes the number of blocks a positive integer. The formula is an exact-real
procedure; floating point evaluation and summation error are separate from
its quadrature error.
