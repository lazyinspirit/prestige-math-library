---
id: def-dependency-digraph-for-finite-events
kind: definition
title: "Dependency digraphs for a finite family of bad events"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-pairwise-and-mutual-independence-of-events, def-multigraph-loop-and-digraph]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. Matousek and J. Vondrak, The Probabilistic Method, Section 5.1"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
pipeline_run: null
---

## Definition

Let $(A_i)_{i\in I}$ be a finite family of events. A loopless digraph $D$ on $I$ is a **dependency digraph** for the family when, for every $i\in I$ and every set $S\subseteq I\setminus(\{i\}\cup N_D^+(i))$,
$$\mathbb P\!\left(A_i\cap\bigcap_{j\in S}A_j^c\right)=\mathbb P(A_i)\mathbb P\!\left(\bigcap_{j\in S}A_j^c\right).$$
Thus $A_i$ is independent of every conjunction of complements indexed by its non-out-neighbours. An undirected dependency graph is the special case in which every edge is replaced by both directed arcs.
