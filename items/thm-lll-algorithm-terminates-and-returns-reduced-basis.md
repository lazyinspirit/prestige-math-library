---
id: thm-lll-algorithm-terminates-and-returns-reduced-basis
kind: theorem
title: The LLL algorithm terminates and returns a reduced basis
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - alg-lll-reduced-lattice-basis
  - def-full-euclidean-lattice-and-covolume
  - def-euclidean-inner-product
  - lem-lll-prefix-covolumes-have-positive-lower-bound
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. K. Lenstra, H. W. Lenstra Jr., and L. Lovász, Factoring Polynomials with Rational Coefficients, §1, algorithm (1.15) and termination proof"
      url: "https://ir.cwi.nl/pub/9304/9304D.pdf"
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach, §2.5"
      url: "https://wstein.org/books/ant/ant.pdf"
verification: {}
---

## Statement

For an ordered basis $b_1,\ldots,b_n$ of a full-rank lattice $L\subseteq\mathbb Q^n$, the algorithm of LLL reduction with $\delta=3/4$ terminates and returns a basis of $L$. With the Gram–Schmidt vectors $b_i^*=b_i-\sum_{j<i}\mu_{ij}b_j^*$ and $\mu_{ij}=\langle b_i,b_j^*\rangle/\lVert b_j^*\rVert^2$, the output satisfies $|\mu_{ij}|\le1/2$ for every $j<i$ and
$$\lVert b_k^*\rVert^2+\mu_{k,k-1}^2\lVert b_{k-1}^*\rVert^2\ge\frac34\lVert b_{k-1}^*\rVert^2\qquad(2\le k\le n).$$

## Statement references

[Lenstra–Lenstra–Lovász, §1, algorithm (1.15) and termination proof](https://ir.cwi.nl/pub/9304/9304D.pdf)

[Stein, §2.5](https://wstein.org/books/ant/ant.pdf)

## Facts & Assumptions

**Given:** The exact rational basis and LLL procedure in the Statement.

[F1] The procedure clears a common denominator, performs the $\delta=3/4$ test, size-reduces by nearest integers, and updates $k$ by swaps or increments ([[alg-lll-reduced-lattice-basis]]).

[F2] Every prefix Gram determinant of bases of a fixed lattice has a positive lower bound ([[lem-lll-prefix-covolumes-have-positive-lower-bound]]).

[F3] The Euclidean inner product and squared norm are the coordinate dot product and its self-pairing ([[def-euclidean-inner-product]]).

## Proof



1.1 Multiplying every input vector by a common positive denominator $q$ gives an integer basis of $qL$. Each algorithmic size reduction and swap is a unimodular integer basis operation, so it preserves that lattice; dividing the final basis by $q$ returns a basis of $L$. The Gram–Schmidt coefficients are unchanged by the common scaling, and all squared norms scale by $q^2$. [F1, F3, given, algebra]

1.2 For $1\le i<n$, let $d_i$ be the squared Gram determinant of the first $i$ basis vectors and put $D=\prod_{i=1}^{n-1}d_i$. Size reductions preserve each affected prefix lattice, so they leave $D$ unchanged. If the test fails at $k$, swapping $b_{k-1},b_k$ changes only $d_{k-1}$, by the factor [F1]
$$\frac{\lVert b_k^*+\mu_{k,k-1}b_{k-1}^*\rVert^2}{\lVert b_{k-1}^*\rVert^2}<\frac34.$$
Thus each swap reduces $D$ by a factor strictly below $3/4$. [F1, F3, algebra]

2.1 The nearest-integer rule makes the current coefficient $\mu_{k,k-1}$ lie in $[-1/2,1/2)$, and the successful branch reduces against every earlier vector. When $k=n+1$ the loop has successfully processed each index, so every size-reduction inequality holds. At each successful test the displayed Lovász inequality is exactly the test rearranged. [F1, F3, step 1.1, algebra]

3.1 By [F2], every $d_i$ is bounded below by a positive constant depending only on $L$, so $D$ has a positive lower bound. It cannot undergo infinitely many reductions by a factor below $3/4$; hence there are finitely many swaps. Between swaps, $k$ increases and is bounded by $n+1$, so there are finitely many successful passes as well. This proves termination and, with step 2.1, the stated reduced-basis inequalities. [F2, step 1.2, step 2.1] ∎

