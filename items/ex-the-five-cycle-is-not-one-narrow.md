---
id: ex-the-five-cycle-is-not-one-narrow
kind: example
title: "The five-cycle is 2-narrow but not 1-narrow"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cex-the-five-cycle-is-bull-free-but-not-perfect, def-alpha-narrow-graph, def-good-function-on-a-graph, def-standard-complete-bipartite-path-and-cycle-graphs, thm-bull-free-graphs-are-two-narrow]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky and Shmuel Safra, The Erdős-Hajnal conjecture for bull-free graphs, Sections 1-2"
      url: "https://web.math.princeton.edu/~mchudnov/EHbullfree.pdf"
---

## Example

The cycle graph $C_5$ is two-narrow but not one-narrow.

## Facts & Assumptions

**Given:** The cycle graph $C_5$.

[L1] Every bull-free graph is two-narrow ([[thm-bull-free-graphs-are-two-narrow]]).

[L2] The graph $C_5$ is bull-free but not perfect ([[cex-the-five-cycle-is-bull-free-but-not-perfect]]).

[F1] A graph is one-narrow when every good function has total weight at most $1$ ([[def-alpha-narrow-graph]]).

[F2] A good function is a nonnegative weighting whose total on every perfect induced subgraph is at most $1$ ([[def-good-function-on-a-graph]]).

## Verification

**Proof technique:** direct.

1.1 By [L2], the graph $C_5$ is bull-free. The bull-free theorem [L1] therefore gives the two-narrow half of the example. [L1, L2]

1.2 Define $g(v)=1/4$ for every vertex of $C_5$. Every proper induced subgraph of $C_5$ is a forest on at most four vertices, hence is bipartite and has clique number at most $2$; the same is true for each of its induced subgraphs, so every proper induced subgraph of $C_5$ is perfect. Since [L2] says the whole $C_5$ is not perfect, the perfect induced subgraphs of $C_5$ are exactly the proper ones, and each has at most four vertices. Therefore [F2] makes $g$ a good function, because its total on any perfect induced subgraph is at most $4\cdot(1/4)=1$. But $\sum_{v\in V(C_5)} g(v)=5/4>1$, so [F1] shows that $C_5$ is not one-narrow. [L2, F1, F2, algebra]

2.1 Thus $C_5$ is two-narrow by step 1.1 but not one-narrow by step 1.2. [step 1.1, step 1.2] ∎
