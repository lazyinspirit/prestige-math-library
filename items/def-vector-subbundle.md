---
id: def-vector-subbundle
kind: definition
title: "Vector subbundles"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-smooth-vector-bundle-rank-fibre-and-trivial-bundle, def-local-frame-and-global-frame-of-a-vector-bundle, def-linear-subspace]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---
## Definition

Let $\pi:E\to M$ be a smooth rank-$r$ vector bundle, and let $k\in\mathbb N$
satisfy $0\le k\le r$. A subset $S\subseteq E$ is a
**smooth vector subbundle of rank $k$** when:

1. $S\cap E_p$ is a $k$-dimensional linear subspace of $E_p$ for every $p\in M$,
and
2. every point of $M$ has an open neighborhood $U$ with a local frame
   $(s_1,\dots,s_r)$ of $E|_U$ such that $(s_1,\dots,s_k)$ is a local frame of
   the fibrewise subsets $S\cap E_p$: explicitly,
   $$S\cap E_p=\operatorname{span}\{s_1(p),\dots,s_k(p)\}$$
   for every $p\in U$.

In particular, a vector subbundle has constant fibre dimension and is locally
spanned by part of a frame of the ambient bundle.
