---
id: def-multivariable-taylor-polynomial
kind: definition
title: "The multivariable Taylor polynomial in multi-index notation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-ck-and-multi-index-notation-in-several-variables, def-taylor-polynomial-and-remainder, def-canonical-natural, def-finite-sum]
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

For a natural $k$, a map $f:U\subseteq\mathbb R^m\to\mathbb R$ with the derivatives $D^\alpha f(a)$ for $|\alpha|\le k$, and with $\iota:\mathbb N\to\mathbb R$ the canonical embedding of [[def-canonical-natural]], the **Taylor polynomial of degree at most $k$ at $a$** is

$$T_kf(a;h):=\sum_{|\alpha|\le k}\frac{D^\alpha f(a)}{\iota(\alpha!)}h^\alpha.$$

The multi-index conventions are those of [[def-ck-and-multi-index-notation-in-several-variables]], and the displayed sum is the real finite sum of [[def-finite-sum]]. When $m=1$, this agrees with the polynomial of [[def-taylor-polynomial-and-remainder]].
