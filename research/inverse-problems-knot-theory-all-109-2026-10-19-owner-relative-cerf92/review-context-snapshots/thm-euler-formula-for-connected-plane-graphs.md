---
id: thm-euler-formula-for-connected-plane-graphs
kind: theorem
title: "Euler's formula $|V|-|E|+|F|=2$ for every connected plane graph"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-plane-graph-face-and-boundary, lem-plane-edge-face-incidence, prop-plane-forest-has-one-face, thm-forest-edge-component-count, thm-connected-iff-has-spanning-tree, def-graph-deletion-contraction-minor-and-subdivision, thm-induction-principle]
justified_by: []
aliases: []
landmark: true
short: "Euler's formula"
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-09-29
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

Deletion is as in [[def-graph-deletion-contraction-minor-and-subdivision]], the tree boundary case uses [[prop-plane-forest-has-one-face]], and the finite induction is [[thm-induction-principle]].

## Facts & Assumptions

**Given:** A connected plane graph $G$.

[L1] A finite graph is connected if and only if it has a spanning tree ([[thm-connected-iff-has-spanning-tree]]).

[L2] A cycle edge borders two faces and a bridge borders one face ([[lem-plane-edge-face-incidence]]).

[L3] A polygonally embedded finite forest has one face; for a connected tree $|V|-|E|=1$ ([[prop-plane-forest-has-one-face]], [[thm-forest-edge-component-count]]).


## Proof

**Proof technique:** induction.

1.1 Choose a spanning tree $T$ by [L1]. It has all $|V|$ vertices, $|V|-1$ edges, and exactly one face by [L3]. Thus $|V|-|E(T)|+|F(T)|=|V|-(|V|-1)+1=2$. [base, L1, L3]

1.2 We prove the exact face correspondence for deleting a cycle edge $e$ from a connected plane graph $H$. Let $X$ be its drawing, let $e^\circ$ be the edge arc without its endpoints, and put $\Omega=\mathbb R^2\setminus(X\setminus e^\circ)$, the complement after deleting $e$. By [L2], precisely two distinct old faces $F_1,F_2$ meet the two local sides of $e^\circ$. Put $R=F_1\cup e^\circ\cup F_2$. This is connected: each $F_i$ is connected and has every point of the connected arc $e^\circ$ in its closure. It is open in $\Omega$: for any point of $e^\circ$, a sufficiently small disk avoids $X\setminus e^\circ$, and its two sides of the local straight piece, or of the two adjacent pieces at a bend, lie in $F_1,F_2$ respectively. Openness at points of the faces is immediate. Every other old face $F'$ is connected and open in $\Omega$; its frontier misses $e^\circ$ by [L2] and is contained in $X\setminus e^\circ$, so $F'$ is also closed in $\Omega$. Now $\Omega$ is the disjoint union of $R$ and all these other old faces. The complement of $R$ is open, so $R$ is closed in $\Omega$ as well. These connected open-and-closed pieces are exactly the new faces: $F_1,F_2$ merge into $R$, while every other old face remains distinct. Consequently deleting $e$ decreases both the edge count and the face count by one, leaving the vertex count fixed. [L2]

2.1 Starting from $G$, delete the finitely many edges of $E(G)\setminus E(T)$ one by one. At every stage $T$ remains, so the current graph is connected. Each edge $e$ to be deleted joins vertices already linked by a path in $T$ and hence lies on a cycle of the current graph; step 1.2 applies. Each deletion lowers $|E|$ and $|F|$ by one without changing $|V|$, so the Euler expression stays constant throughout the finite induction. [ih, step 1.2, L1]

3.1 The final drawing is $T$, whose Euler expression equals $2$ by step 1.1. The invariant from step 2.1 therefore gives $|V(G)|-|E(G)|+|F(G)|=2$ for the original connected plane graph. [step 1.1, step 2.1, discharge-induction] ∎
