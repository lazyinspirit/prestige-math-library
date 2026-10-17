---
id: def-weighted-orthogonal-polynomial-galerkin-space
kind: definition
title: "Weighted orthogonal-polynomial Galerkin spaces and spectral scale"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps: [def-gauss-moment-data, def-gauss-polynomial-moment-inner-product, thm-gauss-polynomial-moment-pairing-is-an-inner-product, thm-monic-gauss-orthogonal-polynomials-exist-uniquely, def-real-power, cor-exponential-reciprocal-and-positivity]
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
axiom_use: "No choice axiom is used; the polynomials and coefficient sequences are finite or explicitly indexed."
verification:
  precheck: n/a
sources:
  references:
    - title: "Jie Shen and Tao Tang, Spectral and High-Order Methods with Applications, Ch. 3"
      url: "https://www.math.purdue.edu/~shen7/sp_intro12/book.pdf"
      locator: "Printed pp. 105–118 / PDF pp. 111–124; compact combinations of orthogonal polynomials, weighted Galerkin forms, and Legendre/Chebyshev bases."
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods for Ordinary and Partial Differential Equations, Ch. 8"
      url: "https://www.math.hmc.edu/~dyong/math165/trefethenbook.pdf"
      locator: "Chapter 8, printed pp. 245–283 (full-book PDF); polynomial bases and Chebyshev interpolation."
---

## Definition

Let $\mu$ be a finite positive Borel measure on a compact interval $[a,b]$ with infinite relative support. For each integer $N\ge0$, the moment data $(a,b,m=N+1,r=2N+1,\mu)$ satisfy the hypotheses of [[def-gauss-moment-data]]. Let $p_0,\ldots,p_N$ be the monic orthogonal polynomials supplied by [[thm-monic-gauss-orthogonal-polynomials-exist-uniquely]], and write
$$
h_n=\int_{[a,b]}p_n(x)^2\,d\mu(x)>0.
$$
The finite-dimensional weighted Galerkin space is
$$
V_N(\mu)=\operatorname{span}\{p_0,\ldots,p_N\}\subset L^2(\mu).
$$
Here $L^2(\mu)$ means measurable functions with finite integral of the squared absolute value, modulo equality $\mu$-almost everywhere.

For a coefficient sequence $(c_n)_{n\ge0}$ with $\sum_{n\ge0}(1+n^2)^s|c_n|^2h_n<\infty$, define its weighted spectral Sobolev norm by
$$\left\|\sum_{n\ge0}c_np_n\right\|_{H^s_\mu}^2 =\sum_{n\ge0}(1+n^2)^s|c_n|^2h_n,\qquad s\ge0.$$
The real powers are those of [[def-real-power]]; since every base $1+n^2$ is positive, [[cor-exponential-reciprocal-and-positivity]] makes every weight positive.
The associated orthogonal Galerkin projection is $\Pi_N(\sum_{n\ge0}c_np_n)=\sum_{n=0}^Nc_np_n$. This coefficient-defined scale is specific to the weight $\mu$ and the selected orthogonal-polynomial family; no equivalence with a derivative-based Sobolev norm is asserted here.

