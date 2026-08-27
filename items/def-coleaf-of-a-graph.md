---
id: def-coleaf-of-a-graph
kind: definition
title: "Co-leaves of a finite graph"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-graph-adjacency-incidence-neighbourhood-and-degree, def-graph-isomorphism-and-complement, def-tree-forest-and-leaf]
justified_by: []
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
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Theorem 1.7"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Definition

Let $G$ be a finite graph and let $v\in V(G)$. We say that $v$ is a
**co-leaf** of $G$ if $v$ is a leaf of the complement graph $\overline G$.

Equivalently, $v$ is adjacent in $G$ to every vertex of $G$ except one. In
degree language,

$$\deg_G(v)=|V(G)|-2.$$

Thus a co-leaf is the complement-theoretic analogue of an ordinary leaf.
