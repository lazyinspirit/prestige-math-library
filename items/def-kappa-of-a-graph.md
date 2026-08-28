---
id: def-kappa-of-a-graph
kind: definition
title: "The parameter kappa(G)=alpha(G)omega(G)"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-clique-stable-set-and-numbers]
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
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdos-Hajnal for graphs with no 5-hole, Introduction"
      url: "https://arxiv.org/html/2102.04994v1"
pipeline_run: null
---

## Definition

For a finite graph $G$, define

$$\kappa(G):=\alpha(G)\omega(G),$$

where $\alpha(G)$ and $\omega(G)$ are the stability number and clique number of
$G$ ([[def-clique-stable-set-and-numbers]]).

In particular, $\kappa(K_0)=0$ because both factors vanish on the null graph.
