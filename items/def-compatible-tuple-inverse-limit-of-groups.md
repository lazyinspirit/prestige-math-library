---
id: def-compatible-tuple-inverse-limit-of-groups
kind: definition
title: "The inverse limit is the set of compatible tuples in the Cartesian product"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-directed-set-and-inverse-system-of-groups, def-cartesian-product]
verification:
  audited: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Brian Osserman, Math 6112 notes on inverse limits and profinite groups"
      url: "https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf"
    - title: "H. W. Lenstra, Profinite groups and Galois groups"
      url: "https://websites.math.leidenuniv.nl/algebra/Lenstra-Profinite.pdf"
---

## Definition

Let $((G_i),\varphi_{ij})$ be an inverse system of groups indexed by a directed
set $I$ ([[def-directed-set-and-inverse-system-of-groups]],
[[def-cartesian-product]]). The **inverse limit** is the subset

$$\varprojlim G_i:=\Bigl\{(g_i)_{i\in I}\in\prod_{i\in I}G_i : \varphi_{ij}(g_j)=g_i\text{ for every } i\le j\Bigr\}.$$

Its elements are the **compatible tuples**. Compatibility means exactly that
all coordinates agree with the transition maps.
