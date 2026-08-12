---
id: cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types
kind: corollary
title: 'The conjugacy classes of $S_n$ are indexed by the tuples $(c_1,\ldots,c_n)$ with $\sum k c_k=n$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-symmetric-permutations-are-conjugate-iff-same-cycle-type, def-permutation-support-disjoint-cycles-and-cycle-type]
justified_by: []
aliases: []
landmark: false
proof_strategy: bijection
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Conjugacy Classes"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/conjclass.pdf"
pipeline_run: frontier-11
---

## Statement

The conjugacy classes of $S_n$ are in bijection with the tuples of
nonnegative integers $(c_1,\ldots,c_n)$ satisfying
$$\sum_{k=1}^n kc_k=n.$$
For $n=0$, the unique empty tuple indexes the identity class of $S_0$.

## Facts & Assumptions

**Given:** The symmetric group $S_n$ for $n\ge0$.

[F1] The cycle type of a permutation is the tuple $(c_1,\ldots,c_n)$ counting cycles of each length, and it satisfies $\sum kc_k=n$ ([[def-permutation-support-disjoint-cycles-and-cycle-type]]).

[F2] Two permutations in $S_n$ are conjugate exactly when they have the same cycle type ([[thm-symmetric-permutations-are-conjugate-iff-same-cycle-type]]).

## Proof

**Proof technique:** bijection.

1.1 Assign to a conjugacy class the cycle type of any representative; [F2] makes this well-defined and injective. [F2]

1.2 Conversely, for any such tuple, partition $n$ symbols into $c_k$ blocks of size $k$ and put a $k$-cycle on each block; their product has that cycle type. For $n=0$, use the empty product on the empty set. [F1, algebra]

2.1 By [F1], its image consists of tuples satisfying the displayed equation. [F1, step 1.1]

3.1 Thus the assignment is surjective and hence a bijection. [step 1.1, step 2.1, step 1.2] ∎
