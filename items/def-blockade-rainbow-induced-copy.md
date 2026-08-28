---
id: def-blockade-rainbow-induced-copy
kind: definition
title: "A blockade-rainbow induced copy"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-blockade-length-and-width,
       def-induced-embedding-and-induced-copy,
       def-subgraph-induced-subgraph-and-spanning-subgraph]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdos-Hajnal for graphs with no 5-hole, Section 6"
      url: "https://arxiv.org/html/2102.04994v1"
pipeline_run: null
---

## Definition

Let $G$ be a graph and let $\mathcal B=(B_1,\dots,B_t)$ be a blockade in $G$.
An induced subgraph $H$ of $G$ is **$\mathcal B$-rainbow** when

$$V(H)\subseteq V(\mathcal B)\qquad\text{and}\qquad |B_i\cap V(H)|\leq 1\quad\text{for every }i\in[t].$$

Equivalently, $H$ lies inside the support of the blockade and each block
contributes at most one vertex to it
([[def-blockade-length-and-width]],
[[def-subgraph-induced-subgraph-and-spanning-subgraph]]).

We say that a graph $F$ has a **$\mathcal B$-rainbow induced copy** in $G$ when
$G$ contains an induced copy of $F$ whose image is $\mathcal B$-rainbow
([[def-induced-embedding-and-induced-copy]]).
