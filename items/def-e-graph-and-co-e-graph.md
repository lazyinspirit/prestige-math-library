---
id: def-e-graph-and-co-e-graph
kind: definition
title: "The $E$-graph and co-$E$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
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
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Figure 4"
      url: "https://arxiv.org/pdf/2606.06258v2"
pipeline_run: null
---

## Definition

The **$E$-graph** is the graph on vertices

$$\{p_1,p_2,p_3,p_4,p_5,q\}$$

with edge set

$$\{p_1p_2,p_2p_3,p_3p_4,p_4p_5,p_3q\}.$$

Thus $p_1p_2p_3p_4p_5$ is a five-vertex path and $q$ is a leaf attached to its
middle vertex $p_3$. The **co-$E$ graph** is the complement of this graph.
