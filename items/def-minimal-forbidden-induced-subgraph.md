---
id: def-minimal-forbidden-induced-subgraph
kind: definition
title: "Minimal forbidden induced subgraphs and forbidden bases"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-hereditary-graph-class, def-h-free-and-family-free-graph, def-induced-embedding-and-induced-copy, def-subgraph-induced-subgraph-and-spanning-subgraph]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Valerio Boncompagni, On hereditary graph classes defined by forbidding Truemper configurations (PhD thesis, 2018)"
      url: "https://etheses.whiterose.ac.uk/id/eprint/23386/1/main.pdf"
pipeline_run: null
---

## Definition

Let $\mathcal C$ be a hereditary class. A finite graph $H$ is a **minimal forbidden induced subgraph** for $\mathcal C$ when

$$H\notin\mathcal C,$$

but every proper induced subgraph $H[W]$ with $W\subsetneq V(H)$ belongs to $\mathcal C$ ([[def-subgraph-induced-subgraph-and-spanning-subgraph]]).

The **minimal forbidden basis** $\mathcal B(\mathcal C)$ is the class of all such graphs, understood up to isomorphism. More generally, a family $\mathcal F$ is a **forbidden induced-subgraph basis** for $\mathcal C$ when $G\in\mathcal C$ exactly when $G$ is $\mathcal F$-free ([[def-h-free-and-family-free-graph]]). Minimality here concerns proper induced subgraphs, not ordinary subgraphs ([[def-induced-embedding-and-induced-copy]], [[def-hereditary-graph-class]]).
