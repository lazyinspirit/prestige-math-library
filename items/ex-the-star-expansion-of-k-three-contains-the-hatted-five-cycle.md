---
id: ex-the-star-expansion-of-k-three-contains-the-hatted-five-cycle
kind: example
title: "The star-expansion of $K_3$ contains the hatted five-cycle"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-star-expansion-of-a-graph,
       lem-the-star-expansion-of-k-three-contains-the-hatted-five-cycle,
       def-standard-complete-bipartite-path-and-cycle-graphs]
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
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdős-Hajnal for graphs with no 5-hole, proof of Theorem 8.1"
      url: "https://arxiv.org/html/2102.04994v1"
pipeline_run: null
---

## Example

The star-expansion of $K_3$ contains an induced hatted five-cycle.

## Facts & Assumptions

**Given:** The star-expansion of $K_3$.

[L1] The A-page lemma proves this containment directly
([[lem-the-star-expansion-of-k-three-contains-the-hatted-five-cycle]]).

## Verification

**Proof technique:** direct.

1.1 Apply [L1] to the star-expansion of $K_3$. [L1]

2.1 The chosen six-vertex induced subgraph is exactly a hatted five-cycle. [step 1.1] ∎
