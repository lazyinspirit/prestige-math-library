---
id: thm-irreducible-finite-class-has-unique-invariant-vector
kind: theorem
title: "An irreducible finite class has a unique invariant vector"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-finite-column-stochastic-matrix-and-law
  - def-transition-matrix-and-n-step-transition-probabilities
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - thm-every-finite-transition-matrix-has-a-stationary-distribution
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The finite-state argument uses no choice principle."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Charles M. Grinstead and J. Laurie Snell, Introduction to Probability, Chapter 11"
      url: "https://math.dartmouth.edu/~prob/prob/OLD/prob.pdf"
      locator: "§11.3, Definition 11.4 and Theorem 11.10, printed pp. 432–438; communicating classes, invariant probabilities, and periodic chains."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Let $K$ be a finite row-stochastic transition matrix on a nonempty set $C$. Assume **irreducibility**: for every $i,j\in C$ there is a finite directed path from $i$ to $j$ whose transition probabilities are positive. Then there is a unique invariant probability row vector $\pi$, all its coordinates are positive, and every real row vector $w$ satisfying $wK=w$ is a scalar multiple of $\pi$. Equivalently, for the column matrix $P=K^{\mathsf T}$, the real fixed space of $P$ is one-dimensional.

## Facts & Assumptions

**Given:** A finite irreducible row-stochastic matrix $K$ on nonempty $C$.

[F1] [[def-transition-matrix-and-n-step-transition-probabilities]]: the entries of $K$ are nonnegative and each row sums to one.

[F2] [[def-invariant-and-stationary-distribution-for-a-markov-kernel]]: a probability row vector is invariant precisely when $\pi K=\pi$.

[F3] [[thm-every-finite-transition-matrix-has-a-stationary-distribution]]: every transition matrix on a nonempty finite state space has an invariant probability; this gives existence only, with no irreducibility or uniqueness conclusion.

[F4] [[def-finite-column-stochastic-matrix-and-law]]: transposing a row law and its row transition matrix gives the equivalent column law and column-stochastic matrix convention.

## Proof

**Given:** $K$ and its irreducibility hypothesis.

**Proof technique:** obtain a positive invariant vector, then apply a maximum principle to the reversed transition matrix.

1.1 By [F3], choose an invariant probability row vector $\pi$. At least one coordinate $\pi_j$ is positive because its finite nonnegative coordinates sum to one. [given, F2, F3, choose]

2.1 Fix any $i\in C$. By irreducibility there is a finite positive-probability path from $j$ to $i$, so for some $r\ge0$ the matrix power satisfies $(K^r)_{ji}>0$. Invariance implies $\pi K^r=\pi$, hence $\pi_i=\sum_k\pi_k(K^r)_{ki}\ge\pi_j(K^r)_{ji}>0$. Thus every coordinate of $\pi$ is positive. [F1, F2, step 1.1, algebra]

3.1 For any real invariant row vector $w$, define $f_i=w_i/\pi_i$. The matrix $R$ with entries $R_{ik}=\pi_kK_{ki}/\pi_i$ is well-defined by step 2.1, is nonnegative, and has row sums $\sum_kR_{ik}=\sum_k\pi_kK_{ki}/\pi_i=1$ by invariance of $\pi$. Also $f_i=\sum_kR_{ik}f_k$, by invariance of $w$. The directed graph of $R$ reverses that of $K$, so it is irreducible. [F1, F2, step 2.1, algebra]

4.1 Since $C$ is finite, choose an index $i$ at which $f_i$ attains its maximum $M$. The identity $M=f_i=\sum_kR_{ik}f_k$ is a convex combination of numbers at most $M$, so every $k$ with $R_{ik}>0$ has $f_k=M$. Repeating along directed paths of the irreducible matrix $R$ gives $f_k=M$ for every $k\in C$. Therefore $w=M\pi$. [step 3.1, choose, algebra]

5.1 Taking $w$ to be any invariant probability shows it equals $\pi$, because its coordinate sum is one; taking arbitrary real invariant $w$ gives the asserted one-dimensional fixed space. For $n=1$ the same argument has a single coordinate and is immediate. The proof uses finite paths, finite maxima, and finite sums only. [F2, F4, step 4.1, given] ∎
