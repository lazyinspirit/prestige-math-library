---
id: def-prufer-code
kind: definition
title: "The Prüfer code of a tree on a finite set of natural labels"
status: published
origin: session
deps: [def-tree-forest-and-leaf, cor-nontrivial-tree-has-two-leaves, thm-well-ordering-principle, def-natural-numbers, def-finite-cardinality]
justified_by: []
aliases: [Pruefer code]
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "ISI Bangalore discrete mathematics notes, Prüfer codes"
      url: "https://www.isibang.ac.in/~d.yogesh/Course_Notes/DM1/Ch4.S1.html"
pipeline_run: null
---

## Definition

Let $S\subseteq\mathbb N$ be finite with $|S|=n\ge2$, and let $T$ be a tree whose vertex set is $S$. Here $n-2$ denotes the unique natural number $m$ satisfying $m+2=n$. The **Prüfer code** is the word of length $n-2$ on $S$ obtained by repeating the following operation until two vertices remain:

1. choose the least labelled leaf $v$;
2. record the unique neighbour of $v$;
3. delete $v$ and its incident edge.

A nontrivial tree has a leaf, so the least one exists ([[cor-nontrivial-tree-has-two-leaves]], [[thm-well-ordering-principle]]). Deleting a leaf from a tree with at least three vertices leaves a tree: paths between the remaining vertices never need the deleted leaf, and no cycle is introduced. Thus every stage is defined. Each stage removes one vertex, so precisely $n-2$ symbols are recorded.

The usual formulation has $S=n=\{0,1,\ldots,n-1\}$, using natural numbers as their von Neumann initial segments ([[def-natural-numbers]], [[def-finite-cardinality]]). Allowing an arbitrary finite subset of natural labels is essential because every intermediate label set produced by deletion is again such a subset.
