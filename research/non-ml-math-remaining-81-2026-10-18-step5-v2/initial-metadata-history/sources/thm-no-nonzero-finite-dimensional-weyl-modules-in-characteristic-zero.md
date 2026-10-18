---
id: thm-no-nonzero-finite-dimensional-weyl-modules-in-characteristic-zero
kind: theorem
title: "No nonzero finite-dimensional Weyl modules at nonzero central character in characteristic zero"
status: draft
dependency_level: 1
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps: [def-polynomial-weyl-algebra, def-left-and-right-modules, lem-trace-of-commutators-of-square-matrices-is-zero, def-trace-of-a-square-matrix-over-a-commutative-ring, def-coordinate-column-and-matrix-of-a-linear-map, def-ring-matrix-product-identity-and-transpose]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "François Dumas, Noncommutative Invariants, §2.1.1"
      url: "https://lmbp.uca.fr/~fdumas/fichiers/B-Mat60.pdf"
    - title: "Sheldon Axler, Linear Algebra Done Right, 4th ed., §8D"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Statement

Let $k$ be a field of characteristic zero, let $n\geq 1$, and let $0\ne\hbar\in k$. Then no nonzero finite-dimensional $k$-vector space $M$ admits a unital $k$-algebra representation of $W_n(k;\hbar)$.

## Facts & Assumptions

**Given:** A field $k$ of characteristic zero, an integer $n\geq 1$, a scalar $0\ne\hbar\in k$, and a nonzero finite-dimensional unital left $W_n(k;\hbar)$-module $M$.

[F1] [[def-polynomial-weyl-algebra]]: the generators satisfy $p_1x_1-x_1p_1=\hbar 1$.

[F2] [[def-left-and-right-modules]]: the module action satisfies $(ab)m=a(bm)$ and $1m=m$.

[F3] [[lem-trace-of-commutators-of-square-matrices-is-zero]]: for square matrices over a commutative ring, the trace of their commutator is zero.

[F4] [[def-trace-of-a-square-matrix-over-a-commutative-ring]]: the trace of a square matrix is the sum of its diagonal entries.

[F5] [[def-coordinate-column-and-matrix-of-a-linear-map]]: the columns of the matrix of a linear map are the coordinate columns of the images of the basis vectors.

[F6] [[def-ring-matrix-product-identity-and-transpose]]: matrix products have entries $(AB)_{ij}=\sum_r a_{ir}b_{rj}$, scalar multiplication is entrywise, and $I_d$ has diagonal entries $1$ and off-diagonal entries $0$.

## Proof

1.1 Choose a $k$-basis $e_1,\ldots,e_d$ of $M$ and let $D$ and $X$ be the matrices of the actions of $p_1$ and $x_1$. Writing $Xe_j=\sum_r x_{rj}e_r$ and $De_r=\sum_i d_{ir}e_i$, [F5] and the product formula [F6] show that the matrices of the composite actions $p_1x_1$ and $x_1p_1$ are $DX$ and $XD$, respectively. The scalar copy of $k$ acts through the given vector-space structure, so the module axiom [F2] and relation [F1] give $DX-XD=\hbar I_d$, where $d=\dim_k M\geq 1$. [given, F1, F2, F5, F6, choose, algebra]

2.1 By [F3], $\operatorname{tr}(DX-XD)=0$. By [F4] and [F6], $\operatorname{tr}(\hbar I_d)=\hbar d$, so $\hbar d=0$ in $k$. [step 1.1, F3, F4, F6, algebra]

3.1 Characteristic zero makes the image of every positive integer $d$ nonzero in $k$. Since $\hbar\ne0$ and a field has no zero divisors, $\hbar d\ne0$, contradicting step 2.1. Hence no such nonzero module exists. [given, step 2.1, algebra] ∎
