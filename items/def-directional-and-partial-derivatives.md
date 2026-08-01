---
id: def-directional-and-partial-derivatives
kind: definition
title: "Directional derivatives and partial derivatives of a map $U\\subseteq\\mathbb{R}^m\\to\\mathbb{R}^n$"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-vector-valued-derivative-and-integral, def-vector-valued-functions-limits-and-continuity, lem-standard-basis-of-f-n]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §8.3"
      url: "https://www.jirka.org/ra/html/sec_svtheder.html"
pipeline_run: null
---

## Definition

Let $U\subseteq\mathbb R^m$, $a\in U$, $v\in\mathbb R^m$, and $f:U\to\mathbb R^n$. If the line map $t\mapsto f(a+tv)$ is defined near $0$, its derivative at $0$ is the **directional derivative**

$$D_vf(a):=\lim_{t\to0}\frac{f(a+tv)-f(a)}{t}.$$

For a standard basis vector $e_j$ ([[lem-standard-basis-of-f-n]]), $D_{e_j}f(a)$ is the **$j$th partial derivative**, written $\partial_jf(a)$. These are ordinary vector-valued one-variable derivatives in the sense of [[def-vector-valued-derivative-and-integral]].
