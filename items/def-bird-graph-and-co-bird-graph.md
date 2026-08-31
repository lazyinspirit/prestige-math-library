---
id: def-bird-graph-and-co-bird-graph
kind: definition
title: "The Bird graph and co-Bird"
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
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Figure 5"
      url: "https://arxiv.org/pdf/2606.06258v2"
pipeline_run: null
---

## Definition

The **Bird graph** is the graph on vertices

$$\{x_1,x_2,x_3,y,z,w\}$$

with edge set

$$\{x_1x_2,x_2x_3,x_1x_3,x_1y,x_2z,yw\}.$$

So $\{x_1,x_2,x_3,y,z\}$ spans the bull, and $w$ is a new leaf attached to the
horn vertex $y$. The **co-Bird graph** is the complement of the Bird graph.
