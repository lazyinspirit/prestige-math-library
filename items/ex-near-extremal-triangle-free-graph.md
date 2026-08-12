---
id: ex-near-extremal-triangle-free-graph
kind: example
title: "Deleting one edge from $K_{3,4}$ gives a triangle-free graph one edge below the Mantel threshold"
status: draft
origin: session
authorship: ai-generated
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-standard-complete-bipartite-path-and-cycle-graphs, thm-mantel-exact-and-unique]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Delete any one edge from $K_{3,4}$. The resulting seven-vertex graph is triangle-free and has $11$ edges, exactly one fewer than $\operatorname{ex}(7,K_3)$.

## Facts & Assumptions

**Given:** The complete bipartite graph $K_{3,4}$ from [[def-standard-complete-bipartite-path-and-cycle-graphs]] and Mantel's threshold from [[thm-mantel-exact-and-unique]].

## Verification

**Proof technique:** deletion preserves the forbidden-subgraph condition.

1.1 Every edge of $K_{3,4}$ crosses its two parts, so it has no triangle, and its edge count is $3\cdot4=12$. Deleting an edge cannot create a triangle and changes the edge count to $11$. [given]

2.1 Mantel's theorem gives threshold $12$ and identifies the unique equality graph as $K_{3,4}$ up to isomorphism. The edge-deleted graph therefore lies exactly one edge below the equality case. [step 1.1, given] ∎
