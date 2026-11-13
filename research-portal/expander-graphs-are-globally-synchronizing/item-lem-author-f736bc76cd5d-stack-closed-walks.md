---
title: Stack construction of closed walks with loops and repeated edges
status: published
research_item: lem-author-f736bc76cd5d-stack-closed-walks
dependency_level: 1
---

## Prerequisites

- [math:def-regular-multigraph-and-normalized-adjacency](https://alphabetamath.cc/item/def-regular-multigraph-and-normalized-adjacency)
- [lem-author-f736bc76cd5d-reversible-slots](item-lem-author-f736bc76cd5d-reversible-slots)
- [lem-author-f736bc76cd5d-catalan-count](item-lem-author-f736bc76cd5d-catalan-count)


## Statement

Let $A$ be a finite $d$-regular adjacency-slot matrix, with $d\ge2$, and fix a vertex $v$. For every integer $k\ge1$ there are at least $C_k(d-1)^k$ closed labelled walks of length $2k$ starting at $v$. Slot labels and their reversal are as in [lem-author-f736bc76cd5d-reversible-slots](item-lem-author-f736bc76cd5d-reversible-slots), and $C_k$ is the Dyck-word count in [lem-author-f736bc76cd5d-catalan-count](item-lem-author-f736bc76cd5d-catalan-count). Arbitrary diagonal slot counts and parallel slots are allowed.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

**Goal:** Establish every assertion in the statement.

[F1] Each vertex has $d$ outgoing labels, and reversal is an involution exchanging endpoints; fixed loop labels are permitted ([lem-author-f736bc76cd5d-reversible-slots](item-lem-author-f736bc76cd5d-reversible-slots)).

[F2] There are $C_k$ Dyck words of length $2k$, each having exactly $k$ positive symbols ([lem-author-f736bc76cd5d-catalan-count](item-lem-author-f736bc76cd5d-catalan-count)).

## Proof

1.1 Fix a Dyck word, start at $v$, and keep a stack of labels, initially empty. At a positive symbol choose any outgoing label if the stack is empty; otherwise exclude exactly the reversal of the top label. Traverse the chosen label and push it. At a negative symbol traverse the reversal of the top label and pop it. Inductively the current vertex is the terminal vertex of the stack path starting at $v$. The Dyck condition ensures a top label exists at each negative symbol. At the end the stack is empty and the walk ends at $v$. Every positive symbol has at least $d-1$ choices, and negative symbols are forced. [F1, F2, construct]

2.1 The resulting labelled walk uniquely determines its Dyck word and every choice. Indeed, reconstruct the stack from the empty stack: at an empty stack a step must be a push; at a nonempty stack a label equal to the reversal of its top must be a pop, and any other label must be a push. The construction prohibited precisely that reversal at a push. This deterministic decoding also works when a loop label is its own reversal, because labels, rather than endpoints alone, are compared. Thus different Dyck words or different choices cannot produce the same labelled walk. There are at least $C_k(d-1)^k$ such walks, as claimed. [F1, F2, step 1.1, construct, algebra] ∎
