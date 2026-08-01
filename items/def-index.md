---
id: def-index
kind: definition
title: "The coset set $G/H$ and the index $[G:H]$ of a subgroup"
status: published
origin: session
deps: [lem-coset-partition, lem-left-and-right-cosets-equinumerous, def-finite-cardinality]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, Cosets and Lagrange's Theorem"
      url: "https://judsonbooks.org/abstract-algebra-theory-and-applications/"
pipeline_run: null
---

## Definition

Let $H\le G$. The **left coset set** is

$$G/H:=\{gH:g\in G\}.$$

By [[lem-coset-partition]], its elements are exactly the blocks of the coset
partition of $G$. The **index** of $H$ in $G$ is

$$[G:H]:=|G/H|$$

when $G/H$ is finite, with finite cardinality as in
[[def-finite-cardinality]]. If $G/H$ is not finite, write $[G:H]=\infty$.
Here $\infty$ is a symbol, not a natural number, and no arithmetic with it is
defined.

The right coset set has the same finite or infinite size because
[[lem-left-and-right-cosets-equinumerous]] gives an explicit bijection between
the two coset sets. Thus the index does not depend on choosing left rather than
right cosets.
