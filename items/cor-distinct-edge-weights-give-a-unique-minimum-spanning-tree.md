---
id: cor-distinct-edge-weights-give-a-unique-minimum-spanning-tree
kind: corollary
title: "A connected graph with pairwise distinct edge weights has a unique minimum spanning tree"
status: published
origin: session
deps: [thm-cut-and-cycle-properties-for-minimum-spanning-trees, lem-fundamental-cycle-of-a-spanning-tree, lem-spanning-tree-exchange, def-weighted-graph-and-minimum-spanning-tree, lem-finite-set-has-max]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "P. T. Wood, Graph Theory lecture notes, Minimum spanning trees"
      url: "https://ptwiddle.github.io/MAS341-Graph-Theory-2017/lecturenotes/lecture8.html"
pipeline_run: null
---

## Statement

If a connected graph has pairwise distinct real edge weights, then it has exactly one minimum spanning tree.

## Facts & Assumptions

**Given:** A connected weighted graph $(G,w)$ whose edge weights are pairwise distinct.

[F1] At least one MST exists ([[def-weighted-graph-and-minimum-spanning-tree]]).

[L1] A uniquely minimum edge of a cut belongs to every MST ([[thm-cut-and-cycle-properties-for-minimum-spanning-trees]]).

[L2] Exchanging an outside edge for an edge on its fundamental cycle preserves the spanning-tree property ([[lem-spanning-tree-exchange]]).

[L3] Adding an edge outside a spanning tree creates its unique fundamental cycle ([[lem-fundamental-cycle-of-a-spanning-tree]]).

[F2] Every finite nonempty set of edge weights has a least member, by order duality from [[lem-finite-set-has-max]].

## Proof

**Proof technique:** contradiction.

1.1 Suppose $T$ and $T'$ are distinct MSTs. Choose the least-weight edge $e$ in the symmetric difference $E(T)\mathbin\triangle E(T')$, and assume after swapping names that $e\in E(T)\setminus E(T')$. [assume-contra, F2]

1.2 By [L3], $T'+e$ has a fundamental cycle. Apart from $e$, that cycle cannot consist entirely of edges of $T$, since then it would be a cycle in $T$. Hence it contains an edge $f\in E(T')\setminus E(T)$. [choose, L3]

2.1 The choice of $e$ and distinct weights gives $w(e)<w(f)$. [step 1.1, step 1.2]

3.1 The exchange $T'-f+e$ is a spanning tree of weight $w(T')-w(f)+w(e)<w(T')$, contradicting the minimality of $T'$. [step 1.2, step 2.1, L2, F1]

4.1 Hence the MST is unique. [step 3.1, F1, discharge-contradiction] ∎
