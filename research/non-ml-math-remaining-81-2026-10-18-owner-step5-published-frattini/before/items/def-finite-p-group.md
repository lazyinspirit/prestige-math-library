---
id: def-finite-p-group
kind: definition
title: 'A finite $p$-group has order $p^n$ for a prime $p$ and some $n\in\mathbb N$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group, def-finite-cardinality, def-prime, def-nat-power]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "K. Conrad, Group Actions, Section 4"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/gpaction.pdf"
pipeline_run: null
---

## Definition

Let $p$ be a prime natural number ([[def-prime]]). A **finite $p$-group** is a
finite group $P$ ([[def-group]], [[def-finite-cardinality]]) whose order has
the form

$$|P|=p^n$$

for some $n\in\mathbb N$, with natural exponentiation as in
[[def-nat-power]]. The case $n=0$ permits the trivial group. A finite
$p$-group is **nontrivial** exactly when $n\ge 1$.
