---
id: lem-a-sparse-p-five-free-graph-has-an-anticomplete-two-blockade
kind: lemma
title: "A sparse $P_5$-free graph has an anticomplete two-blockade"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-small-anticonnected-components-yield-a-complete-blockade,
       def-standard-complete-bipartite-path-and-cycle-graphs,
       def-graph-adjacency-incidence-neighbourhood-and-degree]
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
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VII. The five-vertex path, Lemma 4.4"
      url: "https://arxiv.org/html/2312.15333v2"
pipeline_run: null
---

## Statement

There exists $\eta>0$ such that every $\eta$-sparse $P_5$-free graph $G$ with
$|V(G)|\ge \eta^{-1}$ contains an anticomplete blockade of length $2$ and width
at least $\eta|V(G)|$.

## Facts & Assumptions

**Given:** An $\eta$-sparse $P_5$-free graph $G$ with $|V(G)|\ge \eta^{-1}$.

[L1] Lemma 4.4 of the cited source proves exactly the displayed conclusion for
$\eta=2^{-5}$, using repeated large-component consequences of the failure of
the desired anticomplete blockade.

## Proof

**Proof technique:** translate the cited source lemma.

1.1 The cited source lemma assumes the negation of the desired blockade, first obtains a connected component of size at least $|V(G)|/2$, and then obtains two further large connected pieces outside successive neighbourhoods. [L1, given]

2.1 The source shows that the absence of the blockade then forces five selected vertices to induce $P_5$, contradicting the hypothesis. Therefore the stated anticomplete two-blockade exists. [step 1.1, L1] ∎
