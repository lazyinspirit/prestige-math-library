---
id: ex-the-singleton-family-p-three-is-viral
kind: example
title: "The singleton family $\\{P_3\\}$ is viral"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [cor-single-graph-erdos-hajnal-polynomial-rodl-and-viral-equivalence, cor-every-graph-on-at-most-three-vertices-has-the-erdos-hajnal-property, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

The singleton family $\{P_3\}$ is viral.

## Facts & Assumptions

**Given:** The three-vertex path $P_3$.

[L1] Every graph on at most three vertices has the Erdős–Hajnal property ([[cor-every-graph-on-at-most-three-vertices-has-the-erdos-hajnal-property]]).

[L2] For a single graph, the Erdős–Hajnal property, the polynomial Rödl property, and virality are equivalent ([[cor-single-graph-erdos-hajnal-polynomial-rodl-and-viral-equivalence]]).

[L3] $P_3$ is the standard three-vertex path ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

## Verification

**Proof technique:** direct.

1.1 By [L3], the graph $P_3$ has three vertices, so [L1] gives the Erdős–Hajnal property for $P_3$. [L1, L3]

2.1 Applying [L2] to the graph $P_3$ of step 1.1 shows that the singleton family $\{P_3\}$ is viral. [step 1.1, L2] ∎
