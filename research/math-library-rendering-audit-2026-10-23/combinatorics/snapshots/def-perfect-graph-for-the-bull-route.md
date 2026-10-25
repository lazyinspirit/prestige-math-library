---
id: def-perfect-graph-for-the-bull-route
kind: definition
title: "A perfect graph"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-clique-stable-set-and-numbers, def-proper-vertex-colouring-and-chromatic-number, def-subgraph-induced-subgraph-and-spanning-subgraph]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-28
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky and Shmuel Safra, The Erdős-Hajnal conjecture for bull-free graphs, Section 2"
      url: "https://web.math.princeton.edu/~mchudnov/EHbullfree.pdf"
---

## Definition

A finite simple graph $G$ is **perfect** when every induced subgraph $H$ of $G$
satisfies

$$\chi(H)=\omega(H),$$

where $\chi(H)$ is the chromatic number and $\omega(H)$ is the clique number
([[def-proper-vertex-colouring-and-chromatic-number]],
[[def-clique-stable-set-and-numbers]],
[[def-subgraph-induced-subgraph-and-spanning-subgraph]]).

Equivalently, every induced subgraph of a perfect graph can be coloured with as
many colours as the size of one of its largest cliques, and no fewer.
