---
id: def-directional-and-weak-sparsity-between-vertex-sets
kind: definition
title: "Sparsity of one vertex set to another, and weak sparsity of a pair"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-finite-simple-graph, def-graph-adjacency-incidence-neighbourhood-and-degree, def-edges-between-sets-and-pure-mixed-pairs, def-edge-density-between-vertex-sets, def-c-sparse-and-c-restricted-vertex-set]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Y. Huang, Q. Ju, and X. Zhou, Erdős-Hajnal beyond the five-vertex path, sec. 2"
      url: "https://arxiv.org/pdf/2606.06258v2"
pipeline_run: null
---

## Definition

Let $G$ be a finite simple graph and let $c\ge0$.

- For disjoint nonempty sets $X,Y\subseteq V(G)$, $X$ is **$c$-sparse to $Y$** when every $x\in X$ has at most $c|Y|$
  neighbours in $Y$.
- For nonempty sets $X,Y\subseteq V(G)$, the ordered pair $(X,Y)$ is **weakly $c$-sparse** when
  $e_G(X,Y)\le c|X||Y|$, with the ordered edge count of [[def-edge-density-between-vertex-sets]].
- Such a pair $(X,Y)$ is **weakly $c$-dense** when it is weakly $c$-sparse in the
  complement graph.

The directional notion need not be symmetric, while the weak notion is an
edge-count and so is symmetric. For nonempty $X$, taking $Y=X$ makes weak sparsity the
self-density condition discussed in [[def-edge-density-between-vertex-sets]].
