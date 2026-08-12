---
id: ex-five-cycle-k-two-two-free
kind: example
title: "The five-cycle is $K_{2,2}$-avoiding and shows the KST problem is not just a complete-bipartite construction"
status: draft
origin: session
authorship: ai-generated
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-standard-complete-bipartite-path-and-cycle-graphs, thm-kovari-sos-turan-bound]
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

The cycle $C_5$ contains no ordinary $K_{2,2}$, although $C_5$ itself is not bipartite.

## Facts & Assumptions

**Given:** The cycle and complete-bipartite definitions in [[def-standard-complete-bipartite-path-and-cycle-graphs]] and the ordinary forbidden-subgraph convention used in [[thm-kovari-sos-turan-bound]].

## Verification

**Proof technique:** inspect common neighbours.

1.1 Label the cycle vertices modulo $5$. Two adjacent vertices have no common neighbour, and two nonadjacent vertices have exactly one common neighbour. Thus no pair has the two common neighbours required to form a $K_{2,2}$. [given]

2.1 Therefore $C_5$ is $K_{2,2}$-free. Its odd cycle is also a reminder that the host graphs in the ordinary KST problem need not themselves be bipartite. [step 1.1, given] ∎
