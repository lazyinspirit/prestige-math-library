---
id: lem-barycentric-subdivision-removes-edge-inversions
kind: lemma
title: "Barycentric subdivision removes edge inversions while preserving the tree"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-edge-inversion-and-action-without-inversions, def-simplicial-tree]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Yuriy Tumarkin, Groups Acting on Trees"
      url: "https://www.scribd.com/document/825918235/trees"
    - title: "Jean-Pierre Serre, Trees"
      url: "https://www.scribd.com/document/551505445/Jean-Pierre-Serre-Trees-Springer-Verlag-1980"
---

## Statement

Let $G$ act on a simplicial tree $T$. Form the barycentric subdivision $T'$ by
inserting one new midpoint vertex on each geometric edge of $T$ and replacing
every geometric edge by the two half-edges meeting that midpoint. Then the
action extends to $T'$, the graph $T'$ is again a simplicial tree, and the
extended action is without inversions.

## Facts & Assumptions

**Given:** An action of a group $G$ on a simplicial tree $T$.

[L1] An action is without inversions exactly when no element sends an oriented edge to its reverse. ([[def-edge-inversion-and-action-without-inversions]])

[L2] A simplicial tree is a connected oriented graph with no nontrivial reduced closed path. ([[def-simplicial-tree]])

## Proof

**Proof technique:** direct.

1.1 Every automorphism of $T$ permutes geometric edges, so it sends the midpoint of an edge to the midpoint of its image edge. Hence the original action extends uniquely to the subdivided graph $T'$. [L1, L2, given, construct]

2.1 The graph $T'$ is connected because each original edge has only been split in two. A reduced closed path in $T'$ would project, after deleting midpoint backtracks, to a nontrivial reduced closed path in $T$, contradicting [L2]. So $T'$ is again a simplicial tree. [L2, step 1.1, algebra]

3.1 In $T'$, every half-edge joins an original vertex to a midpoint vertex. Its reverse joins a midpoint vertex to an original vertex, so an automorphism cannot send a half-edge to its reverse without swapping the two vertex types. That cannot happen in the extended action. Therefore the action on $T'$ is without inversions in the sense of [L1]. [L1, step 1.1, step 2.1, algebra] ∎
