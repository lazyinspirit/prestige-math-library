---
id: ex-k-four-is-bull-free-with-a-nontrivial-module
kind: example
title: "$K_4$ is bull-free and has a nontrivial module"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-bull-free-graph, def-module-of-a-graph, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky and Shmuel Safra, The Erdős-Hajnal conjecture for bull-free graphs, Section 1"
      url: "https://web.math.princeton.edu/~mchudnov/EHbullfree.pdf"
---

## Example

The complete graph $K_4$ is bull-free, and every two-vertex subset of $V(K_4)$
is a nontrivial module.

## Facts & Assumptions

**Given:** The complete graph $K_4$.

[F1] A bull-free graph has no induced bull ([[def-bull-free-graph]]).

[F2] A module is a set to which every outside vertex is complete or anticomplete ([[def-module-of-a-graph]]).

[F3] In a complete graph every distinct vertex pair is adjacent ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

## Verification

**Proof technique:** direct.

1.1 Every induced subgraph of $K_4$ is complete, while the bull has nonadjacent vertex pairs. So $K_4$ has no induced bull and is bull-free by [F1]. [F1, F3]

2.1 Let $M=\{v_1,v_2\}\subseteq V(K_4)$. Every vertex outside $M$ is adjacent to both $v_1$ and $v_2$ by [F3], so it is complete to $M$. Thus [F2] makes $M$ a module. Since $|M|=2$ and $M\ne V(K_4)$, it is nontrivial. [F2, F3] ∎
