---
id: thm-chebyshev-dirichlet-collocation-status-and-system
kind: theorem
title: "Boundary elimination returns exactly the finite Chebyshev collocation system"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 8
deps: [alg-chebyshev-dirichlet-bvp-collocation-boundary-elimination, thm-chebyshev-gauss-lobatto-differentiation-is-exact, thm-invertible-matrix-theorem]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "No choice axiom is used; the argument is finite-dimensional linear algebra."
verification:
  precheck: pending
sources:
  references:
    - title: "Jie Shen and Tao Tang, Spectral and High-Order Methods with Applications, §2.4"
      url: "https://www.math.purdue.edu/~shen7/sp_intro12/book.pdf"
      locator: "Printed pp. 91–98 / PDF pp. 97–104; the interior system after inserting endpoint data."
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods for Ordinary and Partial Differential Equations, Ch. 8"
      url: "https://www.math.hmc.edu/~dyong/math165/trefethenbook.pdf"
      locator: "Chapter 8, printed pp. 267–273 (complete book PDF); boundary treatment and stability limits."
---
 
## Statement

For the algorithm [[alg-chebyshev-dirichlet-bvp-collocation-boundary-elimination]], a success output is the unique nodal vector with $U_0=g_+$, $U_N=g_-$ satisfying
$$
-(D_N^{(2)}U)_i+a(x_i)(D_NU)_i+b(x_i)U_i=f(x_i),\qquad 1\le i<N,
$$
where $D_N$ is the exact Chebyshev–Gauss–Lobatto differentiation matrix and $D_N^{(2)}=D_ND_N$. If the interior matrix is singular, the algorithm returns singular-interior-matrix and makes no claim about existence or uniqueness for the given right-hand side.

## Facts & Assumptions

**Given:** An integer $N\ge2$, node values of $a,b,f$, endpoints $g_-,g_+$, the boundary-elimination algorithm, and its interior matrix $A$.

[F1] [[alg-chebyshev-dirichlet-bvp-collocation-boundary-elimination]]: $C_{ij}=-(D_N^2)_{ij}+a(x_i)(D_N)_{ij}+b(x_i)\delta_{ij}$, $A=(C_{ij})_{1\le i,j<N}$, and $r_i=f(x_i)-C_{i0}g_+-C_{iN}g_-$.

[F2] [[thm-chebyshev-gauss-lobatto-differentiation-is-exact]]: for the interpolant $p$ through the full nodal vector $U$, $D_NU=(p'(x_i))_i$; applying $D_N$ again gives $(p''(x_i))_i$.

[F3] [[thm-invertible-matrix-theorem]]: an invertible square matrix has exactly one solution for every right-hand side.

## Proof
1.1 On a success branch the algorithm sets $U_0=g_+$ and $U_N=g_-$ and solves $AU_I=r$ for the interior vector $U_I=(U_1,\ldots,U_{N-1})$. [given, F1]

1.2 By [F2], $D_NU$ and $D_N^{(2)}U$ are respectively the first and second derivatives of the degree-at-most-$N$ nodal interpolant evaluated at the nodes. [given, F2]

2.1 Expanding the $i$th row of the full expression using [F1] gives $\sum_{j=1}^{N-1}C_{ij}U_j+C_{i0}g_++C_{iN}g_-=f(x_i),$ which is exactly the reduced equation $AU_I=r$ with the definition of $r_i$. Combined with step 1.2, this is the stated collocation equation at every interior node. [given, F1, step 1.1, step 1.2, algebra]

2.2 Since the success branch has invertible $A$, [F3] gives exactly one interior vector solving $AU_I=r$. The prescribed endpoint values then give exactly one full nodal vector. The singular branch returns its declared status and asserts nothing about solvability of its right-hand side. [given, F1, F3, step 1.1, algebra]

3.1 Steps 1.1–2.2 prove the success claim and the stated singular-matrix limit. [step 1.1, step 1.2, step 2.1, step 2.2] ∎