---
id: prop-a-minimal-counterexample-to-a-kappa-bound-is-tau-critical
kind: proposition
title: "A minimal counterexample to a kappa-bound is tau-critical"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-tau-critical-graph,
       def-kappa-of-a-graph,
       def-h-free-and-family-free-graph,
       def-subgraph-induced-subgraph-and-spanning-subgraph]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdos-Hajnal for graphs with no 5-hole, before Theorem 3.1"
      url: "https://arxiv.org/html/2102.04994v1"
pipeline_run: null
---

## Statement

Let $\mathcal H$ be a family of finite graphs, let $\tau>0$, and let $G$ be an
$\mathcal H$-free graph with $\kappa(G)<|V(G)|^\tau$. If $G$ has the fewest
vertices among all $\mathcal H$-free graphs with that strict inequality, then
$G$ is $\tau$-critical.

## Facts & Assumptions

**Given:** A family $\mathcal H$ of finite graphs, a real $\tau>0$, and an
$\mathcal H$-free graph $G$ that is minimal by order among those satisfying
$\kappa(G)<|V(G)|^\tau$.

[L1] A graph is $\tau$-critical exactly when it satisfies the strict inequality
$\kappa(G)<|V(G)|^\tau$ and every proper induced subgraph $H$ satisfies
$\kappa(H)\geq |V(H)|^\tau$ ([[def-tau-critical-graph]]).

[L2] Every induced subgraph of an $\mathcal H$-free graph is again
$\mathcal H$-free
([[def-h-free-and-family-free-graph]],
[[def-subgraph-induced-subgraph-and-spanning-subgraph]]).

## Proof

**Proof technique:** direct.

1.1 The first clause of [L1] already holds for $G$ by the hypothesis $\kappa(G)<|V(G)|^\tau$. [L1, given]

1.2 Let $H$ be a proper induced subgraph of $G$. Then [L2] makes $H$ $\mathcal H$-free, and $|V(H)|<|V(G)|$. By the minimality of $G$, the graph $H$ cannot satisfy $\kappa(H)<|V(H)|^\tau$. Hence $\kappa(H)\geq |V(H)|^\tau$. [L2, given]

2.1 Steps 1.1 and 1.2 are exactly the two clauses in [L1], so $G$ is $\tau$-critical. [step 1.1, step 1.2, L1] ∎
