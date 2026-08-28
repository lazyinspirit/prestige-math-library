---
id: def-hole-antihole-and-odd-hole
kind: definition
title: "Holes, antiholes, and odd holes"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-graph-isomorphism-and-complement, def-graph-walk-trail-path-and-cycle, def-standard-complete-bipartite-path-and-cycle-graphs]
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

A **hole** in a finite graph is an induced cycle of length at least $4$
([[def-graph-walk-trail-path-and-cycle]],
[[def-standard-complete-bipartite-path-and-cycle-graphs]]).

An **antihole** is the complement of a hole
([[def-graph-isomorphism-and-complement]]). A hole or antihole is **odd** when
it has an odd number of vertices.

Thus $C_5$ is both an odd hole and an odd antihole, because the complement of a
$5$-cycle is again a $5$-cycle.
