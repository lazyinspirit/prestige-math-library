---
id: ex-a-four-vertex-graph-with-the-erdos-hajnal-property-by-substitution
kind: example
title: "Substituting an edge for an endpoint of $P_3$ gives a four-vertex graph with the Erdős–Hajnal property"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-substitution-preserves-the-erdos-hajnal-property, cor-every-graph-on-at-most-three-vertices-has-the-erdos-hajnal-property, def-substitution-of-a-graph-for-a-vertex, def-standard-complete-bipartite-path-and-cycle-graphs, def-erdos-hajnal-property-and-constant]
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

Let $H$ be obtained from the path $P_3$ by substituting the edge $K_2$ for one
endpoint. Then $H$ is the paw graph, and $H$ has the Erdős–Hajnal property.

## Facts & Assumptions

**Given:** The path $P_3$ with vertices $0,1,2$, the edge $K_2$, and the graph $H$ formed by substituting $K_2$ for the endpoint $0$ of $P_3$.

[L1] Every graph on at most three vertices has the Erdős–Hajnal property ([[cor-every-graph-on-at-most-three-vertices-has-the-erdos-hajnal-property]], [[def-erdos-hajnal-property-and-constant]]).

[L2] Substituting one graph for a vertex of another preserves the Erdős–Hajnal property when both factors have it ([[thm-substitution-preserves-the-erdos-hajnal-property]], [[def-substitution-of-a-graph-for-a-vertex]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], both $P_3$ and $K_2$ have the Erdős–Hajnal property. [L1]

1.2 The substitution identifies one endpoint of $P_3$ with an edge, so the result is a triangle with one pendant edge, that is, the paw graph. [given]

2.1 Applying [L2] to the two factors from step 1.1 gives the Erdős–Hajnal property for the paw. [step 1.1, step 1.2, L2] ∎
