---
id: def-simplicial-path-reduced-path-cycle-and-connectedness
kind: definition
title: "Finite simplicial paths, reduced paths, cycles, and connectedness"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-oriented-graph-with-edge-reversal]
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
    - title: "Jean-Pierre Serre, Trees"
      url: "https://www.scribd.com/document/551505445/Jean-Pierre-Serre-Trees-Springer-Verlag-1980"
    - title: "Yuriy Tumarkin, Groups Acting on Trees"
      url: "https://www.scribd.com/document/825918235/trees"
---

## Definition

Let $X=(V,E)$ be an oriented graph in the sense of
[[def-oriented-graph-with-edge-reversal]].

A **path** in $X$ is a finite alternating sequence

$$v_0,e_1,v_1,\dots,e_n,v_n$$

with $o(e_i)=v_{i-1}$ and $t(e_i)=v_i$ for each $i$. Its **length** is $n$. The
path is **closed** when $v_0=v_n$, and **reduced** when

$$e_{i+1}\ne\bar e_i\qquad(1\le i<n).$$

A **cycle** is a nontrivial reduced closed path. Vertices $v,w\in V$ are
**connected** when some path joins them, and $X$ is **connected** when every
two vertices are connected.

All paths on this page are finite, even when $V$ is infinite.
