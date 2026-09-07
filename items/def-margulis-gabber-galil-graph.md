---
id: def-margulis-gabber-galil-graph
kind: definition
title: "Margulis gabber galil graph"
status: published
origin: pipeline
deps: [def-regular-multigraph-and-normalized-adjacency]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; Chapter8 Construction8.1, p69."
      url: "https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf"
---

## Definition

For integer $m\ge1$, let $V=(\mathbb Z/m\mathbb Z)^2$. The Margulis–Gabber–Galil graph has the following eight slots at $(x,y)$, with all arithmetic modulo $m$:
$$(x+2y,y),\ (x+2y+1,y),\ (x-2y,y),\ (x-2y-1,y),\ (x,y+2x),\ (x,y+2x+1),\ (x,y-2x),\ (x,y-2x-1).$$
Multiplicities and fixed points are retained under [[def-regular-multigraph-and-normalized-adjacency]]. Write $T_1(x,y)=(x+2y,y)$ and $T_2(x,y)=(x,y+2x)$. Pair each forward affine map with its inverse as reverse ports, even when their destinations coincide.
