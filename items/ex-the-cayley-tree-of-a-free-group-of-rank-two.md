---
id: ex-the-cayley-tree-of-a-free-group-of-rank-two
kind: example
title: "The Cayley graph of the free group on two generators is the tree in which every vertex has four neighbours"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cayley-graph, prop-a-cayley-graph-is-regular-and-is-locally-finite-exactly-when-its-defining-subset-is-finite, thm-the-cayley-graph-of-a-free-group-with-respect-to-a-free-basis-is-a-tree, def-cycles-trees-and-forests-in-a-simple-graph, def-free-group, def-free-basis]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version), 264 pp."
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "C. Drutu and M. Kapovich, Geometric Group Theory (with an appendix by B. Nica), 837 pp."
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
---
## Example

The Cayley graph of the free group on two generators is the tree in which every vertex has four neighbours.

## Facts & Assumptions

**Given:** The objects and hypotheses in the Example.

[F1] The Cayley graph of a group $G$ with respect to a subset $S$ has vertex set $G$ and edge set $\{\{g,gs\}:g\in G,\ s\in(S\cup S^{-1})\setminus\{e\}\}$ ([[def-cayley-graph]]).

[L1] The Cayley graph of a free group with respect to a free basis is a tree ([[thm-the-cayley-graph-of-a-free-group-with-respect-to-a-free-basis-is-a-tree]]).

[L2] Every vertex of a Cayley graph has the same degree, and the graph is locally finite exactly when the symmetrised generating set is finite ([[prop-a-cayley-graph-is-regular-and-is-locally-finite-exactly-when-its-defining-subset-is-finite]]).

[L3] A cycle is a closed walk of length at least three with distinct vertices apart from its endpoints; a forest is a simple graph with no cycle and a tree is a connected forest ([[def-cycles-trees-and-forests-in-a-simple-graph]]).

[L4] A **free group on a set $X$** is a group $F(X)$ together with a map $i:X\to F(X)$ such that, for every group $G$ and every function $u:X\to G$, there is a unique group homomorphism $\widehat u:F(X)\to G$ satisfying ([[def-free-group]]).

[L5] The subset $B$ is a **free basis** of $F$ if $(F,i)$ is a free group on the set $B$ in the sense of. ([[def-free-basis]]).


## Verification

**Proof technique:** direct.

1.1 A two-element free basis generates and the general theorem makes the Cayley graph a tree. [F1, L1, L3, L4, L5]

2.1 The symmetrised set has four elements and none is the identity, so every vertex has degree four. [F1, L2, step 1.1] ∎
