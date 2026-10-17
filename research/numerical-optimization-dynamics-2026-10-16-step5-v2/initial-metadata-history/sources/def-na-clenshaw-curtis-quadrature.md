---
id: def-na-clenshaw-curtis-quadrature
kind: definition
title: "Clenshaw–Curtis quadrature with the midpoint zero-degree case"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: clenshaw-curtis-and-extrapolation-quadrature
dependency_level: 6
deps: [def-na-clenshaw-curtis-dct-i, lem-na-chebyshev-integral-moments, thm-na-clenshaw-curtis-interpolation-coefficients, def-best-uniform-polynomial-approximation-error-and-chebyshev-interpolants]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Lloyd N. Trefethen, Is Gauss Quadrature Better than Clenshaw–Curtis?, §2"
      url: "https://courses.grainger.illinois.edu/cs591mh/fa2012/trefethen/Clenshaw-Curtis.pdf"
      locator: "Printed pp. 69–70, Chebyshev–Lobatto interpolant, coefficient transform, and integral moments."
    - title: "L. Ridgway Scott, Numerical Analysis, 2nd ed., §13.4.1"
      url: "https://www.math.utah.edu/~feldman/teaching_files/F18/natwo.pdf"
      locator: "Printed p. 236, Clenshaw–Curtis quadrature as an interpolatory Chebyshev rule."
verification:
  precheck: n/a
---

## Definition

Let $a<b$, $n\in\mathbb N$, $m=(a+b)/2$, $d=(b-a)/2$, and $f\in C[a,b]$. For $n\ge1$, set $g(t):=f(m+dt)$ on $[-1,1]$, let $y_j=g(\cos(j\pi/n))$, and form $a_0,\ldots,a_n$ from the DCT-I coefficients in [[thm-na-clenshaw-curtis-interpolation-coefficients]]. With the Chebyshev moments $\mu_k$ of [[lem-na-chebyshev-integral-moments]], define
$$Q_{n,[a,b]}(f):=d\sum_{k=0}^{n}a_k\mu_k.$$
For $n=0$, define instead
$$Q_{0,[a,b]}(f):=(b-a)f(m),$$
the midpoint rule. This is the explicit endpoint and zero-degree convention for Clenshaw–Curtis quadrature. The sums and coefficients are exact real quantities; finite-precision evaluation is a separate algorithm.
