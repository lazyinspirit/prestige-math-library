---
dependency_level: 0
id: lem-finite-one-sided-maximal-averages-and-smoothing
kind: lemma
title: Finite one-sided maximal averages and block smoothing
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
- lem-finite-sum-reindexing-and-fubini
- thm-induction-principle
justified_by: []
proof_strategy: direct
sources:
  references:
  - title: Terence Tao, An Introduction to Measure Theory, Theorem1.6.20; elementary finite discrete covering adaptation
    url: https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf
---

## Statement

Let $g:\mathbb Z\to[0,\infty)$ have finite support. For a positive integer $M$ and $\lambda>0$,

$$\#\left\{n\in\mathbb Z:\max_{1\le L\le M}\frac1L\sum_{j=0}^{L-1}g(n+j)>\lambda\right\}\le\frac3\lambda\sum_{n\in\mathbb Z}g(n).$$

For any $a:\mathbb Z\to\mathbb C$ with $|a(n)|\le1$, define $A_La(n)=L^{-1}\sum_{j=0}^{L-1}a(n+j)$. Then, for positive integers $H,L$,

$$|A_La(n)-A_L(A_Ha)(n)|\le\frac{H-1}{L}.$$

These statements require only finite selections and sums.

## Statement references

[[lem-finite-sum-reindexing-and-fubini]]

[[thm-induction-principle]]

## Facts & Assumptions

**Given:** All data and hypotheses in the Statement.

[F1] The local result [[lem-finite-sum-reindexing-and-fubini]] supplies its stated facts under its stated hypotheses.

[F2] The local result [[thm-induction-principle]] supplies its stated facts under its stated hypotheses.

## Proof

1.1 The set of starting points in the first display is finite: a witnessing interval must meet the finite support of $g$ and has length at most $M$. For each such starting point take the least witnessing integer length. From this finite list choose a longest interval, with the leftmost one breaking ties; remove all intervals meeting it, and repeat. The chosen half-open integer intervals are disjoint. Any removed interval has length at most its chosen intersecting interval $[b,b+L)$ and lies inside $[b-L,b+2L)$, which contains exactly $3L$ integers. Thus every bad starting point lies in the union of these threefold intervals. [given, F1, F2, algebra]

2.1 Each selected interval has $g$-sum greater than $\lambda L$. Their disjointness gives $\lambda\sum L<\sum g$, while step 1.1 bounds the bad-set cardinality by $3\sum L$. This proves the weak bound, with the empty list immediate. For the smoothing claim, shifting a sum of length $L$ by $k$ changes it in absolute value by at most $2k$, since $|a|\le1$. Finite reindexing gives $A_L(A_Ha)(n)=H^{-1}\sum_{k=0}^{H-1}A_La(n+k)$. Averaging the shift bounds gives $(HL)^{-1}\sum_{k=0}^{H-1}2k=(H-1)/L$, as required. [given, F1, F2, step 1.1, algebra] ∎
