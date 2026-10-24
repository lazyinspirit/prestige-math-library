---
id: thm-the-word-metric-is-a-left-invariant-metric-and-is-the-path-metric-of-the-cayley-graph
kind: theorem
title: "The word metric is a left-invariant metric and coincides with the path metric of the Cayley graph"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-graph-path-metric, thm-the-path-metric-of-a-connected-simple-graph-is-a-metric, def-cayley-graph, lem-a-cayley-graph-is-connected-exactly-when-its-defining-subset-generates-the-group, def-word-length-with-respect-to-a-generating-set, lem-word-length-is-well-defined-and-satisfies-the-length-laws, def-word-metric, def-metric-space]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version), 264 pp."
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "C. Drutu and M. Kapovich, Geometric Group Theory (with an appendix by B. Nica), 837 pp."
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
---
## Statement

The word metric is a left-invariant metric and coincides with the path metric of the Cayley graph.

## Facts & Assumptions

**Given:** The hypotheses of the Statement.

[F1] The word metric of $G$ with respect to $S$ is $d_S(g,h)=|g^{-1}h|_S$ ([[def-word-metric]]).

[L1] Word length is defined on every element and satisfies $|gh|_S\le|g|_S+|h|_S$, $|g^{-1}|_S=|g|_S$, and $|g|_S=0$ exactly when $g$ is the identity ([[lem-word-length-is-well-defined-and-satisfies-the-length-laws]]).

[L2] The word length $|g|_S$ is the least $n$ such that $g$ is a product of $n$ elements of $S\cup S^{-1}$ ([[def-word-length-with-respect-to-a-generating-set]]).

[L3] A metric on a set satisfies separation, symmetry and the triangle inequality ([[def-metric-space]]).

[L4] The Cayley graph of a group $G$ with respect to a subset $S$ has vertex set $G$ and edge set $\{\{g,gs\}:g\in G,\ s\in(S\cup S^{-1})\setminus\{e\}\}$ ([[def-cayley-graph]]).

[L5] A Cayley graph is connected if and only if its defining subset generates the group ([[lem-a-cayley-graph-is-connected-exactly-when-its-defining-subset-generates-the-group]]).

[L6] The path metric of a connected simple graph assigns to two vertices the least length of a path joining them ([[def-graph-path-metric]]).

[L7] The path metric of a connected simple graph is a metric on its vertex set ([[thm-the-path-metric-of-a-connected-simple-graph-is-a-metric]]).


## Proof

**Proof technique:** direct.

1.1 The three length laws transported by $d_S(g,h)=|g^{-1}h|_S$ are exactly the three metric axioms. [F1, L1, L2, L3]

2.1 Left invariance is immediate, since $(kg)^{-1}(kh)=g^{-1}h$. [F1, step 1.1]

3.1 A walk of length $n$ from $g$ to $h$ in the Cayley graph is the same datum as an expression for $g^{-1}h$ of length $n$ once identity generators are discarded, so the two minima agree. [L2, L4, L5, L6, L7, step 1.1] ∎
