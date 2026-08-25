---
id: ex-modules-of-complete-and-edgeless-graphs
kind: example
title: "Every vertex set is a module of a complete graph and of an edgeless graph"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-module-of-a-graph, def-standard-complete-bipartite-path-and-cycle-graphs, def-prime-graph]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Habib and C. Paul, A Survey on Algorithmic Aspects of Modular Decomposition, sec. 2.3"
      url: "https://arxiv.org/pdf/0912.1457"
pipeline_run: null
---

## Example

If $G$ is a complete graph or an edgeless graph, then every vertex subset of
$G$ is a module ([[def-module-of-a-graph]]).

## Facts & Assumptions

**Given:** An integer $n\ge1$, the complete graph $K_n$, the edgeless graph $\overline{K_n}$, and a subset $M$ of their common vertex set.

[L1] A vertex set $M$ is a module when every vertex outside it is complete or anticomplete to $M$ ([[def-module-of-a-graph]]).

[L2] The graphs $K_n$ and $\overline{K_n}$ are, respectively, the complete and edgeless graphs on $n$ vertices ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[L3] A graph is prime when its only modules are the trivial ones ([[def-prime-graph]]).

## Verification

**Proof technique:** direct.

1.1 In $K_n$, every vertex outside $M$ is adjacent to every member of $M$, so [L1] makes $M$ a module. [L1, L2]

1.2 In $\overline{K_n}$, every vertex outside $M$ is adjacent to no member of $M$, so [L1] again makes $M$ a module. [L1, L2]

2.1 If $n\ge3$, then $K_n$ and $\overline{K_n}$ have nontrivial modules by steps 1.1 and 1.2, so [L3] shows that neither is prime. For $n=1$ and $n=2$ there is no subset of size between $2$ and $n-1$, so every module is trivial and both graphs are prime. [step 1.1, step 1.2, L3] ∎
