---
id: def-greedy-set-cover
kind: definition
title: "Weighted greedy set cover and element charges"
status: draft
origin: pipeline
deps:
  - def-optimization-problem-and-approximation-ratio
  - def-set-cover
  - def-harmonic-number-for-set-cover-analysis
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Williamson and Shmoys, The Design of Approximation Algorithms, §§1.1, 1.6, 2.4, 5.1–5.2, 16.2, printed pp. 14–15, 24–26, 44–46, 107–109, 413–414"
      url: "https://designofapproxalgs.com/book.pdf"
    - title: "Ghaffari, Advanced Algorithms, Lecture 1: Approximation Algorithms I, §§1, 2.1, 2.2.2, PDF pp. 1–5"
      url: "https://people.csail.mit.edu/ghaffari/AA18/Notes/S_18_01.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Definition

The **weighted set-cover problem** is the following finite-instance
optimization problem. An instance consists of a finite universe
$U=\{u_1,\dots,u_n\}$ of $n$ elements, an explicitly listed finite family
$S_1,\dots,S_m$ of subsets of $U$ with $\bigcup_i S_i=U$, and a nonnegative
rational **cost** $c_i\ge 0$ for each listed set. A feasible solution is a
subfamily whose union is $U$, and its objective value is the total cost of the
selected sets; the direction is minimization. When every cost is $1$, deciding
whether a cover has total cost at most a natural number $k$ gives the
unit-cost decision problem [[def-set-cover]], restricted here to families
covering $U$. For general costs the corresponding decision question uses a
rational budget on total cost. The decision parameter $k$ plays no role in
the weighted algorithm or its analysis.

The **weighted greedy algorithm** is the following deterministic procedure. It
maintains the set of currently uncovered elements, initially $U$, and the list
of chosen indices, initially empty. While uncovered elements remain, it
considers every listed set $S_i$ with at least one currently uncovered element,
so that the **newly covered count** $|S_i\setminus(\text{covered})|$ is
positive, and chooses one minimizing the ratio
$c_i\big/|S_i\setminus(\text{covered})|$; ties are resolved by the smallest
index in the input order. It adds that index to the chosen list and marks its
newly covered elements. When $U$ is empty, no set is chosen and the algorithm
returns the empty cover. Since the listed family covers $U$, every round of the
loop finds a positive newly covered count.

A set chosen in a round **charges** every element it newly covers the same
amount, namely its cost divided by its newly covered count. Thus the total
charged to the elements equals the total cost of the chosen cover. Here
$H_n$ is the $n$-th harmonic number of
[[def-harmonic-number-for-set-cover-analysis]], so $H_0=0$ and
$H_n=\sum_{j=1}^n 1/j$ for $n\ge 1$. All ratios are computed exactly in the
rationals, and the finitely many ratios of each round are compared by exact
rational arithmetic.
