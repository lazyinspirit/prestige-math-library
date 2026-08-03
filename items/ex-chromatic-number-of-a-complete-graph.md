---
id: ex-chromatic-number-of-a-complete-graph
kind: example
title: "The complete graph $K_n$ has chromatic number $n$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-proper-vertex-colouring-and-chromatic-number,
       def-standard-complete-bipartite-path-and-cycle-graphs]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "Springer, Graph Theory Fundamentals, Section 1.7.1"
      url: "https://link.springer.com/chapter/10.1007/978-981-96-4745-3_1"
pipeline_run: null
---

## Example

For every $n\in\mathbb N$, including $n=0$, the complete graph $K_n$
satisfies

$$\chi(K_n)=n.$$

## Facts & Assumptions

**Given:** The complete graph $K_n$ on the vertex set $n$.

[L1] Every two distinct vertices of $K_n$ are adjacent ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[L2] A proper colouring gives different colours to adjacent vertices, and $\chi$ is the least size of an available colour set ([[def-proper-vertex-colouring-and-chromatic-number]]).

## Verification

**Proof technique:** direct.

1.1 In a proper colouring of $K_n$, [L1] and [L2] force all vertices to receive distinct colours, so at least $n$ colours are required; this is also true at $n=0$, where the assertion is vacuous. [L1, L2]

1.2 The identity function $n\to n$ is a proper $n$-colouring because distinct vertices receive distinct values. [L1, L2]

2.1 The lower bound in step 1.1 and the colouring in step 1.2 give $\chi(K_n)=n$. [step 1.1, step 1.2, L2] ∎
