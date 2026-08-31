---
id: def-nice-graph
kind: definition
title: "A nice graph"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-blockade-length-and-width,
       def-directional-and-weak-sparsity-between-vertex-sets,
       def-graph-isomorphism-and-complement,
       def-h-free-and-family-free-graph]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VII. The five-vertex path, discussion before Lemma 3.4"
      url: "https://arxiv.org/html/2312.15333v2"
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, niceness discussion"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Definition

Let $H$ be a finite graph. We say that $H$ is **nice** if there exists a real
$d\ge 1$ such that for every $\epsilon\in(0,\tfrac12)$ and every
$\overline H$-free graph $G$ with

$$|V(G)|\ge \epsilon^{-10d^2},$$

there is a $(\lceil\epsilon^{-1}\rceil,\epsilon^{10d^2}|V(G)|)$-blockade
$\mathcal B=(B_1,\dots,B_\ell)$ in $G$ such that for all distinct $i,j\in[\ell]$
the pair $(B_i,B_j)$ is either complete or weakly $\epsilon^d$-sparse.

The complement appears because the source proves niceness for $P_5$ through
$\overline{P_5}$-free graphs. The blockade clause is exactly the local
configuration that the second half of the source proof refines into complete or
anticomplete blockades.
