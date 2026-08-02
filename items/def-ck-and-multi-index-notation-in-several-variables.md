---
id: def-ck-and-multi-index-notation-in-several-variables
kind: definition
title: "$C^k$ maps and multi-index derivative notation in Euclidean space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-directional-and-partial-derivatives, def-factorial-and-falling-factorial, def-nat-finite-sum-and-product, def-finite-sum, def-integer-power]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "MAT237 notes: Taylor's theorem in several variables"
      url: "https://www.math.toronto.edu/courses/mat237y1/20199/notes/Chapter2/S2.6.html"
pipeline_run: null
---

## Definition

Let $m\ge1$, let $U\subseteq\mathbb R^m$ be open, and let $f:U\to\mathbb R$. A **multi-index** is $\alpha=(\alpha_0,\ldots,\alpha_{m-1})\in\mathbb N^m$. Put

$$|\alpha|:=\sum_{i<m}\alpha_i,\qquad \alpha!:=\prod_{i<m}\alpha_i!,\qquad h^\alpha:=\prod_{i<m}h_i^{\alpha_i}\quad(h\in\mathbb R^m).$$

Here $|\alpha|$ and $\alpha!$ use the natural-number sum and product of [[def-nat-finite-sum-and-product]], and $n!$ is the factorial of [[def-factorial-and-falling-factorial]]. By contrast, $h^\alpha$ is the finite product in $\mathbb R$ of [[def-finite-sum]], with the natural exponents interpreted by [[def-integer-power]]. For the zero multi-index $0$, set $D^0f:=f$. For nonzero $\alpha$, write

$$D^\alpha f:=\partial_0^{\alpha_0}\cdots\partial_{m-1}^{\alpha_{m-1}}f$$

for this displayed, canonical order whenever it exists. Coordinate partial derivatives have the meaning fixed in [[def-directional-and-partial-derivatives]].

For $k\in\mathbb N$, $f$ is of class $C^k$ on $U$ when, for every word $(i_1,\ldots,i_r)$ of coordinate indices with $0\le r\le k$, the iterated derivative $\partial_{i_r}\cdots\partial_{i_1}f$ exists and is continuous on $U$; the word of length $0$ denotes $f$. Thus this definition does **not** presuppose that differently ordered derivatives are equal. Equality of their values is a later theorem under these regularity hypotheses.
