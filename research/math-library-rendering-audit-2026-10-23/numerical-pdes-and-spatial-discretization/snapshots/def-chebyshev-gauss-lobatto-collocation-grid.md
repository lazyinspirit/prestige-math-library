---
id: def-chebyshev-gauss-lobatto-collocation-grid
kind: definition
title: "Chebyshev–Gauss–Lobatto collocation grid"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps: [def-chebyshev-polynomials-first-and-second-kind, thm-chebyshev-multiple-angle-identities, thm-sine-cosine-signs-monotonicity-and-ranges, def-cardinal-polynomial-interpolation, thm-cardinal-polynomial-interpolant-exists-uniquely]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: "No choice axiom is used; the nodes are a finite explicit list."
verification:
  precheck: n/a
sources:
  references:
    - title: "Jie Shen and Tao Tang, Spectral and High-Order Methods with Applications, Ch. 2"
      url: "https://www.math.purdue.edu/~shen7/sp_intro12/book.pdf"
      locator: "Printed pp. 68–78 / PDF pp. 74–84; Chebyshev–Gauss–Lobatto points and polynomial interpolation."
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods for Ordinary and Partial Differential Equations, Ch. 8"
      url: "https://www.math.hmc.edu/~dyong/math165/trefethenbook.pdf"
      locator: "Chapter 8, printed pp. 245–283 (full-book PDF); Chebyshev extreme points and differentiation matrices."
---

## Definition

Let $N\ge1$ be an integer and put $x_j=\cos(j\pi/N)$ for $j=0,\ldots,N$. The ordering is decreasing: $x_0=1$ and $x_N=-1$. These are the Chebyshev–Gauss–Lobatto nodes; [[thm-chebyshev-multiple-angle-identities]] gives $T_N(x_j)=(-1)^j$. They are distinct because cosine is strictly decreasing on $[0,\pi]$ by [[thm-sine-cosine-signs-monotonicity-and-ranges]].

For interpolation using [[def-cardinal-polynomial-interpolation]], use the increasing reindexing $z_k=x_{N-k}$, $k=0,\ldots,N$. For descending-grid real data $U_j$, the corresponding increasing data are $Y_k=U_{N-k}$.

For real nodal data $U_0,\ldots,U_N\in\mathbb R$, define $I_N^LU$ to be the cardinal interpolant of $(Y_k)_{k=0}^N$ at $(z_k)_{k=0}^N$. For a function $f:[-1,1]\to\mathbb R$, write $I_N^Lf$ for the interpolant of its nodal values. The increasing-node interpolation theorem [[thm-cardinal-polynomial-interpolant-exists-uniquely]] makes this polynomial unique.

