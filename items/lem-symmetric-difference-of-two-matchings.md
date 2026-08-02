---
id: lem-symmetric-difference-of-two-matchings
kind: lemma
title: "The symmetric difference of two matchings is a disjoint union of alternating paths and even cycles"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-matching-maximum-perfect-and-matching-number, def-graph-walk-trail-path-and-cycle, def-connected-graph-and-connected-component, def-subgraph-induced-subgraph-and-spanning-subgraph]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "M. Goemans, Lecture notes on bipartite matching"
      url: "https://math.mit.edu/~goemans/18433S07/matching-notes.pdf"
pipeline_run: null
---

## Statement

For matchings $M,N$ of a finite graph $G$, every nontrivial connected component
of the spanning subgraph with edge set $M\triangle N$ is an alternating path or
an even alternating cycle. The components are edge-disjoint.

## Facts & Assumptions

**Given:** Matchings $M,N$ in a finite graph $G$.

[F1] A matching is a set of edges no two of which share an endpoint ([[def-matching-maximum-perfect-and-matching-number]]).

## Proof

**Proof technique:** direct.

1.1 Each vertex is incident with at most one edge of $M$ and at most one edge of $N$, hence has degree at most two in the spanning subgraph on $M\triangle N$. [F1]

1.2 A nontrivial connected finite graph whose degrees are at most two is a path or a cycle; here its consecutive edges alternate between $M\setminus N$ and $N\setminus M$. [F1]

2.1 A cyclic component has even length, because alternation returns to the initial edge-type only after an even number of edges. [step 1.2]

3.1 The nontrivial components partition the edge set $M\triangle N$, while degree-zero vertices contribute no edge, which proves the stated disjoint union. [step 1.2, step 2.1] ∎
