---
id: def-gauge-and-fine-tagged-partition
kind: definition
title: "Gauges and gauge-fine tagged partitions of a compact interval"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-tagged-partition-and-riemann-sum, def-interval]
justified_by: []
forward_refs: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Alessandro Fonda, The Kurzweil-Henstock Integral for Undergraduates, Ch. 1"
      url: "https://dmi.units.it/~fonda/p2017_book_KH.pdf"
    - title: "Andrew Bruckner, Judith Bruckner and Brian Thomson, Real Analysis, Sections 1.2 and 1.21"
      url: "https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf"
pipeline_run: null
---

## Definition

Let $a\le b$. A **gauge** on $[a,b]$ is a function $\delta:[a,b]\to(0,\infty)$. A tagged partition is written

$$P=\{([x_{i-1},x_i],\xi_i):1\le i\le m\},$$

where $a=x_0<\cdots<x_m=b$ and $\xi_i\in[x_{i-1},x_i]$. It is **$\delta$-fine** when

$$[x_{i-1},x_i]\subset(\xi_i-\delta(\xi_i),\xi_i+\delta(\xi_i))$$

for every $i$. Its Riemann sum is $S(f,P)=\sum_{i=1}^m f(\xi_i)(x_i-x_{i-1})$.

When $a=b$, the single degenerate tagged cell $([a,a],a)$ is declared a fine tagged partition for every gauge, and its Riemann sum is $0$. A **fine partial tagged partition** is any finite pairwise interior-disjoint family of cells $([u_j,v_j],\xi_j)$ with $[u_j,v_j]\subseteq[a,b]$, $u_j\le v_j$, and $\xi_j\in[u_j,v_j]$, each satisfying the same gauge-containment condition. The empty family is allowed and has sum $0$.
