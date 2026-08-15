---
id: def-graph-edit-distance-and-epsilon-far
kind: definition
title: "Graph edit distance and being $\\epsilon$-far from an induced-hereditary property"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-simple-graph, def-hereditary-graph-class]
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "D. Conlon and J. Fox, Graph removal lemmas, sec. 2.3"
      url: "https://arxiv.org/pdf/1211.3487"
pipeline_run: null
---

## Definition

For two finite simple graphs $G,G'$ on the same vertex set, their **edit distance** is
$$\operatorname{dist}(G,G'):=|E(G)\mathbin\triangle E(G')|,$$
the number of unordered vertex pairs whose adjacency must be changed to turn $G$ into $G'$. If $G$ has order $n$ and $\mathcal P$ is a hereditary graph property ([[def-hereditary-graph-class]]), then $G$ is **$\epsilon$-far from $\mathcal P$** when
$$\operatorname{dist}(G,G')\ge\epsilon n^2$$
for every graph $G'\in\mathcal P$ on $V(G)$. Edits may delete edges or add nonedges.
