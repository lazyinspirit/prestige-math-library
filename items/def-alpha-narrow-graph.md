---
id: def-alpha-narrow-graph
kind: definition
title: "An $\\alpha$-narrow graph"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-good-function-on-a-graph, def-real-power]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-28
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, The Erdős-Hajnal Conjecture: A Survey, Section 2"
      url: "https://web.math.princeton.edu/~mchudnov/EHsurvey.pdf"
    - title: "Maria Chudnovsky and Shmuel Safra, The Erdős-Hajnal conjecture for bull-free graphs, Section 1"
      url: "https://web.math.princeton.edu/~mchudnov/EHbullfree.pdf"
---

## Definition

Let $\alpha>0$ be real. A finite graph $G$ is **$\alpha$-narrow** when every
good function $g$ on $G$ satisfies

$$\sum_{v\in V(G)} g(v)^\alpha\le1$$

([[def-good-function-on-a-graph]], [[def-real-power]]).

In particular, a graph is **one-narrow** when every good function has total
weight at most $1$, and it is **two-narrow** when every good function has sum of
squares at most $1$. The source's word *narrow* corresponds to two-narrow in
this notation.
