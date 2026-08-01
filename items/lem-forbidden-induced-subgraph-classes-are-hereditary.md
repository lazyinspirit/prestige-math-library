---
id: lem-forbidden-induced-subgraph-classes-are-hereditary
kind: lemma
title: "Every class defined by forbidden induced subgraphs is hereditary"
status: published
origin: session
deps: [def-hereditary-graph-class, def-h-free-and-family-free-graph, lem-induced-freeness-passes-to-induced-subgraphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "ISGCI, Information System on Graph Classes and their Inclusions"
      url: "https://www.cs.sfu.ca/~pavol/graphclasses/"
pipeline_run: null
---

## Statement

For every family $\mathcal F$ of finite graphs, the class of all $\mathcal F$-free finite graphs is hereditary.

## Facts & Assumptions

**Given:** A family $\mathcal F$ of finite graphs.

[L1] Induced subgraphs of an $\mathcal F$-free graph remain $\mathcal F$-free ([[lem-induced-freeness-passes-to-induced-subgraphs]]).

[F1] $\mathcal F$-freeness is invariant under graph isomorphism ([[def-h-free-and-family-free-graph]]).

[F2] Heredity means closure under isomorphism and induced subgraphs ([[def-hereditary-graph-class]]).

## Proof

**Proof technique:** direct.

1.1 The class of $\mathcal F$-free graphs is closed under isomorphism because an isomorphism transports every induced copy in both directions. [F1]

1.2 It is closed under induced subgraphs by L1. [L1]

2.1 These are exactly the two requirements for a hereditary class. [step 1.1, step 1.2, F2] ∎
