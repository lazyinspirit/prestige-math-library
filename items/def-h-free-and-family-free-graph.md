---
id: def-h-free-and-family-free-graph
kind: definition
title: "$H$-free and $\\mathcal F$-free graphs under the induced-subgraph convention"
status: published
origin: session
deps: [def-induced-embedding-and-induced-copy, def-induced-copy-number]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "ISGCI, Information System on Graph Classes and their Inclusions"
      url: "https://www.cs.sfu.ca/~pavol/graphclasses/"
pipeline_run: null
---

## Definition

For finite graphs $H$ and $G$, the graph $G$ is **$H$-free** when $G$ has no induced copy of $H$ ([[def-induced-embedding-and-induced-copy]]). Equivalently,

$$\operatorname{ind}_H(G)=0$$

([[def-induced-copy-number]]).

For a family $\mathcal F$ of finite graphs, a finite graph $G$ is **$\mathcal F$-free** when it is $H$-free for every $H\in\mathcal F$. Throughout this page, “free” always refers to induced subgraphs. It does not merely prohibit ordinary subgraph copies.
