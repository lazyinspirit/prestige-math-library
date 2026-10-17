---
id: thm-chebyshev-gauss-lobatto-differentiation-is-exact
kind: theorem
title: "Chebyshev–Gauss–Lobatto differentiation is exact on the interpolant"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps: [def-chebyshev-gauss-lobatto-collocation-grid, alg-chebyshev-gauss-lobatto-differentiation-matrix, thm-cardinal-polynomial-interpolant-exists-uniquely, thm-algebra-of-derivatives]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "No choice axiom is used; uniqueness is the finite distinct-node interpolation theorem."
verification:
  precheck: pending
sources:
  references:
    - title: "Jie Shen and Tao Tang, Spectral and High-Order Methods with Applications, §2.1"
      url: "https://www.math.purdue.edu/~shen7/sp_intro12/book.pdf"
      locator: "Printed pp. 68–78 / PDF pp. 74–84; polynomial interpolation and differentiation matrices."
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods for Ordinary and Partial Differential Equations, Ch. 8"
      url: "https://www.math.hmc.edu/~dyong/math165/trefethenbook.pdf"
      locator: "Chapter 8, printed pp. 252–255 (complete book PDF); polynomial-interpolation definition of Chebyshev differentiation."
---

## Statement

Let $N\ge1$, let $U_j\in\mathbb R$ be data on the nodes $x_j=\cos(j\pi/N)$, and let $p$ be the unique polynomial of degree at most $N$ with $p(x_j)=U_j$. The matrix [[alg-chebyshev-gauss-lobatto-differentiation-matrix]] satisfies
$$
(D_NU)_i=p'(x_i),\qquad 0\le i\le N.
$$
In particular, applying $D_N$ twice gives $p''(x_i)$ at each node.

## Facts & Assumptions

**Given:** $N\ge1$, distinct Chebyshev–Gauss–Lobatto nodes, and real nodal data.

[F1] [[def-chebyshev-gauss-lobatto-collocation-grid]]: the nodes are distinct; reversing their order gives increasing nodes $z_k=x_{N-k}$.

[F2] [[alg-chebyshev-gauss-lobatto-differentiation-matrix]]: $D_{ij}=\ell_{N-j}'(x_i)$ for the cardinal polynomials of the increasing reindexing.

[F3] [[thm-cardinal-polynomial-interpolant-exists-uniquely]]: at $N+1$ distinct ordered nodes, the cardinal sum is the unique polynomial of degree at most $N$ with the prescribed values.

[F4] [[thm-algebra-of-derivatives]]: differentiating a finite sum of differentiable functions gives the sum of their derivatives.

## Proof

1.1 Reindex the data by $Y_k=U_{N-k}$. By [F1], the nodes $z_k=x_{N-k}$ are strictly increasing, so [F3] gives $p(x)=\sum_{k=0}^NY_k\ell_k(x)$ as the unique degree-at-most-$N$ interpolant. Reversing the finite sum back to the descending index gives $p(x)=\sum_{j=0}^NU_j\ell_{N-j}(x)$. [given, F1, F3, construct]

2.1 Differentiate the finite polynomial sum in step 1.1 term by term using [F4]. At $x_i$ this gives $p'(x_i)=\sum_{j=0}^NU_j\ell_{N-j}'(x_i)=\sum_{j=0}^N(D_N)_{ij}U_j=(D_NU)_i$ by [F2]. This proves the first identity for each node. [F2, F4, step 1.1, algebra]

3.1 The polynomial $p'$ has degree at most $N-1\le N$ and its nodal values are $D_NU$ by step 2.1. Uniqueness [F3] therefore makes $p'$ the interpolant of the vector $D_NU$. Applying the already proved first-derivative identity of step 2.1 to that vector gives $D_N(D_NU)=(p''(x_i))_{i=0}^N$. [F1, F3, step 2.1, algebra] ∎

