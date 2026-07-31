---
id: lem-dilworth-maximal-antichain-decomposition
kind: lemma
title: "A maximal antichain splits a finite poset into its down-set and up-set with the antichain as their intersection"
status: published
origin: session
deps: [def-antichain-and-poset-covers, def-finite-cardinality, def-partial-order]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-07-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Keller and W. T. Trotter, Applied Combinatorics, §6.4"
      url: "https://appliedcombinatorics.org/book/s_posets_dilworth.html"
pipeline_run: null
---

## Statement

Let $P$ be a finite poset and let $A$ be a maximal antichain. Define

$$P^-:=\{x\in P:x\le a\text{ for some }a\in A\},\qquad P^+:=\{x\in P:a\le x\text{ for some }a\in A\}.$$

Then $P=P^-\cup P^+$ and $P^-\cap P^+=A$. Both sets carry the order induced
from $P$.

## Facts & Assumptions

**Given:** A finite poset $P$, a maximal antichain $A\subseteq P$, and the subsets $P^-$ and $P^+$ in the Statement.

[F1] An antichain has pairwise incomparable distinct elements and is maximal when no strictly larger antichain contains it ([[def-antichain-and-poset-covers]]).

[F2] A partial order is reflexive, antisymmetric, and transitive ([[def-partial-order]]).

## Proof

**Proof technique:** direct.

1.1 If $x\in P\setminus A$ were incomparable with every $a\in A$, then $A\cup\{x\}$ would be a larger antichain. Maximality therefore gives an $a\in A$ comparable with $x$. [given, F1]

1.2 Let $x\in P^-\cap P^+$. There are $a,b\in A$ with $b\le x\le a$, hence $b\le a$ by transitivity. Since $A$ is an antichain, $a=b$, and antisymmetry applied to $a\le x\le a$ gives $x=a\in A$. [given, F1, F2]

2.1 For the comparable pair from step 1.1, either $x\le a$ and $x\in P^-$, or $a\le x$ and $x\in P^+$. Every member of $A$ lies in both sets by reflexivity, so $P=P^-\cup P^+$. [step 1.1, F2]

2.2 Conversely, every $a\in A$ satisfies $a\le a$, so $A\subseteq P^-\cap P^+$. Together with step 1.2 this gives $P^-\cap P^+=A$. [step 1.2, F2]

3.1 Steps 2.1 and 2.2 establish the asserted union and intersection; restricting the order of $P$ to either subset again gives a partial order. [step 2.1, step 2.2, F2] ∎
