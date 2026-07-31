---
id: ex-complete-and-complete-bipartite-graphs-k5-and-k33
kind: example
title: "$K_5$ and $K_{3,3}$ illustrate complete and complete bipartite graphs, degrees and edge counts"
status: published
origin: session
deps: [def-standard-complete-bipartite-path-and-cycle-graphs, thm-handshake-lemma-for-finite-simple-graphs, cor-complete-graph-edge-count]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, Chapter 1 preview"
      url: "https://diestel-graph-theory.com/basic.html"
pipeline_run: null
---

## Example

The complete graph $K_5$ has degree $4$ at every vertex and has $10$ edges. The
complete bipartite graph $K_{3,3}$ has degree $3$ at every vertex and has $9$
edges.

## Facts & Assumptions

**Given:** The standard graphs $K_5$ and $K_{3,3}$.

[F1] $K_5$ contains every pair of its five vertices as an edge, while $K_{3,3}$ has two three-element parts and every edge between the parts ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[L1] $K_5$ has $\binom52$ edges ([[cor-complete-graph-edge-count]]).

[L2] The sum of degrees is twice the number of edges ([[thm-handshake-lemma-for-finite-simple-graphs]]).

## Verification

**Proof technique:** direct.

1.1 Each vertex of $K_5$ is adjacent to the other four vertices, so its degree is $4$; [L1] gives $|E(K_5)|=\binom52=10$. [F1, L1, algebra]

1.2 Each vertex of $K_{3,3}$ is adjacent to all three vertices in the opposite part and none in its own part, so all six vertices have degree $3$. [F1]

2.1 By [L2], $2|E(K_{3,3})|=6\cdot3=18$, hence $|E(K_{3,3})|=9$. [step 1.2, L2, algebra] ∎
