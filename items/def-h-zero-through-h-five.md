---
id: def-h-zero-through-h-five
kind: definition
title: "The graphs $H_0,H_1,\\ldots,H_5$"
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
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Figure 7"
      url: "https://arxiv.org/pdf/2606.06258v2"
pipeline_run: null
---

## Definition

Let $H_0$ be the graph on vertices

$$\{w,v_1,v_2,v_3,v_4,v_5\}$$

whose edge set is

$$\{wv_i:1\le i\le 5\}\cup\{v_1v_2,v_2v_3,v_3v_4,v_4v_5,v_5v_1\}.$$

Thus $H_0$ is the five-wheel with hub $w$ and rim cycle
$v_1v_2v_3v_4v_5v_1$.

For each $i\in\{1,2,3,4,5\}$, define $H_i$ recursively from $H_{i-1}$ by
adjoining a new leaf $v_i'$ adjacent only to $v_i$. In particular, $H_1$ adds a
leaf at $v_1$, and $H_5$ adds one leaf at every rim vertex of the five-wheel.
