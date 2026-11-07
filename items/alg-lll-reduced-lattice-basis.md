---
id: alg-lll-reduced-lattice-basis
kind: algorithm
title: LLL reduction of an exact rational lattice basis
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
proof_strategy: direct
dependency_level: 0
deps: [def-full-euclidean-lattice-and-covolume, def-euclidean-inner-product]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "A. K. Lenstra, H. W. Lenstra Jr., and L. Lovász, Factoring Polynomials with Rational Coefficients, §1"
      url: "https://ir.cwi.nl/pub/9304/9304D.pdf"
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach, §2.5"
      url: "https://wstein.org/books/ant/ant.pdf"
verification:
  precheck: n/a
---

## Definition

Input an ordered basis $b_1,\ldots,b_n$ of a full-rank lattice $L\subseteq\mathbb Q^n$. Choose a positive common denominator $q$ so that $q b_i\in\mathbb Z^n$ for every $i$. Run the following exact procedure on the basis of $qL$, then divide every output vector by $q$.

1. Compute the Gram–Schmidt vectors $b_i^*$ and coefficients $\mu_{ij}=\langle b_i,b_j^*\rangle/\lVert b_j^*\rVert^2$ exactly. Set $k=2$.

2. If $k=n+1$, stop. Otherwise replace $b_k$ by $b_k-rb_{k-1}$, where $r=\lfloor\mu_{k,k-1}+1/2\rfloor$, and recompute all Gram–Schmidt data. Thus $|\mu_{k,k-1}|\le1/2$.

3. If $\lVert b_k^*+\mu_{k,k-1}b_{k-1}^*\rVert^2<(3/4)\lVert b_{k-1}^*\rVert^2$, swap $b_k$ and $b_{k-1}$, recompute all data, and set $k=\max(2,k-1)$.

4. Otherwise size-reduce $b_k$ successively against $b_{k-2},b_{k-3},\ldots,b_1$, in that order, using the same nearest-integer rule and recomputing all data after each update. Increase $k$ by one and repeat.

## Definition references

[Lenstra–Lenstra–Lovász, algorithm (1.15)](https://ir.cwi.nl/pub/9304/9304D.pdf)

[Stein, §2.5](https://wstein.org/books/ant/ant.pdf)

## Facts & Assumptions

**Given:** An exact rational basis of a full-rank lattice in Euclidean space.

[F1] A full lattice is the integer span of a real basis, with covolume the absolute determinant of its basis matrix ([[def-full-euclidean-lattice-and-covolume]]).

[F2] The Euclidean inner product is $\langle x,y\rangle=\sum_i x_i y_i$ and the squared Euclidean norm is $\lVert x\rVert_2^2=\langle x,x\rangle$ ([[def-euclidean-inner-product]]).

## Verification



1.1 Clearing denominators multiplies every vector by the same positive integer $q$. Each size reduction subtracts an integer multiple of one basis vector from another, and each swap permutes two vectors; both are unimodular basis operations, so the exact procedure always retains a basis of $qL$. [F1, given, algebra]

2.1 The nearest-integer rule $r=\lfloor\mu+1/2\rfloor$ gives $-1/2\le\mu-r<1/2$. The Lovasz comparison is an exact comparison of rational squared norms, and after every update the definition recomputes all Gram--Schmidt data from the changed basis. [F2, given, algebra] ∎

