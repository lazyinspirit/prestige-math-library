---
id: def-basic-and-composite-bull-free-graphs
kind: definition
title: "Basic and composite bull-free graphs"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-bull-free-graph, def-hole-antihole-and-odd-hole]
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

A finite graph $G$ is **composite** when:

1. $G$ is bull-free; and
2. there exists an odd hole or odd antihole $A$ in $G$ such that some vertex
   of $V(G)\setminus V(A)$ is complete to $V(A)$ and some vertex of
   $V(G)\setminus V(A)$ is anticomplete to $V(A)$.

A bull-free graph is **basic** when it is not composite.

Thus a basic bull-free graph forbids exactly the odd hole and odd antihole
configurations that carry both a complete and an anticomplete outside witness.
