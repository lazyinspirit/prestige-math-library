---
id: def-shadow-of-a-uniform-family
kind: definition
title: "The lower and upper shadows of a uniform set family"
status: published
origin: session
deps: [def-binomial-coefficient]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-07-31
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "M. Keller and W. T. Trotter, Applied Combinatorics, §6.2"
      url: "https://appliedcombinatorics.org/book/s_posets_subset-lattice.html"
pipeline_run: null
---

## Definition

Let $A$ be a finite set and let $\mathcal F\subseteq[A]^k$ be a
**$k$-uniform family** ([[def-binomial-coefficient]]). Its **lower shadow** is

$$\partial\mathcal F:=\{\,R\in[A]^{k-1}:R\subset S\text{ for some }S\in\mathcal F\,\}$$

when $k\ge1$, and $\partial\mathcal F:=\varnothing$ when $k=0$. Its
**upper shadow** is

$$\nabla\mathcal F:=\{\,T\in[A]^{k+1}:S\subset T\text{ for some }S\in\mathcal F\,\}.$$

If $k=|A|$, the upper shadow is empty. Both shadows consist of the immediate
neighbours of $\mathcal F$ one rank below or above it in the Boolean lattice.
