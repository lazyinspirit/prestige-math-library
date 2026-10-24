---
id: thm-menger-finite-directed-and-undirected-path-forms
kind: theorem
title: "Menger's theorem: the finite directed and undirected arc, edge and nonadjacent-vertex forms"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-local-path-packings-and-separators, thm-ford-fulkerson-integral-max-flow-min-cut, lem-integral-unit-flow-decomposition, def-multigraph-loop-and-digraph, def-finite-cardinality]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "M. Goemans, Lecture notes on flows and cuts"
      url: "https://math.mit.edu/~goemans/18453S17/flowscuts.pdf"
    - title: "D. Hulpke, Graph Theory notes"
      url: "https://www.math.colostate.edu/~hulpke/lectures/m501/notes.pdf"
pipeline_run: null
---

## Statement

All graphs below are finite and the terminals $s,t$ are distinct.

1. In a directed graph, the maximum number of arc-disjoint directed $s$-$t$
   paths equals the minimum size of an arc separator.
2. In an undirected graph, the maximum number of edge-disjoint $s$-$t$ paths
   equals the minimum size of an edge separator.
3. In a directed graph with no arc $s\to t$, the maximum number of internally
   vertex-disjoint directed $s$-$t$ paths equals the minimum size of a vertex
   separator.
4. In an undirected graph with nonadjacent $s,t$, the maximum number of
   internally vertex-disjoint $s$-$t$ paths equals the minimum size of a vertex
   separator.

## Facts & Assumptions

**Given:** The path packings and separator notions of the statement.

[F1] Arc, edge, and vertex separators are deleted sets that eliminate the corresponding $s$-$t$ paths; the local vertex form excludes a direct terminal connection ([[def-local-path-packings-and-separators]]).

[L1] Finite integral max-flow min-cut applies to a network with no original arc entering $s$ or leaving $t$, and supplies a maximum integral flow and a minimum cut of equal value ([[thm-ford-fulkerson-integral-max-flow-min-cut]]).

[L2] Every feasible integral flow decomposes into unit source-sink path flows and circulation flows; when every capacity is at most one, its source-sink paths are arc-disjoint ([[lem-integral-unit-flow-decomposition]]).

## Proof

**Proof technique:** constructive.

1.1 For a directed graph, delete arcs entering $s$ and arcs leaving $t$; no directed $s$-$t$ path uses one, so this preserves both the path packing number and the minimum arc-separator size. Give every remaining labelled arc capacity one. [F1, construct]

1.2 In that unit network, cut arcs are arc separators; conversely, after deleting an arc separator, the vertices reachable from $s$ determine a cut whose outgoing arcs are contained in that separator. Thus minimum cut capacity equals minimum arc-separator size. [F1]

1.3 For an undirected graph, bidirect every edge, delete the now-irrelevant arcs entering $s$ or leaving $t$, and give the remaining labelled arcs unit capacity; a cut then contains exactly one forward copy of each crossing undirected edge. [F1]

1.4 Cancel the smaller of the two opposed flow values on every original edge. This preserves feasibility and value, since the preprocessing leaves no opposed pair incident with $s$ or $t$; [L1] and [L2] then give paths which are edge-disjoint after orientations are forgotten, proving clause 2. [L1, L2]

1.5 For the directed vertex form, first make the same source/sink preprocessing. With $n:=|V|$, replace every internal vertex $v$ by a capacity-one arc $v^-\to v^+$, and replace each original arc by a transport arc of capacity $n$ from the appropriate source copy to target copy. [F1]

1.6 Deleting every internal vertex arc gives a cut of capacity $n-2<n$, because no $s\to t$ arc exists. Hence a minimum cut uses no transport arc; its vertex arcs are exactly a vertex separator, while every vertex separator gives such a cut. [F1]

1.7 By [L1], the split network has an integral maximum flow equal to that separator number. By [L2] its unit source-sink path terms number exactly that flow value, while cycle terms have value zero; capacity one on every $v^-\to v^+$ prevents two such terms from sharing an internal vertex. Projecting them proves clause 3. [L1, L2]

1.8 For the undirected vertex form, bidirect first and then apply steps 1.5--1.7; nonadjacency gives no $s\to t$ arc, and projection gives internally vertex-disjoint undirected paths, proving clause 4. [F1]

2.1 By [L1] and [L2], a maximum unit flow decomposes into as many arc-disjoint source-sink paths as its value, so clause 1 follows from step 1.2. [L1, L2]

3.1 The unit arc construction proves clause 1, its bidirected cancellation proves clause 2, and the capacity-one vertex-arc construction proves clauses 3 and 4. [step 2.1, step 1.4, step 1.7, step 1.8, discharge-construct] ∎

## Remarks

- The undirected edge reduction cancels opposed flow before decomposition. This prevents two output paths from consuming the two orientations of one original undirected edge.
