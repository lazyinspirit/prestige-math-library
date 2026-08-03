---
id: def-graded-poset-and-rank
kind: definition
title: "Graded poset, rank function, and rank levels"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-partial-order, def-maximal-element]
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

Let $P$ be a finite poset. An element is **minimal** if no element is strictly
below it, the dual of the maximal-element notion ([[def-maximal-element]]). An
element $y$ **covers** $x$ if $x<y$ and there is no $z\in P$ with $x<z<y$. A
**rank function** is a map $\rho:P\to\mathbb N$ such that every minimal element has rank $0$ and

$$\rho(y)=\rho(x)+1$$

whenever $y$ covers $x$. A poset admitting a rank function is **graded**.
Its **rank-$k$ level** is

$$P_k:=\{x\in P:\rho(x)=k\}.$$
