---
id: def-star-expansion-of-a-graph
kind: definition
title: "The star-expansion of a graph"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-simple-graph,
       def-subgraph-induced-subgraph-and-spanning-subgraph,
       def-graph-isomorphism-and-complement]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-31
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdős-Hajnal for graphs with no 5-hole, Section 6"
      url: "https://arxiv.org/html/2102.04994v1"
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Theorem 1.9 discussion"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Definition

Let $H$ be a finite graph with vertex set $\{b_1,\dots,b_k\}$. The
**star-expansion** of $H$ is the graph $H^\star$ obtained by adjoining new
vertices

$$a_1,\dots,a_k,v$$

to $H$ and declaring the edges as follows:

1. the induced subgraph on $\{b_1,\dots,b_k\}$ is exactly $H$;
2. for each $i\in[k]$, the tooth $a_i$ is adjacent to $b_i$;
3. the root $v$ is adjacent to every tooth $a_i$; and
4. there are no other edges incident with the new vertices.

Thus every tooth has degree $2$ unless $b_i=v$, which never happens, and the
new vertices induce a star centered at $v$. When $H$ is an induced subgraph of
another graph, the star-expansion is understood up to graph isomorphism in the
sense of [[def-graph-isomorphism-and-complement]].
