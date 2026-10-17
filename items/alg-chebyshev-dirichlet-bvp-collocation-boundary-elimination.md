---
id: alg-chebyshev-dirichlet-bvp-collocation-boundary-elimination
kind: algorithm
title: "Boundary-eliminated Chebyshev collocation for a two-point Dirichlet BVP"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps: [def-chebyshev-gauss-lobatto-collocation-grid, alg-chebyshev-gauss-lobatto-differentiation-matrix, thm-chebyshev-gauss-lobatto-differentiation-is-exact]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: "No choice axiom is used; the finite collocation system is formed explicitly."
verification:
  precheck: n/a
sources:
  references:
    - title: "Jie Shen and Tao Tang, Spectral and High-Order Methods with Applications, §2.4"
      url: "https://www.math.purdue.edu/~shen7/sp_intro12/book.pdf"
      locator: "Printed pp. 91–98 / PDF pp. 97–104; Chebyshev two-point BVP collocation and boundary-row elimination."
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods for Ordinary and Partial Differential Equations, Ch. 8"
      url: "https://www.math.hmc.edu/~dyong/math165/trefethenbook.pdf"
      locator: "Chapter 8, printed pp. 267–273 (complete book PDF); boundary conditions and Chebyshev collocation stability limits."
---

## Definition

Input an integer $N\ge2$, real functions $a,b,f$ given at the Chebyshev–Gauss–Lobatto nodes $x_j=\cos(j\pi/N)$, and endpoint data $g_-,g_+\in\mathbb R$. The continuous BVP being discretized is
$$
-u''(x)+a(x)u'(x)+b(x)u(x)=f(x),\quad -1<x<1,\qquad u(-1)=g_-,\quad u(1)=g_+.
$$
The finite algorithm uses only the values at the nodes and does not assume a continuous BVP solvability theorem. Construct the matrix used internally by [[alg-chebyshev-gauss-lobatto-differentiation-matrix]] explicitly: form $L_j(x)=\prod_{0\le k\le N,\,k\ne j}(x-x_k)/(x_j-x_k)$ and set $(D_N)_{ij}=L_j'(x_i)$ for $0\le i,j\le N$. Then set $D_N^{(2)}=D_ND_N$. For each interior row $i=1,\ldots,N-1$ and each column $j=0,\ldots,N$, put
$$
C_{ij}=-(D_N^{(2)})_{ij}+a(x_i)(D_N)_{ij}+b(x_i)\delta_{ij}.
$$
Let $A=(C_{ij})_{1\le i,j\le N-1}$ and $r_i=f(x_i)-C_{i0}g_+-C_{iN}g_-$. If $A$ is singular, return status singular-interior-matrix and the matrix $A$. If $A$ is invertible, solve $AU_I=r$, set $U_0=g_+$ and $U_N=g_-$, and return success with $U=(U_0,U_1,\ldots,U_N)$. This exact-arithmetic finite solve asserts no unconditional nonsingularity, stability, convergence, or PDE error bound.

