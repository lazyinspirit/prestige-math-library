---
id: lem-author-f736bc76cd5d-trace-walk-count
kind: lemma
title: Matrix powers count closed labelled slot walks
domain: mathematics
status: published
origin: pipeline
deps:
  - lem-author-f736bc76cd5d-reversible-slots
  - math:def-regular-multigraph-and-normalized-adjacency
dependency_roles:
  lem-author-f736bc76cd5d-reversible-slots: mathematical-premise
  math:def-regular-multigraph-and-normalized-adjacency: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 1
---

## Statement

For a finite $d$-regular adjacency-slot matrix $A$ on $V=\{1,\ldots,n\}$, with $n\ge1$ and integer $d>0$, fix reversible slot labels representing $A$. For every integer $m\ge0$ and $x,y\in V$, the entry $(A^m)_{xy}$ equals the number of labelled length-$m$ walks from $x$ to $y$. Consequently, for every integer $k\ge0$, $\operatorname{tr}(A^{2k})=\sum_x(A^{2k})_{xx}$ counts all closed length-$2k$ walks with specified starting vertex. Here the trace is the sum of diagonal matrix entries, and $A^0=I$.

## Statement references

[[math:def-regular-multigraph-and-normalized-adjacency]]

[[lem-author-f736bc76cd5d-reversible-slots]]

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

**Goal:** Establish every assertion in the statement.

[F1] Reversible slot labels represent exactly $A_{xy}$ choices for a step from $x$ to $y$; labelled walks retain their actual slot labels ([[lem-author-f736bc76cd5d-reversible-slots]]).

[F2] The adjacency-slot matrix is a symmetric nonnegative integer matrix indexed by the finite vertex set $V=\{1,\ldots,n\}$, with row sum $d$; diagonal entries count loop slots ([[math:def-regular-multigraph-and-normalized-adjacency]]).

## Proof

1.1 At length zero there is one walk from $x$ to itself and none to a different vertex, agreeing with $I$. Suppose the count equals $(A^m)_{xz}$ for length $m$. A walk of length $m+1$ from $x$ to $y$ has a unique last intermediate vertex $z$, a length-$m$ prefix to $z$, and one of $A_{zy}$ last slots. The resulting disjoint count is $\sum_z(A^m)_{xz}A_{zy}=(A^{m+1})_{xy}$. Induction proves the entry formula. [F1, F2, algebra]

2.1 Taking $y=x$ counts precisely the closed walks with starting vertex $x$. Summing these counts over the finitely many vertices gives the trace formula. Distinct parallel labels and distinct loop labels remain distinct choices in this count. [F2, step 1.1, algebra] ∎
