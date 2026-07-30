---
id: rem-euclidean-topology-dictionary
kind: remark
title: "The product, Euclidean-metric and norm topologies on $\\mathbb{R}^n$ agree, and for $n=1$ they agree with the real-line topology"
status: published
origin: session
deps: [lem-product-topology-on-rn, lem-real-and-metric-notions-agree, thm-all-norms-on-rn-are-equivalent]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "J. R. Munkres, Topology, 2nd ed., §§19, 20"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

For $n \ge 1$, the product topology on $\mathbb{R}^n$ is the metric topology of each of $d_1$, $d_2$, and $d_\infty$ ([[lem-product-topology-on-rn]]). Every norm on $\mathbb{R}^n$ is equivalent to the Euclidean norm, hence induces that same topology ([[thm-all-norms-on-rn-are-equivalent]]). Thus open, closed, compact, connected, and continuous below have one unambiguous Euclidean meaning.

When $n=1$, the Euclidean metric is the usual metric $d_{\mathbb{R}}(s,t)=|s-t|$, and the metric and real-line formulations of continuity and compactness agree ([[lem-real-and-metric-notions-agree]]). This page works throughout with $n \ge 1$.
