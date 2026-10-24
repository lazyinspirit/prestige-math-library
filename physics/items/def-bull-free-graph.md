---
id: def-bull-free-graph
kind: definition
title: "A bull-free graph"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-bull-graph, def-h-free-and-family-free-graph]
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
    - title: "Maria Chudnovsky and Shmuel Safra, The Erdős-Hajnal conjecture for bull-free graphs, Section 1"
      url: "https://web.math.princeton.edu/~mchudnov/EHbullfree.pdf"
---

## Definition

A finite simple graph $G$ is **bull-free** when it has no induced copy of the
bull graph ([[def-bull-graph]]). Equivalently, $G$ is bull-free in the sense of
the general induced-subgraph convention of [[def-h-free-and-family-free-graph]].
