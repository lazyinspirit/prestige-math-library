---
id: ex-a-forbidden-pattern-and-its-complement-share-eh-status
kind: example
title: "Forbidding $P_3$ and forbidding $\\overline{P_3}$ have the same Erdős–Hajnal constants"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-erdos-hajnal-property-is-complement-invariant, def-standard-complete-bipartite-path-and-cycle-graphs, cor-h-free-complement-dictionary, lem-forbidden-induced-subgraph-classes-are-hereditary]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Erdos-Hajnal properties in graphs and hypergraphs, introduction"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Example

The $P_3$-free class and the $\overline{P_3}$-free class have exactly the same Erdős–Hajnal constants. Here $\overline{P_3}$ is an edge together with an isolated vertex.

## Facts & Assumptions

**Given:** The three-vertex path $P_3$.

[L1] A hereditary class and its complement class have exactly the same Erdős–Hajnal constants ([[prop-erdos-hajnal-property-is-complement-invariant]]).

[L2] The graph $P_3$ has two consecutive edges on three vertices ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[L3] A graph $G$ is $H$-free exactly when $\overline G$ is $\overline H$-free ([[cor-h-free-complement-dictionary]]).

[L4] Every fixed-pattern-free graph class is hereditary ([[lem-forbidden-induced-subgraph-classes-are-hereditary]]).

## Verification

**Proof technique:** direct.

1.1 Complementing the two edges of $P_3$ leaves the edge joining its endpoints and makes its middle vertex isolated. [L2]

1.2 By [L3], complementation maps the $P_3$-free class bijectively to the $\overline{P_3}$-free class; both are hereditary by [L4]. [L3, L4]

2.1 The equality of their constant sets now follows from [L1]. [step 1.1, step 1.2, L1] ∎
