---
id: def-n-d-lambda-graph-and-expander
kind: definition
title: "An $(n,d,\\lambda)$-graph and an expander"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-graph-spectrum-spectral-radius-and-cospectrality]
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
    - title: "O. Pikhurko, Algebraic Methods in Combinatorics, Chapter 14"
      url: "https://opikhurko.warwick.ac.uk/AlgMet.pdf"
---

## Definition

Let $G$ be a finite simple graph on $n\ge2$ vertices. We call $G$ an
**$(n,d,\lambda)$-graph** when:

1. $G$ is $d$-regular;
2. the adjacency eigenvalues satisfy
   $$d=\lambda_1(G)\ge\lambda_2(G)\ge\cdots\ge\lambda_n(G);$$
3. the second-largest eigenvalue obeys $\lambda_2(G)\le\lambda$.

Thus $d-\lambda$ is a lower bound for the actual top spectral gap
$d-\lambda_2(G)$.

In the present page's elementary sense, an **expander** is a graph that is an
$(n,d,\lambda)$-graph with $\lambda<d$.
