---
id: ex-paths-on-at-least-four-vertices-are-prime
kind: example
title: "$P_n$ is prime for every $n\\ge4$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-prime-graph, def-module-of-a-graph, lem-a-proper-module-of-a-connected-graph-has-a-complete-neighbour, def-standard-complete-bipartite-path-and-cycle-graphs, def-graph-adjacency-incidence-neighbourhood-and-degree]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Habib and C. Paul, A Survey on Algorithmic Aspects of Modular Decomposition, sec. 2.4"
      url: "https://arxiv.org/pdf/0912.1457"
pipeline_run: null
---

## Example

For every integer $n\ge4$, the path $P_n$ is prime.

## Facts & Assumptions

**Given:** An integer $n\ge4$ and the path $P_n$ with vertices $0,1,\dots,n-1$ in order.

[L1] A graph is prime when it has no nontrivial module ([[def-prime-graph]], [[def-module-of-a-graph]]).

[L2] In a connected graph, every nonempty proper module has some outside vertex complete to it ([[lem-a-proper-module-of-a-connected-graph-has-a-complete-neighbour]]).

[L3] In the path $P_n$, every interior vertex has exactly two neighbours, namely the preceding and following vertices in the path order ([[def-standard-complete-bipartite-path-and-cycle-graphs]], [[def-graph-adjacency-incidence-neighbourhood-and-degree]]).

## Verification

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $P_n$ has a nontrivial module $M$. Then $M$ is a nonempty proper module, so [L2] gives a vertex $v\notin M$ complete to $M$. [assume-contra, L2]

2.1 Since $v$ is complete to $M$ in a path, [L3] forces $v$ to be an interior vertex and $M$ to be exactly the two neighbours of $v$. [step 1.1, L3]

3.1 One of the vertices at distance two from $v$ exists because $n\ge4$, and it is adjacent to exactly one of the two neighbours of $v$. That vertex therefore splits $M$, contradicting that $M$ is a module. [step 2.1, given]

4.1 No nontrivial module exists, so [L1] makes $P_n$ prime. [step 3.1, L1, discharge-contradiction] ∎
