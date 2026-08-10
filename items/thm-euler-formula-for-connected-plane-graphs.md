---
id: thm-euler-formula-for-connected-plane-graphs
kind: theorem
title: "Euler's formula $|V|-|E|+|F|=2$ for every connected plane graph"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-plane-graph-face-and-boundary, lem-plane-edge-face-incidence, prop-plane-forest-has-one-face, thm-connected-iff-has-spanning-tree, lem-edge-deletion-in-a-tree, def-graph-deletion-contraction-minor-and-subdivision, thm-induction-principle]
justified_by: []
aliases: []
landmark: true
short: "Euler's formula"
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Theorem 4.2.9"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
    - title: "R. Grassl and O. Levin, Exploring Combinatorial Mathematics, Theorem 3.3.1"
      url: "https://openmathbooks.org/ecm/ecm.html"
pipeline_run: null
---

## Statement

If a connected plane graph has vertex, edge and face sets $V,E,F$ ([[def-plane-graph-face-and-boundary]]), then

$$|V|-|E|+|F|=2.$$

Deletion is as in [[def-graph-deletion-contraction-minor-and-subdivision]], the tree boundary case uses [[prop-plane-forest-has-one-face]] and [[lem-edge-deletion-in-a-tree]], and the finite induction is [[thm-induction-principle]].

## Facts & Assumptions

**Given:** A connected plane graph $G$.

[L1] A finite graph is connected if and only if it has a spanning tree ([[thm-connected-iff-has-spanning-tree]]).

[L2] A cycle edge borders two faces and a bridge borders one face ([[lem-plane-edge-face-incidence]]).



## Proof

**Proof technique:** induction.

1.1 Choose a spanning tree $T$ by [L1]. It has all $|V|$ vertices and $|V|-1$ edges, and its plane drawing has one face by the forest proposition. Hence $|V|-|E(T)|+|F(T)|=|V|-(|V|-1)+1=2$. [base, L1]

1.2 Add the edges of $G-E(T)$ in their fixed embedding. Each added edge joins vertices already connected in $T$, so it closes a cycle. By [L2] it splits one old face into two: the edge count and face count each increase by one, while the vertex count is unchanged. Thus the Euler expression remains invariant. [ih, L2]

2.1 Equivalently, deleting a cycle edge from a connected plane graph merges its two incident faces and decreases both $|E|$ and $|F|$ by one. Deleting a bridge would disconnect the graph and is not used in this connected induction. [step 1.2, L2]

3.1 Starting from $T$ and adding all remaining edges yields $G$, so the invariant value from step 1.1 is $2$ for $G$. [step 1.1, step 1.2, step 2.1, discharge-induction] ∎
