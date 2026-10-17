---
id: thm-gaussian-orthogonal-polynomial-galerkin-mass-matrix-exact
kind: theorem
title: "Gaussian quadrature exactly assembles the orthogonal Galerkin mass matrix"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 8
deps: [def-gauss-moment-data, thm-monic-gauss-orthogonal-polynomials-exist-uniquely, alg-gaussian-orthogonal-polynomial-galerkin-mass-matrix, thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "No choice axiom is used; exactness reduces to a finite polynomial-degree check."
verification:
  precheck: pending
sources:
  references:
    - title: "Jie Shen and Tao Tang, Spectral and High-Order Methods with Applications, §§3.1–3.2"
      url: "https://www.math.purdue.edu/~shen7/sp_intro12/book.pdf"
      locator: "Printed pp. 105–113 / PDF pp. 111–119; orthogonal-polynomial Galerkin mass matrices and exact integration."
    - title: "Walter Gautschi, The Interplay Between Classical Analysis and (Numerical) Linear Algebra, §2.1"
      url: "https://web.stanford.edu/class/cme335/Golub.pdf"
      locator: "§2.1 on positive-measure Gaussian quadrature; the item uses the exact current batch-82 theorem body for the quadrature premise."
---
 
## Statement

Let $N\ge0$, take moment data of order $2N+1$ for a finite positive measure $\mu$ with support containing at least $N+2$ points, and use its $(N+1)$-node Gaussian rule and orthogonal polynomials $p_0,\ldots,p_N$. The matrix from [[alg-gaussian-orthogonal-polynomial-galerkin-mass-matrix]] has entries
$$M_{ij}^{G}=\int p_i(x)p_j(x)\,d\mu(x)= \begin{cases} 0,&i\ne j,\\ h_i,&i=j. \end{cases}$$

## Facts & Assumptions

**Given:** $N\ge0$, moment data of order $2N+1$, its $(N+1)$-node Gaussian rule, and the corresponding orthogonal polynomials.

[F1] [[thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights]]: for an $m$-node rule from moment data of order $2m-1$, every polynomial of degree at most $2m-1$ integrates exactly.

[F2] [[def-gauss-moment-data]] and [[thm-monic-gauss-orthogonal-polynomials-exist-uniquely]] with $m=N+1$: $p_i$ is the monic degree-$i$ polynomial orthogonal to every lower-degree polynomial for $0\le i\le N$. Write $h_i:=\int p_i^2\,d\mu$; these integrals are finite since $2i\le2N<2N+1$, within the supplied moment order. Only the stated $N+2$ support points are needed, not infinite support.

[F3] [[alg-gaussian-orthogonal-polynomial-galerkin-mass-matrix]]: $M_{ij}^{G}$ is the Gaussian sum of $p_i p_j$ over the $N+1$ nodes.

## Proof

1.1 By [F2], the product $p_i p_j$ has degree $i+j\le2N<2N+1=2(N+1)-1$. Thus [F1] applies with $m=N+1$ and gives $M_{ij}^{G}=\sum_{r=1}^{N+1}w_rp_i(\xi_r)p_j(\xi_r)=\int p_i(x)p_j(x)\,d\mu(x)$ by [F3]. [given, F1, F2, F3, algebra]

2.1 If $i\ne j$, the higher-degree polynomial is orthogonal to the lower-degree one by [F2], so the integral in step 1.1 is zero. If $i=j$, it is $h_i$ by [F2]. This is the displayed diagonal matrix identity. [F2, step 1.1, algebra] ∎
