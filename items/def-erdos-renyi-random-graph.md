---
id: def-erdos-renyi-random-graph
kind: definition
title: "The Erdős-Rényi finite random graph $G(n,p)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-product-of-finite-probability-spaces, def-bernoulli-and-binomial-random-variables, def-finite-simple-graph, def-binomial-coefficient]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Matousek and J. Vondrak, The Probabilistic Method, Definition 1.1.2"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
pipeline_run: null
---

## Definition

Let $n\in\mathbb N$ and $p\in[0,1]$. The **Erdős-Rényi random graph** $G(n,p)$ is the finite simple graph on the labelled vertex set $[n]$ in which the $\binom n2$ possible edge indicators are mutually independent Bernoulli$(p)$ variables ([[def-bernoulli-and-binomial-random-variables]]). Equivalently, its probability space is the product of one Bernoulli edge space for every two-element subset of $[n]$.
