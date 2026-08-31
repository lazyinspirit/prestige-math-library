---
id: ex-a-sparse-p-five-free-graph-with-an-anticomplete-two-blockade
kind: example
title: "A sparse $P_5$-free graph with an anticomplete two-blockade"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-standard-complete-bipartite-path-and-cycle-graphs,
       def-blockade-length-and-width]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VII. The five-vertex path, Lemma 4.4 pattern"
      url: "https://arxiv.org/html/2312.15333v2"
pipeline_run: null
---

## Example

Let $G$ be the disjoint union of two copies of $P_3$. Then $G$ is $P_5$-free
and the two components form an anticomplete two-blockade.

## Facts & Assumptions

**Given:** The graph $G=P_3\sqcup P_3$ with components $A$ and $B$.

## Verification

**Proof technique:** direct finite check.

1.1 The sets $A$ and $B$ are disjoint induced copies of $P_3$, so they are anticomplete and each has size $3$. Hence $(A,B)$ is an anticomplete $(2,3)$-blockade. [given]

2.1 Every induced path in $G$ lies inside a single component, so it has at most three vertices. Thus $G$ is $P_5$-free. [step 1.1] ∎
