---
id: ex-petersen-graph-nonplanar-by-kuratowski
kind: example
title: "The Petersen graph is nonplanar by an explicit subdivision of $K_{3,3}$ after deleting one vertex"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-kuratowski-wagner-planarity-characterisation, def-petersen-graph, def-graph-deletion-contraction-minor-and-subdivision]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Section 4.4"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
pipeline_run: null
---

## Example

Deleting one vertex from the Petersen graph exposes a subdivision of $K_{3,3}$.

## Facts & Assumptions

**Given:** Label a Petersen vertex by a two-element subset of $\{1,2,3,4,5\}$, with adjacency exactly when labels are disjoint, as in [[def-petersen-graph]].

[L1] A finite graph is planar exactly when it contains neither a subdivision of $K_5$ nor a subdivision of $K_{3,3}$ ([[thm-kuratowski-wagner-planarity-characterisation]]).

[F1] Two Petersen vertices are adjacent exactly when their two-element labels are disjoint ([[def-petersen-graph]]).

## Verification

**Proof technique:** constructive.

1.1 Delete the vertex $12$. Take the branch classes $A=\{13,14,15\}$ and $B=\{23,24,25\}$. The six direct branch connections are $13$ to $24,25$, $14$ to $23,25$, and $15$ to $23,24$. The remaining three are the paths $13-45-23$, $14-35-24$, and $15-34-25$. [F1, construct]

2.1 Every consecutive pair in the displayed list has disjoint labels, so it is an edge by [F1]. The internal vertices $45,35,34$ are distinct and are not branch vertices; all other listed connections are single edges. Thus the nine paths are internally disjoint and form a subdivision, in the sense of [[def-graph-deletion-contraction-minor-and-subdivision]], of $K_{3,3}$ with branch classes $A$ and $B$. This subdivision lies in a subgraph of the Petersen graph, so [L1] proves that the Petersen graph is nonplanar. [L1, F1, step 1.1, discharge-construct] ∎
