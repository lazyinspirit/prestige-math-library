---
id: alg-composite-midpoint-rule
kind: algorithm
title: Composite midpoint rule on a uniform grid
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
  precheck: pending
sources:
  references:
    - title: MATH 373 lecture notes, §8 Approximation of Integrals
      url: https://sites.math.rutgers.edu/~falk/math373/lecture12.pdf
      locator: §8.2, printed p. 37/PDF p. 3, Composite Midpoint rule example; formula and composite error argument checked.
    - title: Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §5.6
      url: https://fncbook.com/integration/
      locator: Complete online section read; comparison treatment for equally spaced quadrature rules
---

## Definition

Input real numbers $a<b$, an integer $n\ge1$, and a real-valued function
$f:[a,b]\to\mathbb R$ evaluable at every point of $[a,b]$. Put
$h=(b-a)/n$ and $m_j=a+(j+\tfrac12)h$ for $0\le j<n$. The composite midpoint
rule returns

$$Q_M(f;a,b,n):=h\sum_{j<n} f(m_j).$$

The sum is the finite sum of [[def-finite-sum]]. The admissibility conditions
$a<b$ and $n\ge1$ ensure $h>0$ and all $m_j\in(a+jh,a+(j+1)h)$. If an input
fails either condition, the procedure returns invalid-grid; it makes no
quadrature claim for that input. The rule is an exact-real formula; floating
point evaluation and summation error are separate from its quadrature error.
