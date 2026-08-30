---
id: def-principal-part-at-an-isolated-point
kind: definition
title: "The principal part at an isolated singularity"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-laurent-expansion-annulus, thm-laurent-regular-principal-decomposition]
justified_by: []
forward_refs: []
aliases: []
landmark: false
  audited: 2026-08-30
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §9.4"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "M. Weber, Complex Analysis, §3.3"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Definition

Let $a\in\mathbb C$, let $R>0$, and let $f$ be holomorphic on the punctured disc
$0<|z-a|<R$. By [[thm-laurent-expansion-annulus]], the function $f$ has a
Laurent expansion about $a$ on that punctured disc. By
[[thm-laurent-regular-principal-decomposition]], this expansion splits uniquely
into its regular and principal parts.

The **principal part of $f$ at $a$** is the negative-power part of that Laurent
expansion:

$$\sum_{m\ge1}c_{-m}(z-a)^{-m}.$$

For Mittag-Leffler data, a **prescribed principal part at $a$** means a finite
sum

$$p_a(z)=\sum_{m=1}^{M}c_{-m}(z-a)^{-m}.$$

This is exactly the shape of the principal part of a pole whose order is at
most $M$, and its order is exactly $M$ when $c_{-M}\ne0$.

## Remarks

The point of the adjective "prescribed" is that one starts with the negative
Laurent polynomial and asks for a meromorphic function having it at $a$. The
pole order is then the largest $m$ with $c_{-m}\ne0$.
