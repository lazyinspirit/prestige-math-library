---
id: def-graph-adjacency-incidence-neighbourhood-and-degree
kind: definition
title: "Adjacency, incidence, open and closed neighbourhoods, vertex degree, minimum degree and maximum degree"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-finite-simple-graph, def-finite-cardinality]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "University of Lethbridge, Combinatorics: A Guided Tour, Graphs and Walks"
      url: "https://opentext.uleth.ca/Combinatorics/ch_graphs-walks.html"
pipeline_run: null
---

## Definition

Let $G=(V,E)$ be a graph ([[def-finite-simple-graph]]).

Distinct vertices $u,v$ are **adjacent**, or **neighbours**, when
$\{u,v\}\in E$. A vertex $v$ and an edge $e$ are **incident** when $v\in e$.
The **open neighbourhood** and **closed neighbourhood** of $v$ are

$$N_G(v):=\{\,u\in V:\{u,v\}\in E\,\},\qquad N_G[v]:=N_G(v)\cup\{v\}.$$

The **degree** of $v$ is $\deg_G(v):=|N_G(v)|$, equivalently the number of edges
incident with $v$. A graph is **$r$-regular** when every vertex has degree $r$;
it is **cubic** when it is $3$-regular. The multiset of the vertex degrees,
usually written in nonincreasing order, is the **degree sequence**.

When $V\ne\varnothing$, the **minimum degree** and **maximum degree** are

$$\delta(G):=\min_{v\in V}\deg_G(v),\qquad \Delta(G):=\max_{v\in V}\deg_G(v).$$

They are defined because $V$ is a nonempty finite set
([[def-finite-cardinality]]). Neither $\delta(G)$ nor $\Delta(G)$ is defined for
the null graph.
