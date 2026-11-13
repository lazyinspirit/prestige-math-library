---
id: lem-author-f736bc76cd5d-reversible-slots
kind: lemma
title: Reversible labels for adjacency slots
domain: mathematics
status: draft
origin: pipeline
deps:
  - math:def-regular-multigraph-and-normalized-adjacency
dependency_roles:
  math:def-regular-multigraph-and-normalized-adjacency: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
---

## Statement

Let $A$ be the adjacency-slot matrix of a finite $d$-regular multigraph in [[math:def-regular-multigraph-and-normalized-adjacency]]. There is a finite set $S$ of directed slot labels, maps $o,t:S\to V$ (origin and terminal vertex), and an involution $s\mapsto\bar s$ such that $o(\bar s)=t(s)$, $t(\bar s)=o(s)$, and exactly $A_{xy}$ labels have origin $x$ and terminal vertex $y$. Each vertex has $d$ outgoing labels. Diagonal labels may be fixed by the involution. A labelled walk of length $m$ is a list $(s_1,\ldots,s_m)$ with $t(s_i)=o(s_{i+1})$; it starts at $o(s_1)$ and is closed when $t(s_m)=o(s_1)$. The length-zero walk at a specified vertex is also allowed.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

**Goal:** Establish every assertion in the statement.

[F1] The adjacency-slot convention gives a symmetric nonnegative integer matrix with row sum $d$, including arbitrary nonnegative diagonal entries ([[math:def-regular-multigraph-and-normalized-adjacency]]).

## Proof

1.1 For each unordered pair of distinct vertices $\{x,y\}$, choose $A_{xy}=A_{yx}$ paired labels, one in each direction, and interchange each pair under reversal. For each $x$, choose $A_{xx}$ distinct labels with both endpoints $x$ and fix each under reversal. This gives the required involution and endpoint counts; summing the counts over destinations gives $d$ outgoing labels at each vertex. No parity of $A_{xx}$ is required. [F1, construct, algebra]

2.1 The endpoint conditions in the definition of a walk ensure that concatenating two successive labels is possible. Reversal of a label always starts at its former endpoint, including a fixed loop label. Thus the proposed walk and reversal operations are well-defined. They encode exactly the slot multiplicities in $A$, rather than requiring an ordinary loop with two incidence slots. This proves the assertions. [step 1.1, construct] ∎
