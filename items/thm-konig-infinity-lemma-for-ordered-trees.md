---
id: thm-konig-infinity-lemma-for-ordered-trees
kind: theorem
title: "König's infinity lemma: an ordered finitely branching tree with a node at every level has an infinite branch, in ZF"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finitely-branching-tree-on-finite-sequences, thm-well-ordering-principle, thm-induction-principle, thm-recursion, def-countable]
justified_by: []
aliases: []
landmark: true
short: "König's infinity lemma"
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "I. B. Leader, Ramsey Theory, compactness proof after Corollary 3"
      url: "https://www.dpmms.cam.ac.uk/~par31/notes/ramsey.pdf"
pipeline_run: null
---

## Statement

Let $T$ be an ordered finitely branching tree of finite sequences ([[def-finitely-branching-tree-on-finite-sequences]]). If every level $T_n$ is nonempty, then $T$ has an infinite branch. The branch is constructed in ZF by least successors and natural recursion ([[thm-recursion]]); no choice principle is used. Its natural indexing agrees with the convention of [[def-countable]], and the elementary induction below uses [[thm-induction-principle]].

## Facts & Assumptions

**Given:** An ordered finitely branching tree $T$ with a node at every level.

[L1] Every nonempty subset $S \subseteq \mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L2] Given a set $A$, an element $a\in A$, and a function $f:A\to A$, natural recursion supplies a unique sequence beginning at $a$ and iterating $f$ ([[thm-recursion]]).

## Proof

**Proof technique:** constructive.

1.1 Call a node viable if it has descendants at arbitrarily high levels. The root is viable: if each of its finitely many successors had descendants only up to some level, the maximum of those finitely many bounds would bound the whole tree, contrary to the existence of a node at every level. [given, construct]

2.1 Every viable node has a viable immediate successor. Otherwise all its finitely many successors would have bounded descendant height, and the maximum of their bounds would contradict viability. The viable successor labels form a nonempty set of naturals, so [L1] gives a unique least one. [step 1.1, L1]

3.1 On the set of viable nodes, send each node to its least viable successor from step 2.1. Apply [L2] from the root. Every finite initial segment produced is a node of $T$, and at stage $n$ it has length $n$. Thus the recursive sequence is an infinite branch. [step 2.1, L2, discharge-construct] ∎
