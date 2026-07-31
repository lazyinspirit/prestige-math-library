---
id: ex-walk-trail-path-and-cycle-in-one-small-graph
kind: example
title: "A small graph separates walks, trails, paths, closed walks and cycles by explicit vertex lists"
status: published
origin: session
deps: [def-graph-walk-trail-path-and-cycle, def-finite-simple-graph]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "University of Lethbridge, Combinatorics: A Guided Tour, Paths and Cycles"
      url: "https://opentext.uleth.ca/Combinatorics/sect_graphs-walks-PathsCycles.html"
pipeline_run: null
---

## Example

Let $G$ have vertex set $\{0,1,2,3\}$ and edge set
$\{01,12,20,23\}$, where $ij$ abbreviates $\{i,j\}$. The following lists
separate the standard notions:

- $(0,1,2,1)$ is a walk but not a trail;
- $(3,2,0,1,2)$ is a trail but not a path;
- $(3,2,1,0)$ is a path;
- $(0,1,0)$ is a closed walk but not a cycle;
- $(0,1,2,0)$ is a cycle.

## Facts & Assumptions

**Given:** The graph $G$ and the vertex lists displayed above.

[F1] Walks require adjacent successive vertices; trails do not repeat edges; paths do not repeat vertices; cycles repeat only their first vertex at the end and have length at least $3$ ([[def-graph-walk-trail-path-and-cycle]]).

[F2] The displayed edge set is a subset of the two-element subsets of the finite vertex set, so $G$ is a finite simple graph ([[def-finite-simple-graph]]).

## Verification

**Proof technique:** direct.

1.1 Every successive pair in every displayed list is one of $01,12,20,23$, so every list is a walk in $G$. [given, F1, F2]

2.1 The list $(0,1,2,1)$ traverses $12$ twice, so it is not a trail. The list $(3,2,0,1,2)$ traverses the distinct edges $23,20,01,12$ but repeats vertex $2$, so it is a trail and not a path. [step 1.1, F1]

2.2 The list $(3,2,1,0)$ has four distinct vertices, so it is a path. The list $(0,1,0)$ is closed but repeats the edge $01$ and has length $2$, so it is not a cycle. [step 1.1, F1]

3.1 The list $(0,1,2,0)$ is closed, has length $3$, and has distinct vertices before returning to $0$, so it is a cycle. [step 1.1, F1] ∎
