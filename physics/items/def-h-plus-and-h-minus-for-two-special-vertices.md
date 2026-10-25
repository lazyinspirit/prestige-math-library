---
id: def-h-plus-and-h-minus-for-two-special-vertices
kind: definition
title: "The graphs $H^+$ and $H^-$ for two distinguished vertices"
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
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Section 1.4"
      url: "https://arxiv.org/pdf/2606.06258v2"
pipeline_run: null
---

## Definition

Let $H$ be a finite graph and let $u,v\in V(H)$ be distinct.

The graph $H^+$ is obtained from $H$ by adjoining a new vertex $w$ adjacent to
both $u$ and $v$, and also adjoining the edge $uv$ when it is not already
present.

The graph $H^-$ is obtained from $H$ by adjoining a new vertex $w$ adjacent to
both $u$ and $v$, and deleting the edge $uv$ when it is present.

Thus $H^+$ forces the distinguished pair $u,v$ to be adjacent, while $H^-$
forces it to be nonadjacent, and in both cases the new vertex $w$ is adjacent
exactly to $u$ and $v$.
