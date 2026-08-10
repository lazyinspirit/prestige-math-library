---
id: lem-edge-is-a-bridge-iff-it-lies-on-no-cycle
kind: lemma
title: "An edge of a finite graph is a bridge if and only if it lies on no cycle"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-bridge-in-a-graph, def-graph-walk-trail-path-and-cycle, def-connected-graph-and-connected-component, def-graph-deletion-contraction-minor-and-subdivision]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Chapter 4, Section 4.2"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
pipeline_run: null
---

## Statement

For every edge $e$ of a finite graph $G$, $e$ is a bridge ([[def-bridge-in-a-graph]]) if and only if $e$ lies on no cycle ([[def-graph-walk-trail-path-and-cycle]]). Connectivity and deletion have the meanings of [[def-connected-graph-and-connected-component]] and [[def-graph-deletion-contraction-minor-and-subdivision]].

## Facts & Assumptions

**Given:** A finite graph $G$ and an edge $e=uv$.

[F1] A bridge is an edge whose deletion increases the number of connected components ([[def-bridge-in-a-graph]]).

[F2] A cycle is a closed walk with no repeated vertices apart from its first and last vertex ([[def-graph-walk-trail-path-and-cycle]]).



## Proof

**Proof technique:** direct.

1.1 If $e$ lies on a cycle, the remaining edges of that cycle form a $u$-$v$ path in $G-e$. Every path in $G$ that used $e$ can replace that occurrence by this path, so deleting $e$ separates no formerly connected pair. Thus $e$ is not a bridge. [F1, F2]

1.2 Conversely, if $e$ is not a bridge, $u$ and $v$ remain in the same component of $G-e$ and hence are joined there by a path. Adding $e$ to that path gives a cycle containing $e$. [F1, F2]

2.1 Step 1.1 says an edge on a cycle is not a bridge, and step 1.2 says an edge not a bridge lies on a cycle. Taking the contrapositive of either implication and combining them proves the biconditional componentwise, including when $G$ is disconnected. [step 1.1, step 1.2] ∎
