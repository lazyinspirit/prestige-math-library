---
id: lem-a-vertex-bijection-is-an-isometry-of-path-metrics-exactly-when-it-is-a-graph-isomorphism
kind: lemma
title: "A bijection of vertex sets is an isometry for the path metrics if and only if it is a graph isomorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-simple-graph-without-a-finiteness-hypothesis, def-walks-paths-and-connectedness-in-a-simple-graph, def-graph-path-metric, thm-the-path-metric-of-a-connected-simple-graph-is-a-metric, def-isometry-and-metric-embedding, def-graph-isomorphism-and-complement]
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
## Statement

Let $G$ and $H$ be connected simple graphs and let
$\varphi:V(G)\to V(H)$ be a bijection. Then $\varphi$ is an isometry for the
path metrics if and only if it is a graph isomorphism.

## Facts & Assumptions

**Given:** Connected simple graphs $G,H$ and a bijection $\varphi:V(G)\to V(H)$.

[F1] A simple graph is a pair $(V,E)$ with $V$ any set and $E$ a set of two-element subsets of $V$ ([[def-simple-graph-without-a-finiteness-hypothesis]]).

[F2] A walk of length $\ell$ in a simple graph is a finite vertex list $(v_0,\dots,v_\ell)$ with consecutive vertices adjacent; a path is a walk with distinct vertices; the graph is connected when it is nonempty and every two vertices are joined by a path ([[def-walks-paths-and-connectedness-in-a-simple-graph]]).

[L1] The path metric of a connected simple graph assigns to two vertices the least length of a path joining them ([[def-graph-path-metric]]).

[L2] The path metric of a connected simple graph is a metric on its vertex set ([[thm-the-path-metric-of-a-connected-simple-graph-is-a-metric]]).

[L3] A function $f:X\to Y$ is an isometric embedding when it preserves every distance, and it is an isometry when it is also bijective ([[def-isometry-and-metric-embedding]]).

[L4] A graph isomorphism is a vertex bijection $\varphi:V\to W$ such that $\{u,v\}$ is an edge exactly when $\{\varphi(u),\varphi(v)\}$ is an edge, for all distinct $u,v$ ([[def-graph-isomorphism-and-complement]]).


## Proof

**Proof technique:** direct.

1.1 A graph isomorphism carries paths to paths of the same length in both directions, so it preserves the minima defining the metric. [F1, F2, L1, L2, L3, L4]

2.1 Conversely an isometry preserves distance one, and distance one is exactly adjacency, so it preserves the edge relation in both directions. [F1, L1, L3, L4, step 1.1] ∎
