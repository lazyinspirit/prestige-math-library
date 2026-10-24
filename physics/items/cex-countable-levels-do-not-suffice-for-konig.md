---
id: cex-countable-levels-do-not-suffice-for-konig
kind: counterexample
title: "Countable levels do not suffice for König’s lemma"
status: published
origin: pipeline
deps: [def-set-theoretic-tree-and-levels, thm-konig-finite-level-tree, thm-product-of-countable, lem-subset-of-countable, thm-well-ordering-principle]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Monk, Set theory following Jech (2024), Theorem 9.32, printed p86; decreasing-sequence witness supplied locally"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
proof_strategy: direct
---

## Statement refuted

Every height-$\omega$ tree with countable levels has a cofinal branch.

## Facts & Assumptions

**Given:** Work in ZF. Let $T$ be the set of all finite strictly decreasing sequences of natural numbers, including the empty sequence, ordered by proper initial segment.

[F1] Heights are predecessor order types; a cofinal branch has node heights unbounded in the height of the tree. [[def-set-theoretic-tree-and-levels]]

[F2] A product of two countable sets is countable. [[thm-product-of-countable]]

[F3] Subsets of countable sets are countable. [[lem-subset-of-countable]]

[F4] Every nonempty set of natural numbers has a least element. [[thm-well-ordering-principle]]

## Counterexample

1.1 The predecessors of a sequence $s$ of length $n$ are exactly its restrictions to lengths $0,1,\ldots,n-1$, in that order. Thus the proper initial-segment relation is transitive and irreflexive, its predecessor orders are finite well-orders, and $\operatorname{ht}_T(s)=n$ by F1. The empty sequence is the unique root. [given, F1]

2.1 The level $T_0$ is a singleton. For each fixed $n$, the set $\omega^n$ of length-$n$ sequences is countable: start with the singleton $\omega^0$ and iterate F2 using $\omega^{n+1}\cong\omega^n\times\omega$. Since $T_n\subseteq\omega^n$, F3 makes every level countable. For $n>0$ the explicit sequence $(n-1,n-2,\ldots,0)$ has length $n$ and lies in $T_n$. Therefore all finite heights occur and the height is exactly $\omega$. The first level contains every $(m)$ for $m\in\omega$, so it is infinite. [F1, F2, F3, step 1.1]

3.1 If $B$ were a cofinal branch, its sequences would be nested and have unbounded lengths by F1. Their union would therefore be a function $b:\omega\to\omega$. For each $n$, take a node in $B$ of length at least $n+2$; its strict decrease gives $b(n+1)<b(n)$. The nonempty range of $b$ has a least element $b(k)$ by F4, but $b(k+1)$ is a smaller element of the same range, a contradiction. Thus the displayed countable-level tree has no cofinal branch. Its infinitely branching root and infinite first level explain precisely the failure of the finite-level hypothesis. [F1, F4, step 1.1, step 2.1] ∎
