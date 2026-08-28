---
id: fs-a-quotient-of-a-tree-by-a-group-action-is-always-a-tree
kind: false-statement
title: "FALSE: a quotient of a tree by a group action is always a tree"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-quotient-graph-of-an-action-without-inversions, thm-elliptic-hyperbolic-dichotomy-for-tree-automorphisms]
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
---

## Statement

Whenever a group acts on a simplicial tree without inversions, the quotient
graph is again a tree.

## Facts & Assumptions

**Given:** The quotient-graph definition and a hyperbolic tree automorphism.

[L1] A quotient graph keeps only vertex and edge orbits. ([[def-quotient-graph-of-an-action-without-inversions]])

[L2] Hyperbolic automorphisms act by translation on an invariant axis. ([[thm-elliptic-hyperbolic-dichotomy-for-tree-automorphisms]])

## Refutation

**Proof technique:** direct.

1.1 Let $g$ be translation by $n\mapsto n+3$ on the bi-infinite line. By [L2] this is a hyperbolic action without inversions on a tree. [L2, given]

2.1 In the quotient graph from [L1], the vertex orbits are the residue classes of $n$ modulo $3$, and the edge orbits join them in a $3$-cycle. That quotient is not a tree, so the statement is false. [L1, step 1.1, algebra] ∎
