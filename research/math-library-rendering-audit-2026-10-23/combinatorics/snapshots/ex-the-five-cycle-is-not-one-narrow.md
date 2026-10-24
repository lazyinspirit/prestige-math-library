---
id: ex-the-five-cycle-is-not-one-narrow
kind: example
title: "The five-cycle is 2-narrow but not 1-narrow"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cex-the-five-cycle-is-bull-free-but-not-perfect, def-alpha-narrow-graph, def-good-function-on-a-graph, def-perfect-graph-for-the-bull-route, def-standard-complete-bipartite-path-and-cycle-graphs, lem-perfect-vertex-deletions-imply-two-narrowness]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky and Shmuel Safra, The Erdős-Hajnal conjecture for bull-free graphs, Sections 1-2"
      url: "https://web.math.princeton.edu/~mchudnov/EHbullfree.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: 'Bounded delegated repair review: research/ap-prerequisite-followup/agent-02-receipts.jsonl;
      root proof reading: research/ap-prerequisite-followup/root-local-proof-review.md.
      Not an independent judge verdict or owner-human audit.'
    delegated_by: user
---

## Example

The cycle graph $C_5$ is two-narrow but not one-narrow.

## Facts & Assumptions

**Given:** The cycle graph $C_5$.

[L1] If every vertex deletion of a graph with at least three vertices is
perfect, then the graph is two-narrow
([[lem-perfect-vertex-deletions-imply-two-narrowness]]).

[L2] The graph $C_5$ is not perfect
([[cex-the-five-cycle-is-bull-free-but-not-perfect]]).

[F1] A graph is one-narrow when every good function has total weight at most $1$ ([[def-alpha-narrow-graph]]).

[F2] A good function is a nonnegative weighting whose total on every perfect induced subgraph is at most $1$ ([[def-good-function-on-a-graph]]).

[F3] The graph $C_5$ is the five-vertex cycle
([[def-standard-complete-bipartite-path-and-cycle-graphs]]). A graph is
perfect when each of its induced subgraphs has chromatic number equal to clique
number ([[def-perfect-graph-for-the-bull-route]]).

## Verification

**Proof technique:** direct.

1.1 Deleting any vertex of $C_5$ leaves a four-vertex path. Every induced subgraph of that path is a disjoint union of paths. If it has an edge, alternating colours on each path give chromatic number at most $2$, and the edge gives clique number at least $2$, so both numbers are $2$; if it is nonempty and has no edge, both are $1$; and if it is empty, both are $0$. Thus every vertex deletion is perfect by [F3]. Since $C_5$ has five vertices, [L1] proves that $C_5$ is two-narrow. [F3, L1]

2.1 Define $g(v)=1/4$ for every vertex of $C_5$. Every proper induced subgraph lies in some vertex deletion, so it is perfect by step 1.1. Since [L2] says the whole $C_5$ is not perfect, every perfect induced subgraph is proper and has at most four vertices. Thus [F2] makes $g$ a good function: its total on each perfect induced subgraph is at most $4\cdot(1/4)=1$. But $\sum_{v\in V(C_5)}g(v)=5/4>1$, so [F1] shows that $C_5$ is not one-narrow. [step 1.1, L2, F1, F2, algebra]

3.1 Thus $C_5$ is two-narrow by step 1.1 but not one-narrow by step 2.1. [step 1.1, step 2.1] ∎
