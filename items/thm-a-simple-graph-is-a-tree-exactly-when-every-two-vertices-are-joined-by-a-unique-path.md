---
id: thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path
kind: theorem
title: "A nonempty simple graph is a tree if and only if each pair of vertices is joined by exactly one path"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-simple-graph-without-a-finiteness-hypothesis, def-walks-paths-and-connectedness-in-a-simple-graph, lem-every-walk-in-a-simple-graph-contains-a-path-with-the-same-endpoints, def-cycles-trees-and-forests-in-a-simple-graph]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version), 264 pp."
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "C. Drutu and M. Kapovich, Geometric Group Theory (with an appendix by B. Nica), 837 pp."
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
---
## Statement

A nonempty simple graph is a tree if and only if each pair of vertices is joined by exactly one path.

## Facts & Assumptions

**Given:** A nonempty simple graph.

[F1] A cycle is a closed walk of length at least three with distinct vertices apart from its endpoints; a forest is a simple graph with no cycle and a tree is a connected forest ([[def-cycles-trees-and-forests-in-a-simple-graph]]).

[F2] A walk of length $\ell$ in a simple graph is a finite vertex list $(v_0,\dots,v_\ell)$ with consecutive vertices adjacent; a path is a walk with distinct vertices; the graph is connected when it is nonempty and every two vertices are joined by a path ([[def-walks-paths-and-connectedness-in-a-simple-graph]]).

[L1] A simple graph is a pair $(V,E)$ with $V$ any set and $E$ a set of two-element subsets of $V$ ([[def-simple-graph-without-a-finiteness-hypothesis]]).

[L2] Every walk in a simple graph contains a path with the same endpoints and of no greater length ([[lem-every-walk-in-a-simple-graph-contains-a-path-with-the-same-endpoints]]).


## Proof

**Proof technique:** direct.

1.1 If paths are unique, nonemptiness together with the existence of a path between each pair makes the graph connected; a cycle of length at least three would give two distinct paths between two of its vertices. [F1, F2, L1, given]

2.1 Conversely, in a tree two distinct paths with the same endpoints first diverge at some index and first meet again later, and the two segments between those points form a cycle. [F1, F2, L2, step 1.1] ∎
