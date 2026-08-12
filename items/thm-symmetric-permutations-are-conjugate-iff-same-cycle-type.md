---
id: thm-symmetric-permutations-are-conjugate-iff-same-cycle-type
kind: theorem
title: 'Two elements of $S_n$ are conjugate if and only if they have the same cycle type'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-conjugating-a-cycle-relabels-its-entries, thm-disjoint-cycle-decomposition, def-permutation-support-disjoint-cycles-and-cycle-type]
justified_by: []
aliases: []
landmark: true
proof_strategy: iff
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

For $\sigma,\tau\in S_n$, there is a $g\in S_n$ with
$\tau=g\sigma g^{-1}$ if and only if $\sigma$ and $\tau$ have the same cycle
type, including their numbers of fixed points.

## Facts & Assumptions

**Given:** Permutations $\sigma,\tau\in S_n$.

[F1] Every permutation has a disjoint-cycle decomposition, unique up to cycle order, cyclic rotation, and omission of fixed points ([[thm-disjoint-cycle-decomposition]]).

[F2] Cycle type records the number $c_k$ of cycles of each length $k$, including $1$-cycles ([[def-permutation-support-disjoint-cycles-and-cycle-type]]).

[F3] Conjugating a cycle by $g$ relabels all its entries by $g$ ([[lem-conjugating-a-cycle-relabels-its-entries]]).

## Proof

**Proof technique:** iff.

1.1 Suppose $\tau=g\sigma g^{-1}$. Conjugate every factor in the disjoint-cycle decomposition of $\sigma$; [F3] preserves each cycle length and relabels fixed points. [F1, F3]

1.2 Conversely, suppose the cycle types agree. By [F1] and [F2], pair every cycle of $\sigma$ with a cycle of $\tau$ of the same length, including the fixed points, and define $g$ by sending entries positionwise in each pair. [F1, F2]

2.1 Hence $\sigma$ and $\tau$ have the same multiplicities $c_k$ and the same cycle type. [F2, step 1.1]

2.2 The paired cycles partition the underlying set, so the map in step 1.2 is a bijection and hence an element of $S_n$. [step 1.2, algebra]

3.1 Applying [F3] to each paired cycle gives $g\sigma g^{-1}=\tau$. [F3, step 1.2, step 2.2] ∎
