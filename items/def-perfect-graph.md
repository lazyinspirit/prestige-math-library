---
id: def-perfect-graph
kind: definition
title: "Perfect graphs"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-subgraph-induced-subgraph-and-spanning-subgraph,
       def-proper-vertex-colouring-and-chromatic-number,
       def-clique-stable-set-and-numbers]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, The Erdos-Hajnal Conjecture - A Survey, Introduction"
      url: "https://arxiv.org/pdf/1606.08827"
pipeline_run: null
---

## Definition

A finite graph $G$ is **perfect** when every induced subgraph $H$ of $G$
satisfies

$$\chi(H)=\omega(H),$$

where $\chi(H)$ is the chromatic number and $\omega(H)$ is the clique number
([[def-proper-vertex-colouring-and-chromatic-number]],
[[def-clique-stable-set-and-numbers]],
[[def-subgraph-induced-subgraph-and-spanning-subgraph]]).

Under the library conventions, the null graph is perfect because its unique
induced subgraph is itself and $\chi(K_0)=\omega(K_0)=0$.
