---
id: thm-finite-simplicial-tree-agrees-with-the-published-finite-tree-notion
kind: theorem
title: "For finite graphs, the simplicial-tree notion agrees with the published finite-tree notion"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-the-graph-notions-agree-with-the-published-finite-graph-theory, thm-tree-characterisations, thm-unique-reduced-path-characterisation-of-simplicial-trees]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "Jean-Pierre Serre, Trees"
      url: "https://www.scribd.com/document/551505445/Jean-Pierre-Serre-Trees-Springer-Verlag-1980"
---

## Statement

Let $X$ be a finite oriented graph with no loops and no parallel geometric
edges, and let $|X|$ be its underlying finite simple graph obtained by
forgetting orientations and identifying each pair $\{e,\bar e\}$ to one
geometric edge. Then $X$ is a simplicial tree if and only if $|X|$ is a tree in
the published finite-graph sense.

## Facts & Assumptions

**Given:** A finite oriented graph $X$.

[L1] On a finite vertex set, the simple-graph walk, path, cycle, connectedness, and component notions agree with the published finite-graph notions. ([[lem-the-graph-notions-agree-with-the-published-finite-graph-theory]])

[L2] A finite nonempty graph is a published tree if and only if every two vertices are joined by a unique path. ([[thm-tree-characterisations]])

[L3] An oriented graph is a simplicial tree if and only if every two vertices are joined by a unique reduced path. ([[thm-unique-reduced-path-characterisation-of-simplicial-trees]])

## Proof

**Proof technique:** direct.

1.1 By the no-loop/no-parallel-edge hypothesis and [L1], a reduced simplicial path in $X$ is exactly a path in the underlying finite simple graph $|X|$, and connectedness means the same thing in both models. Therefore the uniqueness criterion in [L3] translates verbatim into the uniqueness criterion in [L2]. [L1, L2, L3, given]

2.1 Applying [L2] and [L3] to the translation from step 1.1 shows that $X$ is a simplicial tree exactly when $|X|$ is a published finite tree. [L2, L3, step 1.1] ∎
