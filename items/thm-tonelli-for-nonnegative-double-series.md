---
id: thm-tonelli-for-nonnegative-double-series
kind: theorem
title: "Tonelli's theorem for double series of nonnegative extended real numbers"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-nonnegative-extended-series, lem-extended-reals-complete, lem-finite-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory, Theorem 0.0.2"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

For every double sequence $(a_{ij})_{i,j\in\mathbb N}$ in $[0,+\infty]$,

$$\sum_{i=0}^{\infty}\left(\sum_{j=0}^{\infty}a_{ij}\right)=\sup_{m,n\in\mathbb N}\sum_{i<m}\sum_{j<n}a_{ij}=\sum_{j=0}^{\infty}\left(\sum_{i=0}^{\infty}a_{ij}\right),$$

where every sum is the nonnegative extended sum of [[def-nonnegative-extended-series]]. Thus the order of summation may be interchanged, even when the common value is $+\infty$.

## Facts & Assumptions

**Given:** A double sequence $(a_{ij})_{i,j\in\mathbb N}$ with $0\le a_{ij}\le+\infty$.

[L1] For a nonnegative extended sequence, the partial sums start at the empty sum $0$, increase, and the series is their supremum in $[0,+\infty]$ ([[def-nonnegative-extended-series]]).

[L2] Every subset of $\overline{\mathbb R}$ has a least upper bound and a greatest lower bound there, with $\sup\varnothing=-\infty$ and $\inf\varnothing=+\infty$ ([[lem-extended-reals-complete]]).

[L3] A natural-number-indexed finite family of nonempty sets has a choice function in ZF ([[lem-finite-choice]]).

## Proof

**Proof technique:** direct.

1.1 Put $r_{i,n}:=\sum_{j<n}a_{ij}$ and $R_{m,n}:=\sum_{i<m}r_{i,n}$. These finite sums exist for $m,n\in\mathbb N$, $R_{0,n}=R_{m,0}=0$, and $R_{m,n}$ is nondecreasing in each index. [given, L1]

1.2 The set $\{R_{m,n}:m,n\in\mathbb N\}$ is nonempty and bounded above by $+\infty$, so let $S:=\sup_{m,n}R_{m,n}\in[0,+\infty]$. [L2]

2.1 For fixed $m$, $\sup_nR_{m,n}=\sum_{i<m}\sup_nr_{i,n}$: the inequality $\le$ follows from $r_{i,n}\le\sup_qr_{i,q}$; for the reverse inequality, if one of the finitely many row suprema is $+\infty$ then its partial sums make $R_{m,n}$ unbounded, while if they are all finite, for every $\varepsilon>0$ finite choice selects for each $i<m$ an index $n_i$ with $r_{i,n_i}>\sup_nr_{i,n}-\varepsilon/m$ when $m>0$; take the largest $n_i$ and use monotonicity. The case $m=0$ is the empty equality $0=0$. [step 1.1, L1, L2, L3, choose]

3.1 Repeating steps 1.1 and 2.1 with the two indices interchanged gives $\sum_j(\sum_i a_{ij})=\sup_n\sup_mR_{m,n}=S$. [step 1.1, step 1.2, step 2.1, L1, L2]

3.2 By [L1] and step 2.1, $\sum_i(\sum_j a_{ij})=\sup_m\sum_{i<m}\sup_nr_{i,n}=\sup_m\sup_nR_{m,n}=S$. [step 1.2, step 2.1, L1]

4.1 Both iterated sums equal the supremum of the finite rectangular sums, so they equal one another; the argument includes zero rows, zero columns, infinite entries, and unbounded finite rectangles without subtraction or an undefined product. [step 3.2, step 3.1] ∎
