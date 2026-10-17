---
id: thm-chebyshev-weighted-orthogonal-projection-rate
kind: theorem
title: "Weighted Chebyshev projection has its spectral Sobolev rate"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [def-chebyshev-weighted-spectral-sobolev-scale, lem-chebyshev-polynomials-orthogonal-in-arcsine-weight]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
axiom_use: "No choice axiom is used; the estimate is a coefficient-tail bound."
verification:
  precheck: pending
sources:
  references:
    - title: "Jie Shen and Tao Tang, Spectral and High-Order Methods with Applications, §1.8"
      url: "https://www.math.purdue.edu/~shen7/sp_intro12/book.pdf"
      locator: "Printed pp. 61–67 / PDF pp. 67–73; weighted orthogonal projection rates for Jacobi polynomial spaces."
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods for Ordinary and Partial Differential Equations, Ch. 8"
      url: "https://www.math.hmc.edu/~dyong/math165/trefethenbook.pdf"
      locator: "Chapter 8, printed pp. 259–264 (complete book PDF); Chebyshev coefficient representation."
---
 
## Statement

Let $s\ge0$, $N\ge0$, and $u\in H_C^s$ as defined in [[def-chebyshev-weighted-spectral-sobolev-scale]]. Then
$$
\|u-\Pi_Nu\|_C\le (1+(N+1)^2)^{-s/2}\|u\|_{H_C^s}.
$$
Thus the weighted projection error is $O(N^{-s})$ when the data belong to this explicitly defined weighted spectral Sobolev space.

## Facts & Assumptions

**Given:** $s\ge0$, an integer $N\ge0$, and a Chebyshev coefficient expansion $u=\sum_{n\ge0}c_nT_n$ with finite $H_C^s$ norm.

[F1] [[def-chebyshev-weighted-spectral-sobolev-scale]]: $\Pi_Nu=\sum_{n=0}^Nc_nT_n$ and the $H_C^s$ norm weights coefficient $c_n$ by $(1+n^2)^s$; these weights are nondecreasing in $n$ for $s\ge0$.

[F2] [[lem-chebyshev-polynomials-orthogonal-in-arcsine-weight]]: the squared $C$-norm of $T_0$ is $\pi$ and that of each $T_n$, $n\ge1$, is $\pi/2$.

## Proof
1.1 By [F1], $u-\Pi_Nu=\sum_{n>N}c_nT_n$. Orthogonality from [F2] gives $\|u-\Pi_Nu\|_C^2=\frac{\pi}{2}\sum_{n>N}|c_n|^2.$ Since $n>N$ implies $(1+n^2)^s\ge(1+(N+1)^2)^s$, this is at most $(1+(N+1)^2)^{-s}\frac{\pi}{2}\sum_{n>N}(1+n^2)^s|c_n|^2 \le(1+(N+1)^2)^{-s}\|u\|_{H_C^s}^2.$ Taking square roots proves the result for finite sums. [F1, F2, algebra]

2.1 Finite sums are dense in the completion defining $H_C^s$. The truncation $\Pi_N$ is a contraction in the coefficient norm and in the $C$-norm, so both sides of the finite-sum inequality pass to the limit along any Cauchy sequence of finite sums. This yields the stated estimate for every $u\in H_C^s$. [F1, step 1.1, algebra] ∎
