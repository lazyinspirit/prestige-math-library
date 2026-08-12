---
id: def-extremal-number-turan-graph-and-blowup
kind: definition
title: "Ordinary-subgraph extremal number $\\operatorname{ex}(n,H)$, Turán graph $T_{n,r}$, and balanced blowup $H[s]$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-simple-graph, rem-finite-simple-graph-convention, def-subgraph-induced-subgraph-and-spanning-subgraph, def-standard-complete-bipartite-path-and-cycle-graphs, def-finite-cardinality]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Yufei Zhao, Graph Theory and Additive Combinatorics"
      url: "https://ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf"
    - title: "Reinhard Diestel, Graph Theory, Chapter 7"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch7.pdf"
pipeline_run: null
---

## Definition

Throughout this page, containment means **ordinary subgraph** containment in the sense of [[def-subgraph-induced-subgraph-and-spanning-subgraph]], not induced containment. A graph is **$H$-free** here when it has no ordinary subgraph isomorphic to $H$.

For a finite graph $H$ with at least one edge and $n\in\mathbb N$, define its **extremal number**

$$\operatorname{ex}(n,H):=\max\{e(G):|V(G)|=n\text{ and }G\text{ is }H\text{-free}\}.$$

The family is nonempty because the edgeless graph is $H$-free, and it is finite. For a family $\mathcal H$ of graphs, define $\operatorname{ex}(n,\mathcal H)$ analogously by avoiding every member.

For $r\ge1$, write $n=qr+a$ with $0\le a<r$. The **Turán graph** $T_{n,r}$ is the complete $r$-partite graph with $a$ parts of size $q+1$ and $r-a$ parts of size $q$. Empty parts are allowed, so this also covers $n<r$ and $n=0$.

For a finite graph $H$ and $s\in\mathbb N$, the **balanced blowup** $H[s]$ replaces each vertex $v$ by an independent set $V_v$ of size $s$ and replaces each edge $uv$ by all $s^2$ edges between $V_u$ and $V_v$. Thus $H[0]$ and the blowup of the null graph are null, while $H[1]\cong H$. In particular, $K_r[s]$ is a complete balanced $r$-partite graph, including $K_0[s]$ as the null graph.
