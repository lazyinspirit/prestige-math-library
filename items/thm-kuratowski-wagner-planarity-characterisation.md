---
id: thm-kuratowski-wagner-planarity-characterisation
kind: theorem
title: "Kuratowski–Wagner theorem: a finite graph is planar exactly when it has neither a $K_5$ nor a $K_{3,3}$ minor, equivalently neither subdivision"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-planar-graphs-have-no-kuratowski-subdivision, lem-kuratowski-minors-are-topological-minors, lem-three-connected-kuratowski-free-is-planar, lem-edge-maximal-kuratowski-free-is-three-connected, def-graph-deletion-contraction-minor-and-subdivision]
justified_by: []
aliases: []
landmark: true
short: "Kuratowski-Wagner theorem"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Theorem 4.4.6"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
pipeline_run: null
---

## Statement

For every finite graph $G$, the following are equivalent:

1. $G$ is planar;
2. $G$ has neither a $K_5$ nor a $K_{3,3}$ minor;
3. $G$ contains no subdivision of $K_5$ or $K_{3,3}$.

Minor and subdivision have the meanings of [[def-graph-deletion-contraction-minor-and-subdivision]].

## Facts & Assumptions

**Given:** A finite graph $G$.

[L1] A planar graph contains no subdivision of $K_5$ or $K_{3,3}$ ([[cor-planar-graphs-have-no-kuratowski-subdivision]]).

[L2] Every edge-maximal graph of order at least four with no such subdivision is three-connected ([[lem-edge-maximal-kuratowski-free-is-three-connected]]).

[L3] Every three-connected graph with no $K_5$ or $K_{3,3}$ minor is planar ([[lem-three-connected-kuratowski-free-is-planar]]).

[L4] A graph has a $K_5$ or $K_{3,3}$ minor exactly when it contains a subdivision of one of them ([[lem-kuratowski-minors-are-topological-minors]]).

## Proof

**Proof technique:** direct.

1.1 If $G$ is planar, [L1] excludes both subdivisions. By [L4] it also excludes both minors. [L1, L4]

2.1 Conversely, suppose $G$ contains neither subdivision. On its fixed finite vertex set, add edges until reaching an edge-maximal graph $H$ with the same exclusion. If $|V(G)|<4$, then $G$ is plainly planar; otherwise [L2] makes $H$ three-connected. [step 1.1, L2]

3.1 By [L4], $H$ has neither forbidden minor. Apply [L3] to obtain a plane drawing of $H$; deleting the added edges leaves a plane drawing of $G$. [step 2.1, L3, L4]

4.1 Step 1.1 proves planarity implies both exclusions, step 3.1 proves subdivision exclusion implies planarity, and [L4] identifies the two exclusion conditions. Thus all three assertions are equivalent. [step 1.1, step 3.1, L4] ∎
