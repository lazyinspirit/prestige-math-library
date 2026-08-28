---
id: ex-regular-cayley-trees-of-free-groups
kind: example
title: "Regular Cayley trees of free groups"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-finite-simplicial-tree-agrees-with-the-published-finite-tree-notion, thm-the-cayley-graph-of-a-free-group-with-respect-to-a-free-basis-is-a-tree]
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
---

## Example

If $F_r$ is a free group with free basis $S$ of size $r$, then the undirected
Cayley graph of $(F_r,S)$ is a tree and every vertex has valence $2r$. Orienting
each geometric edge in both directions turns it into a simplicial tree.

## Facts & Assumptions

**Given:** A free group $F_r$ with free basis $S$.

[L1] The Cayley graph of a free group with respect to a free basis is a tree. ([[thm-the-cayley-graph-of-a-free-group-with-respect-to-a-free-basis-is-a-tree]])

[L2] On finite pieces, the simplicial-tree notion matches the published tree notion. ([[thm-finite-simplicial-tree-agrees-with-the-published-finite-tree-notion]])

## Verification

**Proof technique:** direct.

1.1 By [L1], the underlying simple Cayley graph is a tree. Each vertex has one edge labelled by each basis element and by its inverse, so its valence is $2r$. [L1, given]

2.1 Replacing every geometric edge by the two corresponding orientations does not create a cycle; it only records both directions explicitly. Thus the same graph becomes a simplicial tree, in agreement with the finite bridge principle [L2]. [L1, L2, step 1.1, algebra] ∎
