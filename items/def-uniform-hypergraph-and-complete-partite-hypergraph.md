---
id: def-uniform-hypergraph-and-complete-partite-hypergraph
kind: definition
title: "$r$-uniform hypergraphs and complete balanced $r$-partite $r$-graphs $K^{(r)}_{s,\\ldots,s}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-binomial-coefficient, def-finite-cardinality, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Yufei Zhao, Graph Theory and Additive Combinatorics"
      url: "https://ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf"
pipeline_run: null
---

## Definition

For $r\ge1$, an **$r$-uniform hypergraph** is a pair $(V,E)$ with $V$ finite and $E\subseteq[V]^r$. Its edges are $r$-element vertex sets. Ordinary subhypergraph containment means injectively mapping vertices so that every edge maps to an edge.

For $s\ge1$, the **complete balanced $r$-partite $r$-graph**

$$K^{(r)}_{s,\ldots,s}$$

has disjoint vertex parts $V_1,\ldots,V_r$, each of size $s$, and one hyperedge for every transversal choosing exactly one vertex from each part. For $r=2$ this is the ordinary complete bipartite graph $K_{s,s}$.

For an $r$-uniform hypergraph $F$ with an edge, $\operatorname{ex}(n,F)$ denotes the maximum number of hyperedges in an $n$-vertex $F$-free $r$-uniform hypergraph. The edgeless $r$-graph is an admissible candidate, and the family of possible edge sets is finite, so the maximum exists. The uniformity is determined by $F$.
