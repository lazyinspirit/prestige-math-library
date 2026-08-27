---
id: def-pattern-graph-of-a-pure-blockade
kind: definition
title: "The pattern graph of a pure blockade"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-complete-anticomplete-pure-and-x-sparse-blockades]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdős-Hajnal for graphs with no 5-hole"
      url: "https://arxiv.org/html/2102.04994v1"
pipeline_run: null
---

## Definition

Let $\mathcal{B}=(B_1,\dots,B_t)$ be a pure blockade in a graph $G$. Its
**pattern graph** is the graph $P(\mathcal{B})$ with vertex set $[t]$ in which
$i$ and $j$ are adjacent exactly when $B_i$ is complete to $B_j$.

Because the blockade is pure, every unordered pair of distinct blocks is either
complete or anticomplete, so this graph is well defined. A pattern graph is
called **$P_4$-free** when it contains no induced four-vertex path.
