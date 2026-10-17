---
id: alg-chebyshev-gauss-lobatto-differentiation-matrix
kind: algorithm
title: "Chebyshev–Gauss–Lobatto polynomial differentiation matrix"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps: [def-chebyshev-gauss-lobatto-collocation-grid, def-cardinal-polynomial-interpolation, thm-cardinal-polynomial-interpolant-exists-uniquely]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: "No choice axiom is used; the construction uses finitely many exact polynomial products and derivatives."
verification:
  precheck: n/a
sources:
  references:
    - title: "Jie Shen and Tao Tang, Spectral and High-Order Methods with Applications, §2.1"
      url: "https://www.math.purdue.edu/~shen7/sp_intro12/book.pdf"
      locator: "Printed pp. 68–78 / PDF pp. 74–84; Lagrange-cardinal differentiation matrices at Chebyshev–Gauss–Lobatto points."
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods for Ordinary and Partial Differential Equations, Ch. 8"
      url: "https://www.math.hmc.edu/~dyong/math165/trefethenbook.pdf"
      locator: "Chapter 8, printed pp. 252–255 (complete book PDF); the differentiation matrix is the derivative of the polynomial interpolant."
---

## Definition

Input $N\ge1$ and real nodal values $U_0,\ldots,U_N$ at the descending grid $x_j=\cos(j\pi/N)$ from [[def-chebyshev-gauss-lobatto-collocation-grid]]. Set $z_k=x_{N-k}$ and $Y_k=U_{N-k}$, so $z_0<\cdots<z_N$. Form the cardinal polynomials $\ell_k$ for the increasing nodes $z_0,\ldots,z_N$ by [[def-cardinal-polynomial-interpolation]]. Define
$$
(D_N)_{ij}=\ell_{N-j}'(x_i),\qquad 0\le i,j\le N,
$$
and return the derivative vector $D_NU$. Equivalently, form $p(x)=\sum_{k=0}^NY_k\ell_k(x)$ and return $(p'(x_i))_{i=0}^N$. The procedure is exact-real arithmetic and makes no stability claim for a floating-point implementation.

