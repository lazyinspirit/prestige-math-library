---
id: thm-mirsky-finite-posets
kind: theorem
title: "Mirsky's theorem: the minimum number of antichains covering a finite poset equals its height"
status: published
origin: session
deps: [def-chain, def-antichain-and-poset-covers, def-height-and-width-of-a-finite-poset, thm-well-ordering-principle]
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
    - title: "M. Keller and W. T. Trotter, Applied Combinatorics, §6.4"
      url: "https://appliedcombinatorics.org/book/s_posets_dilworth.html"
pipeline_run: null
---

## Statement

Let $P$ be a nonempty finite poset of height $h(P)$. Then $P$ can be covered
by $h(P)$ antichains, and no cover by fewer antichains exists. Thus the minimum
number of antichains in an antichain cover of $P$ equals $h(P)$.

## Facts & Assumptions

**Given:** A nonempty finite poset $P$ with height $h:=h(P)$.

[F1] A chain is a subset of pairwise comparable elements; an antichain is a subset of pairwise incomparable elements; and an antichain cover has union $P$ ([[def-chain]], [[def-antichain-and-poset-covers]]).

[F2] The height $h(P)$ is the maximum cardinality of a chain in $P$ ([[def-height-and-width-of-a-finite-poset]]).

[L1] Every nonempty subset of $\mathbb N$ has a least element ([[thm-well-ordering-principle]]); equivalently, every nonempty finite bounded collection of natural numbers has a greatest element.

## Proof

**Proof technique:** direct.

1.1 For each $x\in P$, let $r(x)$ be the greatest cardinality of a chain whose largest element is $x$. Such a chain exists, since $\{x\}$ is one, and the greatest cardinality exists because the possible values form a nonempty finite subset of $\{1,\ldots,|P|\}$. [given, F1, L1]

1.2 Let $C$ be a chain of cardinality $h$, which exists by [F2]. Every antichain contains at most one element of $C$, so any antichain cover of $P$ needs at least $h$ members to cover the $h$ elements of $C$. [F1, F2]

2.1 If $x<y$, then appending $y$ to a chain of cardinality $r(x)$ ending at $x$ gives a chain ending at $y$, so $r(y)\ge r(x)+1$. [step 1.1, F1]

3.1 For $i\in\{1,\ldots,h\}$ put $A_i:=\{x\in P:r(x)=i\}$. Each $A_i$ is an antichain, since comparable distinct elements have different $r$-values by step 2.1. [step 2.1, F1]

4.1 Every $x\in P$ belongs to exactly one $A_i$, and $1\le r(x)\le h$ by the definition of height, so $A_1,\ldots,A_h$ cover $P$. [step 1.1, step 3.1, F2]

5.1 Step 4.1 gives an antichain cover with $h$ members and step 1.2 rules out every smaller one. Hence the minimum antichain-cover number is $h(P)$. [step 4.1, step 1.2] ∎
