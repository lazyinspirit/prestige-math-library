---
id: cex-a-comb-can-have-an-edge-between-two-blocks
kind: counterexample
title: "A comb can have an edge between two blocks"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-comb-in-a-graph,
       ex-a-cross-edge-in-a-rooted-stable-tooth-comb-creates-an-induced-five-cycle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdős-Hajnal for graphs with no 5-hole, proof of Theorem 4.4"
      url: "https://arxiv.org/html/2102.04994v1"
pipeline_run: null
---

## Statement refuted

Every comb has pairwise anticomplete blocks.

## Facts & Assumptions

**Given:** The five-vertex graph from
[[ex-a-cross-edge-in-a-rooted-stable-tooth-comb-creates-an-induced-five-cycle]],
with teeth $a_1,a_2$ and singleton blocks $\{b_1\},\{b_2\}$.

[L1] The definition of a comb only requires each tooth to be adjacent to its
own block and anticomplete to the other blocks; it does not impose any
condition on edges between different blocks ([[def-comb-in-a-graph]]).

## Counterexample

**Proof technique:** direct.

1.1 In the given graph, $a_1$ is adjacent to $b_1$ and not to $b_2$, while $a_2$ is adjacent to $b_2$ and not to $b_1$. The teeth are distinct and the singleton blocks are disjoint. Therefore [L1] shows that $((a_1,\{b_1\}),(a_2,\{b_2\}))$ is a comb. [L1, given]

2.1 The two blocks are not anticomplete, because the graph was built with the edge $b_1b_2$. So this comb refutes the statement that every comb has pairwise anticomplete blocks. [step 1.1, given] ∎
