---
id: def-left-six-vertex-prime-h-graph
kind: definition
title: "The left six-vertex prime $\\mathcal H$-graph"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-09-01
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. IV. New graphs with the Erdős-Hajnal property, Figure 1"
      url: "https://arxiv.org/pdf/2307.06455"
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Figure 2"
      url: "https://arxiv.org/pdf/2606.06258v2"
pipeline_run: null
---

## Definition

The **left six-vertex prime $\mathcal H$-graph** is the graph $L$ on vertices

$$\{t_1,t_2,t_3,\ell_1,\ell_2,\ell_3\}$$

with edge set

$$\{t_1t_2,t_2t_3,t_1t_3,\ell_1t_1,\ell_2t_2,\ell_3t_3\}.$$

Thus $t_1,t_2,t_3$ span a triangle, and each $\ell_i$ is a leaf attached only
to the corresponding triangle vertex $t_i$.
