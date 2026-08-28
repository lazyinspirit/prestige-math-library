---
id: def-bull-graph
kind: definition
title: "The bull graph"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-simple-graph]
justified_by: []
aliases: []
landmark: false
verification:
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

The **bull graph** is the finite simple graph on vertices
$\{x_1,x_2,x_3,y,z\}$ with edge set

$$\{x_1x_2,x_2x_3,x_1x_3,x_1y,x_2z\}.$$

Thus $\{x_1,x_2,x_3\}$ spans a triangle, and $y$ and $z$ are pendant vertices
attached to two distinct vertices of that triangle.
