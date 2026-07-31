---
id: lem-katona-cyclic-interval-bound
kind: lemma
title: "At most $k$ cyclic intervals of length $k$ in a cyclic order are pairwise intersecting when the ground-set size is at least $2k$"
status: published
origin: session
deps: [def-intersecting-family, def-finite-cardinality]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-07-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Fox, MIT MAT 307, Lecture 12: Erdős-Ko-Rado by Katona's method"
      url: "https://math.mit.edu/~fox/MAT307-lecture12.pdf"
pipeline_run: null
---

## Statement

Let $1\le k$ and $n\ge2k$, and place an $n$-element set in a cyclic order.
Among its $n$ cyclic intervals of length $k$, every pairwise intersecting
family has at most $k$ members.

## Facts & Assumptions

**Given:** Natural numbers $1\le k$ and $n\ge2k$, a cyclic order $(a_0,\ldots,a_{n-1})$, and a pairwise intersecting family $\mathcal I$ of its length-$k$ cyclic intervals, with indices read modulo $n$.

[F1] A family is intersecting when every two of its members have nonempty intersection ([[def-intersecting-family]]).

[F2] The ground set is finite of cardinality $n$ ([[def-finite-cardinality]]).

## Proof

**Proof technique:** direct.

1.1 If $\mathcal I$ is empty there is nothing to prove. Otherwise rotate the notation so that $I_0:=\{a_0,\ldots,a_{k-1}\}$ belongs to $\mathcal I$. [given]

1.2 For each $j\in\{1,\ldots,k-1\}$, the interval starting at $a_j$ and the interval starting at $a_{j-k}$ are disjoint: the latter ends at $a_{j-1}$ and the former begins at $a_j$, and together they use two adjacent blocks of $k$ positions without wrapping into each other because $n\ge2k$. [given]

2.1 Every other length-$k$ interval in $\mathcal I$ must intersect $I_0$. Since $n\ge2k$, its starting position is therefore one of $1,\ldots,k-1$ or one of $n-k+1,\ldots,n-1$. [step 1.1, F1]

3.1 Thus $\mathcal I$ contains at most one interval from each of the $k-1$ disjoint pairs in step 1.2, in addition to $I_0$. Hence $|\mathcal I|\le1+(k-1)=k$. [step 2.1, step 1.2, F1] ∎
