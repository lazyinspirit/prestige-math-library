---
id: thm-cut-and-cycle-properties-for-minimum-spanning-trees
kind: theorem
title: "Cut and cycle properties for minimum spanning trees"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-weighted-graph-and-minimum-spanning-tree, lem-spanning-tree-exchange, lem-fundamental-cycle-of-a-spanning-tree, lem-fundamental-cut-of-a-spanning-tree]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "ISI Bangalore discrete mathematics notes, Minimal spanning trees"
      url: "https://www.isibang.ac.in/~d.yogesh/Course_Notes/DM1/Ch4.S3.html"
pipeline_run: null
---

## Statement

Let $(G,w)$ be a connected real edge-weighted graph.

1. A minimum-weight edge crossing any nontrivial cut belongs to some MST.
2. A uniquely minimum-weight edge crossing a cut belongs to every MST.
3. A maximum-weight edge on any cycle is omitted by some MST.
4. A uniquely maximum-weight edge on a cycle belongs to no MST.

## Facts & Assumptions

**Given:** A connected weighted graph $(G,w)$.

[F1] An MST minimizes the sum of its edge weights ([[def-weighted-graph-and-minimum-spanning-tree]]).

[L1] Exchanging an outside edge with a suitable tree edge on its fundamental cycle, or a tree edge with a crossing edge of its fundamental cut, preserves the spanning-tree property ([[lem-spanning-tree-exchange]], [[lem-fundamental-cycle-of-a-spanning-tree]], [[lem-fundamental-cut-of-a-spanning-tree]]).

## Proof

**Proof technique:** direct exchange arguments.

1.1 Let $e$ be a minimum edge crossing a cut and choose an MST $T$. If $e\in T$, this MST already proves assertion 1. If $e\notin T$, the fundamental cycle of $e$ contains a tree edge $f$ crossing the same cut. [choose, L1]

1.2 Let $g$ be a maximum edge on a cycle and choose an MST $S$. If $g\notin S$, this MST already proves assertion 3. If $g\in S$, deleting $g$ gives a fundamental cut, and the remainder of the cycle contains an edge $h$ crossing that cut. [choose, L1]

2.1 In the second case of step 1.1, $w(e)\le w(f)$, so $T-f+e$ is an MST containing $e$. Together with the first case, this proves assertion 1. [step 1.1, L1, F1]

2.2 If $e$ is uniquely minimum across the cut and an MST omitted it, the same exchange would have $w(e)<w(f)$ and strictly decrease total weight. Thus every MST contains $e$. [step 1.1, F1]

2.3 In the second case of step 1.2, $w(h)\le w(g)$, so $S-g+h$ is an MST omitting $g$. Together with the first case, this proves assertion 3. [step 1.2, L1, F1]

3.1 If $g$ is uniquely maximum on the cycle, then $w(h)<w(g)$ in step 1.2, so no MST can contain $g$. [step 1.2, step 2.3, F1] ∎
