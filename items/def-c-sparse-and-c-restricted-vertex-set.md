---
id: def-c-sparse-and-c-restricted-vertex-set
kind: definition
title: "$c$-sparse, $c$-dense and $c$-restricted vertex sets"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-simple-graph, def-graph-adjacency-incidence-neighbourhood-and-degree, def-subgraph-induced-subgraph-and-spanning-subgraph, def-graph-isomorphism-and-complement, def-finite-cardinality]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "Y. Huang, Q. Ju, and X. Zhou, Erdős-Hajnal beyond the five-vertex path, sec. 1.1"
      url: "https://arxiv.org/pdf/2606.06258v2"
pipeline_run: null
---

## Definition

Let $G$ be a finite simple graph and let $c\ge0$ be real. A nonempty vertex set
$X\subseteq V(G)$ is **$c$-sparse** when

$$
|N_G(x)\cap X|\le c|X|
$$

for every $x\in X$, and it is **$c$-dense** when

$$
|(X\setminus\{x\})\setminus N_G(x)|\le c|X|
$$

for every $x\in X$. Thus $c$-dense means that every vertex of $X$ has at most
$c|X|$ non-neighbours inside $X$ other than itself.

A set is **$c$-restricted** when it is $c$-sparse or $c$-dense. The condition is
internal to the induced subgraph $G[X]$ ([[def-subgraph-induced-subgraph-and-spanning-subgraph]]), and the dense clause is the sparse clause read in the complement.

## Remarks

This page keeps the source's maximum-degree normalisation. The edge-density
normalisation appears separately in
[[def-directional-and-weak-sparsity-between-vertex-sets]] and is compared to the
present one by the lemmas immediately following this definition.
