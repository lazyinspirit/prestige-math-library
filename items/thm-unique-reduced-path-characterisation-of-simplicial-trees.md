---
id: thm-unique-reduced-path-characterisation-of-simplicial-trees
kind: theorem
title: "A simplicial graph is a tree exactly when every two vertices are joined by a unique reduced path"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-simplicial-tree]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Jean-Pierre Serre, Trees"
      url: "https://www.scribd.com/document/551505445/Jean-Pierre-Serre-Trees-Springer-Verlag-1980"
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
---

## Statement

An oriented graph is a simplicial tree if and only if it is nonempty and every
two vertices are joined by a unique reduced path.

## Facts & Assumptions

**Given:** An oriented graph.

[L1] A simplicial tree is a nonempty connected oriented graph with no nontrivial reduced closed path. ([[def-simplicial-tree]])

## Proof

**Proof technique:** direct.

1.1 If the graph is a simplicial tree, then [L1] gives connectedness, so every two vertices are joined by some reduced path. If there were two distinct reduced paths between the same vertices, follow one and return along the reverse of the other; after cancelling any common initial segment, one obtains a nontrivial reduced closed path, contradicting [L1]. [L1, given]

2.1 Conversely, assume the graph is nonempty and every two vertices are joined by a unique reduced path. Then it is connected. A nontrivial reduced closed path based at $v_0$ with first edge $e_1$ would give two reduced paths from $v_0$ to $t(e_1)$: the one-edge path $e_1$ and the reverse of the remaining part of the cycle. That contradicts uniqueness. Hence no nontrivial reduced closed path exists, so the graph is a simplicial tree by [L1]. [L1, given] ∎
