---
id: cex-primality-is-not-inherited-by-induced-subgraphs
kind: counterexample
title: "An induced subgraph of a prime graph need not be prime"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-prime-graph, ex-paths-on-at-least-four-vertices-are-prime, def-module-of-a-graph, def-subgraph-induced-subgraph-and-spanning-subgraph, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement refuted

Every induced subgraph of a prime graph is prime.

## Facts & Assumptions

**Given:** The five-vertex path $P_5$ with vertices $0,1,2,3,4$ in order.

[L1] The path $P_n$ is prime for every $n\ge4$ ([[ex-paths-on-at-least-four-vertices-are-prime]], [[def-prime-graph]]).

[L2] A graph with a proper module of size two is not prime ([[def-module-of-a-graph]], [[def-prime-graph]]).

## Counterexample

**Proof technique:** constructive.

1.1 By [L1], the graph $P_5$ is prime. [L1, construct]

1.2 Deleting the middle vertex $2$ leaves the induced subgraph on $\{0,1,3,4\}$, which is the disjoint union of the two edges $01$ and $34$. [given, construct]

2.1 In that four-vertex induced subgraph, the set $\{0,1\}$ is a proper module of size two, since every outside vertex is anticomplete to it. So [L2] shows that the induced subgraph is not prime. [step 1.2, L2]

3.1 Hence a prime graph can have an induced subgraph that is not prime. [step 1.1, step 2.1, discharge-construct] ∎
