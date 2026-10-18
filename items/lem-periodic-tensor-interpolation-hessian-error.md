---
id: lem-periodic-tensor-interpolation-hessian-error
kind: lemma
title: "Tensor multilinear interpolation has a second-derivative error bound"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-semilagrangian-periodic-grid-and-interpolant
  - thm-lagrange-interpolation-remainder
  - lem-periodic-tensor-interpolant-is-convex-and-linf-contracting
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "European Centre for Medium-Range Weather Forecasts, Numerical Methods, Meteorological Training Course Lecture Series, 2002"
      url: "https://www.ecmwf.int/sites/default/files/elibrary/2002/16948-numerical-methods.pdf"
    - title: "Lukas Einkemmer and Alexander Ostermann, On the error propagation of semi-Lagrange and Fourier methods for advection problems, Computers & Mathematics with Applications 69 (2015), 170–179"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4375614/"
---

## Statement

Let $u\in C^2(\mathbb T^d_\ell)$ and let $h_j$ be the coordinate mesh widths in [[def-semilagrangian-periodic-grid-and-interpolant]]. Then
$$\|\mathcal I_hu-u\|_{L^\infty(\mathbb T^d_\ell)}\le\frac18\sum_{j=1}^dh_j^2\|\partial_{jj}u\|_{L^\infty(\mathbb T^d_\ell)}.$$
The estimate includes grid nodes and periodic cell endpoints.

## Facts & Assumptions

**Given:** A periodic $C^2$ function $u$, positive coordinate widths $h_j$, and the tensor-product interpolant.

[F1] [[def-semilagrangian-periodic-grid-and-interpolant]]: the tensor interpolant is the product of the one-dimensional linear endpoint weights in each coordinate.

[F2] [[thm-lagrange-interpolation-remainder]]: for two distinct interpolation nodes $a<b$, the degree-one interpolant $p$ to a $C^2$ function satisfies $u(x)-p(x)=0$ at a node and otherwise $u(x)-p(x)=\frac12u''(\xi)(x-a)(x-b)$ for some $\xi$ between the nodes and query point.

[F3] [[lem-periodic-tensor-interpolant-is-convex-and-linf-contracting]]: each one-coordinate linear interpolation operator is nonexpansive in the sup norm because its endpoint weights are nonnegative and sum to one.

## Proof

1.1 Fix one coordinate interval $[a,b]$ of length $h_j$ and hold the other coordinates fixed. If $x_j$ is an endpoint, the linear interpolant is exact by [F2]. Otherwise [F2] gives $|u(x)-I_ju(x)|\le\frac12\|\partial_{jj}u\|_\infty(x_j-a)(b-x_j)$. Writing $\theta=(x_j-a)/h_j\in(0,1)$, the product equals $h_j^2\theta(1-\theta)\le h_j^2/4$, hence the one-coordinate error is at most $h_j^2\|\partial_{jj}u\|_\infty/8$. [given, F2, algebra]

1.2 Write the tensor interpolant as $I_1\cdots I_d$, where $I_j$ interpolates only coordinate $j$. The telescoping identity $u-I_1\cdots I_du=(u-I_1u)+I_1(u-I_2u)+\cdots+I_1\cdots I_{d-1}(u-I_du)$ follows by cancellation of adjacent terms. [F1, algebra]

2.1 Apply the one-coordinate estimate of step 1.1 to each term before its preceding-coordinate operators. Every preceding product $I_1\cdots I_{j-1}$ is sup-norm nonexpansive by [F3], so the norm of the $j$th term is at most $h_j^2\|\partial_{jj}u\|_\infty/8$. Summing the $d$ bounds proves the result. Periodic endpoint cells use the periodic lift of $u$, which has the same derivative suprema, and at every grid node the interpolation is exact by the definition. [given, F1, F3, step 1.1, algebra] ∎
